# Prompt X5 - AECODE Activity Control OS

Usa este prompt para pedir una iteracion mayor del tablero `AECODE Activity Control OS` sin perder criterio de producto, UX, datos, automatizacion y seguridad.

```text
Actua como un equipo senior combinado de:
- Product Engineer.
- UX/UI Systems Designer.
- AI Automation Architect.
- Technical Product Manager.
- Data/Operations Architect.

Contexto:
Estoy trabajando en el repositorio `aecode-activity-control-os`, un tablero interno de AECODE para operar roles, actividades, playbooks, equipo, postventa, soporte, plataforma, marketing, comercial, eventos, tecnologia, BIM, finanzas, datos y certificados.

AECODE no es una academia online generica. Es una plataforma educativa inteligente para profesionales AEC que desarrollan, practican y demuestran habilidades digitales aplicadas. La metrica norte es:
`skills verificadas con evidencia por usuario activo mensual`.

El tablero actual ya contiene:
- 25 personas nucleo y 10 perfiles de red extendida.
- Roles, actividades, responsabilidades, handoffs, riesgos y agentes candidatos.
- Playbooks interactivos para postventa, sesiones live, grabaciones, certificados, growth/ventas, eventos/sponsors y producto-dev-QA.
- Templates CSV importables.
- Fuente Obsidian/Notion/Sheets/Drive documentada.
- Deploy publico en GitHub Pages, aunque el contenido operativo real debe tratarse como interno/sensible.

Objetivo:
Mejora el sistema x5 para convertirlo en una herramienta operativa diaria que cualquier persona del equipo pueda usar sin explicacion externa.

La mejora no debe ser solo visual. Debe elevar:
1. Producto: que el tablero ayude a decidir y ejecutar.
2. UX/UI: que sea claro, interactivo, responsive y facil de operar.
3. Datos: que tenga modelos preparados para backend, filtros, estados y trazabilidad.
4. Automatizacion: que cada flujo tenga agentes, triggers, inputs, outputs, logs y control humano.
5. Operacion: que roles, responsables, evidencia, SLA, handoffs y escalamiento sean accionables.

Antes de editar:
1. Revisa `README.md`, `docs/OPERATING_MODEL.md`, `docs/SOURCES.md`, `data/opsData.ts`, `data/teamData.ts`, `app/page.tsx`, `app/globals.css`, `templates/`.
2. Identifica que ya existe para no duplicar secciones.
3. Detecta deuda UX, deuda de datos, puntos de confusion y riesgos de seguridad.
4. Define la version minima que aumenta utilidad real para el equipo en esta iteracion.

Entrega esperada:

## 1. Modo operativo diario
Crea o mejora una vista llamada `Hoy / Centro de ejecucion` que responda:
- Que debo hacer hoy.
- Que esta bloqueado.
- Que vencio.
- Que necesita decision de Alejandro.
- Que flujo esta en riesgo.
- Que evidencia falta.
- Que agente puede ayudar.

Debe incluir:
- filtros por persona, area, prioridad, estado, playbook, agente y fuente;
- acciones sugeridas por item;
- estados visuales: listo, en curso, riesgo, bloqueado, automatizable, requiere decision;
- contador de carga por persona;
- alerta de roles sobrecargados;
- "next best action" por flujo.

## 2. Playbooks x5
Convierte los playbooks en un sistema mas operativo:
- vista Kanban por pasos;
- vista timeline por SLA;
- modo checklist ejecutable;
- matriz RACI por flujo;
- semaforo por evidencia faltante;
- handoff animado entre responsables;
- panel de escalamiento;
- historial/log simulado por paso.

Cada paso debe tener:
- trigger;
- input;
- validacion;
- owner;
- backup;
- sistemas;
- output;
- evidencia;
- SLA;
- riesgo;
- agente sugerido;
- criterio de terminado.

## 3. Equipo y responsabilidades
Mejora el mapa de equipo:
- vista por persona;
- vista por area;
- vista por carga;
- vista por conexiones;
- vista por responsabilidades criticas sin backup;
- vista de red extendida y criterios para subir a nucleo.

Debe quedar claro:
- que hace cada persona;
- con quien se comunica;
- que entrega;
- que evidencia deja;
- cuando escala;
- que agentes apoyan su trabajo.

## 4. Capa de agentes y automatizacion
Disena una capa `AgentFlow AECODE` dentro del tablero.

Para cada agente define:
- id;
- nombre;
- objetivo;
- trigger;
- input payload;
- validaciones;
- dedupe/idempotencia;
- herramientas necesarias;
- permisos;
- output;
- logs;
- retries;
- fallback;
- limite de aprobacion humana;
- riesgo de privacidad.

Incluye al menos estos agentes:
- Soporte y accesos.
- Registro de inscritos.
- Zoom/sesiones.
- Drive -> Vimeo -> plataforma.
- Certificados.
- Recordatorios WhatsApp/GHL.
- GHL y calidad de leads.
- Sponsors/reuniones.
- QA/release.
- Dashboard ejecutivo semanal.

No automatices acciones sensibles sin control humano. Enviar mensajes, correos, cambios de estado oficiales, certificados o pagos debe requerir aprobacion humana salvo que el usuario autorice lo contrario.

## 5. Datos y backend-ready
Prepara el modelo para conectarlo luego a backend sin rehacer la app.

Propone y/o implementa estructuras para:
- person_id;
- role_id;
- activity_id;
- playbook_id;
- step_id;
- agent_id;
- system_id;
- evidence_id;
- escalation_id;
- source_id;
- status_log_id.

Cada entidad debe tener campos minimos, relacion con las demas, estado, fuente y fecha de actualizacion.

Si no hay backend, usa mock data estructurada y deja el contrato claro.
Si agregas persistencia local, usa localStorage solo para demo y documenta que es temporal.

## 6. UX/UI x5
La interfaz debe sentirse AECODE: tecnologica, clara, viva y operativa.

Mejoras esperadas:
- navegacion lateral mas util y jerarquica;
- acciones primarias visibles;
- paneles compactos para uso diario;
- microinteracciones utiles;
- animaciones de progreso, handoff y riesgo;
- estados vacios, loading y error;
- responsive sin clipping ni overflow;
- texto legible en cards y botones;
- iconos lucide en acciones;
- no usar decoracion vacia.

Evita:
- landing page;
- texto explicativo innecesario;
- cards dentro de cards;
- dashboards bonitos que no ayudan a decidir;
- visuales que escondan la operacion real;
- colores monotematicos sin jerarquia.

## 7. Seguridad y publicacion
Antes de publicar, clasifica el contenido:
- publico;
- interno;
- critico.

Si el deploy es publico, no expongas:
- emails;
- telefonos;
- links privados;
- links de WhatsApp;
- links de Zoom;
- credenciales;
- tokens;
- datos sensibles de alumnos;
- pipeline privado de ventas;
- documentos privados.

Si el tablero mantiene nombres reales y operacion interna, recomienda repo privado o version sanitizada para GitHub Pages.

## 8. Documentacion y templates
Actualiza o crea:
- README con instrucciones de uso;
- docs/OPERATING_MODEL.md con la nueva logica;
- docs/SOURCES.md con fuentes y limites;
- docs/ROADMAP_X5.md con plan 7/30/90 dias;
- templates CSV necesarios para importar playbooks, agentes, logs, evidencias, handoffs y escalaciones.

## 9. Validacion obligatoria
Ejecuta:
- `npm.cmd run typecheck`;
- `npm.cmd run build`;
- prueba local en navegador o validacion DOM;
- si despliegas, valida la URL publicada con cache-buster.

La validacion debe comprobar:
- carga de pagina;
- navegacion lateral;
- seleccion de playbook;
- seleccion de paso;
- filtros principales;
- ausencia de overflow horizontal;
- responsive mobile;
- textos sin solapamiento;
- assets cargando correctamente.

## 10. Resultado final
Al terminar entrega:
- resumen de cambios;
- archivos modificados;
- como ejecutar;
- como probar;
- URL local o publicada;
- riesgos restantes;
- siguiente iteracion recomendada.

Criterio de aceptacion:
La mejora solo se considera terminada si el tablero permite que un miembro del equipo entienda en menos de 60 segundos:
- que rol tiene;
- que debe hacer hoy;
- que flujo esta ejecutando;
- que evidencia debe dejar;
- con quien coordina;
- cuando debe escalar;
- que agente puede apoyar;
- que decision requiere direccion.
```

## Uso recomendado

1. Pega el prompt en Codex/Claude/Cursor.
2. Adjunta o referencia el repo `aecode-activity-control-os`.
3. Indica si quieres version publica sanitizada o version interna con nombres reales.
4. Pide que implemente, valide y despliegue.

## Prompt corto para continuaciones

```text
Toma el repo `aecode-activity-control-os` y ejecuta la siguiente iteracion del Prompt X5 en `docs/PROMPT_X5_ACTIVITY_CONTROL_OS.md`. Prioriza el Centro de ejecucion diario, playbooks ejecutables, capa AgentFlow, filtros por persona/estado/flujo y validacion responsive. Implementa, valida con typecheck/build, prueba interacciones clave y deja el repo listo para deploy.
```
