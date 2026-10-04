from pathlib import Path
import json, sys, hashlib

root=Path(sys.argv[1] if len(sys.argv)>1 else '.')
app_path=root/'app.js'
index_path=root/'index.html'
manifest_path=root/'RUNTIME_MANIFEST.json'
styles_path=root/'styles.css'
app=app_path.read_text(encoding='utf-8')

def repl(old,new,label):
    global app
    n=app.count(old)
    if n!=1:
        raise SystemExit(f'{label}: expected 1 match, found {n}')
    app=app.replace(old,new)

repl(
"const blankState=()=>({view:'hoy',reqOverrides:{},actions:{},measurements:{},evidence:{},formValues:{},setupValues:{},_meta:{schema:'ROCA_COMPLIANCE_COCKPIT_STATE_V2',master_sha256:D.meta?.gate?.requirement_master_sha256||'',updatedAt:new Date(0).toISOString(),lastFullBackupAt:null}});",
"const blankState=()=>({view:'hoy',reqOverrides:{},actions:{},measurements:{},evidence:{},formValues:{},setupValues:{},formMasterValues:{},_meta:{schema:'ROCA_COMPLIANCE_COCKPIT_STATE_V2',master_sha256:D.meta?.gate?.requirement_master_sha256||'',updatedAt:new Date(0).toISOString(),lastFullBackupAt:null}});",
'blankState')

repl(
"const objectSections=['reqOverrides','actions','measurements','evidence','formValues','setupValues'];",
"const objectSections=['reqOverrides','actions','measurements','evidence','formValues','setupValues','formMasterValues'];",
'objectSections')

repl(
" for(const [k,o] of Object.entries(incoming.formValues||{})){const field=formMap.get(k);if(!field)throw new Error(`Campo de trámite desconocido: ${k}`);if(isRestrictedClass(field.privacy_class)&&o?.value&&!isEvidenceReference(o.value))throw new Error(`Dato restringido en bruto bloqueado: ${k}`)}\n const out={...blankState(),...incoming};",
" for(const [k,o] of Object.entries(incoming.formValues||{})){const field=formMap.get(k);if(!field)throw new Error(`Campo de trámite desconocido: ${k}`);if(isRestrictedClass(field.privacy_class)&&o?.value&&!isEvidenceReference(o.value))throw new Error(`Dato restringido en bruto bloqueado: ${k}`)}\n const fmMap=new Map((D.formMaster||[]).map(x=>[x.key,x]));\n for(const [k,o] of Object.entries(incoming.formMasterValues||{})){const field=fmMap.get(k);if(!field)throw new Error(`FORM_MASTER desconocido: ${k}`);if(isRestrictedClass(field.privacy_class)&&o?.value&&!isEvidenceReference(o.value))throw new Error(`FORM_MASTER restringido en bruto bloqueado: ${k}`);if(o?.status==='VERIFIED'&&(!o?.value||!o?.evidence_ids||!o?.reviewer))throw new Error(`FORM_MASTER VERIFIED incompleto: ${k}`)}\n const out={...blankState(),...incoming};",
'validate form master')

# Restore canonical HOY/INBOX adapter when the downloaded base runtime lacks it.
inbox_anchor="const riskBadge=r=>`<span class=\"badge ${r==='R1_CRITICAL'?'r1':''}\">${esc(r)}</span>`;"
inbox_helpers="""
let F={q:'',risk:'',status:'',source:''};
const effStatus=(reqId,base)=>S.reqOverrides[reqId]?.status||base||'NOT_CHECKED';
function applyInboxFilters(){
 const q=String(F.q||'').trim().toLowerCase();
 return (D.inbox||[]).map(r=>({
   ...r,
   requirement_title:r.requirement_title||r.title||'',
   current_verification_status:effStatus(r.req_id,r.current_verification_status||r.status),
   evidence_required:r.evidence_required||r.evidence_slot||'',
   next_lane:r.next_lane||r.primary_lane||'',
   closure_route:r.closure_route||r.lanes||''
 })).filter(r=>(!F.risk||r.risk===F.risk)&&(!F.status||r.current_verification_status===F.status)&&(!F.source||r.source===F.source)&&(!q||[r.req_id,r.source,r.locator,r.requirement_title,r.scope,r.what_to_check,r.next_action,r.closure_route].join(' ').toLowerCase().includes(q)));
}
""".strip()
if 'function applyInboxFilters()' not in app:
    if app.count(inbox_anchor)!=1: raise SystemExit('inbox anchor mismatch')
    app=app.replace(inbox_anchor,inbox_anchor+'\n'+inbox_helpers)

