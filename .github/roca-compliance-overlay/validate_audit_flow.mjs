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
  const areaIds=new Set(area.map(x=>x.id));
  const sourceIds=areaAudit.map(x=>x.sourceId);
  if(sourceIds.some(x=>!x)) errors.push(`${areaId}: areaAudit missing explicit sourceId`);
  if(new Set(sourceIds).size!==sourceIds.length) errors.push(`${areaId}: duplicate areaAudit sourceId`);
  for(const r of area) if(!sourceIds.includes(r.id)) errors.push(`${areaId}: area criterion ${r.id} missing audit binding`);
  for(const m of areaAudit) if(m.sourceId&&!areaIds.has(m.sourceId)) errors.push(`${areaId}: orphan audit sourceId ${m.sourceId}`);
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

// Behavioral contract: audit status drives IMPLEMENTAR exactly as intended.
// NOT_VERIFIED stays in AUDITORIA; NONCONFORMING creates one dynamic action;
// returning to CONFORMING removes that dynamic action while the permanent criterion remains.
const memory=new Map();
ctx.localStorage={
  getItem:key=>memory.has(key)?memory.get(key):null,
  setItem:(key,value)=>memory.set(key,String(value)),
  removeItem:key=>memory.delete(key),
  clear:()=>memory.clear()
};
vm.runInContext(engine,ctx,{filename:"audit-engine.js"});
const probeArea="area-curtiduria";
const probeRows=ctx.window.ROCA_AUDIT_ENGINE?.criteriaForArea(probeArea)||[];
const probeId=probeRows[0]?.id;
if(!probeId){
  errors.push("behavioral audit probe missing criterion");
}else{
  ctx.window.ROCA_AUDIT_ENGINE.saveCriterion(probeArea,probeId,{status:"NOT_VERIFIED",note:"probe"});
  if(ctx.window.ROCA_AUDIT_ENGINE.dynamicImplementationItems().some(x=>x.req===probeId))
    errors.push("NOT_VERIFIED incorrectly promoted to IMPLEMENTAR");

  ctx.window.ROCA_AUDIT_ENGINE.saveCriterion(probeArea,probeId,{status:"NONCONFORMING",note:"probe gap"});
  const opened=ctx.window.ROCA_AUDIT_ENGINE.dynamicImplementationItems().filter(x=>x.req===probeId);
  if(opened.length!==1) errors.push(`NONCONFORMING expected 1 dynamic action, got ${opened.length}`);

  ctx.window.ROCA_AUDIT_ENGINE.saveCriterion(probeArea,probeId,{status:"CONFORMING",note:"probe closed"});
  if(ctx.window.ROCA_AUDIT_ENGINE.dynamicImplementationItems().some(x=>x.req===probeId))
    errors.push("CONFORMING did not remove dynamic IMPLEMENTAR action");

  // Backup/restore contract: preserve only known criteria and allowed statuses.
  ctx.window.ROCA_AUDIT_ENGINE.saveCriterion(probeArea,probeId,{status:"NONCONFORMING",note:"backup probe"});
  const backup=ctx.window.ROCA_AUDIT_ENGINE.exportAuditState();
  if(backup.schema!=="ROCA_AUDIT_STATE_V1") errors.push("audit backup schema mismatch");
  memory.clear();
  const restored=ctx.window.ROCA_AUDIT_ENGINE.importAuditState(backup);
  if(restored.criteria<1) errors.push("audit backup restored no criteria");
  if(!ctx.window.ROCA_AUDIT_ENGINE.dynamicImplementationItems().some(x=>x.req===probeId))
    errors.push("audit backup did not restore NONCONFORMING implementation state");

  const tampered=JSON.parse(JSON.stringify(backup));
  tampered.departments[probeArea]["UNKNOWN-REQ"]={status:"CONFORMING",note:"must be ignored"};
  tampered.departments[probeArea][probeId]={status:"UNSAFE_UNKNOWN_STATUS",note:"must be ignored"};
  memory.clear();
  const filtered=ctx.window.ROCA_AUDIT_ENGINE.importAuditState(tampered);
  if(filtered.ignored<2) errors.push("audit import did not reject unknown criterion/status");
  const emptyClosure=JSON.parse(JSON.stringify(backup));
  emptyClosure.departments[probeArea][probeId]={status:"CONFORMING",note:""};
  memory.clear();
  const emptyFiltered=ctx.window.ROCA_AUDIT_ENGINE.importAuditState(emptyClosure);
  if(emptyFiltered.ignored<1) errors.push("audit import accepted terminal closure without supporting detail");
  if(ctx.window.ROCA_AUDIT_ENGINE.closureDetailValid("NA_JUSTIFIED","")!==false)
    errors.push("NA_JUSTIFIED without justification accepted");
  memory.clear();
}

const audit=read("audit-data.js");
if(!audit.includes("NO VERIFICADO")||!audit.includes("NONCONFORMING")) errors.push("audit status contract missing");
if(!audit.includes("auditBackupExport")||!audit.includes("auditBackupImport")) errors.push("audit backup UI controls missing");

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
console.log(`PASS audit/implementation flow: ${Object.keys(depts).length} departments; ${holdDefs.size} holds; status-to-IMPLEMENTAR and backup/restore behavioral contracts passed; no stale formic hold; ALUM-Tan operational block preserved`);
