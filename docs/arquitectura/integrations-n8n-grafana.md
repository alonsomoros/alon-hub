# Integraciones n8n y Grafana

## Métricas Pi 5

El webhook de n8n debe devolver JSON con `cpuBusyPercent`, `ramUsedPercent`, `storageUsedPercent` y `temperatureCelsius`. El cliente cancela la petición después de 1500 ms y presenta `OFFLINE / UNREACHABLE` sin bloquear otros widgets.

## Healthchecks

Los endpoints configurados serán `hipoglifo.es`, `el-negredo.vercel.app` y `alonsomoros.github.io`. La respuesta normalizada incluye `name`, `url`, `state`, `latencyMs` y `checkedAt`.

## Grafana

El dashboard enlaza a Grafana para detalle histórico; las credenciales y URLs viven en variables de entorno, nunca en el bundle.

## Citas

La primera frase usa un adaptador de citas con timeout y fallback local. El contrato mínimo es `{ content, author }`; los modos previstos son `default`, `random` y `fav`. La cita no debe impedir el render inicial.
