# AECODE Activity Control OS

Tablero maestro interno para estructurar, priorizar y automatizar actividades de todo AECODE con nombres reales del equipo.

## Objetivo

Convertir actividades dispersas de direccion, postventa, accesos, soporte, plataforma, videos, difusion, embajadores, marketing, comercial, eventos, producto, tecnologia, BIM, finanzas, datos y certificados en un sistema operativo con:

- actividades con responsable real cuando existe certeza desde Obsidian.
- trazabilidad `Persona 1`, `Persona 2`, etc. cuando el owner fue asumido o necesita confirmacion.
- automatizaciones candidatas por `Agente #1`, `Agente #2`, etc.
- KPIs de decision.
- riesgos y bloqueos.
- detalle por flujo.
- inventario seguro de links internos y activos fuente.
- mapa de alias operativos con responsabilidades, KPIs, backup, comunicacion y chequeo diario.
- playbooks interactivos para postventa/accesos, sesiones, grabaciones, certificados, growth/ventas, eventos/sponsors y producto-dev-QA.
- panel izquierdo vertical con grupos desplegables para control, areas AECODE y sistemas.
- plantillas CSV para importar a Sheets, Airtable, Notion o backend.

## Fuentes

- Google Sheet: `AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx`.
- Actividades pegadas por Alejandro.
- Textos pegados sobre coordinacion academica, postventa, retencion, certificacion y arquitectura operativa.
- HTML local `aecode-equipo-marketing.html` normalizado como procesos de marketing, Summit, difusion, clips, web, ventas y automatizacion.
- Carpeta Obsidian `09_Actividades Diarias/Actividades_TEAM`.
- Nota Obsidian `02_EMPRESAS/AECODE/Cultura-AECODE.md` convertida en reglas operativas, rituales, valores y antivalores.
- Nota Obsidian `02_EMPRESAS/GEN+/Cultura-GEN+.md` usada como frontera para enrutar consultoria, proyectos cliente, ingenieria aplicada y productos GEN+ fuera del tablero AECODE.
- Actividades enviadas por Anderson y Kevin integradas como tecnologia, arquitectura y soporte BIM.
- Actividades de Paola y Jordi integradas como alianzas/sponsors/reuniones y QA/testing/data.
- Actividades de Yary integradas como UX/UI, branding, web experience y handoff.
- Actividades de Jessica integradas como revision de ventas/GHL para optimizar marketing, copys, oferta y calidad de leads.
- Actividades de Talia integradas como cierre comercial: llamadas a leads calientes, audios, seguimiento orientado al cierre, copys, brochures, seguimiento masivo y entrenamiento de ventas.
- Actividades recurrentes de Julie integradas como GEN+ proyectos, comercial, administracion/facturacion, cobranza, pago a instructores, AECODE Training, sponsors, legal/experiencia, startup y THESIA.
- Analisis de Daniella 2026 integrado como operaciones estrategicas GEN+ / AECODE: PMO transversal, AECODE Training, Summit/partners, comercial tecnico, documentacion, sistemas de seguimiento y THESIA/startup.
- Chat operativo `WhatsApp Chat - Gen+ Fabrizio` usado de forma sintetica para mapear producto AECODE F3/3.0, automatizacion marketing, dashboards de metricas, AgentFlow, Summit y propuestas/cotizaciones tecnicas. No se publica contenido privado ni links completos.
- Prompt pegado sobre escalamiento interactivo usado parcialmente: se ejecuto persistencia local/exportacion/importacion y chequeo de privacidad; no se aplico anonimato total porque la instruccion vigente pide nombres reales.
- Lista completa de `09_Actividades Diarias/Actividades_TEAM` integrada: 35 personas consideradas, 25 asientos nucleo y 10 perfiles en red extendida para cumplir el limite operativo solicitado.
- PDF de actividades de tecnologia/automatizacion integrado como `Persona 27`: n8n, integraciones, agentes IA, dashboards, data, ML, deploy, documentacion, capacitacion IA y soporte comercial/postventa.
- Actividades de programas activos, Summit, postventa, marketing, B2B y comunicaciones HTML integradas como `Persona 28` hasta confirmar nombre.
- Fuentes Notion AECODE relacionadas con AI Ops, producto digital, AECODE 2.0/3.0, AECODITOS y seguimiento dev, integradas dentro de `Persona 27`.
- PDF `Dashboard_Operativo_AP_GEN+_AECODE.pdf` integrado como capa ejecutiva AP: empresas, proyectos criticos, flywheel, campos minimos, metricas, 15 vistas requeridas y reglas de operacion.
- Design system AECODE del archivo `DESIGN-AECODE.zip`.

