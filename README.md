# AECODE Activity Control OS

Tablero maestro para estructurar, priorizar y automatizar actividades de todo AECODE.

## Objetivo

Convertir actividades dispersas de direccion, postventa, accesos, soporte, plataforma, videos, difusion, embajadores, marketing, comercial, eventos, producto, finanzas, datos y certificados en un sistema operativo con:

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

El tablero ya no esta limitado a coordinacion academica. Incluye 8 dominios operativos:

1. Direccion y sistema operativo.
2. Operacion academica y postventa.
3. Plataforma, contenido y learning experience.
4. Marketing, growth y distribucion.
5. Comercial y revenue.
6. Eventos, alianzas y autoridad.
7. Datos, BI y gobernanza.
8. Finanzas, documentacion y compliance operativo.

Cada dominio define lead anonimo, roles de apoyo, responsabilidades, KPIs, cadencias, riesgos y agente candidato.

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
