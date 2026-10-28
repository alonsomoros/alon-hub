# Propuesta: logos de Mis sitios

## Estado

Borrador para debate. No implementado. Requisito propuesto: `REQ-010`.

## Problema

La sección `Tus sitios` usa iconos Lucide fijos, aunque cada servicio apunta a una web concreta y debería mostrar su logo cuando esté disponible, con fallback coherente.

## Propuesta

Reutilizar el mismo resolver de branding de `REQ-009`, pero con una variante compacta para tarjetas de servicio:

- estado loading sin cambiar el tamaño del tile;
- logo remoto dentro de un contenedor estable;
- icono por defecto por dominio/categoría si la imagen falla;
- indicador `online`/`offline` separado del logo;
- `alt`/label accesible con nombre y estado del servicio.

La fuente de logo debe ser una decisión compartida con enlaces para evitar dos políticas de red distintas.

## Preguntas para decidir

- ¿El logo remoto puede sustituir completamente a Lucide o se conserva una categoría como fallback?
- ¿Se permite configurar manualmente el logo por servicio?
- ¿El healthcheck real debe controlar el estado del tile o se mantiene independiente?
- ¿Hay requisitos de privacidad para no enviar dominios a un proveedor externo?

## Impacto previsto

Actualizar el modelo `Service`, el componente visual de servicios y el resolver de logos común. Añadir tests de carga, error, fallback, accesibilidad y estado offline. Actualizar requisitos y diagramas solo tras aprobar la política de branding.
