# ROCA TAX — Gobernador de créditos y libertad de Lovable

## 1. Principio

Lovable es un ejecutor de interfaz, no un diseñador autónomo, arquitecto, product manager, DBA ni responsable de seguridad. Cada crédito debe producir una conducta verificable ligada a un issue.

Nunca se escribe:

- “mejora la página”;
- “hazla más elegante”;
- “termina lo que falte”;
- “arregla todos los errores”;
- “usa tu criterio”;
- “crea una experiencia premium”;
- “continúa con el proyecto”.

Esas instrucciones abren el alcance, mezclan decisiones y provocan reintentos.

## 2. Unidad de ejecución

Una unidad de Lovable contiene obligatoriamente:

1. `PROMPT_ID`;
2. `ISSUE`;
3. `COMMIT_BASE`;
4. `PRECONDICIONES`;
5. `RESULTADO_OBSERVABLE`;
6. `ARCHIVOS_PERMITIDOS`;
7. `ARCHIVOS_PROHIBIDOS`;
8. `CONTRATO_DE_DATOS`;
9. `ESTADOS`;
10. `NO_HACER`;
11. `PRUEBAS`;
12. `ACEPTACION`;
13. `CONDICIONES_DE_PARO`;
14. `FORMATO_DE_SALIDA`.

Si el prompt no contiene los catorce elementos, no se ejecuta.

## 3. Presupuesto por unidad

- Un issue.
- Una conducta observable.
- Una rama.
- Un PR.
- Un intento de implementación.
- Una única corrección acotada sólo si el primer intento incumple criterios concretos.
- Objetivo menor a 400 líneas netas revisables; si excede, Lovable se detiene y propone división sin modificar.
- Cero dependencias nuevas salvo que el prompt nombre paquete, versión, propósito y ADR.
- Cero migraciones destructivas.
- Cero cambios visuales fuera de los componentes nombrados.

“Corrección acotada” significa: lista cerrada de defectos, archivos permitidos y pruebas de regresión. Nunca significa volver a enviar el prompt inicial o pedir “inténtalo otra vez”.

## 4. Precondiciones

Antes de consumir créditos, el operador confirma:

- issue en Linear con criterios completos;
- rama distinta de `main`;
- commit base anotado;
- prompt correcto para ese issue;
- documentos fuente disponibles;
- secretos y servicios necesarios configurados;
- no existe otro agente editando los mismos archivos;
- preview anterior y checks conocidos;
- datos/imagenes necesarios disponibles o estados vacíos especificados.

Si falta una precondición, se resuelve fuera de Lovable.

## 5. Asignación correcta de trabajo

### Sí usa Lovable

- composición de una pantalla ya definida;
- estados visuales exactos;
- formulario con contrato y validaciones cerradas;
- conexión de componentes a hooks/API ya definidos;
- responsive y accesibilidad de un flujo delimitado;
- corrección visual contra una referencia aprobada.

### No usa Lovable

- decidir arquitectura;
- diseñar modelo de datos;
- escribir claims o copy;
- elegir tipografías, paleta o layout;
- resolver permisos/RLS;
- inventar imágenes;
- ejecutar migración destructiva;
- investigar errores sin hipótesis;
- hacer refactor general;
- actualizar dependencias “por limpieza”;
- operar producción;
- generar todo el proyecto en un solo prompt.

## 6. Contrato de paro

Lovable debe detenerse sin modificar cuando:

- `COMMIT_BASE` no coincide;
- la rama es `main`;
- falta un archivo fuente;
- el contrato se contradice;
- necesita una dependencia no autorizada;
- requiere decidir campo, tabla, permiso, ruta, copy o token;
- el cambio excedería el presupuesto;
- una prueba base ya falla;
- detecta secretos;
- la única solución implica migración destructiva;
- no puede ejecutar las pruebas exigidas.

La respuesta de paro no consume un prompt correctivo. Se resuelve la precondición y se reanuda con una unidad revisada.

## 7. Formato de salida obligatorio

Lovable responde únicamente:

```text
PROMPT_ID:
ISSUE:
COMMIT_BASE:
RESULTADO: PASS | STOP | FAIL
ARCHIVOS_MODIFICADOS:
DEPENDENCIAS_AÑADIDAS: ninguna | lista
MIGRACIONES: ninguna | lista
PRUEBAS_EJECUTADAS:
SALIDA_DE_PRUEBAS:
CRITERIOS_PASS:
CRITERIOS_FAIL:
SUPUESTOS: ninguno | lista
DESVIACIONES: ninguna | lista
SIGUIENTE_ACCION: revisar PR | resolver precondición | crear corrección acotada
```

Prosa promocional, recapitulaciones amplias o propuestas no solicitadas se ignoran.

## 8. Semáforo de consumo

### Verde

- diff dentro del issue;
- cero invención;
- pruebas verdes;
- salida completa;
- preview revisable.

Se abre PR y se continúa sólo después de CI, Greptile y revisión.

### Amarillo

- warning documentado;
- deuda no bloqueante;
- diferencia visual menor;
- prueba no ejecutable por razón externa comprobada.

No se manda “arregla”. Se crea issue o corrección cerrada.

### Rojo

- cambio en `main`;
- scope creep;
- dependencia o tabla inventada;
- mock persistente;
- secreto;
- permiso sólo visual;
- borrado;
- fallo de build;
- cambio masivo;
- producción tocada.

Se detiene la secuencia. No se gasta otro crédito hasta entender y acotar el problema.

## 9. Corrección acotada

Plantilla:

```text
CORRECCION_DE: [PROMPT_ID]
ISSUE: [ROC-XX]
COMMIT_BASE: [sha]
DEFECTOS_UNICOS:
1. [comportamiento observado]
2. [comportamiento observado]
ARCHIVOS_PERMITIDOS:
- [ruta]
CAMBIO_EXACTO:
- [resultado]
NO_HACER:
- no refactor
- no dependencia
- no tocar otros módulos
PRUEBAS:
- [comando]
ACEPTACION:
- [criterio]
PARO:
- si exige tocar otro archivo, detener
```

Una segunda corrección significa que el issue o contrato está mal desglosado. Lovable se detiene y Codex revisa el plan.

## 10. Regla de avance

El operador sólo necesita decir `Ejecuta el prompt Pxx completo`. “Ejecuta” nunca significa escoger el siguiente prompt, corregirse libremente o saltar gates.

El orden lo determina `docs/execution/LOVABLE_RUNBOOK_EJECUTA.md`. Cada prompt recibe el commit aprobado del anterior; nunca se ejecutan dos prompts en paralelo sobre los mismos archivos.
