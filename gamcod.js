/* ============================================================
 * THE VILLAGE — GAMCOD MODE
 * "Grow A Million Calories On Dirt"
 *
 * Paul Wheaton's real-world challenge, played as a Village
 * season. The season runs in four acts (Plot → Plant → Tend →
 * Harvest & Prove) drawn from the real permaculture guilds, with
 * the REAL GAMCOD rules carried in the narrative: a contiguous
 * 200 sq ft plot, starting from dirt, five-plus food crops, a
 * ghost acre for mulch and fertility, and proof: photos, video,
 * and calories weighed and counted.
 *
 * The GAMCOD Ledger tracks the family's real numbers — crops
 * planted, time put in, money spent, groceries saved, calories
 * harvested — and projects the haul to a full acre (×207, the
 * official scale used in the 2025 results) against the
 * million-calorie goal the challenge is named for.
 *
 * i18n: en / es / fr blocks. Add a language by copying a block,
 * translating, and changing the key.
 * ============================================================ */

const GAMCOD_I18N = {
  "en": {
    "ui": {
      "gamcodMode": "GAMCOD Mode",
      "gamcodTag": "Grow a million calories on dirt. 200 square feet, five crops, real proof — Paul Wheaton's real-world challenge, played as a Village season.",
      "newAdventure": "🌀 New Season",
      "adventureCode": "Season code",
      "begin": "Begin",
      "act": "Act",
      "of": "of",
      "quest": "Quest",
      "choosePath": "The season forks here. Each strategy is real — it shapes the next chapter of the garden.",
      "resume": "Your season continues…",
      "epilogue": "Harvest Report",
      "done": "Season complete",
      "deedsDone": "deeds in the ledger",
      "enterCode": "Enter a season code to replay the same path, or press Begin for a fresh season.",
      "copyCode": "Share this code to replay this exact season:",
      "photoHint": "The GAMCOD proof: Before / During / After photos and video. Then weigh it and count the calories.",
      "skipHint": "Already done — moving on.",
      "rules1": "The real rules (2025 season):",
      "rulesPlot": "Mark one contiguous 200 sq ft plot. Start with a dirt patch or lawn-on-dirt — prove it before you break ground.",
      "rulesCrops": "Grow at least five food crops. No soy. Polyculture strongly encouraged.",
      "rulesGhost": "Use a 'ghost acre' outside the plot to grow mulch and fertility.",
      "rulesTrack": "Track time (keep it low), money spent (keep it low), and groceries saved (keep it high).",
      "rulesPayout": "The best video makes the final movie — $400 per minute of footage used.",
      "ledger": "The GAMCOD Ledger",
      "ledgerPlot": "Plot",
      "ledgerCropCount": "crops planted (min 5)",
      "ledgerCrops": "Crops",
      "ledgerTime": "Time logged",
      "ledgerMoneySpent": "Money spent",
      "ledgerMoneySaved": "Groceries saved",
      "ledgerCalories": "Calories harvested",
      "ledgerPerAcre": "Projected per acre",
      "ledgerMillionGoal": "of the 1,000,000-calorie goal",
      "ledgerFootage": "Video footage",
      "ledgerPayout": "Movie payout estimate",
      "ledgerLog": "Log your season",
      "ledgerAddCrop": "Log a crop",
      "ledgerCustomCrop": "Custom crop",
      "ledgerAdd": "Add",
      "hours": "hrs",
      "minutes": "min",
      "dollars": "$"
    },
    "acts": {
      "sand":  { "title": "Plot", "intro": ["Someone hands you a tape measure and says: two hundred square feet, one piece, dirt. This act is about the promise — marking the ground, proving it is dirt, and building the bed that will carry the season.", "Paul's challenge starts with proof: a dirt patch or a lawn-on-dirt, clearly marked, contiguous, and real. Walk the yard. Find the piece. Stake it honestly."] },
      "straw": { "title": "Plant", "intro": ["The plot is marked and the soil is waking. Now the promise takes roots: five crops or more, no soy, polyculture encouraged, and a ghost acre growing the mulch and fertility the plot will eat all season.", "A hoed row is a promise. Put in the heavy hitters — the calorie-dense tubers and staples — and let the little things fill the edges. Five is the floor, not the goal."] },
      "wood":  { "title": "Tend", "intro": ["The garden talks back now. Water, weeds, soil-building, and the honest ledger: time kept low, money kept low, groceries saved kept high. This is where a patch becomes a pantry.", "Nobody films the weeding. That is exactly why it matters. The systems you build now — mulch, water, soil — are what turn a good idea into calories."] },
      "iron":  { "title": "Harvest & Prove", "intro": ["The tape measure was the promise; the scale is the proof. Weigh it, run the calories, cut the video, and submit the season to the forum. This act makes the work visible to the world.", "Some boots sell their footage to Paul's movie at $400 a minute. Every gram weighed and logged is a season made honest. Bring it home."] }
    },
    "themes": {
      "roots":  { "name": "The Tuber Route",  "line": "Sunchokes, potatoes, turnips — the calorie-dense heavy hitters that carried the 2025 plot." },
      "staple": { "name": "The Staple Garden", "line": "Beans, corn, squash — the classic polyculture that feeds a family all winter." },
      "diverse":{ "name": "The Seed Keeper",  "line": "Many crops, saved seed, and a perennial edge — diversity as the strategy." },
      "stash":  { "name": "The Preserver",    "line": "Grow it, then keep it — fermentation, drying, and the pantry that pays." }
    },
    "beats": {
      "sand": [
        "The season starts with a promise and a tape measure: {emoji} {quest}. The {guild} work marks the ground that will have to prove itself by harvest.",
        "Plot work: {emoji} {quest}. The {guild} guild shows you how it is done on a real piece of ground.",
        "Before anything grows, this must be true: {emoji} {quest}. The {guild} way — honest, marked, ready."
      ],
      "straw": [
        "The soil is waking. {emoji} {quest} puts a crop in the ground — the {guild} craft, at the root of the season.",
        "Five crops is the floor. {emoji} {quest} is one of them, done the {guild} way so it actually feeds you.",
        "Every crop in the ground is a bet on your own hands: {emoji} {quest}. The {guild} guild knows these bets."
      ],
      "wood": [
        "Now the garden talks back. {emoji} {quest} keeps the system honest — the {guild} discipline that turns a patch into a pantry.",
        "Nobody films the tending. That is exactly why it matters: {emoji} {quest}, done the {guild} way.",
        "Water, weeds, and soil — {emoji} {quest} is this week's work in the {guild} rhythm of the season."
      ],
      "iron": [
        "The harvest is the argument. {emoji} {quest} closes the loop — the {guild} craft that turns calories into proof.",
        "Weigh it, count it, film it: {emoji} {quest}. The {guild} standard, ready for the forum.",
        "This is the act that pays. {emoji} {quest} — the {guild} work that ends in real, counted food."
      ]
    },
    "forks": {
      "intro": [
        "Act complete. The family stands at the edge of the plot and chooses the next strategy.",
        "The season pauses for a decision. Which way does the garden grow next?"
      ],
      "question": "What strategy carries the next act?"
    },
    "consequences": {
      "roots":  "The family chose the tuber route — heavy calories, deep soil, the strategy of the 2025 winners.",
      "staple": "The family chose the staple garden — the classic polyculture that fills a winter pantry.",
      "diverse": "The family chose seed-keeping — diversity and saved seed, betting on the long game.",
      "stash":  "The family chose preservation — growing it, then keeping it, so nothing is wasted."
    },
    "epilogue": [
      "The season closes. {count} deeds sit in the ledger — plot marked, crops in, systems tended, harvest counted in calories that you actually ate. Somewhere, Paul's camera crew would pay $400 a minute to see a season like this one. You have the footage.",
      "From dirt to calories: {count} deeds, done honestly, weighed on a real scale. The garden grew food; the family grew skill. That is the whole game."
    ],
    "doneTag": "A season complete. The plot reshuffles — a new GAMCOD season is always waiting."
  },
  "es": {
    "ui": {
      "gamcodMode": "Modo GAMCOD",
      "gamcodTag": "Cultiva un millón de calorías en tierra. 200 pies cuadrados, cinco cultivos, prueba real: el desafío real de Paul Wheaton, jugado como una temporada de la Aldea.",
      "newAdventure": "🌀 Nueva Temporada",
      "adventureCode": "Código de temporada",
      "begin": "Comenzar",
      "act": "Acto",
      "of": "de",
      "quest": "Tarea",
      "choosePath": "La temporada se bifurca. Cada estrategia es real: da forma al siguiente capítulo del huerto.",
      "resume": "Tu temporada continúa…",
      "epilogue": "Informe de Cosecha",
      "done": "Temporada completada",
      "deedsDone": "hazañas en el libro",
      "enterCode": "Introduce un código de temporada para repetir el mismo camino, o pulsa Comenzar para una nueva.",
      "copyCode": "Comparte este código para repetir esta temporada exacta:",
      "photoHint": "La prueba GAMCOD: fotos de Antes / Durante / Después y video. Luego pésalo y cuenta las calorías.",
      "skipHint": "Ya hecha — continuando.",
      "rules1": "Las reglas reales (temporada 2025):",
      "rulesPlot": "Marca una parcela contigua de 200 pies cuadrados. Empieza con tierra o césped sobre tierra — demuéstralo antes de remover el suelo.",
      "rulesCrops": "Cultiva al menos cinco cultivos alimentarios. Sin soja. Se recomienda el policultivo.",
      "rulesGhost": "Usa un 'acre fantasma' fuera de la parcela para cultivar mantillo y fertilidad.",
      "rulesTrack": "Registra el tiempo (mantenlo bajo), el dinero gastado (mantenlo bajo) y los ahorros en compras (mantenlos altos).",
      "rulesPayout": "El mejor video entra en la película final: $400 por minuto de metraje usado.",
      "ledger": "El Libro GAMCOD",
      "ledgerPlot": "Parcela",
      "ledgerCropCount": "cultivos plantados (mín. 5)",
      "ledgerCrops": "Cultivos",
      "ledgerTime": "Tiempo registrado",
      "ledgerMoneySpent": "Dinero gastado",
      "ledgerMoneySaved": "Ahorrado en compras",
      "ledgerCalories": "Calorías cosechadas",
      "ledgerPerAcre": "Proyección por acre",
      "ledgerMillionGoal": "de la meta de 1,000,000 de calorías",
      "ledgerFootage": "Metraje de video",
      "ledgerPayout": "Estimación de pago por la película",
      "ledgerLog": "Registra tu temporada",
      "ledgerAddCrop": "Registra un cultivo",
      "ledgerCustomCrop": "Cultivo personalizado",
      "ledgerAdd": "Añadir",
      "hours": "hrs",
      "minutes": "min",
      "dollars": "$"
    },
    "acts": {
      "sand":  { "title": "Trazar", "intro": ["Alguien te pasa una cinta métrica y dice: doscientos pies cuadrados, una sola pieza, tierra. Este acto trata de la promesa: marcar el suelo, demostrar que es tierra y construir el bancal que llevará la temporada.", "El desafío de Paul empieza con prueba: una parcela de tierra o césped sobre tierra, bien marcada, contigua y real. Camina el patio. Encuentra el lugar. Márcalo con honestidad."] },
      "straw": { "title": "Plantar", "intro": ["La parcela está marcada y el suelo despierta. Ahora la promesa echa raíces: cinco cultivos o más, sin soja, con policultivo, y un acre fantasma que cultive el mantillo y la fertilidad que la parcela comerá toda la temporada.", "Un surco arado es una promesa. Pon los pesos pesados — los tubérculos y básicos densos en calorías — y deja que las cosas pequeñas llenen los bordes. Cinco es el mínimo, no la meta."] },
      "wood":  { "title": "Cuidar", "intro": ["Ahora el huerto responde. Agua, malezas, construcción de suelo y el libro honesto: tiempo bajo, dinero bajo, ahorros altos. Aquí es donde una parcela se vuelve despensa.", "Nadie filma el deshierbe. Por eso importa. Los sistemas que construyas ahora — mantillo, agua, suelo — son lo que convierte una buena idea en calorías."] },
      "iron":  { "title": "Cosechar y Probar", "intro": ["La cinta métrica fue la promesa; la báscula es la prueba. Pésalo, calcula las calorías, edita el video y envía la temporada al foro. Este acto hace visible el trabajo al mundo.", "Algunos boots venden su metraje a la película de Paul a $400 por minuto. Cada gramo pesado y registrado hace honesta una temporada. Tráela a casa."] }
    },
    "themes": {
      "roots":  { "name": "La Ruta del Tubérculo", "line": "Sunchokes, patatas, nabos — los pesos pesados calóricos que llevaron la parcela de 2025." },
      "staple": { "name": "El Huerto de Básicos", "line": "Judías, maíz, calabaza — el policultivo clásico que alimenta a una familia todo el invierno." },
      "diverse":{ "name": "El Guardián de Semillas", "line": "Muchos cultivos, semilla guardada y un borde perenne — la diversidad como estrategia." },
      "stash":  { "name": "El Preservador", "line": "Cultívalo y luego consérvalo — fermentación, secado y la despensa que paga." }
    },
    "beats": {
      "sand": [
        "La temporada empieza con una promesa y una cinta métrica: {emoji} {quest}. El trabajo de {guild} marca el suelo que tendrá que demostrarse en la cosecha.",
        "Trabajo de trazado: {emoji} {quest}. El gremio de {guild} te enseña cómo se hace en tierra real.",
        "Antes de que nada crezca, esto debe ser cierto: {emoji} {quest}. La manera de {guild} — honesta, marcada, lista."
      ],
      "straw": [
        "El suelo despierta. {emoji} {quest} pone un cultivo en la tierra — el oficio de {guild}, en la raíz de la temporada.",
        "Cinco cultivos es el mínimo. {emoji} {quest} es uno de ellos, hecho a la manera de {guild} para que de verdad te alimente.",
        "Cada cultivo en la tierra es una apuesta por tus propias manos: {emoji} {quest}. El gremio de {guild} conoce estas apuestas."
      ],
      "wood": [
        "Ahora el huerto responde. {emoji} {quest} mantiene el sistema honesto — la disciplina de {guild} que convierte una parcela en despensa.",
        "Nadie filma el cuidado. Por eso importa: {emoji} {quest}, hecho a la manera de {guild}.",
        "Agua, malezas y suelo — {emoji} {quest} es el trabajo de esta semana en el ritmo de {guild}."
      ],
      "iron": [
        "La cosecha es el argumento. {emoji} {quest} cierra el círculo — el oficio de {guild} que convierte calorías en prueba.",
        "Pésalo, cuéntalo, grábalo: {emoji} {quest}. El estándar de {guild}, listo para el foro.",
        "Este es el acto que paga. {emoji} {quest} — el trabajo de {guild} que termina en comida real y contada."
      ]
    },
    "forks": {
      "intro": [
        "Acto completado. La familia está al borde de la parcela y elige la próxima estrategia.",
        "La temporada pausa para una decisión. ¿Hacia dónde crece el huerto ahora?"
      ],
      "question": "¿Qué estrategia lleva el próximo acto?"
    },
    "consequences": {
      "roots":  "La familia eligió la ruta del tubérculo — calorías pesadas, tierra profunda, la estrategia de los ganadores de 2025.",
      "staple": "La familia eligió el huerto de básicos — el policultivo clásico que llena la despensa de invierno.",
      "diverse": "La familia eligió guardar semillas — diversidad y semilla propia, apostando por el juego largo.",
      "stash":  "La familia eligió la preservación — cultivarlo y conservarlo, para que nada se desperdicie."
    },
    "epilogue": [
      "La temporada cierra. {count} hazañas están en el libro — parcela marcada, cultivos plantados, sistemas cuidados, cosecha contada en calorías que de verdad comiste. En algún lugar, el equipo de cámara de Paul pagaría $400 por minuto por ver una temporada así. Tienes el metraje.",
      "De la tierra a las calorías: {count} hazañas, hechas con honestidad, pesadas en una báscula real. El huerto cultivó comida; la familia cultivó habilidad. Ese es todo el juego."
    ],
    "doneTag": "Temporada completa. La parcela se baraja — una nueva temporada GAMCOD siempre espera."
  },
  "fr": {
    "ui": {
      "gamcodMode": "Mode GAMCOD",
      "gamcodTag": "Faire pousser un million de calories sur de la terre. 200 pieds carrés, cinq cultures, preuve réelle — le défi réel de Paul Wheaton, joué comme une saison du Village.",
      "newAdventure": "🌀 Nouvelle Saison",
      "adventureCode": "Code de saison",
      "begin": "Commencer",
      "act": "Acte",
      "of": "de",
      "quest": "Tâche",
      "choosePath": "La saison bifurque ici. Chaque stratégie est réelle — elle façonne le prochain chapitre du jardin.",
      "resume": "Votre saison continue…",
      "epilogue": "Rapport de Récolte",
      "done": "Saison terminée",
      "deedsDone": "hauts faits au registre",
      "enterCode": "Entrez un code de saison pour rejouer le même chemin, ou appuyez sur Commencer pour une nouvelle saison.",
      "copyCode": "Partagez ce code pour rejouer exactement cette saison :",
      "photoHint": "La preuve GAMCOD : photos Avant / Pendant / Après et vidéo. Puis pesez et comptez les calories.",
      "skipHint": "Déjà fait — on continue.",
      "rules1": "Les vraies règles (saison 2025) :",
      "rulesPlot": "Marquez une parcelle contiguë de 200 pieds carrés. Commencez avec de la terre ou une pelouse sur terre — prouvez-le avant de creuser.",
      "rulesCrops": "Cultivez au moins cinq cultures alimentaires. Pas de soja. La polyculture est fortement encouragée.",
      "rulesGhost": "Utilisez un 'acre fantôme' hors de la parcelle pour cultiver paillis et fertilité.",
      "rulesTrack": "Suivez le temps (gardez-le bas), l'argent dépensé (gardez-le bas) et les économies d'épicerie (gardez-les hautes).",
      "rulesPayout": "La meilleure vidéo entre dans le film final — 400 $ par minute de métrage utilisée.",
      "ledger": "Le Registre GAMCOD",
      "ledgerPlot": "Parcelle",
      "ledgerCropCount": "cultures plantées (min. 5)",
      "ledgerCrops": "Cultures",
      "ledgerTime": "Temps enregistré",
      "ledgerMoneySpent": "Argent dépensé",
      "ledgerMoneySaved": "Économies d'épicerie",
      "ledgerCalories": "Calories récoltées",
      "ledgerPerAcre": "Projection par acre",
      "ledgerMillionGoal": "de l'objectif de 1 000 000 de calories",
      "ledgerFootage": "Métrage vidéo",
      "ledgerPayout": "Estimation de paiement du film",
      "ledgerLog": "Enregistrez votre saison",
      "ledgerAddCrop": "Enregistrer une culture",
      "ledgerCustomCrop": "Culture personnalisée",
      "ledgerAdd": "Ajouter",
      "hours": "h",
      "minutes": "min",
      "dollars": "$"
    },
    "acts": {
      "sand":  { "title": "Tracer", "intro": ["Quelqu'un vous tend un mètre ruban et dit : deux cents pieds carrés, une seule pièce, de la terre. Cet acte parle de la promesse — marquer le sol, prouver que c'est de la terre, et construire la butte qui portera la saison.", "Le défi de Paul commence par une preuve : une parcelle de terre ou une pelouse sur terre, clairement délimitée, contiguë et réelle. Parcourez le jardin. Trouvez le coin. Délimitez-le honnêtement."] },
      "straw": { "title": "Planter", "intro": ["La parcelle est marquée et le sol s'éveille. Maintenant la promesse prend racine : cinq cultures ou plus, pas de soja, polyculture encouragée, et un acre fantôme qui cultive le paillis et la fertilité que la parcelle mangera toute la saison.", "Un rang bêché est une promesse. Mettez les gros calibres — les tubercules et les cultures de base denses en calories — et laissez les petites choses remplir les bords. Cinq est le plancher, pas le but."] },
      "wood":  { "title": "Entretenir", "intro": ["Le jardin répond maintenant. Eau, mauvaises herbes, construction du sol et le registre honnête : temps bas, argent bas, économies hautes. C'est ici qu'une parcelle devient un garde-manger.", "Personne ne filme le désherbage. C'est exactement pour ça que ça compte. Les systèmes que vous construisez maintenant — paillis, eau, sol — transforment une bonne idée en calories."] },
      "iron":  { "title": "Récolter et Prouver", "intro": ["Le mètre ruban était la promesse ; la balance est la preuve. Pesez, calculez les calories, montez la vidéo et soumettez la saison au forum. Cet acte rend le travail visible au monde.", "Certains boots vendent leur métrage au film de Paul à 400 $ la minute. Chaque gramme pesé et enregistré rend une saison honnête. Ramenez-la à la maison."] }
    },
    "themes": {
      "roots":  { "name": "La Route des Tubercules", "line": "Topinambours, pommes de terre, navets — les gros porteurs de calories de la parcelle 2025." },
      "staple": { "name": "Le Jardin de Base", "line": "Haricots, maïs, courges — la polyculture classique qui nourrit une famille tout l'hiver." },
      "diverse":{ "name": "Le Gardien de Semences", "line": "Beaucoup de cultures, semences conservées, bordure vivace — la diversité comme stratégie." },
      "stash":  { "name": "Le Conservateur", "line": "Faites-le pousser, puis gardez-le — fermentation, séchage, et le garde-manger qui paie." }
    },
    "beats": {
      "sand": [
        "La saison commence par une promesse et un mètre ruban : {emoji} {quest}. Le travail de {guild} marque le sol qui devra faire ses preuves à la récolte.",
        "Travail de tracé : {emoji} {quest}. La guilde {guild} vous montre comment faire sur une vraie parcelle.",
        "Avant que quoi que ce soit pousse, ceci doit être vrai : {emoji} {quest}. La voie de {guild} — honnête, marquée, prête."
      ],
      "straw": [
        "Le sol s'éveille. {emoji} {quest} met une culture en terre — le métier de {guild}, à la racine de la saison.",
        "Cinq cultures est le plancher. {emoji} {quest} en fait partie, faite à la façon {guild} pour qu'elle vous nourrisse vraiment.",
        "Chaque culture en terre est un pari sur vos propres mains : {emoji} {quest}. La guilde {guild} connaît ces paris."
      ],
      "wood": [
        "Le jardin répond maintenant. {emoji} {quest} garde le système honnête — la discipline {guild} qui transforme une parcelle en garde-manger.",
        "Personne ne filme l'entretien. C'est exactement pour ça que ça compte : {emoji} {quest}, fait à la façon {guild}.",
        "Eau, mauvaises herbes, sol — {emoji} {quest} est le travail de cette semaine dans le rythme {guild} de la saison."
      ],
      "iron": [
        "La récolte est l'argument. {emoji} {quest} boucle la boucle — le métier {guild} qui transforme les calories en preuve.",
        "Pesez, comptez, filmez : {emoji} {quest}. Le standard {guild}, prêt pour le forum.",
        "C'est l'acte qui paie. {emoji} {quest} — le travail {guild} qui finit en nourriture réelle et comptée."
      ]
    },
    "forks": {
      "intro": [
        "Acte terminé. La famille est au bord de la parcelle et choisit la prochaine stratégie.",
        "La saison marque une pause pour une décision. Où va le jardin maintenant ?"
      ],
      "question": "Quelle stratégie porte le prochain acte ?"
    },
    "consequences": {
      "roots":  "La famille a choisi la route des tubercules — calories lourdes, sol profond, la stratégie des gagnants 2025.",
      "staple": "La famille a choisi le jardin de base — la polyculture classique qui remplit le garde-manger d'hiver.",
      "diverse": "La famille a choisi la conservation des semences — diversité et semences gardées, pari sur le long jeu.",
      "stash":  "La famille a choisi la conservation — la faire pousser puis la garder, pour ne rien gaspiller."
    },
    "epilogue": [
      "La saison se referme. {count} hauts faits au registre — parcelle marquée, cultures plantées, systèmes entretenus, récolte comptée en calories que vous avez vraiment mangées. Quelque part, l'équipe caméra de Paul paierait 400 $ la minute pour voir une saison comme celle-ci. Vous avez le métrage.",
      "De la terre aux calories : {count} hauts faits, faits honnêtement, pesés sur une vraie balance. Le jardin a fait pousser de la nourriture ; la famille a fait pousser du savoir-faire. C'est tout le jeu."
    ],
    "doneTag": "Saison terminée. La parcelle se mélange — une nouvelle saison GAMCOD attend toujours."
  }
};

