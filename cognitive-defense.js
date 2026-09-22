/* ============================================================
 * THE VILLAGE — COGNITIVE & EMF DEFENSE
 * The defense library: what actually protects a family against
 * cognitive warfare (the information environment) and against
 * electromagnetic exposure — ranked by evidence, labeled
 * honestly, including the entries that do NOT work.
 *
 * WHY THIS SECTION EXISTS
 * The threat that is continuously operating on a family is not a
 * directed-energy beam. It is the information environment. That
 * one is documented, ongoing, and targets everyone. The beam is
 * rare, hard to attribute, and almost nobody is a target for it.
 * Ranking these honestly — strongest evidence first — is the
 * whole point of the section.
 *
 * HONESTY RULE (same as Vitality & Movement and the rest of the
 * Library): every entry carries an evidence label. Where research
 * exists it is named with its medium and confidence. Where it
 * does not, the label says so. An entry that describes something
 * counterproductive says so too — the tinfoil entry is here
 * because the measurement is real and the folklore is wrong.
 *
 * NO FORCE FIELD. There is no meditation, breathing pattern, or
 * shielding practice with evidence that it blocks a directed-
 * energy beam. What these practices do is regulate the person:
 * attention, stress response, sleep, discernment. That is not
 * nothing. It is also not a shield, and the section says so.
 *
 * GROWN BY: hand-authored (2026-09-22), then maintained by the
 * village-maintain cron. An entry without a lineage, a practice,
 * and an honest evidence label is rejected by validate_cognitive.py.
 *
 * Sourcing discipline: guidance follows public agency practice
 * (FTC, CISA, WHO, ICNIRP, CDC) and the peer-reviewed literature,
 * written in our own words. General, not medical or legal advice.
 * i18n: user-facing fields carry es* variants; research entries
 * are English-only (same convention as MOVEMENT_SYSTEMS).
 * ============================================================ */

