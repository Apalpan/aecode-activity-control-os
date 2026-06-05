# AECODE Activity Control OS

Tablero maestro para estructurar, priorizar y automatizar actividades de todo AECODE.

## Objetivo

Convertir actividades dispersas de direccion, postventa, accesos, soporte, plataforma, videos, difusion, embajadores, marketing, comercial, eventos, producto, tecnologia, BIM, finanzas, datos y certificados en un sistema operativo con:

- actividades anonimizadas por `Persona 1`, `Persona 2`, etc.
- automatizaciones candidatas por `Agente #1`, `Agente #2`, etc.
- KPIs de decision.
- riesgos y bloqueos.
- detalle por flujo.
- inventario seguro de links internos y activos fuente.
- mapa de roles anonimos con responsabilidades, KPIs, backup y chequeo diario.
- flujo operativo por sesion/cohorte, campanas, eventos, producto y control administrativo.
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
- Actividades enviadas por equipo tecnico y soporte BIM, anonimizadas como `Persona 23` y `Persona 24`.
- Actividades de alianzas/sponsors/reuniones y QA/testing/data, anonimizadas como `Persona 25` y `Persona 26`.
- Actividades UX/UI, branding, web experience y handoff, anonimizadas como `Persona 16`.
- Design system AECODE del archivo `DESIGN-AECODE.zip`.

Por seguridad, el repositorio no expone nombres personales, emails, links de WhatsApp, links de Zoom ni URLs privadas. La app usa estados, conteos, roles anonimizados y referencias de fuente.

## Links internos

El tablero incluye un apartado `Links e informacion interna` con 34 activos detectados en el chat operativo, Google Sheets y Notion:

- Google Sheets.
- Miro boards.
- Notion.
- Drive.
- YouTube.
- Zoom.
- Web externa.

La version publica muestra metadata segura: tipo, dominio, uso operativo, owner anonimo, agente, riesgo y siguiente accion. Las URLs completas quedan solo en el archivo local no versionado `outputs/internal_links_private.csv`.

Tambien incluye la pestana `ENLACES GRUPOS WHATSAPP` del Sheet academico como fuente critica para gobernar grupos de coordinacion, participantes e instructores.

## UX operativo

La pantalla esta organizada para que cualquier miembro del equipo pueda responder:

- Que tengo que revisar hoy.
- Cual es mi rol y backup.
- Que actividades son mias.
- Que evidencia debo dejar.
- Que agente puede automatizar parte del trabajo.
- Donde vive la fuente en Obsidian, Sheet o Notion.

Las fuentes Obsidian reales se usan para estructurar el sistema, pero la version publica conserva roles anonimos `Persona N`.

## Control total AECODE

El tablero ya no esta limitado a coordinacion academica. Incluye 13 dominios operativos:

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

Cada dominio define lead anonimo, roles de apoyo, responsabilidades, KPIs, cadencias, riesgos y agente candidato.

La capa tecnica incluye arquitectura, stack, DB/migraciones, APIs, auth/RBAC, frontends, infra, IA y delivery end-to-end. La capa BIM incluye modelos, planos, plantillas, familias, scripts, PPTs y Miros como activos academicos reutilizables. La capa UX/UI estructura investigacion, flujos, interfaces, branding, formularios, assets web y handoff para desarrollo antes de prototipar.

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

## Estructura

```txt
app/              UI Next.js
data/             modelo operativo anonimizado
docs/             playbooks y especificacion
templates/        CSVs importables: actividades, roles, dominios, cultura, procesos, links y agentes
public/           assets AECODE
outputs/          archivos privados locales no versionados
```

## Siguiente integracion

1. Conectar Google Sheets por backend seguro.
2. Crear `activity_id`, `program_id`, `cohort_id`, `agent_id` y `person_id`.
3. Sincronizar tickets, videos, accesos, certificados y embajadores.
4. Conectar marketing/comercial para medir CPL, lead quality, conversion y revenue.
5. Emitir reporte semanal automatico para direccion.
