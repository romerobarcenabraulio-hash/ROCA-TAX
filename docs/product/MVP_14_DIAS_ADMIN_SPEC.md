# ROCA TAX — Especificación determinista del MVP de 14 días

**Objetivo de entrega:** 3 de agosto de 2026.  
**Producto independiente:** ROCA TAX.  
**Referencia operativa:** disciplina ALQUIMIA, no su código ni backlog.  
**Ambigüedad permitida en implementación:** ninguna decisión visual, de datos o permisos queda a criterio de Lovable.
**Contrato público obligatorio:** `docs/product/CONTRATO_REPLICA_HTML_1_A_1.md`.

## 1. Resultado del día 14

Una aplicación web publicada en preview final donde:

1. el público navega sin cuenta;
2. Owner/Admin inicia sesión por invitación;
3. entra a un inicio con seis tareas;
4. elige una página y una sección;
5. cambia texto o sube/reemplaza una imagen;
6. guarda borrador automáticamente;
7. previsualiza desktop/móvil y claro/oscuro;
8. publica con un resumen de cambios;
9. puede restaurar la versión anterior;
10. administra colección, formas y solicitudes básicas sin tocar código.

## 2. Corte de alcance obligatorio

### Dentro del MVP

- réplica pública verificable del HTML según R-001 a R-018, con rutas reales y sin heredar defectos;
- autenticación por invitación;
- roles `owner` y `admin`;
- panel y ayuda contextual;
- editor controlado de siete páginas públicas;
- todas las imágenes editables desde admin;
- borrador, preview, publicación y una restauración;
- colección y formas con alta/edición/despublicación;
- contacto/valoración con folio;
- descarga de un PDF previamente cargado;
- temas claro/oscuro;
- responsive, accesibilidad crítica, CI y preview.

### Fuera del MVP de 14 días

- editor libre de layout;
- cuentas para clientes;
- checkout/pagos/inventario transaccional;
- generador PDF maquetado desde cero;
- importación final del Excel de Drive;
- préstamo/código de barras de biblioteca;
- flujo editorial de múltiples aprobadores;
- publicación programada;
- OCR, IA, búsqueda semántica o Render workers;
- bilingüe completo si no hay copy inglés aprobado el día 3.

Estas funciones permanecen planeadas, pero no pueden retrasar el editor y sitio básico.

## 3. Stack congelado

- React + TypeScript + Vite, compatible con Lovable.
- Supabase Auth, Postgres y Storage.
- React Router para rutas reales.
- TanStack Query para estado servidor.
- React Hook Form + Zod para formularios y contratos.
- Tailwind con tokens CSS; componentes accesibles existentes del proyecto.
- Vercel para previews y producción.
- Vitest + Testing Library; Playwright cuando el repo lo permita.

No agregar CMS externo, Clerk, Cloudinary, Shopify, WordPress, Render, Redux o librería de page builder durante el MVP.

## 4. Roles congelados

| Capacidad | owner | admin |
|---|:---:|:---:|
| Ver panel | Sí | Sí |
| Editar/publicar páginas | Sí | Sí |
| Colección y formas | Sí | Sí |
| Ver cotizaciones | Sí | Sí |
| Restaurar versión | Sí | Sí |
| Invitar/desactivar usuarios | Sí | No |
| Cambiar roles | Sí | No |
| Ver auditoría | Sí | Sí |

No existe registro público. El último `owner` no puede desactivarse.

## 5. Rutas exactas

### Públicas

- `/` Inicio
- `/estudio` El Estudio
- `/taxidermia` Servicios
- `/formas` Catálogo de formas
- `/formas/:slug` Ficha de forma
- `/coleccion` Colección
- `/coleccion/:slug` Ficha de pieza
- `/catalogos` Descargas vigentes
- `/valoracion` Solicitud
- `/contacto` Contacto
- `/privacidad` Privacidad
- `*` 404

### Administración

- `/admin/login`
- `/admin`
- `/admin/paginas`
- `/admin/paginas/:slug`
- `/admin/coleccion`
- `/admin/coleccion/nueva`
- `/admin/coleccion/:id`
- `/admin/formas`
- `/admin/formas/nueva`
- `/admin/formas/:id`
- `/admin/cotizaciones`
- `/admin/usuarios`
- `/admin/historial`

