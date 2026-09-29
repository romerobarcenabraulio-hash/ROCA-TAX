window.ROCA_AUDIT_SECTIONS = [
  {
    id:"audit-inicio", nav:"Auditoría · Inicio", title:"Auditoría dentro del manual", eyebrow:"ROCA · verificación central",
    lead:"La auditoría ya no vive en una página paralela. Aquí se revisa cada criterio contra el estado real del taller y se conserva memoria del criterio fijo que gobierna la verificación.",
    body:`
      <div class="callout"><strong>Regla:</strong> IMPLEMENTAR corrige brechas temporales. Cuando una condición queda definida y respaldada, el criterio permanente se conserva aquí y en el área correspondiente del manual.</div>
      <h2>Cómo funciona</h2>
      <ol>
        <li>Seleccionar un área.</li>
        <li>Revisar el criterio permanente.</li>
        <li>Capturar resultado y dato cuando corresponda.</li>
        <li>Si hay una brecha real, se envía a IMPLEMENTAR.</li>
        <li>Si la corrección se cierra, la auditoría conserva el resultado y el criterio fijo sigue siendo parte del HTML.</li>
      </ol>
      <div id="auditSummary"></div>
      <h2>Línea base por departamento</h2>
      <div id="baselineRegistry">Cargando línea base...</div>
    `
  },
  ...Object.entries(window.ROCA_FAST_TRACK?.areas || {}).map(([areaId, area]) => ({
    id:"audit-"+area.code.toLowerCase(),
    nav:"Auditoría · "+area.title,
    title:"Auditoría · "+area.title,
    eyebrow:"ROCA · auditoría por área",
    lead:area.specific,
    body:`
      <div class="audit-area-shell" data-audit-area="${areaId}" data-audit-code="${area.code}">
        <div class="callout"><strong>Criterio fijo:</strong> se deriva del estándar permanente del área y de la base normativa aplicable. El estado auditado cambia; el criterio no se borra por cerrar una acción.</div>
        <div class="audit-table-host">Cargando criterios...</div>
      </div>
    `
  }))
];

