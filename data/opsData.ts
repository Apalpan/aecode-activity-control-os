export type Priority = "Critica" | "Alta" | "Media" | "Baja";
export type AutomationLevel = "Alta" | "Media" | "Baja";
export type ActivityStatus = "Activo" | "Pendiente" | "Riesgo" | "Listo";

export type Activity = {
  id: string;
  area: string;
  activity: string;
  owner: string;
  backup: string;
  agent: string;
  automationLevel: AutomationLevel;
  sla: string;
  evidence: string;
  status: ActivityStatus;
  priority: Priority;
  source: string;
  risk: string;
  nextAction: string;
};

export type Agent = {
  id: string;
  mission: string;
  input: string;
  output: string;
  humanControl: string;
  status: "Propuesto" | "Piloto" | "Listo";
  impact: "Alto" | "Medio" | "Bajo";
};

export type ProgramStatus = {
  id: string;
  label: string;
  type: "Diplomado" | "Especializacion" | "Curso";
  state: "Finalizado" | "En proceso" | "Por iniciar";
  platform: "SI" | "EN PROCESO";
  classroom: "SI" | "EN PROCESO";
  miro: "SI" | "POR COMPLETAR" | "NO APLICA" | "EN PROCESO";
  zoom: "SI" | "POR COMPLETAR" | "EN PROCESO";
  wsp: "SI" | "NO";
  absenceForm: "Listo" | "Por definir" | "Urgente" | "No existe";
  ambassador: "Asignado" | "Por definir" | "Sin evidencia";
  risk: string;
};

export type ContentMetric = {
  label: string;
  value: number;
  target: number;
  context: string;
};

export type LinkAsset = {
  id: string;
  category: "Google Sheet" | "Miro" | "Notion" | "Drive" | "YouTube" | "Zoom" | "Web";
  domain: string;
  assetLabel: string;
  owner: string;
  agent: string;
  relatedArea: string;
  privacy: "Publico" | "Interno" | "Critico";
  status: "Inventariado" | "Requiere revision" | "Listo para conectar";
  infoInside: string;
  operationalUse: string;
  risk: string;
  nextAction: string;
  secureReference: string;
};

export type OpsRole = {
  id: string;
  role: string;
  mission: string;
  areas: string[];
  primaryActivities: string[];
  kpis: string[];
  dailyCheck: string;
  escalation: string;
  backup: string;
  obsidianSource: string;
};

export type WorkflowStage = {
  id: string;
  label: string;
  timing: string;
  owner: string;
  objective: string;
  activities: string[];
  evidence: string;
  automation: string;
};

export type OpsSource = {
  label: string;
  path: string;
  use: string;
  privacy: "Publico" | "Interno" | "Critico";
};

export type AecodeDomain = {
  id: string;
  domain: string;
  mission: string;
  lead: string;
  supportingRoles: string[];
  responsibilities: string[];
  kpis: string[];
  cadences: string[];
  risks: string[];
  automation: string;
};

export type MarketingProcess = {
  id: string;
  title: string;
  objective: string;
  lead: string;
  stages: string[];
  evidence: string;
  automation: string;
};

export type CultureCluster = {
  id: string;
  cluster: string;
  principle: string;
  habits: string[];
  operatingRule: string;
  evidence: string;
  metric: string;
};

export type CultureRitual = {
  ritual: string;
  frequency: string;
  format: string;
  channel: string;
  owner: string;
};

export const areas = [
  "Direccion",
  "Accesos y soporte",
  "Datos",
  "Sesiones",
  "Contenido",
  "Comunidad",
  "Embajadores",
  "Difusion",
  "Marketing",
  "Comercial",
  "Eventos",
  "Web",
  "Diseno",
  "Automatizacion",
  "Finanzas",
  "Producto",
  "Plataforma",
  "Certificados"
];

