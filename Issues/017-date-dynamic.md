# Fecha dinámica en la pantalla principal

## Problema

La fecha mostrada en la vista de inicio está hardcodeada (`27 de octubre de 2026`), cuando el contenido de la interfaz debería representar el momento actual del usuario.

## Solución propuesta

- Calcular la fecha del sistema con `new Date()`.
- Formatear la fecha con `toLocaleDateString()` usando locale apropiado.
- Mantener el texto de bienvenida como valor actual y no fijo.

## Criterios de aceptación

- La fecha cambia con el día real del sistema.
- La pantalla principal no muestra una fecha falsa o desalineada con el contexto real.
- La UI sigue funcionando en distintas zonas horarias y locales.

## Pendiente

Decidir si la fecha del dashboard debe ser configurable en el futuro para entorno productivo o si se usará únicamente como dato local.
