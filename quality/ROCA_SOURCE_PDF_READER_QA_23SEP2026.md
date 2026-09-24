# ROCA Source PDF Reader QA — 23 SEP 2026

Branch: `codex/roca-source-pdf-reader`
Base SHA: `e62dcb1c99b3e750a7728b4e8d14db502044f538`

## Scope
Add a read-only source-document workspace to ROCA Audit without publishing restricted client/wildlife files in the public repository.

## Static contract checks
- PASS — `FUENTES` button exists in `index.html`.
- PASS — `source-data.js` loads before `source-reader.js`.
- PASS — `source-reader.js` loads after the existing application.
- PASS — JavaScript syntax compiles for `source-data.js`.
- PASS — JavaScript syntax compiles for `source-reader.js`.
- PASS — Master 391-page source is registered through a controlled private Drive copy; the public repo contains only the locator, not PDF bytes.
- PASS — Restricted-personal/financial/wildlife document classes are explicitly excluded from publication in the public repo.
- PASS — Direct page-jump is disabled for Drive preview and reserved for a controlled local-served PDF.
- PASS — Source-mode print interception prevents the existing master-print handler from silently printing another workspace; in FUENTES the action opens the original PDF instead.
- PASS — Source manifest contains 6 unique source IDs; no duplicate navigation IDs remain.
- PASS — 10 source-to-current cross-check targets resolve to real V2 area section IDs.
- PASS — `ops/control/ROCA_SOURCE_CROSSCHECK_V1.csv` now records the full source-integrity ledger: subject, source, locator, revision, authority, facts, conflicts, canonical home, action, proof and status.
- PASS — Source document IDs are unique after reconciliation; the duplicate `v24-7-precampo-rigor` manifest entry was removed.
- PASS — Ten area books expose inline cross-check links to exact 391p source pages without duplicating source prose or changing printable output.

## Functional state
- SOURCE-CONFIRMED — Five PDF sources now exist inside `ROCA AUDIT - FUENTES DOCUMENTALES` as private `not_shared` Drive files: 391p, 367p, PreEntrevistas 26 AGO, v24.8 Pre-Campo Control and v24.7 Pre-Campo Rigor.
- BLOCKED-EXTERNAL — Vercel deployment is Ready, but this session's Vercel connector is not authorized for project `roca-tax`; authenticated iframe/browser QA cannot be completed from this connection.
- NOT-CHECKED — mobile visual behavior has not been screenshot-tested.
- SOURCE-INTEGRITY-BLOCKER — raw `ROCA_TAXIDERMY_v22_1_Editable.zip` bytes still not recovered after targeted Library and Google Drive searches for `v22`, `ROCA_TAXIDERMY_v22`, `Editable ROCA TAXIDERMY`, and `PHOTO_PLAN_v22`.

## Privacy gate
Do not add customer CITES/SEMARNAT/PROFEPA permit PDFs, IDs, financial records or other restricted originals to this public GitHub repository. Restricted source reading belongs in a private authenticated evidence surface.

## Cross-check state
- SOURCE-CROSSCHECK — Master 391p maps Recepción, Curtiduría, FMR, Montaje, Retoque, Bases, Carpintería, Soldadura, Blanqueado and Espacios de soporte to their current V2 sections.
- SOURCE-CROSSCHECK — UI exposes the source page/reference plus `VER V2` navigation without replacing or rewriting the PDF.
- OPEN — Remaining historical source mappings will be added only after their page-level locators are established from the recovered originals.

## Release state
PARTIAL — code, private Drive master copy, Vercel deployment, unique source IDs, and section→source cross-check links are present. Authenticated iframe/mobile visual QA remains required before merge.
