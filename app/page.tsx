"use client";

import Image from "next/image";
import {
  AlertTriangle,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  ExternalLink,
  Filter,
  GraduationCap,
  Link2,
  ListChecks,
  LockKeyhole,
  PlaySquare,
  Route,
  Search,
  ShieldCheck,
  UserRoundCheck,
  Users,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  activities,
  agents,
  areas,
  contentMetrics,
  getPriorityWeight,
  getReadinessScore,
  linkAssets,
  linkMetrics,
  opsRoles,
  opsSources,
  programs,
  sourceNotes,
  workflowStages,
  type Activity,
  type Priority
} from "@/data/opsData";

const priorityClass: Record<Priority, string> = {
  Critica: "chip-critical",
  Alta: "chip-high",
  Media: "",
  Baja: "chip-good"
};

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

export default function Page() {
  const [area, setArea] = useState("Todas");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos");
  const [role, setRole] = useState("Todos");

  const filtered = useMemo(() => {
    return activities
      .filter((item) => area === "Todas" || item.area === area)
      .filter((item) => status === "Todos" || item.status === status)
      .filter((item) => role === "Todos" || item.owner === role || item.backup === role)
      .filter((item) => `${item.id} ${item.area} ${item.activity} ${item.agent} ${item.owner}`.toLowerCase().includes(query.toLowerCase()))
      .sort(prioritySort);
  }, [area, query, role, status]);

  const criticalCount = activities.filter((item) => item.priority === "Critica").length;
  const riskCount = activities.filter((item) => item.status === "Riesgo").length;
  const automationCount = activities.filter((item) => item.automationLevel !== "Baja").length;
  const readyPrograms = programs.filter((program) => getReadinessScore(program) >= 80).length;
  const selectedRole = opsRoles.find((item) => item.id === role);

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
            Operacion academica, postventa, soporte, plataforma, contenido, difusion y certificados.
          </p>
        </div>

        <nav className="mt-8 grid gap-2">
          {[
            ["Actividades", ListChecks],
            ["Roles", UserRoundCheck],
            ["Flujo", Route],
            ["Agentes", Bot],
            ["Links", Link2],
            ["Programas", GraduationCap],
            ["Datos", Database],
            ["Riesgos", AlertTriangle]
          ].map(([label, Icon]) => (
            <a
              key={label as string}
              className="flex min-h-10 items-center gap-3 rounded-lg border border-aecode-violet/10 px-3 text-sm font-bold text-aecode-muted transition hover:border-aecode-violet/40 hover:bg-aecode-card/50 hover:text-white"
              href={`#${String(label).toLowerCase()}`}
            >
              <Icon size={17} />
              {label as string}
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-4">
          <p className="text-sm font-black text-aecode-mint">Regla de publicacion</p>
          <p className="mt-2 text-sm leading-6 text-aecode-muted">Sin nombres, sin links privados, sin PII. Solo roles anonimos, estados y decision operativa.</p>
        </div>
      </aside>

      <main className="main">
        <section className="grid gap-4" id="actividades">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-aecode-green">Operacion AECODE</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl" style={{ lineHeight: 1.2 }}>
                Control, SLA y automatizacion
              </h2>
            </div>
            <div className="flex gap-2">
              <a className="chip chip-good" href="#agentes">
                <Bot size={14} />
                <span className="ml-2">10 agentes</span>
              </a>
              <a className="chip" href="#programas">
                <ExternalLink size={14} />
                <span className="ml-2">fuente Sheet</span>
              </a>
            </div>
          </div>

          <div className="metric-grid">
            <Metric label="Actividades" value={String(activities.length)} detail="Actividades completas normalizadas desde el pedido, Sheet y adjuntos." />
            <Metric label="Links" value={String(linkAssets.length)} detail="Inventario seguro de enlaces extraidos del chat operativo." />
            <Metric label="Criticas" value={String(criticalCount)} detail="Accesos, videos y certificados tienen impacto directo en activacion." tone="risk" />
            <Metric label="En riesgo" value={String(riskCount)} detail="Requieren owner, SLA o evidencia para no generar reclamos." tone="risk" />
            <Metric label="Automatizables" value={`${automationCount}/${activities.length}`} detail="Candidatas para AgentFlow, GHL, WhatsApp, Drive o n8n." tone="good" />
            <Metric label="Programas listos" value={`${readyPrograms}/${programs.length}`} detail="Lectura de readiness por accesos, Zoom, WSP, Classroom y embajador." />
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
                    {item}
                  </button>
                ))}
              </div>
              {selectedRole ? (
                <div className="mt-4 rounded-lg border border-aecode-green/20 bg-aecode-green/10 p-4">
                  <p className="text-sm font-black text-aecode-mint">{selectedRole.role}</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">{selectedRole.dailyCheck}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">Backup: {selectedRole.backup}</p>
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
                <p className="mt-3 text-sm leading-6 text-aecode-muted">Owner: {item.owner} / Backup: {item.backup}</p>
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
                      <p className="font-bold text-white">{item.owner}</p>
                      <p className="text-xs text-aecode-muted">Backup: {item.backup}</p>
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
                Estructura anonima basada en la carpeta Obsidian de actividades del equipo. Cada rol muestra mision, areas, KPIs y criterio de escalamiento.
              </p>
            </div>
            <UserRoundCheck className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {opsRoles.map((item) => (
              <article className="panel p-4" key={item.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{item.id}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{item.role}</h3>
                  </div>
                  <span className="chip chip-good">{item.backup}</span>
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

        <section className="mt-6 panel p-5" id="flujo">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Sistema de trabajo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Flujo operativo por sesion y cohorte</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                El equipo no deberia pensar por archivos sueltos. Debe operar por etapa, owner, evidencia y automatizacion.
              </p>
            </div>
            <CalendarDays className="text-aecode-mint" size={30} />
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-3">
            {workflowStages.map((stage) => (
              <article className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-4" key={stage.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-aecode-muted">{stage.id} / {stage.timing}</p>
                    <h3 className="mt-1 text-lg font-black text-white">{stage.label}</h3>
                  </div>
                  <span className="chip chip-good">{stage.owner}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-aecode-muted">{stage.objective}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stage.activities.map((activity) => (
                    <span className="chip" key={activity}>{activity}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white">Evidencia: {stage.evidence}</p>
                <p className="mt-2 text-xs font-bold text-aecode-lavender">{stage.automation}</p>
              </article>
            ))}
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
                      <p className="mt-2 text-xs text-aecode-muted">{item.owner} / {item.agent}</p>
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
                  <p className="mt-3 font-black text-white">{agent.mission}</p>
                  <p className="mt-2 text-sm leading-6 text-aecode-muted">Input: {agent.input}</p>
                  <p className="text-sm leading-6 text-aecode-muted">Output: {agent.output}</p>
                  <p className="mt-2 text-xs font-bold text-aecode-lavender">{agent.humanControl}</p>
                </article>
              ))}
            </div>
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
                  {note}
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
          </aside>
        </section>

        <section className="mt-6 panel p-5" id="programas">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Readiness</p>
              <h2 className="mt-2 text-2xl font-black text-white">Estado operativo por programa anonimizado</h2>
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