/* Crop list for the ledger (real GAMCOD-legal crops, cold-climate friendly) */
const GAMCOD_CROPS = ["Sunchokes","Potatoes","Turnips","Squash","Mustard greens","Beans","Corn","Carrots","Beets","Onions","Cabbage","Kale","Peas","Garlic","Tomatoes","Lettuce"];

/* ============================================================
 * ENGINE (mirrors survival.js; gamcod-prefixed)
 * ============================================================ */
let gamcodMode = false;
let gamcodLang = 'en';

function gamcodS(lang) { return GAMCOD_I18N[lang] || GAMCOD_I18N.en; }

function gamcodXmur3(str) {
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
function gamcodMulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function gamcodRng(seedStr) { return gamcodMulberry(gamcodXmur3(seedStr)()); }

/* Guild pools per strategy — real guilds from the game's quest board */
const GAMCOD_THEMES = {
  roots:   ["Gardening", "Earthworks", "Food Prep"],
  staple:  ["Gardening", "Food Prep", "Foraging"],
  diverse: ["Gardening", "Foraging", "Nest"],
  stash:   ["Food Prep", "Commerce", "Homesteading"]
};

/* The four acts of a season, one page per phase */
const GAMCOD_ACTS = [
  { tier: "sand",  count: 8 },
  { tier: "straw", count: 8 },
  { tier: "wood",  count: 7 },
  { tier: "iron",  count: 7 }
]; // 30 quests per season

let gamcodRun = null;

function gamcodLoadRun() {
  try {
    const raw = localStorage.getItem('rpg_gamcod_run');
    if (raw) gamcodRun = JSON.parse(raw);
  } catch (e) { gamcodRun = null; }
  try { window.gamcodRun = gamcodRun; } catch (e) {}
}
function gamcodSaveRun() {
  try { localStorage.setItem('rpg_gamcod_run', JSON.stringify(gamcodRun)); } catch (e) {}
  try { window.gamcodRun = gamcodRun; } catch (e) {}
}

function gamcodMakeCode(rng) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(rng() * chars.length)];
  return code;
}

