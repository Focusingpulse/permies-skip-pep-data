# -*- coding: utf-8 -*-
"""Build translations.js for The Village.
Quest translations come from _es_quests.py (position-aligned to data.js);
UI/guilds/subjects/roles/tiers are authored inline below.
Add a language: create an *_xx.py module and a LANG block entry here.
"""
import json, re, importlib.util
from _es_quests import ES

# ---- parse data.js to get exact English order ----
s = open('data.js', encoding='utf-8').read()
s = s[s.index('['):]
s = s[:s.rfind(']') + 1]
s = re.sub(r'([\{,]\s*)([A-Za-z_]\w*)(\s*:)', r'\1"\2"\3', s)
s = re.sub(r"'([^']*)'", r'"\1"', s)
DATA = json.loads(s)

EN_TITLES = []
for g in DATA:
    for tier in ('sand', 'straw', 'wood', 'iron'):
        for q in g.get(tier, []):
            EN_TITLES.append(q[0])

assert len(ES) == len(EN_TITLES), f"length mismatch: ES={len(ES)} EN={len(EN_TITLES)}"
QUESTS = {t: {"title": es[0], "desc": es[1]} for t, es in zip(EN_TITLES, ES)}

SUBJECTS = {
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
    "Reading": "Lectura",
}

ROLES = {
    "Tracker": "Rastreador(a)",
    "Witness": "Testigo",
    "Hearth Tender": "Custodio del Fogón",
    "Hearth": "Fogón",
    "Mentor": "Mentor(a)",
    "Mentors": "Mentores",
    "Trackers": "Rastreadores",
    "Witnesses": "Testigos",
}

TIERS = {
    "Sand": "Arena",
    "Straw": "Paja",
    "Wood": "Madera",
    "Iron": "Hierro",
}

