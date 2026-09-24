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
- PASS — Master 391-page source is registered through its existing private Drive link.
- PASS — Restricted-personal/financial/wildlife document classes are explicitly excluded from publication in the public repo.
- PASS — Direct page-jump is disabled for Drive preview and reserved for a controlled local-served PDF.
- PASS — Source-mode print interception prevents the existing master-print handler from silently printing another workspace.

## Functional state
- SOURCE-CONFIRMED — Drive file `ROCA_MASTER_WEB.pdf` exists and is readable through the authenticated Drive connector.
- NOT-CHECKED — rendering the private Drive preview inside the deployed/public HTML iframe has not been browser-tested in an authenticated user session.
- NOT-CHECKED — mobile visual behavior has not been screenshot-tested.
- LOCATOR_PENDING — `ROCA_TAXIDERMY_MASTER_CANONICO_PENDIENTES_31AGO2026.pdf`.
- LOCATOR_PENDING — `ROCA_TAXIDERMY_MASTER_PreEntrevistas_26AGO2026.pdf`.

## Privacy gate
Do not add customer CITES/SEMARNAT/PROFEPA permit PDFs, IDs, financial records or other restricted originals to this public GitHub repository. Restricted source reading belongs in a private authenticated evidence surface.

## Release state
PARTIAL — code and static contract are present; browser/Vercel QA remains required before merge.
