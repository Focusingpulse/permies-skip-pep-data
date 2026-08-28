/* ============================================================
 * The Village — Learning Lab data
 * Curriculum Gallery · Learning Science · Grand Map · Timeless Math · Blueprint Builder
 * Evidence-honest by design: every claim labeled with confidence.
 * ============================================================ */

/* ---------- 1. CURRICULUM GALLERY ---------- */
/* Each approach: who, core idea, what it looks like, strengths, watch-outs,
 * evidence, quests it maps to (by guild/aspect name), tag(s). */
const CURRICULA = [
  {
    id: "montessori",
    name: "Montessori",
    esName: "Montessori",
    century: "1907 · Maria Montessori",
    tag: "prepared", flag: "🇮🇹",
    core: "Freedom within limits. The child drives learning in a carefully prepared environment; the adult is a guide, not a lecturer. Sensitive periods, hands-on materials, self-correction.",
    looks: "Child chooses work from the shelf, uses it independently, returns it. Long concentration cycles. Mixed-age classrooms. Practical life (pouring, sweeping) is real curriculum.",
    strengths: "Independence, executive function, deep focus, order, self-correction, respect for the child.",
    watchouts: "Can be expensive to do 'authentically'; some children need more adult warmth/structure; quality varies wildly by school.",
    evidence: "Moderate — longitudinal studies (Lillard 2017; Ansari 2020) show EF and social gains vs conventional preschool, but attrition and selection effects are real.",
    quests: ["Food Prep", "Community", "Commerce"],
    esCore: "Libertad dentro de límites. El niño elige en un ambiente preparado; el adulto guía."
  },
  {
    id: "waldorf",
    name: "Waldorf / Steiner",
    esName: "Waldorf / Steiner",
    century: "1919 · Rudolf Steiner",
    tag: "rhythm", flag: "🇩🇪",
    core: "Education as art. Rhythm, imagination, and the developmental arc of 7-year phases. Academics are introduced later and through story, movement, and handwork. The will and feeling are educated, not just the intellect.",
    looks: "Same teacher follows the class for years. Main lesson in blocks. Drawing, singing, eurythmy, knitting, gardening, festivals. No screens, delayed reading (often age 7).",
    strengths: "Imagination, love of learning, strong arts/hand skills, deep human connection, resilience through rhythm.",
    watchouts: "Shadow of anthroposophy's esoteric system; delayed academics can worry parents (research says children catch up); some content (race, developmental stages) has dated/problematic corners.",
    evidence: "Limited — mostly qualitative; some studies show comparable or better social skills and creativity; reading catch-up by ~3rd grade.",
    quests: ["Vitality", "Community", "Gardening", "Natural Medicine"],
    esCore: "La educación como arte. Ritmo, imaginación y ciclos de desarrollo de 7 años; lo académico llega después, a través del cuento y el movimiento."
  },
  {
    id: "selfdirected",
    name: "Self-Directed / Unschooling",
    esName: "Autodirigido / Unschooling",
    century: "1960s · John Holt · Sudbury",
    tag: "freedom", flag: "🌍",
    core: "Trust the learner. Children are born knowing how to learn; forced curriculum is the obstacle. Learning is play, work, and life — the child curates their own day, and adults provide access, not coercion.",
    looks: "No fixed timetable. Projects that change weekly. Real work (cooking, fixing, volunteering) counts as learning. Sudbury school adds a democratic meeting where kids vote school rules.",
    strengths: "Intrinsic motivation, self-knowledge, entrepreneurship, adaptability, love of learning that survives school.",
    watchouts: "Requires family bandwidth and trust; weak spots can appear in areas the child avoids (often math, formal writing); not 'benign neglect' — it's an active, attentive practice.",
    evidence: "Moderate — Gray & Riley's studies of unschooling adults show positive self-reports (careers, well-being); selection effects huge; not an RCT.",
    quests: ["All — free-roam mode is native territory"],
    esCore: "Confía en quien aprende. El niño es quien decide; los adultos ofrecen acceso, no coerción."
  },
  {
    id: "classical",
    name: "Classical",
    esName: "Clásico",
    century: "Ancient · revived 1947 (Sayers)",
    tag: "trivium", flag: "🏛️",
    core: "The Trivium — grammar (facts), logic (argument), rhetoric (expression). Training the mind in stages it naturally passes through; the Great Books as the spine.",
    looks: "Memory work when young, logic/dialectic in middle years, rhetoric and original work as teens. Latin, debate, Socratic discussion, high standards in writing and reading.",
    strengths: "Verbal precision, critical thinking, cultural literacy, structure, academic rigor.",
    watchouts: "Can be dry if done without joy; history/Great Books skew Western; memorization without meaning is a real risk.",
    evidence: "Weak-to-moderate direct evidence; strong theoretical lineage but little comparative research on classical home/private education.",
    quests: ["Constitution", "Commerce"],
    esCore: "El trivium: gramática, lógica y retórica. Entrenar la mente en sus etapas naturales, con los grandes libros como columna."
  },
  {
    id: "charlottemason",
    name: "Charlotte Mason",
    esName: "Charlotte Mason",
    century: "1880s · England",
    tag: "living", flag: "🏴",
    core: "Education is an atmosphere, a discipline, a life. Living books (not textbooks), nature study, narration (tell it back = synthesis), habit training, short focused lessons, wide and free time outdoors.",
    looks: "Morning 'feast' of short subjects, copywork, nature journals with entries from real observation, narration instead of worksheets, afternoons outdoors.",
    strengths: "Real books create vocabulary and wonder; nature journals are gold; habits (attention, order) are built explicitly; gentle and rich.",
    watchouts: "Underestimates explicit math/reading instruction for some kids; heavy on the parent's organization; can drift toward Pinterest-perfectionism.",
    evidence: "Moderate-weak — the methods align with modern reading comprehension research (background knowledge, narrative), but no large comparative studies of CM families.",
    quests: ["Gardening", "Woodland Care", "Natural Medicine"],
    esCore: "Educación como atmósfera, disciplina y vida. Libros vivos, estudio de la naturaleza, narración y hábitos."
  },
  {
    id: "reggio",
    name: "Reggio Emilia",
    esName: "Reggio Emilia",
    century: "1945 · Loris Malaguzzi, Italy",
    tag: "emergent", flag: "🇮🇹",
    core: "The child has a hundred languages. Emergent, project-based learning; the environment is the third teacher; documentation makes thinking visible; community is central.",
    looks: "Long-term projects children choose, with adult documentation panels. Art atelier, light tables, natural materials. Teachers research alongside children.",
    strengths: "Creativity, expression, collaboration, metacognition (children see their own thinking), respect.",
    watchouts: "Best documented for early childhood; can be teacher-intensive; less clear on later academics.",
    evidence: "Moderate — strong qualitative and some comparative work in early years; high parent satisfaction.",
    quests: ["Community", "Art of Building", "Food Prep"],
    esCore: "El niño tiene cien lenguajes. Proyectos emergentes; el ambiente es el tercer maestro; la documentación hace visible el pensamiento."
  },
  {
    id: "forest",
    name: "Forest / Nature School",
    esName: "Escuela de Bosque",
    century: "1950s · Scandinavia",
    tag: "nature", flag: "🌲",
    core: "Nature is the classroom, all year, in all weather. Risk, play, and real tools in the woods build resilience and sensory intelligence. Learning follows the forest's rhythm.",
    looks: "Full days outside. Rain gear is the uniform. Fires, knives, rope, shelters, mud, tree climbing. Math and literacy emerge from the situation (counting sticks, mapping trails, rope knots).",
    strengths: "Resilience, risk assessment, sensory attunement, gross motor, calm, nature connection (the Village's core), executive function through self-directed play.",
    watchouts: "Climate/logistics for families; structured academics are thin by design (often paired with home academics); biases toward rural/privileged families without care.",
    evidence: "Moderate — strong evidence for wellbeing, motor skills, and nature connection; academic comparisons mixed (no deficit, no clear gain).",
    quests: ["Woodland Care", "Earthworks", "Gardening", "Tracking & Trailing", "Vitality"],
    esCore: "La naturaleza es el aula, todo el año y con cualquier clima. Riesgo, juego y herramientas reales desarrollan resiliencia."
  },
  {
    id: "vedic",
    name: "Vedic Gurukul & Ancient Traditions",
    esName: "Gurukul Védico",
    century: "Ancient India · 1500+ BCE",
    tag: "ancient", flag: "🕉️",
    core: "Learning as a way of life. Student lives with the teacher (guru), learns by memory, recitation, apprenticeship, and daily practice. Oral transmission built astonishing memory; mathematics (Sulba Sutras, Vedic math sutras) embedded in ritual and geometry.",
    looks: "Mantra recitation, mental math that looks like magic, apprenticeship in a craft or field, ethics and character woven into every lesson, nature study as reverence.",
    strengths: "Memory, mental calculation, reverence, character, depth over breadth, teacher-student bond.",
    watchouts: "Tradition can become rote; gender/caste dimensions in the historical form are not something to replicate; needs adaptation to modern values. Modern 'Vedic math' is a 20th-century compilation (Bharati Krishna Tirthaji) — useful techniques, ancient roots.",
    evidence: "Weak for outcomes (historical), but the memory/math techniques are genuinely useful and today teach place value, complements, and patterns beautifully.",
    quests: ["Commerce", "Community", "Natural Medicine"],
    esCore: "Aprender como forma de vida. Memoria, recitación, aprendizaje práctico con el maestro y ética en cada lección."
  },
  {
    id: "permaculture",
    name: "Permaculture & Craft Apprenticeship",
    esName: "Permacultura y Oficio",
    century: "Ancient guilds → 1978 Mollison & Holmgren",
    tag: "guild", flag: "🌾",
    core: "The Village's native curriculum. Learn by doing real work that matters, in a guild or family band, with a mentor, toward mastery that is demonstrated. Badges = guild journeyman marks. Nature's patterns are the design language.",
    looks: "This game. Every quest is a real skill: soil, fire, building, food, medicine, economics, community. Evidence of work is produced and witnessed (Otis!).",
    strengths: "Real competence, confidence that comes from making things work, ecological literacy, intergenerational learning, meaning.",
    watchouts: "Needs STRUCTURE to avoid aimlessness: the badge tiers, biome paths, and guilds provide it. Requires real work to be available (land, tools, family cooperation).",
    evidence: "The oldest method on Earth (apprenticeship); modern permaculture outcome data is anecdotal but the competency-based, mastery-model is well-supported by learning science.",
    quests: ["All — this is the spine"],
    esCore: "Aprender haciendo trabajo real, en un gremio, con un mentor, hacia la maestría demostrada. Las insignias son marcas de oficial."
  }
];

