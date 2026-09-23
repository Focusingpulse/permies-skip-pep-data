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
    id: "posture-movement-science",
    icon: "🪑",
    name: "Posture Science — What Actually Holds Up",
    esName: "Ciencia de la Postura — Lo Que Realmente Se Sostiene",
    tagline: "The old 'good posture' model mostly did not survive testing. The replacement is better.",
    lineage: "The modern evidence-based movement camp: Eyal Lederman's 'The Fall of the Postural-Structural-Biomechanical Model' (Journal of Bodywork & Movement Therapies, 2011), Katy Bowman's 'Move Your DNA' (2014), and Gray Cook's Functional Movement Systems.",
    what: "The traditional model said pain comes from bad posture and that correcting posture prevents pain. That model has largely failed to hold up: posture is only weakly related to pain, and there is no single correct posture. What does hold up is movement and position variety — the body wants to change position often, and the harm comes from staying in any one position for hours, including a 'good' one.",
    esWhat: "El modelo tradicional decía que el dolor viene de la mala postura y que corregirla lo previene. Ese modelo no resistió las pruebas: la postura se relaciona débilmente con el dolor y no existe una postura correcta única. Lo que sí se sostiene es la variedad de movimiento y de posición.",
    practice: [
      "Change position often — the best posture is the next one. Set a rhythm, not a shape.",
      "Move every 30 minutes — stand, walk, reach overhead, squat down; break up sitting rather than perfecting it.",
      "Build capacity through range — strength at the ends of your range, not just the middle.",
      "Carry and lift in varied ways — let the body meet varied loads instead of one 'correct' technique.",
      "Floor time — get down to the floor and back up daily; it is a whole-body strength and mobility test.",
      "Do not chase symmetry — humans are asymmetric; the goal is capacity, not a mirror."
    ],
    reps: "Continuous. This is a habit of the whole day, not a session.",
    evidence: "Moderate benchmark evidence",
    evClass: "moderate",
    research: [
      {
        source: "Eyal Lederman, 'The fall of the postural-structural-biomechanical model in manual and physical therapies: exemplified by lower back pain', J Bodyw Mov Ther (2011)",
        claim: "The assumption that a specific posture or structure causes pain, and that correcting it resolves pain, is not supported by the evidence. Lederman argues the model should be replaced by one based on movement and load tolerance.",
        medium: "peer-reviewed review / theoretical paper",
        confidence: "Moderate–Strong",
        year: "2011"
      },
      {
        source: "Katy Bowman, 'Move Your DNA' (2014); the 'movement diet' framing",
        claim: "Bowman reframes exercise as a small part of a larger 'movement diet' — the total load and variety across the whole day — and argues that the missing input in modern life is variety and volume, not intensity.",
        medium: "practitioner synthesis of the research",
        confidence: "Moderate",
        year: "2014"
      },
      {
        source: "Sitting-reduction research (breaking up sedentary time)",
        claim: "Interrupting prolonged sitting with short bouts of movement produces measurable metabolic benefits independent of total exercise — the best-studied practical claim in this entry.",
        medium: "controlled studies",
        confidence: "Moderate–Strong",
        year: "2010s–2020s"
      }
    ],
    verify: "The honest version of this entry is a correction: the Village should not teach 'sit up straight.' It should teach 'change position often, build capacity through the whole range, and get on the floor every day.' That is what the evidence supports.",
    village: "Directly changes how the Village talks about the body. It is also the most immediately actionable entry for a homeschooling family — floor time, position changes, and carrying things in varied ways are all game-able.",
    quest: ["The Position-Variety Day", "For one day, change position every 30 minutes (stand, squat, reach, walk, floor). Count how many distinct positions you actually used. Then do it for a week and compare the count.", ["PE", "Health", "Science"], "🪑"]
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
    evidence: "Moderate–Strong benchmark evidence",
    evClass: "strong",
    research: [
      {
        source: "Balban, et al., 'Brief structured respiration practices enhance mood and reduce physiological arousal', Cell Reports Medicine (2023)",
        claim: "Five minutes a day of cyclic sighing (extended exhale) improved mood and lowered respiratory rate more than mindfulness meditation over a one-month randomized study.",
        medium: "randomized controlled study",
        confidence: "Strong (single study, well-designed)",
        year: "2023"
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
    verify: "Convergence worth naming in the game: HeartMath's 'quick coherence' (already in the Library), the six-breaths-per-minute research, and the cyclic-sighing trial all arrived at the same place from different directions. That is what a real finding looks like.",
    village: "The bridge between the PE section and the Heart & Mind Practices section. A family that learns one breath drill has a tool for every hard moment in the game — and in the week.",
    quest: ["Five Minutes of Breath", "Do five minutes of cyclic sighing (double inhale, long exhale) every day for two weeks. Rate your mood before and after on a 1–5 scale each time and look at the pattern.", ["PE", "Health"], "🌬️"]
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
      }
    ],
    verify: "The single best home measurement in the PE section: time your single-leg stand, eyes closed, both sides. Write it down. Train for eight weeks. Measure again. That number is the honest test of the whole balance domain.",
    village: "The most defensible traditional practice in the library, and the one with the clearest family benefit — it protects the grandparents, and it is a game for the kids. It should anchor the Vitality guild's balance tier.",
    quest: ["The Balance Number", "Time your single-leg stand with eyes closed (both sides, best of three). Train tai chi or single-leg stands for eight weeks, then measure again. Record both numbers and the difference.", ["PE", "Health", "Science"], "🌊"]
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
    lineage: "A modern hypothesis popularized by Clint Ober with Stephen Sinatra and Martin Zucker ('Earthing', 2010), with a small research literature beginning in the 2000s.",
    what: "The claim is that direct skin contact with the Earth's surface allows the body to absorb free electrons, reducing inflammation and improving sleep. The proposed mechanism is real in the sense that the body is conductive and the Earth is a charge reservoir — but the health outcomes claimed on top of that are supported by small, mostly uncontrolled studies.",
    esWhat: "La afirmación: el contacto directo de la piel con la superficie terrestre permite absorber electrones libres, reduciendo la inflamación y mejorando el sueño. El mecanismo propuesto es real en el sentido de que el cuerpo es conductor; los resultados de salud se apoyan en estudios pequeños y en su mayoría no controlados.",
    practice: [
      "Barefoot time — 15–30 minutes of barefoot contact with soil, grass, sand, or stone.",
      "Cold ground — the practice is more comfortable and more plausible in warm weather; do not turn it into a hardship.",
      "Barefoot elsewhere — walking barefoot on varied ground is independently good for the feet and balance.",
      "Sleeping grounded — conductive sheets and mats exist; they are the least-evidenced part of the practice.",
      "Keep it honest — treat it as a pleasant, plausible, low-cost practice, not a treatment."
    ],
    reps: "15–30 minutes daily, weather permitting. The barefoot walking is worth doing regardless of the earthing claim.",
    evidence: "Weak / contested",
    evClass: "weak",
    research: [
      {
        source: "Chevalier, et al., 'Earthing: health implications of reconnecting the human body to the Earth's surface electrons', Journal of Environmental and Public Health (2012)",
        claim: "Reports reduced cortisol, improved sleep, and reduced pain in small studies. The studies are small, frequently uncontrolled, and several key authors are associated with the commercial earthing industry.",
        medium: "small studies, conflict-of-interest concerns",
        confidence: "Weak",
        year: "2012"
      },
      {
        source: "Barefoot walking and foot strength (independent literature)",
        claim: "Separately from the earthing claim, barefoot walking on varied terrain is associated with stronger feet and better proprioceptive input — a real benefit that does not depend on the electron hypothesis.",
        medium: "independent literature",
        confidence: "Moderate (for barefoot walking) · weak (for earthing)",
        year: "2010s–2020s"
      }
    ],
    verify: "This entry exists to model honesty, not to sell a practice. Grounding is the clearest case in the library where the mechanism is plausible, the practice is pleasant and harmless, and the evidence is not there yet. Label it that way and do it if you enjoy it — the barefoot walking is the part that pays off regardless.",
    village: "A good teaching entry: it shows the family how the Village labels evidence, including for something it is happy to include. The Skeptic's Star belongs here — a family that tries it and reports 'no measurable change' has done real work.",
    quest: ["Barefoot & Honest", "Spend 15 minutes barefoot on natural ground daily for two weeks. Track sleep hours and how your feet feel. Report what changed and what did not — a null result earns the Skeptic's Star.", ["PE", "Health", "Science"], "🌍"]
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
