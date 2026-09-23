/* ============================================================
 * THE VILLAGE — MEDITATION & ABILITIES
 * The practice-to-ability map: how different meditations,
 * breathing practices, postures, and prayer produce different
 * results — and how those map onto the traditional "Siddhis."
 *
 * THE WHOLE CHAIN (Chris, 2026-09-21). Every entry carries four
 * links, and every link is labeled separately:
 *
 *   PRACTICE → ENERGY-BODY EFFECT → ABILITY → LONG-TERM MEANING
 *   verifiable      claim             claim        claim
 *
 * Why the whole chain matters even where the upper links are not
 * testable: holding the whole chain in view changes how you do
 * the practice. A practice done as "this helps me focus" and the
 * same practice done as "this shapes the body toward a capacity
 * that outlasts it" are not the same practice, even when the
 * movements are identical. The intention is part of the technique.
 *
 * THE HONEST DISCIPLINE — label every link, never collapse them:
 *   Collapse DOWNWARD ("it's just breathing, it just calms you")
 *   strips the practice of its direction and makes it
 *   interchangeable with any other calming technique.
 *   Collapse UPWARD ("it does all of this, therefore it's proven")
 *   smuggles untestable claims in on the back of a testable one.
 * Both can be true at once. Only one needs a receipt.
 *
 * A practice with `measurable: "none identified"` is NOT a
 * refutation — it is a falsifiable-but-untested claim. It gets
 * filed, not deleted. (Chris: "the falsifiable ones can be
 * transitioned into testable elements while the unfalsifiable
 * ones can be filed away for when we can upgrade our discernment
 * or our testing capabilities.")
 *
 * GROWN BY: the meditation-abilities cron — one entry, one
 * practical application, and one fleet practice per run.
 * Doctrine: living-library/synthesis/meditation-abilities/README.md
 * Gate: validate_meditation.py — fails on a missing label, a
 * missing source, or an entry with no application.
 *
 * RIGHTS GATE: descriptions are our own words; sources are
 * attributed and linked, never reproduced. No treatment claims —
 * the claim shape is always "this is what the source says and
 * here is how you would test it," never "this works."
 * i18n: es* variants on user-facing fields; research is English-only.
 * ============================================================ */

