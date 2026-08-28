/* ============================================================
 * The Village — Learning Lab data (v2)
 * Curriculum Gallery · Learning Science · Grand Map · Timeless Math · Blueprint Builder
 * Evidence-honest by design — AND evidence-broad by design:
 * each claim carries a "medium" so you can see WHERE the evidence lives:
 * benchmark study · longitudinal · practitioner documentation ·
 * author synthesis · oral tradition · qualitative study.
 * Western benchmark studies are not the only place truth lives.
 * ============================================================ */

/* ---------- 1. CURRICULUM GALLERY ---------- */
/* Each approach: core, looks, strengths, watch-outs, verdict, evidence_depth
 * (multi-medium evidence), authors (books/voices), quests, tag(s). */
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
    verdict: "Moderate benchmark evidence — and over a century of practitioner documentation.",
    evidence_depth: [
      { source: "Lillard & Else-Quest, Science (2006); Lillard et al., PLOS ONE (2017)", claim: "Montessori children showed better executive function, social skills and academic outcomes vs. conventional preschool in lottery/adjusted comparisons.", medium: "benchmark study", confidence: "Moderate", year: "2006/2017" },
      { source: "Montessori's own writings (The Absorbent Mind, 1949) + 100+ years of classroom practice", claim: "The prepared environment and sensitive periods are documented across a century of practitioner observation, not one controlled trial.", medium: "practitioner documentation", confidence: "High (practice), Moderate (outcome)", year: "1907–today" },
      { source: "Maria Montessori", claim: "\"Never help a child with a task at which he feels he can succeed.\"", medium: "author synthesis", confidence: "—", year: "1949" }
    ],
    authors: [{ name: "Maria Montessori", work: "The Absorbent Mind; The Secret of Childhood", point: "The founder's own observation-based pedagogy — the original documentation." }, { name: "Angeline Lillard", work: "Montessori: The Science Behind the Genius (2005)", point: "The most thorough bridge between Montessori practice and developmental psychology." }],
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
    verdict: "Thin in Western benchmark trials — rich in alumni and qualitative documentation. The 'lack of evidence' is partly a lack of looking.",
    evidence_depth: [
      { source: "Oberman (2008) qualitative study of Waldorf alumni; Stehlik, ACER (2003)", claim: "Waldorf graduates consistently report love of learning, creativity, and adaptability; academics catch up by middle grades.", medium: "qualitative study / alumni survey", confidence: "Moderate", year: "2003/2008" },
      { source: "Steiner's lectures + 100 years of school documentation", claim: "The developmental phasing (7-year rhythm) is documented across a century of practice and observation — a living tradition, not a laboratory result.", medium: "practitioner documentation", confidence: "High (practice)", year: "1919–today" },
      { source: "Richard Louv's nature-deficit synthesis", claim: "Waldorf's outdoor/festival rhythm aligns with the documented benefits of nature contact on attention and wellbeing.", medium: "author synthesis", confidence: "Moderate", year: "2005" }
    ],
    authors: [{ name: "Rudolf Steiner", work: "The Foundations of Human Experience (1919 lectures)", point: "The founder — read as an artist-scientist of human development, then test the practices honestly." }, { name: "Douglas Gabriel", work: "Spirit of Childhood (free PDF); The Eternal Curriculum for Wisdom Children (free PDF); Understanding the Ethers — eternalcurriculum.com / ourspirit.com", point: "Waldorf teacher-trainer whose free curriculum books and courses make Steiner's pedagogy practically usable at home — the 'how to actually do it' voice." }, { name: "Jon Young / 8 Shields", work: "Coyote's Guide to Connecting with Nature (2010)", point: "Independent nature-connection tradition that parallels Waldorf's rhythm and story methods." }, { name: "Richard Louv", work: "Last Child in the Woods (2005)", point: "The case for why imagination, story and nature belong at the center — which Waldorf quietly predicted." }],
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
    verdict: "Moderate benchmark evidence, decades of practitioner documentation, and a growing international self-directed school movement.",
    evidence_depth: [
      { source: "Gray & Riley, Other Education (2013)", claim: "Self-reported outcomes of unschooled adults: most pursued higher education/careers and report strong well-being and self-direction.", medium: "qualitative survey", confidence: "Moderate (selection effects)", year: "2013" },
      { source: "Gray (2017), Oxford Research Encyclopedia of Education", claim: "Review of self-directed and democratic education across Sudbury and unschooling communities.", medium: "author synthesis", confidence: "Moderate", year: "2017" },
      { source: "Sudbury Valley School 50-year documentation", claim: "A half-century of students who largely direct their own education, documented by the school (The Pursuit of Happiness, 1992 book).", medium: "practitioner documentation", confidence: "High (practice)", year: "1968–today" },
      { source: "Peter Gray, Free to Learn (2013)", claim: "Play and freedom as evolutionary learning mechanisms — the anthropological case.", medium: "author synthesis", confidence: "Moderate", year: "2013" }
    ],
    authors: [{ name: "John Holt", work: "How Children Fail (1964); Instead of Education (1976)", point: "The founder of the modern unschooling movement — teacher turned doubter of schools." }, { name: "Peter Gray", work: "Free to Learn (2013)", point: "The research voice of self-directed education; evolutionary psychology of play." }, { name: "A.S. Neill", work: "Summerhill (1960)", point: "The original democratic free school, operating since 1921." }],
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
    verdict: "Weak direct benchmark evidence; strong 2,500-year intellectual lineage — the evidence is the tradition itself plus rhetorical training research.",
    evidence_depth: [
      { source: "Marrou, A History of Education in Antiquity (1956)", claim: "Documents the Greek/Roman trivium-quadrivium system and why it dominated for a millennium.", medium: "historical scholarship", confidence: "High (history)", year: "1956" },
      { source: "Rhetoric & argumentation research (modern)", claim: "Debate and argumentation training measurably improve critical thinking and writing (e.g., Kuhn 2005 argumentation studies).", medium: "benchmark study", confidence: "Moderate", year: "2005" },
      { source: "Dorothy Sayers, 'The Lost Tools of Learning' (1947)", claim: "The modern classical revival essay — a theory, not a study; treat the stage-mapping as a hypothesis.", medium: "author synthesis", confidence: "Low (as evidence)", year: "1947" }
    ],
    authors: [{ name: "Plato & Aristotle", work: "The Republic; Rhetoric", point: "The original source — education as the shaping of the soul and the citizen." }, { name: "Quintilian", work: "Institutio Oratoria (c. 95 CE)", point: "The first complete classical pedagogy — the trivium codified by a Roman teacher." }, { name: "Dorothy Sayers", work: "The Lost Tools of Learning (1947)", point: "The spark of the modern classical homeschooling revival." }],
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
    verdict: "Aligns strongly with modern reading-science (background knowledge, narrative comprehension) and nature-contact research — even though she wrote a century before either existed.",
    evidence_depth: [
      { source: "Willingham, The Reading Mind (2017); background-knowledge research", claim: "Comprehension depends on broad background knowledge — exactly what 'living books' and rich nature study build.", medium: "benchmark synthesis", confidence: "Strong", year: "2017" },
      { source: "Kuo, Barnes & Jordan, Frontiers in Psychology (2019)", claim: "Nature contact supports attention, self-discipline and learning — Mason's afternoon-outdoors doctrine vindicated.", medium: "benchmark study", confidence: "Strong", year: "2019" },
      { source: "Charlotte Mason's six-volume Original Homeschooling Series", claim: "A complete practitioner documentation of the method, tested on thousands of students in the PNEU schools (1890s–1920s).", medium: "practitioner documentation", confidence: "High (practice)", year: "1886–1923" }
    ],
    authors: [{ name: "Charlotte Mason", work: "Home Education (1886)", point: "The founder — a teacher who systematized 'living books, narration, nature study' and ran a network of schools on it." }, { name: "Daniel Willingham", work: "The Reading Mind (2017)", point: "Modern reading scientist whose findings align with Mason's methods." }, { name: "Richard Louv", work: "Vitamin N (2016)", point: "The modern nature-contact prescription for families — a Mason inheritance." }],
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
    verdict: "Strong qualitative and comparative documentation from the schools themselves; the 'documentation makes thinking visible' practice is itself the evidence engine.",
    evidence_depth: [
      { source: "Edwards, Gandini & Forman, The Hundred Languages of Children (1998)", claim: "The definitive practitioner documentation of the Reggio approach — projects, transcripts, and children's own work.", medium: "practitioner documentation", confidence: "High (practice)", year: "1998" },
      { source: "International comparative work on Reggio-inspired programs (e.g., New Zealand, US preschool studies)", claim: "Consistent gains reported in creativity, collaboration and metacognitive talk.", medium: "qualitative study", confidence: "Moderate", year: "2000s" },
      { source: "Project-based learning meta-reviews (Hmelo-Silver 2004; Chen & Yang 2019)", claim: "PBL generally improves skills and retention vs. direct instruction in well-run settings — Reggio is PBL's early-childhood crown jewel.", medium: "benchmark synthesis", confidence: "Moderate-strong", year: "2004/2019" }
    ],
    authors: [{ name: "Loris Malaguzzi", work: "The Hundred Languages of Children (interviews)", point: "The founder — his words ARE the primary documentation." }, { name: "Carla Rinaldi", work: "In Dialogue with Reggio Emilia (2006)", point: "The pedagogical documentation tradition, explained by its second voice." }],
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
    verdict: "Strong evidence for wellbeing, motor skills and nature connection; the academic deficit question is a mismatch — forest school does not claim to be an academic program.",
    evidence_depth: [
      { source: "O'Brien & Murray, Forest School England (Forest Research/NEF, 2007)", claim: "Longitudinal evaluation: confidence, social skills, language and motivation improved; the key was repeated sessions over time.", medium: "longitudinal", confidence: "Moderate", year: "2007" },
      { source: "Kuo et al. (2019), Frontiers in Psychology; Chawla (2015)", claim: "Nature contact boosts attention, self-discipline, stress recovery and learning readiness — the biomechanism behind forest school.", medium: "benchmark study", confidence: "Strong", year: "2019" },
      { source: "Richard Louv, Last Child in the Woods (2005)", claim: "'Nature deficit disorder' — the synthesis that made 'time in nature' a mainstream health/learning priority.", medium: "author synthesis", confidence: "High (as catalyst)", year: "2005" },
      { source: "Jon Young & the 8 Shields tradition", claim: "Deep nature connection as a lifetime practice: tracking, sit spots, bird language — practitioner documentation over decades.", medium: "practitioner documentation / oral tradition", confidence: "High (practice)", year: "1980s–today" }
    ],
    authors: [{ name: "Richard Louv", work: "Last Child in the Woods (2005); Vitamin N (2016)", point: "The name and the case for nature-deficit; a library of real practices in Vitamin N." }, { name: "Jon Young", work: "Coyote's Guide to Connecting with Nature (2010); What the Robin Knows (2012)", point: "Deep nature connection mentoring — the 8 Shields model, sit spots, bird language." }, { name: "Tom Brown Jr.", work: "The Tracker (1978) + field guides", point: "The lineage root of modern tracking/connection mentoring (see Coyote Mentoring in-game)." }],
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
    verdict: "No Western benchmark studies — the evidence lives in the tradition itself plus modern math-history and memory research that vindicates the methods.",
    evidence_depth: [
      { source: "George Gheverghese Joseph, The Crest of the Peacock (1991)", claim: "Documents the mathematical achievements of India (and other non-European traditions) that standard histories erased — place value, zero, Sulba geometry, infinite series.", medium: "historical scholarship", confidence: "High (history)", year: "1991" },
      { source: "Modern memory research on oral transmission", claim: "Trained oral memory (epic recitation, exacting recitation traditions) produces remarkable verbatim recall — the gurukul method was memory training at scale (cf. Rubin, Memory in Oral Traditions).", medium: "benchmark study", confidence: "Moderate", year: "1995" },
      { source: "Bharati Krishna Tirthaji, Vedic Mathematics (1965)", claim: "Sutras like 'all from 9, last from 10' and 'vertically & crosswise' are fast, pattern-based arithmetic — today's teachers use them to build number sense.", medium: "practitioner documentation", confidence: "High (technique)", year: "1965" },
      { source: "Indigenous knowledge systems scholarship", claim: "Across cultures, oral/apprenticeship education carries sophisticated mathematics and ecology that was ignored until 'ethnomathematics' (Ubiratan D'Ambrosio) made it visible.", medium: "author synthesis", confidence: "Moderate", year: "1985–today" }
    ],
    authors: [{ name: "Bharati Krishna Tirthaji", work: "Vedic Mathematics (1965)", point: "The 16 sutras — a mental-math toolbox drawn from the Vedic tradition." }, { name: "George Gheverghese Joseph", work: "The Crest of the Peacock (1991)", point: "The great decolonizing history of mathematics — see the Indian and other traditions whole." }, { name: "Ubiratan D'Ambrosio", work: "Ethnomathematics (1985+)", point: "The framework that takes every culture's mathematics seriously." }],
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
    verdict: "The oldest method on Earth (apprenticeship); the competency/mastery model is well-supported by learning science; permaculture outcome data is practice-documented more than benchmarked.",
    evidence_depth: [
      { source: "Bloom, 'Learning for Mastery' (1968); modern mastery-learning research", claim: "Competency-based mastery (demonstrate skill → advance) reliably improves achievement vs. time-based coverage — the badge ladder in one sentence.", medium: "benchmark study", confidence: "Strong", year: "1968+ (replicated)" },
      { source: "Apprenticeship literature (Collins, Brown & Newman 1989)", claim: "Apprenticeship is the canonical model of situated, authentic learning — cognitive apprenticeship research formalizes what guilds always knew.", medium: "benchmark synthesis", confidence: "Strong", year: "1989" },
      { source: "Mollison & Holmgren, Permaculture One (1978); Permies.com's 22-badge system (Paul Wheaton)", claim: "40+ years of global practice documentation: food forests, earthworks, natural building — outcomes in soil, health and community, not journal metrics.", medium: "practitioner documentation", confidence: "High (practice)", year: "1978–today" }
    ],
    authors: [{ name: "Bill Mollison & David Holmgren", work: "Permaculture One (1978); Designers' Manual (1988)", point: "The founders — design science for permanent agriculture." }, { name: "Paul Wheaton", work: "Permies.com badge system", point: "The real-world badge (PEP/SKIP) system The Village adapts." }, { name: "Collins, Brown & Newman", work: "Cognitive Apprenticeship (1989)", point: "The research articulation of learn-by-doing-with-a-master." }],
    quests: ["All — this is the spine"],
    esCore: "Aprender haciendo trabajo real, en un gremio, con un mentor, hacia la maestría demostrada. Las insignias son marcas de oficial."
  }
];

