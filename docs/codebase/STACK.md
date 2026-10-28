# Stack

## Runtime

- Lenguaje principal: TypeScript con JSX; `tsconfig.app.json` usa target ES2023 y modo bundler.
- Runtime de desarrollo/build: Node.js con npm; las versiones exactas de Node no estan fijadas en un `.nvmrc` visible. `[TODO]` fijar version minima.
- Framework: React 19 con Vite 8.
- PWA: `vite-plugin-pwa` con `registerType: autoUpdate`.

## Dependencias de produccion

- `react`, `react-dom`: runtime UI.
- `lucide-react`: iconografia.
- `tailwindcss`, `@tailwindcss/vite`: estilos/utilidades.
- `vite-plugin-pwa`: manifest y service worker.

## Herramientas de desarrollo

- TypeScript 7, Vite, `@vitejs/plugin-react`, Oxlint y tipos de React/Node.
- Scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`.

## Evidencia

- `package.json`
- `tsconfig.app.json`
- `vite.config.ts`