export const activities: Activity[] = [
  {
    id: "ACT-001",
    area: "Accesos y soporte",
    activity: "Acceso y consultas con Admin Morado",
    owner: "Persona 1",
    backup: "Persona 2",
    agent: "Agente #1",
    automationLevel: "Alta",
    sla: "5-30 min",
    evidence: "ticket/respuesta",
    status: "Activo",
    priority: "Critica",
    source: "Actividad pegada + Notion + Sheet soporte",
    risk: "Sin ticket se pierde trazabilidad y el soporte depende de memoria individual.",
    nextAction: "Convertir cada consulta en categoria, SLA, respuesta base y escalamiento."
  },
  {
    id: "ACT-002",
    area: "Accesos y soporte",
    activity: "Accesos a plataforma desde Panel AECODE",
    owner: "Persona 1",
    backup: "Persona 3",
    agent: "Agente #2",
    automationLevel: "Alta",
    sla: "24h",
    evidence: "acceso activo",
    status: "Activo",
    priority: "Critica",
    source: "Actividad pegada + matriz de accesos",
    risk: "Acceso tardio reduce activacion y genera reclamos tempranos.",
    nextAction: "Usar cola diaria de altas con estado: pendiente, activo, observado, bloqueado."
  },
  {
    id: "ACT-003",
    area: "Datos",
    activity: "Mantener actualizado el registro de inscritos y estudiantes",
    owner: "Persona 2",
    backup: "Persona 1",
    agent: "Agente #7",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "row actualizado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + arquitectura operativa",
    risk: "Sin registro unico, accesos, certificados, pagos y soporte se contradicen.",
    nextAction: "Normalizar por user_id, course_id, cohort_id y source_channel."
  },
  {
    id: "ACT-004",
    area: "Sesiones",
    activity: "Crear y configurar Zoom de los cursos",
    owner: "Persona 3",
    backup: "Persona 6",
    agent: "Agente #3",
    automationLevel: "Media",
    sla: "72h antes",
    evidence: "zoom creado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + matriz de accesos",
    risk: "Conflicto de cuenta o link no comunicado bloquea sesion.",
    nextAction: "Crear control por cuenta, horario, curso, link y conflicto."
  },
  {
    id: "ACT-005",
    area: "Contenido",
    activity: "Subir grabaciones: Drive -> Vimeo -> Plataforma AECODE",
    owner: "Persona 4",
    backup: "Persona 1",
    agent: "Agente #4",
    automationLevel: "Alta",
    sla: "24h post sesion",
    evidence: "video publicado",
    status: "Riesgo",
    priority: "Critica",
    source: "Actividad pegada + Sheet videos",
    risk: "El contenido queda disperso y aumenta consultas de alumnos.",
    nextAction: "Crear pipeline con estados: Drive, edicion, Vimeo, plataforma, comunicado."
  },
  {
    id: "ACT-006",
    area: "Contenido",
    activity: "Editar videos de cursos antes de subir a plataforma",
    owner: "Persona 4",
    backup: "Persona 5",
    agent: "Agente #4",
    automationLevel: "Media",
    sla: "48h post sesion",
    evidence: "video editado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + checklist embajador",
    risk: "Videos largos o sin recorte bajan consumo y aumentan friccion.",
    nextAction: "Definir criterio minimo: corte inicial/final, marca, titulo, modulo y version."
  },
  {
    id: "ACT-007",
    area: "Difusion",
    activity: "Editar videos para canal de YouTube",
    owner: "Persona 5",
    backup: "Persona 8",
    agent: "Agente #10",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "video/short listo",
    status: "Pendiente",
    priority: "Media",
    source: "Actividad pegada",
    risk: "El contenido academico no se convierte en activo de marketing.",
    nextAction: "Separar videos de soporte interno y videos publicables."
  },
  {
    id: "ACT-008",
    area: "Difusion",
    activity: "Subir videos a YouTube",
    owner: "Persona 5",
    backup: "Persona 8",
    agent: "Agente #10",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "publicacion",
    status: "Pendiente",
    priority: "Media",
    source: "Actividad pegada",
    risk: "No hay trazabilidad entre sesion, clip, publicacion y resultado.",
    nextAction: "Crear calendario de piezas por curso/evento con CTA."
  },
  {
    id: "ACT-009",
    area: "Sesiones",
    activity: "Enviar recordatorio de clase o validar que embajador lo haga",
    owner: "Persona 6",
    backup: "Persona 7",
    agent: "Agente #5",
    automationLevel: "Alta",
    sla: "Antes 4pm",
    evidence: "mensaje enviado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + checklist embajador",
    risk: "Baja asistencia si el recordatorio depende de memoria manual.",
    nextAction: "Automatizar recordatorio con confirmacion de envio y alerta si falta."
  },
  {
    id: "ACT-010",
    area: "Comunidad",
    activity: "Crear grupos WSP de estudiantes por diplomado, curso y especializacion",
    owner: "Persona 6",
    backup: "Persona 1",
    agent: "Agente #6",
    automationLevel: "Media",
    sla: "Antes del inicio",
    evidence: "grupo creado",
    status: "Riesgo",
    priority: "Alta",
    source: "Actividad pegada + BD grupos",
    risk: "Hay programas con grupo o formulario por definir.",
    nextAction: "Controlar por programa: coordinacion, participantes, instructor y egresados."
  },
  {
    id: "ACT-011",
    area: "Embajadores",
    activity: "Acordar quien sera el embajador del curso",
    owner: "Persona 7",
    backup: "Persona 3",
    agent: "Agente #9",
    automationLevel: "Baja",
    sla: "Antes del inicio",
    evidence: "embajador asignado",
    status: "Riesgo",
    priority: "Alta",
    source: "Actividad pegada + matriz de accesos",
    risk: "Cursos activos con embajador por definir pierden seguimiento.",
    nextAction: "Definir embajador por course_id antes de abrir grupo."
  },
  {
    id: "ACT-012",
    area: "Embajadores",
    activity: "Induccion al embajador con funciones y video",
    owner: "Persona 7",
    backup: "Persona 6",
    agent: "Agente #9",
    automationLevel: "Media",
    sla: "Antes del inicio",
    evidence: "induccion registrada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + checklist embajador",
    risk: "Sin induccion, el embajador no solicita agenda, recursos ni reporta riesgos.",
    nextAction: "Crear checklist de induccion con firma digital o check de completado."
  },
  {
    id: "ACT-013",
    area: "Difusion",
    activity: "Difusion previa por grupos WhatsApp",
    owner: "Persona 8",
    backup: "Persona 5",
    agent: "Agente #10",
    automationLevel: "Alta",
    sla: "72h y 24h antes",
    evidence: "envio registrado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + BD difusion",
    risk: "Sin clasificacion de grupos se envia contenido irrelevante.",
    nextAction: "Mantener linea por grupo: estudiantes, egresados, comunidad, empresas, evento."
  },
  {
    id: "ACT-014",
    area: "Difusion",
    activity: "Difusion previa por grupos Facebook",
    owner: "Persona 8",
    backup: "Persona 5",
    agent: "Agente #10",
    automationLevel: "Media",
    sla: "72h y 24h antes",
    evidence: "post registrado",
    status: "Pendiente",
    priority: "Media",
    source: "Actividad pegada",
    risk: "Difusion externa sin registro impide medir conversion.",
    nextAction: "Registrar grupo, copy, fecha, CTA y resultado."
  },
  {
    id: "ACT-015",
    area: "Datos",
    activity: "Mantener BD de grupos WSP y linea de difusion",
    owner: "Persona 2",
    backup: "Persona 8",
    agent: "Agente #7",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "BD actualizada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + BD grupos",
    risk: "Sin tipologia de grupos se mezclan soporte, comunidad y ventas.",
    nextAction: "Agregar fields: group_type, audience, course_id, allowed_content, owner_alias."
  },
  {
    id: "ACT-016",
    area: "Plataforma",
    activity: "Creacion de Classrooms para diplomados",
    owner: "Persona 1",
    backup: "Persona 3",
    agent: "Agente #2",
    automationLevel: "Media",
    sla: "Antes del inicio",
    evidence: "classroom creado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad pegada + matriz de accesos",
    risk: "Sin Classroom, recursos y tareas quedan fuera del flujo academico.",
    nextAction: "Crear template por tipo de programa y checklist de recursos."
  },
  {
    id: "ACT-017",
    area: "Datos",
    activity: "Apoyo en subida de datos al GHT de Marketing AECODE",
    owner: "Persona 2",
    backup: "Persona 8",
    agent: "Agente #7",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "carga validada",
    status: "Pendiente",
    priority: "Media",
    source: "Actividad pegada + arquitectura operativa",
    risk: "Marketing no puede segmentar si la data llega incompleta o tarde.",
    nextAction: "Validar duplicados, fuente, programa, etapa y consentimiento."
  },
  {
    id: "ACT-018",
    area: "Certificados",
    activity: "Envio de certificados de participacion",
    owner: "Persona 1",
    backup: "Persona 9",
    agent: "Agente #8",
    automationLevel: "Alta",
    sla: "5 dias post cierre",
    evidence: "certificado enviado",
    status: "Riesgo",
    priority: "Critica",
    source: "Actividad pegada + action items",
    risk: "Retrasos de certificados bloquean recompra y generan reclamos.",
    nextAction: "Cola por programa: lista, datos, tipo, folio, envio, estado."
  },
  {
    id: "ACT-019",
    area: "Certificados",
    activity: "Envio de certificados de aprobacion Autodesk",
    owner: "Persona 1",
    backup: "Persona 9",
    agent: "Agente #8",
    automationLevel: "Media",
    sla: "5 dias post cierre",
    evidence: "certificado enviado",
    status: "Riesgo",
    priority: "Critica",
    source: "Actividad pegada + action items",
    risk: "Sin lista de aprobados validada, el envio queda bloqueado.",
    nextAction: "Definir gate: aprobado, email valido, curso, licencia, plantilla."
  },
  {
    id: "ACT-020",
    area: "Direccion",
    activity: "Definir prioridades maestras de AECODE por semana",
    owner: "Persona 10",
    backup: "Persona 11",
    agent: "Agente #11",
    automationLevel: "Media",
    sla: "Lunes 10am",
    evidence: "prioridades semanales",
    status: "Activo",
    priority: "Critica",
    source: "HTML marketing + sistema operativo AECODE",
    risk: "Sin direccion unica, marketing, academia, comercial y producto trabajan con prioridades distintas.",
    nextAction: "Publicar top 5 semanal con owner, resultado esperado y bloqueo principal."
  },
  {
    id: "ACT-021",
    area: "Marketing",
    activity: "Planificar campanas de cursos Training y pauta Meta Ads",
    owner: "Persona 12",
    backup: "Persona 13",
    agent: "Agente #12",
    automationLevel: "Alta",
    sla: "7 dias antes de lanzamiento",
    evidence: "brief + calendario + campana",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing",
    risk: "Campanas lanzadas sin brief, CTA o feedback comercial reducen conversion.",
    nextAction: "Crear checklist: oferta, audiencia, piezas, landing, presupuesto, CPL objetivo y feedback ventas."
  },
  {
    id: "ACT-022",
    area: "Marketing",
    activity: "Reportar rendimiento de Meta Ads, CPL y calidad de leads",
    owner: "Persona 12",
    backup: "Persona 18",
    agent: "Agente #12",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "dashboard de ads",
    status: "Pendiente",
    priority: "Alta",
    source: "HTML marketing",
    risk: "El equipo ajusta campanas tarde si no cruza costo, lead y conversion.",
    nextAction: "Automatizar reporte diario por curso, fuente, CPL, lead quality y conversion comercial."
  },
  {
    id: "ACT-023",
    area: "Eventos",
    activity: "Coordinar AECODE AI Summit y eventos estrategicos",
    owner: "Persona 14",
    backup: "Persona 10",
    agent: "Agente #13",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "plan de evento actualizado",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing + Notion AECODE Training",
    risk: "Evento sin tablero unico pierde sponsors, agenda, piezas y responsables.",
    nextAction: "Separar tablero por agenda, sponsors, ponentes, piezas, difusion, inscritos y post-evento."
  },
  {
    id: "ACT-024",
    area: "Difusion",
    activity: "Difusion multicanal de posts, webinars, cursos y eventos",
    owner: "Persona 15",
    backup: "Persona 8",
    agent: "Agente #10",
    automationLevel: "Alta",
    sla: "72h / 24h",
    evidence: "registro multicanal",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing + actividad pegada",
    risk: "Publicar sin matriz de canales impide saber que funciono.",
    nextAction: "Unificar WhatsApp, Facebook, YouTube, web y GHL con source_channel por pieza."
  },
  {
    id: "ACT-025",
    area: "Web",
    activity: "Gestionar cambios web, landings, banners y brochures",
    owner: "Persona 15",
    backup: "Persona 16",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "48h por solicitud",
    evidence: "cambio publicado",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing",
    risk: "Web desactualizada rompe confianza y afecta conversion de campanas.",
    nextAction: "Crear cola web con solicitud, prioridad, asset, aprobacion, publicacion y rollback."
  },
  {
    id: "ACT-026",
    area: "Diseno",
    activity: "Validar criterio visual, piezas de pauta, impresion y landings",
    owner: "Persona 16",
    backup: "Persona 13",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "24-72h",
    evidence: "pieza aprobada",
    status: "Activo",
    priority: "Media",
    source: "HTML marketing",
    risk: "Piezas inconsistentes diluyen marca y retrasan lanzamientos.",
    nextAction: "Usar libreria Figma, checklist de marca y aprobacion por tipo de pieza."
  },
  {
    id: "ACT-027",
    area: "Contenido",
    activity: "Editar clips de webinars y videos organicos para distribucion",
    owner: "Persona 17",
    backup: "Persona 5",
    agent: "Agente #15",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "clips listos",
    status: "Pendiente",
    priority: "Media",
    source: "HTML marketing",
    risk: "Webinars quedan como contenido muerto si no se transforman en clips reutilizables.",
    nextAction: "Definir flujo: webinar, guion, cortes, edicion, aprobacion, YouTube, shorts y ads."
  },
  {
    id: "ACT-028",
    area: "Comercial",
    activity: "Recoger feedback de ventas sobre leads, cursos y objeciones",
    owner: "Persona 18",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "feedback comercial",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing",
    risk: "Marketing optimiza por lead barato, no por lead que compra.",
    nextAction: "Reportar calidad por campana: contactado, calificado, interesado, compra, objecion."
  },
  {
    id: "ACT-029",
    area: "Comercial",
    activity: "Actualizar asesoria comercial, estado de cursos y conversion",
    owner: "Persona 19",
    backup: "Persona 18",
    agent: "Agente #16",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "pipeline actualizado",
    status: "Pendiente",
    priority: "Alta",
    source: "HTML marketing + sistema operativo AECODE",
    risk: "Sin estado comercial actualizado, direccion no puede decidir presupuesto ni prioridad.",
    nextAction: "Conectar GHL/Sheet con dashboard por programa, fuente, asesor y etapa."
  },
  {
    id: "ACT-030",
    area: "Automatizacion",
    activity: "Mapear procesos internos y proponer una automatizacion por area",
    owner: "Persona 11",
    backup: "Persona 10",
    agent: "Agente #11",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "backlog de automatizacion",
    status: "Activo",
    priority: "Alta",
    source: "HTML marketing",
    risk: "Automatizar sin mapa genera herramientas aisladas y poca adopcion.",
    nextAction: "Priorizar por horas ahorradas, errores reducidos, impacto en conversion y trazabilidad."
  },
  {
    id: "ACT-031",
    area: "Producto",
    activity: "Gestionar learning experience, rutas, Skill Graph y plataforma",
    owner: "Persona 20",
    backup: "Persona 3",
    agent: "Agente #17",
    automationLevel: "Media",
    sla: "Quincenal",
    evidence: "roadmap producto",
    status: "Pendiente",
    priority: "Critica",
    source: "Sistema operativo AECODE",
    risk: "AECODE puede operar cursos sin convertir aprendizaje en habilidades verificables.",
    nextAction: "Conectar diagnostico, ruta, skill, practica, evidencia, rubrica, feedback y certificacion."
  },
  {
    id: "ACT-032",
    area: "Finanzas",
    activity: "Controlar pagos, documentacion, comprobantes y bloqueos administrativos",
    owner: "Persona 21",
    backup: "Persona 1",
    agent: "Agente #18",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "estado administrativo",
    status: "Pendiente",
    priority: "Alta",
    source: "Proceso coordinacion academica + sistema operativo AECODE",
    risk: "Pagos/documentos sin estado bloquean accesos, certificados y reporting.",
    nextAction: "Crear status unico: pagado, observado, factura, deuda, certificado habilitado."
  },
  {
    id: "ACT-033",
    area: "Datos",
    activity: "Mantener dashboard ejecutivo de KPIs AECODE",
    owner: "Persona 22",
    backup: "Persona 11",
    agent: "Agente #19",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "dashboard actualizado",
    status: "Pendiente",
    priority: "Critica",
    source: "Sistema operativo AECODE + HTML marketing",
    risk: "Sin KPIs cruzados, cada area reporta actividad pero no impacto.",
    nextAction: "Medir skills verificadas, activacion, asistencia, videos, tickets, certificados, leads y conversion."
  }
];

