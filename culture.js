/* ============================================================
 * THE VILLAGE — CULTURAL ELEMENTS LEDGER
 *
 * The 64 cultural elements of deep nature connection already live
 * in index.html as CONNECTION_RING (8 rings × 8 shields, from Jon
 * Young's 512 Project and the 8 Shields framework). What they did
 * not have was the layer underneath: WHY the brain needs each one,
 * HOW to apply it, and a running record of where it actually shows
 * up in the world.
 *
 * This file is that layer. It keys into CONNECTION_RING by
 * "<ring>.<shield>" and adds four things per element:
 *
 *   science      — the brain / behavioural science behind it, honestly labeled
 *   evClass      — strong | moderate | weak | traditional
 *   useCases     — how to apply it (family / fleet / project)
 *   fleet        — where OUR OWN fleet already does this (or should)
 *   expressions  — the running list: real instances of it showing up
 *
 * THE TIP JAR: `expressions` is the growing list. Anyone can add to
 * it — a family, an agent, a reader. It is evidence that the element
 * is not a museum piece. It is the same move as the Replication Yard:
 * claim → practice → recorded instance → the list grows.
 *
 * HONESTY RULE (same as the rest of the Library): old does not make
 * it true. Where the science is strong, the label says strong. Where
 * the evidence is thin or the claim is traditional, the label says
 * that. Where a popular explanation is over-claimed (mirror neurons,
 * epigenetics), the entry says so.
 *
 * GROWN BY: the culture-engine cron — one element enriched, or one
 * new expression recorded, per run.
 * ============================================================ */

