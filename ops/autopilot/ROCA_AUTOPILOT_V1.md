# ROCA AUTOPILOT V1

## Mission
Convert ROCA from a manually-fed project into an evidence-to-release system. User action should be as close as possible to: drop a photo/document/measurement/interview/BIWO export into Drive. The system classifies it, maps it to the correct area/process/requirement, updates ClickUp, stages controlled changes for the master, and blocks release when evidence is insufficient.

## System boundaries
- ClickUp = operational workboard and status.
- Google Drive = controlled evidence/document store.
- `ROCA-TAX` = implementation/manual/ROCA Live source.
- `roca-tax-forge` = public website/Lovable product. Never mix status between repos.

## Intake roots
- `13_FOTOS_EVIDENCIA_AUTOMATICA`
- `14_DOCUMENTOS_EVIDENCIA_AUTOMATICA`
- `15_MEDIDAS_Y_PLANOS_AUTOMATICA`
- `16_ENTREVISTAS_Y_TRANSCRIPTS_AUTOMATICA`
- `17_BIWO_Y_OPERACION_AUTOMATICA`
- Existing legal Rondas 1-9 remain the legal intake source; do not duplicate them.
- `18_AUTOPILOT_CONTROL` holds the evidence ledger/control sheet.
- `19_RELEASE_PACKAGES` holds controlled release packages.

Each intake root uses `00_ENTRADA`, `01_CLASIFICADOS` and `02_REVISAR`.

## 15 expert review lenses
1. Prompt Systems Architect
2. Agent Orchestration Engineer
3. Knowledge & Records Architect
4. Computer Vision / Evidence Lead
5. Industrial / Lean Engineer
6. Taxidermy / Manufacturing Process SME
7. Facility / EHS Engineer
8. Mexico Regulatory Counsel
9. Corporate & Contracts Counsel
10. Privacy & Security Architect
11. ERP / Finance Traceability Lead
12. Quality / CAPA Auditor
13. Editorial / Information Design Director
14. DevOps / Release Engineer
15. Automation Reliability / SRE Lead

Dispatch only the needed lenses per item; R1/high-risk conclusions require a domain owner plus independent checker.

## Tool catalog
1. Source Saturator
2. Change Detector
3. Intake Router
4. Duplicate Guard
5. Photo Evidence Classifier
6. Document Evidence Classifier
7. Evidence Ledger
8. Privacy Gate
9. Stale Evidence Detector
10. Contradiction Detector
11. Process Gap Engine
12. Area/Workshop Gap Engine
13. Layout Provenance Engine
14. Material Flow Engine
15. Supply Chain Engine
16. BIWO Reconciliation Engine
17. Legal Matrix Engine
18. Wildlife Trade Engine
19. Maintenance/Metrology Engine
20. Training Qualification Engine
21. ClickUp Synchronizer
22. Gap Prioritizer
23. Evidence Request Generator
24. Interview Generator
25. Change Impact Mapper
26. Decision Log
27. Master Integrator
28. Annex Compiler
29. HTML/PDF Consistency Checker
30. Preservation Prosecutor
31. Anti-LLM Editorial Gate
32. Release Auditor
33. Rollback/Changelog Tool
34. Idempotency Guard
35. Dead-letter / REVIEW queue
36. Watchdog
37. Metrics
38. Human Approval Gate

## Evidence contract
Every evidence item records: source ID/revision, evidence ID, area/process/requirement targets, confidence, what it proves, what it does not prove, sensitivity, verification status, ClickUp target, master target and next action.

Verification states only: `NOT_CHECKED`, `PARTIAL`, `FAILED`, `VERIFIED`, `EXTERNAL_DEPENDENCY`, `APPLICABILITY_PENDING`, `JUSTIFIED_NA`.

## Risk tiers
- R1: legal/regulatory, fire/life safety, wildlife/CITES/SENASICA/TRACES, hazardous chemicals/waste, money, customer property, critical formulas/parameters.
- R2: operations, quality, layout, maintenance, training, inventory, delivery.
- R3: editorial/presentation/noncritical metadata.

R1 is never closed from one photo or secondary checklist. Current primary provenance + independent check are required where applicable.

## Release rule
Final release requires all of the following gates to pass: preservation, provenance, shared-ID integrity, technical/process coherence, photo semantic match, regulatory source status, privacy, anti-LLM editorial quality, HTML/print consistency and critical open-action check.

Verdicts only: `PASS - LIBERABLE` or `BLOCKED - NO LIBERAR`.
