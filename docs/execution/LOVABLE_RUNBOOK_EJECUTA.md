# ROCA TAX — Runbook “ejecuta, revisa, continúa” para Lovable

## Regla del operador

El operador no improvisa instrucciones. Copia un prompt completo del paquete, espera a que Lovable termine y verifica el gate. Si falla, detiene la secuencia y reporta el resultado; no escribe un prompt correctivo abierto.

La palabra `ejecuta` siempre significa `Ejecuta el prompt Pxx completo conforme al Gobernador`. No autoriza a Lovable a escoger trabajo, continuar automáticamente o corregirse sin límites.

## Antes de cada ejecución

1. abrir el issue ROC correspondiente;
2. confirmar rama distinta de `main`;
3. copiar sólo el prompt numerado;
4. confirmar archivos permitidos;
5. ejecutar.

## Después de cada ejecución

Lovable debe responder:

- archivos creados/modificados;
- pruebas ejecutadas y salida;
- supuestos;
- desviaciones;
- datos mock añadidos;
- dependencias añadidas.

El operador valida:

- diff limitado al issue;
- sin secretos;
- sin imágenes stock o URLs externas permanentes;
- sin campos, rutas o datos inventados;
- lint, tipos, tests y build;
- PR, preview y Greptile.

## Secuencia cerrada

| Orden | Prompt | Gate para continuar |
|---:|---|---|
| 0 | P00 | Rama/PR reales; `main` intacta |
| 1 | P01 | Fundación, rutas y temas verdes |
| 2 | P01A | Conteos heredados y trazabilidad verdes |
| 3 | P02 | Invitación, sesión, recuperación y MFA verdes |
| 4 | P02A | Roles y RLS negativos verdes |
| 5 | P03 | Shell administrativo usable |
| 6 | P03A | Usuarios por invitación usable |
| 7 | P04 | Editor tipado y borrador persistente |
| 8 | P05 | Medios seguros, recorte y alt verdes |
| 9 | P04A | Cambiar fotografía en recorrido de tres pantallas |
| 10 | P06 | Autoguardado, sesión y conflictos verdes |
| 11 | P06A | Preview privado exacto |
| 12 | P06B | Publicación atómica y diff verdes |
| 13 | P06C | Versiones, papelera y restore verdes |
| 14 | P07 | Sitio público y matriz de réplica |
| 15 | P08 | Colección y 37 registros trazables |
| 16 | P08A | Formas y 6 productos pendientes de validación |
| 17 | P09 | Servicios, valoración y solicitudes reales |
| 18 | P09A | Biblioteca privada operativa |
| 19 | P09B | Importación simulada y rollback |
| 20 | P09C | Generador PDF versionado y publicable |
| 21 | P10 | Auditoría, backup, restore y alertas |
| 22 | P11 | Matriz de producción PASS/FAIL |

## P03A — Gestión mínima de usuarios

```text
PROMPT_ID: P03A
ISSUE: ROC-14
OBJETIVO: implementar /admin/usuarios para que Owner invite y administre
personal sin conocer Supabase.
DATOS: profiles exacto de la spec; email de auth como login; full_name visible;
roles sólo owner|admin; estados invited|active|suspended.
FLUJO: lista→Invitar persona→nombre+correo+rol→explicación humana→Enviar.
ACCIONES: reenviar invitación, suspender, reactivar y cambiar rol.
SEGURIDAD: sólo Owner; proteger último Owner; server-side invite; auditoría;
no exponer service_role; mensajes que no revelen cuentas a anónimos.
NO HACER: username, registro público, organizaciones, seis roles, permisos
personalizados, tabla editable, acceso directo a Supabase.
ARCHIVOS PERMITIDOS: src/features/users/**, ruta /admin/usuarios, función
server-side de invitación y tests exclusivos de gestión de usuarios.
ACEPTACIÓN: un Owner no técnico invita en menos de 60 segundos; admin no puede
abrir ni ejecutar acciones; invitación vencida puede reenviarse; pruebas RLS.
```

## P04A — Editor rápido de fotografías

```text
PROMPT_ID: P04A
ISSUE: ROC-41
OBJETIVO: implementar el modo predeterminado Cambiar fotografías.
FUENTE: docs/product/INVENTARIO_SITIO_OFICIAL_Y_MODELO_EDICION.md secciones 5-6.
FLUJO ÚNICO: elegir slot por miniatura→subir/reemplazar→recortar/focal→confirmar
alt→preview móvil/escritorio→publicar→ver página/deshacer.
COPY: usar etiquetas humanas; jamás IDs, buckets, tablas, rutas o JSON.
DATOS: media_assets y slots cerrados del esquema; no crear page builder.
ESTADOS: falta foto, lista, cambio pendiente, subiendo, error recuperable,
guardado, publicando, publicado, sin permiso, offline y sesión expirada.
NO HACER: biblioteca como primera pantalla, edición de layout, filtros
avanzados visibles, stock, URL remota, IA que publique, borrado permanente.
ARCHIVOS PERMITIDOS: src/features/photo-quick-edit/**, entrada correspondiente
del shell administrativo y tests de este recorrido.
ACEPTACIÓN: persona nueva cambia una foto y publica en menos de 3 minutos;
la anterior puede restaurarse; producción no muestra upload parcial.
```

## Semáforo

- **Verde:** checks verdes, diff dentro de alcance, preview verificable. Continuar.
- **Amarillo:** warning no bloqueante documentado en Linear. Dirección decide.
- **Rojo:** cambio de arquitectura, seguridad, esquema inesperado, mock persistente, fallo de pruebas o cambio directo a `main`. Detener.

## Fin real

Lovable “terminó” un prompt sólo cuando el PR tiene CI, Greptile, preview, criterios del issue y evidencia. El servicio terminó únicamente cuando P00–P11 y todos los gates de `PRODUCTION_RELEASE_SPEC.md` están verdes, el dominio responde, el smoke test de producción pasa y el monitoreo está activo.
