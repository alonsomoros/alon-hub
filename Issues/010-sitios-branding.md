# Propuesta: logos de Mis sitios

## Estado

Implementado en la UI. Requisito cubierto: `REQ-010`.

## Problema

La sección `Tus sitios` usa iconos Lucide fijos, aunque cada servicio apunta a una web concreta y debería mostrar su logo cuando esté disponible, con fallback coherente.

## Decisión adoptada

Se centraliza la carga de branding en `BrandLogo`, reutilizable por servicios y enlaces:

- se prioriza `logoUrl` explícito cuando existe;
- si no existe, se obtiene el favicon del dominio mediante el resolver compartido;
- la carga tiene estado loading sin cambiar el tamaño del tile o botón;
- si la imagen falla, se muestra el icono Lucide definido por servicio/enlace;
- indicador `online`/`offline` separado del logo;
- `alt`/label accesible con nombre y estado del servicio.

La misma política se aplica a `Tus sitios`, a los accesos de la portada y a la vista de edición de enlaces.

## Decisiones

- El logo remoto sustituye al icono Lucide cuando carga correctamente; Lucide permanece como fallback estable.
- `Service` y `QuickLink` admiten `logoUrl` para una futura configuración manual sin cambiar la política de carga.
- El indicador de estado sigue siendo independiente del logo; los healthchecks reales quedan fuera de esta issue.
- El proveedor de favicon actual es el mismo que ya usa `REQ-009`; cambiarlo requiere una decisión de privacidad independiente.

## Impacto previsto

Se actualizó el modelo `Service`, el componente visual de servicios, el resolver de logos común y los estilos de dimensiones estables. La validación ejecutada es `npm run lint` y `npm run build`; no existe runner E2E en el repositorio para automatizar carga/error del proveedor remoto.
