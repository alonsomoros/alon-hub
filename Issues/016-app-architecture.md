# Refactor de arquitectura del archivo principal

## Problema

`src/App.tsx` agrupa demasiadas responsabilidades: datos de ejemplo, fetch de citas, navegación, lógica de enlaces, retos, formularios y render de vistas. El archivo crece demasiado y dificulta mantenimiento, pruebas y evolución.

## Solución propuesta

Separar por dominio para mantener cada capa con una responsabilidad clara:

- `components/` para vistas y widgets,
- `data/` para mock data y config,
- `types/` para modelos,
- `utils/` para resolvers y helpers,
- `App.tsx` solo como orquestador de la UI.

## Criterios de aceptación

- `App.tsx` queda reducido a composición y estado de alto nivel.
- La lógica de cada vista vive en su módulo.
- La resolución de datos y la UI quedan separadas.
- Será más sencillo añadir pruebas y refactors futuros.

## Pendiente

Definir la estructura final del proyecto antes del primer gran crecimiento de vistas o funciones.
