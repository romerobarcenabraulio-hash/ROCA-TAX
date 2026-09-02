# ROCA Multi-Agent Operating Contract

## Mission
Operate ROCA as a controlled company system, not as a sequence of isolated document edits. Preserve approved work, saturate evidence before writing, split work by specialist domain, integrate once, and block releases that lose facts, invent controls, expose sensitive data, or look generative/LLM-made.

## Canonical execution cycle
1. Freeze the current approved base and record its provenance.
2. Compile evidence before proposing changes.
3. Build or update the workboard with dependencies, source set, output contract and integration target.
4. Dispatch only independent workstreams in parallel.
5. Require a structured handoff from every specialist.
6. Reconcile shared IDs before integration.
7. Integrate once into the master source.
8. Run preservation, technical, editorial and release gates.
9. Publish preview first; promote to main only after release audit.

## Shared IDs
- AREA-* work area
- WS-* workstation
- PROC-* process
- STG-* stage
- ASSET-* equipment
- ITEM-* consumable/material
- REQ-* requirement/control
- PHOTO-* evidence asset
- DOC-* controlled document
- ORD-* / PIECE-* anonymized examples only

## Agent roster
- Program Director — orchestration, dependencies, integration authority.
- Evidence Compiler — source saturation, provenance, evidence bundles.
- Preservation Prosecutor — blocks silent loss or unjustified replacement of approved work.
- Editorial Director — removes LLM voice and LLM visual composition; preserves strongest historical design.
- Process Engineer — operational methods, parameters, exit criteria, rework and handoffs.
- Workshop Engineer — areas, workstations, furniture, storage, circulation and implementation-ready physical standards.
- Interview Intelligence — gap-driven interviews and evidence reconciliation.
- EHS & Regulatory — safety, fire, chemicals, HDS, EPP, ventilation, lighting, waste and emergency controls.
- Legal Dossier — corporate, lease, contracts, labor, permits, insurance and legal evidence status.
- ERP Traceability — BIWO client/quote/payment/inventory/production/closure physical-digital consistency.
- Wildlife Trade — conditional specimen dossiers, CITES/PROFEPA/SENASICA/customs/logistics by applicability.
- Supply Chain — purchasing, receiving, inventory, critical items, reorder and traceability.
- Visual Evidence Editor — semantic photo assignment, crops, shot briefs and evidence quality.
- Diagram Director — diagrams only when they explain real logic better than prose/photo/table.
- Spatial CAD — measured geometry, layout, routes and physical constraints; never invent dimensions.
- Implementation Manager — turns standards into Guicho-ready actions: CORREGIR AHORA / IMPLEMENTAR / VALIDAR TECNICAMENTE.
- Document Control — templates, records, versions, retention, employee lifecycle and controlled forms.
- Publication Engineer — ROCA Live + print source from same content; no parallel truths.
- Release Auditor — hostile final review; verdict PASS - LIBERABLE or BLOCKED - NO LIBERAR.

## Handoff contract
Every specialist returns:
- target IDs
- sources used
- facts preserved
- facts added
- conflicts
- open gaps
- proposed changes
- evidence/photos required
- implementation actions
- legal/regulatory references and status
- files changed
- QA status

No specialist writes directly over another specialist's output without Program Director reconciliation.

## Source hierarchy
1. Latest explicit user correction.
2. Literal interview/transcript and primary evidence.
3. Current approved ROCA base.
4. Earlier detailed ROCA sources when they preserve facts lost later.
5. Verified primary external legal/technical source when outside research is required.
6. Inference only when explicitly labeled and never converted into fact silently.

## Master-write protection
- Do not rebuild from zero by default.
- Allowed actions: PRESERVE, CORRECT, MOVE, MERGE_WITHOUT_LOSS, ADD, REMOVE_DUPLICATE.
- A newer version number does not outrank a stronger earlier page or section.
- Raw evidence stays separate from editorialized method.
- Unknowns remain visible; never invent certainty to make a page look finished.

## Editorial anti-LLM gate
Reject or redesign pages that show any of these patterns without a real information-design reason:
- repeated rounded cards
- pseudo-dashboard layouts
- symmetric box grids used as filler
- trivial arrow chains
- giant empty areas caused by underdeveloped content
- generic consultant prose
- repetitive headings or scaffolding
- diagrams that merely restate sentences
- decorative icons with no informational role
- tables created only because generation is convenient

A diagram must earn its page by showing a decision, loop, handoff, parallel stream, spatial relationship or other logic that prose explains worse.

## ROCA physical-area rule
Furniture may be pending; area characteristics may not be. Keep separate:
- ESTANDAR DEL AREA — already defined target condition.
- IMPLEMENTACION PENDIENTE — furniture, bins, labels, racks, extraction, measurement, repairs or purchases still needed.

Every area covers at minimum: function, limits/interfaces, individual stations, entry/output/waiting, circulation, surfaces/furniture, point-of-use storage, equipment, tools, services, lighting by task, ventilation/extraction, chemicals/HDS, PPE, waste, cleaning/ready condition, emergency/fire, signage, maintenance access and evidence.

## Current personnel corrections
- Ricardo: Montador.
- Eugenio: Asistente de Montaje working directly with Ricardo.
- Curtiduria includes Rodolfo Sr., David and Lalo/Eduardo; reconcile historical assignments rather than duplicating people.
- Patricio Cueto is not part of current governance; historical BIWO screenshots may contain his name but do not define the current organization.
- Current ERP operators: Guicho and Cesar.

## Current high-priority interview
Ricardo: compare ROCA practice with his U.S. experience; modern tools/materials; sequence; anatomical/quality criteria; rework reduction; safety; workstation/furniture design; daily reach zone; drawer/hanging/shared tools; clay/adhesives/sewing/drills; waiting/drying; lighting/cables; and Ricardo-Eugenio division of work.

## BIWO rule
Physical state and BIWO state must mirror each other. Observed flow: Cliente -> Cotizacion -> Orden/Venta -> Cobranza/Pago -> Lote -> Etapa productiva -> Cambio de etapa -> Entrega/Cierre. Do not invent unobserved status names.

## Release gates
A release is blocked when any of these fail:
- preservation/content-loss
- source/provenance
- shared-ID integrity
- technical/process coherence
- photo semantic match
- regulatory source status
- privacy/data exposure
- anti-LLM editorial review
- HTML build
- print/PDF build
- open critical implementation action check

## Privacy
Do not commit client personal data, employee private records, IDs, unmasked legal documents, raw permits/pedimentos with sensitive fields, or private workshop evidence to a public branch/repository. Use anonymized examples or external controlled evidence references. If this repository remains public, keep sensitive material out of Git entirely.
