# ROCA TAX — Auditoría de exigencia frontend y omisiones

**Tipo de revisión:** arquitectura de experiencia + inspección de código del HTML heredado.  
**Límite de evidencia:** no es una auditoría visual completa; Chrome no pudo inicializarse en esta sesión. Los hallazgos visuales deberán confirmarse con capturas cuando el navegador esté disponible.  
**Relación:** anexo obligatorio de `ROCA_TAX_MASTER_PLAN_0_100.md`.

## Veredicto

El plan maestro ya cubría la estructura central, pero todavía faltaba definir el comportamiento fino que distingue un producto serio de una maqueta: concurrencia editorial, estados degradados, gobernanza de contenido, búsqueda real, legalidad de fauna, resiliencia de formularios, accesibilidad operativa, SEO técnico, observabilidad y administración del ciclo de vida completo. Estos puntos se incorporan al backlog; no deben convertirse todos en componentes independientes.

## Evidencia directa del HTML heredado

- navegación por `href="#"` y JavaScript, sin URLs compartibles, historial, canonical ni rutas reales;
- carrusel automático sin controles ni consideración de movimiento reducido;
- menú sin versión móvil funcional visible en el código;
- formulario sin `name`, ayuda, consentimiento, adjuntos, estado de envío ni manejador de submit;
- filtros dependen del objeto global `event` y no exponen estado accesible;
- tarjetas generadas con `innerHTML` y datos incrustados;
- imágenes externas y rutas locales `/mnt`, sin pipeline de medios ni dimensiones reservadas;
- alt genérico basado sólo en el nombre del animal;
- no hay skip link, foco administrado, `aria-live`, error summary o navegación semántica comprobable;
- no hay metadatos sociales, canonical, sitemap, datos estructurados o política de indexación;
- no hay persistencia, backend, autenticación, permisos, auditoría, telemetría o recuperación;
- “52 especies” no coincide con los 37 registros existentes;
- catálogo comercial mezcla taxidermia, objetos y formas sin modelo consistente;
- datos de contacto y copyright están incrustados y pueden quedar obsoletos.

## Hallazgos P0 — Bloquean Fase 1 o lanzamiento

### P0-01 — Conflictos de edición

Dos administradores pueden abrir el mismo borrador. Falta definir bloqueo optimista por versión, aviso “Braulio publicó una versión más reciente”, comparación y resolución sin sobrescribir silenciosamente.

### P0-02 — Pérdida de datos y conectividad

Autoguardar no basta. Deben existir cola local temporal, indicador `Guardando/Guardado/Error`, reintento idempotente, aviso antes de cerrar y recuperación tras sesión expirada.

### P0-03 — Publicación atómica

Página, medios y referencias deben publicarse como una sola operación. Si falla una parte, producción conserva íntegra la versión anterior.

### P0-04 — Ciclo de aprobación

Separar `Editar`, `Solicitar revisión` y `Publicar`. Un Editor no debe convertirse accidentalmente en Publisher. Debe poder agregarse comentario de revisión y devolver cambios.

### P0-05 — Seguridad de archivos

Validar extensión real/MIME, tamaño, dimensiones, malware, metadatos EXIF y permisos. Archivos privados usan acceso firmado; biblioteca y cotizaciones nunca comparten bucket público.

### P0-06 — Documentos y legalidad de fauna

El flujo de valoración debe permitir clasificar permisos/documentación sin exhibirlos públicamente. Definir especies restringidas, revisión manual, conservación, acceso y eliminación de documentos legales.

### P0-07 — Privacidad del formulario

Consentimiento explícito, finalidad, retención, destinatarios y eliminación. Adjuntos no se envían directamente por WhatsApp ni quedan en URLs públicas.

### P0-08 — Anti-spam y abuso

Honeypot, rate limit, detección de automatización, límites por IP/sesión y cuarentena de archivos, manteniendo una alternativa accesible.

### P0-09 — Autorización completa

Permisos en RLS/API para lectura, creación, edición, publicación, exportación y descarga. Ocultar un botón no es seguridad.

### P0-10 — Recuperación operativa

Backups automáticos, restore probado, exportación de datos, runbook, estado del sistema y responsable. La copia sin prueba de restauración no cuenta.

### P0-11 — Entornos y contenido

