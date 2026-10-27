# Preferencias de interfaz

Este documento es la fuente de verdad para la iteración de configuración. No se implementa todavía como pantalla pública, pero los componentes deben aceptar estas opciones sin reescrituras.

```ts
type UiTheme = 'soft' | 'light' | 'dark';
type QuoteMode = 'default' | 'random' | 'fav';
type StatsShowcase = 'graph' | 'pbar';

interface UiPreferences {
  theme: UiTheme;
  mode: 'light' | 'dark';
  quote: QuoteMode;
  orderServices: string[];
  raspberryPiStatsShowcase: StatsShowcase;
}
```

## Decisiones iniciales

- La primera iteración usa `theme: 'soft'`, `mode: 'light'`, `quote: 'random'` y `raspberryPiStatsShowcase: 'pbar'`.
- `orderServices` debe aceptar ids estables y permitir reordenación sin acoplarse al nombre visible.
- La cita usa `{ content, author }`, timeout y fallback local.
- Ajustes y perfil quedan fuera de la primera impresión y se incorporarán en una futura pestaña de preferencias.
- La persistencia prevista es local primero y sincronizable después; nunca debe bloquear el render.
- Las vistas de retos y enlaces deben usar componentes reutilizables, estados vacíos, navegación por teclado y layout responsive.

## Orden de servicios

La preferencia prevista puede representar secuencias como `pihole`, `servicios`, `health`, `links`, o cualquier combinación de módulos registrados. La vista no debe asumir que siempre existen tres servicios.
