# ROCA TAX — Paquete de ejecución para Lovable

## Regla de consumo

Ejecutar un prompt por vez. No encadenar. Después de cada prompt: revisar diff, correr checks, abrir PR y resolver bloqueos. No gastar otro prompt para corregir algo que una edición determinista local resuelve.

Este paquete está subordinado a `docs/execution/LOVABLE_CREDIT_GOVERNOR.md`. Cada prompt es una unidad cerrada: un issue, una conducta, una rama y un PR. Lovable no elige el prompt siguiente.

## Contexto fijo para todos los prompts

```text
Lee AGENTS.md, docs/product/PRODUCTION_RELEASE_SPEC.md,
docs/execution/LOVABLE_CREDIT_GOVERNOR.md y
docs/product/CONTRATO_REPLICA_HTML_1_A_1.md completos.
ROCA TAX es independiente de ALQUIMIA; reutiliza disciplina, no código.
No inventes campos, rutas, imágenes, copy, componentes, dependencias o tablas.
No modifiques fuera de los archivos indicados por este prompt.
No cambies el sistema visual ni el esquema salvo instrucción explícita.
Todas las imágenes las sube un administrador; no agregues stock ni URLs externas.
Antes de editar reporta HEAD y rama. Si estás en main, detente sin modificar.
Si falta una precondición o necesitas decidir algo no escrito, detente.
No excedas 400 líneas netas; si se exceden, propone división sin modificar.
Entrega exactamente el formato de salida del Gobernador.
```

## P00 — Spike de repositorio, sin UI

```text
PROMPT_ID: P00
ISSUE: ROC-6
OBJETIVO: confirmar que Lovable y GitHub respetan PR/CI sin tocar producción.
ALCANCE: README, una ruta /health-ui que muestre sólo “ROCA TAX UI OK” usando
estilos base, y un test mínimo. No crear base de datos, auth ni diseño final.
ARCHIVOS PERMITIDOS: README.md, src/routes/health-ui.*, test de esa ruta.
ACEPTACIÓN: cambio aislado en rama; build, lint y test verdes; PR visible;
main no cambia. Si Lovable sólo sincroniza default branch, detente y repórtalo.
```

## P01 — Fundación y tokens

```text
PROMPT_ID: P01
ISSUE: ROC-42
OBJETIVO: configurar React+TS+Vite, router, query, forms, Zod, Supabase client,
tests y consumir exactamente los tokens claro/oscuro aprobados en ROC-5.
RUTAS: sólo shells vacíos de rutas públicas/admin especificadas.
ARCHIVOS PERMITIDOS: package.json, lockfile, configs raíz, src/app/**,
src/lib/**, src/styles/**, src/routes/** y tests de fundación.
NO HACER: componentes comerciales, datos mock persistentes, imágenes o DB.
ESTADOS: route loading, 404 y error boundary.
ACEPTACIÓN: lint/types/tests/build verdes; theme sin flash; navegación funciona.
```

## P01A — Inventario de réplica, sin rediseño

```text
PROMPT_ID: P01A
ISSUE: ROC-39
OBJETIVO: crear contratos tipados de contenido para R-001 a R-018 y una
fixture de migración trazable del HTML; todavía no diseñar pantallas finales.
FUENTE ÚNICA: docs/product/CONTRATO_REPLICA_HTML_1_A_1.md.
CONTEOS: 5 mensajes hero, 3 logotipos, 4 reconocimientos, 37 animales
(América 12, África 16, Europa 6, Asia 3) y 6 productos pendientes de validar.
NO HACER: inventar los 15 animales faltantes, cambiar copy, usar URLs externas,
añadir stock, marcar productos disponibles o implementar carrito.
ARCHIVOS PERMITIDOS: src/domain/content/**, supabase/seed/** y tests de conteo.
ACEPTACIÓN: cada registro tiene source=legacy_html, estado de validación y un
ID R-xxx; tests de conteo pasan; cualquier discrepancia detiene el prompt.
```

## P02 — Acceso por invitación

