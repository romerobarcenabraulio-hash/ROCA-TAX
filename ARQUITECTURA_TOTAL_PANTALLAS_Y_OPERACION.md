# ROCA TAX — Arquitectura total de pantallas, diseño y operación

> **Documento de referencia.** La fuente vigente de alcance y decisiones es `ROCA_TAX_MASTER_PLAN_0_100.md`.

## Plan de acción en 15 líneas

Definiremos una sola identidad visual basada en minimalismo, misterio y autoridad tranquila.<br>
La portada pública presentará el oficio y llevará a cotizar sin exigir una cuenta.<br>
La historia, misión y valores vivirán dentro de una narrativa breve llamada El Estudio.<br>
Taxidermia por encargo tendrá servicios, proceso, preguntas y una cotización guiada.<br>
Formas de poliuretano tendrá catálogo técnico, medidas, especie, pose, precio y disponibilidad.<br>
La Colección mostrará animales y trabajos terminados sin confundir portafolio con tienda.<br>
La biblioteca será privada y sólo visible para usuarios autorizados del panel administrativo.<br>
El Excel actual se importará con vista previa, detección de duplicados y reporte de errores.<br>
El administrador podrá agregar libros, productos, piezas, fotografías y descripciones sin tocar código.<br>
Toda edición seguirá el flujo Editar, Guardar borrador, Vista previa y Publicar cambios.<br>
El generador de PDF construirá catálogos desde datos vigentes y conservará cada versión.<br>
Vercel alojará la aplicación y sus previews, mientras Supabase manejará acceso, datos y archivos.<br>
Render sólo se añadirá si OCR o PDFs pesados necesitan un proceso continuo en segundo plano.<br>
GitHub será la fuente de verdad; el flujo de Lovable se validará antes de producción y Greptile revisará los pull requests.<br>
La construcción comenzará después de elegir una dirección visual y aprobar las pantallas críticas.

## 1. Posicionamiento y tono

### Idea central

ROCA TAX no debe decir “somos los mejores” de forma estridente. Debe demostrar autoridad mediante evidencia, silencio visual, precisión y oficio.

### Frases de marca candidatas

- **El oficio antes que el discurso.**
- **No buscamos parecer excepcionales. Trabajamos hasta serlo.**
- **Desde 1946, la naturaleza conserva su presencia.**
- **México nos enseñó el oficio. Cada pieza demuestra el resultado.**
- **La experiencia se menciona poco. Se reconoce en los detalles.**

### Personalidad

- 45% maestría y autoridad.
- 25% misterio y colección privada.
- 20% precisión técnica.
- 10% modestia: dejar que el trabajo pruebe la afirmación.

### Lo que no debe comunicar

- Ostentación vacía.
- Safari temático o estética de cabaña.
- Museo antiguo saturado de ornamentos.
- Página genérica de “lujo” con dorado, negro y tarjetas repetidas.
- Tecnología visible que haga pensar que la página fue generada automáticamente.

## 2. Sistema visual recomendado

### Dirección: monolito editorial

- Base carbón profundo y hueso natural, con olivo mineral usado sólo para estados y acciones.
- Superficies planas; sin degradados, vidrio, sombras blandas o bordes decorativos.
- Fotografías auténticas con fondo controlado, encuadre consistente y pies de foto discretos.
- Retícula de 12 columnas en escritorio y una sola columna clara en móvil.
- Espacio generoso entre bloques, pero contenido compacto dentro de cada tarea.
- Movimiento sólo cuando confirma navegación, guardado, generación o publicación.

### Tipografía

- Display: serif de alto contraste, elegante pero legible; candidata `Cormorant Garamond` o una licencia equivalente más exclusiva.
- Interfaz y texto: `Manrope`, `Inter` o `Suisse` si se adquiere licencia.
- Máximo dos familias; cursivas sólo para citas o nombres científicos.
- La administración usa principalmente sans serif para reducir errores.

### Regla de confianza

La web pública puede ser enigmática; el panel administrativo jamás. En administración todo debe ser literal, visible y predecible.

## 3. Mapa completo de la experiencia pública

### P-01 — Inicio

**Objetivo:** entender en cinco segundos qué hace ROCA TAX y comenzar una cotización.

Contenido:

- Cabecera con logotipo, navegación y `Cotizar proyecto`.
- Hero estático con una fotografía real, una frase y una sola acción.
- Evidencia: desde 1946, taller de 1,400 m², San Luis Potosí.
- Tres puertas: Taxidermia, Formas de poliuretano y Colección.
- Selección curada de tres trabajos.
- Extracto de proceso.
- Cierre con cotización y contacto.

