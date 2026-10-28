# Propuesta: retos, racha y edición

## Estado

Implementado en memoria. Requisito: `REQ-008`.

## Problema

En Inicio, la racha aparece junto a un porcentaje (`68%`), aunque una racha es una magnitud acumulada y no un progreso porcentual. Además, el botón de nuevo reto no crea nada y el botón de ajustes todavía no edita el reto.

## Propuesta

### Racha

Separar visual y semánticamente la racha del progreso: mostrar `12 días seguidos` pegado al título de la tarjeta de retos, sin porcentaje asociado. El porcentaje debe pertenecer solo al progreso de un reto concreto.

### Modelo de reto

```ts
interface HabitGoal {
  id: string
  title: string
  description: string
  category: GoalCategory
  current: number
  target: number
  progress: number
}
```

`progress` debería derivarse de `current / target`, limitarse entre 0 y 100 y no editarse manualmente. `category` debería salir de un registro cerrado de categorías con icono, color y etiqueta accesible.

### Alta y edición

- `Nuevo reto` abre un formulario/modal con título, descripción, categoría, valor actual y objetivo/rango.
- El botón de ajustes abre el mismo formulario precargado.
- Validar título obligatorio, objetivo positivo, actual no negativo y actual no mayor que objetivo.
- Mantener la edición local primero; persistencia y sincronización quedan fuera hasta decidir el store.

## Alternativas

1. Porcentaje editable: simple, pero permite estados incoherentes con el rango.
2. Porcentaje derivado de actual/objetivo: más consistente y recomendado.
3. Rango como texto libre: flexible, pero difícil de validar y representar.
4. Rango numérico con unidad: más accesible para barras y métricas.

## Decisiones adoptadas

- El rango usa número actual, objetivo y unidad libre; las categorías iniciales son Lectura, Movimiento y Aprendizaje.
- Se permite superar el objetivo; la barra y el porcentaje visual se limitan a 100%.
- Al editar actual/objetivo se conserva un snapshot en el historial en memoria.
- Se incluye archivar; eliminar y duplicar quedan fuera.
- La racha permanece temporal/estática en esta fase y aparece junto al título, sin porcentaje.

## Impacto previsto

Actualizados `src/App.tsx` y `src/index.css` con modelo, alta, edición, archivado, categorías, historial en memoria y porcentaje derivado. Pendiente añadir tests de caja negra y persistencia local; no crear ADR hasta decidir el store.