insert_after="const reqMap=new Map(D.requirements.map(r=>[r.req_id,r]));"
helpers="""
const formMasterMap=new Map((D.formMaster||[]).map(x=>[x.key,x]));
const formMasterAlias={company_legal_name:'legal_name',legal_name:'legal_name',rfc:'rfc',curp:'curp',legal_representative:'legal_representative',contact_phone:'contact_phone',contact_email:'contact_email',address_street:'address_street',address_locality:'address_locality',address_municipality:'address_municipality',address_state:'address_state',address_postal_code:'address_postal_code',applicant_type:'applicant_type',site_address:'site_address',phone_email:'phone_email'};
function liveFormMaster(key){const def=formMasterMap.get(key)||{},o=S.formMasterValues?.[key]||{};return {...def,value:o.value??def.value??'',evidence_ids:o.evidence_ids??def.evidence_ids??'',reviewer:o.reviewer??def.reviewer??'',status:o.status??def.status??'UNKNOWN'}}
function formMasterReady(x){return x.status==='VERIFIED'&&String(x.value||'').trim()&&String(x.evidence_ids||'').trim()&&String(x.reviewer||'').trim()}
function formMasterKeyForField(f){return formMasterAlias[f?.field_id]||''}
function livePrefillField(f,base={}){const key=formMasterKeyForField(f);if(!key)return base;const fm=liveFormMaster(key);if(!formMasterReady(fm))return {...base,form_master_key:key};const restricted=isRestrictedClass(f.privacy_class||fm.privacy_class);if(restricted&&!isEvidenceReference(fm.value))return {...base,value:'',readiness_status:'NEEDS_VERIFIED_FACT',blocker_code:'RESTRICTED_REFERENCE_REQUIRED',next_action:'FORM_MASTER verificado debe conservar sólo referencia EVID-ID para este dato restringido.',form_master_key:key};return {...base,value:fm.value,evidence_id:fm.evidence_ids,readiness_status:'PREFILLED_VERIFIED',blocker_code:'',next_action:'Dato reutilizado desde FORM_MASTER verificado.',value_source:`FORM_MASTER:${key}`,form_master_key:key}}
function livePrefillCount(){let n=0;for(const f of D.tramiteFields||[]){if(livePrefillField(f,(D.tramitePrefill||[]).find(x=>x.procedure_id===f.procedure_id&&x.field_id===f.field_id)||{}).readiness_status==='PREFILLED_VERIFIED')n++}return n}
""".strip()
if app.count(insert_after)!=1: raise SystemExit('reqMap anchor mismatch')
app=app.replace(insert_after,insert_after+'\n'+helpers)

old_setup=""" `<div class=\"panel\"><div class=\"tablewrap\"><table><thead><tr><th>Prioridad</th><th>Hecho</th><th>Impacto</th><th>Evidencia</th><th>Estado</th></tr></thead><tbody>${facts.map(x=>{let o=S.setupValues[x.fact_id]||{},l=lev.get(x.fact_id)||{};return `<tr class=\"clickable\" onclick=\"openSetup('${x.fact_id}')\"><td>${riskBadge(x.priority)}</td><td><b>${esc(x.question_or_field)}</b><div class=\"tiny muted\">${esc(x.fact_id)} · ${esc(x.category)}</div></td><td><b>${esc(l.estimated_req_rows_touched||x.estimated_applicability_rows_touched||0)} REQ</b><div class=\"tiny muted\">${esc(l.tramite_fields_directly_unlocked||0)} campos de trámite directos</div></td><td>${esc(x.evidence_required)}</td><td>${statusBadge(o.status||x.status)}</td></tr>`}).join('')}</tbody></table></div></div>`;"""
new_setup=""" `<div class=\"panel\"><div class=\"tablewrap\"><table><thead><tr><th>Prioridad</th><th>Hecho</th><th>Impacto</th><th>Evidencia</th><th>Estado</th></tr></thead><tbody>${facts.map(x=>{let o=S.setupValues[x.fact_id]||{},l=lev.get(x.fact_id)||{};return `<tr class=\"clickable\" onclick=\"openSetup('${x.fact_id}')\"><td>${riskBadge(x.priority)}</td><td><b>${esc(x.question_or_field)}</b><div class=\"tiny muted\">${esc(x.fact_id)} · ${esc(x.category)}</div></td><td><b>${esc(l.estimated_req_rows_touched||x.estimated_applicability_rows_touched||0)} REQ</b><div class=\"tiny muted\">${esc(l.tramite_fields_directly_unlocked||0)} campos de trámite directos</div></td><td>${esc(x.evidence_required)}</td><td>${statusBadge(o.status||x.status)}</td></tr>`}).join('')}</tbody></table></div></div>`+
 `<div class=\"sectiontitle\">FORM_MASTER · datos administrativos reutilizables</div><div class=\"callout warn\">Los datos restringidos no se guardan en bruto aquí: se conserva sólo referencia EVID-ID al expediente controlado. VERIFIED exige valor/referencia + EVID-ID + reviewer.</div><div class=\"panel\"><div class=\"tablewrap\"><table><thead><tr><th>Clave</th><th>Dato</th><th>Privacidad</th><th>Estado</th><th>Evidencia</th></tr></thead><tbody>${(D.formMaster||[]).map(x=>{const f=liveFormMaster(x.key);return `<tr class=\"clickable\" onclick=\"openFormMaster('${x.key}')\"><td><b>${esc(x.key)}</b></td><td>${esc(x.label)}</td><td>${esc(x.privacy_class)}</td><td>${statusBadge(f.status)}</td><td>${esc(f.evidence_ids||'—')}</td></tr>`}).join('')}</tbody></table></div></div>`;"""
