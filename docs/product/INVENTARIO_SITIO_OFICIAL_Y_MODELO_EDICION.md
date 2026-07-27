# ROCA TAX — Inventario del sitio oficial anterior y modelo de edición mínima

**Fuente principal:** `https://pruebasomosorigen.com/roca-taxidermia/`  
**Fecha de revisión:** 27 de julio de 2026  
**Estado:** contrato complementario de `CONTRATO_REPLICA_HTML_1_A_1.md`  
**Regla:** el HTML heredado es la línea base estructural; el sitio oficial anterior es una fuente suplementaria de contenido. Ninguna contradicción se resuelve inventando.

## 1. Decisión de producto

La aplicación se entrega con estructura, textos base y registros heredados precargados. El trabajo cotidiano del administrador debe reducirse, en la mayoría de los casos, a:

`Entrar → Cambiar foto → Ajustar recorte → Revisar → Publicar`

El modo inicial del editor es **Cambiar fotografías**. `Editar textos y datos` existe como acción secundaria y sólo muestra campos controlados. No existe edición de layout, color, tipografía, código, JSON o base de datos.

## 2. Jerarquía de fuentes

| Prioridad | Fuente | Uso | Publicación |
|---:|---|---|---|
| 1 | Decisión vigente de Dirección | Dato final y política comercial | Publicable |
| 2 | HTML heredado inspeccionado | Estructura, mensajes y registros base | Publicable después de validación |
| 3 | Sitio oficial anterior | Historia, servicios, equipo, taxonomías y claims | `pending_review` |
| 4 | Excel provisional | Pruebas de importación | Nunca producción |
| 5 | Excel original de Drive | Biblioteca definitiva posterior | Importación auditada |

Cada registro importado debe conservar `source_type`, `source_url`, `source_key`, `source_captured_at`, `validation_status`, `validated_by` y `validated_at`.

## 3. Inventario recuperable del sitio oficial

### 3.1 Inicio

- cinco ideas de hero y variantes desktop/móvil;
- maestros artesanos y tecnología;
- infraestructura de 1,400 m²;
- galería y frase de obra detenida en el tiempo;
- cuatro reconocimientos;
- legado en taxidermia;
- productos, galerías, redes y contacto del footer.

Tratamiento: conservar la narrativa, eliminar duplicados responsive del CMS y convertir cada imagen en slot administrable.

### 3.2 Historia y legado

Capítulos recuperables:

1. Don Mario Aguilar Reed y el taller inicial en Ciudad de México;
2. expansión del taller;
3. traslado a San Luis Potosí en 1986;
4. amistad entre las familias Aguilar y Romero;
5. nueva etapa después del fallecimiento de Don Mario;
6. experiencia de maestros artesanos;
7. posicionamiento internacional;
8. alianzas con The Wildlife Gallery y Garoz & Garoz.

Tratamiento: precargar los capítulos, corregir redacción sólo mediante revisión editorial y requerir una foto por capítulo antes de publicar.

### 3.3 Infraestructura y operación

Claims encontrados:

- taller de 1,400 m²;
- más de 76 años de trayectoria;
- colección de más de 1,200 moldes;
- más de 242 especies cubiertas;
- curtido de más de 1,300 animales anualmente;
- reducción de tiempos “hasta en 300%”;
- alianza exclusiva y referencia a patente;
- envíos a todo México por cuenta del cliente;
- entregas entre 4 y 10 meses;
- no se trabajan aves ni peces;
- experiencia en cuatro continentes.

Tratamiento: todos entran como `pending_review`. La cifra de reducción del 300% queda prohibida hasta corregirla y documentar el cálculo.

### 3.4 Equipo

Áreas recuperables:

- curtido;
- formas y escultura;
- taxidermistas y montadores;
- retoque y paisajismo;
- gerencia y administración.

Cada persona requiere: nombre, cargo público, área, orden, fotografía, estado `active|former|hidden`, consentimiento de publicación y fecha de última confirmación. Un nombre histórico no se muestra como empleado actual sin validación.

