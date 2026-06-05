# AECODE Activity Control OS

Tablero maestro para estructurar, priorizar y automatizar actividades de operacion academica AECODE.

## Objetivo

Convertir actividades dispersas de postventa, accesos, soporte, plataforma, videos, difusion, embajadores, Zoom, Classroom y certificados en un sistema operativo con:

- actividades anonimizadas por `Persona 1`, `Persona 2`, etc.
- automatizaciones candidatas por `Agente #1`, `Agente #2`, etc.
- KPIs de decision.
- riesgos y bloqueos.
- detalle por flujo.
- plantillas CSV para importar a Sheets, Airtable, Notion o backend.

## Fuentes

- Google Sheet: `AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx`.
- Actividades pegadas por Alejandro.
- Textos pegados sobre coordinacion academica, postventa, retencion, certificacion y arquitectura operativa.
- Design system AECODE del archivo `DESIGN-AECODE.zip`.

Por seguridad, el repositorio no expone nombres personales, emails, links de WhatsApp, links de Zoom ni URLs privadas. La app usa estados, conteos, roles anonimizados y referencias de fuente.

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
```

## Siguiente integracion

1. Conectar Google Sheets por backend seguro.
2. Crear `activity_id`, `program_id`, `cohort_id`, `agent_id` y `person_id`.
3. Sincronizar tickets, videos, accesos, certificados y embajadores.
4. Emitir reporte semanal automatico para direccion.
