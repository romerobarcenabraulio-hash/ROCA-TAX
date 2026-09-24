# ROCA TAXIDERMY — Carpintería, Corte y Embalaje · libro integral V2
Área ID: AREA-CAR
Estado: PLANNED / NOT_IMPLEMENTED / NO LIBERAR

## Fuentes fuertes usadas

| Tema | Fuente | Acción |
|---|---|---|
| Concepto y gobernanza propuesta | master 391P pp. 208–210 | PRESERVE / CORRECT |
| Requisitos físicos preparados | master 391P pp. 211–218 | MERGE_WITHOUT_LOSS / CORRECT |
| Método | master 391P pp. 219–221 | HOLD_PENDING_EVIDENCE |
| Ubicación “espacio del Sr. Pes” | master 391P pp. 212, 214, 216, 220 | CORRECT |
| Persona / estación / equipo real | no existe evidencia primaria localizada | HOLD_PENDING_EVIDENCE |

No se localizó entrevista ni demostración primaria de Carpintería/Embalaje. El módulo histórico declara expresamente que el método no está liberado. Por tanto este libro define **precondiciones de implementación y verificación**, no un proceso de oficio inventado.

---

## 0. Identidad y gobernanza

**Función propuesta:** concentrar corte de madera, armado de cajas y embalaje/protección para evitar que estas tareas consuman tiempo técnico de taxidermia y para separar polvo/recortes de los acabados químicos.

**Estado físico del área:** NOT_IMPLEMENTED / NOT_VERIFIED.

**Puesto operativo:** pendiente de decidir, asignar o contratar.

**Ubicación:** **OPEN / NO ASIGNADA.**  
El 391P proponía el “espacio del Sr. Pes”. Esa decisión queda superada porque Señor Pez y la pedacera pertenecen a Retoque en la gobernanza vigente. Carpintería no puede apropiarse de ese espacio por herencia documental.

**Recibe — diseño previsto:** requerimiento de corte, caja o protección + dimensiones/referencia + ID de orden/pieza.

**Entrega — diseño previsto:** corte, caja o embalaje identificado y listo para el siguiente uso/carga.

Estos handoffs son **arquitectura preparada**, no evidencia de que hoy exista el flujo.

### Gates antes de implementar
- confirmar si ROCA realmente necesita un frente dedicado o si alguna parte seguirá en Bases/Logística;
- definir espacio sin invadir Retoque, circulación, carga, químicos ni otras áreas;
- definir responsable;
- confirmar equipo real;
- demostrar el flujo real;
- definir criterio por tipo de pieza y destino;
- sólo entonces liberar metodología.

### BIWO / registro
Los eventos “requerimiento de embalaje”, “vincular caja a orden” y “listo para carga” quedan como **hipótesis de integración** hasta observar BIWO y la operación real. No crear estados paralelos ni asumir nombres de pantalla.

---

# 1. Área de trabajo · requisitos preparados

Hereda REQ-COM-01..15 cuando el área exista.

El 391P usa **CAR-AREA-01..10**. Se conservan los IDs, pero CAR-AREA-07 se corrige porque su ubicación histórica dejó de ser válida.

## CAR-AREA-01 · Circulación y accesos
Cuando exista el puesto, pasillos, salidas, tableros, extintores y puntos de operación permanecerán libres. Piezas, cajas, madera, cables y herramienta temporal no ocuparán circulación.

## CAR-AREA-02 · Estación y almacenamiento
Herramientas, materiales y consumibles tendrán ubicación definida. El puesto deberá volver a condición utilizable al cerrar la tarea; equipo dañado quedará separado del uso.

## CAR-AREA-03 · Iluminación
La iluminación se verificará en el plano real de corte, trazo y armado cuando la tarea lo requiera.

**HOLD DE TRAZABILIDAD:** el 391P menciona 300 lux para corte/armado y 500 lux para trazo/precisión. Se conservan como referencias históricas, **no como umbrales canónicos**, hasta reconciliar tarea real, medición y Assurance vigente.

## CAR-AREA-04 · Ventilación y extracción
Ventilación/extracción se diseñará contra las operaciones reales: corte, lijado, polvo de madera, adhesivos o acabados que efectivamente se usen. No instalar extracción por copiar el master; primero confirmar equipo, material y generación real.

## CAR-AREA-05 · Emergencia
Rutas y medios de respuesta aplicables permanecerán visibles y accesibles. Cobertura, cantidad y ubicación se resuelven por evaluación real y Assurance, no por una cifra heredada.

## CAR-AREA-06 · Identidad y espera
Toda pieza, caja, corte o trabajo en espera deberá conservar ID de orden/proyecto y siguiente acción. Material de embalaje no debe mezclar proyectos.

## CAR-AREA-07 · Ubicación y separación — CORREGIDO
La ubicación **no está definida**. Debe elegirse un espacio que:
- no ocupe la pedacera ni la estación de Señor Pez en Retoque;
- separe polvo/aserrín de pintura, gasolina blanca, solventes y acabados;
- permita entrada/salida de madera y cajas;
- conserve ruta de carga/manipulación;
- tenga energía/servicios compatibles con el equipo real.

La antigua frase “espacio del Sr. Pes” queda sólo como antecedente histórico, no como requisito vigente.

## CAR-AREA-08 · Corte y polvo
Banco y equipo de corte, cuando existan, deberán permanecer estables y con protecciones/accesorios correspondientes al equipo real. Polvo/aserrín se captura o retira en origen para que no migre a Retoque ni se acumule cerca de fuentes incompatibles.