Esta version es interna: muestra nombres reales del equipo, pero no expone emails, credenciales, links de WhatsApp, links de Zoom ni URLs privadas completas.

## Links internos

El tablero incluye un apartado `Links e informacion interna` con 34 activos detectados en el chat operativo, Google Sheets y Notion:

- Google Sheets.
- Miro boards.
- Notion.
- Drive.
- YouTube.
- Zoom.
- Web externa.

La app muestra metadata segura de links: tipo, dominio, uso operativo, owner, agente, riesgo y siguiente accion. Las URLs completas quedan solo en el archivo local no versionado `outputs/internal_links_private.csv`.

Tambien incluye la pestana `ENLACES GRUPOS WHATSAPP` del Sheet academico como fuente critica para gobernar grupos de coordinacion, participantes e instructores.

## UX operativo

La pantalla esta organizada para que cualquier miembro del equipo pueda responder:

- Que tengo que revisar hoy.
- Cual es mi rol y backup.
- Que actividades son mias.
- Que evidencia debo dejar.
- Que agente puede automatizar parte del trabajo.
- Donde vive la fuente en Obsidian, Sheet o Notion.

Las fuentes Obsidian reales se usan para estructurar el sistema. La UI muestra nombres reales y conserva `Persona N` como respaldo cuando el mapeo es asumido.

## Playbooks operativos

La seccion `Playbooks operativos interactivos` convierte los flujos tipicos en rutas clickeables con:

- trigger, objetivo, lead, ciclo, KPI y agente candidato;
- pasos con owner, equipo de apoyo, entrada, accion, salida, evidencia, sistemas, estado y riesgo;
- handoffs entre responsables;
- reglas de escalamiento;
- definicion de terminado.

Playbooks incluidos:

1. Postventa y acceso de estudiante.
2. Sesion en vivo y soporte academico.
3. Grabacion, edicion y publicacion.
4. Evidencia, rubrica y certificados.
5. Campana, GHL y cierre comercial.
6. Evento, sponsors y aliados.
7. Producto, UX, dev y QA release.

Templates nuevos:

- `templates/workflow_playbooks.csv`
- `templates/workflow_playbook_steps.csv`

## Prompt X5 de mejora

El prompt maestro para escalar este tablero como sistema interactivo, funcional y operable por el equipo esta en:

- `docs/PROMPT_X5_ACTIVITY_CONTROL_OS.md`

Ese prompt define el siguiente salto del producto: centro de ejecucion diario, playbooks ejecutables, filtros avanzados, capa AgentFlow, contratos de datos, seguridad, QA visual y roadmap 7/30/90 dias.

## Iteracion X5 ejecutada

La app ya incorpora la primera ejecucion del prompt X5:

- `Hoy / Centro de ejecucion`: vista diaria con filtros por persona, estado y playbook; muestra bloqueos, decisiones para Alejandro, evidencias faltantes, carga por persona, agente sugerido y siguiente mejor accion.
- Playbooks x5: cada flujo puede verse como checklist, kanban, timeline, RACI o log simulado, manteniendo owner, equipo, evidencia, SLA, riesgo y handoff.
- `AgentFlow AECODE`: contratos auditables para soporte/accesos, inscritos, Zoom, Drive-Vimeo-plataforma, certificados, recordatorios, GHL/leads, sponsors/reuniones, QA/release y dashboard ejecutivo semanal.
- Modelo backend-ready: entidades `person_id`, `role_id`, `activity_id`, `playbook_id`, `step_id`, `agent_id`, `system_id`, `evidence_id`, `escalation_id`, `source_id` y `status_log_id`.
- Roles actualizados: Alejandro ve globalmente todo; Anggie lidera marketing/growth; Erika es Business Development and Partnership Coordinator; Fabrizio conecta producto, automatizacion marketing e ingenieria; Daniella opera transversalmente; Julie cubre operaciones, instructora, administracion, metricas y finanzas; Paola complementa al equipo de Erika; Ivana, Patrick y Carolina concentran coordinacion academica; Anderson es el full-stack senior; Marlon lidera automatizacion, dev web e integraciones.

Templates nuevos:

- `templates/daily_execution_items.csv`
- `templates/agentflow_contracts.csv`
- `templates/backend_entity_contracts.csv`
- `templates/strategic_role_profiles.csv`

