# AECODE Activity Control OS

Tablero maestro para estructurar, priorizar y automatizar actividades de operacion academica AECODE.

## Objetivo

Convertir actividades dispersas de postventa, accesos, soporte, plataforma, videos, difusion, embajadores, Zoom, Classroom y certificados en un sistema operativo con:

- actividades anonimizadas por `Persona 1`, `Persona 2`, etc.
- automatizaciones candidatas por `Agente #1`, `Agente #2`, etc.
- KPIs de decision.
- riesgos y bloqueos.
- detalle por flujo.
- inventario seguro de links internos y activos fuente.
- mapa de roles anonimos con responsabilidades, KPIs, backup y chequeo diario.
- flujo operativo por sesion/cohorte: onboarding, preparacion 72h, sesion, contenido, calidad y difusion.
- plantillas CSV para importar a Sheets, Airtable, Notion o backend.

## Fuentes

- Google Sheet: `AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx`.
- Actividades pegadas por Alejandro.
- Textos pegados sobre coordinacion academica, postventa, retencion, certificacion y arquitectura operativa.
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
templates/        CSVs importables
public/           assets AECODE
outputs/          archivos privados locales no versionados
```

## Siguiente integracion

1. Conectar Google Sheets por backend seguro.
2. Crear `activity_id`, `program_id`, `cohort_id`, `agent_id` y `person_id`.
3. Sincronizar tickets, videos, accesos, certificados y embajadores.
4. Emitir reporte semanal automatico para direccion.