## 6. Modelo de datos mínimo

### `profiles`

`id uuid PK/FK auth.users`, `full_name text`, `role enum(owner,admin)`, `status enum(invited,active,suspended)`, `created_at`, `updated_at`.

### `pages`

`id uuid`, `slug unique`, `name`, `draft_content jsonb`, `published_content jsonb`, `draft_revision int`, `published_revision int`, `updated_by`, `updated_at`, `published_by`, `published_at`.

El JSON cumple un esquema Zod por `slug`. No se aceptan bloques arbitrarios.

### `page_versions`

`id`, `page_id`, `revision`, `content jsonb`, `created_by`, `created_at`, `reason`, `is_published`.

### `media_assets`

`id`, `storage_path`, `public_url`, `filename`, `mime_type`, `bytes`, `width`, `height`, `alt_text`, `credit`, `focal_x 0..1`, `focal_y 0..1`, `uploaded_by`, `created_at`, `deleted_at`.

### `portfolio_items`

`id`, `slug unique`, `status draft|published|archived`, `common_name`, `scientific_name`, `region`, `mount_type`, `year`, `story`, `cover_media_id`, `gallery_media_ids uuid[]`, `sort_order`, timestamps/actors.

### `forms`

`id`, `slug unique`, `sku unique`, `status draft|published|archived`, `common_name`, `scientific_name`, `pose`, `orientation`, `measurements jsonb`, `availability in_stock|made_to_order|consult`, `price_mxn nullable`, `show_price boolean`, `cover_media_id`, `gallery_media_ids`, `description`, timestamps/actors.

### `quote_requests`

`id`, `folio unique`, `type`, `reference_id nullable`, `name`, `phone`, `email nullable`, `message`, `consent_at`, `status new|reviewing|waiting|closed`, `created_at`.

### `catalog_documents`

`id`, `title`, `version`, `valid_from`, `file_path`, `status draft|published|archived`, timestamps/actors.

### `audit_events`

`id`, `actor_id`, `action`, `entity_type`, `entity_id`, `before jsonb`, `after jsonb`, `created_at`.

## 7. Esquemas exactos de página

### Inicio

- `hero.eyebrow` 0–40 caracteres
- `hero.title` 10–90
- `hero.body` 20–220
- `hero.image_id` obligatorio para publicar
- `hero.cta_label` fijo: `Solicitar valoración`
- `proof[]` exactamente 3: dato, etiqueta y fuente interna
- `doors[]` exactamente 3 y fijas: Taxidermia, Formas, Colección
- `featured_portfolio_ids[]` máximo 3
- `closing.title`, `closing.body`

### El Estudio

- `intro`, `history`, `mission`, `vision`
- `values[]` entre 3 y 6
- `workshop.image_ids[]` entre 1 y 6
- `team[]` nombre, función, bio breve, image_id opcional
- `recognitions[]` título, año, entidad, image_id opcional

### Taxidermia

- intro
- `services[]` nombre, resumen, qué incluye, qué no incluye, image_id
- `process[]` entre 3 y 7 pasos
- requirements, timing_note, FAQ máximo 10

### Formas, Colección, Catálogos

Su contenido principal viene de sus tablas. La página sólo edita introducción, imagen de portada y nota comercial.

### Contacto

- dirección, mapa_url, teléfono, WhatsApp, correo, horario
- un único registro compartido; header/footer leen el mismo contenido

## 8. Editor administrativo “2x3”

### Paso 1 — Elegir

Inicio presenta seis botones: `Editar página`, `Colección`, `Formas`, `Catálogo PDF`, `Cotizaciones`, `Usuarios`.

### Paso 2 — Cambiar

Lista de secciones con nombre humano y miniatura. Al abrir una sección aparecen únicamente sus campos. Nada de JSON, Markdown, colores, grid o nombres técnicos.

### Paso 3 — Revisar y publicar

Barra fija:

- `Salir`
- estado de autoguardado
- `Vista previa`
- `Publicar cambios`

Publicar muestra: campos modificados, imágenes reemplazadas y fecha/autor. Botones `Seguir editando` y `Publicar ahora`.

