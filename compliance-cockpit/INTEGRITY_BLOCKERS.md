# ROCA Compliance — integrity blockers / continuity ledger

Fecha: 2026-09-29

## R1 — Drive canónico permite escritura pública

Verificación directa de permisos:

- root ROCA Audit `1fG6oJcx6RZeziYTiBwZyiAXPdBvcUgar`: `anyone:writer`.
- `COMPLIANCE_APP_DATA` `1ylb-9wJTJAqD6VKCumjPZ_CUfSYYKT5e`: `anyone:writer`.
- el release de cockpit observado hereda la misma condición.

Impacto: la evidencia/datasets en Drive no pueden tratarse como inmutables sólo por ubicación. La integración a GitHub verifica SHA-256 exacto antes de importar bytes.

Cierre real: retirar `anyone:writer` del root y carpetas controladas, después volver a leer permisos y registrar evidencia del cambio. El conector disponible en esta sesión permite compartir pero no revocar permisos, por lo que la revocación es una dependencia externa de acceso/administración.

## R1 — checkpoint FORM_MASTER no persistido en Drive

El documento FASTTRACK registra un cockpit posterior con:

- 14 claves FORM_MASTER;
- `formMasterValues`;
- live prefill;
- QA 64/64;
- paquete `ROCA_COMPLIANCE_COCKPIT_CURRENT.zip`.

Los IDs de Drive anotados en ese checkpoint ya responden 404 y el paquete no aparece actualmente en `COMPLIANCE_APP_DATA`.

Acción aplicada: reconstrucción controlada como overlay derivado del runtime canónico de 4,469 REQ. El overlay se aplica después de verificar hashes del release base y tiene gate propio.

## Source integrity — NOM-035

El runtime/master actual contiene 189 filas NOM-035; `ROCA_MODULE_HEALTH_CANON_2026-09-29.csv` conserva 156. Las 33 filas posteriores desagregan controles 9.1–10.2 y reglas de Guías II/III.

Decisión: PRESERVE runtime/master; no deduplicar destructivamente. El health ledger previo quedó reconciliado el 30-sep-2026 a 189 filas y `NOM035_GATE.json`; el admission ledger también fue alineado al mismo quality gate.

## Regla de liberación

Ninguno de estos registros constituye declaración de cumplimiento. El cockpit conserva `compliance_claim: NOT_AUTHORIZED` y los cierres dependen de evidencia/revisión/autoridad según corresponda.


## Recovery mirror persisted after FORM_MASTER recovery

Two Drive recovery locations now exist:

1. Shared recovery under COMPLIANCE_APP_DATA:
   - folder: `COCKPIT_RECOVERY_FORM_MASTER_V1_2026-09-29`
   - id: `1z2fxOEd_DicxhqkeBn8pfDCcT-G0zSt5`
   - purpose: colocated recovery copy; inherits the shared-root integrity risk.

2. Controlled private mirror:
   - folder: `ROCA_CONTROLLED_RECOVERY_PRIVATE_2026-09-29`
   - id: `1eRp7_DsrCnB9Y-WXtSLRh4PaNziDdg0B`
   - contents verified: 13 files.
   - permission re-read: owner-only on the folder, on raw `data.js`, and on `app.js.PATCHED_SOURCE`; no `anyone` permission returned.

Private mirror contents include:
- executable base runtime: `index.html`, `styles.css`, `app.js.base`, `state_guards.js`, `data.js`, `runtime-requirements.json`, `RUNTIME_MANIFEST.base.json`;
- recovered overlay sources: `index.html.PATCHED_SOURCE`, `app.js.PATCHED_SOURCE`, `form-master-data.js.SOURCE`, `RUNTIME_MANIFEST.PATCHED_SOURCE`, `FORM_MASTER_GATE.SOURCE`, `patch_compliance_form_master.py.SOURCE`.

Content re-read from the shared recovery source confirmed:
- patched app contains `formMasterValues`, `livePrefillField`, and restricted-value guard text;
- FORM_MASTER data contains 14 canonical keys;
- FORM_MASTER gate reports PASS and 10 checks passed;
- patch source is present and readable.

This recovery mirror preserves continuity only. It does not change `compliance_claim: NOT_AUTHORIZED`.


## NOM-035 correction after direct master recount

Direct recount of the canonical master produced 189 unique IDs, from `REQ-NOM035-001` through `REQ-NOM035-189`. The prior 188 statement was stale.

`REQ-NOM035-189` is an internal ROCA privacy control for psychosocial data, explicitly marked as internal governance and not as a legal clause of NOM-035.

On 30-sep-2026:
- module-health was updated in place from 156 to 189 and now points to `NOM035_GATE.json`;
- module-admission was updated in place from `NOM035_GATE_CANON_FINAL.json` to `NOM035_GATE.json`;
- post-write read-back confirmed both changes;
- master remained 4,469 rows and was not rewritten.