Crítica: no mostrar carrusel, quince tarjetas ni todos los servicios arriba del pliegue.

### P-02 — El Estudio

Integra las pantallas “obvias” sin convertirlas en texto corporativo vacío:

- Quiénes somos.
- Historia y legado.
- Misión.
- Visión.
- Valores.
- Taller e infraestructura.
- Maestros artesanos.
- Reconocimientos.

**Misión propuesta:** preservar la presencia de cada ejemplar mediante rigor anatómico, oficio artesanal y respeto por su historia.

**Visión propuesta:** elevar la taxidermia hecha en México hasta convertirla en referencia internacional de precisión, permanencia y oficio.

**Valores:** respeto por el ejemplar, precisión anatómica, responsabilidad, oficio generacional, innovación útil y discreción.

### P-03 — Taxidermia por encargo

- Qué hacemos.
- Tipos de montaje y restauración.
- Proceso paso a paso.
- Requisitos y documentación.
- Tiempos estimados expresados como rangos, no promesas absolutas.
- Preguntas frecuentes.
- CTA `Solicitar valoración`.

### P-04 — Servicio individual

- Nombre del servicio.
- Fotografía principal.
- Qué incluye y qué no.
- Proceso.
- Materiales/técnica.
- Ejemplos relacionados.
- Formulario de valoración contextual.

### P-05 — Formas de poliuretano

**Objetivo:** funcionar como catálogo técnico profesional, no como galería decorativa.

- Buscador por especie o código.
- Filtros: especie, tipo de montaje, pose, talla, orientación y disponibilidad.
- Ficha visible: fotografía, SKU, especie, pose, medidas, compatibilidad, precio, existencias y entrega.
- CTA principal `Solicitar esta forma` o `Agregar a cotización`.
- Descarga del catálogo PDF vigente.

### P-06 — Ficha de forma

- Galería técnica.
- Nombre y SKU.
- Medidas en convención explícita.
- Variantes y orientación.
- Compatibilidad o recomendaciones de uso.
- Precio y disponibilidad.
- Productos relacionados.
- Solicitud de cotización con producto preseleccionado.

### P-07 — Colección / catálogo muestra

- Trabajos de taxidermia, no inventario de venta.
- Filtros por continente, especie, montaje y década.
- Máximo 12 resultados por página con carga progresiva.
- Cada pieza tiene contexto, técnica, fecha y procedencia autorizada.

### P-08 — Ficha de pieza

- Fotografía de gran formato.
- Nombre común y científico.
- Región.
- Tipo de montaje.
- Historia o nota del taller.
- Galería de detalles.
- CTA discreto `Consultar un proyecto similar`.

### P-09 — Catálogos y documentos

- Catálogo de formas de poliuretano.
- Catálogo de piezas disponibles, si aplica.
- Lista de precios sólo cuando comercialmente corresponda.
- Fecha y número de versión visibles.
- `Ver en línea` y `Descargar PDF`.

### P-10 — Cotización guiada

Un paso por pantalla:

1. ¿Qué necesitas?
2. Especie o producto.
3. Fotografías/documentos.
4. Datos de contacto.
5. Revisión.
6. Confirmación con folio.

Nunca pedir datos que no serán usados. WhatsApp puede recibir un resumen, pero la solicitud también debe guardarse en el sistema.

### P-11 — Contacto

- Dirección, mapa y horario.
- Teléfono, WhatsApp y correo.
- Consultas generales.
- Bolsa de trabajo como flujo separado.

### P-12 — Legales y estados

- Privacidad.
- Términos.
- Cookies, si se usan tecnologías que lo requieran.
- Página 404.
- Error de envío.
- Confirmación de cotización.
- Estado sin resultados.

## 4. Mapa completo del panel administrativo

### A-01 — Acceso

- Correo y contraseña o enlace seguro.
- MFA para propietario y administradores.
- Recuperación de acceso.
- Sin registro público.

### A-02 — Inicio administrativo

Seis botones grandes y nada más arriba del pliegue:

1. `Editar página`
2. `Editar catálogo`
3. `Formas de poliuretano`
4. `Crear PDF`
5. `Biblioteca privada`
6. `Ver cotizaciones`

Abajo: cambios sin publicar, última publicación y alertas que requieren acción.

### A-03 — Editar página

Lista visual de páginas públicas con miniatura y estado:

- Publicada.
- Borrador.
- Cambios pendientes.
- Requiere revisión.

Botón por fila: `Editar`.

### A-04 — Editor de página

- Formularios por secciones seguras; nunca edición libre de layout.
- Título, texto breve, fotografía, acción y orden limitado.
- Límites de caracteres visibles.
- Recorte de fotografía asistido.
- Barra fija inferior:
  - `Salir sin guardar`
  - `Guardar borrador`
  - `Vista previa`
  - `Publicar cambios`

Evitar el botón ambiguo `Aceptar`. La acción debe decir qué ocurrirá.

### A-05 — Confirmar publicación

Resumen humano:

> Publicarás 3 cambios en Inicio: fotografía principal, frase y teléfono. La versión actual quedará disponible para restaurar.

Botones:

- `Volver a revisar`
- `Publicar ahora`

### A-06 — Versiones

- Fecha, usuario y descripción automática.
- Comparación antes/después.
- `Restaurar esta versión` con confirmación.
- Ningún borrado físico desde la interfaz normal.

### A-07 — Catálogo de taxidermia

- Buscar piezas.
- Estado: borrador, público, oculto.
- `Agregar pieza`.
- `Editar`.
- `Duplicar`.
- `Ocultar del sitio`.
- La eliminación definitiva sólo para propietario y desde archivo.

### A-08 — Formas de poliuretano

- Inventario tabular simple.
- Fotografía, SKU, especie, pose, medidas, precio, existencias y estado.
- Acciones masivas limitadas a precio, disponibilidad y publicación.
- Historial de precio y stock.

### A-09 — Editor de producto

Pasos:

1. Identificación.
2. Fotografías.
3. Medidas y variantes.
4. Precio e inventario.
5. Vista previa.
6. Publicación.

### A-10 — Generador de PDF

Pantalla inicial con tres opciones:

- `Catálogo de formas`
- `Catálogo de piezas`
- `Lista de precios`

Flujo:

1. Elegir tipo.
2. Seleccionar productos o colección guardada.
3. Elegir idioma y mostrar/ocultar precios.
4. Elegir portada aprobada.
5. Previsualizar páginas.
6. `Generar nueva versión`.
7. `Descargar PDF` o `Publicar en el sitio`.

Nunca editar texto directamente dentro del PDF; se corrige el dato fuente y se vuelve a generar.

### A-11 — Historial de catálogos

- Nombre.
- Tipo.
- Versión.
- Fecha.
- Usuario.
- Estado público/privado.
- Descargar, publicar, retirar o restaurar.

### A-12 — Biblioteca privada

- Buscador dominante.
- Filtros: autor, categoría, idioma, año, ubicación y estado.
- Vista de lista por defecto; portadas opcionales.
- `Agregar libro`.
- `Importar Excel`.
- `Exportar respaldo`.
- La colección nunca aparece en el sitio público salvo decisión explícita futura.

### A-13 — Agregar libro

Campos requeridos inicialmente:

- Título.
- Autor.
- Idioma.
- Categoría.
- Ubicación física.

Campos opcionales:

- ISBN.
- Editorial.
- Año.
- Edición.
- Descripción ES/EN.
- Portada.
- Palabras clave.
- Notas privadas.
- Estado de conservación.

Antes de guardar, buscar coincidencias por título, autor e ISBN.

### A-14 — Importar Excel

1. Subir `.xlsx` o `.csv`.
2. Mostrar las columnas detectadas.
3. Proponer correspondencias.
4. Marcar errores y duplicados.
5. Permitir `Importar nuevos`, `Actualizar existentes` o `Revisar uno por uno`.
6. Mostrar resumen final y archivo de errores descargable.

El Excel inspeccionado contiene 804 registros y las columnas: fila original, título, autor, descripción ES, descripción EN y estatus. Tiene dos registros sin título/autor y 51 grupos potencialmente duplicados; la primera importación debe ser supervisada.

### A-15 — Cotizaciones

- Nuevas.
- En revisión.
- Respondidas.
- Cerradas.
- Datos, archivos, producto/servicio y enlace directo a WhatsApp.
- Notas internas separadas del mensaje al cliente.

### A-16 — Usuarios y permisos

Roles:

- Propietario.
- Administrador.
- Editor.
- Biblioteca.

La pantalla explica cada permiso con lenguaje cotidiano y muestra exactamente qué podrá hacer la persona.

### A-17 — Configuración

- Datos de contacto.
- Redes.
- Horarios.
- Idiomas.
- Plantillas PDF.
- Integraciones.
- Registro de actividad.

