/* ============================================================
 * THE VILLAGE — STORY MODE
 * A procedural Choose-Your-Own-Adventure that walks a family
 * through ~30 real quests across four acts (Sand → Straw →
 * Wood → Iron), with fork points where YOUR choice decides
 * which guilds the next act draws from.
 *
 * i18n: add a language by adding a block to STORY_I18N
 * (copy the en block, translate, change the key).
 * ============================================================ */

const STORY_I18N = {
  "en": {
    "ui": {
      "storyMode": "Story Mode",
      "storyTag": "A guided adventure — every run tells a new story. Each act gets harder. Your choices steer it.",
      "newAdventure": "🌀 New Adventure",
      "adventureCode": "Adventure code",
      "begin": "Begin",
      "act": "Act",
      "of": "of",
      "quest": "Quest",
      "choosePath": "The story forks here. Every road is real — each one shapes the next chapter.",
      "resume": "Your story continues…",
      "epilogue": "Epilogue",
      "done": "Adventure complete",
      "deedsDone": "deeds in the ledger",
      "enterCode": "Enter an adventure code to replay a story, or press Begin for a fresh one.",
      "copyCode": "Share this code to replay this exact adventure:",
      "photoHint": "Remember the ledger: Before / During / After photos, then Post to Permies.",
      "skipHint": "Already done — moving on."
    },
    "acts": {
      "sand":  { "title": "The Awakening", "intro": ["The village stirs at first light. No grand declarations — only the slow work of hands that refuse to be idle. The season opens, and there is much that asks to be done.", "An elder nods toward the land. \u201cWe don't begin with big things,\u201d they say. \u201cWe begin with the ordinary, done honestly.\u201d The day is yours to shape."] },
      "straw": { "title": "The Growing", "intro": ["The first deeds are in the ledger, and the land has noticed. What was begun in mist now asks to be tended in full sun. The work deepens.", "Word moves through the village: someone is doing the quiet work well. The elders send you onward — the next tier of skill is a door, and you hold the handle."] },
      "wood":  { "title": "The Deepening", "intro": ["The easy harvests are behind you. What remains is stubborn, real work — the kind that takes wood, stone, and patience. This is where a village is actually built.", "The village trusts you now with its hard questions. Each deed here is a beam in the frame of the house. Do it thoroughly; it will be leaned on."] },
      "iron":  { "title": "The Legacy", "intro": ["This is the proving ground. The skills that took seasons to grow are now asked for at full strength. What you build here will outlast the season.", "The elders gather. They do not speak of completion — they speak of what comes after. What you leave behind must hold for those who follow. Finish strong."] }
    },
    "themes": {
      "garden": { "name": "The Garden",   "line": "The pantry stands open. Plant, harvest, preserve, and the whole village eats." },
      "forest": { "name": "The Forest",   "line": "The treeline holds timber, forage, and the patient crafts of the wood." },
      "water":  { "name": "The Waters",   "line": "Water shapes the land. Shape the water, and the land gives itself to you." },
      "stone":  { "name": "The Stone",    "line": "Clay, straw, and stone become shelter that will outlast its makers." },
      "forge":  { "name": "The Forge",    "line": "Fire and metal and toolcraft — the village's backbone, beaten hot and true." },
      "hearth": { "name": "The Hearth",   "line": "Warmth, medicine, food, and care — the heart of every home." },
      "wild":   { "name": "The Wild",     "line": "The edges of the map: animals, wild herbs, and the strange useful things." },
      "kin":    { "name": "The Kin",      "line": "Trade, craft, and helping hands — the village is its people." }
    },
    "beats": {
      "sand": [
        "The day's task is set: {emoji} {quest}. Small, honest, needed. The {guild} guild shows you how, and you do it with your own hands.",
        "Someone's voice carries across the yard: \u201cWe need {quest} done.\u201d {emoji} The {guild} way is simple: begin, finish, tell the truth about it.",
        "This is a first stone in a wall that will hold for years: {emoji} {quest}. The {guild} work is quiet, but the village sees it."
      ],
      "straw": [
        "The land has noticed your hands. Now it asks more: {emoji} {quest}. The {guild} craft deepens — pay attention to the details.",
        "You are past the easy part. {emoji} {quest} wants care, not hurry. The {guild} elders say this is where the real skill lives.",
        "A neighbor arrives with a question about {quest}. {emoji} You know the answer because you've been doing the work. The {guild} reputation is earned by deeds."
      ],
      "wood": [
        "The village trusts you with its hard work: {emoji} {quest}. This {guild} task takes time and patience — exactly why it matters.",
        "No one is watching you now. That is the test. {emoji} {quest}, done properly, not because eyes are on you, but because it is the right work.",
        "The frame of this village is going up board by board. Yours to place: {emoji} {quest}. The {guild} craft, at full strength."
      ],
      "iron": [
        "This is the proving ground. {emoji} {quest} — one of the great {guild} deeds. Seasons of skill are about to be put to the test.",
        "The elders speak your name among the capable now. {emoji} {quest}. Leave it built so well it will be pointed at for a generation.",
        "Legacy work: {emoji} {quest}. The {guild} craft at its summit. Do it once, do it right, and the village will tell this story."
      ]
    },
    "forks": {
      "intro": [
        "The chapter closes. The village gathers at the crossroads, and the story waits on your word.",
        "Dust settles. The next road is not marked — the village looks to you to choose it."
      ],
      "question": "Where does the tale turn next?"
    },
    "consequences": {
      "garden": "You turned toward the garden. Soil, seed, and pantry — the village will eat well this season.",
      "forest": "You turned toward the forest. Timber and forage — the wood gives its gifts to the patient.",
      "water":  "You turned toward the waters. Swales, greywater, and pipes — the land drinks and then it gives.",
      "stone":  "You turned toward the stone. Clay and straw rise into walls; shelter becomes permanent.",
      "forge":  "You turned toward the forge. Fire and metal sing — tools, heat, and strength for all.",
      "hearth": "You turned toward the hearth. Warmth, medicine, and brimming larder — the home is fortified.",
      "wild":   "You turned toward the wild. Animals, herbs, and the odd useful edge of the map.",
      "kin":    "You turned toward the kin. Trade and helping hands — the village grows stronger together."
    },
    "epilogue": [
      "The season turns. {count} deeds now sit in the village ledger — each one photographed, witnessed, and proven in the real world. The path you walked was yours alone; no one else will walk it exactly this way. The elders dip their heads, not in ceremony, but in respect.",
      "The fire burns low, and someone asks what comes next. The answer is already in the ledger: {count} deeds, done honestly, with proof. Your story is written into the village now — and the village will tell it."
    ],
    "doneTag": "An adventure complete. The map reshuffles; a new story is always waiting."
  },
  "es": {
    "ui": {
      "storyMode": "Modo Historia",
      "storyTag": "Una aventura guiada — cada partida cuenta una historia nueva. Cada acto es más difícil. Tus decisiones la dirigen.",
      "newAdventure": "🌀 Nueva Aventura",
      "adventureCode": "Código de aventura",
      "begin": "Comenzar",
      "act": "Acto",
      "of": "de",
      "quest": "Misión",
      "choosePath": "La historia se bifurca aquí. Cada camino es real — cada uno forma el siguiente capítulo.",
      "resume": "Tu historia continúa…",
      "epilogue": "Epílogo",
      "done": "Aventura completada",
      "deedsDone": "hazañas en el registro",
      "enterCode": "Introduce un código de aventura para rejugar una historia, o pulsa Comenzar para una nueva.",
      "copyCode": "Comparte este código para rejugar esta aventura exacta:",
      "photoHint": "Recuerda el registro: fotos de Antes / Durante / Después, y luego Publicar en Permies.",
      "skipHint": "Ya hecha — continuando."
    },
    "acts": {
      "sand":  { "title": "El Despertar", "intro": ["La aldea se agita con la primera luz. Sin grandes anuncios — solo el trabajo lento de manos que se niegan a estar ociosas. La temporada abre, y hay mucho que pide hacerse.", "Un anciano asiente hacia la tierra. \u201cNo empezamos con cosas grandes,\u201d dice. \u201cEmpezamos con lo ordinario, hecho con honestidad.\u201d El día es tuyo para darle forma."] },
      "straw": { "title": "El Crecimiento", "intro": ["Las primeras hazañas están en el registro, y la tierra lo ha notado. Lo que empezó entre nieblas ahora pide ser cuidado a pleno sol. El trabajo se profundiza.", "Corre la voz por la aldea: alguien está haciendo bien el trabajo silencioso. Los ancianos te envían adelante — el siguiente nivel de habilidad es una puerta, y tú tienes el picaporte."] },
      "wood":  { "title": "La Profundización", "intro": ["Las cosechas fáciles quedaron atrás. Lo que queda es trabajo real y terco — el tipo que requiere madera, piedra y paciencia. Aquí es donde realmente se construye una aldea.", "La aldea ahora te confía sus preguntas difíciles. Cada hazaña aquí es una viga en el armazón de la casa. Hazla a fondo; sobre ella se apoyarán."] },
      "iron":  { "title": "El Legado", "intro": ["Este es el terreno de la prueba. Las habilidades que tardaron temporadas en crecer ahora se piden a plena fuerza. Lo que construyas aquí sobrevivirá a la temporada.", "Los ancianos se reúnen. No hablan de terminar — hablan de lo que viene después. Lo que dejes debe sostener a quienes siguen. Termina con fuerza."] }
    },
    "themes": {
      "garden": { "name": "El Jardín",   "line": "La despensa está abierta. Siembra, cosecha, conserva, y toda la aldea come." },
      "forest": { "name": "El Bosque",   "line": "La línea de árboles guarda madera, forraje y las artes pacientes de la madera." },
      "water":  { "name": "Las Aguas",   "line": "El agua forma la tierra. Forma el agua, y la tierra se te entrega." },
      "stone":  { "name": "La Piedra",   "line": "Arcilla, paja y piedra se vuelven refugio que sobrevivirá a sus creadores." },
      "forge":  { "name": "La Fragua",   "line": "Fuego, metal y herramienta — la columna vertebral de la aldea, forjada al rojo vivo." },
      "hearth": { "name": "El Hogar",    "line": "Calor, medicina, comida y cuidado — el corazón de cada hogar." },
      "wild":   { "name": "Lo Salvaje",  "line": "Los bordes del mapa: animales, hierbas silvestres y las cosas extrañas y útiles." },
      "kin":    { "name": "El Parentesco", "line": "Comercio, oficio y manos que ayudan — la aldea es su gente." }
    },
    "beats": {
      "sand": [
        "La tarea del día está fijada: {emoji} {quest}. Pequeña, honesta, necesaria. El gremio de {guild} te enseña cómo, y la haces con tus propias manos.",
        "Una voz cruza el patio: \u201cNecesitamos {quest}.\u201d {emoji} La manera de {guild} es simple: comienza, termina, di la verdad sobre ello.",
        "Esta es una primera piedra en un muro que sostendrá por años: {emoji} {quest}. El trabajo de {guild} es silencioso, pero la aldea lo ve."
      ],
      "straw": [
        "La tierra ha notado tus manos. Ahora pide más: {emoji} {quest}. El oficio de {guild} se profundiza — presta atención a los detalles.",
        "Pasaste la parte fácil. {emoji} {quest} quiere cuidado, no prisa. Los ancianos de {guild} dicen que aquí vive la verdadera habilidad.",
        "Un vecino llega con una pregunta sobre {quest}. {emoji} Sabes la respuesta porque has estado haciendo el trabajo. La reputación de {guild} se gana con hazañas."
      ],
      "wood": [
        "La aldea te confía su trabajo duro: {emoji} {quest}. Esta tarea de {guild} toma tiempo y paciencia — exactamente por eso importa.",
        "Nadie te observa ahora. Esa es la prueba. {emoji} {quest}, hecha correctamente, no porque haya ojos encima, sino porque es el trabajo correcto.",
        "El armazón de esta aldea se levanta tabla por tabla. La tuya por colocar: {emoji} {quest}. El oficio de {guild}, a plena fuerza."
      ],
      "iron": [
        "Este es el terreno de la prueba. {emoji} {quest} — una de las grandes hazañas de {guild}. Temporadas de habilidad están por ponerse a prueba.",
        "Los ancianos pronuncian tu nombre entre los capaces. {emoji} {quest}. Déjala tan bien construida que la señalen durante una generación.",
        "Trabajo de legado: {emoji} {quest}. El oficio de {guild} en su cima. Hazlo una vez, hazlo bien, y la aldea contará esta historia."
      ]
    },
    "forks": {
      "intro": [
        "El capítulo se cierra. La aldea se reúne en la encrucijada, y la historia espera tu palabra.",
        "El polvo se asienta. El siguiente camino no está marcado — la aldea te mira para que lo elijas."
      ],
      "question": "¿Hacia dónde gira el relato?"
    },
    "consequences": {
      "garden": "Te volviste hacia el jardín. Tierra, semilla y despensa — la aldea comerá bien esta temporada.",
      "forest": "Te volviste hacia el bosque. Madera y forraje — la madera da sus regalos a los pacientes.",
      "water":  "Te volviste hacia las aguas. Zanjas, aguas grises y tuberías — la tierra bebe y luego da.",
      "stone":  "Te volviste hacia la piedra. Arcilla y paja se alzan en muros; el refugio se vuelve permanente.",
      "forge":  "Te volviste hacia la fragua. El fuego y el metal cantan — herramientas, calor y fuerza para todos.",
      "hearth": "Te volviste hacia el hogar. Calor, medicina y despensa llena — la casa queda fortificada.",
      "wild":   "Te volviste hacia lo salvaje. Animales, hierbas y el extraño y útil borde del mapa.",
      "kin":    "Te volviste hacia el parentesco. Comercio y manos que ayudan — la aldea crece más fuerte junta."
    },
    "epilogue": [
      "La temporada gira. {count} hazañas reposan ahora en el registro de la aldea — cada una fotografiada, atestiguada y probada en el mundo real. El camino que anduviste fue tuyo; nadie más lo andará igual. Los ancianos inclinan la cabeza, no en ceremonia, sino en respeto.",
      "El fuego arde bajo, y alguien pregunta qué viene después. La respuesta ya está en el registro: {count} hazañas, hechas con honestidad y con prueba. Tu historia está escrita en la aldea — y la aldea la contará."
    ],
    "doneTag": "Una aventura completada. El mapa se rebaraja; una nueva historia siempre espera."
  },
  "fr": {
    "ui": {
      "storyMode": "Mode Histoire",
      "storyTag": "Une aventure guidée — chaque partie raconte une histoire nouvelle. Chaque acte est plus difficile. Vos choix la dirigent.",
      "newAdventure": "🌀 Nouvelle Aventure",
      "adventureCode": "Code d'aventure",
      "begin": "Commencer",
      "act": "Acte",
      "of": "sur",
      "quest": "Quête",
      "choosePath": "L'histoire se divise ici. Chaque chemin est réel — chacun façonne le chapitre suivant.",
      "resume": "Votre histoire continue…",
      "epilogue": "Épilogue",
      "done": "Aventure terminée",
      "deedsDone": "exploits consignés",
      "enterCode": "Entrez un code d'aventure pour rejouer une histoire, ou appuyez sur Commencer pour une nouvelle.",
      "copyCode": "Partagez ce code pour rejouer exactement cette aventure :",
      "photoHint": "N'oubliez pas le registre : photos Avant / Pendant / Après, puis Publier sur Permies.",
      "skipHint": "Déjà fait — on continue."
    },
    "acts": {
      "sand":  { "title": "L'Éveil", "intro": ["Le village s'éveille aux premières lueurs. Pas de grandes déclarations — seulement le lent travail de mains qui refusent l'oisiveté. La saison s'ouvre, et il y a tant à faire.", "Un ancien hoche la tête vers la terre. \u201cOn ne commence pas par les grandes choses,\u201d dit-il. \u201cOn commence par l'ordinaire, fait avec honnêteté.\u201d La journée vous appartient."] },
      "straw": { "title": "La Croissance", "intro": ["Les premiers exploits sont consignés, et la terre l'a remarqué. Ce qui a commencé dans la brume demande maintenant d'être soigné en plein soleil. Le travail s'approfondit.", "La nouvelle circule dans le village : quelqu'un fait bien le travail silencieux. Les anciens vous envoient plus loin — le niveau suivant est une porte, et vous tenez la poignée."] },
      "wood":  { "title": "L'Approfondissement", "intro": ["Les récoltes faciles sont derrière vous. Ce qui reste est un travail réel et tenace — celui qui demande du bois, de la pierre et de la patience. C'est ici qu'on bâtit vraiment un village.", "Le village vous confie ses questions difficiles. Chaque exploit ici est une poutre dans la charpente de la maison. Faites-le à fond ; on s'y appuiera."] },
      "iron":  { "title": "L'Héritage", "intro": ["C'est le terrain d'épreuve. Les compétences qui ont mis des saisons à grandir sont maintenant demandées à pleine force. Ce que vous bâtirez ici survivra à la saison.", "Les anciens se rassemblent. Ils ne parlent pas d'achèvement — ils parlent de ce qui vient après. Ce que vous laissez doit tenir pour ceux qui suivent. Terminez en force."] }
    },
    "themes": {
      "garden": { "name": "Le Jardin",   "line": "Le garde-manger est ouvert. Plantez, récoltez, conservez, et tout le village mange." },
      "forest": { "name": "La Forêt",    "line": "La lisière des bois tient du bois d'œuvre, du fourrage et les arts patients de la forêt." },
      "water":  { "name": "Les Eaux",    "line": "L'eau façonne la terre. Façonnez l'eau, et la terre se donne à vous." },
      "stone":  { "name": "La Pierre",   "line": "Argile, paille et pierre deviennent un abri qui survivra à ses bâtisseurs." },
      "forge":  { "name": "La Forge",    "line": "Feu, métal et outillage — l'épine dorsale du village, forgés chaud et vrai." },
      "hearth": { "name": "Le Foyer",    "line": "Chaleur, médecine, nourriture et soin — le cœur de chaque foyer." },
      "wild":   { "name": "Le Sauvage",  "line": "Les bords de la carte : animaux, herbes sauvages et les choses étranges et utiles." },
      "kin":    { "name": "Les Liens",   "line": "Commerce, artisanat et mains secourables — le village, c'est son peuple." }
    },
    "beats": {
      "sand": [
        "La tâche du jour est fixée : {emoji} {quest}. Petite, honnête, nécessaire. Le métier de {guild} vous montre comment, et vous le faites de vos propres mains.",
        "Une voix traverse la cour : \u201cIl nous faut {quest}.\u201d {emoji} La manière de {guild} est simple : commencez, finissez, dites la vérité.",
        "C'est une première pierre d'un mur qui tiendra des années : {emoji} {quest}. Le travail de {guild} est discret, mais le village le voit."
      ],
      "straw": [
        "La terre a remarqué vos mains. Elle en demande plus : {emoji} {quest}. Le métier de {guild} s'approfondit — soyez attentif aux détails.",
        "Vous avez passé la partie facile. {emoji} {quest} demande du soin, pas de la hâte. Les anciens de {guild} disent que c'est là que vit la vraie compétence.",
        "Un voisin arrive avec une question sur {quest}. {emoji} Vous connaissez la réponse parce que vous faites le travail. La réputation de {guild} se gagne par les actes."
      ],
      "wood": [
        "Le village vous confie son travail difficile : {emoji} {quest}. Cette tâche de {guild} demande du temps et de la patience — c'est précisément pour cela qu'elle compte.",
        "Personne ne vous regarde maintenant. C'est ça, l'épreuve. {emoji} {quest}, faite correctement, non parce qu'on vous observe, mais parce que c'est le juste travail.",
        "La charpente de ce village s'élève planche par planche. La vôtre à poser : {emoji} {quest}. Le métier de {guild}, à pleine force."
      ],
      "iron": [
        "C'est le terrain d'épreuve. {emoji} {quest} — l'un des grands exploits de {guild}. Des saisons de compétence vont être mises à l'épreuve.",
        "Les anciens prononcent votre nom parmi les capables. {emoji} {quest}. Laissez-le si bien bâti qu'on le montrera du doigt pendant une génération.",
        "Travail d'héritage : {emoji} {quest}. Le métier de {guild} à son sommet. Faites-le une fois, faites-le bien, et le village racontera cette histoire."
      ]
    },
    "forks": {
      "intro": [
        "Le chapitre se referme. Le village se rassemble au carrefour, et l'histoire attend votre parole.",
        "La poussière retombe. La prochaine route n'est pas marquée — le village vous regarde pour la choisir."
      ],
      "question": "Où le récit va-t-il tourner ?"
    },
    "consequences": {
      "garden": "Vous vous êtes tourné vers le jardin. Terre, graine et garde-manger — le village mangera bien cette saison.",
      "forest": "Vous vous êtes tourné vers la forêt. Bois et fourrage — le bois donne ses dons aux patients.",
      "water":  "Vous vous êtes tourné vers les eaux. Baissières, eaux grises et tuyaux — la terre boit, puis elle donne.",
      "stone":  "Vous vous êtes tourné vers la pierre. Argile et paille s'élèvent en murs ; l'abri devient permanent.",
      "forge":  "Vous vous êtes tourné vers la forge. Le feu et le métal chantent — outils, chaleur et force pour tous.",
      "hearth": "Vous vous êtes tourné vers le foyer. Chaleur, médecine et garde-manger plein — la maison est fortifiée.",
      "wild":   "Vous vous êtes tourné vers le sauvage. Animaux, herbes et l'étrange et utile bord de la carte.",
      "kin":    "Vous vous êtes tourné vers les liens. Commerce et mains secourables — le village grandit plus fort ensemble."
    },
    "epilogue": [
      "La saison tourne. {count} exploits reposent maintenant dans le registre du village — chacun photographié, témoigné et prouvé dans le monde réel. Le chemin que vous avez parcouru était le vôtre ; nul ne le parcourra exactement ainsi. Les anciens inclinent la tête, non par cérémonie, mais par respect.",
      "Le feu brûle bas, et quelqu'un demande ce qui vient ensuite. La réponse est déjà dans le registre : {count} exploits, faits avec honnêteté et avec preuve. Votre histoire est écrite dans le village — et le village la racontera."
    ],
    "doneTag": "Une aventure terminée. La carte se rebat ; une nouvelle histoire attend toujours."
  }
};

