# Backlog

## Flujo de entrega

Toda funcionalidad nueva debe tener una issue de GitHub y un requisito `REQ-XXX` documentado en `Issues/`. Antes de cerrar una tarea se deben ejecutar `npm run lint` y `npm run build`; los fallos se corrigen antes del commit. El commit debe referenciar la issue y el requisito, y la issue solo se cierra después del push y de CI verde. Ver `.agents/skills/cicd-github-delivery.md`.

## Entregas completadas

- [x] Skill `/diagrams` y diagramas SVG de arquitectura, pantallas, datos y CI/CD (`REQ-006`).

- [ ] Adaptador n8n para métricas de Raspberry Pi 5.
- [ ] Implementar `raspberryPiStatsShowcase: graph` con gráficas ligeras y accesibles.
- [ ] Healthchecks reales con timeout y fallback offline.
- [ ] Cliente de citas configurable: `default`, `random`, `fav`.
- [ ] Enlace configurable a Grafana.
- [ ] Persistencia local de hábitos con IndexedDB.
- [ ] Persistir enlaces editables y conservar el orden del drag and drop ya implementado.
- [ ] Crear menú de preferencias para tema, modo, cita, orden de servicios y widgets.
- [ ] Notificaciones de degradación de servicios.
- [ ] Ajustes de usuario y configuración de endpoints. El perfil queda fuera de la primera iteración.
- [ ] Pruebas de accesibilidad y flujos PWA en móvil.