Preview no puede leer/escribir producción por accidente. Datos y buckets separados o políticas inequívocas. Ninguna prueba manda emails/WhatsApps reales.

### P0-12 — Propiedad de cuentas

GitHub, Lovable, Vercel, Supabase, dominio y correos deben pertenecer al negocio, con al menos dos administradores y recuperación documentada.

## Hallazgos P1 — Calidad necesaria para una experiencia superior

### P1-01 — Arquitectura de URLs

Rutas legibles y permanentes, slugs controlados, redirects 301, breadcrumbs, back/forward reales, deep links de filtros y manejo de contenido retirado.

### P1-02 — Búsqueda tolerante

Normalización de acentos y variantes: `búfalo/bufalo`, nombres comunes/científicos, sinónimos, errores tipográficos, SKU, autor e ISBN. Mostrar por qué un resultado coincide.

### P1-03 — Estado de filtros

Filtros en URL, cantidad de resultados, chips removibles, `Limpiar filtros`, orden estable y retorno a la posición previa al abrir/cerrar una ficha.

### P1-04 — Semántica comercial

Diferenciar `En existencia`, `Bajo pedido`, `Consultar`, `Descontinuada` y `No visible`. Definir moneda, impuestos, envío, tiempo estimado, vigencia y si precio es público.

### P1-05 — Convención de medidas

Diagrama real, unidad explícita, decimales, tolerancia, orientación izquierda/derecha y conversión opcional cm/pulgadas. Nunca una cadena libre ambigua.

### P1-06 — Imágenes responsivas

`srcset`, tamaños reservados, formatos modernos, placeholder discreto, punto focal por breakpoint, zoom accesible, descarga protegida cuando aplique y respaldo si falla CDN.

### P1-07 — Formularios robustos

`autocomplete`, `inputmode`, ejemplos, validación progresiva, error summary, foco al error, progreso de subida, cancelar/reintentar adjunto y confirmación persistente con folio.

### P1-08 — Accesibilidad estructural

Landmarks, jerarquía H1–H3, skip link, foco visible, orden lógico, targets ≥44 px, contraste en ambos temas, contenido al 200–400% zoom y navegación sin ratón.

### P1-09 — Cambios de estado accesibles

Filtros, guardado, generación de PDF, uploads y publicación comunican resultados con texto y regiones vivas; no dependen sólo de color o toast que desaparece.

### P1-10 — Tema claro/oscuro sin flash

Preferencia del sistema en primera visita, elección persistida, script temprano para evitar destello, color-scheme, imágenes/logos correctos y componentes de terceros cubiertos.

### P1-11 — Responsive completo

Pruebas a 320, 375, 768, 1024, 1280, 1440 y 1920 px; paisaje móvil, tablet, zoom y teclado virtual. Tablas cambian a vistas comprensibles, no a scroll horizontal infinito.

### P1-12 — Navegación y foco

Menú móvil con focus trap, Escape, retorno del foco y bloqueo de scroll. Modales, sheets y confirmaciones siguen la misma regla.

### P1-13 — Estados completos

Cada consulta/mutación define: inicial, cargando, vacío, éxito, error recuperable, error bloqueante, sin permiso, offline, sesión expirada y dato parcialmente disponible.

### P1-14 — Notificaciones útiles

Toast sólo para confirmación menor. Errores que requieren acción permanecen inline. Operaciones largas viven en un centro de actividad con progreso e historial.

### P1-15 — Papelera y restauración

Elementos retirados pasan a papelera con impacto explicado, periodo de retención y restauración. `Despublicar` y `Eliminar` nunca son sinónimos.

### P1-16 — Gobernanza de contenido

Propietario, fecha de revisión, caducidad comercial, estado, idioma y dependencias por contenido. Alertas para precios, PDFs, teléfonos o políticas vencidas.

### P1-17 — Contenido compartido

Teléfono, dirección, horario, redes y avisos viven en configuración única. Evitar copias divergentes en header, footer, contacto y PDF.

### P1-18 — Internacionalización real

No concatenar traducciones. Campos ES/EN con estado por idioma, fallback explícito, slugs, metadatos, moneda, unidades y PDFs por idioma.

### P1-19 — SEO y descubrimiento