/* ============================================================
 * THEME → GUILD MAPPING (used to draw quests for each act)
 * ============================================================ */
const STORY_THEMES = {
  garden: ["Gardening", "Food Prep"],
  forest: ["Woodland Care", "Foraging", "Round Wood Woodworking"],
  water:  ["Earthworks", "Greywater and Willow Feeders", "Plumbing and Hot Water"],
  stone:  ["Natural Building", "Dimensional Lumber Woodworking", "Tool Care"],
  forge:  ["Rocket", "Metalworking", "Electricity"],
  hearth: ["Nest", "Natural Medicine", "Vitality", "Homesteading"],
  wild:   ["Animal Care", "Oddball", "Vitality"],
  kin:    ["Community Living", "Community", "Commerce", "Textiles"]
};

const STORY_ACTS = [
  { tier: "sand",  count: 9 },
  { tier: "straw", count: 7 },
  { tier: "wood",  count: 7 },
  { tier: "iron",  count: 7 }
]; // 30 quests per adventure

/* ============================================================
 * ENGINE
 * ============================================================ */
let storyMode = false;
let storyLang = 'en';

function storyS(lang) {
  const L = STORY_I18N[lang];
  if (L) return L;
  return STORY_I18N.en;
}

// ---- seeded PRNG (mulberry32 + xmur3 string hash) ----
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function storyRng(seedStr) {
  const seedFn = xmur3(seedStr);
  return mulberry32(seedFn());
}

