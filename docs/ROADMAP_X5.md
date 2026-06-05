# Roadmap X5 - AECODE Activity Control OS

## 7 dias

- Validar con Alejandro los 15 items del `Hoy / Centro de ejecucion`.
- Confirmar ownership real de Persona 1-29 y corregir backups.
- Convertir los 7 playbooks en SOPs operativos por area.
- Definir campos obligatorios de evidencia y SLA por flujo.
- Elegir 3 agentes piloto: soporte/accesos, GHL lead quality y dashboard semanal.
- Separar version publica sanitizada de version interna con nombres reales.
- Probar export/import JSON del estado diario con 2 personas del equipo.
- Convertir perfiles Julie/Daniella/Fabrizio en tableros operativos por frente.

## 30 dias

- Conectar fuente segura de Google Sheets o backend intermedio.
- Implementar persistencia real de estados, logs, evidencias y cambios.
- Migrar `DailyStateOverride` desde localStorage a backend con auth y roles.
- Crear autenticacion y roles: direccion, lead area, operador, lectura.
- Activar tablero semanal para Alejandro con top 5 decisiones, bloqueos y metricas.
- Probar AgentFlow con dry-run: sin envios externos automaticos.
- Crear alertas por vencimiento, bloqueo >3 dias y actividad sin evidencia.

## 90 dias

- Migrar a base operativa: personas, roles, actividades, playbooks, pasos, agentes, sistemas, evidencias, escalaciones, fuentes y logs.
- Integrar GHL, Sheets, Notion, Drive, GitHub y calendario con permisos controlados.
- Medir impacto por agente: horas ahorradas, errores evitados, SLA cumplido y conversion.
- Conectar AECODE Learning OS: skill, evidencia, rubrica, certificado y Skill Passport.
- Crear dashboard B2B/ejecutivo con North Star Metric: skills verificadas con evidencia por usuario activo mensual.
- Consolidar version interna privada y version demo publica sin datos sensibles.

## Riesgos

- Publicar nombres reales o contexto interno en repo publico.
- Automatizar mensajes, certificados o correos sin aprobacion humana.
- Convertir el tablero en inventario pasivo sin uso diario.
- Mantener actividades sin owner, fecha o evidencia.
- Confundir actividades AECODE con proyectos GEN+ que deben vivir fuera del sistema educativo.