/* ---------- 2. LEARNING SCIENCE ---------- */
/* Each principle: what, why (neuroscience), how the Village uses it, at home,
 * evidence label, sources (real, citable). */
const LEARNING_SCIENCE = [
  {
    name: "Retrieval Practice",
    esName: "Práctica de Recuerdo",
    what: "Testing yourself is learning, not just measuring. Pulling a memory out strengthens it more than re-reading.",
    why: "Each retrieval re-consolidates the memory trace; the effort itself triggers the strengthening (testing effect).",
    village: "Repeating quests, re-verifying with Otis, earning the next tier, the Schoolhouse transcript — every re-do is a retrieval.",
    home: "Ask 'show me how' instead of 'remember what'. Have kids teach it back. Quiz over re-read, always.",
    evidence: "Strong — one of the most replicated effects in learning science.",
    sources: [{ name: "Karpicke & Roediger", work: "Science, 2008" }, { name: "Dunlosky et al.", work: "Psych Science in the Public Interest, 2013" }]
  },
  {
    name: "Spaced Practice",
    esName: "Práctica Espaciada",
    what: "Little and often beats big and once. Memories built across days and weeks get durable; cramming evaporates.",
    why: "Sleep between practice sessions is when memories consolidate to long-term storage (hippocampus → neocortex).",
    village: "Quests are real-world and repeatable — a garden needs tending weekly, not once. The Sand→Straw→Wood→Iron ladder spaces mastery over real time.",
    home: "A small daily 10-minute practice beats a 2-hour weekly session. Revisit a skill after a break on purpose.",
    evidence: "Strong — spacing is among the most robust effects in the literature.",
    sources: [{ name: "Cepeda et al.", work: "Psychological Bulletin, 2006" }, { name: "Rasch & Born", work: "Neuroscientist, 2013 (sleep & consolidation)" }]
  },
  {
    name: "Interleaving",
    esName: "Intercalado",
    what: "Mixing related skills (rather than blocking one at a time) builds the ability to tell situations apart and choose the right tool.",
    why: "The brain learns contrasts; interleaved practice forces discrimination, which is what real life demands.",
    village: "The Quest Board mixes guilds; a family afternoon might do cooking + building + commerce. Free-Roam mode is interleaving by design.",
    home: "Rotate subjects in a session. 'Practice 3 kinds of problem' beats 'practice the same kind 20 times'.",
    evidence: "Moderate-strong — robust in motor and math learning; effect sizes vary by domain.",
    sources: [{ name: "Rohrer & Taylor", work: "Journal of Educational Psychology, 2007" }]
  },
  {
    name: "Elaboration & Story",
    esName: "Elaboración y Relato",
    what: "We remember what we can connect, explain, and story. Facts that hang on meaning and narrative stick; isolated facts don't.",
    why: "Memory is reconstructive — new knowledge binds to existing networks. Story recruits emotion, imagery, and sequence, giving the brain many hooks.",
    village: "Every quest has context, and Coyote storytelling is built into mentorship. Learn-More paths give the 'why' behind each skill.",
    home: "Ask 'why does this matter?' and 'how does this connect to what we already know?'. Tell the story of the skill before drilling it.",
    evidence: "Strong for narrative/elaborative encoding generally; moderate for its specific use in teaching.",
    sources: [{ name: "Willingham", work: "The Reading Mind, 2017" }, { name: "Jon Young", work: "Coyote's Guide, 2010 (story as pedagogy)" }]
  },
  {
    name: "Dual Coding",
    esName: "Codificación Dual",
    what: "Words PLUS images/senses beat words alone. The brain keeps verbal and visual traces separately; two traces = stronger memory.",
    why: "Dual-channel model (Paivio); motor and sensory involvement adds even more channels.",
    village: "Money Lab coloring sheets, SVG avatars, drawing in quests, building with hands — the game is naturally multimodal.",
    home: "Draw what you learned. Act it out. Build the model. Label the drawing. Never just read.",
    evidence: "Strong — well-supported for multimedia learning (Mayer).",
    sources: [{ name: "Paivio", work: "Mental Representations, 1986" }, { name: "Mayer", work: "Multimedia Learning, 2001" }]
  },
  {
    name: "Generation Effect",
    esName: "Efecto de Generación",
    what: "Producing an answer (even a wrong guess) beats consuming the answer. Making something is stronger than watching something.",
    why: "Effortful production engages deeper processing; errors followed by feedback create powerful learning events.",
    village: "Kids produce evidence (photos, builds, reports) for Otis; they make the thing, not just watch it. The whole game is generate, not consume.",
    home: "Have kids predict before you tell. Let them attempt before correcting. Praise the effort and the revision.",
    evidence: "Strong — generation effect is well-replicated.",
    sources: [{ name: "Slamecka & Graf", work: "Journal of Verbal Learning, 1978" }]
  },
  {
    name: "Sleep & Consolidation",
    esName: "Sueño y Consolidación",
    what: "Learning finishes while sleeping. Skimp on sleep and you lose most of the benefit of practice.",
    why: "Slow-wave sleep replays the day's patterns; synapses are pruned and strengthened overnight. Sleep-deprived children show poor memory and attention.",
    village: "Quest cadence is daily/weekly (not crammed); nature rhythm and seasonal pace protect sleep. The attendance tracker quietly respects rest.",
    home: "Protect bedtimes like curriculum. The last hour matters: wind down, screens off, story out loud.",
    evidence: "Strong — sleep and memory research is unambiguous.",
    sources: [{ name: "Walker & Stickgold", work: "Sleep and Memory, 2004+" }]
  },
  {
    name: "Metacognition & Reflection",
    esName: "Metacognición y Reflexión",
    what: "Thinking about your own thinking — what worked, what didn't, what to try next — is the highest-leverage skill.",
    why: "Metacognitive monitoring engages the prefrontal cortex and improves self-regulated learning; learners who reflect transfer better.",
    village: "The Schoolhouse transcript, quest reflections, Money Lab journal, Mentor's Circle debriefs.",
    home: "End the day with a 3-question circle: What did I learn? What was hard? What will I try tomorrow?",
    evidence: "Strong — metacognitive strategy instruction shows consistent gains.",
    sources: [{ name: "Dunlosky et al.", work: "2013" }, { name: "Reggio documentation tradition", work: "Rinaldi, 2006" }]
  },
  {
    name: "Zone of Proximal Development",
    esName: "Zona de Desarrollo Próximo",
    what: "The Goldilocks zone: work that's too easy bores, too hard discourages, just-right-with-help grows. Scaffolding then fading builds independence.",
    why: "Vygotsky's model matches modern neuroplasticity — challenge near the edge of ability drives new connections, especially with a more-skilled other.",
    village: "Tier progression (Sand→Iron), biome paths, and mentor roles are scaffolding by design. Quest difficulty steps up as badges are earned.",
    home: "Watch for the effort sweet spot. Help just enough — then step back. 'You try, I watch' after 'I do, you watch'.",
    evidence: "Strong theory, moderate direct measurement — a cornerstone of how humans learn skills.",
    sources: [{ name: "Vygotsky", work: "Mind in Society, 1978" }]
  },
  {
    name: "Emotion, Stress & Safe Exploration",
    esName: "Emoción, Estrés y Exploración Segura",
    what: "Feeling safe is the precondition for learning. Threat shuts down the exploratory circuits; wonder opens them. Joy is a learning technology.",
    why: "Amygdala threat response diverts resources from prefrontal learning networks; positive emotion widens attention and boosts memory (noradrenaline/dopamine balance).",
    village: "Nature connection, sit spots, no-pressure Free-Roam mode, family warmth, celebration of effort — all lower threat, raise wonder.",
    home: "Connection before content. If a child is anxious, soothe first, teach second. Laugh together. Trust is the curriculum.",
    evidence: "Strong for stress impairment; moderate-strong for positive emotion facilitation.",
    sources: [{ name: "Shonkoff & Garner", work: "Pediatrics, 2012 (toxic stress)" }, { name: "Louv", work: "Last Child in the Woods, 2005 (restorative nature)" }]
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
  { name: "Vedic — All from 9, Last from 10", esName: "Védico — Todo de 9, el último de 10",
    rule: "To subtract from 100, 1000, etc.: take each digit from 9, and the last digit from 10.",
    example: "1000 − 468 = 532  (9−4=5, 9−6=3, 10−8=2) — instant, no borrowing.",
    why: "Uses complements to a power of 10 — the same idea behind the 'borrow' algorithm, but pattern-trained so it becomes one motion.",
    age: "7+", tag: "vedic" },
  { name: "Vedic — Vertically & Crosswise", esName: "Védico — Vertical y Cruzado",
    rule: "2-digit multiplication in one line: multiply units (vertically), then cross-multiply and add, then tens (vertically).",
    example: "23 × 41: units 3×1=3; cross 2×1 + 3×4 = 2+12=14 (carry 1); tens 2×4+1=9 → 943.",
    why: "Encodes the algebra (20+3)(40+1) — trains the distributive law visually before algebra class.",
    age: "9+", tag: "vedic" },
  { name: "Vedic — Squaring numbers ending in 5", esName: "Védico — Cuadrados que terminan en 5",
    rule: "35²: multiply the tens digit by one more (3×4=12), then append 25 → 1225.",
    example: "85² = 8×9=72, append 25 → 7225. 105² = 10×11=110 → 11025.",
    why: "Algebraic identity (10a+5)² = 100a(a+1)+25. Beautiful pattern training.",
    age: "8+", tag: "vedic" },
  { name: "Russian Peasant Multiplication", esName: "Multiplicación Campesina Rusa",
    rule: "Halve one number (dropping halves), double the other; cross out even rows; add the rest.",
    example: "27×13: 27 13 / 13 26 / 6 52 ✗ / 3 104 / 1 208 → 13+26+104+208 = 351.",
    why: "Binary thinking in disguise — the doubling column is powers of 2, and the odd rows pick which powers to sum. It's how computers multiply.",
    age: "9+", tag: "ancient" },
  { name: "Egyptian Doubling", esName: "Duplicación Egipcia",
    rule: "Build a doubling table of the multiplier, mark the rows that sum to the other number, add their doubles.",
    example: "14×12: 1×12=12, 2×12=24, 4×12=48, 8×12=96; 14 = 8+4+2 → 96+48+24 = 168.",
    why: "The Nile scribes multiplied 4,000 years ago with only doubling and addition — place value understood as pure pattern.",
    age: "8+", tag: "ancient" },
  { name: "Chisenbop Finger Math", esName: "Matemática con Dedos (Chisenbop)",
    rule: "Each finger is a column: right thumb=5, right fingers 1–4; left hand is the tens place. Count to 99 on your own two hands.",
    example: "Left index (10) + right thumb (5) + right ring (3) = 18. Addition becomes a finger dance.",
    why: "Embodied number sense — the hands ARE an abacus; builds place-value intuition kinesthetically.",
    age: "5+", tag: "embodied" },
  { name: "Abacus (Soroban) Mental Math", esName: "Ábaco Mental",
    rule: "Learn the bead positions, then visualize the abacus in your head and 'move' beads mentally.",
    example: "Add 47+36 by imagining beads — children trained to 2nd/3rd dan routinely compute faster than calculators.",
    why: "Trains a visual-spatial number system; studies show improved working memory and arithmetic in abacus-trained kids.",
    age: "6+", tag: "embodied" },
  { name: "Trachtenberg Speed Addition", esName: "Adición Rápida de Trachtenberg",
    rule: "Add left-to-right, carrying reduced: 376+489+152+638 — add each column, keep a running total, adjust carries at the end.",
    example: "hundreds 3+4+1+6=14; tens 7+8+5+3=23; units 6+9+2+8=25 → 1400+230+25 = 1655.",
    why: "Left-to-right matches how we speak numbers — most people can hold a running total far better than they think.",
    age: "9+", tag: "modern" }
];

/* ---------- 5. BLUEPRINT BUILDER — the mix & match experiment ---------- */
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
    longDesc: "The Wild Scholar blends the nature-connection traditions (Louv, Jon Young, 8 Shields, forest school) with the trust of self-directed education and the depth of apprenticeship. The wild is the classroom; the mentor curates opportunity, not content; mastery is demonstrated, not tested. Strongest where land, tools, and mentors are available — the Village quest board is its natural habitat.",
    books: [
      { name: "Richard Louv", work: "Last Child in the Woods (2005); Vitamin N (2016)", line: "The case and the practical prescription for nature-rich childhood." },
      { name: "Jon Young, Ellen Haas & Evan McGown", work: "Coyote's Guide to Connecting with Nature (2010)", line: "The 8 Shields framework — sit spots, bird language, the errand principle. The Village's mentoring spine." },
      { name: "Tom Brown Jr.", work: "The Tracker (1978)", line: "Deep connection lineage: awareness exercises and tracking as a way of life." },
      { name: "Peter Gray", work: "Free to Learn (2013)", line: "Evolutionary case for self-directed play as the native learning mode." }
    ],
    evidence: "Strongest on wellbeing, attention, self-discipline and nature connection (Kuo et al. 2019; O'Brien & Murray 2007); academic parity documented but not 'boosted' — that is not its claim. Its evidence lives as much in practitioner documentation (8 Shields, forest school networks) as in studies.",
    practices: ["Daily sit spot + bird language check", "One real wild quest a week (tracking, foraging, building)", "Child chooses the deep-dive topic; mentor scaffolds and fades", "Demonstrate mastery before moving on (badge = journeyman mark)", "Storytelling circle weekly — what did the land say this week?"],
    quests: ["Woodland Care", "Tracking & Trailing", "Gardening", "Vitality"]
  },
  {
    name: "The Prepared Home",
    esName: "El Hogar Preparado",
    fit: { structure: "lo", adult: "lo", nature: "lo", arts: "lo", pace: "lo", community: "lo" },
    desc: "Montessori-flavored: order, choice, practical life, and independence. The environment teaches; the adult prepares and steps back. Smooth, calm, capable.",
    esDesc: "Estilo Montessori: orden, elección, vida práctica e independencia.",
    longDesc: "The Prepared Home makes the household itself the curriculum: a shelf, a rhythm, real tools at child height, and work that matters (cooking, cleaning, caring). The adult's job is preparation and observation — the environment teaches. Strongest with young children (2–8) and where a parent can tend the order. Independence and concentration are the goals; the Schoolhouse tracker quietly logs the hours.",
    books: [
      { name: "Maria Montessori", work: "The Absorbent Mind (1949); The Secret of Childhood (1936)", line: "The foundation — observation-based pedagogy for the first plane of development." },
      { name: "Angeline Lillard", work: "Montessori: The Science Behind the Genius (2005)", line: "Bridges Montessori practice to developmental science, honestly." },
      { name: "Simone Davies", work: "The Montessori Toddler (2019)", line: "Practical, modern household application." }
    ],
    evidence: "Moderate benchmark support (Lillard & Else-Quest 2006; Lillard et al. 2017 — EF and social gains vs conventional preschool) plus a century of practitioner documentation.",
    practices: ["Prepared low shelves: child chooses, uses, returns", "Practical life is curriculum: pouring, sweeping, food prep", "Long uninterrupted concentration blocks", "Adult observes and prepares; waits to be asked", "Order in space, time, and expectations"],
    quests: ["Food Prep", "Community", "Commerce"]
  },
  {
    name: "The Rhythmic Hearth",
    esName: "El Hogar Rítmico",
    fit: { structure: "lo", adult: "lo", nature: "hi", arts: "lo", pace: "lo", community: "hi" },
    desc: "Waldorf-tinged: rhythm, story, handwork, nature, and art as the spine, with academics emerging when the child is ready. Festivals, music, and family warmth.",
    esDesc: "Inspirado en Waldorf: ritmo, cuento, manualidades, naturaleza y arte.",
    longDesc: "The Rhythmic Hearth runs on the calendar, not the clock: seasons, festivals, and daily rhythm carry the learning. Story and handwork come before reading and abstract math; nature walks, music, and bread-making are the 'subjects'. The same elder guides across the years, the way Waldorf's class teacher does. Academics emerge when the child is developmentally ready — and research says they catch up.",
    books: [
      { name: "Rudolf Steiner", work: "The Foundations of Human Experience (1919)", line: "The developmental-phases system — read as a hypothesis and test it honestly." },
      { name: "Jon Young", work: "Coyote's Guide to Connecting with Nature (2010)", line: "Rhythm, story and nature connection — independently converging on Waldorf's core." },
      { name: "Richard Louv", work: "Last Child in the Woods (2005)", line: "Why the outdoor, imaginative childhood this blueprint protects matters." },
      { name: "Rahima Baldwin Dancy", work: "You Are Your Child's First Teacher (1989)", line: "The practical Waldorf-homeschooling handbook." }
    ],
    evidence: "Thin in benchmark trials; rich in alumni/qualitative documentation (Oberman 2008; Stehlik 2003) showing love of learning and adaptability, academics catching up by middle grades. The 'lack of evidence' is partly a lack of looking — see the evidence-gathering note.",
    practices: ["Morning rhythm: the same order of work, story, song, outdoors", "Weekly nature walk and seasonal festival prep", "Handwork: knitting, carving, bread, mending", "Academics start later, through story and movement", "Deferred screens; books, songs, and the real world instead"],
    quests: ["Vitality", "Community", "Gardening", "Natural Medicine"]
  },
  {
    name: "The Trivium Guild",
    esName: "El Gremio del Trivium",
    fit: { structure: "lo", adult: "lo", nature: "lo", arts: "hi", pace: "hi", community: "lo" },
    desc: "Classical rigor + guild mastery: memory in the grammar years, logic and debate in the middle, rhetoric and real projects at the end. Text-heavy, argument-rich.",
    esDesc: "Rigor clásico + maestría gremial: memoria, lógica, retórica y proyectos reales.",
    longDesc: "The Trivium Guild marries the classical trivium (grammar → logic → rhetoric) with the Village's guild mastery ladder. Early years: memory, narration, and the Great Books' stories. Middle years: logic, debate, and Socratic questioning — argument becomes the tool. Teen years: rhetoric, original writing, and real projects (a Constitution debate, a market, a workshop build). Its evidence is 2,500 years of tradition plus modern argumentation research; its watch-out is dryness — keep joy and real work in the mix.",
    books: [
      { name: "Plato & Aristotle", work: "The Republic; Rhetoric", line: "The originals — education as the shaping of the citizen." },
      { name: "Quintilian", work: "Institutio Oratoria (c. 95 CE)", line: "The trivium, codified by a practicing teacher." },
      { name: "Dorothy Sayers", work: "The Lost Tools of Learning (1947)", line: "The modern revival essay — a hypothesis, honestly labeled." },
      { name: "Susan Wise Bauer", work: "The Well-Trained Mind (1999)", line: "The practical classical-homeschooling curriculum guide." }
    ],
    evidence: "Weak direct benchmark studies; strong historical lineage + modern argumentation research (debate training improves critical thinking — Kuhn 2005). Treat the stage-mapping as a working hypothesis and adjust per child.",
    practices: ["Grammar years: memory work, narration, living history", "Logic years: debate, syllogisms, Socratic dinner talk", "Rhetoric years: essays, speeches, and real public work", "Latin/roots: vocabulary and structure as a game", "Demonstrate mastery in guild projects, not worksheets"],
    quests: ["Constitution", "Commerce", "Electricity"]
  },
  {
    name: "The Free Range",
    esName: "El Libre",
    fit: { structure: "hi", adult: "hi", nature: "hi", arts: "lo", pace: "hi", community: "hi" },
    desc: "Unschooling with a nature bias: trust the learner completely, follow interests, keep the wild and real work available, let mastery emerge from love.",
    esDesc: "Unschooling con sesgo natural: confía plenamente en quien aprende y sigue sus intereses.",
    longDesc: "The Free Range is the radical-trust model: no timetable, no curriculum you impose — instead, a rich environment (books, tools, land, people, time) and adults who pay close attention. Interests are followed wherever they lead; the parent's art is providing access and noticing. Like unschooling generally, the watch-outs are the areas a child avoids (often formal math and writing) and the family bandwidth to keep the environment rich. The Village in Free-Roam mode is this blueprint made playable.",
    books: [
      { name: "John Holt", work: "How Children Fail (1964); Instead of Education (1976)", line: "The doubting teacher's case: trust the learner." },
      { name: "Peter Gray", work: "Free to Learn (2013)", line: "The evolutionary and research case for play-driven self-direction." },
      { name: "A.S. Neill", work: "Summerhill (1960)", line: "A century of democratic self-directed schooling in practice." },
      { name: "Richard Louv", work: "Vitamin N (2016)", line: "The nature-access toolkit — keep the wild in the free range." }
    ],
    evidence: "Moderate — unschooled-adult surveys are positive (Gray & Riley 2013) but selection effects are real; the deep documentation is practitioner (Sudbury 50+ years) and growing. Pair with strong habits of reading and math exposure to cover the classic gaps.",
    practices: ["No imposed timetable; rich options instead", "Follow interests in deep projects", "Real work counts: cooking, fixing, volunteering, trading", "Democratic family meetings (Sudbury-style)", "Protect nature time and free play fiercely"],
    quests: ["All — Free-Roam mode"]
  },
  {
    name: "The Common Soil",
    esName: "La Tierra Común",
    fit: { structure: "lo", adult: "hi", nature: "lo", arts: "lo", pace: "lo", community: "lo" },
    desc: "Charlotte Mason x Permaculture: living books, nature journaling, habits, short focused mornings, and long afternoons of real work in the garden and kitchen with the family band.",
    esDesc: "Charlotte Mason × Permacultura: libros vivos, diario de naturaleza, hábitos y trabajo real.",
    longDesc: "The Common Soil puts living books and the real garden side by side. Mornings are short and focused: a feast of narrations — history, science, faith, and poetry read aloud from real books — each told back in the child's own words. Afternoons are the permaculture workshop: soil, seed, kitchen, tools, and the family band working together on what the land needs. Habits (attention, order, gratitude) are trained explicitly. Modern reading science (background knowledge) and nature-contact research both vindicate Mason's century-old instincts.",
    books: [
      { name: "Charlotte Mason", work: "Home Education (1886); Towards a Philosophy of Education (1925)", line: "The original living-books pedagogy." },
      { name: "Daniel Willingham", work: "The Reading Mind (2017)", line: "Modern science of comprehension — background knowledge & narrative." },
      { name: "Bill Mollison & David Holmgren", work: "Permaculture One (1978)", line: "The garden curriculum." },
      { name: "Richard Louv", work: "Last Child in the Woods (2005)", line: "The nature-contact case behind the long afternoons." }
    ],
    evidence: "Indirect but strong: background-knowledge research (Willingham 2017), nature-contact learning gains (Kuo et al. 2019), plus a century of PNEU practitioner documentation, and apprenticeship/mastery support for the afternoon guild work.",
    practices: ["Morning feast: short living-book subjects, each narrated back", "Nature journal daily — draw and write what you observed", "Habit training: attention, order, gratitude (explicitly)", "Long afternoons: garden, kitchen, workshop with the family band", "Seasonal rhythm: sow, tend, harvest, feast"],
    quests: ["Gardening", "Food Prep", "Natural Medicine", "Woodland Care"]
  },
  {
    name: "The Balanced Blend",
    esName: "La Mezcla Equilibrada",
    fit: {},
    desc: "A custom hand-built blend — the family curates elements from every tradition into something genuinely its own. This is the Village way: born of attention, not allegiance.",
    esDesc: "Una mezcla propia: la familia elige elementos de cada tradición.",
    longDesc: "The Balanced Blend is the meta-blueprint: instead of pledging allegiance to one tradition, the family consciously curates — a Montessori shelf in the morning, a Charlotte Mason living-book feast, a Wild Scholar afternoon, a Trivium Guild dinner debate, a Waldorf festival calendar, and unschooling trust throughout. Its founding texts are this Learning Lab itself: the gallery gives you the ingredients, the sciences give you the principles, and you compose your own. Document what you chose and why — that documentation is the curriculum's evidence.",
    books: [
      { name: "This Learning Lab", work: "The Village game — Curriculum Gallery tab", line: "Your ingredients: compare any two traditions and choose." },
      { name: "Every author above, sampled", work: "Montessori, Mason, Steiner, Holt, Gray, Louv, Young...", line: "Read the originals at the pace your family can." }
    ],
    evidence: "As strong as the pieces you choose — a balanced blend inherits the evidence of its parts. The practice of documenting your choices (and revisiting them) is itself metacognitive learning.",
    practices: ["Pick 2-3 elements from different traditions and try them for a season", "Document why you chose them; adjust at the next season change", "Keep the Village quest board as the common spine", "Family meeting monthly: what worked, what didn't, what's next", "Stay curious — the map keeps growing"],
    quests: ["Pick what calls to you"]
  }
];