/* ---------- 2. LEARNING SCIENCE ---------- */
/* Each principle: what, why (neuroscience), how the Village already uses it,
 * how to use it at home, evidence label. */
const LEARNING_SCIENCE = [
  {
    name: "Retrieval Practice",
    esName: "Práctica de Recuerdo",
    what: "Testing yourself is learning, not just measuring. Pulling a memory out strengthens it more than re-reading.",
    why: "Each retrieval re-consolidates the memory trace; the effort itself triggers the strengthening (testing effect, Karpicke & Roediger).",
    village: "Repeating quests, re-verifying with Otis, earning the next tier, the Schoolhouse transcript — every re-do is a retrieval.",
    home: "Ask 'show me how' instead of 'remember what'. Have kids teach it back. Quiz over re-read, always.",
    evidence: "Strong — one of the most replicated effects in learning science."
  },
  {
    name: "Spaced Practice",
    esName: "Práctica Espaciada",
    what: "Little and often beats big and once. Memories built across days and weeks get durable; cramming evaporates.",
    why: "Sleep between practice sessions is when memories consolidate to long-term storage (hippocampus → neocortex).",
    village: "Quests are real-world and repeatable — a garden needs tending weekly, not once. The Sand→Straw→Wood→Iron ladder spaces mastery over real time.",
    home: "A small daily 10-minute practice beats a 2-hour weekly session. Revisit a skill after a break on purpose.",
    evidence: "Strong — spacing is among the most robust effects in the literature."
  },
  {
    name: "Interleaving",
    esName: "Intercalado",
    what: "Mixing related skills (rather than blocking one at a time) builds the ability to tell situations apart and choose the right tool.",
    why: "The brain learns contrasts; interleaved practice forces discrimination, which is what real life demands.",
    village: "The Quest Board mixes guilds; a family afternoon might do cooking + building + commerce. Free-Roam mode is interleaving by design.",
    home: "Rotate subjects in a session. 'Practice 3 kinds of problem' beats 'practice the same kind 20 times'.",
    evidence: "Moderate-strong — robust in motor and math learning; effect sizes vary by domain."
  },
  {
    name: "Elaboration & Story",
    esName: "Elaboración y Relato",
    what: "We remember what we can connect, explain, and story. Facts that hang on meaning and narrative stick; isolated facts don't.",
    why: "Memory is reconstructive — new knowledge binds to existing networks. Story recruits emotion, imagery, and sequence, giving the brain many hooks.",
    village: "Every quest has context, and Coyote storytelling is built into mentorship. Learn-More paths give the 'why' behind each skill.",
    home: "Ask 'why does this matter?' and 'how does this connect to what we already know?'. Tell the story of the skill before drilling it.",
    evidence: "Strong for narrative/elaborative encoding generally; moderate for its specific use in teaching."
  },
  {
    name: "Dual Coding",
    esName: "Codificación Dual",
    what: "Words PLUS images/senses beat words alone. The brain keeps verbal and visual traces separately; two traces = stronger memory.",
    why: "Dual-channel model (Paivio); motor and sensory involvement adds even more channels.",
    village: "Money Lab coloring sheets, SVG avatars, drawing in quests, building with hands — the game is naturally multimodal.",
    home: "Draw what you learned. Act it out. Build the model. Label the drawing. Never just read.",
    evidence: "Strong — well-supported for multimedia learning (Mayer)."
  },
  {
    name: "Generation Effect",
    esName: "Efecto de Generación",
    what: "Producing an answer (even a wrong guess) beats consuming the answer. Making something is stronger than watching something.",
    why: "Effortful production engages deeper processing; errors followed by feedback create powerful learning events.",
    village: "Kids produce evidence (photos, builds, reports) for Otis; they make the thing, not just watch it. The whole game is generate, not consume.",
    home: "Have kids predict before you tell. Let them attempt before correcting. Praise the effort and the revision.",
    evidence: "Strong — generation effect is well-replicated."
  },
  {
    name: "Sleep & Consolidation",
    esName: "Sueño y Consolidación",
    what: "Learning finishes while sleeping. Skimp on sleep and you lose most of the benefit of practice.",
    why: "Slow-wave sleep replays the day's patterns; synapses are pruned and strengthened overnight. Sleep-deprived children show poor memory and attention.",
    village: "Quest cadence is daily/weekly (not crammed); nature rhythm and seasonal pace protect sleep. The attendance tracker quietly respects rest.",
    home: "Protect bedtimes like curriculum. The last hour matters: wind down, screens off, story out loud.",
    evidence: "Strong — sleep and memory research is unambiguous."
  },
  {
    name: "Metacognition & Reflection",
    esName: "Metacognición y Reflexión",
    what: "Thinking about your own thinking — what worked, what didn't, what to try next — is the highest-leverage skill.",
    why: "Metacognitive monitoring engages the prefrontal cortex and improves self-regulated learning; learners who reflect transfer better.",
    village: "The Schoolhouse transcript, quest reflections, Money Lab journal, Mentor's Circle debriefs.",
    home: "End the day with a 3-question circle: What did I learn? What was hard? What will I try tomorrow?",
    evidence: "Strong — metacognitive strategy instruction shows consistent gains."
  },
  {
    name: "Zone of Proximal Development",
    esName: "Zona de Desarrollo Próximo",
    what: "The Goldilocks zone: work that's too easy bores, too hard discourages, just-right-with-help grows. Scaffolding then fading builds independence.",
    why: "Vygotsky's model matches modern neuroplasticity — challenge near the edge of ability drives new connections, especially with a more-skilled other.",
    village: "Tier progression (Sand→Iron), biome paths, and mentor roles are scaffolding by design. Quest difficulty steps up as badges are earned.",
    home: "Watch for the effort sweet spot. Help just enough — then step back. 'You try, I watch' after 'I do, you watch'.",
    evidence: "Strong theory, moderate direct measurement — a cornerstone of how humans learn skills."
  },
  {
    name: "Emotion, Stress & Safe Exploration",
    esName: "Emoción, Estrés y Exploración Segura",
    what: "Feeling safe is the precondition for learning. Threat shuts down the exploratory circuits; wonder opens them. Joy is a learning technology.",
    why: "Amygdala threat response diverts resources from prefrontal learning networks; positive emotion widens attention and boosts memory (noradrenaline/dopamine balance).",
    village: "Nature connection, sit spots, no-pressure Free-Roam mode, family warmth, celebration of effort — all lower threat, raise wonder.",
    home: "Connection before content. If a child is anxious, soothe first, teach second. Laugh together. Trust is the curriculum.",
    evidence: "Strong for stress impairment; moderate-strong for positive emotion facilitation."
  }
];

