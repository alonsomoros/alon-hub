# Parámetros y preferencias

## Problema

Hay decisiones de presentación que deben ser configurables, pero una pantalla de ajustes temprana añadiría ruido a la experiencia inicial.

## Solución propuesta

Mantener una configuración tipada separada de los datos: tema, modo, fuente de citas, orden de servicios y presentación de métricas. Preparar los componentes para aceptar estas opciones y persistirlas localmente en una fase posterior.

## Decisión

Se mantiene `DashboardConfig` con `theme: soft`, `mode: light`, `quote: random`, `orderServices` y `raspberryPiStatsShowcase: pbar`. La pantalla pública de preferencias queda pospuesta; la persistencia será local primero y sincronizable después, sin bloquear el render.
