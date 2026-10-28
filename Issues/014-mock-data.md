# Separar datos mock y configuración real

## Problema

La app incluye métricas, servicios, citas, fechas y textos que parecen datos reales aunque el sistema sigue en fase de prototipo y no hay integración real con servicios externos ni persistencia.

Esto puede confundir el estado real del producto y dificultar la transición a backend o APIs reales.

## Solución propuesta

- Aislar los datos de ejemplo en un módulo dedicado, por ejemplo `mockData.ts` o una carpeta `data/`.
- Marcar claramente cuáles valores son de prototipo y cuáles son de producción.
- Separar sincronización de configuración (`theme`, `quote`, `orderServices` ...) de la lógica de render.

## Criterios de aceptación

- El código principal no mezcla datos de prueba con lógica de render.
- La fuente de datos del dashboard queda documentada.
- La transición a datos reales requiere un cambio pequeño de adaptador.
- La app sigue funcionando sin depender de servicios externos.

## Pendiente

Definir si la capa de mock data será temporal o se convertirá en un primer adaptador de dominio con contrato establecido.
