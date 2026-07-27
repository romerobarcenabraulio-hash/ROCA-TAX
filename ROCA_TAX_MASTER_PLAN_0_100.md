# ROCA TAX — Plan maestro de producto, diseño y ejecución 0–100

**Estado:** documento rector para aprobación  
**Versión:** 1.0 — 20 de julio de 2026  
**Propietario de producto:** Dirección de ROCA TAX  
**Fuente de verdad de alcance:** este documento  
**Documentos anteriores:** referencias de investigación; no autorizan alcance por sí solos

**Anexo obligatorio de frontend:** `FRONTEND_EXIGENCIA_CERO_OMISIONES.md`
**Contrato obligatorio de réplica:** `docs/product/CONTRATO_REPLICA_HTML_1_A_1.md`

---

## 1. Decisión ejecutiva

ROCA TAX se construirá como una plataforma editorial y comercial con dos experiencias deliberadamente distintas:

1. **Sitio público sin cuenta:** elegante, reservado y visual; explica el oficio, demuestra calidad, presenta trabajos y formas de poliuretano, y conduce a una cotización.
2. **Panel administrativo con acceso por invitación:** literal, guiado y tolerante a errores; permite editar contenido, administrar catálogos y biblioteca, generar PDFs, revisar cotizaciones, publicar y restaurar versiones sin tocar código.

La prioridad de Fase 1 no es “hacer toda la página”. Es construir el sistema operativo editorial que impedirá que cada actualización futura se convierta en trabajo técnico.

La experiencia pública no parte de una reinterpretación libre: replica de forma verificable el HTML heredado conforme al contrato 1:1. Conserva inventario, estructura, identidad y propósito; corrige sus simulaciones y defectos técnicos.

### Resultado de Fase 1

Fase 1 termina únicamente cuando un administrador no técnico puede:

- iniciar sesión de forma segura;
- encontrar la tarea correcta sin capacitación técnica;
- editar una página o elemento de catálogo mediante campos controlados;
- guardar un borrador sin modificar producción;
- revisar una vista previa exacta;
- publicar con una confirmación comprensible;
- verificar qué se publicó, cuándo y por quién;
- restaurar la versión anterior;
- invitar o desactivar a otro administrador según sus permisos.

### No se hará en Fase 1

- venta en línea con pago y logística;
- cuentas para visitantes o clientes;
- edición libre del layout;
- IA que publique sin revisión humana;
- OCR masivo o procesamiento pesado en Render;
- migración definitiva de la biblioteca desde un Excel provisional;
- generación de PDFs finales sin una plantilla comercial aprobada.

---

## 2. Razón de ser del producto

### Propósito

Preservar y presentar el oficio de ROCA TAX con la misma precisión con la que se construye cada pieza, y permitir que el negocio mantenga esa presentación sin depender de un programador.

### Promesa

**Precisión que permanece.**

### Posicionamiento

ROCA TAX no necesita declarar que es el mejor taller de México. La página debe hacer que esa conclusión sea inevitable mediante trayectoria, calidad fotográfica, precisión técnica, procesos claros y una voz sin exageraciones.

### Misión propuesta

Preservar la presencia de cada ejemplar mediante rigor anatómico, oficio artesanal y respeto por su historia.

### Visión propuesta

Elevar la taxidermia hecha en México hasta convertirla en referencia internacional de precisión, permanencia y oficio.

### Valores operativos

- **Respeto:** por el ejemplar, su procedencia y su historia.
- **Precisión:** anatómica, técnica y documental.
- **Oficio:** experiencia convertida en método, no en nostalgia.
- **Responsabilidad:** legal, ambiental y comercial.
- **Discreción:** el trabajo habla antes que la promoción.
- **Innovación útil:** tecnología sólo cuando mejora el resultado o reduce errores.

### Voz de marca

- frases breves y concretas;
- seguridad sin superlativos vacíos;
- lenguaje técnico cuando demuestra conocimiento;
- primera persona plural con moderación;
- nunca “líderes”, “premium”, “de clase mundial” o “experiencias únicas” sin evidencia;
- nunca clichés de safari, aventura o masculinidad teatral.

Ejemplo correcto: **“Desde 1946, cada pieza se resuelve como un problema de anatomía, proporción y permanencia.”**

Ejemplo incorrecto: **“Somos el mejor y más exclusivo taller de taxidermia de México.”**

---

## 3. Usuarios y trabajos que necesitan resolver

| Usuario | Necesidad principal | Cuenta | Experiencia esperada |
|---|---|---:|---|
| Coleccionista o cliente particular | Entender el nivel del taller y solicitar valoración | No | Confianza, discreción y contacto simple |
| Taxidermista profesional | Encontrar una forma por especie, pose, medida o SKU | No | Precisión técnica y rapidez |
| Institución o museo | Ver capacidades, proceso y documentación | No | Evidencia, seriedad y trazabilidad |
| Administrador editorial | Cambiar textos e imágenes sin romper el diseño | Sí | Formularios guiados y reversibles |
| Responsable comercial | Mantener productos, disponibilidad, PDFs y cotizaciones | Sí | Datos claros y publicación controlada |
| Responsable de biblioteca | Buscar, agregar e importar libros | Sí | Búsqueda potente e importación auditable |
| Propietario | Controlar usuarios, permisos, versiones y publicación | Sí | Visibilidad total y seguridad |

Principio: el visitante no se registra. La autenticación existe sólo para operar el negocio.

---

## 4. Filosofía de diseño

### Concepto: archivo contemporáneo

La marca se presenta como una institución privada que abre cuidadosamente una parte de su archivo. La estética mezcla precisión editorial, materialidad natural y silencios amplios. No imita un museo antiguo ni una plantilla de lujo.

