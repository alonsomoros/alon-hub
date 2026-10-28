# Skill: CI/CD y entrega en GitHub

## Objetivo

Convertir cada petición de funcionalidad en una entrega verificable y trazable desde el requisito hasta GitHub Issues, commit, CI, push y cierre.

## Flujo obligatorio

1. Leer `AGENTS.md`, `WORKFLOW.md`, `CODE_STANDARD.md`, `context/INDEX.md`, `context/STYLE_GUIDE.md`, `context/VISION.md`, `Issues/README.md`, la issue relacionada, `.agents/context/system-status.md` y la documentación de requisitos/arquitectura afectada.
2. Crear o localizar una issue de GitHub antes de cambiar comportamiento. La issue debe incluir problema, solución propuesta, decisión, requisitos, criterios de aceptación, impacto documental y plan de tests.
3. Asignar un identificador local `REQ-XXX` y documentarlo en `Issues/` con estado, archivos afectados y pendientes.
4. Implementar el cambio mínimo y actualizar requisitos, backlog, arquitectura o skills cuando cambie el contrato del sistema.
5. Ejecutar los tests necesarios. Como mínimo, para este proyecto: `npm run lint` y `npm run build`. Añadir tests de comportamiento cuando exista lógica nueva o una regresión reproducible.
6. Si un test falla, diagnosticar y corregir el cambio; repetir el mismo test antes de avanzar. No hacer commit con validación fallida.
7. Revisar `git diff` y `git status`; incluir solo cambios relacionados con la issue. No borrar ni revertir cambios previos del usuario.
8. Crear un commit con este formato:

   ```text
   <type>(<scope>): <summary> (REQ-XXX)

   Refs #<issue>
   Requirements: REQ-XXX
   Tests: npm run lint; npm run build
   Docs: <files or Sin cambio: motivo>
   ```

   Tipos permitidos: `feat`, `fix`, `docs`, `test`, `ci`, `chore`, `refactor`.
9. El versionado funcional se toma de `package.json`. Los incrementos de versión se hacen solo cuando la issue lo requiera y deben usar un commit `release: vX.Y.Z`; no inventar tags ni cambiar versiones por una edición menor.
10. Hacer push a la rama autorizada, sin `--force`. Si el push o CI falla, reparar y volver a validar antes de continuar.
11. Mantener la issue abierta hasta que los tests locales pasen, el push/CI esté verde y el desarrollador confirme el cierre. Usar `Closes #<issue>` solo en el último commit o PR después de esa confirmación. Si falta autenticación o permisos, dejar la issue abierta y reportar el bloqueo.

## Reglas de seguridad

- Nunca guardar tokens, credenciales o secretos en el repositorio.
- Nunca hacer push forzado ni reescribir historial compartido.
- No cerrar una issue que no pueda vincularse inequívocamente al cambio ni sin confirmación explícita del desarrollador.
- Los cambios no relacionados que ya existan en la rama deben conservarse y documentarse.

## Definition of Done

Issue con trazabilidad completa, requisitos actualizados, implementación terminada, tests verdes, diff revisado, commit con patrón fijo, push realizado, CI verde y confirmación de cierre; si no, bloqueo documentado.