Roadmap:

- `docs/ROADMAP_X5.md`

## Iteracion operativa editable

La seccion `Hoy / Centro de ejecucion` ahora funciona como piloto diario sin backend:

- permite editar estado, fecha/SLA, siguiente accion, evidencia y decision por item;
- recalcula KPIs y carga por persona con los cambios locales;
- guarda en `localStorage` del navegador;
- exporta/importa un JSON de estado para compartir cortes operativos;
- mantiene la base versionada del repo intacta y reiniciable.

Tambien se agrego `Perfiles operativos criticos`, una lectura ejecutiva de Julie, Daniella, Fabrizio y Erika con frentes, actividades, sistemas, handoffs, metricas, riesgos y siguientes acciones de sistema.

## Iteracion Erika / Sponsors / BD

La version actual incorpora la informacion de Erika del 2026-06-02 y el prompt ejecutivo recibido:

- Erika queda como owner de `Business Development + Sponsor Partnership Ops`.
- Se agregan actividades `ACT-125` a `ACT-133` para cotizaciones, convenios, sponsors pendientes, flyer oficial, agenda de reuniones, LinkedIn, llamadas, BD de asistentes, aliados estrategicos y sistema ejecutivo diario.
- Se agrega `DAY-016` como foco diario de sponsors, aliados y reuniones de manana.
- `PB-06` ahora modela el flujo completo: mapeo, reunion, cotizacion, onboarding, evento y seguimiento ejecutivo.
- `Agente #37` queda como Chief of Staff digital para Erika: Top 3 diario, plan vs ejecutado, riesgos, oportunidades y recomendaciones de foco.
- `AF-011` deja preparado el contrato AgentFlow para conectar Notion, Sheets, Calendar, CRM futuro y reportes sin publicar datos personales sensibles.

## Iteracion Personas x3

La ultima version reorganiza la experiencia alrededor de personas:

- `Personas / Roles / Actividades` queda como apartado principal.
- Buscador global superior por nombre, rol, area o actividad.
- Filtros por persona, area, empresa, rol, prioridad, tipo, carga y estado.
- Ficha enfocada por persona con tabs: `Ficha`, `Hoy`, `Actividades`, `Comunicacion` y `Crecimiento`.
- Vista `Mi foco de hoy` por persona, conectada con el centro diario.
- Mapa de comunicacion por persona usando conexiones reales del equipo.
- Enfoque de crecimiento por operacion, ventas, marketing, producto, soporte, formacion, automatizacion, finanzas, alianzas, eventos y tecnologia.
- Las metricas grandes del sistema pasan a un panel desplegable para reducir carga visual inicial.

## Equipo nucleo y red extendida

El equipo no se modela como una lista plana. La regla actual es:

- maximo 25 personas con asiento nucleo;
- toda persona con rol activo debe tener ownership, cadencia, handoff, fuente y riesgo;
- personas sin reporte detallado, apoyo puntual o rol por confirmar se mantienen como red extendida;
- los alias `Persona N` se normalizan a nombres reales cuando existe evidencia suficiente;
- las conexiones entre personas se muestran por dominio: postventa, growth/ventas, producto/dev, Summit, sponsors/BD, GEN+ BIM y administracion.

Personas consideradas desde Obsidian:

- Nucleo 25: Alejandro Palpan, Patrick, Ivana, Carolina, Anggie, Arantxa, Jessica, Talia, Yadira, Reiner, Yary, Anderson, Fabrizio, Yudely, Jordi, Paola, Daniella, Erika, Julie, Kevin, Israel, Robert Herrera, Emanuel, Marlon y Paolo.
- Red extendida 10: Alex Anchayhua, Ana, Edith, Enma, Fernando, Genesis, Guisella, Luis Vergara, Moises y Sebastian.

Templates nuevos:

- `templates/team_core_25.csv`
- `templates/team_extended_network.csv`
- `templates/team_connections.csv`

## Control total AECODE

El tablero ya no esta limitado a coordinacion academica. Incluye 15 dominios operativos:

1. Direccion y sistema operativo.
2. Operacion academica y postventa.
3. Plataforma, contenido y learning experience.
4. Marketing, growth y distribucion.
5. Comercial y revenue.
6. Eventos, alianzas y autoridad.
7. Datos, BI y gobernanza.
8. Finanzas, documentacion y compliance operativo.
9. Tecnologia, arquitectura y product engineering.
10. Activos BIM academicos.
11. Alianzas, sponsors y reuniones.
12. QA, testing y validacion de data.
13. UX/UI, branding y web experience.
14. Producto digital, AI Ops y automatizacion.
15. Programas activos, Summit y comunicaciones.

