# ROCA TAXIDERMY — Montaje · piloto de libro integral V2

Fecha de integración: 21 SEP 2026  
Estado: WORKING PILOT / NO LIBERAR  
Área ID: AREA-MON

## Para qué existe Montaje

Convertir una piel curtida y acondicionada, una forma compatible y sus componentes en una pieza armada, proporcionada, estable y lista para Retoque.

Este piloto prueba la nueva arquitectura ROCA Audit. No reemplaza la metodología ya trabajada: la preserva y la rodea de las capas que faltaban para que el área pueda operarse, supervisarse, auditarse y mejorarse sin convertir el manual en una bola de nieve.

## Fuentes fuertes usadas

| Tema | Fuente fuerte | Acción |
|---|---|---|
| Método técnico y parámetros | ROCA v24.7 Pre-Campo Rigor + extracción de entrevista de Montaje | PRESERVE / MERGE_WITHOUT_LOSS |
| Gobernanza, handoff y eventos de registro | Master integral 391p | PRESERVE con correcciones posteriores |
| Condición física del área y estaciones | Master 367/391p | PRESERVE / CORRECT |
| Roster actual | correcciones explícitas posteriores del usuario | CORRECT |
| Evidencia y fotografía | planes de evidencia previos + criterios del master | MERGE_WITHOUT_LOSS |
| Requisitos externos | Assurance / matriz legal | REFERENCE ONLY hasta confirmar aplicabilidad/vigencia |

---

# 0. Identidad y gobernanza local

## Equipo operativo conocido

- Guicho — dirección del taller / coordinación de Montaje.
- Don Gustavo — Montaje.
- Ezequiel — Montaje.
- Manuel Rivera — Montaje.
- Rodolfo — Montaje.
- Raimundo — Montaje.
- Rubén — Montaje.
- Lalo — Montaje.
- Ricardo — Montador.
- Eugenio — asistente directo de Ricardo.

No usar listados anteriores que coloquen a Ricardo en Recepción o Curtiduría como estructura vigente. Cualquier asignación histórica se conserva sólo como antecedente de fuente.

## Handoff de entrada

Montaje recibe:
- piel curtida/acondicionada e identificada;
- medidas necesarias;
- pose/forma definida;
- forma y componentes correspondientes;
- cuernos/astas, ojos u otros componentes identificados cuando apliquen;
- condición comercial/operativa suficiente para que el trabajo pueda avanzar según la regla vigente de ROCA.

## Decisiones de entrada

Detener o devolver cuando:
- piel y forma no corresponden dimensionalmente;
- falta una pieza/componente crítico;
- la identidad de la pieza no coincide;
- una condición estructural o anatómica no puede corregirse dentro de Montaje;
- el estado físico o informacional no permite trabajar sin improvisar.

## Handoff de salida

Montaje entrega a Retoque una pieza:
- seca;
- estructuralmente estable;
- cosida;
- con piel asentada y fijada;
- sin humedad apreciable;
- sin desplazamiento estructural al comprobar las zonas fijadas;
- identificada y con el evento de transferencia registrado.

## Recursos críticos

Forma, ojos, cuernos/astas, barro, adhesivo, Bondo, fibra de vidrio, catalizador, hilo, alfileres, herramientas de ajuste y elementos de fijación.

---

# 1. Área de trabajo

Hereda REQ-COM-01..16. Los controles siguientes conservan la resolución específica de Montaje y no sustituyen el estándar común.

## MON-AREA-01 · Circulación y acceso

Pasillos, salida, tableros, extintores y puntos de operación quedan libres durante la jornada. Piezas, cajas, cables, mangueras y herramienta temporal no ocupan circulación.

**Evidencia requerida:** vista general desde acceso y vista de recorrido hacia salida/equipo de emergencia.

## MON-AREA-02 · Superficie utilizable

Cada puesto conserva una superficie suficiente para la pieza y la operación en curso. Material ajeno al trabajo activo no invade la superficie.

**Evidencia requerida:** foto 3/4 de cada estación activa.

## MON-AREA-03 · Herramienta y almacenamiento

Cada herramienta habitual tiene ubicación definida y recuperable sin vaciar cajones completos. Punzantes y filos permanecen protegidos cuando no se usan.

La solución de mobiliario puede variar por persona; el estándar común es capacidad suficiente, categorías claras, acceso simple y cero amontonamiento que impida encontrar o guardar.

## MON-AREA-04 · Pieza e identidad