export const agents: Agent[] = [
  { id: "Agente #1", mission: "Clasificar consultas de Admin Morado y crear tickets.", input: "Mensaje WhatsApp", output: "Ticket con categoria, SLA y respuesta sugerida", humanControl: "Persona 1 revisa casos rojos", status: "Propuesto", impact: "Alto" },
  { id: "Agente #2", mission: "Crear accesos en plataforma, Classroom y licencias.", input: "Registro validado", output: "Acceso activo u observado", humanControl: "Persona 1 valida altas masivas", status: "Propuesto", impact: "Alto" },
  { id: "Agente #3", mission: "Crear Zoom recurrente y detectar conflictos.", input: "Programa, horario y cuenta", output: "Zoom creado y notificado", humanControl: "Persona 3 aprueba cambios", status: "Propuesto", impact: "Medio" },
  { id: "Agente #4", mission: "Orquestar Drive, edicion, Vimeo y plataforma.", input: "Grabacion de sesion", output: "Video publicado con estado", humanControl: "Persona 4 valida calidad", status: "Propuesto", impact: "Alto" },
  { id: "Agente #5", mission: "Enviar o verificar recordatorios antes de clase.", input: "Calendario de sesiones", output: "Mensaje enviado o alerta", humanControl: "Persona 6 revisa excepciones", status: "Propuesto", impact: "Alto" },
  { id: "Agente #6", mission: "Crear y mantener grupos WSP por cohorte.", input: "Programa y cohorte", output: "Grupo y descripcion listos", humanControl: "Persona 6 valida participantes", status: "Propuesto", impact: "Medio" },
  { id: "Agente #7", mission: "Sincronizar inscritos, GHT y BD de grupos.", input: "Sheets y GHL", output: "Carga limpia y duplicados marcados", humanControl: "Persona 2 valida datos sensibles", status: "Propuesto", impact: "Alto" },
  { id: "Agente #8", mission: "Emitir certificados de participacion y Autodesk.", input: "Lista aprobados", output: "Certificado enviado y trazado", humanControl: "Persona 1 valida bloqueos", status: "Propuesto", impact: "Alto" },
  { id: "Agente #9", mission: "Asignar embajador e inducirlo con checklist.", input: "Programa y curso", output: "Embajador activo y checklist", humanControl: "Persona 7 valida induccion", status: "Propuesto", impact: "Medio" },
  { id: "Agente #10", mission: "Planificar difusion WSP, Facebook y YouTube.", input: "Campana o evento", output: "Envios y posts registrados", humanControl: "Persona 8 aprueba mensaje", status: "Propuesto", impact: "Medio" },
  { id: "Agente #11", mission: "Consolidar prioridades y oportunidades de automatizacion.", input: "Backlog por area", output: "Top semanal con impacto, owner y estado", humanControl: "Persona 10 decide prioridad", status: "Propuesto", impact: "Alto" },
  { id: "Agente #12", mission: "Monitorear Meta Ads, CPL, creativos y lead quality.", input: "Ads + CRM + feedback ventas", output: "Reporte diario y alertas de campana", humanControl: "Persona 12 valida cambios de presupuesto", status: "Propuesto", impact: "Alto" },
  { id: "Agente #13", mission: "Orquestar eventos, Summit, agenda, piezas y sponsors.", input: "Notion evento + calendario + assets", output: "Semaforo de evento y tareas vencidas", humanControl: "Persona 14 escala bloqueos", status: "Propuesto", impact: "Alto" },
  { id: "Agente #14", mission: "Gestionar cola web, landings, piezas y QA visual.", input: "Solicitud de cambio + assets", output: "Checklist de publicacion y aprobacion", humanControl: "Persona 15 o 16 aprueba salida", status: "Propuesto", impact: "Medio" },
  { id: "Agente #15", mission: "Transformar webinars en clips, shorts y assets reutilizables.", input: "Grabacion + transcript + tema", output: "Backlog de clips con guion y estado", humanControl: "Persona 17 valida edicion final", status: "Propuesto", impact: "Medio" },
  { id: "Agente #16", mission: "Cruzar leads, asesoria, objeciones y conversion comercial.", input: "CRM + feedback diario", output: "Lead quality y oportunidades por curso", humanControl: "Persona 18 valida lectura comercial", status: "Propuesto", impact: "Alto" },
  { id: "Agente #17", mission: "Auditar loop de aprendizaje, evidencias, rubricas y skill passport.", input: "Programas + evidencias + evaluaciones", output: "Mapa de skill verification por cohorte", humanControl: "Persona 20 valida criterio academico", status: "Propuesto", impact: "Alto" },
  { id: "Agente #18", mission: "Sincronizar pagos, comprobantes y bloqueos administrativos.", input: "Pagos + documentos + matriculas", output: "Estado administrativo por estudiante", humanControl: "Persona 21 revisa casos sensibles", status: "Propuesto", impact: "Medio" },
  { id: "Agente #19", mission: "Construir dashboard ejecutivo de operacion completa AECODE.", input: "Academico + marketing + comercial + soporte", output: "KPIs semanales y alertas de decision", humanControl: "Persona 22 valida datos", status: "Propuesto", impact: "Alto" }
];

export const programs: ProgramStatus[] = [
  { id: "PRG-001", label: "Programa 1", type: "Especializacion", state: "Finalizado", platform: "SI", classroom: "SI", miro: "SI", zoom: "SI", wsp: "NO", absenceForm: "No existe", ambassador: "Sin evidencia", risk: "Certificados y videos historicos" },
  { id: "PRG-002", label: "Programa 2", type: "Diplomado", state: "Finalizado", platform: "SI", classroom: "SI", miro: "SI", zoom: "SI", wsp: "NO", absenceForm: "No existe", ambassador: "Sin evidencia", risk: "Certificados y contenido" },
  { id: "PRG-003", label: "Programa 3", type: "Diplomado", state: "En proceso", platform: "SI", classroom: "SI", miro: "SI", zoom: "SI", wsp: "NO", absenceForm: "No existe", ambassador: "Sin evidencia", risk: "Asistencia y seguimiento" },
  { id: "PRG-004", label: "Programa 4", type: "Diplomado", state: "En proceso", platform: "SI", classroom: "SI", miro: "POR COMPLETAR", zoom: "SI", wsp: "NO", absenceForm: "Urgente", ambassador: "Sin evidencia", risk: "Grupo/formulario urgente" },
  { id: "PRG-005", label: "Programa 5", type: "Especializacion", state: "En proceso", platform: "EN PROCESO", classroom: "SI", miro: "POR COMPLETAR", zoom: "POR COMPLETAR", wsp: "SI", absenceForm: "Por definir", ambassador: "Por definir", risk: "Alta friccion operativa" },
  { id: "PRG-006", label: "Programa 6", type: "Especializacion", state: "En proceso", platform: "EN PROCESO", classroom: "SI", miro: "POR COMPLETAR", zoom: "SI", wsp: "NO", absenceForm: "Por definir", ambassador: "Por definir", risk: "Completar activos" },
  { id: "PRG-007", label: "Programa 7", type: "Diplomado", state: "Por iniciar", platform: "EN PROCESO", classroom: "EN PROCESO", miro: "EN PROCESO", zoom: "EN PROCESO", wsp: "NO", absenceForm: "Por definir", ambassador: "Por definir", risk: "Preparacion previa" }
];

