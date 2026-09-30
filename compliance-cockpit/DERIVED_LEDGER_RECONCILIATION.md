# ROCA Compliance — derived-ledger reconciliation

Date: 2026-09-30

## Frozen master

- canonical rows: 4,469
- canonical SHA-256: `0a6b58c77783cf74bbd0a66ea0d4dff5aec18e9ef6a6defbde37b995f45eed9c`
- master was not rewritten during this reconciliation.

## Reconciled in module-health

Post-write read-back now matches gate-sync for these previously stale rows:

- NOM005 — proof SHA refreshed.
- NOM027 — proof SHA refreshed.
- NOM034 — quality gate aligned to `NOM034_GATE.json`.
- NOM035 — 156 -> 189 rows; gate aligned to `NOM035_GATE.json`; proof SHA refreshed.
- NOM036 — quality gate aligned to `NOM036_GATE.json`.
- PCSLP — proof SHA refreshed.
- SEMARNAT07017 — 31 -> 33 rows; proof SHA refreshed.

## Reconciled in module-admission

Post-write read-back now aligns quality-gate names for:

- NOM034 -> `NOM034_GATE.json`
- NOM035 -> `NOM035_GATE.json`
- NOM036 -> `NOM036_GATE.json`
- LGEC -> `LGEC_GATE.json`

## Remaining health omissions

These modules exist in gate-sync but are not represented in module-health:

- SEGAM_POFF — 51 rows
- LGEC — 43 rows
- RFSST2014 — 104 rows
- SLP_ENV_IMPACT — 56 rows
- SLP_MUN_FUNCTION — 25 rows

Do not synthesize health rows until the exact source/source-gate metadata used by the generating pipeline is recovered. Their absence is a derived-ledger blocker, not evidence that the modules are absent from the master.

## Remaining admission omissions

These modules exist in gate-sync but are not represented in module-admission:

- ADMIN_FORM — 4 rows
- SLP_ENV_IMPACT — 56 rows
- SLP_MUN_FUNCTION — 25 rows

Do not auto-admit the two SLP modules without the exact source-gate record. ADMIN_FORM is an internal data/control module and must retain its internal-control semantics rather than being disguised as a legal source.

## Recovery / rollback

Before each reconciliation write, the previous health/admission CSVs were copied to the private owner-only recovery mirror:

`ROCA_CONTROLLED_RECOVERY_PRIVATE_2026-09-29`

No completion or compliance claim is created by this reconciliation.
