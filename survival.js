/* ============================================================
 * THE VILLAGE — SURVIVAL MODE
 * A procedural preparedness circuit: the family trains 30 real
 * quests across four escalating acts (Assess → Store → Sustain →
 * Endure), focused on water, food, energy, shelter, health, and
 * community self-reliance.
 *
 * Adopts Project NOMAD's philosophy (offline-first knowledge for
 * when infrastructure fails — Apache 2.0, Crosstalk-Solutions):
 * quests as drills, rotation as spaced repetition, and a Water
 * Depot knowledge base. NOMAD itself is linked as the offline
 * Knowledge Depot.
 *
 * i18n: add a language by adding a block to SURVIVAL_I18N.
 * ============================================================ */

const SURVIVAL_I18N = {
  "en": {
    "ui": {
      "survivalMode": "Survival Mode",
      "survivalTag": "A preparedness circuit — the family trains for the long haul: water, food, energy, shelter, health, community. Every run is a new drill.",
      "newRun": "🌀 New Drill",
      "runCode": "Drill code",
      "begin": "Begin",
      "act": "Act",
      "of": "of",
      "quest": "Task",
      "choosePath": "The circuit forks. Every road trains a different family strength — each one matters when it counts.",
      "resume": "Your drill continues…",
      "epilogue": "After-Action Report",
      "done": "Drill complete",
      "deedsDone": "tasks in the ledger",
      "enterCode": "Enter a drill code to replay a circuit, or press Begin for a fresh one.",
      "copyCode": "Share this code to replay this exact drill:",
      "photoHint": "Keep the ledger: Before / During / After photos, then Post to Permies.",
      "skipHint": "Already done — moving on."
    },
    "acts": {
      "sand":  { "title": "Assess", "intro": ["The family stands at the pantry door and counts what it actually has. No panic, no hoarding — just an honest tally of water, food, heat, and skill. This circuit starts with the real inventory.", "The season ahead is uncertain for everyone. The family that prepares together does not fear it the same way. First: see clearly what you have and what you lack."] },
      "straw": { "title": "Store", "intro": ["The tally is done. Now the work is storage: water that stays drinkable, food that keeps, fuel that holds. Every container filled and dated is a bet on your own competence.", "The house becomes a depot. Water in the dark, food in the pantry, tools sharp and counted. Rotation is the discipline that makes storage honest."] },
      "wood":  { "title": "Sustain", "intro": ["Storage without skills is just stuff. This act turns the household into a system: charging when the grid is down, filtering when the supply is uncertain, growing and preserving without a store to fall back on.", "The family now produces what it needs. The spring, the garden, the sun, the hands — each becomes a working part of the household. Practice until it is boring, because boring means it works."] },
      "iron":  { "title": "Endure", "intro": ["The long game. What you have built is now tested at full strength: deep storage, working systems, and skills that hold when everything else is uncertain. This is the point of all of it.", "The elders say the family that can endure together can also thrive together. Finish this circuit and the household is not just surviving — it is self-reliant."] }
    },
    "themes": {
      "water": { "name": "Water", "line": "Spring, well, rain, and pipes — the first and last thing the household needs." },
      "food":  { "name": "Food", "line": "Grow it, store it, preserve it, forage it — the pantry that never empties." },
      "energy":{ "name": "Energy", "line": "Sun, wood, batteries, and fire — power that does not depend on the grid." },
      "shelter":{ "name": "Shelter", "line": "Walls, roof, warmth, and tools — the house that holds through anything." },
      "health":{ "name": "Health", "line": "Medicine, care, and calm — the family body that stays strong." },
      "community":{ "name": "Community", "line": "Neighbors, trade, and helping hands — no family is an island for long." }
    },
    "beats": {
      "sand": [
        "Drill one: {emoji} {quest}. Small, concrete, part of the tally. The {guild} way keeps it simple and honest.",
        "The inventory needs {emoji} {quest} done. Do it now, do it right, and mark it in the ledger.",
        "A family that prepares starts here: {emoji} {quest}. The {guild} craft, at the most basic level that still counts."
      ],
      "straw": [
        "Storage discipline: {emoji} {quest}. Label it, date it, and know where it lives — the {guild} way.",
        "The depot grows. {emoji} {quest} is this rotation's work; do it before the season turns.",
        "This is what keeping things means: {emoji} {quest}. The {guild} standard, applied without shortcuts."
      ],
      "wood": [
        "Now the household works without the store: {emoji} {quest}. The {guild} system, run by your own hands.",
        "No audience but the family — and that is the point. {emoji} {quest}, done properly, because it is the right work.",
        "The system is alive. Your part of it today: {emoji} {quest}. The {guild} craft at working strength."
      ],
      "iron": [
        "The long game. {emoji} {quest} — one of the {guild} deeds that matters most when everything else is uncertain.",
        "Endure means done well enough to be relied on. {emoji} {quest}, finished to the standard that would carry a household.",
        "This circuit's summit: {emoji} {quest}. The {guild} skill at full strength, ready when it is needed."
      ]
    },
    "forks": {
      "intro": [
        "Act complete. The family reviews the ledger at the table, and the next focus is yours to choose.",
        "The drill pauses for a decision. Which family strength gets the next block of practice?"
      ],
      "question": "Where does the family train next?"
    },
    "consequences": {
      "water": "The family turned to water. The spring, the storage, the filters — the household's first line, made ready.",
      "food":  "The family turned to food. The garden, the pantry, the preserves — a growing stock of your own making.",
      "energy": "The family turned to energy. Sun, wood, and batteries — power in the family's own hands.",
      "shelter": "The family turned to shelter. Walls, warmth, and tools — the house made to hold.",
      "health": "The family turned to health. Medicine and calm — the family body kept strong.",
      "community": "The family turned to community. Neighbors and trade — strength beyond the front door."
    },
    "epilogue": [
      "The drill closes. {count} tasks sit in the ledger — water rotated, food stored, systems practiced, all proven with photos and witnesses. The family that ran this circuit did not need the world to be easy; it needed to be ready. It is.",
      "After-action: {count} tasks, done honestly, each one a small bet on the family's own competence. The household is a little more self-reliant than it was when the drill began. That is the whole point."
    ],
    "doneTag": "A drill complete. The circuit reshuffles — a new preparation path is always waiting."
  },
  "es": {
    "ui": {
      "survivalMode": "Modo Supervivencia",
      "survivalTag": "Un circuito de preparación — la familia entrena para la larga temporada: agua, comida, energía, refugio, salud y comunidad. Cada partida es un nuevo ejercicio.",
      "newRun": "🌀 Nuevo Ejercicio",
      "runCode": "Código de ejercicio",
      "begin": "Comenzar",
      "act": "Acto",
      "of": "de",
      "quest": "Tarea",
      "choosePath": "El circuito se bifurca. Cada camino entrena una fortaleza familiar — cada una importa cuando llega el momento.",
      "resume": "Tu ejercicio continúa…",
      "epilogue": "Informe Posterior a la Acción",
      "done": "Ejercicio completado",
      "deedsDone": "tareas en el registro",
      "enterCode": "Introduce un código de ejercicio para repetir un circuito, o pulsa Comenzar para uno nuevo.",
      "copyCode": "Comparte este código para repetir este ejercicio exacto:",
      "photoHint": "Mantén el registro: fotos de Antes / Durante / Después, y luego Publicar en Permies.",
      "skipHint": "Ya hecha — continuando."
    },
    "acts": {
      "sand":  { "title": "Evaluar", "intro": ["La familia está en la puerta de la despensa y cuenta lo que realmente tiene. Sin pánico, sin acaparar — solo un inventario honesto de agua, comida, calor y habilidad. Este circuito empieza con el inventario real.", "La temporada que viene es incierta para todos. La familia que se prepara junta no la teme igual. Primero: ver con claridad qué tienes y qué te falta."] },
      "straw": { "title": "Almacenar", "intro": ["El inventario está hecho. Ahora el trabajo es el almacenamiento: agua que sigue siendo potable, comida que se guarda, combustible que aguanta. Cada contenedor lleno y fechado es una apuesta por tu propia competencia.", "La casa se vuelve depósito. Agua en lo oscuro, comida en la despensa, herramientas afiladas y contadas. La rotación es la disciplina que hace honesto el almacenamiento."] },
      "wood":  { "title": "Sostener", "intro": ["Almacenar sin habilidades es solo cosas. Este acto convierte la casa en un sistema: cargar cuando se cae la red, filtrar cuando el suministro es incierto, cultivar y conservar sin tienda a la que acudir.", "La familia ahora produce lo que necesita. El manantial, el jardín, el sol, las manos — cada uno se vuelve parte funcional de la casa. Practica hasta que sea aburrido, porque aburrido significa que funciona."] },
      "iron":  { "title": "Perdurar", "intro": ["El juego largo. Lo que has construido ahora se prueba a plena fuerza: almacenamiento profundo, sistemas que funcionan y habilidades que aguantan cuando todo lo demás es incierto. Este es el punto de todo ello.", "Los ancianos dicen que la familia que puede perdurar junta también puede prosperar junta. Termina este circuito y la casa no solo sobrevive — es autosuficiente."] }
    },
    "themes": {
      "water": { "name": "Agua", "line": "Manantial, pozo, lluvia y tuberías — lo primero y lo último que necesita la casa." },
      "food":  { "name": "Comida", "line": "Cultívala, guárdala, consérvala, recógela — la despensa que nunca se vacía." },
      "energy":{ "name": "Energía", "line": "Sol, leña, baterías y fuego — poder que no depende de la red." },
      "shelter":{ "name": "Refugio", "line": "Muros, techo, calor y herramientas — la casa que aguanta lo que venga." },
      "health":{ "name": "Salud", "line": "Medicina, cuidado y calma — el cuerpo familiar que se mantiene fuerte." },
      "community":{ "name": "Comunidad", "line": "Vecinos, trueque y manos que ayudan — ninguna familia es una isla por mucho tiempo." }
    },
    "beats": {
      "sand": [
        "Ejercicio uno: {emoji} {quest}. Pequeña, concreta, parte del inventario. La manera de {guild} lo mantiene simple y honesto.",
        "El inventario necesita {emoji} {quest} hecha. Hazla ahora, hazla bien y márcala en el registro.",
        "Una familia que se prepara empieza aquí: {emoji} {quest}. El oficio de {guild}, al nivel más básico que todavía cuenta."
      ],
      "straw": [
        "Disciplina de almacenamiento: {emoji} {quest}. Etiquétala, féchala y sabe dónde vive — la manera de {guild}.",
        "El depósito crece. {emoji} {quest} es el trabajo de esta rotación; hazla antes de que gire la temporada.",
        "Esto es lo que significa conservar: {emoji} {quest}. El estándar de {guild}, aplicado sin atajos."
      ],
      "wood": [
        "Ahora la casa funciona sin la tienda: {emoji} {quest}. El sistema de {guild}, manejado con tus propias manos.",
        "Sin más público que la familia — y ese es el punto. {emoji} {quest}, hecha correctamente, porque es el trabajo correcto.",
        "El sistema está vivo. Tu parte hoy: {emoji} {quest}. El oficio de {guild} a fuerza de trabajo."
      ],
      "iron": [
        "El juego largo. {emoji} {quest} — una de las hazañas de {guild} que más importan cuando todo lo demás es incierto.",
        "Perdurar significa hecha tan bien que se puede confiar en ella. {emoji} {quest}, terminada al estándar que sostendría una casa.",
        "La cumbre de este circuito: {emoji} {quest}. La habilidad de {guild} a plena fuerza, lista cuando se necesite."
      ]
    },
    "forks": {
      "intro": [
        "Acto completo. La familia revisa el registro en la mesa, y el próximo enfoque es tuyo para elegir.",
        "El ejercicio hace una pausa para decidir. ¿Qué fortaleza familiar recibe el siguiente bloque de práctica?"
      ],
      "question": "¿Dónde entrena la familia a continuación?"
    },
    "consequences": {
      "water": "La familia se volvió hacia el agua. El manantial, el almacenamiento, los filtros — la primera línea de la casa, lista.",
      "food":  "La familia se volvió hacia la comida. El jardín, la despensa, las conservas — una reserva creciente hecha por ti.",
      "energy": "La familia se volvió hacia la energía. Sol, leña y baterías — poder en las propias manos de la familia.",
      "shelter": "La familia se volvió hacia el refugio. Muros, calor y herramientas — la casa hecha para aguantar.",
      "health": "La familia se volvió hacia la salud. Medicina y calma — el cuerpo familiar mantenido fuerte.",
      "community": "La familia se volvió hacia la comunidad. Vecinos y trueque — fuerza más allá de la puerta."
    },
    "epilogue": [
      "El ejercicio termina. {count} tareas están en el registro — agua rotada, comida guardada, sistemas practicados, todo probado con fotos y testigos. La familia que corrió este circuito no necesitaba que el mundo fuera fácil; necesitaba estar lista. Lo está.",
      "Informe posterior: {count} tareas, hechas con honestidad, cada una una pequeña apuesta por la propia competencia de la familia. La casa es un poco más autosuficiente que cuando empezó el ejercicio. Ese es todo el punto."
    ],
    "doneTag": "Un ejercicio completo. El circuito se rebaraja — un nuevo camino de preparación siempre espera."
  },
  "fr": {
    "ui": {
      "survivalMode": "Mode Survie",
      "survivalTag": "Un circuit de préparation — la famille s'entraîne pour le long terme : eau, nourriture, énergie, abri, santé, communauté. Chaque partie est un nouvel exercice.",
      "newRun": "🌀 Nouvel Exercice",
      "runCode": "Code d'exercice",
      "begin": "Commencer",
      "act": "Acte",
      "of": "sur",
      "quest": "Tâche",
      "choosePath": "Le circuit se divise. Chaque route entraîne une force familiale — chacune compte quand ça arrive.",
      "resume": "Votre exercice continue…",
      "epilogue": "Compte Rendu d'Action",
      "done": "Exercice terminé",
      "deedsDone": "tâches consignées",
      "enterCode": "Entrez un code d'exercice pour rejouer un circuit, ou appuyez sur Commencer pour un nouveau.",
      "copyCode": "Partagez ce code pour rejouer exactement cet exercice :",
      "photoHint": "Tenez le registre : photos Avant / Pendant / Après, puis Publier sur Permies.",
      "skipHint": "Déjà fait — on continue."
    },
    "acts": {
      "sand":  { "title": "Évaluer", "intro": ["La famille se tient à la porte du garde-manger et compte ce qu'elle a vraiment. Pas de panique, pas d'accumulation — juste un inventaire honnête d'eau, de nourriture, de chaleur et de compétence. Ce circuit commence par le vrai inventaire.", "La saison qui vient est incertaine pour tout le monde. La famille qui se prépare ensemble ne la craint pas de la même manière. D'abord : voir clairement ce que vous avez et ce qui manque."] },
      "straw": { "title": "Stocker", "intro": ["L'inventaire est fait. Maintenant, le travail est le stockage : une eau qui reste potable, une nourriture qui se garde, un carburant qui tient. Chaque contenant rempli et daté est un pari sur votre propre compétence.", "La maison devient un dépôt. L'eau dans le noir, la nourriture au garde-manger, les outils affûtés et comptés. La rotation est la discipline qui rend le stockage honnête."] },
      "wood":  { "title": "Soutenir", "intro": ["Stocker sans compétences, c'est juste des choses. Cet acte transforme la maison en système : recharger quand le réseau tombe, filtrer quand l'approvisionnement est incertain, cultiver et conserver sans magasin où se rabattre.", "La famille produit maintenant ce dont elle a besoin. La source, le jardin, le soleil, les mains — chacun devient une pièce fonctionnelle de la maison. Entraînez-vous jusqu'à ce que ce soit ennuyeux, parce qu'ennuyeux veut dire que ça marche."] },
      "iron":  { "title": "Endurer", "intro": ["Le jeu long. Ce que vous avez construit est maintenant testé à pleine force : stockage profond, systèmes qui fonctionnent et compétences qui tiennent quand tout le reste est incertain. C'est le but de tout cela.", "Les anciens disent que la famille qui peut endurer ensemble peut aussi prospérer ensemble. Terminez ce circuit et la maison ne survit pas seulement — elle est autosuffisante."] }
    },
    "themes": {
      "water": { "name": "Eau", "line": "Source, puits, pluie et tuyaux — la première et la dernière chose dont la maison a besoin." },
      "food":  { "name": "Nourriture", "line": "Cultivez-la, stockez-la, conservez-la, cueillez-la — le garde-manger qui ne se vide jamais." },
      "energy":{ "name": "Énergie", "line": "Soleil, bois, batteries et feu — un pouvoir qui ne dépend pas du réseau." },
      "shelter":{ "name": "Abri", "line": "Murs, toit, chaleur et outils — la maison qui tient contre tout." },
      "health":{ "name": "Santé", "line": "Médecine, soin et calme — le corps familial qui reste fort." },
      "community":{ "name": "Communauté", "line": "Voisins, échange et mains secourables — aucune famille n'est une île longtemps." }
    },
    "beats": {
      "sand": [
        "Exercice un : {emoji} {quest}. Petite, concrète, partie de l'inventaire. La manière de {guild} la garde simple et honnête.",
        "L'inventaire a besoin de {emoji} {quest}. Faites-la maintenant, bien, et marquez-la dans le registre.",
        "Une famille qui se prépare commence ici : {emoji} {quest}. Le métier de {guild}, au niveau le plus bas qui compte encore."
      ],
      "straw": [
        "Discipline de stockage : {emoji} {quest}. Étiquetez-la, datez-la, sachez où elle vit — la manière de {guild}.",
        "Le dépôt grandit. {emoji} {quest} est le travail de cette rotation ; faites-la avant que la saison ne tourne.",
        "C'est ça, conserver : {emoji} {quest}. Le standard de {guild}, appliqué sans raccourci."
      ],
      "wood": [
        "Maintenant la maison fonctionne sans le magasin : {emoji} {quest}. Le système de {guild}, mené de vos propres mains.",
        "Pas d'autre public que la famille — et c'est le but. {emoji} {quest}, faite correctement, parce que c'est le juste travail.",
        "Le système est vivant. Votre part aujourd'hui : {emoji} {quest}. Le métier de {guild} à pleine force de travail."
      ],
      "iron": [
        "Le jeu long. {emoji} {quest} — l'un des exploits de {guild} qui comptent le plus quand tout le reste est incertain.",
        "Endurer, c'est fait assez bien pour qu'on puisse s'y fier. {emoji} {quest}, finie au standard qui porterait une maison.",
        "Le sommet de ce circuit : {emoji} {quest}. La compétence de {guild} à pleine force, prête quand on en a besoin."
      ]
    },
    "forks": {
      "intro": [
        "Acte terminé. La famille relit le registre à table, et le prochain focus est à vous de choisir.",
        "L'exercice fait une pause pour décider. Quelle force familiale reçoit le prochain bloc de pratique ?"
      ],
      "question": "Où la famille s'entraîne-t-elle ensuite ?"
    },
    "consequences": {
      "water": "La famille s'est tournée vers l'eau. La source, le stockage, les filtres — la première ligne de la maison, prête.",
      "food":  "La famille s'est tournée vers la nourriture. Le jardin, le garde-manger, les conserves — une réserve grandissante de votre propre fait.",
      "energy": "La famille s'est tournée vers l'énergie. Soleil, bois et batteries — le pouvoir entre les mains de la famille.",
      "shelter": "La famille s'est tournée vers l'abri. Murs, chaleur et outils — la maison faite pour tenir.",
      "health": "La famille s'est tournée vers la santé. Médecine et calme — le corps familial maintenu fort.",
      "community": "La famille s'est tournée vers la communauté. Voisins et échange — la force au-delà de la porte."
    },
    "epilogue": [
      "L'exercice se termine. {count} tâches sont dans le registre — eau rotée, nourriture stockée, systèmes pratiqués, tout prouvé par photos et témoins. La famille qui a couru ce circuit n'avait pas besoin que le monde soit facile ; elle avait besoin d'être prête. Elle l'est.",
      "Compte rendu : {count} tâches, faites avec honnêteté, chacune un petit pari sur la propre compétence de la famille. La maison est un peu plus autosuffisante qu'elle ne l'était au début de l'exercice. C'est tout le but."
    ],
    "doneTag": "Un exercice terminé. Le circuit se rebat — un nouveau chemin de préparation attend toujours."
  }
};

