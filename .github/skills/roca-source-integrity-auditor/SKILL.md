---
name: roca-source-integrity-auditor
description: Source-integrity and anti-loss auditor for ROCA Taxidermy. Use when reconciling old HTML/PDF/manual versions, interviews, Drive evidence, BIWO, ClickUp, legal files, or GitHub branches; before moving, merging, summarizing, replacing, or deleting ROCA content; and whenever a claim such as preserved, migrated, recovered, complete, or exact could be made. Builds section-level provenance, detects silent loss and contradictions, assigns canonical homes, and blocks unsupported source hierarchy decisions.
---

# ROCA Source Integrity Auditor

Treat ROCA as a multi-source evidence system. No single file wins globally.

## Mandatory workflow

1. Freeze the target branch/artifact and record its SHA/version/date.
2. Enumerate every materially relevant source before editing.
3. Build a section ledger with:
   `ID | SUBJECT | SOURCE | LOCATOR | DATE/REV | AUTHORITY | FACTS | CONFLICTS | CANONICAL_HOME | ACTION | PROOF`.
4. Classify every planned change as exactly one of:
   `PRESERVE`, `CORRECT`, `MOVE`, `MERGE_WITHOUT_LOSS`, `ADD`, `REMOVE_DUPLICATE`, `HOLD_PENDING_EVIDENCE`.
5. For `REMOVE_DUPLICATE`, name the surviving canonical location. If there is no named survivor, block deletion.
6. For conflicts, apply source precedence:
   - latest explicit user correction;
   - primary evidence / literal interview / current official source;
   - strongest previously approved ROCA section;
   - older detailed source that preserves facts lost later;
   - inference only if visibly labeled.
7. Compare source and destination after writing. Search specifically for unexplained losses, compressed-away parameters, missing people/stations, missing evidence requirements, and changed statuses.
8. Re-read the destination after the write. A successful commit is not verification.

## Required outputs

Return a compact handoff:
- frozen target and SHA/version;
- sources actually inspected;
- facts preserved;
- facts corrected;
- facts moved/merged;
- unresolved conflicts;
- unexplained losses;
- files changed;
- proof of destination re-read;
- verdict: `PASS - SOURCE INTEGRITY` or `BLOCKED - SOURCE INTEGRITY`.

## ROCA-specific guards

- The v22.1 editable HTML, the 391-page master, the 367-page master, ROCA Live, interviews, Drive, BIWO and ClickUp have different strengths. Never crown one as global truth without evidence.
- Methodology derived from interviews is generally stronger than generic later summaries; preserve detailed supported stages, parameters, tools, materials, rework and handoffs.
- Do not turn ClickUp status into technical truth.
- Do not turn a photo into proof of legal compliance, training, calibration, ownership or current validity.
- Keep sensitive originals in controlled evidence storage; only sanitized status/provenance belongs in public Git history.

## Stop rule

Block integration when a source needed to decide a material conflict is not available. Continue all non-dependent work and state the exact missing source.
