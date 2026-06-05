"use client";

import Image from "next/image";
import {
  AlertTriangle,
  Bot,
  CalendarDays,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  CircleDotDashed,
  ClipboardList,
  Database,
  Download,
  ExternalLink,
  Filter,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Link2,
  ListChecks,
  Megaphone,
  LockKeyhole,
  MessageSquareText,
  PlaySquare,
  RefreshCw,
  Route,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  TimerReset,
  Upload,
  UserRoundCheck,
  Users,
  Workflow
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  aecodeDomains,
  activities,
  activityFieldSpecs,
  agentContracts,
  agents,
  areas,
  contentMetrics,
  cultureAntiValues,
  cultureClusters,
  cultureRituals,
  cultureValues,
  dailyExecutionItems,
  dataEntityContracts,
  ecosystemCompanies,
  ecosystemMetrics,
  ecosystemProjects,
  executiveViews,
  flywheelLayers,
  getPriorityWeight,
  getReadinessScore,
  linkAssets,
  linkMetrics,
  marketingProcesses,
  opsRoles,
  operatingRules,
  operatingBoundaries,
  opsSources,
  programs,
  sourceNotes,
  strategicRoleProfiles,
  workflowPlaybooks,
  workflowStages,
  type Activity,
  type DailyExecutionItem,
  type ExecutionStatus,
  type Priority
} from "@/data/opsData";
import {
  aecodeTeamMembers,
  allConsideredTeamMembers,
  extendedTeamMembers,
  personIdentityMap,
  resolvePersonName,
  teamCapacityPolicy,
  teamConnections
} from "@/data/teamData";

const priorityClass: Record<Priority, string> = {
  Critica: "chip-critical",
  Alta: "chip-high",
  Media: "",
  Baja: "chip-good"
};

const executionStatusClass: Record<ExecutionStatus, string> = {
  Listo: "chip-good",
  "En curso": "chip-high",
  Riesgo: "chip-critical",
  Bloqueado: "chip-critical",
  Automatizable: "chip-good",
  "Requiere decision": "chip-high"
};

const playbookModes = ["Checklist", "Kanban", "Timeline", "RACI", "Log"] as const;
type PlaybookMode = (typeof playbookModes)[number];
type DailyExecutionPatch = Partial<Pick<DailyExecutionItem, "status" | "due" | "evidence" | "nextBestAction" | "decisionNeeded">>;
type EditableDailyField = keyof DailyExecutionPatch;

const executionStatuses: ExecutionStatus[] = ["Listo", "En curso", "Riesgo", "Bloqueado", "Automatizable", "Requiere decision"];
const editableDailyFields: EditableDailyField[] = ["status", "due", "evidence", "nextBestAction", "decisionNeeded"];
const dailyOverridesStorageKey = "aecode-activity-control-os:daily-overrides:v1";
const executionOwnerStorageKey = "aecode-activity-control-os:execution-owner:v1";

const privacyClass = {
  Critico: "chip-critical",
  Interno: "chip-high",
  Publico: "chip-good"
} as const;

const icons = {
  total: ClipboardList,
  risk: AlertTriangle,
  agent: Bot,
  verified: ShieldCheck,
  content: PlaySquare
};

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navGroups = [
  {
    id: "ecosistema",
    label: "Ecosistema AP",
    items: [
      { label: "Empresas", href: "#ecosistema", icon: LayoutDashboard },
      { label: "Flywheel", href: "#flywheel", icon: Workflow },
      { label: "Gobierno", href: "#gobierno", icon: ShieldCheck },
      { label: "Vistas", href: "#vistas", icon: ClipboardList }
    ]
  },
  {
    id: "control",
    label: "Control",
    items: [
      { label: "Hoy", href: "#hoy", icon: Gauge },
      { label: "Resumen", href: "#control", icon: LayoutDashboard },
      { label: "Cultura", href: "#cultura", icon: MessageSquareText },
      { label: "Actividades", href: "#actividades", icon: ListChecks },
      { label: "Roles", href: "#roles", icon: UserRoundCheck },
      { label: "Perfiles criticos", href: "#perfiles-criticos", icon: ShieldCheck },
      { label: "Equipo mapeado", href: "#equipo-real", icon: Users },
      { label: "Conexiones", href: "#conexiones", icon: Workflow },
      { label: "Flujo", href: "#flujo", icon: Route }
    ]
  },
  {
    id: "areas",
    label: "Areas AECODE",
    items: [
      { label: "Mapa completo", href: "#areas", icon: ClipboardList },
      { label: "Frontera GEN+", href: "#frontera", icon: Route },
      { label: "Marketing", href: "#marketing", icon: Megaphone },
      { label: "Comercial", href: "#comercial", icon: Users },
      { label: "Producto", href: "#producto", icon: GraduationCap }
    ]
  },
  {
    id: "sistemas",
    label: "Sistemas",
    items: [
      { label: "Agentes", href: "#agentes", icon: Bot },
      { label: "AgentFlow", href: "#agentflow", icon: Workflow },
      { label: "Links", href: "#links", icon: Link2 },
      { label: "Programas", href: "#programas", icon: GraduationCap },
      { label: "Datos", href: "#datos", icon: Database },
      { label: "Riesgos", href: "#riesgos", icon: AlertTriangle }
    ]
  }
];

function NavItem({ href, label, icon: Icon }: { href: string; label: string; icon: typeof ClipboardList }) {
  return (
    <a
      className="nav-item"
      href={href}
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );
}

function Metric({ label, value, detail, tone }: { label: string; value: string; detail: string; tone?: "risk" | "good" }) {
  const Icon = tone === "risk" ? icons.risk : tone === "good" ? icons.verified : icons.total;

  return (
    <section className="panel p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-aecode-muted">{label}</p>
          <p className="mt-2 text-3xl font-black text-white">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-aecode-violet/30 bg-aecode-violet/10">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-3 min-h-[42px] text-sm leading-6 text-aecode-muted">{detail}</p>
    </section>
  );
}

function prioritySort(a: Activity, b: Activity) {
  return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
}

function confidenceClass(confidence: string) {
  if (confidence === "Alta") return "chip-good";
  if (confidence === "Media") return "chip-high";
  if (confidence === "Baja") return "chip-critical";
  return "";
}

function loadClass(load: string) {
  if (load === "Alta carga") return "chip-critical";
  if (load === "Carga media") return "chip-high";
  if (load === "Ligero / puntual") return "chip-good";
  return "";
}

function workflowStatusClass(status: string) {
  if (status === "Listo") return "chip-good";
  if (status === "En curso") return "chip-high";
  if (status === "Riesgo") return "chip-critical";
  return "";
}

function displayPerson(value: string) {
  return resolvePersonName(value);
}

function displayOperationalText(value: string) {
  return Object.keys(personIdentityMap)
    .sort((a, b) => b.length - a.length)
    .reduce((text, key) => text.replaceAll(key, resolvePersonName(key)), value);
}

