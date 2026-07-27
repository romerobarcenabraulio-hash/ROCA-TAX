# ROCA TAX — Especificación determinista de lanzamiento operativo

**Estado:** contrato obligatorio para implementación, Lovable, QA y producción.
**Producto:** ROCA TAX, independiente de ALQUIMIA.
**Ambigüedad permitida:** cero decisiones de producto, visuales, de datos, seguridad o permisos quedan a criterio de Lovable.
**Contrato público:** `docs/product/CONTRATO_REPLICA_HTML_1_A_1.md`.
**Inventario de contenido:** `docs/product/INVENTARIO_SITIO_OFICIAL_Y_MODELO_EDICION.md`.

## 1. Resultado contractual

No se entrega una demostración, maqueta ni MVP. Se entrega un servicio operativo:

1. sitio público publicado en dominio de ROCA;
2. administración privada operable sin Lovable, GitHub, Vercel o Supabase;
3. contenido, fotografías, colección y formas administrables;
4. solicitudes reales con folio, seguimiento y protección antiabuso;
5. biblioteca privada con búsqueda, captura e importación controlada;
6. catálogos PDF generados desde datos estructurados, versionados y publicables;
7. usuarios por invitación, MFA, permisos reales y auditoría;
8. ambientes separados, backups, restauración ensayada y observabilidad;
9. documentación y capacitación para que el negocio opere sin el autor;
10. réplica estructural verificable del HTML y contenido heredado validado.

La aplicación no está terminada porque “compila” o porque Lovable deja de responder. Está terminada cuando todos los gates de la sección 16 tienen evidencia real.

## 2. Alcance obligatorio de lanzamiento

### 2.1 Sitio público

- Inicio, Estudio, Taxidermia, Formas, ficha de forma, Colección, ficha de pieza, Catálogos, Valoración, Contacto, Privacidad, Términos, Cookies y 404.
- Temas Archivo claro y Nocturno.
- Navegación, filtros, búsqueda, formularios, descargas y enlaces reales.
- SEO técnico, metadatos, sitemap, canonical, robots y datos estructurados cuando correspondan.
- Responsive, teclado, contraste AA, lector de pantalla, zoom 200% y movimiento reducido.
- Contenido publicado solamente; ningún borrador, documento privado o dato personal puede filtrarse.

### 2.2 Administración

- Acceso por invitación, recuperación, MFA y cierre de sesión.
- Inicio con tareas literales, no dashboard decorativo.
- Modo predeterminado `Cambiar fotografías`.
- Edición controlada de textos y datos.
- Borrador, autoguardado, preview privado, diff, publicación atómica, historial y restauración.
- Administración de colección, formas, solicitudes, catálogos PDF, biblioteca y usuarios.
- Estados loading, empty, success, error recuperable, error bloqueante, offline, conflicto, sesión expirada y sin permiso.
- Nada importante se borra físicamente desde la interfaz cotidiana.

### 2.3 Operación y plataforma

- GitHub como fuente de verdad.
- Supabase Auth, Postgres y Storage con RLS.
- Vercel para previews y producción.
- CI, protección de `main`, CODEOWNERS, Greptile y aprobación humana.
- Logs, métricas, alertas, backups y prueba de restauración.
- Runbooks de publicación incorrecta, cuenta comprometida, caída, rollback y recuperación.

## 3. Exclusiones deliberadas de producto

No son “fases posteriores” ocultas. Están fuera porque el servicio definido no las necesita:

- cuentas o portal para clientes;
- carrito, checkout, pagos o inventario transaccional;
- constructor libre de páginas;
- edición PDF tipo Acrobat;
- OCR, IA generativa o búsqueda semántica;
- publicación automática por IA;
- integraciones con ERP, CRM o mensajería no aprobadas;
- aplicación móvil nativa;
- múltiples organizaciones o multi-tenant;
- bilingüe sin traducción humana aprobada.

Una exclusión sólo entra mediante issue, decisión de Dirección, contrato de datos, evaluación de seguridad y nuevo gate de lanzamiento.

## 4. Stack congelado

- React + TypeScript + Vite.
- React Router.
- TanStack Query.
- React Hook Form + Zod.
- Tailwind y tokens CSS del proyecto.
- Supabase Auth, Postgres, Storage y funciones server-side cuando requieran secreto.
- Vercel para aplicación y despliegues.
- Vitest + Testing Library + Playwright.
- Generación PDF con biblioteca aprobada mediante ADR y prueba de carga.

