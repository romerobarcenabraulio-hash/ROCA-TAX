# ROCA TAXIDERMY — Auditoría editorial y de calidad

Fecha: 14 SEP 2026
Estado: `BLOCKED - REPAIR REQUIRED`
Alcance: HTML/master actual en `roca-live-bootstrap`, sin rediseñar ni abrir frentes nuevos.

## Propósito de esta revisión

Comprobar que el HTML/master funcione como el recap esencial de ROCA TAXIDERMY: qué es la empresa, quiénes la integran, cómo está organizado el taller, qué hace cada área, cómo se trabaja, qué controles/licencias aplican y cuál es su identidad/heritage. Drive conserva el respaldo profundo; el HTML no debe convertirse en expediente administrativo.

## Lo que está bien y debe preservarse

1. **Dirección visual general.** La combinación papel / marfil / navy / bronce, serif editorial y tipografía sans para información auxiliar funciona bien para ROCA y evita apariencia SaaS.
2. **Separación DOC FINAL / NOTAS.** La idea editorial es correcta: pendientes, validaciones y evidencia cruda no deben contaminar la lectura principal.
3. **Regla de preservación.** El master de 391 páginas permanece como referencia y no se está sustituyendo silenciosamente.
4. **Lenguaje operativo.** Áreas, posters y criterios físicos usan frases ejecutables y comprensibles para taller.
5. **Legal sanitizado.** La web no incrusta escrituras, contratos, recibos ni expedientes sensibles reales.
6. **Diseño contenido.** No hay tarjetas repetitivas, iconos decorativos ni pseudo-dashboard dominando la interfaz; esto es consistente con el gate anti-LLM.

## Hallazgos críticos

### 1. El orden actual no cuenta ROCA

El menú final actual queda, en esencia:

`Master exacto 391p → Áreas de trabajo → Residuos y señalética → BIWO/ERP → Posters → Responsabilidades → Control documental → Expediente internacional → Expediente legal`

Esto sirve como tablero interno, pero no como recap editorial de la empresa.

**Falta arriba de la lectura:**
- qué es ROCA TAXIDERMY;
- historia / heritage;
- estructura de la empresa;
- integrantes y roles;
- mapa simple de áreas;
- recorrido de procesos;
- cómo se conecta una pieza desde recepción hasta entrega.

**Acción:** reordenar el contenido final alrededor de ROCA, no alrededor de pendientes de implementación.

### 2. El HTML promete “personas · áreas · procesos”, pero no entrega todavía personas ni procesos como relato principal

La portada anuncia `taller completo · personas · áreas · procesos · evidencia · permisos · entrega`, pero la navegación final no tiene secciones centrales de personas, estructura o procesos. Responsabilidades no sustituye una presentación clara de integrantes; Posters no sustituye procesos.

**Acción:** alinear portada, índice y contenido real.

### 3. Control documental está sobredimensionado para el nuevo criterio del usuario

La sección `Control documental` todavía contiene un ciclo completo del trabajador, familias documentales, incidencias, bajas, finiquitos, CAPA, etc. Eso ya no corresponde al objetivo actual del HTML.

**Criterio aprobado:** INE, comprobantes y expedientes reales se quedan en Drive; en el HTML sólo debe quedar lo esencial. Para contratos, un machote general es suficiente salvo necesidad concreta.

**Acción:** sacar esta sección del DOC FINAL o reducirla a una nota mínima de respaldo documental + machote general.

### 4. Legal ocupa demasiado espacio como inventario de rondas

La lógica legal es correcta, pero la tabla de 9 rondas se lee como expediente de auditoría interna. Para el HTML final debe responder algo más simple:

- qué licencias/permisos necesita ROCA;
- cuáles están obtenidos / en preparación / pendientes;
- qué debe mantenerse vigente;
- dónde vive el respaldo completo.

El detalle de búsquedas, rondas y faltantes debe quedarse en Drive/ClickUp/NOTAS.

### 5. BIWO/ERP, residuos, posters e internacional están demasiado arriba en jerarquía

Son contenidos válidos, pero hoy ocupan nivel de capítulo principal mientras historia, personas y proceso general no existen al mismo nivel.

**Acción:** bajar estos bloques a subsecciones de Operación, Áreas o Cumplimiento.

### 6. El HTML carece de fotografía editorial

El HTML actual se apoya casi por completo en texto, tablas y posters. No hay todavía una integración real de:

- personas trabajando;
- oficio / manos / herramientas;
- piezas emblemáticas;
- secuencias de proceso;
- áreas del taller;
- before/after;
- heritage / archivo histórico.

Esto hace que el HTML se sienta más como un manual administrativo que como ROCA TAXIDERMY.

**Acción:** usar fotografía como estructura editorial, no como decoración.

### 7. “ROCA Live” se siente como nombre de herramienta interna, no como título de publicación

El `title`, topbar y navegación priorizan “ROCA Live”. Para el lector final conviene que la identidad dominante sea `ROCA TAXIDERMY`; “Live” puede sobrevivir como nombre técnico interno si hace falta.

**Acción:** evaluar renombre editorial sin cambiar la arquitectura técnica.

### 8. El pie `— / 391` no representa páginas HTML reales

Cada sección HTML muestra un folio del tipo `— / 391`, aunque el HTML no es una reproducción página por página. Esto genera una falsa sensación de paginación y confunde el master PDF con la nueva lectura web.

**Acción:** separar numeración de la fuente PDF de la navegación del HTML.

### 9. El botón “IMPRIMIR / PDF” no imprime el documento completo