### Equilibrio emocional

- 40% autoridad serena;
- 25% misterio y reserva;
- 20% precisión científica;
- 10% materialidad artesanal;
- 5% calidez humana.

### Sistema claro y oscuro

No serán dos diseños independientes. Serán dos expresiones del mismo sistema de tokens, jerarquía, retícula y componentes.

| Tema | Uso | Fondo | Texto | Acento | Sensación |
|---|---|---|---|---|---|
| **Archivo claro** | lectura, historia, fichas técnicas | hueso mineral | carbón | olivo/bronce apagado | papel, archivo, luz natural |
| **Nocturno** | fotografía, colección, navegación inmersiva | carbón profundo | marfil | olivo/bronce apagado | reserva, profundidad, galería |

Reglas:

- respetar la preferencia del sistema en la primera visita;
- ofrecer un selector visible, no invasivo;
- recordar la elección;
- mantener contraste WCAG AA en ambos temas;
- el panel administrativo abre en claro por legibilidad; oscuro es opcional;
- no usar fondos texturizados detrás de formularios ni tablas.

### Tipografía

- **Titulares/editorial:** serif de alto contraste, sobria, sin exceso ornamental.
- **Interfaz/cuerpo:** sans serif neutral y altamente legible.
- máximo dos familias y cuatro pesos;
- cursiva sólo para nombres científicos, citas y notas curatoriales;
- escala fluida y estable; nunca titulares gigantes usados para ocultar falta de contenido.

La selección final requiere prueba con caracteres españoles, números, SKUs, medidas y nombres científicos antes de comprar una licencia.

### Fotografía

- únicamente trabajo real de ROCA TAX;
- encuadres controlados, luz consistente y fondos sin ruido;
- alternar pieza completa, detalle anatómico y proceso;
- definir proporciones obligatorias por bloque para evitar recortes accidentales;
- registrar texto alternativo, crédito, especie, autorización y punto focal;
- nunca mezclar fotografías de stock con trabajo propio.

### Movimiento

- 150–250 ms para estados de interfaz;
- 300–500 ms para transiciones editoriales discretas;
- sin parallax agresivo, cursores personalizados o animaciones de carga decorativas;
- respetar `prefers-reduced-motion`;
- una animación debe explicar cambio de estado, jerarquía o avance.

### Señales que delatan una plantilla generada por IA y quedan prohibidas

- tarjetas idénticas repetidas en cada sección;
- degradados violetas, brillos o vidrio;
- iconos genéricos para llenar espacio;
- textos grandilocuentes sin evidencia;
- imágenes inconsistentes o falsas;
- hero con múltiples botones equivalentes;
- estadísticas sin fuente;
- exceso de bordes redondeados y sombras;
- secciones ensambladas sin una narrativa;
- contenido ficticio que llegue a producción.

---

## 5. Arquitectura pública completa

### Navegación principal

`Inicio · El Estudio · Taxidermia · Formas · Colección · Catálogos · Contacto`

Acción persistente: `Solicitar valoración`. En móvil, menú completo más acción fija sólo cuando no cubra contenido.

### Matriz de pantallas públicas

| ID | Pantalla | Razón de existir | Acción principal | Criterio de aceptación |
|---|---|---|---|---|
| P-01 | Inicio | Posicionar la marca y dirigir al visitante correcto | Solicitar valoración | En 5 segundos se entiende qué hace ROCA TAX y existen tres rutas claras |
| P-02 | El Estudio | Sustituir páginas corporativas vacías por evidencia | Conocer el proceso | Historia, misión, valores, taller y equipo forman una narrativa verificable |
| P-03 | Taxidermia | Explicar servicios, requisitos y método | Solicitar valoración | El usuario identifica servicio, información necesaria y siguiente paso |
| P-04 | Servicio | Resolver dudas específicas por tipo de trabajo | Valorar este servicio | Alcance, exclusiones, proceso, evidencia y CTA contextual están presentes |
| P-05 | Formas | Encontrar formas de poliuretano con precisión | Agregar a solicitud | Se puede buscar y filtrar sin conocer la taxonomía interna |
| P-06 | Ficha de forma | Decidir si una forma es adecuada | Solicitar esta forma | SKU, medidas, orientación, pose, disponibilidad y galería son inequívocos |
| P-07 | Colección | Demostrar calidad sin confundir muestra con tienda | Ver una pieza | Filtros útiles, autoría y procedencia autorizada |
| P-08 | Ficha de pieza | Mostrar detalle, técnica y contexto | Consultar proyecto similar | Imagen, especie, región, montaje e historia coherentes |
| P-09 | Catálogos | Entregar documentos vigentes | Ver/descargar PDF | Cada documento muestra fecha, versión y vigencia |
| P-10 | Valoración | Capturar una solicitud completa con poco esfuerzo | Enviar solicitud | Flujo por pasos, guardado de datos y folio de confirmación |
| P-11 | Contacto | Resolver consultas que no necesitan cotización | Contactar | Canales, horario, ubicación y expectativa de respuesta claros |
| P-12 | Resultados de búsqueda | Encontrar productos y contenido transversal | Abrir resultado | Consulta tolera nombres comunes, científicos y SKU |
| P-13 | Legales | Dar transparencia y proteger la operación | Consultar política | Privacidad, términos y cookies corresponden al uso real de datos |
| P-14 | Estados del sistema | Evitar callejones sin salida | Recuperar la tarea | 404, sin resultados, error y confirmación ofrecen salida clara |

### P-01 — Inicio

**Filosofía:** no explicar todo; demostrar criterio y abrir la puerta correcta.

Orden:

1. encabezado sobrio;
2. fotografía principal real;
3. promesa de una línea y `Solicitar valoración`;
4. evidencia verificable: trayectoria, taller y ubicación;
5. tres accesos: Taxidermia, Formas, Colección;
6. tres trabajos seleccionados, no un mosaico interminable;
7. proceso resumido;
8. cierre de contacto.

Estados: carga de imagen, imagen de respaldo, contenido incompleto, móvil, tema oscuro/claro.  
No incluir: carrusel, video automático con audio, popup inmediato, contador inventado.

### P-02 — El Estudio

**Filosofía:** la autoridad se construye con historia y método, no con adjetivos.

Secciones: manifiesto breve; línea de tiempo; misión; visión; valores demostrados con ejemplos; instalaciones; equipo; reconocimientos verificables; responsabilidad legal y ambiental; CTA. “Quiénes somos” no será una pantalla aislada si sólo repite contenido.

### P-03 — Taxidermia

**Filosofía:** convertir una disciplina compleja en un proceso comprensible sin trivializarla.

Contenido: tipos de montaje; restauración; proceso; qué debe aportar el cliente; documentación; rangos de tiempo; conservación; preguntas frecuentes; casos relacionados.

### P-04 — Servicio individual

Plantilla controlada para cada servicio: título; resumen; galería; cuándo aplica; qué incluye/no incluye; proceso; requisitos; tiempos como rango; preguntas; casos; valoración prellenada.

### P-05 — Formas de poliuretano

**Filosofía:** catálogo técnico antes que escaparate.

Buscador por especie, nombre científico, nombre común o SKU. Filtros: familia/especie, montaje, pose, orientación, talla, disponibilidad. Orden: relevancia, nombre, reciente. Cada resultado muestra foto, nombre, SKU, medidas esenciales, disponibilidad y acción.

Estados obligatorios: cargando, vacío inicial, ningún resultado, error, filtro activo, producto no disponible, datos parciales.

### P-06 — Ficha de forma

Galería técnica; nombre; SKU; especie; convención de medidas ilustrada; pose; orientación; variantes; compatibilidad; disponibilidad; precio sólo si la política comercial lo autoriza; descarga de ficha; relacionados; solicitud prellenada.

Decisión pendiente: precio público, “solicitar precio” o ambos por tipo de cliente.

### P-07 — Colección

**Filosofía:** archivo curado, no muro de tarjetas.

Colecciones editoriales y filtros por región, especie, montaje, década y técnica. No más de 12 resultados por página inicial. Toda pieza define si es muestra, disponible o privada; el visitante nunca debe inferir que todo está a la venta.

### P-08 — Ficha de pieza

Fotografía principal; nombre común/científico; región; montaje; año; nota del taller; técnica/materiales publicables; detalles; procedencia/autorización cuando corresponda; proyectos relacionados; consulta contextual.

### P-09 — Catálogos

Documento, portada, propósito, idioma, versión, fecha de vigencia, tamaño y acciones `Ver en línea` / `Descargar PDF`. Un PDF anterior nunca sustituye silenciosamente al vigente.

### P-10 — Solicitar valoración

Un tema por paso:

1. tipo de solicitud;
2. especie, servicio o SKU;
3. descripción y ubicación;
4. fotografías/documentos;
5. nombre y canal de contacto;
6. revisión y consentimiento;
7. confirmación con folio y expectativa de respuesta.

Debe permitir volver sin perder datos, validar archivos antes de enviarlos y guardar la solicitud aunque falle la notificación de correo/WhatsApp.

### P-11 — Contacto

Ubicación, mapa, horario, teléfono, WhatsApp, correo y consultas generales. Empleo/proveedores usan motivo separado. No duplicar el formulario completo de valoración.

### P-12 a P-14 — Utilidades y confianza

Búsqueda global sólo se activará si la cantidad real de contenido la justifica. Legales deberán responder al formulario, analítica y almacenamiento realmente usados. Todos los estados incluirán explicación humana, acción de recuperación y canal de ayuda.

---

## 6. Arquitectura administrativa completa

### Principios de extrema facilidad

1. Una pantalla tiene una acción principal.
2. Los botones dicen el resultado: `Guardar borrador`, no `Aceptar`.
3. Nada se publica por accidente.
4. Nada importante se elimina de inmediato.
5. El sistema guarda automáticamente y muestra la hora.
6. Los formularios enseñan ejemplos y límites al lado del campo.
7. La vista previa usa los datos exactos que se publicarán.
8. Los errores aparecen junto al dato y explican cómo corregirlo.
9. Las tareas frecuentes están a un clic del inicio.
10. El administrador no puede alterar la retícula, tipografía o componentes.

### Navegación administrativa

`Inicio · Página · Colección · Formas · PDFs · Biblioteca · Cotizaciones`

En un menú secundario: `Usuarios · Historial · Configuración · Ayuda`.

### Matriz de pantallas administrativas

