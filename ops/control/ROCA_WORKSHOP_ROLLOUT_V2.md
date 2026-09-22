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
- evidencia/competencia/BIWO/auditoría: 11/15
- Assurance: 6/10
- HTML/QA: 6/10

**AVANCE V2 DEL TALLER: 76/100 — ESTIMATE CONTROLADO.**

Este 76% significa que además de la arquitectura integral ya existen controles estructurados de activos/mantenimiento, competencia/autorización, flujo de materiales, evidencia y reconciliación de duplicados dentro del HTML. No significa implementación física ni cumplimiento.

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
