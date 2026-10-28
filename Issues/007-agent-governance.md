# Gobierno del flujo de agentes

## Problema

Las reglas existentes exigian documentar cambios, pero no definian con precision el orden de lectura, el dueño de cada hecho, una matriz de impacto ni un gate que obligara a revisar requisitos, issues, tests y diagramas antes de entregar.

## Solucion propuesta

Separar responsabilidades entre `AGENTS.md`, `WORKFLOW.md`, `CODE_STANDARD.md`, `context/`, `Issues/` y `docs/`, siguiendo el SOP compartido como referencia y adaptandolo a React/Vite.

## Decision

- `AGENTS.md` enruta y define autoridad/mapa.
- `WORKFLOW.md` define preflight, matriz de impacto, validacion, Git y cierre.
- `CODE_STANDARD.md` define codigo y tests.
- `context/` define indice, vision y estilo.
- `Issues/` conserva tareas, propuestas y bloqueos.
- El cierre de una issue requiere push, CI verde y confirmacion explicita del desarrollador.

## Estado

- Requisito: `REQ-007`.
- Issue GitHub: pendiente si no hay autenticacion disponible.
- Validacion: lint, build, diff y lectura de reglas nuevas pasan.
- No se crea ADR: es una regla de proceso y sus dueños estan definidos en `AGENTS.md`.