/* ---------- 6. NATURE CONNECTION RHYTHM (Coyote mentoring as curriculum) ---------- */
const NATURE_RHYTHM = {
  intro: "Deep nature connection isn't a subject — it's a rhythm. The Coyote Mentoring tradition organizes it as daily, weekly, and seasonal practices that build sensory literacy over years. Its evidence lives in its practitioners (Jon Young's 8 Shields network, Tom Brown's Tracker School, wild-crafting communities) as much as in studies — though nature-contact research (Kuo et al. 2019; Louv 2005) increasingly confirms it.",
  daily: ["Sit Spot — same place, 10 quiet minutes, eyes and ears open", "Bird language check — what are the birds saying about the moment?", "One gratitude — thanksgiving as a way of seeing"],
  weekly: ["One nature quest from the board (tracking, foraging, building)", "Storytelling evening — tell what you noticed, hear what others saw", "Wander — an unhurried family walk with no destination"],
  seasonal: ["Follow the 8 Shields: the year has phases (healing, tracking, harvesting, storytelling)", "Plant, tend, harvest — garden rhythm is curriculum", "Seasonal feast — celebrate what the land gave, with hands that grew it"],
  mentoring: ["Model, don't lecture — let children watch you notice", "Meet them where they are — a 50/50 balance of child-led and elder-led", "The errand principle — give meaningful tasks, not exercises"]
};

