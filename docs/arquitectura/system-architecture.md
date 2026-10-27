# Arquitectura del sistema

El cliente React renderiza un shell PWA inmediato orientado a una primera impresión simple. Los widgets consumen adaptadores tipados que aislan la red y exponen estados `loading`, `online`, `degraded` y `offline`. n8n actúa como orquestador para consultar la Raspberry Pi y normalizar métricas; Grafana conserva la observabilidad detallada. La configuración de presentación debe mantenerse separada de los datos y permitir intercambiar componentes sin rehacer el dashboard.

## Capas

1. Presentación: inicio, retos y enlaces; componentes visuales responsive y reutilizables.
2. Dominio: modelos de métricas, servicios y `HabitGoal`.
3. Preferencias: tema, modo claro/oscuro, fuente de citas, orden de servicios y showcase de métricas.
4. Integración: clientes HTTP con timeout, reintentos limitados y fallback.
5. Infraestructura: n8n, Grafana, Raspberry Pi 5 y servicios desplegados.
