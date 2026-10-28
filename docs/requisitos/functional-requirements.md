# Requisitos funcionales

## Trazabilidad y entrega

- **FR-00:** toda funcionalidad debe estar vinculada a una issue de GitHub, un requisito `REQ-XXX`, criterios de aceptación y evidencia de tests; solo se considera cerrada después de commit trazable, push y CI verde.
- **FR-08 Diagramas:** mantener diagramas SVG y Mermaid de arquitectura, pantallas, flujo de datos y entrega sincronizados con el codigo y marcar lo pendiente de forma explicita.

- **FR-01 Splash:** mostrar una pantalla de bienvenida breve y pasar al dashboard sin bloquear por red.
- **FR-02 Inicio:** mostrar logo, nombre, fecha y una cita personalizada responsive con autor y fallback local.
- **FR-03 Infraestructura:** presentar Raspberry Pi 5 con indicador discreto y CPU, memoria y temperatura en un componente visual configurable (`graph` o `pbar`).
- **FR-04 Servicios:** mostrar solo logos clicables y un halo/indicador de health `online` u `offline`.
- **FR-05 Hábitos:** mostrar logros de forma visual y rewarding, con progreso por color y navegación a una vista de retos escalable.
- **FR-06 Enlaces:** permitir añadir, borrar, abrir y reordenar accesos desde una vista dedicada.
- **FR-07 PWA:** instalarse como aplicación standalone y funcionar con shell precacheado.
