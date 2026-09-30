# ROCA Compliance — derived-ledger reconciliation

> **CURRENT AUTHORITATIVE STATUS — 30-sep-2026:** derived-ledger reconciliation is PASS under `ROCA_DERIVED_LEDGER_GATE_2026-09-30.json`: module lock 43, gate-sync 43, health 43, admission 42/42 expected, issues 0. `ADMIN_FORM` is intentionally excluded from legal/source admission. The two SLP modules use explicitly reconstructed source-gates; original historical gate bytes were not recovered. Earlier “remaining omissions / HOLD” sections below are retained only as reconciliation history and are superseded by this status.

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


## 2026-09-30 source-integrity continuation

Direct inspection of the locked 4,469-row release and the live Control Plane recovered exact metadata for three previously missing health modules:

- `SEGAM_POFF`
  - ledger: `SEGAM_POFF/SEGAM_POFF_requirement_ledger.csv`
  - source: `SEGAM-POFF-SLP-2026`
  - rows: 51
  - quality gate: `SEGAM_POFF_GATE.json`
  - source gate recovered from historical admission: `SEGAM_POFF_SOURCE_GATE.json`
  - proof SHA: `5841a816a145507ed03560a8fd518c82fd0436174d8e70c83dfd15b233681da7`

- `LGEC`
  - ledger: `LGEC/LGEC_REQUIREMENT_LEDGER_CANON_FINAL.csv`
  - source: `LGEC-2026`
  - rows: 43
  - quality gate: `LGEC_GATE.json`
  - source gate: `LGEC_SOURCE_GATE.json`
  - proof SHA: `a78f5051bdae74ad8827b4c526606c98f79a111f4cfe6d726f888ef6a26502ef`

- `RFSST2014`
  - ledger: `RFSST2014/RFSST2014_requirement_ledger.csv`
  - source: `RFSST-2014`
  - rows: 104
  - quality gate: `RFSST2014_GATE.json`
  - source gate: `RFSST2014_SOURCE_GATE.json`
  - proof SHA: `9af335fd6d2aea52bc2545670e4a799f9c2b40c2280cb3941773e6678776d83c`

These three rows were added to module-health and post-write read-back matched the locked release.

LGEC admission was also corrected to point to the canonical ledger path `LGEC/LGEC_REQUIREMENT_LEDGER_CANON_FINAL.csv`.

### ADMIN_FORM stale derivative corrected

A direct CSV parse of the canonical master and the locked module manifest both show:

- source `ROCA-ADMIN-FORM-DATA`
- rows: 5
- ledger SHA: `ca3e02e378d7710bf8d93c1a276f06072b671f7e16ebde5cc47f09b4d1a03db9`

The old gate-sync/health count of 4 was stale. Both derived ledgers were corrected in place to 5 rows and the current SHA. `ADMIN_FORM` remains outside legal module-admission because it is an internal control/master-data module and no external source-gate was recovered.

### Remaining provenance blockers

Only these two modules remain absent from both module-health and module-admission:

- `SLP_ENV_IMPACT`
  - locked ledger: `SLP_ENV_IMPACT/SLP_ENV_IMPACT_requirement_ledger.csv`
  - source: `SLP-ENV-IMPACT-2026`
  - rows: 56
  - quality gate: `SLP_ENV_IMPACT_GATE.json`
  - proof SHA: `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`
  - source-gate file: NOT RECOVERED

- `SLP_MUN_FUNCTION`
  - locked ledger: `SLP_MUN_FUNCTION/SLP_MUN_FUNCTION_requirement_ledger.csv`
  - source: `SLP-MUN-FUNCTION-2026`
  - rows: 25
  - quality gate: `SLP_MUN_FUNCTION_GATE.json`
  - proof SHA: `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`
  - source-gate file: NOT RECOVERED

Searches of GitHub, Drive, FASTTRACK, the live Control Plane and the portable release did not recover those source-gate artifacts. Therefore these rows remain `HOLD_PENDING_EVIDENCE`; they must not be silently admitted.

### Cleanup

Eight temporary Google Docs used only as byte-transfer intermediates were permanently deleted after successful write/read-back. Rollback CSV copies remain in the private owner-only recovery mirror.

