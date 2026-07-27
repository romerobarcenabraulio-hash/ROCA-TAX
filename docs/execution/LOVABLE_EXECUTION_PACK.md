# ROCA TAX — Paquete de ejecución para Lovable

## Regla de consumo

Ejecutar un prompt por vez. No encadenar. Después de cada prompt: revisar diff, correr checks, abrir PR y resolver bloqueos. No gastar otro prompt para corregir algo que una edición determinista local resuelve.

## Contexto fijo para todos los prompts

```text
Lee AGENTS.md, docs/product/MVP_14_DIAS_ADMIN_SPEC.md y
docs/product/CONTRATO_REPLICA_HTML_1_A_1.md completos.
ROCA TAX es independiente de ALQUIMIA; reutiliza disciplina, no código.
No inventes campos, rutas, imágenes, copy, componentes, dependencias o tablas.
No modifiques fuera de los archivos indicados por este prompt.
No cambies el sistema visual ni el esquema salvo instrucción explícita.
Todas las imágenes las sube un administrador; no agregues stock ni URLs externas.
Entrega: archivos tocados, pruebas ejecutadas, resultado y desviaciones.
```

## P00 — Spike de repositorio, sin UI

```text
OBJETIVO: confirmar que Lovable y GitHub respetan PR/CI sin tocar producción.
ALCANCE: README, una ruta /health-ui que muestre sólo “ROCA TAX UI OK” usando
estilos base, y un test mínimo. No crear base de datos, auth ni diseño final.
ACEPTACIÓN: cambio aislado en rama; build, lint y test verdes; PR visible;
main no cambia. Si Lovable sólo sincroniza default branch, detente y repórtalo.
```

## P01 — Fundación y tokens

```text
OBJETIVO: configurar React+TS+Vite, router, query, forms, Zod, Supabase client,
tests y tokens claro/oscuro definidos en la spec.
RUTAS: sólo shells vacíos de rutas públicas/admin especificadas.
NO HACER: componentes comerciales, datos mock persistentes, imágenes o DB.
ESTADOS: route loading, 404 y error boundary.
ACEPTACIÓN: lint/types/tests/build verdes; theme sin flash; navegación funciona.
```

## P01A — Inventario de réplica, sin rediseño

```text
OBJETIVO: crear contratos tipados de contenido para R-001 a R-018 y una
fixture de migración trazable del HTML; todavía no diseñar pantallas finales.
FUENTE ÚNICA: docs/product/CONTRATO_REPLICA_HTML_1_A_1.md.
CONTEOS: 5 mensajes hero, 3 logotipos, 4 reconocimientos, 37 animales
(América 12, África 16, Europa 6, Asia 3) y 6 productos pendientes de validar.
NO HACER: inventar los 15 animales faltantes, cambiar copy, usar URLs externas,
añadir stock, marcar productos disponibles o implementar carrito.
ACEPTACIÓN: cada registro tiene source=legacy_html, estado de validación y un
ID R-xxx; tests de conteo pasan; cualquier discrepancia detiene el prompt.
```

## P02 — Auth, profiles y RLS

```text
OBJETIVO: login por invitación, sesión, recuperación, owner/admin y guards.
DATOS: exactamente profiles y enums de la spec; migración aditiva con RLS.
PANTALLAS: /admin/login y forbidden/session_expired.
NO HACER: registro público, social login, organizaciones o roles adicionales.
PRUEBAS: anónimo, admin, owner, suspendido y último owner.
ACEPTACIÓN: ocultar botón no es seguridad; pruebas negativas RLS pasan.
```

## P03 — Shell administrativo

```text
OBJETIVO: /admin con seis tareas exactas y navegación administrativa.
COMPONENTES: header, nav, task button, status badge, empty/error/loading.
COPY: usar literalmente etiquetas de la spec.
NO HACER: gráficas, KPIs ficticios, command palette, widgets o accesos extra.
ACEPTACIÓN: teclado completo; targets 44px; móvil; cada rol ve lo permitido.
```

## P04 — Pages y editor controlado

```text
OBJETIVO: pages/page_versions, esquemas Zod por slug y A-03/A-04.
FLUJO: elegir página→sección→campos; barra Salir/estado/Preview/Publicar.
NO HACER: editor WYSIWYG libre, Markdown, JSON, drag-drop layout, color/font.
ESTADOS: loading, empty, validation, save_error, conflict, session_expired.
ACEPTACIÓN: borrador sobrevive reload; producción no cambia; límites exactos.
```