/* ============================================================
 * v2.1 — LEARNING MODES & BRAIN STATES
 * The "how" of learning: preferred modes (multi-medium) and the
 * mind-states that different activities cultivate (honestly labeled).
 * ============================================================ */

/* ---------- 7. LEARNING MODES (NotebookLM-style multi-medium access) ----------
 * Same knowledge, met in whatever medium fits the learner and the moment:
 * read it, hear it, watch it, do it, teach it, or mix modes on one topic. */
const LEARN_MODES = [
  { id:"read", name:"Read", esName:"Leer", icon:"📖", tagline:"Words & living books",
    desc:"Living books, primary texts, articles. Best for precision, reference, and savoring a voice. The original deep medium.",
    how:"Open the read list for any curriculum and use it as the spine — read aloud together often.",
    evidence:"Strong — rich text builds the background knowledge comprehension depends on (Willingham 2017)." },
  { id:"listen", name:"Listen", esName:"Escuchar", icon:"🎧", tagline:"Audio & podcasts",
    desc:"Podcasts, audiobooks, spoken narration. Fits walks, chores, and long drives — turns dead time into learning time.",
    how:"Queue the listen list; narrate back at dinner what you heard. Audio + movement = dual coding.",
    evidence:"Moderate — audio learning is real, and pairs well with motion (walking while listening compounds encoding)." },
  { id:"watch", name:"Watch", esName:"Ver", icon:"🎬", tagline:"Video & demonstrations",
    desc:"Documentaries, demonstrations, teachers on video. See the skill before doing it — a picture plus motion plus narration.",
    how:"Watch a demo first, then do the quest. Pause and predict what happens next — that prediction is learning.",
    evidence:"Strong for procedural preview (Mayer's multimedia learning; demonstration → imitation)." },
  { id:"do", name:"Do", esName:"Hacer", icon:"🛠️", tagline:"Hands-on quests",
    desc:"Real work: build, dig, cook, fix, plant, trade. The Village's native mode — mastery by making, witnessed by Otis.",
    how:"Pick a quest, do the thing, produce evidence, reflect. Generation beats consumption, every time.",
    evidence:"Strong — generation effect, cognitive apprenticeship, mastery learning all point here." },
  { id:"discuss", name:"Discuss", esName:"Dialogar", icon:"🗣️", tagline:"Narrate & teach back",
    desc:"Tell it back, teach it to someone, Socratic talk. Narration is synthesis — the learner becomes the teacher.",
    how:"End any learning with: 'Tell me what you learned, what surprised you, what you would teach.'",
    evidence:"Strong — retrieval practice and the protégé effect (Karpicke & Roediger 2008; teaching-back research)." },
  { id:"mix", name:"Mix", esName:"Combinar", icon:"🔀", tagline:"Every medium, one topic",
    desc:"Meet the same idea in every room: read it, hear it, watch it, do it, teach it. Each pass deepens a different trace. The NotebookLM way — and richer.",
    how:"Start in one medium, then convert: text → read aloud / AI voice, video → summary, do → teach. Mix is the meta-mode.",
    evidence:"Strong — multi-modal encoding (dual coding + retrieval + generation) beats a single pass." }
];

