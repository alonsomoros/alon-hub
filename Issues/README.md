# Issues e ideas

Este directorio conserva la trazabilidad funcional del proyecto. Antes de cambiar comportamiento, consultar este índice y la nota relacionada.

Cada nota distingue el problema observado, la solución propuesta y la decisión adoptada. Las decisiones técnicas deben respetar `AGENTS.md`, `.agents/context/system-status.md` y la arquitectura documentada.

## Alcance actual

- [Enlaces responsive y ordenación](001-enlaces-responsive.md): corregido en la UI; queda pendiente persistir el orden.
- [Páginas y vistas](002-paginas-y-vistas.md): dashboard, retos y enlaces en primera iteración.
- [Parámetros y preferencias](003-parametros-y-preferencias.md): configuración preparada, pantalla pospuesta.
- [Arquitectura e integraciones](004-arquitectura-e-integraciones.md): datos estáticos ahora, adaptadores tipados después.
- [CI/CD y trazabilidad](005-cicd-trazabilidad.md): flujo obligatorio de issue, tests, commit, push y cierre.

## Entrega

La skill operativa es `.agents/skills/cicd-github-delivery.md`. Toda funcionalidad debe tener issue de GitHub y requisito `REQ-XXX`; la issue solo se cierra tras validación local, push y CI verde.
