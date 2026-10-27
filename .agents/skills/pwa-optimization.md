# PWA optimization

- Mantener el shell y assets críticos en precache.
- Usar `registerType: autoUpdate` con service worker generado por VitePWA.
- No bloquear el primer render por n8n; usar splash breve y skeletons en widgets.
- Añadir timeouts, estados offline y feedback háptico solo para acciones explícitas.