/* ---------- 3. GRAND MAP: curricula through time → outcomes in society ---------- */
const GRAND_MAP = [
  { era: "Prehistory–Ancient", node: "Oral Tradition & Initiation", desc: "Knowledge carried in story, song, and ceremony. Learning IS living with elders. Memory was a trained art (epic poems of thousands of lines).", outcome: "Deep ecological attunement; community cohesion built on shared narrative.", tag: "ancient" },
  { era: "Ancient India", node: "Gurukul & the Sutras", desc: "Apprentice-live with the guru. Vedic recitation trained extraordinary memory; Sulba Sutras encoded geometry in ritual; early place-value and zero were born here.", outcome: "Mental math and memory arts; spiritual-ethical framing of knowledge.", tag: "ancient" },
  { era: "Ancient Greece/Rome", node: "Socratic Dialogue & Rhetoric", desc: "Socrates questioned; Plato and Aristotle systematized; Rome added rhetoric and law, the trivium's seeds.", outcome: "Critical argument, civic literacy, the West's intellectual scaffolding.", tag: "ancient" },
  { era: "Medieval", node: "Guilds & Apprenticeship", desc: "The original mastery model: apprentice → journeyman → master. Learning by doing real work under a master, with demonstrated proof (the ancestor of Village badges).", outcome: "Craft identity, economic skill, the 'work = who you are' ethos.", tag: "guild" },
  { era: "17th–18th c", node: "The Enlightenment School", desc: "Comenius dreamed 'school for all'; Rousseau's Émile said childhood is its own stage and nature is the first teacher.", outcome: "Universal education ideal; the child as a being to be understood, not mini-adult.", tag: "modern" },
  { era: "19th c", node: "National Systems & the Romantics", desc: "Prussia built compulsory schooling (the model the modern world inherited); Pestalozzi and Froebel countered with head-heart-hands and the Kindergarten (play as curriculum).", outcome: "Mass literacy AND the first systematic alternatives — a tension we still live in.", tag: "modern" },
  { era: "Early 20th c", node: "The Great Innovators", desc: "Maria Montessori's prepared environment; Rudolf Steiner's Waldorf rhythm; John Dewey's learning-by-doing in democracy.", outcome: "Child-centered education enters the mainstream vocabulary; evidence still catching up a century later.", tag: "progressive" },
  { era: "Mid-20th c", node: "Democratic & Free Schools", desc: "A.S. Neill's Summerhill; Sudbury schools; the deschooling critique (Illich). Children govern and direct.", outcome: "Proof that self-direction is survivable — and often thriving; fuels the homeschooling boom.", tag: "freedom" },
  { era: "1970s–2000s", node: "Homeschooling & Unschooling", desc: "John Holt's 'unschooling'; Charlotte Mason revival; forest schools spread from Scandinavia; Reggio Emilia becomes world-famous.", outcome: "Millions of families leave the system; a live laboratory of alternative models, now cross-pollinating.", tag: "freedom" },
  { era: "Today", node: "Mastery + Self-Directed + AI", desc: "Khan-style mastery learning, game-based motivation, AI tutors (DeepTutor), and the Village's own blend: real-world quests, badge mastery, intergenerational mentorship.", outcome: "The individual child can now assemble a curriculum from all of history — which is exactly what this screen does.", tag: "now" }
];

