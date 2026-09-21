# ROCA TAXIDERMY — Arquitectura maestra de auditoría V2

Fecha: 21 SEP 2026  
Estado: ARQUITECTURA DE RECONSTRUCCIÓN / NO LIBERADA

## Decisión principal

ROCA no se reconstruye copiando 1:1 ningún HTML ni PDF anterior. Tampoco se parte de cero.

La fuente fuerte se elige **por sección**. Una página vieja puede ser mejor que una nueva; una entrevista puede corregir ambas; una norma externa puede gobernar una condición del taller sin convertirse en lenguaje legal para el operador.

La regla es:

> Preservar conocimiento válido, corregir lo débil, mover cada cosa a su casa intelectual y eliminar únicamente la duplicación demostrada.

## Jerarquía de fuentes

No existe un único “master exacto” global.

| Fuente | Uso principal | Regla |
|---|---|---|
| Corrección explícita más reciente del usuario | Decisión de dirección | Prevalece sobre artefactos anteriores |
| Evidencia primaria / entrevista / documento oficial vigente | Hecho, parámetro, estado o requisito | Prevalece sobre síntesis anteriores |
| HTML editable v22.1 | Método, herramientas, consumibles, fotografía, entrevistas editadas, ritmo editorial | Preservar donde sea más fuerte |
| Master integral 391p | Gobernanza por área, estándares físicos, auditoría, handoffs, assurance y estructura transversal | Preservar donde sea más fuerte |
| Master canónico 367p | Contraste y detección de pérdidas/duplicaciones | No tratarlo como sagrado |
| ROCA Live actual | Shell HTML, navegación de trabajo, separación DOC FINAL / NOTAS / COMPENDIO | Mantener como infraestructura, no como autoridad de contenido |
| Drive | Originales, evidencia, documentos legales, fotos y archivos sensibles | No volcar originales sensibles al repo |
| ClickUp | Trabajo, responsables, dependencia y cierre | No usar como fuente técnica primaria |
| BIWO | Estado comercial/operativo de piezas/clientes | Evitar una base paralela |
| Granola / entrevistas | Evidencia fuente y legado | Integrar conocimiento; conservar transcript como fuente |

## Estructura maestra

### I. Apertura
- Portada.
- Qué es ROCA y qué cubre el sistema.
- Cómo se usa el documento.
- Estado de versión y fuente.
- Índice corto.

### II. Gobernanza de ROCA
Una sola lectura global:
- taller y equipo agrupado por área;
- recorrido integral de la pieza;
- quién decide, ejecuta, libera y escala;
- handoffs entre áreas;
- BIWO / venta / pago / pieza / entrega;
- compras e inventarios;
- clasificación documental;
- cadencia de dirección y KPIs que realmente cambian una acción.

No crear un segundo “libro global de personal”.

### III. Libros operativos por área

Cada área es integral. **Metodología es una capa; no es el área completa.**

Orden canónico:

0. **Identidad y gobernanza del área**
   - función;
   - equipo local cuando es operativo;
   - recibe de / recibe qué;
   - entrega a / entrega qué;
   - decisiones de detener, devolver, liberar;
   - eventos BIWO/registros;
   - recursos críticos.

1. **Área de trabajo**
   - límite y flujo físico;
   - estaciones individuales cuando existan;
   - superficies/mobiliario;
   - almacenamiento y rotulado;
   - ergonomía;
   - iluminación;
   - ventilación/extracción;
   - energía/servicios;
   - químicos/materiales en punto de uso;
   - residuos/recuperables;
   - limpieza/reset;
   - pasillos/emergencia;
   - señalética;
   - evidencia fotográfica/mediciones necesarias.

2. **Metodología**
   - diagrama de flujo fuerte;
   - etapas en secuencia real;
   - condición de entrada;
   - acción;
   - parámetros/recetas confirmados;
   - estándar aplicado dentro de la operación;
   - criterio de salida;
   - detener/corregir/regresar;
   - handoff.