repl(old_setup,new_setup,'renderSetup extension')

repl(
"${metric((D.tramitePrefill||[]).filter(x=>x.readiness_status==='PREFILLED_VERIFIED').length,'prellenados verificados')}",
"${metric(livePrefillCount(),'prellenados verificados')}",
'live prefill metric')

repl(
"let k=`${id}:${f.field_id}`,o=S.formValues[k]||{},sens=isRestrictedClass(f.privacy_class),q=pr.get(f.field_id)||{},val=sens?(o.value||''):(o.value||q.value||f.value||''),blocked=q.readiness_status&&q.readiness_status!=='PREFILLED_VERIFIED';",
"let k=`${id}:${f.field_id}`,o=S.formValues[k]||{},sens=isRestrictedClass(f.privacy_class),q=livePrefillField(f,pr.get(f.field_id)||{}),val=o.value||q.value||f.value||'',blocked=q.readiness_status&&q.readiness_status!=='PREFILLED_VERIFIED';",
'openTramite live prefill')

anchor="window.saveSetup=id=>{const x=D.setupFacts.find(a=>a.fact_id===id),from=(S.setupValues[id]?.status||x.status||'UNKNOWN'),to=$('#sst').value,value=$('#sval').value.trim(),evidenceIds=$('#sevid').value.trim(),reviewer=$('#sreviewer').value.trim();const g=G.setupTransition(from,to,{value,evidenceIds,reviewer,restricted:isRestrictedClass(x.privacy_class)});if(!g.allowed){if(to==='VERIFIED')alert('VERIFIED bloqueado: captura valor + EVID-ID + reviewer.');else alert('Transición bloqueada: '+g.reasons.join(' · '));return}S.setupValues[id]={value,evidence_ids:evidenceIds,reviewer,status:to,updated:new Date().toISOString()};save();closeDrawer();render()}"
fm_funcs="""
window.openFormMaster=key=>{const x=formMasterMap.get(key);if(!x)return;const o=S.formMasterValues?.[key]||{},restricted=isRestrictedClass(x.privacy_class);drawer(`FORM_MASTER · ${esc(key)}`,`<div class=\"field\"><label>Dato maestro</label><div>${esc(x.label)}</div></div><div class=\"field\"><label>Uso</label><div>${esc(x.purpose||'Prellenado controlado de trámites')}</div></div>${restricted?`<div class=\"callout danger\">Dato restringido: no escribas el dato real en el cockpit; guarda sólo la referencia EVID-ID al expediente controlado.</div>`:''}<div class=\"field\"><label>${restricted?'Referencia EVID-ID':'Valor confirmado'}</label><input id=\"fmval\" value=\"${esc(o.value||'')}\"></div><div class=\"field\"><label>EVID-ID(s)</label><input id=\"fmevid\" value=\"${esc(o.evidence_ids||'')}\"></div><div class=\"field\"><label>Reviewer</label><input id=\"fmreviewer\" value=\"${esc(o.reviewer||'')}\"></div><div class=\"field\"><label>Estado</label><select id=\"fmst\">${['UNKNOWN','PARTIAL','VERIFIED'].map(v=>`<option ${v===(o.status||'UNKNOWN')?'selected':''}>${v}</option>`).join('')}</select></div><button class=\"btn primary\" onclick=\"saveFormMaster('${key}')\">Guardar dato maestro</button>`)}
window.saveFormMaster=key=>{const x=formMasterMap.get(key);if(!x)return;S.formMasterValues=S.formMasterValues||{};const from=S.formMasterValues[key]?.status||'UNKNOWN',to=$('#fmst').value,value=$('#fmval').value.trim(),evidenceIds=$('#fmevid').value.trim(),reviewer=$('#fmreviewer').value.trim(),restricted=isRestrictedClass(x.privacy_class);const g=G.setupTransition(from,to,{value,evidenceIds,reviewer,restricted});if(!g.allowed){alert('FORM_MASTER bloqueado: '+g.reasons.join(' · '));return}S.formMasterValues[key]={value,evidence_ids:evidenceIds,reviewer,status:to,updated:new Date().toISOString()};save();closeDrawer();render()}
""".strip()
if app.count(anchor)!=1: raise SystemExit('saveSetup anchor mismatch')
app=app.replace(anchor,anchor+'\n'+fm_funcs)