function gamcodGather(guildNames, tier, rng, exclude) {
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
  const done = out.filter(o => questDone(o.qid));
  const notDone = out.filter(o => !questDone(o.qid));
  return notDone.concat(done);
}

function gamcodPick(theme, tier, count, rng, exclude) {
  const guilds = GAMCOD_THEMES[theme] || [];
  let pool = gamcodGather(guilds, tier, rng, exclude);
  if (pool.length < count) {
    const anyGuilds = (typeof allAspects !== 'undefined') ? allAspects.map(a => a.name) : [];
    const extra = gamcodGather(anyGuilds, tier, rng, exclude);
    const seen = new Set(pool.map(o => o.qid));
    for (const o of extra) {
      if (!seen.has(o.qid)) { pool.push(o); seen.add(o.qid); }
      if (pool.length >= count) break;
    }
  }
  return pool.slice(0, count);
}

function gamcodBegin(code) {
  const seed = (code && String(code).trim()) ? String(code).trim().toUpperCase() : gamcodMakeCode(gamcodRng('seed' + Date.now() + Math.random()));
  const rng = gamcodRng(seed);
  const themeKeys = Object.keys(GAMCOD_THEMES);
  const firstTheme = themeKeys[Math.floor(rng() * themeKeys.length)];

  gamcodRun = {
    code: seed, seed,
    act: 0, qIndex: 0, step: "quest",
    acts: [], themes: [firstTheme], choices: [], offered: [],
    log: { crops: [], timeHrs: 0, moneySpent: 0, moneySaved: 0, calories: 0, footageMin: 0 },
    startedAt: Date.now(), updatedAt: Date.now()
  };
  const exclude = new Set();
  const act0 = gamcodPick(firstTheme, "sand", GAMCOD_ACTS[0].count, rng, exclude);
  act0.forEach(o => exclude.add(o.qid));
  gamcodRun.acts.push({ tier: "sand", theme: firstTheme, quests: act0 });
  gamcodSkipDone();
  gamcodSaveRun();
  gamcodRender();
}