### 3.5 Servicios

- creación y restauración de trofeos;
- adornos derivados de actividad cinegética;
- naturalización;
- taxidermia con moldes de poliuretano;
- taxidermia tradicional;
- cabezas, cráneos, frontales, cuernos, colmillos, patas y tapetes;
- mantenimiento y restauración;
- salones de trofeos y paisajismo;
- atención de especialista.

Cada servicio usa: título, resumen, incluye, no incluye, requisitos, tiempo orientativo, imagen, orden, estado y CTA de valoración.

### 3.6 Salones de trofeos

Se recupera como servicio y colección curatorial independiente. Los nombres de archivo como `140A1280` o `IMG_5977` nunca funcionan como título público. Cada proyecto requiere título humano, cliente visible sólo con autorización, ubicación opcional, descripción, portada y galería.

### 3.7 Tienda, productos y galería

Taxonomías recuperables:

- Trofeos montados;
- Cráneos y cuernos;
- Pieles y tapetes;
- Decoración;
- América;
- Europa;
- África;
- Asia y Exóticos.

El sitio anterior contiene más productos que el HTML y varios duplicados por especie. Se importan como registros candidatos, no como catálogo vigente. Nombre, categoría, precio, disponibilidad, derechos de imagen, legalidad y duplicados se validan antes de publicación.

### 3.8 Contacto

Datos encontrados:

- correo de proyectos y bolsa de trabajo;
- teléfono/WhatsApp;
- horario;
- redes sociales;
- dirección por Periférico norte km 32.9;
- dirección alternativa `SLP 32, Sauzalito, 78414`.

Debe existir un solo registro vigente de contacto. La discrepancia de dirección bloquea publicación del mapa.

## 4. Contradicciones que requieren decisión

| ID | Contradicción | Riesgo | Regla |
|---|---|---|---|
| V-01 | 37 registros HTML vs claim 52 vs 210/242 especies | Credibilidad y catálogo | Separar “exhibidas”, “preservadas” y “cubiertas por moldes” |
| V-02 | 217 vs más de 1,200 moldes | Claim comercial | Contar inventario vigente y definir qué es un molde |
| V-03 | 68 vs más de 76 años; “desde 1946” | Historia | Confirmar fecha de fundación y calcular años dinámicamente |
| V-04 | 3 vs 4 continentes | Credibilidad | Definir métrica y evidencia |
| V-05 | dos direcciones | Contacto perdido | Dirección canónica, mapa y referencia de acceso |
| V-06 | reducción de 300% | Claim matemáticamente inválido | Sustituir por tiempo antes/después verificable |
| V-07 | “más grande de México/Latinoamérica” | Publicidad comparativa | Fuente, alcance, fecha de revisión y aprobador |
| V-08 | alianza exclusiva/patente | Riesgo legal | Evidencia contractual y vigencia |
| V-09 | equipo de 2022 | Privacidad y exactitud | Confirmar empleo, cargo y consentimiento |
| V-10 | precios y stock antiguos | Riesgo comercial | Todo entra oculto y pendiente de validación |

## 5. Editor de fotografías: experiencia obligatoria

### Pantalla 1 — Elegir lugar

Mostrar miniaturas de la web agrupadas por página, no nombres técnicos. Cada tarjeta indica:

- fotografía actual;
- nombre humano: `Portada de Inicio`, `Historia — Inicios`, `Servicio — Curtido`;
- proporción recomendada;
- estado `Lista`, `Falta foto` o `Cambio pendiente`.

### Pantalla 2 — Reemplazar

Una zona grande con `Elegir fotografía`. Después de seleccionar:

1. validar archivo;
2. mostrar recorte recomendado;
3. permitir mover el punto focal;
4. precargar alt desde el contexto y pedir confirmación;
5. mostrar cómo se verá en móvil y escritorio;
6. guardar borrador automáticamente.