const MEDITATION_SYSTEMS = [
  {
    id: "pranayama",
    icon: "🌬️",
    name: "Pranayama — The Classical Breath Practices",
    esName: "Pranayama — Las Prácticas Clásicas de Respiración",
    tagline: "The most measurable of the traditional set — real instruments exist here.",
    lineage: "Classical yoga: the Yoga Sutras of Patanjali (c. 400 CE) places pranayama as the fourth limb, and the Hatha Yoga Pradipika (15th c.) details the techniques. The tradition's own claim is that breath mastery precedes mind mastery — and it is the rare traditional claim with modern instruments pointed at it.",
    what: "A family of deliberate breath techniques rather than one practice: nadi shodhana (alternate nostril), ujjayi (the soft throat constriction), bhastrika (bellows), and kumbhaka (retention). What they share is that the breath is made slow, even, and intentional — and the tradition holds that this directly shapes the mind's state rather than merely accompanying it.",
    esWhat: "Una familia de técnicas deliberadas de respiración, no una sola práctica: nadi shodhana (fosa nasal alterna), ujjayi (constricción suave de la garganta), bhastrika (fuelle) y kumbhaka (retención). Lo que comparten es que la respiración se vuelve lenta, uniforme e intencional.",
    chain: {
      practice: "Slow, even, intentional breathing through specific patterns. Fully verifiable — you do it or you do not.",
      energyBody: "The tradition says prana (or chi) is moved and balanced, and that the channels are cleared. This is a claim from the tradition, not a measurement.",
      ability: "The measurable part is real: CO₂ tolerance, vagal tone, respiratory rate, and attention stability all move. The classical Siddhis attributed to breath mastery — including levitation — are folklore, and are filed as such.",
      meaning: "The classical claim is that breath is the bridge between body and mind, so mastering it is the precondition for everything further up the chain."
    },
    claimed: "The tradition holds that breath control stills the mind and moves prana; modern research holds that slow breathing shifts autonomic balance. The two claims agree on the observable part and diverge on the mechanism.",
    measurable: "Yes — HRV (RMSSD and high-frequency power), respiratory rate, CO₂ tolerance (BOLT score), and vagal tone are all validated instruments. This is the best-instrumented entry in the section.",
    correlate: "Pranayama is the fourth limb of the eight-limbed path. The classical breath-related Siddhis are filed as folklore.",
    label: "documented",
    practice: [
      "Nadi shodhana — alternate nostril: close one nostril, inhale; close the other, exhale; reverse. Even count, no strain.",
      "Ujjayi — the soft throat constriction that makes a quiet ocean sound, used as the default breath through a slow practice.",
      "Bhastrika — bellows: brisk, forceful, even inhale and exhale through the nose. Short rounds only; stop if dizzy.",
      "Kumbhaka — retention after inhale or exhale. **Skip this one unless a qualified teacher is guiding you**; it is the technique with a genuine safety note.",
      "The slow base — about six breaths per minute, exhale slightly longer than inhale. This is the version with the most research behind it.",
      "Safety — never force or strain. Dizziness means stop. Anyone pregnant, or with cardiovascular or respiratory conditions, should check with a clinician first."
    ],
    reps: "5–10 minutes daily for the slow base; alternate-nostril in short sessions; bhastrika in brief rounds. Retention only under instruction.",
    evidence: "Moderate–Strong benchmark evidence (for the physiological effects)",
    evClass: "strong",
    research: [
      {
        source: "Zaccaro, et al., 'How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing', Frontiers in Human Neuroscience (2018)",
        claim: "Slow breathing at around six breaths per minute increases heart-rate variability, improves autonomic balance, and reduces anxiety measures across the reviewed literature. The review is clear that the mechanism is autonomic, not 'energy' — which is exactly the distinction this entry keeps.",
        medium: "systematic review",
        confidence: "Moderate–Strong",
        year: "2018"
      },
      {
        source: "Balban, et al., 'Brief structured respiration practices enhance mood and reduce physiological arousal', Cell Reports Medicine (2023)",
        claim: "Five minutes daily of cyclic sighing (extended exhale) improved mood and lowered respiratory rate more than mindfulness meditation over one month. The lever is the long exhale.",
        medium: "randomized controlled study",
        confidence: "Strong (single well-designed study)",
        year: "2023"
      },
      {
        source: "The CO₂ tolerance literature (BOLT score and breath-hold measures)",
        claim: "Breath-hold tolerance is a repeatable, cheap, at-home measure of respiratory and autonomic function that responds to consistent practice. It is the most accessible instrument in this section — a stopwatch is the whole kit.",
        medium: "physiological measurement literature",
        confidence: "Moderate",
        year: "2000s–present"
      }
    ],
    verify: "The BOLT score, before and after eight weeks: exhale normally, hold your nose, and time until the first definite urge to breathe. Record it. It is one number, it needs no equipment, and it moves for most people who practise consistently.",
    village: "The bridge between this section and Vitality & Movement, which covers the physiology of slow breathing under `breathwork`. This entry is the tradition's own framing of the same act — and the place where the tradition's measurable claim and its unfalsifiable ones are visibly separated.",
    quest: ["The Breath Map", "Practise the slow base (six breaths per minute, exhale longer) for five minutes daily for four weeks. Measure your BOLT score on day 1 and day 28. Record both numbers and whether the change matched what you expected.", ["PE", "Health", "Science"], "🌬️"]
  },

  {
    id: "sit-spot",
    icon: "🪵",
    name: "Sit Spot — Inner Tracking",
    esName: "Sit Spot — Rastreo Interior",
    tagline: "The lane's first real finding: a contemplative practice the fleet already runs as a protocol.",
    lineage: "Jon Young and the Coyote Mentoring / 8 Shields lineage (the 512 Project), where a daily 'sit spot' is the foundational practice. Independently, the contemplative traditions have their own versions of simply sitting in one place and attending. The fleet already runs a functional analogue as Inner Tracking.",
    what: "Return to the same outdoor place, at roughly the same time, and sit still and quiet. Not a walk, not a hike — the same spot. The practice is the repetition: because the place is constant, everything that changes in it becomes visible. The tradition's claim is that this builds a felt connection to place and a sharper perceptual read of it.",
    esWhat: "Volver al mismo lugar al aire libre, a la misma hora aproximada, y sentarse quieto y en silencio. No es una caminata: es el mismo sitio. La práctica es la repetición — como el lugar es constante, todo lo que cambia en él se vuelve visible.",
    chain: {
      practice: "Sit in one fixed outdoor place, daily, for a set time. Fully verifiable.",
      energyBody: "The tradition describes a 'body radar' and a felt sense of connection to place that develops with repetition. This is a claim from the lineage, not a measurement.",
      ability: "Claimed: pattern recognition, tracking skill, deep listening, and a sense of belonging. Partly measurable — validated nature-connectedness instruments exist, and attention restoration is a real research line.",
      meaning: "The lineage's own framing is that this is how a person becomes native to a place — the practice that turns a location into a home ground."
    },
    claimed: "Jon Young's lineage holds that repeated sits build connection to place and sharpen perception, and that this is the foundation for tracking and for community. The claim is specific and, unusually for this section, partly testable.",
    measurable: "Partly — the Nature Relatedness Scale (Nisbet & Zelenski) is a validated instrument for connection to nature, and the attention-restoration literature (Kaplan) is a real research line. Tracking skill itself is not instrumented.",
    correlate: "Inner Tracking — one of the 64 cultural elements in the 512 / 8 Shields map already carried in the Village's Mentor's Circle.",
    label: "plausible",
    practice: [
      "Pick one place — reachable daily, safe, and preferably with some living complexity: a yard corner, a park bench, a trail edge.",
      "Same time, same place — the constancy is the method. Changing the spot resets the practice.",
      "Sit still and quiet — 10–20 minutes. No phone, no music, no book. Boredom is part of it.",
      "Attend outward — notice what moves, what sounds, what smells, what changed since yesterday.",
      "Keep a one-line log — date, weather, and one thing noticed. The log is what turns sitting into tracking.",
      "Do not perform it — the practice is not 'being good at nature'. It is showing up to the same place until the place becomes legible."
    ],
    reps: "10–20 minutes daily, same place, same time. The log is what makes it compound — a sit without a note is a sit you will not remember.",
    evidence: "Moderate benchmark evidence (for connection and attention; tracking skill not instrumented)",
    evClass: "moderate",
    research: [
      {
        source: "Nisbet & Zelenski — the Nature Relatedness Scale (NR-6 / NR-21)",
        claim: "Connection to nature is measurable with a validated self-report instrument that has been used across many studies and correlates with wellbeing and pro-environmental behaviour. This gives the sit-spot claim a real outcome measure, which most entries in this section do not have.",
        medium: "validated psychometric instrument",
        confidence: "Moderate–Strong (as a measure)",
        year: "2009–present"
      },
      {
        source: "Kaplan & Kaplan — attention restoration theory; the nature-and-attention literature",
        claim: "Time in natural environments is associated with restored directed attention and reduced mental fatigue. The effect is well-replicated in direction, though effect sizes vary and the mechanisms are debated.",
        medium: "research programme + reviews",
        confidence: "Moderate",
        year: "1989–present"
      },
      {
        source: "Jon Young / 8 Shields — Coyote Mentoring and the sit spot",
        claim: "The lineage holds that a daily sit spot builds place-connection, sensory attunement, and the foundation for tracking. This is practitioner documentation from a living tradition, not a controlled study — and it is labeled as such.",
        medium: "practitioner documentation / living lineage",
        confidence: "High (as a lineage) · none claimed (as an outcome)",
        year: "ongoing"
      }
    ],
    verify: "The NR-6 scale before and after eight weeks of daily sits, plus a simple count: how many distinct species or events you can name in your spot on day 1 versus day 56. The count is the honest one — it is your own data and it is hard to fake.",
    village: "This is the lane's first real finding: a contemplative practice the fleet already runs as an operational protocol. The reflection agents do this; the observation discipline does this. **The practice was already there — naming it is what makes it improvable.** It is also the practice that maps most directly onto the Village's own Mentor's Circle, where Inner Tracking is already one of the 64 elements.",
    quest: ["Sit in One Place", "Choose one outdoor spot and sit there for 15 minutes a day for four weeks. Keep a one-line log each time: date, weather, one thing noticed. On day 1 and day 28, write down how many distinct species or events you can name in that spot.", ["Science", "Health", "Geography"], "🪵"]
  },

  {
    id: "focused-attention",
    icon: "🎯",
    name: "Focused Attention — Shamatha / Single-Point",
    esName: "Atención Focalizada — Shamatha / Un Solo Punto",
    tagline: "Attention is trainable. That is the whole claim, and it is the one that holds.",
    lineage: "Buddhist shamatha (calm-abiding) and the broader single-point concentration traditions; in the yoga frame it is dharana, the sixth limb, which the tradition says ripens into dhyana. Modern research entered through the mindfulness literature from the 1990s onward.",
    what: "Rest attention on one object — usually the breath — and each time it wanders, return it. The returning is not a failure of the practice; the returning IS the practice. The tradition's claim is that this stabilises attention, and that a stabilised attention is the precondition for insight. The modern claim is narrower and better supported: attention is trainable.",
    esWhat: "Apoyar la atención en un solo objeto — normalmente la respiración — y cada vez que se distrae, traerla de vuelta. Volver no es un fallo de la práctica: volver ES la práctica.",
    chain: {
      practice: "Sit and follow one object, returning attention each time it wanders. Fully verifiable.",
      energyBody: "The tradition describes subtle-channel effects and the settling of 'winds'. This is a claim, and this entry does not measure it.",
      ability: "Claimed: sustained attention, perceptual discrimination, and — further up the chain — insight. Partly measurable: attention tasks and EEG show real effects; far transfer beyond the trained task is genuinely contested.",
      meaning: "The tradition's own framing is that a stable attention is what makes insight possible — the practice is instrumental, not an end."
    },
    claimed: "The tradition claims stabilised attention ripens into insight. Modern research claims something much narrower: focused-attention training improves attentional control, with effects that depend heavily on dose and practice quality.",
    measurable: "Yes, partly — sustained-attention tasks and EEG measures respond to training. The honest caveat: how far the benefit transfers beyond the trained task is mixed in the literature, so the claim here is deliberately modest.",
    correlate: "Dharana → dhyana in the eight-limbed path. The Siddhis of heightened perception are filed as claims.",
    label: "documented",
    practice: [
      "Sit upright, eyes closed or softly downcast. Ten minutes to start.",
      "Choose one object — the breath at the nostrils is the standard, because it is always available and always changing.",
      "Follow it — notice the inhale, the pause, the exhale. Do not control it; watch it.",
      "When it wanders, return — and count the return, not the wandering. The count is the measure.",
      "Do not chase a state — the practice is the returning, not the calm. Chasing calm is the most common way to stall.",
      "Extend gradually — ten minutes daily beats an hour once a week, and the literature is consistent on this."
    ],
    reps: "10 minutes daily, building toward 20. The returning is the repetition; the wandering is the opportunity.",
    evidence: "Moderate benchmark evidence (attentional control; far transfer contested)",
    evClass: "moderate",
    research: [
      {
        source: "MacLean, et al., 'Intensive meditation training improves perceptual discrimination and sustained attention', Psychological Science 21(6) (2010)",
        claim: "Intensive focused-attention training improved sustained attention and perceptual discrimination in a randomized design. The relevant finding is narrow and real: attention is trainable, and training it changes what you can perceive.",
        medium: "randomized controlled study",
        confidence: "Moderate",
        year: "2010"
      },
      {
        source: "The broader focused-attention and mindfulness literature (MBSR and successors)",
        claim: "Across many studies, focused-attention practice shows small-to-moderate improvements in attentional control, with effects that depend on dose and practice quality. The literature is mixed on how far the benefits transfer beyond the trained task — so the honest claim is 'attention is trainable', not 'meditation fixes cognition'.",
        medium: "mixed RCT and review literature",
        confidence: "Moderate (for attentional control) · weak (for far transfer)",
        year: "1990s–present"
      },
      {
        source: "The adverse-effects literature (Britton, Lindahl and colleagues)",
        claim: "Meditation is not universally benign: a systematic account of meditation-related adverse experiences identified 59 distinct experiences across 7 domains. This belongs in the entry because the honest version of a practice includes its failure modes, and because a family teaching children should know they exist.",
        medium: "qualitative and clinical literature",
        confidence: "Moderate (that adverse experiences occur) · contested (on prevalence)",
        year: "2017–present"
      }
    ],
    verify: "Two numbers, four weeks: time yourself on a sustained-attention task before and after — or simply count how many times you notice your attention has wandered in a ten-minute sit, and watch whether the count changes. Both are real, and the second needs nothing but a tally.",
    village: "This is the entry that connects the meditation lane to Cognitive & EMF Defense, where attention training is the substrate of resisting manipulation. **You cannot notice you are being manipulated if you cannot hold your attention long enough to notice anything.** Same practice, two purposes.",
    quest: ["Ten Minutes of Attention", "Sit and follow your breath for ten minutes a day for two weeks. Each time attention wanders, bring it back and count the return. Record the daily count and see whether the number changes.", ["Health", "PE", "Science"], "🎯"]
  },

  {
    id: "prayer",
    icon: "🕯️",
    name: "Prayer — The Honest Negative",
    esName: "Oración — El Negativo Honesto",
    tagline: "The largest trial found no benefit. That is a real result, and it belongs here.",
    lineage: "Prayer is the oldest and most universal contemplative practice; it is also the one with the most contested evidence. The BioGeometry corpus adds a specific claim — that sincere prayer generates BG3 — which is a practitioner claim, not a measured one. The modern research entered through the intercessory-prayer trials of the 1990s and 2000s.",
    what: "This entry exists to model how the Village handles a practice the family may hold dear and the evidence does not support. The largest randomized trial of intercessory prayer (STEP, 2006) found no benefit — and found a *slight increase* in complications among patients who knew they were being prayed for. That is the honest result. It does not follow that prayer is worthless; it follows that prayer's measurable effects are not where the tradition locates its value.",
    esWhat: "Esta entrada existe para mostrar cómo la Aldea trata una práctica que la familia puede apreciar y que la evidencia no respalda. El mayor ensayo aleatorizado de oración intercesora (STEP, 2006) no encontró beneficio — y halló un ligero aumento de complicaciones entre pacientes que sabían que se oraba por ellos.",
    chain: {
      practice: "Deliberate, intentional prayer. Fully verifiable — you do it or you do not.",
      energyBody: "The BioGeometry corpus claims sincere prayer generates BG3. This is a practitioner claim with no independent measurement, and it is filed as folklore rather than deleted.",
      ability: "No ability claim survives scrutiny here. What is claimed is a quality of the environment or the person, not a capacity.",
      meaning: "This is where the tradition actually locates prayer's value — meaning, communion, and orientation. The upper link is the whole point, and it is the link no instrument reaches."
    },
    claimed: "The tradition claims prayer changes the person and the world. The largest trial tested the world-facing claim and found nothing. The person-facing claim was not what the trial measured.",
    measurable: "None identified for the intercessory claim — and that is a finding, not a gap. The BG3 claim is falsifiable in principle and untested in practice.",
    correlate: "None. Prayer does not map onto the Siddhi catalog, which is a useful signal about what kind of claim it is.",
    label: "folklore",
    practice: [
      "This entry prescribes nothing — it is a case study, not a technique.",
      "If your family prays, keep praying. The evidence does not reach the reason most people do it.",
      "If someone claims prayer produces a measurable physical effect, ask which instrument measured it and in what trial.",
      "Note the STEP result honestly, including the uncomfortable part — that is what makes the rest of this section credible.",
      "Distinguish the claim types: prayer as meaning is not the same claim as prayer as mechanism, and only one of them was tested.",
      "File it, do not delete it — the doctrine's rule: falsifiable-but-untested is a category, not a refutation."
    ],
    reps: "Not applicable — this is a labeled case study in how the section handles a contested practice.",
    evidence: "Weak / contested (the measurable claim); the meaning claim is untestable by any method we have",
    evClass: "weak",
    research: [
      {
        source: "Benson, et al., 'Study of the Therapeutic Effects of Intercessory Prayer (STEP) in cardiac bypass patients', American Heart Journal (2006)",
        claim: "In the largest randomized trial of intercessory prayer (about 1,800 patients), praying for patients was associated with no improvement in outcomes. Patients who were *told* they were being prayed for had a slightly higher rate of complications. The study is the honest anchor for this entry and is widely cited in both directions.",
        medium: "large randomized controlled trial",
        confidence: "Moderate–Strong (for the null result) · the secondary finding is debated",
        year: "2006"
      },
      {
        source: "The BioGeometry corpus — the claim that sincere prayer generates BG3",
        claim: "A practitioner claim from the BioGeometry literature that sincere prayer produces a measurable subtle-energy quality (BG3). No independent measurement has been published. Per the doctrine, this is filed as falsifiable-but-untested rather than dismissed — and it is explicitly not presented as established.",
        medium: "practitioner documentation",
        confidence: "None claimed (as an outcome)",
        year: "ongoing"
      },
      {
        source: "Coptic Christian saints' tombs — the energetic-testing claim",
        claim: "A specific claim that energetic testing at Coptic saints' tombs yields anomalous readings. Named by Chris as worth locating; **unverified and unsourced as of this entry.** It is listed here as an open item so the lane records what it has not yet checked.",
        medium: "unsourced claim — recorded as an open item",
        confidence: "None — not yet verified",
        year: "—"
      }
    ],
    verify: "The honest test of a claim like BG3 is a blinded one: a practitioner who does not know which condition is which, measuring prayer and non-prayer conditions in randomized order. That protocol is described in the Village's own chisel-cut protocol design. Until it is run, the claim is filed, not believed.",
    village: "The entry that models the section's honesty for a child. A family that can say 'we do this, and the biggest trial found nothing, and we still do it because the reason we do it was never what the trial measured' has learned something more valuable than any single practice. This is the Skeptic's Star territory.",
    quest: ["Read the Negative Result", "Find one study where a practice you believe in did not work — prayer, or any other. Read the actual paper, not a summary. Write five sentences on what it tested, what it found, and whether it tested the thing you actually care about.", ["Science", "Writing", "Constitution"], "🕯️"]
  },

  {
    id: "asana",
    icon: "🧘",
    name: "Asana — Posture, and the Test It Failed",
    esName: "Asana — La Postura, y el Examen que No Pasó",
    tagline: "The most-marketed claim — that it prevents falls — failed its largest trial. The tradition never made that claim.",
    lineage: "The Hatha Yoga Pradipika (15th c.) opens by treating asana as the first accessory of Hatha Yoga, practised for steadiness, health, and lightness of body; the Yoga Sutras of Patanjali (c. 400 CE) define asana as a steady and comfortable posture. The modern claim is a different one — yoga as exercise therapy — and it entered through clinical trials from the 2000s onward.",
    what: "The family of physical postures — standing, seated, twisting, balancing — held deliberately, usually with the breath. The tradition's stated purpose is narrower than the modern marketing: the posture exists to make the body steady enough to sit still for the practices that follow it. The trials test something else — yoga as exercise for back pain, balance, and falls.",
    esWhat: "La familia de posturas físicas — de pie, sentadas, con torsión, de equilibrio — sostenidas deliberadamente, normalmente con la respiración. El propósito que declara la tradición es más estrecho que el marketing moderno: la postura existe para que el cuerpo esté lo bastante firme para sentarse quieto en las prácticas que siguen. Los ensayos miden otra cosa: el yoga como ejercicio para el dolor de espalda, el equilibrio y las caídas.",
    chain: {
      practice: "Hold defined postures, deliberately, on a mat, usually coordinated with the breath. Fully verifiable — you do it or you do not.",
      energyBody: "The tradition's claim is that asana purifies and opens the subtle channels, removes blockages, and builds the body's capacity to hold a seat without disturbance. This is a claim from the tradition. No trial has measured it, and none has tried.",
      ability: "Partly measurable, and the measurement is humbling. Flexibility, strength, balance, and back function move — but modestly, and not more than other exercise moves them. The most-marketed ability claim, that yoga prevents falls, failed its largest trial, and the objective outcome moved the wrong way while self-reported confidence improved. The classical Siddhis attributed to posture mastery are filed as folklore.",
      meaning: "The tradition's own framing is that the body is the vehicle and asana is what makes the vehicle serviceable — you cannot hold the seat for a practice that outlasts the body if the body cannot hold the seat. This is the link no trial has ever tested."
    },
    claimed: "The tradition claims posture prepares the body for the higher limbs. The modern market claims yoga improves balance, prevents falls, and fixes backs. The trials tested the modern claims and found them smaller than advertised — and the falls claim failed outright. The traditional claim was never tested, which is not the same as it being false.",
    measurable: "Yes, partly — back-related function and pain, balance (one-legged stance, postural sway), mobility (timed sit-to-stand, four-metre walk), and falls rate. The falls rate is the one objective outcome measured at scale, and it went the wrong way.",
    correlate: "Asana is the third limb of Patanjali's eight-limbed path and the first limb of Hatha Yoga. The posture-related Siddhis — the claim that a mastered seat confers specific powers — are filed as folklore.",
    label: "documented",
    practice: [
      "Start with the seat — a simple cross-legged or kneeling posture you can hold without strain. The tradition's first asana is the one you can stay in, not the one that looks impressive.",
      "Standing postures — the balance work: tree, warrior, chair. These are the ones the balance trials actually used, and they are where the measurable effects live.",
      "Back-focused sequences — the Cochrane trials used programmes built specifically for low back pain, taught by experienced teachers, one or two sessions a week for six to twenty-four weeks. That is the dose the evidence covers.",
      "Move with the breath — the tradition ties posture to breath; the trials mostly did not isolate this, so treat it as the tradition's claim rather than a measured one.",
      "Never force or strain — the Cochrane review found yoga increased adverse events compared with doing nothing, mostly increased back pain. The safety note is not decorative.",
      "Do not confuse the feeling with the outcome — in the SAGE trial the participants felt more confident about their balance and fell more. Track the objective number, not the confidence."
    ],
    reps: "One or two sessions per week for six to twenty-four weeks is the dose the back-pain evidence covers; the balance trials used twice weekly for twelve weeks. Daily practice is not required and is not what was tested.",
    evidence: "Moderate benchmark evidence (for modest physiological effects); the falls-prevention claim failed its largest trial",
    evClass: "moderate",
    research: [
      {
        source: "Wieland, Skoetz, Pilkington, Harbin, Vempati & Berman, 'Yoga for chronic non-specific low back pain', Cochrane Database of Systematic Reviews, Issue 11, Art. No. CD010671 (2022)",
        claim: "Against no exercise, yoga probably produces a small improvement in back-related function and a clinically unimportant improvement in pain at three months. Against other back-focused exercise there is little or no difference. Yoga was associated with more adverse events than no exercise, mostly increased back pain. The authors' own conclusion is the sharpest line in the entry: because every trial was unblinded and at high risk of bias, it is unlikely that blinded comparisons would find a clinically important benefit.",
        medium: "systematic review (Cochrane)",
        confidence: "Low to moderate certainty",
        year: "2022"
      },
      {
        source: "Oliveira, Sherrington, Lord, et al., 'The effect of an Iyengar yoga-based exercise programme versus a seated yoga relaxation programme on falls in people aged 60 years and older (SAGE)', The Lancet Healthy Longevity (2025)",
        claim: "The largest test of the falls claim: 700 community-dwelling adults aged 60 and over, randomised to an Iyengar-based yoga exercise programme (80 supervised classes over twelve months) or a seated relaxation control. Falls were MORE frequent in the yoga group — 0.87 versus 0.64 falls per person-year, incidence rate ratio 1.33 (95% CI 1.01–1.75, p=0.044). Planned physical activity and self-reported balance confidence both improved. The trial's own interpretation is that the programme as delivered should not be recommended for fall prevention.",
        medium: "large randomized controlled trial",
        confidence: "Strong (for the null-to-negative result)",
        year: "2025"
      },
      {
        source: "Tiedemann, O'Rourke, Sesto & Sherrington, 'A 12-Week Iyengar Yoga Program Improved Balance and Mobility in Older Community-Dwelling People: A Pilot Randomized Controlled Trial', Journals of Gerontology Series A (2013)",
        claim: "A small pilot (54 participants, twice weekly for twelve weeks, standing postures) improved standing balance, timed sit-to-stand, four-metre walk time, and one-legged stand with eyes closed. This is the positive counterweight to SAGE — and it is a pilot, which is exactly why the larger trial was run. It is also where this entry's at-home test comes from: the measures are a stopwatch and a chair.",
        medium: "pilot randomized controlled trial",
        confidence: "Moderate (small, single trial)",
        year: "2013"
      },
      {
        source: "The Hatha Yoga Pradipika (15th c.), ch. 1, and the Yoga Sutras of Patanjali (c. 400 CE), 2.46 — the tradition's own statement of what asana is for",
        claim: "The Hatha Yoga Pradipika places asana first among the accessories of Hatha Yoga and says it is practised for steadiness, health, and lightness of body; Patanjali defines asana as a steady and comfortable posture. The tradition's purpose is to make the body fit to sit — a preparatory claim about the body's capacity, not a therapeutic claim about pain or falls. Presented here as the tradition's claim, not as evidence, and paraphrased rather than reproduced.",
        medium: "primary text (translated) — tradition claim",
        confidence: "High (as a statement of the tradition) · none claimed (as an outcome)",
        year: "c. 400 CE / 15th c."
      }
    ],
    verify: "The one-legged stand with eyes closed, timed, plus a thirty-second chair-stand count — both are field measures the balance trials themselves used, and both need only a stopwatch and a chair. Record them on day 1 and at week 12. Then the part that matters: also record how confident you feel about your balance, on a scale of one to ten, and watch whether the two numbers move together. The SAGE trial found they can move in opposite directions, so the objective number is the one that counts.",
    village: "This is the section's second honest negative, and the sharper one, because the claim it fails is a modern claim rather than a traditional one. Prayer fails a claim the tradition never made; asana fails a claim the market made on the tradition's behalf. It also carries the section's most transferable lesson — that a self-reported measure can improve while the objective outcome worsens — which is the same discipline the fleet applies to its own status reports. The honest read is not that yoga is worthless: it is that the effect is real, modest, not better than other exercise, and not located where the advertising put it.",
    quest: ["Test the Feeling Against the Number", "Practise a short standing-balance sequence twice a week for eight weeks. Measure two things on day 1 and day 56: the objective one (timed one-legged stand with eyes closed, and a thirty-second chair-stand count) and the felt one (how confident you are about your balance, one to ten). Report both, and say plainly whether they agreed.", ["PE", "Health", "Math"], "🧘"]
  }
];

