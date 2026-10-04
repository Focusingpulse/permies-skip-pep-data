/* ============================================================================
   The Creative Village — event instrument
   File: village-track.js          Added: 2026-10-04

   WHAT THIS IS
   A small, dependency-free event emitter so the Village can answer questions it
   currently cannot: how many people start, where they stop, whether they finish,
   whether anyone shares. It reports COUNTS AND EVENTS ONLY.

   WHAT IT DELIBERATELY DOES NOT DO  (this is the important half)
   - No cookies. No persistent visitor id. The session id lives in sessionStorage
     and dies with the tab, so a person cannot be followed between sessions.
   - No names, no emails, no ages, no player names, no free text.
   - No fingerprints, no IP logging by us (the endpoint may see an IP in transit;
     we do not store it).
   - Children use this game. Nothing here profiles a child, and nothing here is
     personally identifying. Keep it that way.
   - Respects Do Not Track and Global Privacy Control: if either is set, the
     module goes silent.

   HOW TO TURN IT ON
   Set CFG.endpoint (or a provider) below, or write a config into localStorage:
       localStorage.setItem('rpg_track', JSON.stringify({endpoint:'https://...'}))
   The game already uses this saved-config pattern for its webhook, so this
   follows the same convention.

   EVENT VOCABULARY (fixed; add names here before firing them anywhere)
     session_start      lang, hasSave, tier
     quest_panel_open   qid
     quest_blocked      qid, reason      <- "what are they stuck on"
     quest_complete     qid, guild, tier, roles, hasRecord
     share_click        qid              <- someone posted to the forum
     session_end        sec, quests, tier

   DIMENSIONS ARE BUCKETED ON PURPOSE. Screen width and session length are sent
   as coarse buckets, not exact values, so no event is a fingerprint.
   ========================================================================== */
(function () {
  'use strict';

  var CFG = {
    endpoint: '',      // POST target, e.g. https://village-track.<account>.workers.dev/e
    provider: '',      // alternatively: 'umami' | 'plausible' | 'goatcounter'
    site: '',          // provider site code, where the provider needs one
    enabled: true
  };

  // Runtime override, same convention the game already uses for its webhook.
  try {
    var saved = JSON.parse(localStorage.getItem('rpg_track') || 'null');
    if (saved && typeof saved === 'object') {
      for (var k in saved) { if (Object.prototype.hasOwnProperty.call(CFG, k)) CFG[k] = saved[k]; }
    }
  } catch (e) { /* storage blocked: run on defaults */ }

  var dnt = (navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes' ||
             window.doNotTrack === '1' || navigator.globalPrivacyControl === true);

  var live = !!(CFG.enabled && !dnt && (CFG.endpoint || CFG.provider));

  // Session id: random, tab-scoped, never written anywhere durable.
  var sid;
  try { sid = sessionStorage.getItem('v_sid'); } catch (e) {}
  if (!sid) {
    sid = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    try { sessionStorage.setItem('v_sid', sid); } catch (e) {}
  }

  var startedAt = Date.now();
  var fired = {};

  function bucketWidth() {
    var w = window.innerWidth || 0;
    if (w < 480) return 'phone';
    if (w < 900) return 'tablet';
    return 'desktop';
  }

  function bucketSeconds(s) {
    if (s < 60) return '<1m';
    if (s < 300) return '1-5m';
    if (s < 900) return '5-15m';
    if (s < 3600) return '15-60m';
    return '>1h';
  }

  function clean(p) {
    var out = {};
    if (!p) return out;
    for (var k in p) {
      var v = p[k];
      if (v === null || v === undefined) continue;
      if (typeof v === 'number') { out[k] = Math.round(v); continue; }
      if (typeof v === 'boolean') { out[k] = v; continue; }
      // strings: cap length so no free text can ride along
      out[k] = String(v).slice(0, 40);
    }
    return out;
  }

  function toProvider(name, p) {
    try {
      if (CFG.provider === 'umami' && window.umami && window.umami.track) {
        window.umami.track(name, p);
        return true;
      }
      if (CFG.provider === 'plausible' && window.plausible) {
        window.plausible(name, { props: p });
        return true;
      }
      if (CFG.provider === 'goatcounter' && window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: name, title: name, event: true });
        return true;
      }
    } catch (e) { /* never break the game for a metric */ }
    return false;
  }

  function send(name, props) {
    try {
      if (!live) return false;
      var payload = clean(props);
      if (CFG.provider && toProvider(name, payload)) return true;
      if (!CFG.endpoint) return false;
      var body = JSON.stringify({
        e: name, s: sid, t: Date.now(), w: bucketWidth(), p: payload
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(CFG.endpoint, new Blob([body], { type: 'application/json' }));
        return true;
      }
      fetch(CFG.endpoint, { method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true });
      return true;
    } catch (e) {
      return false;
    }
  }

  function once(key, name, props) {
    if (fired[key]) return;
    fired[key] = 1;
    send(name, props);
  }

  window.VillageTrack = {
    event: send,
    once: once,
    isLive: function () { return live; },
    config: CFG,
    sessionId: sid,
    setEnabled: function (on) { CFG.enabled = !!on; live = !!(on && !dnt && (CFG.endpoint || CFG.provider)); }
  };

  // End of session: duration and the furthest thing that happened.
  window.addEventListener('pagehide', function () {
    var tier = '';
    try { tier = window.__villageTier || ''; } catch (e) {}
    var q = 0;
    try { q = (window.completedQuests || []).length; } catch (e) {}
    send('session_end', { sec: bucketSeconds((Date.now() - startedAt) / 1000), quests: q, tier: tier });
  }, { capture: true });

})();