/* ============================================================
 * SURVIVAL DOMAINS → GUILDS
 * ============================================================ */
const SURVIVAL_THEMES = {
  water:   ["Plumbing and Hot Water", "Earthworks", "Greywater and Willow Feeders", "Homesteading"],
  food:    ["Gardening", "Food Prep", "Foraging", "Animal Care"],
  energy:  ["Electricity", "Rocket", "Metalworking", "Tool Care"],
  shelter: ["Natural Building", "Woodland Care", "Round Wood Woodworking", "Dimensional Lumber Woodworking"],
  health:  ["Natural Medicine", "Vitality", "Nest"],
  community: ["Community Living", "Community", "Commerce", "Homesteading", "Oddball"]
};

const SURVIVAL_ACTS = [
  { tier: "sand",  count: 9 },
  { tier: "straw", count: 7 },
  { tier: "wood",  count: 7 },
  { tier: "iron",  count: 7 }
]; // 30 tasks per drill

/* ============================================================
 * WATER DEPOT — practical knowledge, honestly sourced
 * (CDC / FEMA / standard food-grade storage practice)
 * ============================================================ */
const SURVIVAL_WATER_GUIDE = [
  {
    title: "Container",
    body: "Food-grade containers only — 55-gal drums, 5-gal jerry cans, 1-gal jugs. Never milk jugs (they degrade and leach). Wash with soap and water before first fill; rinse well.",
    source: "CDC: Emergency Water Storage"
  },
  {
    title: "Where",
    body: "Cool and dark. Perfect for a crawl space. Keep off concrete (a pallet or 2x4s avoids leaching and makes rotation easier). Protect from freezing — stored water that freezes can crack containers.",
    source: "CDC / FEMA: Water Storage"
  },
  {
    title: "Rotation",
    body: "Rotate every 6 months — spring and fall, same as the clocks. Stagger it: replace half the containers each time so you always have a full reserve while the other half refreshes. Label every container with its fill date.",
    source: "CDC: Replace stored water every 6 months"
  },
  {
    title: "Keeping it potable",
    body: "Fill from the cleanest source and seal tight. If you want extra insurance, treat with unscented chlorine bleach at fill time: 1/8 teaspoon (about 8 drops) of 5–6% bleach per gallon of clear water. Use bleach with no additives; for cloudy water double it.",
    source: "CDC / Red Cross: Bleach treatment guidance"
  },
  {
    title: "Taste",
    body: "Stored water can taste flat. Fix it by pouring it back and forth between two clean containers to add air back in before drinking. If it smells or looks off, do not drink it — replace the batch.",
    source: "CDC: stored water taste"
  },
  {
    title: "Spring water note",
    body: "Your spring is a great source — treat it as untreated surface water: store it, rotate it, and if it will sit more than 6 months, treat it before long storage. When in doubt about a batch, boil or filter before drinking.",
    source: "CDC: untreated water sources"
  }
];

