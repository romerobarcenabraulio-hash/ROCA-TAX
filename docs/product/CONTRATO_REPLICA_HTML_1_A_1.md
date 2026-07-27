# ROCA TAX — Contrato de réplica verificable del HTML heredado

**Fuente inspeccionada:** `roca-taxidermy-final-actualizado_2.html`  
**Estado:** obligatorio para producto, diseño, Lovable, implementación y QA  
**Regla de interpretación:** este documento define qué significa “réplica”. Ningún ejecutor puede reinterpretarlo como “inspirado en”, “parecido a” o “rediseñado libremente”.

## 1. Definición indiscutible de réplica

La nueva aplicación conservará el **100% del inventario semántico, la intención comercial, la identidad reconocible y el orden narrativo** del HTML heredado. La réplica no copia errores técnicos, enlaces falsos, contenido inexistente ni interacciones simuladas.

| Dimensión | Obligación |
|---|---|
| Contenido fuente | Conservar todo texto, categoría, registro y dato existente hasta que Dirección apruebe por escrito su corrección, retiro o sustitución |
| Estructura | Mantener la correspondencia completa de navegación, pantallas y secciones; las pantallas heredadas se convierten en rutas reales |
| Identidad | Mantener negro, hueso y olivo; contraste editorial serif/sans; fotografía dominante; tono sobrio del taller |
| Presentación | Refinar retícula, tipografía, espaciado, responsive, temas y accesibilidad sin cambiar silenciosamente la identidad |
| Función | Sustituir simulaciones por recorridos reales y verificables |
| Administración | Todo texto, imagen, reconocimiento, registro comercial y dato de contacto definido aquí se edita mediante campos controlados |
| Evidencia | Ningún elemento se considera replicado sin matriz PASS/FAIL, captura comparable o prueba automatizada según corresponda |

**Fórmula de aceptación:** inventario 100% + estructura 100% + identidad reconocible + función real 100% + defectos heredados 0%.

## 2. Línea base congelada

### 2.1 Navegación heredada

`Inicio · Galería · Servicios · Tienda · Contacto · Carrito (0)`

Correspondencia nueva:

| Origen | Destino | Tratamiento |
|---|---|---|
| Inicio | `/` | Réplica estructural completa del inicio |
| Galería | `/coleccion` | Conserva galería y filtros; se nombra Colección en arquitectura nueva |
| Servicios | `/taxidermia` y `/valoracion` | Separa explicación del servicio y solicitud real |
| Tienda | `/formas` | Conserva intención comercial sin fingir checkout |
| Contacto | `/contacto` | Conserva datos y los centraliza |
| Carrito (0) | No forma parte del servicio | No se replica una función falsa; sólo regresa con checkout real aprobado |

### 2.2 Inicio heredado: orden obligatorio

1. navegación;
2. hero fotográfico con cinco mensajes fuente;
3. bloque de tres logotipos;
4. equipo y maestros artesanos;
5. infraestructura y afirmación de 1,400 m²;
6. cuatro reconocimientos;
7. Nosotros / Legado en taxidermia;
8. footer.

Los cinco mensajes del hero se preservan como contenido inicial administrable:

1. `Inmortalizamos tus más grandes hazañas de caza`
2. `El taller de taxidermia artesanal más grande de México`
3. `Damos el acabado maestro para tu obra de arte`
4. `Que tu trofeo sea algo extraordinario`
5. `Conserva el recuerdo único de tu aventura`

En producción no se conserva el cambio automático cada cinco segundos. Los cinco mensajes pueden presentarse en una composición editorial o carrusel manual accesible; ninguno se elimina sin decisión editorial registrada.

### 2.3 Galería heredada

- título `Galería`;
- frase `Cada obra de arte es un momento de la vida detenido en el tiempo.`;
- párrafo introductorio completo;
- filtros `Todos`, `África`, `América`, `Asia`, `Europa`;
- 37 registros reales: América 12, África 16, Europa 6 y Asia 3.

El comentario del código dice “52 especies”, pero el arreglo contiene 37. La aplicación no mostrará “52” hasta que existan y se validen los 15 registros faltantes. Esta discrepancia es un gate de contenido, no una licencia para inventar especies.