3. **Herramientas, equipo y cuidado del activo**
   - herramientas por tarea;
   - equipo compartido;
   - checks previos;
   - guardas/seguridad;
   - inspección/mantenimiento;
   - repuestos críticos;
   - metrología/calibración/verificación cuando aplique.

4. **Materiales, químicos, consumibles y balance**
   - entradas;
   - almacenamiento;
   - uso;
   - incorporación a la pieza;
   - sobrantes;
   - recuperables;
   - residuos/destino;
   - servicios/energía relevantes;
   - HDS/EPP traducidos a acción.

5. **Personas, competencia y autorización**
   - quién puede ejecutar;
   - qué debe demostrar;
   - entrenamiento;
   - supervisión/autorización;
   - respaldo/cross-training cuando sea crítico.

6. **Control, registros y evidencia**
   - identidad de pieza;
   - evento BIWO/registro;
   - foto/medición/documento requerido;
   - aceptación/retrabajo;
   - evidencia de mantenimiento, entrenamiento o equipo cuando aplique.

7. **Auditoría del área**
   - verifica únicamente estándares ya definidos en 0–6;
   - no inventa requisitos;
   - estados: CONFORME / NO CONFORME / NO APLICA-JUSTIFICACIÓN / NO VERIFICADO;
   - evidencia, hallazgo/acción, responsable, fecha y cierre.

Los puntos sin evidencia no viven como “prosa final”: se conservan en NOTAS / gaps / ClickUp hasta cerrarse.

### IV. Assurance transversal
Sólo controles que realmente son de empresa:
- corporativo, poderes e inmueble;
- licencias y funcionamiento;
- Protección Civil/incendio;
- STPS;
- ambiente, químicos y residuos;
- vida silvestre/CITES/SENASICA/TRACES;
- fiscal/finanzas/seguros;
- privacidad;
- calidad/CAPA;
- mantenimiento transversal;
- supply chain;
- document control;
- emergencia y continuidad.

El operador recibe la acción simple en su área. Assurance conserva fuente, vigencia, aplicabilidad, responsable y evidencia.

### V. Heritage, evidencia y anexos controlados
- historia/legado;
- fotografía editorial real;
- entrevistas/transcripts como fuente;
- fuentes;
- índice de machotes;
- índice de anexos en Drive;
- control de cambios y release.

## Regla anti-bola-de-nieve

Un hecho entra una vez.

Si afecta varios contextos:
- conservar una definición canónica;
- usar ID/referencia corta en las demás secciones;
- no copiar el mismo párrafo cuatro veces.

Ejemplo:
- requisito legal de HDS → Assurance;
- ubicación y acceso real de HDS → Área de trabajo;
- cómo consultarla en una tarea → Metodología;
- prueba de que existe → Auditoría/evidencia.

## Regla editorial

ROCA debe leerse como manual técnico-editorial maduro, no como dashboard ni expediente jurídico.

- una idea dominante por página/bloque;
- mensaje/condición primero, detalle después;
- fotografía grande cuando aporta comprensión u oficio;
- diagrama para flujo/decisión;
- tabla sólo cuando comparar sea más rápido que leer;
- lenguaje directo de taller;
- cero metadiscurso de IA/consultoría en el documento final;
- incertidumbre visible, nunca rellenada.

## Regla de integración

Toda migración usa una de estas acciones:
PRESERVE, CORRECT, MOVE, MERGE_WITHOUT_LOSS, ADD, REMOVE_DUPLICATE, HOLD_PENDING_EVIDENCE.

REMOVE_DUPLICATE sólo es válido cuando se nombra la ubicación superviviente.

## Release

No liberar hasta pasar:
1. content-loss/preservation check;
2. 15-expert architecture review;
3. source/provenance check;
4. privacy check;
5. area-integrity check;
6. standards/applicability check;
7. visual/editorial QA;
8. HTML/print consistency;
9. critical open-action check.