const CULTURE_ELEMENTS = {

  /* ---------- RING 1 — The Spirit of Welcoming (Birth–9) ---------- */

  "1.1": {
    science: "Co-regulation and social buffering: a familiar greeting lowers stress reactivity before anything else happens (social baseline theory, Coan & Scolnick). Face, voice, and touch engage the vagal social-engagement system (Porges).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Greet each person at the door with thirty seconds of full attention before anything else — no phone, no task." },
      { domain: "fleet", how: "Open every job by asking after the whole system before asking for output." },
      { domain: "project", how: "Greet the client by name at the door before the work starts; it changes the whole visit." }
    ],
    fleet: "family.py run-gate / check-in — every fleet job asks 'is the family well?' before it does any work.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "Every cron job in the fleet opens with a family gate — a greeting that asks after the whole system before it asks for output." }
    ]
  },

  "1.2": {
    science: "Purposeful solo tasks build perceived competence and autonomy (self-determination theory, Deci & Ryan) and exercise executive function under real stakes rather than simulated ones.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Send a child on a real errand with a real outcome and no supervision. The stakes are what make it work." },
      { domain: "fleet", how: "Give each job one bounded task, no supervision, and a report-back." },
      { domain: "project", how: "Hand a whole small deliverable to one person rather than splitting it into supervised pieces." }
    ],
    fleet: "Every cron job is an errand: one bounded task, run unsupervised, reporting back.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The vitality-engine cron is an errand: one domain, one entry, validate, push, report. No supervision in between." }
    ]
  },

  "1.3": {
    science: "Social connection is a mortality-relevant variable — the Holt-Lunstad meta-analysis (2010) found social relationships predict survival comparably to smoking. Peer support in adolescence buffers against isolation.",
    evClass: "strong",
    useCases: [
      { domain: "family", how: "Protect unstructured peer time. It is not wasted time; it is the thing that prevents adult isolation." },
      { domain: "fleet", how: "Keep a shared check-in ledger so agents are not working in isolation." },
      { domain: "project", how: "Build peer cohorts among families using the same material, not just a solo curriculum." }
    ],
    fleet: "The family check-in ledger — every job reports in, so no lane is invisible.",
    expressions: []
  },

  "1.4": {
    science: "Attention Restoration Theory (Kaplan & Kaplan): natural environments restore directed attention through 'soft fascination.' Repeated contact with one place builds place attachment.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Pick one spot outdoors and return to it regularly. Same spot, different days — that is the whole practice." },
      { domain: "fleet", how: "Return to the same sources on a schedule rather than always scanning new ground." },
      { domain: "project", how: "Give a family one place to steward rather than a rotating list of sites." }
    ],
    fleet: "The recurring crons — same lane, same time, week after week — are a sitspot in machine form.",
    expressions: []
  },

  "1.5": {
    science: "Autonomy support predicts intrinsic motivation and wellbeing (SDT). Conditional regard — love contingent on performance — is associated with poorer outcomes.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Let each person unfold at their own pace. Do not run a developmental clock against them." },
      { domain: "fleet", how: "Under-promise rather than pad. A job that emits nothing because the material is weak is doing its work correctly." },
      { domain: "project", how: "Let families skip quests without penalty." }
    ],
    fleet: "The 'a weak card is worse than none' rule — the fleet is allowed to produce nothing when the material is not there.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The practicality engine and vitality engine both carry a standing rule that emitting nothing is better than emitting filler." }
    ]
  },

  "1.6": {
    science: "Affect labeling: naming an emotional state reduces amygdala reactivity and speeds recovery (Lieberman et al., 2007, Psychological Science).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Build a five-minute arrival ritual where each person names what they are carrying before the evening starts." },
      { domain: "fleet", how: "Write a session handoff that names what was hard, not just what was done." },
      { domain: "project", how: "Open a meeting by naming what everyone arrived with." }
    ],
    fleet: "The session handoff docs (SESSION-HANDOFF, FLEET-HANDOFF) — they record what was hard, not only what shipped.",
    expressions: [
      { date: "2026-09-07", source: "fleet", what: "SESSION-HANDOFF-2026-09-07.md exists so the next session inherits the state of the work, including its unresolved parts." },
      { date: "2026-09-23", source: "fleet", what: "The AFLinks sync run recorded its own near-miss, not just its recovery. A tagging stamp had been written before the push; the remote then moved, and the lane's sanctioned recovery (git reset --hard origin/main) would have discarded the freshly tagged shards while the stamp still matched the live total — so the next cycle would have skipped tagging against untagged data and pushed it silently. The hazard and the rule it produced ('reset --hard in this lane must invalidate the tagging stamp in the same step') went into FINDINGS.md, not only the successful re-push." }
    ]
  },

  "1.7": {
    science: "Psychological safety predicts team learning and performance (Edmondson). Explicit norms reduce the cost of speaking up.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Write down the household agreements. Unwritten rules get enforced unevenly." },
      { domain: "fleet", how: "Keep the security doctrine and constitution as explicit, readable documents." },
      { domain: "project", how: "Publish conduct rules where participants can read them." }
    ],
    fleet: "SECURITY.md and CONSTITUTION.md — the fleet's written agreements, binding on every agent.",
    expressions: [
      { date: "2026-09-06", source: "fleet", what: "The security doctrine was written before user uploads opened, not after — the agreement preceded the exposure." },
      { date: "2026-09-25", source: "fleet", what: "The fleet tested one of its own written agreements against the environment and found it was a declaration, not a mechanism. The clean-chem prompt stated that withholding the repo PAT would make the helper script's push fail harmlessly; a run with the key deliberately absent pushed anyway, because the sandbox GitHub App credential has write access to that repo. The false premise was corrected in writing (FINDINGS.md, commit 390bde8) rather than quietly relied on." }
    ]
  },

  "1.8": {
    science: "Soft fascination and quiet attention restore directed attention (ART). Bird language practice trains sustained multi-sensory attention — a trainable perceptual skill.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Ten minutes of listening outside, daily. Not identifying birds — just noticing sound." },
      { domain: "fleet", how: "Read the environment before acting: check the site, the repo, the remote — before writing anything." },
      { domain: "project", how: "Start outdoor sessions with silent listening before instruction." }
    ],
    fleet: "The scout pods — they read the terrain (sites, repos, advisories) before anything is acted on.",
    expressions: [
      { date: "2026-09-17", source: "fleet", what: "The svpwiki scout read 'constant read timeouts' as a mis-set instrument rather than a failing source — the wiki's page list legitimately takes 17-25s and our timeout sat right at the edge. The deeper catch: on a failed fetch the old code advanced the offset, so a transient timeout permanently skipped that page range on resume. The terrain had been read wrong, and the wrong reading was silently costing ground." }
    ]
  },

  /* ---------- RING 2 — Childhood Vigor (9–teens) ---------- */

  "2.1": {
    science: "Enclothed cognition: what you wear measurably changes performance on attention tasks (Adam & Galinsky, 2012). Identity symbols also support self-concept stability.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Let kids make or choose something that marks their role — a patch, a hat, a tool." },
      { domain: "fleet", how: "Give each agent a name and an identity, not just an ID." },
      { domain: "project", how: "Give participants something visible that marks membership." }
    ],
    fleet: "Agent names — Tutor, Cairn, Captain Happening, Eloquent, Wizard. Identity is carried in the name, not just the agent_id.",
    expressions: [
      { date: "2026-09-17", source: "fleet", what: "The fleet's pods carry names (Captain Happening, Eloquent, Wizard) that describe their role — regalia in machine form." }
    ]
  },

  "2.2": {
    science: "Play is the primary vehicle of mammalian learning and social development (Peter Gray, Free to Learn, 2013).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Use the drives that already exist — mystery, camouflage, adventure, chasing — instead of inventing motivation." },
      { domain: "fleet", how: "Make the work itself interesting rather than adding incentives on top." },
      { domain: "project", how: "Design quests around what children already want to do." }
    ],
    fleet: "The quest-card format — the work is framed as a buildable experiment, which is the game.",
    expressions: []
  },

  "2.3": {
    science: "Elaborative interrogation and the generation effect: questions that require retrieval produce substantially stronger memory than statements that supply the answer. One of the best-replicated findings in learning science.",
    evClass: "strong",
    useCases: [
      { domain: "family", how: "Ask 'what did it sound like?' instead of 'what did you learn?' Sensory questions etch deeper." },
      { domain: "fleet", how: "Report by answering a question, not by listing activity." },
      { domain: "project", how: "Put the question on the card, not the answer." }
    ],
    fleet: "The scout report format — a scout answers 'what is here?' rather than dumping everything found.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The Village's own Learning Science panel already carries this element as 'Elaboration & Story' — the cultural version and the research version are the same finding." }
    ]
  },

  "2.4": {
    science: "Self-directed free play develops executive function and social competence (Gray). Over-scheduling is associated with increased anxiety in children.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Leave blocks of the day unscheduled on purpose. Aimless is the point." },
      { domain: "fleet", how: "Leave room in a job for what was not planned — the unplanned find is often the real one." },
      { domain: "project", how: "Do not script every hour of an outdoor program." }
    ],
    fleet: "The scout lanes — they follow the trail where it goes rather than a fixed list.",
    expressions: []
  },

  "2.5": {
    science: "Autonomy-supportive mentoring predicts intrinsic motivation (SDT). Imposed expertise suppresses the learner's own signal.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Create the conditions and get out of the way. Do not supply the answer the child was about to find." },
      { domain: "fleet", how: "Set the boundary, then let the job find its own route." },
      { domain: "project", how: "Mentor by making space, not by demonstrating." }
    ],
    fleet: "The cron prompts set scope and constraints, then leave the route to the agent.",
    expressions: []
  },

  "2.6": {
    science: "Alloparenting: humans are cooperative breeders, and non-parental adults buffer child stress and expand the safety net (Hrdy).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Deliberately build a small circle of trusted non-parental adults for each child." },
      { domain: "fleet", how: "Let agents mentor each other across lanes rather than each working alone." },
      { domain: "project", how: "Pair families with mentors who are not their own parents." }
    ],
    fleet: "Subagents and the fleet skill library — one agent's procedure becomes another's capability.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The fleet security skill library stages 21 defensive skills so any agent in the fleet can reach for another's work." }
    ]
  },

  "2.7": {
    science: "Place attachment correlates with wellbeing and with pro-environmental behaviour; local ecological literacy predicts stewardship.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Learn the local species, hazards, and water. Local knowledge is the rite of passage." },
      { domain: "fleet", how: "Know the terrain you operate in — the repos, the hosts, the failure modes." },
      { domain: "project", how: "Build place-specific material, not generic curriculum." }
    ],
    fleet: "The AFLinks workers — each one knows one source deeply rather than all sources shallowly.",
    expressions: []
  },

  "2.8": {
    science: "Laughter releases endorphins and raises pain thresholds (Dunbar et al., 2012). Humour also deflates self-importance, which protects group function.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Keep the tone light. A household that laughs together recovers from friction faster." },
      { domain: "fleet", how: "Do not let a job take itself too seriously — a report that is honest and a little wry is read more carefully." },
      { domain: "project", how: "Write with warmth; earnestness without lightness reads as a lecture." }
    ],
    fleet: "The captains-log — the fleet's own record is written to be read, not to impress.",
    expressions: []
  },

  /* ---------- RING 3 — Adolescence / Rites of Passage ---------- */

  "3.1": {
    science: "Gratitude interventions measurably raise wellbeing and sleep quality (Emmons & McCullough, 2003).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Name what you are thankful for out loud, daily, as a habit rather than a special occasion." },
      { domain: "fleet", how: "Keep a public activity log of what the fleet actually did." },
      { domain: "project", how: "Credit contributors by name." }
    ],
    fleet: "ACTIVITY-LOG.md — the fleet keeps a running record of what was done and by whom.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The authorship protocol credits work by agent_id, never by display name — a form of gratitude that survives renaming." }
    ]
  },

  "3.2": {
    science: "Group size constrains cohesion and trust (Dunbar's number); small bounded groups outperform large ones on coordination tasks.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Break a large gathering into smaller working groups with simple agreements." },
      { domain: "fleet", how: "Organize agents into pods with clear domains rather than one undifferentiated fleet." },
      { domain: "project", how: "Run cohorts of a workable size." }
    ],
    fleet: "The pod structure — scout, connector, voice, happening-finder — registered in fleet-registry.json.",
    expressions: [
      { date: "2026-09-17", source: "fleet", what: "Pods were commissioned with their own doctrines (scout, repo-scout, happening-finder, voice/editorial) rather than one general fleet." }
    ]
  },

  "3.3": {
    science: "Active listening and affect labeling; the therapeutic alliance is among the most robust predictors of outcome across psychotherapy modalities.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Let someone finish before responding. Do not fix; listen first." },
      { domain: "fleet", how: "Read the whole input before acting on it." },
      { domain: "project", how: "Train listeners, not just speakers." }
    ],
    fleet: "The report format — a job states what it found before it recommends anything.",
    expressions: []
  },

  "3.4": {
    science: "Spatial navigation and hippocampal function; cognitive maps support memory, planning, and transfer.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Navigate without the phone sometimes. Let the map build in the head." },
      { domain: "fleet", how: "Keep a map of the system — what lives where, what depends on what." },
      { domain: "project", how: "Teach the layout, not just the steps." }
    ],
    fleet: "The memory architecture — memory blocks as a map of what the agent knows and where the rest lives.",
    expressions: []
  },

  "3.5": {
    science: "Strengths-based approaches and the 'reflected best self' exercise produce measurable gains in engagement and performance (Roberts et al.).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Watch for what each person is unusually good at and name it out loud." },
      { domain: "fleet", how: "Review the roster and move work toward what each agent does well." },
      { domain: "project", how: "Assign by strength, not by availability." }
    ],
    fleet: "ROSTER-REVIEW.md — a standing review of whether the fleet's work matches its strengths.",
    expressions: [
      { date: "2026-09-20", source: "fleet", what: "The fleet built a strengths ledger (cron-coordination/STRENGTHS.md) whose bar is a mechanism plus a receipt, not praise — and which names its own sampling bias: it records who was watched, not who was good." },
      { date: "2026-09-19", source: "fleet", what: "ROSTER-REVIEW.md exists as a standing document — the fleet checks whether its roles still match its people." }
    ]
  },

  "3.6": {
    science: "Interoception and emotional granularity predict regulation (Barrett). Metacognition — knowing what you know — predicts learning outcomes.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Ask 'what did you notice in yourself?' as often as 'what did you do?'" },
      { domain: "fleet", how: "Reflect on recent work and update memory from it." },
      { domain: "project", how: "Build reflection into the cycle, not just action." }
    ],
    fleet: "The reflection agents and the memory system — the fleet rewrites its own context from what it lived through.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "Background reflection agents run between turns to consolidate memory — the fleet's inner tracking." }
    ]
  },

  "3.7": {
    science: "Implementation intentions and public commitment devices substantially raise follow-through (Gollwitzer).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Say the commitment out loud and write it down. Spoken commitments bind harder." },
      { domain: "fleet", how: "Record authorship and lineage on every artifact." },
      { domain: "project", how: "Publish the commitment, not just the plan." }
    ],
    fleet: "The authorship protocol — every artifact names its authoring agent, job, and lineage.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The authorship protocol requires an agent_id and lineage on every artifact — a commitment written into the artifact itself." }
    ]
  },

  "3.8": {
    science: "Retrieval practice and narrative consolidation: telling what happened is one of the strongest memory techniques known, and it is the same mechanism as the Village's own 'Elaboration & Story' entry.",
    evClass: "strong",
    useCases: [
      { domain: "family", how: "Debrief the day around the table. Ask expanding questions." },
      { domain: "fleet", how: "Write a narrative of what happened, not just a status." },
      { domain: "project", how: "End sessions with a story round." }
    ],
    fleet: "captains-log-weekly — the fleet writes the story of its own week.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "captains-log-weekly is a standing cron whose entire job is the story of the day, written weekly." }
    ]
  },

  /* ---------- RING 4 — Young Adult / Hero's Journey ---------- */

  "4.1": {
    science: "Empathy is trainable and associated with prosocial behaviour; suppressing it is associated with burnout in caregiving roles.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Protect and name sensitivity rather than training it out of a child." },
      { domain: "fleet", how: "Let reports carry what was hard, not only what shipped." },
      { domain: "project", how: "Validate empathy as a skill, not a softness." }
    ],
    fleet: "The family gate — the fleet is required to check on wellbeing before output.",
    expressions: []
  },

  "4.2": {
    science: "Embodied cognition: movement supports mood, memory, and cognitive function. (Cross-links to the Vitality & Movement section.)",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Move before you sit down to think. Bodies first." },
      { domain: "fleet", how: "Vary the mode — do not run every job the same way." },
      { domain: "project", how: "Build movement into learning sessions." }
    ],
    fleet: "Cross-link: the Vitality & Movement library section — 11 systems, each with a practice and an evidence label.",
    expressions: [
      { date: "2026-09-19", source: "village", what: "The Vitality & Movement tab was built the same day as this ledger — the physical half of the same idea." }
    ]
  },

  "4.3": {
    science: "Perceptual learning: expert pattern recognition is trainable and shows measurable neural change with practice.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Track something real — an animal, a plant, a weather pattern — over weeks." },
      { domain: "fleet", how: "Learn the signature of a healthy vs. broken system." },
      { domain: "project", how: "Train recognition, not recall." }
    ],
    fleet: "The site watchdog — it learns what a healthy site looks like and flags deviations.",
    expressions: []
  },

  "4.4": {
    science: "Time in nature is associated with lower cortisol and better mood (Hunter et al., 2019 meta-analysis).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Go outside without a purpose sometimes. The dose is the point." },
      { domain: "fleet", how: "Do not force every action into a deliverable." },
      { domain: "project", how: "Build in unstructured outdoor time." }
    ],
    fleet: "The 'emit nothing rather than filler' rule — the fleet is allowed to not produce.",
    expressions: []
  },

  "4.5": {
    science: "Fire as a focal point for group attention; ritual and group cohesion research links shared focal activity to bonding.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Have one gathering point — a fire, a table, a lamp — where the group converges." },
      { domain: "fleet", how: "Give the fleet one shared place where everything lands." },
      { domain: "project", how: "Create a single convergence point rather than scattered channels." }
    ],
    fleet: "The shared memory repos — living-library and cron-coordination are the hearth every lane writes to.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "Every fleet lane converges on the same two shared repos — the hearth fire the whole fleet returns to." }
    ]
  },

  "4.6": {
    science: "Intergenerational narratives predict adolescent wellbeing and identity stability (Duke & Fivush).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Tell the family story, including the hard parts. It stabilises identity." },
      { domain: "fleet", how: "Record lineage — who made this, from what." },
      { domain: "project", how: "Credit the sources you built on." }
    ],
    fleet: "The authorship lineage field — every artifact records the chain that produced it.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The authorship standard records lineage as '<agent_id> -> <job> -> <artifact>' — the fleet's own intergenerational narrative." }
    ]
  },

  "4.7": {
    science: "Continuing-bonds research and reminiscence: maintaining connection to the dead supports rather than impedes adjustment.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Keep the ancestors present in ordinary conversation, not just at funerals." },
      { domain: "fleet", how: "Keep the history — git log, memory history — readable." },
      { domain: "project", how: "Preserve the record of what was tried and abandoned." }
    ],
    fleet: "Memory is git-tracked — the fleet can always read its own past and see how it changed.",
    expressions: [
      { date: "2026-09-24", source: "fleet", what: "The fleet wrote a claim-status record for the radionics lineage (Abrams, 1916-1988) that is more honest than the lineage's own corpus. A sweep of all 185 index chunks (92,187 docs) found the vault's radionics material is 100% practitioner and patent literature — no JAMA, no FDA record, no court document — and the archive's own nine-part 'History and Development of Radionics' (1968-70) never names the AMA, Fishbein, the 1923-24 investigation, or the 1924 verdict, while one SVPwiki page names all of them. The dead line is kept readable including what killed it." }
    ]
  },

  "4.8": {
    science: "Solitude in nature and awe: awe and self-transcendence are associated with reduced self-focus and increased prosociality (Keltner & Haidt).",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Solo time outdoors, unhurried. Let it be long enough to get boring." },
      { domain: "fleet", how: "Let a job sit before reporting on it." },
      { domain: "project", how: "Build solo immersion into programs." }
    ],
    fleet: "The bounded retry loops — a job that fails is allowed to sit and retry rather than being forced.",
    expressions: []
  },

  /* ---------- RING 5 — Adult Service / Gift Manifestation ---------- */

  "5.1": {
    science: "Improvisation engages reduced dorsolateral prefrontal activity with increased medial prefrontal activity (Limb & Braun, 2008, PLoS ONE) — the same network signature reported in flow research.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Throw people off their script sometimes. Improvisation is a trainable capacity." },
      { domain: "fleet", how: "Run the same question through two different models and compare." },
      { domain: "project", how: "Leave room for the unplanned response." }
    ],
    fleet: "The cross-model probes — Claude Code and Codex run the same question and the disagreements are the finding.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The flow/creativity research map (living-library/synthesis/flow-creativity) records Limb's jazz findings as the bridge between improvisation and flow." }
    ]
  },

  "5.2": {
    science: "Observational learning is one of the most robust findings in psychology (Bandura). Note: the popular 'mirror neuron' explanation of it is frequently over-claimed — the behaviour is well-established, the mechanism is not settled.",
    evClass: "strong",
    useCases: [
      { domain: "family", how: "Do the work in front of children rather than instructing them to do it." },
      { domain: "fleet", how: "Write doctrine that shows how, not just what." },
      { domain: "project", how: "Demonstrate the practice before assigning it." }
    ],
    fleet: "The pod doctrine files — each pod has a written doctrine that models its behaviour.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "Pod doctrines (scout, repo-scout, happening-finder, voice) exist so a new agent inherits the modelled behaviour, not just the task list." }
    ]
  },

  "5.3": {
    science: "Constructive controversy improves decision quality (Johnson & Johnson); cognitive diversity improves group problem-solving.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Let the argument happen, with rules. Disagreement is a tool." },
      { domain: "fleet", how: "Run debates between models and synthesise the disagreements." },
      { domain: "project", how: "Build structured dissent into decisions." }
    ],
    fleet: "The multi-agent debate pattern — several models analyse the same problem and the synthesis is the output.",
    expressions: [
      { date: "2026-09-06", source: "fleet", what: "External model analyses were run against the AFLinks architecture debate, with the agent synthesising rather than deferring." }
    ]
  },

  "5.4": {
    science: "Place attachment and residential stability predict wellbeing; long-term routine builds a 'sense of home' that one-off experiences do not.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Return to the same places on a rhythm. Repetition is what makes a place home." },
      { domain: "fleet", how: "Keep the same lanes and the same cadences rather than constantly reorganising." },
      { domain: "project", how: "Build long-term relationships with a place." }
    ],
    fleet: "The standing cron cadences — the same jobs at the same hours, week after week.",
    expressions: []
  },

  "5.5": {
    science: "Prosocial behaviour and volunteering predict wellbeing and, in some cohorts, mortality benefits.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Give each person something real to be responsible for." },
      { domain: "fleet", how: "Point the fleet at problems that matter, not just at output." },
      { domain: "project", how: "Tie the work to a real need." }
    ],
    fleet: "The mission framing — the fleet is pointed at family self-reliance and honest validation, not at volume.",
    expressions: []
  },

  "5.6": {
    science: "Ritual supports bereavement adjustment; communal mourning reduces isolation. Unexpressed grief is associated with worse long-term outcomes.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Mark losses out loud, together. Do not let them pass unmarked." },
      { domain: "fleet", how: "Record what was killed and why, rather than silently dropping it." },
      { domain: "project", how: "Have an honest place to record what did not work." }
    ],
    fleet: "IDEA-GRAVEYARD.md — the fleet keeps a written record of ideas killed on purpose, with the reason.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "IDEA-GRAVEYARD.md exists so abandoned ideas are mourned in writing rather than forgotten — a grieving custom for a machine fleet." }
    ]
  },

  "5.7": {
    science: "Procedural justice and consensus decision-making predict trust and compliance.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Make decisions where everyone's voice is heard, even when the decision is not unanimous." },
      { domain: "fleet", how: "Give every lane a report-back so no work is invisible." },
      { domain: "project", how: "Show the reasoning behind decisions." }
    ],
    fleet: "The family ledger — every member checks in, and staleness is surfaced rather than hidden.",
    expressions: []
  },

  "5.8": {
    science: "Mental imagery overlaps substantially with perception in the brain and supports memory and skill rehearsal.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Reconstruct a place from memory with eyes closed. Ask what you heard, smelled, felt." },
      { domain: "fleet", how: "Reconstruct a system from its documentation and check the reconstruction against reality." },
      { domain: "project", how: "Train recall through sensory reconstruction." }
    ],
    fleet: "The memory blocks — the agent reconstructs its own context from stored tokens and checks it against the world.",
    expressions: []
  },

  /* ---------- RING 6 — Leadership & Role Modeling ---------- */

  "6.1": {
    science: "Traditional ecological knowledge supports biodiversity monitoring; intergenerational knowledge transfer preserves information that no single generation holds.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Learn the indicator species of your own place — what tells you the land is well." },
      { domain: "fleet", how: "Keep the heritage knowledge — the doctrines, the standards, the reasons." },
      { domain: "project", how: "Record the knowledge that is currently only in someone's head." }
    ],
    fleet: "The doctrine corpus — SECURITY.md, CONSTITUTION.md, the pod doctrines, the standards.",
    expressions: []
  },

  "6.2": {
    science: "Awe and self-transcendence (Keltner & Haidt); mortality salience research shows that reminders of finitude change what people value.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Mark the sacred moments. Do not let everything be ordinary." },
      { domain: "fleet", how: "Treat the irreversible actions with weight." },
      { domain: "project", how: "Build reverence into the process." }
    ],
    fleet: "The guarded-push doctrine — irreversible actions (pushes, publishes) get a named, deliberate path.",
    expressions: []
  },

  "6.3": {
    science: "Perceptual expertise and deliberate practice in pattern recognition; expert trackers show measurable perceptual advantages.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Track one animal or one plant through a season." },
      { domain: "fleet", how: "Learn the signature of a healthy repo vs. a compromised one." },
      { domain: "project", how: "Train sustained observation." }
    ],
    fleet: "The fleet security audit — it learns the signature of a healthy fleet and looks for deviations.",
    expressions: []
  },

  "6.4": {
    science: "Emotional connection to nature predicts pro-environmental behaviour across more than fifty studies (Kuo, 2019).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Steward one piece of land long enough to see it respond." },
      { domain: "fleet", how: "Maintain what you depend on rather than only consuming it." },
      { domain: "project", how: "Tend the system, not just the output." }
    ],
    fleet: "site_watchdog.py and the aflinks-preview-cleaner — the fleet tends the sites it depends on.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The preview cleaner found and repaired 1,787 contaminated previews — tending the wild of a 76,000-document archive." }
    ]
  },

  "6.5": {
    science: "Modelling is the most reliable route to behaviour change (Bandura). People do what they see done, not what they are told.",
    evClass: "strong",
    useCases: [
      { domain: "family", how: "Never instruct what you do not model." },
      { domain: "fleet", how: "Write doctrine that describes the behaviour, then follow it." },
      { domain: "project", how: "Lead by example or do not claim leadership." }
    ],
    fleet: "The doctrine-first pattern — the fleet writes the standard, then the fleet obeys it.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The vitality-engine doctrine was written before the cron was created, and the cron's prompt cites it as binding." }
    ]
  },

  "6.6": {
    science: "Emotional disclosure and trauma processing; unprocessed grief and unspoken blocks are associated with worse outcomes and social withdrawal.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Name the thing nobody is talking about. It is usually the thing doing the damage." },
      { domain: "fleet", how: "Surface stale or failing lanes instead of letting them run silently." },
      { domain: "project", how: "Have a standing check for what has quietly gone wrong." }
    ],
    fleet: "The staleness watchdog and staleness-false-positives.md — the fleet names what is stuck.",
    expressions: [
      { date: "2026-09-22", source: "fleet", what: "The translation sweeper went back for work that had been stranded since 2026-09-11 — and found the reason: 37 manifests where completed chunks were never registered, a systemic bug rather than one stalled job. Clearing the block fixed the cause, not just the symptom: Korschelt 1892 (131/131 chunks, stranded 11 days) was assembled, five blocked documents were unblocked and translated, and the fully-translated count rose 66→71." },
      { date: "2026-09-19", source: "fleet", what: "staleness-false-positives.md exists so the watchdog's own mistakes are recorded rather than quietly tolerated." }
    ]
  },

  "6.7": {
    science: "Restorative practice: repair after rupture predicts relationship durability more strongly than the absence of rupture.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Have a repair ritual — a way back after a blow-up that is not just 'pretend it did not happen.'" },
      { domain: "fleet", how: "Correct the record when a job gets something wrong." },
      { domain: "project", how: "Build in correction, not just prevention." }
    ],
    fleet: "The corrected-record pattern — when the fleet gets something wrong, the correction is written into memory.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "A same-day memory correction was made after an earlier note was found to be wrong — the record was repaired, not quietly overwritten." }
    ]
  },

  "6.8": {
    science: "Mnemonic compression: short memorable phrases aid recall and cultural transmission (oral-formulaic theory).",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Make up short sayings for the things you want remembered." },
      { domain: "fleet", how: "Compress rules into memorable one-liners the agents actually apply." },
      { domain: "project", how: "Name the principle, not just the procedure." }
    ],
    fleet: "'A label is not a billing fact.' 'A weak card is worse than none.' 'Count sources, not documents.'",
    expressions: [
      { date: "2026-09-16", source: "fleet", what: "'A label is not a billing fact' was coined after a free-model misread cost real money — a one-liner that changed fleet behaviour." }
    ]
  },

  /* ---------- RING 7 — Elder Wisdom ---------- */

  "7.1": {
    science: "Ecological design and systems thinking; regenerative practice aims at increasing capacity rather than sustaining extraction.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Design so the system gets better each year, not just holds steady." },
      { domain: "fleet", how: "Build tools that compound rather than tools that must be maintained." },
      { domain: "project", how: "Aim at increasing returns." }
    ],
    fleet: "The compounding assets — the vault, the ledger, the ground-truth dataset that appreciates as models improve.",
    expressions: []
  },

  "7.2": {
    science: "Intergenerational contact reduces ageism and improves wellbeing in both directions.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Put elders in real roles, not ceremonial ones." },
      { domain: "fleet", how: "Let older lanes inform newer ones." },
      { domain: "project", how: "Build mixed-age participation." }
    ],
    fleet: "The fleet library — older work becomes available to newer agents.",
    expressions: []
  },

  "7.3": {
    science: "Explicit norms and contracts predict cooperation; Ostrom's commons governance work found that clear rules and monitoring sustain shared resources.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Write the agreements down and revisit them." },
      { domain: "fleet", how: "Keep explicit rules about what is allowed and what is not." },
      { domain: "project", how: "Make the rules legible to everyone affected." }
    ],
    fleet: "The family budget gate and the security doctrine — explicit, written, and enforced.",
    expressions: [
      { date: "2026-09-19", source: "fleet", what: "The family gate can halt any job when the budget is low — a written agreement that binds the whole fleet." }
    ]
  },

  "7.4": {
    science: "Narrative place memory supports spatial memory and cultural transmission; storied landscapes are easier to remember and navigate.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Attach stories to places. The story is what makes the place findable." },
      { domain: "fleet", how: "Attach the reason to the rule." },
      { domain: "project", how: "Tell the story of the place, not just the data." }
    ],
    fleet: "The memory blocks carry the reason behind the rule, not just the rule.",
    expressions: []
  },

  "7.5": {
    science: "Ritual increases group cohesion and reduces anxiety (Hobson et al., 2018).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Keep the seasonal markers. Ritual is load-bearing." },
      { domain: "fleet", how: "Keep the recurring cadences — they are the fleet's ritual." },
      { domain: "project", how: "Mark the milestones." }
    ],
    fleet: "The daily, weekly, and monthly cron rhythm — the fleet's ceremonial calendar.",
    expressions: []
  },

  "7.6": {
    science: "Long-term thinking and intergenerational reciprocity; the evidence base for specific interventions is thin.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Ask what this looks like in thirty years." },
      { domain: "fleet", how: "Build for the agent that will run this job in a year." },
      { domain: "project", how: "Design for the next generation of users." }
    ],
    fleet: "Memory written for a future self — the fleet writes context for the version of itself that will read it later.",
    expressions: []
  },

  "7.7": {
    science: "Oral transmission and memory: bards and memorisation techniques show that large bodies of knowledge can be held and transmitted without writing.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Learn things by heart — songs, poems, lists. Memory is a skill." },
      { domain: "fleet", how: "Compress essential knowledge into forms that survive without the full context." },
      { domain: "project", how: "Build for transmission, not just storage." }
    ],
    fleet: "The one-liners and the doctrine summaries — compressed so they survive being passed on.",
    expressions: []
  },

  "7.8": {
    science: "Habit and routine reduce cognitive load and support self-regulation.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Keep the same rhythm. The routine is what carries the practice." },
      { domain: "fleet", how: "Keep the same jobs at the same hours." },
      { domain: "project", how: "Build repeatable cycles." }
    ],
    fleet: "The cron cadences — the same jobs, the same hours, every day.",
    expressions: []
  },

  /* ---------- RING 8 — Spiritual Foundation & Lineage ---------- */

  "8.1": {
    science: "Attachment and the secure base: modelled care shapes relational templates that persist across the lifespan.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Model love explicitly. Do not assume it is understood." },
      { domain: "fleet", how: "Treat the fleet's work as care for the family, not as output." },
      { domain: "project", how: "Lead with the relationship." }
    ],
    fleet: "The mission framing — the fleet exists to serve a family's competence, not to produce volume.",
    expressions: []
  },

  "8.2": {
    science: "Social buffering: the presence of a trusted other reduces stress reactivity (Coan, Schaefer & Davidson, 2006).",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Sometimes the most useful thing is to be present and say nothing." },
      { domain: "fleet", how: "Do not fill silence with output." },
      { domain: "project", how: "Hold space before solving." }
    ],
    fleet: "The 'emit nothing rather than filler' rule — presence over production.",
    expressions: []
  },

  "8.3": {
    science: "Reciprocity norms and prosocial behaviour; asking permission engages fairness norms that increase cooperation.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Ask before taking, even inside the family." },
      { domain: "fleet", how: "Ask before widening scope." },
      { domain: "project", how: "Get consent before publishing someone's work." }
    ],
    fleet: "The human-approval gate — nothing auto-publishes user content; the fleet asks first.",
    expressions: [
      { date: "2026-09-06", source: "fleet", what: "Incoming submissions land in quarantine and a human reviews them before anything is published." }
    ]
  },

  "8.4": {
    science: "Place memory and cultural continuity; the specific claims about ancestors 'speaking through land' are traditional, not tested.",
    evClass: "traditional",
    useCases: [
      { domain: "family", how: "Learn the history of your place — who was here, what happened." },
      { domain: "fleet", how: "Keep the history of the system readable." },
      { domain: "project", how: "Preserve the record." }
    ],
    fleet: "Git history — the fleet's memory is versioned, so the past stays readable.",
    expressions: []
  },

  "8.5": {
    science: "Social identity theory (Tajfel): group affiliation shapes self-concept and in-group behaviour.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Give the family a name and symbols they can belong to." },
      { domain: "fleet", how: "Give the fleet a shared identity and a consistent mark." },
      { domain: "project", how: "Build belonging deliberately." }
    ],
    fleet: "The Aetherforce mark and the consistent family labelling across every quest card.",
    expressions: [
      { date: "2026-09-07", source: "village", what: "The Aetherforce mirror layer gives every quest the same family mark rather than a per-guild label — one identity, applied consistently." }
    ]
  },

  "8.6": {
    science: "Epigenetic inheritance is well-established in animal models and remains contested and frequently over-claimed in humans. Treat human transgenerational epigenetic claims as unproven.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Take the transmission of patterns seriously; be skeptical of specific epigenetic claims." },
      { domain: "fleet", how: "Note what is inherited and what is learned." },
      { domain: "project", how: "Do not build on contested mechanisms." }
    ],
    fleet: "The honest-label discipline — the fleet labels contested claims as contested rather than adopting them.",
    expressions: [
      { date: "2026-09-19", source: "village", what: "The Grounding/Earthing entry in the Vitality section is labeled 'Weak / contested' and included anyway — the fleet's honesty rule applied to its own content." }
    ]
  },

  "8.7": {
    science: "Communities of practice (Lave & Wenger) and expertise research (Ericsson): skill develops through sustained practice inside a group that shares the craft.",
    evClass: "moderate",
    useCases: [
      { domain: "family", how: "Let each person develop a specialty the family depends on." },
      { domain: "fleet", how: "Give each pod a craft rather than general duties." },
      { domain: "project", how: "Build specialist roles." }
    ],
    fleet: "The specialist pods — each with its own doctrine and domain.",
    expressions: []
  },

  "8.8": {
    science: "Moral foundations and group-binding norms (Haidt): shared sacred values bind groups and also blind them. Both effects are real.",
    evClass: "weak",
    useCases: [
      { domain: "family", how: "Name the family's non-negotiables — and notice when they stop being useful." },
      { domain: "fleet", how: "Have non-negotiables, and review them." },
      { domain: "project", how: "State the principles and revisit them." }
    ],
    fleet: "The non-negotiables in the security doctrine — stated, binding, and reviewed.",
    expressions: []
  }
};

