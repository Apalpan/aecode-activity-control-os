export type Confidence = "Alta" | "Media" | "Baja" | "Asumida";

export type PersonIdentity = {
  name: string;
  confidence: Confidence;
  rationale: string;
};

export type TeamMember = {
  name: string;
  role: string;
  squad: string;
  company: string;
  confidence: Confidence;
  focus: string;
  projects: string[];
  activities: string[];
  communicatesWith: string[];
  owns: string[];
  source: string;
};

export const personIdentityMap: Record<string, PersonIdentity> = {
  "Persona 1": { name: "Persona 1", confidence: "Alta", rationale: "Accesos, soporte, plataforma, certificados y contenido." },
  "Persona 2": { name: "Persona 2", confidence: "Media", rationale: "Registro academico, datos y seguimiento de programas." },
  "Persona 3": { name: "Persona 3", confidence: "Media", rationale: "Coordinacion academica, calendario, Zoom y alertas." },
  "Persona 4": { name: "Persona 4", confidence: "Media", rationale: "Pipeline de contenido academico y plataforma." },
  "Persona 5": { name: "Persona 5", confidence: "Media", rationale: "Contenido, videos, YouTube y piezas publicables." },
  "Persona 6": { name: "Persona 6", confidence: "Media", rationale: "Comunidad, grupos, recordatorios y soporte de sesiones." },
  "Persona 7": { name: "Persona 7", confidence: "Media", rationale: "Calidad academica, embajadores, evidencias y cierre." },
  "Persona 8": { name: "Persona 8", confidence: "Media", rationale: "Difusion, comunidad y fuentes de marketing." },
  "Persona 9": { name: "Persona 9", confidence: "Media", rationale: "QA visual de certificados y consistencia grafica." },
  "Persona 10": { name: "Persona 10", confidence: "Alta", rationale: "Direccion operativa, prioridades y decisiones." },
  "Persona 11": { name: "Persona 11", confidence: "Media", rationale: "Automatizacion y mejora de procesos." },
  "Persona 12": { name: "Persona 12", confidence: "Alta", rationale: "Paid growth, GHL, metricas y campanas." },
  "Persona 13": { name: "Persona 13", confidence: "Media", rationale: "Piezas de campana, copies y assets." },
  "Persona 14": { name: "Persona 14", confidence: "Alta", rationale: "Eventos, Summit, agenda y sponsors." },
  "Persona 15": { name: "Persona 15", confidence: "Alta", rationale: "Web, difusion organica, brochures y Drive." },
  "Persona 16": { name: "Persona 16", confidence: "Alta", rationale: "UX/UI, branding, web experience y handoff." },
  "Persona 17": { name: "Persona 17", confidence: "Media", rationale: "Video, clips, shorts y assets audiovisuales." },
  "Persona 18": { name: "Persona 18", confidence: "Media", rationale: "Feedback comercial y calidad de leads." },
  "Persona 19": { name: "Persona 19", confidence: "Media", rationale: "Asesoria comercial y pipeline." },
  "Persona 20": { name: "Persona 20", confidence: "Media", rationale: "Producto, rutas, Skill Graph y Skill Passport." },
  "Persona 21": { name: "Persona 21", confidence: "Alta", rationale: "Finanzas, pagos y documentacion." },
  "Persona 22": { name: "Persona 22", confidence: "Media", rationale: "Datos, BI, dashboards y gobernanza." },
  "Persona 23": { name: "Persona 23", confidence: "Alta", rationale: "Arquitectura, backend, frontend, infra e IA." },
  "Persona 24": { name: "Persona 24", confidence: "Alta", rationale: "Activos BIM academicos y soporte tecnico BIM." },
  "Persona 25": { name: "Persona 25", confidence: "Media", rationale: "Alianzas, sponsors, interesados y convenios." },
  "Persona 26": { name: "Persona 26", confidence: "Alta", rationale: "QA, testing, bugs y validacion de data." },
  "Persona 27": { name: "Persona 27", confidence: "Alta", rationale: "AI automation, n8n, agentes, dashboards, data, deploy y capacitacion IA." },
  "Persona 28": { name: "Persona 28", confidence: "Alta", rationale: "Programas activos, Summit, postventa, marketing, B2B y HTML." }
};

