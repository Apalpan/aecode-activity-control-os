# Modelo Operativo

## Principio UX

El tablero no debe funcionar como una lista larga de pendientes. Debe operar como consola diaria:

- rol -> responsabilidad -> actividad -> evidencia -> SLA -> escalamiento;
- flujo -> etapa -> owner -> agente -> fuente;
- fuente -> Obsidian, Sheet, Notion o Drive -> estado de seguridad.

La estructura se alinea con `09_Actividades Diarias/Actividades_TEAM`, `04_Team GEN+`, `05_Mapeo de Procesos/Coordinacion-Academica-Postventa-AECODE`, el sistema operativo AECODE, `Cultura-AECODE.md` y el panel HTML de marketing. Esta version es interna y muestra nombres reales con trazabilidad `Persona N` cuando el owner fue asumido.

La capa ejecutiva se alimenta tambien del PDF `Dashboard_Operativo_AP_GEN+_AECODE.pdf`: agrega empresas del ecosistema, proyectos criticos, flywheel AP, campos minimos, metricas, 15 vistas objetivo y reglas de ownership/calidad de dato.

`Cultura-GEN+.md` se usa como frontera operativa: lo que sea consultoria, proyecto cliente, ingenieria aplicada, BIM/VDC para cliente, automatizacion empresarial o producto GEN+ no entra al tablero AECODE salvo que se convierta en activo educativo anonimizado.

## Centro de ejecucion diario

La iteracion X5 agrega una vista `Hoy / Centro de ejecucion`. Esta vista no reemplaza el backlog: filtra lo que debe moverse en el dia y responde siete preguntas:

- Que debe hacer cada persona hoy.
- Que esta bloqueado o en riesgo.
- Que vencio o vence hoy.
- Que necesita decision de Alejandro.
- Que flujo esta conectado a la tarea.
- Que evidencia debe quedar para cerrar.
- Que agente puede apoyar sin ejecutar acciones sensibles sin aprobacion.

Cada item diario queda modelado con: `id`, `titulo`, `area`, `owner`, `backup`, `playbook_id`, `prioridad`, `estado`, `due`, `fuente`, `evidencia`, `next_best_action`, `escalamiento`, `agent`, `system` y `decision_needed`.

Estados permitidos: `Listo`, `En curso`, `Riesgo`, `Bloqueado`, `Automatizable`, `Requiere decision`.

Regla: si una actividad no tiene evidencia, owner unico, fecha y proximo paso, no esta cerrada.

## Correccion de roles 2026-06-05

La version actual usa nombres reales por instruccion directa de Alejandro. El tablero debe tratarse como interno/sensible.

- Alejandro Palpan: vision global del ecosistema, prioridades, decisiones, producto, negocio y escalamiento.
- Anggie: marketing y growth, GHL, funnel, lead quality, campanas, web, plantillas y aprendizaje de ventas.
- Erika: Business Development and Partnership Coordinator, partnerships, sponsors, experiencia corporativa y activacion de empresas.
- Fabrizio: desarrollo y enfoque del producto, automatizacion marketing, ingenieria general, dashboards, rutas, skills y AgentFlow backlog.
- Daniella: operaciones a todo nivel, programas, Summit, sponsors, VisionPro, estrategia comercial y seguimiento transversal.
- Julie: operaciones, instructora cuando aplique, administracion, enfoque startup en metricas y finanzas.
- Paola: complemento operativo del equipo de Erika para pipeline, contactos, reuniones, convenios y follow-up multicanal.
- Patrick, Ivana y Carolina: coordinacion academica, postventa, programas, sesiones, embajadores, actas, plataforma, soporte y certificados.
- Anderson: full-stack senior y arquitecto con mayor experiencia tecnica para backend, frontend, infra, IA y delivery end-to-end.
- Marlon: automatizacion, dev web, integraciones para la web, Aecoditos, n8n, paneles, agentes y deploys.
- Emanuel: automatizaciones, AgentFlow, SEACE, flujos mapeados y soporte a agentes.

## Regla de capacidad del equipo

