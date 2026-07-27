# ROCA TAX — Contrato de ejecución

Este repositorio adopta la disciplina operativa probada en ALQUIMIA, pero es un producto, repositorio y proyecto Linear independiente.

## 1. Fuente de verdad

- Producto: `ROCA_TAX_MASTER_PLAN_0_100.md`.
- MVP de 14 días: `docs/product/MVP_14_DIAS_ADMIN_SPEC.md`.
- Frontend: `FRONTEND_EXIGENCIA_CERO_OMISIONES.md`.
- Instrucciones Lovable: `docs/execution/LOVABLE_EXECUTION_PACK.md`.
- Linear: proyecto `ROCA TAX — Plataforma web y administración`.

Si dos documentos se contradicen, gana el más específico y reciente. La especificación MVP limita el alcance del plan 0–100 durante las dos primeras semanas.

## 2. Separación con ALQUIMIA

- No copiar código, secretos, datos, ramas ni issues de ALQUIMIA.
- Sí reutilizar su disciplina: issue→rama→PR, diff pequeño, CI, Greptile, preview, revisión humana y evidencia real.
- Nunca trabajar en el repositorio o proyecto Linear ALQUIMIA para una tarea ROCA.

## 3. Regla de ejecución

- Un issue = una conducta observable = una rama = un PR.
- Rama desde `origin/main` actualizada.
- Nunca commit directo a `main`.
- No merge sin CI, Greptile, preview y aprobación humana.
- No refactor ajeno al issue.
- No dependencia nueva sin necesidad concreta.
- No cambiar esquema, UI y flujo de publicación masivamente en el mismo PR.
- Si el cambio supera aproximadamente 400 líneas netas revisables, dividirlo o justificarlo.

## 4. Regla de Lovable

- Lovable construye UI acotada; no decide producto, arquitectura, permisos o datos.
- Leer el issue y el prompt numerado antes de modificar archivos.
- Editar sólo los archivos permitidos por el prompt.
- No inventar campos, rutas, contenido, colores, imágenes, métricas o dependencias.
- No sustituir datos reales por mocks persistentes.
- Al terminar: listar archivos, pruebas, supuestos y cualquier desviación.

## 5. Regla de administración

- El panel es el editor cotidiano. Nunca exigir Lovable, GitHub, Supabase o Vercel para actualizar contenido.
- Flujo único: elegir página → editar campos → vista previa → publicar.
- Layout, tokens, tipografías y componentes no son editables desde el panel.
- Guardar no publica. Publicar requiere resumen comprensible.
- Nada importante se elimina: despublicar/papelera/restaurar.

## 6. Seguridad y datos

- Autorización en RLS/API, no sólo botones ocultos.
- Nunca exponer secretos ni URLs privadas.
- Imágenes públicas y documentos privados usan políticas distintas.
- Toda publicación, restauración, cambio de rol y exportación genera auditoría.
- Migraciones aditivas y revisadas; destrucción sólo con backup y aprobación.

## 7. Definition of Done

- Criterios del issue cumplidos.
- Tipos, lint, tests y build verdes con salida real.
- Responsive y teclado verificados.
- Estados loading/empty/error/success/sin permiso cubiertos.
- Ambos temas cuando aplique.
- Permisos y RLS probados negativamente.
- Preview Vercel revisado.
- Greptile sin bloqueo crítico.
- Linear actualizado con evidencia y PR.