/* ---- Survival Mode guild: Still Water ----
 * Same shape as the Digital Defense and Clear Signal guilds.
 * Pushed into VILLAGE_QUESTS at load, guarded against double-loading. */
const MEDITATION_QUESTS = [
  {
    type: "RPG",
    biomes: ["apartment","suburb","rural"],
    name: "Still Water",
    desc: "Practice is a technology — map what each practice actually does, measure it honestly, and file what cannot yet be tested.",
    sand: [
      ["Sit in One Place","Choose an outdoor spot and sit there quietly for ten minutes. No phone, no book. Just watch what the place does.",["Science","Health"],"🪵"],
      ["Count the Returns","Sit and follow your breath for five minutes. Each time your attention wanders, bring it back and count it. The count is the practice.",["Health","Math"],"🎯"],
      ["The One-Line Log","Start a sit-spot log: date, weather, and one thing you noticed. One line per sit. The log is what turns sitting into tracking.",["Writing","Science"],"📓"],
      ["Six Breaths a Minute","Breathe in for five seconds and out for five, for five minutes. Notice what changes in how you feel.",["PE","Health"],"🌬️"],
      ["Name the Four Links","For any practice you do, name all four parts out loud: what you do, what it shapes, what it develops, and what it is for.",["Writing","Science"],"🔗"],
      ["Learn the Labels","Learn the four evidence labels: replicated, documented, plausible, folklore. Sort five claims you have heard into them.",["Science","Writing"],"🏷️"],
      ["Measure Your Breath","Take your BOLT score: exhale normally, hold your nose, and time until the first real urge to breathe. Write the number down.",["Math","Health"],"⏱️"],
      ["Find the Claim Type","Take one health claim from an ad and ask: is this a meaning claim or a mechanism claim? Only one of them can be tested.",["Science","Economics"],"🔍"],
      ["Notice One Change","In your sit spot, find one thing that is different from last time. That difference is the whole method.",["Science","Geography"],"🍃"],
      ["Map Your Own Practices","List every practice your family already does — prayer, walks, meals together. You may find you already run more than you thought.",["Writing","Health"],"🗺️"]
    ],
    straw: [
      ["Two Weeks of Sits","Sit in the same spot for 15 minutes a day for two weeks. Log every one.",["Health","Science"],"🪵"],
      ["The Breath Map","Practise the slow base for five minutes daily for four weeks. Measure your BOLT score on day 1 and day 28.",["PE","Math"],"🌬️"],
      ["Attention, Counted","Ten minutes of focused attention daily for two weeks, counting the returns each day. Watch whether the number changes.",["Health","PE"],"🎯"],
      ["Read a Real Paper","Find one actual study behind a claim you believe. Read the paper, not the summary. Note what it really tested.",["Science","Writing"],"📄"],
      ["The Species Count","In your sit spot, count how many distinct species or events you can name. Do it on day 1 and again on day 28.",["Science","Math"],"🐦"],
      ["Try the Nature Scale","Take a validated nature-connection questionnaire before and after a month of sits. It is a real instrument, not a feeling.",["Science","Math"],"📊"],
      ["Ask for the Instrument","For any practice claiming a physical effect, ask which instrument measured it and in what trial. Ask it every time for a week.",["Science","Writing"],"🔬"],
      ["Build the Family Practice Map","One page: every practice the family does, what each is for, and which claims are testable. Post it where everyone can read it.",["Writing","Health"],"🗺️"]
    ],
    wood: [
      ["Run the Monthly Practice Review","Twenty minutes, same day each month: one sit log review, one measurement, one claim checked. Boring means it works.",["Science","PE"],"🔄"],
      ["Teach the Four Links","Teach a friend or grandparent the four-link chain and the four labels, then sort three claims together.",["Writing","Health"],"👵"],
      ["The Eight-Week Breath Study","Change only the breath practice. Measure BOLT and HRV before and after. Write the result down whichever way it went.",["Science","Math"],"📈"],
      ["Host a Practice Night","The family each teaches one practice they use, and the others ask: what does it develop, and how would we know?",["Writing","Art"],"🎤"],
      ["Log a Null Result","Deliberately test something you expect to work and report honestly if it does not. A null result earns the Skeptic's Star.",["Science","Writing"],"🚫"],
      ["Build a Blinded Test","Design a simple blinded test for one claim: someone who does not know which condition is which, in random order.",["Science","Math"],"🙈"],
      ["Sit Through the Seasons","Keep the same sit spot through a full season change and log what arrives and what leaves.",["Science","Geography"],"🍂"],
      ["Help Another Family Start","Share the sit-spot practice and the four labels with another family, and help them start their own log.",["Health","Writing"],"🤝"]
    ],
    iron: [
      ["The Unfalsifiable Tabletop","Talk it through: a practice you love makes a claim no instrument can reach. Decide as a family how you hold it honestly without either dismissing it or pretending it is proven.",["Writing","Constitution"],"🕯️"],
      ["Write the Practice Charter","One page: what the family practises, what each practice is claimed to do, and which claims are testable. Every member knows where it lives.",["Writing","Constitution"],"📜"],
      ["Run the Whole Chain Audit","Pick one practice and label every link — practice, energy-body effect, ability, meaning — with its evidence class. Find the link where the evidence stops.",["Science","Writing"],"🔗"],
      ["The Year of One Practice","Choose one practice and do it daily for a year, measuring one number monthly. The long horizon is the point of the Elder link.",["Health","PE"],"🗓️"],
      ["Design a Replication","Take a claim from this section and design the experiment that would settle it. Specify the instrument, the blinding, and what result would change your mind.",["Science","Math"],"🧪"],
      ["Rehearse the Report","Practise reporting a null result to the family without apology or spin. The skill is telling the truth about your own practice.",["Writing","Health"],"📮"],
      ["Hold the Annual Great Rotation","Once a year: re-read the whole map, re-measure everything, and retire any entry whose evidence has changed. The map stays honest because the family keeps checking it.",["Science","PE"],"🗓️"]
    ]
  }
];