const COGNITIVE_DEFENSE_SYSTEMS = [
  {
    id: "prebunking-inoculation",
    icon: "💉",
    name: "Prebunking — Inoculation Against Manipulation",
    esName: "Prebunking — Inoculación contra la Manipulación",
    tagline: "The strongest defense in the whole section, and almost nobody teaches it.",
    lineage: "Inoculation theory, developed by social psychologist William McGuire in 1961–1964 — literally designed as a 'vaccine for brainwash' during the Cold War. Modern work by Sander van der Linden and Jon Roozenbeek at Cambridge turned it into scalable, tested interventions.",
    what: "Instead of fact-checking claims one at a time (slow, and it never reaches everyone), teach people the *techniques* that manipulation uses. Expose them to weakened doses of each technique, with the tell named, before they meet it live. The mental 'antibodies' generalize: a person who can name a false dichotomy can spot one in any subject, in any language, on any platform. This is the single most evidence-backed cognitive defense that exists.",
    esWhat: "En lugar de verificar afirmaciones una por una (lento, y nunca llega a todos), se enseñan las *técnicas* que usa la manipulación. Se expone a la persona a dosis débiles de cada técnica, con la señal nombrada, antes de encontrarla en vivo. Los 'anticuerpos' mentales se generalizan: quien puede nombrar un falso dilema lo detecta en cualquier tema y en cualquier plataforma.",
    practice: [
      "1. Emotional manipulation — the post makes you furious or afraid before it makes you think. Feeling first is the tell.",
      "2. Incoherence — the argument does not hold together; it works by momentum, not by logic.",
      "3. False dichotomy — only two options are offered, and one is obviously terrible. Real situations almost always have more.",
      "4. Scapegoating — one group is blamed for a complex problem. Simple answers to complex problems are the signature.",
      "5. Ad hominem — the person is attacked instead of the argument.",
      "6. Strawman — a position is misrepresented, then the misrepresentation is defeated.",
      "7. Whataboutism — a counter-accusation replaces an answer.",
      "8. Fake experts — credentials that sound authoritative and do not survive a search.",
      "9. Manufactured polarization — a fringe position is amplified until it looks like a 50/50 split.",
      "Practice: take five items from your own feed and mark which technique each one uses. Naming is the skill."
    ],
    reps: "One technique taught per week, five minutes of practice each time. The full set is nine. Re-run the drill monthly — the skill decays without use, and boosters work.",
    evidence: "Strong benchmark evidence",
    evClass: "strong",
    research: [
      {
        source: "Roozenbeek, van der Linden, Goldberg, Rathje & Lewandowsky, 'Psychological inoculation improves resilience against misinformation on social media', Science Advances 8(34):eabo6254 (2022)",
        claim: "Five short videos teaching five manipulation techniques improved recognition of those techniques, confidence in spotting them, and the quality of sharing decisions — across six randomized controlled studies (n=6,464) and an ecologically valid field study on YouTube (n=22,632). Effects held across the political spectrum. Cost of delivery: about $0.05 per view.",
        medium: "preregistered RCTs + field study",
        confidence: "Strong",
        year: "2022"
      },
      {
        source: "Simchon, Zipori, Teitelbaum, Lewandowsky & van der Linden, 'A signal detection theory meta-analysis of psychological inoculation against misinformation', Current Opinion in Psychology (2025)",
        claim: "Re-analysis of 33 inoculation experiments (combined N=37,025) using signal detection theory: inoculation reliably improves *discrimination* between reliable and unreliable content, and does NOT increase response bias — participants did not become uniformly skeptical or credulous. This is the key finding: it sharpens discernment rather than breeding generalized distrust.",
        medium: "meta-analysis (33 experiments)",
        confidence: "Strong",
        year: "2025"
      },
      {
        source: "McGuire, 'Resistance to persuasion conferred by active and passive prior refutation' (1964); the origin of inoculation theory",
        claim: "Pre-exposing someone to a weakened version of a persuasive attack, with a refutation, produces resistance to stronger attacks later — the biomedical vaccine analogy applied to belief. Sixty years of subsequent research has broadly supported the mechanism.",
        medium: "foundational theory + long replication record",
        confidence: "Strong (as a mechanism)",
        year: "1961–1964"
      }
    ],
    verify: "Testable at home and it is the honest test: before teaching, show the family five real posts and count how many manipulation techniques they can name. Teach the nine. Show five new posts a week later and count again. The number moves, and it moves for children too.",
    village: "This is the highest-return teaching in the whole Library, and it is the one defense that scales to a child. The Clear Signal guild in Survival Mode is built on it. A family that can name the tricks is a family the tricks stop working on.",
    quest: ["Name the Nine Tricks", "Learn the nine manipulation techniques. Then take ten real posts from your own feed and mark which technique each one uses. Score yourself: how many did you catch?", ["Science", "Writing"], "💉"]
  },

  {
    id: "cognitive-warfare-program",
    icon: "🧠",
    name: "Cognitive Warfare — The Documented Program",
    esName: "Guerra Cognitiva — El Programa Documentado",
    tagline: "Not a conspiracy theory. A named NATO doctrine with a published report.",
    lineage: "NATO's cognitive warfare program, defined from 2018 by François du Cluzel with Dr. James Giordano (then Georgetown, now National Defense University). Giordano heads the Center for Strategic Deterrence and WMD Studies at NDU's Institute for National Strategic Studies and has advised the Pentagon, DARPA, and NATO for three decades.",
    what: "Cognitive warfare is the deliberate use of neuroscience, information technology, and AI to shape what individuals and groups perceive, believe, decide, and do. It is explicitly NOT 'PSYOPS with better tools' — the doctrine's own framing. It targets the bio-psychosocial levels at once: the brain's vulnerabilities, the information environment, and the social fault lines already present. NATO published a Chief Scientist's report on it in 2025. This is a public, named, funded military domain — which is exactly why it is the threat worth taking seriously, and the beam is not.",
    esWhat: "La guerra cognitiva es el uso deliberado de la neurociencia, la tecnología de la información y la IA para moldear lo que las personas perciben, creen, deciden y hacen. No es 'PSYOPS con mejores herramientas' — así lo dice la propia doctrina. Ataca a la vez los niveles biopsicosociales: las vulnerabilidades del cerebro, el entorno informativo y las fracturas sociales ya presentes. La OTAN publicó un informe científico sobre esto en 2025.",
    practice: [
      "Know the two halves — direct engagement of the brain (neuroweapons, directed energy) and indirect engagement through information (narratives, memes, algorithms, AI-generated content). The indirect half is the one running on you continuously.",
      "Know the three targets — sensemaking (what is true), confidence (what you trust), and group dynamics (who is with you).",
      "Recognize the delivery — the same precision tools of medicine flip into precision pathology. The handle and the blade are interchangeable; that is the dual-use problem.",
      "Read the primary documents, not the coverage — the NATO report and the IC assessments are public. Almost nobody reads them, which is why almost nobody's threat model is calibrated.",
      "Keep the proportion — the documented, continuous threat is the information environment. The directed-energy threat is real physics, rare in practice, and hard to attribute."
    ],
    reps: "Read one primary document a year. The NATO cognitive warfare report, the ODNI anomalous-health-incident assessment, and the NASEM Havana report are the three that matter — all public, all free.",
    evidence: "Moderate benchmark evidence (as a documented program)",
    evClass: "moderate",
    research: [
      {
        source: "NATO Chief Scientist's 2025 Report on Cognitive Warfare; Giordano's commentary, 'Cognitive Warfare 2026', INSS / National Defense University (Jan 2026)",
        claim: "Cognitive warfare is framed as behavior-centric conflict where the decisive terrain is how people perceive, interpret, decide, and act. The report calls for formal operational capability: detection, fortified resilience, and deterrence — explicitly treating it as a real domain with real actors, not a metaphor.",
        medium: "official doctrine report + institutional commentary",
        confidence: "Strong (that the domain is real and funded)",
        year: "2025–2026"
      },
      {
        source: "ODNI, 'Updated Assessment of Anomalous Health Incidents' (2023 ICA; January 2025 update)",
        claim: "Most IC components assess it 'very unlikely' a foreign adversary caused the anomalous health incidents. Two of seven changed their judgment between 2023 and 2025 on new reporting about foreign directed-energy programs: one now assesses it 'likely' a foreign actor has an RF antipersonnel capability; the other assesses a roughly even chance. The shift is the substantive news and is widely under-reported.",
        medium: "intelligence community assessment (public)",
        confidence: "Moderate (contested across agencies, low confidence on the RF hypothesis)",
        year: "2023–2025"
      },
      {
        source: "National Academies of Sciences, Engineering, and Medicine, 'An Assessment of Illness in U.S. Government Employees and Their Families at Overseas Embassies' (2020); and the JASON report (2018)",
        claim: "NASEM found directed pulsed RF energy 'the most plausible mechanism' among those considered, especially for the acute-onset cases — while stating that no hypothesis has been proven. JASON separately concluded the recorded sounds were mechanical/biological (crickets) and judged RF unlikely. The two reports disagree, and both are public.",
        medium: "expert committee review + independent technical review",
        confidence: "Moderate (mechanism plausible, unproven; sources disagree)",
        year: "2018–2020"
      }
    ],
    verify: "The honest test of a threat model is whether it predicts what you actually experience. Keep a one-line log for a month: what manipulated your attention today — a beam, or a feed? The answer calibrates the model better than any argument.",
    village: "This entry exists to keep the family's fear in proportion. The Village teaches real threats at real weight — the Digital Defense guild covers the scam that will actually reach them, and this section covers the information environment that already has. Naming a threat correctly is the first defense.",
    quest: ["Read the Primary Source", "Read one public primary document — the NATO cognitive warfare report, the ODNI anomalous-health-incident assessment, or the NASEM Havana report — and write five sentences on what it actually says versus what you had heard it said.", ["Science", "Writing", "Constitution"], "🧠"]
  },

  {
    id: "emf-distance-hygiene",
    icon: "📏",
    name: "EMF Distance Hygiene — The Near Field",
    esName: "Higiene de Distancia EMF — El Campo Cercano",
    tagline: "Distance is the whole lever. The physics is not contested.",
    lineage: "Established electromagnetic field physics, applied to household exposure by Panagopoulos & Chrousos (2019) and reflected in WHO and ICNIRP guidance. The mechanism is standard antenna theory; the health-outcome debate is separate and stays separate here.",
    what: "Exposure to a device's field falls off steeply with distance — the near field (within roughly a wavelength) is tens of times more intense than the far field. For a phone or a router, that means the difference between a device against your head and the same device a meter away is the difference that matters. This is the one EMF practice where the physics is unambiguous, it is free, and it requires no belief about health outcomes at all.",
    esWhat: "La exposición al campo de un dispositivo cae bruscamente con la distancia: el campo cercano es decenas de veces más intenso que el campo lejano. Para un teléfono o un router, la diferencia entre el dispositivo pegado a la cabeza y el mismo dispositivo a un metro es la diferencia que importa. Es la única práctica EMF donde la física no está en disputa.",
    practice: [
      "Distance first — the rule of thumb is about a hand-width from an active plug, and at least a meter from a router, phone, or charger you are not using.",
      "Wired where it sits still — use a wired connection for anything stationary: desktop, television, printer. Wi-Fi is for things that move.",
      "Speaker or wired headset — use the loudspeaker or an air-tube wired headset rather than holding the phone to your ear.",
      "Airplane mode on the body — a phone carried in a pocket goes to airplane mode, or stays several meters away.",
      "Off overnight — the phone charges outside the bedroom, and the router is not in a sleeping room.",
      "The bedroom is the priority — sleep is eight hours of continuous exposure if a device is on the nightstand. This is the single highest-value change."
    ],
    reps: "Permanent household habits, not a drill. Set them once, then check them at the monthly drill. The bedroom change is the one that matters most.",
    evidence: "Moderate benchmark evidence (mechanism strong; health outcomes contested)",
    evClass: "moderate",
    research: [
      {
        source: "Panagopoulos & Chrousos, 'Shielding methods and products against man-made Electromagnetic Fields: Protection versus risk', Science of the Total Environment (2019)",
        claim: "Near-field exposure (distances well within one wavelength) is tens of times more intense than far-field exposure. The authors' practical recommendation is to minimize exposure from one's own devices — wired connections, speaker or air-tube headset, airplane mode when carried, devices off during sleep — rather than to attempt shielding.",
        medium: "peer-reviewed review + biophysical analysis",
        confidence: "Strong (for the physics and the distance rules)",
        year: "2019"
      },
      {
        source: "WHO and ICNIRP — position on non-ionizing EMF below established exposure limits",
        claim: "Both bodies conclude there is no established evidence of adverse health effects below the guideline limits, while acknowledging that long-term and cumulative exposure is under-researched and that individual sensitivity is poorly characterized. The guidance is that ordinary exposure is not a demonstrated hazard — not that distance is meaningless.",
        medium: "international health authority position",
        confidence: "Strong (as the current consensus) · open (on long-term exposure)",
        year: "ongoing"
      },
      {
        source: "Schmiedchen, Drießen & Oftedal, 'Methodological limitations in experimental studies on symptom development in individuals with IEI-EMF — a systematic review', Environmental Health (2019)",
        claim: "Across 28 blinded experimental studies, methodologically sound studies indicate an effect of exposure is unlikely; nocebo and psychosocial factors explain symptoms in many individuals. Importantly, the review also notes the studies are underpowered to rule out rare individual responders — the average finding does not settle the tail of the distribution.",
        medium: "systematic review (28 studies)",
        confidence: "Moderate (strong for the average; underpowered for rare responders)",
        year: "2019"
      }
    ],
    verify: "Testable without a meter: measure the distance from where each person sleeps to the nearest powered device. That is a number. Move the devices, hold everything else constant, and see whether sleep changes over two weeks — and write down the result either way.",
    village: "The entry that models how the Village handles a contested topic: state the physics that is settled, state the health question that is not, and give the practice that is free and needs no belief. The breathwork entry in Vitality & Movement is the same shape from the other direction.",
    quest: ["The Bedroom Distance Audit", "Measure the distance from every sleeping head in the house to the nearest powered device. Move every device at least a meter away and out of the bedroom. Track sleep hours for two weeks before and after and report what changed and what did not.", ["Math", "Health", "Science"], "📏"]
  },

  {
    id: "shielding-faraday-tradeoffs",
    icon: "🛡️",
    name: "Shielding & Faraday Cages — The Tradeoffs Nobody Mentions",
    esName: "Blindaje y Jaulas de Faraday — Los Costos que Nadie Menciona",
    tagline: "It works physically. It also blocks the natural background, and the literature reports relapse.",
    lineage: "Faraday cage physics (standard electromagnetism) applied to dwellings; the clinical and consumer literature on shielding for electrosensitivity, reviewed by Panagopoulos & Chrousos (2019) and assessed in the EU SCHEER opinion (2023).",
    what: "A conductive enclosure does block electromagnetic fields — that part is simply physics, and it is why a microwave door has a mesh. But shielding a room or a house is where the tradeoffs start. Full metal shielding also attenuates the natural extremely-low-frequency background (the Schumann resonances, around 7.8 Hz) that living things evolved inside. And the electrosensitivity literature reports a characteristic pattern: some people improve after shielding, then relapse, and in some accounts worsen. Shielding is a real intervention with real unknowns, not a free upgrade.",
    esWhat: "Un recinto conductor bloquea los campos electromagnéticos: eso es física simple. Pero blindar una habitación o una casa es donde empiezan los costos. El blindaje metálico completo también atenúa el fondo natural de frecuencia extremadamente baja (las resonancias de Schumann, alrededor de 7.8 Hz) dentro del cual evolucionó la vida. Y la literatura sobre electrosensibilidad describe un patrón: algunas personas mejoran tras el blindaje, luego recaen, y en algunos relatos empeoran.",
    practice: [
      "Distance before shielding — the same exposure reduction is available for free by moving the device. Exhaust that first.",
      "Targeted, not total — if you shield anything, shield the one thing that matters (a sleeping area), not the whole building.",
      "Never total — a fully sealed conductive envelope also blocks the natural ELF background. That is a real change to your environment, not a neutral one.",
      "Intermittent beats permanent — the reviewed literature recommends intermittent use over permanent installation, precisely because long-term effects are unknown.",
      "Watch for relapse — the literature reports symptom return after initial improvement. Keep a log so you can see it, rather than attributing it after the fact.",
      "A partial measure, honestly labeled — treat shielding as an unproven intervention with a plausible mechanism and a documented downside, not as protection."
    ],
    reps: "Not recommended as a default. If a family pursues it, do it intermittently, on one sleeping area, with a written log of symptoms before and after for at least eight weeks.",
    evidence: "Weak / contested",
    evClass: "weak",
    research: [
      {
        source: "Panagopoulos & Chrousos, 'Shielding methods and products against man-made Electromagnetic Fields: Protection versus risk' (2019)",
        claim: "Reports of shielding alleviating electrosensitivity symptoms come mostly from non-peer-reviewed bulletins and vendor pages. Relief is inconsistent; symptoms can relapse and sometimes worsen after installation despite reduced high-frequency radiation. The authors recommend minimizing exposure from one's own devices instead of shielding, and if shielding is used, restricting it to intermittent use.",
        medium: "review of a largely non-peer-reviewed literature",
        confidence: "Weak (for benefit) · documented (for relapse reports)",
        year: "2019"
      },
      {
        source: "EU Scientific Committee on Health, Environmental and Emerging Risks (SCHEER), opinion on EMF (2023)",
        claim: "No systematic review or meta-analysis supports a causal link between ELF-EMF exposure and self-reported symptoms; the evidence for interaction mechanisms such as oxidative stress is weak. The committee notes the general population's exposure remains below the EU guideline limits.",
        medium: "EU scientific committee opinion",
        confidence: "Moderate (against a causal symptom link)",
        year: "2023"
      },
      {
        source: "The Schumann resonance point — atmospheric ELF background",
        claim: "The Earth-ionosphere cavity sustains a natural ELF field with a fundamental near 7.8 Hz. Conductive shielding attenuates it. The reviewed literature raises this as an unresolved concern about full shielding and calls for long-term animal studies that have not been done.",
        medium: "biophysical reasoning + review commentary",
        confidence: "Weak (unresolved question, not a demonstrated harm)",
        year: "—"
      }
    ],
    verify: "The honest test is a written log, not a feeling. Record symptoms daily for four weeks unshielded, then four weeks shielded, then four weeks unshielded again. If the pattern does not survive the return to baseline, the improvement was not the shielding. This is exactly the design the literature is missing.",
    village: "A teaching entry, like the grounding entry in Vitality & Movement: the Village includes it because families will encounter it, and labels it because the label is the lesson. The Skeptic's Star belongs here — a family that logs it and reports no reliable change has done real work.",
    quest: ["The Shielding Log", "If your family tries any shielding, run it as a real experiment: four weeks before, four weeks during, four weeks after, one symptom line per day. Report the pattern honestly — including a null result, which earns the Skeptic's Star.", ["Science", "Math", "Writing"], "🛡️"]
  },

  {
    id: "tinfoil-result",
    icon: "🥫",
    name: "The Tinfoil Result — Measured, and Backwards",
    esName: "El Resultado del Papel de Aluminio — Medido, y al Revés",
    tagline: "Someone put it on a $250,000 network analyzer. It amplifies the bands you were worried about.",
    lineage: "Rahimi, Abufouda, Sadeghi, Tawfeeq and colleagues, MIT (2005) — 'On the Effectiveness of Aluminium Foil Helmets'. A student project that became the definitive answer to a folk practice.",
    what: "The aluminum foil hat is the folk defense against invasive radio signals, and it has been measured. Across three classic helmet designs, foil attenuated most frequencies by less than 10 dB — and *amplified* 1.2 GHz and 2.6 GHz by 20 to 30 dB. Those are the GPS/satellite and mobile bands. A conductive shell with gaps and no continuous ground is not a shield; it is a resonant cavity. The measured result is the opposite of the intent.",
    esWhat: "El sombrero de papel de aluminio es la defensa popular contra señales de radio invasivas, y ha sido medido. En tres diseños clásicos, el aluminio atenuó la mayoría de las frecuencias menos de 10 dB — y *amplificó* 1.2 GHz y 2.6 GHz entre 20 y 30 dB. Esas son las bandas de GPS/satélite y móvil. Una cáscara conductora con huecos y sin toma de tierra continua no es un escudo; es una cavidad resonante.",
    practice: [
      "Do not use it — it does not shield, and at the measured bands it makes reception worse.",
      "Understand why — a shield needs a continuous conductive enclosure bonded to a ground. Foil wrapped around a head has seams, gaps, and no ground.",
      "The general lesson — a shape that looks like protection can be an antenna. This is why the Village asks for a measurement instead of a story.",
      "What actually works — distance. See the EMF Distance Hygiene entry. It is free and the physics is not in dispute.",
      "Keep the humility — the people who measured this expected the opposite. The measurement is the contribution, not the expectation."
    ],
    reps: "Not a practice. This entry is a lesson in how to evaluate a defense: ask what it was measured at, and by whom.",
    evidence: "Weak as a practice (measured as counterproductive)",
    evClass: "weak",
    research: [
      {
        source: "Rahimi et al., 'On the Effectiveness of Aluminium Foil Helmets', MIT (2005)",
        claim: "Three foil helmet designs (classical, fez, centurion) were tested on four subjects with a network analyzer sweeping 10 kHz to 3 GHz. All designs attenuated most frequencies by under 10 dB, amplified 1.2 GHz by about 20 dB and 2.6 GHz by about 30 dB regardless of antenna position, and showed a marked attenuation only around 1.5 GHz. The amplified bands coincide with GPS/satellite and mobile allocations.",
        medium: "direct instrument measurement",
        confidence: "Strong (as a measurement) · the paper's own framing is deliberately satirical",
        year: "2005"
      },
      {
        source: "The physics of why — resonant cavity vs. grounded shield",
        claim: "An effective shield is a continuous conductive enclosure bonded to ground. A foil wrapping has seams, gaps, and no ground path, so it behaves as a resonant structure at wavelengths comparable to its dimensions — which is why specific bands amplify rather than attenuate.",
        medium: "standard electromagnetism",
        confidence: "Strong",
        year: "—"
      }
    ],
    verify: "The lesson generalizes and is testable: for any claimed defense, ask what instrument measured it, at what frequencies, and by whom. A claim with no measurement is a story. This is the same test the Village applies to everything in the Library.",
    village: "The best teaching entry in the section for a child, because it is funny and it is true. It teaches the core scientific habit — measure the thing, and be willing to be wrong about it — using a practice everyone has already heard of.",
    quest: ["Test a Claim", "Find one product or practice that claims to protect you from something. Look for who measured it, with what instrument, and at what settings. Write down whether the claim survives the question. Then test one claim of your own at home.", ["Science", "Writing"], "🥫"]
  },

  {
    id: "sleep-light-reset",
    icon: "🌙",
    name: "Sleep, Light & the Daily Reset",
    esName: "Sueño, Luz y el Reinicio Diario",
    tagline: "The unglamorous one that matters more than everything below it.",
    lineage: "Decades of circadian and sleep research; the melatonin-suppression literature on light at night; public health guidance from the CDC and sleep-medicine bodies. Giordano names this himself as the practical exposure that matters most.",
    what: "Light is the signal that sets the body's clock, and the clock sets sleep, mood, immune function, and how well attention works the next day. Bright light at the wrong time — screens at night, especially blue-weighted — suppresses melatonin and shifts the rhythm later. This is not a fringe claim; it is one of the most solid findings in the whole section, and it is the one Giordano points at when asked what a family should actually do. It is also the foundation under everything else here: a tired brain is a manipulable brain.",
    esWhat: "La luz es la señal que ajusta el reloj del cuerpo, y el reloj ajusta el sueño, el ánimo, la inmunidad y la atención del día siguiente. La luz brillante a la hora equivocada — pantallas de noche, sobre todo con componente azul — suprime la melatonina y retrasa el ritmo. No es una afirmación marginal; es uno de los hallazgos más sólidos de toda la sección. Y es el fundamento de todo lo demás: un cerebro cansado es un cerebro manipulable.",
    practice: [
      "Morning light — get outside within an hour of waking, even briefly. Bright morning light anchors the clock forward, which is what you want.",
      "Dim the evening — lower the light in the last two hours before bed. Lamps low and warm, not overhead bright.",
      "Screens off an hour before sleep — the highest-value single rule in the section. If it cannot be an hour, make it thirty minutes.",
      "Night mode is partial — warm-shifting a screen helps somewhat; it does not replace turning it off.",
      "The bedroom is dark — blackout where you can. Light in the room during sleep is the exposure people forget.",
      "Consistent times — the same sleep and wake window matters as much as the duration. The clock is set by regularity.",
      "Charge outside the bedroom — this rule is shared with the EMF Distance entry, and it earns its place twice."
    ],
    reps: "Every night, permanently. This is a household habit, not a drill. The screens-off hour is the one change to make first if you make only one.",
    evidence: "Strong benchmark evidence",
    evClass: "strong",
    research: [
      {
        source: "The light-at-night and melatonin-suppression literature (chronobiology and sleep medicine, decades of work)",
        claim: "Evening exposure to bright and blue-weighted light suppresses melatonin, delays circadian phase, and degrades sleep quality and next-day alertness. The effect is robust across laboratory and field studies and is one of the better-established findings in behavioral physiology.",
        medium: "large body of controlled and field studies",
        confidence: "Strong",
        year: "1990s–present"
      },
      {
        source: "Public health sleep guidance (CDC and sleep-medicine bodies)",
        claim: "Consistent sleep and wake times, a dark and cool sleeping environment, and limiting screens before bed are standard, widely endorsed recommendations. The guidance is conservative and stable, which is itself informative — it has survived repeated review.",
        medium: "public health authority guidance",
        confidence: "Strong",
        year: "ongoing"
      },
      {
        source: "Giordano's own practical answer, in the interview this section came from",
        claim: "Asked what a family should actually do about the electromagnetic environment, he names prudence and distance, and specifically the disruption of light-dark cycles and melatonin by screens — treating that as the concrete, actionable exposure rather than the exotic one.",
        medium: "expert practitioner statement, not a trial",
        confidence: "Moderate (as testimony) · consistent with the literature above",
        year: "2026"
      }
    ],
    verify: "Two numbers, two weeks: hours slept and how you feel at 6am on a 1–5 scale. Change only the screens-off hour and hold everything else. Most families see the sleep number move before the mood number does.",
    village: "The foundation entry. The breathwork and attention practices in this section and in Vitality & Movement all work better on a rested brain, and none of them work well on a tired one. If the Village teaches a family exactly one habit from this section, this is the one.",
    quest: ["The Screens-Off Hour", "For two weeks, every screen goes off one hour before bed. Track hours slept and a 1–5 morning rating each day. Compare the two weeks to the two weeks before. Report the numbers, whichever way they went.", ["Health", "Math", "PE"], "🌙"]
  },

  {
    id: "attention-lateral-reading",
    icon: "🔎",
    name: "Attention & Lateral Reading — How Verifiers Actually Verify",
    esName: "Atención y Lectura Lateral — Cómo Verifican los Verificadores",
    tagline: "The meditation that matters here is attention training — and the trick is to read sideways, not down.",
    lineage: "Lateral reading: Wineburg & McGrew, Stanford History Education Group (2019), from studying how professional fact-checkers evaluate a page. Attention training: the focused-attention meditation literature, including MacLean et al. (2010) on sustained attention and perceptual discrimination.",
    what: "Two findings, one skill. First: when professional fact-checkers evaluate a claim, they do not read the page carefully — they leave it. They open new tabs and find out what other sources say about the *source*. That is 'lateral reading', and it is what separates experts from everyone else, who read vertically down the page and judge it by how it looks. Second: attention is trainable, and it is the substrate of all of this. You cannot notice you are being manipulated if you cannot hold your attention long enough to notice anything. This is the honest answer to 'what meditation defends me' — not a shield, but the capacity to look.",
    esWhat: "Dos hallazgos, una habilidad. Primero: cuando los verificadores profesionales evalúan una afirmación, no leen la página con cuidado — la abandonan. Abren pestañas nuevas y averiguan qué dicen otras fuentes sobre la *fuente*. Eso es 'lectura lateral'. Segundo: la atención es entrenable, y es el sustrato de todo esto. No puedes notar que te están manipulando si no puedes sostener la atención el tiempo suficiente para notar algo.",
    practice: [
      "Read sideways, not down — when a claim matters, leave the page. Search the source itself. Who publishes this? What do others say about them?",
      "Check the source before the claim — the question is not 'does this feel true' but 'who is telling me, and why now'.",
      "Open the second tab — the whole technique is one extra step. Experts do it in seconds; the rest of us skip it.",
      "Ten minutes of focused attention — sit and follow the breath, returning each time attention wanders. The returning *is* the exercise.",
      "Notice the pull — the moment you feel the urge to share something, name what pulled you. That pause is the skill being built.",
      "One deep read a week — read one long thing slowly. Sustained attention is a muscle that atrophies on a feed.",
      "Put it together — the practiced reader notices the pull (attention), leaves the page (lateral reading), and names the technique (prebunking). Three entries, one habit."
    ],
    reps: "Ten minutes of focused attention daily; lateral reading every time a claim matters. The attention practice is the base; the reading habit is the application.",
    evidence: "Moderate benchmark evidence",
    evClass: "moderate",
    research: [
      {
        source: "Wineburg & McGrew, 'Lateral Reading and the Nature of Expertise: Reading Less and Learning More When Evaluating Digital Information', Teachers College Record (2019)",
        claim: "Professional fact-checkers evaluated unfamiliar sites by leaving them and reading laterally across other sources, using a few seconds of search to establish a source's reputation. Students and even academic historians read vertically, staying on the page and judging by its appearance — and were consistently fooled by polished, unfamiliar sources. The technique, not the knowledge, was the difference.",
        medium: "expert–novice comparative study",
        confidence: "Moderate–Strong",
        year: "2019"
      },
      {
        source: "MacLean et al., 'Intensive meditation training improves perceptual discrimination and sustained attention', Psychological Science 21(6) (2010)",
        claim: "Intensive focused-attention meditation training improved sustained attention and perceptual discrimination in a randomized design. The relevant finding for this section is narrow and real: attention is trainable, and training it changes what you can perceive.",
        medium: "randomized controlled study",
        confidence: "Moderate",
        year: "2010"
      },
      {
        source: "The broader focused-attention meditation literature",
        claim: "Across many studies, focused-attention practice shows small-to-moderate improvements in attentional control, with effects that depend heavily on dose and practice quality. The literature is mixed on how far the benefits transfer beyond the trained task — so the claim here is deliberately modest: attention is trainable, not that meditation is a defense system.",
        medium: "mixed RCT and review literature",
        confidence: "Moderate (for attentional control) · weak (for far transfer)",
        year: "2000s–present"
      }
    ],
    verify: "Testable and it is the honest test: time yourself on a sustained-attention task before and after four weeks of ten-minute daily practice — or simply count how many times you notice the pull to check your phone in an hour, before and after. Both are real numbers.",
    village: "This is the bridge between the Heart & Mind Practices section and this one, and the answer to the question the section exists for. The Village does not claim meditation blocks a beam. It claims attention is trainable, and that a trained attention is what lets a person see the trick before it works.",
    quest: ["Ten Minutes of Attention", "Sit and follow your breath for ten minutes a day for two weeks. Each time attention wanders, bring it back — the returning is the exercise. Count the returns each day and see whether the number drops.", ["Health", "PE", "Science"], "🔎"]
  }
];