/* ---------- 4. TIMELESS MATH (ancient & alternative methods) ---------- */
const TIMELESS_MATH = [
  {
    name: "Vedic — All from 9, Last from 10",
    esName: "Védico — Todo de 9, el último de 10",
    rule: "To subtract from 100, 1000, etc.: take each digit from 9, and the last digit from 10.",
    example: "1000 − 468 = 532  (9−4=5, 9−6=3, 10−8=2) — instant, no borrowing.",
    why: "Uses complements to a power of 10 — the same idea behind the 'borrow' algorithm, but pattern-trained so it becomes one motion.",
    age: "7+", tag: "vedic"
  },
  {
    name: "Vedic — Vertically & Crosswise",
    esName: "Védico — Vertical y Cruzado",
    rule: "2-digit multiplication in one line: multiply units (vertically), then cross-multiply and add, then tens (vertically).",
    example: "23 × 41: units 3×1=3; cross 2×1 + 3×4 = 2+12=14 (carry 1); tens 2×4+1=9 → 943.",
    why: "Encodes the algebra (20+3)(40+1) — trains the distributive law visually before algebra class.",
    age: "9+", tag: "vedic"
  },
  {
    name: "Vedic — Squaring numbers ending in 5",
    esName: "Védico — Cuadrados que terminan en 5",
    rule: "35²: multiply the tens digit by one more (3×4=12), then append 25 → 1225.",
    example: "85² = 8×9=72, append 25 → 7225. 105² = 10×11=110 → 11025.",
    why: "Algebraic identity (10a+5)² = 100a(a+1)+25. Beautiful pattern training.",
    age: "8+", tag: "vedic"
  },
  {
    name: "Russian Peasant Multiplication",
    esName: "Multiplicación Campesina Rusa",
    rule: "Halve one number (dropping halves), double the other; cross out even rows; add the rest.",
    example: "27×13: 27 13 / 13 26 / 6 52 ✗ / 3 104 / 1 208 → 13+26+104+208 = 351.",
    why: "Binary thinking in disguise — the doubling column is powers of 2, and the odd rows pick which powers to sum. It's how computers multiply.",
    age: "9+", tag: "ancient"
  },
  {
    name: "Egyptian Doubling",
    esName: "Duplicación Egipcia",
    rule: "Build a doubling table of the multiplier, mark the rows that sum to the other number, add their doubles.",
    example: "14×12: 1×12=12, 2×12=24, 4×12=48, 8×12=96; 14 = 8+4+2 → 96+48+24 = 168.",
    why: "The Nile scribes multiplied 4,000 years ago with only doubling and addition — place value understood as pure pattern.",
    age: "8+", tag: "ancient"
  },
  {
    name: "Chisenbop Finger Math",
    esName: "Matemática con Dedos (Chisenbop)",
    rule: "Each finger is a column: right thumb=5, right fingers 1–4; left hand is the tens place. Count to 99 on your own two hands.",
    example: "Left index (10) + right thumb (5) + right ring (3) = 18. Addition becomes a finger dance.",
    why: "Embodied number sense — the hands ARE an abacus; builds place-value intuition kinesthetically.",
    age: "5+", tag: "embodied"
  },
  {
    name: "Abacus (Soroban) Mental Math",
    esName: "Ábaco Mental",
    rule: "Learn the bead positions, then visualize the abacus in your head and 'move' beads mentally.",
    example: "Add 47+36 by imagining beads — children trained to 2nd/3rd dan routinely compute faster than calculators.",
    why: "Trains a visual-spatial number system; studies show improved working memory and arithmetic in abacus-trained kids.",
    age: "6+", tag: "embodied"
  },
  {
    name: "Trachtenberg Speed Addition",
    esName: "Adición Rápida de Trachtenberg",
    rule: "Add left-to-right, carrying reduced: 376+489+152+638 — add each column, keep a running total, adjust carries at the end.",
    example: "hundreds 3+4+1+6=14; tens 7+8+5+3=23; units 6+9+2+8=25 → 1400+230+25 = 1655.",
    why: "Left-to-right matches how we speak numbers — most people can hold a running total far better than they think.",
    age: "9+", tag: "modern"
  }
];

