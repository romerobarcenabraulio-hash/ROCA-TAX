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
  if(sectionId === 'audit-inicio'){
    const host = document.getElementById('auditSummary');
    if(host){
      const areas = Object.keys(window.ROCA_FAST_TRACK?.areas || {}).length;
      const criteria = (window.ROCA_FAST_TRACK?.commonRows || []).length;
      host.innerHTML = '<div class="callout"><strong>'+areas+' áreas</strong> · '+criteria+' criterios transversales base por área. Los resultados se guardan en este navegador hasta que se integren al registro controlado.</div>';
    }
    return;
  }
  if(!root) return;
  const areaId = root.dataset.auditArea;
  const code = root.dataset.auditCode;
  const rows = window.ROCA_FAST_TRACK?.commonRows || [];
  const storageKey = 'roca.audit.'+areaId;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch(e) {}
  let implementation = [];
  try{
    const res = await fetch('ops/control/ROCA_IMPLEMENTATION_ACTION_REGISTER_V1.csv',{cache:'no-store'});
    if(res.ok){
      const text = await res.text();
      const lines = text.trim().split(/\r?\n/);
      const head = (lines.shift()||'').split(',');
      implementation = lines.filter(Boolean).map(line=>{
        const vals=line.split(',');
        return Object.fromEntries(head.map((h,i)=>[h,vals[i]||'']));
      }).filter(x=>x.area===areaId);
    }
  }catch(e){}

  const openByReq = new Map(implementation.filter(x=>!['CLOSED','CANCELLED'].includes(String(x.status||'').toUpperCase())).map(x=>[x.target_requirement_id,x]));
  const html = '<table class="audit-central-table"><thead><tr><th>ID</th><th>Criterio fijo</th><th>Resultado</th><th>Dato / nota</th><th>Implementación</th></tr></thead><tbody>'+
    rows.map((row,i)=>{
      const id=code+'-FT-'+String(i+1).padStart(2,'0');
      const v=saved[id]||{};
      const action=openByReq.get(id);
      return '<tr data-audit-id="'+id+'"><td><strong>'+id+'</strong><br><small>'+row.label+'</small></td><td>'+row.target+'</td><td><select class="audit-status"><option value="NOT_CHECKED">SIN REVISAR</option><option value="PASS">CUMPLE</option><option value="FAIL">NO CUMPLE</option><option value="NA">NO APLICA JUSTIFICADO</option></select></td><td><textarea class="audit-note" rows="3" placeholder="'+row.input.replace(/"/g,'&quot;')+'">'+(v.note||'')+'</textarea></td><td>'+(action?'<strong>ABIERTA</strong><br>'+String(action.correction||''):'—')+'</td></tr>';
    }).join('')+'</tbody></table>';
  root.querySelector('.audit-table-host').innerHTML = html;
  root.querySelectorAll('tr[data-audit-id]').forEach(tr=>{
    const id=tr.dataset.auditId, v=saved[id]||{};
    const sel=tr.querySelector('.audit-status');
    const note=tr.querySelector('.audit-note');
    sel.value=v.status||'NOT_CHECKED';
    const persist=()=>{
      saved[id]={status:sel.value,note:note.value,updatedAt:new Date().toISOString()};
      localStorage.setItem(storageKey,JSON.stringify(saved));
    };
    sel.addEventListener('change',persist);
    note.addEventListener('input',persist);
  });
};