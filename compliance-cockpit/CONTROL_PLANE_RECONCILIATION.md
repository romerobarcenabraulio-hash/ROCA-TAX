# ROCA Compliance — Control Plane reconciliation

Date: 2026-09-30

## Reason for rebuild

The previously live `ROCA_COMPLIANCE_CONTROL_PLANE.xlsx` was stale:
- MASTER_REQ: 4,388 rows
- stale master SHA: `5c0a176351f91d120cf37e4caf9f14923601761f5f9ac05c73830cc8af95bdf1`
- admission sheet lacked current modules and retained old gate/path values.

It was not patched in place. A full 14-sheet rebuild was produced from the locked 4,469 release plus reconciled current derived ledgers.

## New canonical Control Plane

Drive ID: `1CuUD0Fcd3a6netK5h4oce1f3YYHg0R3i`

Name: `ROCA_COMPLIANCE_CONTROL_PLANE.xlsx`

Workbook SHA-256: `85e99c97832d59a0f7c1f5c60bf7b789f4c1585890112e04b9c068601c2a63dc`

Canonical master embedded:
- rows: 4,469
- master SHA: `0a6b58c77783cf74bbd0a66ea0d4dff5aec18e9ef6a6defbde37b995f45eed9c`

Key sheet counts:
- MASTER_REQ: 4,469
- MASTER_UI: 4,469
- INBOX: 4,421
- HOY: 40
- 3_SEMANAS: 30
- MEDIR_CALC: 653
- TRAMITES: 170
- CAPTURA_TRAMITES: 170
- DOCUMENTOS: 474
- DOC_REQ_XREF: 2,720
- BANNERS: 42
- ADMISION_MODULOS: 42

## HOY correction

The old Control Plane HOY contained 40 rows all in `RESOLVE_APPLICABILITY`.

The rebuilt snapshot is deterministic and mixed:
- RESOLVE_APPLICABILITY 8
- MEASURE 6
- FIELD_EVIDENCE 6
- DOCUMENT 6
- MODIFY 5
- EXTERNAL 4
- VERIFY 3
- FILE_OR_TRAMITE 1
- TRAIN_OR_INTERVIEW 1

The cockpit itself still generates HOY dynamically from current state; the sheet is a reproducible snapshot for the Control Plane.

## Derived catalogs

Where the portable ZIP did not carry standalone editorial CSVs, the workbook derives them deterministically from signed queues:
- DOCUMENTOS / DOC_REQ_XREF from `ROCA_COMPLIANCE_DOCUMENT_SOP_QUEUE.csv`
- BANNERS from `ROCA_COMPLIANCE_BANNER_QUEUE.csv`
- MEDIR_CALC from the calculator registry + measurement queue

Existing document/banner IDs were preserved by name when available; new IDs are only assigned to new names.

## Rollback / provenance

Old Drive file renamed:
`ROCA_COMPLIANCE_CONTROL_PLANE_STALE_4388_2026-09-30.xlsx`
ID: `1GLmUT9Km7gRvG8Q3e4VSk-pTHMPGcVh0`

Private rollback of old workbook:
ID: `1JtVkuCfYng_hME6b2e4lTgYwOVqeA3K1`

Private mirror of new canonical workbook:
ID: `1yZRV-F0--Qii-czXoU-_a083d5CN6lmT`
Permission re-read: owner-only.

## QA

- workbook reopened after export: PASS
- expected 14 sheets present: PASS
- required row counts: PASS
- formula error literals: 0
- source manifest hashes embedded
- downloaded Drive bytes SHA matched local workbook SHA
- header styling preserved for operational sheets; CONTROL/MANIFEST header styling repaired
- renderer library documented by the installed spreadsheet skill was unavailable under the installed runtime API, therefore no visual-render PASS is claimed.

## Open integrity blocker

The canonical Drive copy inherits `anyone:writer` from COMPLIANCE_APP_DATA. The private mirror does not.

This rebuild does not constitute legal/physical compliance.
