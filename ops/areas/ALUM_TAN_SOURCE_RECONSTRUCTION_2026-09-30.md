# ALUM-Tan — reconstrucción de fuente controlada

Fecha: 30-sep-2026

## Estado

**RECONSTRUCTED_NOT_ORIGINAL**

El archivo Excel ALUM-Tan original no fue recuperado después de buscar en:
- Drive canónico y búsqueda global por nombre/variantes;
- carpeta de fuentes/manuales;
- Control Plane / ROCA_AUTOPILOT_CONTROL;
- archivos persistentes de conversación y Library.

La lógica siguiente sí está preservada de forma consistente en múltiples snapshots del manual (v24.7, v24.8, PreEntrevistas y 31AGO/391P). Esta reconstrucción conserva conocimiento; **no sustituye el archivo controlado original ni autoriza un calculador de producción**.

## Fórmulas preservadas

Entrada: peso real de pieles en kg.

1. `lb_piel = kg_piel × 2.204`
2. `agua_gal = lb_piel × 0.5`
3. `agua_L = agua_gal × 3.78541`
4. `sal_lb = agua_gal ÷ 2`
5. `sal_kg = sal_lb ÷ 2.204`
6. `alumbre_lb = lb_piel × 0.04`
7. `alumbre_kg = alumbre_lb ÷ 2.2046`
8. `bicarbonato_lb = lb_piel × 0.028`
9. `bicarbonato_kg = bicarbonato_lb ÷ 2.2046`
10. Día 2: dividir el bicarbonato total entre 5 y agregar una parte por hora.

Controles preservados:
- salinidad: 2.2–2.3;
- pH al inicio del día 2: 3.6–3.8;
- pH final: 4.2–4.3;
- segunda adición de alumbre: después de 1 h 30 min, usando **el valor indicado por la hoja controlada para esa carga**.

### Regla crítica

La segunda adición de alumbre **no se reconstruye como “duplicar la primera cantidad”**. El manual preservado ordena usar el valor de la hoja controlada. Sin el Excel original o validación del dueño técnico, ese valor queda sin automatizar.

## Verificación independiente del ejemplo preservado

Ejemplo de fuente: 16.08 kg de pieles.

Cálculo reproducido:
- lb piel = 35.44032
- agua = 17.72016 gal = 67.0781 L ≈ 67.10 L
- sal = 4.0200 kg
- alumbre = 0.643025 kg ≈ 0.6432 kg
- bicarbonato = 0.450117 kg
- cada quinta parte de bicarbonato ≈ 0.0900235 kg

El ejemplo conservado de 67.10 L agua / 4.02 kg sal / 0.6432 kg alumbre es coherente con las fórmulas dentro de redondeo.

## Estado de liberación

- preservación de fórmula: PASS;
- consistencia matemática del ejemplo: PASS;
- original Excel recuperado: NO;
- segunda adición exacta de alumbre reconstruible: NO;
- calculador HTML/operativo liberado: **BLOCKED**;
- validación por dueño técnico/campo: PENDIENTE.

## Condición para liberar calculador

Se requiere al menos uno:
1. recuperar el Excel ALUM-Tan original y verificar fórmulas/celdas/versión; o
2. validación documentada del responsable técnico de Curtiduría sobre todas las fórmulas, secuencia, productos, unidades y segunda adición, seguida de prueba controlada.

No constituye declaración de seguridad química, cumplimiento normativo ni autorización de proceso.