No agregar CMS externo, Clerk, Cloudinary, Shopify, WordPress, Redux, page builders o servicios paralelos. Render sólo se incorpora si una medición real demuestra que el generador PDF excede límites de Vercel; no se añade “por si acaso”.

## 5. Identidad, roles y seguridad

### 5.1 Identidad

- El correo de Supabase Auth es el identificador de acceso.
- `full_name` es nombre visible; no existe username manual.
- No existe registro público.
- Owner invita; el invitado establece su contraseña mediante enlace seguro.
- MFA es obligatorio para Owner y Admin antes de producción.
- Invitaciones expiran, pueden revocarse y reenviarse.
- Recuperación no revela si una cuenta existe.
- `service_role` nunca llega al navegador.

### 5.2 Roles de lanzamiento

Para mantener la operación comprensible se implementan sólo dos roles:

| Capacidad | Owner | Admin |
|---|:---:|:---:|
| Ver y operar panel | Sí | Sí |
| Editar/publicar/restaurar | Sí | Sí |
| Colección, formas y catálogos | Sí | Sí |
| Biblioteca e importaciones | Sí | Sí |
| Solicitudes y exportaciones | Sí | Sí |
| Ver auditoría operativa | Sí | Sí |
| Invitar, suspender y cambiar rol | Sí | No |
| Configuración sensible | Sí | No |

El último Owner activo no puede suspenderse, degradarse ni eliminarse. La autorización se aplica en RLS/API y se prueba negativamente; ocultar botones no cuenta.

## 6. Rutas exactas

### 6.1 Públicas

- `/`
- `/estudio`
- `/taxidermia`
- `/formas`
- `/formas/:slug`
- `/coleccion`
- `/coleccion/:slug`
- `/catalogos`
- `/valoracion`
- `/contacto`
- `/privacidad`
- `/terminos`
- `/cookies`
- `*`

### 6.2 Administración

- `/admin/login`
- `/admin/recuperar`
- `/admin`
- `/admin/fotografias`
- `/admin/paginas`
- `/admin/paginas/:slug`
- `/admin/coleccion`
- `/admin/coleccion/nueva`
- `/admin/coleccion/:id`
- `/admin/formas`
- `/admin/formas/nueva`
- `/admin/formas/:id`
- `/admin/catalogos`
- `/admin/catalogos/nuevo`
- `/admin/catalogos/:id`
- `/admin/solicitudes`
- `/admin/solicitudes/:id`
- `/admin/biblioteca`
- `/admin/biblioteca/nuevo`
- `/admin/biblioteca/:id`
- `/admin/biblioteca/importar`
- `/admin/usuarios`
- `/admin/historial`
- `/admin/configuracion`

No crear alias, rutas de conveniencia o navegación adicional sin issue.

## 7. Modelo de datos obligatorio

Todas las tablas incluyen `id`, timestamps, actor cuando aplique y políticas RLS explícitas.

### 7.1 Identidad y configuración

- `profiles`: usuario, nombre, rol, estado y último acceso.
- `site_settings`: contacto canónico, horario, redes, mapa y configuración pública aprobada.

### 7.2 Contenido y publicación

- `pages`: slug, esquema, draft, published, revisiones y actores.
- `page_versions`: snapshot inmutable, razón, autor y estado.
- `media_assets`: archivo, metadatos, alt, crédito, derechos, focal point y estado.
- `media_usages`: referencias de cada activo.
- `content_sources`: procedencia, clave fuente, validación, aprobador y fecha.

### 7.3 Colección y formas

- `portfolio_items`: pieza, taxonomía, región, montaje, historia, medios, visibilidad y orden.
- `forms`: SKU, especie, pose, orientación, medidas tipadas, disponibilidad, precio y medios.
- `taxonomies`: nombres comunes, científicos, sinónimos, regiones y categorías.

### 7.4 Solicitudes

- `quote_requests`: folio, tipo, referencia, datos de contacto, mensaje, consentimiento, origen y estado.
- `quote_attachments`: archivo privado, MIME, tamaño, checksum y análisis.
- `request_events`: cambios de estado, notas internas y actor.

### 7.5 Biblioteca privada