function survRotationMonths(lastMonth) {
  /* lastMonth 0-11, rotation every 6 months. Returns next two [monthIdx, yearOffset]. */
  let a = (lastMonth + 6) % 12;
  let aY = Math.floor((lastMonth + 6) / 12);
  let b = (a + 6) % 12;
  let bY = aY + Math.floor((a + 6) / 12);
  return [[a, aY], [b, bY]];
}
const SURVIVAL_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/* ============================================================
 * ENGINE (mirrors story.js; survival-prefixed)
 * ============================================================ */
let survivalMode = false;
let survivalLang = 'en';

function survS(lang) { return SURVIVAL_I18N[lang] || SURVIVAL_I18N.en; }

function xmur3s(str) {
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
function mulberry32s(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function survRng(seedStr) { return mulberry32s(xmur3s(seedStr)()); }

function makeSurvCode(rng) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(rng() * chars.length)];
  return code;
}

let survRun = null;

function survLoadRun() {
  try {
    const raw = localStorage.getItem('rpg_survival_run');
    if (raw) survRun = JSON.parse(raw);
  } catch (e) { survRun = null; }
  try { window.survRun = survRun; } catch (e) {}
}
function survSaveRun() {
  try { localStorage.setItem('rpg_survival_run', JSON.stringify(survRun)); } catch (e) {}
  try { window.survRun = survRun; } catch (e) {}
}

