# ROCA TAXIDERMY — Revisión de arquitectura por 15 lentes

Fecha: 21 SEP 2026  
Objeto: reconstrucción del sistema ROCA Audit / HTML / master, no validación regulatoria final.

## Evidencia revisada para esta ronda

- HTML editable v22.1: 114 secciones, 188 tablas y 67 imágenes; contiene identidad, gobernanza, procesos, herramientas, materiales, plan fotográfico, entrevistas y puntos abiertos.
- Master integral 391p: aporta gobernanza por área, handoffs, controles físicos, verificación/auditoría y assurance.
- Master canónico 367p: útil como comparación/preservación, pero no como arquitectura obligatoria.
- ROCA Live actual: shell de navegación y separación DOC FINAL / NOTAS / COMPENDIO.
- Correcciones explícitas del usuario: no replicar 1:1, no construir bola de nieve, integrar estándares dentro de la operación/área, preservar matriz de empresa, normas, machotes, guías y evidencia por su naturaleza.

## 1. Prompt Systems Architect

**Observación:** el mayor fallo anterior fue confundir “una fuente disponible” con “la fuente canónica total”.  
**Decisión:** usar autoridad por sección y un ledger obligatorio antes de colapsar contenido. Palabras como “replicado” o “exacto” quedan bloqueadas sin reconciliación.

## 2. Agent Orchestration Engineer

**Observación:** múltiples agentes/skills reescribiendo el mismo master generan deriva y duplicación.  
**Decisión:** especialistas entregan handoffs; un solo integrador escribe el master. Arquitectura, contenido, evidencia y QA son fases distintas.

## 3. Knowledge & Records Architect

**Observación:** v22.1, 391p, 367p, Drive, BIWO y entrevistas tienen fortalezas diferentes.  
**Decisión:** no declarar un master global sagrado. Cada bloque conserva fuente, versión, acción de integración y destino canónico.

## 4. Computer Vision / Evidence Lead

**Observación:** el plan fotográfico v22.1 es fuerte y específico, pero mezcla fotografía editorial y evidencia técnica si no se etiqueta.  
**Decisión:** toda foto recibe función: EVIDENCE, HERITAGE/GALLERY o ambas. Una imagen no prueba vigencia, capacitación, calibración ni cumplimiento legal por sí sola.

## 5. Industrial / Lean Engineer

**Observación:** la auditoría sólo funciona si verifica un estado objetivo ya definido; repetir estándares en checklist, método y poster crea desperdicio cognitivo.  
**Decisión:** área estándar → método → registros → auditoría. La auditoría no crea requisitos nuevos.

## 6. Taxidermy / Manufacturing Process SME

**Observación:** v22.1 conserva mejor detalle técnico por etapas; 391p conserva mejor el contexto de área, handoff y control.  
**Decisión:** preservar etapas/recetas/herramientas/materiales fuertes de v22.1 y envolverlas en el libro integral de área del 391p, corrigiendo con entrevistas más recientes.

## 7. Facility / EHS Engineer

**Observación:** iluminación, ventilación, químicos, residuos, pasillos, maquinaria y emergencia no pueden quedar en un apéndice separado de la realidad del área.  
**Decisión:** condición física y control operativo viven dentro del área; Assurance conserva la fuente/legal crosswalk.

## 8. Mexico Regulatory Counsel

**Observación:** NOM/reglamentos/CITES/SENASICA deben gobernar acciones, no inundar al trabajador con texto legal.  
**Decisión:** separar fuente + vigencia + aplicabilidad + evidencia de la acción observable en el taller. Mantener APPLICABILITY_PENDING cuando corresponda.

## 9. Corporate & Contracts Counsel

**Observación:** actas/poderes/licencias/machotes/casos reales tienen ciclos de cambio distintos.  
**Decisión:** preservar la matriz estable, controlar normas externas, usar machotes para decisiones, guías para operación y archivar evidencia transaccional fuera del cuerpo estable.

## 10. Privacy & Security Architect

**Observación:** el repositorio web no debe convertirse en expediente de clientes, personal o permisos sensibles.  
**Decisión:** HTML muestra función/estado/requisito; Drive conserva originales. Toda incorporación pública pasa sanitización.

## 11. ERP / Finance Traceability Lead

**Observación:** BIWO no debe ser un capítulo aislado del flujo físico. La pieza, pago, forma, etapa y entrega deben contar la misma historia.  
**Decisión:** integrar eventos BIWO en los handoffs de cada área y conservar gobernanza global de venta/pago/cobro/entrega.

## 12. Quality / CAPA Auditor

**Observación:** “Conforme” sin evidencia o reviewer produce falsa certeza.  
**Decisión:** estados deterministas; hallazgo y CAPA separados del estándar; cierre exige evidencia y validación.

## 13. Editorial / Information Design Director

**Observación:** el PDF anterior es repetitivo y demasiado checklist en varias zonas; v22.1 tiene mejor respiración editorial en partes, pero también fragmenta el sistema por oficio.  
**Decisión:** una idea dominante por bloque, fotografía fuerte, diagramas útiles, tablas sólo para comparación. Evitar cards/dashboard y evitar páginas meta de construcción en el final.

## 14. DevOps / Release Engineer

**Observación:** la rama activa no debe ser el laboratorio de reconstrucción.  
**Decisión:** reconstruir en recovery/roca-audit-master-v2, conservar rollback y no tocar release principal hasta pasar reconciliación/QA.

## 15. Automation Reliability / SRE Lead

**Observación:** porcentajes, estados y automatizaciones se vuelven basura si no dependen de salidas verificables.  
**Decisión:** progress = artefactos/gates cerrados, no número de comentarios o commits. Automatizaciones sólo procesan cambios nuevos y no duplican evidencia/tareas.

# Síntesis del consejo

## Conservar
- detalle técnico fuerte de v22.1;
- plan fotográfico específico;
- entrevistas editadas como fuente/legado;
- gobernanza, handoffs y estándares físicos fuertes del 391p;
- separación DOC FINAL / NOTAS / COMPENDIO de ROCA Live;
- matriz legal/evidencia en Drive;
- auditoría corta y verificable.

## Corregir
- idea de “master exacto” único;
- metodología como contenedor de todo el área;
- repetición de estándar en múltiples capítulos;
- checklist legal expuesto al operador;
- páginas de “puntos por cerrar” dentro de un release final;
- visual de dashboard/LLM.

## Añadir
- libro integral por área;
- ledger de integración por fuente;
- capa competencia/autorización;
- activos/mantenimiento/metrología donde aplique;
- materiales/servicios/residuos como flujo;
- evidencia/BIWO dentro del handoff;
- Heritage separado de evidencia sin perder la relación.

## Bloqueador actual de release
La arquitectura puede definirse y la reconstrucción puede empezar. El release final sigue bloqueado por evidencia física, cierres legales/aplicabilidad y QA visual/impresión.
