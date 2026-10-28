# Testing

## Test stack and commands

- Framework de tests: no configurado. `[TODO]` elegir runner y estrategia.
- Lint: Oxlint con `npm run lint`.
- Validacion de tipos/build: `npm run build`.
- CI: GitHub Actions ejecuta `npm ci`, lint y build.

```bash
npm run lint
npm run build
```

No existen comandos de unit, integration, e2e o coverage en `package.json`.

## Test layout

No hay archivos de test ni setup detectados. `[TODO]` crear tests para navegacion, fallback de cita, alta/borrado/reordenacion de enlaces y PWA movil.

## Scope matrix

| Scope | Covered? | Target | Notes |
|---|---|---|---|
| Unit | No | modelos y handlers de UI | `[TODO]` |
| Integration | No | integraciones HTTPS futuras | `[TODO]` |
| E2E | No | Inicio, Retos, Enlaces y PWA | backlog pendiente |

## Mocking and isolation

No hay estrategia de mocks porque no hay runner configurado. La cita depende de red real en runtime y usa fallback local.

## Coverage and quality

No hay herramienta ni umbral de coverage. La señal actual es lint/build local y CI.

## Evidence

- `package.json`
- `.github/workflows/ci.yml`
- `docs/requisitos/backlog-features.md`