/* Register the guild exactly like the other guilds:
 * one array, one push, guarded against double-loading. */
if (typeof VILLAGE_QUESTS !== 'undefined' &&
    !VILLAGE_QUESTS.some(g => g && g.name === "Still Water")) {
  VILLAGE_QUESTS.push(...MEDITATION_QUESTS);
}

/* ============================================================
 * MEDITATION DEPOT — free, public, primary sources
 * ============================================================ */
const MEDITATION_DEPOT = [
  { t: "PubMed — breathwork and slow breathing", u: "https://pubmed.ncbi.nlm.nih.gov/?term=slow+breathing+heart+rate+variability", d: "The primary literature behind the most measurable entry in this section." },
  { t: "PubMed — meditation adverse effects", u: "https://pubmed.ncbi.nlm.nih.gov/?term=meditation+adverse+effects", d: "The literature that makes this section honest: meditation is not universally benign." },
  { t: "PubMed — focused attention training", u: "https://pubmed.ncbi.nlm.nih.gov/?term=focused+attention+meditation+sustained+attention", d: "The attention-training research, including the contested far-transfer question." },
  { t: "8 Shields — the 512 Project", u: "https://8shields.org/", d: "The lineage behind sit spot and the 64 cultural elements already mapped in the Village's Mentor's Circle." },
  { t: "Flow Research Collective", u: "https://www.flowresearchcollective.com/", d: "One hub among several on meditation and creativity — the citation trails connect to the academic networks." },
  { t: "Nature Relatedness Scale (NR-6)", u: "https://pubmed.ncbi.nlm.nih.gov/?term=nature+relatedness+scale+Nisbet", d: "The validated instrument that gives the sit-spot claim a real outcome measure." },
  { t: "STEP trial — intercessory prayer", u: "https://pubmed.ncbi.nlm.nih.gov/?term=intercessory+prayer+STEP+cardiac+bypass", d: "The largest randomized trial of prayer. The honest negative this section keeps on purpose." },
  { t: "Cochrane — yoga for chronic low back pain", u: "https://www.cochrane.org/evidence/CD010671_yoga-chronic-non-specific-low-back-pain", d: "The systematic review behind the asana entry. Read the authors' own conclusion — it is blunter than the marketing." },
  { t: "SAGE trial — yoga and falls in older adults", u: "https://doi.org/10.1016/j.lanhl.2025.100749", d: "The largest test of the falls claim, and the one it failed. 700 participants; falls were more frequent in the yoga group." }
];

