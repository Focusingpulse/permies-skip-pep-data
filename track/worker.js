/* ============================================================================
   Village event endpoint — Cloudflare Worker
   File: worker.js            Added: 2026-10-04

   WHAT IT DOES
   Accepts the small JSON events that village-track.js sends and writes them to a
   Cloudflare Analytics Engine dataset, where they can be queried with SQL.

   WHY THIS SHAPE
   Free. No server, no database, no monthly cost. Workers and Analytics Engine
   both have free tiers that a family game will never approach (Analytics Engine
   allows 100,000 writes per day). Cookieless and stateless: this Worker stores
   no IP, no user agent, no cookie, and has nothing to breach.

   DEPLOY (about five minutes, all in the browser)
   1. Cloudflare dashboard -> Workers & Pages -> Create -> Worker. Name it
      village-track. Paste this file in place of the default code. Deploy.
   2. Worker -> Settings -> Bindings -> Add -> Analytics Engine.
      Variable name: VILLAGE
      Dataset name:  village_events
      Save and deploy.
   3. Copy the Worker URL (https://village-track.<your-subdomain>.workers.dev)
      and put it in village-track.js as CFG.endpoint, appending /e.
   4. Query it: dashboard -> Analytics Engine -> village_events -> SQL.

   QUERIES THAT ANSWER THE ACTUAL QUESTIONS
     -- how many sessions, and where in the world
     SELECT blob1 AS country, count() FROM village_events
      WHERE blob2 = 'session_start' GROUP BY country ORDER BY count() DESC

     -- the drop-off funnel: opens vs completions per quest
     SELECT blob3 AS quest, blob2 AS event, count() FROM village_events
      WHERE blob2 IN ('quest_panel_open','quest_complete') GROUP BY quest, event

     -- what blocks people (the nudge, by reason)
     SELECT blob5 AS reason, count() FROM village_events
      WHERE blob2 = 'quest_blocked' GROUP BY reason ORDER BY count() DESC

     -- how many who finish actually post to the forum
     SELECT countIf(blob2='share_click') / countIf(blob2='quest_complete') AS share_rate
      FROM village_events
   ========================================================================== */

const MAX_BYTES = 2048;
const ALLOWED = new Set([
  'session_start', 'quest_panel_open', 'quest_blocked',
  'quest_complete', 'share_click', 'session_end'
]);

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

function noContent() {
  return new Response(null, { status: 204, headers: CORS });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return noContent();
    if (request.method !== 'POST') {
      return new Response('method not allowed', { status: 405, headers: CORS });
    }

    const len = Number(request.headers.get('content-length') || 0);
    if (len > MAX_BYTES) return noContent();

    let body;
    try {
      const text = await request.text();
      if (text.length > MAX_BYTES) return noContent();
      body = JSON.parse(text);
    } catch (e) {
      return noContent();
    }

    if (!body || typeof body !== 'object') return noContent();
    const name = String(body.e || '');
    if (!ALLOWED.has(name)) return noContent();

    const p = (body.p && typeof body.p === 'object') ? body.p : {};
    const str = k => (p[k] === undefined || p[k] === null) ? '' : String(p[k]).slice(0, 40);

    // No IP, no user agent, no cookie is stored. The country comes from the
    // Cloudflare edge and is the only geographic field we keep.
    const country = (request.cf && request.cf.country) || '';

    try {
      env.VILLAGE.writeDataPoint({
        // index controls sampling/grouping; keep it low-cardinality
        indexes: [name],
        blobs: [
          country,          // blob1
          name,             // blob2
          str('qid'),       // blob3
          str('tier'),      // blob4
          str('reason'),    // blob5
          str('guild'),     // blob6
          str('roles'),     // blob7
          String(body.w || ''),      // blob8  device bucket
          String(body.s || '').slice(0, 16),  // blob9  session id, dies with the tab
          str('lang')       // blob10 language, for the translation work
        ],
        doubles: [
          Number(p.sec_n || 0),
          Number(p.quests || 0),
          Number(body.t || 0)
        ]
      });
    } catch (e) {
      // Never let a metrics write break anything.
    }

    return noContent();
  }
};