UI = {
    # nav
    "Setup": "Configuración",
    "Village": "Aldea",
    "Studio": "Estudio",
    "Quests": "Misiones",
    "Schoolhouse": "Escuela",
    "Library": "Biblioteca",
    "Mentor's Circle": "Círculo del Mentor",
    "Circle": "Círculo",
    "Commons": "Plaza",
    # title screen
    "WELCOME": "BIENVENIDOS",
    "The Village — A Roll Making Game (RMG) for families": "La Aldea — Un Juego de Formar Roles (RMG) para familias",
    "A real-life skill-building journey — not a digital game you play on a screen. Build real skills, grow real attributes, earn real badges in the real world.": "Un viaje real de desarrollo de habilidades — no un juego digital que se juega en pantalla. Construye habilidades reales, desarrolla atributos reales, gana insignias reales en el mundo real.",
    "Data.js not found or failed to load. Using fallback data.": "No se encontró data.js o falló al cargar. Usando datos de respaldo.",
    "▼ Scroll down ▼": "▼ Desliza hacia abajo ▼",
    # setup screen
    "School days already completed": "Días de escuela ya completados",
    "Total hours already logged": "Horas totales ya registradas",
    "Current curriculum (optional)": "Plan de estudios actual (opcional)",
    "Player Name": "Nombre del jugador",
    "Save & Enter Village": "Guardar y entrar a la Aldea",
    "Reset Village": "Reiniciar Aldea",
    "Reset": "Reiniciar",
    "8. Start Over / Reset": "8. Empezar de nuevo / Reiniciar",
    "Wipe all progress, quests, attendance, and player data from this browser and start fresh. Cannot be undone.": "Borra todo el progreso, las misiones, la asistencia y los datos de jugadores de este navegador y empieza de cero. No se puede deshacer.",
    # village
    "Your Family Guild": "El Gremio de tu Familia",
    "Click a character to open the Avatar Studio": "Toca un personaje para abrir el Estudio del Avatar",
    "Save Village (Download File)": "Guardar Aldea (Descargar archivo)",
    "Load Saved Village": "Cargar Aldea guardada",
    "Start Questing": "Empezar Aventura",
    # studio
    "Avatar Studio": "Estudio del Avatar",
    "Class": "Clase",
    "Face": "Rostro",
    "Hair": "Cabello",
    "Outfit": "Vestimenta",
    "Gear": "Equipo",
    "Background": "Fondo",
    "Wardrobe": "Vestuario",
    "Save & Exit to Village": "Guardar y salir a la Aldea",
    # quest board
    "The Quest Board": "El Tablero de Misiones",
    "All Quests": "Todas las misiones",
    "My Biome Only": "Solo mi bioma",
    "Badge Progression": "Progreso de Insignias",
    "Free Roam — all quests unlocked": "Modo Libre — todas las misiones desbloqueadas",
    "Adventure Mode — complete 50% of a tier within one guild to unlock the next": "Modo Aventura — completa el 50% de un nivel en un gremio para desbloquear el siguiente",
    "Official Permies PEP Quests": "Misiones Oficiales PEP de Permies",
    "Submit evidence to their forum for official certification.": "Envía tu evidencia a su foro para la certificación oficial.",
    "Holistic RPG Add-on Guilds": "Gremios Adicionales RPG Holístico",
    "Custom to The Village. Do not count toward official Permies PEP certification.": "Creados para La Aldea. No cuentan para la certificación oficial PEP de Permies.",
    "Guild": "Gremio",
    "No description available.": "Sin descripción disponible.",
    "complete": "completadas",
    "Locked": "Bloqueada",
    "Post to Permies": "Publicar en Permies",
    "Complete!": "¡Completada!",
    "Finalize": "Finalizar",
    "Learn More": "Aprender más",
    # roster
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
    # schoolhouse
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
    # library
    "The Village Library": "La Biblioteca de la Aldea",
    "A curated knowledge graph of free, public domain, and government resources for holistic homeschooling.": "Una colección curada de recursos gratuitos, de dominio público y gubernamentales para la educación en casa holística.",
    "Educational Philosophy & Nature Connection": "Filosofía Educativa y Conexión con la Naturaleza",
    "Colorado Homeschooling": "Educación en Casa en Colorado",
    "Permies & PEP Badges": "Insignias de Permies y PEP",
    "Curriculum by Subject": "Plan de estudios por Materia",
    "The Money Lab — Financial Literacy & Foreign Exchange": "El Laboratorio del Dinero — Cultura Financiera y Cambio de Divisas",
    # commons
    "The Village Commons": "La Plaza de la Aldea",
    "Family Achievements": "Logros Familiares",
    "Bridge to Permies": "Puente a Permies",
    "Post your evidence to the PEP Forum to get officially certified by Paul Wheaton's team.": "Publica tu evidencia en el Foro PEP para obtener la certificación oficial del equipo de Paul Wheaton.",
    "Official PEP quests (marked with the shield icon) count toward Permies certification. RPG Add-on quests (marked with the sparkle icon) are custom to The Village and do not count toward official PEP badges.": "Las misiones oficiales PEP (icono de escudo) cuentan para la certificación de Permies. Las misiones adicionales RPG (icono de chispa) son de La Aldea y no cuentan para las insignias oficiales de PEP.",
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
    # circle
    "The 64 cultural elements of deep nature connection — from Jon Young's 512 Project and the 8 Shields framework. These practices weave the invisible fabric of community that makes permaculture skills sustainable across generations.": "Los 64 elementos culturales de la conexión profunda con la naturaleza — del Proyecto 512 de Jon Young y el marco de los 8 Escudos. Estas prácticas tejen el tejido invisible de la comunidad que hace sostenibles las habilidades de permacultura a través de las generaciones.",
    # gold modal
    "Gold Nugget Earned!": "¡Pepita de Oro Ganada!",
    "You worked the entire Commerce guild — budgets, currency exchange, paper trading, even a family forex night. That's real financial skill, earned in the real world.": "Completaste todo el gremio de Comercio — presupuestos, cambio de divisas, operaciones de papel y hasta una noche familiar de forex. Eso es habilidad financiera real, ganada en el mundo real.",
    "The Gold Nugget is now part of your family's story. No real money was moved — only understanding.": "La Pepita de Oro ahora es parte de la historia de tu familia. No se movió dinero real — solo comprensión.",
    "Glow on ✨": "¡A brillar ✨",
    # otis / roster
    "Before": "Antes",
    "During": "Durante",
    "After": "Después",
    # tiers / misc
    "Tier": "Nivel",
    "Level": "Nivel",
    "Guild of": "Gremio de",
    "Gold Nugget": "Pepita de Oro",
    "The Village — A Roll Making Game (RMG)": "La Aldea — Un Juego de Formar Roles (RMG)",
    # money lab print sheets
    "Print All 15 Sheets": "🖨️ Imprimir las 15 hojas",
    "Print This Sheet": "🖨️ Imprimir esta hoja",
    "All 15 Sheets": "Las 15 hojas",
    # village hub
    "Family Progress": "Progreso Familiar",
    "quests completed": "misiones completadas",
    "Quests:": "Misiones:",
    "Wardrobe:": "Vestuario:",
    "items": "objetos",
    "earned": "ganada",
    "Reward:": "Premio:",
    # emoji-prefixed buttons (keys include the emoji, matching data-i18n)
    "💾 Save Village (Download File)": "💾 Guardar Aldea (Descargar archivo)",
    "📂 Load Saved Village": "📂 Cargar Aldea guardada",
    "🔄 Reset": "🔄 Reiniciar",
}

