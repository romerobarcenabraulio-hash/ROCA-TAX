# ROCA TAXIDERMY — Preaudit gate · 22 SEP 2026

Rama: `recovery/roca-audit-master-v2`

## Ejecución

Se ejecutó el generador de preauditoría de `roca-preaudit-readiness` sobre su registro controlado y se corrió el gate determinista.

## Resultado

- requisitos controlados: **106**
- R1_CRITICAL: **73**
- R2_HIGH: **25**
- R3_NORMAL: **8**
- NOT_CHECKED: **80**
- APPLICABILITY_PENDING: **26**
- VERIFIED: **0**

El gate no encontró errores deterministas de formato/estado.

**VEREDICTO DEL GATE: BLOCKED — NO LIBERAR COMO COMPLETE/COMPLIANT.**

## Qué significa

El sistema de control está suficientemente estructurado para ejecutar el levantamiento, pero ninguna fila se convierte en cumplimiento porque exista el requisito escrito.

Los 106 renglones se convierten en cinco rutas de cierre:
- campo/foto;
- medición;
- documento/sistema;
- entrevista;
- especialista/autoridad.

## Prioridad de cierre

1. R1 de incendio/rutas/químicos/maquinaria/custodia de pieza/BIWO.
2. R1 de vida silvestre y frontera por caso.
3. R1 de inmueble/funcionamiento/PC/ambiental aplicable.
4. R2 de activos/mantenimiento/metrología/competencia/handoffs.
5. R3 de orden, presentación y comunicación.

## Regla

No perseguir 106 evidencias como 106 tareas separadas.

Un mismo recorrido de área debe cerrar varios requisitos cuando la evidencia realmente los demuestra. Una misma fotografía puede asociarse a varios REQ sólo si cada condición es visible; una medición o documento no se sustituye con foto contextual.
