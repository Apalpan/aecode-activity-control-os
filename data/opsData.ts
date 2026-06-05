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

export const areas = [
  "Accesos y soporte",
  "Datos",
  "Sesiones",
  "Contenido",
  "Comunidad",
  "Embajadores",
  "Difusion",
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
  { id: "Agente #10", mission: "Planificar difusion WSP, Facebook y YouTube.", input: "Campana o evento", output: "Envios y posts registrados", humanControl: "Persona 8 aprueba mensaje", status: "Propuesto", impact: "Medio" }
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

export const contentMetrics: ContentMetric[] = [
  { label: "Transcripciones mapeadas", value: 239, target: 239, context: "Resumen del Sheet academico" },
  { label: "Videos plataforma mapeados", value: 311, target: 311, context: "Total 2025+2026" },
  { label: "Videos 2026", value: 263, target: 263, context: "Resumen de subida de videos" },
  { label: "Programas con riesgo de acceso", value: 4, target: 0, context: "Matriz de plataforma, Zoom, WSP y formularios" },
  { label: "Actividades automatizables", value: activities.filter((item) => item.automationLevel !== "Baja").length, target: activities.length, context: "Actividades pegadas + modelo operativo" }
];

export const sourceNotes = [
  "Sheet leido por Drive como AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx.",
  "No se publican links privados de WhatsApp, Zoom, Classroom, Miro o Drive.",
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