export const linkAssets: LinkAsset[] = [
  {
    id: "LNK-001",
    category: "Web",
    domain: "unsaac.edu.pe",
    assetLabel: "Landing externa de olimpiadas BIM",
    owner: "Persona 8",
    agent: "Agente #10",
    relatedArea: "Difusion",
    privacy: "Publico",
    status: "Inventariado",
    infoInside: "Pagina publica de evento/alianza usada como referencia de difusion.",
    operationalUse: "Validar copy, agenda, conversion y relacion con AECODE Student.",
    risk: "Puede quedar desconectada de la base de leads si no se registra fuente.",
    nextAction: "Crear source_channel y campana asociada.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-002",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Status general area academica",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Listo para conectar",
    infoInside: "Registro de status, accesos, videos, programas y soporte academico.",
    operationalUse: "Fuente maestra para sincronizar actividades, programas y readiness.",
    risk: "Si se publica completo puede exponer operacion interna.",
    nextAction: "Conectar via backend seguro con permisos por rol.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-003",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 1",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Tablero colaborativo vinculado a un programa academico.",
    operationalUse: "Centralizar recursos, dinamicas, ejercicios y evidencias de clase.",
    risk: "Tablero puede quedar sin owner o con acceso abierto.",
    nextAction: "Asignar program_id, owner y permiso de lectura/escritura.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-004",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 2",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Tablero Miro asociado a curso o especializacion.",
    operationalUse: "Soportar actividades practicas y material de sesion.",
    risk: "Sin naming estandar se pierde trazabilidad historica.",
    nextAction: "Renombrar con programa, cohorte y fecha.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-005",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 3",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro compartido desde chat para actividad academica.",
    operationalUse: "Material vivo para sesiones y embajadores.",
    risk: "Share links externos pueden mantener acceso despues del cierre.",
    nextAction: "Auditar permisos y vincular a matriz de programa.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-006",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet operativo programa",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Hoja de seguimiento o registro compartida para operacion academica.",
    operationalUse: "Consolidar inscritos, asistencia, accesos o status por programa.",
    risk: "Puede duplicar datos del registro maestro.",
    nextAction: "Definir si es fuente maestra o fuente secundaria.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-007",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 4",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Enlace Miro usado como recurso de aprendizaje.",
    operationalUse: "Mapa, dinamica o tablero de clase.",
    risk: "No esta claro si pertenece a cohorte activa o historica.",
    nextAction: "Marcar estado: activo, historico o archivado.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-008",
    category: "Drive",
    domain: "drive.google.com",
    assetLabel: "Carpeta Drive de recursos",
    owner: "Persona 4",
    agent: "Agente #4",
    relatedArea: "Contenido",
    privacy: "Critico",
    status: "Inventariado",
    infoInside: "Carpeta de archivos compartidos, probablemente recursos, videos o evidencias.",
    operationalUse: "Entrada del pipeline Drive -> Vimeo -> plataforma.",
    risk: "Si no hay nomenclatura, los videos y materiales no llegan a plataforma.",
    nextAction: "Crear estructura por programa, modulo, sesion y estado.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-009",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 5",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board de trabajo academico asociado a programa.",
    operationalUse: "Soporte para sesiones practicas y material colaborativo.",
    risk: "Puede estar enlazado a programa sin Classroom asociado.",
    nextAction: "Cruzar con matriz de accesos.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-010",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Excel de registrados",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Registro de participantes o interesados compartido para control.",
    operationalUse: "Validar inscritos, accesos y seguimiento.",
    risk: "Datos personales duplicados fuera de la base maestra.",
    nextAction: "Importar con IDs anonimizados y eliminar duplicados.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-011",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Registro AECODE Training 2026",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Listo para conectar",
    infoInside: "Listado de registros para AECODE Training 2026.",
    operationalUse: "Base para acceso, segmentacion, activacion y seguimiento.",
    risk: "Sin governance puede mezclarse con inscritos historicos.",
    nextAction: "Normalizar campos canonicos y fuente de adquisicion.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-012",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet operativo sin clasificar 1",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Hoja compartida sin descripcion explicita en el chat.",
    operationalUse: "Revisar si contiene registros, asistencia, status o certificados.",
    risk: "Activo critico puede quedar fuera del sistema maestro.",
    nextAction: "Abrir, clasificar tipo de dato y mapear a entidad.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-013",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet operativo sin clasificar 2",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Hoja compartida sin contexto suficiente.",
    operationalUse: "Auditar si debe fusionarse con la base academica.",
    risk: "Fragmentacion de datos y perdida de control de versiones.",
    nextAction: "Asignar owner y tipo de informacion.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-014",
    category: "Notion",
    domain: "notion.so",
    assetLabel: "Notion de actividad operativa",
    owner: "Persona 1",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Pagina Notion usada para seguimiento de actividades de una persona operativa.",
    operationalUse: "Extraer tareas, responsables, pendientes y evidencias.",
    risk: "Puede contener nombres, notas internas y decisiones no publicables.",
    nextAction: "Convertir en backlog anonimo por actividad_id.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-015",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 6",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board de trabajo academico con share link.",
    operationalUse: "Recurso de clase o dinamica colaborativa.",
    risk: "Permisos de share link sin control de cierre.",
    nextAction: "Auditar acceso y vincular a programa.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-016",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 7",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro compartido en conversacion operativa.",
    operationalUse: "Material de aprendizaje, mapa o workshop.",
    risk: "No hay registro visible de version final.",
    nextAction: "Agregar status y fecha de ultima revision.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-017",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 8",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro con uso academico.",
    operationalUse: "Recurso para curso, diplomado o especializacion.",
    risk: "Puede duplicar otro tablero si no hay codificacion.",
    nextAction: "Asignar codigo LNK + PRG + cohorte.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-018",
    category: "YouTube",
    domain: "youtube.com",
    assetLabel: "Playlist de videos",
    owner: "Persona 5",
    agent: "Agente #10",
    relatedArea: "Difusion",
    privacy: "Publico",
    status: "Inventariado",
    infoInside: "Playlist relacionada a videos o contenidos publicables.",
    operationalUse: "Convertir sesiones y clips en activos de marketing.",
    risk: "Sin calendario editorial no se mide impacto.",
    nextAction: "Vincular playlist a programa, CTA y metricas.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-019",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 9",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro enviado como enlace de programa.",
    operationalUse: "Uso academico en clase o preparacion.",
    risk: "Puede no estar incorporado en plataforma AECODE.",
    nextAction: "Registrar en matriz de activos del programa.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-020",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 10",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro con share link activo.",
    operationalUse: "Soporte visual para contenido academico.",
    risk: "Enlace puede quedar activo despues del programa.",
    nextAction: "Cerrar o archivar segun estado del curso.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-021",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 11",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro de actividad academica.",
    operationalUse: "Material colaborativo para sesion o taller.",
    risk: "Sin owner no hay mantenimiento ni cierre.",
    nextAction: "Asignar owner operativo y fecha de revision.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-022",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 12",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro compartido para programa o actividad.",
    operationalUse: "Soporte de aprendizaje y dinamica.",
    risk: "Puede estar desconectado de asistencia y evidencia.",
    nextAction: "Conectar a skill/practica/evidencia asociada.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-023",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Registro operativo",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Registro en Google Sheet mencionado como fuente de control.",
    operationalUse: "Validar participantes, estado o avance operativo.",
    risk: "Puede contener datos personales sin normalizacion.",
    nextAction: "Importar a staging y deduplicar.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-024",
    category: "Notion",
    domain: "notion.so",
    assetLabel: "Recopilatorio webinars y talleres virtuales",
    owner: "Persona 8",
    agent: "Agente #10",
    relatedArea: "Difusion",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Repositorio de webinars, talleres y registros asociados.",
    operationalUse: "Base para reutilizar contenido, campañas y follow-up.",
    risk: "Sin etiquetas por producto, no alimenta retencion ni ventas.",
    nextAction: "Estandarizar campos: evento, fecha, leads, grabacion, CTA.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-025",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Mapeo convenios y embajadores",
    owner: "Persona 7",
    agent: "Agente #9",
    relatedArea: "Embajadores",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Mapa de flujo de convenios, embajadores y gestion colaborativa.",
    operationalUse: "Definir proceso de aliados, grupos estudiantiles y embajadores.",
    risk: "Si queda solo como Miro, no se convierte en proceso ejecutable.",
    nextAction: "Convertir flujo en checklist, SLA y tablero de convenios.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-026",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet importado desde Excel",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Archivo tipo spreadsheet con parametros de importacion/Excel.",
    operationalUse: "Auditar si corresponde a data historica o reporte puntual.",
    risk: "Puede tener formato no canonico y duplicar campos.",
    nextAction: "Clasificar estructura antes de conectarlo.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-027",
    category: "Notion",
    domain: "notion.so",
    assetLabel: "Reporte certificaciones AECODE",
    owner: "Persona 1",
    agent: "Agente #8",
    relatedArea: "Certificados",
    privacy: "Critico",
    status: "Listo para conectar",
    infoInside: "Reporte de certificaciones, estados y probablemente pendientes de emision.",
    operationalUse: "Cerrar cola de participacion, aprobacion y seguimiento.",
    risk: "Certificados retrasados afectan recompra y confianza.",
    nextAction: "Convertir en certificate_queue con estado y SLA.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-028",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet operativo sin clasificar 3",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Hoja compartida como enlace operativo.",
    operationalUse: "Determinar si contiene registros, certificados o status.",
    risk: "Activo puede quedar perdido en chat.",
    nextAction: "Registrar descripcion, owner y entidad principal.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-029",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Sheet operativo sin clasificar 4",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Spreadsheet sin contexto operativo suficiente.",
    operationalUse: "Auditoria de fuente y posible consolidacion.",
    risk: "Riesgo de dato desactualizado o paralelo.",
    nextAction: "Validar fecha, campos y duplicidad con fuente maestra.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-030",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 13",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro enviado como link editado en chat.",
    operationalUse: "Recurso de programa o sesion.",
    risk: "El mensaje editado puede indicar cambio de version.",
    nextAction: "Confirmar link vigente y archivar version anterior.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-031",
    category: "Miro",
    domain: "miro.com",
    assetLabel: "Miro programa 14",
    owner: "Persona 3",
    agent: "Agente #2",
    relatedArea: "Plataforma",
    privacy: "Interno",
    status: "Inventariado",
    infoInside: "Board Miro identificado como link operativo.",
    operationalUse: "Material academico o mapa de sesion.",
    risk: "Sin asociacion a programa queda dificil de reutilizar.",
    nextAction: "Asignar course_id y estado de acceso.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-032",
    category: "Zoom",
    domain: "zoom.us",
    assetLabel: "Zoom de sesion",
    owner: "Persona 3",
    agent: "Agente #3",
    relatedArea: "Sesiones",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Link de reunion con clave incluida.",
    operationalUse: "Sesion sincronica de curso o reunion academica.",
    risk: "Publicar el link expone acceso no autorizado.",
    nextAction: "Rotar clave si corresponde y mover a gestor seguro de sesiones.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-033",
    category: "Notion",
    domain: "notion.so",
    assetLabel: "AECODE Training",
    owner: "Persona 2",
    agent: "Agente #7",
    relatedArea: "Datos",
    privacy: "Critico",
    status: "Requiere revision",
    infoInside: "Base Notion de seguimiento AECODE Training; se detectaron campos de frecuencia, estado y semanas.",
    operationalUse: "Controlar programas por estado, frecuencia semanal y avance operativo de training.",
    risk: "La URL compartida no fue accesible directo por conector; existe una base relacionada en workspace y debe consolidarse sin duplicar fuente.",
    nextAction: "Validar si esta pagina es fuente maestra, espejo o vista secundaria del seguimiento Training.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  },
  {
    id: "LNK-034",
    category: "Google Sheet",
    domain: "docs.google.com",
    assetLabel: "Enlaces grupos WhatsApp",
    owner: "Persona 6",
    agent: "Agente #6",
    relatedArea: "Comunidad",
    privacy: "Critico",
    status: "Listo para conectar",
    infoInside: "Pestana del Sheet academico con subgrupos WhatsApp por programa, participantes, coordinacion e instructores.",
    operationalUse: "Gobernar grupos por cohorte, tipo de audiencia, estado de enlace y responsable operativo.",
    risk: "Contiene enlaces reales de WhatsApp y nombres internos; hay enlaces de coordinacion pendientes por completar.",
    nextAction: "Convertir en tabla community_groups con group_type, program_id, audience, owner_alias, link_status y privacy_level.",
    secureReference: "URL completa en outputs/internal_links_private.csv"
  }
];

export const opsRoles: OpsRole[] = [
  {
    id: "Persona 1",
    role: "Access + Certifications Ops",
    mission: "Asegurar que cada estudiante tenga acceso, soporte, recursos y certificado con trazabilidad.",
    areas: ["Accesos y soporte", "Plataforma", "Certificados", "Contenido"],
    primaryActivities: ["ACT-001", "ACT-002", "ACT-005", "ACT-016", "ACT-018", "ACT-019"],
    kpis: ["Tiempo compra -> acceso", "Tickets cerrados en SLA", "Certificados enviados a tiempo", "Videos publicados"],
    dailyCheck: "Revisar cola de accesos, Admin Morado, videos pendientes y certificados bloqueados.",
    escalation: "Casos rojos: acceso caido, certificado observado, panel con error o alumno sin respuesta.",
    backup: "Persona 3",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 1"
  },
  {
    id: "Persona 2",
    role: "Data Steward + Registro Academico",
    mission: "Mantener datos confiables de inscritos, programas, grupos, GHT y fuentes maestras.",
    areas: ["Datos", "Comunidad"],
    primaryActivities: ["ACT-003", "ACT-015", "ACT-017"],
    kpis: ["Registros completos", "Duplicados marcados", "Fuentes actualizadas", "Grupos clasificados"],
    dailyCheck: "Validar altas, cambios de estado, duplicados y campos minimos por programa.",
    escalation: "Datos sin owner, links faltantes, hoja paralela o base no sincronizada.",
    backup: "Persona 8",
    obsidianSource: "05_Mapeo de Procesos/Coordinacion-Academica-Postventa-AECODE"
  },
  {
    id: "Persona 3",
    role: "Academic Ops Lead",
    mission: "Coordinar calendario, Zoom, instructores, sesiones, alertas y reporte semanal.",
    areas: ["Sesiones", "Plataforma", "Datos"],
    primaryActivities: ["ACT-004", "ACT-009", "ACT-016"],
    kpis: ["Sesiones confirmadas 72h antes", "Zooms sin conflicto", "Alertas escaladas", "Reporte semanal emitido"],
    dailyCheck: "Mirar calendario 72h, confirmar Zoom, instructor, embajador, recursos y link de grupo.",
    escalation: "Instructor sin confirmar, Zoom incompleto, grupo sin enlace o material faltante.",
    backup: "Persona 6",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 3"
  },
  {
    id: "Persona 4",
    role: "Content Pipeline Ops",
    mission: "Convertir grabaciones y recursos en contenido disponible en plataforma.",
    areas: ["Contenido", "Plataforma"],
    primaryActivities: ["ACT-005", "ACT-006"],
    kpis: ["Drive completo <24h", "Vimeo listo", "Plataforma actualizada", "Versiones sin error"],
    dailyCheck: "Revisar grabaciones nuevas, estado de edicion, subida a Vimeo y publicacion final.",
    escalation: "Grabacion faltante, archivo corrupto, video sin edicion o recurso mal ubicado.",
    backup: "Persona 5",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 4"
  },
  {
    id: "Persona 5",
    role: "Marketing Content Support",
    mission: "Transformar contenido academico en piezas publicables y activos de difusion.",
    areas: ["Difusion", "Contenido"],
    primaryActivities: ["ACT-007", "ACT-008", "ACT-014"],
    kpis: ["Piezas publicadas", "Playlist actualizada", "CTA registrado", "Campanas con fuente"],
    dailyCheck: "Identificar clips publicables, piezas YouTube y posts por evento o curso.",
    escalation: "Contenido sin permiso, CTA ausente, pieza sin fuente o publicacion sin registro.",
    backup: "Persona 8",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 5"
  },
  {
    id: "Persona 6",
    role: "Community + Session Ops",
    mission: "Operar grupos WSP, recordatorios, asistencia y comunicacion de sesiones.",
    areas: ["Comunidad", "Sesiones"],
    primaryActivities: ["ACT-009", "ACT-010", "ACT-013", "ACT-015"],
    kpis: ["Grupos creados antes del inicio", "Recordatorios enviados", "Asistencia visible", "Enlaces completos"],
    dailyCheck: "Confirmar grupos, recordatorios, participantes, embajador y mensajes del dia.",
    escalation: "Grupo sin enlace, participante fuera de grupo, recordatorio no enviado o baja asistencia.",
    backup: "Persona 1",
    obsidianSource: "Sheet ENLACES GRUPOS WHATSAPP + Actividades_TEAM"
  },
  {
    id: "Persona 7",
    role: "Academic Quality + Embassadors Lead",
    mission: "Garantizar calidad academica, evidencias, rubricas, reportes de embajadores y recuperacion.",
    areas: ["Embajadores", "Certificados", "Sesiones"],
    primaryActivities: ["ACT-011", "ACT-012", "ACT-018", "ACT-019"],
    kpis: ["Reportes de embajador completos", "Evidencias validadas", "Notas listas", "Certificados bloqueados con causa"],
    dailyCheck: "Revisar reportes de embajadores, evidencias, notas pendientes y estudiantes en recuperacion.",
    escalation: "Sesion sin evidencia, embajador sin induccion, notas incompletas o certificado sin sustento.",
    backup: "Persona 3",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 7"
  },
  {
    id: "Persona 8",
    role: "Growth + Diffusion Ops",
    mission: "Activar comunidades, Facebook, WhatsApp y fuentes de marketing con trazabilidad.",
    areas: ["Difusion", "Comunidad", "Datos"],
    primaryActivities: ["ACT-013", "ACT-014", "ACT-017"],
    kpis: ["Grupos segmentados", "Envios registrados", "Leads con source_channel", "Campanas trazadas"],
    dailyCheck: "Preparar difusion 72h/24h, validar grupos permitidos y registrar fuente/copy/CTA.",
    escalation: "Grupo no clasificado, campana sin source_channel o mensaje sin aprobacion.",
    backup: "Persona 5",
    obsidianSource: "09_Actividades Diarias/Actividades_TEAM/Persona 8"
  },
  {
    id: "Persona 9",
    role: "Branding QA Certificados",
    mission: "Asegurar plantillas, firmas, QR, folios y calidad visual de certificados.",
    areas: ["Certificados"],
    primaryActivities: ["ACT-018", "ACT-019"],
    kpis: ["Plantillas aprobadas", "Errores visuales cero", "Folios trazables", "Certificados sin rebote"],
    dailyCheck: "Validar plantilla, marca, datos, folio, QR y entrega antes del envio.",
    escalation: "Logo incorrecto, datos incompletos, folio duplicado o plantilla no aprobada.",
    backup: "Persona 1",
    obsidianSource: "05_Mapeo de Procesos/Coordinacion-Academica-Postventa-AECODE"
  },
  {
    id: "Persona 10",
    role: "Direccion Operativa AECODE",
    mission: "Definir prioridades, alinear areas y convertir informacion dispersa en decisiones semanales.",
    areas: ["Direccion", "Marketing", "Producto", "Comercial", "Eventos"],
    primaryActivities: ["ACT-020", "ACT-023", "ACT-030", "ACT-031", "ACT-033"],
    kpis: ["Top 5 semanal publicado", "Bloqueos criticos resueltos", "Areas con prioridad visible", "Decisiones con evidencia"],
    dailyCheck: "Revisar alertas rojas, metas de semana, avance por area y decisiones pendientes.",
    escalation: "Conflicto entre areas, presupuesto sin retorno, lanzamiento bloqueado o evento en riesgo.",
    backup: "Persona 11",
    obsidianSource: "Sistema operativo AECODE + panel marketing"
  },
  {
    id: "Persona 11",
    role: "Automation + Process Improvement Lead",
    mission: "Mapear procesos, reducir carga manual y convertir actividades repetitivas en agentes auditables.",
    areas: ["Automatizacion", "Datos", "Marketing", "Accesos y soporte"],
    primaryActivities: ["ACT-020", "ACT-030", "ACT-033"],
    kpis: ["Procesos mapeados", "Automatizaciones priorizadas", "Horas manuales reducidas", "Errores repetitivos eliminados"],
    dailyCheck: "Actualizar backlog de automatizacion, validar impacto y preparar siguiente piloto.",
    escalation: "Automatizacion sin owner, fuente insegura, datos sensibles o flujo sin validacion humana.",
    backup: "Persona 22",
    obsidianSource: "HTML marketing/Optimizacion y Automatizacion"
  },
  {
    id: "Persona 12",
    role: "Paid Growth + Meta Ads Ops",
    mission: "Planificar, ejecutar y optimizar campanas pagadas con foco en lead quality y conversion.",
    areas: ["Marketing", "Comercial", "Datos"],
    primaryActivities: ["ACT-021", "ACT-022", "ACT-028"],
    kpis: ["CPL por curso", "Lead quality", "Conversion por fuente", "Creativos ganadores"],
    dailyCheck: "Revisar presupuesto, CPL, conversion, alertas y feedback comercial.",
    escalation: "CPL fuera de umbral, lead sin contacto, landing rota o oferta no validada.",
    backup: "Persona 13",
    obsidianSource: "HTML marketing/Trafficker Meta Ads"
  },
  {
    id: "Persona 13",
    role: "Campaign Content Ops",
    mission: "Coordinar piezas para ads, carruseles, estaticos, copies y assets de campana.",
    areas: ["Marketing", "Diseno", "Contenido"],
    primaryActivities: ["ACT-021", "ACT-024", "ACT-026"],
    kpis: ["Piezas listas a tiempo", "Brief completo", "Aprobaciones sin retrabajo", "Assets respaldados"],
    dailyCheck: "Validar brief, piezas pendientes, versiones aprobadas y entrega a pauta/difusion.",
    escalation: "Pieza sin brief, copy sin CTA, version duplicada o aprobacion faltante.",
    backup: "Persona 16",
    obsidianSource: "HTML marketing/Contenido Ads"
  },
  {
    id: "Persona 14",
    role: "Events + Summit Ops",
    mission: "Coordinar eventos AECODE desde estrategia hasta ejecucion, difusion y seguimiento post-evento.",
    areas: ["Eventos", "Marketing", "Comercial", "Difusion"],
    primaryActivities: ["ACT-023", "ACT-024"],
    kpis: ["Tareas de evento al dia", "Speakers/sponsors confirmados", "Piezas publicadas", "Inscritos por fuente"],
    dailyCheck: "Revisar agenda, responsables, fechas, assets, difusion e inscritos.",
    escalation: "Speaker sin confirmar, sponsor bloqueado, pieza atrasada o landing no publicada.",
    backup: "Persona 10",
    obsidianSource: "HTML marketing/AECODE AI Summit"
  },
  {
    id: "Persona 15",
    role: "Web + Organic Diffusion Ops",
    mission: "Gestionar difusion digital, landings, web, brochures y respaldo de activos en Drive.",
    areas: ["Difusion", "Web", "Drive", "Marketing"],
    primaryActivities: ["ACT-024", "ACT-025", "ACT-008"],
    kpis: ["Publicaciones registradas", "Web actualizada", "Brochures vigentes", "Assets respaldados"],
    dailyCheck: "Confirmar piezas nuevas, canales programados, web/banners y respaldo de Drive.",
    escalation: "Pieza sin publicar, brochure antiguo, web rota o asset no respaldado.",
    backup: "Persona 8",
    obsidianSource: "HTML marketing/Difusion Web Drive Brochures"
  },
  {
    id: "Persona 16",
    role: "Design System + Brand QA",
    mission: "Asegurar consistencia visual en diseno, landings, impresos, Summit, piezas y certificados.",
    areas: ["Diseno", "Web", "Certificados", "Eventos"],
    primaryActivities: ["ACT-026", "ACT-025", "ACT-018", "ACT-019"],
    kpis: ["Errores visuales detectados antes de publicar", "Plantillas reutilizables", "Piezas aprobadas", "Marca consistente"],
    dailyCheck: "Revisar solicitudes visuales, piezas criticas, landings y plantillas pendientes.",
    escalation: "Pieza publica fuera de marca, diseno sin fuente, impreso urgente o certificado observado.",
    backup: "Persona 9",
    obsidianSource: "HTML marketing/Apoyo Visual y Diseno Corporativo"
  },
  {
    id: "Persona 17",
    role: "Video + Clip Production Ops",
    mission: "Editar videos organicos, clips de webinar, shorts y assets audiovisuales para pauta y comunidad.",
    areas: ["Contenido", "Marketing", "Difusion"],
    primaryActivities: ["ACT-007", "ACT-008", "ACT-027"],
    kpis: ["Clips listos", "Videos publicados", "Plantillas reutilizadas", "Tiempo de entrega"],
    dailyCheck: "Revisar grabaciones, guiones aprobados, cortes, ediciones y entregas a difusion.",
    escalation: "Grabacion incompleta, guion sin aprobar, pieza atrasada o formato incorrecto.",
    backup: "Persona 5",
    obsidianSource: "HTML marketing/Editor de Video"
  },
  {
    id: "Persona 18",
    role: "Sales Feedback + Lead Quality Ops",
    mission: "Traducir la realidad comercial en feedback accionable para campanas, cursos y oferta.",
    areas: ["Comercial", "Marketing", "Datos"],
    primaryActivities: ["ACT-028", "ACT-029", "ACT-022"],
    kpis: ["Leads contactados", "Objeciones mapeadas", "Conversion por campana", "Feedback diario enviado"],
    dailyCheck: "Reportar calidad de leads, objeciones, cursos con traccion y oportunidades de mejora.",
    escalation: "Leads sin contacto, campana con mala calidad, curso sin oferta clara o asesorias desalineadas.",
    backup: "Persona 19",
    obsidianSource: "HTML marketing/Ventas Feedback Comercial"
  },
  {
    id: "Persona 19",
    role: "Commercial Advisory Ops",
    mission: "Mantener asesoria, pipeline, seguimiento y conversion por curso alineados con marketing y academia.",
    areas: ["Comercial", "Datos", "Accesos y soporte"],
    primaryActivities: ["ACT-028", "ACT-029", "ACT-003"],
    kpis: ["Pipeline actualizado", "Tasa de contacto", "Tasa de cierre", "Motivos de no compra"],
    dailyCheck: "Actualizar etapa de leads, conversion por fuente, objeciones y bloqueos de pago/acceso.",
    escalation: "Lead caliente sin atencion, promesa comercial no cubierta o discrepancia de datos.",
    backup: "Persona 18",
    obsidianSource: "HTML marketing/Ventas Feedback y Asesoria"
  },
  {
    id: "Persona 20",
    role: "Product + Learning Experience Lead",
    mission: "Convertir cursos en rutas, habilidades verificables, evidencias, rubricas y Skill Passport.",
    areas: ["Producto", "Plataforma", "Certificados", "Datos"],
    primaryActivities: ["ACT-031", "ACT-016", "ACT-018", "ACT-019"],
    kpis: ["Skills verificadas por usuario activo", "Rutas publicadas", "Evidencias revisadas", "Rubricas activas"],
    dailyCheck: "Revisar avance de rutas, calidad de evidencias, bloqueos de plataforma y certificacion.",
    escalation: "Curso sin skill outcome, evidencia sin rubrica, certificado sin validacion o plataforma desalineada.",
    backup: "Persona 3",
    obsidianSource: "Sistema operativo AECODE/Product loop"
  },
  {
    id: "Persona 21",
    role: "Finance + Documentation Ops",
    mission: "Controlar pagos, comprobantes, documentacion y bloqueos administrativos que afectan acceso y certificados.",
    areas: ["Finanzas", "Accesos y soporte", "Certificados", "Comercial"],
    primaryActivities: ["ACT-032", "ACT-002", "ACT-018", "ACT-019"],
    kpis: ["Pagos conciliados", "Bloqueos administrativos resueltos", "Documentos completos", "Certificados habilitados"],
    dailyCheck: "Revisar pagos observados, comprobantes, estados administrativos y bloqueos de certificado.",
    escalation: "Pago no conciliado, comprobante incorrecto, deuda activa o reclamo administrativo.",
    backup: "Persona 1",
    obsidianSource: "Proceso coordinacion academica/Pagos documentacion automatizacion"
  },
  {
    id: "Persona 22",
    role: "Data + BI Control Ops",
    mission: "Unificar datos academicos, marketing, comercial, soporte y producto en un dashboard confiable.",
    areas: ["Datos", "Automatizacion", "Marketing", "Producto", "Comercial"],
    primaryActivities: ["ACT-003", "ACT-017", "ACT-022", "ACT-033"],
    kpis: ["Fuentes sincronizadas", "Errores de datos corregidos", "KPIs publicados", "Alertas accionables"],
    dailyCheck: "Validar consistencia de fuentes, duplicados, actualizacion de KPIs y alertas rojas.",
    escalation: "Fuente rota, dato sensible expuesto, dashboard inconsistente o metrica sin definicion.",
    backup: "Persona 11",
    obsidianSource: "Sheet academico + HTML marketing + sistema operativo AECODE"
  }
];

export const workflowStages: WorkflowStage[] = [
  {
    id: "WF-01",
    label: "Onboarding postventa",
    timing: "Compra validada -> 24h",
    owner: "Persona 1",
    objective: "Convertir inscrito en estudiante activo sin friccion.",
    activities: ["ACT-002", "ACT-003", "ACT-016", "ACT-010"],
    evidence: "Acceso activo, Classroom/grupo creado y registro actualizado.",
    automation: "Agente #2 + Agente #7"
  },
  {
    id: "WF-02",
    label: "Preparacion 72h",
    timing: "72h antes de clase",
    owner: "Persona 3",
    objective: "Confirmar que la sesion puede ejecutarse sin improvisacion.",
    activities: ["ACT-004", "ACT-009", "ACT-011", "ACT-012"],
    evidence: "Zoom, instructor, embajador, recursos y recordatorio listos.",
    automation: "Agente #3 + Agente #5 + Agente #9"
  },
  {
    id: "WF-03",
    label: "Ejecucion de sesion",
    timing: "Dia de clase",
    owner: "Persona 6",
    objective: "Asegurar asistencia, soporte y captura de evidencia operativa.",
    activities: ["ACT-001", "ACT-009", "ACT-010"],
    evidence: "Recordatorio enviado, asistencia revisada, incidencias registradas.",
    automation: "Agente #1 + Agente #5"
  },
  {
    id: "WF-04",
    label: "Contenido post sesion",
    timing: "0-48h post clase",
    owner: "Persona 4",
    objective: "Pasar grabacion y recursos a plataforma con version correcta.",
    activities: ["ACT-005", "ACT-006", "ACT-007", "ACT-008"],
    evidence: "Drive, Vimeo, plataforma y piezas publicables registradas.",
    automation: "Agente #4 + Agente #10"
  },
  {
    id: "WF-05",
    label: "Calidad y cierre academico",
    timing: "Semanal / cierre de modulo",
    owner: "Persona 7",
    objective: "Validar evidencias, notas, rubricas y recuperacion antes de certificar.",
    activities: ["ACT-011", "ACT-012", "ACT-018", "ACT-019"],
    evidence: "Reporte embajador, gradebook, bloqueo o aprobacion de certificado.",
    automation: "Agente #8 + Agente #9"
  },
  {
    id: "WF-06",
    label: "Difusion y comunidad",
    timing: "72h / 24h antes de evento",
    owner: "Persona 8",
    objective: "Activar grupos correctos sin mezclar soporte, comunidad y ventas.",
    activities: ["ACT-013", "ACT-014", "ACT-015", "ACT-017"],
    evidence: "Grupo, copy, CTA, fuente y resultado registrados.",
    automation: "Agente #7 + Agente #10"
  },
  {
    id: "WF-07",
    label: "Lanzamiento de campana",
    timing: "7 dias antes -> diario",
    owner: "Persona 12",
    objective: "Pasar de oferta academica a campana medible con feedback comercial.",
    activities: ["ACT-021", "ACT-022", "ACT-028", "ACT-029"],
    evidence: "Brief, piezas, landing, campana activa, CPL y lead quality.",
    automation: "Agente #12 + Agente #16"
  },
  {
    id: "WF-08",
    label: "Evento / Summit",
    timing: "Planificacion -> post-evento",
    owner: "Persona 14",
    objective: "Coordinar agenda, sponsors, ponentes, piezas, inscritos y seguimiento.",
    activities: ["ACT-023", "ACT-024", "ACT-025", "ACT-027"],
    evidence: "Tablero evento, piezas publicadas, inscritos por fuente y follow-up.",
    automation: "Agente #13 + Agente #10"
  },
  {
    id: "WF-09",
    label: "Producto y skill verification",
    timing: "Quincenal",
    owner: "Persona 20",
    objective: "Asegurar que AECODE mida habilidades verificables, no solo asistencia.",
    activities: ["ACT-031", "ACT-018", "ACT-019", "ACT-033"],
    evidence: "Ruta, skill, evidencia, rubrica, feedback y certificado.",
    automation: "Agente #17 + Agente #19"
  },
  {
    id: "WF-10",
    label: "Control administrativo",
    timing: "Diario / cierre",
    owner: "Persona 21",
    objective: "Evitar que pagos, documentos o estados administrativos bloqueen la experiencia.",
    activities: ["ACT-032", "ACT-002", "ACT-018", "ACT-019"],
    evidence: "Estado administrativo, pago conciliado y certificado habilitado.",
    automation: "Agente #18"
  }
];

export const aecodeDomains: AecodeDomain[] = [
  {
    id: "DOM-01",
    domain: "Direccion y sistema operativo",
    mission: "Alinear prioridades, decisiones, riesgos y resultados de todas las areas AECODE.",
    lead: "Persona 10",
    supportingRoles: ["Persona 11", "Persona 22"],
    responsibilities: ["Top 5 semanal", "Riesgos rojos", "Seguimiento ejecutivo", "Definicion de sprint"],
    kpis: ["Prioridades cumplidas", "Bloqueos resueltos", "Decisiones con evidencia"],
    cadences: ["Daily 15 min por alertas", "Weekly ops review", "Cierre de sprint"],
    risks: ["Areas trabajando aisladas", "Metricas sin decision", "Sobrecarga de tareas sin foco"],
    automation: "Agente #11 consolida avance y alertas por area."
  },
  {
    id: "DOM-02",
    domain: "Operacion academica y postventa",
    mission: "Garantizar acceso, sesiones, soporte, recursos, embajadores y certificados sin friccion.",
    lead: "Persona 3",
    supportingRoles: ["Persona 1", "Persona 6", "Persona 7", "Persona 9"],
    responsibilities: ["Accesos", "Zoom", "Classroom", "Recordatorios", "Soporte", "Certificados"],
    kpis: ["Acceso <24h", "Sesion lista 72h antes", "Tickets en SLA", "Certificados a tiempo"],
    cadences: ["Chequeo diario", "Preparacion 72h", "Cierre semanal"],
    risks: ["Alumno sin acceso", "Grabacion no publicada", "Certificado bloqueado"],
    automation: "Agentes #1-#9 cubren soporte, accesos, Zoom, videos y certificados."
  },
  {
    id: "DOM-03",
    domain: "Plataforma, contenido y learning experience",
    mission: "Convertir programas en rutas, recursos, videos, evidencias y skill verification.",
    lead: "Persona 20",
    supportingRoles: ["Persona 4", "Persona 17", "Persona 1"],
    responsibilities: ["Drive -> Vimeo -> plataforma", "Rutas", "Rubricas", "Skill Passport", "Videos"],
    kpis: ["Videos publicados", "Rutas activas", "Evidencias revisadas", "Skills verificadas"],
    cadences: ["Post-sesion 24-48h", "Review quincenal producto", "Cierre de cohorte"],
    risks: ["AECODE se percibe como academia tradicional", "Contenido disperso", "Evidencia sin rubrica"],
    automation: "Agente #17 audita loop de aprendizaje y Agente #4 gestiona videos."
  },
  {
    id: "DOM-04",
    domain: "Marketing, growth y distribucion",
    mission: "Generar demanda medible para cursos, webinars, eventos y comunidad con trazabilidad.",
    lead: "Persona 12",
    supportingRoles: ["Persona 13", "Persona 15", "Persona 16", "Persona 17"],
    responsibilities: ["Meta Ads", "Creativos", "Difusion", "Web", "YouTube", "Brochures"],
    kpis: ["CPL", "Lead quality", "Publicaciones", "Conversion por fuente"],
    cadences: ["Reporte diario ads", "Plan semanal contenidos", "Review de campana"],
    risks: ["Lead barato sin compra", "Pieza sin CTA", "Web desactualizada"],
    automation: "Agente #12 reporta campanas y Agente #14 gestiona cola web/QA."
  },
  {
    id: "DOM-05",
    domain: "Comercial y revenue",
    mission: "Cerrar el loop entre campanas, asesoria, objeciones, pagos y conversion.",
    lead: "Persona 18",
    supportingRoles: ["Persona 19", "Persona 21", "Persona 12"],
    responsibilities: ["Lead follow-up", "Objeciones", "Pipeline", "Pagos", "Feedback a marketing"],
    kpis: ["Tasa de contacto", "Tasa de cierre", "Motivos de no compra", "Ingresos por campana"],
    cadences: ["Feedback diario", "Review comercial semanal", "Cierre de cohortes"],
    risks: ["Marketing optimiza sin ventas", "Promesas comerciales no alineadas", "Pagos bloqueados"],
    automation: "Agente #16 cruza CRM, feedback y conversion por fuente."
  },
  {
    id: "DOM-06",
    domain: "Eventos, alianzas y autoridad",
    mission: "Operar Summit, webinars y alianzas como activos de crecimiento, comunidad y marca.",
    lead: "Persona 14",
    supportingRoles: ["Persona 10", "Persona 15", "Persona 16", "Persona 17"],
    responsibilities: ["Agenda", "Speakers", "Sponsors", "Landing", "Difusion", "Post-evento"],
    kpis: ["Inscritos por fuente", "Sponsors activos", "Asistencia", "Follow-up enviado"],
    cadences: ["Standup evento", "Review de piezas", "Cierre post-evento"],
    risks: ["Piezas atrasadas", "Sponsor sin seguimiento", "Inscritos sin nurturing"],
    automation: "Agente #13 semaforiza evento, tareas vencidas y dependencias."
  },
  {
    id: "DOM-07",
    domain: "Datos, BI y gobernanza",
    mission: "Unificar fuentes academicas, marketing, comercial, comunidad y producto sin exponer datos sensibles.",
    lead: "Persona 22",
    supportingRoles: ["Persona 2", "Persona 11", "Persona 12", "Persona 18"],
    responsibilities: ["Registro unico", "GHT/GHL", "Dashboards", "Privacidad", "Data quality"],
    kpis: ["Fuentes sincronizadas", "Duplicados", "Campos completos", "Alertas accionables"],
    cadences: ["Validacion diaria", "Data quality semanal", "Reporte ejecutivo"],
    risks: ["Sheets paralelos", "PII expuesta", "Metricas contradictorias"],
    automation: "Agente #19 construye KPIs y Agente #7 limpia registros."
  },
  {
    id: "DOM-08",
    domain: "Finanzas, documentacion y compliance operativo",
    mission: "Evitar que pagos, documentos y estados administrativos bloqueen acceso, soporte o certificados.",
    lead: "Persona 21",
    supportingRoles: ["Persona 1", "Persona 19", "Persona 22"],
    responsibilities: ["Pagos", "Comprobantes", "Estados administrativos", "Habilitacion de certificados"],
    kpis: ["Pagos conciliados", "Bloqueos resueltos", "Documentos completos", "Reclamos administrativos"],
    cadences: ["Chequeo diario", "Cierre semanal", "Auditoria mensual"],
    risks: ["Alumno pagado sin acceso", "Certificado retenido sin causa clara", "Doble registro"],
    automation: "Agente #18 sincroniza pago, documento, acceso y certificado."
  }
];

export const marketingProcesses: MarketingProcess[] = [
  {
    id: "MKT-01",
    title: "Ads para cursos Training",
    objective: "Del brief del curso al ajuste continuo de campanas de captacion.",
    lead: "Persona 12",
    stages: ["Brief e insumos", "Planificacion funnel", "Produccion piezas", "Produccion video", "Validacion", "Lanzamiento", "Reporte", "Feedback ventas", "Ajuste"],
    evidence: "Brief, piezas aprobadas, campana activa, reporte CPL y feedback comercial.",
    automation: "Agente #12 alerta CPL y Agente #16 cruza calidad de leads."
  },
  {
    id: "MKT-02",
    title: "AECODE AI Summit y eventos",
    objective: "Coordinar estrategia, agenda, activos, difusion, inscritos y seguimiento.",
    lead: "Persona 14",
    stages: ["Estrategia", "Planificacion", "Diseno visual", "Landing/web", "Difusion", "Ads", "Ejecucion", "Post-evento"],
    evidence: "Tablero de evento, landing, piezas, inscritos, sponsors y follow-up.",
    automation: "Agente #13 genera semaforo de evento y tareas vencidas."
  },
  {
    id: "MKT-03",
    title: "Difusion multicanal",
    objective: "Publicar por canal correcto y registrar fuente, copy, CTA y resultado.",
    lead: "Persona 15",
    stages: ["Pieza aprobada", "Canales definidos", "Programacion", "Publicacion", "Registro", "Respaldo Drive", "Reporte"],
    evidence: "Registro por WhatsApp, Facebook, YouTube, web y fuente de campana.",
    automation: "Agente #10 genera checklist y alertas 72h/24h."
  },
  {
    id: "MKT-04",
    title: "Clips de webinar",
    objective: "Transformar sesiones largas en clips, shorts y activos reutilizables.",
    lead: "Persona 17",
    stages: ["Grabacion", "Transcripcion", "Seleccion de cortes", "Guion", "Edicion", "Aprobacion", "Publicacion", "Reuso en ads"],
    evidence: "Backlog de clips, piezas finales, publicacion y CTA asociado.",
    automation: "Agente #15 propone cortes y genera backlog de clips."
  },
  {
    id: "MKT-05",
    title: "Optimizacion y automatizacion",
    objective: "Detectar una oportunidad por area y convertirla en piloto medible.",
    lead: "Persona 11",
    stages: ["Levantamiento", "Mapa proceso", "Dolor operativo", "Propuesta", "Priorizacion", "Piloto", "Medicion", "Estandarizacion"],
    evidence: "Backlog de automatizacion con impacto, owner, estado y ahorro estimado.",
    automation: "Agente #11 consolida oportunidades y sugiere prioridad."
  },
  {
    id: "MKT-06",
    title: "Contenido organico y web",
    objective: "Mantener contenido publico, brochures, YouTube y web alineados con campanas.",
    lead: "Persona 15",
    stages: ["Post/video listo", "QA marca", "Publicacion", "Actualizacion web", "Respaldo Drive", "Medicion", "Reciclaje"],
    evidence: "URL publica, asset respaldado, version vigente y fuente registrada.",
    automation: "Agente #14 controla cola web y QA de publicacion."
  }
];

export const cultureClusters: CultureCluster[] = [
  {
    id: "CUL-01",
    cluster: "Presencia y foco",
    principle: "En un ecosistema digital distribuido, la presencia es un acto deliberado.",
    habits: ["Conectado 9:00 am", "Estado activo visible", "Bloques de deep work sin ruido"],
    operatingRule: "El dia empieza con disponibilidad visible y foco real; presencia no es solo estar conectado.",
    evidence: "Check-in diario y bloque de trabajo declarado.",
    metric: "Check-ins completos / dias laborales"
  },
  {
    id: "CUL-02",
    cluster: "Comunicacion y trazabilidad",
    principle: "Un equipo que no se comunica bien hacia adentro no puede comunicar bien hacia afuera.",
    habits: ["Estatus diario", "Acuse de recibo", "Canal grupal para temas compartidos", "Reporte semanal"],
    operatingRule: "Toda coordinacion que impacta a mas de una persona vive en canal compartido.",
    evidence: "Mensaje diario: hecho, logrado, aprendido, bloqueo y proximo paso.",
    metric: "Reportes diarios entregados / reportes esperados"
  },
  {
    id: "CUL-03",
    cluster: "Ejecucion y cierre",
    principle: "AECODE produce en ciclos cortos; cerrar es parte de la propuesta de valor.",
    habits: ["Cerrar algo al dia", "Avances parciales", "Lista de actividades actualizada"],
    operatingRule: "No acumular en proceso; cada dia debe producir un entregable verificable.",
    evidence: "Actividad cerrada, decision tomada, pieza publicada o bloqueo escalado.",
    metric: "Entregables cerrados por persona / semana"
  },
  {
    id: "CUL-04",
    cluster: "Alineacion al negocio y al rol",
    principle: "Cada accion debe conectar con plataforma, comunidad, aprendizaje, crecimiento o revenue.",
    habits: ["Conocer rol", "Priorizar por impacto", "Preguntar que mueve la aguja", "Conectar con NSM"],
    operatingRule: "Antes de iniciar una tarea: confirmar si ayuda a skills verificadas, comunidad, experiencia, marca o MRR.",
    evidence: "Actividad vinculada a dominio, KPI o sprint.",
    metric: "Actividades con KPI asociado / total de actividades"
  },
  {
    id: "CUL-05",
    cluster: "Conocimiento, aprendizaje y comunidad",
    principle: "El aprendizaje interno es insumo de producto, contenido y comunidad.",
    habits: ["Aprendizaje compartido", "Medir mejora", "Leer herramientas", "Pensamiento critico", "Participar en eventos"],
    operatingRule: "Cada aprendizaje reutilizable debe convertirse en nota, capsula, practica o mejora de proceso.",
    evidence: "Mini-post, nota, playbook, mejora o insight de evento.",
    metric: "Aprendizajes reutilizados / semana"
  },
  {
    id: "CUL-06",
    cluster: "Documentacion, sintesis y presentacion",
    principle: "Documentar no es administracion; es una habilidad de producto.",
    habits: ["Documentar avances", "Orden operativo", "Sintesis tipo embudo", "Mapa A3", "Preguntas buenas", "Aportes"],
    operatingRule: "Todo proceso relevante debe dejar mapa, resumen o evidencia para que otro pueda continuarlo.",
    evidence: "Nota, A3, checklist, SOP, tablero o resumen ejecutivo.",
    metric: "Procesos documentados / procesos recurrentes"
  }
];

export const cultureRituals: CultureRitual[] = [
  { ritual: "Check-in de inicio", frequency: "Diario 9:00 am", format: "Estado visible", channel: "Discord", owner: "Cada Persona" },
  { ritual: "Estatus de avance", frequency: "Diario cierre", format: "Hecho, logrado, aprendido, bloqueo, proximo paso", channel: "Grupo Discord", owner: "Cada Persona" },
  { ritual: "Lista de actividades", frequency: "Diario", format: "Actualizacion personal", channel: "Notion / tablero", owner: "Cada Persona" },
  { ritual: "Reporte semanal", frequency: "Viernes", format: "Resumen por area", channel: "Grupo + archivo", owner: "Lead de area" },
  { ritual: "Retrospectiva de area", frequency: "Quincenal", format: "Reunion corta", channel: "Video call", owner: "Lead de area" },
  { ritual: "Aprendizaje compartido", frequency: "Semanal", format: "Mini-post o nota", channel: "Canal aprendizajes", owner: "Cada Persona" },
  { ritual: "Retrospectiva de evento", frequency: "Post-evento", format: "Informe de cierre", channel: "Notion", owner: "Persona 14" },
  { ritual: "Trazabilidad mensual", frequency: "Fin de mes", format: "Entregables, metricas y aprendizajes", channel: "Dashboard", owner: "Persona 22" }
];

export const cultureValues = [
  "Compromiso: cumplir acuerdos, cerrar tareas y hacerse cargo del impacto.",
  "Honestidad: comunicacion directa y feedback sin agresion.",
  "Gratitud: reconocer aportes y evitar ego operativo.",
  "Proactividad: anticiparse, proponer y ejecutar sin permiso innecesario.",
  "Innovacion: mejorar procesos y convertir ideas en entregables.",
  "Comunicacion: mensajes claros, alineacion explicita y escucha activa.",
  "Aprendizaje: aprender rapido, aplicar rapido y ensenar lo aprendido."
];

export const cultureAntiValues = [
  "Incumplimiento recurrente",
  "Falta de trazabilidad",
  "Excusas constantes",
  "Ocultar errores",
  "Individualismo",
  "Desorden operativo cronico",
  "Falta de respeto"
];

export const opsSources: OpsSource[] = [
  {
    label: "Actividades TEAM",
    path: "D:/AP/AP_Knowledge_OS/09_Actividades Diarias/Actividades_TEAM",
    use: "Fichas por persona, responsabilidades, reportes y actividades consolidadas.",
    privacy: "Critico"
  },
  {
    label: "Proceso coordinacion academica",
    path: "D:/AP/AP_Knowledge_OS/05_Mapeo de Procesos/Coordinacion-Academica-Postventa-AECODE",
    use: "Roles recomendados, flujos 72h, KPIs, riesgos y responsabilidades AECODE.",
    privacy: "Critico"
  },
  {
    label: "Sistema operativo AECODE",
    path: "D:/AP/AP_Knowledge_OS/02_EMPRESAS/AECODE/00_AECODE-Sistema-Operativo",
    use: "Contexto empresarial, producto, comunidad, comercial y educacion.",
    privacy: "Interno"
  },
  {
    label: "Sheet academico",
    path: "AECODE | AREA ACADEMICA | STATUS GENERAL",
    use: "Status de programas, grabaciones, transcripciones, certificados, grupos WSP y soporte.",
    privacy: "Critico"
  }
];

export const linkMetrics: ContentMetric[] = [
  { label: "Links unicos", value: linkAssets.length, target: linkAssets.length, context: "Extraidos del chat WhatsApp operativo" },
  { label: "Google Sheets", value: linkAssets.filter((item) => item.category === "Google Sheet").length, target: linkAssets.length, context: "Registros, status y bases operativas" },
  { label: "Miro boards", value: linkAssets.filter((item) => item.category === "Miro").length, target: linkAssets.length, context: "Recursos de programas, convenios y sesiones" },
  { label: "Links criticos", value: linkAssets.filter((item) => item.privacy === "Critico").length, target: linkAssets.length, context: "No deben publicarse completos" }
];

export const contentMetrics: ContentMetric[] = [
  { label: "Transcripciones mapeadas", value: 239, target: 239, context: "Resumen del Sheet academico" },
  { label: "Videos plataforma mapeados", value: 311, target: 311, context: "Total 2025+2026" },
  { label: "Videos 2026", value: 263, target: 263, context: "Resumen de subida de videos" },
  { label: "Programas con WSP mapeado", value: 7, target: 7, context: "Pestana ENLACES GRUPOS WHATSAPP" },
  { label: "Subgrupos WSP programa", value: 14, target: 14, context: "Coordinacion y participantes por programa" },
  { label: "Programas con riesgo de acceso", value: 4, target: 0, context: "Matriz de plataforma, Zoom, WSP y formularios" },
  { label: "Actividades automatizables", value: activities.filter((item) => item.automationLevel !== "Baja").length, target: activities.length, context: "Actividades pegadas + modelo operativo" },
  { label: "Roles operativos anonimos", value: opsRoles.length, target: opsRoles.length, context: "Equipo completo AECODE por responsabilidad" },
  { label: "Procesos marketing", value: marketingProcesses.length, target: marketingProcesses.length, context: "Panel HTML de marketing normalizado" }
];

export const sourceNotes = [
  "Sheet leido por Drive como AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx.",
  "Pestana ENLACES GRUPOS WHATSAPP leida: 7 programas, 14 subgrupos por programa y registros de instructores.",
  "Chat WhatsApp, Sheet y Notion revisados para inventariar links; se registraron 34 activos.",
  "El link Notion AECODE Training directo no fue accesible por fetch; busqueda interna encontro una base relacionada con frecuencia, estado y semanas.",
  "No se publican links privados de WhatsApp, Zoom, Classroom, Miro o Drive.",
  "Panel HTML de marketing integrado como procesos anonimizados: ads, Summit, difusion, clips, web y automatizacion.",
  "El control maestro ya no se limita a coordinacion academica; incluye direccion, producto, marketing, comercial, eventos, finanzas, datos y BI.",
  "Cultura-AECODE.md integrada como reglas operativas: presencia, trazabilidad, cierre, aprendizaje, documentacion y alineacion al negocio.",
  "Los owners reales fueron anonimizados como Persona N.",
  "Las automatizaciones se expresan como Agente #N para disenar pilotos sin exponer responsables."
];

export const getPriorityWeight = (priority: Priority) => {
  if (priority === "Critica") return 4;
  if (priority === "Alta") return 3;
  if (priority === "Media") return 2;
  return 1;
};

export const getReadinessScore = (program: ProgramStatus) => {
  const checks = [
    program.platform === "SI",
    program.classroom === "SI",
    program.miro === "SI" || program.miro === "NO APLICA",
    program.zoom === "SI",
    program.wsp === "SI",
    program.absenceForm === "Listo",
    program.ambassador === "Asignado"
  ];

  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
};