El equipo operativo visible no debe superar 25 personas nucleo. La carpeta Obsidian contiene 35 fichas consideradas: las 34 personas listadas por Alejandro y `Yudely`, detectada adicionalmente en el vault.

Decision aplicada:

- `Nucleo`: 25 personas con ownership activo, cadencia, handoff, fuente y riesgo.
- `Red extendida`: 10 personas con apoyo puntual, rol por confirmar o sin reporte detallado.
- Una persona no consume asiento nucleo si no tiene actividad clara, evidencia o entregable asignado.
- Los alias `Persona N` quedan como capa de compatibilidad para actividades ya creadas, pero la UI muestra nombres reales cuando existe evidencia suficiente.

Nucleo actual: Alejandro Palpan, Patrick, Ivana, Carolina, Anggie, Arantxa, Jessica, Talia, Yadira, Reiner, Yary, Anderson, Fabrizio, Yudely, Jordi, Paola, Daniella, Erika, Julie, Kevin, Israel, Robert Herrera, Emanuel, Marlon y Paolo.

Red extendida actual: Alex Anchayhua, Ana, Edith, Enma, Fernando, Genesis, Guisella, Luis Vergara, Moises y Sebastian.

## Roles operativos

La lista siguiente conserva alias legacy `Persona N` para compatibilidad con actividades y agentes ya existentes. En la UI y templates nuevos esos alias se resuelven a nombres reales cuando hay evidencia.

- `Persona 1`: accesos, soporte, plataforma, certificados y contenido.
- `Persona 2`: datos, registro academico, GHT y fuentes maestras.
- `Persona 3`: coordinacion academica, calendario, Zoom y alertas.
- `Persona 4`: pipeline de contenido Drive -> Vimeo -> plataforma.
- `Persona 5`: contenido publicable, YouTube y piezas de difusion.
- `Persona 6`: comunidad, grupos WSP, recordatorios y sesiones.
- `Persona 7`: calidad academica, embajadores, evidencias, rubricas y cierre academico.
- `Reiner (Persona 8)`: difusion, comunidad, seguimiento masivo y fuentes de marketing.
- `Persona 9`: QA visual de certificados.
- `Persona 10`: direccion operativa, prioridades y decisiones.
- `Persona 11`: automatizacion y mejora de procesos.
- `Persona 12`: paid growth, Meta Ads, CPL y lead quality.
- `Persona 13`: piezas de campana, copies y assets.
- `Persona 14`: eventos, Summit, agenda y sponsors.
- `Anggie (Persona 15)`: web, difusion organica, brochures y Drive.
- `Yary (Persona 16)`: investigacion UX, flujos, UI, branding, formularios, web experience y handoff con desarrollo.
- `Persona 17`: edicion de video, clips y shorts.
- `Jessica (Persona 18)`: revision de ventas/GHL para optimizar marketing, copys, oferta y calidad de leads.
- `Yadira (Persona 19)`: asesoria comercial, pipeline, cierre y llamadas en entrenamiento.
- `Persona 20`: producto, rutas, Skill Graph y Skill Passport.
- `Persona 21`: finanzas, pagos y documentacion.
- `Persona 22`: datos, BI, dashboards y gobernanza.
- `Anderson (Persona 23)`: arquitectura, backend, frontend, infra, IA y delivery end-to-end.
- `Kevin (Persona 24)`: activos BIM academicos, modelos, plantillas, familias, scripts, PPTs y Miros.
- `Paola (Persona 25)`: alianzas, sponsors, interesados, reuniones, WhatsApp Business, LinkedIn, grupos y convenios.
- `Jordi (Persona 26)`: QA, E2E, UX, carga/estres, pruebas automatizadas, bugfixes y data.
- `Persona 27`: AI automation, n8n, integraciones, agentes IA, AECODITOS, dashboards, data, ML, deploy, specs, capacitacion IA y soporte tecnico a flujos comerciales/postventa.
- `Persona 28`: programas activos, actas, flujos Notion, docentes, postventa, automatizaciones, sponsors, ponentes, marketing, B2B y comunicaciones HTML.
- `Talia (Persona 29)`: cierre comercial, leads calientes, audios, copys, brochures, seguimiento masivo y entrenamiento de ventas.

