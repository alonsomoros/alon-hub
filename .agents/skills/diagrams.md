---
name: diagrams
description: Crea y mantiene diagramas SVG verificables de arquitectura, pantallas, flujos de datos y entrega para este repositorio.
argument-hint: "Area: architecture, screens, data, delivery or all"
---

# /diagrams

## Objetivo

Documentar visualmente el sistema sin separar el diagrama de la realidad del repositorio. Los SVG se guardan en `docs/diagramas/` y deben poder abrirse directamente en un navegador.

## Flujo

1. Leer `AGENTS.md`, `WORKFLOW.md`, `CODE_STANDARD.md`, `context/INDEX.md`, `context/STYLE_GUIDE.md`, `Issues/README.md`, `.agents/context/system-status.md`, la arquitectura y los requisitos relacionados.
2. Inspeccionar entrypoints, componentes, scripts, integraciones y workflow CI. Distinguir `IMPLEMENTADO`, `PREPARADO` y `PENDIENTE`.
3. Elegir el diagrama solicitado: `architecture`, `screens`, `data`, `delivery` o `all`.
4. Generar SVG accesible con `title`, `desc`, viewBox estable, tipografia legible, flechas con marcador y leyenda de estados. No usar imagenes externas ni texto que contradiga el codigo.
5. Mantener el Mermaid fuente en `docs/diagramas/architecture-diagrams.mmd` cuando exista; el SVG es la salida visual consumible.
6. Actualizar `docs/codebase/ARCHITECTURE.md` y la nota `Issues/` cuando el diagrama revele una decision o divergencia nueva.
7. Validar que cada SVG sea XML bien formado, que todos los ids de flechas existan y que los links/documentos apuntados existan.

## Convenciones visuales

- Fondo claro, alto contraste y formas simples.
- Verde: implementado; amarillo: preparado; rojo: pendiente o riesgo.
- Usar flechas para flujo y lineas discontinuas para dependencias futuras.
- El texto debe describir responsabilidades y contratos, no decorar.
- Preferir SVG estatico y portable; no insertar JavaScript ni datos sensibles.

## Entrega

La respuesta debe listar los SVG creados, los documentos actualizados, las divergencias entre intencion y realidad y la validacion ejecutada. Si una relacion no esta demostrada por el codigo, marcarla como `PENDIENTE` o `[TODO]`.