/* ---------- 8. BRAIN STATES (Dr. Jeffrey Thompson-informed, honestly labeled) ----------
 * Thompson's Bio-Tuning maps 21+ brainwave states; classic bands are the anchor.
 * Frames here are the ones a family can deliberately cultivate — the state a given
 * Village activity tends to produce. Range labels follow Thompson; treat exact
 * numbers as a guide, not gospel (band definitions vary across the field). */
const BRAIN_STATES = [
  { name:"Beta — Focused Work", esName:"Beta — Trabajo Enfocado", freq:"13–30 Hz", icon:"🎯",
    feel:"Sharp, alert, linear. The state for planning, executing, and finishing.",
    learn:"Direct instruction, deliberate practice, reading for detail, quest finalize.",
    produce:"Short, focused sessions with one clear target; mornings; clear boundaries.",
    village:"Logging quests, Schoolhouse hours, making the family plan, the grammar stage of any skill.",
    evidence:"Well-documented active-processing state (standard EEG literature; Thompson Bio-Tuning)." },
  { name:"Alpha — Calm Presence", esName:"Alfa — Presencia Serena", freq:"8–13 Hz", icon:"🌿",
    feel:"Relaxed alertness. The mind open and receiving — the learning state for taking things in.",
    learn:"Observation, nature connection, sit spots, sensory immersion, listening to stories.",
    produce:"Sit spots, nature walks, slow breathing, low threat (safe-exploration precondition).",
    village:"Sit spot practice, bird language, nature quests, the Wild Scholar's daily rhythm.",
    evidence:"Robust — alpha is the classic relaxed-wakeful state; central to nature-restoration research (Kuo et al. 2019)." },
  { name:"Alpha/Theta — The Flow Border", esName:"Alfa/Teta — Frontera del Flujo", freq:"7–8 Hz (Schumann ~7.83 Hz)", icon:"🌊",
    feel:"The creative flow corridor — absorbed, timeless, joyful effort. Csikszentmihalyi's flow zone.",
    learn:"Deep engagement in craft: drawing, building, playing music, writing, woodwork.",
    produce:"Challenge slightly above skill (the flow formula), intrinsic motivation, clear goals, immediate feedback.",
    village:"Avatar Studio, Money Lab projects, building quests at your edge — the Sand→Iron ladder is a flow machine.",
    evidence:"Flow research (Csikszentmihalyi 1990; Kotler) is strong; the exact band is suggestive (Schumann resonance noted by Thompson)." },
  { name:"Theta — Imagination & Memory Weaving", esName:"Teta — Imaginación y Memoria", freq:"4–8 Hz", icon:"🌙",
    feel:"Dreamy insight. The subconscious weaving what you learned into story and pattern.",
    learn:"Consolidation, big-picture connection, incubation, the 'aha' that comes after, not during.",
    produce:"Storytelling, daydreaming, gentle movement, the hypnagogic edge before sleep — AFTER learning, not instead of it.",
    village:"Storytelling evenings, seasonal feasts, reflecting after quests, the Mentor's Circle debrief.",
    evidence:"Theta linked to episodic memory and creativity; Thompson's dream-state mapping (label: plausible)." },
  { name:"Delta — Deep Rest & Consolidation", esName:"Delta — Descanso Profundo", freq:"0.5–4 Hz", icon:"😴",
    feel:"Deep, dreamless rest. The body restoring, the brain filing the day's practice into long-term memory.",
    learn:"This is where today's practice becomes permanent — sleep consolidation is a required step, not a luxury.",
    produce:"Protected, consistent sleep. Bedtime as sacred curriculum. Screens off; story out loud.",
    village:"The attendance tracker quietly respects rest; quest cadence is daily, not crammed.",
    evidence:"Unambiguous — sleep consolidates memory (Walker & Stickgold; Rasch & Born 2013)." },
  { name:"Gamma — Integration & Empathy", esName:"Gamma — Integración y Empatía", freq:"30–80 Hz (peak ~40 Hz)", icon:"⭐",
    feel:"Wide-angle awareness — connection across ideas, social resonance, the 'everything is connected' moment.",
    learn:"Synthesis across guilds: seeing permaculture in a market, economics in a forest, story in soil.",
    produce:"Cross-guild projects, teaching others, being in community, awe in nature, gratitude practice.",
    village:"Family check-ins, the Commons, interdisciplinary quests, thanksgiving as a way of seeing.",
    evidence:"Gamma linked to binding/integration; sustained gamma documented in experienced meditators (label: moderate)." },
  { name:"SMR Beta — Meditation in Action", esName:"Beta SMR — Meditación en Acción", freq:"12.5–15 Hz", icon:"🧘",
    feel:"Calm alertness in motion — Thompson's 'meditation in action'. Relaxed focus while performing.",
    learn:"Performing learned skills smoothly under pressure: presenting, climbing, trading, teaching.",
    produce:"Practice until automatic, then perform with soft focus; steady breathing rhythm; trust the body.",
    village:"Demonstrating quest mastery, Otis verification, family presentations, the journeyman step.",
    evidence:"SMR training has its own EEG literature (sensorimotor rhythm, attention); precise range as guide, not gospel." }
];

