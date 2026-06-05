"use client";

import Image from "next/image";
import {
  AlertTriangle,
  Bot,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  Database,
  ExternalLink,
  Filter,
  GraduationCap,
  LayoutDashboard,
  Link2,
  ListChecks,
  Megaphone,
  LockKeyhole,
  MessageSquareText,
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
  aecodeDomains,
  activities,
  agents,
  areas,
  contentMetrics,
  cultureAntiValues,
  cultureClusters,
  cultureRituals,
  cultureValues,
  getPriorityWeight,
  getReadinessScore,
  linkAssets,
  linkMetrics,
  marketingProcesses,
  opsRoles,
  operatingBoundaries,
  opsSources,
  programs,
  sourceNotes,
  workflowStages,
  type Activity,
  type Priority
} from "@/data/opsData";
import {
  aecodeTeamMembers,
  personIdentityMap,
  resolvePersonName
} from "@/data/teamData";

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

const navGroups = [
  {
    id: "control",
    label: "Control",
    items: [
      { label: "Resumen", href: "#control", icon: LayoutDashboard },
      { label: "Cultura", href: "#cultura", icon: MessageSquareText },
      { label: "Actividades", href: "#actividades", icon: ListChecks },
      { label: "Roles", href: "#roles", icon: UserRoundCheck },
      { label: "Equipo anonimo", href: "#equipo-real", icon: Users },
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

function displayPerson(value: string) {
  return resolvePersonName(value);
}

export default function Page() {
  const [area, setArea] = useState("Todas");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos");
  const [role, setRole] = useState("Todos");
  const [openNav, setOpenNav] = useState<Record<string, boolean>>({
    control: true,
    areas: true,
    sistemas: true
  });

  const filtered = useMemo(() => {
    return activities
      .filter((item) => area === "Todas" || item.area === area)
      .filter((item) => status === "Todos" || item.status === status)
      .filter((item) => role === "Todos" || item.owner === role || item.backup === role)
      .filter((item) => `${item.id} ${item.area} ${item.activity} ${item.agent} ${item.owner} ${displayPerson(item.owner)} ${displayPerson(item.backup)}`.toLowerCase().includes(query.toLowerCase()))
      .sort(prioritySort);
  }, [area, query, role, status]);

  const criticalCount = activities.filter((item) => item.priority === "Critica").length;
  const riskCount = activities.filter((item) => item.status === "Riesgo").length;
  const automationCount = activities.filter((item) => item.automationLevel !== "Baja").length;
  const readyPrograms = programs.filter((program) => getReadinessScore(program) >= 80).length;
  const selectedRole = opsRoles.find((item) => item.id === role);
  const commercialRoles = opsRoles.filter((item) => item.areas.some((roleArea) => ["Comercial", "Finanzas"].includes(roleArea)));
  const productRoles = opsRoles.filter((item) => item.areas.some((roleArea) => ["Producto", "Plataforma", "Certificados"].includes(roleArea)));
  const highConfidenceTeam = aecodeTeamMembers.filter((member) => member.confidence === "Alta").length;

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
            Control interno AECODE: roles anonimos, postventa, soporte, producto, marketing, comercial, eventos, finanzas, datos y automatizacion.
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
          <p className="mt-2 text-sm leading-6 text-aecode-muted">No expone nombres reales, correos, credenciales ni URLs privadas completas. Opera con alias `Persona N`.</p>
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
            <Metric label="Links" value={String(linkAssets.length)} detail="Inventario seguro de enlaces extraidos del chat operativo." />
            <Metric label="Areas AECODE" value={String(aecodeDomains.length)} detail="Dominios de control desde direccion hasta finanzas y BI." tone="good" />
            <Metric label="Equipo anonimo" value={`${aecodeTeamMembers.length}/${highConfidenceTeam}`} detail="Personas mapeadas como alias; segundo numero indica roles con certeza alta." />
            <Metric label="Criticas" value={String(criticalCount)} detail="Accesos, videos y certificados tienen impacto directo en activacion." tone="risk" />
            <Metric label="En riesgo" value={String(riskCount)} detail="Requieren owner, SLA o evidencia para no generar reclamos." tone="risk" />
            <Metric label="Automatizables" value={`${automationCount}/${activities.length}`} detail="Candidatas para AgentFlow, GHL, WhatsApp, Drive o n8n." tone="good" />
            <Metric label="Programas listos" value={`${readyPrograms}/${programs.length}`} detail="Lectura de readiness por accesos, Zoom, WSP, Classroom y embajador." />
          </div>
        </section>

        <section className="mt-6 panel p-5" id="areas">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Mapa completo</p>
              <h2 className="mt-2 text-2xl font-black text-white">Areas, responsabilidades y riesgos</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Cada dominio tiene lead anonimo, roles de apoyo, responsabilidades, KPIs, cadencia y automatizacion candidata.
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
                  <p className="mt-2 text-sm leading-6 text-white">{domain.automation}</p>
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
              <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Equipo anonimizado AECODE</p>
              <h2 className="mt-2 text-2xl font-black text-white">Personas, rol claro, actividades y comunicacion</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-aecode-muted">
                Matriz interna extraida de fuentes operativas. Los responsables se muestran como `Persona N` y se conserva el nivel de certeza sin publicar nombres reales.
              </p>
            </div>
            <Users className="text-aecode-mint" size={30} />
          </div>

          <div className="grid gap-3 xl:grid-cols-2">
            {aecodeTeamMembers.map((member) => (
              <article className="panel p-4" key={member.name}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-aecode-muted">{member.squad}</p>
                    <h3 className="mt-1 text-xl font-black text-white">{member.name}</h3>
                    <p className="mt-1 text-sm font-bold text-aecode-mint">{member.role}</p>
                  </div>
                  <span className={`chip ${confidenceClass(member.confidence)}`}>Certeza {member.confidence}</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-aecode-muted">{member.focus}</p>

                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-lg border border-aecode-violet/15 bg-aecode-bg/40 p-3">
                    <p className="text-xs font-black uppercase text-aecode-green">Actividades</p>
                    <div className="mt-2 grid gap-2">
                      {member.activities.map((activity) => (
                        <p className="flex gap-2 text-sm leading-6 text-aecode-muted" key={activity}>
                          <CheckCircle2 className="mt-1 shrink-0 text-aecode-green" size={14} />
                          {activity}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-aecode-violet/15 bg-aecode-bg/40 p-3">
                    <p className="text-xs font-black uppercase text-aecode-green">Se comunica con</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.communicatesWith.map((person) => (
                        <span className="chip" key={person}>{person}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
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
                    <p className="text-xs font-black uppercase text-aecode-green">Fuente</p>
                    <p className="mt-2 text-sm leading-6 text-aecode-muted">{member.source}</p>
                    <p className="mt-2 text-xs font-bold text-aecode-lavender">{member.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="panel p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-aecode-green">Equivalencia operativa</p>
            <h3 className="mt-2 text-xl font-black text-white">Alias operativo y nivel de certeza</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(personIdentityMap).map(([personaId, identity]) => (
                <div className="rounded-lg border border-aecode-violet/20 bg-aecode-card/40 p-3" key={personaId}>
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
                Se integran campanas, Summit, difusion, clips, automatizacion y contenido organico con responsables anonimos y evidencia operativa.
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
                <p className="mt-2 text-xs font-bold text-aecode-lavender">{process.automation}</p>
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
                  <span className="chip chip-good">{displayPerson(stage.owner)}</span>
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