## 5. Reglas de simplicidad administrativa

- Una acción principal por pantalla.
- Botones con verbo + objeto: `Publicar cambios`, no `Aceptar`.
- Deshacer siempre visible después de una publicación.
- Autosave con texto `Guardado hace 8 segundos`.
- Confirmaciones sólo para acciones de impacto, no para cada campo.
- Resumen del impacto antes de publicar.
- Vistas previas de escritorio y móvil.
- Campos avanzados ocultos bajo `Más opciones`.
- Ayuda contextual de una frase; sin manuales largos dentro del flujo.
- La interfaz recuerda el último paso y permite continuar.
- Errores indican qué corregir y llevan al campo exacto.
- No usar conceptos como slug, JSON, bucket, deploy o rollback en la UI.

## 6. Datos y seguridad

### Tablas principales

- `profiles`, `roles`, `profile_roles`
- `pages`, `page_sections`, `content_versions`, `publish_events`
- `species`, `portfolio_items`, `portfolio_media`
- `products`, `product_variants`, `inventory_events`, `price_versions`
- `quotes`, `quote_items`, `quote_attachments`, `quote_notes`
- `books`, `authors`, `book_authors`, `categories`, `book_categories`
- `library_imports`, `library_import_rows`, `library_locations`
- `catalogs`, `catalog_items`, `catalog_versions`, `pdf_jobs`
- `media_assets`, `audit_events`

### Separación obligatoria

- Contenido público: lectura anónima sólo cuando `published = true`.
- Biblioteca: acceso autenticado según rol.
- Archivos privados: URLs firmadas con vencimiento.
- Excel original e importaciones: bucket privado.
- PDFs publicados: copia pública versionada; fuente privada.

## 7. Infraestructura

### Recomendación inicial

- **Vercel:** frontend, previews por pull request, dominio y despliegue principal.
- **Supabase:** Postgres, Auth, Storage y políticas RLS.
- **GitHub:** código y protección de `main`.
- **Linear:** roadmap e issues.
- **Greptile:** revisión automática de pull requests.
- **Lovable:** acelerador visual; su flujo de rama se valida con un spike y nunca edita producción sin PR/revisión.

### Cuándo agregar Render

Sólo cuando las pruebas demuestren que OCR, importaciones muy grandes o generación de catálogos pesados superan el modelo de funciones. Render ofrece workers para procesamiento de archivos y reportes prolongados; añadirlo antes aumentaría complejidad operativa sin beneficio probado.

### Decisión de despliegue

Usar Vercel + Supabase para el servicio operativo. El PDF se genera como trabajo asíncrono y se almacena; si las mediciones reales exceden los límites de Vercel, mover únicamente el worker a Render sin migrar toda la aplicación.

## 8. Crítica de riesgos antes de construir

1. “Editar la página” es demasiado amplio; se restringe a contenido y orden controlado.
2. Publicar con un botón `Aceptar` genera errores; debe decir `Publicar cambios` y resumir impacto.
3. Biblioteca, catálogo y piezas disponibles no son la misma cosa y no compartirán permisos ni navegación.
4. El Excel actual es una capa editorial, no todavía un catálogo bibliográfico completo.
5. Vender formas requiere medidas, SKU, precio, stock y entrega; fotografías solas no bastan.
6. Un PDF manual se desactualiza; el PDF debe generarse desde la misma base que alimenta la web.
7. Lovable no debe editar producción directamente ni definir seguridad o datos sin revisión.
8. Decir “somos los mejores” debilita la marca si no se acompaña de evidencia verificable.
9. El misterio puede volverse falta de información; las páginas comerciales deben seguir siendo explícitas.
10. El minimalismo puede perjudicar usabilidad si oculta navegación o acciones; simplicidad no es invisibilidad.

## 9. Fuentes verificadas

- Página antigua de contacto de ROCA TAX: https://pruebasomosorigen.com/roca-taxidermia/contacto/
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Database: https://supabase.com/docs/guides/database/overview
- Render Background Workers: https://render.com/docs/background-workers
- Vercel Functions timeout: https://vercel.com/docs/errors/function_invocation_timeout

## 10. Puerta de construcción

Antes del código se aprueban: dirección visual, mapa público, seis botones del panel, flujo de publicación, importación de Excel y generación PDF. Después se construye un primer recorrido vertical completo: Inicio público → Cotización → Panel → Editar Inicio → Vista previa → Publicar → Restaurar.