function makeStoryCode(rng) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(rng() * chars.length)];
  return code;
}

function questDone(qid) {
  return (typeof completedQuests !== 'undefined') && completedQuests.includes(qid);
}

// Gather quest candidates for a tier under a set of guilds,
// preferring quests NOT yet completed (so adventures naturally
// walk the family toward finishing the whole board).
function gatherQuests(guildNames, tier, rng, exclude) {
  let out = [];
  if (typeof allAspects === 'undefined') return out;
  for (const gn of guildNames) {
    const a = allAspects.find(g => g && g.name === gn);
    if (!a || !a[tier]) continue;
    for (const q of a[tier]) {
      const qid = makeQuestId(a.name, tier, q[0]);
      if (exclude.has(qid)) continue;
      out.push({ guild: a.name, tier: tier, qid: qid, title: q[0], emoji: q[3] || "📦" });
    }
  }
  // Fisher-Yates shuffle
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  const done = out.filter(o => questDone(o.qid));
  const notDone = out.filter(o => !questDone(o.qid));
  return notDone.concat(done); // unfinished first
}

function pickThemeQuests(theme, tier, count, rng, exclude) {
  const guilds = STORY_THEMES[theme] || [];
  let pool = gatherQuests(guilds, tier, rng, exclude);
  // Not enough in the theme's guilds? top up from any guild at this tier.
  if (pool.length < count) {
    const anyGuilds = (typeof allAspects !== 'undefined') ? allAspects.map(a => a.name) : [];
    const extra = gatherQuests(anyGuilds, tier, rng, exclude);
    const seen = new Set(pool.map(o => o.qid));
    for (const o of extra) {
      if (!seen.has(o.qid)) { pool.push(o); seen.add(o.qid); }
      if (pool.length >= count) break;
    }
  }
  return pool.slice(0, count);
}