/* ---------- 5. BLUEPRINT BUILDER — the mix & match experiment ---------- */
/* Dimensions: slider poles. Archetypes: named blends matched by alignment. */
const BLUEPRINT_DIMS = [
  { id: "structure", label: "Structure", esLabel: "Estructura", lo: "Rigid timetable", hi: "Free flow", loShort: "Fixed", hiShort: "Free" },
  { id: "adult", label: "Adult's Role", esLabel: "Rol del adulto", lo: "Teacher leads", hi: "Child leads", loShort: "Teacher-led", hiShort: "Child-led" },
  { id: "nature", label: "Nature", esLabel: "Naturaleza", lo: "Indoors & materials", hi: "Outdoors & wild", loShort: "Indoor", hiShort: "Wild" },
  { id: "arts", label: "Arts vs Academics", esLabel: "Artes vs Académico", lo: "Arts, story, hands", hi: "Academics, text, logic", loShort: "Arts", hiShort: "Academic" },
  { id: "pace", label: "Pace", esLabel: "Ritmo", lo: "Slow & deep / mastery", hi: "Broad & fast / coverage", loShort: "Deep", hiShort: "Broad" },
  { id: "community", label: "Community", esLabel: "Comunidad", lo: "Solo & independent", hi: "Guild & mentor-heavy", loShort: "Solo", hiShort: "Guild" }
];

