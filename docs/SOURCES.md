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
- PDF interno de actividades tecnologia/automatizacion: usado para mapear n8n, integraciones, agentes IA, dashboards, data, ML, deploy, documentacion, capacitacion IA, soporte comercial/postventa y frontera GEN+.
- Actividades pegadas de programas/Summit: usadas para mapear programas activos, actas, flujos Notion, docentes, postventa, automatizaciones, sponsors, ponentes, marketing, B2B y comunicaciones HTML.
- Actividades pegadas de cierre comercial: llamadas a leads calientes, audios, seguimiento orientado al cierre, optimizacion de copys, brochures completos, seguimiento masivo, entrenamiento de ventas y reuniones de mejora. Alejandro corrigio que este bloque lo hace Talia.
- `Dashboard_Operativo_AP_GEN+_AECODE.pdf`: usado para agregar capa ejecutiva AP, empresas del ecosistema, proyectos criticos, flywheel, campos minimos, metricas, 15 vistas, reglas de operacion y criterios UX/UI.
- Carpeta Obsidian `09_Actividades Diarias/Actividades_TEAM`: usada para validar la lista completa de personas del equipo. Se consideraron 35 fichas: 34 nombres compartidos por Alejandro y `Yudely`, detectada en el vault. El tablero limita el nucleo a 25 personas y conserva 10 como red extendida.

## Normalizacion

Esta version es interna. La normalizacion actual aplica:

- nombres personales reales cuando hay evidencia suficiente;
- `Persona N` cuando el responsable fue asumido o falta confirmacion;
- automatizaciones -> `Agente #N`;
- enlaces privados -> `link_presente`, `link_faltante`, `requiere_backend`;
- propietarios reales -> roles operativos con trazabilidad.
- capacidad de equipo -> 25 asientos nucleo maximo y red extendida para apoyos puntuales o roles sin reporte detallado.

## Equipo y capacidad

Fichas con reporte o rol detallado usadas para el nucleo: Patrick, Ivana, Carolina, Anggie, Arantxa, Daniella, Erika, Fabrizio, Jessica, Kevin, Paola, Robert Herrera, Yary, Yudely e Israel. Tambien se integraron actividades enviadas directamente por Alejandro para Anderson, Jordi, Paola, Yary y Talia.

Fichas conservadas como red extendida por apoyo puntual o menor detalle operativo: Alex Anchayhua, Ana, Edith, Enma, Fernando, Genesis, Guisella, Luis Vergara, Moises y Sebastian. Talia, Yadira y Reiner pasan al nucleo por instrucciones directas de Alejandro aunque sus notas Obsidian aun no tienen detalle.

La fuente operativa exportable queda en:

- `templates/team_core_25.csv`
- `templates/team_extended_network.csv`
- `templates/team_connections.csv`
- `templates/workflow_playbooks.csv`
- `templates/workflow_playbook_steps.csv`

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

## PDF Dashboard Operativo AP

El PDF no se publica completo dentro del tablero. Se extrajo solo estructura operativa:

- empresas y colores funcionales;
- proyectos criticos con avance, siguiente accion, owner y riesgo;
- campos minimos de la base maestra de actividades;
- metricas por AECODE, GEN+, VisionPro, AgentFlow y Growth;
- reglas de ownership, calidad de dato y escalamiento;
- arquitectura de 15 vistas requeridas.