/* ---- run state ---- */
let storyRun = null; // { code, seed, act, qIndex, step, acts:[{tier,theme,quests:[]}], themes:[], choices:[], offered:[] }

function storyLoadRun() {
  try {
    const raw = localStorage.getItem('rpg_story_run');
    if (raw) storyRun = JSON.parse(raw);
  } catch (e) { storyRun = null; }
  try { window.storyRun = storyRun; } catch (e) {}
}
function storySaveRun() {
  try { localStorage.setItem('rpg_story_run', JSON.stringify(storyRun)); } catch (e) {}
  try { window.storyRun = storyRun; } catch (e) {}
}

function storyBegin(code) {
  const seed = (code && String(code).trim()) ? String(code).trim().toUpperCase() : makeStoryCode(storyRng('seed' + Date.now() + Math.random()));
  const rng = storyRng(seed);

  // Act I theme is seeded; later acts are chosen at forks.
  const themeKeys = Object.keys(STORY_THEMES);
  const firstTheme = themeKeys[Math.floor(rng() * themeKeys.length)];

  storyRun = {
    code: seed,
    seed: seed,
    act: 0,
    qIndex: 0,
    step: "quest",
    acts: [],
    themes: [firstTheme],
    choices: [],
    offered: [],
    startedAt: Date.now(),
    updatedAt: Date.now()
  };

  const exclude = new Set();
  const act0Quest = pickThemeQuests(firstTheme, "sand", STORY_ACTS[0].count, rng, exclude);
  act0Quest.forEach(o => exclude.add(o.qid));
  storyRun.acts.push({ tier: "sand", theme: firstTheme, quests: act0Quest });

  // Auto-skip quests already completed in free roam
  storySkipDone();
  storySaveRun();
  storyRender();
}

