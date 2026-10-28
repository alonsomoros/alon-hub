# Arquitectura e integraciones

## Problema

El dashboard debe validar la experiencia antes de conectar n8n, Grafana, healthchecks y persistencia real. Las peticiones externas no deben dejar la interfaz bloqueada.

## Solución propuesta

Separar presentación, dominio, preferencias, integración e infraestructura. Los widgets consumirán adaptadores tipados con estados de carga y disponibilidad, timeout y fallback local.

## Decisión

La UI actual usa datos estáticos y la cita ya tiene fallback. Las futuras integraciones se añadirán detrás de adaptadores, con timeout de 1.5 s y estados `OFFLINE`/`UNREACHABLE`, sin acoplar la red a los widgets. El detalle de Grafana y las métricas reales quedan en backlog.

## Pendientes relacionados

Adaptador n8n para Raspberry Pi, healthchecks reales, cliente de citas configurable, enlace a Grafana, persistencia de hábitos/enlaces, notificaciones y pruebas PWA/E2E.
