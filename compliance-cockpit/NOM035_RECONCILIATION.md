# ROCA Compliance — reconciliación NOM-035 (2026-09-29)

## Hallazgo

El runtime canónico integrado en `compliance-cockpit/data.js` contiene **188** REQ para `NOM-035-STPS-2018`.

El ledger de salud canónico actualmente persistido en Drive (`ROCA_MODULE_HEALTH_CANON_2026-09-29.csv`) todavía registra **156** filas para NOM035 y referencia `NOM035/NOM035_REQUIREMENT_LEDGER_CANON_FINAL.csv`.

## Reconciliación sin pérdida

No se eliminan las filas 157–188 del runtime.

Las 32 filas adicionales están descompuestas así:

- REQ-NOM035-157 a 181: controles granulares 9.1–9.4, incluyendo ruta opcional de unidad de verificación y controles de privacidad/confidencialidad.
- REQ-NOM035-182 a 183: controles granulares 10.1–10.2.
- REQ-NOM035-184 a 188: reglas explícitas de calificación/bandas de Guías II–III y tamaño de muestra de Guía III.

El ledger de 156 ya contiene controles agregados para 9.1–9.4, 10.1–10.2 y referencias a Guías I–V; por eso la diferencia no se interpreta como “32 obligaciones legales nuevas” ni como prueba de cumplimiento. Es una **desagregación/augmentación del modelo de control** que debe reconciliarse con el manifest del módulo.

## Decisión de continuidad

- **PRESERVE**: runtime canónico de 188 filas, porque es el master actualmente hash-locked e integrado.
- **DO NOT CLAIM**: que `ROCA_MODULE_HEALTH_CANON_2026-09-29.csv` está sincronizado con el runtime para NOM035.
- **REBUILD REQUIRED**: el siguiente rebuild controlado de module-health/module-admission debe consumir el mismo manifest de módulos/augmenters que produjo el master de 4,469 filas.
- **NO DESTRUCTIVE DEDUPE**: no borrar por locator parecido; primero demostrar equivalencia semántica y supervivencia de criterio/evidencia/cálculo.

## Canon de runtime vinculado

- master rows: 4,469
- master SHA-256: `0a6b58c77783cf74bbd0a66ea0d4dff5aec18e9ef6a6defbde37b995f45eed9c`
- NOM035 rows in runtime: 188

Este documento es un registro de reconciliación de fuentes, no una declaración de cumplimiento.