- `books`: título, subtítulo, autores, ISBN, LC, editorial, año, idioma, formato, categoría, ubicación, descripción, notas y fuente.
- `book_authors`: autores normalizados y relación.
- `book_categories`: categorías administrables controladas.
- `library_import_batches`: archivo, checksum, mapeo, simulación, resultado, actor y rollback.
- `library_import_rows`: fila, acción propuesta, errores y referencia resultante.

ISBN normalizado y LC se indexan. La detección de duplicados compara ISBN, LC y título+autor normalizados antes de guardar.

### 7.6 Catálogos PDF

- `catalog_templates`: plantilla aprobada, versión, configuración cerrada y estado.
- `catalog_jobs`: selección, filtros, estado, error seguro, duración y actor.
- `catalog_documents`: versión inmutable, vigencia, checksum, archivo, plantilla y estado.
- `catalog_items`: snapshot del producto incluido, orden y visibilidad de precio.

Un PDF publicado nunca se sobreescribe. Una nueva generación crea una versión nueva.

### 7.7 Auditoría

- `audit_events`: actor, acción, entidad, before/after sanitizado, ambiente, release e instante.

No guardar contraseñas, tokens, secretos, archivos completos ni PII innecesaria en auditoría.

## 8. Contratos de página

Los contratos exactos de réplica R-001 a R-018 mandan. El contenido se valida con Zod por slug; no existen bloques arbitrarios.

- Inicio: cinco mensajes heredados, prueba institucional, tres puertas y cierre.
- Estudio: historia, misión, visión, valores, taller, equipo y reconocimientos.
- Taxidermia: servicios, proceso, requisitos, tiempos y FAQ.
- Formas: introducción, portada y catálogo desde `forms`.
- Colección: introducción, portada y piezas desde `portfolio_items`.
- Catálogos: introducción y documentos publicados desde `catalog_documents`.
- Contacto: un registro canónico leído por página, header y footer.
- Legales: documento versionado con fecha de vigencia.

Claims, equipo, alianzas, precios y dirección no se publican hasta resolver ROC-40.

## 9. Editor administrativo “2x3”

### Elegir

Inicio muestra siete tareas: `Cambiar fotografías`, `Editar página`, `Colección`, `Formas`, `Catálogos`, `Solicitudes` y `Biblioteca`. `Usuarios` y `Configuración` viven en menú Owner.

### Cambiar

- La primera vista muestra miniaturas y nombres humanos.
- El administrador no ve JSON, Markdown, tablas, buckets, IDs o código.
- `Cambiar fotografías` abre sólo slot, archivo, recorte, focal, alt, preview y publicación.
- `Editar textos y datos` muestra campos controlados y ayuda concreta.
- No hay color, tipografía, layout, drag-and-drop libre o instalación de módulos.

### Revisar

Barra fija: `Salir`, estado de guardado, `Vista previa` y `Publicar cambios`.

La confirmación describe texto modificado, fotografías reemplazadas, registros afectados y visibilidad. Guardar nunca publica.

## 10. Imágenes y documentos

- Imágenes públicas: JPEG, PNG o WebP; máximo 12 MB; MIME real validado.
- PDFs: MIME, firma, tamaño, checksum y nombre sanitizado.
- Adjuntos de solicitudes y biblioteca son privados con URL firmada de corta duración.
- Reemplazar conserva versiones y referencias anteriores.
- Eliminar significa archivar; la purga física requiere retención vencida y proceso Owner.
- Alt es obligatorio antes de publicar; crédito y permiso se registran.
- Ninguna imagen stock, remota o generada se añade automáticamente.
- Preview, progreso, cancelar, reintentar y errores humanos son obligatorios.

## 11. Publicación y concurrencia

- Autoguardado tras 800 ms.
- Estados literales: `Sin cambios`, `Guardando…`, `Guardado a HH:mm`, `No se pudo guardar · Reintentar`.
- Cada mutation lleva revisión; conflicto devuelve 409.
- Preview usa snapshot privado y temporal.
- Publicación crea versión, cambia referencias y registra auditoría en una transacción.
- Un fallo conserva producción anterior completa.
- Restaurar crea una revisión nueva; nunca borra historial.
- Dos administradores no se sobrescriben silenciosamente.

## 12. Biblioteca e importación Excel

