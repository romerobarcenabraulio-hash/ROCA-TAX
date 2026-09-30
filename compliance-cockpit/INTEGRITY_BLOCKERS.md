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

El runtime actual contiene 188 filas NOM-035; `ROCA_MODULE_HEALTH_CANON_2026-09-29.csv` conserva 156. Las 32 filas posteriores desagregan controles 9.1–10.2 y reglas de Guías II/III.

Decisión: PRESERVE runtime; no deduplicar destructivamente. El health ledger queda marcado stale hasta un rebuild con el mismo manifest/augmenters que produjo el master.

## Regla de liberación

Ninguno de estos registros constituye declaración de cumplimiento. El cockpit conserva `compliance_claim: NOT_AUTHORIZED` y los cierres dependen de evidencia/revisión/autoridad según corresponda.