```text
PROMPT_ID: P02
ISSUE: ROC-10
OBJETIVO: login por invitación, sesión, recuperación, MFA y guards.
DATOS: consumir profiles y capacidades ya contratados; no decidir políticas.
PANTALLAS: /admin/login y forbidden/session_expired.
ARCHIVOS PERMITIDOS: src/features/auth/**, src/routes/admin/auth/**,
función server-side de invitación y tests exclusivos de auth.
NO HACER: registro público, social login, organizaciones o roles adicionales.
PRUEBAS: invitado, sesión, recuperación, MFA, suspendido y expiración.
ACEPTACIÓN: service_role nunca llega al cliente; mensajes no enumeran cuentas.
```

## P02A — Roles y RLS

```text
PROMPT_ID: P02A
ISSUE: ROC-9
OBJETIVO: profiles, owner/admin, capacidades y RLS reales.
ARCHIVOS PERMITIDOS: supabase/migrations/**, src/domain/auth/** y pruebas RLS.
NO HACER: UI nueva, roles adicionales, permisos personalizados o SQL destructivo.
PRUEBAS: anónimo, admin, owner, suspendido, último owner y acceso cruzado.
ACEPTACIÓN: todas las tablas privadas niegan por defecto; pruebas negativas pasan.
```

## P03 — Shell administrativo

```text
PROMPT_ID: P03
ISSUE: ROC-11
OBJETIVO: /admin con siete tareas exactas y navegación administrativa.
COMPONENTES: header, nav, task button, status badge, empty/error/loading.
ARCHIVOS PERMITIDOS: src/features/admin-shell/**, src/routes/admin/index.* y tests.
COPY: usar literalmente etiquetas de la spec.
NO HACER: gráficas, KPIs ficticios, command palette, widgets o accesos extra.
ACEPTACIÓN: teclado completo; targets 44px; móvil; cada rol ve lo permitido.
```

## P04 — Pages y editor controlado

```text
PROMPT_ID: P04
ISSUE: ROC-12
OBJETIVO: pages/page_versions, esquemas Zod por slug y A-03/A-04.
FLUJO: elegir página→sección→campos; barra Salir/estado/Preview/Publicar.
ARCHIVOS PERMITIDOS: src/features/page-editor/**, src/domain/pages/**,
supabase/migrations de pages/page_versions y sus tests.
NO HACER: editor WYSIWYG libre, Markdown, JSON, drag-drop layout, color/font.
ESTADOS: loading, empty, validation, save_error, conflict, session_expired.
ACEPTACIÓN: borrador sobrevive reload; producción no cambia; límites exactos.
```

Los prompts complementarios P03A y P04A y la secuencia operativa están en
`docs/execution/LOVABLE_RUNBOOK_EJECUTA.md`. No ejecutar P04A antes de P04/P05.

## P05 — Imágenes administrables

```text
PROMPT_ID: P05
ISSUE: ROC-13
OBJETIVO: media_assets y selector/uploader dentro del editor.
REGLAS: JPEG/PNG/WebP ≤12MB; validar MIME; preview; progreso; cancelar;
reintentar; recorte por slot; focal point; alt obligatorio; crédito opcional;
lado mayor 2400px; no eliminar activos usados/versionados.
ARCHIVOS PERMITIDOS: src/features/media/**, src/domain/media/**,
supabase/migrations de medios/storage y sus tests.
NO HACER: imágenes stock, URLs remotas, SVG, edición gráfica o librería externa.
ACEPTACIÓN: reemplazo conserva versiones; error no pierde formulario.
```

## P06 — Autoguardado y conflictos

```text
PROMPT_ID: P06
ISSUE: ROC-15
OBJETIVO: implementar autoguardado, recuperación de sesión y concurrencia.
AUTOGUARDADO: debounce 800ms y estados literales.
CONFLICTO: draft_revision/409; jamás last-write-wins silencioso.
ARCHIVOS PERMITIDOS: src/features/page-editor/save/**, hooks de sesión y tests.
PRUEBAS: fallo de red, dos editores, recarga y sesión expirada.
```

## P06A — Preview exacto