Toda pieza activa o en espera conserva identificación visible y siguiente acción. La identidad física no depende de memoria personal.

## MON-AREA-05 · Iluminación

La tarea de detalle se verifica en el plano real de trabajo. No cerrar este punto con percepción visual solamente cuando una medición sea necesaria.

**Estado:** VALIDATE_TECHNICALLY — falta levantamiento de iluminancia por estación/tarea.

## MON-AREA-06 · Ventilación y mezcla

Las operaciones con Bondo, catalizador, fibra, adhesivos u otros productos se realizan en un punto compatible con la ventilación/extracción que resulte necesaria por producto y exposición real.

**Estado:** VALIDATE_TECHNICALLY — cruzar HDS, inventario químico, ventilación real y reconocimiento de exposición.

## MON-AREA-07 · Cables, mangueras y electricidad

Cables y extensiones no cruzan circulación sin protección. Cargadores/taladros tienen punto definido; la alimentación temporal se retira al terminar.

## MON-AREA-08 · Residuos y recuperables

Punzantes, sobrantes de mezcla, envases, recortes recuperables y residuo general no comparten destino por conveniencia. La clasificación final depende del material real y de la capa ambiental aplicable.

## MON-AREA-09 · Secado y espera

Piezas en secado permanecen estables, identificadas y fuera de circulación. Existe espacio suficiente para revisar fijaciones sin mover trabajos ajenos.

## MON-AREA-10 · Reset de estación

Al terminar:
- superficie utilizable;
- herramienta en ubicación definida;
- punzantes protegidos;
- residuos retirados/clasificados;
- cables fuera del paso;
- pieza identificada;
- siguiente acción visible.

## Estaciones individuales

El estándar se evalúa sobre la estación real de cada persona; no existe una “estación típica” que sustituya a las demás.

Para cada estación activa levantar:
1. vista 3/4 completa;
2. almacenamiento abierto;
3. superficie y herramientas de uso frecuente;
4. pieza identificada;
5. alimentación/cables/mangueras;
6. estación al cierre.

**IMPLEMENT:** cerrar inventario de estaciones reales y asignación exacta persona ↔ estación, especialmente Ricardo/Eugenio.

---

# 2. Metodología

La metodología posterior a entrevistas es la parte más madura del área. Se preserva; no se reescribe desde cero.

## Flujo técnico

Piel flexible y medida  
→ comparar con forma y pose  
→ presentar y corregir forma  
→ preparar boca/nariz/canales  
→ posicionar cuernos/astas  
→ conformar orejas  
→ posicionar ojos  
→ correcciones localizadas con barro  
→ adhesivo y vestido de piel  
→ coser/fijar  
→ secar y comprobar  
→ transferir a Retoque

## 01 · Recuperar flexibilidad y levantar medidas

Relajar la piel hasta recuperar flexibilidad. Cerrar desde el interior los cortes o balazos que deban repararse; retirar carnaza, grasa, tejido sobrante, huesos residuales y terminar cartílagos de oreja, nariz y belfos cuando corresponda.

Con la piel flexible, registrar ojo-nariz, contorno inmediatamente detrás de las órbitas y las medidas corporales que correspondan.

No seleccionar ni cortar una forma con la piel rígida o sin las medidas que gobiernan la selección.

Si una modificación de forma se prolongará varios días, el registro técnico atribuido a Don Gustavo indica congelar la piel para resguardarla; si se resuelve el mismo día puede no ser necesario.

## 02 · Seleccionar, presentar y corregir la forma

Comparar medidas de piel, inventario de formas y pose solicitada. Presentar la piel antes de cortar.

Si sobra volumen, retirar/perfilar poliuretano con serrote, escofina o cuchillo y volver a presentar. Las correcciones añadidas son localizadas; no deben compensar una forma general incorrecta en largo, ancho o proporción.

**Criterio de salida:** la piel puede presentarse sin forzar una medida para compensar otra.

## 03 · Preparar boca, nariz y canales

Abrir/perfilar alojamientos de boca, nariz y canales donde entran los bordes de labios —belfos— y piel de nariz.

**Criterio de salida:** labios y nariz entran en sus alojamientos sin forzar la piel ni desplazar la cara.

## 04 · Preparar y posicionar cuernos o astas

Presentar la base sobre la forma y resolver posición con frente, ojos y orejas. Comparar altura, inclinación, separación y simetría desde frente, perfil y vista superior.

No cubrir la unión mientras exista movimiento o una diferencia corregible.

