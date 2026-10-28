# Propuesta: telemetría de Raspberry Pi

## Estado

Borrador para debate. No implementado. Requisito propuesto: `REQ-011`.

## Problema

La tarjeta muestra métricas estáticas, pero se quiere información cercana a tiempo real. Un navegador no puede observar directamente la Raspberry de forma fiable sin un canal intermedio, autenticación y una política de actualización.

## Contrato de datos propuesto

Usar un envelope versionado y con timestamp:

```json
{
  "schemaVersion": 1,
  "deviceId": "raspberry-pi-5",
  "observedAt": "2026-10-28T12:00:00Z",
  "sequence": 42,
  "metrics": {
    "cpuBusyPercent": 24,
    "ramUsedPercent": 61,
    "storageUsedPercent": 48,
    "temperatureCelsius": 47
  }
}
```

Validar rangos, timestamp, `deviceId` y `schemaVersion`. La app debe conservar `lastKnownGood`, mostrar edad del dato y distinguir `loading`, `online`, `stale`, `offline` y `unreachable`.

## Opciones de transporte

### A. Polling desde la app

La app consulta un endpoint cada 60 segundos. Es la opción más simple, recupera tras desconexiones y encaja con el shell actual, pero no es tiempo real y despierta tráfico aunque no haya cambios.

### B. Push Pi -> n8n + polling web

La Raspberry envía una muestra cada minuto a un webhook n8n; la app consulta el último dato cada 30-60 segundos. Separa la Pi del navegador, permite validar/almacenar y es la opción recomendada para la primera versión operativa.

### C. SSE/WebSocket hacia la app

La Raspberry publica hacia un gateway y la app recibe eventos. Es más cercano a tiempo real, pero exige conexión persistente, autenticación, reconexión, proxy y gestión de múltiples clientes. No usar `MutationObserver`: observa el DOM, no datos remotos.

## Recomendación provisional

Para una primera versión: push de la Pi cada minuto a n8n, n8n valida y conserva el último snapshot, y la app hace polling de ese snapshot cada 60 segundos con timeout de 1.5 s. Añadir `lastSeen`/staleness y fallback. Si después se necesita latencia de segundos, evolucionar el adaptador web a SSE/WebSocket sin cambiar el contrato de métricas.

## Preguntas para decidir

- ¿“Tiempo real” significa segundos o basta con refresco de un minuto?
- ¿La Raspberry puede hacer HTTPS saliente y cómo se autentica el webhook?
- ¿n8n debe guardar histórico o solo el último snapshot?
- ¿Se necesita operar sin n8n mediante endpoint directo local?
- ¿Qué retención, frecuencia y tolerancia de datos obsoletos se acepta?

## Impacto previsto

Actualizar `docs/arquitectura/integrations-n8n-grafana.md`, adapters tipados, configuración de entorno, diagrama de datos y tests de contrato/timeout/reconexión. Requiere decisión de seguridad antes de implementación; no crear ADR hasta fijar la arquitectura.