| ID | Pantalla | Razón de existir | Acción principal | Permiso mínimo | Criterio de aceptación |
|---|---|---|---|---|---|
| A-01 | Acceso | Autenticar sólo al equipo invitado | Entrar | Invitado | No existe registro público; recuperación y MFA funcionan |
| A-02 | Inicio | Traducir el sistema en seis tareas | Elegir tarea | Viewer | Una persona nueva encuentra una tarea en menos de 30 s |
| A-03 | Páginas | Mostrar qué está publicado o pendiente | Editar | Editor | Cada página tiene miniatura, estado, responsable y fecha |
| A-04 | Editor de página | Editar contenido sin romper layout | Guardar borrador | Editor | Campos guiados, autoguardado y validación sin código |
| A-05 | Vista previa | Revisar el resultado real | Aprobar revisión | Editor | Desktop/móvil y tema claro/oscuro usan el mismo borrador |
| A-06 | Publicación | Evitar publicaciones accidentales | Publicar cambios | Publisher | Resume exactamente qué cambiará y crea versión |
| A-07 | Versiones | Recuperar un estado conocido | Restaurar versión | Publisher | Comparación, autor, fecha y restauración reversible |
| A-08 | Colección | Administrar piezas del portafolio | Nueva pieza | Editor catálogo | Lista, filtros, estado y edición masiva limitada |
| A-09 | Editor de pieza | Mantener ficha y galería | Guardar pieza | Editor catálogo | Requeridos, orden de fotos y visibilidad son claros |
| A-10 | Formas | Administrar inventario comercial | Nueva forma | Editor comercial | Búsqueda, SKU único, disponibilidad y filtros funcionan |
| A-11 | Editor de forma | Crear ficha técnica correcta | Guardar forma | Editor comercial | Medidas, unidades y variantes se validan |
| A-12 | Generar PDF | Crear catálogo desde datos vigentes | Generar vista previa | Editor comercial | Selección, plantilla, portada y alcance visibles |
| A-13 | Historial PDF | Identificar y recuperar catálogos | Publicar PDF | Publisher | Versión, autor, fecha, estado y archivo son auditables |
| A-14 | Biblioteca | Encontrar libros privados | Buscar | Biblioteca | Busca por título, autor, ISBN, LC y categoría |
| A-15 | Ficha de libro | Consultar y corregir un registro | Editar libro | Biblioteca | Se ve historial y procedencia de cada dato |
| A-16 | Nuevo libro | Capturar sin depender de Excel | Guardar libro | Biblioteca | Duplicados probables aparecen antes de guardar |
| A-17 | Importar Excel | Incorporar lotes con seguridad | Revisar archivo | Biblioteca | Nada se escribe antes del mapeo y previsualización |
| A-18 | Resultado de importación | Resolver excepciones | Confirmar importación | Biblioteca | Nuevos, actualizados, omitidos y errores están separados |
| A-19 | Cotizaciones | Ordenar solicitudes entrantes | Abrir solicitud | Comercial | Estado, antigüedad, tipo y responsable visibles |
| A-20 | Detalle de cotización | Dar seguimiento | Actualizar estado | Comercial | Historial, archivos y datos de contacto unidos |
| A-21 | Usuarios | Invitar y limitar acceso | Invitar usuario | Owner | Rol explícito, sin registro abierto y revocación inmediata |
| A-22 | Configuración | Mantener datos globales | Guardar configuración | Admin | Cambios sensibles requieren confirmación |
| A-23 | Auditoría | Saber quién cambió qué | Consultar evento | Admin | Eventos filtrables y no editables |
| A-24 | Ayuda guiada | Resolver dudas sin soporte técnico | Ver instrucción | Cualquier rol | Cada tarea crítica tiene ejemplo breve y recuperación |

### A-01 — Acceso

Correo, contraseña o enlace seguro; recuperación; alta sólo por invitación; MFA obligatorio para Owner/Admin y recomendado para otros. Mensajes sin jerga. Tras cinco intentos fallidos, protección temporal y canal de recuperación.

### A-02 — Inicio

Seis acciones grandes:

1. `Editar página`
2. `Editar catálogo`
3. `Formas de poliuretano`
4. `Crear PDF`
5. `Biblioteca privada`
6. `Ver cotizaciones`

Debajo: cambios sin publicar, última publicación, tareas incompletas y actividad reciente. Sin gráficas decorativas.

### A-03 a A-07 — Flujo editorial

El editor trabaja con secciones bloqueadas. Puede modificar título, cuerpo, imagen, pie, CTA, visibilidad y orden dentro de límites definidos. No puede inventar columnas, colores o tipografías.

Barra persistente:

- `Salir`
- estado `Guardado automáticamente a las 12:42`
- `Guardar borrador`
- `Vista previa`
- `Publicar cambios`

Antes de publicar:

> Publicarás 3 cambios en Inicio: fotografía principal, frase de apertura y teléfono. La versión actual quedará disponible para restaurar.

Restaurar crea una nueva versión basada en la anterior; no borra el historial.

### A-08 a A-11 — Colección y formas

Lista primero, formulario después. Acciones por lote sólo para estado, categoría y visibilidad; nunca para medidas, precio o descripción. SKU obligatorio y único. Una ficha incompleta puede guardarse como borrador, pero no publicarse.

### A-12 y A-13 — PDFs

Flujo:

1. elegir tipo de catálogo;
2. elegir filtros/colección;
3. elegir idioma y datos comerciales;
4. generar borrador;
5. revisar PDF renderizado;
6. publicar versión;
7. descargar o copiar enlace.

El PDF es una salida de datos estructurados, no el lugar donde se corrige contenido. El original generado queda inmutable. Una corrección produce versión nueva.

### A-14 a A-18 — Biblioteca privada

La biblioteca no es pública ni comparte búsqueda con el sitio. El libro incluye título, autor, subtítulo, ISBN, LC/número interno, editorial, año, idioma, formato/tamaño, categorías, palabras clave, ubicación física, descripción ES/EN, portada, fuente del dato, confianza y notas privadas.

Importación Excel:

1. subir `.xlsx` o `.csv`;
2. elegir hoja;
3. mapear columnas;
4. validar tipos y requeridos;
5. detectar duplicados por ISBN, LC y título+autor normalizados;
6. mostrar simulación;
7. resolver conflictos;
8. confirmar;
9. entregar reporte descargable;
10. permitir revertir el lote.

El archivo disponible en Descargas es provisional. El diseño de importación se probará con él, pero la migración definitiva esperará el original de Google Drive.

### A-19 y A-20 — Cotizaciones