function storyAdvance(qid) {
  if (!storyRun || storyRun.step !== "quest") return;
  const cur = storyCurrentQuest();
  if (!cur || cur.qid !== qid) return; // only the active story quest advances it
  storyRun.qIndex++;
  storyRun.updatedAt = Date.now();
  storySkipDone();
  storySaveRun();
  storyRender();
}

function storyCurrentQuest() {
  if (!storyRun || storyRun.step !== "quest") return null;
  const act = storyRun.acts[storyRun.act];
  if (!act) return null;
  return act.quests[storyRun.qIndex] || null;
}

function storySkipDone() {
  // Fast-forward through anything already completed (e.g. in free roam)
  let safety = 0;
  while (storyRun && storyRun.step === "quest" && safety < 60) {
    safety++;
    const act = storyRun.acts[storyRun.act];
    if (!act) { storyRun.step = "done"; break; }
    const cur = act.quests[storyRun.qIndex];
    if (!cur) {
      // End of act: fork or finish
      if (storyRun.act < 3) {
        storyRun.step = "fork";
        storyRun.offered = storyOfferThemes();
      } else {
        storyRun.step = "done";
      }
      break;
    }
    if (!questDone(cur.qid)) break;
    storyRun.qIndex++;
  }
}

function storyOfferThemes() {
  const rng = storyRng(storyRun.seed + "-fork-" + storyRun.act);
  const used = new Set(storyRun.themes);
  const available = Object.keys(STORY_THEMES).filter(t => !used.has(t));
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }
  return available.slice(0, 3);
}