Cada dominio define lead real, roles de apoyo, responsabilidades, KPIs, cadencias, riesgos y agente candidato.

La capa tecnica incluye arquitectura, stack, DB/migraciones, APIs, auth/RBAC, frontends, infra, IA y delivery end-to-end. La capa BIM incluye modelos, planos, plantillas, familias, scripts, PPTs y Miros como activos academicos reutilizables. La capa UX/UI estructura investigacion, flujos, interfaces, branding, formularios, assets web y handoff para desarrollo antes de prototipar. La capa AI Ops/producto digital conecta n8n, integraciones, AECODITOS, agentes IA, dashboards, scrapers, data, ML, deploys, specs, capacitacion IA, roadmap AECODE 2.0/3.0, seguimiento dev, flujos criticos y eficiencia operativa. La capa programas/Summit coordina sesiones, actas, Notion, docentes, postventa, sponsors, ponentes, marketing, B2B y comunicaciones HTML.

La capa comercial ahora separa cierre real de feedback general: Talia opera llamadas a leads calientes, audios, seguimiento orientado al cierre, copys optimizados desde objeciones, brochures completos, seguimiento masivo con Reiner, entrenamiento de Yadira y reuniones de mejora con el equipo. Jessica queda como revision de GHL/ventas para optimizar marketing y calidad de leads.

## Capa ejecutiva AP

El tablero incorpora una capa superior del ecosistema:

- empresas: GEN+, AECODE, THESIA, SP+/VisionPro y Ecosistema AP;
- proyectos criticos: AECODE 3.0, VisionPro, AgentFlow, ICEBOT, Summit, Qawari AI, UTEC 2026, THESIA IP y cotizacion ESPARQ SaaS;
- flywheel AP: Comunidad -> Educacion -> Producto -> Autoridad -> Data -> IA -> Escala;
- campos minimos por actividad para migrar a base de datos;
- reglas de operacion diaria, cierre semanal, escalamiento y calidad de dato;
- 15 vistas objetivo para convertir el tablero en centro de mando completo.

## Frontera AECODE / GEN+

El tablero incorpora una regla de ruteo:

- AECODE: aprendizaje, comunidad, cursos, skill verification, evidencias, certificacion, plataforma educativa y marketing/ventas de programas AECODE.
- GEN+: consultoria, proyectos cliente, ingenieria aplicada, BIM/VDC para clientes, automatizacion empresarial, Visor BIM, ICEBOT, BIM Store y otros productos GEN+.
- Compartido: know-how GEN+ que se anonimiza y empaqueta como recurso educativo AECODE.

Marketing debe revisar GHL para entender como vende el equipo comercial: conversaciones, scripts, objeciones, tiempos de respuesta, lead quality y conversion por fuente.

## Cultura operativa

La cultura AECODE se incorpora como capa de ejecucion diaria:

- presencia y foco;
- comunicacion y trazabilidad;
- ejecucion y cierre;
- alineacion al negocio y al rol;
- conocimiento, aprendizaje y comunidad;
- documentacion, sintesis y presentacion.

La UI muestra rituales, evidencia esperada, valores y antivalores para que el equipo opere con el mismo estandar.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Validar

```bash
npm run typecheck
npm run build
```

## Deploy

GitHub Pages:

`https://apalpan.github.io/aecode-activity-control-os/`

Nota de seguridad: el deploy publico es util como demo de estructura, pero este tablero contiene nombres reales y operacion interna. Para uso real del equipo, usar repo privado, autenticacion o version publica sanitizada.

## Estructura

```txt
app/              UI Next.js
data/             modelo operativo interno y matriz real de equipo
docs/             playbooks y especificacion
templates/        CSVs importables: actividades, roles, equipo, conexiones, playbooks, dominios, cultura, procesos, links y agentes
public/           assets AECODE
outputs/          archivos privados locales no versionados
```

## Siguiente integracion

1. Conectar Google Sheets por backend seguro.
2. Crear `activity_id`, `program_id`, `cohort_id`, `agent_id` y `person_id`.
3. Sincronizar tickets, videos, accesos, certificados y embajadores.
4. Conectar marketing/comercial para medir CPL, lead quality, conversion y revenue.
5. Emitir reporte semanal automatico para direccion.
