# Fuentes y Extraccion

## Google Sheet

Fuente interna solicitada por el usuario. El link original no se publica en este repositorio.

El conector pudo leer la fuente como:

`AECODE | AREA ACADEMICA | STATUS GENERAL.xlsx`

Informacion extraida y normalizada:

- resumen de transcripciones por diplomado/especializacion;
- resumen de videos subidos a plataforma;
- matriz de accesos: plataforma, Classroom, Miro, Zoom, grupos WSP, inasistencias y embajador;
- registro de videos por programa y sesion;
- drive/Miro por programa historico;
- BD de grupos WSP por tipo;
- base de consultas frecuentes por WhatsApp;
- mapeo de embajadores;
- checklist de actividades del embajador antes, durante y despues de sesion;
- catalogo academico base.
- pestana `ENLACES GRUPOS WHATSAPP`: programas, subgrupos de coordinacion, subgrupos de participantes, instructores y enlaces pendientes.

## Adjuntos

- `Texto pegado.txt` 1: documentacion y estructuracion de procesos, instructores, embajadores, tutoria, retencion, certificados, cursos y action items.
- `Texto pegado.txt` 2: arquitectura operativa, automatizaciones postventa, onboarding, ciclo academico, roles, reportes, cursos, Sheets y chatbot.
- `DESIGN-AECODE.zip`: design system, logos y referencias visuales.
- `_chat.txt`: chat operativo usado para detectar 32 links unicos y convertirlos en inventario seguro.
- Notion `AECODE Training`: link adicional compartido por el usuario; el fetch directo no tuvo acceso, pero la busqueda interna encontro una base relacionada con frecuencia, estado y semanas.

## Normalizacion

Para publicar el tablero en GitHub se aplico anonimizacion:

- nombres personales -> `Persona N`;
- automatizaciones -> `Agente #N`;
- enlaces privados -> `link_presente`, `link_faltante`, `requiere_backend`;
- propietarios reales -> roles operativos anonimizados.

## Inventario de links

Se detectaron 34 activos enlazados:

- 15 Miro boards.
- 11 Google Sheets o pestanas criticas.
- 4 Notion.
- 1 Drive.
- 1 YouTube.
- 1 Zoom.
- 1 web externa.

La pestana `ENLACES GRUPOS WHATSAPP` contiene 7 programas mapeados, 14 subgrupos de programa y registros de instructores. Por seguridad no se publican URLs, nombres ni invitaciones completas.

El repo publica solo metadata segura. Las URLs completas se guardan localmente en `outputs/internal_links_private.csv`, carpeta excluida de Git.