function gamcodCurrent() {
  if (!gamcodRun || gamcodRun.step !== "quest") return null;
  const act = gamcodRun.acts[gamcodRun.act];
  return act ? act.quests[gamcodRun.qIndex] || null : null;
}

function gamcodAdvance(qid) {
  if (!gamcodRun || gamcodRun.step !== "quest") return;
  const cur = gamcodCurrent();
  if (!cur || cur.qid !== qid) return;
  gamcodRun.qIndex++;
  gamcodRun.updatedAt = Date.now();
  gamcodSkipDone();
  gamcodSaveRun();
  gamcodRender();
}

function gamcodSkipDone() {
  let safety = 0;
  while (gamcodRun && gamcodRun.step === "quest" && safety < 60) {
    safety++;
    const act = gamcodRun.acts[gamcodRun.act];
    if (!act) { gamcodRun.step = "done"; break; }
    const cur = act.quests[gamcodRun.qIndex];
    if (!cur) {
      if (gamcodRun.act < 3) { gamcodRun.step = "fork"; gamcodRun.offered = gamcodOffer(); }
      else gamcodRun.step = "done";
      break;
    }
    if (!questDone(cur.qid)) break;
    gamcodRun.qIndex++;
  }
}

function gamcodOffer() {
  const rng = gamcodRng(gamcodRun.seed + "-fork-" + gamcodRun.act);
  const used = new Set(gamcodRun.themes);
  const avail = Object.keys(GAMCOD_THEMES).filter(t => !used.has(t));
  for (let i = avail.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [avail[i], avail[j]] = [avail[j], avail[i]];
  }
  return avail.slice(0, 3);
}