function survGather(guildNames, tier, rng, exclude) {
  let out = [];
  if (typeof allAspects === 'undefined') return out;
  for (const gn of guildNames) {
    const a = allAspects.find(g => g && g.name === gn);
    if (!a || !a[tier]) continue;
    for (const q of a[tier]) {
      const qid = makeQuestId(a.name, tier, q[0]);
      if (exclude.has(qid)) continue;
      out.push({ guild: a.name, tier, qid, title: q[0], emoji: q[3] || "📦" });
    }
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  const done = out.filter(o => completedQuests.includes(o.qid));
  const notDone = out.filter(o => !completedQuests.includes(o.qid));
  return notDone.concat(done);
}

function survPick(theme, tier, count, rng, exclude) {
  const guilds = SURVIVAL_THEMES[theme] || [];
  let pool = survGather(guilds, tier, rng, exclude);
  if (pool.length < count) {
    const anyGuilds = (typeof allAspects !== 'undefined') ? allAspects.map(a => a.name) : [];
    const extra = survGather(anyGuilds, tier, rng, exclude);
    const seen = new Set(pool.map(o => o.qid));
    for (const o of extra) {
      if (!seen.has(o.qid)) { pool.push(o); seen.add(o.qid); }
      if (pool.length >= count) break;
    }
  }
  return pool.slice(0, count);
}

function survBegin(code) {
  const seed = (code && String(code).trim()) ? String(code).trim().toUpperCase() : makeSurvCode(survRng('seed' + Date.now() + Math.random()));
  const rng = survRng(seed);
  const themeKeys = Object.keys(SURVIVAL_THEMES);
  const firstTheme = themeKeys[Math.floor(rng() * themeKeys.length)];

  survRun = {
    code: seed, seed,
    act: 0, qIndex: 0, step: "quest",
    acts: [], themes: [firstTheme], choices: [], offered: [],
    startedAt: Date.now(), updatedAt: Date.now()
  };
  const exclude = new Set();
  const act0 = survPick(firstTheme, "sand", SURVIVAL_ACTS[0].count, rng, exclude);
  act0.forEach(o => exclude.add(o.qid));
  survRun.acts.push({ tier: "sand", theme: firstTheme, quests: act0 });
  survSkipDone();
  survSaveRun();
  survRender();
}

function survCurrent() {
  if (!survRun || survRun.step !== "quest") return null;
  const act = survRun.acts[survRun.act];
  return act ? act.quests[survRun.qIndex] || null : null;
}

function survAdvance(qid) {
  if (!survRun || survRun.step !== "quest") return;
  const cur = survCurrent();
  if (!cur || cur.qid !== qid) return;
  survRun.qIndex++;
  survRun.updatedAt = Date.now();
  survSkipDone();
  survSaveRun();
  survRender();
}

function survSkipDone() {
  let safety = 0;
  while (survRun && survRun.step === "quest" && safety < 60) {
    safety++;
    const act = survRun.acts[survRun.act];
    if (!act) { survRun.step = "done"; break; }
    const cur = act.quests[survRun.qIndex];
    if (!cur) {
      if (survRun.act < 3) { survRun.step = "fork"; survRun.offered = survOffer(); }
      else survRun.step = "done";
      break;
    }
    if (!questDone(cur.qid)) break;
    survRun.qIndex++;
  }
}

function survOffer() {
  const rng = survRng(survRun.seed + "-fork-" + survRun.act);
  const used = new Set(survRun.themes);
  const avail = Object.keys(SURVIVAL_THEMES).filter(t => !used.has(t));
  for (let i = avail.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [avail[i], avail[j]] = [avail[j], avail[i]];
  }
  return avail.slice(0, 3);
}

function survChoose(theme) {
  if (!survRun || survRun.step !== "fork") return;
  const actIdx = survRun.act;
  const rng = survRng(survRun.seed + "-act-" + (actIdx + 1) + "-" + theme);
  const exclude = new Set();
  survRun.acts.forEach(a => a.quests.forEach(q => exclude.add(q.qid)));
  const spec = SURVIVAL_ACTS[actIdx + 1];
  const quests = survPick(theme, spec.tier, spec.count, rng, exclude);
  survRun.choices.push({ act: actIdx, theme });
  survRun.themes.push(theme);
  survRun.acts.push({ tier: spec.tier, theme, quests });
  survRun.act = actIdx + 1;
  survRun.qIndex = 0;
  survRun.step = "quest";
  survRun.updatedAt = Date.now();
  survSkipDone();
  survSaveRun();
  survRender();
}

function survNewRun() { survBegin(null); }

function survDoneCount() {
  if (!survRun) return 0;
  let n = 0;
  survRun.acts.forEach(a => a.quests.forEach(q => { if (questDone(q.qid)) n++; }));
  return n;
}

/* ============================================================
 * RENDERER
 * ============================================================ */
function survT(key) { return survS(survivalLang).ui[key] !== undefined ? survS(survivalLang).ui[key] : key; }
function survBeat(tier, idx) { const b = survS(survivalLang).beats[tier] || []; return b[idx % b.length] || ""; }
function survFill(tpl, vars) {
  return tpl.replace(/\{emoji\}/g, vars.emoji || "📦").replace(/\{quest\}/g, vars.quest || "").replace(/\{guild\}/g, vars.guild || "").replace(/\{count\}/g, vars.count !== undefined ? vars.count : "");
}
function survEsc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
function survQuestTitle(t) { try { return (typeof t === 'function') ? t(t) : t; } catch(e) { return t; } }
function survGuildName(n) {
  try {
    if (lang === 'en') return n;
    const L = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang] : null;
    if (L && L.guilds && L.guilds[n] && L.guilds[n].name) return L.guilds[n].name;
    return n;
  } catch (e) { return n; }
}

