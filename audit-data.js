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
      <h2>Mapa de levantamiento por departamento</h2>
      <p class="source-note">Cada criterio se clasifica por el trabajo necesario para cerrarlo: calcular, medir, inspeccionar, documentar o resolver primero su aplicabilidad.</p>
      <div id="auditWorkloadMatrix">Cargando mapa de levantamiento...</div>
      <h2>Gates normativos globales condicionales</h2>
      <p class="source-note">No se asignan a un departamento hasta que el hecho disparador exista. Se conservan visibles para no perder una obligación potencial ni fingir que ya aplica.</p>
      <div id="auditGlobalConditionalNorms"></div>
      <h2>Qué evidencia cierra cada frente</h2>
      <div class="tablewrap"><table>
        <thead><tr><th>Frente</th><th>Evidencia mínima útil</th><th>No demuestra por sí sola</th></tr></thead>
        <tbody>
          <tr><td>Extintores</td><td>Ubicación, altura, señal, recorrido medido, identificación del equipo y registro/revisión aplicable.</td><td>Clasificación de riesgo completa, entrenamiento o cobertura total del taller.</td></tr>
          <tr><td>Salida / ruta</td><td>Recorrido fotografiado, distancia, puerta operable, señal visible y tiempo cuando aplique.</td><td>Plan de emergencia completo ni simulacro.</td></tr>
          <tr><td>Iluminación</td><td>Lectura lux, ubicación/plano de tarea, instrumento y fecha.</td><td>Calidad visual de todas las tareas del área.</td></tr>
          <tr><td>Químicos / HDS</td><td>Producto real, etiqueta, HDS correspondiente, almacenamiento y compatibilidad revisada.</td><td>Exposición ocupacional, ventilación suficiente o clasificación del residuo.</td></tr>
          <tr><td>Ventilación / extracción</td><td>Proceso/producto, punto de generación, evaluación/medición aplicable y control instalado.</td><td>Eficacia sólo por tener extractor.</td></tr>
          <tr><td>Almacenamiento</td><td>Panorámica, rack/ubicación y carga/estabilidad cuando gobierna.</td><td>Capacidad estructural sin cálculo, placa o evidencia técnica.</td></tr>
          <tr><td>Residuos</td><td>Corriente identificada, recipiente, ubicación y destino/registro cuando corresponda.</td><td>Clasificación correcta sólo por color del bote.</td></tr>
          <tr><td>Maquinaria / guardas</td><td>Activo, punto de operación/transmisión, guarda/dispositivo, paro y mantenimiento/aislamiento aplicable.</td><td>Competencia del operador ni cierre de todos los riesgos mecánicos.</td></tr>
          <tr><td>Electricidad</td><td>Tablero/desconexión accesible, identificación, cables/clavijas y registro de mantenimiento cuando exista.</td><td>Diseño/capacidad integral de la instalación ni dictamen técnico.</td></tr>
          <tr><td>Ruido / vibración</td><td>Fuente, tarea, condición normal, tiempo/frecuencia y evaluación cuando se active.</td><td>Exposición aceptable sólo por percepción o lectura casual.</td></tr>
          <tr><td>Compresor / presión</td><td>Placa/modelo/serie, presión/volumen, dispositivos, mangueras/reguladores/drenaje y servicio.</td><td>Aplicabilidad/categoría NOM-020 sólo por existir compresor.</td></tr>
          <tr><td>Carga manual</td><td>Pieza/carga real, peso si se conoce, ruta, método/personas y ayuda mecánica.</td><td>Riesgo ergonómico completo sin analizar la tarea real.</td></tr>
          <tr><td>Descarga de agua</td><td>Punto, proceso de origen, ruta/destino y caracterización/permiso cuando se active.</td><td>Cumplimiento de límites sólo porque llega a una coladera.</td></tr>
          <tr><td>Servicios sanitarios / comedor</td><td>Condición limpia/usable, agua, separación de proceso/químicos y privacidad.</td><td>Suficiencia cuantitativa o accesibilidad si no se evaluaron.</td></tr>
        </tbody>
      </table></div>
      <h2>Respaldo de auditoría</h2>
      <div class="callout">Los resultados viven en este navegador. Exporta un respaldo JSON para conservarlos o moverlos a otro equipo. El respaldo sólo guarda estados y notas; no modifica criterios, normas ni el estándar permanente.</div>
      <div class="tool-links">
        <button type="button" id="auditBackupExport">EXPORTAR RESPALDO</button>
        <label for="auditBackupImport">IMPORTAR RESPALDO</label>
        <input id="auditBackupImport" type="file" accept=".json,application/json" hidden>
      </div>
      <div id="auditBackupStatus"></div>
      <h2>Línea base por departamento</h2>
      <div id="baselineRegistry">Cargando línea base...</div>
    `
  },
  ...Object.entries(window.ROCA_DEPARTMENTS || {}).map(([areaId, area]) => ({
    id:"audit-"+area.code.toLowerCase(),
    nav:"Auditoría · "+area.title,
    title:"Auditoría · "+area.title,
    eyebrow:"ROCA · auditoría por área",
    lead:area.purpose||"Criterios permanentes del departamento.",
    body:`
      <div class="audit-area-shell" data-audit-area="${areaId}" data-audit-code="${area.code}">
        <div class="callout"><strong>Criterio fijo:</strong> se deriva del estándar permanente del área y de la base normativa aplicable. El estado auditado cambia; el criterio no se borra por cerrar una acción.</div>
        <div class="audit-workspace">
          <aside class="audit-norm-context" id="auditNormContext"><div class="audit-context-empty"><strong>CONTEXTO NORMATIVO</strong><p>Selecciona “VER FUNDAMENTO” en un criterio físico para mantener visible la NOM, el dato requerido, el cálculo y la cita mientras evalúas.</p></div></aside>
          <div class="audit-table-host">Cargando criterios...</div>
        </div>
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
      const criteria = departments.reduce((sum,d)=>sum+(window.ROCA_AUDIT_ENGINE?window.ROCA_AUDIT_ENGINE.criteriaForArea(d.id).length:(Array.isArray(d.auditCriteria)?d.auditCriteria.length:0)),0);
      host.innerHTML = '<div class="callout"><strong>'+areas+' departamentos</strong> · '+criteria+' criterios específicos actualmente estructurados. La línea base se congela por departamento; la auditoría posterior cambia el resultado, no redefine automáticamente el criterio.</div>';
    }
    const workloadHost=document.getElementById('auditWorkloadMatrix');
    if(workloadHost&&window.ROCA_AUDIT_ENGINE){
      const kinds=["CALCULAR","MEDIR","INSPECCIONAR","DOCUMENTAR","CONDICIONAL"];
      const records=Object.entries(window.ROCA_DEPARTMENTS||{}).map(([areaId,d])=>{
        const criteria=window.ROCA_AUDIT_ENGINE.criteriaForArea(areaId);
        const counts=Object.fromEntries(kinds.map(k=>[k,0]));
        criteria.forEach(r=>{const k=String(r.evaluationKind||"INSPECCIONAR"); if(Object.prototype.hasOwnProperty.call(counts,k)) counts[k]++;});
        return {areaId,title:d.title||areaId,total:criteria.length,counts};
      });
      const totals=Object.fromEntries(kinds.map(k=>[k,records.reduce((s,r)=>s+r.counts[k],0)]));
      const grand=records.reduce((s,r)=>s+r.total,0);
      workloadHost.innerHTML='<div class="tablewrap"><table class="audit-workload-table"><thead><tr><th>Departamento</th><th>Total</th>'+kinds.map(k=>'<th>'+k+'</th>').join('')+'</tr></thead><tbody>'+
        records.map(r=>'<tr data-audit-workload-area="'+r.areaId+'"><td><strong>'+r.title+'</strong></td><td>'+r.total+'</td>'+kinds.map(k=>'<td>'+r.counts[k]+'</td>').join('')+'</tr>').join('')+
        '<tr class="audit-workload-total"><td><strong>TOTAL</strong></td><td><strong>'+grand+'</strong></td>'+kinds.map(k=>'<td><strong>'+totals[k]+'</strong></td>').join('')+'</tr>'+
        '</tbody></table></div>';
    }
    const globalHost=document.getElementById('auditGlobalConditionalNorms');
    if(globalHost){
      const ctx=window.ROCA_NORM_CONTEXT||{};
      const ids=Array.isArray(ctx.globalConditionalReqIds)?ctx.globalConditionalReqIds:[];
      globalHost.innerHTML='<div class="audit-global-grid">'+ids.map(id=>{
        const d=ctx.byReq&&ctx.byReq[id];
        if(!d) return '<div class="audit-global-card missing"><strong>'+id+'</strong><p>Ficha normativa faltante.</p></div>';
        return '<div class="audit-global-card"><div class="audit-context-req">'+id+'</div><h3>'+String(d.mode||'').replaceAll('_',' ')+'</h3><p><b>Trigger / por qué:</b> '+d.why+'</p><p><b>Captura:</b> '+d.capture+'</p><p><b>Decisión:</b> '+d.calculation+'</p><div class="audit-context-citation '+(String(d.citationStatus||'').startsWith('VERIFIED')?'verified':'pending')+'"><b>Cita:</b> '+d.citation+'<br><small>'+d.citationStatus+'</small></div>'+(d.source?'<a class="audit-context-source" target="_blank" rel="noopener" href="'+d.source+'">ABRIR FUENTE OFICIAL</a>':'')+'</div>';
      }).join('')+'</div>';
    }
    const backupStatus=document.getElementById('auditBackupStatus');
    const exportBtn=document.getElementById('auditBackupExport');
    const importInput=document.getElementById('auditBackupImport');
    if(exportBtn){
      exportBtn.addEventListener('click',()=>{
        try{
          if(!window.ROCA_AUDIT_ENGINE) throw new Error('Motor de auditoría no disponible.');
          const payload=window.ROCA_AUDIT_ENGINE.exportAuditState();
          const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
          const href=URL.createObjectURL(blob);
          const a=document.createElement('a');
          a.href=href;
          a.download='ROCA_AUDITORIA_BACKUP_'+new Date().toISOString().slice(0,10)+'.json';
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(href);
          if(backupStatus) backupStatus.innerHTML='<div class="callout"><strong>Respaldo exportado.</strong> Conserva el JSON junto con la evidencia de auditoría.</div>';
        }catch(e){
          if(backupStatus) backupStatus.innerHTML='<div class="callout"><strong>No se pudo exportar:</strong> '+String(e.message||e)+'</div>';
        }
      });
    }
    if(importInput){
      importInput.addEventListener('change',async()=>{
        const file=importInput.files&&importInput.files[0];
        if(!file) return;
        try{
          if(!window.ROCA_AUDIT_ENGINE) throw new Error('Motor de auditoría no disponible.');
          const result=window.ROCA_AUDIT_ENGINE.importAuditState(await file.text());
          if(backupStatus) backupStatus.innerHTML='<div class="callout"><strong>Respaldo importado.</strong> '+result.areas+' áreas · '+result.criteria+' criterios restaurados · '+result.ignored+' entradas ignoradas por seguridad.</div>';
        }catch(e){
          if(backupStatus) backupStatus.innerHTML='<div class="callout"><strong>Respaldo rechazado:</strong> '+String(e.message||e)+'</div>';
        }finally{
          importInput.value='';
        }
      });
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

  const rows=window.ROCA_AUDIT_ENGINE
    ? window.ROCA_AUDIT_ENGINE.criteriaForArea(areaId)
    : [];

  const storageKey = 'roca.audit.'+areaId;
  let saved = window.ROCA_AUDIT_ENGINE
    ? window.ROCA_AUDIT_ENGINE.loadState(areaId)
    : {};
  if(!window.ROCA_AUDIT_ENGINE){
    try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch(e) {}
  }
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
  function auditMetrics(){
    const values=rows.map(row=>{
      const v=saved[row.id]||{};
      const status=String(v.status||'NOT_VERIFIED').toUpperCase();
      if(window.ROCA_AUDIT_ENGINE&&typeof window.ROCA_AUDIT_ENGINE.closureDetailValid==='function'){
        return window.ROCA_AUDIT_ENGINE.closureDetailValid(status,v.note)?status:'NOT_VERIFIED';
      }
      if(status!=='NOT_VERIFIED'&&!String(v.note||'').trim()) return 'NOT_VERIFIED';
      return status;
    });
    const conforming=values.filter(x=>x==='CONFORMING').length;
    const nonconforming=values.filter(x=>x==='NONCONFORMING').length;
    const na=values.filter(x=>x==='NA_JUSTIFIED').length;
    const notVerified=values.filter(x=>x==='NOT_VERIFIED').length;
    const assessed=conforming+nonconforming;
    const closed=conforming+nonconforming+na;
    const compliance=assessed?Math.round((conforming/assessed)*100):0;
    const coverage=values.length?Math.round((closed/values.length)*100):0;
    return {total:values.length,conforming,nonconforming,na,notVerified,compliance,coverage,open:nonconforming};
  }
  function metricMarkup(){
    const m=auditMetrics();
    return '<div class="audit-metrics">'+
      '<div><strong>'+m.compliance+'%</strong><span>Cumplimiento</span><small>Conforme / evaluado</small></div>'+
      '<div><strong>'+m.coverage+'%</strong><span>Cobertura</span><small>Evaluado o N/A / total</small></div>'+
      '<div><strong>'+m.nonconforming+'</strong><span>No conforme</span><small>Corrección requerida</small></div>'+
      '<div><strong>'+m.notVerified+'</strong><span>No verificado</span><small>Levantamiento pendiente</small></div>'+
      '<div><strong>'+m.open+'</strong><span>IMPLEMENTAR</span><small>Brechas abiertas</small></div>'+
      '</div>';
  }
  const html = promotedHtml + '<div id="auditMetricsHost">'+metricMarkup()+'</div><table class="audit-central-table"><thead><tr><th>ID</th><th>Base</th><th>Criterio fijo</th><th>Modo / evidencia</th><th>Resultado</th><th>Dato / nota</th><th>Implementación</th></tr></thead><tbody>'+
    rows.map((row,i)=>{
      const id=row.id || (code+'-FT-'+String(i+1).padStart(2,'0'));
      const v=saved[id]||{};
      const action=openByReq.get(id);
      const dynamicOpen=(v.status==='NONCONFORMING');
      const implementationText=action
        ? '<strong>ABIERTA · REGISTRO</strong><br>'+String(action.correction||'')
        : (dynamicOpen?'<strong>ABIERTA · AUDITORÍA</strong><br>'+String(row.evaluationKind||'INSPECCIONAR')+' · '+String(row.verificationRoute||'INSPECCIÓN DE CAMPO')+' · cerrar la brecha y demostrar con: '+String(row.evidenceContract||row.input||'evidencia objetiva'):'—');
      const normButton=(row.normReqIds&&row.normReqIds.length)
        ? '<button type="button" class="audit-norm-open" data-norm-ids="'+row.normReqIds.join(';')+'">VER FUNDAMENTO</button>'
        : '';
      const evalKind=String(row.evaluationKind||'INSPECCIONAR');
      const evalSteps=Array.isArray(row.evaluationSteps)&&row.evaluationSteps.length?row.evaluationSteps.join(' → '):evalKind;
      const evidenceContract=String(row.evidenceContract||row.input||'Evidencia observable y trazable.');
      const verificationRoute=String(row.verificationRoute||'INSPECCIÓN DE CAMPO');
      const evalMarkup='<span class="audit-eval-badge eval-'+evalKind.toLowerCase()+'">'+evalKind+'</span><small class="audit-eval-steps">'+evalSteps+'</small><span class="audit-route-badge">'+verificationRoute+'</span><p class="audit-evidence-contract"><b>Demostrar con:</b> '+evidenceContract+'</p>';
      return '<tr data-audit-id="'+id+'"><td><strong>'+id+'</strong><br><small>'+row.group+' · '+row.label+'</small></td><td><small>'+String(row.basis||'Estándar ROCA')+'</small>'+normButton+'</td><td>'+row.target+'</td><td class="audit-evaluation">'+evalMarkup+'</td><td><select class="audit-status"><option value="NOT_VERIFIED">NO VERIFICADO</option><option value="CONFORMING">CONFORME</option><option value="NONCONFORMING">NO CONFORME</option><option value="NA_JUSTIFIED">NO APLICA — JUSTIFICACIÓN</option></select></td><td><textarea class="audit-note" rows="3" placeholder="'+evidenceContract.replace(/"/g,'&quot;')+'">'+(v.note||'')+'</textarea><div class="audit-validation" role="status"></div></td><td class="audit-implementation">'+implementationText+'</td></tr>';
    }).join('')+'</tbody></table>';
  root.querySelector('.audit-table-host').innerHTML = html;
  const normContext=document.getElementById('auditNormContext');
  function renderAreaNormSummary(){
    if(!normContext) return;
    const ctx=window.ROCA_NORM_CONTEXT||{};
    const ids=(ctx.areaToReqIds&&ctx.areaToReqIds[areaId])||[];
    const cards=ids.map(id=>ctx.byReq&&ctx.byReq[id] ? '<button type="button" class="audit-area-norm-row audit-area-norm-open" data-norm-id="'+id+'"><strong>'+id+'</strong><span>'+String(ctx.byReq[id].mode||'').replaceAll('_',' ')+'</span></button>' : '<button type="button" class="audit-area-norm-row audit-area-norm-open pending" data-norm-id="'+id+'"><strong>'+id+'</strong><span>REFERENCIA / CITA ESPECÍFICA PENDIENTE</span></button>').join('');
    normContext.innerHTML='<div class="audit-context-head">NORMAS DEL ÁREA</div><p class="audit-context-summary">Marco aplicable/condicional para este departamento. Selecciona VER FUNDAMENTO en un criterio para fijar cálculo, captura y cita exacta.</p>'+cards;
  }
  function renderNormContext(ids){
    if(!normContext) return;
    const ctx=window.ROCA_NORM_CONTEXT||{};
    const rows=(ids||[]).map(id=>({id,data:ctx.byReq&&ctx.byReq[id]})).filter(x=>x.data);
    if(!rows.length){
      normContext.innerHTML='<div class="audit-context-empty"><strong>CONTEXTO NORMATIVO</strong><p>No hay ficha técnica/cálculo estructurado todavía para este criterio. Conserva la referencia visible y no inventes numeral o fórmula.</p></div>';
      return;
    }
    normContext.innerHTML='<div class="audit-context-head">FUNDAMENTO DE LA EVALUACIÓN</div>'+rows.map(x=>{
      const d=x.data;
      const citationClass=String(d.citationStatus||'').startsWith('VERIFIED')?'verified':'pending';
      return '<section class="audit-context-card">'+
        '<div class="audit-context-req">'+x.id+'</div>'+
        '<h3>'+String(d.mode||'').replaceAll('_',' ')+'</h3>'+
        '<p><b>Por qué:</b> '+d.why+'</p>'+
        '<p><b>Captura:</b> '+d.capture+'</p>'+
        '<p><b>Cálculo / decisión:</b> '+d.calculation+'</p>'+
        '<div class="audit-context-citation '+citationClass+'"><b>Cita:</b> '+d.citation+'<br><small>'+d.citationStatus+'</small></div>'+
        (d.source?'<a class="audit-context-source" target="_blank" rel="noopener" href="'+d.source+'">ABRIR FUENTE OFICIAL</a>':'')+
      '</section>';
    }).join('');
  }
  renderAreaNormSummary();
  root.querySelectorAll('.audit-area-norm-open').forEach(btn=>{
    btn.addEventListener('click',()=>{
      renderNormContext([String(btn.dataset.normId||'')].filter(Boolean));
      root.querySelectorAll('.audit-area-norm-open').forEach(x=>x.classList.toggle('active',x===btn));
      root.querySelectorAll('.audit-norm-open').forEach(x=>x.classList.remove('active'));
    });
  });
  root.querySelectorAll('.audit-norm-open').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const ids=String(btn.dataset.normIds||'').split(';').filter(Boolean);
      renderNormContext(ids);
      root.querySelectorAll('.audit-norm-open').forEach(x=>x.classList.toggle('active',x===btn));
    });
  });

  root.querySelectorAll('tr[data-audit-id]').forEach(tr=>{
    const id=tr.dataset.auditId, v=saved[id]||{};
    const sel=tr.querySelector('.audit-status');
    const note=tr.querySelector('.audit-note');
    const storedStatus=String(v.status||'NOT_VERIFIED').toUpperCase();
    const storedValid=window.ROCA_AUDIT_ENGINE&&typeof window.ROCA_AUDIT_ENGINE.closureDetailValid==='function'
      ? window.ROCA_AUDIT_ENGINE.closureDetailValid(storedStatus,v.note)
      : (storedStatus==='NOT_VERIFIED'||Boolean(String(v.note||'').trim()));
    sel.value=storedValid?storedStatus:'NOT_VERIFIED';
    const validation=tr.querySelector('.audit-validation');
    if(validation&&!storedValid) validation.textContent='Estado anterior no cuenta como cerrado porque no tiene dato, evidencia o justificación suficiente.';
    tr.classList.toggle('audit-invalid',!storedValid);
    const persist=()=>{
      const status=sel.value;
      const detail=String(note.value||'').trim();
      let error='';
      if(status==='CONFORMING'&&!detail) error='Para cerrar CONFORME registra el dato, observación o evidencia que lo demuestra.';
      if(status==='NONCONFORMING'&&!detail) error='Describe la brecha observada antes de abrir IMPLEMENTAR.';
      if(status==='NA_JUSTIFIED'&&!detail) error='NO APLICA requiere una justificación concreta.';
      if(validation) validation.textContent=error;
      tr.classList.toggle('audit-invalid',Boolean(error));
      if(error) return;

      if(window.ROCA_AUDIT_ENGINE){
        saved=window.ROCA_AUDIT_ENGINE.saveCriterion(areaId,id,{status,note:note.value});
      }else{
        saved[id]={status,note:note.value,updatedAt:new Date().toISOString()};
        localStorage.setItem(storageKey,JSON.stringify(saved));
      }
      const host=document.getElementById('auditMetricsHost');
      if(host) host.innerHTML=metricMarkup();
      const cell=tr.querySelector('.audit-implementation');
      const action=openByReq.get(id);
      if(cell&&!action){
        const rowDef=rows.find(r=>r.id===id)||{};
        cell.innerHTML=(status==='NONCONFORMING')
          ? '<strong>ABIERTA · AUDITORÍA</strong><br>'+String(rowDef.evaluationKind||'INSPECCIONAR')+' · '+String(rowDef.verificationRoute||'INSPECCIÓN DE CAMPO')+' · cerrar la brecha y demostrar con: '+String(rowDef.evidenceContract||rowDef.input||'evidencia objetiva')
          : '—';
      }
    };
    sel.addEventListener('change',persist);
    note.addEventListener('input',persist);
  });
};