function gamcodChoose(theme) {
  if (!gamcodRun || gamcodRun.step !== "fork") return;
  const actIdx = gamcodRun.act;
  const rng = gamcodRng(gamcodRun.seed + "-act-" + (actIdx + 1) + "-" + theme);
  const exclude = new Set();
  gamcodRun.acts.forEach(a => a.quests.forEach(q => exclude.add(q.qid)));
  const spec = GAMCOD_ACTS[actIdx + 1];
  const quests = gamcodPick(theme, spec.tier, spec.count, rng, exclude);
  gamcodRun.choices.push({ act: actIdx, theme });
  gamcodRun.themes.push(theme);
  gamcodRun.acts.push({ tier: spec.tier, theme, quests });
  gamcodRun.act = actIdx + 1;
  gamcodRun.qIndex = 0;
  gamcodRun.step = "quest";
  gamcodRun.updatedAt = Date.now();
  gamcodSkipDone();
  gamcodSaveRun();
  gamcodRender();
}

function gamcodNewRun() { gamcodBegin(null); }

function gamcodDoneCount() {
  if (!gamcodRun) return 0;
  let n = 0;
  gamcodRun.acts.forEach(a => a.quests.forEach(q => { if (questDone(q.qid)) n++; }));
  return n;
}

/* ---- The GAMCOD Ledger (real numbers, real season) ---- */
function gamcodToggleCrop(crop) {
  if (!gamcodRun) return;
  const arr = gamcodRun.log.crops;
  if (arr.includes(crop)) gamcodRun.log.crops = arr.filter(c => c !== crop);
  else arr.push(crop);
  gamcodSaveRun();
  gamcodRender();
}
function gamcodAddCustomCrop() {
  if (!gamcodRun) return;
  const input = document.getElementById('gamcod-custom-crop');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;
  if (!gamcodRun.log.crops.includes(name)) gamcodRun.log.crops.push(name);
  input.value = '';
  gamcodSaveRun();
  gamcodRender();
}
function gamcodSetNum(field, value) {
  if (!gamcodRun) return;
  const num = parseFloat(value) || 0;
  if (field in gamcodRun.log) gamcodRun.log[field] = Math.max(0, num);
  gamcodSaveRun();
  gamcodRender();
}

