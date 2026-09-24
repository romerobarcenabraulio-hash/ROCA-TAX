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

## PHYS-FIRE-00 · Fire-risk classification thresholds

NOM-002-STPS-2010 uses these individual high-risk thresholds:
- constructed area: >= 3000 m2;
- flammable gases: >= 3000 L;
- flammable liquids: >= 1400 L;
- combustible liquids: >= 2000 L;
- combustible solids including furniture: >= 15000 kg;
- pyrophoric/explosive materials: any quantity.

Below all individual thresholds does not by itself close the classification: complete and retain the official combined calculation and maximum annual inventories. Recalculate when maximum inventories change.

ROCA register: ops/control/ROCA_FIRE_RISK_CLASSIFICATION_V1.csv

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



## PHYS-STORAGE-01 · Storage / racks / material handling

Applicability:
- NOM-006-STPS-2023 is conditional: use it where materials are stored/handled with machinery.
- Manual-only storage still follows the permanent ROCA stability, circulation and recoverability standard plus other applicable rules.

Worker-facing standard when the machinery-storage trigger applies:
- storage has a defined zone, order/cleanliness and firm floor suitable for the load;
- racks/platforms have known capacity and are not used when damaged;
- maximum stack height/capacity is defined from the material, rack/platform and handling method;
- heavier material is placed lower;
- stored material does not block illumination, ventilation, emergency routes, alarms or fire equipment;
- aisle width is determined from the actual handling technique, the largest machinery/load envelope and the widest material/container handled;
- relevant capacity/height/EPP/route/emergency signage remains visible;
- racks/platforms are inspected and maintained; modifications are not improvised.

Primary basis:
- NOM-006-STPS-2023, current from 2024-09-03 for workplaces within its machinery-handling scope.
- NOM-001-STPS-2008 / NOM-002-STPS-2010 / NOM-026-STPS-2008 as applicable for premises, emergency access and signs.


## PHYS-MACHINE-01 · Machinery guards / emergency stop

Worker-facing standard:
- a machine with an accessible hazardous point or transmission has an effective guard/device; the guard is fixed/resistant, allows the needed work and does not create a new hazard;
- unauthorized access to the danger zone is prevented;
- start controls are protected against accidental operation;
- emergency-stop/safety devices are accessible and operable where the machine requires them;
- damaged/missing guard or failed safety device means FUERA DE SERVICIO until corrected;
- maintenance that requires hazardous-energy isolation follows a controlled energy-blocking method and leaves a maintenance record.

Primary basis: NOM-004-STPS-1999.

## PHYS-ELECTRICAL-01 · Electrical installations / maintenance

Worker-facing standard:
- panels, disconnects and electrical access points remain identifiable and unobstructed;
- cables, plugs, extensions and chargers are not left damaged, exposed to water/process splash or improvised in circulation;
- maintenance on electrical installations is performed by trained personnel under the applicable safety procedure;
- electrical-maintenance tools/protective equipment are inspected and maintained;
- work records identify responsible person, work performed, result and date.

Primary basis: NOM-029-STPS-2011 for electrical-maintenance activities. Normal electrical-installation design/utilization requirements remain in the applicable electrical code layer; do not use NOM-029 as a substitute for design.

## PHYS-NOISE-01 · Noise

Worker-facing standard:
- noisy equipment/stations are identified by real operation, not by assumption;
- where recognition indicates relevant exposure, measurement/evaluation is performed under normal operation;
- controls are selected from measured exposure; hearing protection is not used as a substitute for a needed engineering/control decision.

Implementation trigger:
NOM-011 recognition specifically identifies areas at or above 80 dB(A) for octave-band/exposure evaluation steps. Do not label an area solely from a phone app or subjective loudness.

Primary basis: NOM-011-STPS-2001.

## PHYS-MANUALLOAD-01 · Manual handling

Worker-facing standard:
- heavy/bulky pieces have a defined route and enough maneuvering space;
- the task defines whether one person, team assistance or mechanical aid is used before lifting/moving;
- storage height/position avoids unnecessary high/reach/twist handling when reasonably controllable;
- the worker does not improvise a lift when weight, geometry, stability or route exceeds the planned method.

Primary basis: NOM-036-1-STPS-2018 where manual-load handling risk is present.

## PHYS-PRESSURE-01 · Compressor / pressure equipment

Worker-facing standard:
- compressor/receiver and other pressure equipment have identifiable make/model/plate and are accessible for inspection/service;
- hoses, regulators, drains, safety devices and connections are in usable condition;
- equipment is not categorized under NOM-020 by appearance: capture plate/design/operating data first and determine scope/category in Assurance;
- failed/leaking/damaged pressure equipment is removed from normal service until corrected.

Primary basis: NOM-020-STPS-2011, conditional on actual pressure-equipment data and scope.