Estados: `Nueva`, `En revisión`, `Esperando información`, `Valorada`, `Cerrada`, `No procede`. Cada cambio añade nota y responsable. No se borran solicitudes; se archivan. Exportación sólo con permiso.

### A-21 a A-24 — Gobierno

Invitación por correo, rol preseleccionado, vencimiento, reenvío y revocación. Configuraciones globales separan datos públicos y secretos. Auditoría registra login, edición, publicación, restauración, importación, exportación y cambio de permisos. Ayuda ofrece instrucciones de tres pasos y ejemplos reales.

---

## 7. Roles y permisos

| Capacidad | Owner | Admin | Editor | Comercial | Biblioteca | Viewer |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Ver panel | Sí | Sí | Sí | Sí | Sí | Sí |
| Editar páginas/colección | Sí | Sí | Sí | No | No | No |
| Publicar/restaurar | Sí | Sí | Opcional | No | No | No |
| Editar formas/precios | Sí | Sí | No | Sí | No | No |
| Generar PDF | Sí | Sí | No | Sí | No | No |
| Publicar PDF | Sí | Sí | No | Opcional | No | No |
| Ver/gestionar cotizaciones | Sí | Sí | No | Sí | No | No |
| Gestionar biblioteca | Sí | Sí | No | No | Sí | No |
| Importar/exportar biblioteca | Sí | Sí | No | No | Sí | No |
| Invitar/desactivar usuarios | Sí | Sí limitado | No | No | No | No |
| Cambiar roles/seguridad | Sí | No | No | No | No | No |
| Ver auditoría | Sí | Sí | No | No | No | No |

Reglas: un usuario no cambia su propio rol; el último Owner no se puede desactivar; los permisos se validan en servidor/base de datos, no sólo ocultando botones.

---

## 8. Arquitectura técnica recomendada

### Pila base

- **Frontend/app:** React + TypeScript, arquitectura compatible con Lovable; decisión final del framework en ADR-002 antes de iniciar.
- **Datos, archivos y autenticación:** Supabase Postgres + Storage + Auth + RLS.
- **Hosting:** Vercel para aplicación, previews y producción.
- **Código:** GitHub, repositorio técnico `roca-tax-pagina`.
- **Gestión:** Linear.
- **Revisión automatizada:** Greptile sobre pull requests.
- **Aceleración visual:** Lovable bajo límites descritos en la sección 13.
- **Procesos pesados:** Render sólo si las métricas de PDF/OCR exceden los límites del flujo normal.

### Decisión de autenticación — ADR-001 propuesto

**Elegir Supabase Auth para Fase 1.**

Razones:

- los usuarios son internos y pocos;
- no hay registro público ni múltiples organizaciones;
- identidades, perfiles, datos, archivos y RLS viven en una sola plataforma;
- reduce secretos, webhooks y sincronización entre proveedores;
- permite invitaciones, recuperación, OTP/magic link y MFA;
- la interfaz será propia y más simple que un dashboard genérico.

**Clerk se reconsidera** si aparecen cuentas de clientes, varias empresas/talleres, social login complejo, SSO empresarial o gestión organizacional como producto. Clerk es técnicamente válido, pero hoy resolvería problemas que ROCA TAX todavía no tiene.

### Entidades principales

`profiles`, `roles`, `permissions`, `pages`, `page_sections`, `content_versions`, `media_assets`, `portfolio_items`, `portfolio_media`, `species`, `forms`, `form_variants`, `catalog_definitions`, `pdf_versions`, `books`, `book_categories`, `book_category_links`, `import_jobs`, `import_rows`, `quote_requests`, `quote_files`, `quote_events`, `audit_events`, `site_settings`.

### Reglas de datos

- IDs internos estables; slugs legibles separados;
- publicación mediante `draft_version_id` y `published_version_id`;
- borradores no visibles públicamente;
- archivos con metadatos y permisos;
- soft delete para contenido; desactivación para usuarios;
- historial de cambios append-only;
- tiempos en UTC, presentación en zona local;
- catálogos/PDFs siempre apuntan a una versión explícita;
- migraciones revisadas y reproducibles;
- ningún secreto en frontend o repositorio.

### Modelo de publicación

`Editar → Autoguardar borrador → Validar → Vista previa → Confirmar → Crear versión → Publicar → Registrar auditoría`

Si falla la publicación, la versión pública anterior permanece intacta. Publicar no depende de regenerar toda la aplicación si el contenido puede leerse dinámicamente y cachearse con invalidación segura.

---

## 9. Fase 1 — Administrador, desglosada

### F1.0 — Gobierno y decisiones

- aprobar este documento;
- cerrar ADR-001 autenticación;
- cerrar ADR-002 framework;
- definir propietario de GitHub y visibilidad del repositorio;
- nombrar Owner y usuarios piloto;
- definir ambientes local, preview y producción.

**Salida:** alcance congelado y decisiones registradas.

### F1.1 — Repositorio y calidad base

- crear proyecto Lovable vacío/controlado y conectarlo al destino correcto de GitHub, porque Lovable crea el repositorio al conectar;
- establecer `main` protegida;
- plantillas de issue/PR;
- lint, TypeScript, pruebas y build en CI;
- CODEOWNERS y revisión obligatoria;
- Vercel preview sin dominio productivo todavía;
- Supabase dev/staging/prod o estrategia equivalente aprobada.

**Salida:** un cambio no puede llegar a producción sin PR y checks.

### F1.2 — Acceso y permisos

- login, recuperación e invitación;
- perfiles y seis roles;
- RLS por capacidad;
- MFA obligatorio para Owner/Admin;
- sesiones, revocación y auditoría;
- pantallas A-01 y A-21.