### 2.4 Servicios heredados

- título `Servicios`;
- frase `Arte y Tradición Desde 1946`;
- promesa de propuesta personalizada vía WhatsApp;
- campos fuente: tipo de animal, nombre completo, teléfono y comentarios;
- acción `Enviar Cotización`.

La nueva solicitud añade únicamente los campos y consentimientos exigidos por la especificación de lanzamiento, genera folio y persiste antes de notificar.

### 2.5 Tienda heredada

- título `Tienda`;
- frase fuente;
- promesa de productos en stock;
- seis registros y precios fuente:

| Producto | Precio fuente MXN |
|---|---:|
| Montura Europea - Venado Cola Blanca | 8,500 |
| Montura Europea - Elk | 18,500 |
| Montura Europea - Borrego Cimarrón | 12,000 |
| Backgammon Cuero Exótico | 24,000 |
| Ajedrez Premium de Asta | 32,000 |
| Domino Hueso Natural | 8,500 |

Estos registros se migran como **datos pendientes de validación comercial**, nunca como disponibilidad confirmada. En producción se muestran sólo cuando un administrador confirma nombre, categoría, precio, disponibilidad, imagen y política comercial. La acción es solicitar información o valoración; no hay carrito, pago ni promesa de envío automático.

### 2.6 Contacto y footer heredados

- dirección: Anillo periférico norte km 32.9, Fraccionamiento Angostura, San Luis Potosí, México;
- WhatsApp: +52 1 (444) 828-1963;
- correo: roca.outfitters@gmail.com;
- horario: lunes a viernes, 9:00–18:30;
- descripción del taller y sus 1,400 m²;
- grupos de enlaces Productos, Galerías e Información;
- términos y privacidad.

Todos estos datos quedan en una sola fuente administrable. El año de copyright es dinámico. Los enlaces sólo aparecen si conducen a una ruta real.

## 3. Matriz elemento por elemento

| ID | Elemento fuente | Destino | Fidelidad obligatoria | Control administrativo | Evidencia |
|---|---|---|---|---|---|
| R-001 | Navbar y logotipo | Todas las rutas públicas | Misma identidad y jerarquía; rutas reales; versión móvil | Logotipo y datos de contacto, no layout | Teclado, móvil, URL y captura |
| R-002 | Cinco slides hero | Inicio | Cinco imágenes/mensajes presentes; sin autoplay obligatorio | Orden, texto, imagen, alt, publicar | Conteo 5 y comparación |
| R-003 | Tres logotipos | Inicio | Tres slots conservados | Subir, reemplazar, alt, ordenar | Conteo y persistencia |
| R-004 | Equipo | Inicio/Estudio | Título, descripción y CTA conservados | Texto, imagen y destino CTA | Copy y navegación |
| R-005 | Infraestructura | Inicio/Estudio | Afirmación 1,400 m² marcada para validación; imagen real | Texto, imagen, fuente interna | Estado validado/pendiente |
| R-006 | Reconocimientos | Estudio | Cuatro registros fuente, no tarjetas inventadas | Alta, edición, orden, imagen, despublicar | Conteo 4 y CRUD |
| R-007 | Legado | Inicio/Estudio | Texto fuente preservado | Eyebrow, título, párrafo, imagen, CTA | Comparación de copy |
| R-008 | Intro Galería | Colección | Título, frase y párrafo presentes | Campos controlados | Comparación |
| R-009 | Filtros continente | Colección | Cinco opciones, estado en URL y teclado | Continentes desde datos validados | Prueba de filtros |
| R-010 | 37 animales | Colección | Ninguna pérdida o duplicado; nombres y regiones trazables | CRUD, imagen, estado, orden | Conteos 12/16/6/3 |
| R-011 | Intro Servicios | Taxidermia | Mensaje fuente presente mientras no se apruebe copy nuevo | Texto e imagen | Comparación |
| R-012 | Formulario | Valoración | Intención preservada; envío real, folio, privacidad y errores | Ver/cambiar estado de solicitud | E2E y registro |
| R-013 | Intro Tienda | Formas | Intención comercial preservada; terminología nueva explícita | Texto de introducción | Comparación |
| R-014 | Seis productos | Formas | Registros importados como pendientes, no ficticios | CRUD, precio visible, disponibilidad | Conteo 6 y estado |
| R-015 | Contacto | Contacto/header/footer | Una fuente única y datos fuente precargados | Campos literales | Igualdad en tres vistas |
| R-016 | Footer | Todas | Cuatro grupos conceptuales; sólo enlaces reales | Texto y destinos permitidos | Link check |
| R-017 | Negro/hueso/olivo | Sistema visual | Equivalentes tokenizados en claro/oscuro | No editable | Contraste y captura |
| R-018 | Serif + sans | Sistema visual | Jerarquía editorial reconocible y español completo | No editable | QA tipográfico |

