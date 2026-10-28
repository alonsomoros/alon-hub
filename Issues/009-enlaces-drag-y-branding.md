# Propuesta: enlaces arrastrables y logo remoto

## Estado

Borrador para debate. No implementado. Requisito propuesto: `REQ-009`.

## Problema

El drag and drop actual usa `draggable` nativo sobre la fila y puede ser inconsistente en tactil, teclado y navegadores móviles. Los enlaces usan iconos estáticos aunque el usuario quiere identificar cada web mediante su logo.

## Propuesta de ordenación

- Usar un identificador estable, no el índice, como identidad de arrastre.
- Mantener asa visible y añadir soporte de teclado: mover arriba/abajo, anunciar posición y cancelar.
- Evaluar una interacción pointer/touch propia o una librería accesible si el HTML nativo no cubre PWA móvil.
- Mantener la ordenación como operación pura y persistirla solo cuando se decida el almacenamiento.

## Propuesta de logo

Crear un resolver común que reciba una URL y devuelva `loading`, `ready` o `fallback`:

1. Extraer origen y dominio de la URL validada.
2. Intentar favicon o logo de la web con una fuente permitida.
3. Mostrar placeholder mientras carga.
4. Si hay error, CORS, respuesta inválida o ausencia de imagen, mostrar icono por defecto.
5. Cachear resultado localmente con expiración y límite.

No se debe depender de descargar HTML de la web desde el navegador: CORS, privacidad y disponibilidad lo hacen poco fiable. Hay que decidir entre favicon directo, un proveedor externo de favicons o un proxy/adaptador propio.

## Preguntas para decidir

- ¿Se acepta depender de un proveedor externo de favicons?
- ¿Se quiere almacenar una URL de imagen configurada manualmente como override?
- ¿El logo debe funcionar offline después de la primera carga?
- ¿El arrastre debe tener alternativa visible para teclado además del gesto?
- ¿Se mantiene el límite de 10 enlaces y qué ocurre al alcanzarlo?

## Impacto previsto

Actualizar `QuickLink`, `LinksView`, estilos, persistencia futura y diagramas de pantallas/datos. Añadir tests de fallback, URL inválida, error de imagen, reordenación táctil/teclado y límite de elementos. Sin decisión todavía sobre dependencia externa.