**Criterio de salida:** conjunto estable y en posición antes del vestido.

**OPEN TECHNICAL:** sistema exacto de fijación estructural por tipo de pieza todavía necesita fuente cerrada.

## 05 · Preparar y conformar las orejas

Voltear y limpiar la oreja. Preparar fibra cortada y mezclar con Bondo y catalizador; distribuir dentro de la oreja mientras permanece trabajable. Modelar borde, concavidad y volumen.

**Criterio de salida:** la oreja conserva forma, borde y concavidad sin exceso de espesor ni acumulación que borre anatomía.

**OPEN TECHNICAL:** proporción Bondo/catalizador no debe inventarse; permanece pendiente de fuente controlada.

## 06 · Posicionar los ojos

Colocar los ojos y usar barro LR300 para sostener/modelar posición. Trabajar ambos lados simultáneamente y comparar altura, profundidad, orientación y relación con frente, cuernos y párpados.

**Criterio de salida:** alineación y simetría desde frente y perfil, estable antes de vestir.

## 07 · Preparar y colocar barro en el cuerpo

Usar barro para correcciones localizadas de volumen y transición sólo después de que la forma principal coincide con la piel. Presentar la piel inmediatamente después de modelar.

**Criterio de salida:** la piel asienta sin tensión anormal y conserva referencias anatómicas.

## 08 · Aplicar adhesivo y vestir la piel

Aplicar adhesivo en superficies de contacto y vestir mientras permanece trabajable. Asentar primero ojos, nariz, belfos, orejas, cuernos/astas y líneas de costura. Corregir posición antes del cierre.

El adhesivo fija contacto; no corrige una cavidad, falta de volumen o forma incompatible.

**Criterio de salida:** piel centrada y asentada sin pliegues generados por posición incorrecta.

**OPEN MATERIAL:** confirmar nombre/producto exacto del “pegamento americano”.

## 09 · Coser y controlar abultamientos

Cerrar con hilo de zapatero; la fuente registra separación del hilo en tiras porque entero resulta demasiado grueso. Acomodar la piel conforme avanza la costura y corregir abultamientos antes de perder movilidad del adhesivo. Usar alfileres como fijación temporal cuando una zona se levanta.

**Criterio de salida:** costura cerrada sin abrir bordes y piel asentada; cada fijación temporal tiene una función clara.

Fuentes anteriores también registran variantes de hilo grueso/delgado y pesca trenzada. **No consolidar una tabla universal de selección hasta cerrar el criterio por espesor/tipo/zona.**

## 10 · Secar y transferir a Retoque

Mantener inmóvil durante secado. Usar 24 h como referencia mínima para la primera revisión, no como liberación automática.

**Criterio de liberación:** sin humedad apreciable y sin recuperación de desplazamiento/movimiento al comprobar la zona fijada. Si todavía cede o se desplaza, continuar secado o corregir.

---

# 3. Herramientas, equipo y cuidado del activo

## Confirmadas en fuente técnica

- serrote;
- escofinas;
- cuchillo;
- aguja;
- alfileres;
- herramienta manual de modelado cuando corresponda;
- equipo/herramienta de fijación de cuernos: pendiente de especificación exacta.

## Condición de uso

- filo o punzante se guarda protegido;
- herramienta dañada se separa del uso;
- herramienta de ajuste de forma se limpia de residuos que impidan control;
- equipo eléctrico se almacena con cargador/cable en ubicación definida;
- cualquier herramienta de medición usada para decisión crítica se identifica y verifica según su función.

**VALIDATE_TECHNICALLY:** confirmar herramienta exacta de medición y qué medidas requieren trazabilidad metrológica formal frente a referencia de oficio.

---

# 4. Materiales, químicos, consumibles y flujo

## Confirmados

- agua;
- barro LR300;
- poliuretano / material de forma para correcciones localizadas cuando aplique;
- yeso cuando aplique;
- fibra de vidrio;
- Bondo;
- catalizador;
- ojos;
- adhesivo / “pegamento americano” — producto exacto pendiente;
- hilo de zapatero;
- posibles variantes de hilo de pesca trenzado registradas en fuente posterior;
- recortes de Tetra Pak;
- alfileres.

## Balance mínimo a documentar

Por tarea registrar:
- material que entra;
- material incorporado a la pieza;
- sobrante reutilizable;
- sobrante no reutilizable;
- envase;
- residuo;
- destino.

No asumir clasificación ambiental de Bondo, catalizador, fibra, adhesivos o envases sin cerrar producto/HDS y condición real del residuo.