## 4. Defectos expresamente prohibidos

No forman parte de la réplica:

- rutas `href="#"`, navegación sin URL, historial o deep link;
- `alert('Carrito')`, carrito vacío o checkout simulado;
- formulario sin persistencia, consentimiento, estados o manejador real;
- productos sin imagen usados como si existieran comercialmente;
- rutas `/mnt/user-data`, dependencias del dominio WordPress antiguo o imágenes externas permanentes;
- placeholders de texto donde falta una fotografía;
- `innerHTML` con datos incrustados y uso del objeto global `event`;
- autoplay sin controles, pausa y `prefers-reduced-motion`;
- iconos emoji usados como sistema visual;
- copyright fijo, datos de contacto duplicados o enlaces muertos;
- afirmar 52 especies cuando sólo existen 37;
- inventar misión, valores, reconocimientos, métricas, imágenes, productos o disponibilidad.

## 5. Contrato del administrador

Cada elemento administrable se opera con el mismo recorrido:

`Elegir tarea → abrir registro o sección → cambiar campos → previsualizar → publicar`

Reglas:

- el administrador nunca ve JSON, clases CSS, nombres de tablas, GitHub, Lovable, Supabase o Vercel;
- guardar crea borrador; publicar requiere resumen;
- imagen nueva exige recorte por slot, punto focal y texto alternativo;
- eliminar se sustituye por despublicar/papelera/restaurar;
- una edición nunca altera retícula, tipografía, color ni componentes;
- todo dato importado del HTML conserva `source=legacy_html`, estado de validación y fecha de decisión;
- correcciones de copy mantienen historial antes/después y responsable.

## 6. Gates de aceptación

### Gate A — Inventario

- matriz R-001 a R-018 completa;
- 5 mensajes hero, 3 logotipos, 4 reconocimientos, 37 animales y 6 productos contabilizados;
- ningún elemento del HTML queda “por decidir” sin issue, dueño y fecha.

### Gate B — Fidelidad estructural

- comparación lado a lado a 1440×900, 768×1024 y 390×844;
- mismo orden narrativo y correspondencia de secciones;
- diferencias intencionales anotadas con issue y aprobación de Dirección.

### Gate C — Fidelidad funcional

- navegación, filtros, formularios, CTA y enlaces funcionan;
- no existe control visible sin respuesta real;
- estados loading, vacío, error, éxito, sin permiso y offline donde apliquen.

### Gate D — Administración

- un administrador no técnico cambia cualquier elemento R-002 a R-016 sin ayuda;
- completa editar → preview → publicar → restaurar en menos de cinco minutos;
- producción nunca recibe un borrador o subida incompleta.

### Gate E — Calidad técnica

- tipos, lint, pruebas y build verdes;
- responsive, teclado, foco, contraste y ambos temas verificados;
- CI, Greptile y preview Vercel sin bloqueo crítico;
- matriz final PASS/FAIL enlazada en Linear.

## 7. Regla para Linear, PR y Lovable

1. Todo issue de pantalla cita los IDs `R-xxx` que modifica.
2. Un issue implementa una conducta observable; no mezcla inventario, UI, datos y QA masivo.
3. La rama y el PR incluyen el ID Linear.
4. Lovable recibe un prompt numerado que cita ruta, IDs R-xxx, archivos permitidos y criterios exactos.
5. Ningún prompt puede pedir “moderniza”, “haz elegante” o “replica” sin la matriz correspondiente.
6. `Done` requiere evidencia real de los gates aplicables; un screenshot aislado no basta.
