/* ============================================================
 * THE VILLAGE — VITALITY & MOVEMENT
 * The physical-education library: energy medicine, energy
 * movements, and practical body practices — the traditional
 * systems AND the modern research that tests them.
 *
 * HONESTY RULE (same as the rest of the Library): every system
 * carries an evidence label. Traditional practice is labeled as
 * traditional practice. Where modern research exists it is named
 * with its medium and confidence. Where it does not, the label
 * says so. Old does not mean true; new does not mean better.
 * The label is the point.
 *
 * GROWN BY: the vitality-engine cron — one new system, or one
 * deepening pass on an existing system, per run. An entry without
 * a lineage, a practice, and an honest evidence label is rejected.
 *
 * i18n: user-facing fields carry es* variants; research entries
 * are English-only (same convention as CONNECTION_SCIENCE).
 * ============================================================ */

/* Rotation domains for the vitality-engine cron. Each run takes the
 * next domain in order and adds one system (or deepens one).
 * Keep this list in sync with cron-coordination/VITALITY-ENGINE.md. */
const MOVEMENT_DOMAINS = [
  "traditional-sets",        // Five Rites, Eight Brocades, Five Animals, Sun Salutation
  "energy-medicine",         // Eden, Healing Tao, Jin Shin Jyutsu, reflexology, polarity
  "fascia-connective-tissue",// Schleip, Myers, bounce/flow, hydration, load variety
  "posture-movement-science",// Lederman, Bowman, Cook, NEAT, position variety
  "breath",                  // slow breathing, cyclic sighing, coherence, vagal tone
  "balance-vestibular",      // tai chi, single-leg, eyes-closed, fall prevention
  "strength-mobility",       // carry, hinge, squat, hang, animal locomotion
  "grounding-earthing",      // barefoot contact, earthing research (contested)
  "somatics",                // Alexander, Feldenkrais, Hanna, body-mind centering
  "kids-movement-games"      // play-based movement for the youngest players
];

