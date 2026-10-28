# Enlaces responsive y ordenación

## Problema

La vista de enlaces podía producir scroll horizontal en pantallas pequeñas. Las filas tenían demasiados controles visibles y ocupaban más espacio del necesario. El alcance admite como máximo 10 enlaces, por lo que la edición debe ser rápida y legible.

## Solución propuesta

Usar una fila compacta con icono, nombre, URL truncada, apertura, borrado y un único asa de arrastre. El orden se cambia arrastrando la fila completa; no se muestran flechas duplicadas.

## Decisión

Adoptado el arrastre nativo de HTML en `LinksView`. Se eliminan las flechas de subir/bajar, se mantiene el asa visible también en móvil y se aplican `min-width: 0`, ancho fluido y truncado de texto para evitar desbordamientos. La reordenación vive en el estado del dashboard y no acopla la vista a la persistencia.

## Pendiente

Persistir el orden localmente sin bloquear el render y añadir pruebas de accesibilidad y flujo móvil.