## Flujo operativo por sesion

1. Onboarding postventa: compra validada -> acceso activo, grupo y registro.
2. Preparacion 72h: Zoom, instructor, embajador, recursos y recordatorio.
3. Ejecucion de sesion: asistencia, soporte y registro de incidencias.
4. Contenido post sesion: Drive, edicion, Vimeo, plataforma y piezas publicables.
5. Calidad y cierre: evidencias, notas, rubrica, recuperacion y certificados.
6. Difusion y comunidad: grupos correctos, copy, CTA, fuente y resultado.
7. Lanzamiento de campana: brief, piezas, landing, ads, reporte y feedback ventas.
8. Evento / Summit: agenda, sponsors, piezas, inscritos y post-evento.
9. Producto y skill verification: ruta, skill, evidencia, rubrica, feedback y certificado.
10. Control administrativo: pagos, documentos, accesos y certificados habilitados.
11. Product engineering: arquitectura, contratos, backend, frontend, infra, IA y release.
12. Activos BIM academicos: modelos, planos, plantillas, scripts, PPTs y Miros reutilizables.
13. Alianzas y sponsors: interesados, empresas, llamadas, reuniones, grupos, convenios y follow-up.
14. QA y release validation: E2E, UX, carga, pruebas automatizadas, bugs y data.
15. UX/UI y handoff de producto: investigacion, flujo completo, UI, branding, assets web, formularios y coordinacion con desarrollo.
16. Producto digital y AI Ops: automatizaciones, n8n, integraciones, AECODITOS, agentes IA, dashboards, data, deploys, specs, capacitacion IA, roadmap, seguimiento dev, flujos criticos, web y accesos post compra.
17. Programas activos, Summit y postventa: sesiones, actas, Notion, docentes, soporte, automatizaciones, sponsors, ponentes, marketing, B2B y HTML.
18. Cierre comercial y entrenamiento ventas: llamadas a leads calientes, audios, seguimiento de cierre, copys, brochures, seguimiento masivo, entrenamiento y review de mejoras.

## Playbooks tipicos interactivos

La UI agrupa las etapas anteriores en 7 playbooks operables. Cada playbook tiene trigger, objetivo, lead, ciclo, KPI, agente, pasos, handoffs, escalamiento y definicion de terminado.

1. `PB-01` Postventa y acceso de estudiante: compra -> acceso -> grupo -> bienvenida -> soporte.
2. `PB-02` Sesion en vivo y soporte academico: Zoom -> recursos -> embajador -> ejecucion -> acta.
3. `PB-03` Grabacion, edicion y publicacion: Zoom/Drive -> QA -> Vimeo -> plataforma -> notificacion.
4. `PB-04` Evidencia, rubrica y certificados: reto -> evidencia -> rubrica -> certificado -> dashboard.
5. `PB-05` Campana, GHL y cierre comercial: brief -> piezas -> GHL -> llamadas/audios -> feedback.
6. `PB-06` Evento, sponsors y aliados: contactos -> reunion -> onboarding sponsor -> difusion -> follow-up.
7. `PB-07` Producto, UX, dev y QA release: flujo -> arquitectura -> build -> QA -> release/medicion.

Estos playbooks son la capa que debe usar el equipo para operar; las 18 etapas quedan como biblioteca de referencia y trazabilidad.

La iteracion X5 agrega cinco modos por playbook:

- `Checklist`: pasos ejecutables con owner, timing y evidencia.
- `Kanban`: pasos agrupados por estado operativo.
- `Timeline`: lectura por SLA/timing.
- `RACI`: responsible, accountable, consulted, informed, evidencia y agente.
- `Log`: bitacora simulada por paso para preparar auditoria real.

## AgentFlow AECODE

La capa AgentFlow define contratos de agentes, no automatizaciones ciegas. Todo agente debe declarar:

- trigger;
- input payload;
- validaciones;
- dedupe/idempotencia;
- herramientas;
- permisos;
- output;
- logs;
- retries;
- fallback;
- limite de aprobacion humana;
- riesgo de privacidad.

Agentes X5 incluidos: soporte/accesos, registro de inscritos, Zoom/sesiones, Drive-Vimeo-plataforma, certificados, recordatorios WhatsApp/GHL, GHL/calidad de leads, sponsors/reuniones, QA/release y dashboard ejecutivo semanal.

Regla de seguridad: enviar mensajes, correos, certificados, cambios oficiales de estado, pagos, convenios o acciones externas requiere aprobacion humana salvo autorizacion explicita.

## Modelo backend-ready

La app sigue siendo mock/static, pero ya queda preparada para backend. Entidades minimas:

- `person_id`: identidad operativa.
- `role_id`: rol, mision, backup y KPI.
- `activity_id`: tarea con owner, SLA, prioridad y evidencia.
- `playbook_id`: flujo repetible.
- `step_id`: paso ejecutable del playbook.
- `agent_id`: contrato auditable de agente.
- `system_id`: sistema conectado o fuente.
- `evidence_id`: prueba de cierre.
- `escalation_id`: bloqueo o decision.
- `source_id`: fuente y privacidad.
- `status_log_id`: bitacora de cambios y ejecuciones.

## Loop maestro

`Registro -> acceso -> recordatorio -> sesion -> grabacion -> edicion -> Vimeo -> plataforma -> soporte -> evidencia -> certificado`

## Loop ejecutivo AP

`Comunidad -> Educacion -> Producto -> Autoridad -> Data -> IA -> Escala`

Cada actividad nueva debe declarar `flywheel_capa`, `metrica_asociada`, `evidencia_link` y `proximo_paso`. Si no tiene responsable unico, fecha limite o evidencia, queda incompleta.

## Reglas de escalamiento

- Fecha vencida sin estado: alerta al responsable y a Alejandro.
- Bloqueo mayor a 3 dias: escalamiento automatico.
- Sin actualizar en 7+ dias: badge de riesgo visible.
- Bug sin retest documentado: no se cierra.
- Proximo paso obligatorio: verbo + objeto + fecha + responsable.

## Dominios AECODE

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

## Frontera AECODE / GEN+

- AECODE: cursos, cohortes, comunidad, Skill Passport, evidencias, certificaciones, plataforma educativa, marketing y ventas de programas AECODE.
- GEN+: servicios tecnicos, proyectos cliente, BIM/VDC cliente, ingenieria aplicada, IA empresarial, Visor BIM, ICEBOT, BIM Store y productos propios GEN+.
- Compartido: know-how tecnico o BIM que se anonimiza, versiona y convierte en recurso pedagogico.

Toda actividad compartida debe tener ficha de asset: origen, permiso de uso, curso, modulo, version, objetivo de aprendizaje y owner.

## GHL marketing-ventas

Marketing no debe optimizar solo por CPL. Anggie lidera GHL y lectura de growth; Jessica revisa calidad de lead, Ads y feedback comercial; Talia aporta objeciones reales de cierre; Yadira ejecuta seguimiento en entrenamiento; Reiner apoya seguimiento masivo. La salida debe convertirse en ajuste de copy, campana, landing, script u oferta.

## Conexiones operativas

1. Postventa y academia: Patrick conecta con Ivana, Carolina, Daniella, Julie y Sebastian.
2. Growth y ventas: Anggie conecta con Arantxa, Jessica, Talia, Yadira, Reiner y Patrick.
3. Producto y tecnologia: Anderson conecta con Yary, Fabrizio, Yudely, Emanuel, Marlon y Jordi.
4. Summit y autoridad: Daniella conecta con Paola, Erika, Julie, Ivana, Arantxa, Anggie y Ana.
5. GEN+ BIM y activos educativos: Paolo conecta con Kevin, Israel, Robert Herrera, Fabrizio, Carolina y Yary.
6. Administracion, pagos y compliance: Yudely conecta con Julie, Sebastian, Anggie, Anderson, Emanuel y Alejandro.

## Procesos de marketing integrados