const MOVEMENT_SYSTEMS = [
  {
    id: "five-tibetan-rites",
    icon: "🏔️",
    name: "The Five Tibetan Rites",
    esName: "Los Cinco Ritos Tibetanos",
    tagline: "Five movements, twenty-one repetitions — the classic daily set.",
    lineage: "Popularized by Peter Kelder in 'The Eye of Revelation' (1939), crediting a retired British colonel and a Tibetan monastery. No independent record of that monastery or that sequence predates Kelder's booklet — the origin story is a claim, not a documented lineage.",
    what: "A fixed sequence of five movements performed daily in order: a clockwise whirl with arms outstretched; legs raised from lying; an arch from kneeling; a table-then-arch from sitting; and a pendulum between a V and an arch. Traditionally done 21 times each, once a day, before breakfast — the number and the daily rhythm are the whole method.",
    esWhat: "Una secuencia fija de cinco movimientos, en orden, una vez al día: girar en sentido horario con los brazos extendidos; levantar las piernas acostado; arqueo desde rodillas; mesa y arco desde sentado; y un péndulo entre V y arco. Tradicionalmente 21 repeticiones de cada uno, antes del desayuno.",
    practice: [
      "1. Whirl — arms out, spin clockwise until slightly dizzy. This is the one to build slowly.",
      "2. Leg raises — lie flat, lift both legs to vertical without bending the knees, lower slowly.",
      "3. Kneeling arch — from kneeling, hands on the backs of the thighs, arch the spine and drop the head back.",
      "4. Table and arch — sit with legs out, hands flat beside the hips, push up to a table, then drop the head back into an arch.",
      "5. Pendulum — from a push-up position, pike the hips up into a V, then sweep down into an arch, and back."
    ],
    reps: "5 movements × 21 repetitions, once daily, before breakfast. Start at 3–5 reps each and add a rep a week — the traditional build is slow on purpose.",
    evidence: "Practitioner documentation",
    evClass: "weak",
    research: [
      {
        source: "Peter Kelder, 'The Eye of Revelation' (1939) — the sole primary text",
        claim: "The rites are presented as a monastery practice with dramatic rejuvenating effects. The book is the only source; no earlier Tibetan text, monastery record, or independent account of the sequence has been produced.",
        medium: "practitioner documentation / single-source claim",
        confidence: "High (as a text) · none claimed (as an outcome)",
        year: "1939"
      },
      {
        source: "The movements themselves, read as exercise",
        claim: "Four of the five are ordinary spinal mobility, hip extension, and core work — the kind of thing with a real (if unremarkable) evidence base in the general exercise literature. The spinning is the outlier and the one with a genuine safety note.",
        medium: "mechanism reading, not a trial",
        confidence: "Moderate (as exercise) · none (as rejuvenation)",
        year: "—"
      }
    ],
    verify: "Nothing here has a mechanism to test, so the honest test is your own 30-day before/after: resting pulse, sleep hours, how far you can reach, how you feel at 6am. Write the numbers down either way — a null result is a real result.",
    village: "The Village's daily-rhythm practice: a fixed set done at a fixed time is exactly the 'same order of work, story, song, outdoors' rhythm the Waldorf curriculum section describes. It is the cheapest possible way to give a child (or a parent) a body practice that survives a busy week.",
    quest: ["Five Rites — 21-Day Streak", "Do all five rites every morning for 21 days. Start at 5 reps each and add one rep a week. Log the date and one number per day — resting pulse or hours slept.", ["PE", "Health"], "🏔️"]
  },

  {
    id: "eight-brocade-pieces",
    icon: "🧘",
    name: "The Eight Brocade Pieces (Baduanjin)",
    esName: "Las Ocho Piezas del Brocado (Baduanjin)",
    tagline: "Eight standing movements, a thousand years old, with real trial data behind them.",
    lineage: "A classical Chinese qigong set, documented in the Song dynasty (12th century) and attributed to the general Yue Fei in popular tradition. This is the rare case where an ancient set has been put through modern clinical trials — and mostly held up.",
    what: "Eight slow standing movements, each with a name and a purpose: pushing up to support the sky, drawing the bow, separating heaven and earth, the wise owl looks back, sway the head and tail, two hands climb the feet, clench the fists and glare, and bouncing on the toes. Each is done slowly, with breath, 6–12 times.",
    esWhat: "Ocho movimientos lentos de pie: empujar el cielo, tensar el arco, separar cielo y tierra, el búho mira atrás, mover cabeza y cola, manos a los pies, puños apretados y mirada fija, y rebotar en los talones. Lentos, con respiración, 6–12 veces cada uno.",
    practice: [
      "1. Two hands hold up the heavens — interlace fingers, press palms upward, look up.",
      "2. Drawing the bow — a wide stance, one arm extended as if holding a bow, the other drawing the string; alternate sides.",
      "3. Separate heaven and earth — one hand pushes up, the other presses down; alternate.",
      "4. Wise owl looks back — head turns to look over the shoulder, torso steady; alternate.",
      "5. Sway head and tail — hands on knees, a slow side-to-side sway with the head following.",
      "6. Two hands climb the feet — fold forward, run the hands down the legs toward the feet, roll up.",
      "7. Clench fists and glare — a horse stance, fists clenched at the waist, eyes wide, punch out; alternate.",
      "8. Bouncing on the toes — rise onto the toes and drop gently, seven times, to settle the set."
    ],
    reps: "8 movements × 6–12 repetitions, once or twice daily. The whole set takes 8–12 minutes — it is the shortest complete traditional set there is.",
    evidence: "Moderate benchmark evidence",
    evClass: "moderate",
    research: [
      {
        source: "The qigong clinical literature (multiple RCTs and meta-analyses, 2000s–2020s)",
        claim: "The broad qigong evidence base reports small-to-moderate benefits for balance, chronic pain, sleep quality, and quality of life, with the strongest signals in older adults and in balance-related outcomes. Effects are real but modest, and trials are frequently small and at risk of bias.",
        medium: "RCTs and meta-analyses, mixed quality",
        confidence: "Moderate",
        year: "2000s–2020s"
      },
      {
        source: "Baduanjin specifically",
        claim: "Baduanjin has been trialed on its own (rather than as generic 'qigong') for balance, blood pressure, and quality of life in older adults, with generally positive but small studies.",
        medium: "small RCTs",
        confidence: "Moderate (small studies)",
        year: "2010s–2020s"
      }
    ],
    verify: "Testable at home: single-leg stand time with eyes closed, before and after 8 weeks. That is a real number and it moves for most people who do balance work.",
    village: "The best entry point for a family — it is short, it needs no equipment, and it is gentle enough for an elder and a seven-year-old to do side by side. It is already a Vitality quest; the library section is where a parent learns why it is worth the eight minutes.",
    quest: ["Eight Brocades — 30 Days", "Do the full eight-piece set once a day for 30 days. On day 1 and day 30, time your single-leg stand with eyes closed (each side). Record both numbers.", ["PE", "Health"], "🧘"]
  },

  {
    id: "five-animal-frolics",
    icon: "🐅",
    name: "The Five Animal Frolics (Wu Qin Xi)",
    esName: "Los Cinco Animales (Wu Qin Xi)",
    tagline: "Tiger, deer, bear, monkey, crane — the original animal-movement game.",
    lineage: "Attributed to the physician Hua Tuo (c. 140–208 CE), one of the oldest documented therapeutic movement sets in the world. It is the ancient ancestor of every 'move like an animal' game a child has ever played.",
    what: "Five animal forms, each training a different quality: the tiger for strength and grip, the deer for suppleness and the spine, the bear for heaviness and grounding, the monkey for agility and quickness, the crane for balance and stillness. Each form is a small dance with a breath pattern.",
    esWhat: "Cinco formas animales: el tigre (fuerza y agarre), el ciervo (flexibilidad y columna), el oso (peso y arraigo), el mono (agilidad) y la grulla (equilibrio y quietud). Cada forma es una pequeña danza con respiración.",
    practice: [
      "Tiger — crouched, claws out, weight forward; pounce and settle.",
      "Deer — antlers up, spine twisting and side-bending, a soft and springy stance.",
      "Bear — heavy, wide, swaying side to side; the whole body moving as one mass.",
      "Monkey — quick, low, loose; grabbing, peering, scampering.",
      "Crane — one leg, wings wide, slow and still; the balance test of the set."
    ],
    reps: "All five forms, 3–6 rounds each, 10–15 minutes. Works as a game for children and as a real mobility session for adults.",
    evidence: "Moderate benchmark evidence",
    evClass: "moderate",
    research: [
      {
        source: "The qigong clinical literature — Wu Qin Xi specifically",
        claim: "Wu Qin Xi has its own small trial literature (balance, knee osteoarthritis, COPD rehabilitation, quality of life in older adults), with the same pattern as the rest of qigong: positive, modest, small studies.",
        medium: "small RCTs",
        confidence: "Moderate (small studies)",
        year: "2010s–2020s"
      },
      {
        source: "Animal-locomotion training in modern movement practice",
        claim: "Modern strength and rehab practice independently converged on animal locomotion (bear crawls, crab walks, duck walks) as loaded, varied, full-body movement — the same shapes, arrived at from a different direction.",
        medium: "practitioner consensus / mechanism",
        confidence: "Moderate",
        year: "2010s–2020s"
      }
    ],
    verify: "Convergence worth noticing: a 1,800-year-old set and a modern gym drill landed on the same movements. That is a signal about the movements, not about the lineage claims.",
    village: "The most kid-ready system in the library — it is already a Vitality quest, and it is the natural bridge between PE and the Woodland Care / tracking side of the game.",
    quest: ["Five Animals — Family Form", "Learn all five animal forms. Then teach them to someone else in the family, and each of you picks the animal you are worst at and drills it for two weeks.", ["PE", "Health"], "🐅"]
  },

  {
    id: "sun-salutation",
    icon: "☀️",
    name: "The Sun Salutation (Surya Namaskar)",
    esName: "El Saludo al Sol (Surya Namaskar)",
    tagline: "Twelve linked postures, one breath each — and an origin story that is not as old as it looks.",
    lineage: "Sun prostration is ancient; the twelve-pose sequence as it is taught today is not. The first systematic published version is by Bhawanrao Shriniwasrao Pant Pratinidhi, the Raja of Aundh, in 'Surya Namaskars' (Marathi 1923, English 1928) — he credited the Raja of Miraj for teaching it to him in 1908, and his own father for practising it for 55 years. Scholars of modern yoga (Norman Sjoman, 'The Yoga Tradition of the Mysore Palace', 1996; Mark Singleton, 'Yoga Body', 2010) read the sequence as a 20th-century synthesis of Indian dand and vyayama physical culture with Western exercise, not an unbroken Vedic lineage. The claim that it is ancient is a claim; the documented publication date is 1928.",
    what: "A fixed sequence of twelve postures performed as one continuous flow, one breath per transition: prayer, arms raised, standing forward fold, the equestrian lunge, plank, eight-limbs, low cobra, downward-facing dog, the lunge on the other side, forward fold, arms raised, prayer. One round is the full twelve; a set is however many rounds you do. The whole method is the linking — movement tied to breath — and the pace is the dial: slow is mobility work, fast is aerobic work.",
    esWhat: "Una secuencia fija de doce posturas en un solo flujo continuo, una respiración por transición: oración, brazos arriba, flexión de pie, la zancada, plancha, ocho miembros, cobra baja, perro boca abajo, la zancada del otro lado, flexión, brazos arriba, oración. Una ronda son las doce; la serie es cuantas rondas hagas. El método es el enlace — movimiento con respiración — y el ritmo es el dial: lento es movilidad, rápido es trabajo aeróbico.",
    practice: [
      "1. Prayer — stand tall, palms together at the chest. Exhale.",
      "2. Arms raised — inhale, sweep the arms overhead, a gentle look up and a small backbend.",
      "3. Forward fold — exhale, fold from the hips with soft knees, hands beside the feet.",
      "4. Equestrian lunge — inhale, step the RIGHT foot back, left foot between the hands, look forward.",
      "5. Plank — exhale, step the left foot back so the body is one straight line, shoulders over wrists.",
      "6. Eight limbs — exhale, lower knees, chest, and chin to the floor (or hold a low plank if knees are tender).",
      "7. Cobra — inhale, peel the chest up from the UPPER back, elbows soft, shoulders down, neck long.",
      "8. Downward-facing dog — exhale, press the hips up and back, spine long, heels reaching down.",
      "9. Equestrian lunge — inhale, step the RIGHT foot forward between the hands.",
      "10. Forward fold — exhale, step the left foot to meet the right and fold again.",
      "11. Arms raised — inhale, rise all the way up, arms overhead.",
      "12. Prayer — exhale, hands back to the chest. That is one round.",
      "Alternate which foot goes back first on the next round. The alternating lead is the part families skip, and the part that keeps it even.",
      "Gentle version for beginners, young children, and stiff mornings: hands on a chair or blocks instead of the floor, knees down in step 6, low cobra instead of high, and no jumping — step everything. The flow is the point, not the depth."
    ],
    reps: "Start at 2–3 slow rounds once a day and build to 6–12. Slow (roughly 4–6 seconds per transition) is mobility and breath practice. Fast (about 20 seconds per round) is a real aerobic session — the fast version has been measured at roughly 80–90% of age-predicted maximum heart rate.",
    evidence: "Moderate — small trials, mostly one research tradition",
    evClass: "moderate",
    research: [
      {
        source: "Dubey S, Choudhary PK, Saha S, Ochiana N, Antohe B, Alexe CI, 'Multidimensional Effects of Suryanamaskar on Physical, Physiological, and Psychological Outcomes: A Systematic Review', Healthcare 14(13):1924 (2026)",
        claim: "Fourteen studies met inclusion. Findings point the same direction — fitness, physiological markers, and well-being all move favorably — but the studies were too heterogeneous to pool, a meta-analysis was not possible, most were conducted in India, and the review did not run a formal certainty-of-evidence (GRADE) assessment. The authors' own conclusion is that confidence should be interpreted with caution.",
        medium: "systematic review (PRISMA; RoB 2 / ROBINS-I), narrative synthesis",
        confidence: "Moderate (direction) · low (certainty)",
        year: "2026"
      },
      {
        source: "Bandyopadhyay A, Halder K, Pathak A, Kumar B, Saha M, 'Surya Namaskar: As an Alternative for Aerobic Fitness', International Journal of Yoga 15(2):163-167 (2022)",
        claim: "Comparing metabolic responses between Surya Namaskar and bicycle ergometry, the sequence produced a greater arteriovenous oxygen difference at 71-80% of VO2max while keeping a lower respiratory exchange ratio. The authors conclude it can serve as genuine aerobic exercise. This is a physiology study, not an outcome trial — it measures the intensity, not the long-term benefit.",
        medium: "small controlled physiology study, single lab",
        confidence: "Moderate (as an intensity measure)",
        year: "2022"
      },
      {
        source: "Patil K, Afle G, 'Effect of fast Surya Namaskar versus aerobic dance on cardiorespiratory fitness in children aged 10-13 years at the end of 4 weeks', International Journal of Community Medicine and Public Health (2025)",
        claim: "120 schoolchildren were randomised to fast Surya Namaskar or aerobic dance, three alternate days a week for four weeks. Both groups improved VO2max significantly (Surya Namaskar 38.64 to 40.60 ml/kg/min; aerobic dance 38.82 to 41.22). Aerobic dance improved slightly more. The honest read: the sequence works as school-based aerobic exercise, and it is not magic relative to other exercise.",
        medium: "randomised comparative trial (n=120, 4 weeks)",
        confidence: "Moderate (short trial, single site)",
        year: "2025"
      },
      {
        source: "Mody BS, 'Acute effects of Surya Namaskar on the cardiovascular & metabolic system', Journal of Bodywork and Movement Therapies 15(3):343-347 (2011)",
        claim: "A single session raises heart rate and metabolic rate into a training range — the acute-effect evidence behind calling the sequence aerobic.",
        medium: "small acute-effect study",
        confidence: "Moderate",
        year: "2011"
      },
      {
        source: "Mullerpatan RP, Agarwal BM, Shetty T, Nehete GR, Narasipura OS, 'Kinematics of Suryanamaskar using three-dimensional motion capture', International Journal of Yoga 12:124-131 (2019)",
        claim: "Three-dimensional motion capture of the sequence — the biomechanical description of what the joints actually do. Useful because it shows the load is real: repeated wrist extension in plank and cobra, repeated lumbar extension in the backbend.",
        medium: "biomechanical measurement study",
        confidence: "Moderate (as description)",
        year: "2019"
      }
    ],
    verify: "Two home tests, both real numbers. (1) Aerobic: after one fast round, take your pulse for 15 seconds immediately and multiply by four. Compare it to 80-90% of your age-predicted maximum (220 minus your age). If you land in that band, the 'it is aerobic' claim is confirmed on you. (2) Mobility: sit-and-reach and single-leg stand with eyes closed, on day 1 and day 30. If neither number moves in 30 days, that is a real result too — write it down.",
    village: "The natural warm-up form for the Vitality guild, and the library's best teaching case for the honesty rule: the practice is genuinely good exercise AND the origin story everyone repeats is a 20th-century claim. A family that learns both has learned how to read a lineage. It pairs with the Five Rites (a fixed daily set) and the Eight Brocades (a slow standing set) — three traditional sets, three different jobs.",
    quest: ["Sun Salutation — 30 Days & the Origin Check", "Do 6 slow rounds every morning for 30 days. Record resting pulse and single-leg stand time on day 1 and day 30. Then find out who first published the modern twelve-pose sequence and in what year — and write one sentence on why that matters.", ["PE", "Health", "History"], "☀️"]
  },

  {
    id: "eden-energy-medicine",
    icon: "✨",
    name: "Donna Eden — Energy Medicine Daily Routine",
    esName: "Medicina Energética — Rutina Diaria (Donna Eden)",
    tagline: "A five-minute daily energy routine: hook-up, crown pull, three thumps, zip-up.",
    lineage: "Donna Eden, a self-taught American healer, with her husband David Feinstein (a clinical psychologist), in 'Energy Medicine' (1998). Eden describes herself as having been able to see the body's energy fields since childhood. It is a modern Western synthesis, not an unbroken ancient lineage.",
    what: "A short daily sequence of hand positions and taps intended to 'switch on' and balance the body's energy systems: the hook-up (thumb to the roof of the mouth, fingers on the navel), the crown pull (fingers walking back over the scalp), the three thumps (tapping the collarbone, the spleen point, and the kidney point), the zip-up (hand sweeping up the central line), and the Wayne Cook posture (crossed ankles and wrists).",
    esWhat: "Una secuencia corta diaria de posiciones de manos y golpecitos: el enganche (pulgar al paladar, dedos al ombligo), el tirón de la corona (dedos sobre el cuero cabelludo), los tres golpes (clavícula, bazo, riñón), el cierre (mano subiendo por la línea central) y la postura Wayne Cook (tobillos y muñecas cruzados).",
    practice: [
      "Hook-up — thumb to the roof of the mouth, middle fingers on the navel; hold and breathe.",
      "Crown pull — fingers on the forehead, walk them back over the scalp to the base of the skull, several passes.",
      "Three thumps — tap the collarbone points, then under the ribs (spleen), then beside the tailbone (kidney).",
      "Zip-up — sweep a flat hand firmly up the central line from the pubic bone to above the lip, several times.",
      "Wayne Cook posture — cross the ankles, cross the wrists, interlace the fingers, invert the hands and rest them on the chest; breathe slowly for a minute."
    ],
    reps: "3–5 minutes, once or twice daily. The whole point is that it is short enough to actually do.",
    evidence: "Practitioner documentation",
    evClass: "weak",
    research: [
      {
        source: "Donna Eden & David Feinstein, 'Energy Medicine' (1998)",
        claim: "The system is presented as a map of nine interacting energy systems with specific corrective hand positions. The map is a practitioner's model; the 'energy testing' used to validate it has not been shown to perform better than chance in controlled conditions.",
        medium: "practitioner documentation / book",
        confidence: "High (as a system) · none claimed (as mechanism)",
        year: "1998"
      },
      {
        source: "The Wayne Cook posture, read as a movement intervention",
        claim: "Crossed-limb postures change proprioceptive input and breathing rate. That much is uncontroversial. Whether that produces the specific 'switching on' Eden describes is a separate claim that has not been tested.",
        medium: "mechanism reading, not a trial",
        confidence: "Moderate (as proprioception) · none (as energy system)",
        year: "—"
      },
      {
        source: "Slow-breathing research (see the Breathwork entry below)",
        claim: "The routine's most defensible component is simply that it gets a person to sit still and breathe slowly for five minutes — an intervention with actual evidence behind it, independent of any energy model.",
        medium: "independent literature",
        confidence: "Moderate",
        year: "2018–2023"
      }
    ],
    verify: "This is the honest framing for the whole energy-medicine family: the practices are experiential and the model is unverified, but the routine is harmless, takes five minutes, and reliably makes people feel better. Label it that way and let a family decide. If someone claims energy testing beats chance, that is a testable claim — and it has not survived testing.",
    village: "Belongs in the Vitality guild as a daily-reset quest. It pairs naturally with the HeartMath coherence practice already in the Library — both are 'sixty-second resets' the family can use before a hard moment.",
    quest: ["The Five-Minute Energy Routine", "Do the full Eden daily routine (hook-up, crown pull, three thumps, zip-up, Wayne Cook) every morning for two weeks. Note how you feel before and after on a simple 1–5 scale.", ["PE", "Health"], "✨"]
  },

  {
    id: "healing-tao-microcosmic-orbit",
    icon: "☯️",
    name: "Mantak Chia — Inner Alchemy & the Microcosmic Orbit",
    esName: "Alquimia Interior — Órbita Microcósmica (Mantak Chia)",
    tagline: "The Taoist internal practice: circulating attention up the spine and down the front.",
    lineage: "Mantak Chia, a Thai-Chinese teacher who founded the Healing Tao system in the 1970s–80s, teaching a family of Taoist internal-alchemy practices previously held in closed lineages. His books ('Awaken Healing Energy Through the Tao', 1983) are the main Western entry point.",
    what: "The foundational practice is the Microcosmic Orbit: with the eyes closed and the tongue touching the palate, attention is moved slowly up the spine to the crown and down the front of the body to the navel, in a loop, with the breath. Around it sit the Six Healing Sounds, the Inner Smile, and — in the fuller system — practices that are explicitly adult-only.",
    esWhat: "La práctica base es la Órbita Microcósmica: con los ojos cerrados y la lengua en el paladar, la atención sube lentamente por la columna hasta la coronilla y baja por el frente hasta el ombligo, en un circuito, con la respiración. Alrededor están los Seis Sonidos Curativos y la Sonrisa Interior.",
    practice: [
      "Sit or lie comfortably; tongue lightly on the palate; eyes closed; breathe slowly into the belly.",
      "Place attention at the navel. Let it gather there for a minute or two.",
      "Move attention down to the perineum, then slowly up the spine — tailbone, mid-back, between the shoulder blades, base of the skull, crown.",
      "At the crown, pause. Then let attention flow down the front — forehead, face, throat, chest, solar plexus — back to the navel.",
      "Repeat the loop 9–36 times, letting it get smoother rather than faster.",
      "Inner Smile — bring attention to each organ in turn and 'smile' into it. Six Healing Sounds — a long exhale on a specific sound for each organ."
    ],
    reps: "10–20 minutes daily. The Inner Smile and Six Healing Sounds are the family-friendly pieces; the Microcosmic Orbit is the core solo practice.",
    evidence: "Practitioner documentation",
    evClass: "weak",
    research: [
      {
        source: "Mantak Chia, 'Awaken Healing Energy Through the Tao' (1983) and the Healing Tao book series",
        claim: "The practices are presented as a lineage transmission with specific energetic and health effects. The transmission claim is credible as a lineage; the health effects are practitioner-reported, not trial-tested.",
        medium: "practitioner documentation / lineage transmission",
        confidence: "High (as a lineage) · none claimed (as an outcome)",
        year: "1983–present"
      },
      {
        source: "Slow-paced breathing and interoceptive attention (independent literature)",
        claim: "The two components that do have research behind them are slow breathing and sustained attention to internal body sensation (interoception) — both of which show measurable effects on arousal and stress markers on their own.",
        medium: "independent literature",
        confidence: "Moderate (for the components) · none (for the system)",
        year: "2010s–2020s"
      }
    ],
    verify: "Note for parents: the Healing Tao system includes sexual-energy practices that are not appropriate for children. The Inner Smile, Six Healing Sounds, and the Microcosmic Orbit are the shareable parts — the library entry should say so plainly rather than pretending the whole system is family content.",
    village: "The deepest traditional system in the library. It belongs in the Vitality guild for older players and parents, with the Inner Smile as the kid-appropriate doorway — 'smile into your heart, your belly, your bones' is a game a five-year-old can play.",
    quest: ["Inner Smile Circuit", "Learn the Inner Smile: bring attention to your heart, lungs, liver, stomach, kidneys, and spine, one at a time, and smile into each. Do it daily for a week, then teach it to someone else.", ["PE", "Health"], "☯️"]
  },

  {
    id: "jin-shin-jyutsu",
    icon: "🤲",
    name: "Jin Shin Jyutsu — The Finger Holds & the Art of Compassion",
    esName: "Jin Shin Jyutsu — Los Sujetadores de Dedos y el Arte de la Compasión",
    tagline: "A Japanese touch art whose self-help form is one finger at a time — and whose evidence label is honest about it.",
    lineage: "A Japanese acupressure art. Jiro Murai (1886–1960), born in Ishikawa Prefecture, was diagnosed with a terminal illness in 1912 at age 26, spent seven days alone in a mountain cabin in fasting and meditation, and recovered — then spent the rest of his life mapping the pathways he believed he had felt. He standardized the practice and taught it in the last fourteen years of his life, dying in June 1960. Mary Burmeister (born Mary Mariko Iino, Seattle, 1918–2008) met Murai in Japan in the late 1940s, studied with him for several years and then by correspondence, returned to the United States in 1953, and began teaching in 1965. The 26 'safety energy locks' developed in stages: 15 were identified when she left Japan, 16–23 followed between 1953 and 1956, and 24–26 were created before Murai's final lecture series in 1957, where all 26 first appeared together. The name is a registered mark of the institute that carries it; it is used here for attribution only.",
    what: "A hands-on practice in which light, sustained touch is held at specific locations — 'safety energy locks' along pathways said to run up the back and down the front of the body — to let energy flow where it has become blocked. The self-help form is the family-accessible part: hold one finger at a time, and each finger is said to correspond to an attitude — thumb = worry, index = fear, middle = anger, ring = sadness, little = trying too hard. The hold is light: no pressure, no rubbing, just contact, done sitting quietly with the hands idle.",
    esWhat: "Una práctica de manos en la que se sostiene un toque ligero y sostenido en puntos concretos — 'cerraduras de seguridad' a lo largo de vías que se dice suben por la espalda y bajan por el frente del cuerpo — para dejar fluir la energía donde se ha bloqueado. La forma de autoayuda es la parte accesible para la familia: sostener un dedo a la vez; cada dedo corresponde a una actitud (pulgar = preocupación, índice = miedo, medio = ira, anular = tristeza, meñique = esforzarse demasiado).",
    practice: [
      "Finger holds — wrap the fingers of one hand gently around one finger of the other hand. No pressure, just contact. Hold until you feel a pulse, or about two minutes if you do not.",
      "One finger at a time — thumb (worry), index (fear), middle (anger), ring (sadness), little (trying too hard). Do both hands, in either order.",
      "Breathe while you hold — exhale, drop the shoulders, and let the inhale come back on its own. Some teachers count 36 slow breaths per finger; two minutes is plenty to start.",
      "Palm hold — after the fingers, rest one palm over the other, or both palms together, for a minute.",
      "Main Central Flow (the longer self-help sequence) — right hand stays on the top of the head; the left hand moves down: forehead between the eyebrows, tip of the nose, center of the chest, base of the sternum, then the top of the pubic bone. Hold each 2–5 minutes or until the pulses in both hands synchronize. Then the right hand moves to the tailbone.",
      "Use it in the moment — the point is to have it available when worry, fear, or anger actually shows up, not only as a daily ritual."
    ],
    reps: "Two minutes per finger, or until a pulse is felt. The full set of ten fingers takes 15–20 minutes; a single hold in a hard moment takes two. Daily practice is the recommended habit.",
    evidence: "Weak / traditional — practitioner documentation; one tested cousin (acupressure) has real evidence for a single indication",
    evClass: "weak",
    research: [
      {
        source: "The Jiro Murai teaching lineage and Mary Burmeister's transmission, as documented by the institute histories (1912–2008)",
        claim: "The system is a lineage transmission with a documented chronology — Murai's 1912 illness and recovery, the staged development of the 26 safety energy locks (15 by 1953, 16–23 by 1956, 24–26 by 1957), and Burmeister's teaching from 1965. The transmission is well documented; the mechanism it describes is not tested.",
        medium: "practitioner documentation / lineage history",
        confidence: "High (as lineage) · none claimed (as mechanism)",
        year: "1912–2008"
      },
      {
        source: "Lee A, Chan SKC, Fan LTY, 'Stimulation of the wrist acupuncture point PC6 for preventing postoperative nausea and vomiting', Cochrane Database of Systematic Reviews, CD003281 (2015; network meta-analysis update 2025)",
        claim: "A different tradition — Chinese acupressure, not Jin Shin Jyutsu — but the closest tested cousin. Across 59 trials and 7,667 participants, stimulating one specific wrist point reduced nausea (RR 0.68, 95% CI 0.60 to 0.77), vomiting (RR 0.60), and the need for rescue antiemetics versus sham, with the review rating the quality of evidence LOW; the 2025 network meta-analysis found noninvasive PC6 reduced nausea (RR 0.67) and vomiting (RR 0.58) at low confidence. The honest read: a specific point-based intervention can produce a measurable effect, the effect is modest, and the evidence is not strong.",
        medium: "Cochrane systematic review + network meta-analysis",
        confidence: "Low (per the review's own GRADE rating)",
        year: "2015 / 2025"
      },
      {
        source: "Slow breathing and sustained gentle touch (independent literature)",
        claim: "The components with their own evidence are not exotic: slow breathing changes autonomic measures, and slow, gentle touch is associated with reduced anxiety and arousal. Those are the parts of the practice a skeptic can defend.",
        medium: "independent literature",
        confidence: "Moderate (for the components) · none (for the energy map)",
        year: "2010s–2020s"
      }
    ],
    verify: "Two honest tests. (1) The pulse test: hold a finger and see whether you can feel a pulse under your fingertips within two minutes — that is what the tradition itself says to look for, and it is checkable. (2) The worry test: next time a real worry shows up, hold the thumb for two minutes and rate how you feel before and after on a 1–5 scale, ten times over a month. If the numbers do not move, that is a real result and worth writing down — the practice is harmless either way.",
    village: "A gentle, no-equipment entry that works for the youngest player and the oldest — a five-year-old can hold a 'worry finger.' It is the energy-medicine domain's most family-friendly system, and it pairs with the Inner Smile (Healing Tao) as a two-minute reset the family can use before a hard moment in the game or the week.",
    quest: ["The Finger Holds — Worry FAST", "Hold each finger of one hand with the other hand, one at a time, for two minutes (or until you feel a pulse) — thumb for worry, index for fear, middle for anger, ring for sadness, little finger for trying too hard. Do it once a day for a week, and each day note one moment you used a hold on purpose and whether it changed anything.", ["PE", "Health"], "🤲"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> jin-shin-jyutsu", "authored_at": "2026-09-21"}
  },

  {
    id: "fascia-connective-tissue",
    icon: "🕸️",
    name: "Fascia & the Connective-Tissue Body",
    esName: "Fascia y el Cuerpo de Tejido Conectivo",
    tagline: "The newest science in the library — and the one that changes how you move.",
    lineage: "Modern research, not a tradition: Robert Schleip and colleagues in the Fascia Research Congress line ('Fascia: The Tensional Network of the Human Body', 2012), Thomas Myers' 'Anatomy Trains' (2001), and Helene Langevin's work on connective tissue and pain. This is the newest body of knowledge here, and the one that most changes practice.",
    what: "Fascia is the continuous web of connective tissue that wraps every muscle, organ, nerve, and bone — a single connected network, not packing material. It is now understood to be rich in sensory nerve endings (it is one of the body's main sensory organs), capable of contracting, and responsive to how you move and how much you move. The practical upshot: movement variety, whole-body movement, and load through full ranges matter more than isolated muscle work.",
    esWhat: "La fascia es la red continua de tejido conectivo que envuelve cada músculo, órgano, nervio y hueso: una sola red conectada, no material de relleno. Es rica en terminaciones nerviosas sensoriales, puede contraerse y responde a cómo y cuánto te mueves. La consecuencia práctica: la variedad de movimiento y la carga en rangos completos importan más que el trabajo muscular aislado.",
    practice: [
      "Bounce — gentle springy bouncing through the whole body, letting the tissue rebound rather than the muscles push.",
      "Flow — move continuously through big shapes without stopping at end ranges; let one movement hand off to the next.",
      "Reach and rotate — long reaches with rotation through the spine, arms, and hips, not just forward bends.",
      "Vary the load — carry things in different ways (one arm, both, overhead, on the shoulder, in a sling) rather than always the same way.",
      "Hydrate and sleep — connective tissue is largely water; dehydration and poor sleep both show up as stiffness.",
      "Load through the whole range — strength work at end ranges, not just in the comfortable middle."
    ],
    reps: "Daily, in small doses. The point is not a session; it is that the tissue is loaded in many different ways across the day.",
    evidence: "Strong (mechanism)",
    evClass: "strong",
    research: [
      {
        source: "Schleip, Findley, Chaitow & Huijing (eds.), 'Fascia: The Tensional Network of the Human Body' (2012); Fascia Research Congress proceedings",
        claim: "Fascia is a continuous, innervated, contractile network with more sensory endings than previously assumed — it functions as a body-wide sensory organ. This is now mainstream anatomy, not a fringe claim.",
        medium: "anatomical research / research congress",
        confidence: "Strong (mechanism)",
        year: "2007–present"
      },
      {
        source: "Thomas Myers, 'Anatomy Trains' (2001, later editions)",
        claim: "Myers maps continuous myofascial meridians running the length of the body. The anatomical continuities are real and dissectible; the specific 'train' lines are a useful clinical model rather than a settled anatomical taxonomy.",
        medium: "dissection-based model",
        confidence: "Moderate (as a model) · strong (that continuity exists)",
        year: "2001–present"
      },
      {
        source: "Helene Langevin — connective tissue and chronic pain",
        claim: "Langevin's work links connective-tissue changes to chronic pain and shows that gentle mechanical stimulation (as in stretching and acupuncture needling) produces measurable tissue-level responses.",
        medium: "peer-reviewed research",
        confidence: "Moderate–Strong",
        year: "2000s–2020s"
      }
    ],
    verify: "This is the entry that should change how the family moves: less 'hold this stretch for 30 seconds,' more 'move in lots of different ways, every day.' The mechanism is solid. The specific protocols sold around it are mostly not.",
    village: "The research spine of the whole PE section — it is why the library now includes bouncing, flowing, and load variety alongside the traditional sets. It also gives the game an honest modern anchor so the section is not purely traditional practice.",
    quest: ["The Bounce & Flow Week", "For seven days, do five minutes of whole-body bouncing plus five minutes of continuous flowing movement (no stopping at end ranges). Notice where you feel stiff on day 1 and again on day 7.", ["PE", "Health", "Science"], "🕸️"]
  },

  {
    id: "self-myofascial-release",
    icon: "🧻",
    name: "Foam Rolling — the Practice Whose Name Is Wrong",
    esName: "Rodillo de Espuma — la Práctica con el Nombre Equivocado",
    tagline: "A real effect with a false explanation — the best evidence lesson in the library.",
    lineage: "Not a tradition and not ancient: foam rolling spread out of 1990s sports rehabilitation and manual therapy, where the foam roller was a cheap stand-in for a therapist's hands. It borrowed its name from 'myofascial release', a clinical technique developed by physical therapist John F. Barnes from the 1980s. The name stuck; the mechanism was never demonstrated. The research line that actually checked it is modern sports science — Behm & Wilke (2019), Wiewelhove et al. (2019), Beardsley & Skarabot (2015).",
    what: "You roll a limb or your back slowly over a firm foam cylinder (or a ball), letting your body weight do the work, pausing on tender spots. The claimed effect is that the pressure releases fascia — breaking up adhesions, scar tissue, and knots. The measured effects are real but modest: a small acute increase in range of motion and a reduction in how sore you feel. The claimed mechanism is not supported. Dense fascia (the iliotibial band, the plantar fascia) is far too strong for any pressure a person can apply — and the same range-of-motion gain shows up in the limb you did not roll, which a local mechanical release cannot explain.",
    esWhat: "Ruedas un brazo, una pierna o la espalda lentamente sobre un cilindro de espuma firme (o una pelota), dejando que el peso del cuerpo haga el trabajo y pausando en los puntos sensibles. El efecto que se le atribuye es que la presión libera la fascia: rompe adherencias, tejido cicatricial y nudos. Los efectos medidos son reales pero modestos: un pequeno aumento agudo del rango de movimiento y menos sensacion de dolor. El mecanismo que se le atribuye no esta respaldado. La fascia densa (la banda iliotibial, la fascia plantar) es demasiado fuerte para cualquier presion que una persona pueda aplicar, y la misma mejora del rango aparece en la extremidad que NO rodaste, lo que una liberacion mecanica local no puede explicar.",
    practice: [
      "Pick one area — calf, thigh, or upper back — and roll slowly, about an inch per second. Slow matters more than hard.",
      "Pause on a tender spot for 20 to 30 seconds and breathe. Do not grind through sharp pain.",
      "Keep it short: one to two minutes per area is the dose most studies used. More is not better.",
      "Use it before activity as a warm-up rather than as the main recovery tool — that is where the evidence is stronger.",
      "For the back, use a ball against a wall or the floor instead of arching over a roller, and never roll the lower back directly over the spine.",
      "Skip it on an acute injury, a bruise, a swollen joint, or skin that is numb or tingling. Pressure on a fresh injury is not release, it is more injury."
    ],
    reps: "One to two minutes per area, before activity, a few times a week. The effect fades within minutes, so treat it as a warm-up, not a cure.",
    evidence: "Moderate — real trials, small and partly negligible effects; the effect is real, the name and the mechanism are not supported",
    evClass: "moderate",
    research: [
      {
        source: "Behm & Wilke, 'Do Self-Myofascial Release Devices Release Myofascia? Rolling Mechanisms: A Narrative Review', Sports Medicine 49:1173-1181 (2019)",
        claim: "There is insufficient evidence that foam rollers release myofascial restrictions — the authors call the term self-myofascial release a misnomer. The plausible mechanisms are neurophysiological (pain modulation, stretch tolerance, parasympathetic relaxation) and hydration or thixotropic changes, not mechanical breakdown of tissue.",
        medium: "peer-reviewed narrative review",
        confidence: "Strong (that the mechanism claim is unsupported)",
        year: "2019"
      },
      {
        source: "Chaudhry, Schleip, Ji, Bukiet, Maney & Findley, 'Three-Dimensional Mathematical Model for Deformation of Human Fasciae in Manual Therapy', J Am Osteopath Assoc 108(8):379-390 (2008)",
        claim: "A finite-deformation model shows that forces outside the normal physiological range are required to produce even 1% compression or shear in dense fascia (fascia lata, plantar fascia). The palpable release therapists report cannot be deformation of those firm tissues.",
        medium: "biomechanical modelling study",
        confidence: "Strong (mechanism)",
        year: "2008"
      },
      {
        source: "Wiewelhove, Doeweling, Schneider, Hottenrott, Meyer, Kellmann, Pfeiffer & Ferrauti, 'A Meta-Analysis of the Effects of Foam Rolling on Performance and Recovery', Frontiers in Physiology 10:376 (2019)",
        claim: "Across 21 studies the effects are small to partly negligible: pre-rolling raised flexibility about 4% and sprint about 0.7%, jump and strength changes were negligible, and post-rolling reduced perceived muscle pain (g = 0.47). The authors conclude the evidence better supports foam rolling as a warm-up than as a recovery tool.",
        medium: "meta-analysis (21 studies)",
        confidence: "Moderate-Strong",
        year: "2019"
      },
      {
        source: "Beardsley & Skarabot, 'Effects of self-myofascial release: A systematic review', Journal of Bodywork and Movement Therapies 19(4):747-758 (2015)",
        claim: "Acutely, self-myofascial release increases flexibility and reduces muscle soreness without harming performance, and may acutely improve arterial and endothelial function and parasympathetic activity. Evidence for long-term flexibility gains is conflicting.",
        medium: "systematic review",
        confidence: "Moderate",
        year: "2015"
      },
      {
        source: "Nakamura, Konrad, Kiyono, Sato, Yahata, Yoshida et al., 'Local and Non-local Effects of Foam Rolling on Passive Soft Tissue Properties and Spinal Excitability', Frontiers in Physiology 12:702042 (2021)",
        claim: "Rolling one calf increased ankle range of motion in BOTH legs, and the change tracked stretch tolerance rather than any change in muscle stiffness or shear elastic modulus. A local mechanical release cannot act on the limb that was never touched — this is the cleanest evidence that the effect is nervous-system, not tissue.",
        medium: "controlled trial (mechanism)",
        confidence: "Moderate-Strong",
        year: "2021"
      },
      {
        source: "Young, Spence & Behm, 'Roller massage decreases spinal excitability to the soleus', Journal of Applied Physiology (2018)",
        claim: "Roller massage temporarily inhibited the H-reflex (spinal excitability) in an intensity-dependent way — direct evidence that rolling changes nervous-system signalling, not only local tissue.",
        medium: "peer-reviewed physiology study",
        confidence: "Moderate",
        year: "2018"
      }
    ],
    verify: "Roll ONE calf or thigh for two minutes, then measure a reach or an ankle bend on BOTH legs. If the leg you never touched also improves, the effect is in your nervous system, not in the tissue under the roller — that is the whole lesson. Then re-measure after five minutes: the gain fades, which is what a temporary change in how you sense stretch looks like, and not what a structural release would look like.",
    village: "The library's honesty laboratory: a practice with a real, measurable effect and a false, popular explanation. It is how the section teaches the difference between 'this helps' and 'this is why it helps' — the same distinction the whole archive is built on.",
    quest: ["The Roller Test — Does It Really Release?", "Foam roll only your left calf for two minutes. Measure how far you can reach, or bend your ankle, on both legs before and after. If the right leg improves too, the roller is not releasing tissue — your nervous system is changing how much stretch you tolerate. Record both numbers and write one sentence about what you think is happening.", ["PE", "Health", "Science"], "🧻"]
  },

  {
    id: "stretching-flexibility",
    icon: "🤸",
    name: "Stretching — What Flexibility Actually Is",
    esName: "Estiramientos — Qué Es Realmente la Flexibilidad",
    tagline: "The most common exercise in the world, and the one whose explanation is most often wrong.",
    lineage: "Not a tradition and not one lineage. Static stretching entered physical culture through Swedish gymnastics (Pehr Henrik Ling, early 1800s) and the military calisthenics tradition, then spread worldwide through school PE and sport. The rule 'hold it 30 seconds to lengthen the muscle' is a twentieth-century coaching convention, not an ancient practice. The research line that actually tested it is modern rehabilitation and sports science: Magnusson's group in Denmark and Sweden (the sensory theory), Behm in Canada (warm-up effects), and the CDC and Cochrane review teams (injury and soreness).",
    what: "Flexibility is range of motion, and range of motion has two parts: how far the tissue can physically go, and how much stretch your nervous system will allow before it signals stop. Stretching reliably improves the second. It changes the first only slightly, and mostly only in the moment. This is why a single session can add several degrees of reach in seconds — tissue does not grow that fast; the nervous system simply permits more. The practical consequences: stretch to gain range, not to prevent injury or soreness; move dynamically before activity and save long holds for after or for a separate session; and 30 seconds is enough.",
    esWhat: "La flexibilidad es rango de movimiento, y el rango de movimiento tiene dos partes: hasta dónde puede llegar el tejido físicamente, y cuánto estiramiento permite tu sistema nervioso antes de dar la señal de alto. Estirar mejora de forma fiable la segunda. La primera solo cambia un poco, y sobre todo en el momento. Por eso una sola sesión puede añadir varios grados de alcance en segundos: el tejido no crece tan rápido; simplemente el sistema nervioso permite más. Las consecuencias prácticas: estira para ganar rango, no para prevenir lesiones ni agujetas; muévete de forma dinámica antes de la actividad y guarda los estiramientos largos para después o para una sesión aparte; y 30 segundos son suficientes.",
    practice: [
      "Warm up first — two or three minutes of easy movement (walking, marching, arm swings) before any long hold. This is the one part of the old warning that holds up: do not force a cold muscle.",
      "Before activity, move rather than hold. Dynamic stretching: leg swings, arm circles, walking lunges, high knees — through a full but comfortable range, five to ten reps each. This is the warm-up half, and it does not cost you performance the way long holds can.",
      "Save the long holds for after activity or a separate time. Ease into the position until you feel a stretch, not pain, and hold for 30 seconds while breathing normally.",
      "Thirty seconds is enough. Two to four holds per muscle group, once a day. Sixty seconds does not add range, and stretching three times a day does not add range either.",
      "Stay below the point of discomfort. If you are bracing, clenching, or holding your breath, you have gone past the useful edge and are training your nervous system to guard instead of yield.",
      "Do not expect it to prevent injury or to stop next-day soreness. It does neither. Warm up, build strength gradually, and sleep.",
      "If you want range you keep, use it under load. Full-range strength work — a deep squat, a full-range push-up, lifting something heavy through the whole movement — improves range about as well as stretching does, and builds strength at the same time."
    ],
    reps: "Dynamic movement before activity, every time. Static holds after activity or as their own short session: 30 seconds per hold, two to four holds per area, once a day. Consistency matters more than duration — the gains fade within weeks if you stop.",
    evidence: "Strong research base — and it mostly says the opposite of the folk claims: stretching reliably increases range of motion, but mainly by changing how much stretch you tolerate rather than by lengthening tissue; it does not prevent injury and does not meaningfully reduce next-day soreness.",
    evClass: "strong",
    research: [
      {
        source: "Weppler & Magnusson, 'Increasing Muscle Extensibility: A Matter of Increasing Length or Modifying Sensation?', Physical Therapy 90(3):438-449 (2010)",
        claim: "After a single stretch and after 3- to 8-week programs, end-range joint angles increase with no shift in the passive torque-angle curve — the tissue resists the same force at the same angle, but the person tolerates more. The authors call this the sensory theory: the gain is in perception, not muscle length. The biomechanics of programs longer than 8 weeks were, at that time, not yet evaluated.",
        medium: "peer-reviewed review (synthesis of biomechanical studies)",
        confidence: "Strong (that short-term gains are sensory) · open (long-term)",
        year: "2010"
      },
      {
        source: "Freitas, Mendes, Le Sant, Andrade, Nordez & Milanovic, 'Can chronic stretching change the muscle-tendon mechanical properties? A review', Scandinavian Journal of Medicine & Science in Sports 28(3):794-806 (2018)",
        claim: "Across 26 stretching studies of 3 to 8 weeks, effects on muscle architecture, muscle stiffness and tendon stiffness were trivial; only maximal tolerated passive torque rose slightly. Stretching increased range of motion and tolerance to a greater tensile force, but did not measurably change the muscle or tendon itself. The authors conclude adaptations in this window are mostly sensory.",
        medium: "systematic review with meta-analysis (26 studies)",
        confidence: "Moderate-Strong",
        year: "2018"
      },
      {
        source: "Behm & Chaouachi, 'A review of the acute effects of static and dynamic stretching on performance', European Journal of Applied Physiology 111(11):2633-2651 (2011)",
        claim: "Long or intense static stretching in a warm-up can acutely reduce strength, power and sprint performance. Short static stretching (under about 90 seconds total) at an intensity below the point of discomfort, in trained people, shows little or no impairment. Dynamic stretching is neutral or beneficial. The recommended warm-up is easy aerobic work, then large-amplitude dynamic movement, then sport-specific activity.",
        medium: "peer-reviewed narrative review",
        confidence: "Moderate-Strong",
        year: "2011"
      },
      {
        source: "Bandy, Irion & Briggler, 'The effect of time and frequency of static stretching on flexibility of the hamstring muscles', Physical Therapy 77(10):1090-1096 (1997)",
        claim: "In 93 adults with limited hamstring flexibility, every stretching group gained range versus no stretching, but there was no difference between 30-second and 60-second holds, and no difference between stretching once or three times per day. Thirty seconds is an effective dose; more time and more sessions do not add range.",
        medium: "randomized controlled trial",
        confidence: "Moderate (single trial, but the finding has been reproduced)",
        year: "1997"
      },
      {
        source: "Thacker, Gilchrist, Stroup & Kimsey, 'The Impact of Stretching on Sports Injury Risk: A Systematic Review of the Literature', Medicine & Science in Sports & Exercise 36(3):371-378 (2004)",
        claim: "Pooling the available controlled studies, stretching was not significantly associated with a reduction in total injuries (OR 0.93, 95% CI 0.78-1.11). The authors found insufficient evidence to endorse or discontinue routine stretching for injury prevention. 'Stretching prevents injury' is a belief the trials did not support.",
        medium: "systematic review with meta-analysis",
        confidence: "Moderate-Strong (the negative finding is consistent across later reviews)",
        year: "2004"
      },
      {
        source: "Herbert, de Noronha & Kamper, 'Stretching to prevent or reduce muscle soreness after exercise', Cochrane Database of Systematic Reviews, CD004577 (2011; updated 2022)",
        claim: "Across 12 randomized studies, stretching before or after exercise did not produce clinically important reductions in delayed-onset muscle soreness — the pooled effects were around half a point to one point on a 100-point scale. The evidence quality was low to moderate, but the results were highly consistent.",
        medium: "Cochrane systematic review (12 randomized studies)",
        confidence: "Moderate (low-to-moderate quality evidence, consistent direction)",
        year: "2011 / 2022"
      },
      {
        source: "Morton, Whitehead, Brinkert & Caine, 'Resistance training vs. static stretching: effects on flexibility and strength', Journal of Strength and Conditioning Research 25(12):3391-3398 (2011)",
        claim: "Five weeks of full-range resistance training improved hamstring, hip-flexion and hip-extension flexibility as much as static stretching did, and improved knee-extension strength more than stretching or inactivity. Range of motion can be gained by loading it, not only by holding it. A small pilot trial; the finding has since been reproduced in larger studies.",
        medium: "randomized controlled trial (pilot)",
        confidence: "Moderate",
        year: "2011"
      }
    ],
    verify: "Test it in ten minutes. Sit with both legs straight and mark where your fingertips reach — or measure the angle your ankle bends. Now stretch only your LEFT hamstring, three holds of 30 seconds, and immediately re-measure BOTH legs. Two things should happen: the left improves, and the right improves a little too, even though you never touched it. A local change in tissue cannot act on the untouched leg — what changed is how much stretch your nervous system will allow. Then wait half an hour and measure again: most of the gain is gone, which is what a change in sensation looks like and not what new tissue length would look like. Two more checks if you want them: hold for 60 seconds instead of 30 on another day and see whether you get more range (the trials say you will not), and test your vertical jump right after a long hold versus right after a dynamic warm-up (the long hold is the one that costs you).",
    village: "The section's most-used practice and its most useful correction. Nearly every family already stretches; almost none has been told what it actually does. It is the entry that turns a daily habit into a habit with an honest reason — and it pairs with the foam-rolling entry to make the same point twice, from two directions: the effect is real, the popular explanation is not.",
    quest: ["The 30-Second Question", "Measure how far your fingertips reach with both legs straight. Stretch only your LEFT hamstring — three holds of 30 seconds — then re-measure BOTH legs straight away. If the right leg improves too, the change is not in the tissue under the stretch; it is in how much stretch your nervous system will allow. Write down all six numbers (both legs, before, after, and again half an hour later) and one sentence on what you think flexibility actually is.", ["PE", "Health", "Science"], "🤸"]
  },

  {
    id: "posture-movement-science",
    icon: "🪑",
    name: "Posture Science — What Actually Holds Up",
    esName: "Ciencia de la Postura — Lo Que Realmente Se Sostiene",
    tagline: "The old 'good posture' model mostly did not survive testing. The replacement is better.",
    lineage: "The modern evidence-based movement camp: Eyal Lederman's 'The Fall of the Postural-Structural-Biomechanical Model' (Journal of Bodywork & Movement Therapies, 2011), Katy Bowman's 'Move Your DNA' (2014), and Gray Cook's Functional Movement Systems.",
    what: "The traditional model said pain comes from bad posture and that correcting posture prevents pain. That model has largely failed to hold up: posture is only weakly related to pain, and there is no single correct posture. What does hold up is movement and position variety — the body wants to change position often. Be precise about which claim is which, though. The case for breaking up sitting is strongest for metabolism (it changes blood sugar and insulin — see Movement Snacks beside this entry) and weakest for pain: the reviews that went looking for a link between sitting and back pain mostly found none. So the honest instruction is 'change position often because that is how the body is built to work,' not 'because sitting is damaging your back.'",
    esWhat: "El modelo tradicional decía que el dolor viene de la mala postura y que corregirla lo previene. Ese modelo no resistió las pruebas: la postura se relaciona débilmente con el dolor y no existe una postura correcta única. Lo que sí se sostiene es la variedad de movimiento y de posición: el cuerpo quiere cambiar de posición a menudo. Conviene ser preciso sobre qué afirmación es cuál. El caso de interrumpir el estar sentado es más fuerte para el metabolismo (cambia el azúcar y la insulina en sangre — ver Bocados de Movimiento junto a esta entrada) y más débil para el dolor: las revisiones que buscaron un vínculo entre estar sentado y el dolor de espalda casi no encontraron ninguno. La instrucción honesta es 'cambia de posición a menudo porque así está hecho el cuerpo', no 'porque estar sentado está dañando tu espalda'.",
    practice: [
      "Change position often — the best posture is the next one. Set a rhythm, not a shape.",
      "Move every 30 minutes — stand, walk, reach overhead, squat down; break up sitting rather than perfecting it.",
      "Build capacity through range — strength at the ends of your range, not just the middle.",
      "Carry and lift in varied ways — let the body meet varied loads instead of one 'correct' technique.",
      "Floor time — get down to the floor and back up daily; it is a whole-body strength and mobility test.",
      "Do not chase symmetry — humans are asymmetric; the goal is capacity, not a mirror."
    ],
    reps: "Continuous. This is a habit of the whole day, not a session.",
    evidence: "Moderate — the negative finding is strong (several systematic reviews agree that posture and occupational sitting do not predict back pain), but the positive replacement ('variety is what matters') rests more on practitioner synthesis and metabolic trials than on pain trials.",
    evClass: "moderate",
    research: [
      {
        source: "Eyal Lederman, 'The fall of the postural-structural-biomechanical model in manual and physical therapies: exemplified by lower back pain', J Bodyw Mov Ther 15(2):131–138 (2011), doi:10.1016/j.jbmt.2011.01.011",
        claim: "The assumption that a specific posture or structure causes pain, and that correcting it resolves pain, is not supported by the evidence. Lederman argues the model should be replaced by one based on movement and load tolerance.",
        medium: "peer-reviewed review / theoretical paper",
        confidence: "Moderate–Strong",
        year: "2011"
      },
      {
        source: "Swain CTV, Pan F, Owen PJ, Schmidt H, Belavý DL, 'No consensus on causality of spine postures or physical exposure and low back pain: a systematic review of systematic reviews', J Biomech 102:109312 (2020), doi:10.1016/j.jbiomech.2019.08.006",
        claim: "An umbrella review of 41 systematic reviews (1990–2018) found no consensus that any spinal posture or physical exposure causes low back pain. The one point the reviews did agree on was the absence of an association between prolonged or occupational sitting and low back pain — the strongest single statement in this entry.",
        medium: "umbrella review of systematic reviews",
        confidence: "Moderate–Strong",
        year: "2020"
      },
      {
        source: "Roffey DM, Wai EK, Bishop P, Kwon BK, Dagenais S, 'Causal assessment of occupational sitting and low back pain: results of a systematic review', Spine J 10(3):252–261 (2010), doi:10.1016/j.spinee.2009.12.005",
        claim: "24 studies (5 high-quality) assessed against the Bradford-Hill causality criteria: strong, consistent evidence of no association between occupational sitting and low back pain, moderate evidence against any dose–response trend, and no significant temporality. The authors conclude occupational sitting is unlikely to be an independent cause of back pain.",
        medium: "systematic review (causal assessment)",
        confidence: "Strong (for the absence of an association)",
        year: "2010"
      },
      {
        source: "Mahmoud NF, Hassan KA, Abdelmajeed SF, Moustafa IM, Silva AG, 'The relationship between forward head posture and neck pain: a systematic review and meta-analysis', Curr Rev Musculoskelet Med 12(4):562–577 (2019), doi:10.1007/s12178-019-09594-y",
        claim: "15 cross-sectional studies. In adults with neck pain, forward head posture is greater than in pain-free adults (mean difference 4.84°, 95% CI 0.14–9.54) and eight studies found it correlated with pain intensity and disability — but in adolescents there is no association at all (mean difference −1.05°, 95% CI −4.23–2.12). The entry's honest complication: posture and pain do track in some adults, the direction cannot be told from cross-sectional data, and in children the link is absent.",
        medium: "systematic review and meta-analysis (cross-sectional studies)",
        confidence: "Moderate (age-dependent; cross-sectional, so no direction of cause)",
        year: "2019"
      },
      {
        source: "Katy Bowman, 'Move Your DNA' (2014); the 'movement diet' framing",
        claim: "Bowman reframes exercise as a small part of a larger 'movement diet' — the total load and variety across the whole day — and argues that the missing input in modern life is variety and volume, not intensity. This is the entry's positive claim, and it is practitioner synthesis rather than trial evidence.",
        medium: "practitioner synthesis of the research",
        confidence: "Moderate",
        year: "2014"
      }
    ],
    verify: "Test the claim, not the advice — two experiments, each about a week. (1) The held-posture test: sit in your most upright, 'correct' posture without moving for 45 minutes and rate your discomfort 1–10. On another day, sit however you like but change position every ten minutes for 45 minutes and rate it again. The prediction from the evidence is that the varied sitting is the comfortable one and that the held 'correct' posture is no better than a held slouch — the position you hold matters less than the fact that you held it. (2) The posture–pain diary: for one week, each evening rate your back and neck pain 1–10, and at the same time each day have someone photograph you sitting and standing (or rate your own posture 1–10). At the end, put the two columns side by side and ask whether the days with the 'best' posture were the days with the least pain. The evidence says they will not line up: the systematic reviews of occupational sitting found no association with back pain at all. If your diary shows no relationship, you have reproduced the finding — and if it shows a strong one, write it down, because a single family is not a study but it is a real observation, and it is worth asking what else changed that week. One honest limit: the neck-posture meta-analysis did find a link in adults who already had neck pain, so 'posture never matters' is too strong a lesson — the link is absent in children and its direction is unclear in adults.",
    village: "Directly changes how the Village talks about the body — it is the entry that retires 'sit up straight.' It is also the most immediately actionable entry for a homeschooling family: floor time, position changes, and carrying things in varied ways are all game-able. Its second job is teaching the honesty rule in miniature: the same evidence that kills the old posture advice also trims the new advice, so the family learns to read a claim all the way down.",
    quest: ["The Position-Variety Day", "For one day, change position every 30 minutes (stand, squat, reach, walk, floor). Count how many distinct positions you actually used. Then do it for a week and compare the count.", ["PE", "Health", "Science"], "🪑"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> posture-movement-science", "authored_at": "2026-10-03"}
  },

  {
    id: "movement-snacks",
    icon: "⏱️",
    name: "Movement Snacks — The One-Minute Dose",
    esName: "Bocados de Movimiento — La Dosis de Un Minuto",
    tagline: "One hard minute, three times a day. The smallest dose in the section.",
    lineage: "Not a lineage — a research construct. The term 'exercise snacks' was used in the 2014 study by Francois and colleagues at the University of Otago; the framing was extended by Gibala's group at McMaster and by Stamatakis and colleagues at Sydney, who named the everyday version VILPA (vigorous intermittent lifestyle physical activity). The practice it describes — short bursts of hard, ordinary movement — is as old as carrying a load up a hill. What is new is the dose, and the fact that someone counted it.",
    what: "Several times a day, do one to two minutes of genuinely hard movement and then go back to your life: stair sprints, twenty fast squats, carrying something heavy up the stairs, walking uphill at a pace you cannot talk over. The whole design is small and frequent instead of long and rare. The studied doses are roughly three bouts a day of one to two minutes each, or two minutes of walking every twenty to thirty minutes of sitting. It is the practice half of the posture entry beside it — that one says the body wants to change position often; this one says how often, and how hard.",
    esWhat: "Varias veces al día, haz de uno a dos minutos de movimiento realmente intenso y luego vuelve a tu vida: subir escaleras rápido, veinte sentadillas, cargar algo pesado escaleras arriba. El diseño es pequeño y frecuente en lugar de largo y raro: unas tres dosis al día de uno a dos minutos, o dos minutos de caminata cada veinte o treinta minutos sentado.",
    practice: [
      "Pick three anchors in the day. The studied version is before each main meal — before breakfast, before lunch, before dinner. Anchors beat willpower: the meal is the reminder.",
      "At each anchor, do one minute of hard movement. Hard means you could not hold a conversation through it.",
      "Use whatever is in the house: sprint up the stairs and walk down (repeat for the minute); 20 bodyweight squats; 30 seconds of fast step-ups onto a stair; 10 push-ups then 10 squats; a fast walk up a hill; carrying a heavy bucket or a full laundry basket up the stairs.",
      "The full study dose is six one-minute rounds before each meal with a minute of easy movement between. One round per meal is the honest starting point — three hard minutes a day.",
      "The lighter, more frequent version: every 20–30 minutes of sitting, stand and walk for two minutes. This one was tested directly and it works at light intensity — you do not have to make it hard.",
      "Children: same idea, kept as play. A race to the top of the stairs, a wheelbarrow walk, carrying the firewood. Do not turn it into a workout.",
      "Stop if you get dizzy or cannot recover your breath within a minute. If you have a heart condition, or are pregnant, ask a clinician before adding hard intervals."
    ],
    reps: "Three one-minute bouts a day (before meals) is the studied minimum; two minutes of walking every 20–30 minutes of sitting is the other studied dose. Start with one bout a day for a week and let the anchors carry it.",
    evidence: "Moderate — a large observational association plus small randomized acute trials that agree with it",
    evClass: "moderate",
    research: [
      {
        source: "Stamatakis et al., 'Association of wearable device-measured vigorous intermittent lifestyle physical activity with mortality', Nature Medicine (2022)",
        claim: "In 25,241 non-exercisers followed for an average of 6.9 years, brief bursts of vigorous everyday movement — about three bouts a day of one to two minutes, roughly 4.4 minutes in total — were associated with 38–40% lower all-cause and cancer mortality and 48–49% lower cardiovascular mortality. This is the strongest single result in the entry, and it is observational: it measures an association, not a cause.",
        medium: "large prospective cohort study (observational, wearable-measured)",
        confidence: "Strong as an association · none claimed as causation",
        year: "2022"
      },
      {
        source: "Francois et al., 'Exercise snacks before meals: a novel strategy to improve glycaemic control in individuals with insulin resistance', Diabetologia (2014)",
        claim: "Nine adults with insulin resistance, randomized crossover: six one-minute bouts at about 90% of maximum heart rate before each meal lowered post-breakfast glucose by 1.4 mmol/L and the 24-hour mean by 0.7 mmol/L, and beat a single 30-minute moderate session after dinner. Small, short, and in one population — but randomized, and directly on this practice.",
        medium: "small randomized crossover trial",
        confidence: "Moderate (tiny sample, acute outcomes, insulin-resistant adults)",
        year: "2014"
      },
      {
        source: "Dunstan et al., 'Breaking Up Prolonged Sitting Reduces Postprandial Glucose and Insulin Responses', Diabetes Care 35(5):976–983 (2012)",
        claim: "Nineteen overweight adults, randomized three-period crossover: two minutes of walking every twenty minutes lowered the post-meal glucose response by 24–30% and the insulin response by about 23% compared with uninterrupted sitting. Light and moderate intensity worked about equally — which is why the frequent-light version is the one to teach a family.",
        medium: "randomized crossover trial (acute outcomes)",
        confidence: "Moderate–Strong (consistent, but small and short-term)",
        year: "2012"
      },
      {
        source: "Takaishi et al., 'A short bout of stair climbing–descending exercise attenuates postprandial hyperglycemia in middle-aged males with impaired glucose tolerance', Applied Physiology, Nutrition, and Metabolism 37(1):193–196 (2012)",
        claim: "A single short bout of stair climbing and descending blunted the post-meal glucose rise in middle-aged men with impaired glucose tolerance — the study that makes the stairs in your own house a legitimate intervention rather than a substitute for one.",
        medium: "small controlled acute study",
        confidence: "Moderate (small, single population, acute)",
        year: "2012"
      },
      {
        source: "Alexe et al., 'Exercise Snacks as a Strategy to Interrupt Sedentary Behavior: A Systematic Review of Health Outcomes and Feasibility', Healthcare (2025)",
        claim: "Twenty-six studies from 2012–2025: exercise snacks improved post-meal glucose, insulin and triglycerides, lowered blood pressure, and improved cardiorespiratory fitness, with high retention (90–100%) and adherence (80–100%). The authors are explicit that the literature is heterogeneous and mostly small and that the optimal dose is unresolved — the review is a map of the evidence, not a verdict.",
        medium: "systematic review (narrative synthesis of heterogeneous trials)",
        confidence: "Moderate",
        year: "2025"
      }
    ],
    verify: "Eat the same breakfast on two mornings and change nothing else except this: on day one, sit for two hours afterwards; on day two, walk for two minutes every twenty minutes. Rate how sleepy you feel at the two-hour mark, 1–10, on both days. If an adult in the house has a glucose meter, take a reading at 30 and 60 minutes instead — that is the Dunstan trial run in your own kitchen: same meal, same person, two conditions. If the numbers come out the same, the effect is not showing up for you, and that is a real result worth writing down. The honest limit: the mortality finding comes from a cohort, so it cannot tell you the snacks caused the benefit — people who move in bursts may differ in other ways too.",
    village: "The cheapest PE in the game: no session, no equipment, no room. It is also the entry that keeps the Village's physical-education layer usable on a bad day — three hard minutes count, and the quest can be scored on the log rather than on a workout.",
    quest: ["The One-Minute Dose", "Three times a day for a week — before breakfast, before lunch, before dinner — do one minute of genuinely hard movement: stair sprints, 20 fast squats, or carrying something heavy up the stairs. Hard enough that you could not talk through it. Log the three times each day and one number: how you feel at 3pm, 1–10.", ["PE", "Health", "Science"], "⏱️"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> movement-snacks", "authored_at": "2026-09-23"}
  },

  {
    id: "breathwork",
    icon: "🌬️",
    name: "Breathwork — Slow Breathing & Cyclic Sighing",
    esName: "Respiración — Lenta y Suspiro Cíclico",
    tagline: "The most evidence-backed five minutes in the whole section.",
    lineage: "Modern research, with ancient roots in every tradition here. Key modern work: the slow-breathing literature (Zaccaro et al., Frontiers in Human Neuroscience, 2018), cyclic sighing (Balban et al., Cell Reports Medicine, 2023), and Stephen Porges' polyvagal theory.",
    what: "Breathing at roughly six breaths per minute (about five seconds in, five seconds out) maximizes heart-rate variability through a baroreflex resonance effect. A 'cyclic sigh' — a long exhale after a second short inhale — appears to be the fastest route to a calm state. This is the mechanism behind the HeartMath coherence practice already in the Library, arrived at independently.",
    esWhat: "Respirar a unas seis respiraciones por minuto (unos cinco segundos dentro, cinco fuera) maximiza la variabilidad del ritmo cardíaco por resonancia barorrefleja. Un 'suspiro cíclico' — exhalación larga tras una segunda inhalación corta — parece la vía más rápida a la calma.",
    practice: [
      "Slow breathing — in for about 5 seconds, out for about 5 seconds, for 5 minutes. No strain; the exhale can be slightly longer.",
      "Cyclic sighing — inhale through the nose, then take a second short inhale on top of it, then a long slow exhale. Repeat for 5 minutes.",
      "Exhale-weighted — if five-in/five-out feels effortful, make the exhale longer than the inhale instead; that alone shifts the balance.",
      "Nose breathing at rest — keep it nasal and quiet during ordinary activity; the breath is a habit, not just a drill.",
      "Use it as a reset — before a test, a recital, a hard conversation, or a sit spot."
    ],
    reps: "5 minutes daily, plus on demand before anything hard. This is the highest-return-per-minute practice in the library.",
    evidence: "Strong for the mechanism — slow breathing near six breaths a minute raises heart-rate variability through a baroreflex-resonance effect that is directly measured. Moderate for the clinical outcome — the mood and anxiety benefits come from small trials, mostly self-reported, and the largest of them found no lasting change in resting HRV.",
    evClass: "strong",
    research: [
      {
        source: "Balban, et al., 'Brief structured respiration practices enhance mood and reduce physiological arousal', Cell Reports Medicine (2023)",
        claim: "Five minutes a day of cyclic sighing (extended exhale) improved mood and lowered respiratory rate more than mindfulness meditation over a one-month randomized study — but the same trial found no significant change in resting heart rate or heart-rate variability in any group, so the lasting benefit it shows is in mood and breathing rate, not in resting HRV.",
        medium: "randomized controlled study",
        confidence: "Strong (single study, well-designed)",
        year: "2023"
      },
      {
        source: "Lehrer & Gevirtz, 'Heart rate variability biofeedback: how and why does it work?', Frontiers in Psychology 5:756 (2014)",
        claim: "The mechanism behind slow breathing is a confluence of the baroreflex and the cardiovascular system's own resonance near 0.1 Hz — about six breaths a minute. Breathing at that rate produces heart-rate oscillations many times larger than at rest, in almost everyone, often within a minute. This is the direct measurement behind the entry's central claim.",
        medium: "mechanism review",
        confidence: "Strong (mechanism, directly measured)",
        year: "2014"
      },
      {
        source: "Zaccaro, et al., 'How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing', Frontiers in Human Neuroscience (2018)",
        claim: "Slow breathing at around six breaths per minute increases heart-rate variability, improves autonomic balance, and reduces anxiety measures across the reviewed literature.",
        medium: "systematic review",
        confidence: "Moderate–Strong",
        year: "2018"
      },
      {
        source: "Stephen Porges — polyvagal theory",
        claim: "Porges links breathing, heart-rate variability, and the vagus nerve to social engagement and safety states. The framework is influential and clinically useful; parts of the theory remain actively debated among physiologists.",
        medium: "theoretical framework, contested in parts",
        confidence: "Moderate (useful model) · contested (as settled theory)",
        year: "1995–present"
      }
    ],
    verify: "Run the kitchen-table trial. Pick three 5-minute practices and do one each day for a week, in any order, at the same time of day: (a) cyclic sighing — double inhale, long exhale; (b) slow breathing — five seconds in, five seconds out; (c) a control — five quiet minutes sitting still, with no breathing instruction at all. Before and after each, rate how calm you feel 1–10 and take your pulse for 15 seconds. The entry's claim makes a prediction you can check: cyclic sighing should move the calm rating most, slow breathing should lower the pulse most, and the control should move least. If the control day does just as well, the practice is not doing what the entry says — and the control is the whole point, because you already expect the breathing days to work. Write down all the numbers; the pattern across the week is the test.",
    village: "The bridge between the PE section and the Heart & Mind Practices section. A family that learns one breath drill has a tool for every hard moment in the game — and in the week. Convergence worth naming: HeartMath's 'quick coherence' (already in the Library), the six-breaths-per-minute research, and the cyclic-sighing trial all arrived at the same place from different directions — that is what a real finding looks like.",
    quest: ["Five Minutes of Breath", "Do five minutes of cyclic sighing (double inhale, long exhale) every day for two weeks. Rate your mood before and after on a 1–5 scale each time and look at the pattern.", ["PE", "Health"], "🌬️"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> breathwork-deepening", "authored_at": "2026-10-04"}
  },

  {
    id: "resonance-frequency-breathing",
    icon: "💓",
    name: "Resonance-Frequency Breathing — Find Your Own Rate",
    esName: "Respiración a Frecuencia de Resonancia — Encuentra Tu Ritmo",
    tagline: "The one number in this section you can only find on yourself.",
    lineage: "A laboratory finding, not a tradition. The resonance phenomenon in the cardiovascular system was mapped by Evgeny Vaschillo, Bronya Vaschillo and Paul Lehrer at Rutgers in a series of papers from 2000 to 2006, and the clinical framework was reviewed by Lehrer and Gevirtz in 2014. The practice it produces — slow paced breathing — is ancient and appears in every tradition in this section. What is modern is the claim that the *right* rate is different for each person, and that you can find yours with a pulse and a clock.",
    what: "Every person's cardiovascular system has a natural resonant frequency — a breathing rate at which the heart-rate swing between inhale and exhale is largest. Breathing there makes the pulse oscillation grow to several times its resting size and turn smooth and wave-like, which is what the biofeedback devices are measuring. The average sits around six breaths a minute, which is why 'six breaths per minute' is the number everyone quotes — but the studied range is 4.5 to 6.5, it is stable for a given person across many sessions, and it runs slower in taller people and in men. So the honest version of the practice is: find your rate, then breathe there. The generic entry beside this one teaches the drill; this one teaches the tuning.",
    esWhat: "Cada persona tiene una frecuencia de resonancia cardiovascular propia — un ritmo respiratorio en el que la oscilación del pulso entre inhalación y exhalación es máxima. La media ronda las seis respiraciones por minuto, pero el rango estudiado va de 4,5 a 6,5, es estable para cada persona y es más lento en personas altas y en hombres. La versión honesta de la práctica es: encuentra tu ritmo y respira ahí.",
    practice: [
      "Sit quietly for two minutes first, without changing your breathing. Let the baseline settle.",
      "Put two fingers on the pulse at your wrist or your neck and keep them there. You are going to feel the pulse get faster and slower within each breath — that swing is the whole measurement.",
      "Breathe at a set rate for two minutes, using a clock or a slow count. Start at 5.5 seconds in and 5.5 seconds out — that is about 5.5 breaths per minute.",
      "While you breathe, notice the size of the pulse swing: how much faster it feels at the top of the inhale than at the bottom of the exhale. If you can count it, count beats for 15 seconds at the peak of the inhale and again at the end of the exhale and write both numbers down.",
      "Change the rate and repeat. Test 4.5, 5, 5.5, 6 and 6.5 breaths per minute — two minutes at each, with a minute of normal breathing between them. Slower is not automatically better; the largest swing wins, and for some people that is 4.5 and for others 6.5.",
      "The rate with the biggest swing is your resonance rate. That is the rate to practise at — five to fifteen minutes a day, sitting, nose-breathing, no strain.",
      "If you have a chest-strap heart-rate monitor or a phone app that shows a live pulse wave, use it instead of your fingers: you are looking for the wave with the tallest peaks. The fingers work, the device is just easier to read.",
      "Children: same idea, kept as a game. 'Find the breathing speed that makes your heartbeat dance the most.' A minute at each rate is enough for a child.",
      "Stop if you feel dizzy or air-starved. Slow breathing below your comfortable rate can lower carbon dioxide and cause light-headedness — the studied protocol had this happen in early sessions and it settled with practice. Do not force a rate that feels wrong just because it is the one on the chart."
    ],
    reps: "Find your rate once (about 15 minutes), then practise at it for 5–15 minutes a day. The rate does not drift much — the studies found it stable within half a breath per minute across ten sessions — so it is a one-time measurement you keep.",
    evidence: "Strong as a physiological protocol — the resonance effect and the 4.5–6.5 breaths-per-minute range are directly measured. Moderate as a clinical outcome — the stress and anxiety benefit comes mostly from self-reported measures in small trials.",
    evClass: "strong",
    research: [
      {
        source: "Vaschillo, Vaschillo & Lehrer, 'Characteristics of Resonance in Heart Rate Variability Stimulated by Biofeedback', Applied Psychophysiology and Biofeedback 31(2):129–142 (2006)",
        claim: "The paper that names the phenomenon and measures it. In 32 adult asthma patients and 24 healthy adults, each person's resonant frequency sat between 4.5 and 6.5 breaths per minute; it was stable across ten training sessions (almost never varying by more than 0.5 breaths per minute); it related negatively to height and was lower in men than in women; and it showed no relationship to age, weight, or whether the person had asthma. This is the source for the claim that the rate is personal and the source for the range.",
        medium: "physiological measurement study (clinical trial, NIH-funded)",
        confidence: "Strong for the resonance effect and the range",
        year: "2006"
      },
      {
        source: "Steffen, Austin, DeBarros & Brown, 'The Impact of Resonance Frequency Breathing on Measures of Heart Rate Variability, Blood Pressure, and Mood', Frontiers in Public Health 5:222 (2017)",
        claim: "A three-group experiment that tested whether the *personal* rate matters: one group breathed at their own resonance frequency for 15 minutes, one at one breath per minute faster, and one sat quietly. The resonance group reported higher positive mood, showed a higher LF/HF heart-rate-variability ratio than the control group, and had lower systolic blood pressure during a stressful mental task and during recovery. The group breathing just one breath off their rate did not separate cleanly from either side — which is the finding that makes 'find your own rate' a real instruction rather than a slogan.",
        medium: "randomized three-group experiment (acute outcomes)",
        confidence: "Moderate–Strong (randomized, but small and short-term)",
        year: "2017"
      },
      {
        source: "Lehrer & Gevirtz, 'Heart rate variability biofeedback: how and why does it work?', Frontiers in Psychology 5:756 (2014)",
        claim: "The mechanism review. During resonance breathing the heart-rate oscillation grows to many times its resting amplitude and becomes simple and sinusoidal, driven by the baroreflex — the blood-pressure reflex loop. With home practice twice daily over about three months, resting baroreflex gain increases even before a session begins, which the authors read as the reflex getting stronger. The paper is explicit that the mechanism is the best-supported explanation rather than a settled one, and that a vagal pathway to the frontal cortex is a competing proposal.",
        medium: "mechanism review",
        confidence: "Strong for the mechanism · the competing explanation is stated as open",
        year: "2014"
      },
      {
        source: "Goessl, Curtiss & Hofmann, 'The effect of heart rate variability biofeedback training on stress and anxiety: a meta-analysis', Psychological Medicine 47(15):2578–2586 (2017)",
        claim: "Twenty-four studies, 484 participants: heart-rate-variability biofeedback was associated with a large reduction in self-reported stress and anxiety (within-group Hedges' g = 0.81; between-group versus control g = 0.83). The effect did not change with study year, risk of bias, number of sessions, or whether an anxiety disorder was present. The authors' own limit is in the abstract: the outcome is self-reported, the total sample is small, and more well-controlled studies are needed. This is the entry's clinical half, and it is the weaker half.",
        medium: "meta-analysis (random-effects, 24 small studies)",
        confidence: "Moderate (large pooled effect, but self-reported and small total N)",
        year: "2017"
      }
    ],
    verify: "Find your own resonance rate and write it down — that is the test, and it takes about fifteen minutes. Sit quietly, fingers on your pulse, and breathe at 4.5, 5, 5.5, 6 and 6.5 breaths per minute for two minutes each. At every rate, count your pulse for 15 seconds at the top of the inhale and again at the end of the exhale, and subtract. The rate with the biggest difference is yours. Then do the honest comparison: on two days, do five minutes at your own rate, and on two other days do five minutes at a rate one breath away from it, and rate how calm you feel afterwards, 1–10. If your own rate does not beat the wrong rate for you, the tuning is not doing anything you can feel — and that is a real result. The honest limits: the stress-and-anxiety evidence is self-reported and comes from small studies, so a calm feeling is not proof of a physiological change; and the resonance effect is real in the laboratory whether or not you can feel it, which means the measurement is more trustworthy than the sensation.",
    village: "This is the section's lesson about personalisation, made physical. Every other practice in the library is the same for everyone; this one has a number that only exists on your own body, and the game's job is to get the player to go find it. It pairs with the breathwork entry beside it — that one is the drill, this one is the tuning — and it gives the family a shared experiment: five people, five different rates, one table of numbers.",
    quest: ["Find Your Rate", "Spend fifteen minutes finding your own resonance breathing rate: breathe at 4.5, 5, 5.5, 6 and 6.5 breaths per minute for two minutes each, counting your pulse at the top of the inhale and the end of the exhale, and write down the rate where the pulse swing is largest. Then practise at your rate for five minutes a day for a week, and put your number on the family chart next to everyone else's.", ["PE", "Health", "Science"], "💓"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> resonance-frequency-breathing", "authored_at": "2026-09-24"}
  },

  {
    id: "tai-chi-balance",
    icon: "🌊",
    name: "Tai Chi & Balance Training",
    esName: "Tai Chi y Entrenamiento de Equilibrio",
    tagline: "The traditional practice with the strongest clinical record of all of them.",
    lineage: "Chinese internal martial art, with the Chen family form traced to the 17th century and the Yang and Wu styles following. Its modern clinical life began in the 1990s and it now has one of the best trial records of any traditional movement practice.",
    what: "Slow, continuous, weight-shifting movement with an upright posture and relaxed attention. The clinical interest is mostly in balance and fall prevention: tai chi trains single-leg stability, weight transfer, and the ability to recover from a perturbation — exactly the capacities that prevent falls.",
    esWhat: "Movimiento lento, continuo, con cambio de peso, postura erguida y atención relajada. El interés clínico está en el equilibrio y la prevención de caídas: entrena la estabilidad a una pierna, la transferencia de peso y la recuperación ante desequilibrios.",
    practice: [
      "Standing practice — feet shoulder-width, knees soft, weight sinking; hold for 5 minutes and notice the sway.",
      "Weight shifting — slowly move the weight side to side and forward to back without lifting the feet.",
      "Single-leg stand — lift one foot, hold 10–30 seconds, switch. Eyes open first, then eyes closed.",
      "Cloud hands — a continuous side-to-side hand and waist movement while stepping slowly.",
      "Form practice — learn a short form (the 24-movement simplified form is the standard entry point).",
      "Recovery drill — have a partner give a gentle nudge and practice stepping to recover."
    ],
    reps: "10–20 minutes daily. Single-leg stands alone, done daily, are a complete balance program.",
    evidence: "Moderate–Strong benchmark evidence",
    evClass: "strong",
    research: [
      {
        source: "The tai chi clinical literature — multiple meta-analyses and systematic reviews (2000s–2020s)",
        claim: "Tai chi reduces fall rates and improves balance measures in older adults, with the effect appearing across multiple independent meta-analyses. It also shows modest benefits for fibromyalgia, knee osteoarthritis, and quality of life.",
        medium: "multiple meta-analyses / systematic reviews",
        confidence: "Moderate–Strong",
        year: "2000s–2020s"
      },
      {
        source: "Balance training generally",
        claim: "Balance is trainable at any age, and single-leg standing time is a real, measurable, and improvable number — which makes it the best home test in this whole section.",
        medium: "exercise-science consensus",
        confidence: "Strong (as a principle)",
        year: "—"
      },
      {
        source: "The taijiquan lineage — founded in Chen Village (Wen County, Henan) by Chen Wangting, a retired soldier who combined martial technique with yin–yang and Daoist principles; codified into the Old Frame by Chen Changxing (1771–1853), who took the first recorded non-family disciple, Yang Luchan (1799–1872). Yang carried the art to Beijing and adapted it for health, becoming the Yang style; his grandson Yang Chengfu (1883–1936) standardised and popularised the 108-form and published books on it in the 1930s. In 1956 the National Physical Culture and Sports Commission of the People's Republic of China produced the Simplified 24-movement form from the Yang style, its principal architect Li Tianji (1914–1996), later called 'the Father of Modern Taijiquan'; the form is now the most widely practised routine in the world. Sources: Chinese Olympic Committee, 'The Founder of Yang-Style Taijiquan and His Successors' (en.olympic.cn, 2003); 'A Brief History of Taijiquan' (saragellhorntaiji.com); Chen-style tai chi lineage (Wikipedia, citing Chen Village transmission records); egreenway.com, 'Simplified Standard 24 Movement T'ai Chi Ch'uan Form'",
        claim: "Teacher-training lineage: tai chi reaches a family through a named transmission chain — Chen Village → Yang Luchan → Yang Chengfu → the 1956 state standardisation — in which the form itself is the syllabus and a teacher's authority comes from who taught them. The 1956 simplification is the hinge that makes the practice teachable at scale: it fixed one short, standard routine so that a teacher anywhere in the world is teaching recognisably the same 24 movements. The honest read: this documents how the practice was carried and standardised, not that it works — the outcome evidence is the clinical literature above, and it stands or falls separately from the lineage.",
        medium: "teacher-training lineage",
        confidence: "High (as lineage and transmission), none claimed (as outcome evidence)",
        year: "1600s–today"
      }
    ],
    verify: "The single best home measurement in the PE section: time your single-leg stand, eyes closed, both sides. Write it down. Train for eight weeks. Measure again. That number is the honest test of the whole balance domain.",
    village: "The most defensible traditional practice in the library, and the one with the clearest family benefit — it protects the grandparents, and it is a game for the kids. It should anchor the Vitality guild's balance tier.",
    quest: ["The Balance Number", "Time your single-leg stand with eyes closed (both sides, best of three). Train tai chi or single-leg stands for eight weeks, then measure again. Record both numbers and the difference.", ["PE", "Health", "Science"], "🌊"]
  },

  {
    id: "vestibular-rehab-gaze-stabilization",
    icon: "👁️",
    name: "Vestibular Training — Gaze Stabilization & the Three Balance Senses",
    esName: "Entrenamiento Vestibular — Estabilización de la Mirada y los Tres Sentidos del Equilibrio",
    tagline: "Balance has three inputs. This is the one almost nobody trains.",
    lineage: "Vestibular rehabilitation came out of the clinic, not a tradition. The first widely used habituation programme was the Cawthorne–Cooksey set, developed in London in the 1940s for people recovering from head injury; the field became a formal rehabilitation specialty from the 1980s onward through the work of clinicians such as Susan Herdman at Emory, and it now has its own textbooks and a Cochrane review. The exercises are simple; the lineage is documented clinical practice rather than a lineage transmission.",
    what: "The balance system combines three inputs — vision, proprioception (the body's sense of its own position), and the vestibular system (the inner ear's motion sensors). Most balance practice trains the first two. Vestibular rehabilitation trains the third directly, with gaze stabilization: you keep your eyes fixed on a target while turning your head, which forces the vestibulo-ocular reflex (VOR) to hold the image steady. The clinical version adds habituation — deliberately repeating a movement that provokes mild dizziness until the brain stops over-reacting to it.",
    esWhat: "El sistema del equilibrio combina tres entradas: la visión, la propiocepción (el sentido de la posición del cuerpo) y el sistema vestibular (los sensores de movimiento del oído interno). Casi toda la práctica del equilibrio entrena las dos primeras. La rehabilitación vestibular entrena la tercera directamente, con estabilización de la mirada: mantienes los ojos fijos en un blanco mientras giras la cabeza, lo que obliga al reflejo vestíbulo-ocular (VOR) a mantener la imagen estable. La versión clínica añade habituación: repetir a propósito un movimiento que provoca un mareo leve hasta que el cerebro deja de sobrerreaccionar.",
    practice: [
      "Find a target — a letter on the wall at arm's length, or your own thumb held up in front of you.",
      "VOR x1 — keep your eyes on the target and turn your head left and right about 30 degrees at a comfortable speed, for 30 seconds. The target should stay as sharp as it is when your head is still. If it smears or you feel queasy, slow down; speed is the thing you add later, not the thing you start with.",
      "VOR x2 — the same, but move the target and your head in opposite directions (target left while the head turns right). Noticeably harder; add it only when x1 stays clean.",
      "Vertical — the same with head nodding up and down, and with the target moving up while the head moves down.",
      "The sensory ladder — stand on one leg with eyes open, then eyes closed, then on a folded towel or cushion, timing each. Removing vision forces the vestibular and proprioceptive inputs to do the work, which is what makes the eyes-closed number informative.",
      "Habituation — only if a clinician has diagnosed a vestibular problem: repeat the specific movement that provokes mild dizziness, a few times, twice a day. This is the clinical part. It is not a self-treatment for undiagnosed vertigo, and unexplained dizziness is a reason to see a clinician, not a reason to start this exercise."
    ],
    reps: "Gaze stabilization — 30–60 seconds per direction, once or twice a day. Sensory ladder — one timed round per side, daily. Progress by making the target smaller, the head faster, or the surface softer, never by pushing through real dizziness.",
    evidence: "Moderate — Strong for diagnosed unilateral vestibular hypofunction, weaker as general prevention",
    evClass: "moderate",
    research: [
      {
        source: "Cochrane review of vestibular rehabilitation for unilateral peripheral vestibular dysfunction (Hillier & McDonnell; first published 2007, updated through the 2010s)",
        claim: "Vestibular rehabilitation is effective for unilateral peripheral vestibular dysfunction, but the review's own conclusion is that the evidence base is limited in size and quality — which is exactly why the label on this entry is Moderate and not Strong. The strongest evidence is for treating a diagnosed problem, not for preventing one in healthy people.",
        medium: "Cochrane systematic review",
        confidence: "Moderate",
        year: "2007–2010s"
      },
      {
        source: "Herdman & Clendaniel, 'Vestibular Rehabilitation' (F. A. Davis; the standard clinical textbook, editions from the 1990s through the 2010s)",
        claim: "Gaze stabilization (VOR x1 and x2) and habituation are the core exercises of vestibular rehabilitation, and the textbook documents the protocols and their progression. This is practitioner documentation of a clinical field rather than a single trial.",
        medium: "clinical textbook / practitioner documentation",
        confidence: "Strong (as the field's standard reference)",
        year: "1990s–2010s"
      },
      {
        source: "Springer et al., 'Normative values for the unipedal stance test with eyes open and closed', Journal of Geriatric Physical Therapy, 2007",
        claim: "Single-leg stance time with the eyes closed declines predictably with age and has published normative values by decade — which is what makes the eyes-closed stand a real measurement with a reference range rather than a party trick.",
        medium: "cross-sectional normative study",
        confidence: "Moderate",
        year: "2007"
      },
      {
        source: "The standard three-input model of balance physiology (vision, proprioception, vestibular) — taught in every physiology and audiology text",
        claim: "Balance is produced by combining three sensory inputs, and removing one (closing the eyes) changes how much the other two must contribute. This is consensus, not a finding from a single study — and it is what makes the sensory ladder a useful test.",
        medium: "physiology consensus",
        confidence: "Strong (as a model)",
        year: "—"
      }
    ],
    verify: "The gaze-stabilization test: hold a target at arm's length, turn your head left and right at about one turn per second, and notice whether the target stays sharp or smears. Then the sensory ladder: time your single-leg stand with eyes open, then eyes closed, then on a folded towel. Write all three numbers down. The eyes-closed one is the number that reflects your vestibular and proprioceptive input, and it is the one to re-measure in eight weeks.",
    village: "The balance domain's missing half. Tai chi trains the weight-shift and proprioceptive side; this trains the vestibular side and lets the family see the three inputs separately. It also carries a lesson the rest of the section does not: a balance problem can be medical, so the habituation exercises are labeled as clinical rather than turned into a game.",
    quest: ["The Three-Number Balance Test", "Time your single-leg stand three ways — eyes open, eyes closed, and standing on a folded towel — best of three on each side. Write all six numbers down. Then practise gaze stabilization (head turns with your eyes fixed on a target) for 30 seconds each direction, daily, for four weeks, and measure all six again to see which number moved most.", ["PE", "Health", "Science"], "👁️"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> vestibular-rehab-gaze-stabilization", "authored_at": "2026-09-25"}
  },

  {
    id: "loaded-carries",
    icon: "🪣",
    name: "Loaded Carries — The Farmer's Walk & the Grip That Predicts",
    esName: "Cargas con Peso — La Caminata del Granjero y la Fuerza de Agarre que Predice",
    tagline: "Pick something heavy up and walk with it. The oldest strength test there is — and the one number that predicts the most.",
    lineage: "No founder and no lineage to claim — the loaded carry is the oldest strength practice there is, because it is what work was: carrying water, wood, grain, feed, children. The named forms came later. The farmer's walk is a strongman competition event (a weight in each hand, walk for distance or time); the suitcase carry is the one-sided version; the yoke walk, the Zercher carry, and overhead carries are the other named variants. The modern coaching literature is practitioner documentation (the NSCA's own 2020 article on loaded carries says plainly that there is limited research on them), not a trial base.",
    what: "Walking while carrying a heavy load — in one hand, both hands, at the chest, overhead, or on the back — for distance or time. The point is not the arms. It is the whole body holding a braced, upright position while moving under load: the trunk resists being pulled sideways, the grip holds, the feet keep walking. Bilateral (farmer's walk) is a weight in each hand. Unilateral (suitcase carry) is a weight in one hand only, and the trunk has to resist the pull — which is the harder and more useful version for most people. It needs almost no equipment: two full water jugs, two buckets of sand, two heavy grocery bags, or a loaded backpack.",
    esWhat: "Caminar cargando un peso — en una mano, en las dos, al pecho, sobre la cabeza o en la espalda — por distancia o tiempo. El punto no son los brazos. Es todo el cuerpo sosteniendo una posición firme y erguida mientras se mueve bajo carga: el tronco resiste que lo jalen hacia un lado, el agarre sostiene, los pies siguen caminando. Bilateral (granjero) es un peso en cada mano. Unilateral (maleta) es un peso en una sola mano, y el tronco debe resistir el tirón — que es la versión más difícil y más útil para casi todos. Casi no necesita equipo: dos garrafones llenos de agua, dos cubetas de arena, dos bolsas pesadas del mandado, o una mochila cargada.",
    practice: [
      "1. Start light — a full water jug in each hand (about 4 L ≈ 4 kg each), two buckets of sand, or two heavy grocery bags with handles. Stand tall: ribs down, shoulders back and down, eyes forward, feet under you.",
      "2. Walk a set distance — 10 to 20 metres down and back — at a normal pace. The load should not change your posture. If you are leaning back, the load is too heavy or you are carrying it wrong.",
      "3. Bilateral (farmer's walk) — one load in each hand, arms hanging. Unilateral (suitcase carry) — load in one hand only; stay square, do not lean away from it. Walk half the distance, switch hands, walk back. The one-sided version is the one that trains the trunk.",
      "4. Add load before adding distance. When 20 m is easy, go heavier — not longer. A good working set is one you could not carry for much more than 30–60 seconds.",
      "5. Stop when your grip is about to fail, not after. Setting the load down under control, with a flat back, is part of the exercise — not the part you skip.",
      "6. Children carry scaled loads: a full water bottle in each hand, a small loaded backpack, or a bucket of sand. The rule is the same — perfect posture, stop before the grip fails."
    ],
    reps: "3–5 carries of 20–40 m (or 30–60 seconds each), 2–3 times a week. Add weight before distance. One set done with good posture beats five done sloppily — this is a practice where form is the whole exercise.",
    evidence: "Strong as an association · not established as an intervention — grip strength is one of the best-replicated predictors of mortality in all of epidemiology (millions of participants across dozens of cohorts), but no trial has shown that *training* grip strength changes those outcomes. The carry builds the thing that predicts; whether building it changes the prediction is the open question, and the label says so.",
    evClass: "strong",
    research: [
      {
        source: "Leong et al., 'Prognostic value of grip strength: findings from the Prospective Urban Rural Epidemiology (PURE) study', The Lancet (2015)",
        claim: "139,691 adults in 17 countries, median 4.0 years' follow-up. Each 5 kg reduction in grip strength was associated with higher all-cause mortality (hazard ratio 1.16, 95% CI 1.13–1.20), cardiovascular mortality (1.17), myocardial infarction (1.07), and stroke (1.09). Grip strength was a stronger predictor of all-cause and cardiovascular mortality than systolic blood pressure. An association — not a demonstration that training grip changes any of it.",
        medium: "prospective multi-country cohort",
        confidence: "Strong (as an association) · none claimed (as cause)",
        year: "2015"
      },
      {
        source: "Celis-Morales et al., 'Associations of grip strength with cardiovascular, respiratory, and cancer outcomes and all cause mortality: prospective cohort study of half a million UK Biobank participants', BMJ (2018)",
        claim: "502,293 participants, mean 7.1 years, 13,322 deaths. Per 5 kg lower grip strength, all-cause mortality hazard ratio was 1.20 in women and 1.16 in men. The paper also sets the 'muscle weakness' line used widely since: grip below about 26 kg for men and 16 kg for women. It is the largest single cohort in the grip-strength literature and it is still observational.",
        medium: "prospective cohort (UK Biobank)",
        confidence: "Strong (as an association)",
        year: "2018"
      },
      {
        source: "Soysal et al., 'Handgrip strength and health outcomes: Umbrella review of systematic reviews with meta-analyses of observational studies', Journal of Sport and Health Science (2020)",
        claim: "The honesty ceiling for this whole entry. Across 8 systematic reviews and 11 outcomes, NO outcome reached 'convincing' evidence (Class I). Three reached 'highly suggestive' (Class II): all-cause mortality (34 studies, 1,855,817 participants, relative risk 0.72), cardiovascular death (RR 0.84), and disability (RR 0.76). Two associations — hip fracture and cancer mortality — were not significant. So the strongest possible reading is 'highly suggestive,' and that is the label this entry earns.",
        medium: "umbrella review of observational meta-analyses",
        confidence: "Highly suggestive, not convincing — the honest ceiling",
        year: "2020"
      },
      {
        source: "López-Bueno et al., 'Thresholds of handgrip strength for all-cause, cancer, and cardiovascular mortality: A systematic review with dose-response meta-analysis', Ageing Research Reviews (2022)",
        claim: "48 prospective cohorts, 3,135,473 participants from more than 40 countries. Higher grip strength was associated with lower all-cause mortality in a close-to-linear dose-response fashion within the 26–50 kg band. The relationship has a shape — which is useful for a reference number — but a shape in observational data is not a mechanism.",
        medium: "dose-response meta-analysis",
        confidence: "Strong (as an association) · the shape, not the cause",
        year: "2022"
      },
      {
        source: "National Strength and Conditioning Association, 'Increase Hip and Trunk Stability with Loaded Carries' (NSCA Coach, 2020)",
        claim: "The coaching literature presents loaded carries as a hip- and trunk-stability method and a rehabilitation tool, and states plainly that there is limited research on loaded carries and few recommendations for time under tension or distance. This is practitioner documentation of a real training practice, not evidence of a health outcome — and it is labeled as such.",
        medium: "practitioner documentation / coaching article",
        confidence: "Moderate (as a training method) · none (as an outcome)",
        year: "2020"
      },
      {
        source: "Holmstrup, Kelley, Calhoun & Kiess, 'Fat-Free Mass and the Balance Error Scoring System Predict an Appropriate Maximal Load in the Unilateral Farmer's Walk', Sports (2018)",
        claim: "51 recreationally active adults; fat-free mass predicted the maximal safe load carried in the unilateral farmer's walk (r² = 0.774), and adding a balance score improved the prediction. Useful for one practical thing — how heavy to start — and honest about its limit: young healthy adults, not a family, and no outcome measured beyond the carry itself.",
        medium: "cross-sectional study",
        confidence: "Moderate",
        year: "2018"
      }
    ],
    verify: "Grip is the number this whole entry rests on, so measure it — but measure it honestly. The cheapest home test is a fixed-load carry: pick a load you can carry for about 30 seconds, and time how long you can hold it before you must set it down. Write down the load and the seconds. Do carries 3× a week for six weeks, then repeat the exact same test with the exact same load. Your grip will improve — that part is nearly certain. The honest question is the second one: did anything else change (how you feel, how you sleep, how stairs feel)? If nothing but the grip number moved, you have learned exactly what the research says — the association is real, the causal claim is untested. A bathroom scale squeezed in the hand is a crude grip proxy; a real hand dynamometer gives the number the studies use, but it is optional and the fixed-load test is enough to see change.",
    village: "The Village's first strength quest, because it needs no equipment beyond something heavy — and because it is the homestead work the family already does (carrying water, wood, feed). It ties straight into Survival Mode's water and food domains: carrying water is the literal task, and the carry is its training drill. The number it produces (load × time) is the family's first real strength stat — a trackable score with a published reference range behind it, which makes it the cleanest example in the section of a practice whose honest label and whose game number are the same thing.",
    quest: ["The Carry Test — Load & Time", "Pick a load you can carry for about 30 seconds (two full water jugs, two buckets of sand, heavy grocery bags). Time how long you can hold it before you must set it down, and write down the load and the seconds. Then do 3 carries, 2–3 times a week for six weeks — adding weight before distance — and repeat the exact same test. Log both numbers and one sentence on what else changed.", ["PE", "Health", "Science"], "🪣"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> loaded-carries", "authored_at": "2026-09-26"}
  },

  {
    id: "alexander-technique",
    icon: "🎭",
    name: "The Alexander Technique",
    esName: "La Técnica Alexander",
    tagline: "The one 'posture' method that survived a randomized trial.",
    lineage: "F. M. Alexander, an Australian actor who lost his voice and rebuilt his use of himself between 1890 and 1900. It is a Western somatic method with an unusually good research record for a practice of its kind.",
    what: "A method of unlearning habitual tension, particularly in the head–neck–back relationship. The core skill is 'inhibition' — pausing before acting — plus 'direction', the practice of consciously allowing the neck to be free and the spine to lengthen. It is taught by teachers, hands-on, and it is as much attentional as physical.",
    esWhat: "Un método para desaprender la tensión habitual, sobre todo en la relación cabeza–cuello–espalda. La habilidad central es la 'inhibición' — pausar antes de actuar — más la 'dirección', permitir conscientemente que el cuello esté libre y la columna se alargue.",
    practice: [
      "Pause before moving — the 'inhibition' step: notice the habitual response and do not perform it.",
      "Semi-supine rest — lie on the back with knees bent and books under the head, for 10–15 minutes daily.",
      "Constructive rest direction — silently suggest 'neck free, head forward and up, back lengthening and widening.'",
      "Chair work — practice sitting down and standing up with attention rather than habit.",
      "Everyday carryover — apply it to one ordinary activity (walking, typing, lifting) rather than to a separate session."
    ],
    reps: "10–15 minutes of semi-supine daily, plus carrying the attention into ordinary activity. Best learned with a teacher for the first several lessons.",
    evidence: "Moderate–Strong benchmark evidence",
    evClass: "strong",
    research: [
      {
        source: "Little, et al., 'Randomised controlled trial of Alexander technique lessons, exercise, and massage (ATEAM) for chronic and recurrent back pain', BMJ (2008)",
        claim: "In a randomized trial, Alexander technique lessons produced a significant reduction in days in pain at one year, and the effect was sustained. Six lessons were about half as effective as twenty-four.",
        medium: "randomized controlled trial (BMJ)",
        confidence: "Strong (for this outcome)",
        year: "2008"
      },
      {
        source: "Subsequent Alexander technique trials and reviews",
        claim: "Later work supports modest benefits for back pain and for balance and mobility in older adults, with the evidence base still small compared to the size of the claims made for the method.",
        medium: "small RCTs and reviews",
        confidence: "Moderate",
        year: "2010s–2020s"
      },
      {
        source: "The Alexander Technique teacher-training lineage — F. M. Alexander trained his first teachers by apprenticeship (his brother A. R. Alexander, Ethel Webb, Irene Tasker), then opened a structured three-year training course in London in 1931 at 16 Ashley Place, which ran until the Second World War interrupted it in 1940 and resumed in 1945. After his death in 1955 the course was carried on by his assistant teachers — first as The Use of the Self Ltd., then from 1960 as The Constructive Teaching Centre under Walter Carrington — while Marjory and Wilfred Barlow and Patrick Macdonald each opened their own courses in the mid-1950s. The Society of Teachers of the Alexander Technique (STAT) was formed in 1958 and set the training standard that is still used: a minimum of 1,600 hours over three years. AmSAT-approved courses in the US hold the same figure — a minimum of 1,600 hours over at least three years, with a student-to-teacher ratio no higher than five to one. Sources: Mouritz, 'Teacher Training' and 'Three Year Teacher Training' (mouritz.org, specialist publisher on the Technique); American Society for the Alexander Technique, 'Alexander Teacher Training' (alexandertechniqueusa.org); Manchester Alexander Training course handbook (manchesteralexandertraining.com)",
        claim: "Teacher-training lineage with a fixed standard: unlike a book-and-video method, the Alexander Technique is transmitted by a founder who trained his own successors in person, and then by a professional society that codified the training into a measurable requirement — 1,600 hours over three years — still enforced today. That is why 'Alexander teacher' names a specific qualification rather than a personal interest, and why the method's trial evidence can be read as evidence about a defined practice rather than about whoever happens to teach it. The honest read: this documents how the teaching is standardised and carried, not that it works; it also flags the known critique — that a fixed hour count is a proxy for competence rather than a measure of it.",
        medium: "teacher-training lineage",
        confidence: "High (as training lineage and standard), none claimed (as outcome evidence)",
        year: "1931–today"
      }
    ],
    verify: "Worth noting what this entry proves: a 'posture method' can survive a real trial. The Alexander Technique did; most posture-correction products have not. The distinction is the trial, not the tradition.",
    village: "The natural companion to the Posture Science entry — one says the old model failed, the other shows what a method that actually tested well looks like. Semi-supine rest is a five-minute practice a child can do before bed.",
    quest: ["Semi-Supine Rest", "Do 10 minutes of semi-supine rest (on your back, knees bent, books under the head) every day for two weeks. Notice what changes in how you sit and stand afterward.", ["PE", "Health"], "🎭"]
  },

  {
    id: "grounding-earthing",
    icon: "🌍",
    name: "Grounding / Earthing",
    esName: "Conexión a Tierra (Earthing)",
    tagline: "Barefoot contact with the Earth — the entry with the biggest gap between claim and evidence.",
    lineage: "A modern hypothesis popularized by Clint Ober with Stephen Sinatra and Martin Zucker ('Earthing', 2010), with a small research literature beginning in the 2000s. The group is small and overlapping: the 2012 review that anchors the claims lists a grounding-products company (Earth FX Inc.) among its authors' affiliations. That does not make the work false — it means the literature has been written largely by the people with a commercial interest in the result, and has never been independently replicated at scale.",
    what: "The claim is that direct skin contact with the Earth's surface lets the body absorb free electrons, reducing inflammation and improving sleep. Half of that is not in dispute: the body is conductive, the Earth is a charge reservoir, and the connection is measurable with a meter. What is in dispute is everything built on top of it — that the connection changes sleep, pain, inflammation or blood viscosity. That part rests on a small literature written mostly by the practice's own researchers: a narrative review, studies with 10 to 30 participants, and mostly surrogate endpoints (blood and urine values rather than how anyone felt). One small randomised trial exists; its design has been criticised in detail. A decade of credentialed criticism has not been answered with a large independent trial.",
    esWhat: "La afirmación: el contacto directo de la piel con la superficie terrestre permite absorber electrones libres, reduciendo la inflamación y mejorando el sueño. La mitad de eso no está en disputa: el cuerpo es conductor, la Tierra es un depósito de carga, y la conexión se puede medir con un multímetro. Lo que está en disputa es todo lo que se construye encima — que esa conexión cambie el sueño, el dolor, la inflamación o la viscosidad de la sangre. Esa parte se apoya en una literatura pequeña escrita en su mayoría por los propios investigadores de la práctica: una revisión narrativa, estudios de 10 a 30 participantes, y en su mayoría marcadores indirectos. Existe un ensayo aleatorizado pequeño; su diseño ha sido criticado en detalle. Una década de crítica con credenciales no ha sido respondida con un ensayo independiente y grande.",
    practice: [
      "Barefoot time — 30–40 minutes of barefoot contact with soil, grass, sand, or stone. That is the dose the practice's own 2012 review recommends; note that it is a recommendation, not a finding.",
      "Warm ground — the practice is more comfortable and more plausible in warm weather; do not turn it into a hardship.",
      "Barefoot elsewhere — walking barefoot on varied ground is independently good for the feet and balance (see the Barefoot & the Foot Core entry). That half of the practice does not depend on the electron claim at all.",
      "Sleeping grounded — conductive sheets and mats exist. They are the least-evidenced and most commercialised part of the practice. Test the connection with a meter before you trust one; see the test below.",
      "The caution the practice's own review gives — the 2012 review advises talking to a clinician first if you take blood thinners or thyroid medication, citing anecdotal reports of changed INR. That is a caution from the proponents, not an established interaction, but it costs nothing to know.",
      "Keep it honest — treat it as a pleasant, plausible, low-cost practice, not a treatment. It is not a substitute for anything."
    ],
    reps: "30–40 minutes barefoot daily, weather permitting — or a grounded mat overnight if you want to test the indoor version. The barefoot walking is worth doing regardless of the earthing claim.",
    evidence: "Weak / contested — and now with the shape of the weakness named. The mechanism claim (your body is conductive, the Earth is a charge reservoir) is true and measurable with a multimeter. The outcome claims — better sleep, less pain, less inflammation, thinner blood — rest on a small literature written largely by the practice's own researchers: one narrative review, a handful of studies with 10 to 30 participants, mostly surrogate endpoints, and one small randomised trial whose stepped-wedge design has been criticised in detail. There is no large independent trial, no replication at increasing rigour, and the one credentialed critique of the field concludes the evidence has not improved in a decade. The practice is cheap, pleasant and very likely harmless; the claims are not established.",
    evClass: "weak",
    research: [
      {
        source: "Chevalier, Sinatra, Oschman, Sokal & Sokal, 'Earthing: Health Implications of Reconnecting the Human Body to the Earth's Surface Electrons', Journal of Environmental and Public Health 2012:291541, doi:10.1155/2012/291541",
        claim: "The paper that anchors the claims: it reports reduced pain, better sleep, a shift from sympathetic to parasympathetic tone, and a 'blood-thinning' effect, and calls the Earth a 'global treatment table'. It is a narrative review of the same group's small studies, not a systematic review, and its author affiliations include a grounding-products company (Earth FX Inc.) and a research consultancy (Nature's Own Research Association). It also carries a caution of its own: it advises clinician supervision for people on blood thinners or thyroid medication, citing anecdotal reports of INR variability.",
        medium: "narrative review of small studies, written by the practice's own researchers",
        confidence: "Weak — the review is the claim, not a test of it",
        year: "2012"
      },
      {
        source: "Chevalier, Sinatra, Oschman & Delany, 'Earthing (Grounding) the Human Body Reduces Blood Viscosity', Journal of Alternative and Complementary Medicine 19(2):102–110, doi:10.1089/acm.2011.0820",
        claim: "The most concrete laboratory result in the literature: 10 healthy adults, grounded for two hours through patches wired to a rod in the earth. The surface charge (zeta potential) of their red blood cells rose by a factor of 2.70 on average and cell clumping fell. Read it carefully — this is a surrogate marker, not a health outcome; nobody was followed to see whether anything happened to them. The analysis also used a one-tailed test chosen in advance for the expected direction, which makes a positive result easier to obtain.",
        medium: "small laboratory study (n = 10), surrogate endpoint, one-tailed test",
        confidence: "Weak as a health claim · real as a measured effect on a lab marker",
        year: "2013"
      },
      {
        source: "Sokal & Sokal, 'Earthing the Human Body Influences Physiologic Processes', Journal of Alternative and Complementary Medicine 17(4):301–308, doi:10.1089/acm.2010.0687",
        claim: "Five separate experiments comparing earthed and unearthed people, with blood and urine drawn. Night-time earthing lowered serum iron, ionized calcium and inorganic phosphorus and reduced renal calcium and phosphorus excretion; it also decreased free T3 and increased free T4 and TSH, and continuous earthing lowered blood glucose in people with diabetes. Sample sizes were 84, 28, 12, 12 and 32 across the five experiments, at a single centre. Every outcome is a laboratory value, not a symptom, and none has been independently replicated.",
        medium: "five small experiments, single centre, surrogate endpoints",
        confidence: "Weak — small, unreplicated, and surrogate",
        year: "2011"
      },
      {
        source: "Chevalier, Patel, Weiss, Chopra & Mills, 'The Effects of Grounding (Earthing) on Bodyworkers' Pain and Overall Quality of Life: A Randomized Controlled Trial', Explore 15(3):181–190, doi:10.1016/j.explore.2018.10.001",
        claim: "The one trial in the literature that looks like a clinical trial: 16 massage therapists, six weeks, stepped-wedge, described as double-blind. Grounded periods brought significant gains in physical function and energy and reductions in pain, fatigue, depressed mood and tiredness. It is also the study the critique lands hardest on: every participant followed the same on/off pattern, so 'double-blind' is doing less work than it sounds; many of the measured outcomes did not reach significance; and with 16 people and roughly a dozen outcomes, some positives are expected by chance.",
        medium: "small randomised trial (n = 16), stepped-wedge design",
        confidence: "Weak-to-moderate — a real trial design, too small with too many outcomes to settle anything",
        year: "2019"
      },
      {
        source: "Novella, S., 'Earthing Update', Science-Based Medicine (2023)",
        claim: "A neurologist's review of the decade of earthing trials, and the strongest single document in this list. His findings: studies are small, focus on subjective outcomes, are poorly controlled, and never replicate at increasing rigour; the results within the bodyworker trial are 'all over the place' with many outcomes not significant and no adjustment for testing many outcomes at once; and a stepped-wedge design in which every subject receives the same pattern is not really double-blind. His generalisation is the one to carry: with dubious treatments you tend to see a persistent failure to replicate and an inverse relationship between study rigour and positive results.",
        medium: "expert critique by a credentialed physician (Science-Based Medicine)",
        confidence: "This is the critique, not a result — and it is the strongest document in the list",
        year: "2023"
      },
      {
        source: "Jamieson, I. A., 'Grounding (earthing) as related to electromagnetic hygiene: An integrative review', Biomedical Journal 46(1):30–40, doi:10.1016/j.bj.2022.11.005",
        claim: "A review written from inside the field that names the confounders the trials do not control: soil moisture, the quality of a building's mains ground connection, and how well a given person is actually connected at all. If those variables matter — and the review argues they do — then 'grounded' and 'sham' are fuzzier categories in indoor studies than the trial reports suggest. Useful precisely because it is not a hostile source: it is the field admitting its own measurement problem.",
        medium: "integrative review (pro-grounding)",
        confidence: "Weak on outcomes · useful on why the trials are hard to interpret",
        year: "2023"
      },
      {
        source: "Lu, D., 'Grounding proponents say it helps us realign with the Earth's electric charge — but the claims don't land', The Guardian (2025)",
        claim: "News reporting that puts a number on the mechanism claim: a study found that a sleeping person connected to the Earth through grounding bedsheets carries a current of up to 10 nanoamps — more than a billion times smaller than the current a household appliance draws. The physicists quoted also note that excess charge tends to stay on the body's surface rather than penetrating it. The scale is the point: a real connection can still be an electrically tiny one.",
        medium: "news reporting with expert commentary",
        confidence: "The critique, with a concrete number attached",
        year: "2025"
      }
    ],
    verify: "Two tests, because there are two separate claims. FIRST — does the connection even exist? A multimeter answers this. Unplug the mat or sheet and use the meter on its own battery (never probe a live socket): check continuity from the mat's surface to its ground pin, then stand barefoot on moist ground and check resistance between your skin and a metal stake driven into that ground. A real connection reads as low resistance or a near-zero voltage difference; an open circuit means the device is decoration, and no amount of sleeping on it will do anything. SECOND — does it change anything? Run a blinded within-person crossover: two weeks sleeping grounded, two weeks not, with a family member connecting or disconnecting the mat without telling you which week is which. Record one number each morning — how long it took to fall asleep, or how stiff you felt on a 1–10 scale — and compare the two weeks only after the code is broken. Be honest about the limit: with one person you cannot detect a small effect, and a difference you can still see while blinded is more likely to be real than one you can only see when you know. What cannot be tested at home: the blood-viscosity and inflammation claims need blood draws, and the claim that grounding prevents disease has never been tested in a trial at all.",
    village: "A good teaching entry: it shows the family how the Village labels evidence, including for something it is happy to include. It is also the best entry in the library for teaching the difference between a mechanism you can measure and an outcome you cannot — the multimeter proves the wire, not the benefit. The Skeptic's Star belongs here: a family that tries it and reports 'no measurable change' has done real work.",
    quest: ["Barefoot & Honest", "Run the two-part test. First prove the connection with a multimeter — if the meter shows no conductive path, the mat is decoration. Then run a blinded two-week crossover on how long it takes to fall asleep and how stiff you feel in the morning. Report what changed and what did not; a null result earns the Skeptic's Star.", ["PE", "Health", "Science"], "🌍"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> grounding-earthing-deepening", "authored_at": "2026-10-07"}
  },

  {
    id: "foot-core-barefoot",
    icon: "🦶",
    name: "Barefoot & the Foot Core",
    esName: "Descalzo y el Núcleo del Pie",
    tagline: "The feet are the one body part a shoe can switch off — and the part the ground trains back.",
    lineage: "The barefoot idea is old; the modern research line runs from Robbins' footwear-and-balance experiments in the 1990s, through the barefoot-running literature that followed Lieberman's 2010 foot-strike paper, to McKeon and colleagues' 2015 'foot core' concept in the British Journal of Sports Medicine — which reframed the small muscles inside the foot as a trainable core, with the short-foot exercise as its basic drill. The short-foot exercise itself is older than the concept; it comes from foot and ankle rehabilitation.",
    what: "Two different things get called 'going barefoot'. The first is the contested earthing claim (see the Grounding / Earthing entry) — that skin contact with the Earth moves electrons and changes your health. The second is not contested at all: the small muscles inside the foot, the 'foot core', work harder without a shoe, and the sole is a dense field of pressure sensors feeding balance and movement. This entry is the second one — the half of barefoot practice that does not depend on the electron hypothesis.",
    esWhat: "Dos cosas distintas se llaman 'andar descalzo'. La primera es la afirmación disputada del earthing (ver la entrada de Conexión a Tierra): que el contacto de la piel con la tierra mueve electrones y cambia la salud. La segunda no está en disputa: los pequeños músculos dentro del pie, el 'núcleo del pie', trabajan más sin zapato, y la planta es un campo denso de sensores de presión que alimentan el equilibrio. Esta entrada es la segunda.",
    practice: [
      "1. Short foot — sit with the foot flat and the toes relaxed. Without curling the toes, draw the ball of the big toe toward the heel so the arch lifts a few millimetres. Hold 5–10 seconds, 10 reps each foot. This is the foot-core drill.",
      "2. Toe spread — press the toes down and try to lift and separate them one at a time, especially the big toe. Slow, and it will feel nearly impossible at first.",
      "3. Barefoot on varied ground — 10–20 minutes on grass, sand, gravel, stone, or a forest floor. Different surfaces load the foot differently; the variety is the point.",
      "4. Barefoot heel raises and single-leg stands — load the foot core under body weight: 10 slow heel raises, then 30 seconds standing on one bare foot.",
      "5. Transition slowly — do not go from cushioned shoes straight to barefoot running. Add barefoot time in minutes, not miles, and stop if the top of the foot aches (the classic overuse injury of the minimalist-shoe boom)."
    ],
    reps: "10 minutes of barefoot time daily, plus the short-foot drill 10 reps × 2 sets per foot, once or twice a day. The drill is the training; the barefoot walking is the practice.",
    evidence: "Moderate — the foot itself is well studied; the injury and performance claims are not",
    evClass: "moderate",
    research: [
      {
        source: "McKeon, Hertel, Bramble & Davis, 'The foot core system: a new paradigm for understanding intrinsic foot muscle function', British Journal of Sports Medicine 49(5):290 (2015)",
        claim: "Proposes that the small muscles inside the foot act as a core for the arch — local stabilisers and direct sensors of foot deformation — and that they are largely ignored in favour of externally supporting the foot. This is a concept and review paper, not a trial: it names the mechanism and the drill (the short-foot exercise), and it is the framing this entry rests on.",
        medium: "concept / narrative review",
        confidence: "Strong as a framework · no outcome measured",
        year: "2015"
      },
      {
        source: "Miller, Whitcome, Lieberman, Norton & Dyer, 'The effect of minimal shoes on arch structure and intrinsic foot muscle strength', Journal of Sport and Health Science 3(2):74–85 (2014)",
        claim: "33 healthy runners randomized to minimal (4 mm offset or less) or standard running shoes for 12 weeks, with MRI before and after. Only the minimal-shoe group grew the abductor digiti minimi (18% cross-sectional area, 22% volume) and stiffened the longitudinal arch by about 60%. Real randomized evidence that the foot responds to what it is worn in — but n = 33, it measured muscle size and arch stiffness, and it says nothing about injury or performance.",
        medium: "randomized trial, small",
        confidence: "Moderate",
        year: "2014"
      },
      {
        source: "Hollander et al., 'Growing-up (habitually) barefoot influences the development of foot and arch morphology in children and adolescents', Scientific Reports 7:8079 (2017)",
        claim: "810 habitually barefoot children and adolescents compared with age-, sex- and ethnicity-matched shod peers: barefoot upbringing was associated with higher arches, lower hallux (big-toe) angles, and more pliable feet. Large and well controlled, but cross-sectional — it compares populations that differ in many ways, so it shows an association, not that taking your child's shoes off changes their feet.",
        medium: "cross-sectional, large",
        confidence: "Moderate (association)",
        year: "2017"
      },
      {
        source: "Hollander et al., 'Motor Skills of Children and Adolescents Are Influenced by Growing up Barefoot or Shod', Frontiers in Pediatrics 6:115 (2018)",
        claim: "Habitually barefoot and shod children in South Africa and Germany tested on balance, standing long jump, and 20 m sprint. Barefoot children were better at balance and jumping in the youngest group (6–10 years); shod children were faster at sprinting. The balance advantage is the interesting one, and the honest caveat is the same — observational, and the groups differ in more than footwear.",
        medium: "cross-sectional, binational",
        confidence: "Moderate (association)",
        year: "2018"
      },
      {
        source: "Robbins, Waked, Gouw & McClaran, 'Athletic footwear affects balance in men', British Journal of Sports Medicine 28(2):117–122 (1994)",
        claim: "17 adult men walked a 9 m balance beam barefoot and in six experimental shoes differing only in midsole thickness and hardness. Thick, soft midsoles produced more than twice the balance failures of thin, hard ones (12.34 vs 3.89 per 100 m). This is the reverse framing of the barefoot claim — evidence that footwear can degrade balance — from a small mechanical study.",
        medium: "small experimental study",
        confidence: "Moderate",
        year: "1994"
      },
      {
        source: "The injury reports that followed the 2010 minimalist-shoe boom (clinical commentary and case series, not a trial)",
        claim: "The transition caution — that going barefoot or minimal too fast produces metatarsal stress injuries — comes from clinical observation rather than a controlled study. It is included because the honest label for a claim you cannot cite precisely is 'practitioner documentation', and because the caution is the practical half of this entry.",
        medium: "clinical commentary / case reports",
        confidence: "Weak (as evidence) · sensible (as advice)",
        year: "2010s"
      }
    ],
    verify: "The foot is measurable, so measure it — but measure the right thing. Day 1: time a single-leg barefoot stand, eyes open, best of three, each foot; then time the short-foot hold (how many seconds you can keep the arch lifted without curling the toes). Do 10 minutes barefoot daily plus the short-foot drill for 30 days, then repeat both numbers. The balance time is the one most likely to move; an adult's arch index probably will not change in a month, and expecting it to is the mistake this test is designed to catch. Write down both numbers either way — a number that does not move is a real result, and it is the honest answer to 'does barefoot training do anything for me'.",
    village: "The grounded, testable half of the Grounding domain — it sits beside the earthing entry as the pair that teaches the section's whole method: one practice with a contested claim and one with a solid one, labeled differently, both included. It also gives the family a number (single-leg barefoot seconds) that pairs with the Vestibular entry's balance test, and it is the natural training for the barefoot life the homestead already asks for.",
    quest: ["Barefoot 30 — The Foot Core Test", "Spend 10 minutes a day barefoot on natural ground and do the short-foot drill (10 reps × 2, each foot) for 30 days. On day 1 and day 30, time a single-leg barefoot stand (eyes open, best of three, each foot) and time how long you can hold the short-foot arch lift without curling your toes. Write down all four numbers.", ["PE", "Health", "Science"], "🦶"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> foot-core-barefoot", "authored_at": "2026-09-27"}
  },

  {
    id: "feldenkrais-awareness-through-movement",
    icon: "🌀",
    name: "The Feldenkrais Method — Awareness Through Movement",
    esName: "El Método Feldenkrais — Conciencia a Través del Movimiento",
    tagline: "A lesson, not an exercise: move slowly, notice the difference, and let the nervous system do the changing.",
    lineage: "Moshe Feldenkrais (1904–1984), an Israeli physicist and engineer who was among the first Europeans to earn a black belt in judo and founded a judo club in France. He developed the method after a knee injury, and published *Awareness Through Movement: Health Exercises for Personal Growth* in 1972. The method has two delivery modes: Awareness Through Movement (ATM) — group lessons, verbally guided, no hands-on — and Functional Integration (FI) — one-to-one, hands-on. It is a Western somatic method, a sibling of the Alexander Technique, and it is the one in this domain that a family can do entirely on its own floor. The origin story — that he rebuilt his own knee rather than have it operated on — is his own account, not an independently documented record; label it as claimed.",
    what: "Feldenkrais treats movement as something to be learned rather than exercised. A lesson gives you a small, slow, unusual movement and asks you to notice what happens — where the effort goes, which parts move that you did not expect, whether the movement gets easier when you make it smaller. The theory behind it is that a limitation is usually a habit the nervous system has settled into, and that a habit can be re-learned by giving the system new information rather than more force. That is why the method never stretches, never pushes, and never counts repetitions toward fatigue: the whole lesson is a search, and the change is supposed to come from the search.",
    esWhat: "El método Feldenkrais trata el movimiento como algo que se aprende, no como algo que se ejercita. Una lección ofrece un movimiento pequeño, lento e inusual, y pide notar qué ocurre: dónde va el esfuerzo, qué partes se mueven sin esperarlo, si el movimiento se vuelve más fácil cuando se hace más pequeño. La idea es que un límite suele ser un hábito del sistema nervioso, y que un hábito se puede reaprender dando información nueva en lugar de más fuerza. Por eso el método nunca estira ni empuja.",
    practice: [
      "1. Lie on your back on a firm floor, knees bent, feet standing, arms resting. Spend one minute just feeling which parts of your back touch the floor. This is not a warm-up — the noticing is the exercise.",
      "2. The pelvic clock. Imagine a clock face on your belly, 12 at the navel, 6 at the tailbone. Very slowly roll the pelvis toward 12, then toward 6, then toward 3, then toward 9. Small movements, only as far as is easy. Rest.",
      "3. Add the legs. As the pelvis rolls toward 12, let the knees drift apart; as it rolls toward 6, let them come together. Ten slow repetitions. Then rest completely for a few breaths.",
      "4. The leg-lengthening lesson. Extend one leg along the floor. Slowly slide the heel away and bring it back — no stretch, no push, no pointed toes. Notice whether the leg can lengthen without the belly tightening or the breath stopping. Ten times, then lie still and compare the two legs.",
      "5. Rest between every variation, for as long as the movement took. In this method the rest is where the change gets registered — skipping it is skipping the lesson.",
      "6. The rule for the whole lesson: never move into pain, never use effort, and keep every movement smaller than you think it should be. If you lose track of what you are doing, stop and rest — that is not failure, that is the lesson working."
    ],
    reps: "15–30 minutes on the floor, two to four times a week. One lesson is enough to feel something the same day; the balance trials that found effects ran 5–10 weeks. A recorded ATM lesson or a teacher is useful once you have tried the basic sequence, because the guidance is the method.",
    evidence: "Moderate — real randomized trials for balance and back pain, but the trials are small and the reviewers' own risk-of-bias assessment is high",
    evClass: "moderate",
    research: [
      {
        source: "Hillier & Worley, 'The Effectiveness of the Feldenkrais Method: A Systematic Review of the Evidence', Evidence-Based Complementary and Alternative Medicine 2015:752160 (2015)",
        claim: "Twenty randomized trials, 14 of them new since an earlier review. Meta-analysis of the seven comparable studies found the method favoured for balance in ageing populations — Timed Up and Go mean difference −1.14 seconds (95% CI −1.78 to −0.49), Functional Reach +6.08 cm (95% CI 3.41 to 8.74). The authors' own caveat is the reason this entry is labelled Moderate and not Strong: risk of bias was high across the included studies, and they conclude that the effects look generic — supporting a learning paradigm rather than a disease-specific mechanism.",
        medium: "systematic review + meta-analysis of RCTs",
        confidence: "Moderate — the authors rate the risk of bias high",
        year: "2015"
      },
      {
        source: "Berland, Marques-Sule, Marín-Mateo, Moreno-Segura, López-Ridaura & Sentandreu-Mañó, 'Effects of the Feldenkrais Method as a Physiotherapy Tool: A Systematic Review and Meta-Analysis of Randomized Controlled Trials', International Journal of Environmental Research and Public Health 19(21):13734 (2022)",
        claim: "Sixteen trials. In older adults, three of four trials improved gait, balance, mobility and quality of life, and the pooled Timed Up and Go effect was large (Cohen's d = −1.14, 95% CI −1.78 to −0.49). In chronic low back pain, three trials improved pain, disability, quality of life and interoceptive awareness. The review's conclusion is deliberately modest — the method performs comparably to other physiotherapy, not better than it.",
        medium: "systematic review + meta-analysis of RCTs",
        confidence: "Moderate",
        year: "2022"
      },
      {
        source: "Ullmann, Williams, Hussey, Durstine & McClenaghan, 'Effects of Feldenkrais Exercises on Balance, Mobility, Balance Confidence, and Gait Performance in Community-Dwelling Adults Age 65 and Older', Journal of Alternative and Complementary Medicine 16(1):97–105 (2010)",
        claim: "47 adults (mean age 75.6) randomized to five weeks of Feldenkrais classes three times a week or a waitlist control. Balance (tandem stance) improved, p = 0.030; mobility (Timed Up and Go) improved, p = 0.042; fear of falling fell, p = 0.042. Balance confidence (p = 0.054) and dual-task mobility (p = 0.067) moved in the right direction without reaching significance. Small, short, and honest about its own null results.",
        medium: "randomized controlled trial, small",
        confidence: "Moderate",
        year: "2010"
      },
      {
        source: "Vrantsidis, Hill, Moore, Webb, Hunt & Dowson, 'Getting Grounded Gracefully: Effectiveness and Acceptability of Feldenkrais in Improving Balance', Journal of Aging and Physical Activity 17(1):57–76 (2009)",
        claim: "55 older adults (mean age 75) randomized to eight weeks of twice-weekly group classes or usual activity. The intervention group improved on the Modified Falls Efficacy Scale (p = .003) and gait speed (p = .028); Timed Up and Go showed a strong trend (p = .056). Attendance was 88%, which is the part that matters for a family: people actually kept doing it.",
        medium: "randomized controlled trial, small",
        confidence: "Moderate",
        year: "2009"
      },
      {
        source: "Ahmadi, Adib, Selk-Ghaffari, Shafizad, Moradi, Madani, Partovi & Mahmoodi, 'Comparison of the effects of the Feldenkrais method versus core stability exercise in the management of chronic low back pain: a randomised control trial', Clinical Rehabilitation 34(12):1449–1457 (2020)",
        claim: "60 adults with chronic low back pain randomized to Feldenkrais or core-stability exercise, five weeks. Feldenkrais did better on quality of life (p = 0.006), interoceptive awareness measured by the MAIA questionnaire (p < 0.001, 2.74 to 4.06) and disability (p = 0.021). But pain fell substantially in BOTH groups with no between-group difference (p = 0.16) — the honest reading is that the distinctive effect was on awareness and function, not on pain. That is exactly what the method claims about itself, which is worth noticing.",
        medium: "randomized controlled trial, small",
        confidence: "Moderate",
        year: "2020"
      },
      {
        source: "Stephens, Davidson, DeRosa, Kriz & Saltzman, 'Lengthening the Hamstring Muscles Without Stretching Using Awareness Through Movement', Physical Therapy 86(12):1641–1650 (2006)",
        claim: "The study behind this entry's headline: hamstring length increased after Awareness Through Movement lessons, with no stretching protocol at all. Included with a deliberately weak label — it is a single small trial, and the proposed mechanism (the nervous system tolerating more length rather than the tissue changing) was not measured. It is here because it is the clearest single statement of what the method claims, and because a family can test that claim at home with a tape measure.",
        medium: "single small clinical trial",
        confidence: "Weak — one small trial, mechanism not established",
        year: "2006"
      },
      {
        source: "Institute for Quality and Efficiency in Health Care (IQWiG), 'Movement disorders: Is the Feldenkrais method effective?', health technology assessment report, Cologne (2023)",
        claim: "The honesty ceiling for this entry. Six randomized trials, all rated high risk of bias, across five indications; a hint of greater benefit was found for only two. There was no hint of long-term benefit, and no data on harms at all. Notably, the trials studied the group Awareness Through Movement format, not one-to-one Functional Integration. The report's own framing is the useful part: absence of evidence is not evidence of absence, but it is also not a licence to assume benefit.",
        medium: "health technology assessment (national agency review)",
        confidence: "Moderate as a review · the evidence it reviews is weak",
        year: "2023"
      },
      {
        source: "The Feldenkrais teacher-training lineage — Moshe Feldenkrais conducted three professional trainings in his lifetime: the first in Tel Aviv (1969–1971, thirteen students, meeting about an hour a day for ten months a year over three years), the second in San Francisco at Lone Mountain College over four summers (1975–1978, sixty-five teachers, under the Humanistic Psychology Institute), and the third at Hampshire College, Amherst, Massachusetts (1980–1983, 235 students), which he left after two of the four summers when illness ended his public teaching. Across the three he trained roughly 300 practitioners; the field he seeded now numbers more than 10,000 practitioners worldwide. Training today runs through accredited programmes — in North America under the North American Training Accreditation Board (NATAB), with a Guild Certified Feldenkrais Practitioner credential, and a first milestone of 400 training hours for temporary authorisation to teach Awareness Through Movement lessons. Sources: Feldenkrais Educational Foundation of North America, 'Who Was Moshe Feldenkrais?' (fefna.org); feldenkrais.com, 'About Moshe Feldenkrais'; Feldenkrais Guild of North America, 'Professional Training' (feldenkraisguild.com); Moshé Feldenkrais (Wikipedia)",
        claim: "Teacher-training lineage: the method is transmitted by a founder who personally trained three cohorts and then by an accrediting body that fixed the training into hours and a credential — the same shape as the Alexander Technique, its sibling method, and the reason 'Feldenkrais practitioner' names a qualification rather than a personal interest. The honest edge is in the lineage's own history: Feldenkrais's trainees all learned the same lessons but, by his own account, taught them differently, each in their own way — so the transmission is of a method of inquiry, not of a fixed routine, and the practitioner-to-practitioner variation that this produces is exactly why the trials above had to rate their own risk of bias high. This documents how the practice is carried, not that it works.",
        medium: "teacher-training lineage",
        confidence: "High (as lineage and training), none claimed (as outcome evidence)",
        year: "1969–today"
      }
    ],
    verify: "The claim is testable with a tape measure and a stopwatch. Day 1, three numbers: (1) sit on the floor with both legs straight and mark where your fingertips reach; (2) time a single-leg stand, eyes open, best of three; (3) time a Timed Up and Go — stand from a chair, walk 3 metres, turn, walk back, sit. Then do the 15-minute pelvic-clock and leg-lengthening lesson daily for two weeks, and measure all three again. What to expect honestly: the reach is the number most likely to move, and if it moves that is the interesting result, because nothing was ever stretched. The balance numbers are the ones with trial support — but those trials ran 5 to 10 weeks in adults over 65, so two weeks in a healthy child may well show nothing. There is also a fourth, softer measurement worth taking: with your eyes closed, can you tell whether your left foot is turned in or out? That is the kind of awareness the back-pain trial measured with a questionnaire, and it is the change the method is actually aiming at. Write down every number either way; a number that does not move is a real result.",
    village: "The second half of the Somatics domain, and the deliberate pair with the Alexander Technique: Alexander is the one with the famous trial, Feldenkrais is the one with the most trials — and reading the two labels side by side is the section's lesson in how evidence actually accumulates. It is also the most self-contained practice in the library: no equipment, no teacher required for the basic sequence, and it trains exactly the skill the Village asks for everywhere else — the ability to notice a difference and write it down.",
    quest: ["The Reach That Isn't a Stretch", "Sit on the floor with your legs straight and mark how far your fingertips reach. Then do 15 minutes of the Feldenkrais pelvic-clock and leg-lengthening lesson every day for two weeks — slow, small, and with no stretching at all. Measure the reach again, plus your single-leg stand time and your Timed Up and Go. Write down all the numbers and one sentence: did anything change that you never stretched?", ["PE", "Health", "Science"], "🌀"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> feldenkrais-awareness-through-movement", "authored_at": "2026-09-28"}
  },
  {
    id: "fundamental-movement-skills",
    icon: "🪜",
    name: "Fundamental Movement Skills — The Skill Ladder",
    esName: "Habilidades Motrices Básicas — La Escalera de Habilidades",
    tagline: "Children do not learn to skip by playing — they learn by being taught, and play is how you teach them.",
    lineage: "Not a lineage with a founder — a research framework. 'Fundamental movement skills' (FMS) is the term physical-education and motor-development researchers use for the basic patterns every later movement is built from: locomotor skills (running, hopping, skipping, jumping, galloping, sliding), object-control skills (throwing, catching, kicking, striking, dribbling) and stability skills (balancing, twisting, landing). The idea that these patterns are teachable rather than automatic became the field's central claim through the motor-development research tradition, and its pivotal statement is the developmental model of Stodden and colleagues (2008), which proposed that motor competence and physical activity feed each other in a spiral over childhood. Nothing here is registered, owned, or trademarked: FMS is a category, the way 'vitamins' is a category, and the honest framing is that this entry teaches a research consensus, not a founder's method.",
    what: "Two claims sit inside this one idea, and they are not equally strong. The first is that fundamental movement skills do not simply appear as a child grows — they need instruction, demonstration, feedback and repeated practice, and a child who is never taught to skip may reach adulthood unable to skip. That claim is well supported: structured skill programs reliably improve the skills. The second claim is bigger — that children with better movement skills grow into more active adults, because skill makes activity feel good and incompetence makes it feel bad. That claim is a strong association across many studies, but it has not been proven as a cause. The practice is the same either way: pick one skill, teach it as a game, and repeat it often enough that the nervous system keeps it.",
    esWhat: "Dos afirmaciones viven dentro de esta idea, y no son igual de fuertes. La primera es que las habilidades motrices básicas no aparecen solas con la edad: necesitan instrucción, demostración, retroalimentación y práctica repetida, y un niño al que nunca se le enseña a saltar la cuerda puede llegar a la edad adulta sin saber hacerlo. Esa afirmación está bien respaldada. La segunda es más grande: que los niños con mejores habilidades motrices se vuelven adultos más activos, porque la destreza hace que moverse se sienta bien. Esa afirmación es una asociación sólida, pero no una causa demostrada. La práctica es la misma en ambos casos: elegir una habilidad, enseñarla como un juego y repetirla lo suficiente para que el sistema nervioso la conserve.",
    practice: [
      "1. Pick ONE skill for the whole block — not a sport, a single pattern. Choose one from each of the three families so the ladder is balanced: a locomotor skill (skipping, hopping, galloping), an object-control skill (overhand throw, catch, kick) and a stability skill (single-leg stand, balance walk).",
      "2. Turn the skill into a game, not a drill. Skipping becomes a follow-the-leader line; the overhand throw becomes a target on a wall with points; the single-leg stand becomes a statue game that ends when someone wobbles. The game is the delivery system — the skill is what is being practised.",
      "3. Demonstrate, then let them try, then give ONE cue. The single most common mistake is correcting everything at once. Say one thing ('step with the other foot', 'look at the target'), let them play, and leave the rest alone for another day.",
      "4. Keep the dose. Ten to twenty minutes, at least three times a week, for ten to twenty weeks — that is the dose the school-based meta-analysis found actually worked. Twice a week and short blocks did not reach significance in that analysis; three times a week over ten to twenty weeks did.",
      "5. Make the difficulty match the child, not the calendar. If they cannot yet hop on one foot, the skipping game is too early — go back one rung. The ladder is climbed in order, and a child who is struggling is being asked for the wrong rung, not failing.",
      "6. Keep a light score so progress is visible. Not a grade — a number: how many target hits out of ten, how many skips in a row, how many seconds on one leg. Write it on the wall. The number is the game's reward and the family's data.",
      "7. Rotate the skill when the block ends, then come back to it months later. Skills that are practised and dropped and re-practised are the ones that stick; a single intense block followed by nothing is the pattern the research does not support."
    ],
    reps: "10–20 minutes, at least three times a week, one skill at a time, for a block of 10–20 weeks. The frequency and the block length are not arbitrary: in the 2025 school-based meta-analysis, three-or-more sessions a week was the only frequency subgroup that reached significance (SMD 1.52), and 10–20 weeks was the only period subgroup that did (SMD 0.54). Once-a-week and six-to-ten-week blocks did not. Short daily practice beats one long weekend session.",
    evidence: "Moderate — structured skill practice reliably improves the skills themselves (several meta-analyses agree, though the underlying trials are mostly small and rarely blinded); the larger claim that better skills produce a more active adult is a well-supported association, not a proven cause",
    evClass: "moderate",
    research: [
      {
        source: "Stodden, Goodway, Langendorfer, Roberton, Rudisill, Garcia & Garcia, 'A Developmental Perspective on the Role of Motor Skill Competence in Physical Activity: An Emergent Relationship', Quest 60(2):290–306 (2008)",
        claim: "The model this entry is built on, and the reason the section treats skills as a lever rather than a talent. Stodden and colleagues proposed that motor skill competence and physical activity are linked in a positive spiral across childhood: better skills make activity more rewarding, which builds fitness and confidence, which builds more skill — and the reverse spiral, where poor skill makes activity unpleasant and the child withdraws, is the one worth preventing. It is a conceptual paper, not a trial: it proposed the relationship and the field has spent fifteen years testing it. Label it as the framework, not the proof.",
        medium: "conceptual/theoretical review (peer-reviewed)",
        confidence: "Moderate as a framework — its central prediction is supported by later association studies, not by trials",
        year: "2008"
      },
      {
        source: "Morgan, Barnett, Cliff, Okely, Scott, Cohen & Lubans, 'Fundamental Movement Skill Interventions in Youth: A Systematic Review and Meta-analysis', Pediatrics 132(5):e1361–e1383 (2013)",
        claim: "The foundational meta-analysis: 22 articles describing 19 interventions, almost all in primary schools. Every included study reported a significant effect on at least one skill, and the pooled effects were large — overall gross motor proficiency SMD 1.42 (95% CI 0.68–2.16), locomotor skill SMD 1.42 (0.56–2.27), object-control skill SMD 0.63 (0.28–0.98). The authors' own caveat is why this entry is not labelled Strong: many of the included studies scored poorly on risk of bias, and the programmes were delivered by PE specialists or highly trained teachers — the effect may depend on who is teaching.",
        medium: "systematic review + meta-analysis of controlled trials",
        confidence: "Moderate — large effects, but the authors flag poor risk-of-bias scores across the included studies",
        year: "2013"
      },
      {
        source: "Yin, Zhang, Shen, Wang, Wang & Liu, 'Effectiveness of school-based interventions on fundamental movement skills in children: a systematic review and meta-analysis', BMC Public Health (2025)",
        claim: "The dose evidence behind this entry's reps field. Thirty-three studies from 14 countries (6,571 children aged 6–12, published 2014–2024); 30 of the 33 reported their intervention was effective. Pooling the nine studies that used the same assessment tool gave a moderate overall effect, SMD 0.69 (95% CI 0.21–1.16), with very high heterogeneity (I² = 94%). The useful part is the subgroups: sessions of 60 minutes or more reached significance (SMD 0.93) while shorter ones did not (0.50); three-or-more sessions a week reached significance (1.52, I² = 0%) while once a week (0.36) and twice a week (0.64) did not; and a 10–20 week block reached significance (0.54) while 6–10 weeks (0.44) and over 20 weeks (1.07, wide interval) did not. No significant publication bias (Egger p = 0.764). Study quality ranged from poor to good on the PEDro scale.",
        medium: "systematic review + meta-analysis of controlled trials",
        confidence: "Moderate — the effect is consistent but heterogeneity is very high and most included studies were not blinded",
        year: "2025"
      },
      {
        source: "Wick, Leeger-Aschmann, Monn, Radtke, Ott, Rebholz, Cruz, Gerber, Schmutz, Puder, Munsch, Kakebeeke, Jenni, Granacher & Kriemler, 'Interventions to Promote Fundamental Movement Skills in Childcare and Kindergarten: A Systematic Review and Meta-Analysis', Sports Medicine 47(10) (2017)",
        claim: "The preschool version, and the clearest statement of the honesty ceiling. Thirty trials (15 randomized, 15 controlled) with 6,126 children aged 3.3–5.5 years: structured programmes improved overall FMS (SMD 0.46), object-control skills (1.36) and locomotor skills (0.94). But the authors graded their own certainty as VERY LOW using GRADE, because the evidence is low quality and the effects were measured immediately after the programme with no long-term follow-up. The finding that matters for a family: programmes run by outside specialists produced larger effects than those run by the usual teachers — which is the honest caveat on a parent running this at home.",
        medium: "systematic review + meta-analysis of controlled trials",
        confidence: "Low as graded by the authors — the effects are real in direction but the certainty is very low",
        year: "2017"
      },
      {
        source: "Holfelder & Schott, 'Relationship of fundamental movement skills and physical activity in children and adolescents: A systematic review', Psychology of Sport and Exercise 15(4):382–391 (2014)",
        claim: "The honest ceiling on the second claim — the one that says skills make a more active adult. Twenty-three studies. The review found strong evidence from cross-sectional studies for a positive relationship between FMS and organised physical activity, but the overall relationships were small to moderate, and motor skill competency had only low predictive value for adult physical-activity level. Its conclusion is the sentence this entry must not bury: a cause-and-effect relationship between FMS and physical activity is suspected but has not been demonstrated. Improving skills is worth doing on its own evidence; it is not yet a proven route to a lifelong exerciser.",
        medium: "systematic review of observational studies",
        confidence: "Moderate — the association is consistent; the causal claim is explicitly not demonstrated",
        year: "2014"
      },
      {
        source: "Logan, Webster, Getchell, Pfeiffer & Robinson, 'Relationship Between Fundamental Motor Skill Competence and Physical Activity During Childhood and Adolescence: A Systematic Review', Kinesiology Review 4(4):416–426 (2015)",
        claim: "The size of the association, in numbers. Thirteen studies meeting strict criteria. Correlations between skill competence and physical activity were low to moderate in early childhood (r = .16 to .48; 3–23% of variance), low to high in middle-to-late childhood (r = .24 to .55; 6–30%), and low to moderate in adolescence (r = .14 to .35; 2–12%). One pattern worth knowing: object-control skills tracked activity more closely for boys and locomotor skills more closely for girls. Even the strongest of these correlations leaves most of the variation in activity unexplained — which is exactly why the label on this entry is Moderate and not Strong.",
        medium: "systematic review of observational studies",
        confidence: "Moderate — consistent direction, modest effect sizes",
        year: "2015"
      }
    ],
    verify: "This one is testable in an afternoon, and the test has two halves — because the entry makes two different claims. Half one, the skill itself: pick ONE skill (an overhand throw at a target, skipping, or a single-leg stand), test it on day 1 with a simple count — hits out of ten throws, skips in a row, or seconds on one leg, best of three — then play the skill game 10–20 minutes, three times a week, for six weeks, and re-test it the same way. Expect the skill number to improve: that is the part the meta-analyses support, and it is the result you should get. Half two, the bigger claim: also keep a tally, for the same six weeks, of how often the child chooses to move on their own — a mark on the fridge each time they go outside to play, or a step count if you have a pedometer. Expect that number to move much less, or not at all. That is not a failed experiment: the skills-to-activity link is a documented association, not a demonstrated cause, and a family that sees both numbers side by side has understood the difference better than most adults. Write down both numbers and one sentence on which one changed — and note that six weeks is shorter than the 10–20 week block the research used, so a null result on either number is a real result, not a verdict. The honest test is the one that can come out either way.",
    village: "The foundational entry of the Kids & Movement domain, and the one the rest of the section's child-facing content can hang from: everything else in the library is a practice an adult adopts, while this is the practice of teaching a child to move. It maps directly onto the game's structure — the Vitality guild's skill badges become a literal ladder of single skills, and the 'one skill at a time, tested before and after' design is the same before-and-after pattern the rest of the section uses, applied to a child's own progress. It also gives the family the section's most useful habit: writing down a number before and after, and being willing to see it not move.",
    quest: ["The Skill Ladder", "Pick one fundamental movement skill — an overhand throw, skipping, or a single-leg stand — and test it on day 1 with a simple count. Then play a game that uses that skill for 10–20 minutes, three times a week, for six weeks. Test the same skill again, and also keep a tally of how often you chose to move on your own. Write down both numbers and one sentence on which one changed.", ["PE", "Health", "Science"], "🪜"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> fundamental-movement-skills", "authored_at": "2026-09-29"}
  },
  {
    id: "yi-jin-jing",
    icon: "🧵",
    name: "Yi Jin Jing — The Tendon-Changing Classic",
    esName: "Yi Jin Jing — El Clásico del Cambio de Tendones",
    tagline: "The famous Shaolin exercise set whose own official book says the famous origin story is false.",
    lineage: "The Yi Jin Jing ('Classic of Tendon Transformation') is traditionally attributed to Bodhidharma (Damo), the semi-legendary Indian monk of the fifth or sixth century, who is said to have left it — with a companion text, the Xi Sui Jing or Marrow-Washing Classic — at the Shaolin Monastery, where the monks used it to rebuild the strength their long meditation had cost them. That story is the root of the whole 'Bodhidharma taught the Shaolin monks to fight' legend. It is also, by the modern scholarly consensus, not true. The surviving text does not predate the seventeenth century: the earliest known edition is dated by the Japanese scholar Matsuda Ryuchi to 1827, and the composition of the text is dated to 1624 and attributed to a Daoist priest writing under the pen name Zining Daoren (Purple Coagulation Man of the Way) of Mount Tiantai in Zhejiang. The manual carries two prefaces — one purporting to be by the Tang general Li Jing (571–649), one by Niu Gao, an officer under the Song general Yue Fei — and both are forgeries: Li Jing's preface dates a reign period to the wrong emperor and cites the 'Curly-Bearded Stranger', a character from a Tang fiction, as the source of the manual. The Chinese martial-arts historian Tang Hao dismantled the Bodhidharma legend in his 1920 book Study of Shaolin and Wudang, and Meir Shahar's academic history of the monastery (2008) documents the forged prefaces in detail. The fact worth carrying forward, and the reason this entry exists: the modern standardized form's own official publication — compiled by the Health Qigong Management Center of China's General Administration of Sport, researched at the Wuhan Institute of Physical Education, and published by People's Sports Publishing House in 2003 — states plainly that the archaeological evidence shows the text was created by the late-Ming Daoist Zining, that it is a Daoist daoyin (guiding-and-stretching) practice, and that it has nothing to do with Buddhism. The set is real, widely practised, and pleasant. The famous story attached to it is a seventeenth-century attribution that hardened into a twentieth-century legend. This entry keeps the two apart, which is the whole job.",
    what: "Twelve postures, performed slowly, standing, in a fixed order — each one taking the body to a full extension and holding there, with the breath natural and the attention on the stretch rather than the count. The set is built on one idea: move the joints and connective tissue through their whole range under a slow, sustained load, in a sequence that works from the hands and arms, down through the spine, into the legs, and back up. Three of the twelve are variations of a single opening posture (the three 'pestle' postures), and several involve the spine twisting or folding while the arms are extended — which is why the modern form's own teaching notes name spinal rotation and flexion as its distinguishing feature. It is a moderate-intensity practice: the movements look gentle and are not, if the extension is held for the full count. Nothing in it needs equipment, a partner, or more than a couple of metres of floor. The traditional claim attached to it — that it 'changes the tendons' and builds an unusually durable body — is the claim the evidence label below is about.",
    esWhat: "Doce posturas, realizadas lentamente, de pie, en un orden fijo: cada una lleva el cuerpo a una extensión completa y se sostiene ahí, con la respiración natural y la atención puesta en el estiramiento, no en la cuenta. El conjunto se basa en una sola idea: llevar las articulaciones y el tejido conectivo por todo su recorrido bajo una carga lenta y sostenida, en una secuencia que va de las manos y los brazos hacia la columna, baja a las piernas y vuelve a subir. Tres de las doce son variaciones de una misma postura de apertura (las tres posturas del 'mazo'), y varias implican que la columna gire o se flexione mientras los brazos están extendidos; por eso las notas didácticas de la forma moderna señalan la rotación y la flexión de la columna como su rasgo distintivo. Es una práctica de intensidad moderada: los movimientos parecen suaves y no lo son, si la extensión se sostiene durante toda la cuenta. No requiere equipo, compañero ni más de un par de metros de suelo. La afirmación tradicional que lleva pegada — que 'cambia los tendones' y construye un cuerpo inusualmente resistente — es justamente la afirmación de la que habla la etiqueta de evidencia.",
    practice: [
      "0. Before you start: stand with the feet shoulder-width apart, knees soft, spine upright, arms relaxed at the sides. Breathe naturally through the nose the whole way through — the traditional instruction is not to force the breath to match the movement. Every posture below is held for 3–6 slow breaths (roughly 15–30 seconds), and the effort is a stretch held under tension: not a bounce, and not a strain. If a posture hurts a joint, shorten the range. The set has no score.",
      "1. Wei Tuo Presenting the Pestle, first posture — bring the palms together in front of the chest, elbows out and level, fingertips about level with the throat. Press the palms gently against each other and hold. This is the set's opening and its resting shape.",
      "2. Wei Tuo Presenting the Pestle, second posture — from palms-together, open the arms out to the sides at shoulder height, palms facing down and fingers spread, and press the arms outward as if pushing two walls apart. Hold, then return to the centre.",
      "3. Wei Tuo Presenting the Pestle, third posture — turn the palms to face upward and lift the arms overhead, as if supporting something heavy above the head, and stretch the whole body upward from the feet. Hold.",
      "4. Plucking a Star and Exchanging a Star Cluster — raise one arm overhead with the palm up and the gaze following the hand, while the other hand rests on the small of the back. Hold, then swap sides. The set's first twist.",
      "5. Pulling Nine Cows by Their Tails — step into a long bow stance, one arm reaching forward and the other drawn back, both hands closed, as if hauling a rope. Shift the weight forward and back with the pull. Hold, then swap sides.",
      "6. Displaying Paw-Style Palms like a White Crane Spreading Its Wings — from the chest, push both palms straight forward with the fingers spread and the wrists cocked back, then draw them back to the chest. Push and draw several times.",
      "7. Nine Ghosts Drawing Swords — one hand comes up behind the head and the other behind the back, as if drawing a sword across the shoulder blades. Hold, then swap sides.",
      "8. Three Plates Falling on the Floor — sink into a wide squat with the palms pressing down toward the floor and the back straight, then rise. The deepest leg work in the set; go only as low as the knees allow.",
      "9. Black Dragon Displaying Its Claws — one palm reaches across the body and down toward the opposite foot while the torso rotates, then sweeps back up. Hold, then swap sides. The set's largest spinal rotation.",
      "10. Tiger Springing on Its Prey — step into a deep lunge and reach both hands toward the floor in front of the leading foot, chest low, like a tiger about to pounce. Hold, then swap sides.",
      "11. Bowing Down in Salutation — hands clasped behind the head, bend forward from the hips with the back long and let the head hang, then rise. The set's forward fold.",
      "12. Swinging the Tail — hands on the hips, bend forward and swing the tailbone and hips side to side, letting the whole spine follow. The closing movement.",
      "13. Finish standing, feet together, palms at the sides, and take five slow breaths before walking away. The whole set takes 20–40 minutes once you know it. In the first week, learn two or three postures at a time and add the rest as they stick — the form is remembered in order, and learning it whole in one sitting is how people quit.",
      "14. On the reference: the exact hand positions differ between lineages. The official illustrated book of the standardized form (Health Qigong · Yi Jin Jing, People's Sports Publishing House, 2003; English edition, Foreign Languages Press, ISBN 9787119047782) is the reference if you want the form taught precisely. The descriptions above are our own words, not theirs."
    ],
    reps: "The whole set, 3–5 times a week, 20–40 minutes, for a block of 8–12 weeks. That is the dose the trials actually used: the ten randomized trials in the 2024 meta-analysis ran 20–60 minutes a session, 3–7 sessions a week, for 8–12 weeks (one ran 24). Nothing shorter has been tested well enough to say anything about. Treat the first month as learning rather than training, and expect the sequence itself to take a few weeks to stick.",
    evidence: "Moderate — a real trial literature exists and the pooled effects on lower-body performance are large, but every included trial was small and unblinded, the authors graded the certainty of their own main results as low-to-moderate, and the studies are almost all Chinese and almost all in adults over 60",
    evClass: "moderate",
    research: [
      {
        source: "Zhang, Jiang, Chen, Yang & Ren, 'Effects of Yi Jin Jing on enhancing muscle strength and physical performance in older individuals: a systematic review and meta-analysis', Frontiers in Medicine 11:1441858 (2024), doi:10.3389/fmed.2024.1441858",
        claim: "The strongest single source for this entry, and the one that shapes its verify field. Ten randomized trials, 590 participants, all over 60 and 75% women, pooled with Hedges' g. The large findings were in getting up from a chair: the chair sit-to-stand test g = 1.06 and the squatting-to-standing test g = 1.08 — but the authors graded the certainty of BOTH as LOW, with heterogeneity of 69% and 91% respectively. Strength effects were smaller: handgrip g = 0.25 (low certainty), knee extensor peak torque at 60°/s g = 0.47 (moderate certainty), knee flexor peak torque g = 0.42. And the finding a family should care about most is the one that did NOT move: the sit-and-reach test showed no significant effect at all (g = 0.15, p = 0.25), nor did right shoulder flexibility (g = 0.09). The authors' own limitations section is blunt — no high-quality studies, small samples, no allocation concealment or blinding in any included trial, and only two of the ten rated 'good' on the PEDro scale. That is why this entry is labelled Moderate and not Strong.",
        medium: "systematic review + meta-analysis of randomized controlled trials",
        confidence: "Moderate — the direction is consistent and the authors' own GRADE ratings are low-to-moderate, with small unblinded trials throughout",
        year: "2024"
      },
      {
        source: "Cheng, Wang, Wang, Cao & Wang, 'Network meta-analysis of the efficacy of four traditional Chinese physical exercise therapies on the prevention of falls in the elderly', Frontiers in Public Health 10:1096599 (2022), doi:10.3389/fpubh.2022.1096599",
        claim: "The comparison source — this is where the Yi Jin Jing sits relative to the other traditional sets the Village already carries. Forty-five studies across four practices (tai chi, Eight Brocades, Five Animal Frolics, Yi Jin Jing). Yi Jin Jing came out best of the four on the Berg Balance Scale (SMD -5.79) and on eyes-closed standing, while Eight Brocades was better on the Timed Up and Go. Read this as a ranking within a weak literature rather than a verdict: the pooled studies are small, and a network meta-analysis inherits every weakness of the trials it connects.",
        medium: "network meta-analysis of randomized controlled trials",
        confidence: "Low to moderate — the ranking is suggestive, the underlying trials are small and mostly unblinded",
        year: "2022"
      },
      {
        source: "Meir Shahar, 'The Shaolin Monastery: History, Religion, and the Chinese Martial Arts', University of Hawai'i Press (2008), ISBN 978-0-8248-3110-3",
        claim: "The historical source behind this entry's lineage field. Shahar's academic history of the monastery documents that the Yi Jin Jing manual does not predate the seventeenth century, that it carries two forged prefaces attributed to the Tang general Li Jing and the Song officer Niu Gao, and that the prefaces' claim — that the exercise came down from Bodhidharma and gave Li Jing and Yue Fei their strength — is drawn from popular fiction. This is a university-press monograph, not a trial: it is cited here for what it says about provenance, and it says nothing about whether the exercise is good for you.",
        medium: "peer-reviewed academic monograph (university press)",
        confidence: "High — the standard scholarly treatment of the subject, consistent with the earlier work of Tang Hao (1920) and Matsuda Ryuchi",
        year: "2008"
      },
      {
        source: "Health Qigong Management Center, General Administration of Sport of China, 'Health Qigong · Yi Jin Jing' (健身气功·易筋经), People's Sports Publishing House (2003); English edition, Foreign Languages Press, ISBN 9787119047782",
        claim: "The official publication of the modern standardized twelve-posture form — and the most useful document in this whole entry. It is the source for the sequence and the posture names given in the practice field, and it is also the source for the provenance statement: the book itself says that modern archaeological evidence shows the text was created by the late-Ming Daoist Zining of Tiantai, that it is originally a Daoist daoyin practice, and that it has nothing to do with Buddhism. The state body that standardized the form for public health use, and researched it at the Wuhan Institute of Physical Education, published the correction alongside the exercise. That is the nugget: the institution promoting the practice is also the one saying the legend is wrong.",
        medium: "official published manual (national sports authority), not a study",
        confidence: "High for the claim that this is what the publication says; it is a primary document, and it is not evidence of health effect",
        year: "2003"
      }
    ],
    verify: "Two numbers, twelve weeks, and a prediction written down in advance — because this entry's evidence has a shape you can copy. The 2024 meta-analysis found a large effect on getting out of a chair and no effect at all on the sit-and-reach test. So test exactly those two things. Day 1: the 30-second chair stand — sit in a standard chair, arms crossed over the chest, and stand and sit as many times as you can in 30 seconds (a full stand and a full return counts once). Write the number down. Then the sit-and-reach — sit on the floor with both legs straight, reach the fingertips forward as far as they go, and record the distance past the toes in centimetres, best of three. Now write your prediction down BEFORE you start practising: the chair-stand number should go up, and the sit-and-reach number should barely move. Then practise the full set 3–5 times a week for twelve weeks and re-test both. If the chair stand improves and the reach stays put, you have reproduced the meta-analysis at your own kitchen table — the set built the legs and did not make you flexible, which is exactly what the pooled data says. If both move, ask what else changed in your week. If neither moves, that is a real result too: twelve weeks at three times a week is the short end of the range the trials used, so the honest reading is that you tested the dose, not the practice. Writing the prediction first is the point — it is what stops you explaining the result after the fact.",
    village: "The traditional-sets domain's fifth entry, and its sharpest provenance lesson. The section already asks a family to check the origin of the Sun Salutation; this one goes further, because here the exercise is real and the origin story attached to it is a documented forgery — and the modern form's own official publication says so. In the game it becomes the Vitality guild's 'read the label' badge: a practice you can enjoy and a claim you can check, held apart, which is the same discipline the rest of the Library asks for. It also gives the section a second lower-body strength test (the 30-second chair stand) that is free, needs one chair, and produces a number a child and a grandparent can both put on the same chart.",
    quest: ["The Chair-Stand Prediction", "Test the 30-second chair stand and the sit-and-reach on day 1, and write down your prediction before you start: the chair-stand number should improve and the sit-and-reach should not. Then practise the twelve postures of the Yi Jin Jing 3–5 times a week for twelve weeks and re-test both numbers. Write down all four numbers and one sentence on whether the prediction held — and while you practise, find out who the text is actually attributed to, because it is not who the legend says.", ["PE", "Health", "Science", "History"], "🧵"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> yi-jin-jing", "authored_at": "2026-09-30"}
  },

  {
    id: "reflexology-foot-maps",
    icon: "🦶",
    name: "Reflexology — The Foot Map & the Touch That Works",
    esName: "Reflexología — El Mapa del Pie y el Toque que Sí Funciona",
    tagline: "The oldest touch therapy in the section, and the one where a good test said the map is not the medicine.",
    lineage: "Modern reflexology is traced to two Americans, not to antiquity. William H. Fitzgerald (1872–1942), an ear, nose and throat physician, published 'Zone Therapy' in 1917, dividing the body into ten vertical zones and claiming that pressing points on the hands, feet and face affected everything in the same zone — he used it mainly for pain relief and as a stand-in for anaesthesia. Eunice Ingham (1889–1974), a physiotherapist working in that orbit, took Fitzgerald's ten zones and mapped them onto the foot in detail through the 1930s, publishing 'Stories the Feet Can Tell' in 1938; the modern foot chart — toes to the head, ball to the chest, arch to the digestion, heel to the lower back — is hers. The practice is often said to be ancient, and Egyptian tomb paintings, Chinese meridian theory and Indian foot massage are all cited as ancestors. The older traditions are real; the specific foot map taught today is a 20th-century American construction, and the unbroken line from it back to those traditions is a claim, not a documented transmission.",
    what: "A touch practice in which the thumbs and fingers press and 'walk' over specific zones of the foot — sole, sides and top — each zone said to correspond to an organ or body region. The practitioner works one foot at a time with a slow caterpillar-step of the thumb: press, inch forward, press. The self-help form is simply pressing and rubbing your own feet. Nothing about it needs equipment, oil, or training to begin — which is exactly why it is worth being honest about what it does and does not do.",
    esWhat: "Una práctica de tacto en la que los pulgares y los dedos presionan y 'caminan' sobre zonas concretas del pie —planta, lados y empeine—, y se dice que cada zona corresponde a un órgano o región del cuerpo. Se trabaja un pie a la vez con un paso lento de pulgar tipo oruga: presionar, avanzar un poco, presionar. La forma de autoayuda es simplemente presionar y frotar los propios pies. No requiere equipo, aceite ni formación para empezar; por eso mismo vale la pena ser honestos sobre lo que hace y lo que no.",
    practice: [
      "0. Before you start: sit facing the person, or cross one foot over the other knee if you are working on yourself. Warm the foot first — a slow, flat-handed rub from heel to toes for a minute, no pressure. Cold hands on a cold foot is not a treatment, it is a startle.",
      "1. The thumb-walk: press the pad of the thumb into the sole and inch it forward one small step at a time, like a caterpillar. Firm enough to feel, never sharp enough to make someone pull away. This is the whole technique — everything below is only where you put it.",
      "2. The map, in order: the toes and the base of the toes (head, sinuses); the ball of the foot (chest, lungs); the arch (stomach, liver, intestines); the heel (lower back, pelvis); the outer edge (spine and shoulders); the inner edge (spine, bladder). One to two minutes on each region.",
      "3. Press and hold, then move: press into a point, hold for a slow count of three, release, move on. Some traditions rotate the thumb on the point. The tradition reads a tender point as a 'congested' one — treat tenderness as information, not as a target to grind.",
      "4. Finish the foot: a slow whole-foot rub from heel to toes, then a gentle pull on each toe. Then the other foot.",
      "5. Self-help version: five minutes, both feet, thumbs and knuckles, before bed. This is the version a child can do alone, and the version the self-administered-reflexology trials actually used.",
      "6. What not to do: do not press on a foot with an open wound, a fresh fracture, a history of deep-vein thrombosis, or severe circulatory disease without a doctor's clearance. Reflexology is gentle, but a foot is not always a safe place to press."
    ],
    reps: "10–20 minutes for a full two-foot session; 5 minutes for the self-help version. The trials used 10–60 minutes a session, 1–18 sessions, over 1–8 weeks, and the meta-analyses found that longer total time tracked with larger effects on sleep — the one place the dose seems to matter. Daily is the traditional recommendation; the evidence does not distinguish daily from three times a week.",
    evidence: "Weak / traditional — the distinctive claim (that foot zones map to organs) has been tested directly against plain foot massage and did not survive; the touch itself has a real but modest evidence base for anxiety, pain and sleep",
    evClass: "weak",
    research: [
      {
        source: "Wang WL, Hung HY, Chen YR, Chen KH, Yang SN, Chu CM, Chan YY, 'Effect of Foot Reflexology Intervention on Depression, Anxiety, and Sleep Quality in Adults: A Meta-Analysis and Metaregression of Randomized Controlled Trials', Evidence-Based Complementary and Alternative Medicine 2020:2654353, doi:10.1155/2020/2654353",
        claim: "The largest pooled result for the outcomes a family would care about: 26 randomized trials, 2,366 adults, mostly in Iran, Turkey and Taiwan. Foot reflexology beat inactive controls on anxiety (Hedges' g = -1.237), depression (g = -0.921) and sleep quality (g = -1.665) — all large effects. The honesty is in the details: heterogeneity was 93% for anxiety and 94% for sleep (the studies were not measuring the same thing), all 26 trials were rated high or unclear risk of bias in at least one domain, and the comparator in most of them was 'usual care' or a waitlist — not a plain foot rub. A large effect against doing nothing is not evidence that the foot map does anything.",
        medium: "systematic review + meta-analysis of randomized controlled trials",
        confidence: "Moderate for the effect of touch against no treatment · low for anything specific to reflexology",
        year: "2020"
      },
      {
        source: "Ernst E, 'Is reflexology an effective intervention? A systematic review of randomised controlled trials', Medical Journal of Australia 191(5):263–266 (2009)",
        claim: "The skeptical ceiling, and the reason this entry is labelled Weak. Eighteen randomized trials, 949 participants, across asthma, back pain, cancer palliation, dementia, diabetes, headache, IBS, menopause, multiple sclerosis, the postoperative state and premenstrual syndrome. Five trials found a positive effect, twelve found none, one was unclear. Methodological quality was generally poor. Among the nine trials scoring 3 or more on the Jadad scale, two were positive and seven were not — and the two largest trials (n = 130 and n = 243) were both negative. The conclusion is blunt: the best evidence available does not convincingly demonstrate that reflexology is an effective treatment for any medical condition.",
        medium: "systematic review of randomized controlled trials",
        confidence: "High as a summary of the trial literature · the finding is a null",
        year: "2009"
      },
      {
        source: "Trujillo-Martín M del M, del Pino-Sedeño T, León-Salas B, García García J, Benítez Brito N, Gaitán Gonzalez A, Rodríguez Rodríguez L, Guerrero Fernández de Alba I, Serrano Aguilar P, 'PP222 Efficacy And Safety Of Foot Reflexology', International Journal of Technology Assessment in Health Care 37(S1):28 (2021), doi:10.1017/S0266462321001367",
        claim: "The source that answers the question the other reviews leave open: does the MAP do anything, or is it the touch? A health technology assessment run under Spain's 'Health Protection Plan Against Pseudo-Therapies' (framework established 2018 by the Spanish Ministry of Health and the Ministry of Science and Innovation), pooling 68 randomized trials. Against a non-reflexological foot massage, foot reflexology showed no effect on pain, fatigue, depression, quality of life, sleep quality or blood pressure. The improvements appeared only when reflexology was compared with usual care or no intervention — and the anxiety benefit shrank from SMD -0.6 against any comparator to -0.2 against plain foot massage. In other words: the massage helps, the map does not add to it. This is the single most useful finding in the entry, and the one its home test is built on.",
        medium: "health technology assessment / systematic review + meta-analysis",
        confidence: "Moderate-to-high for the negative specific-effect finding — it is the direct head-to-head comparison",
        year: "2021"
      },
      {
        source: "Australian Government Department of Health and Aged Care, 'Natural Therapies Review 2024 — Reflexology evidence evaluation' (published 14 November 2024)",
        claim: "A government review run to decide whether reflexology should be eligible for private health insurance rebates — 174 studies included, 123 in the synthesis. Its finding is not that reflexology fails but that the literature cannot answer the question: certainty was low for 4 of 38 outcomes and very low for the other 34, with 'serious concerns about the methods used in all of the studies.' It also flags the specific worry that trialists may have reported large beneficial effects selectively. The honest reading is that a large body of reflexology research exists and almost none of it is good enough to settle anything.",
        medium: "government systematic review / health technology assessment",
        confidence: "High as a statement about the quality of the literature · the finding is uncertainty, not refutation",
        year: "2024"
      },
      {
        source: "Wang MY, Tsai PS, Lee PH, Chang WY, Yang CM, 'The efficacy of reflexology: systematic review', Journal of Advanced Nursing 62(5):512–520 (2008)",
        claim: "The one place a specific effect has survived. Five randomized trials, 251 participants, twelve outcome variables — and the only statistically significant result was urinary symptoms in multiple sclerosis (effect size -0.91, 95% CI -1.55 to -0.23), in a trial of 53 people (Siev-Ner et al., Multiple Sclerosis Journal 9(4):356–361, 2003). Everything else was negligible. The authors' own conclusion — 'no evidence for any specific effect of reflexology in any condition, with the exception of urinary symptoms associated with multiple sclerosis' — is worth keeping precisely because it is a small, unreplicated exception in a sea of nulls, and because the MS trial behind it has never been independently repeated at scale.",
        medium: "systematic review of randomized controlled trials",
        confidence: "Low — five small trials, one positive result, no independent replication",
        year: "2008"
      }
    ],
    verify: "The two-foot test — the cleanest home experiment in the section, because the literature has already told you what to expect. Give one foot the full reflexology routine: thumb-walk every zone, ten minutes, done properly. Give the other foot a plain, unhurried ten-minute rub — same length, same hands, no map. Then ask the person to guess which foot got 'the real thing', and have them rate each foot separately on how it feels, 1–10. Do it three times this week, swapping which foot gets which, and write down every guess. The prediction, straight from the Spanish head-to-head meta-analysis: nobody can tell, and both feet feel better. If that is what you find, you have reproduced the finding that the touch is the medicine and the map is a story — a real result, and the whole point of the entry. Then the number test: rate anxiety or mood 1–10 before and after a ten-minute foot rub, ten times over a month. If those numbers move, that is real too — it just does not tell you the map is real. Write both results down. And if someone insists they can always tell which foot got the map, that is a testable claim: run it blinded, so the person guessing does not know which foot you did first.",
    village: "The energy-medicine domain's fourth entry and its most family-usable one: no equipment, no training, and a parent can do it on a child at bedtime as easily as a child can do it on a parent. It pairs with the Jin Shin Jyutsu finger holds as the library's two touch-based entries — and where Jin Shin Jyutsu teaches 'hold one finger', this one teaches the harder lesson: a practice can feel good, be worth doing, and still not be doing what its map says. In the game it becomes the Vitality guild's 'blind test' badge, the same discipline the Foam Roller Test and the Chair-Stand Prediction already ask for, applied to the sense of touch.",
    quest: ["The Two-Foot Test", "Give one foot the full reflexology routine — thumb-walk every zone for ten minutes — and give the other foot a plain, unhurried ten-minute rub. Then ask the person to guess which foot got the 'real' reflexology, and rate how each foot feels. Do it three times this week, swapping sides, and write down whether anyone could tell. The honest answer is probably no — and the touch still works.", ["PE", "Health", "Science"], "🦶"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> reflexology-foot-maps", "authored_at": "2026-10-01"}
  },

  {
    id: "otago-strength-balance",
    icon: "🪜",
    name: "The Otago Programme — Home Strength & Balance for Fall Prevention",
    esName: "El Programa Otago — Fuerza y Equilibrio en Casa para Prevenir Caídas",
    tagline: "The home exercise programme with the best fall-prevention record there is — built for the oldest players, and worth doing at any age.",
    lineage: "Developed in the 1990s at the University of Otago in Dunedin, New Zealand, by A. John Campbell and M. Clare Robertson, who designed it specifically to stop older people living at home from falling. It is not a tradition and does not pretend to be: it is a clinical programme, published as a manual (Campbell & Robertson, 'Otago Exercise Programme to prevent falls in older adults', Accident Compensation Corporation / University of Otago, 2003), and it has been tested in randomised trials since 1997. The lineage is documented research, not transmission.",
    what: "A fixed set of leg-strengthening and balance exercises plus a walking plan, done at home three times a week. The strengthening half uses ankle cuff weights and targets five muscle groups — the front of the thigh (knee extensor), the back of the thigh (knee flexor), the side of the hip (hip abductor), the calf (plantarflexor), and the muscles that lift the toes (dorsiflexor). The balance half is a ladder of stances and walks that get progressively harder — knee bends, toe walking, heel walking, heel-to-toe (tandem) stance and walking, one-leg standing, backwards walking, and walking-and-turning — each starting with a hand on a chair and progressing to no support. It ends with a walking plan. The whole session takes about 30 minutes.",
    esWhat: "Un conjunto fijo de ejercicios de fortalecimiento de piernas y equilibrio más un plan de caminata, en casa, tres veces por semana. La mitad de fuerza usa pesas de tobillo y trabaja cinco grupos musculares: la parte delantera del muslo (extensor de rodilla), la parte trasera (flexor de rodilla), el costado de la cadera (abductor de cadera), la pantorrilla (flexor plantar) y los músculos que levantan los dedos del pie (dorsiflexor). La mitad de equilibrio es una escalera de posturas y caminatas cada vez más difíciles — flexiones de rodilla, caminar de puntillas, caminar de talones, postura y caminata talón-punta (tándem), pararse en una pierna, caminar hacia atrás y caminar girando — cada una empezando con una mano en una silla y progresando sin apoyo. Termina con un plan de caminata. La sesión completa toma unos 30 minutos.",
    practice: [
      "Warm-up (5 minutes) — the programme always opens with the same five gentle flexibility movements, 5 times each: head turns side to side; neck movements; back extension (hands on the lower back, gently arch); trunk turns side to side; ankle circles and points.",
      "Front knee strengthener (seated) — sit back in a chair with your feet under your knees. Straighten one leg slowly, lifting for a slow count of 3, and lower for a count of 5. 10 times each leg. Add an ankle weight (start at 1–2 kg) once two sets of 10 feel easy.",
      "Back knee strengthener (standing) — stand tall holding a chair. Bend one knee, bringing the heel toward your bottom, then lower slowly. 10 times each leg. Ankle weight as above.",
      "Side hip strengthener (standing) — stand sideways to a chair and hold on. Keep the leg straight and the toes pointing forward, lift the leg out to the side, then lower. 10 times each leg. Ankle weight as above.",
      "Calf raises and toe raises (standing) — rise onto the balls of your feet 10 times, then lift your toes and rock back onto your heels 10 times. Body weight is enough for these two; no ankle weights.",
      "The balance ladder — do each one with a hand on a chair first, then with no support once it feels easy: knee bends (10); toe walking (10 steps forward, turn, 10 back); heel walking (10 steps each way); heel-toe stand (one foot directly in front of the other, hold 10 seconds, then swap which foot is in front); heel-toe walking (10 steps); one-leg stand (10 seconds each leg, building toward 30); backwards walking (10 steps); walking and turning around (a figure-8, twice).",
      "The walking plan — walk for up to 30 minutes, up to three times a week, on the days you do not do the exercises (or as fitness allows).",
      "The dose — exercises three times a week with a rest day between sessions; walking on the other days. Progress in this order: first take the hand off the chair, then add repetitions, then add ankle weight."
    ],
    reps: "About 30 minutes, three times a week with a rest day between sessions, plus a walking plan on the other days. Progress in this order — remove the hand support, then add repetitions, then add ankle weight. The trials started people in their 80s at 1–2 kg and worked up to 8 kg.",
    evidence: "Strong — one of the best-evidenced exercise programmes there is: several randomised trials and a meta-analysis show it reduces falls in older adults. The honest complications: the same meta-analysis found no clear reduction in injuries from falls, its mortality finding is the least certain part, and the largest independent trial found no improvement in falls risk or mobility at six months.",
    evClass: "strong",
    research: [
      {
        source: "Campbell AJ, Robertson MC, 'Otago Exercise Programme to prevent falls in older adults: a home-based, individually tailored strength and balance retraining programme' (Accident Compensation Corporation / University of Otago, 2003 — the programme manual)",
        claim: "The programme's own manual: the exercise set, the levels and repetitions, the walking plan, and the two outcome tests (the chair stand test and the four-test balance scale) that the practice and verify fields here are drawn from. It is the primary document of the programme — practitioner documentation of a clinical routine, not a trial.",
        medium: "programme manual / practitioner documentation",
        confidence: "High (as the programme's own definition)",
        year: "2003"
      },
      {
        source: "Campbell AJ, Robertson MC, Gardner MM, Norton RN, Tilyard MW, Buchner DM, 'Randomised controlled trial of a general practice programme of home based exercise to prevent falls in elderly women', BMJ 315(7115):1065–1069, 1997",
        claim: "The founding trial: 233 women aged 80 and over, individually prescribed the home strength-and-balance programme. After one year there were 88 falls in the exercise group against 152 in the control group (0.87 vs 1.34 falls per person-year, difference 0.47, 95% CI 0.04–0.90); the hazard for a first injurious fall was 0.61 (95% CI 0.39–0.97), and balance had measurably improved by six months.",
        medium: "randomised controlled trial",
        confidence: "High (as a trial) · the effects are modest and the sample is small",
        year: "1997"
      },
      {
        source: "Robertson MC, Devlin N, Gardner MM, Campbell AJ, 'Effectiveness and economic evaluation of a nurse delivered home exercise programme to prevent falls. 1: Randomised controlled trial', BMJ 322(7288):697–701, 2001",
        claim: "The programme worked when a trained district nurse delivered it in ordinary home health care, not just a research physiotherapist: falls fell by 46% (incidence rate ratio 0.54, 95% CI 0.32–0.90), and there were five fall-injury hospital admissions in the control group and none in the exercise group.",
        medium: "randomised controlled trial (pragmatic)",
        confidence: "Moderate–High",
        year: "2001"
      },
      {
        source: "Thomas S, Mackintosh S, Halbert J, 'Does the Otago exercise programme reduce mortality and falls in older adults? A systematic review and meta-analysis', Age and Ageing 39(6):681–687, 2010, doi:10.1093/ageing/afq102",
        claim: "The key pooled estimate, and the source of the honest caveats. Seven trials, 1,503 participants, mean age 81.6: the programme reduced fall rates (incidence rate ratio 0.68, 95% CI 0.56–0.79) and the risk of death over twelve months (risk ratio 0.45, 95% CI 0.25–0.80) — but it found no significant difference in serious or moderate injuries from falls (risk ratio 1.05, 95% CI 0.91–1.22), and only 36.7% of participants still in the studies at a year were exercising three times a week. The mortality result is the least certain finding here: the review's own assessors cautioned about the small samples and the review methods.",
        medium: "systematic review and meta-analysis",
        confidence: "Moderate — the falls reduction is solid; the mortality benefit is the part to hold loosely",
        year: "2010"
      },
      {
        source: "Sherrington C, Fairhall NJ, Wallbank GK, Tiedemann A, Michaleff ZA, Howard K, Clemson L, Hopewell S, Lamb SE, 'Exercise for preventing falls in older people living in the community', Cochrane Database of Systematic Reviews 1(1):CD012424, 2019, doi:10.1002/14651858.CD012424.pub2",
        claim: "The current Cochrane verdict on exercise for falls, and the reason this entry's label is Strong: exercise reduces the rate of falls by about 23% (rate ratio 0.77, 95% CI 0.71–0.83; 59 studies, 12,981 participants; high-certainty evidence), and programmes that are mostly balance and functional training — which is what this programme is — reduce the rate by about 24% (rate ratio 0.76, 95% CI 0.70–0.81; 39 studies; high-certainty). The effect is real but not large.",
        medium: "Cochrane systematic review",
        confidence: "High (as a pooled effect)",
        year: "2019"
      },
      {
        source: "Liu-Ambrose T, Donaldson MG, Ahamed Y, Graf P, Cook WL, Close JCT, Lord SR, Khan KM, 'Otago home-based strength and balance retraining improves executive functioning in older fallers: a randomized controlled trial', Journal of the American Geriatrics Society 56(10):1821–1830, 2008, doi:10.1111/j.1532-5415.2008.01931.x",
        claim: "The honest complication, from an independent group: 74 adults aged 70 and over with a recent fall. At six months there was no significant between-group difference in measured falls risk or in the Timed Up and Go — the only thing that improved was one measure of executive function (response inhibition). The fall reduction appeared only after two outliers were removed from the analysis (incidence rate ratio 0.56 unadjusted, 0.47 adjusted). So the programme's benefits are real but not uniform, and a short trial can miss them entirely.",
        medium: "randomised controlled trial",
        confidence: "Moderate — a small trial that partly contradicts the larger picture",
        year: "2008"
      },
      {
        source: "Albornos-Muñoz L, Blanco-Blanco J, Cidoncha-Moreno MÁ, Abad-Corpa E, Rivera-Álvarez A, López-Pisa RM, Caperos JM, Moreno-Casbas MT, 'Efficacy of the Otago Exercise Programme to reduce falls in community-dwelling adults aged 65–80 when delivered as group or individual training: non-inferiority clinical trial', BMC Nursing 23, 2024, doi:10.1186/s12912-024-02310-3",
        claim: "The most recent large test: 827 adults aged 65–80 in 21 primary-care centres. Delivering the programme to a group worked as well as delivering it one-to-one over twelve months — so a family or a village can do this together rather than alone. Adherence was higher in the individual format, and one minor injury was recorded during the exercises.",
        medium: "multicentre randomised non-inferiority trial",
        confidence: "Moderate–High (for the group-vs-individual question)",
        year: "2024"
      }
    ],
    verify: "The programme comes with its own two tests, and using them is the honest way to check it. Day 1: (1) the chair stand test — sit in a firm straight-backed chair, arms folded, and stand up and sit down five times as fast as you can; time it in seconds; (2) the four-test balance scale — barefoot, hold each stance for 10 seconds and score one point each: feet together, semi-tandem (one foot half in front), tandem (heel directly to toe), and one-leg stand. Write both numbers down. Then do the programme three times a week for twelve weeks and re-measure. The prediction: the balance score should move more than the chair-stand time in someone who is already reasonably strong, and both should move in someone who is not. The number that matters most is the one twelve weeks cannot give you — actual falls — so keep a family falls-and-stumbles diary for the whole period, noting every stumble and whether you caught yourself. A quiet diary is not a failure; falls are rare events and twelve weeks is a short window. The honest lesson: this programme reliably improves the strength and balance you can measure, and its evidence for stopping real falls is strong across many people — but whether it stops your own fall is a question only a long diary can answer.",
    village: "The balance domain's third entry, and the one that turns the section into a programme rather than a set of practices: where Tai Chi trains the traditional form and the vestibular entry trains the gaze, this one is the structured, progressive, evidence-based home routine — the one a family can run in a hallway with a chair and a pair of ankle weights. Its special place in the Village is the grandparents: it is the only entry designed and tested specifically to keep the oldest players on their feet, and the balance ladder is the same set of movements a child does for fun. In the game it becomes the Vitality guild's 'protect the elders' quest — the family does it together, and the elder's numbers are the ones that count.",
    quest: ["The Fall-Prevention Programme", "Measure two numbers on day 1 — the chair stand test (stand up and sit down five times as fast as you can, timed) and the four-test balance scale (feet together, semi-tandem, tandem, and one-leg stand, 10 seconds each). Then do the Otago strength-and-balance programme three times a week for twelve weeks, with a grandparent or elder if you have one. Re-measure both numbers and keep a family falls-and-stumbles diary the whole time.", ["PE", "Health", "Science"], "🪜"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> otago-strength-balance", "authored_at": "2026-10-05"}
  },

  {
    id: "hip-hinge-deadlift",
    icon: "🏋️",
    name: "The Hip Hinge — The Deadlift Pattern",
    esName: "La Bisagra de Cadera — El Patrón del Peso Muerto",
    tagline: "Bend at the hips, not the spine. The pattern every lift is built on — and the strength movement with the most honest trial record in the section.",
    lineage: "No founder — the hinge is one of the fundamental human movement patterns (alongside the squat, the carry, the push and the pull), and it is simply what picking something heavy off the ground has always been. The named exercise is the deadlift, a competitive lift in strongman and powerlifting through the 20th century; the coaching term 'hip hinge' is a 21st-century teaching label for the pattern, not a tradition. What makes this entry unusual for a strength movement is that the deadlift has been put through randomised trials twice over — once as a rehabilitation exercise for low back pain, and once as a training method in older adults — so it can name real studies, and the studies say something more interesting than 'it works.'",
    what: "The hip hinge is bending at the hips with a relatively still spine: the hips travel backward while the torso tips forward, and the spine keeps its natural curve instead of rounding. It is the opposite of a sit-up bend. The deadlift is the loaded version — stand with a weight on the floor (a barbell, two dumbbells, a kettlebell, or a heavy bucket), hinge down to grip it, brace the trunk, and stand by driving the hips forward. The whole point of the pattern is that the load is moved by the hips and legs, not by the lower back. A family can learn the hinge with no weight at all — a broomstick held against the back — and then load it with whatever is heavy.",
    esWhat: "La bisagra de cadera es doblarse en las caderas con la columna relativamente quieta: las caderas van hacia atrás mientras el torso se inclina hacia adelante, y la columna conserva su curva natural en vez de redondearse. Es lo contrario de una flexión tipo abdominal. El peso muerto es la versión con carga: párate con un peso en el suelo (una barra, dos mancuernas, una pesa rusa o una cubeta pesada), haz la bisagra para agarrarlo, aprieta el tronco y levántate empujando las caderas hacia adelante. Todo el punto del patrón es que la carga la mueven las caderas y las piernas, no la espalda baja. Una familia puede aprender la bisagra sin peso — un palo de escoba contra la espalda — y luego cargarla con lo que sea pesado.",
    practice: [
      "1. Learn the pattern unloaded — the dowel drill. Hold a broomstick or a straight stick against your back so it touches the back of the head, the upper back, and the tailbone. Keep all three contacts as you hinge: push the hips back, let the knees bend slightly, tip the torso forward until you feel a stretch in the hamstrings, then stand up by squeezing the glutes and driving the hips forward. If the stick loses contact with the tailbone, you are rounding the back — that is the error the drill exists to catch.",
      "2. The wall drill — stand about a foot from a wall, facing away, and hinge to touch the wall with your bottom, knees only slightly bent. This teaches the hips-back direction that the whole pattern depends on.",
      "3. Load it lightly — start with a weight you can lift with perfect form: two full water jugs (a 'suitcase deadlift'), a loaded backpack, or a single heavy bucket between the feet. Set the weight down between reps; every rep starts from the floor.",
      "4. Brace before you pull — breathe into the belly, tighten the trunk as if bracing for a poke, keep the spine neutral, and stand by driving the hips forward, not by leaning back at the top.",
      "5. Lower with the same pattern — hinge back down, do not round. Setting the weight down under control is half the exercise, not the part you skip.",
      "6. Children hinge with no load or a very light one — a small backpack or a light jug — and the drill is the same stick drill. The rule is the same: perfect form, stop before the back rounds."
    ],
    reps: "3–5 sets of 5–8 reps, 2–3 times a week, with a rest day between sessions. Start with a weight you could lift for a few more reps than you do — form is the whole exercise, and a rep with a rounded back teaches the wrong pattern. Progress by adding a little weight before adding reps.",
    evidence: "Moderate — the hinge is a real, teachable movement pattern with a genuine coaching literature, and the deadlift has a small but real randomised-trial base in two populations: in older adults it improves trunk extensor strength, balance and mobility, and in low back pain it improves pain and function about as well as other exercise. The honest complication is that last clause — the trials do NOT show the deadlift is better than other exercise for back pain, one pilot found no benefit at all, and the claim that learning to hinge 'protects your back' is mechanism-level (biomechanics), not outcome-level. Heavy deadlifts also produce very large spinal loads, so the pattern is a way to lift well, not a licence to lift carelessly.",
    evClass: "moderate",
    research: [
      {
        source: "Aasa B, Berglund L, Michaelson P, Aasa U, 'Individualized Low-Load Motor Control Exercises and Education Versus a High-Load Lifting Exercise and Education to Improve Activity, Pain Intensity, and Physical Performance in Patients With Low Back Pain: A Randomized Controlled Trial', Journal of Orthopaedic & Sports Physical Therapy 45(2):77–85 (2015), doi:10.2519/jospt.2015.5021 (ClinicalTrials.gov NCT01061632)",
        claim: "The trial that sets this entry's honest ceiling. Seventy adults with recurrent mechanical low back pain were randomised to low-load motor-control exercise or to high-load lifting — a progressive deadlift routine — for twelve sessions over eight weeks, both with pain-mechanism education. Both groups improved significantly in pain, strength and endurance. There was NO significant between-group difference in pain intensity (P = .505). The motor-control group did better on activity (Patient-Specific Functional Scale 4.2 vs 2.5 points, P < .001) and on movement control (2.9 to 5.9 vs 3.9 to 3.1, P < .001). The deadlift worked; it did not beat the alternative.",
        medium: "randomised controlled trial (n=70, level 2b)",
        confidence: "Moderate — a real trial, but it shows equivalence on pain, not superiority",
        year: "2015"
      },
      {
        source: "Berglund L, Aasa B, Hellqvist J, Michaelson P, Aasa U, 'Which Patients With Low Back Pain Benefit From Deadlift Training?', Journal of Strength and Conditioning Research 29(7):1803–1811 (2015), doi:10.1519/JSC.0000000000000837",
        claim: "Who actually benefits, from the same research group. Thirty-five people with mechanical low back pain did eight weeks of supervised deadlift training. The baseline factors that predicted a good outcome were lower disability, lower pain intensity, and higher endurance on the Biering-Sørensen test (a hold of the back extensors). The Biering-Sørensen test was the most robust predictor, appearing in every model. The practical reading: deadlift-based rehabilitation suits people who already have some back-extensor endurance and low pain — it is not the right first move for someone in acute pain.",
        medium: "secondary analysis of a randomised controlled trial (n=35)",
        confidence: "Moderate — a small sample, and the authors call for replication",
        year: "2015"
      },
      {
        source: "Zhang J, Huang YC, Liao YH, Chen CY, Mündel T, Lieu FK, et al., 'Effects of free-weight resistance training based on hexagonal barbell deadlift in older women: A 24-week randomized controlled trial', Experimental Gerontology (2026)",
        claim: "The older-adult evidence, and the strongest positive result in this entry. Thirty-two women (mean age 67.6) were randomised to 24 weeks of supervised hexagonal-barbell deadlift training twice a week, or to a control group. The training group gained trunk lean mass (+0.4 kg vs −0.2 kg), lost body fat (−1.4% vs +0.3%), and improved trunk extensor peak torque at 60°/s by 26.0% (vs −6.3%) and average power by 38.1% (vs −7.6%). Eyes-closed balance and the 6-minute walk also improved. Attendance was 89.6% with no adverse events. The honest caveats: 32 women is small, and whole-body lean mass and lower-limb strength did NOT differ between groups.",
        medium: "randomised controlled trial (n=32, 24 weeks)",
        confidence: "Moderate — a real trial with real effects, but a small sample and no long-term follow-up",
        year: "2026"
      },
      {
        source: "Pagan JI, Bradshaw BA, Bejte B, Hart JN, Perez V, et al., 'Task-specific resistance training adaptations in older adults: comparing traditional and functional exercise interventions', Frontiers in Aging 5:1335534 (2024)",
        claim: "The task-specificity lesson, and the reason a family should train the pattern it wants to use. Thirty adults (mean age 71) were randomised to six weeks of traditional free-weight and machine training or to functional training with a weighted vest. The traditional group got two to three times greater gains in five-repetition-maximum strength for the trap-bar deadlift, leg press and leg extension; the functional group got greater gains in gait speed and the Timed Up and Go. Both improved knee-extensor force and muscle size. Exercise makes you better at the thing you practise — which is why the hinge is worth practising as a hinge.",
        medium: "randomised controlled trial (n=30, 6 weeks)",
        confidence: "Moderate — short trial, small sample, clear direction",
        year: "2024"
      },
      {
        source: "Gibbs MT, Morrison NMV, Raftry S, Jones MD, Marshall PW, 'Does a powerlifting inspired exercise programme better compliment pain education compared to bodyweight exercise for people with chronic low back pain? A multicentre, single-blind, randomised controlled trial', Clinical Rehabilitation (2022), doi:10.1177/02692155221095484",
        claim: "The second honest null, and the most interesting one. Sixty-four people with chronic low back pain were randomised to eight weeks of powerlifting-style training (built on the hinge and deadlift) or to bodyweight exercise, both paired with the same pain education. Both groups improved significantly in pain and disability — and there was NO significant between-group difference at any time point. The behavioural measures (fear of movement and self-efficacy) explained 39–60% of the variance in who improved. The lesson this entry must not bury: what changed people was confidence and education as much as the barbell.",
        medium: "multicentre single-blind randomised controlled trial (n=64)",
        confidence: "Moderate — a well-run trial whose finding is 'the exercise type mattered less than the fear'",
        year: "2022"
      },
      {
        source: "Swinton PA, Stewart A, Agouris I, Keogh JWL, Lloyd R, 'A Biomechanical Analysis of Straight and Hexagonal Barbell Deadlifts Using Submaximal Loads', Journal of Strength and Conditioning Research 25(7):2000–2009 (2011), doi:10.1519/JSC.0b013e3181e73f87",
        claim: "The mechanism behind the 'spine-sparing' claim, and its limit. Comparing straight-bar and hexagonal-bar deadlifts at submaximal loads, the hexagonal bar significantly reduced the torque on the lumbar spine and let lifters produce more force from the hip extensors, because they could hold a more upright torso. This is a biomechanical measurement in a small sample, not an outcome trial — it shows the load can be shifted toward the hips, not that any particular lifting style prevents injury.",
        medium: "biomechanical measurement study (small sample)",
        confidence: "Moderate (as a mechanism) · none claimed (as an outcome)",
        year: "2011"
      },
      {
        source: "Nava R, McGee L, Sevart A, Weishaar P, 'Effects of a modified deadlift exercise program on low back pain: A pilot study' (2019)",
        claim: "The pilot that found nothing, included because a null belongs in the record. Eighteen people with subacute or chronic low back pain were randomised to an eight-week modified-deadlift program or to a control group. There was no significant difference between groups or over time in back-extensor endurance (Biering-Sørensen) or pain (visual analog scale), though the exercise group showed a larger percentage change. Compliance was 91.8%. The authors' own conclusion is that the program 'had no sizeable benefit.' A pilot this small cannot settle the question — but it is the honest counterweight to the positive trials, and it is why the label here is Moderate and not Strong.",
        medium: "pilot randomised controlled trial (n=18)",
        confidence: "Low — a small pilot with a null result",
        year: "2019"
      }
    ],
    verify: "Two tests, because the entry makes two different claims. (1) Is the pattern teachable? The dowel test — stand with a broomstick against your back touching the head, the upper back and the tailbone, hinge, and score how many of the three contacts stay in touch, out of three, best of three attempts. Practise the drill for two minutes a day for two weeks and re-test. This number should move: the hinge is a skill, and it is the part of this entry with the clearest evidence. (2) Does training it build strength? Pick a load you can lift five times with perfect form and count your maximum clean reps (or time how long you can hold it at the top). Re-test after four weeks of two or three sessions a week. This should also move — strength training works, and that is the least interesting finding in the section. The claim you cannot test at home is the one the marketing makes: that hinging prevents back pain. That needs years and a control group, which is exactly why the trials above measure pain in people who already have it — and why the honest answer is 'about as well as other exercise, not better.'",
    village: "The second strength entry, and the one the carry was training you for: the carry teaches you to brace under load while standing, and the hinge teaches you to pick the load up and set it down without rounding your back — the two halves of the same homestead task. It ties straight into the Village's real work (firewood, feed, water, moving a hurt animal) and into Survival Mode, where lifting and hauling are literal tasks. Its game value is that it produces the section's cleanest skill number: the dowel score is a 0-to-3 measure of a pattern a family can watch improve in two weeks, which makes it the honest counterpart to the carry's load-and-time stat.",
    quest: ["The Dowel Test — Hinge Without Rounding", "Stand with a broomstick against your back touching your head, your upper back and your tailbone. Hinge and score how many of the three contacts stay in touch, out of three, best of three. Then practise the hip hinge two minutes a day for two weeks (or 3 sets of 5 light deadlifts two or three times a week) and re-test. Log both numbers and one sentence on what changed.", ["PE", "Health", "Science"], "🏋️"],
    authorship: {"agent_id": "agent-b73ac550-5671-471e-b3e1-721f948ea063", "agent_name": "Tutor", "job": "vitality-engine", "lineage": "agent-b73ac550-5671-471e-b3e1-721f948ea063 -> vitality-engine -> hip-hinge-deadlift", "authored_at": "2026-10-06"}
  }
];

/* Cross-links to practices that already live elsewhere in the Library —
 * the PE section points at them rather than duplicating them. */
const MOVEMENT_CROSSLINKS = [
  {
    id: "heartmath",
    icon: "💓",
    name: "HeartMath Quick Coherence",
    esName: "Coherencia Rápida (HeartMath)",
    where: "Heart & Mind Practices",
    note: "The heart-focus + heart-breathing + heart-feeling practice. Its mechanism is the same six-breaths-per-minute resonance described in the Breathwork entry — arrived at from a different direction."
  },
  {
    id: "six-exercises",
    icon: "🧘",
    name: "Steiner's Six Basic Exercises",
    esName: "Los Seis Ejercicios Básicos",
    where: "Heart & Mind Practices",
    note: "Thinking, feeling, and willing trained one minute at a time. The Western esoteric counterpart to the Taoist inner work — contemplative rather than physical, and honestly labeled as such."
  },
  {
    id: "brain-states",
    icon: "🧠",
    name: "Brain States",
    esName: "Estados Mentales",
    where: "Modes & States",
    note: "Dr. Jeffrey Thompson's Bio-Tuning framework for the states that support learning and recovery. The body practices in this section are one of the most reliable ways to reach the lower-arousal states it describes."
  },
  {
    id: "nature-rhythm",
    icon: "🌿",
    name: "Nature Rhythm",
    esName: "Ritmo de la Naturaleza",
    where: "Nature Rhythm",
    note: "Seasonal and daily rhythm — the reason a fixed daily set (the Five Rites, the Eight Brocades) works better than an occasional big session."
  }
];
