#!/usr/bin/env node
import fs from "node:fs";
import vm from "node:vm";

const read=p=>fs.readFileSync(p,"utf8");
const errors=[];
const ctx={window:{}};
vm.createContext(ctx);
vm.runInContext(read("department-data.js"),ctx,{filename:"department-data.js"});
vm.runInContext(read("area-standard-data.js"),ctx,{filename:"area-standard-data.js"});
vm.runInContext(read("norm-context-data.js"),ctx,{filename:"norm-context-data.js"});

const depts=ctx.window.ROCA_DEPARTMENTS||{};
const phys=ctx.window.ROCA_AREA_PHYSICAL_STANDARD||[];
if(Object.keys(depts).length!==10) errors.push("expected 10 departments");

const expectedCounts={
  "area-curtiduria":21,"area-montaje":25,"area-retoque":26,"area-bases":29,"area-fmr":29,
  "area-recepcion":14,"area-carpinteria":20,"area-soldadura":14,"area-blanqueado":17,"area-soporte":14
};

for(const [areaId,d] of Object.entries(depts)){
  const area=Array.isArray(d.area)?d.area:[];
  const areaAudit=Array.isArray(d.areaAudit)?d.areaAudit:[];
  const areaIds=new Set(area.map(x=>x.id));
  if(areaAudit.length===0){
    for(const r of area){
      if(!r.evidence||!r.basis) errors.push(`${areaId}: canonical MUST ${r.id} missing evidence/basis after areaAudit retirement`);
    }
  }else{
    if(area.length!==areaAudit.length) errors.push(`${areaId}: area/areaAudit parity mismatch`);
    const sourceIds=areaAudit.map(x=>x.sourceId);
    if(sourceIds.some(x=>!x)) errors.push(`${areaId}: areaAudit missing explicit sourceId`);
    if(new Set(sourceIds).size!==sourceIds.length) errors.push(`${areaId}: duplicate areaAudit sourceId`);
    for(const r of area) if(!sourceIds.includes(r.id)) errors.push(`${areaId}: area criterion ${r.id} missing audit binding`);
    for(const m of areaAudit) if(m.sourceId&&!areaIds.has(m.sourceId)) errors.push(`${areaId}: orphan audit sourceId ${m.sourceId}`);
  }
  const stageChecks=(d.method?.stages||[]).filter(x=>x&&x.verify);
  const ids=[
    ...area.map(x=>x.id),
    ...stageChecks.map(x=>x.id),
    ...(d.method?.controls||[]).map(x=>x.id),
    ...(d.auditCriteria||[]).map(x=>x.id)
  ].filter(Boolean);
  if(new Set(ids).size!==ids.length) errors.push(`${areaId}: duplicate permanent criterion ids`);
  const physical=d.physicalStandardsIntegrated?0:phys.filter(r=>r.areas==="ALL"||(Array.isArray(r.areas)&&r.areas.includes(areaId))).length;
  const total=area.length+stageChecks.length+(d.method?.controls||[]).length+(d.auditCriteria||[]).length+physical;
  if(total!==expectedCounts[areaId]) errors.push(`${areaId}: criteria count ${total} != ${expectedCounts[areaId]}`);
}

function parseCsvLine(line){
  const out=[];let cur="";let quoted=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'){
      if(quoted&&line[i+1]==='"'){cur+='"';i++;}
      else quoted=!quoted;
    }else if(ch===","&&!quoted){out.push(cur);cur="";}
    else cur+=ch;
  }
  out.push(cur);
  return out;
}
function parseCsv(text){
  const lines=text.trim().split(/\r?\n/);
  const head=parseCsvLine(lines.shift());
  return lines.filter(Boolean).map(line=>{
    const vals=parseCsvLine(line);
    return Object.fromEntries(head.map((h,i)=>[h,vals[i]||""]));
  });
}
const holdRows=parseCsv(read("ops/control/ROCA_DEPARTMENT_HOLD_STATUS_V1.csv"));
const holdStatus=new Map(holdRows.map(r=>[r.hold_id,r]));
const routingRows=parseCsv(read("ops/control/ROCA_HOLD_ROUTING_V2.csv"));
const routingById=new Map(routingRows.map(r=>[r.hold_id,r]));
const allowedRouting=new Set(["DEFINE_STANDARD","AUDIT_CURRENT_STATE","SYSTEM_RECORD","IMPLEMENT_DECISION"]);
if(holdRows.length!==83) errors.push(`hold status rows ${holdRows.length} != 83`);
if(routingRows.length!==83) errors.push(`HOLD routing rows ${routingRows.length} != 83`);
for(const [id,s] of holdStatus){
  const route=routingById.get(id);
  if(!route) errors.push(`${id}: missing HOLD routing row`);
  else{
    if(route.area!==s.area) errors.push(`${id}: HOLD routing/status area mismatch`);
    if(!allowedRouting.has(route.hold_type)) errors.push(`${id}: invalid HOLD routing type ${route.hold_type}`);
    if(String(route.status||"").toUpperCase()!=="OPEN") errors.push(`${id}: routing row must preserve OPEN status`);
  }
}
for(const id of routingById.keys()) if(!holdStatus.has(id)) errors.push(`${id}: orphan HOLD routing row`);
const routingCounts=routingRows.reduce((acc,r)=>{acc[r.hold_type]=(acc[r.hold_type]||0)+1;return acc},{});
if((routingCounts.DEFINE_STANDARD||0)!==32) errors.push(`DEFINE_STANDARD routing count ${routingCounts.DEFINE_STANDARD||0} != 32`);
if((routingCounts.AUDIT_CURRENT_STATE||0)!==36) errors.push(`AUDIT_CURRENT_STATE routing count ${routingCounts.AUDIT_CURRENT_STATE||0} != 36`);
if((routingCounts.SYSTEM_RECORD||0)!==8) errors.push(`SYSTEM_RECORD routing count ${routingCounts.SYSTEM_RECORD||0} != 8`);
if((routingCounts.IMPLEMENT_DECISION||0)!==7) errors.push(`IMPLEMENT_DECISION routing count ${routingCounts.IMPLEMENT_DECISION||0} != 7`);