**Salida:** pruebas demuestran que cada rol sólo puede ejecutar sus acciones.

### F1.3 — Shell administrativo

- navegación;
- inicio de seis tareas;
- estados globales;
- diseño responsive;
- claro/oscuro, con claro por defecto;
- accesibilidad por teclado y lector de pantalla;
- ayuda contextual.

**Salida:** usuario piloto encuentra cualquier módulo en menos de 30 segundos.

### F1.4 — Contenido y medios

- páginas y secciones tipadas;
- editor controlado;
- carga, recorte, punto focal, alt y crédito de imágenes;
- autoguardado;
- estados y validaciones;
- catálogo mínimo de muestra.

**Salida:** un editor cambia Inicio sin tocar layout ni código.

### F1.5 — Vista previa, publicación y versiones

- preview desktop/móvil;
- preview claro/oscuro;
- diff humano;
- confirmación;
- versión inmutable;
- rollback;
- registro de auditoría;
- manejo de fallo parcial.

**Salida:** publicar y restaurar cumplen el recorrido completo.

### F1.6 — Seguridad y resiliencia

- límites de tipo/tamaño de archivo;
- antivirus o cuarentena según riesgo;
- rate limiting;
- backups y prueba de restauración;
- logs sin datos sensibles;
- políticas RLS automatizadas;
- validación del lado servidor;
- sesión expirada recuperable.

**Salida:** revisión de seguridad sin hallazgos críticos/altos abiertos.

### F1.7 — Piloto y capacitación

- cinco tareas con administradores reales;
- observar sin ayudar durante el primer intento;
- corregir etiquetas y secuencia, no “entrenar alrededor” de una interfaz confusa;
- manual de una página;
- video breve sólo como respaldo;
- aprobación del Owner.

**Salida:** al menos 90% de tareas críticas completadas sin asistencia.

---

## 10. Roadmap 0–100

| Tramo | Objetivo | Entregable/gate |
|---:|---|---|
| 0–5 | Alinear propósito, usuarios y límites | Plan maestro aprobado |
| 6–10 | Inventario definitivo de contenido y activos | Matriz de contenido, fotos y documentos |
| 11–15 | Cerrar ADRs y modelo de permisos | Auth, framework, roles y ambientes aprobados |
| 16–20 | Crear Lovable/GitHub/Linear/Greptile/Vercel/Supabase en orden | Integraciones verificadas, no sólo “conectadas” |
| 21–25 | Calidad base y sistema visual | CI verde, tokens y componentes base |
| 26–32 | Acceso, usuarios, roles y MFA | Seguridad funcional por rol |
| 33–38 | Shell e inicio administrativo | Navegación validada con usuarios |
| 39–45 | Editor y medios | Borradores estables y sin pérdida de datos |
| 46–50 | Preview, publicación, versiones y rollback | **Cierre de Fase 1** |
| 51–57 | Inicio y El Estudio | Marca y narrativa aprobadas |
| 58–63 | Taxidermia y valoración | Solicitud completa con folio |
| 64–70 | Colección pública | Archivo curado y fichas |
| 71–76 | Formas de poliuretano | Catálogo técnico y solicitudes |
| 77–82 | PDF y documentos | Versiones publicables y descargables |
| 83–88 | Biblioteca/importación final | Migración desde Excel original de Drive |
| 89–92 | Contenido final, legales y SEO | Sin contenido ficticio ni huecos críticos |
| 93–96 | QA integral, rendimiento, seguridad | Gates verdes y restauración probada |
| 97–99 | Piloto, capacitación y lanzamiento gradual | Aprobación del Owner y métricas sanas |
| 100 | Lanzamiento | Dominio productivo, monitoreo y runbook |

---

## 11. Backlog inicial de Linear

### Proyecto

**ROCA TAX — Plataforma web y administración**

### Hitos

1. `M0 — Decisiones y contenido`
2. `M1 — Administrador seguro`
3. `M2 — Editor y publicación`
4. `M3 — Sitio público`
5. `M4 — Catálogos, PDF y biblioteca`
6. `M5 — Lanzamiento`

### Epics de Fase 1

- `ADMIN-01 Gobierno y ADRs`
- `ADMIN-02 Repositorio, CI y ambientes`
- `ADMIN-03 Autenticación y perfiles`
- `ADMIN-04 Roles y RLS`
- `ADMIN-05 Navegación administrativa`
- `ADMIN-06 Editor de contenido`
- `ADMIN-07 Gestión de medios`
- `ADMIN-08 Preview y publicación`
- `ADMIN-09 Versiones y restauración`
- `ADMIN-10 Auditoría, seguridad y backups`
- `ADMIN-11 Piloto de usabilidad`

### Plantilla de issue

- **Problema:** qué obstáculo existe.
- **Usuario:** quién lo sufre.
- **Resultado:** conducta observable esperada.
- **Dentro de alcance:** lista cerrada.
- **Fuera de alcance:** lista explícita.
- **Diseño/estado:** enlace y estados contemplados.
- **Datos/permisos:** entidades y roles afectados.
- **Criterios de aceptación:** verificables.
- **Pruebas:** unitarias, integración, E2E o manuales.
- **Telemetría/auditoría:** qué se registra.
- **Riesgo/rollback:** cómo se revierte.

### Definition of Ready

Un issue no entra a desarrollo sin usuario, resultado, diseño o contrato, permisos, estados de error y criterios de aceptación. Si afecta datos, incluye migración y rollback.

### Definition of Done

Código revisado; CI verde; preview verificado; responsive; ambos temas; accesibilidad; permisos probados; auditoría cuando aplique; documentación actualizada; sin contenido ficticio; aprobación del responsable.

---

## 12. Reglas anti–bola de nieve