Verdict: **BLOCKED - SOURCE INTEGRITY only for the two missing SLP source-gate artifacts; PASS for all reconciled derived rows above.**


## 2026-09-30 reconstructed SLP source gates

The original source-gate artifacts for the two SLP modules were not recovered. Rather than inventing historical files, new gates were reconstructed from current official sources and marked explicitly as reconstructed.

### SLP_ENV_IMPACT

- source gate: `SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- GitHub path: `compliance-cockpit/source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- Drive raw copy id: `1OpRPAukfRdlAsDuvLcuY6L5gi17KAID7`
- JSON SHA-256: `717963909dda423825234933771c09bb618e14a16b83423a399ae08b76eb56b8`
- ledger rows: 56
- ledger SHA: `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`
- official basis rechecked 2026-09-30: SEGAM impact route, SEGAM legislation registry, current state environmental law listing.
- verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`
- original source gate recovered: false

### SLP_MUN_FUNCTION

- source gate: `SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`
- GitHub path: `compliance-cockpit/source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`
- Drive raw copy id: `1ZPtWLWlz1Jwn-PdWiJ1a99eVGL0HHrGB`
- JSON SHA-256: `44d0822f80dde4b479ff4ee50186d8c11c1599fe888828f8b37c69898156e327`
- ledger rows: 25
- ledger SHA: `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`
- official basis rechecked 2026-09-30: municipal land-use/business-opening routes and 2026 municipal gazette requirements.
- verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`
- original source gate recovered: false

Both modules were then added to module-health and module-admission with their locked ledger paths/counts/hashes. Post-write read-back matched gate-sync.

This closes the derived-ledger omission. It does **not** retroactively recover the lost historical gate files and does not create a legal/physical compliance claim.


## SLP reconstructed source-gates admitted

The original source-gate artifacts for `SLP_ENV_IMPACT` and `SLP_MUN_FUNCTION` were not recovered. They were therefore not silently recreated under the old names.

Instead, two new explicitly reconstructed source-integrity gates were created from current official sources and bound to the locked module rows/hashes:

- `compliance-cockpit/source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
  - original_source_gate_recovered: false
  - ledger rows: 56
  - ledger SHA: `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`

- `compliance-cockpit/source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`
  - original_source_gate_recovered: false
  - ledger rows: 25
  - ledger SHA: `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`

Post-write Drive read-back confirmed:
- module-health now contains both SLP modules with the locked row counts and hashes;
- module-admission now contains both SLP modules and points to the explicit `*_RECON_2026-09-30.json` source-gates.

This closes the derived-ledger omission without pretending the historical source-gates were recovered. Applicability, authorization, filing readiness and physical/legal compliance remain separate and unresolved until evidence closes them.

Updated verdict for derived-ledger continuity: **PASS - SOURCE INTEGRITY with reconstructed provenance disclosed**.


## Current structural reconciliation — PASS

Post-write automated comparison against the locked module manifest:

- canonical module lock: **43**
- gate-sync modules: **43**
- module-health modules: **43**
- module-admission modules: **42**
- expected admission modules: **42** because `ADMIN_FORM` is the sole internal master-data/control module intentionally excluded from legal/source admission
- extra admission modules: **0**
- path mismatches: **0**
- row-count mismatches: **0**
- ledger-SHA mismatches: **0**
- quality-gate mismatches: **0**
- health gate/source statuses not PASS: **0**
- admission rows not ADMITTED/PASS: **0**

Automated reconciliation issues: **0**.

The reconstructed SLP source gates are additionally mirrored in the private owner-only recovery folder:

- `SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json` — private mirror ID `14dJsEpOS7gU8dXGzYFIJ1XgTFezwtVxa`
- `SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json` — private mirror ID `1HfmLydAhBxESUuM-3hYQfZ6FhFhSTFHc`

Permission re-read for both private copies returned owner-only; no `anyone` permission.

Verdict for this scope: **PASS - SOURCE INTEGRITY / DERIVED LEDGER RECONCILIATION**.

This verdict is limited to source/derived-ledger consistency. It does not close the separate Drive-sharing R1 blocker, visual QA, physical implementation, field evidence, authority filings, or legal compliance.


## SLP provenance blockers resolved by controlled reconstruction

The original source-gate artifacts for `SLP_ENV_IMPACT` and `SLP_MUN_FUNCTION` were not recovered. They were not silently recreated under the old names.

New traceable gates were created in GitHub:

- `source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
  - official sources: current SEGAM environmental-impact route, SEGAM legislation page, current SLP environmental law listing;
  - ledger locked at 56 rows / SHA `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`;
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`.

- `source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`
  - official sources: current Ayuntamiento de San Luis Potosi business/land-use routes and 2026 municipal gazette;
  - ledger locked at 25 rows / SHA `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`;
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`.

