# Propuesta: enlaces arrastrables y logo remoto

## Estado

Decisión adoptada y implementada en UI: se usa un reordenado estable por `id` y un resolver de marca con favicon + fallback local. Requisito cubierto: `REQ-009`.

## Problema

El drag and drop actual usa `draggable` nativo sobre la fila y puede ser inconsistente en tactil, teclado y navegadores móviles. Los enlaces usan iconos estáticos aunque el usuario quiere identificar cada web mediante su logo.

## Decisión adoptada

- La identidad del arrastre se basa en `id`, no en el índice del array.
- El reordenado se mantiene como operación pura y se puede activar por arrastre y teclado (`ArrowUp` / `ArrowDown`).
- El icono de cada enlace intenta obtener un favicon desde el dominio con `https://www.google.com/s2/favicons?...` y cae al icono por defecto cuando falla.
- La fila queda compacta y sin overflow horizontal en pantallas pequeñas.

## Alcance implementado

- `QuickLink` acepta `logoUrl` opcional para compatibilidad con una resolución de marca futura.
- `LinksView` usa `draggable` + reordenado estable y soporte de teclado.
- `LinkBrand` maneja `loading`, `ready` y `fallback` sin bloquear la UI.
- Los estilos de `.editable-link` y `.drag-handle` quitan el scrollbar horizontal y reducen el tamaño visual de la fila.

## Pendiente

- Persistir la prioridad de enlaces en almacenamiento local cuando se decida la capa de datos.
- Definir si se quiere permitir override manual de logo o proveedor alternativo con mejor fiabilidad.

## Impacto previsto

Se actualizó `QuickLink`, `LinksView`, estilos y la documentación de trazabilidad. Queda pendiente la persistencia y la decisión acerca de un proveedor de logos más robusto si se requiere offline o control manual.