function storyChoose(theme) {
  if (!storyRun || storyRun.step !== "fork") return;
  const actIdx = storyRun.act;
  const rng = storyRng(storyRun.seed + "-act-" + (actIdx + 1) + "-" + theme);
  const exclude = new Set();
  storyRun.acts.forEach(a => a.quests.forEach(q => exclude.add(q.qid)));
  const spec = STORY_ACTS[actIdx + 1];
  const quests = pickThemeQuests(theme, spec.tier, spec.count, rng, exclude);

  storyRun.choices.push({ act: actIdx, theme: theme });
  storyRun.themes.push(theme);
  storyRun.acts.push({ tier: spec.tier, theme: theme, quests: quests });
  storyRun.act = actIdx + 1;
  storyRun.qIndex = 0;
  storyRun.step = "quest";
  storyRun.updatedAt = Date.now();
  storySkipDone();
  storySaveRun();
  storyRender();
}

function storyNewRun() {
  storyBegin(null);
}

function storyDoneCount() {
  if (!storyRun) return 0;
  let n = 0;
  storyRun.acts.forEach(a => a.quests.forEach(q => { if (questDone(q.qid)) n++; }));
  return n;
}

/* ============================================================
 * RENDERER
 * ============================================================ */
function storyT(key) {
  return storyS(storyLang).ui[key] !== undefined ? storyS(storyLang).ui[key] : key;
}

function storyBeat(tier, idx) {
  const beats = storyS(storyLang).beats[tier] || [];
  return beats[idx % beats.length] || "";
}

function storyFill(tpl, vars) {
  return tpl
    .replace(/\{emoji\}/g, vars.emoji || "📦")
    .replace(/\{quest\}/g, vars.quest || "")
    .replace(/\{guild\}/g, vars.guild || "")
    .replace(/\{count\}/g, vars.count !== undefined ? vars.count : "");
}

