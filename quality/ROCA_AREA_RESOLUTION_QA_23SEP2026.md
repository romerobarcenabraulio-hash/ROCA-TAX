# ROCA TAXIDERMY — Area Resolution Rescue QA

Date: 23 SEP 2026  
Branch: `recovery/roca-area-resolution-rescue`  
Base frozen for this rescue: `e62dcb1c99b3e750a7728b4e8d14db502044f538`

## Scope

This QA covers the recovery of physical-area resolution into the existing V2 architecture. It does **not** declare field conformity, legal compliance, method release or full source saturation.

Principle: **RESCUE FIRST → ADAPT SECOND.**

## Sources actually used

- current V2 area books and common standard at the frozen base;
- 391-page master for detailed area/station/evidence treatment;
- 367-page master as historical cross-check;
- v24.7 Pre-Campo Rigor for richer common-area and physical-control language;
- later explicit user corrections for current roster/location precedence;
- current V2 roster/evidence/control files.

The raw `ROCA_TAXIDERMY_v22_1_Editable.zip` is still unavailable.

## OWNER verdict

PASS for the declared rescue scope.

Recovered into canonical homes:
- common area resolution and REQ-COM-16;
- Recepción physical intake/privacy/evidence;
- Curtiduría wet-zone/drainage/dosing/pH/stations/evidence;
- FMR mixing/racks/curing/Omar/evidence;
- Montaje preserved as strongest V2 pilot and aligned to common inheritance;
- Retoque solvents/compressed air/detail/stations/evidence;
- Bases stable assembly/PU/cutting/dust/evidence;
- Carpintería physical conditions without restoring obsolete location;
- Soldadura hot-work physical conditions/evidence without inventing method;
- Blanqueado heat/water/drainage/evidence;
- support spaces expanded into operational conditions and separate evidence.

## INDEPENDENT_CHECKER findings

1. **Evidence namespace drift — FOUND AND FIXED.**
   Local forms such as `CUR-EVID-03` and the generic `EVID-SUP-01` would have created a second evidence namespace. All area books, CAMPO and the closeout packet now use the canonical `EVID-*` plan.

2. **Field packet incompleteness — FOUND AND FIXED.**
   The canonical evidence plan had expanded to 38 IDs while the field packet still requested only the old compressed subset. The packet now explicitly requests all 38 IDs, including pH, drainage, compressed air, stations and support subspaces.

3. **Obsolete roster regression — NOT FOUND.**
   - Curtiduría current team remains Rodolfo Sr. / David / Lalo-Eduardo; Ricardo appears only in an explicit prohibition against reintroducing him.
   - Retoque retains Rodolfo Jr. / Emiliano / Valerio-Valentino / Señor Pez as the current known roster.
   - Bases explicitly prevents automatic duplication of the old Retoque/Bases assignments.
   - Carpintería explicitly states that the old Sr. Pez location is historical and not current.

4. **Method invention — NOT FOUND.**
   Soldadura remains method-not-released. Blanqueado does not invent unsupported chemicals/times/temperatures. Curtiduría retains the 6.0 L vs 6.4 L formic-acid conflict instead of normalizing it.

5. **Compliance overclaim — NOT FOUND in recovered area books.**
   Evidence language repeatedly separates visible condition from legal/technical sufficiency.

## EVIDENCE_PROSECUTOR verdict

PASS for the available-source rescue subset.

Evidence semantics preserved:
- photo ≠ calibration;
- photo ≠ legal classification of waste;
- extinguisher photo ≠ fire-system sufficiency;
- visible base stability ≠ structural capacity;
- roster membership ≠ competence/authorization;
- window/fan ≠ sufficient ventilation.

R1 technical/legal decisions remain outside this rescue unless supported by the appropriate current-source Assurance work.

## DETERMINISM review

PASS for the rescue layer.

Each recovered control states an observable condition or explicitly leaves an unresolved dependency. Historical examples are not promoted to universal rules. Planned Carpintería remains NOT_IMPLEMENTED. Person ↔ station mapping remains pending where field evidence is absent.

## SYSTEM_RECONCILER results

- Common inheritance: all ten production/support books use `REQ-COM-01..16`; no `REQ-COM-01..15` inheritance remains in this rescue set.
- Evidence plan: 38 IDs defined.
- Evidence references across area books + CAMPO + field closeout: 38 IDs referenced.
- Orphan evidence references: 0.
- Defined-but-unrequested evidence IDs: 0.
- Old Bases roster reactivated as current: 0.
- Old Carpintería Sr. Pez location reactivated as current: 0.
- Ricardo reactivated in current Recepción/Curtiduría roster: 0.

## RELEASE_ENGINEER / artifact check

- Branch remains separate from the PDF-reader branch.
- Modified files are limited to area books, common standard, field bridge, evidence plan, rescue ledger and QA artifacts.
- No private PDF bytes, customer permits, IDs or CITES files were added to the public repository.
- Zero-defect role ledger exists at `quality/ROCA_AREA_RESOLUTION_QUALITY_ROLES_23SEP2026.csv`.
- The skill gate was executed against that exact ledger content: **PASS — 13 rows checked / 0 findings**.

## Open dependencies

These are not failures of the rescue edit; they prevent release/compliance claims:
- raw v22.1 editable package not recovered;
- actual field evidence not yet received for most `EVID-*`;
- current person ↔ station mapping incomplete in several areas;
- Curtiduría recipe conflict 6.0 L vs 6.4 L formic acid unresolved;
- Valerio/Valentino name conflict unresolved;
- products/HDS, drainage, ventilation, equipment plates/condition and measurements still require field/current evidence;
- Soldadura technical method still requires interview/demonstration;
- Carpintería remains planned/not implemented.

## Verdicts

**ZERO-DEFECT ROLE GATE: PASS for this rescue workstream.**

**SOURCE-INTEGRITY — AVAILABLE-SOURCE RESCUE SUBSET: PASS.**

**GLOBAL SOURCE INTEGRITY: BLOCKED — raw v22.1 editable source is still missing.**

**RELEASE: BLOCKED — NO LIBERAR.**

The branch may proceed to review/integration as a controlled rescue patch, but it must not be described as final, complete, compliant or field-verified.
