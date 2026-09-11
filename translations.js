/* The Creative Village — i18n module.
 * Add a language by adding a block under LANG (copy the es block, translate, change the key).
 * Quest keys are the English titles; values are {title, desc}.
 */
const LANG = {
  "es": {
  "name": "Español",
  "ui": {
    "Setup": "Configuración",
    "Village": "Aldea",
    "Studio": "Estudio",
    "Quests": "Misiones",
    "Schoolhouse": "Escuela",
    "Library": "Biblioteca",
    "Mentor's Circle": "Círculo del Mentor",
    "Circle": "Círculo",
    "Commons": "Plaza",
    "WELCOME": "BIENVENIDOS",
    "The Creative Village — A Roll Making Game (RMG) for families": "La Aldea Creativa — Un Juego de Formar Roles (RMG) para familias",
    "A real-life skill-building journey — not a digital game you play on a screen. Build real skills, grow real attributes, earn real badges in the real world.": "Un viaje real de desarrollo de habilidades — no un juego digital que se juega en pantalla. Construye habilidades reales, desarrolla atributos reales, gana insignias reales en el mundo real.",
    "Data.js not found or failed to load. Using fallback data.": "No se encontró data.js o falló al cargar. Usando datos de respaldo.",
    "▼ Scroll down ▼": "▼ Desliza hacia abajo ▼",
    "School days already completed": "Días de escuela ya completados",
    "Total hours already logged": "Horas totales ya registradas",
    "Current curriculum (optional)": "Plan de estudios actual (opcional)",
    "Player Name": "Nombre del jugador",
    "Save & Enter Village": "Guardar y entrar a la Aldea",
    "Reset Village": "Reiniciar Aldea",
    "Reset": "Reiniciar",
    "8. Start Over / Reset": "8. Empezar de nuevo / Reiniciar",
    "Wipe all progress, quests, attendance, and player data from this browser and start fresh. Cannot be undone.": "Borra todo el progreso, las misiones, la asistencia y los datos de jugadores de este navegador y empieza de cero. No se puede deshacer.",
    "Your Family Guild": "El Gremio de tu Familia",
    "Click a character to open the Avatar Studio": "Toca un personaje para abrir el Estudio del Avatar",
    "Save Village (Download File)": "Guardar Aldea (Descargar archivo)",
    "Load Saved Village": "Cargar Aldea guardada",
    "Start Questing": "Empezar Aventura",
    "Avatar Studio": "Estudio del Avatar",
    "Class": "Clase",
    "Face": "Rostro",
    "Hair": "Cabello",
    "Outfit": "Vestimenta",
    "Gear": "Equipo",
    "Background": "Fondo",
    "Wardrobe": "Vestuario",
    "Attributes": "Atributos",
    "Save & Exit to Village": "Guardar y salir a la Aldea",
    "The Quest Board": "El Tablero de Misiones",
    "All Quests": "Todas las misiones",
    "My Biome Only": "Solo mi bioma",
    "Badge Progression": "Progreso de Insignias",
    "Free Roam — all quests unlocked": "Modo Libre — todas las misiones desbloqueadas",
    "Adventure Mode — complete 50% of a tier within one guild to unlock the next": "Modo Aventura — completa el 50% de un nivel en un gremio para desbloquear el siguiente",
    "Story Mode — a guided adventure, new every time": "Modo Historia — una aventura guiada, nueva en cada partida",
    "Survival Mode — train the family for the long haul": "Modo Supervivencia — entrena a la familia para la larga temporada",
    "Official Permies PEP Quests": "Misiones Oficiales PEP de Permies",
    "Submit evidence to their forum for official certification.": "Envía tu evidencia a su foro para la certificación oficial.",
    "Holistic RPG Add-on Guilds": "Gremios Adicionales RPG Holístico",
    "Custom to The Creative Village. Do not count toward official Permies PEP certification.": "Creados para La Aldea Creativa. No cuentan para la certificación oficial PEP de Permies.",
    "Guild": "Gremio",
    "No description available.": "Sin descripción disponible.",
    "complete": "completadas",
    "Locked": "Bloqueada",
    "Post to Permies": "Publicar en Permies",
    "Complete!": "¡Completada!",
    "Finalize": "Finalizar",
    "Learn More": "Aprender más",
    "Trackers": "Rastreadores",
    "Witnesses": "Testigos",
    "Otis Verification Protocol:": "Protocolo de Verificación Otis:",
    "photo of materials/site": "foto de los materiales / el lugar",
    "photo of you working": "foto de ti trabajando",
    "photo of finished product WITH a sign showing your name and date": "foto del producto terminado CON un letrero con tu nombre y la fecha",
    "Select who participated. Multiple people can hold the same role!": "Selecciona quién participó. ¡Varias personas pueden tener el mismo rol!",
    "Confirm & Complete Quest": "Confirmar y completar misión",
    "Guided Path for this Quest": "Ruta guiada para esta misión",
    "Prep": "Prepárate",
    "Core": "Núcleo",
    "Stretch": "Reto",
    "Curriculum topics connected to this skill:": "Temas de estudio conectados con esta habilidad:",
    "Skill-wide resources:": "Recursos generales de la habilidad:",
    "Feeling lucky? Spin for a surprise resource:": "¿Te sientes con suerte? ¡Gira por un recurso sorpresa!",
    "Spin": "Girar",
    "The Colorado Schoolhouse": "La Escuela de Colorado",
    "Attendance Tracker (CO Law: 172 Days)": "Registro de Asistencia (Ley de CO: 172 días)",
    "Days Completed:": "Días completados:",
    "Hours Logged:": "Horas registradas:",
    "hrs": "h",
    "Log 4-Hour School Day": "Registrar día escolar de 4 horas",
    "Log 1-Hour Day": "Registrar día de 1 hora",
    "Academic Transcript (CO Required Subjects)": "Expediente Académico (Materias obligatorias de CO)",
    "Hours are logged from completed quests (2 hrs each) plus any custom hours below.": "Las horas se registran de las misiones completadas (2 h cada una) más las horas personalizadas de abajo.",
    "Log Custom Academic Hours": "Registrar horas académicas personalizadas",
    "Add Hours": "Añadir horas",
    "Bring Your History": "Trae tu historial",
    "Already partway through your school year with another curriculum? Add your prior days and hours here so the tracker reflects where you actually are.": "¿Ya vas a mitad de año escolar con otro plan de estudios? Añade aquí tus días y horas previos para que el registro refleje dónde estás realmente.",
    "Add History to Tracker": "Añadir historial al registro",
    "Hours": "horas",
    "The Creative Village Library": "La Biblioteca de la Aldea",
    "A curated knowledge graph of free, public domain, and government resources for holistic homeschooling.": "Una colección curada de recursos gratuitos, de dominio público y gubernamentales para la educación en casa holística.",
    "Educational Philosophy & Nature Connection": "Filosofía Educativa y Conexión con la Naturaleza",
    "Colorado Homeschooling": "Educación en Casa en Colorado",
    "Permies & PEP Badges": "Insignias de Permies y PEP",
    "Curriculum by Subject": "Plan de estudios por Materia",
    "The Money Lab — Financial Literacy & Foreign Exchange": "El Laboratorio del Dinero — Cultura Financiera y Cambio de Divisas",
    "Food Preservation": "Conservación de Alimentos",
    "Woodworking": "Carpintería",
    "Homesteading & Self-Sufficiency": "Homesteading y Autosuficiencia",
    "Foraging & Herbalism": "Recolección y Herboristería",
    "The Creative Village Commons": "La Plaza de la Aldea",
    "Family Achievements": "Logros Familiares",
    "Bridge to Permies": "Puente a Permies",
    "Post your evidence to the PEP Forum to get officially certified by Paul Wheaton's team.": "Publica tu evidencia en el Foro PEP para obtener la certificación oficial del equipo de Paul Wheaton.",
    "Official PEP quests (marked with the shield icon) count toward Permies certification. RPG Add-on quests (marked with the sparkle icon) are custom to The Creative Village and do not count toward official PEP badges.": "Las misiones oficiales PEP (icono de escudo) cuentan para la certificación de Permies. Las misiones adicionales RPG (icono de chispa) son de La Aldea y no cuentan para las insignias oficiales de PEP.",
    "Open PEP Forum": "Abrir Foro PEP",
    "How to Apply for a Badge": "Cómo solicitar una insignia",
    "Optional: The Offline Archive": "Opcional: El Archivo Offline",
    "For families wanting a complete offline backup drive, download these open-source collections to a local hard drive:": "Para las familias que quieren un respaldo offline completo, descarga estas colecciones de código abierto a un disco local:",
    "Quests Done": "Misiones hechas",
    "Wardrobe Items": "Objetos de vestuario",
    "Sand Badges": "Insignias de Arena",
    "Straw Badges": "Insignias de Paja",
    "Wood Badges": "Insignias de Madera",
    "Iron Badges": "Insignias de Hierro",
    "Earned": "Ganada",
    "Family Members": "Miembros de la familia",
    "School Days": "Días de escuela",
    "The 64 cultural elements of deep nature connection — from Jon Young's 512 Project and the 8 Shields framework. These practices weave the invisible fabric of community that makes permaculture skills sustainable across generations.": "Los 64 elementos culturales de la conexión profunda con la naturaleza — del Proyecto 512 de Jon Young y el marco de los 8 Escudos. Estas prácticas tejen el tejido invisible de la comunidad que hace sostenibles las habilidades de permacultura a través de las generaciones.",
    "Gold Nugget Earned!": "¡Pepita de Oro Ganada!",
    "You worked the entire Commerce guild — budgets, currency exchange, paper trading, even a family forex night. That's real financial skill, earned in the real world.": "Completaste todo el gremio de Comercio — presupuestos, cambio de divisas, operaciones de papel y hasta una noche familiar de forex. Eso es habilidad financiera real, ganada en el mundo real.",
    "The Gold Nugget is now part of your family's story. No real money was moved — only understanding.": "La Pepita de Oro ahora es parte de la historia de tu familia. No se movió dinero real — solo comprensión.",
    "Glow on ✨": "¡A brillar ✨",
    "Before": "Antes",
    "During": "Durante",
    "After": "Después",
    "Tier": "Nivel",
    "Level": "Nivel",
    "Guild of": "Gremio de",
    "Gold Nugget": "Pepita de Oro",
    "The Creative Village — A Roll Making Game (RMG)": "La Aldea Creativa — Un Juego de Formar Roles (RMG)",
    "Print All 15 Sheets": "🖨️ Imprimir las 15 hojas",
    "Print This Sheet": "🖨️ Imprimir esta hoja",
    "All 15 Sheets": "Las 15 hojas",
    "Family Progress": "Progreso Familiar",
    "quests completed": "misiones completadas",
    "Quests:": "Misiones:",
    "Wardrobe:": "Vestuario:",
    "items": "objetos",
    "earned": "ganada",
    "Reward:": "Premio:",
    "💾 Save Village (Download File)": "💾 Guardar Aldea (Descargar archivo)",
    "📂 Load Saved Village": "📂 Cargar Aldea guardada",
    "🔄 Reset": "🔄 Reiniciar",
    "Learning Lab": "Laboratorio de Aprendizaje",
    "The Learning Lab": "El Laboratorio de Aprendizaje",
    "The Village Library": "La Biblioteca de la Aldea",
    "The Village Commons": "La Plaza de la Aldea",
    "Paul Wheaton, Right Now": "Paul Wheaton, Ahora Mismo",
    "Woodworking & Hand Tools": "Carpintería y Herramientas Manuales",
    "Your Learning Blueprint": "Tu Plan de Aprendizaje",
    "Starts on a screen. Grows into real life: real skills, real attributes, real badges in the real world.": "Empieza en una pantalla. Crece en la vida real: habilidades reales, atributos reales, insignias reales en el mundo real.",
    "Free, public-domain, and government resources for homeschooling — curated by hand.": "Recursos gratuitos, de dominio público y gubernamentales para la educación en casa — curados a mano.",
    "A living map of how people learn — curricula from around the world and across time, the science of learning, and a tool for building your family's own blend.": "Un mapa vivo de cómo aprende la gente — planes de estudio de todo el mundo y de todas las épocas, la ciencia del aprendizaje y una herramienta para crear la mezcla propia de tu familia.",
    "The Gold Nugget is now part of your family's story. No real money moved; what grew was understanding.": "La Pepita de Oro ahora es parte de la historia de tu familia. No se movió dinero real; lo que creció fue la comprensión.",
    "This is the educational blend your family chose. Build quests that honor it.": "Esta es la mezcla educativa que eligió tu familia. Crea misiones que la honren."
  },
  "subjects": {
    "Science": "Ciencias",
    "Math": "Matemáticas",
    "Art": "Arte",
    "PE": "Educación Física",
    "Health": "Salud",
    "Geography": "Geografía",
    "Writing": "Escritura",
    "History": "Historia",
    "Economics": "Economía",
    "Constitution": "Constitución",
    "Reading": "Lectura"
  },
  "roles": {
    "Tracker": "Rastreador(a)",
    "Witness": "Testigo",
    "Hearth Tender": "Custodio del Fogón",
    "Hearth": "Fogón",
    "Mentor": "Mentor(a)",
    "Mentors": "Mentores",
    "Trackers": "Rastreadores",
    "Witnesses": "Testigos"
  },
  "tiers": {
    "Sand": "Arena",
    "Straw": "Paja",
    "Wood": "Madera",
    "Iron": "Hierro"
  },
  "guilds": {
    "Gardening": {
      "name": "Jardinería",
      "desc": "Cultiva alimentos, guarda semillas y construye sistemas de jardín resistentes."
    },
    "Natural Building": {
      "name": "Construcción Natural",
      "desc": "Usa arcilla, paja, madera y piedra para construir refugios y acabados saludables."
    },
    "Woodland Care": {
      "name": "Cuidado del Bosque",
      "desc": "Cuida bosques, leña, cercas, hongos y sistemas de madera viva."
    },
    "Round Wood Woodworking": {
      "name": "Carpintería de Madera Redonda",
      "desc": "Construye cosas útiles con troncos, palos y ramas con poco pegamento y metal."
    },
    "Tool Care": {
      "name": "Cuidado de Herramientas",
      "desc": "Mantén las herramientas afiladas, limpias, aceitadas y reparadas para que duren más."
    },
    "Earthworks": {
      "name": "Movimiento de Tierras",
      "desc": "Da forma al terreno para mover agua, reducir la erosión y hacer caminos que perduran."
    },
    "Dimensional Lumber Woodworking": {
      "name": "Carpintería de Madera Aserrada",
      "desc": "Usa madera recta y uniones fuertes para hacer muebles y estructuras prácticas."
    },
    "Rocket": {
      "name": "Estufa Cohete",
      "desc": "Construye aparatos de leña que ahorran combustible y usan el calor con gran eficiencia."
    },
    "Food Prep": {
      "name": "Preparación de Alimentos",
      "desc": "Conserva, cocina y disfruta los alimentos de forma segura y deliciosa."
    },
    "Animal Care": {
      "name": "Cuidado de Animales",
      "desc": "Cuida de los animales domésticos y de granja con respeto y abundancia."
    },
    "Foraging": {
      "name": "Recolección Silvestre",
      "desc": "Aprende a encontrar, identificar y recolectar plantas silvestres comestibles con seguridad."
    },
    "Community Living": {
      "name": "Vida en Comunidad",
      "desc": "Practica habilidades sociales, de servicio y de eventos que ayudan a los grupos a prosperar."
    },
    "Textiles": {
      "name": "Textiles",
      "desc": "Haz, repara y usa tela, hilo y fibra natural para cosas útiles y hermosas."
    },
    "Greywater and Willow Feeders": {
      "name": "Aguas Grises y Cultivo de Sauces",
      "desc": "Maneja el agua gris y cultiva sauces para jardines y paisajes productivos."
    },
    "Metalworking": {
      "name": "Trabajo en Metal",
      "desc": "Martilla, lima, suelda y une metal para herramientas y estructuras."
    },
    "Plumbing and Hot Water": {
      "name": "Plomería y Agua Caliente",
      "desc": "Repara fugas, desagües y sistemas de agua y calor de tu casa."
    },
    "Electricity": {
      "name": "Electricidad",
      "desc": "Aprende lo básico de CA y CC, baterías, circuitos y sistemas solares con seguridad."
    },
    "Commerce": {
      "name": "Comercio",
      "desc": "Gana dinero, intercambia valor, lleva registros y aprende cómo se mueven las divisas — desde el cambio de bolsillo hasta la bóveda de la Pepita de Oro."
    },
    "Natural Medicine": {
      "name": "Medicina Natural",
      "desc": "Aprende formas seguras y prácticas de identificar y usar plantas curativas."
    },
    "Nest": {
      "name": "Nido",
      "desc": "Mantén la casa limpia, ordenada y cómoda para la vida familiar diaria."
    },
    "Homesteading": {
      "name": "Autosuficiencia",
      "desc": "Maneja habilidades prácticas que mantienen una casa y una familia listas para emergencias reales."
    },
    "Oddball": {
      "name": "Curiosidades",
      "desc": "Reúne experiencias de vida extrañas, creativas y deliciosamente inesperadas."
    },
    "Vitality": {
      "name": "Vitalidad",
      "desc": "Construye vitalidad física con movimiento, ritmo y conciencia corporal."
    },
    "Community": {
      "name": "Comunidad",
      "desc": "Practica habilidades sociales, de servicio y de eventos que ayudan a los grupos a prosperar."
    }
  },
  "quests": {
    "Build a Hugelkultur Bed": {
      "title": "Construir un lecho Hugelkultur",
      "desc": "Construye un montículo hugelkultur pequeño con mantillo, semillas y plantas fijadoras de nitrógeno."
    },
    "Chop and Drop": {
      "title": "Cortar y soltar",
      "desc": "Poda las plantas y deja el material en su lugar como mantillo sobre una zona del jardín."
    },
    "Ruth Stout Composting": {
      "title": "Compostaje estilo Ruth Stout",
      "desc": "Prepara zonas del jardín con mantillo grueso usando capas orgánicas y restos de cocina."
    },
    "Seed Saving": {
      "title": "Guardar semillas",
      "desc": "Cosecha, seca y guarda semillas de cuatro especies de plantas diferentes."
    },
    "Build a 12 Foot Hugelkultur": {
      "title": "Construir un hugelkultur de 12 pies",
      "desc": "Extiende un lecho hugelkultur hasta unos 12 pies con troncos, mantillo y tierra."
    },
    "Encourage Volunteer Plants": {
      "title": "Fomentar plantas voluntarias",
      "desc": "Identifica y protege cinco plantas que brotaron solas en el jardín."
    },
    "Direct Seed Perennials": {
      "title": "Sembrar perennes directamente",
      "desc": "Siembra cultivos perennes en el suelo y registra lo que va brotando."
    },
    "Make a 100 Sq Ft Polyculture Garden": {
      "title": "Hacer un jardín de policultivo de 100 pies cuadrados",
      "desc": "Diseña y planta un jardín de especies mixtas con al menos 12 especies."
    },
    "Build a 7 x 24 Hugelkultur": {
      "title": "Construir un hugelkultur de 7 x 24",
      "desc": "Crea un lecho hugelkultur más grande con troncos, mantillo y tierra."
    },
    "Grow and Harvest 1M Calories": {
      "title": "Cultivar y cosechar 1M de calorías",
      "desc": "Planea, planta y cosecha un sistema de jardín que produzca un millón de calorías."
    },
    "Build a Quarter Acre Food Forest": {
      "title": "Crear un bosque de alimentos de un cuarto de acre",
      "desc": "Diseña y establece un bosque de alimentos diverso con varias capas."
    },
    "Direct Seed 50 Each of 10 Perennial Species": {
      "title": "Sembrar 50 de cada una de 10 especies perennes",
      "desc": "Planta grandes lotes de semillas de diez especies perennes y registra la germinación."
    },
    "Grow and Harvest 4M Calories": {
      "title": "Cultivar y cosechar 4M de calorías",
      "desc": "Escala un sistema de cultivo para producir millones de calorías."
    },
    "Build a 7 x 150 Hugelkultur": {
      "title": "Construir un hugelkultur de 7 x 150",
      "desc": "Crea un sistema hugelkultur enorme con varios lechos y mantillo grueso."
    },
    "Harvest Fruit from 12 Seed-Grown Trees": {
      "title": "Cosechar fruta de 12 árboles nacidos de semilla",
      "desc": "Cría y cosecha fruta de una docena de árboles que crecieron desde semilla."
    },
    "Build a 1 Acre Food Forest": {
      "title": "Construir un bosque de alimentos de 1 acre",
      "desc": "Establece un bosque de alimentos de un acre completo con plantaciones en capas."
    },
    "Landrace Seed Saving": {
      "title": "Guardar semillas de variedades locales",
      "desc": "Guarda semillas de 12 especies durante 3 generaciones y mantén sus rasgos fuertes."
    },
    "Make 12 Adobe Bricks": {
      "title": "Hacer 12 ladrillos de adobe",
      "desc": "Mezcla, moldea y seca un lote pequeño de ladrillos de adobe."
    },
    "Make Clay Paint": {
      "title": "Hacer pintura de arcilla",
      "desc": "Mezcla y aplica un acabado simple de pintura de arcilla."
    },
    "Level a Skiddable Structure with Rocks": {
      "title": "Nivelar con rocas una estructura deslizante",
      "desc": "Usa rocas para nivelar una estructura que se pueda mover sobre patines."
    },
    "Make a 25 Sq Ft Shake Roof": {
      "title": "Hacer un techo de tablillas de 25 pies cuadrados",
      "desc": "Arma una sección pequeña de techo de tablillas."
    },
    "Make Whitewash": {
      "title": "Hacer encalado",
      "desc": "Mezcla y aplica un acabado de cal."
    },
    "Assess Clay Mixes": {
      "title": "Evaluar mezclas de arcilla",
      "desc": "Prueba varias mezclas de arcilla, arena y paja y compara los resultados."
    },
    "Build a Tiny Shed on Skids": {
      "title": "Construir un cobertizo pequeño sobre patines",
      "desc": "Enmarca y termina un cobertizo pequeño que pueda moverse sobre patines."
    },
    "Make a Cob Sink": {
      "title": "Hacer un lavabo de adobe",
      "desc": "Da forma y termina una pileta de adobe para una casa o cocina exterior."
    },
    "Make a Tree Stand": {
      "title": "Hacer un soporte para árbol",
      "desc": "Construye un soporte pequeño de materiales naturales para un árbol o un letrero."
    },
    "Operating Window from Scratch": {
      "title": "Ventana funcional desde cero",
      "desc": "Construye desde cero un marco y un batiente de ventana funcionales."
    },
    "Straw Bale Wall of a Wofati": {
      "title": "Pared de paja de un wofati",
      "desc": "Crea una sección de pared de paja para una estructura estilo wofati."
    },
    "Wattle and Daub Wall": {
      "title": "Pared de zarzo y barro",
      "desc": "Teje un panel de zarzo y cúbrelo con yeso de arcilla."
    },
    "Cob Bench with Round Pole Roof": {
      "title": "Banco de adobe con techo de postes redondos",
      "desc": "Construye un banco y una cubierta de clima con materiales naturales."
    },
    "Build a Wofati and Live in It for a Winter": {
      "title": "Construir un wofati y vivir en él un invierno",
      "desc": "Crea una casa wofati y vive en ella durante las condiciones de invierno."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Bow Saw": {
      "title": "Tumbar un árbol seco de 6-8 pulgadas con serrucho de arco",
      "desc": "Tumba con seguridad un árbol seco pequeño de pie usando un serrucho de arco."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Chainsaw": {
      "title": "Tumbar un árbol seco de 6-8 pulgadas con motosierra",
      "desc": "Tumba con seguridad un árbol seco pequeño con motosierra y supervisión."
    },
    "Drop a 6-8 Inch Live Tree with a Bow Saw": {
      "title": "Tumbar un árbol vivo de 6-8 pulgadas con serrucho de arco",
      "desc": "Tumba con seguridad un árbol vivo pequeño usando un serrucho de arco."
    },
    "Drop a 6-8 Inch Live Tree with a Chainsaw": {
      "title": "Tumbar un árbol vivo de 6-8 pulgadas con motosierra",
      "desc": "Tumba con seguridad un árbol vivo pequeño con motosierra y supervisión."
    },
    "Limb 4 Trees": {
      "title": "Desramar 4 árboles",
      "desc": "Quita las ramas de cuatro árboles y apila la maleza ordenadamente."
    },
    "Peel 2 Live Trees and Put Them Up to Dry": {
      "title": "Descortezar 2 árboles vivos y ponerlos a secar",
      "desc": "Pela dos árboles vivos y guárdalos separados del suelo para que se sequen."
    },
    "Split and Stack Dead Standing Wood as Firewood": {
      "title": "Rajar y apilar madera seca de pie como leña",
      "desc": "Convierte la madera seca de pie en leña apilada."
    },
    "Prep 10 Junkpoles": {
      "title": "Preparar 10 postes",
      "desc": "Prepara diez postes rectos para construir o cercar."
    },
    "Cleave 6 Shakes with a Froe": {
      "title": "Hender 6 tablillas con un rompecal",
      "desc": "Parte seis tablillas de techo de madera de veta recta."
    },
    "Build 12 Feet of Junkpole Fence or Repair 24 Feet": {
      "title": "Construir 12 pies de cerca de postes o reparar 24 pies",
      "desc": "Construye o repara una sección de cerca de postes."
    },
    "Drop at Least 12 Trees 8 Inches or Larger": {
      "title": "Tumbar al menos 12 árboles de 8 pulgadas o más",
      "desc": "Tumba con seguridad una docena de árboles medianos."
    },
    "One Cord of Firewood Cut and Stacked Under a Roof": {
      "title": "Una cuerda de leña cortada y apilada bajo techo",
      "desc": "Corta y apila una cuerda de leña donde se mantenga seca."
    },
    "Make Lumber: a Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Hacer madera: una docena de 2x4s, 1x4s y 3/8x4s",
      "desc": "Asierra o cepilla un primer lote de madera."
    },
    "Twig Construction: 5 Foot Tomato Cage and 8 Foot Pole Bean Trellis": {
      "title": "Construcción con ramas: jaula de tomates de 5 pies y enrejado de frijol trepador de 8 pies",
      "desc": "Construye soportes para plantas con ramas y postes."
    },
    "36 Feet of Junkpole Fence plus Gate with Latch": {
      "title": "Cerca de postes de 36 pies más puerta con pestillo",
      "desc": "Construye una cerca de postes más larga con una puerta que funcione."
    },
    "Plant Tree Seeds for 100 Feet of Living Fence": {
      "title": "Sembrar semillas de árbol para 100 pies de cerca viva",
      "desc": "Siembra semillas de árbol para una cerca viva futura y registra la germinación."
    },
    "Put Up Three Cords of Firewood": {
      "title": "Poner tres cuerdas de leña",
      "desc": "Corta, raja y apila tres cuerdas de leña."
    },
    "More Lumber: 8 Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Hacer madera: ocho docenas de 2x4s, 1x4s y 3/8x4s",
      "desc": "Produce un gran lote de madera aserrada."
    },
    "Build Six Rock Jacks from Split Logs": {
      "title": "Construir seis gatos de roca con troncos partidos",
      "desc": "Haz gatos de roca resistentes para levantar o sostener."
    },
    "120 Feet of Junkpole Fence with Good Gate and Latch": {
      "title": "Cerca de postes de 120 pies con buena puerta y pestillo",
      "desc": "Construye una cerca de postes larga con una puerta sólida."
    },
    "Plant 300 Black Locust Seeds": {
      "title": "Sembrar 300 semillas de acacia negra",
      "desc": "Siembra semillas de acacia negra a escala y registra la germinación."
    },
    "Plant 300 Cleavers": {
      "title": "Sembrar 300 gallitos",
      "desc": "Empieza un parche de gallitos y observa cómo se propaga."
    },
    "Plant 300 Nettles": {
      "title": "Sembrar 300 ortigas",
      "desc": "Empieza un parche de ortigas y manéjalo con seguridad."
    },
    "Plant 60 Willows": {
      "title": "Sembrar 60 sauces",
      "desc": "Cultiva sauces para futura comida, cercos y cestería."
    },
    "Plant 40 Sweet Sap Silver Maples": {
      "title": "Sembrar 40 arces plateados de savia dulce",
      "desc": "Establece árboles que puedan dar savia y sombra."
    },
    "Plant 10 Cedar Trees": {
      "title": "Sembrar 10 cedros",
      "desc": "Establece una línea de cedros para refugio y hábitat futuros."
    },
    "Twig Construction: Six 5 Foot Tomato Cages and Three 8 Foot Trellises": {
      "title": "Construcción con ramas: seis jaulas de tomate de 5 pies y tres enrejados de 8 pies",
      "desc": "Construye un conjunto completo de soportes de jardín con postes y ramas."
    },
    "Plant Tree Seeds for 800 Feet of Living Fence": {
      "title": "Sembrar semillas de árbol para 800 pies de cerca viva",
      "desc": "Siembra semillas para una cerca viva larga en el futuro."
    },
    "Lay 50 Feet of Living Hedge": {
      "title": "Poner 50 pies de seto vivo",
      "desc": "Construye un seto vivo y protégelo hasta que se establezca."
    },
    "Berm Shed 8x8x8 with 5 Foot Eave": {
      "title": "Cobertizo de tierra 8x8x8 con alero de 5 pies",
      "desc": "Construye un cobertizo de tierra que cumpla las medidas indicadas."
    },
    "Gin Pole: Lift a 10 Foot Log 15 Feet Off the Ground": {
      "title": "Palo para izar: levantar un tronco de 10 pies a 15 pies",
      "desc": "Usa un palo para izar para elevar un tronco con seguridad."
    },
    "Outdoor Mushrooms: 1 lb Each Oyster and Shiitake": {
      "title": "Hongos al aire libre: 1 libra de ostra y shiitake cada una",
      "desc": "Cultiva hongos ostra y shiitake al aire libre."
    },
    "Put Up Six Cords of Firewood": {
      "title": "Poner seis cuerdas de leña",
      "desc": "Produce y apila seis cuerdas de leña."
    },
    "200 2x4s, 1x4s, and 3/8x4s Lumber": {
      "title": "200 maderas 2x4s, 1x4s y 3/8x4s",
      "desc": "Haz una pila muy grande de madera aserrada."
    },
    "Build 24 Rock Jacks from Split Logs": {
      "title": "Construir 24 gatos de roca con troncos partidos",
      "desc": "Haz un juego resistente de gatos de roca."
    },
    "Plant Seeds to Restore Creek Bed": {
      "title": "Sembrar semillas para restaurar el lecho de un arroyo",
      "desc": "Siembra y estabiliza una zona grande de restauración de lecho de arroyo."
    },
    "Berm Shed: 3 Cells, 12x12x12 Each, 5 Foot Eaves": {
      "title": "Cobertizo de tierra: 3 celdas, 12x12x12 cada una, aleros de 5 pies",
      "desc": "Construye un cobertizo de tierra de varias celdas a gran escala."
    },
    "Build Two Skiddable Structures": {
      "title": "Construir dos estructuras deslizables",
      "desc": "Crea dos estructuras que puedan moverse sobre patines."
    },
    "Gin Pole: Lift a 20 Foot Log 20 Feet Off the Ground": {
      "title": "Palo para: levantar un tronco de 20 pies a 20 pies",
      "desc": "Levanta un tronco grande con un sistema de palo para izar."
    },
    "Produce 10 lbs Each Oyster and Shiitake Mushrooms": {
      "title": "Producir 10 libras de ostra y shiitake",
      "desc": "Cultiva una gran cosecha de hongos al aire libre."
    },
    "Carve a Spoon": {
      "title": "Tallar una cuchara",
      "desc": "Da forma a una cuchara de madera útil a partir de una rama o madera de desecho."
    },
    "Make a Wooden Mallet": {
      "title": "Hacer un mazo de madera",
      "desc": "Convierte un palo o rama redonda en un mazo simple."
    },
    "Build a Simple Roundwood Bench": {
      "title": "Construir un banco simple de madera redonda",
      "desc": "Haz un banco pequeño y resistente con madera redonda y amarras."
    },
    "Make Coat Hooks from Sticks": {
      "title": "Hacer percheros con ramas",
      "desc": "Crea un juego de percheros con ramas o ramitas."
    },
    "Sharpen a Knife": {
      "title": "Afilar un cuchillo",
      "desc": "Afila un cuchillo de cocina o de bolsillo con seguridad."
    },
    "Sharpen a Shovel or Hoe": {
      "title": "Afilar una pala o azada",
      "desc": "Restaura el filo de una herramienta para excavar."
    },
    "Oil a Tool": {
      "title": "Aceitar una herramienta",
      "desc": "Limpia y aceita una herramienta de mano para evitar la herrumbre."
    },
    "Repair a Tool": {
      "title": "Reparar una herramienta",
      "desc": "Arregla un mango, un ajuste o un tornillo de herramienta dañado."
    },
    "Build a Berm": {
      "title": "Construir un terraplén",
      "desc": "Amontona y da forma a la tierra para hacer un terraplén pequeño."
    },
    "Dig a Swale": {
      "title": "Cavar una zanja de captación",
      "desc": "Corta una zanja poco profunda a nivel para frenar el agua."
    },
    "Build a Trail": {
      "title": "Construir un sendero",
      "desc": "Crea un sendero simple que soporte el paso a pie."
    },
    "Build a Birdhouse": {
      "title": "Construir una casa para pájaros",
      "desc": "Haz una casita para pájaros con cortes limpios y armado firme."
    },
    "Make a Shelf": {
      "title": "Hacer un estante",
      "desc": "Construye y cuelga un estante simple."
    },
    "Build a Toolbox": {
      "title": "Construir una caja de herramientas",
      "desc": "Construye una caja de herramientas útil con madera."
    },
    "Make a Stool": {
      "title": "Hacer un taburete",
      "desc": "Construye un taburete pequeño con ensambles firmes."
    },
    "Cook a Meal on a Rocket Stove": {
      "title": "Cocinar una comida en estufa cohete",
      "desc": "Prepara comida en una estufa cohete simple o en un campamento."
    },
    "Build a Small Rocket Stove": {
      "title": "Construir una estufa cohete pequeña",
      "desc": "Arma una estufa cohete básica para cocinar."
    },
    "Make a Rocket Mass Heater Model": {
      "title": "Hacer un modelo de estufa de masa cohete",
      "desc": "Construye un modelo pequeño que muestre cómo funciona una estufa de masa cohete."
    },
    "Heat Water with a Rocket Heater": {
      "title": "Calentar agua con una estufa cohete",
      "desc": "Usa un sistema cohete para calentar agua para una tarea."
    },
    "Cook Grain 4 Ways": {
      "title": "Cocinar un grano de 4 maneras",
      "desc": "Prepara un grano de cuatro maneras diferentes."
    },
    "Preserve One Item": {
      "title": "Conservar un alimento",
      "desc": "Conserva un alimento congelándolo, secándolo, fermentándolo o enlatándolo."
    },
    "Bread from Scratch": {
      "title": "Pan desde cero",
      "desc": "Hornea pan con harina, agua, levadura o masa madre y sal."
    },
    "Hay Box Cooking": {
      "title": "Cocinar con caja de paja",
      "desc": "Cocina una comida en una caja de paja o en una olla aislante."
    },
    "Build a Bird Feeder or Waterer": {
      "title": "Construir un comedero o bebedero para pájaros",
      "desc": "Haz un comedero o fuente de agua para aves o polinizadores."
    },
    "Create a Pollinator Habitat Patch": {
      "title": "Crear un parche de hábitat para polinizadores",
      "desc": "Planta y protege un parche que sustente abejas y mariposas."
    },
    "Clean an Animal Shelter or Coop": {
      "title": "Limpiar un refugio o gallinero de animales",
      "desc": "Limpia y acondiciona un refugio o gallinero sencillo."
    },
    "Build a Wildlife Shelter": {
      "title": "Construir un refugio para la fauna",
      "desc": "Haz un refugio pequeño o una pila de ramas para la fauna local."
    },
    "Identify 5 Edible Wild Plants": {
      "title": "Identificar 5 plantas silvestres comestibles",
      "desc": "Aprende a reconocer cinco plantas silvestres comestibles de tu zona."
    },
    "Harvest a Wild Food": {
      "title": "Cosechar un alimento silvestre",
      "desc": "Recoge bayas, frutas, frutos secos o verduras con permiso y cuidado."
    },
    "Make a Wild Tea": {
      "title": "Hacer un té silvestre",
      "desc": "Seca o deja reposar una planta silvestre segura para hacer té."
    },
    "Preserve a Wild Harvest": {
      "title": "Conservar una cosecha silvestre",
      "desc": "Seca, congela o conserva de otra forma algo recolectado."
    },
    "Cook for a Neighbor or Group": {
      "title": "Cocinar para un vecino o un grupo",
      "desc": "Prepara comida para alguien fuera de tu hogar."
    },
    "Public Art": {
      "title": "Arte público",
      "desc": "Crea arte que se pueda compartir con el público."
    },
    "Host a Workshop or Skill Share": {
      "title": "Dar un taller o intercambio de habilidades",
      "desc": "Enseña u organiza una clase simple para otros."
    },
    "Organize a Swap": {
      "title": "Organizar un intercambio",
      "desc": "Coordina un intercambio de bienes o habilidades útiles."
    },
    "Mend a Hole": {
      "title": "Remendar un agujero",
      "desc": "Repara un agujero en una tela con una puntada o un parche simple."
    },
    "Replace a Button": {
      "title": "Cambiar un botón",
      "desc": "Cose un botón de nuevo o reemplaza uno que falte."
    },
    "Hem Clothing": {
      "title": "Hacer un dobladillo a una prenda",
      "desc": "Acorta o remata el dobladillo de una prenda."
    },
    "Sew an Item": {
      "title": "Cocer un objeto",
      "desc": "Haz un objeto pequeño cosido como una bolsita, servilleta o bolso."
    },
    "Use Greywater-Safe Soap": {
      "title": "Usar jabón seguro para aguas grises",
      "desc": "Elige un jabón que sea seguro para el uso de aguas grises."
    },
    "Reuse Rinse Water on a Plant Bed": {
      "title": "Reutilizar el agua de enjuague en un lecho de plantas",
      "desc": "Lleva el agua de enjuague a una cuenca de mantillo o a un lecho de plantas."
    },
    "Mulch a Willow Basin": {
      "title": "Acolchar una cuenca de sauces",
      "desc": "Añade mantillo alrededor de una zona de sauce o de álamo."
    },
    "Plant a Willow or Poplar Cutting": {
      "title": "Plantar un esqueje de sauce o de álamo",
      "desc": "Inicia un esqueje de sauce o de álamo para el futuro uso de aguas grises."
    },
    "Hammer and Bend a Metal Hook": {
      "title": "Martillar y doblar un gancho de metal",
      "desc": "Da forma a un gancho simple a partir de una pieza plana o redonda."
    },
    "File and Smooth a Metal Edge": {
      "title": "Limar y suavizar un borde de metal",
      "desc": "Usa una lima para terminar y suavizar una pieza de metal."
    },
    "Cut Simple Stock with a Hacksaw": {
      "title": "Cortar material simple con una sierra de arco",
      "desc": "Corta metal con seguridad con herramientas de mano."
    },
    "Make a Small Bracket or Hanger": {
      "title": "Hacer un soporte o colgador pequeño",
      "desc": "Crea un soporte, colgador o sujetador útil de metal."
    },
    "Replace a Faucet Washer": {
      "title": "Cambiar una arandela de grifo",
      "desc": "Arregla una gotera cambiando la arandela del grifo."
    },
    "Unclog a Drain": {
      "title": "Desatascar un desagüe",
      "desc": "Despeja un desagüe de lavabo o ducha con una herramienta o método simple."
    },
    "Fix a Dripping Hose Connection": {
      "title": "Arreglar una conexión de manguera que gotea",
      "desc": "Detén una fuga en una manguera o en una conexión de agua exterior."
    },
    "Insulate a Hot Water Pipe": {
      "title": "Aislar una tubería de agua caliente",
      "desc": "Envuelve una tubería o línea de agua caliente para conservar el calor."
    },
    "Build a Battery and Bulb Circuit": {
      "title": "Construir un circuito de batería y foco",
      "desc": "Haz un circuito simple que funcione con una batería y una luz."
    },
    "Replace a Lightbulb Safely": {
      "title": "Cambiar un foco con seguridad",
      "desc": "Cambia un foco y comprueba que el artefacto funciona."
    },
    "Organize and Label Cords": {
      "title": "Organizar y etiquetar los cables",
      "desc": "Ordena los cables y etiquétalos para que sea más fácil y seguro usarlos."
    },
    "Test a Battery and Read Voltage": {
      "title": "Probar una batería y leer el voltaje",
      "desc": "Mide o compara el voltaje de una batería y anota el resultado."
    },
    "Sell or Trade Something Homemade": {
      "title": "Vender o intercambiar algo hecho en casa",
      "desc": "Haz algo e intercámbialo o véndelo a otra persona."
    },
    "Track a Simple Budget": {
      "title": "Llevar un presupuesto simple",
      "desc": "Anota los ingresos y gastos de una semana."
    },
    "Offer a Service and Track the Earnings": {
      "title": "Ofrecer un servicio y registrar las ganancias",
      "desc": "Haz un trabajo pagado o intercambiado y anota lo que ganaste."
    },
    "Create a Mini Online Listing": {
      "title": "Crear un anuncio en línea pequeño",
      "desc": "Escribe un anuncio simple de algo que hiciste u ofreces."
    },
    "Meet a Foreign Currency": {
      "title": "Conocer una moneda extranjera",
      "desc": "Descubre una moneda, su símbolo y los países que la usan."
    },
    "Run a Family Currency Exchange": {
      "title": "Hacer un cambio de moneda familiar",
      "desc": "Cambia algo de dinero de juguete entre dos monedas y calculen el total juntos."
    },
    "Start a Paper-Trading Journal": {
      "title": "Empezar un diario de operaciones de papel",
      "desc": "Anota una operación imaginaria: lo que esperabas contra lo que pasó de verdad."
    },
    "Compare Buying Power": {
      "title": "Comparar el poder de compra",
      "desc": "Pregunta cuánto cuesta un artículo común en dólares, euros y francos."
    },
    "Save Toward a Tiny Goal": {
      "title": "Ahorrar para una meta pequeña",
      "desc": "Guarda un poco de dinero de bolsillo para una meta pequeña durante un mes y hazle seguimiento."
    },
    "Track Exchange Rates for a Week": {
      "title": "Seguir los tipos de cambio durante una semana",
      "desc": "Observa un par de monedas durante una semana y anota si sube, baja o se mantiene."
    },
    "Run a Simulated Trade": {
      "title": "Hacer una operación simulada",
      "desc": "Usa un simulador gratuito: haz una operación de papel con un límite de pérdida y registra el resultado."
    },
    "Plan a Get-Off-the-Dollar Experiment": {
      "title": "Planear un experimento para salir del dólar",
      "desc": "Diseña una forma pequeña en que tu familia pueda intercambiar valor más allá del dólar."
    },
    "Host the Family Forex Game Night": {
      "title": "Organizar la noche familiar del juego de divisas",
      "desc": "Reúne a la familia en un simulador gratuito y corran una noche de misión."
    },
    "Present a Family Financial Freedom Plan": {
      "title": "Presentar un plan familiar de libertad financiera",
      "desc": "Expón el plan familiar para ahorrar, intercambiar y hacer crecer el valor a su manera."
    },
    "Run a Simulated Season": {
      "title": "Hacer una temporada simulada",
      "desc": "Lleva un portafolio imaginario de varias monedas durante una temporada completa y anota cada decisión."
    },
    "Keep the Golden Rule Alive": {
      "title": "Mantener viva la regla de oro",
      "desc": "Enseña a un amigo o hermano: primero protege el dinero, segundo aprende, tercero invierte."
    },
    "Identify 5 Medicinal Herbs": {
      "title": "Identificar 5 hierbas medicinales",
      "desc": "Aprende a reconocer cinco hierbas medicinales o plantas curativas comunes."
    },
    "Make a Simple Herbal Tea": {
      "title": "Hacer un té de hierbas simple",
      "desc": "Seca o deja reposar una hierba segura para hacer té."
    },
    "Prepare a Salve or Balm": {
      "title": "Preparar un ungüento o bálsamo",
      "desc": "Haz un ungüento, bálsamo o barra de loción simple."
    },
    "Assemble a Family First Aid Herb Card": {
      "title": "Armar una tarjeta familiar de hierbas de primeros auxilios",
      "desc": "Anota algunas hierbas y para qué se usan."
    },
    "Wash Dishes Without a Dishwasher": {
      "title": "Lavar los platos sin lavavajillas",
      "desc": "Lava los platos a mano y guárdalos limpios."
    },
    "Clean an Oily Dish Without Soap": {
      "title": "Limpiar un plato grasoso sin jabón",
      "desc": "Quita la grasa de un plato con un método de bajos químicos."
    },
    "Do Laundry by Hand": {
      "title": "Lavar la ropa a mano",
      "desc": "Lava la ropa sin lavadora."
    },
    "Make Rags from Old Clothes": {
      "title": "Hacer trapos con ropa vieja",
      "desc": "Convierte ropa gastada en trapos de limpieza útiles."
    },
    "Test Smoke and CO Alarms": {
      "title": "Probar las alarmas de humo y CO",
      "desc": "Revisa las alarmas de la casa y cambia las pilas si hace falta."
    },
    "Practice with a Fire Extinguisher": {
      "title": "Practicar con un extintor",
      "desc": "Aprende a usar un extintor con seguridad."
    },
    "Clean Gutters Safely": {
      "title": "Limpiar las canaletas con seguridad",
      "desc": "Quita los restos de las canaletas o bajantes."
    },
    "Make an Emergency Supplies Checklist": {
      "title": "Hacer una lista de suministros de emergencia",
      "desc": "Escribe una lista familiar de suministros de emergencia."
    },
    "Build a Whimsical Invention from Scrap": {
      "title": "Construir un invento caprichoso con desechos",
      "desc": "Haz algo extraño, útil o divertido con materiales sobrantes."
    },
    "Create a Secret Family Trail Marker": {
      "title": "Crear un marcador secreto de sendero familiar",
      "desc": "Diseña una señal o código oculto para un sendero o camino local."
    },
    "Make Music from Found Objects": {
      "title": "Hacer música con objetos encontrados",
      "desc": "Crea un instrumento o un productor de sonido simple con basura o retazos."
    },
    "Design a Zero-Budget Game or Challenge": {
      "title": "Diseñar un juego o reto con presupuesto cero",
      "desc": "Inventa un juego, acertijo o reto familiar sin ningún presupuesto."
    },
    "Five Animal Exercises": {
      "title": "Ejercicios de los cinco animales",
      "desc": "Practica los ejercicios de los cinco animales como rutina de movimiento corporal."
    },
    "Eight Brocade Pieces": {
      "title": "Las ocho piezas de brocado",
      "desc": "Haz las ocho piezas de brocado como una serie de ejercicios suaves."
    },
    "Twelve Zodiac Watches": {
      "title": "Las doce vigilias del zodiaco",
      "desc": "Practica la serie de movimientos de las doce vigilias del zodiaco."
    },
    "Deer and Crane Exercises": {
      "title": "Ejercicios del ciervo y la grulla",
      "desc": "Haz los ejercicios del ciervo y la grulla para el equilibrio y la coordinación."
    },
    "Cook for a Group": {
      "title": "Cocinar para un grupo",
      "desc": "Prepara comida para un grupo y limpia después."
    },
    "Host a Workshop": {
      "title": "Dar un taller",
      "desc": "Enseña una clase simple o un intercambio de habilidades."
    },
    "Build the Wasserwirbler": {
      "title": "Construir el Wasserwirbler",
      "desc": "Construye un embudo hiperbólico con salida roscada; vierte agua en él para crear un giro centrípeto. Realiza las pruebas ciegas de temperatura y sabor del dosier 001. Registra todos los números y fotos."
    },
    "Build the Eeman Circuit": {
      "title": "Construir el circuito Eeman",
      "desc": "Enrolla una bobina de cobre autoconectada (sin corriente). Realiza la prueba ciega de pulso/relajación contra una bobina falsa del dosier 002. Registra los números."
    },
    "Build the Radiant Energy Receiver": {
      "title": "Construir el receptor de energía radiante",
      "desc": "Monta una placa metálica aislada a 3-5 m de altura sobre un poste NO metálico, conéctala a través de un condensador de película a una puesta a tierra, y mide el voltaje a los 0/5/10/15 min en 5+ sesiones (mañana/mediodía/noche, despejado/nublado). Luego envuelve la placa en papel de aluminio conectado a tierra como control y repite. APRUEBA: el receptor lee ≥10× el control apantallado en ≥4/5 sesiones. Tormentas: desconecta y pon a tierra la antena siempre primero."
    }
  }
},
  "fr": {
  "name": "Français",
  "ui": {
    "Setup": "Configuration",
    "Village": "Village",
    "Studio": "Studio",
    "Quests": "Quêtes",
    "Schoolhouse": "École",
    "Library": "Bibliothèque",
    "Mentor's Circle": "Cercle du Mentor",
    "Circle": "Cercle",
    "Commons": "Plaza",
    "WELCOME": "BIENVENUE",
    "The Creative Village — A Roll Making Game (RMG) for families": "Le Village Créatif — Un Jeu de Formation des Rôles (RMG) pour familles",
    "A real-life skill-building journey — not a digital game you play on a screen. Build real skills, grow real attributes, earn real badges in the real world.": "Un parcours réel de développement de compétences — pas un jeu numérique sur écran. Développe de vraies compétences, éprouve de vrais progrès, gagne de vrais badges dans le monde réel.",
    "Data.js not found or failed to load. Using fallback data.": "data.js introuvable ou impossible à charger. Utilisation des données de secours.",
    "▼ Scroll down ▼": "▼ Faites défiler ▼",
    "School days already completed": "Jours d'école déjà effectués",
    "Total hours already logged": "Heures totales déjà enregistrées",
    "Current curriculum (optional)": "Programme actuel (facultatif)",
    "Player Name": "Nom du joueur",
    "Save & Enter Village": "Enregistrer et entrer au Village",
    "Reset Village": "Réinitialiser le Village",
    "Reset": "Réinitialiser",
    "8. Start Over / Reset": "8. Recommencer / Réinitialiser",
    "Wipe all progress, quests, attendance, and player data from this browser and start fresh. Cannot be undone.": "Efface tous les progrès, quêtes, présences et données de joueurs de ce navigateur et repartez à zéro. Impossible d'annuler.",
    "Your Family Guild": "Le Groupe de Votre Famille",
    "Click a character to open the Avatar Studio": "Cliquez sur un personnage pour ouvrir le Studio d'Avatar",
    "Save Village (Download File)": "Enregistrer le Village (télécharger le fichier)",
    "Load Saved Village": "Charger le Village enregistré",
    "Start Questing": "Commencer les Quêtes",
    "Avatar Studio": "Studio d'Avatar",
    "Class": "Classe",
    "Face": "Visage",
    "Hair": "Cheveux",
    "Outfit": "Tenue",
    "Gear": "Équipement",
    "Background": "Arrière-plan",
    "Wardrobe": "Garde-robe",
    "Attributes": "Attributs",
    "Save & Exit to Village": "Enregistrer et quitter vers le Village",
    "The Quest Board": "Le Tableau des Quêtes",
    "All Quests": "Toutes les quêtes",
    "My Biome Only": "Mon biome uniquement",
    "Badge Progression": "Progression des Badges",
    "Free Roam — all quests unlocked": "Mode Libre — toutes les quêtes débloquées",
    "Adventure Mode — complete 50% of a tier within one guild to unlock the next": "Mode Aventure — terminez 50% d'un niveau dans une guilde pour débloquer le suivant",
    "Story Mode — a guided adventure, new every time": "Mode Histoire — une aventure guidée, nouvelle à chaque fois",
    "Survival Mode — train the family for the long haul": "Mode Survie — entraînez la famille pour le long terme",
    "Official Permies PEP Quests": "Quêtes PEP Officielles de Permies",
    "Submit evidence to their forum for official certification.": "Envoyez vos preuves sur leur forum pour une certification officielle.",
    "Holistic RPG Add-on Guilds": "Guildes Bonus RPG Holistiques",
    "Custom to The Creative Village. Do not count toward official Permies PEP certification.": "Spécifiques au Village Créatif. Ne comptent pas pour la certification officielle PEP de Permies.",
    "Guild": "Guilde",
    "No description available.": "Aucune description disponible.",
    "complete": "terminées",
    "Locked": "Verrouillée",
    "Post to Permies": "Publier sur Permies",
    "Complete!": "Terminée !",
    "Finalize": "Finaliser",
    "Learn More": "En savoir plus",
    "Trackers": "Traqueurs",
    "Witnesses": "Témoins",
    "Otis Verification Protocol:": "Protocole de Vérification Otis :",
    "photo of materials/site": "photo des matériaux / du lieu",
    "photo of you working": "photo de vous en train de travailler",
    "photo of finished product WITH a sign showing your name and date": "photo du produit fini AVEC une pancarte indiquant votre nom et la date",
    "Select who participated. Multiple people can hold the same role!": "Sélectionnez qui a participé. Plusieurs personnes peuvent tenir le même rôle !",
    "Confirm & Complete Quest": "Confirmer et terminer la quête",
    "Guided Path for this Quest": "Parcours guidé pour cette quête",
    "Prep": "Préparation",
    "Core": "Cœur",
    "Stretch": "Défi",
    "Curriculum topics connected to this skill:": "Sujets de programme liés à cette compétence :",
    "Skill-wide resources:": "Ressources générales de la compétence :",
    "Feeling lucky? Spin for a surprise resource:": "Tentez votre chance ? Faites tourner pour une ressource surprise :",
    "Spin": "Tourner",
    "The Colorado Schoolhouse": "L'École du Colorado",
    "Attendance Tracker (CO Law: 172 Days)": "Suivi de Présence (Loi du CO : 172 jours)",
    "Days Completed:": "Jours effectués :",
    "Hours Logged:": "Heures enregistrées :",
    "hrs": "h",
    "Log 4-Hour School Day": "Enregistrer une journée d'école de 4 heures",
    "Log 1-Hour Day": "Enregistrer une journée d'1 heure",
    "Academic Transcript (CO Required Subjects)": "Relevé Académique (Matières obligatoires du CO)",
    "Hours are logged from completed quests (2 hrs each) plus any custom hours below.": "Les heures sont enregistrées à partir des quêtes terminées (2 h chacune) plus toutes heures personnalisées ci-dessous.",
    "Log Custom Academic Hours": "Enregistrer des heures académiques personnalisées",
    "Add Hours": "Ajouter des heures",
    "Bring Your History": "Apportez votre historique",
    "Already partway through your school year with another curriculum? Add your prior days and hours here so the tracker reflects where you actually are.": "Déjà à mi-chemin de votre année scolaire avec un autre programme ? Ajoutez vos jours et heures précédents ici pour que le suivi reflète votre situation réelle.",
    "Add History to Tracker": "Ajouter l'historique au suivi",
    "Hours": "heures",
    "The Creative Village Library": "La Bibliothèque du Village",
    "A curated knowledge graph of free, public domain, and government resources for holistic homeschooling.": "Un graphe de connaissances organisé de ressources gratuites, de domaine public et gouvernementales pour l'école à la maison holistique.",
    "Educational Philosophy & Nature Connection": "Philosophie Éducative & Connexion à la Nature",
    "Colorado Homeschooling": "École à la Maison au Colorado",
    "Permies & PEP Badges": "Badges Permies & PEP",
    "Curriculum by Subject": "Programme par Matière",
    "The Money Lab — Financial Literacy & Foreign Exchange": "Le Laboratoire de l'Argent — Culture Financière & Change de Devises",
    "Food Preservation": "Conservation des Aliments",
    "Woodworking": "Menuiserie",
    "Homesteading & Self-Sufficiency": "Homesteading et Autosuffisance",
    "Foraging & Herbalism": "Cueillette et Herboristerie",
    "The Creative Village Commons": "La Plaza du Village",
    "Family Achievements": "Réussites Familiales",
    "Bridge to Permies": "Pont vers Permies",
    "Post your evidence to the PEP Forum to get officially certified by Paul Wheaton's team.": "Publiez vos preuves sur le Forum PEP pour obtenir la certification officielle de l'équipe de Paul Wheaton.",
    "Official PEP quests (marked with the shield icon) count toward Permies certification. RPG Add-on quests (marked with the sparkle icon) are custom to The Creative Village and do not count toward official PEP badges.": "Les quêtes PEP officielles (avec l'icône bouclier) comptent pour la certification Permies. Les quêtes bonus RPG (avec l'icône étincelle) sont spécifiques au Village et ne comptent pas pour les badges PEP officiels.",
    "Open PEP Forum": "Ouvrir le Forum PEP",
    "How to Apply for a Badge": "Comment demander un badge",
    "Optional: The Offline Archive": "Facultatif : L'Archive Hors Ligne",
    "For families wanting a complete offline backup drive, download these open-source collections to a local hard drive:": "Pour les familles souhaitant une sauvegarde complète hors ligne, téléchargez ces collections open-source sur un disque local :",
    "Quests Done": "Quêtes terminées",
    "Wardrobe Items": "Objets de garde-robe",
    "Sand Badges": "Badges de Sable",
    "Straw Badges": "Badges de Paille",
    "Wood Badges": "Badges de Bois",
    "Iron Badges": "Badges de Fer",
    "Earned": "Gagné(e)",
    "Family Members": "Membres de la famille",
    "School Days": "Jours d'école",
    "The 64 cultural elements of deep nature connection — from Jon Young's 512 Project and the 8 Shields framework. These practices weave the invisible fabric of community that makes permaculture skills sustainable across generations.": "Les 64 éléments culturels de la connexion profonde à la nature — du Projet 512 de Jon Young et du cadre des 8 Boucliers. Ces pratiques tissent le tissu invisible de la communauté qui rend les compétences en permaculture durables à travers les générations.",
    "Gold Nugget Earned!": "Pépite d'Or gagnée !",
    "You worked the entire Commerce guild — budgets, currency exchange, paper trading, even a family forex night. That's real financial skill, earned in the real world.": "Vous avez travaillé toute la guilde du Commerce — budgets, change de devises, trading papier, même une soirée forex familiale. C'est une vraie compétence financière, gagnée dans le monde réel.",
    "The Gold Nugget is now part of your family's story. No real money was moved — only understanding.": "La Pépite d'Or fait désormais partie de l'histoire de votre famille. Aucun argent réel n'a été déplacé — seulement de la compréhension.",
    "Glow on ✨": "Brillez ✨",
    "Before": "Avant",
    "During": "Pendant",
    "After": "Après",
    "Tier": "Niveau",
    "Level": "Niveau",
    "Guild of": "Guilde de",
    "Gold Nugget": "Pépite d'Or",
    "The Creative Village — A Roll Making Game (RMG)": "Le Village Créatif — Un Jeu de Formation des Rôles (RMG)",
    "Print All 15 Sheets": "🖨️ Imprimer les 15 feuilles",
    "Print This Sheet": "🖨️ Imprimer cette feuille",
    "All 15 Sheets": "Les 15 feuilles",
    "Family Progress": "Progrès de la Famille",
    "quests completed": "quêtes terminées",
    "Quests:": "Quêtes :",
    "Wardrobe:": "Garde-robe :",
    "items": "objets",
    "earned": "gagné(e)",
    "Reward:": "Récompense :",
    "💾 Save Village (Download File)": "💾 Enregistrer le Village (télécharger le fichier)",
    "📂 Load Saved Village": "📂 Charger le Village enregistré",
    "🔄 Reset": "🔄 Réinitialiser",
    "Learning Lab": "Laboratoire d'Apprentissage",
    "The Learning Lab": "Le Laboratoire d'Apprentissage",
    "The Village Library": "La Bibliothèque du Village",
    "The Village Commons": "La Place du Village",
    "Paul Wheaton, Right Now": "Paul Wheaton, Maintenant",
    "Woodworking & Hand Tools": "Menuiserie et Outils à Main",
    "Your Learning Blueprint": "Votre Plan d'Apprentissage",
    "Starts on a screen. Grows into real life: real skills, real attributes, real badges in the real world.": "Commence sur un écran. Grandit dans la vraie vie : vraies compétences, vrais attributs, vrais badges dans le monde réel.",
    "Free, public-domain, and government resources for homeschooling — curated by hand.": "Ressources gratuites, de domaine public et gouvernementales pour l'instruction en famille — sélectionnées à la main.",
    "A living map of how people learn — curricula from around the world and across time, the science of learning, and a tool for building your family's own blend.": "Une carte vivante de la façon dont les gens apprennent — programmes du monde entier et de toutes les époques, la science de l'apprentissage et un outil pour créer le mélange propre à votre famille.",
    "The Gold Nugget is now part of your family's story. No real money moved; what grew was understanding.": "La Pépite d'Or fait désormais partie de l'histoire de votre famille. Aucun argent réel n'a été déplacé ; ce qui a grandi, c'est la compréhension.",
    "This is the educational blend your family chose. Build quests that honor it.": "C'est le mélange éducatif que votre famille a choisi. Créez des quêtes qui l'honorent."
  },
  "subjects": {
    "Science": "Sciences",
    "Math": "Mathématiques",
    "Art": "Arts",
    "PE": "Éducation Physique",
    "Health": "Santé",
    "Geography": "Géographie",
    "Writing": "Écriture",
    "History": "Histoire",
    "Economics": "Économie",
    "Constitution": "Constitution",
    "Reading": "Lecture"
  },
  "roles": {
    "Tracker": "Traqueur / Traqueuse",
    "Witness": "Témoin",
    "Hearth Tender": "Gardien du Foyer / Gardienne du Foyer",
    "Hearth": "Foyer",
    "Mentor": "Mentor / Mentore",
    "Mentors": "Mentors",
    "Trackers": "Traqueurs",
    "Witnesses": "Témoins"
  },
  "tiers": {
    "Sand": "Sable",
    "Straw": "Paille",
    "Wood": "Bois",
    "Iron": "Fer"
  },
  "guilds": {
    "Gardening": {
      "name": "Jardinage",
      "desc": "Cultivez des aliments, conservez des graines et construisez des systèmes de jardin résilients."
    },
    "Natural Building": {
      "name": "Construction Naturelle",
      "desc": "Utilisez l'argile, la paille, le bois et la pierre pour bâtir des abris sains."
    },
    "Woodland Care": {
      "name": "Soin des Bois",
      "desc": "Entretenez les forêts, le bois de feu, les clôtures, les champignons et les systèmes de bois vivant."
    },
    "Round Wood Woodworking": {
      "name": "Menuiserie de Bois Rond",
      "desc": "Construisez des objets utiles avec des rondins, bâtons et branches, avec peu de colle et de métal."
    },
    "Tool Care": {
      "name": "Soin des Outils",
      "desc": "Gardez les outils affûtés, propres, huilés et réparés pour qu'ils durent plus longtemps."
    },
    "Earthworks": {
      "name": "Terrassement",
      "desc": "Façonnez le terrain pour déplacer l'eau, réduire l'érosion et créer des chemins durables."
    },
    "Dimensional Lumber Woodworking": {
      "name": "Menuiserie de Bois d'Œuvre",
      "desc": "Utilisez du bois droit et des assemblages solides pour fabriquer des meubles et structures pratiques."
    },
    "Rocket": {
      "name": "Poêle Fusée",
      "desc": "Construisez des appareils à bois qui économisent le combustible et utilisent la chaleur avec une grande efficacité."
    },
    "Food Prep": {
      "name": "Préparation des Aliments",
      "desc": "Conservez, cuisinez et savourez les aliments de façon sûre et délicieuse."
    },
    "Animal Care": {
      "name": "Soin des Animaux",
      "desc": "Prenez soin des animaux domestiques et de ferme avec respect et abondance."
    },
    "Foraging": {
      "name": "Cueillette Sauvage",
      "desc": "Apprenez à trouver, identifier et récolter des plantes sauvages comestibles en toute sécurité."
    },
    "Community Living": {
      "name": "Vie en Communauté",
      "desc": "Pratiquez des compétences sociales, de service et d'événements qui aident les groupes à prospérer."
    },
    "Textiles": {
      "name": "Textiles",
      "desc": "Fabriquez, réparez et utilisez le tissu, le fil et la fibre naturelle pour des choses utiles et belles."
    },
    "Greywater and Willow Feeders": {
      "name": "Eaux Grises et Saules",
      "desc": "Gérez les eaux grises et cultivez des saules pour des jardins et paysages productifs."
    },
    "Metalworking": {
      "name": "Travail du Métal",
      "desc": "Frappez, limez, soudez et assemblez le métal pour créer outils et structures."
    },
    "Plumbing and Hot Water": {
      "name": "Plomberie et Eau Chaude",
      "desc": "Réparez les fuites, les drains et les systèmes d'eau et de chaleur de votre maison."
    },
    "Electricity": {
      "name": "Électricité",
      "desc": "Apprenez les bases du courant alternatif et continu, des batteries, des circuits et du solaire en toute sécurité."
    },
    "Commerce": {
      "name": "Commerce",
      "desc": "Gagnez de l'argent, échangez de la valeur, tenez des registres et apprenez comment les devises circulent — de la petite monnaie au coffre de la Pépite d'Or."
    },
    "Natural Medicine": {
      "name": "Médecine Naturelle",
      "desc": "Apprenez des façons sûres et pratiques d'identifier et d'utiliser les plantes médicinales."
    },
    "Nest": {
      "name": "Nid",
      "desc": "Gardez la maison propre, rangée et confortable pour la vie familiale de tous les jours."
    },
    "Homesteading": {
      "name": "Autosuffisance",
      "desc": "Gérez des compétences pratiques qui maintiennent une maison et une famille prêtes pour de vraies urgences."
    },
    "Oddball": {
      "name": "Curiosités",
      "desc": "Rassemblez des expériences de vie étranges, créatives et délicieusement inattendues."
    },
    "Vitality": {
      "name": "Vitalité",
      "desc": "Développez la vitalité physique par le mouvement, le rythme et la conscience du corps."
    },
    "Community": {
      "name": "Communauté",
      "desc": "Pratiquez des compétences sociales, de service et d'événements qui aident les groupes à prospérer."
    }
  },
  "quests": {
    "Build a Hugelkultur Bed": {
      "title": "Construire une butte hugelkultur",
      "desc": "Construisez un petit monticule hugelkultur avec paillis, graines et plantes fixatrices d'azote."
    },
    "Chop and Drop": {
      "title": "Couper et laisser au sol",
      "desc": "Coupez les plantes et laissez la matière sur place comme paillis sur une zone du jardin."
    },
    "Ruth Stout Composting": {
      "title": "Compostage façon Ruth Stout",
      "desc": "Installez des zones de jardin à paillis épais avec des couches organiques et des restes de cuisine."
    },
    "Seed Saving": {
      "title": "Récupérer des graines",
      "desc": "Récoltez, séchez et stockez les graines de quatre espèces végétales différentes."
    },
    "Build a 12 Foot Hugelkultur": {
      "title": "Construire un hugelkultur de 12 pieds",
      "desc": "Étendez une butte hugelkultur jusqu'à environ 12 pieds avec rondins, paillis et terre."
    },
    "Encourage Volunteer Plants": {
      "title": "Encourager les plantes spontanées",
      "desc": "Identifiez et protégez cinq plantes semées d'elles-mêmes au jardin."
    },
    "Direct Seed Perennials": {
      "title": "Semer des vivaces directement",
      "desc": "Semez des cultures vivaces en pleine terre et suivez ce qui lève."
    },
    "Make a 100 Sq Ft Polyculture Garden": {
      "title": "Créer un jardin polyculture de 100 pieds carrés",
      "desc": "Concevez et plantez un jardin d'espèces mélangées avec au moins 12 espèces."
    },
    "Build a 7 x 24 Hugelkultur": {
      "title": "Construire un hugelkultur de 7 x 24",
      "desc": "Créez une butte hugelkultur plus grande avec rondins, paillis et terre."
    },
    "Grow and Harvest 1M Calories": {
      "title": "Cultiver et récolter 1M de calories",
      "desc": "Planifiez, plantez et récoltez un système de jardin qui produit un million de calories."
    },
    "Build a Quarter Acre Food Forest": {
      "title": "Créer une forêt nourricière d'un quart d'acre",
      "desc": "Aménagez et établissez une forêt nourricière diversifiée à plusieurs strates."
    },
    "Direct Seed 50 Each of 10 Perennial Species": {
      "title": "Semer 50 graines de chacune de 10 espèces vivaces",
      "desc": "Plantez de grands semis de dix espèces vivaces et suivez la germination."
    },
    "Grow and Harvest 4M Calories": {
      "title": "Cultiver et récolter 4M de calories",
      "desc": "Passez à l'échelle un système de production alimentaire pour des millions de calories."
    },
    "Build a 7 x 150 Hugelkultur": {
      "title": "Construire un hugelkultur de 7 x 150",
      "desc": "Créez un vaste système hugelkultur avec plusieurs buttes et un paillage épais."
    },
    "Harvest Fruit from 12 Seed-Grown Trees": {
      "title": "Récolter des fruits de 12 arbres issus de semis",
      "desc": "Élevez et récoltez les fruits d'une douzaine d'arbres poussés depuis la graine."
    },
    "Build a 1 Acre Food Forest": {
      "title": "Créer une forêt nourricière d'un acre",
      "desc": "Établissez une forêt nourricière d'un acre complet avec des plantations étagées."
    },
    "Landrace Seed Saving": {
      "title": "Sauvegarder des variétés locales",
      "desc": "Sauvegardez les graines de 12 espèces sur 3 générations en gardant les traits vigoureux."
    },
    "Make 12 Adobe Bricks": {
      "title": "Faire 12 briques d'adobe",
      "desc": "Mélangez, moulez et séchez un petit lot de briques d'adobe."
    },
    "Make Clay Paint": {
      "title": "Faire de la peinture d'argile",
      "desc": "Mélangez et appliquez une finition simple de peinture d'argile."
    },
    "Level a Skiddable Structure with Rocks": {
      "title": "Niveler une structure déplaçable avec des pierres",
      "desc": "Utilisez des pierres pour niveler une structure qui peut bouger sur des patins."
    },
    "Make a 25 Sq Ft Shake Roof": {
      "title": "Faire un toit de bardeaux de 25 pieds carrés",
      "desc": "Assemblez une petite section de toit en bardeaux."
    },
    "Make Whitewash": {
      "title": "Faire un badigeon (chaux)",
      "desc": "Mélangez et appliquez une finition au badigeon de chaux."
    },
    "Assess Clay Mixes": {
      "title": "Évaluer des mélanges d'argile",
      "desc": "Testez plusieurs mélanges d'argile, sable et paille et comparez les résultats."
    },
    "Build a Tiny Shed on Skids": {
      "title": "Construire un petit abri sur patins",
      "desc": "Élevez et finissez un petit abri qui peut être déplacé sur des patins."
    },
    "Make a Cob Sink": {
      "title": "Faire un évier en cob",
      "desc": "Façonnez et finissez un bac à évier en cob pour la maison ou la cuisine extérieure."
    },
    "Make a Tree Stand": {
      "title": "Faire un support d'arbre",
      "desc": "Construisez un petit support en matériaux naturels pour un arbre ou un panneau."
    },
    "Operating Window from Scratch": {
      "title": "Une fenêtre fonctionnelle de A à Z",
      "desc": "Construisez un cadre et un battant de fenêtre fonctionnels, entièrement à la main."
    },
    "Straw Bale Wall of a Wofati": {
      "title": "Mur en bottes de paille d'un wofati",
      "desc": "Créez une section de mur en bottes de paille pour une structure de type wofati."
    },
    "Wattle and Daub Wall": {
      "title": "Mur en clayonnage et torchis",
      "desc": "Tissez un panneau de clayonnage et enduisez-le de plâtre d'argile."
    },
    "Cob Bench with Round Pole Roof": {
      "title": "Banc en cob avec toit de perches rondes",
      "desc": "Construisez un banc et son abri en matériaux naturels."
    },
    "Build a Wofati and Live in It for a Winter": {
      "title": "Construire un wofati et y vivre un hiver",
      "desc": "Créez une maison wofati et vivez-y tout au long de l'hiver."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Bow Saw": {
      "title": "Abattre un arbre mort de 15-20 cm à l'égoine",
      "desc": "Abattez en sécurité un petit arbre mort sur pied à l'aide d'une égoine."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Chainsaw": {
      "title": "Abattre un arbre mort de 15-20 cm à la tronçonneuse",
      "desc": "Abattez en sécurité un petit arbre mort sur pied à la tronçonneuse, sous supervision."
    },
    "Drop a 6-8 Inch Live Tree with a Bow Saw": {
      "title": "Abattre un arbre vivant de 15-20 cm à l'égoine",
      "desc": "Abattez en sécurité un petit arbre vivant à l'aide d'une égoine."
    },
    "Drop a 6-8 Inch Live Tree with a Chainsaw": {
      "title": "Abattre un arbre vivant de 15-20 cm à la tronçonneuse",
      "desc": "Abattez en sécurité un petit arbre vivant à la tronçonneuse, sous supervision."
    },
    "Limb 4 Trees": {
      "title": "Ébrancher 4 arbres",
      "desc": "Retirez les branches de quatre arbres et empilez proprement les brindilles."
    },
    "Peel 2 Live Trees and Put Them Up to Dry": {
      "title": "Écorcer 2 arbres vivants et les mettre à sécher",
      "desc": "Écorcez deux arbres vivants et stockez-les au sec, surélevés, pour qu'ils sèchent."
    },
    "Split and Stack Dead Standing Wood as Firewood": {
      "title": "Fendre et empiler du bois mort en bois de chauffage",
      "desc": "Transformez le bois mort sur pied en bois de chauffage empilé."
    },
    "Prep 10 Junkpoles": {
      "title": "Préparer 10 perches (junkpoles)",
      "desc": "Préparez dix perches droites pour la construction ou la clôture."
    },
    "Cleave 6 Shakes with a Froe": {
      "title": "Fendre 6 bardeaux au fendeur (froe)",
      "desc": "Fendez six bardeaux de toit dans un bois au fil droit."
    },
    "Build 12 Feet of Junkpole Fence or Repair 24 Feet": {
      "title": "Construire 12 pieds de clôture en perches ou réparer 24 pieds",
      "desc": "Construisez ou réparez une section de clôture en perches."
    },
    "Drop at Least 12 Trees 8 Inches or Larger": {
      "title": "Abattre au moins 12 arbres de 20 cm ou plus",
      "desc": "Abattez en sécurité une douzaine d'arbres de taille moyenne."
    },
    "One Cord of Firewood Cut and Stacked Under a Roof": {
      "title": "Un corde de bois coupé et empilé sous un toit",
      "desc": "Coupez et empilez une corde de bois de chauffage à l'abri de la pluie."
    },
    "Make Lumber: a Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Scier du bois : une douzaine de 2x4, 1x4 et 3/8x4",
      "desc": "Sciez ou rabotez un premier lot de bois de construction."
    },
    "Twig Construction: 5 Foot Tomato Cage and 8 Foot Pole Bean Trellis": {
      "title": "Construire en branchages : cage à tomates de 5 pieds et treillis de 8 pieds",
      "desc": "Construisez des supports utiles pour plantes avec des branchages et des perches."
    },
    "36 Feet of Junkpole Fence plus Gate with Latch": {
      "title": "36 pieds de clôture en perches avec portail et loquet",
      "desc": "Construisez une clôture plus longue en perches avec un portail fonctionnel."
    },
    "Plant Tree Seeds for 100 Feet of Living Fence": {
      "title": "Semer des graines d'arbres pour 100 pieds de haie vivante",
      "desc": "Semez des graines d'arbres pour une future haie vivante et suivez les pousses."
    },
    "Put Up Three Cords of Firewood": {
      "title": "Préparer trois cordes de bois de chauffage",
      "desc": "Coupez, fendez et empilez trois cordes de bois de chauffage."
    },
    "More Lumber: 8 Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Plus de bois : 8 douzaines de 2x4, 1x4 et 3/8x4",
      "desc": "Produisez un grand lot de bois de construction."
    },
    "Build Six Rock Jacks from Split Logs": {
      "title": "Construire six vérins à rocher en rondins fendus",
      "desc": "Fabriquez des vérins à rocher robustes pour le levage ou le soutien."
    },
    "120 Feet of Junkpole Fence with Good Gate and Latch": {
      "title": "120 pieds de clôture en perches avec bon portail et loquet",
      "desc": "Construisez une longue clôture en perches avec un portail solide."
    },
    "Plant 300 Black Locust Seeds": {
      "title": "Planter 300 graines de robinier",
      "desc": "Semez des graines de robinier à grande échelle et suivez la germination."
    },
    "Plant 300 Cleavers": {
      "title": "Planter 300 gaillets",
      "desc": "Démarrez une parcelle de gaillet et observez sa propagation."
    },
    "Plant 300 Nettles": {
      "title": "Planter 300 orties",
      "desc": "Démarrez une parcelle d'orties et gérez-la en sécurité."
    },
    "Plant 60 Willows": {
      "title": "Planter 60 saules",
      "desc": "Cultivez des saules pour le futur fourrage, les clôtures et la vannerie."
    },
    "Plant 40 Sweet Sap Silver Maples": {
      "title": "Planter 40 érables argentés à sève sucrée",
      "desc": "Établissez des arbres qui peuvent fournir sève et ombre."
    },
    "Plant 10 Cedar Trees": {
      "title": "Planter 10 cèdres",
      "desc": "Établissez une ligne de cèdres pour l'abri et l'habitat futurs."
    },
    "Twig Construction: Six 5 Foot Tomato Cages and Three 8 Foot Trellises": {
      "title": "Construire en branchages : six cages de 5 pieds et trois treillis de 8 pieds",
      "desc": "Construisez un jeu complet de supports de jardin en perches et branchages."
    },
    "Plant Tree Seeds for 800 Feet of Living Fence": {
      "title": "Semer des graines d'arbres pour 800 pieds de haie vivante",
      "desc": "Semez des graines pour une longue haie vivante à venir."
    },
    "Lay 50 Feet of Living Hedge": {
      "title": "Établir 50 pieds de haie vivante",
      "desc": "Construisez une haie vivante et protégez-la jusqu'à ce qu'elle s'établisse."
    },
    "Berm Shed 8x8x8 with 5 Foot Eave": {
      "title": "Hangar en talus 8x8x8 avec débord de 5 pieds",
      "desc": "Construisez un hangar en talus aux dimensions indiquées."
    },
    "Gin Pole: Lift a 10 Foot Log 15 Feet Off the Ground": {
      "title": "Mât de levage : hisser un rondin de 10 pieds à 15 pieds",
      "desc": "Utilisez un mât de levage (gin pole) pour élever un rondin en sécurité."
    },
    "Outdoor Mushrooms: 1 lb Each Oyster and Shiitake": {
      "title": "Champignons extérieurs : 1 livre de pleurotes et de shiitakés",
      "desc": "Cultivez des pleurotes et des shiitakés en extérieur."
    },
    "Put Up Six Cords of Firewood": {
      "title": "Préparer six cordes de bois de chauffage",
      "desc": "Produisez et empilez six cordes de bois de chauffage."
    },
    "200 2x4s, 1x4s, and 3/8x4s Lumber": {
      "title": "200 pièces de bois 2x4, 1x4 et 3/8x4",
      "desc": "Sciez un très grand lot de bois de construction."
    },
    "Build 24 Rock Jacks from Split Logs": {
      "title": "Construire 24 vérins à rocher en rondins fendus",
      "desc": "Fabriquez une série robuste de vérins à rocher."
    },
    "Plant Seeds to Restore Creek Bed": {
      "title": "Semer pour restaurer un lit de ruisseau",
      "desc": "Semez et stabilisez une grande zone de restauration de lit de ruisseau."
    },
    "Berm Shed: 3 Cells, 12x12x12 Each, 5 Foot Eaves": {
      "title": "Hangar en talus : 3 cellules de 12x12x12, débords de 5 pieds",
      "desc": "Construisez un hangar en talus multi-cellules à grande échelle."
    },
    "Build Two Skiddable Structures": {
      "title": "Construire deux structures déplaçables",
      "desc": "Créez deux structures qui peuvent bouger sur des patins."
    },
    "Gin Pole: Lift a 20 Foot Log 20 Feet Off the Ground": {
      "title": "Mât de levage : hisser un rondin de 20 pieds à 20 pieds",
      "desc": "Levez un gros rondin avec un système de mât de levage."
    },
    "Produce 10 lbs Each Oyster and Shiitake Mushrooms": {
      "title": "Produire 10 livres chacun de pleurotes et shiitakés",
      "desc": "Cultivez une grande récolte de champignons extérieurs."
    },
    "Carve a Spoon": {
      "title": "Sculpter une cuillère",
      "desc": "Façonnez une cuillère en bois utilisable à partir d'une branche ou de chutes."
    },
    "Make a Wooden Mallet": {
      "title": "Faire un maillet en bois",
      "desc": "Transformez un bâton rond ou une branche en maillet simple."
    },
    "Build a Simple Roundwood Bench": {
      "title": "Construire un banc simple en bois rond",
      "desc": "Fabriquez un petit banc robuste en bois rond et ligatures."
    },
    "Make Coat Hooks from Sticks": {
      "title": "Faire des patères à partir de bâtons",
      "desc": "Créez une série de patères avec des bâtons ou petites branches."
    },
    "Sharpen a Knife": {
      "title": "Aiguiser un couteau",
      "desc": "Aiguisez un couteau de cuisine ou de poche en sécurité."
    },
    "Sharpen a Shovel or Hoe": {
      "title": "Aiguiser une pelle ou un râteau",
      "desc": "Redonnez son tranchant à un outil de terrassement."
    },
    "Oil a Tool": {
      "title": "Huiler un outil",
      "desc": "Nettoyez et huilez un outil à main pour prévenir la rouille."
    },
    "Repair a Tool": {
      "title": "Réparer un outil",
      "desc": "Réparez un manche, un assemblage ou une fixation d'outil cassé."
    },
    "Build a Berm": {
      "title": "Construire une butte de terre",
      "desc": "Amoncelez et façonnez la terre en une petite butte."
    },
    "Dig a Swale": {
      "title": "Creuser une saignée (swale)",
      "desc": "Creusez une saignée peu profonde sur la courbe de niveau pour ralentir l'eau."
    },
    "Build a Trail": {
      "title": "Tracer un sentier",
      "desc": "Créez un sentier simple qui résiste au passage."
    },
    "Build a Birdhouse": {
      "title": "Construire un nichoir",
      "desc": "Fabriquez un petit nichoir avec des coupes propres et un assemblage solide."
    },
    "Make a Shelf": {
      "title": "Faire une étagère",
      "desc": "Construisez et fixez une étagère simple."
    },
    "Build a Toolbox": {
      "title": "Construire une caisse à outils",
      "desc": "Construisez une caisse à outils utile en bois de construction."
    },
    "Make a Stool": {
      "title": "Faire un tabouret",
      "desc": "Construisez un petit tabouret avec un assemblage solide."
    },
    "Cook a Meal on a Rocket Stove": {
      "title": "Cuisiner un repas sur un poêle rocket",
      "desc": "Préparez un repas sur un poêle rocket simple ou en camp."
    },
    "Build a Small Rocket Stove": {
      "title": "Construire un petit poêle rocket",
      "desc": "Assemblez un poêle rocket de base pour cuisiner."
    },
    "Make a Rocket Mass Heater Model": {
      "title": "Faire une maquette de poêle de masse rocket",
      "desc": "Construisez une petite maquette montrant le fonctionnement d'un poêle de masse rocket."
    },
    "Heat Water with a Rocket Heater": {
      "title": "Chauffer de l'eau avec un poêle rocket",
      "desc": "Utilisez un système rocket pour chauffer de l'eau pour une tâche."
    },
    "Cook Grain 4 Ways": {
      "title": "Cuisiner une céréale de 4 façons",
      "desc": "Préparez une même céréale de quatre manières différentes."
    },
    "Preserve One Item": {
      "title": "Conserver un aliment",
      "desc": "Conservez un aliment par congélation, séchage, fermentation ou mise en conserve."
    },
    "Bread from Scratch": {
      "title": "Du pain fait à la main",
      "desc": "Faites du pain avec farine, eau, levure ou levain, et sel."
    },
    "Hay Box Cooking": {
      "title": "Cuisson en boîte isolée (hay box)",
      "desc": "Cuisinez un repas dans une boîte isolée ou cuiseur à foin."
    },
    "Build a Bird Feeder or Waterer": {
      "title": "Construire une mangeoire ou abreuvoir à oiseaux",
      "desc": "Fabriquez une mangeoire ou une source d'eau pour oiseaux ou pollinisateurs."
    },
    "Create a Pollinator Habitat Patch": {
      "title": "Créer une parcelle d'habitat pour pollinisateurs",
      "desc": "Plantez et protégez une parcelle qui soutient abeilles et papillons."
    },
    "Clean an Animal Shelter or Coop": {
      "title": "Nettoyer un abri ou poulailler",
      "desc": "Nettoyez et remettez en état un abri pour animaux ou un poulailler."
    },
    "Build a Wildlife Shelter": {
      "title": "Construire un abri pour la faune",
      "desc": "Fabriquez un petit abri ou tas de branches pour la faune locale."
    },
    "Identify 5 Edible Wild Plants": {
      "title": "Identifier 5 plantes sauvages comestibles",
      "desc": "Apprenez à reconnaître cinq plantes sauvages comestibles de votre région."
    },
    "Harvest a Wild Food": {
      "title": "Récolter un aliment sauvage",
      "desc": "Cueillez baies, fruits, noix ou feuilles avec permission et précaution."
    },
    "Make a Wild Tea": {
      "title": "Faire une tisane sauvage",
      "desc": "Faites sécher ou infuser une plante sauvage sûre en tisane."
    },
    "Preserve a Wild Harvest": {
      "title": "Conserver une cueillette sauvage",
      "desc": "Séchez, congelez ou conservez autrement quelque chose de cueilli."
    },
    "Cook for a Neighbor or Group": {
      "title": "Cuisiner pour un voisin ou un groupe",
      "desc": "Préparez à manger pour quelqu'un en dehors de votre foyer."
    },
    "Public Art": {
      "title": "Art public",
      "desc": "Créez une œuvre d'art destinée à égayer un espace partagé."
    },
    "Host a Workshop or Skill Share": {
      "title": "Animer un atelier ou un partage de compétences",
      "desc": "Enseignez ou animez une classe simple pour d'autres."
    },
    "Organize a Swap": {
      "title": "Organiser un troc",
      "desc": "Coordonnez un troc de biens, de graines ou de compétences."
    },
    "Mend a Hole": {
      "title": "Rapiécer un trou",
      "desc": "Réparez un trou dans un tissu avec un point simple ou une pièce."
    },
    "Replace a Button": {
      "title": "Remplacer un bouton",
      "desc": "Recousez un bouton ou remplacez-en un manquant."
    },
    "Hem Clothing": {
      "title": "Ourler un vêtement",
      "desc": "Raccourcissez ou finissez un ourlet sur un vêtement."
    },
    "Sew an Item": {
      "title": "Coudre un objet",
      "desc": "Faites un petit objet cousu comme une pochette, une serviette ou un sac."
    },
    "Use Greywater-Safe Soap": {
      "title": "Utiliser un savon compatible eaux grises",
      "desc": "Choisissez un savon sans danger pour l'usage en eaux grises."
    },
    "Reuse Rinse Water on a Plant Bed": {
      "title": "Réutiliser l'eau de rinçage sur une planche de culture",
      "desc": "Portez l'eau de rinçage jusqu'à un bassin paillé ou une planche de culture."
    },
    "Mulch a Willow Basin": {
      "title": "Pailler un bassin de saules",
      "desc": "Ajoutez du paillis autour d'une zone nourricière de saules ou peupliers."
    },
    "Plant a Willow or Poplar Cutting": {
      "title": "Planter une bouture de saule ou peuplier",
      "desc": "Démarrez une bouture de saule ou de peuplier pour l'usage futur en eaux grises."
    },
    "Hammer and Bend a Metal Hook": {
      "title": "Marteler et plier un crochet en métal",
      "desc": "Façonnez un crochet simple à partir de fer plat ou rond."
    },
    "File and Smooth a Metal Edge": {
      "title": "Limer et lisser un bord en métal",
      "desc": "Utilisez une lime pour finir et lisser une pièce métallique."
    },
    "Cut Simple Stock with a Hacksaw": {
      "title": "Couper du métal à la scie égoïne (métaux)",
      "desc": "Coupez du métal en sécurité avec des outils à main."
    },
    "Make a Small Bracket or Hanger": {
      "title": "Faire un petit support ou crochet",
      "desc": "Créez un support, crochet ou porte-objet utile en métal."
    },
    "Replace a Faucet Washer": {
      "title": "Remplacer le joint d'un robinet",
      "desc": "Réparez un gouttage en remplaçant le joint d'un robinet."
    },
    "Unclog a Drain": {
      "title": "Déboucher un évier",
      "desc": "Débouchez un évier ou une douche avec un outil ou une méthode simple."
    },
    "Fix a Dripping Hose Connection": {
      "title": "Réparer un raccord de tuyau qui fuit",
      "desc": "Stoppez une fuite sur un tuyau ou un raccord d'eau extérieur."
    },
    "Insulate a Hot Water Pipe": {
      "title": "Isoler un tuyau d'eau chaude",
      "desc": "Enveloppez un tuyau ou une ligne d'eau chaude pour garder la chaleur."
    },
    "Build a Battery and Bulb Circuit": {
      "title": "Construire un circuit pile et ampoule",
      "desc": "Réalisez un circuit simple et fonctionnel avec une pile et une ampoule."
    },
    "Replace a Lightbulb Safely": {
      "title": "Remplacer une ampoule en sécurité",
      "desc": "Changez une ampoule et vérifiez que le luminaire fonctionne."
    },
    "Organize and Label Cords": {
      "title": "Ranger et étiqueter les câbles",
      "desc": "Triez les câbles et étiquetez-les pour un usage plus sûr."
    },
    "Test a Battery and Read Voltage": {
      "title": "Tester une pile et lire la tension",
      "desc": "Mesurez ou comparez la tension d'une pile et notez le résultat."
    },
    "Sell or Trade Something Homemade": {
      "title": "Vendre ou troquer une création",
      "desc": "Fabriquez quelque chose et vendez-le ou troquez-le."
    },
    "Track a Simple Budget": {
      "title": "Tenir un budget simple",
      "desc": "Notez les entrées et les dépenses pendant une semaine."
    },
    "Offer a Service and Track the Earnings": {
      "title": "Rendre un service et en noter les gains",
      "desc": "Faites un travail payé ou troqué et notez ce que vous avez gagné."
    },
    "Create a Mini Online Listing": {
      "title": "Créer une petite annonce en ligne",
      "desc": "Rédigez une annonce simple pour quelque chose que vous avez fait ou offrez."
    },
    "Meet a Foreign Currency": {
      "title": "Découvrir une devise étrangère",
      "desc": "Découvrez une devise, son symbole et les pays qui l'utilisent."
    },
    "Run a Family Currency Exchange": {
      "title": "Faire un bureau de change familial",
      "desc": "Échangez un peu d'argent fictif entre deux devises et calculez le total ensemble."
    },
    "Start a Paper-Trading Journal": {
      "title": "Tenir un journal de trading papier",
      "desc": "Notez un échange fictif : ce que vous attendiez contre ce qui s'est passé."
    },
    "Compare Buying Power": {
      "title": "Comparer le pouvoir d'achat",
      "desc": "Demandez le prix d'un article courant en dollars, euros et francs."
    },
    "Save Toward a Tiny Goal": {
      "title": "Épargner vers un petit objectif",
      "desc": "Mettez un peu d'argent de côté vers un petit objectif pendant un mois et suivez-le."
    },
    "Track Exchange Rates for a Week": {
      "title": "Suivre les taux de change pendant une semaine",
      "desc": "Observez une paire de devises pendant une semaine et notez hausse, baisse ou stagnation."
    },
    "Run a Simulated Trade": {
      "title": "Passer un échange simulé",
      "desc": "Utilisez un simulateur gratuit : placez un échange papier avec stop-loss et notez le résultat."
    },
    "Plan a Get-Off-the-Dollar Experiment": {
      "title": "Planifier une expérience hors-dollar",
      "desc": "Concevez une petite façon pour votre famille d'échanger de la valeur au-delà du dollar."
    },
    "Host the Family Forex Game Night": {
      "title": "Animer la soirée forex familiale",
      "desc": "Réunissez la famille sur un simulateur gratuit et jouez une soirée de missions."
    },
    "Present a Family Financial Freedom Plan": {
      "title": "Présenter le plan de liberté financière familiale",
      "desc": "Exposez le plan familial d'épargne, d'échange et de croissance de la valeur, à votre façon."
    },
    "Run a Simulated Season": {
      "title": "Jouer une saison simulée",
      "desc": "Suivez un portefeuille fictif multi-devises pendant une saison complète et notez chaque choix."
    },
    "Keep the Golden Rule Alive": {
      "title": "Garder vivante la règle d'or",
      "desc": "Apprenez à un ami ou un frère/sœur : protéger l'argent d'abord, apprendre ensuite, trader en dernier."
    },
    "Identify 5 Medicinal Herbs": {
      "title": "Identifier 5 plantes médicinales",
      "desc": "Apprenez à reconnaître cinq plantes médicinales ou plantes curatives courantes."
    },
    "Make a Simple Herbal Tea": {
      "title": "Faire une tisane simple",
      "desc": "Faites sécher ou infuser une plante sûre en tisane."
    },
    "Prepare a Salve or Balm": {
      "title": "Préparer une pommade ou un baume",
      "desc": "Faites une pommade, un baume ou un bâton de soin simple."
    },
    "Assemble a Family First Aid Herb Card": {
      "title": "Composer la fiche herbale familiale de premiers secours",
      "desc": "Notez quelques plantes et leurs usages sur une fiche familiale."
    },
    "Wash Dishes Without a Dishwasher": {
      "title": "Laver la vaisselle sans lave-vaisselle",
      "desc": "Lavez la vaisselle à la main et rangez-la propre."
    },
    "Clean an Oily Dish Without Soap": {
      "title": "Nettoyer une assiette grasse sans savon",
      "desc": "Retirez le gras d'une assiette avec une méthode peu chimique."
    },
    "Do Laundry by Hand": {
      "title": "Laver le linge à la main",
      "desc": "Lavez les vêtements sans machine."
    },
    "Make Rags from Old Clothes": {
      "title": "Faire des chiffons avec de vieux vêtements",
      "desc": "Transformez des vêtements usés en chiffons utiles."
    },
    "Test Smoke and CO Alarms": {
      "title": "Tester les détecteurs de fumée et de CO",
      "desc": "Vérifiez les alarmes de la maison et remplacez les piles si besoin."
    },
    "Practice with a Fire Extinguisher": {
      "title": "S'exercer avec un extincteur",
      "desc": "Apprenez à utiliser un extincteur en sécurité."
    },
    "Clean Gutters Safely": {
      "title": "Nettoyer les gouttières en sécurité",
      "desc": "Retirez les débris des gouttières ou descentes d'eau."
    },
    "Make an Emergency Supplies Checklist": {
      "title": "Faire une liste de provisions d'urgence",
      "desc": "Rédigez une liste familiale de provisions d'urgence."
    },
    "Build a Whimsical Invention from Scrap": {
      "title": "Construire une invention farfelue avec de la récup'",
      "desc": "Fabriquez quelque chose d'étrange, d'utile ou de drôle avec des matériaux de récupération."
    },
    "Create a Secret Family Trail Marker": {
      "title": "Créer un marqueur de sentier secret familial",
      "desc": "Concevez un marqueur caché ou un code pour un sentier local."
    },
    "Make Music from Found Objects": {
      "title": "Faire de la musique avec des objets trouvés",
      "desc": "Créez un instrument simple ou un bruiteur avec des rebuts."
    },
    "Design a Zero-Budget Game or Challenge": {
      "title": "Concevoir un jeu ou défi sans budget",
      "desc": "Inventez un jeu, une énigme ou un défi familial sans budget."
    },
    "Five Animal Exercises": {
      "title": "Les Cinq Animaux",
      "desc": "Pratiquez les exercices des Cinq Animaux comme routine corporelle."
    },
    "Eight Brocade Pieces": {
      "title": "Les Huit Pièces de Brocart",
      "desc": "Faites les Huit Pièces de Brocart comme série d'exercices en douceur."
    },
    "Twelve Zodiac Watches": {
      "title": "Les Douze postures du Zodiaque",
      "desc": "Pratiquez la série des Douze postures du Zodiaque."
    },
    "Deer and Crane Exercises": {
      "title": "Exercices du Cerf et de la Grue",
      "desc": "Faites les exercices du Cerf et de la Grue pour l'équilibre et la coordination."
    },
    "Cook for a Group": {
      "title": "Cuisiner pour un groupe",
      "desc": "Préparez à manger pour un groupe et nettoyez ensuite."
    },
    "Host a Workshop": {
      "title": "Animer un atelier",
      "desc": "Enseignez une classe simple ou un partage de compétences."
    },
    "Build the Wasserwirbler": {
      "title": "Construire le Wasserwirbler",
      "desc": "Construisez un entonnoir hyperbolique à sortie filetée ; versez l'eau en tourbillon centripète. Réalisez les tests en aveugle de température et de goût du dossier 001. Notez tous les chiffres et photos."
    },
    "Build the Eeman Circuit": {
      "title": "Construire le circuit Eeman",
      "desc": "Bobinez une bobine de cuivre auto-connectée (sans alimentation). Réalisez le test en aveugle pulsation/détente contre une bobine témoin du dossier 002. Notez les chiffres."
    },
    "Build the Radiant Energy Receiver": {
      "title": "Construire le récepteur d'énergie radiante",
      "desc": "Montez une plaque métallique isolée à 3-5 m sur un mât NON métallique, reliez-la via un condensateur à une prise de terre, et mesurez la tension à 0/5/10/15 min sur 5+ séances (matin/midi/nuit, ciel clair/couvert). Puis enveloppez la plaque dans un blindage relié à la terre comme témoin et recommencez. RÉUSSI : le récepteur lit ≥10× le témoin blindé dans ≥4/5 séances. Orage : débranchez et mettez toujours l'antenne à la terre d'abord."
    }
  },
  },
  "de": {
    "name": "Deutsch",
    "ui": {
      "Setup": "Einrichtung",
      "Village": "Dorf",
      "Studio": "Atelier",
      "Quests": "Aufgaben",
      "Schoolhouse": "Schulhaus",
      "Library": "Bibliothek",
      "Mentor's Circle": "Mentorenkreis",
      "Circle": "Kreis",
      "Commons": "Platz",
      "WELCOME": "WILLKOMMEN",
      "The Creative Village — A Roll Making Game (RMG) for families": "Das Kreative Dorf — Ein Rollenbildendes Spiel (RMG) für Familien",
      "A real-life skill-building journey — not a digital game you play on a screen. Build real skills, grow real attributes, earn real badges in the real world.": "Eine reale Reise zum Aufbau von Fähigkeiten — kein digitales Spiel auf einem Bildschirm. Entwickle echte Fähigkeiten, entwickle echte Attribute, verdiene echte Abzeichen in der echten Welt.",
      "Data.js not found or failed to load. Using fallback data.": "data.js nicht gefunden oder Laden fehlgeschlagen. Verwende Ersatzdaten.",
      "▼ Scroll down ▼": "▼ Nach unten scrollen ▼",
      "School days already completed": "Bereits absolvierte Schultage",
      "Total hours already logged": "Bereits erfasste Gesamtstunden",
      "Current curriculum (optional)": "Aktueller Lehrplan (optional)",
      "Player Name": "Spielername",
      "Save & Enter Village": "Speichern & Dorf betreten",
      "Reset Village": "Dorf zurücksetzen",
      "Reset": "Zurücksetzen",
      "8. Start Over / Reset": "8. Neu beginnen / Zurücksetzen",
      "Wipe all progress, quests, attendance, and player data from this browser and start fresh. Cannot be undone.": "Lösche allen Fortschritt, alle Aufgaben, Anwesenheit und Spielerdaten aus diesem Browser und beginne von vorne. Kann nicht rückgängig gemacht werden.",
      "Your Family Guild": "Dein Familien-Gilde",
      "Click a character to open the Avatar Studio": "Klicke auf einen Charakter, um das Avatar-Atelier zu öffnen",
      "Save Village (Download File)": "Dorf speichern (Datei herunterladen)",
      "Load Saved Village": "Gespeichertes Dorf laden",
      "Start Questing": "Aufgaben beginnen",
      "Avatar Studio": "Avatar-Atelier",
      "Class": "Klasse",
      "Face": "Gesicht",
      "Hair": "Haare",
      "Outfit": "Kleidung",
      "Gear": "Ausrüstung",
      "Background": "Hintergrund",
      "Wardrobe": "Garderobe",
      "Attributes": "Attribute",
      "Save & Exit to Village": "Speichern & zum Dorf",
      "The Quest Board": "Die Aufgabentafel",
      "All Quests": "Alle Aufgaben",
      "My Biome Only": "Nur mein Biom",
      "Badge Progression": "Abzeichen-Fortschritt",
      "Free Roam — all quests unlocked": "Freier Modus — alle Aufgaben freigeschaltet",
      "Adventure Mode — complete 50% of a tier within one guild to unlock the next": "Abenteuermodus — schließe 50% einer Stufe innerhalb einer Gilde ab, um die nächste freizuschalten",
      "Story Mode — a guided adventure, new every time": "Geschichtenmodus — ein geführtes Abenteuer, jedes Mal neu",
      "Survival Mode — train the family for the long haul": "Überlebensmodus — trainiere die Familie für die lange Strecke",
      "Official Permies PEP Quests": "Offizielle Permies PEP-Aufgaben",
      "Submit evidence to their forum for official certification.": "Reiche deine Nachweise in ihrem Forum ein für offizielle Zertifizierung.",
      "Holistic RPG Add-on Guilds": "Ganzheitliche RPG-Zusatzgilden",
      "Custom to The Creative Village. Do not count toward official Permies PEP certification.": "Speziell für Das Kreative Dorf. Zählen nicht zur offiziellen Permies PEP-Zertifizierung.",
      "Guild": "Gilde",
      "No description available.": "Keine Beschreibung verfügbar.",
      "complete": "abgeschlossen",
      "Locked": "Gesperrt",
      "Post to Permies": "Bei Permies veröffentlichen",
      "Complete!": "Abgeschlossen!",
      "Finalize": "Abschließen",
      "Learn More": "Mehr erfahren",
      "Trackers": "Verfolger",
      "Witnesses": "Zeugen",
      "Otis Verification Protocol:": "Otis-Verifikationsprotokoll:",
      "photo of materials/site": "Foto der Materialien / des Ortes",
      "photo of you working": "Foto von dir bei der Arbeit",
      "photo of finished product WITH a sign showing your name and date": "Foto des fertigen Produkts MIT einem Schild mit deinem Namen und dem Datum",
      "Select who participated. Multiple people can hold the same role!": "Wähle aus, wer teilgenommen hat. Mehrere Personen können dieselbe Rolle haben!",
      "Confirm & Complete Quest": "Bestätigen & Aufgabe abschließen",
      "Guided Path for this Quest": "Geführter Pfad für diese Aufgabe",
      "Prep": "Vorbereitung",
      "Core": "Kern",
      "Stretch": "Herausforderung",
      "Curriculum topics connected to this skill:": "Lehrplan-Themen zu dieser Fähigkeit:",
      "Skill-wide resources:": "Ressourcen für diese Fähigkeit:",
      "Feeling lucky? Spin for a surprise resource:": "Glücksgefühl? Dreh für eine Überraschungsressource:",
      "Spin": "Drehen",
      "The Colorado Schoolhouse": "Das Colorado-Schulhaus",
      "Attendance Tracker (CO Law: 172 Days)": "Anwesenheitsverfolgung (CO-Gesetz: 172 Tage)",
      "Days Completed:": "Absolvierte Tage:",
      "Hours Logged:": "Erfasste Stunden:",
      "hrs": "Std",
      "Log 4-Hour School Day": "4-Stunden-Schultag erfassen",
      "Log 1-Hour Day": "1-Stunden-Tag erfassen",
      "Academic Transcript (CO Required Subjects)": "Akademisches Zeugnis (CO-Pflichtfächer)",
      "Hours are logged from completed quests (2 hrs each) plus any custom hours below.": "Stunden werden aus abgeschlossenen Aufgaben (je 2 Std.) plus benutzerdefinierte Stunden unten erfasst.",
      "Log Custom Academic Hours": "Benutzerdefinierte akademische Stunden erfassen",
      "Add Hours": "Stunden hinzufügen",
      "Bring Your History": "Bringe deinen Verlauf",
      "Already partway through your school year with another curriculum? Add your prior days and hours here so the tracker reflects where you actually are.": "Bereits mitten im Schuljahr mit einem anderen Lehrplan? Füge hier deine früheren Tage und Stunden hinzu, damit die Verfolgung deinen tatsächlichen Stand widerspiegelt.",
      "Add History to Tracker": "Verlauf zur Verfolgung hinzufügen",
      "Hours": "Stunden",
      "The Creative Village Library": "Die Bibliothek des Kreativen Dorfes",
      "A curated knowledge graph of free, public domain, and government resources for holistic homeschooling.": "Ein kuratierter Wissensgraph kostenloser, gemeinfreier und staatlicher Ressourcen für ganzheitliches Homeschooling.",
      "Educational Philosophy & Nature Connection": "Bildungsphilosophie & Naturverbindung",
      "Colorado Homeschooling": "Homeschooling in Colorado",
      "Permies & PEP Badges": "Permies & PEP-Abzeichen",
      "Curriculum by Subject": "Lehrplan nach Fach",
      "The Money Lab — Financial Literacy & Foreign Exchange": "Das Geldlabor — Finanzkompetenz & Devisenhandel",
      "Food Preservation": "Lebensmittelkonservierung",
      "Woodworking": "Holzverarbeitung",
      "Homesteading & Self-Sufficiency": "Homesteading & Selbstversorgung",
      "Foraging & Herbalism": "Wildsammlung & Kräuterkunde",
      "The Creative Village Commons": "Der Platz des Kreativen Dorfes",
      "Family Achievements": "Familienerfolge",
      "Bridge to Permies": "Brücke zu Permies",
      "Post your evidence to the PEP Forum to get officially certified by Paul Wheaton's team.": "Veröffentliche deine Nachweise im PEP-Forum, um dich offiziell vom Team von Paul Wheaton zertifizieren zu lassen.",
      "Official PEP quests (marked with the shield icon) count toward Permies certification. RPG Add-on quests (marked with the sparkle icon) are custom to The Creative Village and do not count toward official PEP badges.": "Offizielle PEP-Aufgaben (mit dem Schild-Symbol) zählen zur Permies-Zertifizierung. RPG-Zusatzaufgaben (mit dem Glitzer-Symbol) sind speziell für Das Kreative Dorf und zählen nicht zu offiziellen PEP-Abzeichen.",
      "Open PEP Forum": "PEP-Forum öffnen",
      "How to Apply for a Badge": "Wie man ein Abzeichen beantragt",
      "Optional: The Offline Archive": "Optional: Das Offline-Archiv",
      "For families wanting a complete offline backup drive, download these open-source collections to a local hard drive:": "Für Familien, die ein vollständiges Offline-Backup-Laufwerk möchten, lade diese Open-Source-Sammlungen auf eine lokale Festplatte herunter:",
      "Quests Done": "Aufgaben erledigt",
      "Wardrobe Items": "Garderoben-Objekte",
      "Sand Badges": "Sand-Abzeichen",
      "Straw Badges": "Stroh-Abzeichen",
      "Wood Badges": "Holz-Abzeichen",
      "Iron Badges": "Eisen-Abzeichen",
      "Earned": "Verdient",
      "Family Members": "Familienmitglieder",
      "School Days": "Schultage",
      "The 64 cultural elements of deep nature connection — from Jon Young's 512 Project and the 8 Shields framework. These practices weave the invisible fabric of community that makes permaculture skills sustainable across generations.": "Die 64 kulturellen Elemente tiefer Naturverbindung — aus Jon Youngs 512-Projekt und dem 8-Shields-Rahmen. Diese Praktiken weben den unsichtbaren Stoff der Gemeinschaft, der Permakultur-Fähigkeiten über Generationen nachhaltig macht.",
      "Gold Nugget Earned!": "Goldnugget verdient!",
      "You worked the entire Commerce guild — budgets, currency exchange, paper trading, even a family forex night. That's real financial skill, earned in the real world.": "Du hast die gesamte Handels-Gilde bearbeitet — Budgets, Währungswechsel, Papierhandel, sogar einen Familien-Devisenabend. Das ist echte Finanzkompetenz, verdient in der echten Welt.",
      "The Gold Nugget is now part of your family's story. No real money was moved — only understanding.": "Das Goldnugget ist jetzt Teil der Geschichte deiner Familie. Kein echtes Geld wurde bewegt — nur Verständnis.",
      "Glow on ✨": "Lass es leuchten ✨",
      "Before": "Vorher",
      "During": "Während",
      "After": "Nachher",
      "Tier": "Stufe",
      "Level": "Niveau",
      "Guild of": "Gilde der",
      "Gold Nugget": "Goldnugget",
      "The Creative Village — A Roll Making Game (RMG)": "Das Kreative Dorf — Ein Rollenbildendes Spiel (RMG)",
      "Print All 15 Sheets": "🖨️ Alle 15 Blätter drucken",
      "Print This Sheet": "🖨️ Dieses Blatt drucken",
      "All 15 Sheets": "Alle 15 Blätter",
      "Family Progress": "Familienfortschritt",
      "quests completed": "Aufgaben abgeschlossen",
      "Quests:": "Aufgaben:",
      "Wardrobe:": "Garderobe:",
      "items": "Objekte",
      "earned": "verdient",
      "Reward:": "Belohnung:",
      "💾 Save Village (Download File)": "💾 Dorf speichern (Datei herunterladen)",
      "📂 Load Saved Village": "📂 Gespeichertes Dorf laden",
      "🔄 Reset": "🔄 Zurücksetzen",
      "Learning Lab": "Lernlabor",
      "The Learning Lab": "Das Lernlabor",
      "The Village Library": "Die Dorfbibliothek",
      "The Village Commons": "Der Dorfplatz",
      "Paul Wheaton, Right Now": "Paul Wheaton, Jetzt",
      "Woodworking & Hand Tools": "Holzverarbeitung & Handwerkzeuge",
      "Your Learning Blueprint": "Dein Lernbauplan",
      "Starts on a screen. Grows into real life: real skills, real attributes, real badges in the real world.": "Beginnt auf einem Bildschirm. Wächst in das echte Leben: echte Fähigkeiten, echte Attribute, echte Abzeichen in der echten Welt.",
      "Free, public-domain, and government resources for homeschooling — curated by hand.": "Kostenlose, gemeinfreie und staatliche Ressourcen für Homeschooling — von Hand kuratiert.",
      "A living map of how people learn — curricula from around the world and across time, the science of learning, and a tool for building your family's own blend.": "Eine lebendige Karte wie Menschen lernen — Lehrpläne aus aller Welt und aller Zeiten, die Wissenschaft des Lernens und ein Werkzeug, um deine eigene Familienmischung zu erstellen.",
      "The Gold Nugget is now part of your family's story. No real money moved; what grew was understanding.": "Das Goldnugget ist jetzt Teil der Geschichte deiner Familie. Kein echtes Geld wurde bewegt; was wuchs war Verständnis.",
      "This is the educational blend your family chose. Build quests that honor it.": "Das ist die Bildungsmischung, die deine Familie gewählt hat. Erstelle Aufgaben, die sie ehren."
    },
    "subjects": {
      "Science": "Naturwissenschaften",
      "Math": "Mathematik",
      "Art": "Kunst",
      "PE": "Sport",
      "Health": "Gesundheit",
      "Geography": "Geografie",
      "Writing": "Schreiben",
      "History": "Geschichte",
      "Economics": "Wirtschaft",
      "Constitution": "Verfassung",
      "Reading": "Lesen"
    },
    "roles": {
      "Tracker": "Verfolger / Verfolgerin",
      "Witness": "Zeuge / Zeugin",
      "Hearth Tender": "Herdhüter / Herdhüterin",
      "Hearth": "Herd",
      "Mentor": "Mentor / Mentorin",
      "Mentors": "Mentoren",
      "Trackers": "Verfolger",
      "Witnesses": "Zeugen"
    },
    "tiers": {
      "Sand": "Sand",
      "Straw": "Stroh",
      "Wood": "Holz",
      "Iron": "Eisen"
    },
    "guilds": {
      "Gardening": {
        "name": "Gärtnern",
        "desc": "Baue Nahrung an, bewahre Samen und errichte widerstandsfähige Gartensysteme."
      },
      "Natural Building": {
        "name": "Natürliches Bauen",
        "desc": "Verwende Lehm, Stroh, Holz und Stein, um gesunde Unterkünfte und Oberflächen zu bauen."
      },
      "Woodland Care": {
        "name": "Waldpflege",
        "desc": "Pflege Wälder, Brennholz, Zäune, Pilze und lebende Holzsysteme."
      },
      "Round Wood Woodworking": {
        "name": "Rundholzverarbeitung",
        "desc": "Baue nützliche Dinge aus Stämmen, Ästen und Zweigen mit wenig Leim und Metall."
      },
      "Tool Care": {
        "name": "Werkzeugpflege",
        "desc": "Halte Werkzeuge scharf, sauber, geölt und repariert, damit sie länger halten."
      },
      "Earthworks": {
        "name": "Erdbau",
        "desc": "Forme das Land, um Wasser zu bewegen, Erosion zu reduzieren und dauerhafte Wege zu schaffen."
      },
      "Dimensional Lumber Woodworking": {
        "name": "Schnittholzverarbeitung",
        "desc": "Verwende gerades Holz und starke Verbindungen, um praktische Möbel und Strukturen zu bauen."
      },
      "Rocket": {
        "name": "Raketenofen",
        "desc": "Baue holzbefeuerte Geräte, die Brennstoff sparen und Wärme sehr effizient nutzen."
      },
      "Food Prep": {
        "name": "Nahrungszubereitung",
        "desc": "Koche, konserviere und lagere Nahrung mit praktischen Küchenkenntnissen."
      },
      "Animal Care": {
        "name": "Tierpflege",
        "desc": "Pflege Nutztiere und Wildtierlebensräume mit Freundlichkeit und Beobachtung."
      },
      "Foraging": {
        "name": "Wildsammlung",
        "desc": "Finde, ernte, identifiziere und bewahre nützliche wilde Nahrung und Medizin."
      },
      "Community Living": {
        "name": "Gemeinschaftsleben",
        "desc": "Übe gemeinschaftliche Lebensfähigkeiten, die Familien helfen, zusammenzuarbeiten."
      },
      "Textiles": {
        "name": "Textilien",
        "desc": "Repariere, stelle und pflege Kleidung und Stoff, damit sie länger hält."
      },
      "Greywater and Willow Feeders": {
        "name": "Grauwasser und Weiden",
        "desc": "Verwende Waschwasser sicher und ziehe Pflanzen, die Feuchtigkeit und Nährstoffe lieben."
      },
      "Metalworking": {
        "name": "Metallverarbeitung",
        "desc": "Schneide, forme, schweiße, biege und bearbeite Metall für nützliche Objekte."
      },
      "Plumbing and Hot Water": {
        "name": "Klempnerei und Warmwasser",
        "desc": "Halte Wasser sicher durch Waschbecken, Abflüsse, Toiletten und Warmwassersysteme fließend."
      },
      "Electricity": {
        "name": "Elektrizität",
        "desc": "Lerne sichere Wechselstrom- und Gleichstrom-Grundlagen, Batterien, Schaltkreise und Solarsysteme."
      },
      "Commerce": {
        "name": "Handel",
        "desc": "Verdiene Geld, tausche Werte, führe Aufzeichnungen und lerne, wie Währungen zirkulieren — von Kleingeld zum Goldnugget-Tresor."
      },
      "Natural Medicine": {
        "name": "Naturmedizin",
        "desc": "Lerne sichere, praktische Wege, Heilpflanzen zu identifizieren und zu verwenden."
      },
      "Nest": {
        "name": "Nest",
        "desc": "Halte das Haus sauber, organisiert und gemütlich für das tägliche Familienleben."
      },
      "Homesteading": {
        "name": "Homesteading",
        "desc": "Behandle praktische Lebensfähigkeiten, die ein Haus und eine Familie auf echte Notfälle vorbereiten."
      },
      "Oddball": {
        "name": "Kuriositäten",
        "desc": "Sammle seltsame, kreative und entzückend unerwartete Lebenserfahrungen."
      },
      "Vitality": {
        "name": "Vitalität",
        "desc": "Entwickle körperliche Vitalität durch Bewegung, Rhythmus und Körperbewusstsein."
      },
      "Community": {
        "name": "Gemeinschaft",
        "desc": "Übe soziale, dienstliche und Event-Fähigkeiten, die Gruppen helfen zu gedeihen."
      }
    },
    "quests": {
    "Build a Hugelkultur Bed": {
      "title": "Ein Hugelkultur-Hochbeet bauen",
      "desc": "Baue einen kleinen Hugelkultur-Hügel mit Mulch, Samen und stickstofffixierenden Begleitpflanzen."
    },
    "Chop and Drop": {
      "title": "Chop and Drop",
      "desc": "Schneide Pflanzen zurück und lasse das Material als Mulch auf einer Gartenfläche liegen."
    },
    "Ruth Stout Composting": {
      "title": "Ruth-Stout-Kompostierung",
      "desc": "Richte stark gemulchte Gartenstellen mit organischen Schichten und Küchenabfällen ein."
    },
    "Seed Saving": {
      "title": "Samen gewinnen",
      "desc": "Ernte, trockne und lagere Samen von vier verschiedenen Pflanzenarten."
    },
    "Build a 12 Foot Hugelkultur": {
      "title": "Ein 12-Fuß-Hugelkultur-Beet bauen",
      "desc": "Erweitere ein Hugelkultur-Beet auf etwa 12 Fuß (3,6 m) mit Stämmen, Mulch und Erde."
    },
    "Encourage Volunteer Plants": {
      "title": "Selbstausgesäte Pflanzen fördern",
      "desc": "Erkenne und schütze fünf selbst ausgesäte Pflanzen im Garten."
    },
    "Direct Seed Perennials": {
      "title": "Stauden direkt aussäen",
      "desc": "Säe mehrjährige Kulturen direkt ins Beet und verfolge, was aufgeht."
    },
    "Make a 100 Sq Ft Polyculture Garden": {
      "title": "Ein 100-Quadratfuß-Mischkulturbeet anlegen",
      "desc": "Plane und bepflanze einen Garten mit gemischten Arten — mindestens 12 verschiedene."
    },
    "Build a 7 x 24 Hugelkultur": {
      "title": "Ein 7 x 24 Hugelkultur-Beet bauen",
      "desc": "Erstelle ein größeres Hugelkultur-Beet mit Stämmen, Mulch und Erde."
    },
    "Grow and Harvest 1M Calories": {
      "title": "Eine Million Kalorien anbauen und ernten",
      "desc": "Plane, pflanze und ernte ein Gartensystem, das eine Million Kalorien liefert."
    },
    "Build a Quarter Acre Food Forest": {
      "title": "Einen Viertel-Morgen-Nahrungswald anlegen",
      "desc": "Lege einen vielfältigen Nahrungswald mit mehreren Ebenen an."
    },
    "Direct Seed 50 Each of 10 Perennial Species": {
      "title": "Je 50 Samen von 10 Staudenarten direkt säen",
      "desc": "Pflanze große Saatreihen für zehn mehrjährige Arten und verfolge die Keimung."
    },
    "Grow and Harvest 4M Calories": {
      "title": "Vier Millionen Kalorien anbauen und ernten",
      "desc": "Skaliere ein Nahrungsanbausystem hoch, um Millionen von Kalorien zu produzieren."
    },
    "Build a 7 x 150 Hugelkultur": {
      "title": "Ein 7 x 150 Hugelkultur-System bauen",
      "desc": "Erstelle ein riesiges Hugelkultur-System mit mehreren Beeten und dickem Mulch."
    },
    "Harvest Fruit from 12 Seed-Grown Trees": {
      "title": "Früchte von 12 samengezogenen Bäumen ernten",
      "desc": "Ziehe und ernte Früchte von einem Dutzend aus Samen gezogenen Bäumen."
    },
    "Build a 1 Acre Food Forest": {
      "title": "Einen Morgen Nahrungswald anlegen",
      "desc": "Etabliere einen ganzen Morgen (ca. 4000 m²) Nahrungswald mit geschichteten Pflanzungen."
    },
    "Landrace Seed Saving": {
      "title": "Landrasen-Samengewinnung",
      "desc": "Gewinne Samen von 12 Arten über 3 Generationen und erhalte starke Eigenschaften."
    },
    "Make 12 Adobe Bricks": {
      "title": "12 Adobe-Ziegel herstellen",
      "desc": "Mische, forme und trockne eine kleine Charge Adobe-Ziegel."
    },
    "Make Clay Paint": {
      "title": "Lehmfarbe herstellen",
      "desc": "Mische und trage eine einfache Lehmfarbe auf."
    },
    "Level a Skiddable Structure with Rocks": {
      "title": "Eine verschiebbare Struktur mit Steinen ausrichten",
      "desc": "Nutze Steine, um eine auf Schlitten verschiebbare Struktur waagerecht auszurichten."
    },
    "Make a 25 Sq Ft Shake Roof": {
      "title": "Ein 25-Quadratfuß-Schindeldach bauen",
      "desc": "Füge einen kleinen Schindeldach-Abschnitt zusammen."
    },
    "Make Whitewash": {
      "title": "Kalktünche herstellen",
      "desc": "Mische und trage eine Kalktünche auf."
    },
    "Assess Clay Mixes": {
      "title": "Lehm-Mischungen beurteilen",
      "desc": "Teste mehrere Lehm-, Sand- und Strohmischungen und vergleiche die Ergebnisse."
    },
    "Build a Tiny Shed on Skids": {
      "title": "Einen kleinen Schuppen auf Schlitten bauen",
      "desc": "Zimmere und vollende einen kleinen Schuppen, der auf Schlitten bewegt werden kann."
    },
    "Make a Cob Sink": {
      "title": "Ein Cob-Waschbecken formen",
      "desc": "Forme und vollende ein Cob-Becken für Haus oder Außenküche."
    },
    "Make a Tree Stand": {
      "title": "Einen Baumständer bauen",
      "desc": "Baue eine kleine Stütze oder Halterung aus Naturmaterialien für Baum oder Schild."
    },
    "Operating Window from Scratch": {
      "title": "Ein funktionierendes Fenster von Grund auf bauen",
      "desc": "Baue einen funktionsfähigen Fensterrahmen und Fensterflügel von Grund auf."
    },
    "Straw Bale Wall of a Wofati": {
      "title": "Strohballenwand eines Wofati",
      "desc": "Erstelle einen Strohballen-Wandabschnitt für eine Wofati-Struktur."
    },
    "Wattle and Daub Wall": {
      "title": "Flechtwand mit Lehmverputz",
      "desc": "Flechte ein Flechtwerk-Panel und verputze es mit Lehm."
    },
    "Cob Bench with Round Pole Roof": {
      "title": "Cob-Bank mit Rundholz-Dach",
      "desc": "Baue eine Bank und einen Witterungsschutz aus Naturmaterialien."
    },
    "Build a Wofati and Live in It for a Winter": {
      "title": "Ein Wofati bauen und einen Winter darin wohnen",
      "desc": "Errichte ein Wofati-Haus und wohne einen Winter darin."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Bow Saw": {
      "title": "Einen 6-8 Zoll dicken toten Baum mit einer Bügelsäge fällen",
      "desc": "Fälle sicher einen kleinen toten, stehenden Baum mit einer Bügelsäge."
    },
    "Drop a 6-8 Inch Dead Standing Tree with a Chainsaw": {
      "title": "Einen 6-8 Zoll dicken toten Baum mit einer Kettensäge fällen",
      "desc": "Fälle sicher einen kleinen toten, stehenden Baum mit einer Kettensäge unter Aufsicht."
    },
    "Drop a 6-8 Inch Live Tree with a Bow Saw": {
      "title": "Einen 6-8 Zoll dicken lebenden Baum mit einer Bügelsäge fällen",
      "desc": "Fälle sicher einen kleinen lebenden Baum mit einer Bügelsäge."
    },
    "Drop a 6-8 Inch Live Tree with a Chainsaw": {
      "title": "Einen 6-8 Zoll dicken lebenden Baum mit einer Kettensäge fällen",
      "desc": "Fälle sicher einen kleinen lebenden Baum mit einer Kettensäge unter Aufsicht."
    },
    "Limb 4 Trees": {
      "title": "4 Bäume entasten",
      "desc": "Entferne Äste von vier Bäumen und staple das Reisig ordentlich."
    },
    "Peel 2 Live Trees and Put Them Up to Dry": {
      "title": "2 lebende Bäume schälen und zum Trocknen aufstellen",
      "desc": "Schäle zwei lebende Bäume und lagere sie vom Boden, damit sie trocknen."
    },
    "Split and Stack Dead Standing Wood as Firewood": {
      "title": "Totes Holz spalten und als Brennholz stapeln",
      "desc": "Verwandle totes, stehendes Holz in gestapeltes Brennholz."
    },
    "Prep 10 Junkpoles": {
      "title": "10 Schrottstangen vorbereiten",
      "desc": "Bereite zehn gerade Stangen für Bau- oder Zaunzwecke vor."
    },
    "Cleave 6 Shakes with a Froe": {
      "title": "6 Schindeln mit einem Spaltmesser spalten",
      "desc": "Spalte sechs Dachtschindeln aus geradfaserigem Holz."
    },
    "Build 12 Feet of Junkpole Fence or Repair 24 Feet": {
      "title": "12 Fuß Schrottstangenzaun bauen oder 24 Fuß reparieren",
      "desc": "Baue einen Schrottstangen-Zaunabschnitt oder repariere einen."
    },
    "Drop at Least 12 Trees 8 Inches or Larger": {
      "title": "Mindestens 12 Bäume ab 8 Zoll Durchmesser fällen",
      "desc": "Fälle sicher ein Dutzend mittelgroße Bäume."
    },
    "One Cord of Firewood Cut and Stacked Under a Roof": {
      "title": "Eine Raummeter Brennholz geschnitten und unter Dach stapeln",
      "desc": "Schneide und staple eine Raummeter (cord) Brennholz, wo es trocken bleibt."
    },
    "Make Lumber: a Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Schnittholz herstellen: ein Dutzend 2x4s, 1x4s und 3/8x4s",
      "desc": "Sägewerke oder hoble eine erste Charge Schnittholz."
    },
    "Twig Construction: 5 Foot Tomato Cage and 8 Foot Pole Bean Trellis": {
      "title": "Zweigbau: 5-Fuß-Tomatkäfig und 8-Fuß-Bohnenspaliere",
      "desc": "Baue nützliche Pflanzenstützen aus Zweigen und Stangen."
    },
    "36 Feet of Junkpole Fence plus Gate with Latch": {
      "title": "36 Fuß Schrottstangenzaun plus Tor mit Riegel",
      "desc": "Baue einen längeren Schrottstangen-Zaun mit funktionierendem Tor."
    },
    "Plant Tree Seeds for 100 Feet of Living Fence": {
      "title": "Baumsamen für 100 Fuß lebenden Zaun pflanzen",
      "desc": "Säe Baumsamen für einen zukünftigen lebenden Zaun und verfolge das Aufgehen."
    },
    "Put Up Three Cords of Firewood": {
      "title": "Drei Raummeter Brennholz lagern",
      "desc": "Schneide, spalte und staple drei Raummeter (cords) Brennholz."
    },
    "More Lumber: 8 Dozen 2x4s, 1x4s, and 3/8x4s": {
      "title": "Mehr Schnittholz: 8 Dutzend 2x4s, 1x4s und 3/8x4s",
      "desc": "Produziere eine große Charge Schnittholz."
    },
    "Build Six Rock Jacks from Split Logs": {
      "title": "Sechs Steinheber aus gespaltenen Stämmen bauen",
      "desc": "Baue stabile Steinheber (rock jacks) zum Anheben oder Abstützen."
    },
    "120 Feet of Junkpole Fence with Good Gate and Latch": {
      "title": "120 Fuß Schrottstangenzaun mit gutem Tor und Riegel",
      "desc": "Baue einen langen Schrottstangen-Zaun mit solidem Tor."
    },
    "Plant 300 Black Locust Seeds": {
      "title": "300 Robinien-Samen pflanzen",
      "desc": "Säe Robinensamen (black locust) im großen Maßstab und verfolge die Keimung."
    },
    "Plant 300 Cleavers": {
      "title": "300 Klebkraut-Pflanzen setzen",
      "desc": "Lege ein Klebkraut-Beet an und beobachte, wie es sich ausbreitet."
    },
    "Plant 300 Nettles": {
      "title": "300 Brennnesseln pflanzen",
      "desc": "Lege ein Brennnessel-Beet an und manage es sicher."
    },
    "Plant 60 Willows": {
      "title": "60 Weiden pflanzen",
      "desc": "Ziehe Weiden für künftiges Futter, Zäune und Korbmaterial."
    },
    "Plant 40 Sweet Sap Silver Maples": {
      "title": "40 Zucker-Ahorn pflanzen",
      "desc": "Etabliere Bäume, die Saft und Schatten liefern können."
    },
    "Plant 10 Cedar Trees": {
      "title": "10 Zedern pflanzen",
      "desc": "Pflanze eine Zedernreihe für künftigen Windschutz und Lebensraum."
    },
    "Twig Construction: Six 5 Foot Tomato Cages and Three 8 Foot Trellises": {
      "title": "Zweigbau: sechs 5-Fuß-Tomatkäfige und drei 8-Fuß-Spalier",
      "desc": "Baue ein komplettes Set Gartenstützen aus Stangen und Zweigen."
    },
    "Plant Tree Seeds for 800 Feet of Living Fence": {
      "title": "Baumsamen für 800 Fuß lebenden Zaun pflanzen",
      "desc": "Säe Samen für einen langen zukünftigen lebenden Zaun."
    },
    "Lay 50 Feet of Living Hedge": {
      "title": "50 Fuß lebende Hecke anlegen",
      "desc": "Lege eine lebende Hecke an und schütze sie, bis sie etabliert ist."
    },
    "Berm Shed 8x8x8 with 5 Foot Eave": {
      "title": "Erdhangschuppen 8x8x8 mit 5-Fuß-Traufe",
      "desc": "Baue einen Erdhangschuppen (berm shed) nach den vorgegebenen Maßen."
    },
    "Gin Pole: Lift a 10 Foot Log 15 Feet Off the Ground": {
      "title": "Ladebaum: einen 10-Fuß-Stamm 15 Fuß hochheben",
      "desc": "Nutze einen Ladebaum (gin pole), um einen Stamm sicher anzuheben."
    },
    "Outdoor Mushrooms: 1 lb Each Oyster and Shiitake": {
      "title": "Außenpilze: je 1 lb Austern- und Shiitakepilze",
      "desc": "Züchte Austern- und Shiitakepilze im Freien."
    },
    "Put Up Six Cords of Firewood": {
      "title": "Sechs Raummeter Brennholz lagern",
      "desc": "Produziere und staple sechs Raummeter (cords) Brennholz."
    },
    "200 2x4s, 1x4s, and 3/8x4s Lumber": {
      "title": "200 2x4s, 1x4s und 3/8x4s Schnittholz",
      "desc": "Fertige einen sehr großen Stapel Schnittholz."
    },
    "Build 24 Rock Jacks from Split Logs": {
      "title": "24 Steinheber aus gespaltenen Stämmen bauen",
      "desc": "Baue ein schweres Set Steinheber (rock jacks)."
    },
    "Plant Seeds to Restore Creek Bed": {
      "title": "Bachbett mit Samen wiederherstellen",
      "desc": "Bespitze und stabilisiere ein großes Bachbett-Renaturierungsgebiet."
    },
    "Berm Shed: 3 Cells, 12x12x12 Each, 5 Foot Eaves": {
      "title": "Erdhangschuppen: 3 Zellen, je 12x12x12, 5-Fuß-Traufen",
      "desc": "Baue einen mehrzelligen Erdhangschuppen in großem Maßstab."
    },
    "Build Two Skiddable Structures": {
      "title": "Zwei verschiebbare Strukturen bauen",
      "desc": "Erstelle zwei Strukturen, die auf Schlitten bewegt werden können."
    },
    "Gin Pole: Lift a 20 Foot Log 20 Feet Off the Ground": {
      "title": "Ladebaum: einen 20-Fuß-Stamm 20 Fuß hochheben",
      "desc": "Hebe einen großen Stamm mit einem Ladebaum-System an."
    },
    "Produce 10 lbs Each Oyster and Shiitake Mushrooms": {
      "title": "Je 10 lbs Austern- und Shiitakepilze produzieren",
      "desc": "Ernte eine große Menge Freilandpilze."
    },
    "Carve a Spoon": {
      "title": "Einen Löffel schnitzen",
      "desc": "Schnitze einen gebrauchsfertigen Holzlöffel aus Ast oder Restholz."
    },
    "Make a Wooden Mallet": {
      "title": "Einen Holzhammer herstellen",
      "desc": "Fertige aus einem runden Stock oder Ast einen einfachen Holzhammer."
    },
    "Build a Simple Roundwood Bench": {
      "title": "Eine einfache Rundholzbank bauen",
      "desc": "Baue eine stabile kleine Bank aus Rundholz und Bandbindungen."
    },
    "Make Coat Hooks from Sticks": {
      "title": "Mäntelhaken aus Ästen machen",
      "desc": "Fertige eine Reihe Haken aus Ästen oder kleinen Zweigen."
    },
    "Sharpen a Knife": {
      "title": "Ein Messer schärfen",
      "desc": "Schärfe ein Küchen- oder Taschenmesser sicher."
    },
    "Sharpen a Shovel or Hoe": {
      "title": "Eine Schaufel oder Hacke schärfen",
      "desc": "Bringe die Schneide eines Grabwerkzeugs wieder in Ordnung."
    },
    "Oil a Tool": {
      "title": "Ein Werkzeug ölen",
      "desc": "Reinige und öle ein Handwerkzeug, um Rost zu verhindern."
    },
    "Repair a Tool": {
      "title": "Ein Werkzeug reparieren",
      "desc": "Repariere einen gebrochenen Werkzeugstiel, eine Passung oder Befestigung."
    },
    "Build a Berm": {
      "title": "Einen Erdwall bauen",
      "desc": "Häufe und forme Erde zu einem kleinen Wall."
    },
    "Dig a Swale": {
      "title": "Eine Mulde graben",
      "desc": "Grabe eine flache Mulde entlang der Höhenlinie, um Wasser zu verlangsamen."
    },
    "Build a Trail": {
      "title": "Einen Weg bauen",
      "desc": "Lege einen einfachen Weg an, der Fußverkehr standhält."
    },
    "Build a Birdhouse": {
      "title": "Einen Nistkasten bauen",
      "desc": "Baue einen kleinen Nistkasten mit sauberen Schnitten und solider Montage."
    },
    "Make a Shelf": {
      "title": "Ein Regal bauen",
      "desc": "Baue und hänge ein einfaches Regal auf."
    },
    "Build a Toolbox": {
      "title": "Einen Werkzeugkasten bauen",
      "desc": "Baue einen nützlichen Werkzeugkasten aus Schnittholz."
    },
    "Make a Stool": {
      "title": "Einen Hocker bauen",
      "desc": "Baue einen kleinen Hocker mit stabiler Verbindung."
    },
    "Cook a Meal on a Rocket Stove": {
      "title": "Eine Mahlzeit auf einem Raketenofen kochen",
      "desc": "Bereite Essen auf einem einfachen Raketenofen oder Campingkocher zu."
    },
    "Build a Small Rocket Stove": {
      "title": "Einen kleinen Raketenofen bauen",
      "desc": "Baue einen einfachen Raketenofen zum Kochen zusammen."
    },
    "Make a Rocket Mass Heater Model": {
      "title": "Ein Raketenmassenofen-Modell bauen",
      "desc": "Baue ein kleines Modell, das zeigt, wie ein Raketenmassenofen funktioniert."
    },
    "Heat Water with a Rocket Heater": {
      "title": "Wasser mit einem Raketenofen erhitzen",
      "desc": "Nutze ein Raketensystem, um Wasser für eine Aufgabe zu erhitzen."
    },
    "Cook Grain 4 Ways": {
      "title": "Ein Getreide auf 4 Arten kochen",
      "desc": "Bereite ein Getreide auf vier verschiedene Arten zu."
    },
    "Preserve One Item": {
      "title": "Ein Lebensmittel konservieren",
      "desc": "Konserviere ein Lebensmittel durch Einfrieren, Trocknen, Fermentieren oder Einkochen."
    },
    "Bread from Scratch": {
      "title": "Brot von Grund auf",
      "desc": "Backe Brot aus Mehl, Wasser, Hefe oder Sauerteig und Salz."
    },
    "Hay Box Cooking": {
      "title": "Heukisten-Kochen",
      "desc": "Koche eine Mahlzeit in einer Heukiste oder einem isolierten Kocher."
    },
    "Build a Bird Feeder or Waterer": {
      "title": "Eine Vogelfutterstelle oder Tränke bauen",
      "desc": "Baue eine Futterstelle oder Wasserquelle für Vögel oder Bestäuber."
    },
    "Create a Pollinator Habitat Patch": {
      "title": "Ein Bestäuber-Habitat anlegen",
      "desc": "Pflanze und schütze eine Fläche, die Bienen und Schmetterlinge unterstützt."
    },
    "Clean an Animal Shelter or Coop": {
      "title": "Einen Tierunterstand oder Stall reinigen",
      "desc": "Reinige und richte einen einfachen Tierunterstand oder Stall neu her."
    },
    "Build a Wildlife Shelter": {
      "title": "Ein Wildtierschutz bauen",
      "desc": "Baue einen kleinen Unterschlupf oder Reisighaufen für heimische Tiere."
    },
    "Identify 5 Edible Wild Plants": {
      "title": "5 essbare Wildpflanzen bestimmen",
      "desc": "Lerne, fünf essbare Wildpflanzen in deiner Gegend zu erkennen."
    },
    "Harvest a Wild Food": {
      "title": "Ein Wildgericht ernten",
      "desc": "Sammle Beeren, Früchte, Nüsse oder Blätter mit Erlaubnis und Sorgfalt."
    },
    "Make a Wild Tea": {
      "title": "Einen Wildkräutertee zubereiten",
      "desc": "Trockne oder brühe eine sichere Wildpflanze als Tee."
    },
    "Preserve a Wild Harvest": {
      "title": "Eine Wildernte konservieren",
      "desc": "Trockne, friere ein oder konserviere anders etwas Gesammeltes."
    },
    "Cook for a Neighbor or Group": {
      "title": "Für Nachbarn oder eine Gruppe kochen",
      "desc": "Bereite Essen für jemanden außerhalb deines Haushalts zu."
    },
    "Public Art": {
      "title": "Öffentliche Kunst",
      "desc": "Erstelle ein Kunstwerk, das einen gemeinschaftlichen Raum verschönern soll."
    },
    "Host a Workshop or Skill Share": {
      "title": "Einen Workshop oder Skill-Share veranstalten",
      "desc": "Unterrichte oder veranstalte eine einfache Klasse für andere."
    },
    "Organize a Swap": {
      "title": "Einen Tausch organisieren",
      "desc": "Koordiniere einen Tausch von Waren, Samen oder Fähigkeiten."
    },
    "Mend a Hole": {
      "title": "Ein Loch flicken",
      "desc": "Repariere ein Loch im Stoff mit einfachem Stich oder Flicken."
    },
    "Replace a Button": {
      "title": "Einen Knopf ersetzen",
      "desc": "Nähe einen Knopf wieder an oder ersetze einen fehlenden."
    },
    "Hem Clothing": {
      "title": "Kleidung säumen",
      "desc": "Kürze oder vollende einen Saum an Kleidung."
    },
    "Sew an Item": {
      "title": "Etwas Nähen",
      "desc": "Fertige ein kleines Nähprodukt wie Beutel, Serviette oder Tasche."
    },
    "Use Greywater-Safe Soap": {
      "title": "Grauwasser-sichere Seife verwenden",
      "desc": "Wähle eine Seife, die für Grauwasser-Nutzung sicher ist."
    },
    "Reuse Rinse Water on a Plant Bed": {
      "title": "Spülwasser auf einem Pflanzbeet wiederverwenden",
      "desc": "Trage Spülwasser zu einer Mulchmulde oder einem Pflanzbeet."
    },
    "Mulch a Willow Basin": {
      "title": "Ein Weidenbecken mulchen",
      "desc": "Bringe Mulch um einen Weiden- oder Pappelbereich auf."
    },
    "Plant a Willow or Poplar Cutting": {
      "title": "Ein Weiden- oder Pappelsteckling pflanzen",
      "desc": "Ziehe einen Steckling für künftige Grauwasser-Nutzung."
    },
    "Hammer and Bend a Metal Hook": {
      "title": "Einen Metallhaken schmieden und biegen",
      "desc": "Forme einen einfachen Haken aus Flach- oder Rundmaterial."
    },
    "File and Smooth a Metal Edge": {
      "title": "Eine Metallkante feilen und glätten",
      "desc": "Nutze eine Feile, um ein Metallteil zu vollenden und zu glätten."
    },
    "Cut Simple Stock with a Hacksaw": {
      "title": "Einfaches Material mit einer Metallsäge schneiden",
      "desc": "Schneide Metall sicher mit Handwerkzeugen."
    },
    "Make a Small Bracket or Hanger": {
      "title": "Eine kleine Halterung oder Aufhängung machen",
      "desc": "Fertige eine nützliche Halterung oder Aufhängung aus Metall."
    },
    "Replace a Faucet Washer": {
      "title": "Einen Wasserhahn-Dichtring ersetzen",
      "desc": "Behebe ein Tropfen durch Austausch der Hahn-Dichtung."
    },
    "Unclog a Drain": {
      "title": "Einen Abfluss frei machen",
      "desc": "Reinige einen Waschbecken- oder Duschabfluss mit einfachem Werkzeug."
    },
    "Fix a Dripping Hose Connection": {
      "title": "Eine tropfende Schlauchverbindung reparieren",
      "desc": "Behebe ein Leck an einem Schlauch oder Außenwasseranschluss."
    },
    "Insulate a Hot Water Pipe": {
      "title": "Ein Warmwasserrohr isolieren",
      "desc": "Ummantle ein Warmwasserrohr oder -leitung zur Wärmespeicherung."
    },
    "Build a Battery and Bulb Circuit": {
      "title": "Einen Batterie- und Lampenkreis bauen",
      "desc": "Baue einen einfachen funktionierenden Stromkreis mit Batterie und Licht."
    },
    "Replace a Lightbulb Safely": {
      "title": "Eine Glühbirne sicher wechseln",
      "desc": "Wechsle eine Glühbirne und prüfe, ob die Leuchte funktioniert."
    },
    "Organize and Label Cords": {
      "title": "Kabel sortieren und beschriften",
      "desc": "Sortiere Kabel und beschrifte sie für sichere Nutzung."
    },
    "Test a Battery and Read Voltage": {
      "title": "Eine Batterie testen und Spannung lesen",
      "desc": "Messe oder vergleiche Batteriespannung und notiere das Ergebnis."
    },
    "Sell or Trade Something Homemade": {
      "title": "Etwas Selbstgemachtes verkaufen oder tauschen",
      "desc": "Fertige etwas und tausche oder verkaufe es an jemand anderen."
    },
    "Track a Simple Budget": {
      "title": "Ein einfaches Budget verfolgen",
      "desc": "Schreibe eine Woche lang Einnahmen und Ausgaben auf."
    },
    "Offer a Service and Track the Earnings": {
      "title": "Eine Dienstleistung anbieten und Einnahmen verfolgen",
      "desc": "Erledige einen bezahlten oder getauschten Job und notiere, was du verdient hast."
    },
    "Create a Mini Online Listing": {
      "title": "Eine Mini-Onlinerstellung erstellen",
      "desc": "Schreibe eine einfache Anzeige für etwas, das du gemacht hast oder anbietest."
    },
    "Meet a Foreign Currency": {
      "title": "Eine Fremdwährung kennenlernen",
      "desc": "Entdecke eine Währung, ihr Symbol und die Länder, die sie nutzen."
    },
    "Run a Family Currency Exchange": {
      "title": "Einen Familien-Währungswechsel durchführen",
      "desc": "Tausche etwas Spielgeld zwischen zwei Währungen und findet zusammen den Gesamtwert."
    },
    "Start a Paper-Trading Journal": {
      "title": "Ein Papierhandels-Journal beginnen",
      "desc": "Schreibe einen simulierten Handel auf: Erwartung gegen tatsächliches Ergebnis."
    },
    "Compare Buying Power": {
      "title": "Kaufkraft vergleichen",
      "desc": "Frage, was ein gängiges Produkt in Dollar, Euro und Franken kostet."
    },
    "Save Toward a Tiny Goal": {
      "title": "Auf ein kleines Ziel hin sparen",
      "desc": "Lege einen Monat lang etwas Taschengeld für ein kleines Ziel zurück und verfolge es."
    },
    "Track Exchange Rates for a Week": {
      "title": "Eine Woche Wechselkurse verfolgen",
      "desc": "Beobachte ein Währungspaar eine Woche lang und notiere auf, ab oder seitwärts."
    },
    "Run a Simulated Trade": {
      "title": "Einen simulierten Handel ausführen",
      "desc": "Nutze einen kostenlosen Simulator: platziere einen Papierhandel mit Stop-Loss und protokolliere das Ergebnis."
    },
    "Plan a Get-Off-the-Dollar Experiment": {
      "title": "Ein Los-vom-Dollar-Experiment planen",
      "desc": "Entwirf eine kleine Möglichkeit, wie deine Familie Wert jenseits des Dollars tauschen könnte."
    },
    "Host the Family Forex Game Night": {
      "title": "Einen Familien-Devisen-Spieleabend veranstalten",
      "desc": "Bringe die Familie zu einem kostenlosen Simulator und veranstalte einen Missionsabend."
    },
    "Present a Family Financial Freedom Plan": {
      "title": "Einen Familien-Finanzfreiheitsplan vorstellen",
      "desc": "Stelle den Familienplan für Sparen, Tauschen und Wachsen auf eure Weise vor."
    },
    "Run a Simulated Season": {
      "title": "Eine simulierte Saison durchführen",
      "desc": "Verfolge eine Saison lang ein Multi-Währungs-Spieldepot und protokolliere jede Entscheidung."
    },
    "Keep the Golden Rule Alive": {
      "title": "Die goldene Regel lebendig halten",
      "desc": "Bringe einem Freund oder Geschwister bei: zuerst Geld schützen, dann lernen, dann handeln."
    },
    "Identify 5 Medicinal Herbs": {
      "title": "5 Heilkräuter bestimmen",
      "desc": "Lerne, fünf Heilkräuter oder verbreitete Heilpflanzen zu erkennen."
    },
    "Make a Simple Herbal Tea": {
      "title": "Einen einfachen Kräutertee zubereiten",
      "desc": "Trockne oder brühe ein sicheres Kraut als Tee."
    },
    "Prepare a Salve or Balm": {
      "title": "Eine Salbe oder Balsam zubereiten",
      "desc": "Stelle eine einfache Salbe, einen Balsam oder eine Lotionstafel her."
    },
    "Assemble a Family First Aid Herb Card": {
      "title": "Eine Familien-Erste-Hilfe-Kräuterkarte zusammenstellen",
      "desc": "Schreibe einige Kräuter auf und wofür sie verwendet werden."
    },
    "Wash Dishes Without a Dishwasher": {
      "title": "Geschirr ohne Spülmaschine waschen",
      "desc": "Wasche Geschirr von Hand und räume es sauber weg."
    },
    "Clean an Oily Dish Without Soap": {
      "title": "Ein fettiges Geschirr ohne Seife reinigen",
      "desc": "Entferne Fett von einem Geschirr mit einer chemiearmen Methode."
    },
    "Do Laundry by Hand": {
      "title": "Wäsche von Hand waschen",
      "desc": "Wasche Kleidung ohne Maschine."
    },
    "Make Rags from Old Clothes": {
      "title": "Lappen aus alter Kleidung machen",
      "desc": "Verwandle getragene Kleidung in nützliche Putzlappen."
    },
    "Test Smoke and CO Alarms": {
      "title": "Rauch- und CO-Melder testen",
      "desc": "Prüfe Heimrauchmelder und tausche bei Bedarf Batterien."
    },
    "Practice with a Fire Extinguisher": {
      "title": "Mit einem Feuerlöscher üben",
      "desc": "Lerne, einen Feuerlöscher sicher zu verwenden."
    },
    "Clean Gutters Safely": {
      "title": "Dachrinnen sicher reinigen",
      "desc": "Entferne Laub und Schmutz aus Dachrinnen oder Fallrohren."
    },
    "Make an Emergency Supplies Checklist": {
      "title": "Eine Notfall-Vorratsliste erstellen",
      "desc": "Schreibe eine Familienliste mit Notvorräten."
    },
    "Build a Whimsical Invention from Scrap": {
      "title": "Eine skurrile Erfindung aus Schrott bauen",
      "desc": "Baue etwas Seltsames, Nützliches oder Lustiges aus Restmaterial."
    },
    "Create a Secret Family Trail Marker": {
      "title": "Ein geheimes Familien-Wegzeichen erschaffen",
      "desc": "Entwirf ein verstecktes Zeichen oder einen Code für einen lokalen Weg."
    },
    "Make Music from Found Objects": {
      "title": "Musik aus gefundenen Objekten machen",
      "desc": "Erstelle ein einfaches Instrument oder Klangobjekt aus Müll oder Resten."
    },
    "Design a Zero-Budget Game or Challenge": {
      "title": "Ein Null-Budget-Spiel oder eine Challenge entwerfen",
      "desc": "Erfinde ein Spiel, Puzzle oder eine Familien-Challenge ohne Budget."
    },
    "Five Animal Exercises": {
      "title": "Fünf-Tiere-Übungen",
      "desc": "Praktiziere die Fünf-Tiere-Übungen als Bewegungsroutine."
    },
    "Eight Brocade Pieces": {
      "title": "Acht-Brocate-Übungen",
      "desc": "Führe die Acht Brocate als sanfte Übungsreihe aus."
    },
    "Twelve Zodiac Watches": {
      "title": "Zwölf-Zodiac-Wachen",
      "desc": "Praktiziere die Bewegungsreihe der Zwölf-Zodiac-Wachen."
    },
    "Deer and Crane Exercises": {
      "title": "Hirsch- und Kranich-Übungen",
      "desc": "Mache Hirsch- und Kranich-Übungen für Gleichgewicht und Koordination."
    },
    "Cook for a Group": {
      "title": "Für eine Gruppe kochen",
      "desc": "Bereite Essen für eine Gruppe zu und räume danach auf."
    },
    "Host a Workshop": {
      "title": "Einen Workshop geben",
      "desc": "Unterrichte eine einfache Klasse oder einen Fähigkeiten-Austausch."
    },
    "Build the Wasserwirbler": {
      "title": "Den Wasserwirbler bauen",
      "desc": "Baue einen hyperbolischen Trichter mit Gewindeauslass; gieße Wasser hindurch, damit es zentripetal wirbelt. Führe die Blindtests für Temperatur und Geschmack aus Dossier 001 durch. Notiere alle Zahlen und Fotos."
    },
    "Build the Eeman Circuit": {
      "title": "Den Eeman-Kreis bauen",
      "desc": "Wickle eine sich selbst verbindende Kupferspule (ohne Strom). Führe den Blindtest Puls/Entspannung gegen eine Scheinspule aus Dossier 002 durch. Notiere die Zahlen."
    },
    "Build the Radiant Energy Receiver": {
      "title": "Den Strahlungsenergie-Empfänger bauen",
      "desc": "Montiere eine isolierte Metallplatte 3-5 m hoch an einem NICHT-metallischen Mast, verdrahte sie über einen Folienkondensator mit einem Erdungspfahl und miss die Spannung bei 0/5/10/15 Min über 5+ Sitzungen (Morgen/Mittag/Nacht, klar/bewölkt). Dann wickle die Platte als Kontrolle in geerdete Folie und wiederhole. BESTANDEN: Der Empfänger zeigt ≥10× die abgeschirmte Kontrolle in ≥4/5 Sitzungen. Bei Gewitter: immer zuerst die Antenne trennen und erden."
    }
    }
  }
};