---

# 5. Personas, competencia y autorización

La pertenencia al área no equivale automáticamente a autorización para cualquier operación.

La matriz futura debe distinguir al menos:
- medir y seleccionar forma;
- modificar forma;
- fijar cuernos/astas;
- conformar orejas con mezcla;
- posicionar ojos/anatomía;
- vestir y coser;
- liberar a Retoque;
- operar herramienta eléctrica o equipo especial cuando aplique.

## Evidencia de competencia

Puede combinar:
- demostración observada;
- pieza de referencia;
- supervisión inicial;
- corrección/retrabajo documentado;
- autorización del responsable técnico.

**IMPLEMENT:** construir matriz persona × operación después de cerrar la asignación real y el criterio de liberación. No inventar niveles.

---

# 6. Control, registros, BIWO y evidencia

## Control de pieza

Durante Montaje debe existir una relación verificable entre:
- ID de pieza/orden;
- responsable/estación;
- forma/componentes;
- etapa real;
- incidencias/retrabajo;
- secado/espera;
- transferencia a Retoque.

Los nombres exactos de estados BIWO se toman del sistema real; no se inventan desde el manual.

## Evidencia mínima por pieza cuando aporta trazabilidad

No convertir cada trabajo en una sesión fotográfica obligatoria sin necesidad. Priorizar:
- condición de ingreso cuando existe daño o excepción;
- incompatibilidad/corrección relevante de forma;
- componente especial o reparación estructural;
- incidencia/retrabajo;
- condición final cuando la evidencia es necesaria para liberar o explicar una excepción.

## Evidencia de área

Separada de la pieza:
- estación completa;
- almacenamiento;
- químicos/productos identificados;
- ventilación/extracción;
- iluminación medida cuando corresponda;
- secado/espera;
- residuos/recuperables;
- rutas/emergencia;
- estado de cierre.

---

# 7. Auditoría de Montaje

La auditoría confirma estándares anteriores; no crea nuevos.

Estados:
- CONFORME
- NO CONFORME
- NO APLICA — JUSTIFICACIÓN
- NO VERIFICADO

| Ref | Verificación | Resultado | Evidencia objetiva | Hallazgo / acción | Responsable | Fecha | Cierre |
|---|---|---|---|---|---|---|---|
| MON-AUD-01 | circulación y accesos libres | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-02 | estación utilizable y almacenamiento recuperable | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-03 | pieza activa identificada y siguiente acción visible | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-04 | punzantes/filos protegidos fuera de uso | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-05 | cables/mangueras fuera del paso | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-06 | productos de mezcla identificados y HDS accesible cuando aplique | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-07 | ventilación/extracción corresponde a la operación real | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-08 | iluminación verificada en tarea que lo requiere | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-09 | secado/espera estable, identificado y fuera de circulación | NO VERIFICADO |  |  |  |  |  |
| MON-AUD-10 | estación vuelve a condición lista al cierre | NO VERIFICADO |  |  |  |  |  |

---

# Acciones de implementación del piloto

## CORRECT_NOW
- dejar de presentar a Ricardo como Recepción/Curtiduría en la gobernanza vigente;
- incorporar a Eugenio como asistente directo de Ricardo donde la operación lo necesite;
- separar metodología de auditoría y de requisitos legales;
- conservar el método técnico maduro sin resumirlo en frases genéricas.

## IMPLEMENT
- mapa real persona ↔ estación;
- almacenamiento por estación;
- punto de secado/espera;
- mueble/ubicación de taladros y cargadores;
- clasificación física de punzantes, consumibles y residuos;
- evidencia fotográfica exacta del estado implementado.

## VALIDATE_TECHNICALLY
- iluminancia por tarea/plano;
- ventilación/extracción y productos químicos;
- HDS/productos exactos;
- sistema de fijación de cuernos/astas;
- criterio de selección de hilos;
- proporción controlada Bondo/catalizador;
- herramienta/criterio de medición;
- estados/eventos BIWO exactos.

---

# Veredicto del piloto

**BLOCKED — PILOTO NO LIBERABLE.**

La metodología tiene una base fuerte y reutilizable. Las capas de área física, competencia, activos, químicos, BIWO/evidencia y auditoría ya están estructuradas, pero gran parte sigue sin evidencia de campo o validación técnica. El siguiente cierre útil no es escribir más prosa: es completar esos puntos con evidencia real y luego probar esta arquitectura en el HTML.