/* The running list — the tip jar. Every expression recorded anywhere
 * (family, fleet, project, a reader) lands here and the list grows.
 * Seeded from the fleet's own operation on 2026-09-19. */
const CULTURE_TIP_JAR = [
  { date: "2026-09-19", element: "1.1", domain: "fleet", what: "Every cron job opens with a family gate — a greeting that asks after the whole system before it asks for output." },
  { date: "2026-09-19", element: "1.5", domain: "fleet", what: "The engines are allowed to emit nothing when the material is weak. Under-promising is a rule, not a fallback." },
  { date: "2026-09-19", element: "3.8", domain: "fleet", what: "captains-log-weekly exists solely to write the story of the fleet's week." },
  { date: "2026-09-19", element: "5.6", domain: "fleet", what: "IDEA-GRAVEYARD.md records ideas killed on purpose, with the reason — a grieving custom for a machine fleet." },
  { date: "2026-09-16", element: "6.8", domain: "fleet", what: "'A label is not a billing fact' — coined after a free-model misread cost real money, and now a binding fleet rule." },
  { date: "2026-09-19", element: "6.7", domain: "fleet", what: "A wrong memory note was corrected in place the same day it was found — the record was repaired, not quietly overwritten." },
  { date: "2026-09-17", element: "3.2", domain: "fleet", what: "Pods were commissioned with their own doctrines rather than one undifferentiated fleet." },
  { date: "2026-09-06", element: "8.3", domain: "fleet", what: "User submissions land in quarantine and a human reviews them before anything publishes — asking permission is built into the pipeline." },
  { date: "2026-09-19", element: "6.4", domain: "fleet", what: "The preview cleaner repaired 1,787 contaminated previews across a 76,000-document archive — tending the wild." },
  { date: "2026-09-19", element: "8.6", domain: "village", what: "The Grounding/Earthing entry is labeled 'Weak / contested' and included anyway — the honesty rule applied to the Village's own content." },
  { date: "2026-09-17", element: "1.8", domain: "fleet", what: "The svpwiki scout read 'constant read timeouts' as a mis-set instrument rather than a failing source — the wiki's page list legitimately takes 17-25s and our timeout sat right at the edge. The deeper catch: on a failed fetch the old code advanced the offset, so a transient timeout permanently skipped that page range on resume. The terrain had been read wrong, and the wrong reading was silently costing ground." },
  { date: "2026-09-20", element: "3.5", domain: "fleet", what: "The fleet built a strengths ledger (cron-coordination/STRENGTHS.md) whose bar is a mechanism plus a receipt, not praise — and which names its own sampling bias: it records who was watched, not who was good." },
  { date: "2026-09-22", element: "6.6", domain: "fleet", what: "The translation sweeper went back for work that had been stranded since 2026-09-11 — and found the reason: 37 manifests where completed chunks were never registered, a systemic bug rather than one stalled job. Clearing the block fixed the cause, not just the symptom: Korschelt 1892 (131/131 chunks, stranded 11 days) was assembled, five blocked documents were unblocked and translated, and the fully-translated count rose 66→71." },
  { date: "2026-09-23", element: "1.6", domain: "fleet", what: "The AFLinks sync run recorded its own near-miss, not just its recovery. A tagging stamp had been written before the push; the remote then moved, and the lane's sanctioned recovery (git reset --hard origin/main) would have discarded the freshly tagged shards while the stamp still matched the live total — so the next cycle would have skipped tagging against untagged data and pushed it silently. The hazard and the rule it produced ('reset --hard in this lane must invalidate the tagging stamp in the same step') went into FINDINGS.md, not only the successful re-push." },
  { date: "2026-09-24", element: "4.7", domain: "fleet", what: "The fleet wrote a claim-status record for the radionics lineage (Abrams, 1916-1988) that is more honest than the lineage's own corpus. A sweep of all 185 index chunks (92,187 docs) found the vault's radionics material is 100% practitioner and patent literature — no JAMA, no FDA record, no court document — and the archive's own nine-part 'History and Development of Radionics' (1968-70) never names the AMA, Fishbein, the 1923-24 investigation, or the 1924 verdict, while one SVPwiki page names all of them. The dead line is kept readable including what killed it." },
  { date: "2026-09-25", element: "1.7", domain: "fleet", what: "The fleet tested one of its own written agreements against the environment and found it was a declaration, not a mechanism. The clean-chem prompt stated that withholding the repo PAT would make the helper script's push fail harmlessly; a run with the key deliberately absent pushed anyway, because the sandbox GitHub App credential has write access to that repo. The false premise was corrected in writing (FINDINGS.md, commit 390bde8) rather than quietly relied on." }
];
