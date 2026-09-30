#!/usr/bin/env python3
import csv, json, sys
from pathlib import Path

ROOT=Path(__file__).resolve().parents[2]
LOCK=ROOT/"compliance-cockpit"/"ROCA_CANONICAL_MODULE_LOCK.json"
GATE=ROOT/"compliance-cockpit"/"ROCA_MODULE_GATE_SYNC_CANON.csv"
HEALTH=ROOT/"compliance-cockpit"/"ROCA_MODULE_HEALTH_CANON.csv"
ADMISSION=ROOT/"compliance-cockpit"/"ROCA_MODULE_ADMISSION_LEDGER_CANON.csv"

def rows(path):
    with path.open(encoding="utf-8-sig",newline="") as f:
        return list(csv.DictReader(f))

def fail(msgs):
    for m in msgs:
        print("ERROR:",m)
    raise SystemExit(1)

missing=[str(p) for p in [LOCK,GATE,HEALTH,ADMISSION] if not p.exists()]
if missing:
    fail(["missing input "+x for x in missing])

lock=json.loads(LOCK.read_text(encoding="utf-8"))
mods={m["path"].split("/")[0]:m for m in lock["modules"]}
gate={r["module"]:r for r in rows(GATE)}
health={r["module"]:r for r in rows(HEALTH)}
admission={r["dir"]:r for r in rows(ADMISSION)}
errors=[]

for name,m in mods.items():
    g=gate.get(name)
    if not g:
        errors.append(f"{name}: missing gate-sync")
        continue
    if g["ledger_path"]!=m["path"]: errors.append(f"{name}: gate path mismatch")
    if int(g["ledger_rows"])!=int(m["rows"]): errors.append(f"{name}: gate row mismatch")
    if g["proof_sha256"]!=m["sha256"]: errors.append(f"{name}: gate sha mismatch")

    h=health.get(name)
    if not h:
        errors.append(f"{name}: missing health")
    else:
        expected_gate=g["canonical_gate_path"].split("/")[-1]
        if h["ledger"]!=m["path"]: errors.append(f"{name}: health path mismatch")
        if int(h["rows"])!=int(m["rows"]): errors.append(f"{name}: health row mismatch")
        if h["sha256"]!=m["sha256"]: errors.append(f"{name}: health sha mismatch")
        if h["gate"]!=expected_gate: errors.append(f"{name}: health gate mismatch")

    if name=="ADMIN_FORM":
        if name in admission:
            errors.append("ADMIN_FORM: must remain outside legal/source admission")
        continue

    a=admission.get(name)
    if not a:
        errors.append(f"{name}: missing admission")
    else:
        expected_gate=g["canonical_gate_path"].split("/")[-1]
        if a["module_path"]!=m["path"]: errors.append(f"{name}: admission path mismatch")
        if a["quality_gate"]!=expected_gate: errors.append(f"{name}: admission quality gate mismatch")
        if name in {"SLP_ENV_IMPACT","SLP_MUN_FUNCTION"}:
            if a["admission"]!="ADMITTED_RECONSTRUCTED":
                errors.append(f"{name}: reconstructed admission label lost")
            if "_SOURCE_GATE_RECON_" not in a["source_gate"]:
                errors.append(f"{name}: reconstructed source gate marker lost")
        elif a["admission"]!="ADMITTED":
            errors.append(f"{name}: unexpected admission={a['admission']}")

if set(mods)!=set(gate):
    errors.append("module set mismatch: lock vs gate-sync")
if set(mods)!=set(health):
    errors.append("module set mismatch: lock vs health")
expected_admission=set(mods)-{"ADMIN_FORM"}
if set(admission)!=expected_admission:
    errors.append("module set mismatch: expected legal/source admission set")

if errors:
    fail(errors)

print(f"PASS derived-ledger integrity: {len(mods)} locked modules; {len(admission)} admitted source/legal modules; ADMIN_FORM internal-only")
