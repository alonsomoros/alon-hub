# Revisión global de código y branding

## Contexto

Se ha aplicado una primera toma de producto con dashboard, retos, enlaces y flujo básico. La intención del código es clara, pero durante la revisión global aparecen varios puntos de inconsistencia que conviene documentar y priorizar.

## Hallazgos

### 1. Branding inconsistente en la app

- El splash y el header estaban hardcodeados con el texto `AX` en lugar de usar el asset real del producto.
- Se había dejado la marca textual como una identidad provisional, aunque el repositorio ya incluye `src/assets/logo.png`.
- Esto afecta a la identidad visual, a la coherencia de diseño y a la sensación de “producto terminado”.

**Recomendación**: usar siempre el mismo activo gráfico del producto para splash, header y marca principal; si se quiere apoyar texto, hacerlo como texto de apoyo, no como sustituto del logo.

### 2. Datos “de muestra” mezclados con producto

- El dashboard contiene fechas, servicios y métricas estáticas que se comportan como reales aunque el estado del sistema indica que aún no hay integración de datos reales.
- Esto es correcto para la fase de foundation, pero hay que dejarlo explícito para no confundir desarrollo con producto final.

**Recomendación**: mover estos valores a un `mockData` separado o a un módulo de configuración con etiqueta clara de `prototipo`/`mock`, y no presentarlos como estado real aún sin la integración.

### 3. `QuickLink` tiene campo `logoUrl`, pero no se usa en la creación ni en la persistencia

- La tipología del modelo ya contempla un `logoUrl?: string`, pero la lógica de alta de enlaces crea nuevos enlaces sin esa propiedad y el render usa solo `resolveLinkLogo(url)`.
- Este patrón es válido como fallback, pero es una inconsistencia conceptual: el modelo admite override local y la implementación no lo explota.

**Recomendación**: centralizar la resolución del logo con una función que priorice `logoUrl`, luego dominio fijo y luego fallback local. Esto permite una marca personalizada sin romper la UX.

### 4. Dependencia externa para favicon

- La resolución actual usa Google Favicons como acceso remoto.
- Funciona para prototipos, pero puede variar según CORS, privacidad, bloqueo de terceros y disponibilidad del servicio.

**Recomendación**: mantener fallback local y, cuando la persistencia de enlaces se complete, permitir `logoUrl` manual o un adaptador interno con caché para reducir la dependencia.

### 5. `App.tsx` es muy denso y mezcla lógica de presentación, estado y configuración

- El archivo principal agrupa: datos de ejemplo, fetch de quotes, navegación, formularios, links, retos, lógica de render y estilos de UI.
- A medio plazo esto dificultará que sea mantenible y testeable.

**Recomendación**: separar por dominio: `Dashboard`, `HomeView`, `LinksView`, `GoalsView`, `data`, `config`, `utils` y `types`, o al menos mover configuraciones y helpers a módulos dedicados.

### 6. Fecha literal en la pantalla principal

- El texto `27 de octubre de 2026` está hardcodeado.
- Aunque sirve para maqueta, se trata de contenido dinámico del día que debe derivarse de la fecha actual o de una config.

**Recomendación**: usar `new Date().toLocaleDateString(...)` y mantener la zona horaria en el locale del usuario.

### 7. Criterio de validación del cambio

- La validación con `npm run lint` y `npm run build` está correcta y se ha ejecutado con éxito. Esto da buena evidencia de estabilidad para esta iteración.

## Recomendaciones de prioridad

1. Registrar la marca real del producto en todas las vistas principales.
2. Normalizar la resolución de logos con prioridad explícita: `logoUrl` > dominio > fallback icono.
3. Separar `mockData` y `config` del render principal para evitar confusión de estado real/falso.
4. Mover la fecha a un cálculo dinámico.
5. Preparar la abstracción de data adapters antes de añadir integraciones reales.

## Estado

Se implementó la corrección de marca con el asset real y se dejó la revisión global documentada. La parte de persistencia y separación de capas sigue pendiente como mejora de arquitectura, no como bug inmediato.

## Evidencia

- `npm run lint`
- `npm run build`

Ambas validaciones han sido ejecutadas y completadas correctamente.
