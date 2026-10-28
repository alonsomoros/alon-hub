# Páginas y vistas

## Problema

El producto necesita una primera impresión sencilla, con navegación clara entre el resumen personal y las áreas editables, sin convertirse todavía en una consola técnica.

## Solución propuesta

Mantener un shell PWA con navegación simple y tres vistas: Inicio, Retos y Enlaces. La portada concentra estado, servicios, accesos y progreso; las vistas dedicadas contienen las acciones de edición.

## Decisión

La primera iteración conserva `home`, `goals` y `links` dentro de `App.tsx`, con componentes separados por vista y layout responsive. Ajustes y perfil quedan fuera de la primera impresión. La estructura debe poder crecer sin asumir que siempre hay tres servicios.