/* ---- Survival Mode guild: Clear Signal ----
 * Same shape as the Digital Defense guild. Pushed into VILLAGE_QUESTS
 * at load, guarded against double-loading. */
const COGNITIVE_DEFENSE_QUESTS = [
  {
    type: "RPG",
    biomes: ["apartment","suburb","rural"],
    name: "Clear Signal",
    desc: "Tell signal from noise — learn the manipulation tricks, keep the devices at distance, and train the attention that notices.",
    sand: [
      ["Learn the Five Tricks","Learn the five common manipulation techniques: emotional manipulation, incoherence, false dichotomy, scapegoating, and ad hominem. Name them out loud until they are easy.",["Science","Writing"],"💉"],
      ["Spot the Trick Round","Collect five real posts, ads, or messages and mark which trick each one uses. The family hunts together.",["Science","Writing"],"🔍"],
      ["Write Your Own Trick","Each family member writes one manipulative message, then the family hunts for its tells. Writing a trick is the fastest way to see one.",["Writing","Science"],"🪝"],
      ["The Pause Before Sharing","Agree as a family: nothing gets shared until you can say who made it and why. Post the rule where everyone sees it.",["Health","Writing"],"⏸️"],
      ["Name the Feeling","Manipulation targets emotion first. Practice saying what a post made you feel before you decide what it made you think.",["Health","Writing"],"💭"],
      ["Measure the Hand-Width","Walk the house and find every active plug and charger near where people sit or sleep. Measure the distance. This is the map the next drills fix.",["Math","Science"],"📏"],
      ["The Phone-Free Bedroom","Move every phone out of every bedroom. Set up one charging station in a hallway or kitchen where all devices sleep.",["Health","Engineering"],"📵"],
      ["Count the Screens","Tally every screen in the house and where it lives. The honest count is the first step to the honest change.",["Math","Writing"],"🖥️"],
      ["The Two-Source Rule","Before believing something surprising, find a second independent source that is not repeating the first. Practise on three claims this week.",["Science","Writing"],"2️⃣"],
      ["Ask Who Benefits","For any message that wants your attention or your money, ask out loud: who profits if I believe this? Ask it every time for a week.",["Economics","Science"],"💰"]
    ],
    straw: [
      ["Make the Trick Card","Make one card listing the nine manipulation techniques and post it where the family reads. The card is the tool.",["Writing","Art"],"🃏"],
      ["Wired Wednesday","One evening a week, everything stationary goes wired and the Wi-Fi goes off. Notice what changes.",["Engineering","Science"],"🔌"],
      ["Move the Router","Get the router out of any sleeping room and at least a meter from where anyone sits for long. Measure before and after.",["Engineering","Math"],"📡"],
      ["The Screens-Off Hour","Every screen off one hour before bed, every night for two weeks. Track hours slept and a morning rating.",["Health","Math"],"🌙"],
      ["The Feed Audit","Go through your own feed and count how many posts use one of the nine tricks. The number is usually a surprise.",["Math","Science"],"📊"],
      ["Twenty-Four Hours of Not Sharing","One full day of reading only — no sharing, no reposting. Notice how often the urge comes.",["Health","Writing"],"🤐"],
      ["The Family Briefing","Each person brings one thing they almost believed this week and explains what the tell was. Everyone presents.",["Writing","Science"],"🎤"],
      ["Set the Charging Station","Build the one place where all devices sleep, outside the bedrooms, and make it the permanent home.",["Engineering","Health"],"🔋"]
    ],
    wood: [
      ["Run the Monthly Trick Drill","Twenty minutes, same day each month: one trick round, one lateral-reading practice, one distance check. Boring means it works.",["Science","PE"],"🔄"],
      ["Teach the Grandparents","The kids teach the grandparents the nine tricks and the pause rule, then run one practice round together.",["Health","Writing"],"👵"],
      ["The Week of Slow Sharing","One week where every share gets the two-source check first. Count how many survive it.",["Science","Math"],"🐢"],
      ["Draw the House EMF Map","Map every powered device in the house and its distance from where people sleep and sit. Fix the worst three.",["Math","Engineering"],"🗺️"],
      ["The Two-Week Sleep Experiment","Change only the screens-off hour. Measure sleep hours before and after. Write down the result either way.",["Health","Math"],"😴"],
      ["Ten Minutes of Attention","Ten minutes of focused attention daily for two weeks, counting how many times attention wanders and returns.",["Health","PE"],"🧘"],
      ["Host a Family Media Night","Watch something together, then take it apart: what did it want us to feel, and what trick did it use to get there?",["Art","Science"],"📺"],
      ["Help Another Family Start","Share the nine tricks and the pause rule with a neighbor or relative family, and help them run their first round.",["Health","Writing"],"🤝"]
    ],
    iron: [
      ["The Everything-Manipulated Tabletop","Talk it through: a major event happens and every source you trust disagrees. Decide as a family how you would find out what is true.",["Writing","Science"],"🧯"],
      ["Write the Family Media Charter","One page, agreed by everyone: what we check before sharing, what we do with a surprising claim, and where the charter lives.",["Writing","Constitution"],"📜"],
      ["The Analog Evening","One evening a week with no feeds at all — games, books, outside. Notice what the family talks about instead.",["PE","Health"],"🕯️"],
      ["Build a Fake and Catch It","Make one AI-generated image or voice clip, then find the tells together. Knowing how it is made is the defense.",["Engineering","Science"],"🎭"],
      ["Run the Source Audit","Pick the family's five most-used information sources and check each one laterally: who runs it, who funds it, what others say.",["Science","Economics"],"🔬"],
      ["Rehearse the Report","File a practice report at the FTC's fraud site and read the identity-theft recovery plan, so reporting feels routine instead of frightening.",["Economics","Writing"],"📮"],
      ["Hold the Annual Great Rotation","Once a year: a fresh trick drill, a new source audit, a re-run of the sleep and distance checks. The shield stays sharp because the family keeps using it.",["Health","PE"],"🗓️"]
    ]
  }
];