## 9. Contrato de imágenes

- Todas las imágenes públicas provienen de `media_assets`; ninguna URL queda hardcodeada.
- Formatos: JPEG, PNG, WebP; máximo 12 MB.
- Rechazar SVG, GIF animado, PDF y archivos cuyo MIME real no coincida.
- Mostrar progreso, cancelar, reintentar y error humano.
- Al subir: generar preview local, pedir recorte según slot y punto focal.
- Antes de guardar: comprimir/limitar a 2400 px de lado mayor; conservar calidad visual.
- Alt obligatorio antes de publicar; crédito opcional; nombre de archivo no sirve como alt.
- Reemplazar no borra el activo anterior ni rompe versiones previas.
- Si una imagen se usa en más de un lugar, mostrar referencias antes de archivar.
- Hero 16:9 desktop y 4:5 móvil mediante un mismo activo + puntos focales; tarjeta 4:5; galería 3:2 o original controlado.

## 10. Autoguardado, preview y publicación

- Debounce de autoguardado: 800 ms después del último cambio.
- Estados exactos: `Sin cambios`, `Guardando…`, `Guardado a HH:mm`, `No se pudo guardar · Reintentar`.
- Cada mutation incluye `draft_revision`; conflicto devuelve 409 y no sobrescribe.
- Preview lee snapshot de borrador por token temporal, nunca datos mezclados.
- Publicación usa transacción: crear versión + copiar draft a published + audit.
- Si falla, no cambia `published_content`.
- Restaurar crea nueva revisión y requiere confirmación; no borra historial.

## 11. Estados obligatorios por pantalla

`loading`, `empty`, `success`, `recoverable_error`, `blocking_error`, `offline`, `session_expired`, `forbidden` y `not_found` cuando corresponda.

No usar sólo toast para errores que requieren acción. El foco se mueve al primer error o resumen.

## 12. Diseño congelado para el MVP

- Público: Archivo claro/Nocturno, sistema editorial, fotografía dominante y máximo una CTA principal.
- Admin: claro por defecto; sans serif; fondo liso; botones literales.
- Grid público 12 columnas desktop; admin contenido máximo 1200 px.
- Radios 0/4/8 px; no pills salvo estados/filtros.
- Sin gradients, glassmorphism, sombras suaves decorativas, carruseles automáticos, parallax o iconos emoji.
- Animaciones 150–250 ms y `prefers-reduced-motion`.
- Target mínimo 44×44; foco de 2 px visible; contraste AA.

## 13. Calendario de 14 días

| Día | Resultado irreversible esperado |
|---:|---|
| 1 | decisiones comerciales mínimas, contrato y wireframes críticos cerrados |
| 2 | Lovable/GitHub/Supabase/Vercel conectados; CI base verde |
| 3 | Auth, profiles y RLS probados |
| 4 | Shell admin y rutas |
| 5 | Pages + editor de campos |
| 6 | Upload/recorte/alt y medios |
| 7 | Autoguardado, conflicto y sesión |
| 8 | Preview, publish, versions y restore |
| 9 | Render público Inicio/Estudio/Taxidermia/Contacto |
| 10 | Colección admin+público |
| 11 | Formas admin+público y PDF subido |
| 12 | Valoración, privacidad, anti-spam y folio |
| 13 | QA mobile/desktop/temas/teclado + piloto admin |
| 14 | correcciones bloqueantes, release candidate y runbook |

Gate de contenido: imágenes y textos finales deben cargarse a más tardar el día 11. Sin ellos se entrega plataforma funcional en preview, no se declara sitio público final.

Gate de réplica: no existe release candidate hasta contabilizar 5 mensajes hero, 3 logotipos, 4 reconocimientos, 37 animales y 6 productos heredados, y documentar cada diferencia intencional. La mención “52 especies” no se publica mientras falten 15 registros validados.

## 14. Criterio de aceptación del MVP

Una persona que nunca usó el sistema completa sin ayuda: login, Inicio, cambiar título, subir foto, recortar, escribir alt, previsualizar móvil, publicar, comprobar la web y restaurar. Tiempo máximo: cinco minutos; cero datos perdidos; cero acceso a Lovable/GitHub/Supabase.