window.ROCA_AUDIT_ENHANCE = async function(sectionId){
  const root = document.querySelector('.audit-area-shell');
  function parseCSV(text){
    const rows=[]; let row=[],field='',q=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){ if(q&&text[i+1]==='"'){field+='"';i++;} else q=!q; }
      else if(ch===','&&!q){row.push(field);field='';}
      else if((ch==='\n'||ch==='\r')&&!q){ if(ch==='\r'&&text[i+1]==='\n')i++; row.push(field);field=''; if(row.some(v=>v!==''))rows.push(row); row=[]; }
      else field+=ch;
    }
    if(field||row.length){row.push(field);if(row.some(v=>v!==''))rows.push(row);}
    if(!rows.length) return [];
    const head=rows.shift();
    return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]||''])));
  }
  if(sectionId === 'audit-inicio'){
    const host = document.getElementById('auditSummary');
    if(host){
      const departments = Object.values(window.ROCA_DEPARTMENTS || {});
      const areas = departments.length;
      const criteria = departments.reduce((sum,d)=>sum+(Array.isArray(d.auditCriteria)?d.auditCriteria.length:0),0);
      host.innerHTML = '<div class="callout"><strong>'+areas+' departamentos</strong> · '+criteria+' criterios específicos actualmente estructurados. La línea base se congela por departamento; la auditoría posterior cambia el resultado, no redefine automáticamente el criterio.</div>';
    }
    const baseHost=document.getElementById('baselineRegistry');
    if(baseHost){
      try{
        const res=await fetch('ops/control/ROCA_DEPARTMENT_BASELINE_V1.csv',{cache:'no-store'});
        const data=res.ok?parseCSV(await res.text()):[];
        baseHost.innerHTML='<table><thead><tr><th>Departamento</th><th>Estado</th><th>Versión</th><th>Capturado</th><th>Congelado</th><th>Se reabre sólo si...</th></tr></thead><tbody>'+
          data.map(r=>'<tr><td><strong>'+r.department_name+'</strong></td><td>'+r.baseline_status+'</td><td>'+r.baseline_version+'</td><td>'+(r.captured_date||'—')+'</td><td>'+(r.frozen_date||'—')+'</td><td>'+r.review_trigger+'</td></tr>').join('')+'</tbody></table>';
      }catch(e){ baseHost.textContent='No se pudo leer la línea base controlada.'; }
    }
    return;
  }
  if(!root) return;
  const areaId = root.dataset.auditArea;
  const code = root.dataset.auditCode;
  const dept = window.ROCA_DEPARTMENTS && window.ROCA_DEPARTMENTS[areaId];
  const rows = dept && Array.isArray(dept.auditCriteria)
    ? dept.auditCriteria.map(r=>({label:(r.group? r.group+' · ':'')+(r.label||r.id),target:r.target,input:r.input,id:r.id}))
    : (window.ROCA_FAST_TRACK?.commonRows || []);
  const storageKey = 'roca.audit.'+areaId;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch(e) {}
  let implementation = [];
  try{
    const res = await fetch('ops/control/ROCA_IMPLEMENTATION_ACTION_REGISTER_V1.csv',{cache:'no-store'});
    if(res.ok){
      const text = await res.text();
      implementation = parseCSV(text).filter(x=>x.area===areaId);
    }
  }catch(e){}

  const openByReq = new Map(implementation.filter(x=>!['CLOSED','CANCELLED'].includes(String(x.status||'').toUpperCase())).map(x=>[x.target_requirement_id,x]));
  const promoted = implementation.filter(x=>String(x.status||'').toUpperCase()==='CLOSED' && String(x.promote_to_baseline||'').toUpperCase()==='YES');
  const promotedHtml = promoted.length
    ? '<section class="baseline-promoted"><h2>Valores fijos promovidos desde IMPLEMENTAR</h2><table><thead><tr><th>Concepto</th><th>Valor fijo</th><th>Fundamento</th></tr></thead><tbody>'+
      promoted.map(x=>'<tr><td><strong>'+String(x.fixed_label||x.target_requirement_id||'')+'</strong></td><td>'+String(x.fixed_value||'')+(x.fixed_unit?' '+x.fixed_unit:'')+'</td><td>'+String(x.basis_reference||'')+(x.basis_source?' · '+x.basis_source:'')+'</td></tr>').join('')+
      '</tbody></table></section>'
    : '';
  const html = promotedHtml + '<table class="audit-central-table"><thead><tr><th>ID</th><th>Criterio fijo</th><th>Resultado</th><th>Dato / nota</th><th>Implementación</th></tr></thead><tbody>'+
    rows.map((row,i)=>{
      const id=row.id || (code+'-FT-'+String(i+1).padStart(2,'0'));
      const v=saved[id]||{};
      const action=openByReq.get(id);
      return '<tr data-audit-id="'+id+'"><td><strong>'+id+'</strong><br><small>'+row.label+'</small></td><td>'+row.target+'</td><td><select class="audit-status"><option value="NOT_VERIFIED">NO VERIFICADO</option><option value="CONFORMING">CONFORME</option><option value="NONCONFORMING">NO CONFORME</option><option value="NA_JUSTIFIED">NO APLICA — JUSTIFICACIÓN</option></select></td><td><textarea class="audit-note" rows="3" placeholder="'+row.input.replace(/"/g,'&quot;')+'">'+(v.note||'')+'</textarea></td><td>'+(action?'<strong>ABIERTA</strong><br>'+String(action.correction||''):'—')+'</td></tr>';
    }).join('')+'</tbody></table>';
  root.querySelector('.audit-table-host').innerHTML = html;
  root.querySelectorAll('tr[data-audit-id]').forEach(tr=>{
    const id=tr.dataset.auditId, v=saved[id]||{};
    const sel=tr.querySelector('.audit-status');
    const note=tr.querySelector('.audit-note');
    sel.value=v.status||'NOT_VERIFIED';
    const persist=()=>{
      saved[id]={status:sel.value,note:note.value,updatedAt:new Date().toISOString()};
      localStorage.setItem(storageKey,JSON.stringify(saved));
    };
    sel.addEventListener('change',persist);
    note.addEventListener('input',persist);
  });
};