Health and admission were updated in place after private rollback copies were made.

Post-write full diff:
- module-health vs gate-sync: 0 differences;
- module-admission vs gate-sync: 0 differences for legal/source modules;
- `ADMIN_FORM` remains intentionally outside legal admission because it is an internal control/master-data module.

The two SLP admission rows are labeled `ADMITTED_RECONSTRUCTED`, not `ADMITTED`, preserving the fact that historical source-gate artifacts were lost.

Verdict for derived ledgers: **PASS - SOURCE INTEGRITY WITH RECONSTRUCTED SLP GATES**.


## 2026-09-30 reconstructed SLP source gates

The original source-gate artifacts for `SLP_ENV_IMPACT` and `SLP_MUN_FUNCTION` were not recovered. Instead, two new source-integrity gates were reconstructed from current official sources and stored in GitHub:

- `compliance-cockpit/source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- `compliance-cockpit/source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`

Both gates explicitly state:
- original source gate not recovered;
- source-integrity reconstructed from current official sources;
- applicability/jurisdiction remains fact-dependent;
- no compliance or permit authorization claim is created.

Post-write results:
- module-health now matches gate-sync across all modules: 0 diffs.
- module-admission matches gate-sync for all legal/source modules, with `ADMIN_FORM` intentionally excluded because it is an internal control/master-data module.
- SLP admissions are labeled `ADMITTED_RECONSTRUCTED`, not ordinary historical admission.
- temporary transfer Docs were cleaned up after write/read-back; rollback copies remain in the private recovery mirror.

Verdict: **PASS - SOURCE INTEGRITY for reconstructed derived ledgers, with explicit historical-provenance limitation on the two SLP source gates.**


## Resolution — reconstructed SLP source-integrity gates

The original SLP source-gate artifacts were not recovered. They remain an archival provenance loss and are not represented as recovered files.

To restore an auditable current source-integrity decision without inventing historical bytes, two new gates were reconstructed from the frozen module lock/master plus current official sources:

- `compliance-cockpit/source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
  - 56 rows
  - ledger SHA `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`
  - sources: current SEGAM impact route, SEGAM legislation register, current Congreso SLP environmental-law register
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`

- `compliance-cockpit/source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`
  - 25 rows
  - ledger SHA `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`
  - sources: current Ayuntamiento business/land-use routes and current Congreso SLP land-use/development-law register
  - verdict: `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`

Post-write Drive read-back confirmed:
- module-health contains all 43 gate-sync modules with matching ledger path, row count, quality-gate filename and proof SHA;
- module-admission contains 42 admitted modules; `ADMIN_FORM` is intentionally excluded because it is an internal master-data control;
- both SLP rows use the reconstructed source-gate filenames;
- standard admissions remain `ADMITTED`; the two reconstructed SLP modules use `ADMITTED_RECONSTRUCTED` by explicit validator contract;
- reconstruction provenance is preserved in `admission`, `source_gate` and `reason`.

Latest source-integrity verdict for these derived ledgers: **PASS - SOURCE INTEGRITY (RECONSTRUCTED GATES)**.

Residual archival note: original SLP source-gate bytes were not recovered. This does not authorize a permit, resolve applicability, or establish legal/physical compliance.


## CI enforcement of derived-ledger integrity

The frozen module lock plus reconciled gate-sync, health and admission snapshots are now persisted under `compliance-cockpit/`.

`.github/roca-compliance-overlay/validate_derived_ledgers.py` validates:
- 43 locked modules;
- gate-sync path/rows/SHA against module lock;
- health path/rows/gate/SHA for all 43;
- 42 admission rows with `ADMIN_FORM` intentionally excluded;
- `ADMITTED_RECONSTRUCTED` + reconstructed source-gate marker for the two SLP modules.

The Compliance sync workflow now invokes this validator before committing a synced cockpit release.


## 2026-09-30 reconstructed SLP source gates

The original source-gate artifacts for `SLP_ENV_IMPACT` and `SLP_MUN_FUNCTION` were not recovered. Rather than inventing historical files, two new source-integrity gates were reconstructed from current official sources and stored in GitHub:

- `source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- `source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`

