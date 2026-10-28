# Branding con asset real en la app

## Problema

La marca principal de la UI estaba usando texto o un símbolo provisional (`AX`) en lugar del asset real del producto disponible en `src/assets/logo.png`.

Además, el manifest PWA seguía apuntando a un icono anterior (`/favicon.svg` con branding morado y tipo rayo), por lo que en la instalación móvil seguía apareciendo el icono incorrecto aunque la app ya mostrase el nuevo logo en las vistas.

La incorporación de `public/icons/logo-*.png` requiere que el manifest generado por Vite use esas rutas públicas, no un PNG único en la raíz.

Esto genera inconsistencias visuales entre la carga, la cabecera, el branding global y la instalación como app nativa.

## Solución propuesta

- Usar `src/assets/logo.png` como activo principal para:
  - splash screen,
  - header,
  - cabecera de páginas principales,
  - favicon del navegador,
  - manifest PWA / icono de instalación.
- Mantener el texto `alXns` como complemento, no como sustituto del logo.
- Diseñar el contenedor para que el logo conserve proporción y no se deforme en móvil.
- Ajustar ligeramente la escala del logo para mantenerlo más compacto en la UI.
- Usar un fondo claro (`#f5f7f4`) en el manifest y en el navegador para mejorar el contraste del logo verde.

## Criterios de aceptación

- El splash muestra el logo real y no una letra o marca temporal.
- El header usa el mismo logo y mantiene coherencia visual.
- El logo se adapta bien a tamaños pequeños y grandes sin distorsionar.
- La marca se ve consistente en todas las vistas principales.
- La instalación PWA ofrece los iconos `logo-*.png` desde `/icons/` y usa el fondo claro de la aplicación.

## Pendiente

Validar si el asset requiere versión dark/light o si se va a reutilizar con un fondo transparente y contenedor específico.
