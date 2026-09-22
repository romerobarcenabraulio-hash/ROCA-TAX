---
name: roca-workshop-standard-forge
description: Build and reconcile integral ROCA Taxidermy workshop-area standards. Use for any ROCA area, workstation, furniture, storage, utilities, lighting, ventilation, chemicals, waste, ergonomics, emergency access, maintenance access, piece identity, evidence plan, implementation brief, or area audit. Converts evidence and operational knowledge into one non-duplicative area book while keeping methodology, standards, evidence and regulatory provenance in their proper homes.
---

# ROCA Workshop Standard Forge

Build the area as an operating system, not as a checklist and not as methodology alone.

## Canonical area book

Use this order unless the area is a support space that genuinely needs less:

0. Identity and local governance
1. Physical work area
2. Methodology
3. Tools, equipment and asset care
4. Materials, chemicals, consumables and material flow
5. People, competence and authorization
6. Control, records, BIWO events and evidence
7. Area audit

## Build sequence

1. Saturate existing ROCA sources before drafting.
2. Establish the area's function, boundaries, upstream/downstream handoffs, people/stations and real operations.
3. Separate:
   - `TARGET_STANDARD`: required condition;
   - `CURRENT_EVIDENCE`: what is actually demonstrated now;
   - `IMPLEMENTATION_ACTION`: physical change still needed;
   - `EXTERNAL_REQUIREMENT`: source/applicability managed by Assurance.
4. Put each fact in one canonical home. Reference it elsewhere instead of repeating full prose.
5. Translate external requirements into short observable workshop actions. Keep legal citations and applicability in the management layer.
6. Require an individual workstation block for every person who actually has an assigned station; never replace known stations with a generic example.
7. For measurements, record location/plane, value, date, instrument and provenance. Never invent dimensions or readings.
8. Define the exact photo/record needed to prove each material condition.
9. Build the audit only after the standard. The audit may verify but never create a new requirement.

## Minimum physical coverage

Cover when applicable:
- function and limits;
- piece/material entry, output and waiting;
- circulation and access;
- individual stations;
- surfaces and furniture;
- storage, labels and point-of-use access;
- tools and fixed/shared equipment;
- ergonomics and handling;
- lighting at the real task plane;
- ventilation/extraction at the actual source;
- electrical, water, drainage, compressed air or other services;
- chemicals/HDS and incompatible storage;
- PPE by task/risk, not generic area PPE;
- waste, recoverables and destination;
- cleaning/reset condition;
- emergency/fire access and signage;
- maintenance access;
- piece identity and next action;
- required evidence.

## Editorial rule

Write direct target conditions and operator actions. Avoid consultant prose, generic safety slogans, repeated cards, legal-text dumping and visible internal schemas.

## Output contract

Return:
- area ID and scope;
- source set;
- canonical area-book content or patch;
- requirements/evidence IDs touched;
- implementation actions split into `CORRECT_NOW`, `IMPLEMENT`, `VALIDATE_TECHNICALLY`;
- gaps/conflicts;
- exact evidence request;
- integration target;
- QA status.
