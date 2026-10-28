# Branding con asset real en la app

## Problema

La marca principal de la UI estaba usando texto o un símbolo provisional (`AX`) en lugar del asset real del producto disponible en `src/assets/logo.png`.

Esto genera inconsistencias visuales entre la carga, la cabecera y el branding global. También hace que la app se sienta menos pulida y menos identificable como producto.

## Solución propuesta

- Usar `src/assets/logo.png` como único activo de marca para:
  - splash screen,
  - header,
  - cabecera de páginas principales,
  - cualquier marca institucional del producto.
- Mantener el texto `alXns` como complemento, no como sustituto del logo.
- Diseñar el contenedor para que el logo conserve proporción y no se deforme en móvil.

## Criterios de aceptación

- El splash muestra el logo real y no una letra o marca temporal.
- El header usa el mismo logo y mantiene coherencia visual.
- El logo se adapta bien a tamaños pequeños y grandes sin distorsionar.
- La marca se ve consistente en todas las vistas principales.

## Pendiente

Validar si el asset requiere versión dark/light o si se va a reutilizar con un fondo transparente y contenedor específico.
