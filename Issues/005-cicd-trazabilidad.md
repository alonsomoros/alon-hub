# CI/CD, GitHub y trazabilidad

## Problema

El repositorio no tenía un flujo explícito para pasar de una petición funcional a una issue, una implementación validada, un commit consistente, CI, push y cierre verificable.

## Solución propuesta

Añadir una skill local de entrega, un workflow de GitHub Actions para lint/build, una plantilla de issue y reglas en `AGENTS.md`, backlog y requisitos. Cada cambio debe tener REQ, issue, criterios de aceptación y evidencia de tests.

## Decisión

Adoptar `.agents/skills/cicd-github-delivery.md` como procedimiento operativo. Usar `npm ci`, `npm run lint` y `npm run build` en CI. Los commits usarán Conventional Commits con issue y requisito; el cierre se hará con `Closes #N` solo después de push y CI verde.

## Estado

- Configuración local: en implementación.
- Requisito: `REQ-005`.
- Issue GitHub: pendiente de crear; el conector requiere autenticación y el repositorio público no muestra issues.
- Tests requeridos: `npm run lint`, `npm run build`.
- Push: se intentará sobre `main` sin force.
- Cierre: bloqueado hasta disponer de un número de issue real y CI verde.