/* Register the guild exactly like the Digital Defense guild:
 * one array, one push, guarded against double-loading. */
if (typeof VILLAGE_QUESTS !== 'undefined' &&
    !VILLAGE_QUESTS.some(g => g && g.name === "Clear Signal")) {
  VILLAGE_QUESTS.push(...COGNITIVE_DEFENSE_QUESTS);
}

/* ============================================================
 * COGNITIVE DEFENSE DEPOT — free, public, primary sources
 * ============================================================ */
const COGNITIVE_DEFENSE_DEPOT = [
  { t: "Jigsaw / Google — Prebunking resources", u: "https://interventions.withgoogle.com/", d: "The practical prebunking guide and the research behind technique-based inoculation." },
  { t: "Bad News — the inoculation game", u: "https://www.getbadnews.com/", d: "A free game that puts you in the role of a disinformation producer. The single best way to learn the techniques by using them." },
  { t: "WHO — Electromagnetic fields", u: "https://www.who.int/health-topics/electromagnetic-fields", d: "The international health authority position on EMF exposure and what remains unresolved." },
  { t: "ICNIRP — exposure guidelines", u: "https://www.icnirp.org/", d: "The independent commission that sets the international non-ionizing radiation limits." },
  { t: "ODNI — Anomalous Health Incidents assessment", u: "https://www.dni.gov/files/ODNI/documents/assessments/Updated_Assessment_of_Anomalous_Health_Incidents.pdf", d: "The public intelligence-community assessment of Havana Syndrome. Read the primary document, not the coverage." },
  { t: "National Academies — Havana embassy illness report", u: "https://nap.nationalacademies.org/read/25889/", d: "The 2020 expert committee review that named pulsed RF as the most plausible mechanism among those considered." },
  { t: "CDC — Sleep and light guidance", u: "https://www.cdc.gov/sleep/", d: "Public health guidance on sleep habits, light, and screens before bed." },
  { t: "CISA — Secure Our World", u: "https://www.cisa.gov/secure-our-world", d: "The four free habits that stop most account takeovers. Shared with the Digital Defense depot." }
];

