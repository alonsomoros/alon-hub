# Conventions

## Naming and organization

- Componentes y tipos: PascalCase (`Dashboard`, `QuickLink`).
- Variables, funciones y handlers: camelCase (`activeView`, `reorderLinks`).
- Archivos de documentacion y skills: kebab-case.
- La UI actual esta agrupada por vistas dentro de `src/App.tsx`, no por carpetas de feature.

## TypeScript

`tsconfig.app.json` activa `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `strict` no aparece explicitamente. `[TODO]` decidir si debe habilitarse `strict: true`.

## Imports and styles

Los imports de iconos se agrupan desde `lucide-react`; los tipos se importan con `import type`. Los estilos globales estan en CSS plano y Tailwind se integra desde Vite.

## Error handling

La cita captura fallos de `fetch` y usa `fallbackQuote`. No hay logger estructurado ni boundary de errores documentado. La validacion de formularios de enlaces descarta entradas vacias.

## Evidence

- `src/App.tsx`
- `src/index.css`
- `tsconfig.app.json`
- `.oxlintrc.json`