/* ---------- 9. MULTI-MEDIUM RESOURCE MAP (modes → real links per curriculum) ----------
 * Seeds for the NotebookLM-style 'meet it in every medium' layer.
 * The cron grows this over time with vetted resources: same topic, every medium. */
const CURRICULUM_MODES = {
  montessori: {
    read: [
      { label: "Montessori — The Absorbent Mind (archive.org full text)", url: "https://archive.org/details/absorbentmindmemory00mont" },
      { label: "Montessori: The Science Behind the Genius (Lillard)", url: "https://www.amazon.com/Montessori-Science-Behind-Angeline-Lillard/dp/0195369364" }
    ],
    listen: [
      { label: "The Montessori Notebook podcast (Simone Davies)", url: "https://themontessorinotebook.com/podcast/" }
    ],
    watch: [
      { label: "Montessori in practice — video search", url: "https://www.youtube.com/results?search_query=montessori+in+practice+home" }
    ],
    do: [
      { label: "Practical life = Food Prep guild quests (in-game)", url: "#learning" }
    ]
  },
  waldorf: {
    read: [
      { label: "Rudolf Steiner Archive (lectures)", url: "https://rsarchive.org" },
      { label: "Waldorf Library (curriculum + festivals)", url: "https://waldorflibrary.org" },
      { label: "Douglas Gabriel — Spirit of Childhood (free curriculum book)", url: "https://eternalcurriculum.com/2017/09/26/spirit-of-childhood/" }
    ],
    listen: [
      { label: "Waldorfy podcast", url: "https://waldorfy.com" },
      { label: "Douglas Gabriel audio lectures (eternalcurriculum.com)", url: "https://eternalcurriculum.com/books/" }
    ],
    watch: [
      { label: "Waldorf education — video search", url: "https://www.youtube.com/results?search_query=waldorf+education+kindergarten" },
      { label: "Douglas Gabriel — opening lecture on The Eternal Curriculum", url: "https://neoanthroposophy.com/2019/12/24/educating-wisdom-children/" }
    ],
    do: [
      { label: "Rhythm = Vitality + seasonal quests (in-game)", url: "#learning" }
    ]
  },
  selfdirected: {
    read: [
      { label: "John Holt — How Children Fail", url: "https://archive.org/details/howchildrenfail0000holt" },
      { label: "Peter Gray — Free to Learn", url: "https://www.amazon.com/Free-Learn-Unleashing-Instinct-Self-Reliant/dp/0465084990" }
    ],
    listen: [
      { label: "Life Without School podcast", url: "https://www.lifewithoutschool.com/podcast/" },
      { label: "Stolen Knowledge podcast", url: "https://stolenknowledge.podbean.com" }
    ],
    watch: [
      { label: "Unschooling journeys — video search", url: "https://www.youtube.com/results?search_query=unschooling+documentary" }
    ],
    do: [
      { label: "Free-Roam mode = native territory (in-game)", url: "#learning" }
    ]
  },
  classical: {
    read: [
      { label: "Dorothy Sayers — The Lost Tools of Learning", url: "https://www.classicalchristian.org/lost-tools-of-learning-dorothy-sayers/" },
      { label: "Quintilian — Institutio Oratoria (archive)", url: "https://archive.org/details/institutioorator01quin" }
    ],
    listen: [
      { label: "The Classical Classroom podcast", url: "https://www.classicalclassroom.com/podcast" }
    ],
    watch: [
      { label: "The Well-Trained Mind — video search", url: "https://www.youtube.com/results?search_query=classical+education+trivium+explained" }
    ],
    do: [
      { label: "Constitution + Commerce guilds = rhetoric in action (in-game)", url: "#learning" }
    ]
  },
  charlottemason: {
    read: [
      { label: "Charlotte Mason — Home Education (archive.org)", url: "https://archive.org/details/homeeduc00maso" },
      { label: "AmblesideOnline (free curriculum)", url: "https://amblesideonline.org" }
    ],
    listen: [
      { label: "A Delectable Education podcast", url: "https://adelectableeducation.com" }
    ],
    watch: [
      { label: "Charlotte Mason method — video search", url: "https://www.youtube.com/results?search_query=charlotte+mason+nature+study+home" }
    ],
    do: [
      { label: "Nature journaling = Gardening quests (in-game)", url: "#learning" }
    ]
  },
  reggio: {
    read: [
      { label: "The Hundred Languages of Children (Edwards/Gandini/Forman)", url: "https://www.amazon.com/Hundred-Languages-Children-Approach-Transformation/dp/0313359812" }
    ],
    listen: [
      { label: "Reggio Emilia approach — podcast search", url: "https://www.youtube.com/results?search_query=reggio+emilia+approach+explained" }
    ],
    watch: [
      { label: "Reggio classrooms — video search", url: "https://www.youtube.com/results?search_query=reggio+emilia+preschool+documentary" }
    ],
    do: [
      { label: "Emergent projects = Community guild (in-game)", url: "#learning" }
    ]
  },
  forest: {
    read: [
      { label: "Richard Louv — Last Child in the Woods", url: "https://www.richardlouv.com/books/last-child/" },
      { label: "Jon Young — Coyote's Guide to Connecting with Nature", url: "https://www.amazon.com/Coyotes-Guide-Connecting-Nature-Young/dp/1579940250" }
    ],
    listen: [
      { label: "The Forest School Podcast (UK)", url: "https://theforestschoolpodcast.com" }
    ],
    watch: [
      { label: "Forest school in action — video search", url: "https://www.youtube.com/results?search_query=forest+school+day+in+the+life" }
    ],
    do: [
      { label: "Woodland Care + Tracking guilds (in-game)", url: "#learning" }
    ]
  },
  vedic: {
    read: [
      { label: "George Gheverghese Joseph — The Crest of the Peacock", url: "https://www.amazon.com/Crest-Peacock-Non-European-Roots-Mathematics/dp/0691135266" },
      { label: "Vedic Mathematics (Bharati Krishna Tirthaji)", url: "https://archive.org/details/VedicMathematics" }
    ],
    listen: [
      { label: "Vedic math intro — audio search", url: "https://www.youtube.com/results?search_query=vedic+mathematics+explained" }
    ],
    watch: [
      { label: "Vedic math sutras — video search", url: "https://www.youtube.com/results?search_query=vedic+math+sutras+examples" }
    ],
    do: [
      { label: "Timeless Math tab (in-game) + Commerce guild", url: "#learning" }
    ]
  },
  permaculture: {
    read: [
      { label: "Permaculture — Mollison & Holmgren", url: "https://www.permacultureprinciples.com" },
      { label: "Permies.com wiki (badge system source)", url: "https://permies.com/wiki" }
    ],
    listen: [
      { label: "The Permaculture Podcast", url: "https://thepermaculturepodcast.com" }
    ],
    watch: [
      { label: "Geoff Lawton — video search", url: "https://www.youtube.com/results?search_query=geoff+lawton+permaculture" }
    ],
    do: [
      { label: "The whole Quest Board (in-game)", url: "#learning" }
    ]
  }
};


