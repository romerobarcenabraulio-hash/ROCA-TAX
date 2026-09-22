# ROCA TAXIDERMY — Browser / Print QA · 22 SEP 2026

Estado: TARGETED QA PASS / RELEASE STILL BLOCKED

## Fuente probada

Los archivos HTML/CSS/JS se leyeron desde la rama controlada `recovery/roca-audit-master-v2` y se reconstruyeron en un harness local de navegador para poder ejecutar Chromium sin depender de un despliegue externo.

Archivos cubiertos:
- index.html
- app.js
- styles.css
- master-data.js
- editorial-data.js
- workshop-data.js
- control-data.js
- assurance-data.js

Los bloques legacy no visibles en navegación V2 se sustituyeron en el harness por stubs vacíos; por diseño no forman parte del DOC FINAL ni del COMPENDIO V2.

## Pruebas ejecutadas

### Desktop
- DOC FINAL: portada + 8 secciones.
- COMPENDIO: portada + 21 secciones.
- navegación por cada sección;
- hash/anchor por sección;
- detección de overflow horizontal;
- tablas principales;
- captura de portada, Taller, Montaje, Assurance y Notas;
- revisión de errores/warnings de consola.

Resultado:
- no overflow horizontal en desktop;
- navegación resolvió las secciones esperadas;
- no errores/warnings de consola en el harness.

### Mobile · 390 × 844
Primera pasada:
- se detectó overflow horizontal en Taller por tabla de áreas.

Corrección:
- tabla móvil con `table-layout: fixed`;
- wrapping explícito de celdas/contenido.

Segunda pasada:
- overflow horizontal: **NO**;
- tabla contenida dentro de la hoja.

### Print / PDF
Primera pasada:
- DOC FINAL produjo 10 páginas para 9 artículos;
- Taller se partía y generaba una hoja extra con el bloque final.

Corrección:
- atributos `data-section` al render;
- reglas de impresión específicas para Taller;
- densidad tipográfica/tabla ajustada sólo para print;
- break-inside/page-break-inside defensivo.

Segunda pasada:
- 9 artículos → **9 páginas**;
- tamaño Letter;
- Taller quedó en una página completa sin perder sus bloques;
- inspección visual dirigida de la página Taller: contenido completo visible y folio presente.

## Cambios aplicados al repo

- `styles.css`: corrección mobile + print pagination.
- `app.js`: `data-section` para QA/estilos de impresión controlados.

## Limitaciones

- No se pudo clonar el repo desde el container por restricción de red del runtime; los archivos usados se obtuvieron directamente por el conector GitHub y se probaron localmente.
- No se probó un deployment público/Vercel real.
- No se ejecutó regresión pixel-a-pixel contra un baseline aprobado anterior.
- Heritage todavía carece de fotografía editorial real.
- El QA de artefacto no cierra evidencia de campo, BIWO real ni Assurance.

## Veredicto

**PASS — TARGETED BROWSER / PRINT QA**

Aplica únicamente al comportamiento y layout probado en esta ronda.

El release general permanece:

**BLOCKED — NO LIBERAR COMO VERSIÓN DEFINITIVA**