## CAR-AREA-09 · Madera y herrajes
Madera/triplay deberá almacenarse estable; paneles pesados en condición que evite vuelco/deslizamiento. Tornillos, clavos, bisagras y herrajes se separarán por tipo/tamaño suficiente para recuperarlos sin vaciar contenedores.

## CAR-AREA-10 · Embalaje y carga
Cartón, madera, película/protección y fijaciones tendrán zona definida. Caja/embalaje conservará ID de orden y deberá poder manipularse/cargarse sin retirar protecciones esenciales ni bloquear la ruta.

---

# 2. Metodología

## METHOD STATUS: HOLD_PENDING_EVIDENCE

**No existe método técnico liberado.**

El propio master 391P declara:
- “Método no liberado”;
- secuencia real pendiente;
- herramienta/equipo pendiente;
- parámetros/criterios pendientes;
- condición de salida pendiente;
- responsable técnico pendiente.

Por tanto se elimina como método canónico la secuencia genérica anterior:
requerimiento → elegir protección → cortar → ensamblar → proteger → identificar → carga.

Puede conservarse únicamente como **hipótesis de entrevista/levantamiento**, nunca como instrucción de trabajo.

## Evidencia necesaria para construir el método
Cuando el puesto exista:
1. observar al menos una orden/pieza real;
2. registrar quién recibe el requerimiento y qué información necesita;
3. medir cómo decide dimensiones y holguras;
4. documentar material y sistema de unión/protección;
5. observar corte/armado;
6. observar cómo inmoviliza/protege la pieza;
7. documentar criterio de “listo”;
8. observar manipulación/carga;
9. identificar errores/retrabajos;
10. separar qué pertenece a Carpintería, Bases, Logística o transportista.

Sólo entonces redactar operaciones, criterios de salida, herramientas y consumibles.

---

# 3. Herramientas y equipo · PREPARED / NOT_IMPLEMENTED

Familias previstas, **no inventario existente**:
- banco/mesa de corte y armado;
- sierra/caladora u otro equipo que se confirme;
- taladro/atornillador;
- herramienta manual de medición, corte y fijación;
- sistema de captura/retiro de polvo si la operación lo requiere;
- rack/almacenamiento de madera;
- medios de manipulación/carga si peso y volumen lo exigen.

AST-CAR permanece NOT_IMPLEMENTED hasta ver equipo real. No asignar mantenimiento ni manuales a activos imaginarios.

---

# 4. Materiales y flujo · PREPARED

Familias previstas:
- madera/triplay;
- tornillería/herrajes;
- cartón;
- película/plástico/protecciones;
- elementos de fijación;
- otros materiales sólo cuando la demostración real los confirme.

Balance futuro:
**entrada → corte/incorporación → retal recuperable → recorte/aserrín/residuo → embalaje terminado → destino/carga.**

No duplicar automáticamente madera/herrajes ya controlados en Bases: definir punto de propiedad y stock cuando se implemente.

---

# 5. Personas, competencia y autorización

COMP-CAR-01 permanece **NOT_IMPLEMENTED**.

No autorizar por anticipado “corte/armado/embalaje” como una sola competencia. Cuando exista el puesto, separar al menos:
- medición/trazo;
- operación de cada máquina real;
- armado/uniones;
- protección/inmovilización de pieza;
- manipulación/carga;
- liberación de embalaje.

La entrevista/demostración deberá definir qué puede ejecutar la persona sin acompañamiento y qué condición obliga a detenerse.

---

# 6. Control y evidencia

## EVID-CAR-01 · Implementación física
Sólo puede cambiar de NOT_IMPLEMENTED cuando exista un puesto real.

Debe mostrar:
- panorámica;
- límite con áreas vecinas;
- banco/rack/equipo real;
- ruta de circulación/carga;
- separación respecto de polvo/químicos/acabado.

**No demuestra:** método de embalaje, competencia, capacidad estructural, eficacia de protección o cumplimiento.

## EVID-CAR-02 · Primera demostración real
Crear cuando el puesto opere:
- orden/pieza identificada;
- requerimiento/dimensiones;
- secuencia real;
- herramienta/equipo;
- materiales/protección;
- condición de salida;
- carga/manipulación si aplica.

**Estado:** NOT_IMPLEMENTED. No escenificar una demostración sólo para cerrar evidencia.

---

# 7. Auditoría preparada

Mientras el área no exista, los controles se mantienen **NOT_IMPLEMENTED / NO APLICA A OPERACIÓN ACTUAL**, no “CONFORME”.

CAR-AUD-01 decisión de implementar y ubicación aprobada.  
CAR-AUD-02 separación de polvo/aserrín respecto de Retoque/acabados.  
CAR-AUD-03 banco/rack/equipo real implementados y utilizables.  
CAR-AUD-04 madera/herrajes/protecciones almacenados de forma recuperable y estable.  
CAR-AUD-05 electricidad/ruta de carga compatibles con el puesto.  
CAR-AUD-06 identificación de caja/embalaje ligada a orden.  
CAR-AUD-07 demostración del método real completada.  
CAR-AUD-08 criterios de protección y liberación definidos por pieza/destino.

---

# Bloqueadores

- decisión de implementar el frente;
- ubicación real;
- responsable real;
- estación/layout;
- herramientas/equipo existentes;
- método primario demostrado;
- criterio de dimensionado/protección por pieza/destino;
- materiales y uniones reales;
- manipulación/carga;
- interfaz con Bases y Logística;
- BIWO real;
- evidencia de campo;
- competencia.

**Estado:** BLOCKED — NOT_IMPLEMENTED — NO LIBERAR.