function survWaterDepotHTML() {
  const L = survS(survivalLang);
  const guide = SURVIVAL_WATER_GUIDE.map(g => `<div class="curr-card" style="margin-bottom:0.5rem;">
    <div class="sci-head"><div class="sci-name">💧 ${g.title}</div><span class="math-tag">${g.source}</span></div>
    <div class="sci-row">${g.body}</div>
  </div>`).join('');

  const now = new Date();
  const curMonth = now.getMonth();
  const [ra, rb] = survRotationMonths(curMonth);
  const nextA = SURVIVAL_MONTHS[ra[0]] + (ra[1] ? ' (+' + ra[1] + 'y)' : '');
  const nextB = SURVIVAL_MONTHS[rb[0]] + (rb[1] ? ' (+' + rb[1] + 'y)' : '');
  const rotationCard = `<div class="sci-card" style="margin-bottom:0.8rem;">
    <div class="sci-head"><div class="sci-name">🔄 Rotation calendar</div><span class="math-tag">6-month rule</span></div>
    <div class="sci-row"><b>If you rotated last this month:</b> next rotations are <strong>${nextA}</strong>, then <strong>${nextB}</strong>.</div>
    <div class="sci-row" style="font-size:0.85em;color:var(--text-dim);">Stagger half your containers each time so the family always keeps a full reserve while the other half refreshes.</div>
  </div>`;

  const depot = `<div class="sec-title" style="margin-top:0.9rem;"><h2 style="font-size:0.95rem;">📚 ${lang === 'es' ? 'Depósito de Conocimiento (Knowledge Depot)' : 'Knowledge Depot'}</h2>
    <span class="sub" style="font-size:0.72rem;color:var(--text-dim);">${lang === 'es' ? 'Recursos gratuitos y sin conexión — inspirados en Project NOMAD.' : 'Free, offline-first resources — inspired by Project NOMAD.'}</span></div>
    <div>${[
      { t: "Project NOMAD — the offline survival computer", u: "https://github.com/Crosstalk-Solutions/project-nomad", d: "Apache-2.0; Wikipedia, medical references, Khan Academy, maps, and local AI on hardware you own, no internet." },
      { t: "CDC — Emergency Water Storage & Safety", u: "https://www.cdc.gov/healthywater/emergency/water-storage.html", d: "Official guidance: containers, rotation, treatment." },
      { t: "FEMA — Water in an Emergency", u: "https://www.ready.gov/water", d: "How much to store, how to keep it safe, how to treat it." },
      { t: "Appropedia — appropriate technology: water, solar, shelter", u: "https://www.appropedia.org/", d: "Open library of low-tech builds: solar stills, filters, greywater, insulation." }
    ].map(l => `<div class="curr-box" style="margin-bottom:0.4rem;"><b><a href="${l.u}" target="_blank" style="color:var(--accent-green);">${l.t}</a></b><span style="font-size:0.82em;">${l.d}</span></div>`).join('')}</div>`;

  return `<div class="sec-title" style="margin-top:1rem;"><h2 style="font-size:1.05rem;">💧 ${lang === 'es' ? 'El Depósito de Agua' : 'The Water Depot'}</h2>
    <span class="sub" style="font-size:0.75rem;color:var(--text-dim);">${lang === 'es' ? 'Conocimiento práctico del manantial al almacenamiento — sigue la práctica de CDC/FEMA, orientativo, no consejo médico.' : 'Practical knowledge from spring to storage. Guidance follows CDC / FEMA practice — general, not medical advice.'}</span></div>
    ${rotationCard}
    ${guide}
    ${depot}`;
}