// Escape a user-visible string for use inside an HTML attribute
function storyEsc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function storyPanelHTML() {
  const L = storyS(storyLang);
  if (!storyRun) return storyIntroHTML(L);

  const progressEl = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
    <span style="font-weight:bold;color:var(--accent-gold);">${storyEsc(L.ui.storyMode)}</span>
    <span style="font-size:0.75em;color:var(--text-dim);">${storyEsc(L.ui.adventureCode)}: <code style="background:var(--bg-input);padding:0.1rem 0.4rem;border-radius:4px;cursor:pointer;" onclick="navigator.clipboard.writeText('${storyEsc(storyRun.code)}');alert('${storyEsc(L.ui.adventureCode)}: ${storyEsc(storyRun.code)}')">${storyEsc(storyRun.code)}</code></span>
  </div>`;

  const newBtn = `<button class="btn btn-small" onclick="storyNewRun()">${storyEsc(L.ui.newAdventure)}</button>`;

  if (storyRun.step === "done") return storyDoneHTML(L, progressEl, newBtn);

  const actIdx = storyRun.act;
  const act = storyRun.acts[actIdx];
  const spec = STORY_ACTS[actIdx];
  const total = STORY_ACTS.reduce((s, a) => s + a.count, 0);
  const qPos = STORY_ACTS.slice(0, actIdx).reduce((s, a) => s + a.count, 0) + storyRun.qIndex + 1;

  const actName = L.acts[act.tier].title;
  const themeName = L.themes[act.theme] ? L.themes[act.theme].name : act.theme;
  const trailHTML = storyTrailHTML();

  if (storyRun.step === "fork") return storyForkHTML(L, progressEl, newBtn, actIdx, actName, qPos, total, trailHTML);

  // ---- quest step ----
  const cur = storyCurrentQuest();
  if (!cur) return "";
  const beatTpl = storyBeat(act.tier, storyRun.qIndex + actIdx);
  const beatHTML = storyFill(beatTpl, { emoji: cur.emoji, quest: storyTTitle(cur.title), guild: storyTGuildName(cur.guild) });

  const guildObj = (typeof allAspects !== 'undefined') ? allAspects.find(g => g && g.name === cur.guild) : null;
  const questCardHTML = (guildObj && typeof renderQuestCard === 'function')
    ? renderQuestCard(guildObj, guildObj[cur.tier].find(q => makeQuestId(guildObj.name, cur.tier, q[0]) === cur.qid), cur.tier, false)
    : `<div class="quest-card ${cur.tier}"><div class="quest-info"><strong>${storyEsc(cur.title)}</strong></div></div>`;

  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    ${progressEl}
    <div style="margin-bottom:0.8rem;">
      <span class="tier-pill unlocked" style="display:inline-block;">${storyEsc(L.ui.act)} ${actIdx + 1} ${storyEsc(L.ui.of)} 4 — ${storyEsc(actName)}</span>
      <span style="margin-left:0.5rem;font-size:0.8em;color:var(--text-dim);">${storyEsc(themeName)} · ${storyEsc(L.ui.quest)} ${qPos}/${total}</span>
    </div>
    <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">
      ${beatHTML}
    </div>
    ${questCardHTML}
    <div style="font-size:0.8em;color:var(--accent-green);margin-top:0.6rem;">📷 ${storyEsc(L.ui.photoHint)}</div>
    ${trailHTML}
    <div style="margin-top:0.8rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      ${newBtn}
      ${cur && questDone(cur.qid) ? `<button class="btn btn-small" onclick="storyAdvance('${storyEsc(cur.qid)}')">${storyEsc(L.ui.skipHint)}</button>` : ''}
    </div>
  </div>`;
}

function storyTTitle(title) {
  try { return (typeof t === 'function') ? t(title) : title; } catch (e) { return title; }
}
function storyTGuildName(name) {
  const L = storyS(storyLang);
  try {
    if (lang === 'en') return name;
    const Lg = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang] : null;
    if (Lg && Lg.guilds && Lg.guilds[name] && Lg.guilds[name].name) return Lg.guilds[name].name;
    return name;
  } catch (e) { return name; }
}

function storyTrailHTML() {
  if (!storyRun) return "";
  let html = `<div style="margin-top:0.9rem;font-size:0.75em;color:var(--text-dim);">
    <span style="font-weight:bold;">${storyEsc(storyS(storyLang).ui.deedsDone)}:</span> `;
  storyRun.acts.forEach(a => {
    a.quests.forEach(q => {
      const done = questDone(q.qid);
      html += `<span title="${storyEsc(q.title)}" style="opacity:${done ? 1 : 0.35};margin-right:0.25rem;">${done ? q.emoji : (q.emoji || "·")}</span>`;
    });
  });
  html += ` (${storyDoneCount()}/${STORY_ACTS.reduce((s, a) => s + a.count, 0)})</div>`;
  return html;
}