Both are explicitly marked `original_source_gate_recovered: false` and `PASS_SOURCE_INTEGRITY_RECONSTRUCTED`.

Drive derived ledgers were then updated with rollback copies preserved beforehand:

- module-health now includes SLP_ENV_IMPACT: 56 rows / SHA `efeb14c72190ee85535fa30d055f2d6f890d61a49dbf9f61e369a5345bd26b04`;
- module-health now includes SLP_MUN_FUNCTION: 25 rows / SHA `78a2cf3aed0e22926eebc6cdd5e405c3b242f95f59e4ad14cc6db03617d7db61`;
- module-admission records both as `ADMITTED_RECONSTRUCTED`, not as historically recovered admissions.

Applicability remains fact-dependent and no legal/physical compliance claim is created.

Verdict for derived-ledger provenance: **PASS - SOURCE INTEGRITY WITH RECONSTRUCTED SLP SOURCE GATES**.


## 2026-09-30 final derived-ledger parity

The two remaining SLP source-integrity gates were **reconstructed from current official sources** rather than falsely claimed as recovered originals:

- `SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- `SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`

Both reconstructed gates:
- bind to the exact locked ledger path/count/SHA;
- cite current official state/municipal sources;
- preserve applicability as fact-dependent;
- set `compliance_claim: NOT_AUTHORIZED`;
- explicitly record `original_source_gate_recovered: false`.

After backup, both modules were added to health and admission with status `ADMITTED_RECONSTRUCTED`.

A parser-based comparison against `ROCA_CANONICAL_MODULE_LOCK.json` now returns:

- module lock: 43 modules;
- health: 43 modules;
- gate-sync: 43 modules;
- admission: 42 modules;
- health path/count/SHA mismatches vs module lock: 0;
- gate-sync path/count/SHA mismatches vs module lock: 0;
- admission missing legal/external modules: 0;
- the sole module not in admission is `ADMIN_FORM`, intentionally internal-control/master-data, not a legal source module.

The canonical master remains 4,469 rows with SHA `0a6b58c77783cf74bbd0a66ea0d4dff5aec18e9ef6a6defbde37b995f45eed9c`.

Verdict for derived-ledger parity: **PASS - SOURCE INTEGRITY, with reconstructed provenance explicitly labeled for the two SLP modules.**


## 2026-09-30 reconstructed SLP source gates

The original source-gate artifacts for `SLP_ENV_IMPACT` and `SLP_MUN_FUNCTION` were not recovered. Instead of inventing or backfilling them silently, new gates were reconstructed from current official sources and stored in GitHub:

- `compliance-cockpit/source-gates/SLP_ENV_IMPACT_SOURCE_GATE_RECON_2026-09-30.json`
- `compliance-cockpit/source-gates/SLP_MUN_FUNCTION_SOURCE_GATE_RECON_2026-09-30.json`

Both gates are explicitly marked:
- schema `ROCA_RECONSTRUCTED_SOURCE_GATE_V1`;
- `original_source_gate_recovered: false`;
- `compliance_claim: NOT_AUTHORIZED`;
- applicability remains fact-dependent.

After rollback backup:
- module-health gained SLP_ENV_IMPACT (56) and SLP_MUN_FUNCTION (25) with canonical path/count/SHA and PASS quality/source status;
- module-admission gained both rows as `ADMITTED_RECONSTRUCTED`, preserving the distinction from historically admitted modules.

Post-write read-back matched gate-sync paths/counts/hashes. This closes the derived-ledger omission without falsely claiming recovery of the historical gate artifacts.