function survPanelHTML() {
  const L = survS(survivalLang);
  if (!survRun) return survIntroHTML(L);

  const progressEl = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
    <span style="font-weight:bold;color:var(--accent-gold);">${survEsc(L.ui.survivalMode)}</span>
    <span style="font-size:0.75em;color:var(--text-dim);">${survEsc(L.ui.runCode)}: <code style="background:var(--bg-input);padding:0.1rem 0.4rem;border-radius:4px;cursor:pointer;" onclick="navigator.clipboard.writeText('${survEsc(survRun.code)}')">${survEsc(survRun.code)}</code></span>
  </div>`;
  const newBtn = `<button class="btn btn-small" onclick="survNewRun()">${survEsc(L.ui.newRun)}</button>`;

  if (survRun.step === "done") {
    const count = survDoneCount();
    const epi = survFill(L.epilogue[Math.floor(Math.random() * L.epilogue.length)], { count });
    return `<div style="background:var(--bg-panel);border:1px solid var(--accent-gold);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
      ${progressEl}
      <h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">🏁 ${survEsc(L.ui.done)}</h3>
      <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${epi}</div>
      <p style="font-size:0.85em;color:var(--text-dim);">${survEsc(L.ui.doneTag)}</p>
      <div style="margin-top:0.8rem;">${newBtn}</div>
    </div>${survWaterDepotHTML()}`;
  }

  const actIdx = survRun.act;
  const act = survRun.acts[actIdx];
  const actName = L.acts[act.tier].title;
  const themeName = L.themes[act.theme] ? L.themes[act.theme].name : act.theme;
  const qPos = SURVIVAL_ACTS.slice(0, actIdx).reduce((s, a) => s + a.count, 0) + survRun.qIndex + 1;
  const total = SURVIVAL_ACTS.reduce((s, a) => s + a.count, 0);

  if (survRun.step === "fork") {
    const intro = L.forks.intro[Math.floor(Math.random() * L.forks.intro.length)];
    let opts = "";
    survRun.offered.forEach(tk => {
      const th = L.themes[tk] || { name: tk, line: "" };
      opts += `<button style="display:block;width:100%;text-align:left;background:var(--bg-input);border:1px solid var(--border-subtle);border-radius:8px;padding:0.6rem 0.8rem;margin-bottom:0.5rem;color:var(--text-light);cursor:pointer;" onclick="survChoose('${survEsc(tk)}')">
        <strong style="color:var(--accent-gold);">${survEsc(th.name)}</strong><br><span style="font-size:0.85em;">${survEsc(th.line)}</span>
      </button>`;
    });
    return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
      ${progressEl}
      <div style="margin-bottom:0.8rem;"><span class="tier-pill unlocked" style="display:inline-block;">${survEsc(L.ui.act)} ${actIdx + 1} ${survEsc(L.ui.of)} 4 — ${survEsc(actName)}</span></div>
      <div style="background:var(--bg-input);border-left:3px solid var(--accent-orange);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${survEsc(intro)}</div>
      <p style="font-weight:bold;color:var(--accent-gold);margin-bottom:0.3rem;">${survEsc(L.forks.question)}</p>
      <p style="font-size:0.85em;color:var(--text-dim);margin-bottom:0.6rem;">${survEsc(L.ui.choosePath)}</p>
      ${opts}
      <div style="margin-top:0.8rem;">${newBtn}</div>
    </div>`;
  }

  const cur = survCurrent();
  if (!cur) return "";
  const beat = survFill(survBeat(act.tier, survRun.qIndex + actIdx), { emoji: cur.emoji, quest: survQuestTitle(cur.title), guild: survGuildName(cur.guild) });
  const guildObj = (typeof allAspects !== 'undefined') ? allAspects.find(g => g && g.name === cur.guild) : null;
  const cardHTML = (guildObj && typeof renderQuestCard === 'function')
    ? renderQuestCard(guildObj, guildObj[cur.tier].find(q => makeQuestId(guildObj.name, cur.tier, q[0]) === cur.qid), cur.tier, false)
    : `<div class="quest-card ${cur.tier}"><div class="quest-info"><strong>${survEsc(cur.title)}</strong></div></div>`;

  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    ${progressEl}
    <div style="margin-bottom:0.8rem;">
      <span class="tier-pill unlocked" style="display:inline-block;">${survEsc(L.ui.act)} ${actIdx + 1} ${survEsc(L.ui.of)} 4 — ${survEsc(actName)}</span>
      <span style="margin-left:0.5rem;font-size:0.8em;color:var(--text-dim);">${survEsc(themeName)} · ${survEsc(L.ui.quest)} ${qPos}/${total}</span>
    </div>
    <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${beat}</div>
    ${cardHTML}
    <div style="font-size:0.8em;color:var(--accent-green);margin-top:0.6rem;">📷 ${survEsc(L.ui.photoHint)}</div>
    <div style="margin-top:0.8rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      ${newBtn}
      ${cur && questDone(cur.qid) ? `<button class="btn btn-small" onclick="survAdvance('${survEsc(cur.qid)}')">${survEsc(L.ui.skipHint)}</button>` : ''}
    </div>
  </div>${survWaterDepotHTML()}`;
}

function survIntroHTML(L) {
  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    <h3 style="color:var(--accent-gold);margin-bottom:0.3rem;">🛡️ ${survEsc(L.ui.survivalMode)}</h3>
    <p style="font-size:0.9em;color:var(--text-light);margin-bottom:0.6rem;">${survEsc(L.ui.survivalTag)}</p>
    <p style="font-size:0.8em;color:var(--text-dim);margin-bottom:0.7rem;">${survEsc(L.ui.enterCode)}</p>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      <input id="survival-code-input" placeholder="ABC234" style="width:9rem;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.5rem;text-transform:uppercase;" maxlength="6">
      <button class="btn btn-small" style="background:var(--accent-green-dark);color:var(--text-bright);" onclick="survBegin(document.getElementById('survival-code-input').value)">${survEsc(L.ui.begin)}</button>
      <button class="btn btn-small" onclick="survNewRun()">${survEsc(L.ui.newRun)}</button>
    </div>
  </div>${survWaterDepotHTML()}`;
}

