# n8n API connectors

Normalizar payloads de Raspberry Pi a métricas de CPU, RAM, storage y temperatura. Toda llamada HTTPS usa AbortController con 1500 ms, fallback `OFFLINE / UNREACHABLE` y no bloquea la UI. Los healthchecks comparten el mismo contrato de estado y alimentan un indicador discreto en los logos, no un listado técnico.

El adaptador de citas usa el contrato `{ content, author }`, ofrece `default`, `random` y `fav`, y siempre conserva una cita local si la API falla.
