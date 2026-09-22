# ROCA TAXIDERMY — Rollout de arquitectura integral del taller V2

Fecha base: 21 SEP 2026
Rama de trabajo: recovery/roca-audit-master-v2
Estado: EN EJECUCIÓN / NO LIBERAR

## Alcance
Aplicar una arquitectura integral a todo el taller sin reescribir la metodología fuerte ni crear un libro masivo.

Áreas:
1. Recepción
2. Curtiduría
3. Formas/Moldes/Réplicas
4. Montaje
5. Retoque
6. Bases
7. Carpintería/Corte/Embalaje
8. Soldadura/Adaptación
9. Blanqueado
10. Espacios de soporte

## Regla de porcentaje
El porcentaje reportado se calcula sobre 100 puntos verificables:

- 20 pts — metodología fuerte preservada y conflictos visibles;
- 25 pts — arquitectura integral por todas las áreas;
- 20 pts — estándar físico + implementación definido;
- 15 pts — evidencia/competencia/BIWO/auditoría diseñados;
- 10 pts — Assurance/requisitos transversales reconciliados;
- 10 pts — integración HTML + QA navegador/print/release.

Un archivo redactado no gana por sí solo los puntos de evidencia de campo.

## Estado de esta ronda
- metodología: 17/20
- arquitectura integral: 25/25
- estándar físico/implementación: 11/20
- evidencia/competencia/BIWO/auditoría: 12/15
- Assurance: 8/10
- HTML/QA: 8/10

**AVANCE V2 DEL TALLER: 81/100 — ESTIMATE CONTROLADO.**

Este 81% significa que la arquitectura, trazabilidad, evidencia y Assurance ya tienen estructura operable, y el HTML pasó una ronda real de navegador/mobile/print con dos regresiones corregidas. El cuello de botella principal ya es evidencia de campo, BIWO real, validación técnica y cierre documental. No significa implementación física ni cumplimiento.

## Próximos puntos que mueven porcentaje real
1. reconciliar duplicaciones restantes entre libros y estándar común;
2. completar la capa de datos/HTML de detalle sin volver el DOC FINAL masivo;
3. cerrar fuente/roster/estación por área;
4. levantar evidencia física: estaciones, químicos, ventilación, iluminación, residuos, rutas, secado/espera;
5. vincular BIWO real;
6. cerrar competencia/autorización;
7. Assurance/aplicabilidad;
8. browser + print QA.


## Cambio de esta ronda
- workshop-data.js integra el mapa completo del taller y las diez áreas en el HTML de trabajo;
- DOC FINAL usa una síntesis del taller; COMPENDIO conserva el detalle de área;
- la afirmación de un único “master exacto” se sustituyó por autoridad de fuente por sección;
- no se otorgaron puntos adicionales por evidencia física porque aún no existe el cierre de campo.


## Cambio de esta ronda
- roster/estaciones reconciliados con correcciones vigentes y conflictos visibles;
- mapa semántico BIWO definido sin inventar nombres de estados de la UI;
- plan de evidencia por área y por claim definido;
- crosswalk Assurance ↔ área creado;
- paquete de cierre de campo preparado para pedir sólo evidencia que mueve gates;
- DOC FINAL ahora comunica pieza + BIWO + dinero/cliente + evidencia como cuatro flujos sincronizados.


## Cambio de esta ronda · 22 SEP
- registro maestro preliminar de activos/mantenimiento por área;
- matriz operación × competencia/autorización preparada sin asumir autorización por puesto;
- balance preliminar de materiales/servicios/residuos por área;
- capa transversal compacta añadida al COMPENDIO;
- se retiraron de navegación los bloques legacy duplicados sólo después de asignarles hogar canónico;
- source-integrity check de la ronda: PASS estructural, no release.


## Cambio de esta ronda · preaudit/Assurance
- se ejecutó el preaudit pack sobre 106 candidatos de control;
- resultado: 80 NOT_CHECKED, 26 APPLICABILITY_PENDING, 0 VERIFIED;
- gate determinista sin errores de formato, pero BLOCKED para cualquier claim complete/compliant;
- fuentes primarias actuales refrescadas para STPS, municipio/funcionamiento, Protección Civil, SEGAM, SEMARNAT y SENASICA;
- capa Assurance compacta integrada al COMPENDIO y capítulo legal legacy retirado de navegación;
- orden de ejecución de campo definido por olas para cerrar varios REQ con una misma visita sin duplicar evidencia.


## Cambio de esta ronda · browser/print QA
- Chromium QA sobre los archivos controlados de la rama;
- DOC FINAL navega portada + 8 secciones; COMPENDIO portada + 21 secciones;
- sin errores/warnings de consola en el harness;
- se detectó y corrigió overflow móvil de Taller;
- se detectó y corrigió paginación de Taller: 9 artículos del DOC FINAL → 9 páginas Letter;
- deployment público y regresión pixel-a-pixel siguen pendientes.