```text
PROMPT_ID: P06A
ISSUE: ROC-16
OBJETIVO: snapshot privado único en desktop/móvil y claro/oscuro.
ARCHIVOS PERMITIDOS: src/features/preview/**, ruta privada de preview y tests.
NO HACER: duplicar renderer público, leer published mezclado o indexar preview.
ACEPTACIÓN: mismos datos/medios del snapshot; links críticos y faltantes visibles.
```

## P06B — Publicación atómica

```text
PROMPT_ID: P06B
ISSUE: ROC-17
OBJETIVO: diff humano, confirmación, transacción y auditoría.
ARCHIVOS PERMITIDOS: src/features/publishing/**, función server-side,
migración aditiva estrictamente necesaria y tests.
NO HACER: publicar automáticamente, escribir parcialmente o borrar versión.
PRUEBAS: fallo transaccional, permiso, doble submit y referencia de medios.
ACEPTACIÓN: cualquier fallo conserva producción anterior completa.
```

## P06C — Versiones y restauración

```text
PROMPT_ID: P06C
ISSUE: ROC-20
OBJETIVO: historial inmutable, despublicación, papelera y restauración.
ARCHIVOS PERMITIDOS: src/features/versions/**, funciones de versión y tests.
NO HACER: delete físico, mutar snapshot, eliminar referencia sin explicación.
ACEPTACIÓN: restaurar crea versión nueva y rollback E2E pasa.
```

## P07 — Sitio público base

```text
PROMPT_ID: P07
ISSUE: ROC-35
OBJETIVO: renderizar published_content en /, /estudio, /taxidermia,
/catalogos, /contacto y legales.
RÉPLICA: implementar R-001 a R-008, R-011, R-015 a R-018 sin cambiar copy,
orden narrativo o identidad salvo transformación expresamente documentada.
DISEÑO: seguir tokens; una CTA; URLs reales; shared contact settings.
IMÁGENES: sólo media_assets; estado elegante cuando contenido no está publicado.
ARCHIVOS PERMITIDOS: src/features/public-site/**, rutas públicas y tests.
NO HACER: carrusel, stock, métricas inventadas, animación decorativa o lorem.
ACEPTACIÓN: matriz de réplica PASS/FAIL; responsive, temas, metadata, canonical,
teclado y no draft leakage.
```

## P08 — Colección

```text
PROMPT_ID: P08
ISSUE: ROC-23
OBJETIVO: CRUD admin y vistas públicas para portfolio_items.
RÉPLICA: implementar R-009 y R-010; conservar 37 animales con trazabilidad.
ADMIN: lista, buscar, nuevo, editar, preview, publicar/despublicar.
PÚBLICO: filtros en URL, detalle, empty/no-results y retorno de contexto.
ARCHIVOS PERMITIDOS: src/features/collection/**, dominio/migración de portfolio
y tests.
NO HACER: inventar 15 especies, venta, comparación o favoritos.
ACEPTACIÓN: permisos/RLS; slugs; búsqueda acento-insensible; ambos temas.
```

## P08A — Formas

```text
PROMPT_ID: P08A
ISSUE: ROC-25
OBJETIVO: CRUD admin y catálogo público para forms.
RÉPLICA: implementar R-013 y R-014; migrar 6 productos como pending_validation.
ARCHIVOS PERMITIDOS: src/features/forms/**, dominio/migración de forms y tests.
NO HACER: carrito, checkout, stock transaccional o disponibilidad inventada.
ACEPTACIÓN: SKU único, medidas tipadas, filtros URL, RLS y precio desde DB.
```

## P09 — Servicios, valoración y solicitudes

```text
PROMPT_ID: P09
ISSUE: ROC-22
OBJETIVO: /taxidermia, /valoracion, persistencia, folio y seguimiento admin.
FORMULARIO: tipo, referencia, nombre, teléfono, email opcional, mensaje,
consentimiento y adjuntos privados; guardar antes de notificar.
ARCHIVOS PERMITIDOS: src/features/services/**, src/features/requests/**,
dominio/migraciones de requests, función server-side y tests.
NO HACER: enviar PII a analytics/URL, depender de WhatsApp para persistir.
ACEPTACIÓN: rate limit, honeypot, RLS, fallo de notificación y folio probados.
```