const readinessRows=parseCsv(read("ops/control/ROCA_BASELINE_DEFINITION_READINESS_V2.csv"));
if(readinessRows.length!==10) errors.push(`baseline definition readiness rows ${readinessRows.length} != 10`);
const definitionBlockers=routingRows.filter(r=>["DEFINE_STANDARD","SYSTEM_RECORD","IMPLEMENT_DECISION"].includes(r.hold_type)).length;
const auditStateHolds=routingRows.filter(r=>r.hold_type==="AUDIT_CURRENT_STATE").length;
if(definitionBlockers!==47) errors.push(`definition blockers ${definitionBlockers} != 47`);
if(auditStateHolds!==36) errors.push(`current-state audit holds ${auditStateHolds} != 36`);
if(readinessRows.some(r=>String(r.definition_ready).toUpperCase()==="YES")) errors.push("no department should be definition-ready while current 47 definition blockers remain");

if(holdStatus.has("CUR-HOLD-01")||routingById.has("CUR-HOLD-01")) errors.push("obsolete CUR-HOLD-01 still present");
const alum=routingById.get("CUR-HOLD-07")?.source_text||"";
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

// Coverage contract: every permanent criterion counted from department area,
// method controls, process audit criteria and applicable physical standards
// must survive into the runtime audit exactly once. This catches silent ID
// collisions that the engine dedupe would otherwise hide.
for(const areaId of Object.keys(depts)){
  const runtimeRows=ctx.window.ROCA_AUDIT_ENGINE?.criteriaForArea(areaId)||[];
  const expected=expectedCounts[areaId];
  if(runtimeRows.length!==expected)
    errors.push(areaId+": runtime audit coverage "+runtimeRows.length+" != permanent criteria "+expected);
  const runtimeIds=runtimeRows.map(x=>x.id);
  if(new Set(runtimeIds).size!==runtimeIds.length)
    errors.push(areaId+": duplicate runtime audit ids");
}

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
  const measured=ctx.window.ROCA_AUDIT_ENGINE.criteriaForArea("area-montaje").find(r=>r.id==="MON-AREA-03");
  if(!measured) errors.push("MON-AREA-03 measured criterion missing");
  else{
    if(ctx.window.ROCA_AUDIT_ENGINE.closureDetailValid("CONFORMING","ok",measured)!==false)
      errors.push("generic measured closure accepted");
    if(ctx.window.ROCA_AUDIT_ENGINE.closureDetailValid("CONFORMING","350 lux medidos",measured)!==true)
      errors.push("numeric measured closure rejected");
  }
  memory.clear();
}

const app=read("app.js");
if(!app.includes("closureDetailValid")||!app.includes("terminal&&evidenceValid"))
  errors.push("final print gate does not validate closure detail / legacy unsupported closures");

const audit=read("audit-data.js");
if(!audit.includes("NO VERIFICADO")||!audit.includes("NONCONFORMING")) errors.push("audit status contract missing");
if(!audit.includes("auditBackupExport")||!audit.includes("auditBackupImport")) errors.push("audit backup UI controls missing");

const legacyAudit=read("generated/roca-fast-track/audit.html");
if(!legacyAudit.includes("index.html?mode=audit#audit-inicio")) errors.push("legacy audit route does not redirect to central audit");
if(/REC-FT-01|MON-FT-01/.test(legacyAudit)) errors.push("legacy audit route still contains parallel audit criteria");
if(!app.includes("new URLSearchParams(location.search).get('mode')")) errors.push("central app lacks direct mode routing");

const impl=read("generated/roca-fast-track/implementation.html");
for(const marker of [
  "NO VERIFICADO</b> pertenece a AUDITORÍA",
  "normalizeImplementationArea",
  "CLOSED","CANCELLED",
  "dynamicImplementationItems",
  "operational_calculator_release=BLOCKED",
  "ROCA_HOLD_ROUTING_V2.csv",
  "routingById",
  "DEFINIR ESTÁNDAR",
  "AUDITAR ESTADO ACTUAL"
]) if(!impl.includes(marker)) errors.push(`implementation marker missing: ${marker}`);

if(impl.includes('href="audit.html"')) errors.push("implementation still links to legacy audit");
if(!impl.includes("index.html?mode=audit#audit-inicio")) errors.push("implementation central audit link missing");
if(!impl.includes('route.hold_type==="IMPLEMENT_DECISION"')&&!impl.includes('route?.hold_type==="IMPLEMENT_DECISION"'))
  errors.push("IMPLEMENTAR is not filtering canonical HOLD routing to IMPLEMENT_DECISION only");

if(errors.length){
  errors.forEach(e=>console.error("ERROR:",e));
  process.exit(1);
}
console.log(`PASS audit/implementation flow: ${Object.keys(depts).length} departments; ${routingRows.length} external HOLDs; status-to-IMPLEMENTAR and backup/restore behavioral contracts passed; no stale formic hold; ALUM-Tan operational block preserved`);