/* ============================================================
 * v2.2 — PRACTICES: HeartMath coherence + Steiner's Six Exercises
 * ============================================================ */

/* ---------- HeartMath / heart-brain coherence ---------- */
const HEART_PRACTICE = {
  name: "Quick Coherence Technique",
  esName: "Técnica de Coherencia Rápida",
  source: "HeartMath Institute",
  sourceUrl: "https://www.heartmath.com/quick-coherence-technique/",
  intro: "Heart-brain coherence: when the heart's rhythm is smooth and ordered, the brain syncs to it (HRV coherence) — the state most conducive to calm, clear, emotionally intelligent learning. The Quick Coherence Technique is the 1-minute reset. Honest note: HeartMath's own studies report HRV/emotional gains; independent replication is partial — the technique is harmless, fast, and widely used; treat device claims as marketing-grade until you feel the effect yourself.",
  steps: [
    { n: 1, t: "Focus on your heart", es: "Enfócate en tu corazón", d: "Place attention in the area of your heart. No need to feel anything — attention alone starts the shift.", esd: "Pon atención en la zona del corazón. Solo la atención ya inicia el cambio." },
    { n: 2, t: "Heart breathing", es: "Respiración del corazón", d: "Breathe slowly and gently — about 5–6 seconds in, 5–6 seconds out. Imagine the breath moving in and out through your heart.", esd: "Respira lenta y suavemente — 5–6 segundos adentro, 5–6 afuera. Imagina el aire pasando por el corazón." },
    { n: 3, t: "Heart feeling", es: "Sentimiento del corazón", d: "Activate a positive feeling — appreciation, care, gratitude for someone or something. Sustain it as you breathe. That feeling is the coherence trigger.", esd: "Activa un sentimiento positivo — aprecio, cuidado, gratitud. Mantenlo al respirar. Ese sentimiento es la clave." },
    { n: 4, t: "Sustain", es: "Mantén", d: "Keep heart focus + heart breathing + heart feeling for 60–90 seconds. Then notice: clearer mind, steadier body, better next decision.", esd: "Mantén foco, respiración y sentimiento 60–90 segundos. Nota: mente más clara, cuerpo más firme." }
  ],
  why: "Heart rate variability (HRV) coherence improves autonomic balance, attention, and emotional regulation; children who can self-soothe learn better (the safe-exploration precondition).",
  devices: [
    { name: "emWave2 (older — cheap on eBay)", es: "emWave2 (usado — barato en eBay)", note: "Portable sensor with the classic coherence game/trainer. The original affordable entry point.", esNote: "Sensor portátil con el clásico entrenador de coherencia. Entrada económica." },
    { name: "Inner Balance / emWave Pro (newer)", es: "Inner Balance / emWave Pro (moderno)", note: "Ear-sensor + app with real-time training regimens, challenges, and sessions — the current generation.", esNote: "Sensor de oído + app con regímenes de entrenamiento en tiempo real." },
    { name: "Any HRV-capable wearable", es: "Cualquier wearable con HRV", note: "Modern watches/heart straps measure HRV — pair with a breathing pacer app for the same practice without extra hardware.", esNote: "Relojes y bandas miden HRV — combina con una app de respiración." }
  ],
  village: "Use it before quests that need focus (before sit spots, before a test/recital, before a hard conversation). Make it the family's 60-second reset — a quest in the Vitality guild of the body."
};