/* Cross-links to practices that already live elsewhere in the Library —
 * this section points at them rather than duplicating them. */
const MEDITATION_CROSSLINKS = [
  {
    id: "breathwork",
    icon: "🌬️",
    name: "Breathwork — Slow Breathing & Cyclic Sighing",
    esName: "Respiración — Lenta y Suspiro Cíclico",
    where: "Vitality & Movement",
    note: "The physiology of the same act pranayama describes. Vitality & Movement covers the mechanism and the trial data; this section covers the tradition's own framing and its unfalsifiable claims. Read both — they are the two halves of one practice."
  },
  {
    id: "cognitive-defense-attention",
    icon: "🔎",
    name: "Attention & Lateral Reading",
    esName: "Atención y Lectura Lateral",
    where: "Cognitive & EMF Defense",
    note: "Where attention training is put to work as a defense. You cannot notice you are being manipulated if you cannot hold your attention long enough to notice anything — same practice, different purpose."
  },
  {
    id: "mentors-circle",
    icon: "🌿",
    name: "The Mentor's Circle — Inner Tracking",
    esName: "El Círculo del Mentor — Rastreo Interior",
    where: "Mentor's Circle",
    note: "Inner Tracking is one of the 64 cultural elements already mapped in the Village. The sit spot is the practice; Inner Tracking is the element it develops."
  },
  {
    id: "flow-creativity",
    icon: "🌀",
    name: "Flow & Creativity — the hub map",
    esName: "Flujo y Creatividad — el mapa de centros",
    where: "living-library/synthesis/flow-creativity/",
    note: "The existing hub-and-spoke map of the flow and meditation research networks. This lane is the ability-outcome angle on the same hubs — FRC, EFRN, and the contemplative traditions themselves."
  }
];

/* ---- public API ---- */
try { window.MEDITATION_SYSTEMS = MEDITATION_SYSTEMS; } catch (e) {}
try { window.MEDITATION_QUESTS = MEDITATION_QUESTS; } catch (e) {}
try { window.MEDITATION_DEPOT = MEDITATION_DEPOT; } catch (e) {}
try { window.MEDITATION_CROSSLINKS = MEDITATION_CROSSLINKS; } catch (e) {}
