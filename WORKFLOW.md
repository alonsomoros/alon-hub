# Workflow de trabajo

Este documento es el dueño del proceso, la trazabilidad y las reglas de Git. Se lee completo junto con `AGENTS.md` al inicio de cada tarea.

## 1. Preflight obligatorio

Antes de editar:

1. Leer `AGENTS.md`, este archivo, `CODE_STANDARD.md`, `context/INDEX.md`, `context/STYLE_GUIDE.md`, `context/VISION.md`, `.agents/context/system-status.md` e `Issues/README.md`.
2. Leer solo la documentación y el código de las áreas afectadas.
3. Comprobar `git status --short --branch`, rama y cambios previos. Nunca ocultar, revertir ni mezclar cambios ajenos.
4. Clasificar la petición: `feat`, `fix`, `docs`, `architecture`, `ci` o `chore`.
5. Escribir o localizar una issue de GitHub y asignar `REQ-XXX` antes de cambiar comportamiento. Si no hay autenticación, crear la nota local en `Issues/` y dejar explícito el bloqueo.
6. Formular una hipótesis verificable del comportamiento esperado, un check barato que pueda falsarla y un plan mínimo.

No se empieza a editar hasta poder responder: qué problema se cambia, qué no se cambia, qué requisito lo cubre y cómo se verificará.

## 2. Matriz de impacto documental

| Cambio | DEBE actualizar | Puede requerir |
|---|---|---|
| UI, navegación o comportamiento | requisito funcional, `Issues/`, tests | `docs/diagramas/screens-flow.svg` |
| Estado, datos o persistencia | requisito, `Issues/`, tests | `docs/arquitectura/`, `data-flow.svg` |
| Endpoint, integración o configuración | arquitectura, integración, requisito, skill afectada, tests | `architecture.svg`, `data-flow.svg` |
| Estructura o decisión transversal | `context/`, arquitectura, `Issues/` | ADR solo si cumple `AGENTS.md` sección 4.4 |
| CI/CD, GitHub o tooling | `WORKFLOW.md`, skill/CI, `Issues/` | `delivery-flow.svg` |
| Solo texto o corrección documental | documento dueño y `Issues/` si cambia trazabilidad | no crear requisito ficticio |

Si un artefacto no cambia, el resumen de la issue debe decir `Sin cambio: motivo`.

## 3. Implementación

- Implementar el cambio mínimo y preservar APIs/patrones existentes.
- Cada requisito nuevo debe tener criterios de aceptación verificables.
- Cada comportamiento nuevo o corregido debe tener test de caja negra cuando exista runner; su nombre debe incluir `REQ-XXX`.
- Actualizar requisitos, backlog, issues, arquitectura y diagramas en el mismo cambio cuando proceda.
- Si aparece una decisión de alto impacto, proponer ADR y esperar aprobación; no crear ADR por iniciativa propia.

## 4. Validación

Después de cada edición sustantiva, ejecutar primero el check más estrecho. Antes de commit, como mínimo:

```bash
npm run lint
npm run build
```

Además, validar SVG/XML, diagramas o documentación afectados. Si falla algo, corregir la misma superficie y repetir la validación. El informe de la issue debe listar comandos y resultado.

## 5. Git y GitHub

- No usar `git reset --hard`, `git checkout --` ni `push --force`.
- No hacer commit de secretos, `dist/` ni cambios ajenos.
- Commit obligatorio:

```text
<type>(<scope>): <summary> (REQ-XXX)

Refs #<issue>
Requirements: REQ-XXX
Tests: <commands>
Docs: <files or Sin cambio: motivo>
```

- Usar `Refs #N` en todos los commits cuando exista issue remota. Si GitHub esta bloqueado por autenticación, usar `Issue local: Issues/NNN-slug.md` y no simular un número. Usar `Closes #N` solo en el último commit/PR, después de push y CI verde, y únicamente cuando el desarrollador confirme el cierre.
- Push solo a una rama autorizada y sin force. Verificar `git status`, commit remoto y CI.
- Si falla autenticación, push o CI, no simular éxito: documentar el bloqueo y mantener la issue abierta.

## 6. Cierre

Una tarea está lista cuando: requisito y issue tienen trazabilidad, código/documentación están sincronizados, tests pasan, diff revisado, commit y push verificados, CI verde y el desarrollador ha confirmado cerrar la issue. Los pendientes deben quedar enumerados, no escondidos en texto histórico.