export default function Page() {
  const [area, setArea] = useState("Todas");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos");
  const [role, setRole] = useState("Todos");
  const [executionOwner, setExecutionOwner] = useState("Todos");
  const [executionStatus, setExecutionStatus] = useState("Todos");
  const [executionPlaybook, setExecutionPlaybook] = useState("Todos");
  const [playbookMode, setPlaybookMode] = useState<PlaybookMode>("Checklist");
  const [activeAgentId, setActiveAgentId] = useState(agentContracts[0]?.id ?? "");
  const [activePlaybookId, setActivePlaybookId] = useState(workflowPlaybooks[0]?.id ?? "");
  const [activeStepId, setActiveStepId] = useState(workflowPlaybooks[0]?.steps[0]?.id ?? "");
  const [openNav, setOpenNav] = useState<Record<string, boolean>>({
    ecosistema: true,
    control: true,
    areas: true,
    sistemas: true
  });
  const [dailyOverrides, setDailyOverrides] = useState<Record<string, DailyExecutionPatch>>({});
  const [importPayload, setImportPayload] = useState("");
  const [storeNotice, setStoreNotice] = useState("Sin cambios locales.");
  const [storeHydrated, setStoreHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedOverrides = window.localStorage.getItem(dailyOverridesStorageKey);
      const savedOwner = window.localStorage.getItem(executionOwnerStorageKey);

      if (savedOverrides) {
        const parsed = JSON.parse(savedOverrides) as Record<string, DailyExecutionPatch>;
        setDailyOverrides(parsed);
        setStoreNotice("Estado local restaurado.");
      }

      if (savedOwner) {
        setExecutionOwner(savedOwner);
      }
    } catch {
      setStoreNotice("No se pudo leer el estado local. Se mantiene la base del repo.");
    } finally {
      setStoreHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!storeHydrated) return;
    window.localStorage.setItem(dailyOverridesStorageKey, JSON.stringify(dailyOverrides));
  }, [dailyOverrides, storeHydrated]);

  useEffect(() => {
    if (!storeHydrated) return;
    window.localStorage.setItem(executionOwnerStorageKey, executionOwner);
  }, [executionOwner, storeHydrated]);

  const executionItems = useMemo(() => {
    return dailyExecutionItems.map((item) => ({ ...item, ...(dailyOverrides[item.id] ?? {}) }));
  }, [dailyOverrides]);

  const updateDailyItem = (id: string, patch: DailyExecutionPatch) => {
    const seed = dailyExecutionItems.find((item) => item.id === id);
    setDailyOverrides((current) => {
      const nextPatch: DailyExecutionPatch = { ...(current[id] ?? {}), ...patch };

      if (seed) {
        editableDailyFields.forEach((field) => {
          if (nextPatch[field] === seed[field]) {
            delete nextPatch[field];
          }
        });
      }

      const next = { ...current };
      if (Object.keys(nextPatch).length) {
        next[id] = nextPatch;
      } else {
        delete next[id];
      }
      return next;
    });
    setStoreNotice(`Cambio local guardado para ${id}.`);
  };

  const exportDailyState = () => {
    const payload = JSON.stringify({
      schema: "aecode-activity-control-os.daily-state.v1",
      exportedAt: new Date().toISOString(),
      selectedOwner: executionOwner,
      overrides: dailyOverrides
    }, null, 2);

    setImportPayload(payload);
    navigator.clipboard?.writeText(payload).catch(() => undefined);
    setStoreNotice("JSON generado y copiado al portapapeles si el navegador lo permite.");
  };

  const importDailyState = () => {
    try {
      const parsed = JSON.parse(importPayload) as { overrides?: Record<string, DailyExecutionPatch>; selectedOwner?: string };
      setDailyOverrides(parsed.overrides ?? {});
      if (parsed.selectedOwner) {
        setExecutionOwner(parsed.selectedOwner);
      }
      setStoreNotice("Estado importado en este navegador.");
    } catch {
      setStoreNotice("JSON invalido. Revisa el contenido antes de importar.");
    }
  };

  const resetDailyState = () => {
    setDailyOverrides({});
    setImportPayload("");
    window.localStorage.removeItem(dailyOverridesStorageKey);
    setStoreNotice("Estado local reiniciado. Se muestra la base versionada del repo.");
  };

  const filtered = useMemo(() => {
    return activities
      .filter((item) => area === "Todas" || item.area === area)
      .filter((item) => status === "Todos" || item.status === status)
      .filter((item) => role === "Todos" || item.owner === role || item.backup === role)
      .filter((item) => `${item.id} ${item.area} ${item.activity} ${item.agent} ${item.owner} ${displayPerson(item.owner)} ${displayPerson(item.backup)}`.toLowerCase().includes(query.toLowerCase()))
      .sort(prioritySort);
  }, [area, query, role, status]);

  const executionOwners = useMemo(() => {
    return Array.from(new Set(executionItems.flatMap((item) => [item.owner, item.backup]))).sort((a, b) => displayPerson(a).localeCompare(displayPerson(b)));
  }, [executionItems]);

  const executionFiltered = useMemo(() => {
    return executionItems
      .filter((item) => executionOwner === "Todos" || item.owner === executionOwner || item.backup === executionOwner)
      .filter((item) => executionStatus === "Todos" || item.status === executionStatus)
      .filter((item) => executionPlaybook === "Todos" || item.playbookId === executionPlaybook)
      .sort((a, b) => getPriorityWeight(b.priority) - getPriorityWeight(a.priority));
  }, [executionItems, executionOwner, executionPlaybook, executionStatus]);

  const criticalCount = activities.filter((item) => item.priority === "Critica").length;
  const riskCount = activities.filter((item) => item.status === "Riesgo").length;
  const automationCount = activities.filter((item) => item.automationLevel !== "Baja").length;
  const readyPrograms = programs.filter((program) => getReadinessScore(program) >= 80).length;
  const selectedRole = opsRoles.find((item) => item.id === role);
  const commercialRoles = opsRoles.filter((item) => item.areas.some((roleArea) => ["Comercial", "Finanzas"].includes(roleArea)));
  const productRoles = opsRoles.filter((item) => item.areas.some((roleArea) => ["Producto", "Plataforma", "Certificados"].includes(roleArea)));
  const highConfidenceTeam = allConsideredTeamMembers.filter((member) => member.confidence === "Alta").length;
  const coreTeamCount = aecodeTeamMembers.length;
  const extendedTeamCount = extendedTeamMembers.length;
  const selectedPlaybook = workflowPlaybooks.find((playbook) => playbook.id === activePlaybookId) ?? workflowPlaybooks[0]!;
  const selectedStep = selectedPlaybook.steps.find((step) => step.id === activeStepId) ?? selectedPlaybook.steps[0]!;
  const activeAgent = agentContracts.find((agent) => agent.id === activeAgentId) ?? agentContracts[0]!;
  const selectedPlaybookReadyCount = selectedPlaybook.steps.filter((step) => step.status === "Listo").length;
  const selectedPlaybookRiskCount = selectedPlaybook.steps.filter((step) => step.status === "Riesgo").length;
  const selectedPlaybookProgress = Math.round((selectedPlaybookReadyCount / Math.max(selectedPlaybook.steps.length, 1)) * 100);
  const blockedToday = executionItems.filter((item) => item.status === "Bloqueado" || item.status === "Riesgo").length;
  const decisionToday = executionItems.filter((item) => item.status === "Requiere decision" || item.decisionNeeded.toLowerCase().includes("confirmar") || item.decisionNeeded.toLowerCase().includes("definir")).length;
  const evidenceToday = executionItems.filter((item) => item.evidence.toLowerCase().includes("evidencia") || item.evidence.toLowerCase().includes("log") || item.evidence.toLowerCase().includes("reporte")).length;
  const agentReadyToday = executionItems.filter((item) => item.status === "Automatizable" || item.agent.includes("Agente")).length;
  const ownerLoad = executionOwners.map((owner) => ({
    owner,
    count: executionItems.filter((item) => item.owner === owner || item.backup === owner).length,
    critical: executionItems.filter((item) => (item.owner === owner || item.backup === owner) && item.priority === "Critica").length
  })).sort((a, b) => b.count - a.count);
  const overloadedPeople = ownerLoad.filter((item) => item.count >= 3 || item.critical >= 2);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="flex items-center gap-3">
          <Image
            src={`${assetBasePath}/aecode-logo-principal-fondo-oscuro.png`}
            alt="AECODE"
            width={132}
            height={31}
            priority
          />
        </div>

        <div className="mt-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Activity Control OS</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-white">Tablero maestro de actividades</h1>
          <p className="mt-4 text-sm leading-7 text-aecode-muted">
            Control interno AECODE: roles mapeados, postventa, soporte, producto, marketing, comercial, eventos, finanzas, datos y automatizacion.
          </p>
        </div>

        <nav className="mt-8 grid gap-3" aria-label="Navegacion principal">
          {navGroups.map((group) => {
            const isOpen = openNav[group.id];
            return (
              <div className="nav-group" key={group.id}>
                <button
                  className="nav-group-button"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenNav((current) => ({ ...current, [group.id]: !isOpen }))}
                >
                  <span>{group.label}</span>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isOpen ? (
                  <div className="grid gap-1 pt-2">
                    {group.items.map((item) => (
                      <NavItem href={item.href} icon={item.icon} key={item.href} label={item.label} />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="mt-8 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-4">
          <p className="text-sm font-black text-aecode-mint">Modo interno</p>
          <p className="mt-2 text-sm leading-6 text-aecode-muted">Muestra nombres reales cuando hay evidencia. No expone correos, credenciales ni URLs privadas completas; Persona N queda como trazabilidad cuando falta confirmacion.</p>
        </div>
      </aside>

      <main className="main">
        <section className="grid gap-4" id="control">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Control maestro AECODE</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl" style={{ lineHeight: 1.2 }}>
                Roles, SLA, procesos y decisiones
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Vista ejecutiva para operar AECODE completo: aprendizaje, postventa, soporte, producto, marketing, comercial, eventos, finanzas, datos y automatizacion.
              </p>
            </div>
            <div className="flex gap-2">
              <a className="chip chip-good" href="#agentes">
                <Bot size={14} />
                <span className="ml-2">{agents.length} agentes</span>
              </a>
              <a className="chip" href="#programas">
                <ExternalLink size={14} />
                <span className="ml-2">fuente Sheet</span>
              </a>
            </div>
          </div>

          <div className="metric-grid">
            <Metric label="Actividades" value={String(activities.length)} detail="Actividades completas normalizadas desde Obsidian, Notion, Sheet y adjuntos." />
            <Metric label="Empresas AP" value={String(ecosystemCompanies.length)} detail="GEN+, AECODE, THESIA, SP+/VisionPro y direccion del ecosistema." tone="good" />
            <Metric label="Proyectos AP" value={String(ecosystemProjects.length)} detail="Iniciativas criticas con siguiente accion y riesgo operativo." />
            <Metric label="Links" value={String(linkAssets.length)} detail="Inventario seguro de enlaces extraidos del chat operativo." />
            <Metric label="Areas AECODE" value={String(aecodeDomains.length)} detail="Dominios de control desde direccion hasta finanzas y BI." tone="good" />
            <Metric label="Playbooks" value={String(workflowPlaybooks.length)} detail="Flujos tipicos interactivos para operar postventa, sesiones, contenido, certificados, growth, eventos y producto." tone="good" />
            <Metric label="Equipo nucleo" value={`${coreTeamCount}/${teamCapacityPolicy.maxCoreSeats}`} detail="Asientos operativos activos. El resto queda como red extendida para no inflar ownership." tone="good" />
            <Metric label="Personas consideradas" value={String(allConsideredTeamMembers.length)} detail={`${highConfidenceTeam} con certeza alta; ${extendedTeamCount} en red extendida o pendiente de confirmacion.`} />
            <Metric label="Vistas objetivo" value={String(executiveViews.length)} detail="Pestanas operativas requeridas para direccion, equipo, training, ventas y soporte." />
            <Metric label="Criticas" value={String(criticalCount)} detail="Accesos, videos y certificados tienen impacto directo en activacion." tone="risk" />
            <Metric label="En riesgo" value={String(riskCount)} detail="Requieren owner, SLA o evidencia para no generar reclamos." tone="risk" />
            <Metric label="Automatizables" value={`${automationCount}/${activities.length}`} detail="Candidatas para AgentFlow, GHL, WhatsApp, Drive o n8n." tone="good" />
            <Metric label="Programas listos" value={`${readyPrograms}/${programs.length}`} detail="Lectura de readiness por accesos, Zoom, WSP, Classroom y embajador." />
          </div>
        </section>

        <section className="execution-center mt-6" id="hoy">
          <div className="execution-hero">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Hoy / Centro de ejecucion</p>
              <h2 className="mt-2 text-3xl font-black text-white">Lo que el equipo debe mover ahora</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Vista diaria para Alejandro y el equipo: responsables reales, bloqueos, evidencia faltante, decision requerida, agente sugerido y siguiente mejor accion.
              </p>
            </div>
            <div className="execution-pulse" aria-label="Operacion viva">
              <CircleDotDashed size={26} />
              <span>live ops</span>
            </div>
          </div>

          <div className="execution-kpis">
            <article>
              <p>Items de hoy</p>
              <strong>{executionItems.length}</strong>
              <span>por playbook operativo</span>
            </article>
            <article>
              <p>Bloqueos/riesgo</p>
              <strong>{blockedToday}</strong>
              <span>requieren owner y SLA</span>
            </article>
            <article>
              <p>Decisiones AP</p>
              <strong>{decisionToday}</strong>
              <span>solo direccion si destraba valor</span>
            </article>
            <article>
              <p>Evidencias</p>
              <strong>{evidenceToday}</strong>
              <span>logs, reportes o cierres</span>
            </article>
            <article>
              <p>Agentes posibles</p>
              <strong>{agentReadyToday}</strong>
              <span>con control humano</span>
            </article>
          </div>

          <div className="execution-filters">
            <div>
              <label htmlFor="execution-owner">Persona</label>
              <select id="execution-owner" value={executionOwner} onChange={(event) => setExecutionOwner(event.target.value)}>
                <option value="Todos">Todos</option>
                {executionOwners.map((owner) => (
                  <option key={owner} value={owner}>{displayPerson(owner)}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="execution-status">Estado</label>
              <select id="execution-status" value={executionStatus} onChange={(event) => setExecutionStatus(event.target.value)}>
                <option value="Todos">Todos</option>
                {executionStatuses.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="execution-playbook">Playbook</label>
              <select id="execution-playbook" value={executionPlaybook} onChange={(event) => setExecutionPlaybook(event.target.value)}>
                <option value="Todos">Todos</option>
                {workflowPlaybooks.map((playbook) => (
                  <option key={playbook.id} value={playbook.id}>{playbook.id} / {playbook.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="daily-store-panel">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-aecode-green">Modo editable local</p>
              <h3 className="mt-1 text-lg font-black text-white">Estado diario guardado en este navegador</h3>
              <p className="mt-2 text-sm leading-6 text-aecode-muted">
                Los cambios ajustan este tablero y sus KPIs sin tocar Sheets, WhatsApp, Notion ni GitHub. Usa exportar/importar para compartir un corte operativo.
              </p>
              <p className="mt-2 text-xs font-bold text-aecode-lavender">{storeNotice}</p>
            </div>
            <div className="daily-store-actions">
              <button type="button" onClick={exportDailyState}>
                <Download size={15} />
                <span>Exportar</span>
              </button>
              <button type="button" onClick={importDailyState}>
                <Upload size={15} />
                <span>Importar</span>
              </button>
              <button type="button" onClick={resetDailyState}>
                <RefreshCw size={15} />
                <span>Reiniciar</span>
              </button>
            </div>
            <label className="daily-import-box" htmlFor="daily-import-payload">
              <span>JSON de estado</span>
              <textarea
                id="daily-import-payload"
                value={importPayload}
                onChange={(event) => setImportPayload(event.target.value)}
                placeholder='{"schema":"aecode-activity-control-os.daily-state.v1","overrides":{}}'
                rows={4}
              />
            </label>
          </div>

          <div className="execution-layout">
            <div className="execution-board">
              {executionFiltered.map((item) => (
                <article className="execution-card" key={item.id}>
                  <div className="execution-card-head">
                    <div>
                      <p>{item.id} / {item.area}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <span className={`chip ${executionStatusClass[item.status]}`}>{item.status}</span>
                  </div>
                  <div className="execution-meta">
                    <span className={`chip ${priorityClass[item.priority]}`}>{item.priority}</span>
                    <span className="chip">{item.due}</span>
                    <span className="chip chip-good">{item.agent}</span>
                  </div>
                  <div className="execution-owners">
                    <p><strong>Owner</strong>{displayPerson(item.owner)}</p>
                    <p><strong>Backup</strong>{displayPerson(item.backup)}</p>
                    <p><strong>Flujo</strong>{item.playbookId}</p>
                  </div>
                  <div className="quick-update-grid">
                    <label>
                      <span>Estado</span>
                      <select value={item.status} onChange={(event) => updateDailyItem(item.id, { status: event.target.value as ExecutionStatus })}>
                        {executionStatuses.map((executionState) => (
                          <option key={executionState} value={executionState}>{executionState}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      <span>Fecha / SLA</span>
                      <input value={item.due} onChange={(event) => updateDailyItem(item.id, { due: event.target.value })} />
                    </label>
                    <label className="quick-update-wide">
                      <span>Siguiente accion</span>
                      <textarea value={item.nextBestAction} onChange={(event) => updateDailyItem(item.id, { nextBestAction: event.target.value })} rows={2} />
                    </label>
                    <label className="quick-update-wide">
                      <span>Evidencia / decision</span>
                      <textarea value={`${item.evidence}\nDecision: ${item.decisionNeeded}`} onChange={(event) => {
                        const [evidenceLine, ...decisionLines] = event.target.value.split("\nDecision:");
                        updateDailyItem(item.id, {
                          evidence: evidenceLine.trim(),
                          decisionNeeded: decisionLines.join("Decision:").trim() || item.decisionNeeded
                        });
                      }} rows={3} />
                    </label>
                  </div>
                  <div className="next-action">
                    <TimerReset size={17} />
                    <p>{item.nextBestAction}</p>
                  </div>
                  <div className="execution-evidence">
                    <p><span>Evidencia</span>{item.evidence}</p>
                    <p><span>Decision</span>{item.decisionNeeded}</p>
                    <p><span>Escala</span>{item.escalation}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="execution-side">
              <div className="side-block">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-aecode-green">Carga</p>
                    <h3 className="mt-1 text-lg font-black text-white">Personas sobrecargadas</h3>
                  </div>
                  <SlidersHorizontal size={22} className="text-aecode-mint" />
                </div>
                <div className="mt-4 grid gap-3">
                  {ownerLoad.slice(0, 7).map((item) => (
                    <div className="load-row" key={item.owner}>
                      <div>
                        <p>{displayPerson(item.owner)}</p>
                        <span>{item.critical} criticas</span>
                      </div>
                      <strong>{item.count}</strong>
                    </div>
                  ))}
                </div>
                {overloadedPeople.length ? (
                  <p className="mt-4 rounded-lg border border-aecode-coral/30 bg-aecode-coral/10 p-3 text-sm leading-6 text-[#ffb2aa]">
                    Alerta: {overloadedPeople.map((item) => displayPerson(item.owner)).join(", ")} concentran demasiada carga o tareas criticas.
                  </p>
                ) : null}
              </div>

              <div className="side-block">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-aecode-green">Decisiones para Alejandro</p>
                <div className="mt-3 grid gap-2">
                  {executionItems.filter((item) => item.status === "Requiere decision").map((item) => (
                    <a className="decision-link" href="#flujo" key={item.id} onClick={() => setActivePlaybookId(item.playbookId)}>
                      <AlertTriangle size={15} />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="side-block">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-aecode-green">Regla operativa</p>
                <p className="mt-2 text-sm leading-6 text-aecode-muted">
                  Una actividad no esta cerrada si no tiene evidencia, owner unico, fecha, estado y proximo paso. Todo lo sensible queda fuera del deploy publico.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="strategic-profiles mt-6" id="perfiles-criticos">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Perfiles operativos criticos</p>
              <h2 className="mt-2 text-3xl font-black text-white">Julie, Daniella y Fabrizio como nodos de control</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Lectura ejecutiva de los roles que cruzan varias empresas y areas. Sirve para saber que hacen, con quien se comunican, que evidencias deben dejar y que no se debe cargarles sin criterio.
              </p>
            </div>
            <ShieldCheck className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-4">
            {strategicRoleProfiles.map((profile) => (
              <article className="strategic-profile-row" key={profile.id}>
                <div className="strategic-profile-head">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{profile.id} / {displayPerson(profile.person)}</p>
                    <h3>{profile.title}</h3>
                    <p>{profile.scope}</p>
                  </div>
                  <span className="chip chip-good">Control transversal</span>
                </div>

                <div className="strategic-profile-read">
                  <AlertTriangle size={16} />
                  <p>{profile.executiveRead}</p>
                </div>

                <div className="strategic-block-grid">
                  {profile.blocks.map((block) => (
                    <div className="strategic-block" key={`${profile.id}-${block.label}`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4>{block.label}</h4>
                        <span className="chip">{block.company}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-aecode-muted">{block.objective}</p>
                      <div className="mt-3 grid gap-3 xl:grid-cols-2">
                        <div>
                          <span className="strategic-label">Actividades</span>
                          {block.activities.map((activity) => (
                            <p className="strategic-line" key={activity}>{activity}</p>
                          ))}
                        </div>
                        <div>
                          <span className="strategic-label">Metricas</span>
                          {block.metrics.map((metric) => (
                            <p className="strategic-line" key={metric}>{metric}</p>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {block.systems.map((system) => (
                          <span className="chip chip-good" key={system}>{system}</span>
                        ))}
                      </div>
                      <div className="mt-3 grid gap-2">
                        {block.handoffs.map((handoff) => (
                          <p className="handoff-line" key={handoff}>
                            <ChevronRight size={14} />
                            <span>{handoff}</span>
                          </p>
                        ))}
                      </div>
                      <p className="mt-3 text-xs font-bold leading-5 text-[#ffb2aa]">{block.risks.join(" / ")}</p>
                    </div>
                  ))}
                </div>

                <div className="strategic-footer">
                  <div>
                    <span className="strategic-label">KPIs de control</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.operatingMetrics.map((metric) => (
                        <span className="chip" key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="strategic-label">Siguientes acciones de sistema</span>
                    <div className="mt-2 grid gap-2">
                      {profile.nextSystemActions.map((action) => (
                        <p className="strategic-line" key={action}>{action}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4" id="ecosistema">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Ecosistema AP</p>
              <h2 className="mt-2 text-2xl font-black text-white">Centro de mando GEN+ · AECODE · THESIA · VisionPro</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Capa ejecutiva tomada del dashboard operativo AP: empresa, proyecto, siguiente accion, owner, riesgo y flywheel. AECODE sigue siendo la vertical educativa principal dentro del sistema.
              </p>
            </div>
            <Workflow className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-3 xl:grid-cols-5">
            {ecosystemCompanies.map((company) => (
              <article className="panel border-l-4 p-4" key={company.id} style={{ borderLeftColor: company.color }}>
                <p className="text-xs font-black text-aecode-muted">{company.id}</p>
                <h3 className="mt-1 text-lg font-black text-white">{company.company}</h3>
                <p className="mt-2 min-h-[48px] text-sm leading-6 text-aecode-muted">{company.type}</p>
                <span className="chip chip-good">{company.state}</span>
                <p className="mt-3 text-xs leading-5 text-aecode-lavender">{company.operatingFocus}</p>
              </article>
            ))}
          </div>

          <section className="panel table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Proyecto critico</th>
                  <th>Empresa</th>
                  <th>Avance</th>
                  <th>Owner</th>
                  <th>Siguiente accion</th>
                  <th>Riesgo</th>
                </tr>
              </thead>
              <tbody>
                {ecosystemProjects.map((project) => (
                  <tr key={project.id}>
                    <td>
                      <p className="font-black text-white">{project.project}</p>
                      <p className="mt-1 text-xs text-aecode-muted">{project.id} · {project.status}</p>
                    </td>
                    <td><span className="chip">{project.company}</span></td>
                    <td className="font-bold text-aecode-mint">{project.progress}</td>
                    <td className="font-bold text-white">{displayPerson(project.owner)}</td>
                    <td><p className="max-w-[320px] text-sm leading-6 text-white">{project.nextAction}</p></td>
                    <td><p className="max-w-[300px] text-sm leading-6 text-aecode-muted">{project.risk}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>

        <section className="mt-6 grid gap-4" id="flywheel">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Flywheel AP</p>
              <h2 className="mt-2 text-2xl font-black text-white">Comunidad → Educacion → Producto → Autoridad → Data → IA → Escala</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Cada capa debe tener una senal visible, una pregunta de decision y un riesgo si se queda rezagada.
              </p>
            </div>
            <Route className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-3 xl:grid-cols-7">
            {flywheelLayers.map((layer, index) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={layer.layer}>
                <p className="text-xs font-black text-aecode-muted">Paso {index + 1}</p>
                <h3 className="mt-1 text-lg font-black text-white">{layer.layer}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-aecode-muted">{layer.signal}</p>
                <div className="mt-4 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-3">
                  <p className="text-xs font-black uppercase text-aecode-green">Pregunta</p>
                  <p className="mt-2 text-sm leading-6 text-white">{layer.dashboardQuestion}</p>
                </div>
                <p className="mt-3 text-xs font-bold text-aecode-lavender">Owner: {displayPerson(layer.owner)}</p>
                <p className="mt-2 text-xs leading-5 text-aecode-muted">Riesgo: {layer.lagRisk}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {ecosystemMetrics.map((metric) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-bg/35 p-4" key={metric.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{metric.company}</p>
                    <h3 className="mt-1 text-base font-black text-white">{metric.metric}</h3>
                  </div>
                  <span className="chip chip-good">{metric.target}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{metric.frequency}</p>
                <p className="mt-2 text-xs font-bold text-aecode-lavender">Owner: {metric.owner}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4" id="gobierno">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Gobierno del tablero</p>
              <h2 className="mt-2 text-2xl font-black text-white">Campos minimos, reglas y vistas requeridas</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Regla central del PDF: toda actividad tiene exactamente un responsable, proximo paso, fecha, evidencia y metrica asociada.
              </p>
            </div>
            <ShieldCheck className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <section className="panel table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Regla</th>
                    <th>Req.</th>
                  </tr>
                </thead>
                <tbody>
                  {activityFieldSpecs.map((field) => (
                    <tr key={field.field}>
                      <td className="font-black text-white">{field.field}</td>
                      <td><span className="chip">{field.type}</span></td>
                      <td><p className="max-w-[520px] text-sm leading-6 text-aecode-muted">{field.rule}</p></td>
                      <td><span className={`chip ${field.required ? "chip-critical" : "chip-good"}`}>{field.required ? "Si" : "No"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <aside className="grid gap-3">
              {operatingRules.map((rule) => (
                <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={rule.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{rule.id}</p>
                      <h3 className="mt-1 text-base font-black text-white">{rule.cadence}</h3>
                    </div>
                    <span className="chip chip-good">{displayPerson(rule.owner)}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-aecode-muted">{rule.rule}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">Evidencia: {rule.evidence}</p>
                </article>
              ))}
            </aside>
          </div>
        </section>

        <section className="mt-6 panel p-5" id="vistas">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">15 vistas requeridas</p>
              <h2 className="mt-2 text-2xl font-black text-white">Arquitectura visual por audiencia</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Estas vistas funcionan como roadmap de producto: el tablero actual cubre control, roles, AECODE ops, comercial, agentes, links, programas y riesgos; GEN+, instructores, embajadores y permisos quedan como siguiente capa.
              </p>
            </div>
            <ClipboardList className="text-aecode-mint" size={30} />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {executiveViews.map((view) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={view.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{view.id}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{view.tab}</h3>
                  </div>
                  <span className="chip">{view.frequency}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{view.purpose}</p>
                <p className="mt-3 text-xs font-bold text-aecode-lavender">{view.audience}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 panel p-5" id="areas">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Mapa completo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Areas, responsabilidades y riesgos</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Cada dominio tiene lead mapeado, roles de apoyo, responsabilidades, KPIs, cadencia y automatizacion candidata.
              </p>
            </div>
            <LayoutDashboard className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-4">
            {aecodeDomains.map((domain) => (
              <article className="domain-card" key={domain.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{domain.id}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{domain.domain}</h3>
                  </div>
                <span className="chip chip-good">{displayPerson(domain.lead)}</span>
                </div>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-aecode-muted">{domain.mission}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {domain.responsibilities.slice(0, 6).map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-aecode-violet/15 bg-aecode-bg/35 p-3">
                  <p className="text-xs font-black uppercase text-aecode-green">Automatizacion</p>
                  <p className="mt-2 text-sm leading-6 text-white">{displayOperationalText(domain.automation)}</p>
                </div>
                <p className="mt-4 text-xs font-bold text-aecode-lavender">Apoyo: {domain.supportingRoles.map(displayPerson).join(" + ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 panel p-5" id="frontera">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Frontera AECODE / GEN+</p>
              <h2 className="mt-2 text-2xl font-black text-white">Que se queda, que se deriva y que es compartido</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                AECODE concentra aprendizaje, comunidad, skills, evidencias y certificacion. GEN+ concentra consultoria, proyectos cliente, ingenieria aplicada, BIM/VDC, IA empresarial y productos tecnicos.
              </p>
            </div>
            <Route className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-3">
            {operatingBoundaries.map((boundary) => {
              const routeClass = boundary.routeTo === "AECODE" ? "chip-good" : boundary.routeTo === "GEN+" ? "chip-high" : "";
              return (
                <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={boundary.id}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{boundary.id}</p>
                      <h3 className="mt-1 text-lg font-black text-white">{boundary.topic}</h3>
                    </div>
                    <span className={`chip ${routeClass}`}>{boundary.routeTo}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-aecode-muted">{boundary.criterion}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {boundary.examples.map((example) => (
                      <span className="chip" key={example}>{example}</span>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-aecode-violet/15 bg-aecode-bg/35 p-3">
                    <p className="text-xs font-black uppercase text-aecode-green">Evidencia de decision</p>
                    <p className="mt-2 text-sm leading-6 text-white">{boundary.evidence}</p>
                  </div>
                  <p className="mt-3 text-xs font-bold text-aecode-lavender">Owner: {displayPerson(boundary.owner)}</p>
                  <p className="mt-2 text-xs leading-5 text-aecode-muted">Riesgo: {boundary.risk}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-6 panel p-5" id="cultura">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Cultura operativa</p>
              <h2 className="mt-2 text-2xl font-black text-white">Habitos que hacen funcionar el sistema</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Cultura AECODE se traduce en presencia, trazabilidad, cierre diario, alineacion al negocio, aprendizaje compartido y documentacion reutilizable.
              </p>
            </div>
            <MessageSquareText className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-3">
            {cultureClusters.map((item) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={item.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{item.id}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{item.cluster}</h3>
                  </div>
                  <span className="chip chip-good max-w-full whitespace-normal text-left">{item.metric}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{item.principle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.habits.map((habit) => (
                    <span className="chip" key={habit}>{habit}</span>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-3">
                  <p className="text-xs font-black uppercase text-aecode-green">Regla operativa</p>
                  <p className="mt-2 text-sm leading-6 text-white">{item.operatingRule}</p>
                </div>
                <p className="mt-3 text-xs font-bold text-aecode-lavender">Evidencia: {item.evidence}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <div className="min-w-0 rounded-lg border border-aecode-violet/20 bg-aecode-bg/35 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Rituales</p>
              <div className="mt-4 overflow-x-auto">
                <table className="data-table min-w-[760px]">
                  <thead>
                    <tr>
                      <th>Ritual</th>
                      <th>Frecuencia</th>
                      <th>Formato</th>
                      <th>Canal</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cultureRituals.map((ritual) => (
                      <tr key={ritual.ritual}>
                        <td className="font-black text-white">{ritual.ritual}</td>
                        <td className="text-sm text-aecode-mint">{ritual.frequency}</td>
                        <td className="text-sm leading-6 text-aecode-muted">{ritual.format}</td>
                        <td><span className="chip">{ritual.channel}</span></td>
                        <td className="text-sm font-bold text-white">{ritual.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="grid min-w-0 gap-3">
              <div className="rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Valores</p>
                <div className="mt-3 grid gap-2">
                  {cultureValues.map((value) => (
                    <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={value}>
                      <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={15} />
                      {value}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-aecode-coral/30 bg-aecode-coral/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffb2aa]">Antivalores</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cultureAntiValues.map((value) => (
                    <span className="chip chip-critical" key={value}>{value}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-6 grid gap-4" id="actividades">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Operacion por actividad</p>
            <h2 className="mt-2 text-2xl font-black text-white">Backlog operativo con owner, SLA y riesgo</h2>
          </div>

          <section className="panel p-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex min-h-11 items-center gap-3 rounded-lg border border-aecode-violet/20 bg-aecode-card/40 px-3 xl:w-[360px]">
                <Search size={18} className="text-aecode-muted" />
                <input
                  aria-label="Buscar actividad"
                  className="h-10 w-full bg-transparent text-sm text-white placeholder:text-aecode-muted"
                  placeholder="Buscar actividad, area o agente"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              <div className="segmented" aria-label="Filtro de area">
                {["Todas", ...areas].map((item) => (
                  <button key={item} data-active={area === item} onClick={() => setArea(item)} type="button">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Filter size={16} className="text-aecode-muted" />
              {["Todos", "Activo", "Riesgo", "Pendiente", "Listo"].map((item) => (
                <button className="chip cursor-pointer" key={item} onClick={() => setStatus(item)} type="button">
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 border-t border-aecode-violet/15 pt-4">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Ver por rol operativo</p>
              <div className="segmented" aria-label="Filtro por rol operativo">
                {["Todos", ...opsRoles.map((item) => item.id)].map((item) => (
                  <button key={item} data-active={role === item} onClick={() => setRole(item)} type="button">
                    {item === "Todos" ? item : displayPerson(item)}
                  </button>
                ))}
              </div>
              {selectedRole ? (
                <div className="mt-4 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-4">
                  <p className="text-sm font-black text-aecode-mint">{selectedRole.role}</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{selectedRole.dailyCheck}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">Backup: {displayPerson(selectedRole.backup)}</p>
                </div>
              ) : null}
            </div>
          </section>

          <section className="grid gap-3 md:hidden">
            {filtered.map((item) => (
              <article className="panel p-4" key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{item.id}</p>
                    <h3 className="mt-1 text-base font-black text-white">{item.activity}</h3>
                  </div>
                  <span className={`chip ${priorityClass[item.priority]}`}>{item.priority}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{item.area}</span>
                  <span className="chip chip-good">{item.agent}</span>
                  <span className="chip">{item.sla}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">Owner: {displayPerson(item.owner)} / Backup: {displayPerson(item.backup)}</p>
                <p className="mt-2 text-sm leading-6 text-aecode-muted">{item.risk}</p>
                <p className="mt-2 text-sm leading-6 text-white">{item.nextAction}</p>
              </article>
            ))}
          </section>

          <section className="hidden md:block panel table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th>Area</th>
                  <th>Owner</th>
                  <th>Agente</th>
                  <th>SLA</th>
                  <th>Prioridad</th>
                  <th>Riesgo</th>
                  <th>Siguiente accion</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <p className="font-black text-white">{item.id}</p>
                      <p className="mt-1 max-w-[320px] text-sm leading-6 text-aecode-muted">{item.activity}</p>
                    </td>
                    <td>
                      <span className="chip">{item.area}</span>
                    </td>
                    <td>
                      <p className="font-bold text-white">{displayPerson(item.owner)}</p>
                      <p className="text-xs text-aecode-muted">Backup: {displayPerson(item.backup)}</p>
                    </td>
                    <td>
                      <span className="chip chip-good">{item.agent}</span>
                      <p className="mt-2 text-xs text-aecode-muted">Auto: {item.automationLevel}</p>
                    </td>
                    <td className="font-bold text-aecode-mint">{item.sla}</td>
                    <td>
                      <span className={`chip ${priorityClass[item.priority]}`}>{item.priority}</span>
                    </td>
                    <td>
                      <p className="max-w-[280px] text-sm leading-6 text-aecode-muted">{item.risk}</p>
                    </td>
                    <td>
                      <p className="max-w-[300px] text-sm leading-6 text-white">{item.nextAction}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>

        <section className="mt-6 grid gap-4" id="roles">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Equipo operativo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Roles, responsabilidades y foco diario</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Estructura interna basada en fuentes operativas. Cada rol muestra alias, mision, areas, KPIs, backup y criterio de escalamiento.
              </p>
            </div>
            <UserRoundCheck className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {opsRoles.map((item) => (
              <article className="panel p-4" key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{displayPerson(item.id)}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{item.role}</h3>
                  </div>
                  <span className="chip chip-good">{displayPerson(item.backup)}</span>
                </div>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-aecode-muted">{item.mission}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.areas.map((areaName) => (
                    <span className="chip" key={areaName}>{areaName}</span>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-aecode-violet/15 bg-aecode-bg/40 p-3">
                  <p className="text-xs font-black uppercase text-aecode-green">Chequeo diario</p>
                  <p className="mt-2 text-sm leading-6 text-white">{item.dailyCheck}</p>
                </div>
                <div className="mt-4 grid gap-2">
                  {item.kpis.slice(0, 4).map((kpi) => (
                    <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={kpi}>
                      <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={15} />
                      {kpi}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-xs font-bold text-aecode-lavender">{item.obsidianSource}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4" id="equipo-real">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Equipo operativo</p>
              <h2 className="mt-2 text-2xl font-black text-white">25 asientos nucleo + red extendida trazable</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Se consideraron todos los nombres de Obsidian. Para que el equipo sea operable, el tablero limita el nucleo a 25 personas y mueve los perfiles sin rol cerrado o apoyo puntual a red extendida.
              </p>
            </div>
            <Users className="text-aecode-mint" size={30} />
          </div>

          <section className="panel team-command p-5">
            <div className="team-command-ring" aria-label="Capacidad nucleo">
              <span>{teamCapacityPolicy.coreSeats}</span>
              <small>/ {teamCapacityPolicy.maxCoreSeats}</small>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Regla de capacidad</p>
              <h3 className="mt-2 text-xl font-black text-white">Maximo 25 personas con ownership activo</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">{teamCapacityPolicy.rule}</p>
              <p className="mt-2 text-sm leading-6 text-aecode-lavender">{teamCapacityPolicy.decision}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="mini-stat">
                <p>Consideradas</p>
                <strong>{teamCapacityPolicy.consideredPeople}</strong>
              </div>
              <div className="mini-stat">
                <p>Nucleo</p>
                <strong>{teamCapacityPolicy.coreSeats}</strong>
              </div>
              <div className="mini-stat">
                <p>Red extendida</p>
                <strong>{teamCapacityPolicy.extendedSeats}</strong>
              </div>
            </div>
          </section>

          <div className="team-grid">
            {aecodeTeamMembers.map((member, index) => (
              <article className="team-card panel p-4" key={member.name} style={{ animationDelay: `${Math.min(index * 35, 420)}ms` }}>
                <div className="team-card-top">
                  <div className="avatar-badge" aria-hidden="true">
                    {member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-black uppercase tracking-[0.12em] text-aecode-muted">{member.squad}</p>
                    <h3 className="mt-1 truncate text-xl font-black text-white">{member.name}</h3>
                    <p className="mt-1 text-sm font-bold text-aecode-mint">{member.role}</p>
                  </div>
                  <span className={`chip ${loadClass(member.load)}`}>{member.load}</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-aecode-muted">{member.focus}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`chip ${confidenceClass(member.confidence)}`}>Certeza {member.confidence}</span>
                  <span className="chip chip-good">{member.seatType}</span>
                  <span className="chip">{member.company}</span>
                </div>

                <div className="mt-4 grid gap-3 xl:grid-cols-2">
                  <div className="subpanel">
                    <p className="text-xs font-black uppercase text-aecode-green">Actividades clave</p>
                    <div className="mt-2 grid gap-2">
                      {member.activities.slice(0, 5).map((activity) => (
                        <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={activity}>
                          <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={14} />
                          {activity}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="subpanel">
                    <p className="text-xs font-black uppercase text-aecode-green">Se comunica con</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.communicatesWith.map((person) => (
                        <span className="chip" key={person}>{resolvePersonName(person)}</span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-black uppercase text-aecode-green">Handoff</p>
                    <p className="mt-2 text-sm leading-6 text-white">{member.keyHandoff}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 2xl:grid-cols-3">
                  <div>
                    <p className="text-xs font-black uppercase text-aecode-green">Proyectos</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.projects.map((project) => (
                        <span className="chip" key={project}>{project}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-aecode-green">Owns</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.owns.map((own) => (
                        <span className="chip chip-good" key={own}>{own}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-aecode-green">Cadencia</p>
                    <p className="mt-2 text-sm leading-6 text-aecode-muted">{member.cadence}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-aecode-violet/15 bg-aecode-bg/30 p-3">
                  <p className="text-xs font-black uppercase text-aecode-green">Riesgo operativo</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{member.risk}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">{member.source}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="panel p-5" id="red-extendida">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Red extendida</p>
                <h3 className="mt-2 text-xl font-black text-white">Apoyo puntual, rol por confirmar o sin reporte detallado</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                  Estas personas estan consideradas, pero no consumen asiento nucleo hasta que tengan rol, entregable y cadencia claros.
                </p>
              </div>
              <span className="chip chip-high">{extendedTeamMembers.length} personas</span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
              {extendedTeamMembers.map((member) => (
                <article className="extended-card" key={member.name}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{member.squad}</p>
                      <h4 className="mt-1 text-base font-black text-white">{member.name}</h4>
                      <p className="mt-1 text-xs font-bold text-aecode-mint">{member.role}</p>
                    </div>
                    <span className={`chip ${confidenceClass(member.confidence)}`}>{member.confidence}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-aecode-muted">{member.focus}</p>
                  <p className="mt-3 text-xs font-bold text-aecode-lavender">{member.keyHandoff}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel p-5" id="conexiones">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Interconexion operativa</p>
                <h3 className="mt-2 text-xl font-black text-white">Rutas de comunicacion por dominio</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                  Cada dominio tiene un responsable primario, personas conectadas, evidencia y agente candidato. Esto evita que la comunicacion dependa de chats sueltos.
                </p>
              </div>
              <Workflow className="text-aecode-mint" size={30} />
            </div>

            <div className="connection-map mt-5">
              {teamConnections.map((connection) => (
                <article className="connection-card" key={connection.id}>
                  <div className="connection-node">
                    <span>{connection.id}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-aecode-green">{connection.lane}</p>
                        <h4 className="mt-1 text-lg font-black text-white">{connection.primary}</h4>
                      </div>
                      <span className="chip chip-good">{connection.agent}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-aecode-muted">{connection.objective}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {connection.connects.map((person) => (
                        <span className="chip" key={person}>{resolvePersonName(person)}</span>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="subpanel">
                        <p className="text-xs font-black uppercase text-aecode-green">Evidencia</p>
                        <p className="mt-2 text-sm leading-6 text-white">{connection.evidence}</p>
                      </div>
                      <div className="subpanel">
                        <p className="text-xs font-black uppercase text-aecode-green">Riesgo</p>
                        <p className="mt-2 text-sm leading-6 text-aecode-muted">{connection.risk}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Equivalencia operativa</p>
            <h3 className="mt-2 text-xl font-black text-white">Alias Persona N normalizados a nombres reales</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {Object.entries(personIdentityMap).map(([personaId, identity]) => (
                <div className="alias-card" key={personaId}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{personaId}</p>
                      <p className="mt-1 text-base font-black text-white">{identity.name}</p>
                    </div>
                    <span className={`chip ${confidenceClass(identity.confidence)}`}>{identity.confidence}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{identity.rationale}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-6 panel p-5" id="marketing">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Marketing + Growth</p>
              <h2 className="mt-2 text-2xl font-black text-white">Procesos derivados del panel de marketing</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Se integran campanas, Summit, difusion, clips, automatizacion, cierre comercial y contenido organico con responsables mapeados y evidencia operativa.
              </p>
            </div>
            <Megaphone className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-3">
            {marketingProcesses.map((process) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={process.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{process.id}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{process.title}</h3>
                  </div>
                  <span className="chip chip-good">{displayPerson(process.lead)}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{process.objective}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {process.stages.map((stage) => (
                    <span className="chip" key={stage}>{stage}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white">Evidencia: {process.evidence}</p>
                <p className="mt-2 text-xs font-bold text-aecode-lavender">{displayOperationalText(process.automation)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid mt-6" id="comercial">
          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Comercial + Finanzas</p>
                <h2 className="mt-2 text-2xl font-black text-white">Responsabilidades de revenue y control administrativo</h2>
              </div>
              <Users className="text-aecode-mint" size={28} />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {commercialRoles.map((item) => (
                <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={item.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{displayPerson(item.id)}</p>
                      <h3 className="mt-1 text-lg font-black text-white">{item.role}</h3>
                    </div>
                    <span className="chip">{displayPerson(item.backup)}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-aecode-muted">{item.mission}</p>
                  <div className="mt-4 grid gap-2">
                    {item.kpis.slice(0, 4).map((kpi) => (
                      <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={kpi}>
                        <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={15} />
                        {kpi}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel p-5" id="producto">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Producto educativo</p>
                <h2 className="mt-2 text-2xl font-black text-white">Learning OS</h2>
              </div>
              <GraduationCap className="text-aecode-mint" size={28} />
            </div>
            <p className="mt-4 text-sm leading-7 text-aecode-muted">
              AECODE debe operar cursos, pero el producto real es verificar habilidades con evidencia: diagnostico, ruta, skill, practica, rubrica, feedback y certificado.
            </p>
            <div className="mt-5 grid gap-3">
              {productRoles.map((item) => (
                <div className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={item.id}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-white">{item.role}</p>
                    <span className="chip chip-good">{displayPerson(item.id)}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{item.dailyCheck}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">{item.escalation}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-6 panel p-5" id="flujo">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Sistema de trabajo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Playbooks operativos interactivos</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Flujos tipicos para que el equipo opere por trigger, paso, owner, evidencia, sistema, handoff, riesgo y automatizacion.
              </p>
            </div>
            <CalendarDays className="text-aecode-mint" size={30} />
          </div>

          <div className="workflow-command mt-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">{selectedPlaybook.id} / {selectedPlaybook.domain}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{selectedPlaybook.title}</h3>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-aecode-muted">{selectedPlaybook.goal}</p>
            </div>
            <div className="workflow-score" aria-label={`Avance ${selectedPlaybookProgress} por ciento`}>
              <span>{selectedPlaybookProgress}%</span>
              <small>listo</small>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="mini-stat">
                <p>Lead</p>
                <strong className="text-lg">{displayPerson(selectedPlaybook.lead)}</strong>
              </div>
              <div className="mini-stat">
                <p>Pasos</p>
                <strong>{selectedPlaybook.steps.length}</strong>
              </div>
              <div className="mini-stat">
                <p>Riesgo</p>
                <strong>{selectedPlaybookRiskCount}</strong>
              </div>
            </div>
          </div>

          <div className="playbook-tabs mt-5" role="tablist" aria-label="Playbooks operativos">
            {workflowPlaybooks.map((playbook) => (
              <button
                aria-selected={playbook.id === selectedPlaybook.id}
                className="playbook-tab"
                key={playbook.id}
                onClick={() => {
                  setActivePlaybookId(playbook.id);
                  setActiveStepId(playbook.steps[0]?.id ?? "");
                }}
                role="tab"
                title={playbook.title}
                type="button"
              >
                <Route size={15} />
                <span>{playbook.title}</span>
                <small>{displayPerson(playbook.lead)}</small>
              </button>
            ))}
          </div>

          <div className="playbook-mode-bar mt-5" aria-label="Modo de visualizacion del playbook">
            {playbookModes.map((mode) => (
              <button data-active={playbookMode === mode} key={mode} onClick={() => setPlaybookMode(mode)} type="button">
                {mode === "Checklist" ? <CheckSquare size={15} /> : mode === "Kanban" ? <LayoutDashboard size={15} /> : mode === "Timeline" ? <TimerReset size={15} /> : mode === "RACI" ? <Users size={15} /> : <Database size={15} />}
                <span>{mode}</span>
              </button>
            ))}
          </div>

          <section className="playbook-mode-panel mt-4">
            {playbookMode === "Checklist" ? (
              <div className="checklist-grid">
                {selectedPlaybook.steps.map((step) => (
                  <button className="checklist-item" data-active={selectedStep.id === step.id} key={step.id} onClick={() => setActiveStepId(step.id)} type="button">
                    <CheckCircle2 size={17} />
                    <span>
                      <strong>{step.label}</strong>
                      <small>{displayPerson(step.owner)} / {step.evidence}</small>
                    </span>
                    <em>{step.timing}</em>
                  </button>
                ))}
              </div>
            ) : null}

            {playbookMode === "Kanban" ? (
              <div className="kanban-grid">
                {(["Riesgo", "En curso", "Automatizable", "Listo"] as const).map((column) => (
                  <div className="kanban-column" key={column}>
                    <p className={`chip ${workflowStatusClass(column)}`}>{column}</p>
                    <div className="mt-3 grid gap-2">
                      {selectedPlaybook.steps.filter((step) => step.status === column).map((step) => (
                        <button className="kanban-card" key={step.id} onClick={() => setActiveStepId(step.id)} type="button">
                          <strong>{step.label}</strong>
                          <span>{displayPerson(step.owner)} / {step.timing}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {playbookMode === "Timeline" ? (
              <div className="timeline-flow">
                {selectedPlaybook.steps.map((step, index) => (
                  <button className="timeline-node" key={step.id} onClick={() => setActiveStepId(step.id)} style={{ animationDelay: `${index * 80}ms` }} type="button">
                    <span>{index + 1}</span>
                    <div>
                      <strong>{step.timing}</strong>
                      <p>{step.label}</p>
                      <small>{step.output}</small>
                    </div>
                  </button>
                ))}
              </div>
            ) : null}

            {playbookMode === "RACI" ? (
              <div className="table-wrap">
                <table className="data-table raci-table">
                  <thead>
                    <tr>
                      <th>Paso</th>
                      <th>R Owner</th>
                      <th>A Backup</th>
                      <th>C Equipo</th>
                      <th>I Evidencia</th>
                      <th>Agente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPlaybook.steps.map((step) => (
                      <tr key={step.id}>
                        <td>
                          <p className="font-black text-white">{step.label}</p>
                          <p className="mt-1 text-xs text-aecode-muted">{step.id}</p>
                        </td>
                        <td className="font-bold text-white">{displayPerson(step.owner)}</td>
                        <td>{displayPerson(selectedPlaybook.lead)}</td>
                        <td>{step.team.map(displayPerson).join(" + ")}</td>
                        <td><p className="max-w-[320px] text-sm leading-6 text-aecode-muted">{step.evidence}</p></td>
                        <td><span className="chip chip-good">{step.automation.split(" ")[0]} {step.automation.split(" ")[1]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {playbookMode === "Log" ? (
              <div className="log-grid">
                {selectedPlaybook.steps.map((step, index) => (
                  <article className="log-row" key={step.id}>
                    <span>{`LOG-${index + 1}`}</span>
                    <div>
                      <strong>{step.status} / {step.label}</strong>
                      <p>{displayPerson(step.owner)} registro evidencia esperada: {step.evidence}</p>
                      <small>{step.risk}</small>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>

          <div className="workflow-experience mt-5">
            <div className="workflow-canvas">
              {selectedPlaybook.steps.map((step, index) => {
                const isActive = selectedStep.id === step.id;
                return (
                  <button
                    aria-pressed={isActive}
                    className="flow-node"
                    data-active={isActive}
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    style={{ animationDelay: `${index * 70}ms` }}
                    title={`${step.label} - ${displayPerson(step.owner)}`}
                    type="button"
                  >
                    <span className="flow-index">{index + 1}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-left text-sm font-black text-white">{step.label}</span>
                      <span className="mt-1 block truncate text-left text-xs font-bold text-aecode-muted">{step.timing} / {displayPerson(step.owner)}</span>
                    </span>
                    <span className={`chip ${workflowStatusClass(step.status)}`}>{step.status}</span>
                  </button>
                );
              })}
            </div>

            <article className="step-detail">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">{selectedStep.id} / {selectedStep.timing}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{selectedStep.label}</h3>
                  <p className="mt-2 text-sm leading-7 text-aecode-muted">{selectedStep.action}</p>
                </div>
                <span className={`chip ${workflowStatusClass(selectedStep.status)}`}>{selectedStep.status}</span>
              </div>

              <div className="mt-5 grid gap-3 xl:grid-cols-2">
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Entrada</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{selectedStep.entry}</p>
                </div>
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Salida</p>
                  <p className="mt-2 text-sm leading-6 text-white">{selectedStep.output}</p>
                </div>
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Owner y equipo</p>
                  <p className="mt-2 text-sm leading-6 text-white">{displayPerson(selectedStep.owner)}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedStep.team.map((member) => (
                      <span className="chip" key={member}>{displayPerson(member)}</span>
                    ))}
                  </div>
                </div>
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Evidencia</p>
                  <p className="mt-2 text-sm leading-6 text-white">{selectedStep.evidence}</p>
                </div>
              </div>

              <div className="automation-strip mt-4">
                <Bot size={18} />
                <p>{displayOperationalText(selectedStep.automation)}</p>
              </div>

              <div className="mt-4 grid gap-3 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Sistemas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedStep.systems.map((system) => (
                      <span className="chip" key={system}>{system}</span>
                    ))}
                  </div>
                </div>
                <div className="subpanel">
                  <p className="text-xs font-black uppercase text-aecode-green">Riesgo si falla</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{selectedStep.risk}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedStep.linkedActivities.map((activity) => (
                      <span className="chip chip-high" key={activity}>{activity}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)]">
            <section className="handoff-board">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Handoffs</p>
                  <h3 className="mt-1 text-xl font-black text-white">Reglas entre responsables</h3>
                </div>
                <Workflow className="text-aecode-mint" size={24} />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {selectedPlaybook.handoffs.map((handoff) => (
                  <div className="handoff-card" key={`${handoff.from}-${handoff.to}-${handoff.rule}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip">{displayPerson(handoff.from)}</span>
                      <ChevronRight size={16} className="text-aecode-mint" />
                      <span className="chip chip-good">{displayPerson(handoff.to)}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-aecode-muted">{handoff.rule}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="handoff-board">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Control de cierre</p>
              <h3 className="mt-1 text-xl font-black text-white">Escala y terminado</h3>
              <div className="mt-4 grid gap-3">
                {selectedPlaybook.escalations.map((item) => (
                  <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={item}>
                    <AlertTriangle className="mt-1 shrink-0 text-aecode-amber" size={15} />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-4 border-t border-aecode-violet/20 pt-4">
                {selectedPlaybook.doneDefinition.map((item) => (
                  <p className="flex gap-2 text-sm leading-6 text-white" key={item}>
                    <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={15} />
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-6 border-t border-aecode-violet/20 pt-5">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Biblioteca de etapas</p>
                <h3 className="mt-1 text-xl font-black text-white">{workflowStages.length} etapas normalizadas</h3>
              </div>
              <span className="chip chip-good">{selectedPlaybook.cycle}</span>
            </div>
            <div className="stage-strip mt-4">
              {workflowStages.map((stage) => (
                <article className="stage-pill" key={stage.id}>
                  <p className="text-xs font-black text-aecode-muted">{stage.id} / {stage.timing}</p>
                  <h4 className="mt-1 text-sm font-black text-white">{stage.label}</h4>
                  <p className="mt-2 text-xs leading-5 text-aecode-muted">{stage.objective}</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="chip chip-good">{displayPerson(stage.owner)}</span>
                    <span className="text-xs font-bold text-aecode-lavender">{stage.activities.length} acts.</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 panel p-5" id="links">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Repositorio operativo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Links e informacion interna</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Inventario de activos detectados en el chat: Sheets, Miros, Notion, Drive, YouTube, Zoom y web externa. El tablero publica metadata segura; las URLs completas quedan fuera del repo.
              </p>
            </div>
            <LockKeyhole className="text-aecode-mint" size={28} />
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {linkMetrics.map((metric) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={metric.label}>
                <p className="text-xs font-black uppercase text-aecode-green">{metric.label}</p>
                <p className="mt-2 text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-aecode-muted">{metric.context}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:hidden">
            {linkAssets.map((item) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{item.id}</p>
                    <h3 className="mt-1 text-base font-black text-white">{item.assetLabel}</h3>
                    <p className="mt-1 text-xs font-bold text-aecode-lavender">{item.domain}</p>
                  </div>
                  <span className={`chip ${privacyClass[item.privacy]}`}>{item.privacy}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">{item.category}</span>
                  <span className="chip">{item.relatedArea}</span>
                  <span className="chip chip-good">{item.agent}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{item.infoInside}</p>
                <p className="mt-2 text-sm leading-6 text-white">{item.nextAction}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 hidden md:block table-wrap">
            <table className="data-table link-table">
              <thead>
                <tr>
                  <th>Activo</th>
                  <th>Tipo</th>
                  <th>Uso operativo</th>
                  <th>Info interna</th>
                  <th>Control</th>
                  <th>Riesgo</th>
                  <th>Siguiente accion</th>
                </tr>
              </thead>
              <tbody>
                {linkAssets.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <p className="font-black text-white">{item.id}</p>
                      <p className="mt-1 max-w-[260px] text-sm leading-6 text-aecode-muted">{item.assetLabel}</p>
                      <p className="mt-1 text-xs font-bold text-aecode-lavender">{item.domain}</p>
                    </td>
                    <td>
                      <span className="chip">{item.category}</span>
                      <p className="mt-2 text-xs text-aecode-muted">{item.relatedArea}</p>
                    </td>
                    <td>
                      <p className="max-w-[260px] text-sm leading-6 text-white">{item.operationalUse}</p>
                    </td>
                    <td>
                      <p className="max-w-[300px] text-sm leading-6 text-aecode-muted">{item.infoInside}</p>
                    </td>
                    <td>
                      <span className={`chip ${privacyClass[item.privacy]}`}>{item.privacy}</span>
                      <p className="mt-2 text-xs text-aecode-muted">{displayPerson(item.owner)} / {item.agent}</p>
                      <p className="mt-1 text-xs text-aecode-muted">{item.status}</p>
                    </td>
                    <td>
                      <p className="max-w-[280px] text-sm leading-6 text-aecode-muted">{item.risk}</p>
                    </td>
                    <td>
                      <p className="max-w-[280px] text-sm leading-6 text-white">{item.nextAction}</p>
                      <p className="mt-2 text-xs font-bold text-aecode-lavender">{item.secureReference}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-grid mt-6" id="agentes">
          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Automatizacion</p>
                <h2 className="mt-2 text-2xl font-black text-white">Mapa de agentes candidatos</h2>
              </div>
              <Workflow className="text-aecode-mint" size={28} />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {agents.map((agent) => (
                <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={agent.id}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="chip chip-good">{agent.id}</span>
                    <span className="text-xs font-bold uppercase text-aecode-muted">{agent.impact}</span>
                  </div>
                  <p className="mt-3 font-black text-white">{displayOperationalText(agent.mission)}</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">Input: {displayOperationalText(agent.input)}</p>
                  <p className="text-sm leading-6 text-aecode-muted">Output: {displayOperationalText(agent.output)}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">{displayOperationalText(agent.humanControl)}</p>
                </article>
              ))}
            </div>

            <section className="agentflow-panel mt-6" id="agentflow">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">AgentFlow AECODE</p>
                  <h3 className="mt-2 text-2xl font-black text-white">Contratos auditables de automatizacion</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-aecode-muted">
                    Cada agente prepara, valida o recomienda. Acciones externas, certificados, correos, mensajes, pagos y cambios oficiales requieren aprobacion humana.
                  </p>
                </div>
                <span className="chip chip-good">{agentContracts.length} contratos</span>
              </div>

              <div className="agent-contract-tabs mt-5">
                {agentContracts.map((agent) => (
                  <button data-active={agent.id === activeAgent.id} key={agent.id} onClick={() => setActiveAgentId(agent.id)} type="button">
                    <Bot size={15} />
                    <span>{agent.name}</span>
                  </button>
                ))}
              </div>

              <article className="agent-contract-detail mt-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">{activeAgent.id} / {displayPerson(activeAgent.owner)}</p>
                    <h4 className="mt-2 text-2xl font-black text-white">{activeAgent.name}</h4>
                    <p className="mt-2 text-sm leading-7 text-aecode-muted">{activeAgent.objective}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip chip-good">{activeAgent.status}</span>
                    <span className={`chip ${privacyClass[activeAgent.privacyRisk === "Critico" ? "Critico" : activeAgent.privacyRisk === "Alto" ? "Critico" : activeAgent.privacyRisk === "Medio" ? "Interno" : "Publico"]}`}>Privacidad {activeAgent.privacyRisk}</span>
                  </div>
                </div>

                <div className="agent-contract-grid mt-5">
                  <div>
                    <p>Trigger</p>
                    <span>{activeAgent.trigger}</span>
                  </div>
                  <div>
                    <p>Idempotencia</p>
                    <span>{activeAgent.idempotency}</span>
                  </div>
                  <div>
                    <p>Permisos</p>
                    <span>{activeAgent.permissions}</span>
                  </div>
                  <div>
                    <p>Output</p>
                    <span>{displayOperationalText(activeAgent.output)}</span>
                  </div>
                  <div>
                    <p>Logs</p>
                    <span>{activeAgent.logs}</span>
                  </div>
                  <div>
                    <p>Retries / fallback</p>
                    <span>{activeAgent.retries} / {activeAgent.fallback}</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 xl:grid-cols-3">
                  <div className="subpanel">
                    <p className="text-xs font-black uppercase text-aecode-green">Input payload</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeAgent.inputPayload.map((item) => <span className="chip" key={item}>{item}</span>)}
                    </div>
                  </div>
                  <div className="subpanel">
                    <p className="text-xs font-black uppercase text-aecode-green">Validaciones</p>
                    <div className="mt-3 grid gap-2">
                  {activeAgent.validations.map((item) => <p className="text-sm leading-6 text-aecode-muted" key={item}>{displayOperationalText(item)}</p>)}
                    </div>
                  </div>
                  <div className="subpanel">
                    <p className="text-xs font-black uppercase text-aecode-green">Herramientas y control</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeAgent.tools.map((item) => <span className="chip chip-good" key={item}>{item}</span>)}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white">{displayOperationalText(activeAgent.humanApproval)}</p>
                  </div>
                </div>
              </article>
            </section>
          </div>

          <aside className="panel-light p-5" id="datos">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4A3AC1]">Datos fuente</p>
                <h2 className="mt-2 text-2xl font-black">Lectura del Sheet</h2>
              </div>
              <Database size={28} />
            </div>
            <div className="mt-5 grid gap-4">
              {contentMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black">{metric.label}</p>
                    <p className="text-sm font-black text-[#4A3AC1]">{metric.value}</p>
                  </div>
                  <div className="progress-track mt-2">
                    <div className="progress-bar" style={{ width: `${Math.min(100, Math.round((metric.value / Math.max(metric.target, 1)) * 100))}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-[#3A4065]">{metric.context}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-2">
              {sourceNotes.map((note) => (
                <p className="flex gap-2 text-sm leading-6 text-[#2A2C3A]" key={note}>
                  <CheckCircle2 className="mt-1 shrink-0 text-[#17B14E]" size={15} />
                  {displayOperationalText(note)}
                </p>
              ))}
            </div>
            <div className="mt-5 border-t border-[#4A3AC1]/15 pt-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#4A3AC1]">Estructura Obsidian</p>
              <div className="mt-3 grid gap-3">
                {opsSources.map((source) => (
                  <div className="rounded-lg border border-[#4A3AC1]/15 bg-white/60 p-3" key={source.label}>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-black">{source.label}</p>
                      <span className={`chip ${privacyClass[source.privacy]}`}>{source.privacy}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#3A4065]">{source.use}</p>
                    <p className="mt-2 break-all text-xs font-bold text-[#4A3AC1]">{source.path}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-[#4A3AC1]/15 pt-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#4A3AC1]">Modelo backend-ready</p>
              <div className="entity-grid mt-3">
                {dataEntityContracts.map((entity) => (
                  <article className="entity-card" key={entity.key}>
                    <div className="flex items-center justify-between gap-2">
                      <p>{entity.key}</p>
                      <span className={`chip ${privacyClass[entity.security]}`}>{entity.security}</span>
                    </div>
                    <h3>{entity.entity}</h3>
                    <span>{entity.purpose}</span>
                    <small>{entity.relations.join(" + ")}</small>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 panel p-5" id="programas">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Readiness</p>
              <h2 className="mt-2 text-2xl font-black text-white">Estado operativo por programa</h2>
            </div>
            <Users className="text-aecode-mint" size={28} />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => {
              const score = getReadinessScore(program);
              return (
                <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/35 p-4" key={program.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-aecode-muted">{program.id}</p>
                      <h3 className="mt-1 text-lg font-black text-white">{program.label}</h3>
                    </div>
                    <span className={score >= 80 ? "chip chip-good" : "chip chip-high"}>{score}%</span>
                  </div>
                  <p className="mt-3 text-sm text-aecode-muted">{program.type} · {program.state}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    {[
                      ["Plataforma", program.platform],
                      ["Classroom", program.classroom],
                      ["Miro", program.miro],
                      ["Zoom", program.zoom],
                      ["WSP", program.wsp],
                      ["Embajador", program.ambassador]
                    ].map(([label, value]) => (
                      <div className="rounded-md border border-aecode-violet/15 bg-aecode-bg/40 p-2" key={label}>
                        <p className="text-aecode-muted">{label}</p>
                        <p className="mt-1 font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-bold text-aecode-lavender">{program.risk}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-6 panel p-5" id="riesgos">
          <div className="grid gap-4 md:grid-cols-[1fr_260px] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Decision</p>
              <h2 className="mt-2 text-2xl font-black text-white">Prioridad de implementacion</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                El primer sprint debe cerrar accesos, soporte, videos y certificados. Son los flujos que mas afectan activacion, experiencia y recompra.
              </p>
            </div>
            <Image
              className="mx-auto max-h-[180px] w-auto object-contain"
              src={`${assetBasePath}/aecodito-home.png`}
              alt="Aecodito"
              width={180}
              height={180}
              priority
            />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {[
              ["Sprint 1", "Tickets + accesos + Zoom"],
              ["Sprint 2", "Drive -> Vimeo -> plataforma"],
              ["Sprint 3", "Embajadores + recordatorios"],
              ["Sprint 4", "Certificados + GHT + difusion"]
            ].map(([label, text]) => (
              <div className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={label}>
                <p className="text-xs font-black uppercase text-aecode-green">{label}</p>
                <p className="mt-2 font-bold text-white">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
