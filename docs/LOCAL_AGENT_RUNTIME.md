# Local Agent Runtime for ROCA

## Objective
Run the ROCA agent system from a local terminal/IDE so repetitive analysis, QA, builds and parallel specialist work can execute against the repository while preserving the same operating contract as ChatGPT.

## Recommended local runtime
Use Codex Local through the Codex CLI or the Codex IDE extension. The repository-level `AGENTS.md` is the governing instruction file for all local work.

## Working pattern
1. Clone the repository and checkout `roca-live-bootstrap`.
2. Launch Codex from the repository root.
3. Treat `AGENTS.md` as the root contract.
4. Create work in isolated branches by specialist or work packet.
5. Never let multiple specialists edit the same master module concurrently.
6. Require each specialist branch to write a handoff packet before merge.
7. Run deterministic QA/build scripts before opening a PR.
8. Use preview deployments for editorial review before promotion.

## What local agents are best at
- source mining and parameter extraction
- cross-file consistency checks
- preservation diffs
- anti-LLM linting
- HTML/CSS build work
- print/PDF build checks
- ID integrity
- generating implementation workboards from structured standards
- preparing interview gap lists
- parallel specialist analysis on non-overlapping modules
- repeating the same QA after every change

## What still requires human/program-director judgment
- deciding between conflicting workshop testimony
- deciding whether an older page is editorially stronger
- accepting a new method as the ROCA standard
- legal applicability when evidence is incomplete
- deciding furniture ergonomics without measurements/operator confirmation
- approving public disclosure of sensitive or proprietary material
- final editorial taste and release authorization

## Agent worktree model
For heavy parallel work, use separate branches/worktrees such as:
- agent/evidence-compiler
- agent/preservation
- agent/editorial
- agent/process-montaje
- agent/workshop-montaje
- agent/implementation
- agent/publication

All specialists merge through Program Director review. Do not use a shared working tree for concurrent autonomous edits.

## State files
Keep machine-readable state under `control/` or `data/`:
- workboard.csv
- evidence-register.csv
- preservation-ledger.csv
- roster.csv
- document-master-register.csv
- implementation-actions.csv
- requirement-register.csv

Agents read state; they do not infer a new truth from prose when a controlled register exists.

## Local versus chat division
Local runtime owns throughput, repetition, builds and deterministic inspection. ChatGPT conversation remains the strongest place for live interviews, ambiguous decisions, corrections from Braulio, connected Drive/ClickUp/BIWO context and final program-direction decisions. The two environments share state through Git rather than relying on conversational memory alone.

## Non-negotiable
A local agent is not automatically better because it is autonomous. It becomes better only when its context, state, tests, evidence hierarchy and release gates are stricter than an ad-hoc chat. Autonomy without those controls is specifically prohibited for ROCA.
