# Modelo Operativo

## Loop maestro

`Registro -> acceso -> recordatorio -> sesion -> grabacion -> edicion -> Vimeo -> plataforma -> soporte -> evidencia -> certificado`

## Areas

1. Accesos y soporte.
2. Plataforma y contenido.
3. Sesiones y Zoom.
4. Comunidad y grupos.
5. Embajadores.
6. Difusion.
7. Datos y GHT.
8. Certificados.
9. Automatizacion.

## Reglas de control

- Cada actividad debe tener owner anonimo.
- Cada actividad debe tener SLA.
- Cada actividad debe tener evidencia esperada.
- Toda actividad repetible debe tener un agente candidato.
- Toda actividad sensible debe mantenerse fuera del frontend publico.

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
