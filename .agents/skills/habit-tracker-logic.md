# Habit tracker logic

```ts
interface HabitGoal {
  id: string;
  title: string;
  category: 'fitness' | 'learning' | 'finance' | 'personal';
  current: number;
  target: number;
  unit: string;
  type: 'counter' | 'progress_bar' | 'stepper';
}
```

El porcentaje se limita entre 0 y 100. Las rachas se derivan de registros diarios consecutivos y se persisten localmente antes de sincronizarse.

La UI de retos debe ser reutilizable, responsive y preparada para crecer desde tres tarjetas a una colección filtrable. El color comunica el progreso, pero siempre debe acompañarse de texto accesible; no depender únicamente del color.