/* Cross-links to practices that already live elsewhere in the Library —
 * this section points at them rather than duplicating them. */
const COGNITIVE_CROSSLINKS = [
  {
    id: "breathwork",
    icon: "🌬️",
    name: "Breathwork — Slow Breathing & Cyclic Sighing",
    esName: "Respiración — Lenta y Suspiro Cíclico",
    where: "Vitality & Movement",
    note: "The physiological half of nervous-system regulation. Six breaths per minute, or a cyclic sigh with a long exhale. Already in the Library with its own evidence label — this section does not repeat it."
  },
  {
    id: "grounding-earthing",
    icon: "🌍",
    name: "Grounding / Earthing",
    esName: "Conexión a Tierra (Earthing)",
    where: "Vitality & Movement",
    note: "The honesty model this section copies: a plausible mechanism, a pleasant practice, and evidence that is not there yet. Read it before the shielding entry — it is the same shape."
  },
  {
    id: "digital-defense",
    icon: "🛡️",
    name: "Digital Defense (Survival Mode)",
    esName: "Defensa Digital (Modo Supervivencia)",
    where: "Survival Mode — Digital Defense guild",
    note: "The scam side: code words, phishing, voice cloning, credit freezes, backups. That guild defends the accounts. This section defends the attention. They are two halves of one shield."
  },
  {
    id: "meditation-abilities",
    icon: "🎯",
    name: "Meditation & Abilities — the practice-to-ability map",
    esName: "Meditación y Habilidades — el mapa de práctica a habilidad",
    where: "Learning Lab — Meditation & Abilities",
    note: "Where attention training comes from as a tradition. The focused-attention entry there carries the four-link chain and the honest caveat that far transfer is contested — the same practice this section puts to work as a defense."
  },
  {
    id: "learning-science",
    icon: "🧪",
    name: "Learning Science — Attention & Memory",
    esName: "Ciencia del Aprendizaje — Atención y Memoria",
    where: "Learning Lab — Learning Science",
    note: "Why attention training works at all: the same findings about attention and memory that the Learning Lab already teaches for studying apply to noticing manipulation."
  }
];

/* ---- public API ---- */
try { window.COGNITIVE_DEFENSE_SYSTEMS = COGNITIVE_DEFENSE_SYSTEMS; } catch (e) {}
try { window.COGNITIVE_DEFENSE_QUESTS = COGNITIVE_DEFENSE_QUESTS; } catch (e) {}
try { window.COGNITIVE_DEFENSE_DEPOT = COGNITIVE_DEFENSE_DEPOT; } catch (e) {}
try { window.COGNITIVE_CROSSLINKS = COGNITIVE_CROSSLINKS; } catch (e) {}
