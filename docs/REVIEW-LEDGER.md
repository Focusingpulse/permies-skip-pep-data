# The Village — External Review Ledger

Three independent AI reviews collected Sep 3–4, 2026 (Genspark, Kimi, Manus).
Verdicts: **ADOPT** (build on approval) · **RIGHT-SIZE** (do it differently) ·
**ALREADY** (done) · **TOSS** (reject). Weight = how many reviews raised it.

## P0 — Core path (all reviews converge here)

1. **Guided first session** — 3/3. Welcome → one learner → biome → one beginner
   quest → evidence checklist → first real completion → celebration → then open
   the doors. *Medium cost. Build first.*
2. **Intro gate** — 3/3. Title → art → one sentence → **Start**. Philosophy moves
   behind a "Read the Philosophy" toggle / About, with a **Skip to the Village**
   button at the very top. Hide the writing, don't delete it. *Low.*
3. **Quest completion celebration** — 2/3 (Kimi 🗑 alert; Manus implicit). Replace
   the browser alert with an in-game celebration: gold pulse / confetti burst /
   avatar pop. Reduced-motion aware. *Low.*
4. **Quest status honesty** — Genspark (right-sized). Four beats, not eight:
   Completed → Evidence prepared → Posted to Permies → Certified (manual).
   Matches the real PEP flow; keeps the board scannable. *Medium.*

## P0 — Trust boundaries

5. **Safety gates on high-risk quests** — Genspark (its big one). Chainsaw, tree
   felling, rocket stoves, foraging, pressure canning, heavy lifting, wild plants,
   mushrooms, natural medicine. Age / supervision / PPE / warning / practice
   alternative. *Medium (data + panel).*
6. **Save-file versioning + import preview** — Genspark. schemaVersion + exportedAt
   in the export; preview (members, quests, days, last modified) before overwrite.
   *Low-medium.*
7. **Schoolhouse framing** — Genspark. "Colorado edition" made explicit; the
   "2 hrs each" auto-log relabeled as estimated, with one line: tracker = record
   aid, not compliance proof. *Low.*
8. **Webhook to Advanced** — Genspark/Kimi. Move Crystal Skull webhook behind an
   Advanced section with one honest line about what leaves the browser. *Low.*
9. **Money Lab rebalance** — Genspark (Kimi soft). Money-basics-first track
   (budget, saving, debt, interest, taxes, inflation, insurance, scams) before the
   trading track; label markets/sim as its own module. *Medium content.*

## P1 — Accessibility & polish

10. **Reduced-motion + focus-visible CSS** — Genspark (exact snippet given).
    *Trivial. Do first.*
11. **Library search** — Kimi. Simple filter input over the link list. *Low.*
12. **Print stylesheet** — Kimi. Quest lists, progress reports, money sheets. *Low.*
13. **"Finalize" CTA** → clearer verb ("Start" / "Do This Quest"). — Kimi. *Trivial.*
14. **Button style unification** — Kimi. Consolidate a dozen classes to
    Primary/Secondary/Danger without touching layout. *Medium, polish-pass only.*
15. **Avatar studio mobile** — Kimi. Bigger touch targets, swipeable tabs,
    randomize button. *Medium.*
16. **Learning Lab evidence legend** — Genspark. One line defining controlled
    study / observational / qualitative / practitioner / author interpretation. *Trivial.*
17. **Story prose variation** — Genspark. Vary narrator / season / local place /
    reflection prompt so repeated runs don't feel patterned. *Low-medium.*

## P1 — Product clarity

18. **Mode comparison table at setup** — Genspark. Best-for / what-changes /
    commitment per mode. *Low.*
19. **Setup progressive disclosure** — Manus (new). Core: learner → biome → mode.
    Advanced collapsible: webhook, history import, depth. Ask only the minimum.
    *Low.*
20. **"Learning Depth" rename** → "Audience" / "Guidance style". — Genspark.
    *Trivial (i18n keys).*
21. **Library link metadata** — Genspark. type / free-paid / last-checked; the
    village_maintain cron already audits — surface its report in UI. *Medium.*

## P2 — Later

22. **Service worker offline** — Kimi. Real idea; bigger lift; NOMAD covers the
    offline-archive intent today. Defer.
23. **Custom SVG guild crests** — Kimi. Replace heaviest emoji with real crests
    (image-gen project). Defer until core path stable.
24. **README one-pager** — Kimi. What this is, who it's for, which file to open
    (maps the standalone too). *Trivial. Adopt.*
25. **Nav restructure (Play/Learn/Connect)** — Genspark. Revisit only after
    onboarding lands; the 9-tab map is the charm once the loop is felt.

## TOSSED (with reasons)

- **Radical subtraction of features** — wrong target. Subtraction belongs in the
  first ten minutes; the world stays.
- **One dominant metaphor** — the metaphor stack is the personality. Sequence it,
  don't flatten it.
- **"Kill the manifesto"** — hide it (toggle), don't destroy the best writing.
- **Theme emoji = clutter** (Kimi) — themes are brand-new and requested; tune later.
- **Scorecards (4/10 UX etc.)** — noise. Signal = "new users bounce, returning
  users get it" → guided first-use.
- **"Avatar = Flash dress-up"** — custom SVG with breathing anim; 3D is the
  standing end-goal, not a bug.
- **Componentized UI / TypeScript / tests now** — migration roadmap, not polish.
  Revisit when the single-file monolith outgrows us.

## Recommended first approve batch (10)

1. Guided first session · 2. Intro skip/toggle + Start · 3. Celebration + CTA
4. Safety gates · 5. Save versioning + import preview · 6. Reduced-motion + focus
7. Library search · 8. Webhook → Advanced · 9. Mode comparison table
10. Setup progressive disclosure

*Tick items here as they're approved, built, verified, and shipped.*