function storyForkHTML(L, progressEl, newBtn, actIdx, actName, qPos, total, trailHTML) {
  const intro = L.forks.intro[Math.floor(Math.random() * L.forks.intro.length)];
  let optHTML = "";
  storyRun.offered.forEach(themeKey => {
    const th = L.themes[themeKey] || { name: themeKey, line: "" };
    optHTML += `<button style="display:block;width:100%;text-align:left;background:var(--bg-input);border:1px solid var(--border-subtle);border-radius:8px;padding:0.6rem 0.8rem;margin-bottom:0.5rem;color:var(--text-light);cursor:pointer;" onclick="storyChoose('${storyEsc(themeKey)}')">
      <strong style="color:var(--accent-gold);">${storyEsc(th.name)}</strong><br><span style="font-size:0.85em;">${storyEsc(th.line)}</span>
    </button>`;
  });

  const lastChoices = storyRun.choices.map(c => {
    const th = L.themes[c.theme] || { name: c.theme };
    return `<span class="tier-pill unlocked" style="display:inline-block;margin:0.2rem;">${storyEsc(th.name)}</span>`;
  }).join('');

  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    ${progressEl}
    <div style="margin-bottom:0.8rem;">
      <span class="tier-pill unlocked" style="display:inline-block;">${storyEsc(L.ui.act)} ${actIdx + 1} ${storyEsc(L.ui.of)} 4 — ${storyEsc(actName)}</span>
      <span style="margin-left:0.5rem;font-size:0.8em;color:var(--text-dim);">${storyEsc(L.ui.quest)} ${storyEsc(Math.min(qPos, total))}/${total}</span>
    </div>
    <div style="background:var(--bg-input);border-left:3px solid var(--accent-orange);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">
      ${storyEsc(intro)}
    </div>
    <p style="font-weight:bold;color:var(--accent-gold);margin-bottom:0.3rem;">${storyEsc(L.forks.question)}</p>
    <p style="font-size:0.85em;color:var(--text-dim);margin-bottom:0.6rem;">${storyEsc(L.ui.choosePath)}</p>
    ${optHTML}
    ${lastChoices ? `<div style="margin-top:0.5rem;font-size:0.8em;color:var(--text-dim);">${storyEsc(L.ui.resume)} ${lastChoices}</div>` : ''}
    ${trailHTML}
    <div style="margin-top:0.8rem;">${newBtn}</div>
  </div>`;
}

function storyDoneHTML(L, progressEl, newBtn) {
  const count = storyDoneCount();
  const epi = L.epilogue[Math.floor(Math.random() * L.epilogue.length)];
  const epiHTML = storyFill(epi, { count: count });
  const choices = storyRun.choices.map(c => {
    const th = L.themes[c.theme] || { name: c.theme };
    return `<span class="tier-pill unlocked" style="display:inline-block;margin:0.2rem;">${storyEsc(th.name)}</span>`;
  }).join('');

  return `<div style="background:var(--bg-panel);border:1px solid var(--accent-gold);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    ${progressEl}
    <h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">🏁 ${storyEsc(L.ui.done)}</h3>
    <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">
      ${epiHTML}
    </div>
    <p style="font-size:0.85em;color:var(--text-dim);">${storyEsc(L.ui.doneTag)}</p>
    ${choices ? `<div style="margin-top:0.5rem;font-size:0.85em;color:var(--text-dim);">${storyEsc(L.ui.resume)} ${choices}</div>` : ''}
    <div style="margin-top:0.8rem;">${newBtn}</div>
  </div>`;
}

function storyIntroHTML(L) {
  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    <h3 style="color:var(--accent-gold);margin-bottom:0.3rem;">📖 ${storyEsc(L.ui.storyMode)}</h3>
    <p style="font-size:0.9em;color:var(--text-light);margin-bottom:0.6rem;">${storyEsc(L.ui.storyTag)}</p>
    <p style="font-size:0.8em;color:var(--text-dim);margin-bottom:0.7rem;">${storyEsc(L.ui.enterCode)}</p>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      <input id="story-code-input" placeholder="ABC234" style="width:9rem;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.5rem;text-transform:uppercase;" maxlength="6">
      <button class="btn btn-small" style="background:var(--accent-green-dark);color:var(--text-bright);" onclick="storyBegin(document.getElementById('story-code-input').value)">${storyEsc(L.ui.begin)}</button>
      <button class="btn btn-small" onclick="storyNewRun()">${storyEsc(L.ui.newAdventure)}</button>
    </div>
  </div>`;
}

/* ---- mode wiring ---- */
function storyToggleMode(on) {
  storyMode = !!on;
  try { window.storyMode = storyMode; } catch (e) {}
  try { localStorage.setItem('rpg_storyMode', storyMode ? 'true' : 'false'); } catch (e) {}
  if (storyMode) {
    storyLoadRun();
    if (!storyRun) storyBegin(null);
  }
  if (typeof renderQuests === 'function') renderQuests();
}

function storyRender() {
  if (!storyMode && !(typeof window !== 'undefined' && window.storyMode)) return;
  storyMode = true;
  try { window.storyMode = true; } catch (e) {}
  try { storyLang = (typeof lang !== 'undefined') ? lang : 'en'; } catch (e) { storyLang = 'en'; }
  const panel = document.getElementById('story-panel');
  if (!panel) return;
  panel.innerHTML = storyPanelHTML();
}

/* ---- public API (used by index.html) ---- */
window.storyMode = storyMode;
window.storyRun = storyRun;
window.storyLang = storyLang;
window.storyRender = storyRender;
window.storyBegin = storyBegin;
window.storyNewRun = storyNewRun;
window.storyAdvance = storyAdvance;
window.storyChoose = storyChoose;
window.storyToggleMode = storyToggleMode;
window.storyLoadRun = storyLoadRun;
window.storySaveRun = storySaveRun;
window.storyDoneCount = storyDoneCount;
window.storyS = storyS;
window.storyBeat = storyBeat;
window.storyT = storyT;
window.storyCurrentQuest = storyCurrentQuest;
window.STORY_ACTS = STORY_ACTS;

// Restore mode on load
try { storyMode = localStorage.getItem('rpg_storyMode') === 'true'; } catch (e) {}
if (storyMode) storyLoadRun();
