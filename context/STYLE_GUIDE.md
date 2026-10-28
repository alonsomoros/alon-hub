# Style guide

## Escritura

- Idioma del repositorio: español; nombres de código siguen las convenciones del lenguaje.
- Redacción breve, verificable y sin afirmar planes como si fueran comportamiento implementado.
- Usar `[TODO]` para desconocidos y `[BLOQUEADO]` para dependencias externas no disponibles.
- No duplicar hechos: enlazar al documento dueño.

## Identificadores

- Requisitos: `REQ-XXX`, secuenciales y únicos en `docs/requisitos/`.
- Issues: número real de GitHub; si no existe autenticación, usar una nota local y no inventar `#N`.
- Decisiones de arquitectura: solo ADR aprobado; una propuesta va a `Issues/` hasta aprobarse.

## Referencias

Las referencias deben usar rutas relativas existentes. Cada documento de análisis incluye evidencia. Los diagramas marcan `IMPLEMENTADO`, `PREPARADO` o `PENDIENTE` y no presentan intención como hecho.