/* ---------- Steiner's Six Basic Exercises (Rosicrucian), expanded per Robert Gilbert ---------- */
const SIX_EXERCISES = {
  name: "The Six Basic Exercises",
  esName: "Los Seis Ejercicios Básicos",
  source: "Rudolf Steiner (Guidance in Esoteric Training) + expanded teachings of Dr. Robert Gilbert (Vesica Institute)",
  sourceUrl: "https://www.vesica.org",
  sourceVideo: "https://www.youtube.com/@TheVesicaInstitute",
  intro: "Six daily practices that train the threefold human — thinking, feeling, willing — toward balance and self-mastery. Steiner called them the 'basic exercises' of inner development; Dr. Robert Gilbert (Vesica Institute) teaches them in the Rosicrucian lineage as the practical foundation before any subtle-energy or meditation work. One minute each is enough to begin; consistency beats intensity. Honest note: these are contemplative practices from the Western esoteric tradition — their value is experiential; no benchmark evidence exists or is claimed.",
  exercises: [
    { n: 1, name: "Control of Thought", esName: "Control del Pensamiento", symbol: "🧠",
      focus: "Thinking", esFocus: "Pensamiento",
      practice: "Each day, spend ~5 minutes thinking of ONE simple object (a pencil, a candle) — nothing else. When the mind wanders, gently return it. This builds the muscle of sustained attention.",
      esPractice: "Cada día, 5 minutos pensando en UN solo objeto simple (un lápiz, una vela). Cuando la mente divague, vuelve con suavidad. Construye el músculo de la atención sostenida.",
      why: "Attention is the substrate of all learning — this is deliberate training of the attention itself.",
      esWhy: "La atención es la base de todo aprendizaje — esto es entrenar la atención misma."
    },
    { n: 2, name: "Control of Will", esName: "Control de la Voluntad", symbol: "🌱",
      focus: "Willing", esFocus: "Voluntad",
      practice: "Choose ONE small act (water a plant, a single stretch, tidy one spot) and do it every day at the same time, whether you feel like it or not. Will is trained by doing what you decided, not what you feel.",
      esPractice: "Elige UN acto pequeño (regar una planta, un estiramiento, ordenar un rincón) y hazlo cada día a la misma hora, lo quieras o no. La voluntad se entrena cumpliendo lo decidido.",
      why: "Will = the power of decision carried through time. This is its daily gym.",
      esWhy: "La voluntad = poder de decisión sostenido en el tiempo. Su gimnasio diario."
    },
    { n: 3, name: "Control of Feeling (Equanimity)", esName: "Control del Sentimiento (Ecuanimidad)", symbol: "⚖️",
      focus: "Feeling", esFocus: "Sentimiento",
      practice: "Practice calm steadiness in both pleasant and unpleasant moments. When joy comes, don't get swept; when frustration comes, don't get crushed. Observe the feeling; do not become it.",
      esPractice: "Practica la calma firme en lo agradable y en lo desagradable. Cuando venga la alegría, no te dejes arrastrar; cuando venga la frustración, no te aplastes. Observa el sentimiento; no te conviertas en él.",
      why: "Emotional regulation is the safe-exploration precondition for learning — and the heart of emotional intelligence.",
      esWhy: "La regulación emocional es la condición para aprender con seguridad — el corazón de la inteligencia emocional."
    },
    { n: 4, name: "Positivity", esName: "Positividad", symbol: "☀️",
      focus: "Perspective", esFocus: "Perspectiva",
      practice: "Deliberately find the positive in every person, event, and circumstance — not naively, but as a trained reflex. Refuse the cynic's easy dismissal.",
      esPractice: "Busca deliberadamente lo positivo en cada persona, suceso y circunstancia — no ingenuamente, sino como reflejo entrenado. Rechaza el descarte fácil del cínico.",
      why: "Attention shapes reality; a trained positive gaze opens doors a cynical one never sees. Balances the critical mind.",
      esWhy: "La atención moldea la realidad; una mirada positiva entrenada abre puertas que la cínica nunca ve."
    },
    { n: 5, name: "Open-mindedness", esName: "Apertura de Mente", symbol: "🔭",
      focus: "Receptivity", esFocus: "Receptividad",
      practice: "Meet new ideas without bias — even ones you expect to reject. Learn the thing before judging it. Ask: 'What if this is true? What would that mean?'",
      esPractice: "Enfrenta las ideas nuevas sin prejuicio — incluso las que esperas rechazar. Aprende la cosa antes de juzgarla. Pregunta: '¿Y si esto fuera cierto? ¿Qué significaría?'",
      why: "The open mind is where learning happens; the closed mind only confirms itself. The antidote to echo chambers.",
      esWhy: "La mente abierta es donde ocurre el aprendizaje; la cerrada solo se confirma a sí misma."
    },
    { n: 6, name: "Inner Harmony", esName: "Armonía Interior", symbol: "🕊️",
      focus: "Balance", esFocus: "Equilibrio",
      practice: "The sum: rotate the first five rhythmically — a week on each, then all together, harmonizing thought, feeling, and will into one flowing self.",
      esPractice: "La síntesis: rota los cinco primeros rítmicamente — una semana cada uno, luego todos juntos, armonizando pensamiento, sentimiento y voluntad en un yo fluido.",
      why: "Each exercise alone builds a faculty; the six together build the person — the integrated, self-possessed learner.",
      esWhy: "Cada ejercicio solo construye una facultad; los seis juntos construyen la persona."
    }
  ],
  gilbert: "Dr. Robert Gilbert (Vesica Institute, Asheville NC) teaches these as the practical foundation of Rosicrucian inner work — before energy work or meditation — framing them as the ethical and attentional base of all authentic development. His long lectures (YouTube @TheVesicaInstitute) expand each exercise in depth; transcribing them is a standing research task we will grow into. Sources: vesica.org; youtube.com/@TheVesicaInstitute."
};

/* ---------- PRACTICES joined for the UI ---------- */
const PRACTICES_ORDER = ["heart", "six"];