export const resolvePersonName = (id: string) => personIdentityMap[id]?.name ?? id;

export const aecodeTeamMembers: TeamMember[] = [
  {
    name: "Persona 10",
    role: "Direccion operativa",
    squad: "Direccion",
    company: "AECODE",
    confidence: "Alta",
    focus: "Prioridades, decisiones, riesgos, sistema operativo y alineacion producto-negocio.",
    projects: ["AECODE OS", "Skill Passport", "Summit", "Growth"],
    activities: ["Definir prioridades", "Resolver bloqueos", "Aprobar cambios criticos", "Alinear producto y negocio"],
    communicatesWith: ["Persona 3", "Persona 12", "Persona 20", "Persona 23", "Persona 28"],
    owns: ["Direccion", "Prioridades", "Riesgos", "Decision"],
    source: "Obsidian / sistema operativo"
  },
  {
    name: "Persona 1",
    role: "Accesos + soporte postventa",
    squad: "Operacion academica",
    company: "AECODE",
    confidence: "Alta",
    focus: "Accesos, soporte, plataforma, certificados y consultas operativas.",
    projects: ["Training", "Diplomados", "Certificados"],
    activities: ["Resolver tickets", "Habilitar accesos", "Escalar bloqueos", "Trazar certificados"],
    communicatesWith: ["Persona 2", "Persona 3", "Persona 6", "Persona 28"],
    owns: ["Soporte", "Accesos", "Certificados"],
    source: "Sheet academico / actividades pegadas"
  },
  {
    name: "Persona 2",
    role: "Registro academico + datos",
    squad: "Operacion academica",
    company: "AECODE",
    confidence: "Media",
    focus: "Registro de inscritos, estudiantes, GHT/GHL academico y fuentes maestras.",
    projects: ["Training", "Registro unico", "Data quality"],
    activities: ["Actualizar registros", "Limpiar duplicados", "Sincronizar fuentes", "Reportar inconsistencias"],
    communicatesWith: ["Persona 1", "Persona 3", "Persona 22"],
    owns: ["Registro", "Datos academicos", "Fuentes"],
    source: "Sheet academico"
  },
  {
    name: "Persona 3",
    role: "Coordinacion academica",
    squad: "Operacion academica",
    company: "AECODE",
    confidence: "Media",
    focus: "Calendario, Zoom, docentes, sesiones y preparacion academica.",
    projects: ["Training", "Diplomados", "Sesiones en vivo"],
    activities: ["Crear Zoom", "Coordinar horarios", "Confirmar docentes", "Preparar sesiones"],
    communicatesWith: ["Persona 1", "Persona 7", "Persona 20", "Persona 28"],
    owns: ["Sesiones", "Calendario", "Zoom"],
    source: "Proceso coordinacion academica"
  },
  {
    name: "Persona 12",
    role: "Paid growth + GHL",
    squad: "Marketing",
    company: "AECODE",
    confidence: "Alta",
    focus: "Campanas, GHL, CPL, calidad de lead, revision de ventas y optimizacion de mensajes.",
    projects: ["Growth", "Campanas", "GHL"],
    activities: ["Revisar GHL", "Analizar CPL", "Ajustar campanas", "Cruzar feedback de ventas"],
    communicatesWith: ["Persona 18", "Persona 19", "Persona 25", "Persona 28"],
    owns: ["Ads", "GHL", "Lead quality"],
    source: "Panel marketing / instruccion usuario"
  },
  {
    name: "Persona 14",
    role: "Eventos + Summit",
    squad: "Eventos",
    company: "AECODE",
    confidence: "Alta",
    focus: "Agenda, ponentes, sponsors, tareas de evento y seguimiento post-evento.",
    projects: ["Summit", "Webinars", "Eventos"],
    activities: ["Coordinar agenda", "Gestionar sponsors", "Alinear piezas", "Cerrar follow-up"],
    communicatesWith: ["Persona 25", "Persona 28", "Persona 12"],
    owns: ["Eventos", "Summit", "Sponsors"],
    source: "Panel marketing / eventos"
  },
  {
    name: "Persona 16",
    role: "UX/UI + branding",
    squad: "Producto / Web",
    company: "AECODE",
    confidence: "Alta",
    focus: "Investigacion UX, flujos, interfaces, branding, formularios y handoff con desarrollo.",
    projects: ["AECODE OS", "Web", "Producto digital"],
    activities: ["Investigar UX", "Definir flujos", "Disenar UI", "Coordinar handoff"],
    communicatesWith: ["Persona 13", "Persona 15", "Persona 20", "Persona 23"],
    owns: ["UX/UI", "Branding", "Handoff"],
    source: "Actividad enviada por UX/UI"
  },
  {
    name: "Persona 23",
    role: "Product engineering + arquitectura",
    squad: "Tecnologia",
    company: "AECODE / GEN+",
    confidence: "Alta",
    focus: "Arquitectura, backend, frontend, infra, IA, seguridad y delivery end-to-end.",
    projects: ["Plataforma", "Dashboards", "Automatizacion", "Infra"],
    activities: ["Definir arquitectura", "Construir APIs", "Desplegar producto", "Auditar seguridad"],
    communicatesWith: ["Persona 20", "Persona 22", "Persona 26", "Persona 27"],
    owns: ["Arquitectura", "Backend", "Frontend", "Infra"],
    source: "Actividad enviada por equipo tecnico"
  },
  {
    name: "Persona 25",
    role: "Partnerships + outreach",
    squad: "Alianzas",
    company: "AECODE",
    confidence: "Media",
    focus: "Interesados, empresas, llamadas, reuniones, grupos, convenios y seguimiento de aliados.",
    projects: ["Sponsors", "B2B", "Eventos"],
    activities: ["Clasificar empresas", "Agendar reuniones", "Revisar convenios", "Crear grupos"],
    communicatesWith: ["Persona 14", "Persona 18", "Persona 21", "Persona 28"],
    owns: ["Alianzas", "Convenios", "Reuniones"],
    source: "Actividad enviada por partnerships"
  },
  {
    name: "Persona 26",
    role: "QA + data validation",
    squad: "Tecnologia / Producto",
    company: "AECODE",
    confidence: "Alta",
    focus: "E2E, UX QA, carga, pruebas automatizadas, validacion de bugs y data.",
    projects: ["Releases", "Data quality", "Plataforma"],
    activities: ["Validar E2E", "Probar carga", "Revisar bugs", "Actualizar data"],
    communicatesWith: ["Persona 22", "Persona 23", "Persona 27"],
    owns: ["QA", "Testing", "Data validation"],
    source: "Actividad enviada por QA/testing"
  },
  {
    name: "Persona 27",
    role: "AI automation + data product engineer",
    squad: "AI Ops / Tecnologia",
    company: "AECODE / GEN+",
    confidence: "Alta",
    focus: "n8n, integraciones, agentes IA, dashboards, data, ML, deploy, specs y capacitacion IA.",
    projects: ["AI Ops", "AECODITOS", "Dashboards", "Automatizacion"],
    activities: ["Desplegar n8n", "Operar agentes", "Construir dashboards", "Documentar specs"],
    communicatesWith: ["Persona 11", "Persona 22", "Persona 23", "Persona 26", "Persona 28"],
    owns: ["Automatizacion", "Agentes IA", "Data apps", "Deploy"],
    source: "PDF actividades tecnologia/automatizacion"
  },
  {
    name: "Persona 28",
    role: "Training programs + Summit coordination",
    squad: "Programas / Eventos",
    company: "AECODE",
    confidence: "Alta",
    focus: "Programas activos, actas, Notion, docentes, postventa, sponsors, ponentes, marketing, B2B y HTML.",
    projects: ["Programas activos", "Summit", "B2B", "Comunicaciones"],
    activities: ["Actualizar programas", "Cerrar actas", "Coordinar ponentes", "Gestionar sponsors"],
    communicatesWith: ["Persona 1", "Persona 3", "Persona 12", "Persona 14", "Persona 25", "Persona 27"],
    owns: ["Programas", "Actas", "Summit", "HTML"],
    source: "Actividad enviada por programas/Summit"
  }
];
