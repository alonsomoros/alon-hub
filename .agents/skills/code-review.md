# Skill: Code Review

## Objetivo

Aplicar una revisión funcional y técnica del proyecto antes de cerrar una tarea, con foco en consistencia, mantenibilidad, accesibilidad y alineación con la arquitectura y los requisitos del repositorio.

## Flujo recomendado

1. Revisar la historia del cambio, la issue y el requisito asociado.
2. Validar si la solución respeta la arquitectura declarada en `AGENTS.md` y `.agents/context/system-status.md`.
3. Comprobar consistencias visibles del producto: branding, estado hardcodeado, nombres, lógica de datos y estilos.
4. Revisar accesibilidad y compatibilidad móvil: foco, tamaño de controles, textos, scroll horizontal, contraste y navegación por teclado.
5. Evaluar si el código cumple el principio de responsabilidad simple: componentes demasiado grandes, lógica mezclada, estado duplicado o secretos de UI en archivos incorrectos.
6. Documentar las inconsistencias encontradas junto con una recomendación priorizada y una hipótesis de riesgo.
7. Revalidar con el check mínimo del proyecto (`npm run lint` y `npm run build`) antes de cerrar.

## Checklist de revisión

- Branding y assets: usar el asset oficial del producto y evitar letras/mascotas hardcodeadas si ya existe un logo.
- Estado y datos: no dejar valores “de muestra” como si fueran reales si la etapa del producto aún no lo soporta.
- Requisitos y decisiones: cada cambio debe conservar la trazabilidad `REQ-XXX` y la nota de issue.
- UI responsive: evitar overflow horizontal, card gigantes, texto truncado sin contexto y controles demasiado pequeños.
- Accesibilidad: labels, focus-visible, aria-labels, soporte por teclado y contrastes adecuados.
- Mantenibilidad: evitar lógica repetida, componentes demasiado complejos y estados duplicados.
- Dependencias: favorecer un adaptador tipado y un fallback local antes de depender de servicios externos.

## Salida esperada

El resultado de la revisión debe quedar documentado en la issue o en una nota local del alcance con:

- Hallazgos prioritarios.
- Riesgos funcionales o de UX.
- Mejora propuesta con criterio de impacto.
- Estado de validación y evidencia.

## Evidencia mínima

- `npm run lint`
- `npm run build`
- Revisión del diff de la zona afectada