function gamcodLedgerHTML(L) {
  if (!gamcodRun) return "";
  const log = gamcodRun.log || {};
  const cropCount = (log.crops || []).length;
  const cropPct = Math.min(100, Math.round((cropCount / 5) * 100));
  const perAcre = Math.round((log.calories || 0) * 207);
  const millionPct = Math.min(100, Math.round((perAcre / 1000000) * 100));
  const payout = Math.round((log.footageMin || 0) * 400);

  const cropBtns = GAMCOD_CROPS.map(c =>
    `<button class="roster-player-btn ${(log.crops || []).includes(c) ? 'selected' : ''}" style="margin:0.15rem;" onclick="gamcodToggleCrop('${c.replace(/'/g, "\\'")}')">${c}</button>`
  ).join('');

  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    <h4 style="color:var(--accent-gold);margin:0 0 0.6rem 0;">🌱 ${L.ui.ledger}</h4>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.5rem;margin-bottom:0.7rem;">
      <div style="background:var(--bg-input);border-radius:8px;padding:0.5rem 0.7rem;">
        <div style="font-size:0.72em;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;">${L.ui.ledgerPlot}</div>
        <div style="font-weight:bold;color:var(--text-bright);font-size:1.05em;">200 ft²</div>
        <div style="font-size:0.72em;color:var(--text-dim);">${L.ui.ledgerCropCount}: <strong style="color:${cropCount >= 5 ? 'var(--accent-green)' : 'var(--accent-orange)'};">${cropCount}/5</strong></div>
        <div style="height:5px;background:var(--bg-card);border-radius:999px;margin-top:0.3rem;"><div style="height:100%;width:${cropPct}%;background:${cropCount >= 5 ? 'var(--accent-green)' : 'var(--accent-orange)'};border-radius:999px;"></div></div>
      </div>
      <div style="background:var(--bg-input);border-radius:8px;padding:0.5rem 0.7rem;">
        <div style="font-size:0.72em;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;">${L.ui.ledgerCalories}</div>
        <div style="font-weight:bold;color:var(--text-bright);font-size:1.05em;">${Math.round(log.calories || 0).toLocaleString()}</div>
        <div style="font-size:0.72em;color:var(--text-dim);">${L.ui.ledgerPerAcre}: <strong style="color:var(--accent-gold);">${perAcre.toLocaleString()}</strong></div>
        <div style="font-size:0.7em;color:var(--text-dim);">${millionPct}% ${L.ui.ledgerMillionGoal}</div>
        <div style="height:5px;background:var(--bg-card);border-radius:999px;margin-top:0.3rem;"><div style="height:100%;width:${millionPct}%;background:var(--accent-gold);border-radius:999px;"></div></div>
      </div>
      <div style="background:var(--bg-input);border-radius:8px;padding:0.5rem 0.7rem;">
        <div style="font-size:0.72em;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;">${L.ui.ledgerTime}</div>
        <div style="font-weight:bold;color:var(--text-bright);font-size:1.05em;">${Math.round((log.timeHrs || 0) * 10) / 10} ${L.ui.hours}</div>
        <div style="font-size:0.72em;color:var(--text-dim);">${L.ui.ledgerMoneySpent}: <strong>${L.ui.dollars}${Math.round(log.moneySpent || 0)}</strong></div>
        <div style="font-size:0.72em;color:var(--accent-green);">${L.ui.ledgerMoneySaved}: ${L.ui.dollars}${Math.round(log.moneySaved || 0)}</div>
      </div>
      <div style="background:var(--bg-input);border-radius:8px;padding:0.5rem 0.7rem;">
        <div style="font-size:0.72em;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;">${L.ui.ledgerFootage}</div>
        <div style="font-weight:bold;color:var(--text-bright);font-size:1.05em;">${Math.round(log.footageMin || 0)} ${L.ui.minutes}</div>
        <div style="font-size:0.72em;color:var(--text-dim);">${L.ui.ledgerPayout}: <strong style="color:var(--accent-gold);">${L.ui.dollars}${payout.toLocaleString()}</strong></div>
      </div>
    </div>

    <div style="font-size:0.82em;color:var(--text-dim);margin-bottom:0.5rem;"><strong style="color:var(--accent-green);">${L.ui.ledgerLog}:</strong></div>
    <div style="margin-bottom:0.5rem;">
      <div style="font-size:0.75em;color:var(--text-dim);margin-bottom:0.25rem;">${L.ui.ledgerAddCrop}:</div>
      <div style="line-height:1.6;">${cropBtns}</div>
      <div style="display:flex;gap:0.4rem;margin-top:0.4rem;flex-wrap:wrap;align-items:center;">
        <input id="gamcod-custom-crop" placeholder="${L.ui.ledgerCustomCrop}…" style="flex:1;min-width:110px;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;font-size:0.82em;">
        <button class="btn btn-small" onclick="gamcodAddCustomCrop()">${L.ui.ledgerAdd}</button>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:0.4rem;">
      <label style="font-size:0.75em;color:var(--text-dim);">${L.ui.ledgerTime} (${L.ui.hours})<br><input type="number" min="0" step="0.5" value="${log.timeHrs || 0}" onchange="gamcodSetNum('timeHrs',this.value)" style="width:100%;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;"></label>
      <label style="font-size:0.75em;color:var(--text-dim);">${L.ui.ledgerMoneySpent} (${L.ui.dollars})<br><input type="number" min="0" step="1" value="${log.moneySpent || 0}" onchange="gamcodSetNum('moneySpent',this.value)" style="width:100%;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;"></label>
      <label style="font-size:0.75em;color:var(--text-dim);">${L.ui.ledgerMoneySaved} (${L.ui.dollars})<br><input type="number" min="0" step="1" value="${log.moneySaved || 0}" onchange="gamcodSetNum('moneySaved',this.value)" style="width:100%;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;"></label>
      <label style="font-size:0.75em;color:var(--text-dim);">${L.ui.ledgerCalories}<br><input type="number" min="0" step="100" value="${log.calories || 0}" onchange="gamcodSetNum('calories',this.value)" style="width:100%;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;"></label>
      <label style="font-size:0.75em;color:var(--text-dim);">${L.ui.ledgerFootage} (${L.ui.minutes})<br><input type="number" min="0" step="1" value="${log.footageMin || 0}" onchange="gamcodSetNum('footageMin',this.value)" style="width:100%;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.35rem 0.5rem;"></label>
    </div>
  </div>`;
}

/* ============================================================
 * RENDERER
 * ============================================================ */
function gamcodT(key) { return gamcodS(gamcodLang).ui[key] !== undefined ? gamcodS(gamcodLang).ui[key] : key; }
function gamcodBeat(tier, idx) { const b = gamcodS(gamcodLang).beats[tier] || []; return b[idx % b.length] || ""; }
function gamcodFill(tpl, vars) {
  return tpl.replace(/\{emoji\}/g, vars.emoji || "📦").replace(/\{quest\}/g, vars.quest || "").replace(/\{guild\}/g, vars.guild || "").replace(/\{count\}/g, vars.count !== undefined ? vars.count : "");
}
function gamcodEsc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
function gamcodQuestTitle(t) { try { return (typeof t === 'function') ? t(t) : t; } catch(e) { return t; } }
function gamcodGuildName(n) {
  try {
    if (lang === 'en') return n;
    const L = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang] : null;
    if (L && L.guilds && L.guilds[n] && L.guilds[n].name) return L.guilds[n].name;
    return n;
  } catch (e) { return n; }
}

function gamcodRulesHTML(L) {
  return `<div style="background:var(--bg-input);border-left:3px solid var(--accent-green);border-radius:6px;padding:0.6rem 0.8rem;margin-bottom:0.8rem;font-size:0.82em;color:var(--text-dim);line-height:1.55;">
    <strong style="color:var(--accent-green);">${L.ui.rules1}</strong>
    <div>📏 ${L.ui.rulesPlot}</div>
    <div>🥔 ${L.ui.rulesCrops}</div>
    <div>👻 ${L.ui.rulesGhost}</div>
    <div>⏱️ ${L.ui.rulesTrack}</div>
    <div>🎬 ${L.ui.rulesPayout}</div>
  </div>`;
}

function gamcodPanelHTML() {
  const L = gamcodS(gamcodLang);
  if (!gamcodRun) return gamcodIntroHTML(L);

  const rulesHTML = gamcodRulesHTML(L);
  const progressEl = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
    <span style="font-weight:bold;color:var(--accent-gold);">${gamcodEsc(L.ui.gamcodMode)}</span>
    <span style="font-size:0.75em;color:var(--text-dim);">${gamcodEsc(L.ui.adventureCode)}: <code style="background:var(--bg-input);padding:0.1rem 0.4rem;border-radius:4px;cursor:pointer;" onclick="navigator.clipboard.writeText('${gamcodEsc(gamcodRun.code)}')">${gamcodEsc(gamcodRun.code)}</code></span>
  </div>`;
  const newBtn = `<button class="btn btn-small" onclick="gamcodNewRun()">${gamcodEsc(L.ui.newAdventure)}</button>`;

  if (gamcodRun.step === "done") {
    const count = gamcodDoneCount();
    const epi = gamcodFill(L.epilogue[Math.floor(Math.random() * L.epilogue.length)], { count });
    return `<div style="background:var(--bg-panel);border:1px solid var(--accent-gold);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
      ${progressEl}
      <h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">🏁 ${gamcodEsc(L.ui.done)}</h3>
      <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${epi}</div>
      <p style="font-size:0.85em;color:var(--text-dim);">${gamcodEsc(L.ui.doneTag)}</p>
      <div style="margin-top:0.8rem;">${newBtn}</div>
    </div>${gamcodLedgerHTML(L)}`;
  }

  const actIdx = gamcodRun.act;
  const act = gamcodRun.acts[actIdx];
  const actName = L.acts[act.tier].title;
  const themeName = L.themes[act.theme] ? L.themes[act.theme].name : act.theme;
  const qPos = GAMCOD_ACTS.slice(0, actIdx).reduce((s, a) => s + a.count, 0) + gamcodRun.qIndex + 1;
  const total = GAMCOD_ACTS.reduce((s, a) => s + a.count, 0);

  if (gamcodRun.step === "fork") {
    const intro = L.forks.intro[Math.floor(Math.random() * L.forks.intro.length)];
    let opts = "";
    gamcodRun.offered.forEach(tk => {
      const th = L.themes[tk] || { name: tk, line: "" };
      opts += `<button style="display:block;width:100%;text-align:left;background:var(--bg-input);border:1px solid var(--border-subtle);border-radius:8px;padding:0.6rem 0.8rem;margin-bottom:0.5rem;color:var(--text-light);cursor:pointer;" onclick="gamcodChoose('${gamcodEsc(tk)}')">
        <strong style="color:var(--accent-gold);">${gamcodEsc(th.name)}</strong><br><span style="font-size:0.85em;">${gamcodEsc(th.line)}</span>
      </button>`;
    });
    const prevTheme = gamcodRun.themes[gamcodRun.themes.length - 2];
    const cons = (prevTheme && L.consequences[prevTheme]) ? `<div style="background:var(--bg-input);border-left:3px solid var(--accent-green);border-radius:6px;padding:0.5rem 0.8rem;margin-bottom:0.6rem;font-size:0.85em;color:var(--text-light);font-style:italic;">${gamcodEsc(L.consequences[prevTheme])}</div>` : '';
    return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
      ${progressEl}
      <div style="margin-bottom:0.8rem;"><span class="tier-pill unlocked" style="display:inline-block;">${gamcodEsc(L.ui.act)} ${actIdx + 1} ${gamcodEsc(L.ui.of)} 4</span></div>
      ${cons}
      <div style="background:var(--bg-input);border-left:3px solid var(--accent-orange);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${gamcodEsc(intro)}</div>
      <p style="font-weight:bold;color:var(--accent-gold);margin-bottom:0.3rem;">${gamcodEsc(L.forks.question)}</p>
      <p style="font-size:0.85em;color:var(--text-dim);margin-bottom:0.6rem;">${gamcodEsc(L.ui.choosePath)}</p>
      ${opts}
      <div style="margin-top:0.8rem;">${newBtn}</div>
    </div>${gamcodLedgerHTML(L)}`;
  }

  const cur = gamcodCurrent();
  if (!cur) return "";
  const beat = gamcodFill(gamcodBeat(act.tier, gamcodRun.qIndex + actIdx), { emoji: cur.emoji, quest: gamcodQuestTitle(cur.title), guild: gamcodGuildName(cur.guild) });
  const guildObj = (typeof allAspects !== 'undefined') ? allAspects.find(g => g && g.name === cur.guild) : null;
  const cardHTML = (guildObj && typeof renderQuestCard === 'function')
    ? renderQuestCard(guildObj, guildObj[cur.tier].find(q => makeQuestId(guildObj.name, cur.tier, q[0]) === cur.qid), cur.tier, false)
    : `<div class="quest-card ${cur.tier}"><div class="quest-info"><strong>${gamcodEsc(cur.title)}</strong></div></div>`;

  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    ${progressEl}
    <div style="margin-bottom:0.8rem;">
      <span class="tier-pill unlocked" style="display:inline-block;">${gamcodEsc(L.ui.act)} ${actIdx + 1} ${gamcodEsc(L.ui.of)} 4 — ${gamcodEsc(actName)}</span>
      <span style="margin-left:0.5rem;font-size:0.8em;color:var(--text-dim);">${gamcodEsc(themeName)} · ${gamcodEsc(L.ui.quest)} ${qPos}/${total}</span>
    </div>
    <div style="background:var(--bg-input);border-left:3px solid var(--accent-gold);border-radius:6px;padding:0.7rem 0.9rem;margin-bottom:0.8rem;font-style:italic;color:var(--text-light);">${beat}</div>
    ${rulesHTML}
    ${cardHTML}
    <div style="font-size:0.8em;color:var(--accent-green);margin-top:0.6rem;">📷 ${gamcodEsc(L.ui.photoHint)}</div>
    <div style="margin-top:0.8rem;display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      ${newBtn}
      ${cur && questDone(cur.qid) ? `<button class="btn btn-small" onclick="gamcodAdvance('${gamcodEsc(cur.qid)}')">${gamcodEsc(L.ui.skipHint)}</button>` : ''}
    </div>
  </div>${gamcodLedgerHTML(L)}`;
}

function gamcodIntroHTML(L) {
  return `<div style="background:var(--bg-panel);border:1px solid var(--border-subtle);border-radius:12px;padding:1rem 1.1rem;margin-bottom:1rem;">
    <h3 style="color:var(--accent-gold);margin-bottom:0.3rem;">🌱 ${gamcodEsc(L.ui.gamcodMode)}</h3>
    <p style="font-size:0.9em;color:var(--text-light);margin-bottom:0.6rem;">${gamcodEsc(L.ui.gamcodTag)}</p>
    ${gamcodRulesHTML(L)}
    <p style="font-size:0.8em;color:var(--text-dim);margin-bottom:0.7rem;">${gamcodEsc(L.ui.enterCode)}</p>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
      <input id="gamcod-code-input" placeholder="ABC234" style="width:9rem;background:var(--bg-input);color:var(--text-light);border:1px solid var(--border-subtle);border-radius:6px;padding:0.5rem;text-transform:uppercase;" maxlength="6">
      <button class="btn btn-small" style="background:var(--accent-green-dark);color:var(--text-bright);" onclick="gamcodBegin(document.getElementById('gamcod-code-input').value)">${gamcodEsc(L.ui.begin)}</button>
      <button class="btn btn-small" onclick="gamcodNewRun()">${gamcodEsc(L.ui.newAdventure)}</button>
    </div>
  </div>`;
}

function gamcodToggleMode(on) {
  gamcodMode = !!on;
  try { window.gamcodMode = gamcodMode; } catch (e) {}
  try { localStorage.setItem('rpg_gamcodMode', gamcodMode ? 'true' : 'false'); } catch (e) {}
  if (gamcodMode) {
    gamcodLoadRun();
    if (!gamcodRun) gamcodBegin(null);
  }
  if (typeof renderQuests === 'function') renderQuests();
}

function gamcodRender() {
  if (!gamcodMode && !(typeof window !== 'undefined' && window.gamcodMode)) return;
  gamcodMode = true;
  try { window.gamcodMode = true; } catch (e) {}
  try { gamcodLang = (typeof lang !== 'undefined') ? lang : 'en'; } catch (e) { gamcodLang = 'en'; }
  const panel = document.getElementById('gamcod-panel');
  if (!panel) return;
  panel.innerHTML = gamcodPanelHTML();
}

/* ---- public API ---- */
window.gamcodMode = gamcodMode;
window.gamcodRun = gamcodRun;
window.gamcodLang = gamcodLang;
window.gamcodRender = gamcodRender;
window.gamcodBegin = gamcodBegin;
window.gamcodNewRun = gamcodNewRun;
window.gamcodAdvance = gamcodAdvance;
window.gamcodChoose = gamcodChoose;
window.gamcodToggleMode = gamcodToggleMode;
window.gamcodDoneCount = gamcodDoneCount;
window.gamcodCurrent = gamcodCurrent;
window.gamcodToggleCrop = gamcodToggleCrop;
window.gamcodAddCustomCrop = gamcodAddCustomCrop;
window.gamcodSetNum = gamcodSetNum;

try { gamcodMode = localStorage.getItem('rpg_gamcodMode') === 'true'; } catch (e) {}
if (gamcodMode) gamcodLoadRun();