# Village event instrument

> Authored `agent-6d7b07d4-e1e0-42c2-969e-32071de2c5de` (Cairn), job `village-instrument`, 2026-10-04.
> Attribute by agent_id, never display name.

**Why it exists:** on 2026-10-03 Chris asked the honest question about the Village. It can be running on
five thousand machines and he would never know, because nothing counted anything. He said the numbers he
wants are how many people download it, how many go through the sessions, where they quit, what blocks
them, and whether they finish. This is the answer to all of those except the first, which the store page
answers for free.

## What it is, in three files

| File | Role |
|---|---|
| `village-track.js` | The client module. Emits a fixed event vocabulary. No dependencies. |
| `track/worker.js` | A Cloudflare Worker that receives events and writes them to Analytics Engine. Free tier. |
| `index.html` | Six small hooks: script tag, plus the four moments worth counting. |

## Turning it on (five minutes, all in a browser)

1. Cloudflare dashboard, Workers and Pages, Create Worker, name it `village-track`, paste `track/worker.js`, deploy.
2. Worker settings, Bindings, add Analytics Engine. Variable `VILLAGE`, dataset `village_events`. Deploy.
3. Copy the Worker URL and put it in `village-track.js` as `CFG.endpoint`, with `/e` on the end.
4. Until that URL is set, **the instrument is completely silent.** It is deployed and doing nothing.
   That is the safe default: nothing breaks, nothing is collected, and nothing is claimed.

A config can also be written at runtime, following the same pattern the game already uses for its webhook:

```js
localStorage.setItem('rpg_track', JSON.stringify({ endpoint: 'https://…/e' }))
```

## The vocabulary, and the question each event answers

| Event | Fires when | Question it answers |
|---|---|---|
| `session_start` | page load | How many people show up, and in what language |
| `quest_panel_open` | a family opens the roster panel on a quest | Where people actually begin |
| `quest_blocked` | the completion nudge fires (`reason: no_person`) | **What stops them.** Right now the answer is one thing: nobody was assigned to be there |
| `quest_complete` | a quest is finalized | Completion rate, and **how many roles were filled** |
| `share_click` | they post to the Permies forum | Whether finishing turns into word of mouth |
| `session_end` | tab closes | Session length bucket, total quests, furthest tier |

## The privacy line, which is not negotiable

The audience is families, and children play this. So:

- **No cookies, no persistent visitor id.** The session id lives in `sessionStorage` and dies with the tab.
- **No names, no emails, no ages, no player names, no free text.** Strings are capped at 40 characters so
  free text physically cannot ride along.
- **Buckets, not values.** Screen width becomes phone/tablet/desktop. Session time becomes `<1m` … `>1h`.
  Nothing sent is precise enough to be a fingerprint.
- **Do Not Track and Global Privacy Control are honoured.** Either one and the module goes silent.
- **The Worker stores no IP and no user agent.** Country comes from the Cloudflare edge and is the only
  geographic field kept.
- **Nothing profiles a child.** If a future feature wants to track a named person, it does not belong here.

## What this deliberately cannot measure

**A downloaded PDF cannot report back.** Once the pack is on a hard drive, or printed and taped in a
kitchen, it has no channel home. So pack completion is invisible by construction, not by oversight.
The bridge is the record page in the pack, which carries a QR code to a URL: the paper points at the
web, and the web does the counting. That page has to be worth visiting on its own merits, or nobody scans it.

Also invisible: anything a family does offline between check-ins. The garlic will not report in.

## What it does not replace

The store page already reports **downloads and buyer country and state** with no code at all (Gumroad:
10% + $0.50 per sale, no monthly fee, verified 2026-10-03). That is the geography of buyers. This
instrument is the behaviour of players. They are different questions and both are worth having.

## The honest limitation of the whole approach

Counting tells you *whether*, not *why*. The cheapest instrument for why is still a single question in
the follow-up email to anyone who downloads. Ten replies beat a dashboard in week one.

## Related

- Pack build pipeline: `stayfound-vault/programs/village/quest-packs/01-garlic/`
- Source script: Cairn memory, `projects/village/quest-pack-vol1-garlic-for-the-village-2026-09.md`