Title/description únicos, canonical, robots por ambiente, sitemap, Open Graph, Twitter cards, BreadcrumbList, LocalBusiness y Product sólo con datos verdaderos.

### P1-20 — Rendimiento presupuestado

Presupuesto por ruta para JS, imágenes y fuentes; lazy-load bajo pliegue, prioridad sólo al hero, subset de fuentes, caché e invalidación tras publicación.

### P1-21 — Analítica con propósito

Eventos versionados: ver servicio, buscar forma, aplicar filtro, iniciar valoración, subir documento, enviar, descargar catálogo. No capturar datos sensibles en URLs o analytics.

### P1-22 — Observabilidad frontend

Errores JS, Web Vitals, fallos de red, correlación con solicitud/publicación, release y ambiente. Alertas con umbral; no un dashboard sin responsable.

### P1-23 — Compatibilidad

Matriz vigente para Safari/iOS, Chrome/Android y navegadores desktop principales. Probar formatos, uploads, PDF, fecha/hora y sticky/fixed UI.

### P1-24 — PDFs profesionales

Fuentes incrustadas, tablas sin cortes, imágenes suficientes, bookmarks, enlaces, texto seleccionable, metadatos, paginación, portada/contraportada, impresión y accesibilidad básica.

### P1-25 — Biblioteca como sistema físico

Definir si sólo cataloga o también controla ubicación, préstamo y devolución. Considerar código de barras/QR, estante, ejemplares múltiples, condición, préstamo, exportación y registro de movimientos.

## Hallazgos P2 — Diferenciadores posteriores

- colecciones editoriales temporales y piezas destacadas programables;
- publicación programada y despublicación automática;
- comparación de dos formas/variantes;
- lista de solicitud persistente sin cuenta;
- compartir una selección por enlace con expiración;
- lectura de ISBN/código de barras desde móvil para biblioteca;
- importación de portadas y metadatos con revisión humana;
- plantillas PDF por audiencia, idioma y lista de precios;
- modo de exhibición para sala/taller;
- notificaciones de contenido vencido;
- historial visual de antes/después para restauraciones autorizadas;
- búsqueda unificada administrativa con comandos limitados;
- favoritos o recientes en admin, no un dashboard lleno de widgets;
- PWA sólo si las pruebas de uso justifican trabajo offline real.

## Reglas de frontend que deben convertirse en contrato

1. Ningún control visible sin estado hover, focus, active, disabled y loading.
2. Ningún formulario sin teclado, lector de pantalla, error summary y recuperación.
3. Ninguna lista sin carga, vacío, error, permisos y datos parciales.
4. Ningún modal sin foco inicial, Escape, retorno de foco y alternativa no modal cuando sea más clara.
5. Ningún dato comercial sin unidad, vigencia, moneda y fuente.
6. Ningún upload sin límites visibles, progreso, cancelación, validación y privacidad.
7. Ninguna publicación sin diff, versión, actor, timestamp y rollback.
8. Ninguna tabla crítica que dependa de scroll horizontal en móvil.
9. Ningún texto o imagen duplicado si puede ser una referencia compartida.
10. Ninguna métrica se recopila sin pregunta, responsable y política de retención.

## Nuevas decisiones que requiere Dirección

1. ¿El catálogo de formas muestra precios, impuestos y existencias?
2. ¿Las formas se venden, se cotizan o ambas según el producto?
3. ¿La biblioteca controla préstamos y ubicación física o sólo búsqueda?
4. ¿La web se lanza bilingüe desde el día uno?
5. ¿Qué documentos legales puede recibir el formulario y cuánto tiempo se conservan?
6. ¿Quién puede publicar: Owner, Admin o un rol Publisher separado?
7. ¿Se requiere doble aprobación para precios, PDFs o contenido sensible?
8. ¿Qué especies/contenidos necesitan revisión legal previa?
9. ¿Qué teléfono/correo reciben cada tipo de solicitud?
10. ¿Qué métrica define éxito comercial durante los primeros 90 días?

## Prioridad incorporada a ejecución

- P0 se convierte en issues o criterios de aceptación de Fase 1.
- P1 entra en epics de sistema visual, sitio público, catálogo y QA.
- P2 permanece en backlog, sin crear infraestructura anticipada.
- Ningún hallazgo justifica una pantalla adicional si puede resolverse con un estado, regla o componente existente.
