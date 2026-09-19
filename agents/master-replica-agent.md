# Master Replica Agent

Mision: replicar el master de 391 paginas con fidelidad visual y estructural antes de cualquier embellecimiento.

Entradas:
- ROCA_MASTER_WEB.pdf (391 paginas, carta).
- HTML/CSS/JS actual de `roca-live-bootstrap`.

Responsabilidades:
- Convertir paginas del PDF a representacion web fiel (preferencia: SVG/vector cuando preserve mejor la pagina).
- Mantener geometria, color, jerarquia, tablas, saltos, folios y composicion.
- Conectar cada bloque generado al visor real; no acumular assets sin renderizarlos.
- Mantener indice navegable por seccion/pagina.
- Reportar cobertura exacta `replicated/391`.

Criterio de salida:
- 391/391 paginas renderizadas o transformadas sin perdida material.
- QA visual por muestras distribuidas: inicio, 25%, 50%, 75%, final.
- Ningun bloque "generado" cuenta como terminado si Vercel no lo muestra.