`app.js` mantiene una sola sección en `#page` y la reemplaza al navegar. `window.print()` imprime únicamente la sección visible. Si el usuario está en “Áreas”, imprimirá Áreas; no el DOC FINAL completo.

Además, el visor del PDF maestro se oculta en `@media print`, por lo que tampoco se imprime el master preservado.

**Acción:** corregir la función antes de etiquetarla como salida PDF final.

### 10. La vista “Master exacto 391p” no debe ser el primer capítulo editorial

Es útil como fuente de control, pero abrir la lectura con un iframe al PDF interrumpe el recorrido. Debe vivir en Control / Fuente maestra / Notas, no como primer capítulo del recap público/interno de ROCA.

## Hallazgos de calidad media

- `status pending` aparece en Áreas y Legal pero no tiene una regla visual específica en `styles.css`; queda como texto sin jerarquía clara.
- Todas las secciones usan casi el mismo patrón `eyebrow → H1 → lead → línea → contenido`; la consistencia es buena, pero sin fotografía o composiciones distintas puede volverse monótona.
- La fecha de portada `31 AGO 2026` debe explicitarse como fecha del master base si no corresponde a la versión actual del HTML.
- La frase `ARTE Y TRADICIÓN · DESDE 1946` es una buena ancla de heritage, pero debe conservarse sólo si está sustentada por la fuente maestra/histórica.
- No hay un bloque visual sencillo que muestre cómo se conectan áreas/personas/procesos sin convertirse en organigrama viejo ni diagrama de consultoría.

## Arquitectura editorial recomendada

Sin rediseñar el sistema visual, el DOC FINAL debería leerse aproximadamente así:

1. **ROCA TAXIDERMY** — qué es, qué hace, dónde está el valor del taller.
2. **Historia / Heritage** — origen, oficio, continuidad, archivo visual.
3. **La empresa** — estructura simple e integrantes actuales.
4. **El taller** — mapa/áreas y función de cada una.
5. **Cómo trabaja ROCA** — recorrido de la pieza y procesos principales.
6. **Áreas y oficio** — detalle operativo por área, con fotografía.
7. **Control y trazabilidad** — identificación, BIWO sólo en lo necesario, entrega.
8. **Cumplimiento y licencias** — resumen ejecutivo + estado, sin expediente crudo.
9. **Estándar de orden y cuidado** — sólo lo indispensable para conservar el taller.
10. **Galería / Heritage** — selección editorial de personas, herramientas, procesos y piezas.
11. **Fuente maestra / respaldo** — referencia al Drive/master, no el archivo entero dentro de la lectura.

## 15 correcciones de mayor impacto

1. Reordenar índice alrededor de la empresa, no de los controles internos.
2. Crear bloque inicial “Qué es ROCA TAXIDERMY”.
3. Integrar historia/heritage temprano.
4. Crear sección simple de integrantes actuales.
5. Fusionar Responsabilidades con Personas/Áreas.
6. Crear recorrido general de procesos antes del detalle por área.
7. Bajar BIWO/ERP a Control y trazabilidad.
8. Bajar Residuos/Señalética a estándar transversal o Áreas.
9. Bajar Posters a anexos/implementación/NOTAS o convertirlos en recursos descargables.
10. Retirar del DOC FINAL el ciclo documental del trabajador; conservar sólo machote general donde corresponda.
11. Resumir legal a licencias, estado y mantenimiento; mover las rondas a NOTAS/Drive.
12. Incorporar fotografía editorial real en cada capítulo principal.
13. Corregir paginación `— / 391` del HTML.
14. Corregir `IMPRIMIR / PDF` para que produzca una salida completa o renombrarlo mientras no lo haga.
15. Revisar título “ROCA Live” vs identidad editorial “ROCA TAXIDERMY”.

## Veredicto por bloque

| Bloque | Estado | Nota |
|---|---|---|
| Identidad visual base | BIEN / PRESERVAR | Dirección editorial sólida. |
| Jerarquía / índice | REQUIERE AJUSTE | El orden actual no cuenta la empresa. |
| Historia / heritage | INCOMPLETO | Concepto definido, casi ausente en HTML. |
| Personas / estructura | INCOMPLETO | Responsabilidades no sustituye presentación de integrantes. |
| Procesos | INCOMPLETO | Falta recorrido general legible. |
| Áreas | BIEN CON AJUSTES | Contenido útil; falta fotografía y contexto. |
| Legal | BIEN DE FONDO / SOBRECARGADO | Correcto como control interno, demasiado granular para final. |
| Control documental | SOBRA EN SU FORMA ACTUAL | Debe simplificarse radicalmente. |
| Fotografía | INCOMPLETO | Principal hueco editorial. |
| Heritage/Galería | INCOMPLETO | Debe integrarse como identidad, no anexo decorativo. |
| Impresión/PDF | FALLA FUNCIONAL | Imprime una sola sección visible. |
| Anti-LLM | BUENA BASE | Evita SaaS/cards; falta más personalidad visual mediante fotos. |

## Regla de reparación

No reconstruir todo. Preservar `styles.css` como base y corregir jerarquía, contenido, orden, fotografía y salida de impresión de forma localizada. No agregar dashboards, sistemas paralelos, organigramas viejos ni marcos administrativos nuevos.

## Resultado

El HTML actual tiene **una base visual buena y un sistema de control razonable**, pero todavía se lee más como una consola de implementación/auditoría que como el recap esencial de ROCA TAXIDERMY.

Por eso el estado es:

`BLOCKED - REPAIR REQUIRED`

No por mala calidad visual, sino porque todavía falta convertir la información correcta en una narrativa editorial correcta.