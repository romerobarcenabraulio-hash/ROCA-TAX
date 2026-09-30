#!/usr/bin/env node
import fs from "node:fs";
import vm from "node:vm";

const read=p=>fs.readFileSync(p,"utf8");
const errors=[];
const ctx={window:{}};
vm.createContext(ctx);
vm.runInContext(read("department-data.js"),ctx,{filename:"department-data.js"});
vm.runInContext(read("area-standard-data.js"),ctx,{filename:"area-standard-data.js"});

const depts=ctx.window.ROCA_DEPARTMENTS||{};
const phys=ctx.window.ROCA_AREA_PHYSICAL_STANDARD||[];
if(Object.keys(depts).length!==10) errors.push("expected 10 departments");

const expectedCounts={
  "area-curtiduria":36,"area-montaje":50,"area-retoque":49,"area-bases":52,"area-fmr":38,
  "area-recepcion":20,"area-carpinteria":35,"area-soldadura":26,"area-blanqueado":25,"area-soporte":24
};

const holdDefs=new Map();
for(const [areaId,d] of Object.entries(depts)){
  const area=Array.isArray(d.area)?d.area:[];
  const areaAudit=Array.isArray(d.areaAudit)?d.areaAudit:[];
  if(area.length!==areaAudit.length) errors.push(`${areaId}: area/areaAudit parity mismatch`);
  const ids=[
    ...areaAudit.map(x=>x.id),
    ...(d.method?.controls||[]).map(x=>x.id),
    ...(d.auditCriteria||[]).map(x=>x.id)
  ].filter(Boolean);
  if(new Set(ids).size!==ids.length) errors.push(`${areaId}: duplicate audit/control ids`);
  const physical=phys.filter(r=>r.areas==="ALL"||(Array.isArray(r.areas)&&r.areas.includes(areaId))).length;
  const total=area.length+(d.method?.controls||[]).length+(d.auditCriteria||[]).length+physical;
  if(total!==expectedCounts[areaId]) errors.push(`${areaId}: criteria count ${total} != ${expectedCounts[areaId]}`);
  for(const h of d.implementationHolds||[]){
    if(holdDefs.has(h.id)) errors.push(`duplicate hold id ${h.id}`);
    holdDefs.set(h.id,{area:areaId,text:h.text||""});
  }
}

function parseCsv(text){
  const lines=text.trim().split(/\r?\n/);
  const head=lines.shift().split(",");
  return lines.filter(Boolean).map(line=>{
    const vals=line.split(",");
    return Object.fromEntries(head.map((h,i)=>[h,vals[i]||""]));
  });
}
const holdRows=parseCsv(read("ops/control/ROCA_DEPARTMENT_HOLD_STATUS_V1.csv"));
const holdStatus=new Map(holdRows.map(r=>[r.hold_id,r]));
if(holdDefs.size!==83) errors.push(`defined holds ${holdDefs.size} != 83`);
if(holdRows.length!==83) errors.push(`hold status rows ${holdRows.length} != 83`);
for(const [id,h] of holdDefs){
  const s=holdStatus.get(id);
  if(!s) errors.push(`${id}: missing hold status row`);
  else if(s.area!==h.area) errors.push(`${id}: hold area mismatch`);
}
for(const id of holdStatus.keys()) if(!holdDefs.has(id)) errors.push(`${id}: orphan hold status row`);

if(holdDefs.has("CUR-HOLD-01")) errors.push("obsolete CUR-HOLD-01 still defined");
const alum=holdDefs.get("CUR-HOLD-07")?.text||"";
if(!/calculador operativo/i.test(alum)||!/segunda adici[oó]n/i.test(alum)) errors.push("CUR-HOLD-07 stale ALUM-Tan wording");

const engine=read("audit-engine.js");
if(!engine.includes("!==\'NONCONFORMING\'")&&!engine.includes("!==\"NONCONFORMING\"")) errors.push("audit engine no longer filters dynamic implementation to NONCONFORMING");
if(!engine.includes("localStorage")) errors.push("audit state persistence missing");

const audit=read("audit-data.js");
if(!audit.includes("NO VERIFICADO")||!audit.includes("NONCONFORMING")) errors.push("audit status contract missing");

const impl=read("generated/roca-fast-track/implementation.html");
for(const marker of [
  "NO VERIFICADO</b> pertenece a AUDITORÍA",
  "normalizeImplementationArea",
  "CLOSED","CANCELLED",
  "dynamicImplementationItems",
  "operational_calculator_release=BLOCKED"
]) if(!impl.includes(marker)) errors.push(`implementation marker missing: ${marker}`);

if(errors.length){
  errors.forEach(e=>console.error("ERROR:",e));
  process.exit(1);
}
console.log(`PASS audit/implementation flow: ${Object.keys(depts).length} departments; ${holdDefs.size} holds; no stale formic hold; ALUM-Tan operational block preserved`);