function survToggleMode(on) {
  survivalMode = !!on;
  try { window.survivalMode = survivalMode; } catch (e) {}
  try { localStorage.setItem('rpg_survivalMode', survivalMode ? 'true' : 'false'); } catch (e) {}
  if (survivalMode) {
    survLoadRun();
    if (!survRun) survBegin(null);
  }
  if (typeof renderQuests === 'function') renderQuests();
}

function survRender() {
  if (!survivalMode && !(typeof window !== 'undefined' && window.survivalMode)) return;
  survivalMode = true;
  try { window.survivalMode = true; } catch (e) {}
  try { survivalLang = (typeof lang !== 'undefined') ? lang : 'en'; } catch (e) { survivalLang = 'en'; }
  const panel = document.getElementById('survival-panel');
  if (!panel) return;
  panel.innerHTML = survPanelHTML();
}

/* ---- public API ---- */
window.survivalMode = survivalMode;
window.survRun = survRun;
window.survivalLang = survivalLang;
window.survRender = survRender;
window.survBegin = survBegin;
window.survNewRun = survNewRun;
window.survAdvance = survAdvance;
window.survChoose = survChoose;
window.survToggleMode = survToggleMode;
window.survDoneCount = survDoneCount;
window.survCurrent = survCurrent;
window.survRotationMonths = survRotationMonths;
window.SURVIVAL_MONTHS = SURVIVAL_MONTHS;

try { survivalMode = localStorage.getItem('rpg_survivalMode') === 'true'; } catch (e) {}
if (survivalMode) survLoadRun();
