# ROCA TAXIDERMY — External capability stack

Fecha: 21 SEP 2026
Estado: WORKING CONTROL / NO LIBERADO

## Decision

No instalar o copiar todo lo disponible. ROCA necesita la pila minima que cierre huecos reales sin inflar contexto, dependencias ni documentos.

Criterios:
1. resuelve un hueco demostrado;
2. no duplica una skill ROCA existente;
3. puede integrarse sin cambiar la arquitectura editorial por capricho;
4. tiene una salida verificable;
5. no convierte una herramienta de software/compliance en una falsa declaracion legal.

## Adoptar ahora

| Capability | Public source | ROCA use | Decision |
|---|---|---|---|
| Project skill stack discipline | github/awesome-copilot · agent-skill-stack | Elegir la combinacion minima de skills por trabajo y evitar context rot | ADAPT |
| Quality playbook | github/awesome-copilot · quality-playbook | Requirements, coverage, adversarial review, regression evidence | ADAPT |
| Browser QA | microsoft/playwright-mcp | Navegacion real, accessibility tree, screenshots, interaction and console QA | ADOPT VIA MCP |
| Prose lint | vale-cli/vale | Enforce ROCA voice, ban meta/LLM/consultant language and unsafe completion wording | ADOPT |
| Paged HTML | pagedjs/pagedjs | Stable browser-to-print pagination from same HTML source | PILOT |
| Visual PDF diff | vslavik/diff-pdf | Detect unintended print regressions between checkpoints | ADOPT AT RELEASE |
| Link QA | lycheeverse/lychee | Broken internal/external references in HTML/Markdown | ADOPT AT RELEASE |
| Structured control inheritance | opencontrol/schemas | One canonical control with references instead of copy/paste | ADAPT MODEL ONLY |
| Evidence-as-tests | ComplianceAsCode/auditree-framework | Treat selected repeatable evidence checks as executable gates | ADAPT MODEL ONLY |
| Structured assessment model | usnistgov/OSCAL | Inspiration for machine-readable requirements/evidence/status provenance | REFERENCE ONLY |
| BPMN web toolkit | bpmn-io/bpmn-js | Use only for processes whose decision/loop complexity earns BPMN | PILOT IF NEEDED |
| Typesetting alternative | vivliostyle/vivliostyle-cli | Alternative if Paged.js/browser print cannot deliver stable publication | HOLD |

## Do not migrate to these now

- Quarto: strong publishing system, but migration would create another source format and unnecessary churn.
- DITA / Antora / MkDocs: valuable documentation systems, but adopting them now would create infrastructure before ROCA content architecture is stable.
- Sequential-thinking MCP: does not close an evidence or artifact gap; thinking structure already exists in ROCA governors.
- Firecrawl MCP: built-in web research is currently sufficient; request only if official sources become inaccessible.
- Miro: useful for workshops/maps, not required for the controlled master.
- Exa: optional research accelerator, not a current blocker.

## Installed ROCA skill kernel

Core governors currently available:
- roca-audit-architect
- roca-orchestrator
- roca-autopilot
- roca-compendium-architect
- roca-process-forge
- roca-manual-integrator
- roca-preaudit-readiness
- roca-zero-defect-governor
- roca-completion-gate
- roca-publication-sanitizer
- roca-visual-flock
- roca-finance-control-forge
- roca-fast-loop
- zero-bullshit-only-work-and-truth
- independent-judgment
- consideration
- socratic
- intuitive-communication

## Gaps proven by current architecture

The orchestrator names several specialists that are not currently installed. Do not recreate all of them blindly.

Highest-priority missing capabilities:
1. source-integrity audit before destructive consolidation;
2. integral workshop-area standard compiler;
3. artifact release engineering for HTML/PDF/browser/print;
4. later, only when used: layout, photo evidence, material flow, maintenance, training, document control, CAPA, regulatory orchestration and metrology.

The first three now exist as project-local skills under .github/skills and as installable skill packages outside the repo.

## Publishing strategy

Current preference:
HTML/CSS remains the controlled publication source.

Pilot order:
1. ordinary browser rendering;
2. Playwright browser QA;
3. Paged.js for paginated print if current CSS print is unstable;
4. diff-pdf against approved checkpoint;
5. Vivliostyle only if Paged.js cannot meet the publication requirement.

Do not introduce a second editorial authoring system unless a demonstrated problem requires it.

## Compliance/control strategy

Use the useful ideas from OpenControl, OSCAL and Auditree without importing their cybersecurity vocabulary as ROCA doctrine.

ROCA model:
- REQ-* = requirement/control;
- canonical requirement statement lives once;
- external source/version/applicability stay in Assurance;
- operator action lives in its area/process;
- EVID-* proves only the specific observable claim;
- executable checks may verify deterministic conditions;
- no automated check certifies legal compliance.

## MCP request

Highest ROI missing MCP: Microsoft Playwright MCP.

Purpose:
- inspect the actual ROCA HTML as a user sees it;
- navigate every section;
- capture accessibility snapshots and screenshots;
- exercise buttons/modes/anchors;
- find console/runtime errors;
- build reproducible visual QA before release.

Standard server command:
npx @playwright/mcp@latest

This MCP is not required to continue content reconciliation, but it becomes required before calling browser QA complete.
