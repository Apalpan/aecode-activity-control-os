export type Priority = "Critica" | "Alta" | "Media" | "Baja";
export type AutomationLevel = "Alta" | "Media" | "Baja";
export type ActivityStatus = "Activo" | "Pendiente" | "Riesgo" | "Listo";
export type Confidence = "Alta" | "Media" | "Baja" | "Asumida";

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

export type WorkflowStepStatus = "Listo" | "En curso" | "Riesgo" | "Automatizable";

export type WorkflowPlaybookStep = {
  id: string;
  label: string;
  timing: string;
  owner: string;
  team: string[];
  entry: string;
  action: string;
  output: string;
  evidence: string;
  systems: string[];
  automation: string;
  status: WorkflowStepStatus;
  risk: string;
  linkedActivities: string[];
};

export type WorkflowHandoff = {
  from: string;
  to: string;
  rule: string;
};

export type WorkflowPlaybook = {
  id: string;
  title: string;
  domain: string;
  trigger: string;
  goal: string;
  lead: string;
  cycle: string;
  kpi: string;
  agent: string;
  steps: WorkflowPlaybookStep[];
  handoffs: WorkflowHandoff[];
  escalations: string[];
  doneDefinition: string[];
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

export type OperatingBoundary = {
  id: string;
  topic: string;
  routeTo: "AECODE" | "GEN+" | "Compartido";
  criterion: string;
  examples: string[];
  owner: string;
  evidence: string;
  risk: string;
};

export type EcosystemCompany = {
  id: string;
  company: "GEN+" | "AECODE" | "THESIA" | "SP+ / VisionPro" | "Ecosistema AP";
  type: string;
  state: "Activa" | "En construccion" | "Piloto comercial" | "Direccion";
  color: string;
  operatingFocus: string;
};

export type EcosystemProject = {
  id: string;
  project: string;
  company: EcosystemCompany["company"];
  progress: string;
  status: "Activo" | "MVP funcional" | "Planificando" | "Definicion" | "En curso" | "Piloto activo";
  nextAction: string;
  owner: string;
  risk: string;
};

export type FlywheelLayer = {
  layer: "Comunidad" | "Educacion" | "Producto" | "Autoridad" | "Data" | "IA" | "Escala";
  signal: string;
  dashboardQuestion: string;
  owner: string;
  lagRisk: string;
};

export type ActivityFieldSpec = {
  field: string;
  type: string;
  rule: string;
  required: boolean;
};

export type ExecutiveView = {
  id: string;
  tab: string;
  audience: string;
  frequency: string;
  purpose: string;
};

export type OperatingRule = {
  id: string;
  cadence: string;
  rule: string;
  owner: string;
  evidence: string;
};

export type EcosystemMetric = {
  id: string;
  company: EcosystemCompany["company"] | "Marketing & Growth";
  metric: string;
  target: string;
  frequency: string;
  owner: string;
};

export type ExecutionStatus = "Listo" | "En curso" | "Riesgo" | "Bloqueado" | "Automatizable" | "Requiere decision";

export type DailyExecutionItem = {
  id: string;
  title: string;
  area: string;
  owner: string;
  backup: string;
  playbookId: string;
  priority: Priority;
  status: ExecutionStatus;
  due: string;
  source: string;
  evidence: string;
  nextBestAction: string;
  escalation: string;
  agent: string;
  system: string;
  decisionNeeded: string;
};

export type AgentContract = {
  id: string;
  name: string;
  owner: string;
  objective: string;
  trigger: string;
  inputPayload: string[];
  validations: string[];
  idempotency: string;
  tools: string[];
  permissions: string;
  output: string;
  logs: string;
  retries: string;
  fallback: string;
  humanApproval: string;
  privacyRisk: "Bajo" | "Medio" | "Alto" | "Critico";
  status: "Diseno" | "Piloto" | "Produccion propuesta";
};

export type DataEntityContract = {
  entity: string;
  key: string;
  purpose: string;
  minimumFields: string[];
  relations: string[];
  stateField: string;
  sourceField: string;
  updatedField: string;
  security: "Publico" | "Interno" | "Critico";
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
  "Alianzas",
  "Eventos",
  "Reuniones",
  "QA",
  "Web",
  "UX/UI",
  "Programas",
  "Documentacion",
  "Capacitacion IA",
  "Computer Vision",
  "Producto digital",
  "AI Ops",
  "Diseno",
  "Automatizacion",
  "Finanzas",
  "Producto",
  "Tecnologia",
  "BIM",
  "Plataforma",
  "Certificados"
];

export const ecosystemCompanies: EcosystemCompany[] = [
  { id: "COMP-01", company: "GEN+", type: "Consultoria implementacion AEC + IA", state: "Activa", color: "#1E6FFF", operatingFocus: "Productividad, proyectos cliente, automatizacion, BIM/VDC, comercial y casos empresariales." },
  { id: "COMP-02", company: "AECODE", type: "Plataforma skills verificables AEC", state: "Activa", color: "#7B2FBE", operatingFocus: "Learning OS, rutas, evidencias, Skill Passport, certificados, comunidad y crecimiento educativo." },
  { id: "COMP-03", company: "THESIA", type: "I+D, datasets e IP tecnica", state: "En construccion", color: "#22A869", operatingFocus: "Investigacion aplicada, propiedad intelectual, datasets, plantillas y activos reutilizables." },
  { id: "COMP-04", company: "SP+ / VisionPro", type: "Monitoreo visual de obra con IA", state: "Piloto comercial", color: "#0EA5E9", operatingFocus: "Timelapse, computer vision, evidencias de obra, reportes ejecutivos y paquetes comerciales." },
  { id: "COMP-05", company: "Ecosistema AP", type: "Direccion, flywheel y portafolio", state: "Direccion", color: "#374151", operatingFocus: "Comunidad, educacion, producto, autoridad, data, IA y escala con minima dependencia de horas humanas." }
];

export const ecosystemProjects: EcosystemProject[] = [
  { id: "ECO-01", project: "AECODE 3.0 - Learning OS", company: "AECODE", progress: "46%", status: "Activo", nextAction: "Llevar demo al 70% y cerrar taxonomia curso/modulo/skill/capsula.", owner: "Persona 20", risk: "Sin taxonomia clara, el producto se queda como curso online y no como skill verification." },
  { id: "ECO-02", project: "VisionPro - Monitoreo IA", company: "SP+ / VisionPro", progress: "Piloto activo", status: "Piloto activo", nextAction: "Estructurar costos y paquetes timelapse basico + IA.", owner: "Marlon / Emanuel", risk: "Piloto sin paquete comercial impide cerrar aprendizaje y precio repetible." },
  { id: "ECO-03", project: "AgentFlow - Automatizaciones", company: "GEN+", progress: "34%", status: "Activo", nextAction: "Mantener N8N privado, KVM4, Redis y Cloudflare con tablero de salud.", owner: "Persona 27", risk: "Automatizaciones sin health dashboard se vuelven caja negra y riesgo operativo." },
  { id: "ECO-04", project: "ICEBOT - Agente de reuniones", company: "GEN+", progress: "MVP funcional", status: "MVP funcional", nextAction: "Construir panel de acuerdos trazables y acciones ejecutables.", owner: "Persona 27", risk: "Sin seguimiento visible, el agente resume reuniones pero no mueve compromisos." },
  { id: "ECO-05", project: "AI Construction Summit", company: "GEN+", progress: "Planificando", status: "Planificando", nextAction: "Confirmar sponsors y alianzas CCL + CIP minimas.", owner: "Persona 14", risk: "Evento sin sponsors/alianzas confirmadas reduce autoridad y caja." },
  { id: "ECO-06", project: "Qawari AI", company: "GEN+", progress: "Definicion", status: "Definicion", nextAction: "Precisar caso de uso, ICP y MVP.", owner: "Persona 10", risk: "Sin ICP, el MVP puede quedar tecnologico pero sin comprador claro." },
  { id: "ECO-07", project: "Programa UTEC 2026", company: "AECODE", progress: "En curso", status: "En curso", nextAction: "Convertir aprendizajes en modulos AECODE/AgentFlow.", owner: "Persona 20", risk: "Si no se empaqueta, el aprendizaje queda como entrega aislada y no como activo reusable." },
  { id: "ECO-08", project: "THESIA IP", company: "THESIA", progress: "Planificacion", status: "Planificando", nextAction: "Entregar 1 activo IP antes del 2026-07-01.", owner: "Persona 10", risk: "Sin activo IP fechado, THESIA no materializa investigacion en propiedad reutilizable." },
  { id: "ECO-09", project: "Cotizacion ESPARQ SaaS", company: "GEN+", progress: "47/84 pts", status: "Activo", nextAction: "Dar seguimiento a respuesta esperada post 2026-06-03.", owner: "Persona 25", risk: "Cotizacion sin siguiente accion cae fuera del pipeline y del forecast." }
];

export const flywheelLayers: FlywheelLayer[] = [
  { layer: "Comunidad", signal: "Leads, publicaciones, grupos y embajadores activos.", dashboardQuestion: "Que comunidad esta generando demanda y evidencia?", owner: "Persona 6", lagRisk: "Sin comunidad activa baja el top del funnel educativo." },
  { layer: "Educacion", signal: "Onboarding, skill start, evidencias y certificados.", dashboardQuestion: "Que usuarios llegaron a primera skill verificada?", owner: "Persona 20", lagRisk: "Sin verificacion AECODE se percibe como academia generica." },
  { layer: "Producto", signal: "Roadmap, sprints, bugs, UX y features con uso real.", dashboardQuestion: "Que feature reduce friccion o aumenta skill verified?", owner: "Persona 20", lagRisk: "Producto avanza sin mover la North Star Metric." },
  { layer: "Autoridad", signal: "Summit, webinars, casos, sponsors y alianzas.", dashboardQuestion: "Que activo aumenta autoridad comercial esta semana?", owner: "Persona 14", lagRisk: "Sin autoridad, comunidad y ventas dependen demasiado de pauta." },
  { layer: "Data", signal: "GHL, Sheets, evidencias, BI y fuentes sincronizadas.", dashboardQuestion: "Que dato permite decidir mejor hoy?", owner: "Persona 22", lagRisk: "Sin datos confiables, los dashboards se vuelven decorativos." },
  { layer: "IA", signal: "Agentes, n8n, evaluadores, copilotos y automatizaciones.", dashboardQuestion: "Que tarea recurrente se elimina o acelera con agente IA?", owner: "Persona 27", lagRisk: "La operacion escala por horas humanas y no por sistemas." },
  { layer: "Escala", signal: "Conversion, retencion, revenue, repos y SOPs reutilizables.", dashboardQuestion: "Que proceso ya puede repetirse sin Alejandro?", owner: "Persona 10", lagRisk: "El ecosistema crece, pero sigue dependiendo de intervencion manual." }
];

export const activityFieldSpecs: ActivityFieldSpec[] = [
  { field: "empresa", type: "Select", rule: "GEN+ / AECODE / THESIA / SP+ / Ecosistema.", required: true },
  { field: "area", type: "Select", rule: "Marketing, Ventas, Producto, Dev, Educacion, Comunidad, Soporte, Testing, Admin, I+D o Direccion.", required: true },
  { field: "proyecto_programa", type: "Link/Text", rule: "Debe apuntar a programa, proyecto, sprint o iniciativa concreta.", required: true },
  { field: "sprint_fase", type: "Text", rule: "Sprint actual, fase de roadmap o ciclo operativo.", required: true },
  { field: "rol", type: "Select", rule: "Dev, Growth, Coord. Academico, Instructor, Embajador, Ventas, Soporte, Testing o Direccion.", required: true },
  { field: "responsable", type: "Persona", rule: "Exactamente 1 nombre real. 'Equipo' no es responsable valido.", required: true },
  { field: "actividad", type: "Text", rule: "Descripcion breve de la tarea.", required: true },
  { field: "accion_concreta", type: "Text", rule: "Verbo + objeto + resultado esperado.", required: true },
  { field: "entregable", type: "Text", rule: "Artefacto fisico o digital medible.", required: true },
  { field: "prioridad", type: "Select", rule: "Critica, Alta, Media o Baja.", required: true },
  { field: "estado", type: "Select", rule: "Pendiente, En curso, Completado, Bloqueado, En revision o En espera.", required: true },
  { field: "fecha_inicio", type: "Date", rule: "Formato YYYY-MM-DD.", required: true },
  { field: "fecha_limite", type: "Date", rule: "Obligatoria para alertas y escalamiento.", required: true },
  { field: "dependencia", type: "Link/Text", rule: "Persona o tarea concreta. No usar 'depende del cliente' sin accion de seguimiento.", required: true },
  { field: "metrica_asociada", type: "Text", rule: "KPI que mueve esta actividad.", required: true },
  { field: "evidencia_link", type: "URL", rule: "Sin evidencia el entregable queda incompleto.", required: true },
  { field: "observacion", type: "Text", rule: "Contexto, riesgo o nota operativa.", required: false },
  { field: "proximo_paso", type: "Text", rule: "Verbo + objeto + fecha + responsable.", required: true },
  { field: "flywheel_capa", type: "Select", rule: "Comunidad, Educacion, Producto, Autoridad, Data, IA o Escala.", required: true }
];

export const dataEntityContracts: DataEntityContract[] = [
  {
    entity: "Person",
    key: "person_id",
    purpose: "Identidad operativa del equipo, nucleo o red extendida.",
    minimumFields: ["person_id", "name", "role_id", "squad", "seat_type", "load_signal", "status"],
    relations: ["role_id", "activity_id", "playbook_id", "agent_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "Role",
    key: "role_id",
    purpose: "Responsabilidad estable, mision, backup, KPI y escalamiento.",
    minimumFields: ["role_id", "role_name", "mission", "daily_check", "backup_person_id", "escalation_rule"],
    relations: ["person_id", "activity_id", "domain_id"],
    stateField: "role_status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "Activity",
    key: "activity_id",
    purpose: "Unidad minima de trabajo con owner, SLA, evidencia y proximo paso.",
    minimumFields: ["activity_id", "area", "title", "owner_person_id", "backup_person_id", "priority", "status", "due_at", "evidence_id"],
    relations: ["person_id", "agent_id", "playbook_id", "source_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "Playbook",
    key: "playbook_id",
    purpose: "Flujo repetible por trigger, etapas, handoffs, SLA y criterio de terminado.",
    minimumFields: ["playbook_id", "title", "domain", "trigger", "goal", "lead_person_id", "kpi", "status"],
    relations: ["step_id", "agent_id", "activity_id", "escalation_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "PlaybookStep",
    key: "step_id",
    purpose: "Paso ejecutable con entrada, validacion, salida, owner y evidencia.",
    minimumFields: ["step_id", "playbook_id", "label", "owner_person_id", "input", "validation", "output", "sla", "evidence_id", "status"],
    relations: ["playbook_id", "person_id", "agent_id", "system_id", "activity_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "Agent",
    key: "agent_id",
    purpose: "Contrato auditable de agente con trigger, herramientas, permisos, logs y aprobacion humana.",
    minimumFields: ["agent_id", "name", "objective", "trigger", "owner_person_id", "permissions", "human_approval", "privacy_risk", "status"],
    relations: ["activity_id", "playbook_id", "status_log_id", "system_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Critico"
  },
  {
    entity: "System",
    key: "system_id",
    purpose: "Sistema conectado o fuente operativa: GHL, Sheets, Notion, Drive, Zoom, plataforma, GitHub.",
    minimumFields: ["system_id", "name", "category", "owner_person_id", "privacy_level", "connection_state"],
    relations: ["activity_id", "agent_id", "source_id"],
    stateField: "connection_state",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Critico"
  },
  {
    entity: "Evidence",
    key: "evidence_id",
    purpose: "Prueba de cierre: link seguro, captura, log, acta, reporte, certificado o video publicado.",
    minimumFields: ["evidence_id", "type", "secure_reference", "owner_person_id", "related_entity", "validation_state"],
    relations: ["activity_id", "step_id", "status_log_id"],
    stateField: "validation_state",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Critico"
  },
  {
    entity: "Escalation",
    key: "escalation_id",
    purpose: "Registro de bloqueo, decision requerida, dias sin resolver y responsable de desbloqueo.",
    minimumFields: ["escalation_id", "activity_id", "severity", "reason", "requested_decision", "owner_person_id", "deadline", "status"],
    relations: ["activity_id", "person_id", "playbook_id", "status_log_id"],
    stateField: "status",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Interno"
  },
  {
    entity: "Source",
    key: "source_id",
    purpose: "Trazabilidad de origen: Obsidian, Notion, Sheet, Drive, chat, PDF, repo o instruccion directa.",
    minimumFields: ["source_id", "label", "source_type", "privacy", "secure_reference", "last_checked_at"],
    relations: ["activity_id", "person_id", "agent_id", "evidence_id"],
    stateField: "privacy",
    sourceField: "source_id",
    updatedField: "updated_at",
    security: "Critico"
  },
  {
    entity: "StatusLog",
    key: "status_log_id",
    purpose: "Bitacora auditable de cambios de estado, agente, humano, errores y retry.",
    minimumFields: ["status_log_id", "entity_type", "entity_id", "previous_state", "new_state", "actor_type", "actor_id", "reason"],
    relations: ["activity_id", "agent_id", "person_id", "evidence_id"],
    stateField: "new_state",
    sourceField: "source_id",
    updatedField: "created_at",
    security: "Critico"
  }
];

export const executiveViews: ExecutiveView[] = [
  { id: "VIEW-01", tab: "Centro de Control", audience: "Alejandro + lideres", frequency: "Diaria", purpose: "Bloqueos top 5, prioridades del dia, semaforo por empresa y flywheel health." },
  { id: "VIEW-02", tab: "Equipo y Roles", audience: "Todos", frequency: "Semanal", purpose: "Carga visual por persona, actividades y proximo entregable." },
  { id: "VIEW-03", tab: "AECODE Operaciones", audience: "AECODE team", frequency: "Diaria", purpose: "AECODE 2.0/3.0, ventas, coordinacion academica y postventa." },
  { id: "VIEW-04", tab: "GEN+ Proyectos", audience: "GEN+ team + direccion", frequency: "Semanal", purpose: "Pipeline comercial, delivery, cobranzas y portafolio." },
  { id: "VIEW-05", tab: "Training / Cursos", audience: "Coordinacion e instructores", frequency: "Diaria", purpose: "Sesiones, materiales, grabaciones y certificados." },
  { id: "VIEW-06", tab: "Marketing & Growth", audience: "Anggie / Arantxa", frequency: "Diaria en campanas", purpose: "Calendario, metricas ADS, creativos y conversion." },
  { id: "VIEW-07", tab: "Ventas / WhatsApp", audience: "Ventas y coordinacion", frequency: "Diaria", purpose: "Funnel de leads por etapa y seguimientos del dia." },
  { id: "VIEW-08", tab: "Comunidad / Embajadores", audience: "Embajadores y coordinacion", frequency: "Semanal", purpose: "Leads y publicaciones semanales por persona." },
  { id: "VIEW-09", tab: "Instructores", audience: "Instructores y coordinacion", frequency: "Por sesion", purpose: "Sesiones, materiales, proxima clase y alertas." },
  { id: "VIEW-10", tab: "Testing / Soporte / Bugs", audience: "Soporte, testing y dev", frequency: "Diaria", purpose: "Bugs, incidencias abiertas, retest y alumnos sin acceso." },
  { id: "VIEW-11", tab: "Producto / Dev", audience: "Marlon, Emanuel, Fabrizio", frequency: "Diaria en sprint", purpose: "Sprint board, backlog, roadmap 90 dias y estado tecnico." },
  { id: "VIEW-12", tab: "Metricas", audience: "Alejandro y lideres", frequency: "Semanal", purpose: "NSM, activacion, retencion, monetizacion y comercial." },
  { id: "VIEW-13", tab: "Bloqueos", audience: "Todos", frequency: "Diaria", purpose: "Solo bloqueados, ordenados por dias sin resolver." },
  { id: "VIEW-14", tab: "Automatizaciones", audience: "Marlon, Fabrizio y direccion", frequency: "Semanal", purpose: "Agentes activos, flujos y candidatos de automatizacion." },
  { id: "VIEW-15", tab: "Documentacion", audience: "Todos", frequency: "Referencia", purpose: "Links a Obsidian, Drive, SOPs, Loom y decisiones." }
];

export const operatingRules: OperatingRule[] = [
  { id: "RULE-01", cadence: "Diario 09:00", rule: "Cada responsable actualiza estado de sus actividades activas.", owner: "Cada responsable", evidence: "Estado actualizado con proximo paso." },
  { id: "RULE-02", cadence: "Diario", rule: "Ventas actualiza leads y seguimientos del dia.", owner: "Talia / Yadira", evidence: "Lead con etapa, objecion y proxima accion." },
  { id: "RULE-03", cadence: "Diario", rule: "Coordinacion academica confirma links y materiales de clases del dia.", owner: "Persona 3", evidence: "Zoom, materiales, grupo y soporte listos." },
  { id: "RULE-04", cadence: "Diario", rule: "Soporte/testing registra incidencias nuevas con evidencia.", owner: "Jordi", evidence: "Bug o incidencia con captura, impacto y responsable." },
  { id: "RULE-05", cadence: "Viernes", rule: "Todos cierran actividades completadas y bloqueos abiertos.", owner: "Lead de area", evidence: "Cierre semanal con entregables y bloqueos." },
  { id: "RULE-06", cadence: "Automatica", rule: "Fecha limite vencida sin estado alerta al responsable y Alejandro.", owner: "Agente #19", evidence: "Alerta con tarea, dias de atraso y siguiente accion." },
  { id: "RULE-07", cadence: "Automatica", rule: "Bloqueo mayor a 3 dias escala a Alejandro.", owner: "Agente #11", evidence: "Escalamiento con dependencia concreta." },
  { id: "RULE-08", cadence: "Calidad dato", rule: "Actividad sin evidencia_link se considera incompleta.", owner: "Persona 22", evidence: "Campo evidencia o enlace interno seguro." },
  { id: "RULE-09", cadence: "Calidad dato", rule: "Bug no se cierra sin confirmacion de retest documentado.", owner: "Jordi", evidence: "Campo evidencia_retest completado." },
  { id: "RULE-10", cadence: "Calidad dato", rule: "Sin actualizar en 7+ dias genera badge de riesgo visible.", owner: "Agente #19", evidence: "Badge de riesgo en Centro de Control." }
];

export const ecosystemMetrics: EcosystemMetric[] = [
  { id: "MET-01", company: "AECODE", metric: "Skills verificadas / usuario activo mensual", target: ">20%", frequency: "Mensual", owner: "Producto + Educacion" },
  { id: "MET-02", company: "AECODE", metric: "TTFSV - Time to First Skill Verified", target: "<7 dias", frequency: "Por cohorte", owner: "Producto" },
  { id: "MET-03", company: "AECODE", metric: "Landing Conversion Rate", target: ">15%", frequency: "Diaria/campana", owner: "Growth + Producto" },
  { id: "MET-04", company: "AECODE", metric: "Onboarding Completion", target: ">65%", frequency: "Semanal", owner: "Educacion" },
  { id: "MET-05", company: "AECODE", metric: "Evidence Upload Rate", target: ">20% gate / >35% objetivo", frequency: "Semanal", owner: "Educacion + Producto" },
  { id: "MET-06", company: "GEN+", metric: "Conversion cotizacion -> proyecto ganado", target: "Seguimiento activo", frequency: "Semanal", owner: "Direccion + Comercial" },
  { id: "MET-07", company: "GEN+", metric: "Monto facturado vs cobrado / vencidos", target: "0 vencidos >30d", frequency: "Semanal", owner: "Administracion" },
  { id: "MET-08", company: "SP+ / VisionPro", metric: "Reportes ejecutivos entregados", target: "100% semanas activas", frequency: "Semanal", owner: "Daniella / Erika" },
  { id: "MET-09", company: "GEN+", metric: "AgentFlow uptime webhooks", target: ">99%", frequency: "Diaria", owner: "Marlon" },
  { id: "MET-10", company: "Marketing & Growth", metric: "CTR pauta pagada", target: ">2%", frequency: "Diaria en campanas", owner: "Anggie / Arantxa" },
  { id: "MET-11", company: "Marketing & Growth", metric: "CPL", target: "<3x precio programa basico", frequency: "Semanal por campana", owner: "Anggie / Arantxa" },
  { id: "MET-12", company: "Marketing & Growth", metric: "Conversion post-webinar", target: ">10% a siguiente oferta", frequency: "Por webinar", owner: "Growth + Comercial" }
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
  },
  {
    id: "ACT-034",
    area: "Tecnologia",
    activity: "Disenar arquitectura de productos desde cero",
    owner: "Persona 23",
    backup: "Persona 20",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Inicio de proyecto",
    evidence: "architecture decision record",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "Sin arquitectura base, los productos crecen con deuda tecnica y criterios inconsistentes.",
    nextAction: "Estandarizar ADR por proyecto: contexto, dominio, boundaries, stack, riesgos y decisiones."
  },
  {
    id: "ACT-035",
    area: "Tecnologia",
    activity: "Definir stack tecnico y estandares de ingenieria",
    owner: "Persona 23",
    backup: "Persona 11",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Antes de desarrollo",
    evidence: "engineering playbook",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "Cada proyecto puede implementar patrones distintos y perder mantenibilidad.",
    nextAction: "Crear reglas por stack: Go, Java, Next.js, auth, testing, errores, logs y deploy."
  },
  {
    id: "ACT-036",
    area: "Tecnologia",
    activity: "Modelar bases de datos, schemas y migraciones",
    owner: "Persona 23",
    backup: "Persona 22",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Antes de implementar feature",
    evidence: "schema + migracion",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por equipo tecnico",
    risk: "Datos mal modelados bloquean dashboards, permisos, pagos, evidencias y escalabilidad.",
    nextAction: "Vincular cada entidad a dominio, owner, privacy level y migration strategy."
  },
  {
    id: "ACT-037",
    area: "Tecnologia",
    activity: "Desarrollar APIs backend en Go/Fiber y Java/Spring",
    owner: "Persona 23",
    backup: "Persona 20",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Por sprint",
    evidence: "API versionada",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "APIs sin contrato claro rompen frontend, integraciones y automatizaciones.",
    nextAction: "Definir OpenAPI/contratos, errores estandar, versionado y pruebas de integracion."
  },
  {
    id: "ACT-038",
    area: "Tecnologia",
    activity: "Implementar auth, JWT, OTP, hashing, RBAC, colas, Redis y cache",
    owner: "Persona 23",
    backup: "Persona 11",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Por modulo critico",
    evidence: "security checklist",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "Permisos, seguridad y tareas asincronas mal definidas exponen datos o degradan experiencia.",
    nextAction: "Crear matriz RBAC por rol, flujo auth, jobs asincronos, cache keys y auditoria."
  },
  {
    id: "ACT-039",
    area: "Tecnologia",
    activity: "Integrar pagos y servicios externos como IziPay, S3 y correo",
    owner: "Persona 23",
    backup: "Persona 21",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Por lanzamiento",
    evidence: "integracion validada",
    status: "Pendiente",
    priority: "Alta",
    source: "Actividad enviada por equipo tecnico",
    risk: "Integraciones sin trazabilidad generan pagos inconsistentes, archivos perdidos o correos fallidos.",
    nextAction: "Documentar webhook, retry, logs, estados de pago, storage policy y alertas."
  },
  {
    id: "ACT-040",
    area: "Tecnologia",
    activity: "Construir frontends, dashboards, formularios, onboarding y paneles admin",
    owner: "Persona 23",
    backup: "Persona 20",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Por sprint",
    evidence: "flujo frontend validado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por equipo tecnico",
    risk: "UI sin flujo completo valida pantallas, pero no producto operativo.",
    nextAction: "Vincular cada pantalla a user story, datos, estado vacio, permisos y accion principal."
  },
  {
    id: "ACT-041",
    area: "Tecnologia",
    activity: "Configurar infra, AWS, serverless, Cognito, CDK, Docker y entornos",
    owner: "Persona 23",
    backup: "Persona 11",
    agent: "Agente #20",
    automationLevel: "Alta",
    sla: "Por ambiente",
    evidence: "deploy reproducible",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "Sin ambientes reproducibles, dev/prod divergen y los lanzamientos quedan fragiles.",
    nextAction: "Crear checklist por ambiente: variables, secretos, dominios, logs, backup y rollback."
  },
  {
    id: "ACT-042",
    area: "Tecnologia",
    activity: "Integrar IA, embeddings, pgvector, generacion y personalizacion",
    owner: "Persona 23",
    backup: "Persona 20",
    agent: "Agente #20",
    automationLevel: "Alta",
    sla: "Por caso de uso",
    evidence: "AI feature spec",
    status: "Pendiente",
    priority: "Alta",
    source: "Actividad enviada por equipo tecnico",
    risk: "IA sin criterios de evaluacion se vuelve demo aislada y no mejora aprendizaje ni operacion.",
    nextAction: "Definir input, output, evaluacion, trazabilidad, fallback y control humano."
  },
  {
    id: "ACT-043",
    area: "Producto",
    activity: "Entregar productos end-to-end en multiples verticales",
    owner: "Persona 23",
    backup: "Persona 10",
    agent: "Agente #20",
    automationLevel: "Media",
    sla: "Por roadmap",
    evidence: "release completo",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por equipo tecnico",
    risk: "Multiproyecto sin gobernanza dispersa foco tecnico y retrasa releases.",
    nextAction: "Priorizar por roadmap, owner de negocio, estado de release, deuda tecnica y riesgo."
  },
  {
    id: "ACT-044",
    area: "BIM",
    activity: "Modelado BIM y planos en BIM para proyectos academicos",
    owner: "Persona 24",
    backup: "Persona 20",
    agent: "Agente #21",
    automationLevel: "Baja",
    sla: "Por curso/proyecto",
    evidence: "modelo o plano BIM",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por soporte BIM",
    risk: "Sin activos BIM bien preparados, los cursos pierden calidad practica y evidencia tecnica.",
    nextAction: "Versionar modelos por curso, nivel, objetivo de aprendizaje y evidencia esperada."
  },
  {
    id: "ACT-045",
    area: "BIM",
    activity: "Configurar proyectos, plantillas, familias y recursos BIM",
    owner: "Persona 24",
    backup: "Persona 7",
    agent: "Agente #21",
    automationLevel: "Media",
    sla: "Antes de clase",
    evidence: "plantilla/familia lista",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por soporte BIM",
    risk: "Recursos sin estandar elevan friccion del instructor y del estudiante.",
    nextAction: "Crear libreria por disciplina, version, curso, uso permitido y owner."
  },
  {
    id: "ACT-046",
    area: "BIM",
    activity: "Crear scripts personales y automatizaciones BIM de apoyo",
    owner: "Persona 24",
    backup: "Persona 11",
    agent: "Agente #21",
    automationLevel: "Media",
    sla: "Por necesidad",
    evidence: "script documentado",
    status: "Pendiente",
    priority: "Media",
    source: "Actividad enviada por soporte BIM",
    risk: "Scripts utiles quedan personales y no se convierten en activo reutilizable.",
    nextAction: "Documentar input, output, herramienta, caso de uso, limitaciones y ejemplo."
  },
  {
    id: "ACT-047",
    area: "BIM",
    activity: "Apoyar busqueda de proyectos, PPTs y tableros Miro para cursos",
    owner: "Persona 24",
    backup: "Persona 13",
    agent: "Agente #21",
    automationLevel: "Media",
    sla: "Por calendario academico",
    evidence: "asset academico entregado",
    status: "Activo",
    priority: "Media",
    source: "Actividad enviada por soporte BIM",
    risk: "Material de apoyo llega tarde o sin trazabilidad con el objetivo de aprendizaje.",
    nextAction: "Registrar proyecto, PPT, Miro, curso, modulo, owner, fecha y estado."
  },
  {
    id: "ACT-048",
    area: "Marketing",
    activity: "Revisar como vende el equipo comercial en GHL para optimizar marketing",
    owner: "Persona 12",
    backup: "Persona 18",
    agent: "Agente #16",
    automationLevel: "Alta",
    sla: "Diario / semanal",
    evidence: "insights GHL + ajustes de campana",
    status: "Activo",
    priority: "Critica",
    source: "Solicitud operativa marketing-ventas",
    risk: "Marketing optimiza mensajes y pauta sin entender objeciones reales, calidad de asesorias y motivos de cierre/no cierre.",
    nextAction: "Revisar conversaciones, etapas, objeciones, scripts, tiempos de respuesta y conversion por fuente en GHL."
  },
  {
    id: "ACT-049",
    area: "Alianzas",
    activity: "Seguimiento a interesados, clasificacion de empresas y envio de correos",
    owner: "Persona 25",
    backup: "Persona 18",
    agent: "Agente #22",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "estado de interesado actualizado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Interesados se enfrían si no se clasifica empresa, respuesta y siguiente paso.",
    nextAction: "Usar pipeline: interesado, respondio, empresa clasificada, correo enviado, pendiente respuesta, reunion propuesta."
  },
  {
    id: "ACT-050",
    area: "Comercial",
    activity: "Gestion de llamadas y reuniones por listas pendientes",
    owner: "Persona 25",
    backup: "Persona 18",
    agent: "Agente #22",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "lista de llamadas/reuniones actualizada",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Contactos de eventos, ads o empresas reunidas quedan sin cierre si no hay cola clara.",
    nextAction: "Separar colas: pendientes por llamar, empresas ya reunidas por cerrar, contactos ads, reuniones por agendar."
  },
  {
    id: "ACT-051",
    area: "Alianzas",
    activity: "Control total de WhatsApp Business y respuestas de LinkedIn",
    owner: "Persona 25",
    backup: "Persona 12",
    agent: "Agente #22",
    automationLevel: "Alta",
    sla: "Durante el dia",
    evidence: "bandeja respondida y clasificada",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Mensajes sin respuesta generan perdida de sponsors, alianzas o reuniones.",
    nextAction: "Clasificar cada mensaje por canal, empresa, intencion, urgencia, owner y siguiente accion."
  },
  {
    id: "ACT-052",
    area: "Reuniones",
    activity: "Operar reuniones: recordatorios, grabacion, PPT y resumen para correos",
    owner: "Persona 25",
    backup: "Persona 14",
    agent: "Agente #23",
    automationLevel: "Alta",
    sla: "Antes y despues de cada reunion",
    evidence: "reunion registrada con resumen",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Sin grabacion, PPT correcta o resumen, el follow-up pierde contexto y velocidad.",
    nextAction: "Checklist: recordar por WSP, confirmar numero, activar grabacion, presentar PPT correcta, ocultar slides sensibles, enviar resumen y transcripcion."
  },
  {
    id: "ACT-053",
    area: "Alianzas",
    activity: "Busqueda y mapeo de nuevos contactos estrategicos",
    owner: "Persona 25",
    backup: "Persona 22",
    agent: "Agente #22",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "contacto estrategico completo",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Notion queda incompleto y no se puede priorizar empresas faltantes.",
    nextAction: "Completar empresa, cargo, contacto, canal, prioridad, estado, fuente, responsable y siguiente accion."
  },
  {
    id: "ACT-054",
    area: "Alianzas",
    activity: "Crear grupos cuando se sumen sponsors o aliados",
    owner: "Persona 25",
    backup: "Persona 6",
    agent: "Agente #23",
    automationLevel: "Media",
    sla: "24h post confirmacion",
    evidence: "grupo creado y bienvenida enviada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Onboarding incompleto genera friccion con sponsor, aliado o equipo interno.",
    nextAction: "Checklist: correo bienvenida, grupo WSP, perfil del grupo, recordatorio de correo y formulario."
  },
  {
    id: "ACT-055",
    area: "Alianzas",
    activity: "Revision de convenios y documentos solicitados",
    owner: "Persona 25",
    backup: "Persona 21",
    agent: "Agente #22",
    automationLevel: "Media",
    sla: "48h",
    evidence: "convenio revisado",
    status: "Pendiente",
    priority: "Alta",
    source: "Actividad enviada por partnerships/outreach",
    risk: "Convenios completos quedan sin revision y se retrasa cierre formal.",
    nextAction: "Registrar documento recibido, completitud, observaciones, aprobacion, responsable y fecha de cierre."
  },
  {
    id: "ACT-056",
    area: "QA",
    activity: "Validacion funcional de flujos completos E2E",
    owner: "Persona 26",
    backup: "Persona 23",
    agent: "Agente #24",
    automationLevel: "Media",
    sla: "Por release",
    evidence: "reporte E2E",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por QA/testing",
    risk: "Un release puede verse correcto por pantalla pero fallar en el flujo completo.",
    nextAction: "Definir casos E2E por rol, permisos, datos, estados vacios, errores y resultado esperado."
  },
  {
    id: "ACT-057",
    area: "QA",
    activity: "Validaciones de experiencia de usuario",
    owner: "Persona 26",
    backup: "Persona 20",
    agent: "Agente #24",
    automationLevel: "Media",
    sla: "Por feature",
    evidence: "reporte UX QA",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por QA/testing",
    risk: "Flujos funcionales pueden seguir siendo confusos, lentos o poco claros para el usuario.",
    nextAction: "Validar claridad, jerarquia, errores, feedback visual, responsive, textos y accion principal."
  },
  {
    id: "ACT-058",
    area: "QA",
    activity: "Pruebas de carga y estres",
    owner: "Persona 26",
    backup: "Persona 23",
    agent: "Agente #24",
    automationLevel: "Media",
    sla: "Antes de release critico",
    evidence: "reporte de carga",
    status: "Pendiente",
    priority: "Alta",
    source: "Actividad enviada por QA/testing",
    risk: "Plataforma puede degradarse en eventos, campañas o cohortes con alto trafico.",
    nextAction: "Definir escenarios, usuarios concurrentes, endpoints criticos, umbrales, errores y rollback."
  },
  {
    id: "ACT-059",
    area: "QA",
    activity: "Pruebas automatizadas",
    owner: "Persona 26",
    backup: "Persona 23",
    agent: "Agente #24",
    automationLevel: "Alta",
    sla: "Por sprint",
    evidence: "suite automatizada",
    status: "Pendiente",
    priority: "Alta",
    source: "Actividad enviada por QA/testing",
    risk: "Sin automatizacion se repiten bugs y cada release depende de revision manual.",
    nextAction: "Crear suite por flujo critico: auth, pagos, acceso, formularios, certificados, CRM y dashboard."
  },
  {
    id: "ACT-060",
    area: "QA",
    activity: "Validacion de correccion de bugs",
    owner: "Persona 26",
    backup: "Persona 23",
    agent: "Agente #24",
    automationLevel: "Media",
    sla: "Por bugfix",
    evidence: "bug validado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por QA/testing",
    risk: "Bugs marcados como resueltos pueden regresar si no se valida causa y regresion.",
    nextAction: "Verificar caso original, prueba de regresion, captura/evidencia y estado final."
  },
  {
    id: "ACT-061",
    area: "Datos",
    activity: "Carga y actualizacion de data",
    owner: "Persona 26",
    backup: "Persona 22",
    agent: "Agente #25",
    automationLevel: "Alta",
    sla: "Segun corte operativo",
    evidence: "data actualizada y validada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por QA/testing",
    risk: "Data desactualizada afecta dashboards, accesos, pruebas, CRM y decisiones.",
    nextAction: "Validar fuente, schema, duplicados, campos obligatorios, fecha de carga y responsable."
  },
  {
    id: "ACT-062",
    area: "UX/UI",
    activity: "Investigacion y analisis UX para productos digitales",
    owner: "Persona 16",
    backup: "Persona 20",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Antes de prototipo",
    evidence: "insights UX",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Sin investigacion, el producto se disena por intuicion y no por necesidad real del usuario.",
    nextAction: "Registrar usuario, problema, contexto, fricciones, jobs-to-be-done y criterio de exito."
  },
  {
    id: "ACT-063",
    area: "UX/UI",
    activity: "Definir arquitectura de informacion y flujos antes del prototipo",
    owner: "Persona 16",
    backup: "Persona 20",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Antes de diseno UI",
    evidence: "mapa de flujo completo",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por UX/UI",
    risk: "Prototipar sin flujo completo genera pantallas bonitas pero decisiones y estados incompletos.",
    nextAction: "Documentar entrada, pasos, estados, permisos, errores, salidas y handoff antes de prototipar."
  },
  {
    id: "ACT-064",
    area: "UX/UI",
    activity: "Disenar interfaces UI para productos, dashboards y paneles",
    owner: "Persona 16",
    backup: "Persona 23",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Por sprint",
    evidence: "UI spec/prototipo",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Interfaces sin estados, jerarquia o handoff claro ralentizan desarrollo y QA.",
    nextAction: "Entregar pantalla con estados, componentes, responsive, copy, tokens y criterios de implementacion."
  },
  {
    id: "ACT-065",
    area: "Diseno",
    activity: "Crear linea visual, branding y sistema grafico",
    owner: "Persona 16",
    backup: "Persona 13",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Por campana/producto",
    evidence: "guia visual o kit de marca",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Sin linea visual, web, campanas y producto pierden consistencia y autoridad.",
    nextAction: "Definir tokens, estilos, componentes, reglas de uso, ejemplos y restricciones por canal."
  },
  {
    id: "ACT-066",
    area: "Diseno",
    activity: "Dar feedback de diseno al equipo en general",
    owner: "Persona 16",
    backup: "Persona 13",
    agent: "Agente #26",
    automationLevel: "Baja",
    sla: "24-48h",
    evidence: "feedback accionable",
    status: "Activo",
    priority: "Media",
    source: "Actividad enviada por UX/UI",
    risk: "Feedback sin criterio accionable genera retrabajo o decisiones subjetivas.",
    nextAction: "Estandarizar feedback por jerarquia, claridad, marca, accesibilidad, conversion y consistencia."
  },
  {
    id: "ACT-067",
    area: "Web",
    activity: "Armar disenos requeridos para web, ediciones de fotos y piezas estrategicas",
    owner: "Persona 16",
    backup: "Persona 15",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "Por solicitud web/campana",
    evidence: "asset web aprobado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Assets web sin version o sin criterio visual retrasan publicacion y conversion.",
    nextAction: "Registrar brief, formato, version, destino web, aprobacion y archivo fuente."
  },
  {
    id: "ACT-068",
    area: "Web",
    activity: "Disenar formularios y componentes para la web",
    owner: "Persona 16",
    backup: "Persona 23",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Por flujo",
    evidence: "formulario especificado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Formularios mal estructurados bajan conversion y generan data incompleta.",
    nextAction: "Definir campos, validaciones, errores, privacidad, destino de datos, tracking y estado de exito."
  },
  {
    id: "ACT-069",
    area: "Tecnologia",
    activity: "Coordinar implementacion de disenos con desarrollo",
    owner: "Persona 16",
    backup: "Persona 23",
    agent: "Agente #26",
    automationLevel: "Media",
    sla: "Durante sprint",
    evidence: "handoff validado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Sin coordinacion con desarrollo, el producto implementado no respeta flujo, marca o estados.",
    nextAction: "Hacer handoff con specs, assets, estados, restricciones, dudas abiertas y QA visual."
  },
  {
    id: "ACT-070",
    area: "Web",
    activity: "Coordinar actualizaciones web con operaciones web",
    owner: "Persona 16",
    backup: "Persona 15",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "Por publicacion",
    evidence: "actualizacion web coordinada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por UX/UI",
    risk: "Actualizaciones web sin coordinacion generan versiones inconsistentes o cambios incompletos.",
    nextAction: "Registrar solicitud, responsable web, fecha, assets, validacion visual, publicacion y rollback."
  },
  {
    id: "ACT-071",
    area: "AI Ops",
    activity: "Definir y priorizar backlog de automatizaciones por impacto operativo",
    owner: "Persona 27",
    backup: "Persona 11",
    agent: "Agente #27",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "backlog priorizado",
    status: "Activo",
    priority: "Critica",
    source: "Notion AECODE operaciones/AI Ops",
    risk: "Sin priorizacion, el equipo automatiza tareas aisladas sin reducir carga real ni mejorar experiencia.",
    nextAction: "Clasificar automatizaciones por impacto, ahorro, riesgo, fuente de datos, owner humano y tiempo estimado."
  },
  {
    id: "ACT-072",
    area: "AI Ops",
    activity: "Coordinar implementacion end-to-end de asistentes y agentes IA",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #27",
    automationLevel: "Alta",
    sla: "Por sprint",
    evidence: "agente en piloto o produccion",
    status: "Activo",
    priority: "Alta",
    source: "Notion AECODE operaciones/AI Ops",
    risk: "Agentes sin QA, owner o criterio de negocio pueden producir errores no trazables.",
    nextAction: "Definir input, proceso, output, control humano, logs, fallback, piloto y criterio de paso a produccion."
  },
  {
    id: "ACT-073",
    area: "Automatizacion",
    activity: "Mapear procesos AS-IS y disenar flujos TO-BE reutilizables",
    owner: "Persona 27",
    backup: "Persona 11",
    agent: "Agente #28",
    automationLevel: "Media",
    sla: "Por proceso critico",
    evidence: "SOP o mapa AS-IS/TO-BE",
    status: "Activo",
    priority: "Alta",
    source: "Notion AECODE operaciones/AI Ops",
    risk: "Sin mapa de proceso, la operacion depende de memoria individual y no escala.",
    nextAction: "Documentar pasos actuales, cuellos de botella, responsables, evidencia, reglas, excepciones y flujo optimizado."
  },
  {
    id: "ACT-074",
    area: "Datos",
    activity: "Medir eficiencia operativa de automatizaciones y mejoras de proceso",
    owner: "Persona 27",
    backup: "Persona 22",
    agent: "Agente #28",
    automationLevel: "Alta",
    sla: "Mensual",
    evidence: "reporte de eficiencia",
    status: "Pendiente",
    priority: "Alta",
    source: "Notion AECODE operaciones/AI Ops",
    risk: "Sin medicion, la automatizacion no demuestra ahorro ni impacto en tiempos, errores o experiencia.",
    nextAction: "Medir horas ahorradas, errores reducidos, SLA mejorado, procesos activos y automatizaciones en produccion."
  },
  {
    id: "ACT-075",
    area: "Producto digital",
    activity: "Dar seguimiento operativo a roadmap AECODE 2.0 y 3.0",
    owner: "Persona 27",
    backup: "Persona 20",
    agent: "Agente #29",
    automationLevel: "Media",
    sla: "Diario/semanal",
    evidence: "roadmap actualizado",
    status: "Activo",
    priority: "Critica",
    source: "Notion AECODE producto digital",
    risk: "Sin seguimiento operativo, producto, dev, QA y contenido avanzan con prioridades distintas.",
    nextAction: "Actualizar estado por modulo, avance, bloqueo, owner, dependencia, fecha objetivo y proxima decision."
  },
  {
    id: "ACT-076",
    area: "Producto digital",
    activity: "Validar flujos de compra, onboarding, cursos, comunidad e integraciones",
    owner: "Persona 27",
    backup: "Persona 26",
    agent: "Agente #29",
    automationLevel: "Media",
    sla: "Por release",
    evidence: "checklist funcional validado",
    status: "Activo",
    priority: "Critica",
    source: "Notion AECODE producto digital",
    risk: "Un flujo critico roto afecta conversion, acceso, retencion y confianza del alumno.",
    nextAction: "Validar flujo completo con escenarios reales, pagos, data, usuario, acceso, curso, comunidad y errores."
  },
  {
    id: "ACT-077",
    area: "Producto digital",
    activity: "Coordinar seguimiento dev, backlog, dailys, bloqueos y despliegues",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #29",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "estado dev consolidado",
    status: "Activo",
    priority: "Alta",
    source: "Notion AECODE producto digital",
    risk: "Sin visibilidad diaria, los bloqueos tecnicos aparecen tarde y el release pierde trazabilidad.",
    nextAction: "Registrar tareas, responsables, avance, bloqueos, decisiones, pruebas, ambiente y fecha de despliegue."
  },
  {
    id: "ACT-078",
    area: "Plataforma",
    activity: "Supervisar funcionamiento de AECODITOS por programa",
    owner: "Persona 27",
    backup: "Persona 20",
    agent: "Agente #27",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "estado AECODITO por programa",
    status: "Pendiente",
    priority: "Alta",
    source: "Notion AECODE producto digital",
    risk: "AECODITOS sin supervision pueden responder mal, duplicar soporte o perder alineacion con el programa.",
    nextAction: "Mapear programa, objetivo, base de conocimiento, limites, logs, casos fallidos y responsable de validacion."
  },
  {
    id: "ACT-079",
    area: "Web",
    activity: "Gestionar contenido web del producto y coherencia entre landing, training y comunidad",
    owner: "Persona 27",
    backup: "Persona 15",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "contenido web actualizado",
    status: "Activo",
    priority: "Alta",
    source: "Notion AECODE producto digital",
    risk: "Contenido web desactualizado rompe promesa comercial, onboarding y experiencia del alumno.",
    nextAction: "Revisar copy, estructura, CTA, links, piezas visuales, estado de publicacion y coherencia con producto."
  },
  {
    id: "ACT-080",
    area: "Finanzas",
    activity: "Coordinar validacion operativa de pagos, ingresos y accesos post compra",
    owner: "Persona 27",
    backup: "Persona 21",
    agent: "Agente #18",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "pago validado y acceso habilitado",
    status: "Activo",
    priority: "Alta",
    source: "Notion AECODE producto digital",
    risk: "Pago no validado o acceso no habilitado genera reclamos y friccion inmediata en postventa.",
    nextAction: "Cruzar pago, canal, comprobante, registro, acceso, curso, estado administrativo y excepciones."
  },
  {
    id: "ACT-081",
    area: "Automatizacion",
    activity: "Disenar y desplegar workflows n8n end-to-end para GEN+/AECODE",
    owner: "Persona 27",
    backup: "Persona 11",
    agent: "Agente #30",
    automationLevel: "Alta",
    sla: "Por sprint",
    evidence: "workflow n8n versionado",
    status: "Activo",
    priority: "Critica",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Workflows sin version, owner o rollback pueden romper procesos academicos, comerciales o internos.",
    nextAction: "Registrar objetivo, trigger, nodos, credenciales seguras, logs, fallback, owner humano y ambiente."
  },
  {
    id: "ACT-082",
    area: "Automatizacion",
    activity: "Automatizar servicios conectados: Sheets, Drive, Calendar, Notion, mensajeria, Meta Ads y Zoom",
    owner: "Persona 27",
    backup: "Persona 22",
    agent: "Agente #30",
    automationLevel: "Alta",
    sla: "Por integracion",
    evidence: "integracion activa y monitoreada",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Integraciones sin control de permisos exponen datos o generan acciones duplicadas.",
    nextAction: "Crear matriz por servicio con permiso, API, dato sensible, frecuencia, limite, error esperado y responsable."
  },
  {
    id: "ACT-083",
    area: "AI Ops",
    activity: "Depurar y mantener automatizaciones en produccion",
    owner: "Persona 27",
    backup: "Persona 26",
    agent: "Agente #30",
    automationLevel: "Alta",
    sla: "Diario / incidente",
    evidence: "incidente resuelto o monitoreo verde",
    status: "Activo",
    priority: "Critica",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Automatizaciones caidas o silenciosas bloquean accesos, recordatorios, data, marketing o soporte.",
    nextAction: "Implementar health checks, alertas, bitacora de errores, severidad, reintentos y criterio de desactivacion."
  },
  {
    id: "ACT-084",
    area: "AI Ops",
    activity: "Operar y mejorar centro de operaciones IA con WhatsApp, voz, vision, RAG y recordatorios",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #31",
    automationLevel: "Alta",
    sla: "Semanal",
    evidence: "estado de asistente IA",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Un asistente IA sin base curada, logs o limites puede responder mal y escalar reclamos.",
    nextAction: "Definir base de conocimiento, canales, permisos, trazabilidad, respuestas bloqueadas, evaluacion y escalamiento humano."
  },
  {
    id: "ACT-085",
    area: "AI Ops",
    activity: "Disenar arquitectura multi-agente supervisor y sub-agentes para oficina virtual",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #31",
    automationLevel: "Alta",
    sla: "Por hito",
    evidence: "mapa de nodos multi-agente",
    status: "Pendiente",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Agentes conectados sin contrato de entrada/salida crean decisiones opacas y fallas dificiles de auditar.",
    nextAction: "Documentar nodos, prompts, herramientas, memoria, permisos, handoff, trazas y aprobaciones humanas."
  },
  {
    id: "ACT-086",
    area: "Producto digital",
    activity: "Construir paneles y apps Next.js multi-rol con autenticacion, roles y multi-tenant",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #32",
    automationLevel: "Media",
    sla: "Por release",
    evidence: "app o dashboard desplegado",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Paneles sin roles o datos confiables se vuelven demos aisladas y no herramientas de decision.",
    nextAction: "Definir usuarios, permisos, entidades, fuentes, acciones clave, estados vacios, logs y plan de deploy."
  },
  {
    id: "ACT-087",
    area: "Datos",
    activity: "Investigar y construir scrapers con paneles de datos en vivo para oportunidades y empresas",
    owner: "Persona 27",
    backup: "Persona 22",
    agent: "Agente #32",
    automationLevel: "Alta",
    sla: "Por fuente",
    evidence: "dataset y panel vivo",
    status: "Pendiente",
    priority: "Media",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Scrapers sin politicas de uso, normalizacion o monitoreo generan datos rotos o riesgos de compliance.",
    nextAction: "Validar fuente, permiso, frecuencia, schema, deduplicacion, trazabilidad, alertas y uso comercial/academico."
  },
  {
    id: "ACT-088",
    area: "Computer Vision",
    activity: "Crear datasets, curar datos y entrenar modelos de deteccion para productos GEN+",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #32",
    automationLevel: "Media",
    sla: "Por experimento",
    evidence: "dataset/modelo evaluado",
    status: "Pendiente",
    priority: "Media",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Modelos sin dataset versionado, metricas o reentrenamiento no llegan a produccion confiable.",
    nextAction: "Separar como frontera GEN+: dataset, version, metrica, caso de uso, permiso, benchmark, test y reentrenamiento."
  },
  {
    id: "ACT-089",
    area: "Tecnologia",
    activity: "Desplegar apps y workflows, configurar MCP, APIs, Postgres y resolver incidentes tecnicos",
    owner: "Persona 27",
    backup: "Persona 23",
    agent: "Agente #32",
    automationLevel: "Media",
    sla: "Por deploy / incidente",
    evidence: "deploy o incidente documentado",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Deploys sin checklist, monitoreo o registro de incidentes repiten caidas, bloqueos de IP o errores de datos.",
    nextAction: "Registrar ambiente, variables, credenciales, version, rollback, monitoreo, incidente, causa y accion preventiva."
  },
  {
    id: "ACT-090",
    area: "Documentacion",
    activity: "Redactar specs, informes tecnicos, mapas de proceso, semaforos y roadmaps",
    owner: "Persona 27",
    backup: "Persona 22",
    agent: "Agente #28",
    automationLevel: "Media",
    sla: "Por feature/proceso",
    evidence: "spec o roadmap actualizado",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Sin documentacion tecnica, los nodos, procesos y decisiones no son transferibles al equipo.",
    nextAction: "Estandarizar spec con objetivo, usuario, flujo, data, arquitectura, riesgos, pruebas, owner y decision."
  },
  {
    id: "ACT-091",
    area: "Capacitacion IA",
    activity: "Disenar talleres de productividad IA, plantillas, guias, toolkits y artefactos HTML",
    owner: "Persona 27",
    backup: "Persona 20",
    agent: "Agente #33",
    automationLevel: "Media",
    sla: "Por taller",
    evidence: "toolkit IA publicado",
    status: "Activo",
    priority: "Media",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Capacitacion sin toolkit reutilizable se pierde como conocimiento interno o producto educativo.",
    nextAction: "Convertir cada taller en guia, prompt, checklist, demo, practica, evidencia y mejora de proceso."
  },
  {
    id: "ACT-092",
    area: "Programas",
    activity: "Apoyar estructuracion de cursos IA, materiales del alumno y facilitacion de sesiones",
    owner: "Persona 27",
    backup: "Persona 20",
    agent: "Agente #17",
    automationLevel: "Media",
    sla: "Por programa",
    evidence: "material academico validado",
    status: "Activo",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Cursos tecnicos sin estructura, practica o material claro no generan skill verification.",
    nextAction: "Mapear objetivo, skill, caso, slides, guia, practica, evidencia, rubrica y soporte de sesion."
  },
  {
    id: "ACT-093",
    area: "Comercial",
    activity: "Automatizar data de ventas, notificaciones multicanal, boleteo y soporte postventa",
    owner: "Persona 27",
    backup: "Persona 21",
    agent: "Agente #34",
    automationLevel: "Alta",
    sla: "Por flujo comercial",
    evidence: "flujo comercial automatizado",
    status: "Pendiente",
    priority: "Alta",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Ventas, pago, ticket y soporte desconectados provocan reclamos y perdida de trazabilidad.",
    nextAction: "Unificar lead, venta, pago, ticket, notificacion, acceso, soporte y estado administrativo."
  },
  {
    id: "ACT-094",
    area: "Marketing",
    activity: "Producir contenido, videos, recaps, piezas visuales e investigacion de tendencias/benchmarks",
    owner: "Persona 27",
    backup: "Persona 17",
    agent: "Agente #15",
    automationLevel: "Media",
    sla: "Por campana",
    evidence: "asset o benchmark publicado",
    status: "Activo",
    priority: "Media",
    source: "PDF actividades tecnologia/automatizacion",
    risk: "Contenido tecnico sin benchmark ni criterio de posicionamiento pierde autoridad o conversion.",
    nextAction: "Registrar objetivo, referencia, formato, insight, pieza, canal, CTA, fecha y resultado."
  },
  {
    id: "ACT-095",
    area: "Programas",
    activity: "Gestionar y hacer seguimiento a programas de formacion activos",
    owner: "Persona 28",
    backup: "Persona 3",
    agent: "Agente #35",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "estado de programa actualizado",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por programas/Summit",
    risk: "Programas activos sin control de sesiones, Zoom, grabaciones y grupos generan friccion para participantes.",
    nextAction: "Actualizar por programa: sesion, Zoom, grabacion, grupo, responsable, bloqueo y proxima accion."
  },
  {
    id: "ACT-096",
    area: "Documentacion",
    activity: "Elaborar actas de sesion en PDF y documentar flujos en Notion",
    owner: "Persona 28",
    backup: "Persona 22",
    agent: "Agente #35",
    automationLevel: "Media",
    sla: "24h post sesion",
    evidence: "acta y flujo documentado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Sin acta ni flujo, acuerdos, incidencias y mejoras se pierden entre sesiones.",
    nextAction: "Estandarizar acta con fecha, asistentes, acuerdos, incidencias, links seguros, responsables y pendientes."
  },
  {
    id: "ACT-097",
    area: "Sesiones",
    activity: "Coordinar docentes, horarios, materiales y dinamicas Kahoot",
    owner: "Persona 28",
    backup: "Persona 3",
    agent: "Agente #35",
    automationLevel: "Media",
    sla: "72h antes",
    evidence: "sesion academica lista",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por programas/Summit",
    risk: "Docente, horario o material sin confirmar afecta asistencia, calidad y percepcion del programa.",
    nextAction: "Confirmar docente, agenda, horario, materiales, dinamica, recursos, acceso y comunicacion previa."
  },
  {
    id: "ACT-098",
    area: "Accesos y soporte",
    activity: "Atender soporte postventa de participantes con el equipo de soporte",
    owner: "Persona 28",
    backup: "Persona 1",
    agent: "Agente #1",
    automationLevel: "Media",
    sla: "Durante horario operativo",
    evidence: "caso postventa resuelto",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Soporte no coordinado duplica respuestas o deja participantes sin solucion.",
    nextAction: "Registrar caso, categoria, programa, responsable, respuesta, estado, evidencia y escalamiento."
  },
  {
    id: "ACT-099",
    area: "Automatizacion",
    activity: "Dar seguimiento a automatizaciones con equipo tecnico: pruebas, documentacion y reporte de errores",
    owner: "Persona 28",
    backup: "Persona 27",
    agent: "Agente #29",
    automationLevel: "Media",
    sla: "Por sprint",
    evidence: "bug o mejora reportada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Automatizaciones sin pruebas ni reporte operacional quedan desconectadas del usuario real.",
    nextAction: "Probar flujo, documentar error, prioridad, evidencia, impacto, responsable tecnico y estado de resolucion."
  },
  {
    id: "ACT-100",
    area: "Alianzas",
    activity: "Gestionar pipeline de sponsors y aliados del Summit en CRM y redactar correos formales",
    owner: "Persona 28",
    backup: "Persona 25",
    agent: "Agente #36",
    automationLevel: "Alta",
    sla: "Diario en campana",
    evidence: "pipeline y correo trazado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Sponsor sin seguimiento, estado CRM o correo formal pierde oportunidad de cierre.",
    nextAction: "Actualizar etapa, contacto, proxima accion, correo, responsable, fecha limite, bloqueo y decision."
  },
  {
    id: "ACT-101",
    area: "Eventos",
    activity: "Coordinar ponentes y programacion academica del Summit",
    owner: "Persona 28",
    backup: "Persona 14",
    agent: "Agente #13",
    automationLevel: "Media",
    sla: "Semanal / diario previo",
    evidence: "agenda academica confirmada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Ponentes o agenda sin confirmacion retrasan difusion, landing y valor academico del evento.",
    nextAction: "Confirmar ponente, tema, bio, horario, material, permisos, calendario, recordatorio y backup."
  },
  {
    id: "ACT-102",
    area: "Marketing",
    activity: "Apoyar marketing revisando contenidos, campanas y piezas",
    owner: "Persona 28",
    backup: "Persona 12",
    agent: "Agente #12",
    automationLevel: "Media",
    sla: "Por campana",
    evidence: "contenido revisado",
    status: "Activo",
    priority: "Media",
    source: "Actividad enviada por programas/Summit",
    risk: "Campanas sin revision operativa pueden prometer horarios, speakers o beneficios no confirmados.",
    nextAction: "Validar copy contra agenda, programa, beneficios, CTA, links, estado CRM y disponibilidad real."
  },
  {
    id: "ACT-103",
    area: "Comercial",
    activity: "Dar seguimiento a ventas B2B y eventos",
    owner: "Persona 28",
    backup: "Persona 18",
    agent: "Agente #16",
    automationLevel: "Media",
    sla: "Semanal / por oportunidad",
    evidence: "seguimiento B2B actualizado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por programas/Summit",
    risk: "Oportunidades B2B o de evento sin seguimiento quedan fuera del forecast y del cierre comercial.",
    nextAction: "Registrar empresa, interes, propuesta, reunion, etapa, objecion, proxima accion y responsable."
  },
  {
    id: "ACT-104",
    area: "Contenido",
    activity: "Gestionar plantillas y comunicaciones HTML para programas",
    owner: "Persona 28",
    backup: "Persona 13",
    agent: "Agente #35",
    automationLevel: "Media",
    sla: "Por envio",
    evidence: "plantilla HTML aprobada",
    status: "Activo",
    priority: "Media",
    source: "Actividad enviada por programas/Summit",
    risk: "Plantillas no versionadas generan mensajes inconsistentes o links incorrectos.",
    nextAction: "Versionar plantilla, objetivo, segmento, asunto, CTA, links seguros, aprobacion y resultado."
  },
  {
    id: "ACT-105",
    area: "Comercial",
    activity: "Llamar leads calientes",
    owner: "Persona 29",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "llamada registrada",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por cierre comercial",
    risk: "Lead caliente sin llamada pierde urgencia, confianza y probabilidad de cierre.",
    nextAction: "Priorizar por temperatura, fuente, programa, ultimo contacto y proxima accion registrada."
  },
  {
    id: "ACT-106",
    area: "Comercial",
    activity: "Mandar audios comerciales a leads y oportunidades",
    owner: "Persona 29",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Media",
    sla: "Diario",
    evidence: "audio enviado y respuesta trazada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por cierre comercial",
    risk: "Seguimiento frio o generico reduce respuesta y no resuelve objeciones reales.",
    nextAction: "Crear libreria de audios por curso, objecion, etapa y CTA con control humano."
  },
  {
    id: "ACT-107",
    area: "Comercial",
    activity: "Dar seguimiento orientado al cierre",
    owner: "Persona 29",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Alta",
    sla: "Diario",
    evidence: "proxima accion de cierre registrada",
    status: "Activo",
    priority: "Critica",
    source: "Actividad enviada por cierre comercial",
    risk: "Sin seguimiento de cierre, la asesoria queda informativa y no convierte.",
    nextAction: "Definir etapa, objecion, oferta, urgencia, proximo mensaje y fecha de cierre por lead."
  },
  {
    id: "ACT-108",
    area: "Marketing",
    activity: "Optimizar copys comerciales segun objeciones y cierre",
    owner: "Persona 29",
    backup: "Persona 12",
    agent: "Agente #16",
    automationLevel: "Media",
    sla: "Semanal / por campana",
    evidence: "copy ajustado con insight comercial",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por cierre comercial",
    risk: "Copys desconectados de objeciones reales generan leads curiosos pero no compradores.",
    nextAction: "Cruzar objeciones, audios, llamadas y mensajes con propuesta, CTA y prueba social."
  },
  {
    id: "ACT-109",
    area: "Marketing",
    activity: "Dar seguimiento a Anggie para envio de brochures completos",
    owner: "Persona 29",
    backup: "Persona 15",
    agent: "Agente #14",
    automationLevel: "Media",
    sla: "Por campana / oferta",
    evidence: "brochure completo enviado o publicado",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por cierre comercial",
    risk: "Brochure incompleto frena cierre porque el lead no recibe informacion suficiente para decidir.",
    nextAction: "Mantener checklist de brochure: oferta, beneficios, temario, fecha, precio, CTA, links y aprobacion."
  },
  {
    id: "ACT-110",
    area: "Difusion",
    activity: "Brindar ideas y recordatorios a Reiner para seguimiento masivo",
    owner: "Persona 29",
    backup: "Persona 8",
    agent: "Agente #10",
    automationLevel: "Media",
    sla: "Semanal / por campana",
    evidence: "seguimiento masivo enviado",
    status: "Activo",
    priority: "Media",
    source: "Actividad enviada por cierre comercial",
    risk: "La difusion masiva se atrasa o sale sin aprendizaje comercial si no hay recordatorio e idea clara.",
    nextAction: "Entregar mensaje, segmento, canal, hora, CTA y objetivo de seguimiento antes del envio."
  },
  {
    id: "ACT-111",
    area: "Comercial",
    activity: "Entrenar a Yadira en cierre, audios y llamadas",
    owner: "Persona 29",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Baja",
    sla: "Semanal",
    evidence: "sesion de entrenamiento y mejora observada",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por cierre comercial",
    risk: "El conocimiento comercial queda concentrado y no escala al equipo de ventas.",
    nextAction: "Registrar guion, ejemplos de audios, objeciones, llamadas practicadas y ventas concretadas."
  },
  {
    id: "ACT-112",
    area: "Reuniones",
    activity: "Reunirse con el equipo comercial para revisar avances y mejoras",
    owner: "Persona 29",
    backup: "Persona 19",
    agent: "Agente #16",
    automationLevel: "Media",
    sla: "Semanal",
    evidence: "acuerdos, avances y mejoras registradas",
    status: "Activo",
    priority: "Alta",
    source: "Actividad enviada por cierre comercial",
    risk: "Sin review comercial, las mejoras quedan informales y no se convierten en sistema.",
    nextAction: "Revisar leads llamados, audios enviados, cierres, objeciones, copys, brochures y proximos cambios."
  }
];

export const dailyExecutionItems: DailyExecutionItem[] = [
  {
    id: "DAY-001",
    title: "Accesos postventa y alumnos bloqueados",
    area: "Operacion academica",
    owner: "Persona 1",
    backup: "Persona 3",
    playbookId: "PB-01",
    priority: "Critica",
    status: "Riesgo",
    due: "Hoy 10:30",
    source: "Admin Morado + Sheet academico",
    evidence: "Log de acceso, ticket cerrado y registro unico actualizado",
    nextBestAction: "Revisar alumnos pagados sin acceso, cerrar duplicados y escalar casos sin correo valido.",
    escalation: "Alejandro solo recibe casos pagados >24h sin solucion o error de plataforma.",
    agent: "Agente #1",
    system: "Panel AECODE / Admin Morado",
    decisionNeeded: "Definir backup formal si Patrick supera SLA de accesos."
  },
  {
    id: "DAY-002",
    title: "Clase live preparada 72h antes",
    area: "Sesiones",
    owner: "Persona 3",
    backup: "Persona 28",
    playbookId: "PB-02",
    priority: "Critica",
    status: "En curso",
    due: "Hoy 12:00",
    source: "Calendario academico + Notion Training",
    evidence: "Zoom validado, instructor confirmado, recursos versionados y embajador activo",
    nextBestAction: "Confirmar Zoom, grabacion, PPT/Miro y mensaje de recordatorio del siguiente bloque de clases.",
    escalation: "Escalar a Daniella si falta docente o recurso critico 24h antes.",
    agent: "Agente #3",
    system: "Zoom / Drive / Notion",
    decisionNeeded: "Ninguna si el link y docente quedan confirmados."
  },
  {
    id: "DAY-003",
    title: "Drive -> Vimeo -> plataforma",
    area: "Contenido",
    owner: "Persona 1",
    backup: "Persona 16",
    playbookId: "PB-03",
    priority: "Alta",
    status: "Automatizable",
    due: "Hoy 16:00",
    source: "Drive grabaciones + plataforma AECODE",
    evidence: "Video publicado, modulo correcto, miniatura/descripcion y notificacion al grupo",
    nextBestAction: "Ordenar cola por programas activos, publicar los vencidos y dejar registro por sesion.",
    escalation: "Escalar a TeamDev si el panel no permite publicar o asociar modulo.",
    agent: "Agente #4",
    system: "Drive / Vimeo / Plataforma",
    decisionNeeded: "Priorizar si hay mas de 8 grabaciones pendientes."
  },
  {
    id: "DAY-004",
    title: "Certificados y evidencias incompletas",
    area: "Certificados",
    owner: "Persona 1",
    backup: "Persona 7",
    playbookId: "PB-04",
    priority: "Alta",
    status: "Riesgo",
    due: "Hoy 17:00",
    source: "Sheet academico + rubricas",
    evidence: "Lista aprobados, certificados generados, envio registrado y observados separados",
    nextBestAction: "Separar participacion vs aprobacion Autodesk y cerrar observaciones antes de enviar.",
    escalation: "Escalar a Alejandro solo si hay reclamo publico, bloqueo de marca o criterio academico ambiguo.",
    agent: "Agente #8",
    system: "Sheets / Certificados / Plataforma",
    decisionNeeded: "Confirmar regla para casos con asistencia pero evidencia incompleta."
  },
  {
    id: "DAY-005",
    title: "GHL, quality de lead y feedback de cierre",
    area: "Marketing",
    owner: "Persona 12",
    backup: "Persona 18",
    playbookId: "PB-05",
    priority: "Critica",
    status: "Requiere decision",
    due: "Hoy 18:00",
    source: "GHL + Ads + WhatsApp Business",
    evidence: "Reporte de CPL, conversaciones revisadas, objeciones, copy ajustado y accion comercial",
    nextBestAction: "Cruzar lo que vende el equipo con GHL: tiempos de respuesta, objeciones, curso, fuente y cierre.",
    escalation: "Alejandro decide cambios de oferta, presupuesto o prioridad de campana.",
    agent: "Agente #16",
    system: "GHL / Meta Ads / WhatsApp Business",
    decisionNeeded: "Elegir si se optimiza por CPL, cierre o calidad de lead esta semana."
  },
  {
    id: "DAY-006",
    title: "Leads calientes, audios y cierre",
    area: "Comercial",
    owner: "Persona 29",
    backup: "Persona 19",
    playbookId: "PB-05",
    priority: "Alta",
    status: "En curso",
    due: "Hoy 19:00",
    source: "GHL + WhatsApp Business",
    evidence: "Leads llamados, audios enviados, respuestas, objeciones y proximos pasos por asesor",
    nextBestAction: "Llamar leads calientes, enviar audios y pasar objeciones ganadoras a Jessica/Anggie/Reiner.",
    escalation: "Escalar si brochures, precio u oferta bloquean cierre repetidamente.",
    agent: "Agente #16",
    system: "WhatsApp Business / GHL",
    decisionNeeded: "Confirmar si Yadira toma llamadas en el siguiente bloque de entrenamiento."
  },
  {
    id: "DAY-007",
    title: "Sponsors, aliados y reuniones corporativas",
    area: "Alianzas",
    owner: "Persona 25",
    backup: "Persona 14",
    playbookId: "PB-06",
    priority: "Critica",
    status: "En curso",
    due: "Hoy 15:00",
    source: "Notion empresas + pipeline Summit",
    evidence: "Empresa clasificada, contacto completo, reunion agendada, resumen y siguiente correo",
    nextBestAction: "Ordenar contactos por sponsor/aliado/empresa pendiente y preparar recordatorios de reunion.",
    escalation: "Escalar a Erika/Daniella si sponsor caliente no tiene propuesta o follow-up.",
    agent: "Agente #22",
    system: "Notion / Calendar / WhatsApp / LinkedIn",
    decisionNeeded: "Definir paquete o mensaje para sponsors sin respuesta."
  },
  {
    id: "DAY-008",
    title: "Onboarding sponsor y experiencia corporativa",
    area: "Eventos",
    owner: "Persona 14",
    backup: "Persona 25",
    playbookId: "PB-06",
    priority: "Alta",
    status: "Riesgo",
    due: "Hoy 17:30",
    source: "Pipeline sponsors + grupos oficiales",
    evidence: "Correo bienvenida, grupo WSP, perfil de grupo, formulario y compromisos registrados",
    nextBestAction: "Separar sponsors confirmados, pendientes de convenio y pendientes de activacion VIP.",
    escalation: "Escalar a Alejandro si falta decision comercial o nivel de paquete.",
    agent: "Agente #36",
    system: "Gmail / WhatsApp / Notion",
    decisionNeeded: "Confirmar quien recibe el correo de bienvenida en sponsors especiales."
  },
  {
    id: "DAY-009",
    title: "Producto AECODE 3.0 y automatizacion marketing",
    area: "Producto",
    owner: "Persona 20",
    backup: "Persona 23",
    playbookId: "PB-07",
    priority: "Critica",
    status: "Requiere decision",
    due: "Hoy 18:30",
    source: "Roadmap producto + AgentFlow",
    evidence: "Spec de ruta/skill, decision de MVP, backlog priorizado y metrica vinculada",
    nextBestAction: "Definir que flujo mueve skill verified: onboarding, evidencia, rubrica, certificado o dashboard B2B.",
    escalation: "Alejandro decide tradeoff si compite con Summit, plataforma o growth.",
    agent: "Agente #29",
    system: "GitHub / Notion / AgentFlow",
    decisionNeeded: "Elegir el primer loop producto que se desarrolla esta semana."
  },
  {
    id: "DAY-010",
    title: "Release, QA y data",
    area: "QA",
    owner: "Persona 26",
    backup: "Persona 23",
    playbookId: "PB-07",
    priority: "Alta",
    status: "Bloqueado",
    due: "Hoy 20:00",
    source: "Backlog dev + pruebas E2E",
    evidence: "Casos E2E, captura de bug, retest y decision de release",
    nextBestAction: "Registrar bugs con evidencia y bloquear release si no hay retest documentado.",
    escalation: "Escalar a Anderson si el bug compromete acceso, pago, certificado o datos.",
    agent: "Agente #24",
    system: "GitHub / QA checklist / Plataforma",
    decisionNeeded: "Definir severidad minima para no publicar release."
  },
  {
    id: "DAY-011",
    title: "Arquitectura, full-stack e integraciones web",
    area: "Tecnologia",
    owner: "Persona 23",
    backup: "Persona 27",
    playbookId: "PB-07",
    priority: "Critica",
    status: "En curso",
    due: "Hoy 21:00",
    source: "Repos + specs + plataforma",
    evidence: "ADR, PR, build, deploy, pruebas y riesgos tecnicos",
    nextBestAction: "Separar deuda critica de producto, automatizacion y web para no mezclar urgencias.",
    escalation: "Alejandro decide prioridad si la misma persona sostiene arquitectura, frontend, backend e infra.",
    agent: "Agente #20",
    system: "GitHub / AWS / Plataforma / n8n",
    decisionNeeded: "Confirmar que entra al sprint y que queda como deuda."
  },
  {
    id: "DAY-012",
    title: "Capa ejecutiva semanal para Alejandro",
    area: "Direccion",
    owner: "Persona 10",
    backup: "Persona 22",
    playbookId: "PB-07",
    priority: "Critica",
    status: "Automatizable",
    due: "Viernes 18:00",
    source: "AECODE + GEN+ + VisionPro + AgentFlow",
    evidence: "Top 5 decisiones, bloqueos, metricas, riesgos y owners por frente",
    nextBestAction: "Generar resumen ejecutivo semanal sin cargar a Alejandro con tareas operativas pequenas.",
    escalation: "Solo entra a Alejandro lo que requiere decision, desbloqueo o criterio de negocio.",
    agent: "Agente #19",
    system: "Dashboard / Sheets / Notion / GitHub",
    decisionNeeded: "Definir formato fijo de reporte semanal AP."
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
  { id: "Agente #12", mission: "Monitorear Meta Ads, CPL, creativos, lead quality y desempeno comercial por GHL.", input: "Ads + GHL + feedback ventas", output: "Reporte diario, alertas de campana e insights de venta", humanControl: "Persona 12 valida cambios de mensaje y presupuesto", status: "Propuesto", impact: "Alto" },
  { id: "Agente #13", mission: "Orquestar eventos, Summit, agenda, piezas y sponsors.", input: "Notion evento + calendario + assets", output: "Semaforo de evento y tareas vencidas", humanControl: "Persona 14 escala bloqueos", status: "Propuesto", impact: "Alto" },
  { id: "Agente #14", mission: "Gestionar cola web, landings, piezas y QA visual.", input: "Solicitud de cambio + assets", output: "Checklist de publicacion y aprobacion", humanControl: "Persona 15 o 16 aprueba salida", status: "Propuesto", impact: "Medio" },
  { id: "Agente #15", mission: "Transformar webinars en clips, shorts y assets reutilizables.", input: "Grabacion + transcript + tema", output: "Backlog de clips con guion y estado", humanControl: "Persona 17 valida edicion final", status: "Propuesto", impact: "Medio" },
  { id: "Agente #16", mission: "Cruzar leads, asesorias GHL, objeciones, scripts, tiempos de respuesta y conversion comercial.", input: "GHL + CRM + feedback diario", output: "Lead quality, objeciones, gaps de venta y oportunidades por curso", humanControl: "Persona 12 y Persona 18 validan lectura marketing-ventas; Persona 29 valida cierre", status: "Propuesto", impact: "Alto" },
  { id: "Agente #17", mission: "Auditar loop de aprendizaje, evidencias, rubricas y skill passport.", input: "Programas + evidencias + evaluaciones", output: "Mapa de skill verification por cohorte", humanControl: "Persona 20 valida criterio academico", status: "Propuesto", impact: "Alto" },
  { id: "Agente #18", mission: "Sincronizar pagos, comprobantes y bloqueos administrativos.", input: "Pagos + documentos + matriculas", output: "Estado administrativo por estudiante", humanControl: "Persona 21 revisa casos sensibles", status: "Propuesto", impact: "Medio" },
  { id: "Agente #19", mission: "Construir dashboard ejecutivo de operacion completa AECODE.", input: "Academico + marketing + comercial + soporte", output: "KPIs semanales y alertas de decision", humanControl: "Persona 22 valida datos", status: "Propuesto", impact: "Alto" },
  { id: "Agente #20", mission: "Auditar arquitectura, estandares, API, seguridad, frontend, infra e IA por proyecto.", input: "Repo + ADR + backlog + deployment", output: "Checklist tecnico, riesgos y decisiones pendientes", humanControl: "Persona 23 aprueba arquitectura", status: "Propuesto", impact: "Alto" },
  { id: "Agente #21", mission: "Catalogar modelos, plantillas, familias, scripts, PPTs y Miros BIM como activos reutilizables.", input: "Assets BIM + curso + modulo", output: "Ficha de recurso con uso academico y estado", humanControl: "Persona 24 valida calidad tecnica BIM", status: "Propuesto", impact: "Medio" },
  { id: "Agente #22", mission: "Monitorear interesados, empresas, WhatsApp Business, LinkedIn, llamadas, convenios y siguientes acciones.", input: "Bandejas + Notion + listas de contactos", output: "Pipeline de alianzas actualizado con prioridad y proximo paso", humanControl: "Persona 25 valida clasificacion y tono comercial", status: "Propuesto", impact: "Alto" },
  { id: "Agente #23", mission: "Preparar reuniones, recordatorios, grabaciones, PPTs, resumen, transcripcion y onboarding de grupos.", input: "Calendario + contacto + PPT + reunion", output: "Checklist de reunion y paquete de follow-up", humanControl: "Persona 25 valida envio y materiales", status: "Propuesto", impact: "Alto" },
  { id: "Agente #24", mission: "Ejecutar checklist QA: E2E, UX, carga, estres, automatizadas, bugs y regresion.", input: "Release + casos de prueba + bugfix", output: "Reporte QA con evidencia, severidad y decision de release", humanControl: "Persona 26 aprueba validacion", status: "Propuesto", impact: "Alto" },
  { id: "Agente #25", mission: "Validar carga y actualizacion de data con controles de schema, duplicados y campos obligatorios.", input: "Fuente de datos + plantilla + corte", output: "Data validada u observada con errores accionables", humanControl: "Persona 26 valida carga final", status: "Propuesto", impact: "Medio" },
  { id: "Agente #26", mission: "Convertir brief, investigacion y requerimientos en IA, flujos, UI specs, branding y handoff para desarrollo.", input: "Brief + objetivo + usuario + constraints", output: "Mapa UX, estructura, criterios UI y checklist de implementacion", humanControl: "Persona 16 valida criterio UX/UI y marca", status: "Propuesto", impact: "Alto" },
  { id: "Agente #27", mission: "Priorizar automatizaciones, agentes IA y AECODITOS por impacto, riesgo y control humano.", input: "Backlog + procesos + metricas + fuentes", output: "Portafolio AI Ops priorizado con piloto, owner y criterio de produccion", humanControl: "Persona 27 valida impacto operativo y Persona 11 valida automatizacion", status: "Propuesto", impact: "Alto" },
  { id: "Agente #28", mission: "Convertir procesos AS-IS en SOPs TO-BE y medir eficiencia operativa.", input: "Proceso actual + tiempos + errores + responsables", output: "Mapa AS-IS/TO-BE, SOP y reporte de ahorro operativo", humanControl: "Persona 27 aprueba proceso y Persona 22 valida metricas", status: "Propuesto", impact: "Alto" },
  { id: "Agente #29", mission: "Consolidar roadmap AECODE 2.0/3.0, backlog dev, bugs, bloqueos, despliegues y flujos criticos.", input: "Roadmap + tareas dev + QA + producto + contenido", output: "Estado producto digital con riesgos, bloqueos y decisiones pendientes", humanControl: "Persona 27 valida estado operativo y Persona 23 valida release", status: "Propuesto", impact: "Alto" },
  { id: "Agente #30", mission: "Monitorear workflows n8n, integraciones y automatizaciones en produccion.", input: "n8n + logs + servicios conectados + errores", output: "Estado de automatizacion, alerta, causa probable y accion sugerida", humanControl: "Persona 27 valida cambios y Persona 11 valida impacto operativo", status: "Propuesto", impact: "Alto" },
  { id: "Agente #31", mission: "Auditar arquitectura multi-agente, base RAG, canales y limites de AECODITOS/oficina virtual.", input: "Prompts + tools + logs + base conocimiento + flujos", output: "Mapa de agentes, riesgos, handoffs, respuestas bloqueadas y evaluacion", humanControl: "Persona 27 valida funcionamiento y Persona 23 valida arquitectura", status: "Propuesto", impact: "Alto" },
  { id: "Agente #32", mission: "Orquestar dashboards, scrapers, datasets, modelos ML, deploys e incidentes tecnicos.", input: "Fuentes + repo + dataset + deployment + incidentes", output: "Panel tecnico con estado de datos, modelo, deploy, incidentes y proximas acciones", humanControl: "Persona 27 valida alcance y Persona 23 valida produccion", status: "Propuesto", impact: "Alto" },
  { id: "Agente #33", mission: "Convertir capacitaciones IA en guias, plantillas, toolkits, practicas y artefactos reutilizables.", input: "Tema + audiencia + taller + recursos", output: "Toolkit IA con guia, prompts, practica, evidencia y checklist", humanControl: "Persona 27 valida toolkit y Persona 20 valida valor academico", status: "Propuesto", impact: "Medio" },
  { id: "Agente #34", mission: "Unificar flujo ventas, pago, ticket, notificaciones y soporte postventa.", input: "CRM + pagos + tickets + canales + reglas", output: "Estado comercial/postventa con alertas de acceso, ticket y notificacion", humanControl: "Persona 27 valida flujo y Persona 21 valida administracion", status: "Propuesto", impact: "Alto" },
  { id: "Agente #35", mission: "Operar checklist de programas activos: sesiones, actas, Notion, docentes, materiales, soporte y HTML.", input: "Calendario + programa + acta + materiales + grupos + plantillas", output: "Estado de programa con pendientes, evidencias, comunicacion y bloqueos", humanControl: "Persona 28 valida coordinacion y Persona 3 valida agenda academica", status: "Propuesto", impact: "Alto" },
  { id: "Agente #36", mission: "Gestionar pipeline Summit/sponsors/aliados con CRM, correos, ponentes, B2B y seguimiento.", input: "CRM + contactos + agenda + correos + oportunidades", output: "Pipeline priorizado con correo, etapa, proxima accion, riesgo y responsable", humanControl: "Persona 28 valida seguimiento y Persona 25 valida tono/relacion", status: "Propuesto", impact: "Alto" }
];

export const agentContracts: AgentContract[] = [
  {
    id: "AF-001",
    name: "Soporte y accesos",
    owner: "Persona 1",
    objective: "Reducir friccion postventa detectando consultas, alumnos bloqueados y tickets sin SLA.",
    trigger: "Nuevo mensaje, nuevo inscrito o alumno sin acceso antes de clase.",
    inputPayload: ["student_ref", "program_id", "channel", "message_text", "payment_status", "current_access_state"],
    validations: ["Pago o inscripcion validada", "Programa existe", "No hay ticket abierto duplicado", "Canal permitido"],
    idempotency: "ticket_key = student_ref + program_id + issue_category + fecha",
    tools: ["Panel AECODE", "Admin Morado", "Sheet inscritos", "WhatsApp Business API futura"],
    permissions: "Lectura de registros y escritura de ticket; no enviar respuesta externa sin aprobacion.",
    output: "Ticket categorizado con SLA, respuesta sugerida, owner, backup y evidencia requerida.",
    logs: "agent_run_id, ticket_key, decision, confidence, owner, before_state, after_state",
    retries: "2 reintentos; si falla panel o dato sensible, marcar bloqueado.",
    fallback: "Patrick resuelve manualmente y deja ticket cerrado.",
    humanApproval: "Obligatoria para mensajes externos, cambios masivos de acceso y casos con pago observado.",
    privacyRisk: "Critico",
    status: "Piloto"
  },
  {
    id: "AF-002",
    name: "Registro de inscritos",
    owner: "Persona 2",
    objective: "Mantener registro unico de estudiantes, cohortes, fuentes, comunidad y estado administrativo.",
    trigger: "Nueva venta, formulario completado, carga de Sheet o cambio desde GHL.",
    inputPayload: ["lead_id", "student_ref", "course_id", "cohort_id", "source_channel", "payment_status", "advisor"],
    validations: ["Correo valido", "Telefono normalizado", "No duplicado", "Curso y cohorte activos", "Fuente declarada"],
    idempotency: "student_ref + course_id + cohort_id",
    tools: ["Google Sheets", "GHL", "Panel AECODE", "Validador de schema"],
    permissions: "Lectura/escritura en base maestra; no borrar registros sin revision humana.",
    output: "Registro creado/actualizado con estado, observaciones, fuente y owner.",
    logs: "record_id, duplicate_check, changed_fields, validation_errors, approved_by",
    retries: "3 reintentos sobre fuente; duplicados pasan a cola de revision.",
    fallback: "Ivana valida manualmente y marca motivo de excepcion.",
    humanApproval: "Obligatoria para merges, eliminaciones o cambios de pago.",
    privacyRisk: "Critico",
    status: "Diseno"
  },
  {
    id: "AF-003",
    name: "Zoom y sesiones live",
    owner: "Persona 3",
    objective: "Evitar clases improvisadas: Zoom, instructor, recursos, embajador, recordatorio y grabacion listos.",
    trigger: "Clase dentro de ventana 72h/48h/24h.",
    inputPayload: ["program_id", "session_id", "date_time", "instructor", "host_account", "resource_links"],
    validations: ["Cuenta Zoom disponible", "Horario sin conflicto", "Instructor confirmado", "Grabacion activada", "Grupo WSP existe"],
    idempotency: "session_id + date_time + host_account",
    tools: ["Zoom", "Google Calendar", "Notion Training", "Drive", "Sheet calendario"],
    permissions: "Crear/preparar reuniones; cambios de horario requieren aprobacion.",
    output: "Checklist de sesion con semaforo y pendientes por responsable.",
    logs: "session_id, zoom_id, conflicts, reminders, recording_state, pending_owner",
    retries: "2 intentos; si Zoom falla, generar alerta y plan B.",
    fallback: "Carolina o Daniella define host alternativo.",
    humanApproval: "Obligatoria para reprogramar, cambiar docente o enviar comunicado oficial.",
    privacyRisk: "Alto",
    status: "Piloto"
  },
  {
    id: "AF-004",
    name: "Drive a Vimeo a plataforma",
    owner: "Persona 1",
    objective: "Publicar grabaciones correctas en menos de 48h con evidencia y notificacion.",
    trigger: "Grabacion nueva en Drive o cierre de sesion live.",
    inputPayload: ["session_id", "drive_file_id", "course_id", "module_id", "cohort_id", "edit_required"],
    validations: ["Archivo correcto", "Audio/video legible", "Modulo existe", "Permiso Drive valido", "No publicado previamente"],
    idempotency: "session_id + drive_file_id + module_id",
    tools: ["Google Drive", "Vimeo", "Panel AECODE", "Sheet videos"],
    permissions: "Lectura de Drive y escritura de estado; subida final requiere confirmacion humana en version publica.",
    output: "Video con estado: recibido, editado, subido, publicado, observado o notificado.",
    logs: "file_id, checksum opcional, vimeo_ref, platform_ref, qa_result, publish_state",
    retries: "2 reintentos por API; si archivo falta, bloquear y avisar owner.",
    fallback: "Patrick publica manualmente o solicita nueva grabacion.",
    humanApproval: "Obligatoria para borrar, reemplazar videos o publicar material sensible.",
    privacyRisk: "Alto",
    status: "Diseno"
  },
  {
    id: "AF-005",
    name: "Certificados",
    owner: "Persona 1",
    objective: "Separar participacion, aprobacion Autodesk y observados sin errores de emision.",
    trigger: "Cohorte finalizada, lista aprobados recibida o reclamo de certificado.",
    inputPayload: ["student_ref", "course_id", "certificate_type", "attendance", "evidence_state", "rubric_state"],
    validations: ["Nombre normalizado", "Tipo de certificado valido", "Regla academica cumplida", "Sin duplicado"],
    idempotency: "student_ref + course_id + certificate_type + version",
    tools: ["Sheet certificados", "Plantillas PDF", "Drive", "Correo aprobado"],
    permissions: "Generar borradores y estado; envio externo solo con aprobacion.",
    output: "Certificado generado u observado con motivo y siguiente accion.",
    logs: "certificate_id, rule_check, template_version, approved_by, sent_state",
    retries: "1 reintento; errores de nombre/tipo pasan a QA visual.",
    fallback: "Patrick/Yary validan manualmente antes de envio.",
    humanApproval: "Obligatoria para envio, cambio de criterio o certificados oficiales.",
    privacyRisk: "Critico",
    status: "Diseno"
  },
  {
    id: "AF-006",
    name: "Recordatorios WhatsApp y GHL",
    owner: "Persona 6",
    objective: "Asegurar recordatorios de clase, webinar, evento y seguimiento sin duplicar ni spamear.",
    trigger: "Ventanas 72h, 24h, 2h o cambio de estado de lead/cohorte.",
    inputPayload: ["campaign_id", "audience_segment", "message_template", "send_window", "approval_state"],
    validations: ["Segmento permitido", "Template aprobado", "No enviado previamente", "Canal correcto"],
    idempotency: "campaign_id + audience_segment + send_window",
    tools: ["GHL", "WhatsApp Business", "Sheets grupos", "Calendario"],
    permissions: "Preparar y marcar pendientes; envio masivo requiere humano.",
    output: "Cola de mensajes con estado: aprobado, pendiente, enviado u observado.",
    logs: "message_batch_id, segment, template_version, approver, delivery_state",
    retries: "2 reintentos; si hay riesgo de duplicado, bloquear.",
    fallback: "Reiner o Patrick ejecutan envio manual con checklist.",
    humanApproval: "Obligatoria para mensajes externos y cambios de copy masivo.",
    privacyRisk: "Critico",
    status: "Diseno"
  },
  {
    id: "AF-007",
    name: "GHL y calidad de leads",
    owner: "Persona 12",
    objective: "Conectar marketing con venta real: CPL, objeciones, audios, llamadas, brochures y conversion.",
    trigger: "Cierre diario comercial, nueva campana o caida de conversion.",
    inputPayload: ["lead_id", "campaign_id", "source_channel", "conversation_stage", "objection", "close_state", "advisor"],
    validations: ["Lead con fuente", "Etapa consistente", "Objecion clasificada", "No hay conversacion sensible expuesta"],
    idempotency: "lead_id + campaign_id + stage_date",
    tools: ["GHL", "Meta Ads", "WhatsApp Business metadata", "Dashboard marketing"],
    permissions: "Lectura analitica y generacion de insights; no modificar presupuesto ni mensajes sin aprobacion.",
    output: "Insights de calidad de lead, objeciones, ajustes de copy y acciones por asesor.",
    logs: "campaign_id, lead_quality_score, objection_cluster, recommended_action, reviewer",
    retries: "2 reintentos; datos incompletos se marcan como baja confianza.",
    fallback: "Jessica/Talia revisan muestra manual de conversaciones.",
    humanApproval: "Obligatoria para cambios de presupuesto, oferta, copy final o contacto directo.",
    privacyRisk: "Critico",
    status: "Piloto"
  },
  {
    id: "AF-008",
    name: "Sponsors y reuniones",
    owner: "Persona 25",
    objective: "Ordenar contactos, reuniones, recordatorios, grabaciones, resumen y follow-up de sponsors/aliados.",
    trigger: "Nuevo contacto estrategico, reunion agendada o convenio pendiente.",
    inputPayload: ["company_id", "contact_ref", "meeting_id", "stage", "last_touch", "requested_doc_state"],
    validations: ["Empresa clasificada", "Contacto completo", "Proxima accion declarada", "Convenio versionado"],
    idempotency: "company_id + contact_ref + stage + meeting_date",
    tools: ["Notion", "Google Calendar", "Gmail draft", "Read AI", "WhatsApp metadata"],
    permissions: "Preparar borradores y resumentes; envio externo requiere aprobacion.",
    output: "Pipeline actualizado con proxima accion, resumen, riesgo y responsable.",
    logs: "company_id, stage_change, meeting_summary_ref, pending_docs, next_action_owner",
    retries: "2 reintentos; si falta grabacion/transcripcion, pedir resumen humano.",
    fallback: "Paola/Erika registran manualmente el estado.",
    humanApproval: "Obligatoria para correos, acuerdos, convenios o compromisos comerciales.",
    privacyRisk: "Alto",
    status: "Diseno"
  },
  {
    id: "AF-009",
    name: "QA y release",
    owner: "Persona 26",
    objective: "Evitar releases sin validacion E2E, UX, carga, bugs y data.",
    trigger: "Nuevo release, bugfix o carga de data critica.",
    inputPayload: ["release_id", "feature_id", "test_suite", "bug_id", "data_batch_id", "severity"],
    validations: ["Checklist E2E definido", "Ambiente correcto", "Bug con evidencia", "Retest obligatorio"],
    idempotency: "release_id + feature_id + test_suite_version",
    tools: ["GitHub", "Playwright futuro", "Checklist QA", "Sheet data"],
    permissions: "Crear reporte y bloquear recomendacion; merge/deploy queda en humano.",
    output: "Reporte QA con decision: listo, observado, bloqueado o requiere retest.",
    logs: "release_id, test_result, evidence_ref, severity, retest_state, approved_by",
    retries: "1 reintento automatizado; fallas inconsistentes se revisan manualmente.",
    fallback: "Jordi ejecuta validacion manual y Anderson decide release.",
    humanApproval: "Obligatoria para publicar release, cerrar bug critico o aceptar riesgo.",
    privacyRisk: "Medio",
    status: "Piloto"
  },
  {
    id: "AF-010",
    name: "Dashboard ejecutivo semanal",
    owner: "Persona 10",
    objective: "Dar a Alejandro una vista global sin ruido: decisiones, riesgos, metricas y bloqueos por frente.",
    trigger: "Cierre diario o corte semanal viernes.",
    inputPayload: ["activities_snapshot", "metrics_snapshot", "blocked_items", "decision_queue", "agent_runs"],
    validations: ["Cada bloqueo tiene owner", "Cada decision tiene contexto", "Cada metrica tiene fuente", "No hay datos sensibles publicos"],
    idempotency: "report_period + report_type + audience",
    tools: ["Dashboard", "Sheets", "Notion", "GitHub", "Gmail draft futuro"],
    permissions: "Generar reporte y borrador; envio automatico requiere autorizacion especifica.",
    output: "Reporte AP con top 5 decisiones, bloqueos, riesgos, avances y proximas acciones.",
    logs: "report_id, period, included_sources, excluded_sensitive_data, generated_at",
    retries: "2 reintentos; si faltan fuentes, emitir reporte parcial con brecha.",
    fallback: "Persona 22 prepara resumen manual con evidencias.",
    humanApproval: "Obligatoria para enviar por correo o compartir fuera del equipo interno.",
    privacyRisk: "Alto",
    status: "Diseno"
  }
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
    role: "Marketing & Growth Ops",
    mission: "Planificar, ejecutar y optimizar marketing/growth con GHL, campanas, lead quality, venta real y conversion.",
    areas: ["Marketing", "Comercial", "Datos"],
    primaryActivities: ["ACT-021", "ACT-022", "ACT-028", "ACT-048"],
    kpis: ["CPL por curso", "Lead quality", "Conversion por fuente", "Objeciones GHL", "Creativos ganadores", "Aprendizajes de venta convertidos en copy"],
    dailyCheck: "Revisar presupuesto, CPL, conversaciones GHL, scripts, tiempos de respuesta, conversion, alertas y feedback comercial.",
    escalation: "CPL fuera de umbral, lead sin contacto, objecion repetida, script debil, landing rota u oferta no validada.",
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
    role: "Operacion transversal + Summit Ops",
    mission: "Coordinar operaciones a todo nivel: programas, eventos, Summit, sponsors, estrategia comercial, difusion y seguimiento post-evento.",
    areas: ["Eventos", "Marketing", "Comercial", "Difusion"],
    primaryActivities: ["ACT-023", "ACT-024"],
    kpis: ["Tareas operativas al dia", "Speakers/sponsors confirmados", "Piezas publicadas", "Inscritos por fuente", "Bloqueos transversales cerrados"],
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
    role: "UX/UI Product Design + Brand Lead",
    mission: "Investigar, estructurar flujos, disenar interfaces, definir branding y coordinar implementacion visual con web/desarrollo/marketing.",
    areas: ["UX/UI", "Diseno", "Web", "Producto", "Marketing", "Tecnologia"],
    primaryActivities: ["ACT-026", "ACT-062", "ACT-063", "ACT-064", "ACT-065", "ACT-066", "ACT-067", "ACT-068", "ACT-069", "ACT-070"],
    kpis: ["Flujos completos antes de prototipo", "Handoffs validados", "Piezas aprobadas", "Marca consistente", "Formularios con data completa"],
    dailyCheck: "Revisar briefs, flujos pendientes, UI specs, branding, assets web, feedback al equipo y coordinaciones con desarrollo/web ops.",
    escalation: "Prototipo sin flujo, handoff incompleto, web sin asset aprobado, formulario sin validacion, pieza fuera de marca o cambio no coordinado.",
    backup: "Persona 9",
    obsidianSource: "Actividad enviada por UX/UI + HTML marketing/diseno"
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
    role: "Sales Review + Lead Quality Ops",
    mission: "Revisar como vende el equipo comercial para convertir la realidad de GHL en feedback accionable para marketing, copys, oferta y calidad de leads.",
    areas: ["Comercial", "Marketing", "Datos"],
    primaryActivities: ["ACT-028", "ACT-029", "ACT-022", "ACT-048"],
    kpis: ["Leads revisados", "Objeciones mapeadas", "Conversion por campana", "Feedback diario enviado", "Scripts mejorados"],
    dailyCheck: "Revisar conversaciones GHL, calidad de leads, objeciones, cursos con traccion, conversion por fuente y oportunidades de mejora para marketing.",
    escalation: "Campana con mala calidad, asesoria desalineada, objecion repetida sin ajuste de copy o marketing sin lectura comercial.",
    backup: "Persona 19",
    obsidianSource: "Actividad enviada por frontera GEN+/AECODE + HTML marketing/Ventas Feedback Comercial"
  },
  {
    id: "Persona 29",
    role: "Sales Closing + Team Training Ops",
    mission: "Convertir leads calientes en cierres mediante llamadas, audios, seguimiento, copys, brochures, seguimiento masivo y entrenamiento del equipo comercial.",
    areas: ["Comercial", "Marketing", "Difusion", "Datos", "Reuniones"],
    primaryActivities: ["ACT-105", "ACT-106", "ACT-107", "ACT-108", "ACT-109", "ACT-110", "ACT-111", "ACT-112"],
    kpis: ["Leads calientes llamados", "Audios enviados", "Tasa de cierre", "Copys ajustados", "Brochures completos", "Seguimiento masivo enviado", "Equipo entrenado"],
    dailyCheck: "Revisar leads calientes, llamadas, audios, cierres, copys, brochures, seguimiento masivo, avances de Yadira y mejoras del equipo.",
    escalation: "Lead caliente sin llamada, audio sin respuesta, brochure incompleto, copy debil, seguimiento masivo no enviado, Yadira bloqueada o cierre estancado.",
    backup: "Persona 19",
    obsidianSource: "Actividad enviada por cierre comercial corregida por Alejandro: responsable Talia"
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
    role: "Producto + automatizacion marketing + ingenieria",
    mission: "Convertir cursos en producto AECODE con rutas, skills, evidencias, automatizacion marketing, dashboards e ingenieria operativa.",
    areas: ["Producto", "Plataforma", "Certificados", "Datos"],
    primaryActivities: ["ACT-031", "ACT-016", "ACT-018", "ACT-019"],
    kpis: ["Skills verificadas por usuario activo", "Rutas publicadas", "Automatizaciones marketing priorizadas", "Dashboards accionables", "Rubricas activas"],
    dailyCheck: "Revisar avance de producto, rutas, automatizacion marketing, dashboards, bloqueos de ingenieria y certificacion.",
    escalation: "Curso sin skill outcome, automatizacion sin impacto, dashboard sin decision, certificado sin validacion o plataforma desalineada.",
    backup: "Persona 23",
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
  },
  {
    id: "Persona 23",
    role: "Product Engineering + Architecture Lead",
    mission: "Disenar arquitectura, estandares y construir productos completos de backend, frontend, infra e IA.",
    areas: ["Tecnologia", "Producto", "Plataforma", "Automatizacion", "Datos"],
    primaryActivities: ["ACT-034", "ACT-035", "ACT-036", "ACT-037", "ACT-038", "ACT-039", "ACT-040", "ACT-041", "ACT-042", "ACT-043"],
    kpis: ["Arquitecturas documentadas", "APIs versionadas", "Deploys reproducibles", "Features end-to-end entregadas"],
    dailyCheck: "Revisar decisiones tecnicas, bloqueos de producto, estado de APIs, frontend, infra y deuda critica.",
    escalation: "Arquitectura sin ADR, permisos inseguros, deploy no reproducible, API sin contrato o multiproyecto sin foco.",
    backup: "Persona 20",
    obsidianSource: "Actividad enviada por equipo tecnico"
  },
  {
    id: "Persona 24",
    role: "BIM Academic Asset Ops",
    mission: "Preparar modelos, planos, plantillas, familias, scripts y recursos BIM para cursos y soporte academico.",
    areas: ["BIM", "Contenido", "Producto", "Plataforma"],
    primaryActivities: ["ACT-044", "ACT-045", "ACT-046", "ACT-047"],
    kpis: ["Assets BIM listos", "Plantillas versionadas", "Scripts documentados", "Recursos alineados al curso"],
    dailyCheck: "Revisar necesidades de cursos, proyectos BIM, PPTs, Miros, plantillas y scripts pendientes.",
    escalation: "Material BIM sin version, script no documentado, recurso tarde o desalineado con objetivo de aprendizaje.",
    backup: "Persona 7",
    obsidianSource: "Actividad enviada por soporte BIM"
  },
  {
    id: "Persona 25",
    role: "Partnerships support + outreach Ops",
    mission: "Complementar al equipo de Erika gestionando interesados, empresas, llamadas, reuniones, WhatsApp Business, LinkedIn, sponsors, grupos y convenios.",
    areas: ["Alianzas", "Comercial", "Reuniones", "Eventos", "Marketing"],
    primaryActivities: ["ACT-049", "ACT-050", "ACT-051", "ACT-052", "ACT-053", "ACT-054", "ACT-055"],
    kpis: ["Interesados clasificados", "Reuniones agendadas", "Bandejas respondidas", "Convenios revisados", "Grupos creados"],
    dailyCheck: "Revisar interesados, WhatsApp Business, LinkedIn, llamadas pendientes, reuniones del dia, convenios y grupos por crear.",
    escalation: "Contacto caliente sin respuesta, reunion sin recordatorio/grabacion, sponsor sin grupo, convenio completo sin revision o empresa sin datos.",
    backup: "Persona 14",
    obsidianSource: "Actividad enviada por partnerships/outreach"
  },
  {
    id: "Persona 26",
    role: "QA + Data Validation Ops",
    mission: "Validar flujos E2E, experiencia de usuario, carga/estres, automatizacion de pruebas, bugfixes y data.",
    areas: ["QA", "Datos", "Tecnologia", "Producto"],
    primaryActivities: ["ACT-056", "ACT-057", "ACT-058", "ACT-059", "ACT-060", "ACT-061"],
    kpis: ["Casos E2E validados", "Bugs reabiertos", "Pruebas automatizadas", "Errores de data", "Riesgos de release"],
    dailyCheck: "Revisar releases, bugs corregidos, casos E2E, UX, carga, pruebas automatizadas y data pendiente.",
    escalation: "Release sin QA, bug critico sin regresion, data inconsistente, carga no validada o UX bloqueante.",
    backup: "Persona 23",
    obsidianSource: "Actividad enviada por QA/testing"
  },
  {
    id: "Persona 27",
    role: "Automation + web integration engineer",
    mission: "Disenar, desplegar y mantener automatizaciones, integraciones web, agentes IA, Aecoditos, dashboards, data, documentacion tecnica y flujos criticos GEN+/AECODE con control operativo.",
    areas: ["AI Ops", "Producto digital", "Automatizacion", "Producto", "Tecnologia", "Web", "Plataforma", "Finanzas", "Datos", "Documentacion", "Capacitacion IA", "Computer Vision", "Programas", "Comercial", "Marketing"],
    primaryActivities: ["ACT-071", "ACT-072", "ACT-073", "ACT-074", "ACT-075", "ACT-076", "ACT-077", "ACT-078", "ACT-079", "ACT-080", "ACT-081", "ACT-082", "ACT-083", "ACT-084", "ACT-085", "ACT-086", "ACT-087", "ACT-088", "ACT-089", "ACT-090", "ACT-091", "ACT-092", "ACT-093", "ACT-094"],
    kpis: ["Automatizaciones en produccion", "Integraciones web activas", "Incidentes resueltos", "Agentes auditables", "Dashboards desplegados", "Specs versionadas"],
    dailyCheck: "Revisar n8n, integraciones web, AECODITOS, roadmap, bloqueos dev, incidentes, datasets, specs y flujos comerciales/postventa automatizados.",
    escalation: "Automatizacion sin owner, integracion web rota, agente sin control, workflow caido, deploy sin rollback, dataset sin version o spec incompleta.",
    backup: "Persona 11",
    obsidianSource: "PDF actividades tecnologia/automatizacion + Notion AECODE operaciones/AI Ops y producto digital"
  },
  {
    id: "Persona 28",
    role: "Operacion transversal de programas + Summit",
    mission: "Coordinar operaciones a todo nivel en programas activos, actas, flujos Notion, docentes, postventa, sponsors, ponentes, marketing, B2B y comunicaciones HTML.",
    areas: ["Programas", "Sesiones", "Documentacion", "Accesos y soporte", "Automatizacion", "Alianzas", "Eventos", "Marketing", "Comercial", "Contenido"],
    primaryActivities: ["ACT-095", "ACT-096", "ACT-097", "ACT-098", "ACT-099", "ACT-100", "ACT-101", "ACT-102", "ACT-103", "ACT-104"],
    kpis: ["Programas actualizados", "Actas cerradas <24h", "Sesiones listas 72h antes", "Sponsors en seguimiento", "Errores de automatizacion reportados", "Plantillas HTML versionadas"],
    dailyCheck: "Revisar programas activos, actas, docentes, horarios, materiales, soporte postventa, automatizaciones en prueba, sponsors, ponentes, campanas, B2B y plantillas HTML.",
    escalation: "Sesion sin docente/material, acta pendiente, participante sin respuesta, automatizacion con error, sponsor sin follow-up, ponente sin confirmar o plantilla sin version.",
    backup: "Persona 3",
    obsidianSource: "Actividad enviada por programas/Summit"
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
    activities: ["ACT-021", "ACT-022", "ACT-028", "ACT-029", "ACT-048", "ACT-108", "ACT-109", "ACT-110"],
    evidence: "Brief, piezas, landing, campana activa, CPL, lead quality, conversaciones GHL, copys ajustados, brochures y objeciones.",
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
  },
  {
    id: "WF-11",
    label: "Product engineering",
    timing: "Discovery -> release",
    owner: "Persona 23",
    objective: "Convertir necesidad de producto en arquitectura, backend, frontend, infra, IA y deploy trazable.",
    activities: ["ACT-034", "ACT-035", "ACT-036", "ACT-037", "ACT-038", "ACT-040", "ACT-041", "ACT-042", "ACT-043"],
    evidence: "ADR, API contract, schema, UI flow, deploy, logs y checklist de seguridad.",
    automation: "Agente #20"
  },
  {
    id: "WF-12",
    label: "Activos BIM academicos",
    timing: "Planificacion de curso -> clase",
    owner: "Persona 24",
    objective: "Convertir modelos, planos, plantillas, familias, scripts, PPTs y Miros en recursos reutilizables.",
    activities: ["ACT-044", "ACT-045", "ACT-046", "ACT-047"],
    evidence: "Ficha de asset BIM con curso, modulo, version, uso academico y estado.",
    automation: "Agente #21"
  },
  {
    id: "WF-13",
    label: "Alianzas y sponsors",
    timing: "Interes -> cierre",
    owner: "Persona 25",
    objective: "Convertir interesados, empresas, sponsors y aliados en reuniones, grupos, convenios y follow-up trazable.",
    activities: ["ACT-049", "ACT-050", "ACT-051", "ACT-052", "ACT-053", "ACT-054", "ACT-055"],
    evidence: "Pipeline actualizado, reunion registrada, grupo creado, correo enviado y convenio revisado.",
    automation: "Agente #22 + Agente #23"
  },
  {
    id: "WF-14",
    label: "QA y release validation",
    timing: "Feature -> release",
    owner: "Persona 26",
    objective: "Reducir riesgo de producto validando funcionalidad E2E, UX, rendimiento, bugs y data antes de release.",
    activities: ["ACT-056", "ACT-057", "ACT-058", "ACT-059", "ACT-060", "ACT-061"],
    evidence: "Reporte QA, bugs validados, pruebas automatizadas y data cargada sin observaciones.",
    automation: "Agente #24 + Agente #25"
  },
  {
    id: "WF-15",
    label: "UX/UI y handoff de producto",
    timing: "Brief -> implementacion",
    owner: "Persona 16",
    objective: "Convertir requerimientos en investigacion, flujo completo, UI, branding, assets web y handoff validado.",
    activities: ["ACT-062", "ACT-063", "ACT-064", "ACT-065", "ACT-066", "ACT-067", "ACT-068", "ACT-069", "ACT-070"],
    evidence: "Mapa UX, flujo, UI spec, kit visual, assets web, formulario y handoff a desarrollo.",
    automation: "Agente #14 + Agente #26"
  },
  {
    id: "WF-16",
    label: "Producto digital y AI Ops",
    timing: "Discovery -> produccion",
    owner: "Persona 27",
    objective: "Coordinar automatizaciones, agentes IA, n8n, integraciones, dashboards, data, dev, flujos criticos, capacitacion IA y soporte comercial con trazabilidad.",
    activities: ["ACT-071", "ACT-072", "ACT-073", "ACT-074", "ACT-075", "ACT-076", "ACT-077", "ACT-078", "ACT-079", "ACT-080", "ACT-081", "ACT-082", "ACT-083", "ACT-084", "ACT-085", "ACT-086", "ACT-087", "ACT-088", "ACT-089", "ACT-090", "ACT-091", "ACT-092", "ACT-093", "ACT-094"],
    evidence: "Backlog AI Ops, workflows n8n, SOP, roadmap, checklist funcional, estado dev, agentes, datasets, specs, deploys y reporte de eficiencia.",
    automation: "Agente #27 + Agente #28 + Agente #29 + Agente #30 + Agente #31 + Agente #32"
  },
  {
    id: "WF-17",
    label: "Programas activos, Summit y postventa",
    timing: "Diario / por sesion / campana",
    owner: "Persona 28",
    objective: "Mantener programas, actas, docentes, soporte, automatizaciones, sponsors, ponentes, marketing, B2B y HTML coordinados sin perdida de trazabilidad.",
    activities: ["ACT-095", "ACT-096", "ACT-097", "ACT-098", "ACT-099", "ACT-100", "ACT-101", "ACT-102", "ACT-103", "ACT-104"],
    evidence: "Estado de programa, acta PDF, flujo Notion, agenda academica, ticket postventa, reporte de error, pipeline sponsor y plantilla HTML.",
    automation: "Agente #35 + Agente #36 + Agente #13 + Agente #1"
  },
  {
    id: "WF-18",
    label: "Cierre comercial y entrenamiento ventas",
    timing: "Diario -> review semanal",
    owner: "Persona 29",
    objective: "Convertir leads calientes en cierres mediante llamadas, audios, seguimiento, copys, brochures, difusion masiva y entrenamiento del equipo.",
    activities: ["ACT-105", "ACT-106", "ACT-107", "ACT-108", "ACT-109", "ACT-110", "ACT-111", "ACT-112"],
    evidence: "Llamadas registradas, audios enviados, cierres, copys optimizados, brochures completos, seguimiento masivo, entrenamiento y acuerdos de mejora.",
    automation: "Agente #16 + Agente #14 + Agente #10"
  }
];

export const workflowPlaybooks: WorkflowPlaybook[] = [
  {
    id: "PB-01",
    title: "Postventa y acceso de estudiante",
    domain: "Operacion academica",
    trigger: "Compra validada, formulario completado o lista de inscritos recibida.",
    goal: "Que cada estudiante llegue a su primera clase con acceso, grupo y soporte activo.",
    lead: "Persona 1",
    cycle: "Compra -> primera clase",
    kpi: "Acceso activo <24h y cero alumnos bloqueados al inicio.",
    agent: "Agente #1 + Agente #2 + Agente #7",
    steps: [
      {
        id: "PB01-S1",
        label: "Validar inscrito",
        timing: "0-4h",
        owner: "Persona 2",
        team: ["Persona 1", "Persona 21"],
        entry: "Pago, formulario, Sheet o lead marcado como inscrito.",
        action: "Cruzar registro, curso, cohorte, correo, telefono y estado administrativo.",
        output: "Alumno validado o observado con motivo concreto.",
        evidence: "Registro actualizado con user_id, course_id, cohort_id y fuente.",
        systems: ["Sheet inscritos", "GHL", "Panel AECODE"],
        automation: "Agente #7 detecta duplicados, campos vacios y alumnos sin owner.",
        status: "Listo",
        risk: "Registro duplicado o correo incorrecto bloquea accesos y certificados.",
        linkedActivities: ["ACT-003", "ACT-032"]
      },
      {
        id: "PB01-S2",
        label: "Activar acceso",
        timing: "0-24h",
        owner: "Persona 1",
        team: ["Persona 3"],
        entry: "Alumno validado y programa confirmado.",
        action: "Crear acceso en plataforma, revisar rol, curso visible y panel correcto.",
        output: "Acceso activo y probado.",
        evidence: "Estado acceso_activo y captura o log interno.",
        systems: ["Admin Morado", "Panel AECODE", "Plataforma"],
        automation: "Agente #2 genera cola de altas, alertas y excepciones.",
        status: "En curso",
        risk: "Acceso tardio genera reclamos tempranos y baja activacion.",
        linkedActivities: ["ACT-001", "ACT-002"]
      },
      {
        id: "PB01-S3",
        label: "Crear grupo y aula",
        timing: "24-72h antes",
        owner: "Persona 6",
        team: ["Persona 3", "Persona 7"],
        entry: "Cohorte confirmada y lista de estudiantes limpia.",
        action: "Crear o actualizar grupo WhatsApp, Classroom y perfil del grupo.",
        output: "Canal oficial listo con estudiantes, embajador y reglas basicas.",
        evidence: "Grupo/aula creado con responsable y enlace seguro interno.",
        systems: ["WhatsApp", "Classroom", "Sheet grupos"],
        automation: "Agente #6 compara inscritos vs miembros del grupo.",
        status: "En curso",
        risk: "Alumno fuera del grupo pierde recordatorios, soporte y comunidad.",
        linkedActivities: ["ACT-010", "ACT-016"]
      },
      {
        id: "PB01-S4",
        label: "Bienvenida y recordatorio",
        timing: "24h antes",
        owner: "Persona 6",
        team: ["Persona 8", "Persona 3"],
        entry: "Acceso, grupo y clase confirmados.",
        action: "Enviar mensaje de bienvenida, instrucciones y recordatorio de clase.",
        output: "Alumno entiende link, horario, canal y proximo paso.",
        evidence: "Mensaje enviado, canal, hora y responsable registrados.",
        systems: ["WhatsApp", "GHL", "Sheet seguimiento"],
        automation: "Agente #5 agenda recordatorios y marca pendientes.",
        status: "Automatizable",
        risk: "Sin recordatorio aumenta inasistencia y consultas repetidas.",
        linkedActivities: ["ACT-009", "ACT-013"]
      },
      {
        id: "PB01-S5",
        label: "Soporte primer acceso",
        timing: "Dia de clase",
        owner: "Persona 1",
        team: ["Persona 3", "Persona 7"],
        entry: "Alumno intenta ingresar o reporta bloqueo.",
        action: "Responder ticket, clasificar incidencia y escalar si excede SLA.",
        output: "Incidencia resuelta o escalada con evidencia.",
        evidence: "Ticket con categoria, SLA, respuesta y cierre.",
        systems: ["WhatsApp", "Panel AECODE", "Registro soporte"],
        automation: "Agente #1 enrutador de soporte por categoria y prioridad.",
        status: "Riesgo",
        risk: "Sin ticket se pierde trazabilidad y el problema se repite.",
        linkedActivities: ["ACT-001"]
      }
    ],
    handoffs: [
      { from: "Comercial/Admin", to: "Persona 2", rule: "No pasa a acceso sin pago, correo y programa confirmados." },
      { from: "Persona 2", to: "Persona 1", rule: "No se activa acceso con registro incompleto." },
      { from: "Persona 1", to: "Persona 6", rule: "Grupo se crea solo con acceso o cohorte confirmada." },
      { from: "Persona 6", to: "Persona 3", rule: "Sesion no se confirma si faltan estudiantes clave en grupo." }
    ],
    escalations: [
      "Alumno pagado sin acceso luego de 24h.",
      "Correo/telefono incorrecto sin respuesta del asesor.",
      "Grupo o Classroom no creado 24h antes de clase."
    ],
    doneDefinition: [
      "Acceso probado por curso y cohorte.",
      "Alumno en canal oficial.",
      "Registro unico actualizado.",
      "Soporte con SLA y responsable."
    ]
  },
  {
    id: "PB-02",
    title: "Sesion en vivo y soporte academico",
    domain: "Sesiones live",
    trigger: "Clase programada en calendario academico.",
    goal: "Ejecutar la sesion sin improvisacion y capturar evidencia operativa.",
    lead: "Persona 3",
    cycle: "72h antes -> cierre de clase",
    kpi: "Sesion lista 72h antes y acta/incidencias cerradas el mismo dia.",
    agent: "Agente #3 + Agente #5 + Agente #9",
    steps: [
      {
        id: "PB02-S1",
        label: "Configurar Zoom",
        timing: "72h antes",
        owner: "Persona 3",
        team: ["Persona 6", "Persona 1"],
        entry: "Horario, instructor y cohorte confirmados.",
        action: "Crear Zoom, revisar cuenta, permisos, grabacion y conflictos de horario.",
        output: "Link oficial validado.",
        evidence: "Zoom creado con fecha, cuenta, host y estado de grabacion.",
        systems: ["Zoom", "Sheet calendario", "Notion programas"],
        automation: "Agente #3 detecta conflictos de cuenta y links faltantes.",
        status: "En curso",
        risk: "Link incorrecto o cuenta ocupada bloquea la clase.",
        linkedActivities: ["ACT-004"]
      },
      {
        id: "PB02-S2",
        label: "Confirmar instructor y recursos",
        timing: "48h antes",
        owner: "Persona 3",
        team: ["Persona 24", "Persona 28"],
        entry: "Tema de sesion, programa y materiales esperados.",
        action: "Validar PPT, Miro, archivos BIM, recursos y responsable de presentacion.",
        output: "Material listo y versionado.",
        evidence: "Checklist de recursos con version y link seguro.",
        systems: ["Drive", "Miro", "Notion", "Sheet programas"],
        automation: "Agente #21 cataloga recursos BIM y faltantes.",
        status: "Automatizable",
        risk: "Material tardio afecta experiencia y autoridad docente.",
        linkedActivities: ["ACT-011", "ACT-044", "ACT-045", "ACT-046", "ACT-047"]
      },
      {
        id: "PB02-S3",
        label: "Activar embajador",
        timing: "24h antes",
        owner: "Persona 7",
        team: ["Persona 6", "Persona 3"],
        entry: "Grupo, lista y reglas de sesion listas.",
        action: "Asignar embajador, pasar funciones y checklist de video/soporte.",
        output: "Embajador operativo con rol claro.",
        evidence: "Embajador asignado, induccion enviada y funciones aceptadas.",
        systems: ["WhatsApp", "Drive", "Sheet embajadores"],
        automation: "Agente #9 alerta embajador faltante o sin induccion.",
        status: "En curso",
        risk: "Sin embajador la sesion depende de coordinacion manual.",
        linkedActivities: ["ACT-011", "ACT-012"]
      },
      {
        id: "PB02-S4",
        label: "Recordatorio y ejecucion",
        timing: "Dia de clase",
        owner: "Persona 6",
        team: ["Persona 1", "Persona 3"],
        entry: "Zoom, grupo y material listos.",
        action: "Enviar recordatorio, abrir soporte, verificar grabacion y registrar incidencias.",
        output: "Sesion ejecutada con asistencia y soporte controlados.",
        evidence: "Recordatorio enviado, asistencia, incidencias y grabacion activa.",
        systems: ["WhatsApp", "Zoom", "Registro soporte"],
        automation: "Agente #5 controla recordatorios y asistencia esperada.",
        status: "Riesgo",
        risk: "Si no se activa grabacion, se rompe el flujo de contenido post sesion.",
        linkedActivities: ["ACT-001", "ACT-009"]
      },
      {
        id: "PB02-S5",
        label: "Cierre y acta",
        timing: "0-12h post clase",
        owner: "Persona 28",
        team: ["Persona 3", "Persona 7"],
        entry: "Sesion finalizada.",
        action: "Registrar acta, incidencias, pendientes academicos y material a publicar.",
        output: "Cierre operativo listo para contenido y seguimiento.",
        evidence: "Acta, pendientes, asistencia y bloqueos.",
        systems: ["Notion", "Drive", "Sheet programas"],
        automation: "Agente #35 genera semaforo de sesion y pendientes.",
        status: "Automatizable",
        risk: "Sin acta el aprendizaje operativo no alimenta mejora ni soporte.",
        linkedActivities: ["ACT-095", "ACT-096"]
      }
    ],
    handoffs: [
      { from: "Persona 3", to: "Persona 6", rule: "Recordatorio sale solo con link Zoom validado." },
      { from: "Persona 24", to: "Persona 3", rule: "Material BIM debe llegar versionado antes del recordatorio." },
      { from: "Persona 7", to: "Persona 28", rule: "Cierre academico incluye reporte de embajador." }
    ],
    escalations: [
      "Zoom sin host confirmado 24h antes.",
      "Instructor o material sin confirmacion 24h antes.",
      "Grabacion no activada durante clase."
    ],
    doneDefinition: [
      "Clase ejecutada con link correcto.",
      "Grabacion confirmada.",
      "Incidencias registradas.",
      "Acta o cierre operativo publicado."
    ]
  },
  {
    id: "PB-03",
    title: "Grabacion, edicion y publicacion",
    domain: "Contenido y plataforma",
    trigger: "Sesion grabada o recurso listo para publicar.",
    goal: "Publicar la grabacion correcta en plataforma y convertirla en activo reutilizable.",
    lead: "Persona 4",
    cycle: "0-48h post clase",
    kpi: "Grabacion publicada <48h y alumnos notificados.",
    agent: "Agente #4 + Agente #10 + Agente #15",
    steps: [
      {
        id: "PB03-S1",
        label: "Recibir grabacion",
        timing: "0-6h",
        owner: "Persona 4",
        team: ["Persona 3"],
        entry: "Sesion finalizada con grabacion disponible.",
        action: "Descargar o ubicar archivo Drive, validar nombre, cohorte y modulo.",
        output: "Archivo base identificado.",
        evidence: "Drive con nomenclatura curso-modulo-fecha.",
        systems: ["Zoom", "Drive", "Sheet videos"],
        automation: "Agente #4 detecta grabaciones sin curso o sin destino.",
        status: "En curso",
        risk: "Archivo sin nomenclatura produce errores de publicacion.",
        linkedActivities: ["ACT-005"]
      },
      {
        id: "PB03-S2",
        label: "QA y edicion",
        timing: "6-24h",
        owner: "Persona 4",
        team: ["Persona 17", "Persona 5"],
        entry: "Video base y criterio de publicacion.",
        action: "Cortar inicio/fin, revisar audio, privacidad, miniatura y partes sensibles.",
        output: "Video listo para Vimeo o YouTube.",
        evidence: "Version editada y aprobacion de publicacion.",
        systems: ["Editor video", "Drive", "YouTube"],
        automation: "Agente #15 propone cortes y clips reutilizables.",
        status: "Automatizable",
        risk: "Publicar sin QA puede exponer errores, datos o mala experiencia.",
        linkedActivities: ["ACT-006", "ACT-007", "ACT-008"]
      },
      {
        id: "PB03-S3",
        label: "Subir a Vimeo",
        timing: "24h",
        owner: "Persona 4",
        team: ["Persona 1"],
        entry: "Video editado y curso destino definido.",
        action: "Subir a Vimeo, validar privacidad, titulo y embed.",
        output: "Video con enlace Vimeo listo.",
        evidence: "URL segura y estado publicado.",
        systems: ["Vimeo", "Drive", "Panel AECODE"],
        automation: "Agente #4 marca estado Drive -> Vimeo.",
        status: "En curso",
        risk: "Privacidad incorrecta o video no embebible rompe plataforma.",
        linkedActivities: ["ACT-005"]
      },
      {
        id: "PB03-S4",
        label: "Publicar en plataforma",
        timing: "24-48h",
        owner: "Persona 1",
        team: ["Persona 4", "Persona 20"],
        entry: "Embed Vimeo y modulo destino.",
        action: "Subir video, recurso y descripcion a plataforma AECODE.",
        output: "Clase disponible para estudiantes.",
        evidence: "Modulo con video publicado y prueba de acceso.",
        systems: ["Panel AECODE", "Vimeo", "Plataforma"],
        automation: "Agente #4 cierra pipeline y notifica faltantes.",
        status: "Riesgo",
        risk: "Video no publicado aumenta consultas y baja valor percibido.",
        linkedActivities: ["ACT-005"]
      },
      {
        id: "PB03-S5",
        label: "Notificar y reciclar",
        timing: "48h",
        owner: "Persona 6",
        team: ["Persona 15", "Persona 17"],
        entry: "Video publicado y probado.",
        action: "Avisar a estudiantes y derivar clips para YouTube/ads si aplica.",
        output: "Alumno informado y backlog de contenido actualizado.",
        evidence: "Mensaje enviado, pieza o clip en cola.",
        systems: ["WhatsApp", "YouTube", "Drive", "GHL"],
        automation: "Agente #10 registra canal, copy, CTA y resultado.",
        status: "Automatizable",
        risk: "Contenido publicado pero no comunicado genera baja visualizacion.",
        linkedActivities: ["ACT-007", "ACT-008", "ACT-013"]
      }
    ],
    handoffs: [
      { from: "Persona 3", to: "Persona 4", rule: "Cierre de clase debe indicar si la grabacion existe y donde esta." },
      { from: "Persona 4", to: "Persona 1", rule: "No se publica en plataforma sin Vimeo validado." },
      { from: "Persona 1", to: "Persona 6", rule: "No se comunica al grupo hasta probar acceso del video." }
    ],
    escalations: [
      "Grabacion no encontrada 6h post clase.",
      "Video pendiente de publicacion >48h.",
      "Error de privacidad o acceso reportado por alumno."
    ],
    doneDefinition: [
      "Video en plataforma.",
      "Acceso probado.",
      "Alumnos notificados.",
      "Clip reusable identificado si aplica."
    ]
  },
  {
    id: "PB-04",
    title: "Evidencia, rubrica y certificados",
    domain: "Skill verification",
    trigger: "Modulo, reto o cohorte entra a cierre academico.",
    goal: "Pasar de asistencia a habilidad verificada con evidencia.",
    lead: "Persona 20",
    cycle: "Reto -> certificado",
    kpi: "Skills verificadas con evidencia por usuario activo mensual.",
    agent: "Agente #8 + Agente #17 + Agente #19",
    steps: [
      {
        id: "PB04-S1",
        label: "Abrir reto/evidencia",
        timing: "Inicio modulo",
        owner: "Persona 20",
        team: ["Persona 7", "Persona 16"],
        entry: "Skill outcome, modulo y rubrica definidos.",
        action: "Publicar tarea, criterios de evidencia y fecha de entrega.",
        output: "Estudiante sabe que debe demostrar.",
        evidence: "Reto publicado con rubrica visible.",
        systems: ["Plataforma", "Classroom", "Notion"],
        automation: "Agente #17 revisa que cada modulo tenga evidencia esperada.",
        status: "En curso",
        risk: "Sin evidencia, AECODE queda como academia de asistencia.",
        linkedActivities: ["ACT-031", "ACT-033"]
      },
      {
        id: "PB04-S2",
        label: "Recolectar y clasificar",
        timing: "Durante modulo",
        owner: "Persona 7",
        team: ["Persona 1", "Persona 3"],
        entry: "Evidencias enviadas por estudiantes.",
        action: "Clasificar entregas: recibida, incompleta, requiere soporte, lista para rubrica.",
        output: "Cola de revision limpia.",
        evidence: "Estado de evidencia por estudiante.",
        systems: ["Classroom", "Sheet academico", "Plataforma"],
        automation: "Agente #17 marca entregas incompletas y alumnos en riesgo.",
        status: "Automatizable",
        risk: "Evidencias dispersas impiden certificar con criterio.",
        linkedActivities: ["ACT-018", "ACT-019"]
      },
      {
        id: "PB04-S3",
        label: "Validar rubrica",
        timing: "Cierre modulo",
        owner: "Persona 7",
        team: ["Persona 20", "Persona 26"],
        entry: "Evidencias listas.",
        action: "Aplicar rubrica, registrar feedback y separar aprobados/observados.",
        output: "Resultado academico defendible.",
        evidence: "Rubrica, feedback y estado de aprobacion.",
        systems: ["Sheet academico", "Plataforma", "Drive"],
        automation: "Agente #24 detecta inconsistencias de data y evidencia faltante.",
        status: "En curso",
        risk: "Certificar sin rubrica debilita calidad y confianza.",
        linkedActivities: ["ACT-056", "ACT-061"]
      },
      {
        id: "PB04-S4",
        label: "Emitir certificado",
        timing: "Cierre cohorte",
        owner: "Persona 1",
        team: ["Persona 9", "Persona 21"],
        entry: "Alumno aprobado y datos administrativos correctos.",
        action: "Generar certificado de participacion o aprobacion segun regla.",
        output: "Certificado emitido y enviado.",
        evidence: "Certificado, estado de envio y registro de alumno.",
        systems: ["Certificados", "Drive", "Correo", "Sheet inscritos"],
        automation: "Agente #8 valida datos, tipo de certificado y envio.",
        status: "Riesgo",
        risk: "Certificado con datos erroneos genera reproceso y reclamo.",
        linkedActivities: ["ACT-018", "ACT-019"]
      },
      {
        id: "PB04-S5",
        label: "Actualizar dashboard",
        timing: "Semanal",
        owner: "Persona 22",
        team: ["Persona 20", "Persona 10"],
        entry: "Evidencias y certificados cerrados.",
        action: "Actualizar metricas de skill start, evidence upload, verified skill y certificado.",
        output: "Decision de retencion, producto y growth basada en evidencia.",
        evidence: "Dashboard actualizado con corte semanal.",
        systems: ["BI", "Sheet", "Dashboard"],
        automation: "Agente #19 genera alertas de cohortes y skill verification.",
        status: "Automatizable",
        risk: "Sin metrica, el equipo optimiza actividades y no resultados.",
        linkedActivities: ["ACT-003", "ACT-031", "ACT-033"]
      }
    ],
    handoffs: [
      { from: "Persona 20", to: "Persona 7", rule: "Rubrica debe existir antes de pedir evidencia." },
      { from: "Persona 7", to: "Persona 1", rule: "Certificado solo sale con aprobacion y datos validados." },
      { from: "Persona 1", to: "Persona 22", rule: "Certificado emitido actualiza metricas y cohorte." }
    ],
    escalations: [
      "Alumno aprobado con datos incompletos.",
      "Evidencias sin revisar por mas de 7 dias.",
      "Cohorte cierra sin dashboard de skill verification."
    ],
    doneDefinition: [
      "Evidencia validada.",
      "Feedback registrado.",
      "Certificado enviado si aplica.",
      "Metricas actualizadas."
    ]
  },
  {
    id: "PB-05",
    title: "Campana, GHL y cierre comercial",
    domain: "Growth y ventas",
    trigger: "Nuevo curso, webinar, evento o campana activa.",
    goal: "Conectar marketing, ventas y postventa para convertir leads con aprendizaje real.",
    lead: "Persona 12",
    cycle: "Brief -> venta -> feedback",
    kpi: "Lead quality, conversion a reunion/venta y objeciones convertidas en mejora de copy.",
    agent: "Agente #12 + Agente #16",
    steps: [
      {
        id: "PB05-S1",
        label: "Brief y oferta",
        timing: "7 dias antes",
        owner: "Persona 12",
        team: ["Persona 18", "Persona 16", "Persona 20"],
        entry: "Programa, precio, promesa y publico objetivo.",
        action: "Alinear oferta, landing, CTA, objeciones y diferenciador de skill evidence.",
        output: "Brief de campana listo.",
        evidence: "Brief, copy base y criterio de lead ideal.",
        systems: ["Notion", "GHL", "Drive"],
        automation: "Agente #12 revisa checklist de campana antes de pauta.",
        status: "En curso",
        risk: "Campana sin oferta clara atrae leads de baja calidad.",
        linkedActivities: ["ACT-021", "ACT-108"]
      },
      {
        id: "PB05-S2",
        label: "Piezas y pauta",
        timing: "5 dias antes",
        owner: "Persona 13",
        team: ["Persona 12", "Persona 15"],
        entry: "Brief aprobado.",
        action: "Crear piezas, brochure, copy, anuncios y activos de difusion.",
        output: "Campana lista para publicar.",
        evidence: "Piezas aprobadas, brochure completo y campana activa.",
        systems: ["Meta Ads", "Drive", "Web", "YouTube"],
        automation: "Agente #14 valida assets y cola web.",
        status: "Automatizable",
        risk: "Brochure incompleto o pieza tardia frena cierre.",
        linkedActivities: ["ACT-022", "ACT-029", "ACT-109"]
      },
      {
        id: "PB05-S3",
        label: "Revisar GHL",
        timing: "Diario",
        owner: "Persona 18",
        team: ["Persona 12", "Persona 29"],
        entry: "Leads y conversaciones entrando.",
        action: "Revisar calidad, respuestas, objeciones, origen y gaps del embudo.",
        output: "Insights para copy, pauta, ventas y oferta.",
        evidence: "Reporte GHL con objeciones y recomendaciones.",
        systems: ["GHL", "WhatsApp Business", "Sheet comercial"],
        automation: "Agente #16 cruza GHL con conversaciones y conversion.",
        status: "En curso",
        risk: "Marketing optimiza por CPL y no por ventas reales.",
        linkedActivities: ["ACT-048", "ACT-107", "ACT-108"]
      },
      {
        id: "PB05-S4",
        label: "Llamar leads calientes",
        timing: "Diario",
        owner: "Persona 29",
        team: ["Persona 19", "Persona 8"],
        entry: "Lead caliente, respondio o pidio informacion.",
        action: "Llamar, enviar audios, resolver objeciones y orientar al cierre.",
        output: "Cierre, reunion, seguimiento o descarte con motivo.",
        evidence: "Llamada/audio, etapa, objecion y proxima accion.",
        systems: ["WhatsApp Business", "GHL", "Sheet ventas"],
        automation: "Agente #16 prioriza leads por temperatura y proximo paso.",
        status: "Riesgo",
        risk: "Lead caliente sin llamada pierde ventana de compra.",
        linkedActivities: ["ACT-105", "ACT-106", "ACT-107"]
      },
      {
        id: "PB05-S5",
        label: "Retroalimentar campana",
        timing: "Semanal",
        owner: "Persona 18",
        team: ["Persona 12", "Persona 29", "Persona 19", "Persona 8"],
        entry: "Resultados, conversaciones, objeciones y cierres.",
        action: "Ajustar copy, oferta, landing, brochure, mensajes y entrenamiento ventas.",
        output: "Mejora aplicada al siguiente ciclo.",
        evidence: "Lista de cambios, antes/despues y efecto esperado.",
        systems: ["GHL", "Meta Ads", "Drive", "Dashboard"],
        automation: "Agente #16 resume objeciones y cambios recomendados.",
        status: "Automatizable",
        risk: "Sin feedback, ventas y marketing trabajan separados.",
        linkedActivities: ["ACT-108", "ACT-111", "ACT-112"]
      }
    ],
    handoffs: [
      { from: "Persona 20", to: "Persona 12", rule: "Promesa comercial debe salir del skill outcome." },
      { from: "Persona 12", to: "Persona 18", rule: "No se optimiza campana sin revisar calidad de leads." },
      { from: "Persona 18", to: "Persona 29", rule: "Lead caliente debe tener siguiente accion comercial." },
      { from: "Persona 29", to: "Persona 12", rule: "Objeciones reales vuelven a copy, oferta o brochure." }
    ],
    escalations: [
      "Lead caliente sin contacto el mismo dia.",
      "Brochure incompleto durante campana activa.",
      "CPL bajo con conversion comercial mala."
    ],
    doneDefinition: [
      "Campana activa con tracking.",
      "Leads respondidos y clasificados.",
      "Objeciones registradas.",
      "Ajustes aplicados al siguiente ciclo."
    ]
  },
  {
    id: "PB-06",
    title: "Evento, sponsors y aliados",
    domain: "Autoridad y alianzas",
    trigger: "Webinar, Summit, alianza o sponsor en pipeline.",
    goal: "Coordinar evento y pipeline B2B sin perder contactos, reuniones ni convenios.",
    lead: "Persona 14",
    cycle: "Mapeo -> reunion -> evento -> seguimiento",
    kpi: "Sponsors/aliados con proxima accion y asistentes con fuente registrada.",
    agent: "Agente #13 + Agente #22 + Agente #23 + Agente #36",
    steps: [
      {
        id: "PB06-S1",
        label: "Mapear contactos",
        timing: "Semanal",
        owner: "Persona 25",
        team: ["Persona 14", "Persona 18"],
        entry: "Lista de empresas, sponsors o aliados objetivo.",
        action: "Completar empresa, contacto, cargo, canal, necesidad y estado.",
        output: "Pipeline priorizado.",
        evidence: "Contacto completo con etapa y proxima accion.",
        systems: ["Notion", "LinkedIn", "Sheet pipeline"],
        automation: "Agente #22 detecta empresas incompletas y contactos sin siguiente accion.",
        status: "En curso",
        risk: "Contacto sin clasificacion no se convierte en reunion.",
        linkedActivities: ["ACT-049", "ACT-053"]
      },
      {
        id: "PB06-S2",
        label: "Gestionar reunion",
        timing: "Diario",
        owner: "Persona 25",
        team: ["Persona 14", "Persona 18"],
        entry: "Contacto interesado o pendiente de llamada.",
        action: "Agendar, recordar por WhatsApp, activar grabacion, presentar PPT y registrar resumen.",
        output: "Reunion documentada y follow-up listo.",
        evidence: "Grabacion, transcripcion, datos y resumen para correo.",
        systems: ["Calendar", "Zoom/Meet", "WhatsApp", "Gmail"],
        automation: "Agente #23 prepara reunion, recordatorio y resumen.",
        status: "Riesgo",
        risk: "Reunion sin grabacion ni resumen pierde acuerdos.",
        linkedActivities: ["ACT-050", "ACT-052"]
      },
      {
        id: "PB06-S3",
        label: "Onboarding sponsor",
        timing: "Al confirmar",
        owner: "Persona 25",
        team: ["Persona 21", "Persona 14"],
        entry: "Sponsor o aliado confirmado.",
        action: "Enviar bienvenida, crear grupo, perfil, mensaje y formulario.",
        output: "Sponsor incorporado con canal y requerimientos.",
        evidence: "Correo, grupo, formulario y contacto responsable.",
        systems: ["Gmail", "WhatsApp", "Forms", "Drive"],
        automation: "Agente #36 alerta sponsors sin bienvenida o formulario.",
        status: "Automatizable",
        risk: "Sponsor confirmado sin onboarding queda desatendido.",
        linkedActivities: ["ACT-054", "ACT-055"]
      },
      {
        id: "PB06-S4",
        label: "Difusion y ejecucion",
        timing: "72h -> evento",
        owner: "Persona 14",
        team: ["Persona 12", "Persona 15", "Persona 13"],
        entry: "Evento, landing, piezas y lista de canales.",
        action: "Publicar piezas, difundir en grupos, ejecutar evento y registrar inscritos.",
        output: "Evento ejecutado con fuente y activos.",
        evidence: "Landing, piezas, inscritos, asistencia y grabacion.",
        systems: ["Web", "Meta Ads", "WhatsApp", "Zoom", "Sheet inscritos"],
        automation: "Agente #13 semaforiza agenda, piezas, inscritos y sponsors.",
        status: "En curso",
        risk: "Evento con inscritos sin fuente no permite aprender ni remarketear.",
        linkedActivities: ["ACT-023", "ACT-024", "ACT-025", "ACT-027"]
      },
      {
        id: "PB06-S5",
        label: "Follow-up post evento",
        timing: "0-72h post evento",
        owner: "Persona 14",
        team: ["Persona 25", "Persona 18", "Persona 29"],
        entry: "Evento finalizado.",
        action: "Enviar resumen, propuesta, siguiente accion y reciclar activos.",
        output: "Pipeline actualizado y activos reutilizables.",
        evidence: "Correo enviado, estado actualizado, clips o propuesta.",
        systems: ["Gmail", "GHL", "Drive", "Dashboard"],
        automation: "Agente #36 consolida follow-up de sponsors, aliados y asistentes.",
        status: "Automatizable",
        risk: "Sin follow-up el evento genera autoridad pero no pipeline.",
        linkedActivities: ["ACT-050", "ACT-107", "ACT-108"]
      }
    ],
    handoffs: [
      { from: "Persona 25", to: "Persona 14", rule: "Sponsor/aliado no entra a evento sin estado y proxima accion." },
      { from: "Persona 14", to: "Persona 12", rule: "Difusion requiere landing, CTA y fuente." },
      { from: "Persona 14", to: "Persona 18", rule: "Post-evento debe alimentar GHL, copy y oferta." }
    ],
    escalations: [
      "Sponsor sin respuesta o documento pendiente >3 dias.",
      "Reunion sin resumen el mismo dia.",
      "Evento sin landing/fuente 72h antes."
    ],
    doneDefinition: [
      "Pipeline actualizado.",
      "Evento ejecutado con fuente.",
      "Sponsor/aliado con siguiente accion.",
      "Follow-up enviado."
    ]
  },
  {
    id: "PB-07",
    title: "Producto, UX, dev y QA release",
    domain: "Producto digital",
    trigger: "Nueva mejora, flujo critico, bug o automatizacion candidata.",
    goal: "Pasar de necesidad operativa a release validado con evidencia.",
    lead: "Persona 23",
    cycle: "Discovery -> release -> medicion",
    kpi: "Release validado sin bugs criticos y con metrica de impacto.",
    agent: "Agente #20 + Agente #24 + Agente #29 + Agente #30",
    steps: [
      {
        id: "PB07-S1",
        label: "Definir problema y flujo",
        timing: "Discovery",
        owner: "Persona 16",
        team: ["Persona 10", "Persona 20", "Persona 27"],
        entry: "Dolor operativo, feedback usuario o metrica en riesgo.",
        action: "Mapear AS-IS/TO-BE, usuario, datos, pantallas y criterio de exito.",
        output: "Brief UX/producto listo para desarrollo.",
        evidence: "Flujo, spec, wireframe o prototipo validado.",
        systems: ["Obsidian", "Figma/Miro", "Notion"],
        automation: "Agente #26 estructura brief, flujo y handoff.",
        status: "En curso",
        risk: "Prototipo sin flujo completo genera retrabajo.",
        linkedActivities: ["ACT-062", "ACT-063", "ACT-064", "ACT-069"]
      },
      {
        id: "PB07-S2",
        label: "Arquitectura y backlog",
        timing: "Planning",
        owner: "Persona 23",
        team: ["Persona 27", "Persona 20"],
        entry: "Flujo aprobado y datos definidos.",
        action: "Definir arquitectura, entidades, API, permisos, tareas y criterios de aceptacion.",
        output: "Backlog tecnico trazable.",
        evidence: "ADR, API contract, schema y checklist de seguridad.",
        systems: ["GitHub", "Obsidian", "Docs"],
        automation: "Agente #20 audita arquitectura y seguridad.",
        status: "Automatizable",
        risk: "Sin contrato tecnico el release se rompe al integrar.",
        linkedActivities: ["ACT-034", "ACT-035", "ACT-036", "ACT-037", "ACT-038"]
      },
      {
        id: "PB07-S3",
        label: "Construir e integrar",
        timing: "Sprint",
        owner: "Persona 23",
        team: ["Persona 20", "Persona 11"],
        entry: "Backlog aprobado.",
        action: "Desarrollar backend, frontend, integraciones, logs y estados de error.",
        output: "Feature lista para QA.",
        evidence: "PR, build local, datos mock o integracion funcional.",
        systems: ["GitHub", "Next.js", "API", "n8n"],
        automation: "Agente #29 controla bloqueos, PRs y readiness.",
        status: "En curso",
        risk: "Integracion sin logs dificulta soporte y postventa.",
        linkedActivities: ["ACT-039", "ACT-040", "ACT-041", "ACT-042", "ACT-075", "ACT-076"]
      },
      {
        id: "PB07-S4",
        label: "Validar QA",
        timing: "Pre-release",
        owner: "Persona 26",
        team: ["Persona 16", "Persona 23", "Persona 22"],
        entry: "Feature lista.",
        action: "Validar E2E, UX, carga, pruebas automatizadas, bugfixes y data.",
        output: "Release aprobado, observado o bloqueado.",
        evidence: "Reporte QA, bugs y retest documentado.",
        systems: ["Playwright", "Dashboard", "Sheet QA", "GitHub"],
        automation: "Agente #24 exige retest y evidencia antes de cierre.",
        status: "Riesgo",
        risk: "Bug sin retest llega a usuarios y genera soporte innecesario.",
        linkedActivities: ["ACT-056", "ACT-057", "ACT-058", "ACT-059", "ACT-060", "ACT-061"]
      },
      {
        id: "PB07-S5",
        label: "Release y medicion",
        timing: "Produccion",
        owner: "Persona 27",
        team: ["Persona 23", "Persona 22", "Persona 10"],
        entry: "QA aprobado.",
        action: "Publicar, monitorear, documentar SOP y medir impacto operativo.",
        output: "Release trazable y mejora medible.",
        evidence: "Deploy, changelog, dashboard, incidentes y leccion aprendida.",
        systems: ["Deploy", "n8n", "Dashboard", "Obsidian"],
        automation: "Agente #30 monitorea workflows y Agente #32 consolida incidentes.",
        status: "Automatizable",
        risk: "Release sin medicion no demuestra mejora ni escalabilidad.",
        linkedActivities: ["ACT-071", "ACT-072", "ACT-073", "ACT-080", "ACT-088"]
      }
    ],
    handoffs: [
      { from: "Persona 16", to: "Persona 23", rule: "Desarrollo inicia solo con flujo y criterio de exito." },
      { from: "Persona 23", to: "Persona 26", rule: "QA recibe feature con build, datos y caso esperado." },
      { from: "Persona 26", to: "Persona 27", rule: "Produccion requiere retest documentado y riesgo aceptado." },
      { from: "Persona 27", to: "Persona 10", rule: "Release reporta impacto, riesgo e iteracion recomendada." }
    ],
    escalations: [
      "Bug critico o datos corruptos en pre-release.",
      "Workflow n8n caido o sin owner.",
      "Feature sin metrica de impacto."
    ],
    doneDefinition: [
      "Flujo y spec aprobados.",
      "Build validado.",
      "QA sin bloqueos criticos.",
      "Release documentado y medido."
    ]
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
    supportingRoles: ["Persona 13", "Persona 15", "Persona 16", "Persona 17", "Persona 18"],
    responsibilities: ["Meta Ads", "Creativos", "Difusion", "Web", "YouTube", "Brochures", "Revision GHL"],
    kpis: ["CPL", "Lead quality", "Objeciones GHL", "Publicaciones", "Conversion por fuente"],
    cadences: ["Reporte diario ads", "Revision GHL", "Plan semanal contenidos", "Review de campana"],
    risks: ["Lead barato sin compra", "Pieza sin CTA", "Web desactualizada", "Marketing sin escuchar venta real"],
    automation: "Agente #12 reporta campanas, Agente #16 cruza GHL/ventas y Agente #14 gestiona cola web/QA."
  },
  {
    id: "DOM-05",
    domain: "Comercial y revenue",
    mission: "Cerrar el loop entre campanas, leads calientes, audios, asesoria, objeciones, pagos, copys, brochures, entrenamiento y conversion.",
    lead: "Persona 29",
    supportingRoles: ["Persona 19", "Persona 21", "Persona 12", "Persona 18"],
    responsibilities: ["Llamadas a leads calientes", "Audios comerciales", "Seguimiento de cierre", "Objeciones", "Pipeline GHL", "Copys", "Brochures", "Pagos", "Entrenamiento ventas", "Feedback a marketing"],
    kpis: ["Tasa de contacto", "Tasa de cierre", "Leads calientes llamados", "Audios enviados", "Motivos de no compra", "Tiempo de respuesta", "Ingresos por campana", "Brochures completos", "Copys optimizados"],
    cadences: ["Feedback diario", "Revision GHL marketing-ventas", "Review comercial semanal", "Entrenamiento ventas", "Cierre de cohortes"],
    risks: ["Lead caliente sin llamada", "Marketing optimiza sin ventas", "Promesas comerciales no alineadas", "Brochure incompleto", "Copy debil", "Pagos bloqueados"],
    automation: "Agente #16 cruza CRM, feedback, llamadas, audios y conversion por fuente; Agente #14 controla brochures y Agente #10 apoya seguimiento masivo."
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
  },
  {
    id: "DOM-09",
    domain: "Tecnologia, arquitectura y product engineering",
    mission: "Construir productos completos con arquitectura, backend, frontend, infra, seguridad, IA y deploy reproducible.",
    lead: "Persona 23",
    supportingRoles: ["Persona 20", "Persona 11", "Persona 22"],
    responsibilities: ["Arquitectura", "Stack tecnico", "DB/migraciones", "APIs", "Auth/RBAC", "Frontend", "Infra", "IA"],
    kpis: ["ADRs aprobados", "APIs versionadas", "Deploys reproducibles", "Incidentes tecnicos controlados"],
    cadences: ["Architecture review", "Sprint engineering", "Release checklist"],
    risks: ["Deuda tecnica", "APIs sin contrato", "Permisos inseguros", "Ambientes no reproducibles"],
    automation: "Agente #20 audita arquitectura, seguridad, frontend, infra e IA por proyecto."
  },
  {
    id: "DOM-10",
    domain: "Activos BIM academicos",
    mission: "Convertir modelos, planos, plantillas, familias, scripts, PPTs y Miros en recursos reutilizables para aprendizaje aplicado.",
    lead: "Persona 24",
    supportingRoles: ["Persona 7", "Persona 13", "Persona 20"],
    responsibilities: ["Modelos BIM", "Planos", "Plantillas", "Familias", "Scripts", "PPTs", "Miro"],
    kpis: ["Assets listos antes de clase", "Recursos versionados", "Scripts documentados", "Alineacion con skill outcome"],
    cadences: ["Preparacion por curso", "Revision antes de clase", "Cierre de asset"],
    risks: ["Material tardio", "Recursos sin version", "Scripts personales no reutilizables", "Miro/PPT sin objetivo"],
    automation: "Agente #21 cataloga activos BIM con curso, modulo, version, uso y estado."
  },
  {
    id: "DOM-11",
    domain: "Alianzas, sponsors y reuniones",
    mission: "Gestionar interesados, empresas, llamadas, reuniones, WhatsApp Business, LinkedIn, grupos, convenios y follow-up.",
    lead: "Persona 25",
    supportingRoles: ["Persona 14", "Persona 18", "Persona 21", "Persona 22"],
    responsibilities: ["Interesados", "Clasificacion empresas", "Correos", "Llamadas", "Reuniones", "WSP Business", "LinkedIn", "Convenios"],
    kpis: ["Interesados respondidos", "Empresas clasificadas", "Reuniones agendadas", "Convenios revisados", "Grupos creados"],
    cadences: ["Revision diaria de bandejas", "Seguimiento de reuniones", "Cierre semanal de convenios"],
    risks: ["Contactos sin seguimiento", "Reuniones sin grabacion", "Convenios sin revision", "Sponsors sin onboarding"],
    automation: "Agente #22 monitorea pipeline y Agente #23 opera reuniones, grupos y follow-up."
  },
  {
    id: "DOM-12",
    domain: "QA, testing y validacion de data",
    mission: "Proteger releases y decisiones validando E2E, UX, rendimiento, pruebas automatizadas, bugfixes y data.",
    lead: "Persona 26",
    supportingRoles: ["Persona 23", "Persona 20", "Persona 22"],
    responsibilities: ["E2E", "UX QA", "Carga/estres", "Automatizadas", "Bugfix validation", "Carga data"],
    kpis: ["Casos E2E aprobados", "Defectos criticos", "Cobertura automatizada", "Errores de data", "Riesgo de release"],
    cadences: ["QA por feature", "QA pre-release", "Validacion de data por corte"],
    risks: ["Release sin validacion", "Bug recurrente", "UX bloqueante", "Data inconsistente"],
    automation: "Agente #24 valida QA y Agente #25 controla cargas de data."
  },
  {
    id: "DOM-13",
    domain: "UX/UI, branding y web experience",
    mission: "Estructurar productos digitales con investigacion, flujos completos, UI, branding, assets web, formularios y handoff a desarrollo.",
    lead: "Persona 16",
    supportingRoles: ["Persona 15", "Persona 20", "Persona 23", "Persona 13"],
    responsibilities: ["Investigacion UX", "Arquitectura informacion", "Flujos", "UI", "Branding", "Web assets", "Formularios", "Handoff"],
    kpis: ["Flujos antes de prototipo", "Handoffs validados", "Consistencia de marca", "Formularios completos", "Cambios web coordinados"],
    cadences: ["Review de brief", "Design handoff", "QA visual web"],
    risks: ["Prototipos sin flujo", "Handoff incompleto", "Branding inconsistente", "Web sin coordinacion"],
    automation: "Agente #26 estructura UX/UI y Agente #14 coordina QA visual web."
  },
  {
    id: "DOM-14",
    domain: "Producto digital, AI Ops y automatizacion",
    mission: "Asegurar que AECODE/GEN+ conviertan automatizacion, agentes IA, n8n, dashboards, data, deploys y documentacion tecnica en impacto operativo medible.",
    lead: "Persona 27",
    supportingRoles: ["Persona 11", "Persona 20", "Persona 23", "Persona 26", "Persona 22", "Persona 15", "Persona 21", "Persona 28"],
    responsibilities: ["Backlog AI Ops", "n8n", "Integraciones", "Agentes IA", "AECODITOS", "Dashboards", "Scrapers", "Datasets ML", "Deploys", "Specs", "Capacitacion IA"],
    kpis: ["Automatizaciones productivas", "Incidentes resueltos", "Agentes auditables", "Dashboards desplegados", "Specs versionadas", "Toolkits IA reutilizables"],
    cadences: ["Review AI Ops semanal", "Daily producto/dev", "Release checklist", "Revision de incidentes", "Medicion mensual de eficiencia"],
    risks: ["Automatizar sin impacto", "Agentes sin control", "Workflows caidos", "Deploys sin rollback", "Datos sin version", "Frontera GEN+/AECODE confusa"],
    automation: "Agentes #27-#32 priorizan AI Ops, documentan procesos, monitorean n8n/agentes y consolidan producto digital."
  },
  {
    id: "DOM-15",
    domain: "Programas activos, Summit y comunicaciones",
    mission: "Asegurar que programas de formacion, actas, docentes, postventa, sponsors, ponentes, marketing, B2B y HTML operen con trazabilidad diaria.",
    lead: "Persona 28",
    supportingRoles: ["Persona 3", "Persona 1", "Persona 14", "Persona 25", "Persona 12", "Persona 13", "Persona 18", "Persona 27"],
    responsibilities: ["Programas activos", "Actas PDF", "Flujos Notion", "Docentes", "Materiales", "Soporte postventa", "Sponsors", "Ponentes", "Campanas", "B2B", "HTML"],
    kpis: ["Programas actualizados", "Actas <24h", "Sesiones listas 72h antes", "Sponsors con proxima accion", "Errores reportados", "Plantillas versionadas"],
    cadences: ["Chequeo diario de programas", "Preparacion 72h antes", "Cierre post-sesion", "Pipeline Summit semanal", "Revision de HTML por envio"],
    risks: ["Sesion sin material", "Acta pendiente", "Participante sin soporte", "Automatizacion sin prueba", "Sponsor sin seguimiento", "Ponente sin confirmar"],
    automation: "Agente #35 controla programas y Agente #36 monitorea sponsors, ponentes, B2B y CRM."
  }
];

export const operatingBoundaries: OperatingBoundary[] = [
  {
    id: "BOUND-01",
    topic: "Educacion, skill verification y comunidad",
    routeTo: "AECODE",
    criterion: "Se queda en AECODE si el trabajo mejora rutas, cursos, cohortes, evidencias, Skill Passport, certificacion, comunidad o experiencia del alumno.",
    examples: ["Cursos live", "Microlearning", "Rubricas", "Evidencias", "Certificados", "Webinars de comunidad"],
    owner: "Persona 20",
    evidence: "Ruta, skill, evidencia, rubrica, feedback o dashboard academico.",
    risk: "Si se mezcla con servicios GEN+, AECODE pierde foco como learning operating system."
  },
  {
    id: "BOUND-02",
    topic: "Consultoria, proyectos cliente e ingenieria aplicada",
    routeTo: "GEN+",
    criterion: "Se enruta a GEN+ si el trabajo es servicio tecnico para cliente, entrega BIM/VDC, automatizacion de proyecto, ingenieria, consultoria, Visor BIM, ICEBOT o BIM Store.",
    examples: ["Gestion BIM cliente", "Automatizacion BIM cliente", "Detail engineering", "Diseno computacional", "AI implementation empresarial"],
    owner: "Persona 10",
    evidence: "Proyecto cliente, contrato, entregable tecnico, alcance GEN+ o roadmap de producto GEN+.",
    risk: "Si entra a AECODE, se contamina el tablero educativo con operacion de consultoria."
  },
  {
    id: "BOUND-03",
    topic: "Activos BIM usados en cursos",
    routeTo: "Compartido",
    criterion: "Es compartido cuando nace como know-how GEN+ pero se empaqueta como recurso educativo AECODE.",
    examples: ["Modelo BIM anonimizado", "Plantilla de clase", "Familia para practica", "Script pedagogico", "Miro de ejercicio"],
    owner: "Persona 24",
    evidence: "Ficha de asset con origen, curso, modulo, version, permiso de uso y objetivo de aprendizaje.",
    risk: "Sin ficha, el material puede exponer trabajo cliente o quedar como archivo personal no reutilizable."
  },
  {
    id: "BOUND-04",
    topic: "Tecnologia de plataforma educativa",
    routeTo: "AECODE",
    criterion: "Se queda en AECODE cuando la arquitectura, backend, frontend, IA o infra soporta plataforma educativa, comunidad, certificacion o aprendizaje.",
    examples: ["Panel AECODE", "Skill Passport", "AI Coach educativo", "Dashboard B2B academico", "Automatizacion de certificados"],
    owner: "Persona 23",
    evidence: "ADR vinculado a objetivo AECODE, feature educativa, metrica NSM o flujo de estudiante.",
    risk: "Sin criterio de producto, tecnologia puede avanzar sin impactar aprendizaje verificable."
  },
  {
    id: "BOUND-05",
    topic: "Productos y herramientas GEN+",
    routeTo: "GEN+",
    criterion: "Se enruta a GEN+ cuando la tecnologia habilita servicios, productos o automatizaciones de ingenieria aplicada fuera del aprendizaje AECODE.",
    examples: ["Visor BIM", "ICEBOT", "BIM Store", "POS", "Automatizacion interna de cliente", "Dashboards de obra"],
    owner: "Persona 23",
    evidence: "Backlog GEN+, repo GEN+, alcance comercial GEN+ o producto empresarial.",
    risk: "Si se fuerza dentro de AECODE, se distorsionan prioridades, metricas y owners."
  },
  {
    id: "BOUND-06",
    topic: "Marketing y ventas AECODE via GHL",
    routeTo: "AECODE",
    criterion: "Debe vivir en AECODE cuando el analisis de GHL optimiza captacion, asesorias, objeciones y conversion de cursos, eventos o comunidad AECODE.",
    examples: ["Revision de conversaciones", "Objeciones por curso", "Scripts comerciales", "Tiempos de respuesta", "Lead quality por fuente"],
    owner: "Persona 12",
    evidence: "Insights GHL, ajuste de copy, ajuste de campana, cambio de script o reporte conversion.",
    risk: "Marketing optimiza pauta sin entender como vende el equipo comercial."
  }
];

export const marketingProcesses: MarketingProcess[] = [
  {
    id: "MKT-01",
    title: "Ads para cursos Training",
    objective: "Del brief del curso al ajuste continuo de campanas de captacion.",
    lead: "Persona 12",
    stages: ["Brief e insumos", "Planificacion funnel", "Produccion piezas", "Produccion video", "Validacion", "Lanzamiento", "Reporte", "Revision GHL", "Feedback ventas", "Ajuste"],
    evidence: "Brief, piezas aprobadas, campana activa, reporte CPL, insights GHL y feedback comercial.",
    automation: "Agente #12 alerta CPL y Agente #16 cruza GHL, calidad de leads y objeciones."
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
  },
  {
    label: "Notion AECODE operaciones y producto digital",
    path: "Notion: AECODE OS / fuentes relacionadas accesibles",
    use: "AI Ops, automatizaciones, AECODITOS, roadmap AECODE 2.0/3.0, seguimiento dev, flujos criticos, web y accesos post compra.",
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
  { label: "Roles operativos mapeados", value: opsRoles.length, target: opsRoles.length, context: "Equipo completo AECODE por responsabilidad" },
  { label: "Procesos marketing", value: marketingProcesses.length, target: marketingProcesses.length, context: "Panel HTML de marketing normalizado" },
  { label: "Actividades tecnologia", value: activities.filter((item) => item.area === "Tecnologia").length, target: activities.length, context: "Arquitectura, backend, frontend, infra e IA" },
  { label: "Actividades BIM", value: activities.filter((item) => item.area === "BIM").length, target: activities.length, context: "Modelos, planos, plantillas, scripts y assets academicos" },
  { label: "Actividades alianzas", value: activities.filter((item) => item.area === "Alianzas" || item.area === "Reuniones").length, target: activities.length, context: "Interesados, empresas, reuniones, sponsors y convenios" },
  { label: "Actividades QA/data", value: activities.filter((item) => item.area === "QA" || item.id === "ACT-061").length, target: activities.length, context: "E2E, UX, carga, automatizadas, bugs y data" },
  { label: "Actividades UX/UI", value: activities.filter((item) => item.owner === "Persona 16").length, target: activities.length, context: "Investigacion, flujos, UI, branding, web, formularios y handoff" },
  { label: "Actividades producto/AI Ops", value: activities.filter((item) => item.owner === "Persona 27").length, target: activities.length, context: "n8n, integraciones, agentes, dashboards, data, deploys, specs y capacitacion IA" },
  { label: "Actividades programas/Summit", value: activities.filter((item) => item.owner === "Persona 28").length, target: activities.length, context: "Programas activos, actas, docentes, postventa, sponsors, ponentes, B2B y HTML" }
];

export const sourceNotes = [
  "Sheet leido por Drive como AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx.",
  "Pestana ENLACES GRUPOS WHATSAPP leida: 7 programas, 14 subgrupos por programa y registros de instructores.",
  "Chat WhatsApp, Sheet y Notion revisados para inventariar links; se registraron 34 activos.",
  "El link Notion AECODE Training directo no fue accesible por fetch; busqueda interna encontro una base relacionada con frecuencia, estado y semanas.",
  "No se publican links privados de WhatsApp, Zoom, Classroom, Miro o Drive.",
  "Panel HTML de marketing integrado como procesos mapeados: ads, Summit, difusion, clips, web y automatizacion.",
  "El control maestro ya no se limita a coordinacion academica; incluye direccion, producto, marketing, comercial, eventos, finanzas, datos y BI.",
  "Cultura-AECODE.md integrada como reglas operativas: presencia, trazabilidad, cierre, aprendizaje, documentacion y alineacion al negocio.",
  "Cultura-GEN+.md usada como frontera: proyectos cliente, ingenieria aplicada y productos GEN+ se enrutan fuera de AECODE salvo activos educativos empaquetados.",
  "Actividades tecnicas y BIM integradas como Anderson y Kevin con trazabilidad Persona 23 y Persona 24.",
  "Marketing debe revisar GHL y venta real para ajustar mensajes, campanas y lead quality.",
  "Actividades de alianzas/sponsors/reuniones integradas como Persona 25.",
  "Actividades de QA/testing/data integradas como Persona 26.",
  "Actividades UX/UI y branding integradas como Persona 16.",
  "Correccion operativa 2026-06-05: Persona 27 se normaliza como Marlon para automatizacion, dev web, integraciones web, agentes IA, dashboards, data, ML, deploy, documentacion y soporte tecnico a flujos comerciales/postventa.",
  "Actividades de programas activos, Summit, postventa, marketing, B2B y comunicaciones HTML integradas como Persona 28.",
  "PDF Dashboard_Operativo_AP_GEN+_AECODE integrado como capa ejecutiva: empresas, proyectos criticos, flywheel, campos minimos, metricas, vistas y reglas de operacion.",
  "Carpeta Obsidian Actividades_TEAM actualizada como mapa de 35 personas consideradas: 25 asientos nucleo y 10 perfiles en red extendida para cumplir el limite operativo solicitado.",
  "Playbooks operativos agregados como capa interactiva: postventa/accesos, sesiones live, grabaciones, certificados, growth/ventas, eventos/sponsors y producto-dev-QA.",
  "Fuente Notion AECODE OS directa no accesible por URL; se integraron fuentes Notion relacionadas accesibles sobre AI Ops, producto digital y operaciones dentro de la capa Marlon/Fabrizio/Anderson/Emanuel segun responsabilidad.",
  "Prompt X5 ejecutado: se agrego Centro de ejecucion diario, contratos AgentFlow, entidades backend-ready y modos Checklist/Kanban/Timeline/RACI/Log para playbooks.",
  "Los owners reales se muestran cuando hay evidencia; Persona N queda como trazabilidad cuando falta confirmacion.",
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