GUILDS = {
    "Gardening": ("Jardinería", "Cultiva alimentos, guarda semillas y construye sistemas de jardín resistentes."),
    "Natural Building": ("Construcción Natural", "Usa arcilla, paja, madera y piedra para construir refugios y acabados saludables."),
    "Woodland Care": ("Cuidado del Bosque", "Cuida bosques, leña, cercas, hongos y sistemas de madera viva."),
    "Round Wood Woodworking": ("Carpintería de Madera Redonda", "Construye cosas útiles con troncos, palos y ramas con poco pegamento y metal."),
    "Tool Care": ("Cuidado de Herramientas", "Mantén las herramientas afiladas, limpias, aceitadas y reparadas para que duren más."),
    "Earthworks": ("Movimiento de Tierras", "Da forma al terreno para mover agua, reducir la erosión y hacer caminos que perduran."),
    "Dimensional Lumber Woodworking": ("Carpintería de Madera Aserrada", "Usa madera recta y uniones fuertes para hacer muebles y estructuras prácticas."),
    "Rocket": ("Estufa Cohete", "Construye aparatos de leña que ahorran combustible y usan el calor con gran eficiencia."),
    "Food Prep": ("Preparación de Alimentos", "Conserva, cocina y disfruta los alimentos de forma segura y deliciosa."),
    "Animal Care": ("Cuidado de Animales", "Cuida de los animales domésticos y de granja con respeto y abundancia."),
    "Foraging": ("Recolección Silvestre", "Aprende a encontrar, identificar y recolectar plantas silvestres comestibles con seguridad."),
    "Community Living": ("Vida en Comunidad", "Practica habilidades sociales, de servicio y de eventos que ayudan a los grupos a prosperar."),
    "Textiles": ("Textiles", "Haz, repara y usa tela, hilo y fibra natural para cosas útiles y hermosas."),
    "Greywater and Willow Feeders": ("Aguas Grises y Cultivo de Sauces", "Maneja el agua gris y cultiva sauces para jardines y paisajes productivos."),
    "Metalworking": ("Trabajo en Metal", "Martilla, lima, suelda y une metal para herramientas y estructuras."),
    "Plumbing and Hot Water": ("Plomería y Agua Caliente", "Repara fugas, desagües y sistemas de agua y calor de tu casa."),
    "Electricity": ("Electricidad", "Aprende lo básico de CA y CC, baterías, circuitos y sistemas solares con seguridad."),
    "Commerce": ("Comercio", "Gana dinero, intercambia valor, lleva registros y aprende cómo se mueven las divisas — desde el cambio de bolsillo hasta la bóveda de la Pepita de Oro."),
    "Natural Medicine": ("Medicina Natural", "Aprende formas seguras y prácticas de identificar y usar plantas curativas."),
    "Nest": ("Nido", "Mantén la casa limpia, ordenada y cómoda para la vida familiar diaria."),
    "Homesteading": ("Autosuficiencia", "Maneja habilidades prácticas que mantienen una casa y una familia listas para emergencias reales."),
    "Oddball": ("Curiosidades", "Reúne experiencias de vida extrañas, creativas y deliciosamente inesperadas."),
    "Vitality": ("Vitalidad", "Construye vitalidad física con movimiento, ritmo y conciencia corporal."),
    "Community": ("Comunidad", "Practica habilidades sociales, de servicio y de eventos que ayudan a los grupos a prosperar."),
}

GUILD_DICT = {k: {"name": v[0], "desc": v[1]} for k, v in GUILDS.items()}

data = {
    "name": "Español",
    "ui": UI,
    "subjects": SUBJECTS,
    "roles": ROLES,
    "tiers": TIERS,
    "guilds": GUILD_DICT,
    "quests": QUESTS,
}

out = "/* The Village — i18n module.\n * Add a language by adding a block under LANG (copy the es block, translate, change the key).\n * Quest keys are the English titles; values are {title, desc}.\n */\n"
out += "const LANG = {\n  \"es\": " + json.dumps(data, ensure_ascii=False, indent=2) + "\n};\n"
with open('translations.js', 'w', encoding='utf-8') as f:
    f.write(out)

print("OK translations.js:", len(QUESTS), "quests,", len(GUILD_DICT), "guilds,", len(UI), "ui keys")
# sanity: every quest in data has a translation
missing = [t for t in EN_TITLES if t not in QUESTS]
print("missing quest keys:", missing if missing else "none")