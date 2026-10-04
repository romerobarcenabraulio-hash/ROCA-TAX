#!/usr/bin/env node
const fs=require('fs');
const vm=require('vm');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');

function read(p){return fs.readFileSync(path.join(ROOT,p),'utf8')}
function assert(cond,msg){if(!cond){console.error('ERROR:',msg);process.exitCode=1}}

global.window=global;
const store={};
global.localStorage={
  getItem:k=>Object.prototype.hasOwnProperty.call(store,k)?store[k]:null,
  setItem:(k,v)=>{store[k]=String(v)}
};

for(const p of ['department-data.js','audit-engine.js','audit-data.js']){
  vm.runInThisContext(read(p),{filename:p});
}

const departments=Object.entries(global.ROCA_DEPARTMENTS||{});
assert(departments.length===10,'expected 10 canonical departments');

for(const [areaId,dept] of departments){
  const rows=global.ROCA_AUDIT_ENGINE.criteriaForArea(areaId);
  assert(rows.length>0,areaId+': no audit criteria');
  const ids=rows.map(r=>r.id);
  assert(new Set(ids).size===ids.length,areaId+': duplicate audit criterion id');
  assert(rows.every(r=>r.target&&r.basis),areaId+': criterion missing target/basis');

  const areaIds=new Set((dept.area||[]).map(r=>r.id));
  const areaAudit=Array.isArray(dept.areaAudit)?dept.areaAudit:[];
  if(areaAudit.length===0){
    assert((dept.area||[]).every(r=>r.evidence&&r.basis),areaId+': canonical MUST missing evidence/basis metadata after areaAudit retirement');
  }else{
    const sourceIds=areaAudit.map(r=>r.sourceId);
    assert(sourceIds.every(Boolean),areaId+': areaAudit row missing explicit sourceId');
    assert(new Set(sourceIds).size===sourceIds.length,areaId+': duplicate areaAudit sourceId');
    assert((dept.area||[]).every(r=>sourceIds.includes(r.id)),areaId+': permanent area criterion missing audit binding');
    assert(areaAudit.every(r=>areaIds.has(r.sourceId)),areaId+': orphan areaAudit sourceId');
  }
}

const sections=global.ROCA_AUDIT_SECTIONS||[];
assert(sections.length===departments.length+1,'audit navigation must be audit-inicio + every department');
const expected=new Set(departments.map(([,d])=>'audit-'+String(d.code).toLowerCase()));
const actual=new Set(sections.slice(1).map(s=>s.id));
assert(expected.size===actual.size&&[...expected].every(x=>actual.has(x)),'audit navigation drifted from department-data');

const auditText=read('audit-data.js');
assert(!auditText.includes('ROCA_FAST_TRACK?.areas'),'audit-data must not derive departments from FAST_TRACK');
assert(auditText.includes('ROCA_AUDIT_ENGINE.criteriaForArea(areaId)'),'audit-data must use canonical audit engine');

const app=read('app.js');
assert(app.includes("closureDetailValid"),'final print gate must validate closure detail');
assert(app.includes("terminal&&evidenceValid"),'final print gate must keep unsupported legacy closures open');

const auditUi=read('audit-data.js');
assert(auditUi.includes("ROCA_AUDIT_ENGINE.closureValidation"),'audit UI must use criterion-aware closure validation');
assert(auditUi.includes("error=result.valid?'':result.error"),'audit UI must surface closure validation result');
assert(auditUi.includes("auditBackupExport")&&auditUi.includes("auditBackupImport"),'audit backup controls missing');

const index=read('index.html');
const order=['department-data.js','audit-engine.js','fast-track-data.js','audit-data.js'].map(x=>index.indexOf(x));
assert(order.every(x=>x>=0)&&order.every((x,i)=>i===0||order[i-1]<x),'script order must load department-data -> audit-engine -> fast-track -> audit-data');

