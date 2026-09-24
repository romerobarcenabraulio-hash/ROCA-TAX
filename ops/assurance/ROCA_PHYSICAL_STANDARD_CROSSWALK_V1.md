# ROCA TAXIDERMY — Physical Standard Crosswalk V1

Status: CONTROL PREPARED / legal applicability and field closure remain separate.

Purpose: keep the legal/normative basis out of worker-facing area prose while preserving the exact source behind each physical condition.

## Geometry source preserved from 391P P-00

| Zone | Source geometry |
|---|---:|
| Main area | 40 x 20 m = 800 m2 |
| Moldes west | 10 x 15 m = 150 m2 |
| Exhibition room | 11 x 6 m = 66 m2 |
| Office | 10 x 4.5 m = 45 m2 |
| South warehouse | 16.5 x 6.7 m = 110.55 m2 |
| North warehouse A | 14 x 4 m = 56 m2 |
| North warehouse B | 14 x 4 m = 56 m2 |

Source: ROCA_MASTER_WEB_391P_SOURCE.pdf, P-00 master geometry page. Dimensions not shown in P-00 remain unmeasured.

## PHYS-FIRE-01 · Fire extinguishers

Worker-facing standard:
- extinguisher type matches the class of fire that can occur;
- visible, easy to reach and unobstructed;
- top of extinguisher no higher than 1.50 m above finished floor;
- protected from conditions that could damage it;
- location sign visible;
- actual travel path to the nearest extinguisher respects the applicable maximum distance.

Sizing basis:
- ordinary fire risk: at least 1 extinguisher per 300 m2 or fraction;
- high fire risk: at least 1 extinguisher per 200 m2 or fraction;
- travel distance limits: A/C/D 23 m; B ordinary 15 m; B high 10 m (15 m if mobile under the stated condition); K 10 m.

Do not derive final count from square metres alone. Fire-risk classification, fire class, layout and actual travel route can increase the count.

Primary basis: NOM-002-STPS-2010, current official STPS/DOF text and STPS informative guide.

## PHYS-EGRESS-01 · Evacuation routes and exits

Worker-facing standard:
- route is continuous, visible and free of obstacles;
- route direction is signalled;
- emergency lighting exists where the route requires it;
- from the farthest point, route-distance requirement is checked; if the applicable 40 m threshold is exceeded, evacuation to a safe place is demonstrated within 3 minutes;
- emergency-exit doors open in direction of flow, allow simple opening from inside and remain free of locks/obstacles during working hours;
- exit is identified and usable, not treated as storage.

Primary basis: NOM-002-STPS-2010.

## PHYS-SIGN-01 · Safety signs

Worker-facing standard:
- red identifies fire-fighting equipment / stop / prohibition as applicable;
- yellow identifies warning/delimitation;
- green identifies safe condition such as emergency exits, evacuation routes, first aid, emergency shower/eyewash;
- blue identifies mandatory action;
- signs remain visible and use the applicable geometric language and contrast.

Primary basis: NOM-026-STPS-2008.

## PHYS-LIGHT-01 · Task lighting

Worker-facing standard:
Measure at the real work plane under normal operation; the task, not the room name, selects the target.

Reference table from NOM-025-STPS-2008:
- exterior general circulation: 20 lux;
- interior general transit / low-movement storage / stairs / emergency lighting: 50 lux;
- circulation, waiting/rest rooms, store rooms/platforms: 100 lux;
- simple visual requirement / rough storage / reception-dispatch / compressor room / pailería: 200 lux;
- moderate detail / simple assembly / medium bench-machine / office / packing: 300 lux;
- clear detail / delicate machining / drawing / computing / laboratory: 500 lux;
- fine detail / precision painting and surface finishing / QC: 750 lux;
- high accuracy / complex small parts / fine polishing: 1000 lux;
- highly specialized very-low-contrast/small prolonged tasks: 2000 lux.

A historical ROCA number is not used automatically. Classify the actual visual task and measure the actual plane.

Primary basis: NOM-025-STPS-2008.

## PHYS-CHEM-01 · Chemicals and HDS

Worker-facing standard:
- every hazardous chemical/mix in use is identifiable;
- HDS is available for consultation where the chemical is handled;
- container/shelf/area signage matches HDS information and remains visible/legible;
- compatible storage is determined from actual products/HDS, not by colour or habit;
- damaged/unidentified containers do not remain in normal use.

Primary basis: NOM-018-STPS-2015 plus NOM-005-STPS-1998 where hazardous chemical handling/storage applies.

## PHYS-WELD-01 · Hot work

Worker-facing standard:
- combustible paper/cardboard/oils/chemicals are removed from spark/heat exposure or protected with an appropriate barrier;
- welding cables/connectors and equipment are usable;
- third parties are protected from arc/radiation/particles;
- ventilation responds to real process/material/fumes;
- fire response equipment is accessible.

Primary basis: NOM-027-STPS-2008 plus NOM-002-STPS-2010.

## Closure semantics

These translations are design standards, not evidence of compliance. Field status remains NOT_CHECKED until the exact condition is evidenced and independently reviewed where required.


## PHYS-VENT-01 · Ventilation / local extraction

Worker-facing standard:
- the control is selected from the real process, real chemical/product and actual exposure potential;
- if the HDS or exposure assessment calls for local exhaust, capture is placed at/near the generation point instead of relying only on general room ventilation;
- artificial ventilation stays operable and is included in inspection/maintenance;
- discharge does not simply move contamination to another occupied work area.

Implementation logic:
1. identify process and product;
2. read current HDS exposure-control section;
3. determine whether airborne contaminant/exposure evaluation is needed;
4. select source capture / enclosure / other technical control when justified;
5. verify operation and maintain the installed system.

Primary basis:
- NOM-010-STPS-2014 for occupational airborne chemical exposure evaluation/control.
- NOM-018-STPS-2015 for HDS control recommendations, including local exhaust when applicable.
- NOM-005-STPS-1998 for hazardous chemical handling/storage conditions and artificial-ventilation maintenance where applicable.

## PHYS-WASTE-01 · Waste / recoverables

Worker-facing standard:
- useful/recoverable material is not mixed with waste by convenience;
- each waste stream is identified from the actual material/process, not from appearance or bin colour;
- hazardous-waste determination follows the applicable identification/classification procedure before assigning a hazardous-waste label;
- containers and temporary locations prevent mixing, leakage, obstruction and loss of traceability;
- destination/removal evidence is kept when the applicable control requires it.

Implementation logic:
1. identify the process that generated the material;
2. identify product/material and its condition after use;
3. determine whether it is useful, recoverable, ordinary waste, special-management candidate or hazardous-waste candidate;
4. apply the corresponding controlled route and evidence.

Primary basis:
- NOM-052-SEMARNAT-2005 for hazardous-waste identification/classification.
- Current LGPGIR / regulation / applicable state or municipal route for the actual waste category.

