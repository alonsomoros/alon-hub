# alXns Command Center PWA

## Vision
PWA rápida y privada para centralizar infraestructura self-hosted, estado de aplicaciones, accesos contextuales y objetivos personales.

## Stack
- React + TypeScript + Vite
- Tailwind CSS v4 y CSS modular para la UI cyberpunk
- vite-plugin-pwa para manifest, precache y actualización automática
- Lucide React para iconografía
- Integraciones futuras mediante endpoints HTTPS de n8n y APIs ligeras

## Development rules
- Consulta `.agents/context/system-status.md` antes de cambiar comportamiento.
- Mantén TypeScript estricto y componentes desacoplados.
- Las peticiones externas no deben bloquear la interfaz: usa skeletons, timeouts de 1.5 s y estados `OFFLINE / UNREACHABLE`.
- Actualiza el skill correspondiente cuando añadas endpoints, integraciones o widgets.
- Mantén los diagramas Mermaid de `docs/diagramas/` sincronizados.

## Commands
- `npm run dev`: servidor local
- `npm run build`: typecheck y build de producción
- `npm run lint`: lint con Oxlint
- `npm run preview`: servir `dist`

## Architecture
La UI vive en `src/`. El dashboard actual usa datos estáticos para validar la experiencia; las fuentes n8n/Grafana se conectarán detrás de adaptadores tipados, sin acoplar widgets a la red.