1. Un issue produce una conducta verificable.
2. Un PR resuelve un issue o una unidad muy pequeña de issues inseparables.
3. Objetivo de PR: menos de 400 líneas netas revisables, excluyendo lockfiles y migraciones; si excede, justificar o dividir.
4. Prohibidos los refactors no relacionados dentro de un feature PR.
5. Los modelos de datos se definen una vez y se consumen; no existen copias paralelas para Lovable, frontend y PDF.
6. No se incrustan catálogos o textos reales como arreglos mágicos en componentes.
7. Cada dependencia nueva requiere propósito, responsable y alternativa considerada.
8. Ningún código generado por IA entra sin lectura humana, pruebas y ajuste al sistema.
9. Greptile complementa; no sustituye revisión humana ni CI.
10. Los cambios de esquema usan migraciones pequeñas, reversibles y revisadas.
11. Una funcionalidad incompleta permanece tras feature flag o fuera de `main`.
12. No se cambia contrato, UI y datos masivamente en un mismo PR sin una secuencia aprobada.
13. La documentación se modifica en el mismo PR que cambia la conducta.
14. Errores conocidos se convierten en issues; no se ocultan con comentarios `TODO` sin dueño.
15. No se optimiza antes de medir, pero tampoco se acepta deuda sin fecha y propietario.

### Límites de módulos

- `public-site`: vistas públicas y consumo de contenido publicado;
- `admin`: tareas y componentes administrativos;
- `domain`: modelos, validación y reglas de negocio;
- `data`: repositorios, consultas y mutaciones;
- `auth`: sesión, perfiles y permisos;
- `media`: carga, transformación y metadatos;
- `publishing`: versiones, preview, publish y rollback;
- `pdf`: plantillas y generación;
- `imports`: análisis y aplicación de Excel/CSV;
- `audit`: eventos inmutables.

La UI no ejecuta SQL ni decide permisos. Los generadores de PDF no contienen una segunda copia de la lógica comercial.

---

## 13. Gobierno de herramientas

### Orden obligatorio de conexión

1. **Decidir cuenta/organización propietaria de GitHub.** No puede quedar a nombre accidental de un colaborador.
2. **Crear el proyecto base en Lovable y conectarlo a GitHub en el destino definitivo.** Lovable crea el repositorio al conectar y su ruta no debe renombrarse o moverse después.
3. **Configurar GitHub:** privado inicialmente, `main` protegida, PR obligatorio, CODEOWNERS, secrets, templates.
4. **Conectar Vercel:** previews por PR; producción desde `main`; dominio después de QA.
5. **Crear Supabase:** ambientes y secretos separados; migraciones bajo Git.
6. **Crear proyecto Linear:** hitos, epics, etiquetas y automatización con GitHub.
7. **Instalar Greptile:** acceso al repositorio y revisión de PRs; resolver configuración antes del primer feature grande.
8. **Validar un cambio de extremo a extremo:** Linear → rama → PR → CI/Greptile → Vercel preview → aprobación → merge → producción controlada.

### Lovable

- herramienta para acelerar composición visual y prototipos;
- no define arquitectura, permisos ni esquema sin ADR;
- cada instrucción menciona pantalla, usuario, datos, estados, componentes permitidos y criterios;
- se trabaja con contexto pequeño y cambios acotados;
- antes de cada generación se crea/actualiza issue de Linear;
- después se revisa diff, no sólo screenshot;
- la sincronización actual opera sobre el repositorio/default branch: la estrategia exacta de ramas debe probarse con un spike antes de confiar el flujo productivo.

### Greptile

- reglas focalizadas en seguridad, permisos, migraciones, duplicación y límites modulares;
- no pedirle revisar PRs gigantes;
- comentarios se clasifican: bloqueante, deuda real, sugerencia;
- falsas alarmas se documentan para afinar reglas;
- ningún PR se reescribe por completo sólo para complacer recomendaciones cosméticas.

### Linear

- el ID aparece en nombre de rama y título del PR;
- estados: `Backlog → Ready → In Progress → In Review → Ready for QA → Done`;
- `Done` sólo después de validación, no al abrir PR;
- decisiones importantes enlazan ADR y diseño;
- bugs de producción incluyen severidad, impacto y workaround.

### Vercel y Render

Vercel será el destino primario porque ofrece preview por rama/PR y despliegue desde Git. Render no se añadirá “por si acaso”. Entra sólo si la generación de PDF, OCR o importaciones requiere trabajadores prolongados, colas o recursos que no encajan en el runtime principal.

---

## 14. Comandos de diseño para Lovable

Cada instrucción debe seguir esta estructura:

```text
OBJETIVO
[Una conducta observable, no "hazlo elegante".]

USUARIO Y CONTEXTO
[Quién lo usa, qué sabe y qué intenta terminar.]

PANTALLA / RUTA
[ID del plan y ruta prevista.]

DATOS
[Entidades y campos existentes. No inventar datos.]

COMPONENTES PERMITIDOS
[Componentes del sistema y límites de layout.]

ESTADOS OBLIGATORIOS
[Carga, vacío, error, éxito, sin permiso, móvil, claro y oscuro.]

INTERACCIONES
[Acción principal, confirmaciones y recuperación.]

NO HACER
[Cambios fuera de alcance, dependencias, datos mock permanentes.]

CRITERIOS DE ACEPTACIÓN
[Lista verificable alineada al issue Linear.]
```

Ejemplo para A-04:

```text
Implementa A-04 Editor de página para el rol Editor. Debe editar únicamente
los campos definidos por page_sections; no permitas cambiar layout, color o
tipografía. Incluye autoguardado visible, validación junto al campo y barra con
Salir, Guardar borrador, Vista previa y Publicar cambios. Cubre carga, error de
guardado, sesión expirada, falta de permiso, móvil y ambos temas. No agregues
dependencias ni modifiques el esquema. Aceptación: el borrador sobrevive a una
recarga, no altera producción y la vista previa refleja exactamente los datos.
```

---

## 15. Calidad, seguridad y métricas de éxito

### Usabilidad administrativa

- ≥90% de tareas críticas completadas sin ayuda;
- encontrar módulo en <30 s;
- editar, previsualizar y publicar un cambio sencillo en <3 min;
- 0 publicaciones accidentales durante piloto;
- 0 pérdida de borradores en pruebas de interrupción;
- textos de error comprendidos por 4 de 5 usuarios piloto.

### Experiencia pública

- WCAG 2.2 AA;
- LCP objetivo ≤2.5 s en móvil representativo;
- CLS ≤0.1;
- INP ≤200 ms;
- formularios recuperables y con protección anti-spam;
- SEO técnico, datos estructurados pertinentes y metadatos reales;
- fotografías optimizadas sin destruir detalle.

### Seguridad y operación

- 100% de tablas sensibles con RLS y pruebas;
- MFA en Owner/Admin;
- secretos separados por ambiente;
- backups automáticos y restauración probada;
- auditoría de acciones críticas;
- archivos validados y acceso firmado/privado cuando corresponda;
- dependencias con vulnerabilidades críticas bloquean release;
- runbook para caída, rollback, usuario comprometido y publicación incorrecta.

---

## 16. Riesgos y respuestas

| Riesgo | Señal temprana | Respuesta |
|---|---|---|
| Diseño bonito pero genérico | componentes repetidos y copy abstracto | crítica editorial por pantalla y uso exclusivo de evidencia real |
| Admin aún demasiado complejo | usuarios preguntan “¿ahora qué?” | observar tareas, reducir decisiones y renombrar acciones |
| Lovable altera arquitectura | diff grande o dependencia inesperada | detener, dividir issue y restaurar límites |
| Greptile se sobrecarga | PRs enormes y comentarios repetidos | PR pequeño, reglas de revisión y módulo único |
| Dos fuentes de verdad | PDF, web y Excel discrepan | datos estructurados únicos y versiones explícitas |
| Biblioteca sucia | duplicados y columnas cambiantes | staging, mapeo, simulación y rollback por lote |
| Publicación accidental | admin confunde guardar/publicar | borrador por defecto, resumen y confirmación |
| Permisos sólo visuales | API acepta acción oculta | RLS y validación servidor con pruebas negativas |
| Sobrearquitectura | servicios sin caso de uso | gate para cada proveedor y Render diferido |
| Contenido frena desarrollo | textos/fotos no aprobados | inventario temprano y estados `faltante/no publicar` |

---

## 17. Decisiones pendientes del propietario

Estas decisiones no impiden aprobar la arquitectura, pero sí bloquean los tramos indicados:

1. Cuenta u organización que será propietaria del repositorio.
2. Repositorio privado inicialmente o público.
3. Dominio definitivo y acceso al DNS.
4. Nombres, correos y roles de administradores piloto.
5. Precio de formas público, privado o mixto.
6. Venta sólo por cotización o e-commerce futuro.
7. Idiomas de lanzamiento: español únicamente o español/inglés.
8. Fotos que pueden publicarse y permisos/procedencia.
9. Plantillas actuales de catálogos y listas de precios.
10. Excel definitivo de biblioteca en Google Drive.
11. Política de tiempos de respuesta y responsable de cotizaciones.
12. Avisos legales y política de datos aprobados.

---

## 18. Gates: cuándo avanzar y cuándo detenerse

### Gate 0 — Estrategia

Avanzar sólo con propósito, usuarios, alcance y no-alcance aprobados.

### Gate 1 — Sistema

Avanzar sólo con auth, roles, modelo de publicación, stack y ambientes decididos.

### Gate 2 — Diseño

Avanzar sólo con mapa completo, wireframes de A-01/A-02/A-04/A-05/A-06/A-21 y tokens claro/oscuro aprobados.

### Gate 3 — Fase 1

Avanzar al sitio público sólo cuando un usuario piloto edite, previsualice, publique y restaure sin ayuda.

### Gate 4 — Catálogos y biblioteca

Avanzar a migración definitiva sólo con esquema de datos, PDF de referencia y Excel original de Drive.

### Gate 5 — Lanzamiento

Publicar dominio sólo con contenido real, legales, QA, seguridad, backup, rollback y responsables operativos verificados.

---

## 19. Próximos entregables, en orden

1. Aprobar/corregir este plan maestro.
2. Resolver las 12 decisiones del propietario.
3. Crear inventario de contenido y activos con responsable y estado.
4. Crear wireframes de las seis pantallas administrativas críticas.
5. Definir tokens y probar dos rutas públicas en claro/oscuro.
6. Ejecutar prueba de usabilidad de prototipo, antes de código productivo.
7. Convertir Fase 1 en issues de Linear con criterios de este documento.
8. Crear y conectar servicios en el orden de la sección 13.
9. Construir Fase 1 por cortes verticales pequeños.
10. Cerrar Gate 3 y comenzar sitio público.

---

## 20. Criterio final

La plataforma está bien diseñada cuando el público percibe oficio, confianza y reserva, mientras el equipo interno percibe claridad, seguridad y control. Si una decisión aumenta el espectáculo público pero debilita la operación, se rechaza. Si simplifica la administración pero vuelve genérica la marca, se rediseña. La excelencia aquí no será cantidad de funciones: será que cada pantalla tenga una razón, cada acción sea predecible y cada cambio pueda verificarse y revertirse.
