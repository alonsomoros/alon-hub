# Centralizar la resolución del logo de enlaces

## Problema

`QuickLink` ya contempla `logoUrl?: string`, pero la creación de enlaces y el render no usan ese campo de forma consistente. La lógica de resolución de logo se reparte entre el modelo y la visualización.

Esto crea una inconsistencia: el modelo acepta override local, pero la app no lo aprovecha de forma explícita.

## Solución propuesta

- Crear una función centralizada de resolución de marca para cada enlace.
- Priorizar esta secuencia:
  1. `logoUrl` explícito del enlace,
  2. favicon por dominio,
  3. fallback visual del icono del servicio.
- Mantener la ruta del fallback local y hacer que el render sea más predecible.

## Criterios de aceptación

- Los enlaces con `logoUrl` usan ese valor en vez del favicon genérico.
- Si no hay override, se usa el favicon por dominio.
- Si falla la carga, se cae al icono por defecto.
- La lógica queda reusable y no embebida en la vista.

## Pendiente

Cuando se implemente persistencia de enlaces, decidir si `logoUrl` se almacena localmente y si se permite edición manual.