- Búsqueda acento-insensible por título, autor, ISBN, LC, categoría y ubicación.
- Alta manual en una pantalla con validación progresiva.
- El Excel de Descargas sólo sirve como ensayo.
- El Excel original de Drive es la fuente de migración final.
- Importar siempre sigue: subir → elegir hoja → mapear → validar → simular → revisar → confirmar.
- La simulación separa nuevos, actualizados, omitidos, duplicados y errores.
- Ninguna fila se modifica antes de confirmar.
- Cada lote genera reporte descargable y puede revertirse sin afectar cambios posteriores ajenos.
- Se respalda el archivo fuente y se registra checksum.

## 13. Generador de catálogos PDF

- El administrador elige plantilla aprobada, productos/piezas, orden, precios visibles y vigencia.
- Preview HTML/PDF antes de generar versión final.
- El PDF incluye fuentes incrustadas, texto seleccionable, enlaces, fecha, versión y contacto canónico.
- Los datos son snapshot: una modificación posterior no altera un PDF ya publicado.
- Generación idempotente por hash de entrada.
- Fallo muestra razón comprensible y permite reintentar sin duplicar.
- El documento final se almacena, versiona, publica, despublica y restaura.
- El servicio mide duración, memoria y tamaño antes de decidir Render.

## 14. Solicitudes y operación comercial

- El formulario guarda antes de notificar.
- Genera folio no predecible y confirmación.
- Rate limit, honeypot y protección adicional basada en evidencia.
- Archivos privados; validación de MIME/tamaño y retención definida.
- Admin puede buscar, filtrar, asignar estado, añadir nota y exportar sólo campos aprobados.
- Fallar email o WhatsApp no pierde la solicitud.
- Analytics y URLs nunca reciben PII.

## 15. Confiabilidad, seguridad y rendimiento

- Ambientes local, preview/staging y producción aislados.
- Secretos sólo en gestor de ambiente.
- Preview bloqueado a indexación y a destinatarios reales.
- Headers, CSP, cookies seguras, CSRF cuando aplique y dependencias auditadas.
- Backups automáticos y restauración ensayada antes de lanzamiento.
- Logs correlacionados por release y ambiente.
- Alertas con umbral, responsable y runbook.
- Objetivos públicos: LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms en p75 objetivo.
- Presupuesto de JS, imágenes y fuentes definido en CI.
- Disponibilidad y errores monitoreados durante 72 horas posteriores al lanzamiento.

## 16. Gates de lanzamiento

| Gate | Evidencia obligatoria |
|---|---|
| Producto | alcance, exclusiones y claims aprobados |
| Réplica | R-001 a R-018 PASS con capturas comparables |
| Contenido | textos, contacto, legales, derechos y fotografías aprobados |
| Admin | piloto ≥90% sin asistencia; fotografía <3 min; invitación <60 s |
| Datos | migraciones reproducibles, RLS negativo y seed idempotente |
| Biblioteca | alta, búsqueda, simulación, importación y rollback probados |
| PDF | preview, generación, checksum, versión, publicación y rollback probados |
| Solicitudes | persistencia, folio, antiabuso, privacidad y fallo de notificación |
| Seguridad | MFA, secretos, permisos, adjuntos, headers y dependencias |
| Calidad | lint, tipos, unitarias, integración, E2E y build verdes |
| Accesibilidad | teclado, foco, lector, contraste, zoom y reduced motion |
| Rendimiento | presupuestos y Web Vitals sin bloqueo |
| Operación | backups, restore, alertas, runbooks y propietarios |
| Entrega | Vercel production, dominio, smoke test y monitoreo 72 h |

No existe lanzamiento parcial silencioso. Un gate rojo bloquea producción; un gate amarillo requiere aceptación explícita de Dirección documentada en Linear.

## 17. Definition of Done del servicio

Una persona no técnica puede, sin ayuda:

1. entrar;
2. cambiar y publicar una fotografía;
3. editar y restaurar una página;
4. publicar una pieza y una forma;
5. revisar una solicitud;
6. buscar y agregar un libro;
7. simular una importación;
8. generar y publicar un catálogo PDF;
9. invitar a otro administrador si es Owner;
10. encontrar ayuda y recuperarse de un error.

Además:

- cero acceso cotidiano a Lovable/GitHub/Vercel/Supabase;
- cero borradores o archivos privados expuestos;
- cero datos críticos sin backup probado;
- cero claims no validados;
- cero controles simulados;
- cero merge sin CI, Greptile, preview y aprobación humana.
