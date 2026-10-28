# Skill de diagramas y analisis de arquitectura

## Problema

El repositorio tenia un unico diagrama Mermaid conceptual y no disponia de una skill operativa para analizar arquitectura, pantallas, datos y entrega manteniendo los diagramas sincronizados con el codigo.

## Solucion propuesta

Crear la skill `/diagrams`, generar SVG accesibles y portables, completar la documentacion verificable de `docs/codebase/` y distinguir implementado, preparado y pendiente.

## Decision

Adoptar `.agents/skills/diagrams.md`. Los artefactos viven en `docs/diagramas/`: arquitectura, pantallas, datos y entrega CI/CD. Mermaid sigue como fuente textual de arquitectura y los SVG se validan como XML.

## Requisito y estado

- Requisito: `REQ-006`.
- Issue GitHub: pendiente de crear si no hay autenticacion disponible.
- Validacion: XML de SVG, `npm run lint`, `npm run build` y diagnosticos.
- Pendiente: automatizar render/screenshot de SVG y ampliar diagramas cuando aparezcan adaptadores reales.