## P05 — Imágenes administrables

```text
OBJETIVO: media_assets y selector/uploader dentro del editor.
REGLAS: JPEG/PNG/WebP ≤12MB; validar MIME; preview; progreso; cancelar;
reintentar; recorte por slot; focal point; alt obligatorio; crédito opcional;
lado mayor 2400px; no eliminar activos usados/versionados.
NO HACER: imágenes stock, URLs remotas, SVG, edición gráfica o librería externa.
ACEPTACIÓN: reemplazo conserva versiones; error no pierde formulario.
```

## P06 — Autoguardado, preview, publish y restore

```text
OBJETIVO: implementar contrato exacto de sección 10.
AUTOGUARDADO: debounce 800ms y estados literales.
CONFLICTO: draft_revision/409; jamás last-write-wins silencioso.
PREVIEW: snapshot único privado; desktop/móvil/claro/oscuro.
PUBLICAR: transacción, diff humano, confirmación y audit.
RESTAURAR: nueva revisión, no borrar historial.
PRUEBAS: fallo de red, dos editores, sesión expirada y fallo transaccional.
```

## P07 — Sitio público base

```text
OBJETIVO: renderizar published_content en /, /estudio, /taxidermia,
/catalogos, /contacto y legales.
RÉPLICA: implementar R-001 a R-008, R-011, R-015 a R-018 sin cambiar copy,
orden narrativo o identidad salvo transformación expresamente documentada.
DISEÑO: seguir tokens; una CTA; URLs reales; shared contact settings.
IMÁGENES: sólo media_assets; estado elegante cuando contenido no está publicado.
NO HACER: carrusel, stock, métricas inventadas, animación decorativa o lorem.
ACEPTACIÓN: matriz de réplica PASS/FAIL; responsive, temas, metadata, canonical,
teclado y no draft leakage.
```

## P08 — Colección y formas

```text
OBJETIVO: CRUD admin y vistas públicas para portfolio_items y forms exactos.
RÉPLICA: implementar R-009, R-010, R-013 y R-014; conservar 37 animales y
6 productos heredados con trazabilidad y validación comercial.
ADMIN: lista, buscar, nuevo, editar, preview, publicar/despublicar.
PÚBLICO: filtros en URL, detalle, empty/no-results y retorno de contexto.
MEDIDAS: datos tipados; SKU único; disponibilidad enum; show_price respeta DB.
NO HACER: inventar 15 especies, carrito, checkout, stock transaccional,
comparación o favoritos.
ACEPTACIÓN: permisos/RLS; slugs; búsqueda acento-insensible; ambos temas.
```

## P09 — Valoración y PDF cargado

```text
OBJETIVO: formulario /valoracion, folio y catálogo PDF administrable.
FORMULARIO: tipo, referencia, nombre, teléfono, email opcional, mensaje,
consentimiento; anti-spam/rate limit; guardar antes de notificar.
PDF: upload, versión, vigencia, preview link y publicar/despublicar; no generar.
ACEPTACIÓN: fallar notificación no pierde solicitud; privacidad y RLS correctas.
```

## P10 — Hardening y cierre

```text
OBJETIVO: cerrar únicamente defectos contra la spec.
VERIFICAR: lint, types, tests, build; 320/375/768/1024/1440; teclado; focus;
contraste; reduced-motion; clear/dark; errores; permisos; draft leakage;
Web Vitals; robots preview; secretos y logs.
NO HACER: features, refactors, dependencias o rediseños.
ENTREGA: matriz PASS/FAIL con evidencia; todo FAIL crea issue, no se oculta.
```

## Regla de ahorro de créditos

- Un prompt no pide “mejorar”, “hacer elegante” o “completar lo faltante”.
- Si Lovable pregunta, responder citando sección/tabla; no improvisar.
- Si genera más de un módulo no pedido, revertir ese módulo.
- No pedir rondas visuales hasta aprobar tokens y wireframe.
- No usar Lovable para copy, datos, migraciones destructivas o debugging ciego.
- Una corrección de 1–5 líneas se hace localmente y pasa PR; no consume prompt.