## P09A — Biblioteca privada

```text
PROMPT_ID: P09A
ISSUE: ROC-27
OBJETIVO: búsqueda, alta, edición, archivo e historial de libros.
DATOS: exactamente sección 7.5 de PRODUCTION_RELEASE_SPEC.md.
ARCHIVOS PERMITIDOS: src/features/library/**, src/domain/library/**,
migraciones aditivas de biblioteca y tests.
NO HACER: OCR, IA, préstamos, códigos de barras o campos inventados.
ACEPTACIÓN: búsqueda acento-insensible; duplicados ISBN/LC/título+autor;
RLS owner/admin; alta manual completa sin Excel.
```

## P09B — Importación Excel

```text
PROMPT_ID: P09B
ISSUE: ROC-28
OBJETIVO: subir→hoja→mapear→validar→simular→confirmar→reporte→rollback.
ARCHIVOS PERMITIDOS: src/features/library-import/**, funciones de importación,
tablas de lotes/filas y tests.
NO HACER: importar sin simulación, sobrescribir silenciosamente, usar el Excel
de Descargas como producción o hacer enriquecimiento web.
ACEPTACIÓN: nuevos/actualizados/omitidos/duplicados/errores separados; checksum,
backup, idempotencia y rollback por lote probados.
```

## P09C — Generador de catálogos PDF

```text
PROMPT_ID: P09C
ISSUE: ROC-33
OBJETIVO: seleccionar datos, previsualizar, generar, versionar y publicar PDF.
DATOS: exactamente secciones 7.6 y 13 de PRODUCTION_RELEASE_SPEC.md.
ARCHIVOS PERMITIDOS: src/features/catalogs/**, src/domain/catalogs/**,
función/worker PDF, migraciones aditivas de catálogo y tests.
NO HACER: editor libre tipo Acrobat, sobreescribir PDF publicado, Render sin
medición, plantilla inventada o precios fuera de DB.
ACEPTACIÓN: snapshot, hash idempotente, texto seleccionable, fuentes, links,
checksum, fallo/reintento, versión, vigencia, publish/unpublish y rollback.
```

## P10 — Auditoría, backups y observabilidad

```text
PROMPT_ID: P10
ISSUE: ROC-18
OBJETIVO: auditoría segura, errores correlacionados y superficies de recovery.
ARCHIVOS PERMITIDOS: src/features/audit/**, src/lib/observability/**,
migraciones aditivas de audit y tests; runbooks documentales del issue.
NO HACER: registrar secretos/PII/archivos, configurar producción sin permiso.
ACEPTACIÓN: eventos críticos, alertas, backup programado y restore ensayado con
evidencia; runbooks de cuenta comprometida y publicación incorrecta.
```

## P11 — Hardening y candidato de producción

```text
PROMPT_ID: P11
ISSUE: ROC-30
OBJETIVO: cerrar únicamente defectos contra la especificación de lanzamiento.
VERIFICAR: lint, types, tests, build; 320/375/768/1024/1440; teclado; focus;
contraste; reduced-motion; clear/dark; errores; permisos; draft leakage;
Web Vitals; robots preview; secretos y logs.
ARCHIVOS PERMITIDOS: sólo archivos nombrados por defectos reproducibles.
NO HACER: features, refactors, dependencias, rediseños o excepciones silenciosas.
ENTREGA: matriz PASS/FAIL con evidencia; todo FAIL crea issue, no se oculta.
```

## Regla de ahorro de créditos

- Un prompt no pide “mejorar”, “hacer elegante” o “completar lo faltante”.
- Si Lovable pregunta, responder citando sección/tabla; no improvisar.
- Si genera más de un módulo no pedido, revertir ese módulo.
- No pedir rondas visuales hasta aprobar tokens y wireframe.
- No usar Lovable para copy, datos, migraciones destructivas o debugging ciego.
- Una corrección de 1–5 líneas se hace localmente y pasa PR; no consume prompt.
- Un segundo fallo del mismo prompt detiene Lovable y devuelve el problema a Codex.
- P09A, P09B y P09C son obligatorios para lanzamiento; ya no son trabajo posterior.