app_path.write_text(app,encoding='utf-8')

idx=index_path.read_text(encoding='utf-8')
needle='<script src="state_guards.js"></script><script src="app.js"></script>'
if needle not in idx: raise SystemExit('index runtime anchor mismatch')
idx=idx.replace(needle,'<script src="state_guards.js"></script><script src="form-master-data.js"></script><script src="app.js"></script>')
index_path.write_text(idx,encoding='utf-8')

manifest=json.loads(manifest_path.read_text(encoding='utf-8'))
rt=manifest.setdefault('index_runtime',[])
if 'form-master-data.js' not in rt:
    i=rt.index('state_guards.js')+1 if 'state_guards.js' in rt else len(rt)
    rt.insert(i,'form-master-data.js')
manifest['overlay']='FORM_MASTER_V1'
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding='utf-8')

def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()

# Deterministic overlay gate. This proves code/data wiring, not browser rendering or legal compliance.
form_data=root/'form-master-data.js'
if not form_data.exists():
    raise SystemExit('form-master-data.js missing')
text=form_data.read_text(encoding='utf-8')
keys=['applicant_type','legal_name','rfc','curp','legal_representative','contact_phone','contact_email','address_street','address_locality','address_municipality','address_state','address_postal_code','site_address','phone_email']
checks={
  'form_master_14_keys': all(("key:'"+k+"'") in text for k in keys) and text.count("{key:'") == 14,
  'state_persistence': 'formMasterValues:{}' in app,
  'import_guard': 'FORM_MASTER VERIFIED incompleto' in app,
  'restricted_raw_block': 'FORM_MASTER restringido en bruto bloqueado' in app,
  'setup_surface': 'FORM_MASTER · datos administrativos reutilizables' in app,
  'live_prefill': 'livePrefillField' in app and 'livePrefillCount()' in app,
  'verified_gate': 'G.setupTransition' in app and 'saveFormMaster' in app,
  'restricted_reference_only': 'Dato restringido: no escribas el dato real en el cockpit' in app,
  'runtime_loads_overlay': 'form-master-data.js' in idx,
  'runtime_manifest_overlay': manifest.get('overlay')=='FORM_MASTER_V1' and 'form-master-data.js' in manifest.get('index_runtime',[]),
}
gate={
  'schema':'ROCA_FORM_MASTER_GATE_V1',
  'master_sha256':manifest.get('master_sha256'),
  'canonical_key_count':14,
  'checks':checks,
  'passed':sum(bool(v) for v in checks.values()),
  'total':len(checks),
  'errors':[k for k,v in checks.items() if not v],
  'app_sha256':sha(app_path),
  'index_sha256':sha(index_path),
  'form_master_data_sha256':sha(form_data),
  'verdict':'PASS' if all(checks.values()) else 'FAIL',
  'scope':'FORM_MASTER persistence, privacy guards and live prefill wiring. Does not prove browser visual QA or physical/legal compliance.'
}
(root/'FORM_MASTER_GATE.json').write_text(json.dumps(gate,ensure_ascii=False,indent=2)+"\n",encoding='utf-8')
if gate['verdict']!='PASS':
    raise SystemExit('FORM_MASTER gate failed: '+', '.join(gate['errors']))
# Preserve mobile containment across future base-runtime syncs.
if styles_path.exists():
    styles=styles_path.read_text(encoding='utf-8')
    mobile_css="""

/* Mobile containment: keep horizontal navigation/tables scrollable inside their own surfaces, never on the document. */
@media(max-width:900px){
 html,body{max-width:100%;overflow-x:hidden}
 #app,#sidebar,#topbar,#view{width:100%;min-width:0;max-width:100%}
 #sidebar{overscroll-behavior-x:contain}
 #topbar>*{min-width:0}
 .topactions{min-width:0}
 #view>*{min-width:0;max-width:100%}
 .panel,.lane,.metrics,.areaGrid,.calcgrid,.storagegrid,.pagehead{min-width:0;max-width:100%}
 .lane>*{min-width:0;overflow-wrap:anywhere}
 .tablewrap{width:100%;min-width:0;max-width:100%;overflow-x:auto;overscroll-behavior-x:contain}
 th,td{overflow-wrap:anywhere;word-break:normal}
 pre,code{max-width:100%;white-space:pre-wrap;overflow-wrap:anywhere}
}
"""
    if 'Mobile containment: keep horizontal navigation' not in styles:
        styles += mobile_css
        styles_path.write_text(styles,encoding='utf-8')
