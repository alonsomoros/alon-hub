# Guía de despliegue

1. Ejecuta `npm ci`.
2. Ejecuta `npm run build`.
3. Sirve `dist/` detrás de HTTPS y configura fallback de SPA a `index.html`.
4. Define las URLs de n8n y Grafana en el entorno del despliegue.
5. Verifica manifest, service worker y navegación offline desde Lighthouse.

El contenedor de producción debe servir los estáticos con un servidor HTTP ligero y no exponer secretos al cliente.