1. Ads para cursos Training.
2. AECODE AI Summit y eventos.
3. Difusion multicanal.
4. Clips de webinar.
5. Optimizacion y automatizacion.
6. Contenido organico y web.

## Reglas de control

- Cada actividad debe tener owner real o `Persona N` cuando el responsable no este confirmado.
- Cada actividad debe tener SLA.
- Cada actividad debe tener evidencia esperada.
- Toda actividad repetible debe tener un agente candidato.
- Toda actividad sensible debe mantenerse fuera del frontend publico.
- Toda actividad debe poder conectarse con un dominio, KPI o ritual de cultura.

## Cultura operativa

La cultura AECODE se convierte en reglas medibles:

1. Presencia y foco: check-in 9:00 am, estado visible y bloques de deep work.
2. Comunicacion y trazabilidad: avance diario, acuse de recibo y canal grupal cuando aplica.
3. Ejecucion y cierre: cerrar algo al dia y evitar acumulacion de tareas en proceso.
4. Alineacion al negocio y al rol: toda tarea debe conectar con NSM, comunidad, experiencia, marca o MRR.
5. Conocimiento, aprendizaje y comunidad: cada aprendizaje reutilizable se documenta y comparte.
6. Documentacion, sintesis y presentacion: procesos relevantes dejan mapa, A3, checklist o resumen.

Antivalores bloqueantes: incumplimiento recurrente, falta de trazabilidad, excusas constantes, ocultar errores, individualismo, desorden operativo cronico y falta de respeto.

## Agentes candidatos

- `Agente #1`: enrutador de soporte.
- `Agente #2`: aprovisionador de accesos.
- `Agente #3`: scheduler Zoom.
- `Agente #4`: pipeline Drive -> Vimeo -> plataforma.
- `Agente #5`: monitor de recordatorios.
- `Agente #6`: gestor de grupos.
- `Agente #7`: monitor GHT/BD.
- `Agente #8`: emisor de certificados.
- `Agente #9`: control de embajadores.
- `Agente #10`: difusion multicanal.
- `Agente #11`: prioridades y automatizacion por area.
- `Agente #12`: campanas, CPL y lead quality.
- `Agente #13`: eventos, Summit y dependencias.
- `Agente #14`: cola web, landings y QA visual.
- `Agente #15`: clips, shorts y assets audiovisuales.
- `Agente #16`: CRM, feedback comercial, llamadas, audios, objeciones, copys y conversion.
- `Agente #17`: learning loop, evidencias y Skill Passport.
- `Agente #18`: pagos, documentos y bloqueos administrativos.
- `Agente #19`: dashboard ejecutivo integral.
- `Agente #20`: auditor tecnico de arquitectura, seguridad, frontend, infra e IA.
- `Agente #21`: catalogador de activos BIM academicos.
- `Agente #22`: pipeline de alianzas, sponsors e interesados.
- `Agente #23`: preparacion y follow-up de reuniones.
- `Agente #24`: validador QA de releases.
- `Agente #25`: validador de carga y actualizacion de data.
- `Agente #26`: estructurador UX/UI, branding y handoff de producto.
- `Agente #27`: priorizador de AI Ops, agentes IA y AECODITOS.
- `Agente #28`: mapeador AS-IS/TO-BE y medicion de eficiencia operativa.
- `Agente #29`: torre de control de producto digital, dev, QA, bloqueos y releases.
- `Agente #30`: monitor de n8n, integraciones y automatizaciones en produccion.
- `Agente #31`: auditor de arquitectura multi-agente, RAG, canales y limites de AECODITOS.
- `Agente #32`: orquestador de dashboards, scrapers, datasets, ML, deploys e incidentes.
- `Agente #33`: generador de toolkits de capacitacion IA.
- `Agente #34`: sincronizador de ventas, pagos, tickets, notificaciones y postventa.
- `Agente #35`: copiloto de programas activos, actas, sesiones, Notion, soporte y HTML.
- `Agente #36`: monitor de pipeline Summit, sponsors, aliados, ponentes, B2B y CRM.
