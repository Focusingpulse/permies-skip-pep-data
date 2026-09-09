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
  "quests": {}
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
    "quests": {}
  }
};
