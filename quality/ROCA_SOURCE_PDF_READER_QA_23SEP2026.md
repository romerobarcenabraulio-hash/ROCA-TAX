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

## Functional state
- SOURCE-CONFIRMED — Controlled Drive copy `ROCA_MASTER_WEB_391P_SOURCE.pdf` exists inside `ROCA AUDIT - FUENTES DOCUMENTALES`, is readable through the authenticated Drive connector, and Drive reports it as `not_shared`.
- BLOCKED-EXTERNAL — Vercel deployment is Ready, but this session's Vercel connector is not authorized for project `roca-tax`; authenticated iframe/browser QA cannot be completed from this connection.
- NOT-CHECKED — mobile visual behavior has not been screenshot-tested.
- LOCATOR_PENDING — `ROCA_TAXIDERMY_v24_7_PreCampo_Rigor.pdf` (Library/raw bytes confirmed; deployed private locator missing).
- SOURCE-RECOVERED / LOCATOR-PENDING — `ROCA_TAXIDERMY_MASTER_CANONICO_PENDIENTES_31AGO2026 2.pdf`, 367 pages, 60,294,089 bytes.
- SOURCE-RECOVERED / LOCATOR-PENDING — `ROCA_TAXIDERMY_v24_8_PreCampo_Control.pdf`, 198 pages, 31,591,373 bytes.
- SOURCE-RECOVERED / LOCATOR-PENDING — `ROCA_TAXIDERMY_MASTER_PreEntrevistas_26AGO2026.pdf`, internally labeled v24.8, 208 pages, 31,643,065 bytes. Do not deduplicate against nominal v24.8 without diff.
- SOURCE-RECOVERED / LOCATOR-PENDING — `ROCA_TAXIDERMY_v24_7_PreCampo_Rigor.pdf`, 194 pages, 26,262,426 bytes.
- SOURCE-INTEGRITY-BLOCKER — raw `ROCA_TAXIDERMY_v22_1_Editable.zip` bytes still not recovered.

## Privacy gate
Do not add customer CITES/SEMARNAT/PROFEPA permit PDFs, IDs, financial records or other restricted originals to this public GitHub repository. Restricted source reading belongs in a private authenticated evidence surface.

## Release state
PARTIAL — code, private Drive master copy, Vercel deployment and static contract are present; authenticated iframe/mobile visual QA remains required before merge.