const legacyAudit=read('generated/roca-fast-track/audit.html');
assert(legacyAudit.includes('index.html?mode=audit#audit-inicio'),'legacy audit route must redirect to central audit');
assert(!legacyAudit.includes('REC-FT-01')&&!legacyAudit.includes('MON-FT-01'),'legacy audit route must not contain a parallel criteria system');
assert(app.includes("new URLSearchParams(location.search).get('mode')"),'central app must support direct audit mode links');

const implementation=read('generated/roca-fast-track/implementation.html');
assert(implementation.includes('../../audit-engine.js'),'IMPLEMENTAR must load audit-engine');
assert(implementation.includes('ROCA_AUDIT_ENGINE.criteriaForArea(areaId)'),'IMPLEMENTAR criterion map must use audit-engine');
assert(implementation.includes('ROCA_AUDIT_ENGINE.dynamicImplementationItems()'),'IMPLEMENTAR dynamic actions must use audit-engine');
assert(!implementation.includes('href="audit.html"'),'IMPLEMENTAR must not link to legacy parallel audit');
assert(implementation.includes('index.html?mode=audit#audit-inicio'),'IMPLEMENTAR must link to central audit');

const area='area-curtiduria';
const criterion=global.ROCA_AUDIT_ENGINE.criteriaForArea(area)[0];
global.ROCA_AUDIT_ENGINE.saveCriterion(area,criterion.id,{status:'NONCONFORMING',note:'regression-test'});
const item=global.ROCA_AUDIT_ENGINE.dynamicImplementationItems().find(x=>x.areaId===area&&x.req===criterion.id);
assert(Boolean(item),'NONCONFORMING criterion must generate IMPLEMENTAR item');
assert(item&&item.status==='NO CONFORME','dynamic IMPLEMENTAR item must preserve nonconforming status');
assert(global.ROCA_AUDIT_ENGINE.closureDetailValid('CONFORMING','')===false,'CONFORMING without detail must not be valid');
assert(global.ROCA_AUDIT_ENGINE.closureDetailValid('NA_JUSTIFIED','')===false,'NA_JUSTIFIED without justification must not be valid');
const measuredCriterion=global.ROCA_AUDIT_ENGINE.criteriaForArea('area-montaje').find(r=>r.id==='MON-AREA-03');
assert(Boolean(measuredCriterion),'measured MON-AREA-03 criterion missing');
assert(global.ROCA_AUDIT_ENGINE.closureDetailValid('CONFORMING','ok',measuredCriterion)===false,'generic measured closure must be rejected');
assert(global.ROCA_AUDIT_ENGINE.closureDetailValid('CONFORMING','350 lux medidos',measuredCriterion)===true,'numeric measured closure should be accepted');

global.ROCA_AUDIT_ENGINE.saveCriterion(area,criterion.id,{status:'CONFORMING',note:'EVID-TEST'});
const backup=global.ROCA_AUDIT_ENGINE.exportAuditState();
assert(backup.schema==='ROCA_AUDIT_STATE_V1','audit backup schema mismatch');
delete store[global.ROCA_AUDIT_ENGINE.stateKey(area)];
const restored=global.ROCA_AUDIT_ENGINE.importAuditState(backup);
assert(restored.criteria>=1,'audit backup failed to restore known criterion');
const tampered=JSON.parse(JSON.stringify(backup));
tampered.departments[area][criterion.id]={status:'CONFORMING',note:''};
tampered.departments[area]['UNKNOWN-REQ']={status:'CONFORMING',note:'fake'};
delete store[global.ROCA_AUDIT_ENGINE.stateKey(area)];
const filtered=global.ROCA_AUDIT_ENGINE.importAuditState(tampered);
assert(filtered.ignored>=2,'audit import must reject empty terminal closure and unknown criterion');

if(process.exitCode) process.exit(process.exitCode);
console.log('PASS audit architecture: '+departments.length+' departments; one canonical criteria engine; AUDITORIA -> IMPLEMENTAR flow intact');