No mostrar biblioteca, buckets, rutas, IDs ni metadatos avanzados salvo que el usuario abra `Más opciones`.

### Pantalla 3 — Publicar

Resumen literal:

> Cambiarás 1 fotografía en Inicio. La fotografía anterior quedará disponible para restaurar.

Acciones: `Volver`, `Publicar fotografía`. Después: confirmación, enlace `Ver en la página` y `Deshacer`.

## 6. Slots de imagen cerrados

| Página/módulo | Slots mínimos |
|---|---|
| Inicio | logotipo, 5 hero, equipo, infraestructura, 4 reconocimientos, legado, 3 destacados |
| Estudio | portada, fundador, 6 capítulos de historia, galería de taller, retratos de equipo |
| Taxidermia | portada, una por servicio, proceso, 4 pruebas operativas |
| Colección | portada por pieza y galería por pieza |
| Formas | portada por forma, galería y diagrama de medidas |
| Salones | portada del servicio, portada y galería por proyecto |
| Catálogos | portada/miniatura del documento |
| Contacto | portada opcional; mapa no es una fotografía |

Cada slot define proporción, resolución mínima, recorte, focal point, alt, crédito, permiso, estado requerido y fallback. El administrador no crea nuevos tipos de slot.

## 7. Usuarios administrativos sin complejidad

No se crean “usernames” manuales. El correo es la identidad de acceso de Supabase Auth y `full_name` es el nombre visible.

Flujo Owner:

1. `Invitar persona`;
2. escribir nombre y correo;
3. elegir `Administrador` u `Owner`;
4. leer una frase con el alcance;
5. `Enviar invitación`.

El invitado abre un enlace, establece contraseña y MFA cuando corresponda. Estados visibles: `Invitación enviada`, `Activo`, `Suspendido`, `Vencida`. Acciones: reenviar, copiar enlace seguro cuando esté permitido, suspender y reactivar. El último Owner no puede suspenderse ni degradarse.

Para el MVP sólo existen `owner` y `admin`. Roles Editor, Comercial, Biblioteca y Viewer quedan fuera hasta que una necesidad real los justifique.

## 8. Integración de base de datos fácil y reproducible

- Supabase es la única base de datos del MVP.
- Migraciones SQL viven en Git y son aditivas.
- Un seed idempotente carga textos, slots y registros heredados.
- El seed nunca publica automáticamente datos `pending_review`.
- Imágenes no viajan en el seed: se crean slots vacíos y el administrador las sube.
- Ningún administrador abre Supabase para operar contenido.
- Staging y producción usan proyectos, buckets y policies separados.
- Cada tabla tiene RLS y pruebas negativas para anónimo, admin y owner.
- Las invitaciones se generan del lado servidor; nunca se expone `service_role`.
- El alta inicial de Owner usa un procedimiento documentado de una sola vez.
- Existe exportación, backup y prueba de restauración antes de producción.

## 9. Blindajes contra deuda y gasto innecesario

- Lovable no extrae contenido ni decide qué conservar; recibe manifests ya cerrados.
- No se pide a Lovable “completar”, “mejorar” o “hacer más elegante”.
- Un prompt toca un módulo y una conducta observable.
- Los datos fuente se cargan una vez; público, admin y PDF consumen el mismo modelo.
- No se duplica contenido para tema claro/oscuro o desktop/móvil.
- Texto avanzado queda detrás de acción secundaria para evitar cambios accidentales.
- Toda afirmación comercial tiene estado, fuente, aprobador y fecha de revisión.
- Todo registro antiguo entra oculto hasta validar.
- Ningún control visible puede ser simulado.

## 10. Límite de evidencia

La inspección estructural y de contenido se realizó sobre páginas públicas indexadas. La captura directa del flujo visual no pudo completarse porque el controlador del navegador no inicializó. Por ello este documento no afirma una auditoría visual completa; la comparación visual queda como evidencia obligatoria en ROC-38.