const BLUEPRINT_ARCHETYPES = [
  {
    name: "The Wild Scholar",
    esName: "El Erudito Salvaje",
    fit: { structure: "hi", adult: "hi", nature: "hi", arts: "lo", pace: "lo", community: "hi" },
    desc: "Nature-led, child-driven, deep-dive learning with strong mentorship. Forest School + unschooling + apprenticeship, held by trusting adults who keep the wild available.",
    esDesc: "Aprendizaje guiado por la naturaleza, profundo y autodirigido, con mentoría fuerte.",
    quests: ["Woodland Care", "Tracking & Trailing", "Gardening", "Vitality"]
  },
  {
    name: "The Prepared Home",
    esName: "El Hogar Preparado",
    fit: { structure: "lo", adult: "lo", nature: "lo", arts: "lo", pace: "lo", community: "lo" },
    desc: "Montessori-flavored: order, choice, practical life, and independence. The environment teaches; the adult prepares and steps back. Smooth, calm, capable.",
    esDesc: "Estilo Montessori: orden, elección, vida práctica e independencia.",
    quests: ["Food Prep", "Community", "Commerce"]
  },
  {
    name: "The Rhythmic Hearth",
    esName: "El Hogar Rítmico",
    fit: { structure: "lo", adult: "lo", nature: "hi", arts: "lo", pace: "lo", community: "hi" },
    desc: "Waldorf-tinged: rhythm, story, handwork, nature, and art as the spine, with academics emerging when the child is ready. Festivals, music, and family warmth.",
    esDesc: "Inspirado en Waldorf: ritmo, cuento, manualidades, naturaleza y arte.",
    quests: ["Vitality", "Community", "Gardening", "Natural Medicine"]
  },
  {
    name: "The Trivium Guild",
    esName: "El Gremio del Trivium",
    fit: { structure: "lo", adult: "lo", nature: "lo", arts: "hi", pace: "hi", community: "lo" },
    desc: "Classical rigor + guild mastery: memory in the grammar years, logic and debate in the middle, rhetoric and real projects at the end. Text-heavy, argument-rich.",
    esDesc: "Rigor clásico + maestría gremial: memoria, lógica, retórica y proyectos reales.",
    quests: ["Constitution", "Commerce", "Electricity"]
  },
  {
    name: "The Free Range",
    esName: "El Libre",
    fit: { structure: "hi", adult: "hi", nature: "hi", arts: "lo", pace: "hi", community: "hi" },
    desc: "Unschooling with a nature bias: trust the learner completely, follow interests, keep the wild and real work available, let mastery emerge from love.",
    esDesc: "Unschooling con sesgo natural: confía plenamente en quien aprende y sigue sus intereses.",
    quests: ["All — Free-Roam mode"]
  },
  {
    name: "The Common Soil",
    esName: "La Tierra Común",
    fit: { structure: "lo", adult: "hi", nature: "lo", arts: "lo", pace: "lo", community: "lo" },
    desc: "Charlotte Mason x Permaculture: living books, nature journaling, habits, short focused mornings, and long afternoons of real work in the garden and kitchen with the family band.",
    esDesc: "Charlotte Mason × Permacultura: libros vivos, diario de naturaleza, hábitos y trabajo real.",
    quests: ["Gardening", "Food Prep", "Natural Medicine", "Woodland Care"]
  },
  {
    name: "The Balanced Blend",
    esName: "La Mezcla Equilibrada",
    fit: {},
    desc: "A custom hand-built blend — the family curates elements from every tradition into something genuinely its own. This is the Village way: born of attention, not allegiance.",
    esDesc: "Una mezcla propia: la familia elige elementos de cada tradición.",
    quests: ["Pick what calls to you"]
  }
];

/* ---------- 6. NATURE CONNECTION RHYTHM (Coyote mentoring as curriculum) ---------- */
const NATURE_RHYTHM = {
  intro: "Deep nature connection isn't a subject — it's a rhythm. The Coyote Mentoring tradition organizes it as daily, weekly, and seasonal practices that build sensory literacy over years.",
  daily: ["Sit Spot — same place, 10 quiet minutes, eyes and ears open", "Bird language check — what are the birds saying about the moment?", "One gratitude — thanksgiving as a way of seeing"],
  weekly: ["One nature quest from the board (tracking, foraging, building)", "Storytelling evening — tell what you noticed, hear what others saw", "Wander — an unhurried family walk with no destination"],
  seasonal: ["Follow the 8 Shields: the year has phases (healing, tracking, harvesting, storytelling)", "Plant, tend, harvest — garden rhythm is curriculum", "Seasonal feast — celebrate what the land gave, with hands that grew it"],
  mentoring: ["Model, don't lecture — let children watch you notice", "Meet them where they are — a 50/50 balance of child-led and elder-led", "The errand principle — give meaningful tasks, not exercises"]
};