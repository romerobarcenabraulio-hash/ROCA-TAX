(function(){
  const rail=document.getElementById('controlRail');
  if(!rail) return;

  const $=id=>document.getElementById(id);
  const els={
    status:$('controlStatus'),
    dept:$('controlDepartment'),
    version:$('controlVersion'),
    frozenAt:$('controlFrozenAt'),
    note:$('controlLockNote'),
    queue:$('imageQueue')
  };

  const auditMap={
    rec:'area-recepcion',
    cur:'area-curtiduria',
    fmr:'area-fmr',
    mon:'area-montaje',
    ret:'area-retoque',
    bas:'area-bases',
    car:'area-carpinteria',
    sol:'area-soldadura',
    bla:'area-blanqueado',
    sop:'area-soporte'
  };

  function parseCSV(text){
    const rows=[]; let row=[],field='',quoted=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){
        if(quoted && text[i+1]==='"'){field+='"';i++;}
        else quoted=!quoted;
      }else if(ch===','&&!quoted){
        row.push(field);field='';
      }else if((ch==='\n'||ch==='\r')&&!quoted){
        if(ch==='\r'&&text[i+1]==='\n') i++;
        row.push(field);field='';
        if(row.some(v=>v!=='')) rows.push(row);
        row=[];
      }else field+=ch;
    }
    if(field||row.length){row.push(field);if(row.some(v=>v!==''))rows.push(row);}
    if(!rows.length) return [];
    const head=rows.shift();
    return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]||''])));
  }

  function currentDepartment(){
    const id=(location.hash||'').replace(/^#/,'');
    if(id.startsWith('area-')) return id;
    if(id.startsWith('audit-')) return auditMap[id.slice(6).toLowerCase()]||null;
    return null;
  }

  function humanStatus(v){
    const key=String(v||'').toLowerCase();
    return ({
      capture_pending:'CAPTURA PENDIENTE',
      partial:'PARCIAL',
      frozen:'CONGELADO',
      unlocked:'DESBLOQUEADO',
      not_released:'NO LIBERADO'
    })[key]||String(v||'—').toUpperCase();
  }

  async function getBaseline(departmentId){
    const res=await fetch('ops/control/ROCA_DEPARTMENT_BASELINE_V1.csv',{cache:'no-store'});
    if(!res.ok) throw new Error('baseline '+res.status);
    return parseCSV(await res.text()).find(r=>r.department_id===departmentId)||null;
  }

  function idle(){
    rail.classList.add('is-idle');
    els.dept.textContent='Sin departamento';
    els.status.textContent='—';
    els.version.textContent='—';
    els.frozenAt.textContent='—';
    els.note.textContent='Abre un departamento para ver el estado de su línea base.';
    if(els.queue) els.queue.innerHTML='';
  }

  async function refresh(){
    const id=currentDepartment();
    if(!id){ idle(); return; }

    rail.classList.remove('is-idle');
    try{
      const b=await getBaseline(id);
      els.dept.textContent=b?.department_name||id;
      els.status.textContent=humanStatus(b?.baseline_status);
      els.status.dataset.state=String(b?.baseline_status||'').toLowerCase();
      els.version.textContent=b?.baseline_version||'—';
      els.frozenAt.textContent=b?.frozen_date||'—';

      if(!b){
        els.note.textContent='Departamento sin línea base registrada.';
      }else if(String(b.baseline_status).toUpperCase()==='FROZEN'){
        els.note.textContent='Línea base congelada para publicación. Sólo se reabre si cambia el proceso, el área o el fundamento aplicable.';
      }else if(String(b.baseline_status).toUpperCase()==='NOT_RELEASED'){
        els.note.textContent='Departamento no liberado. Falta cerrar captura o evidencia antes de imprimirlo como definitivo.';
      }else{
        els.note.textContent='Departamento en construcción/revisión. Al cerrar contenido, evidencia y pendientes puede congelarse para impresión.';
      }

      if(els.queue){
        els.queue.innerHTML='<div class="image-queue-empty">Placement fotográfico previsto por departamento. Las imágenes finales se insertan en su sección antes del cierre editorial.</div>';
      }
    }catch(e){
      els.dept.textContent=id;
      els.status.textContent='SIN CONEXIÓN';
      els.version.textContent='—';
      els.frozenAt.textContent='—';
      els.note.textContent='No se pudo leer la línea base controlada.';
    }
  }

  window.addEventListener('hashchange',refresh);
  document.addEventListener('roca:sectionchange',refresh);
  refresh();
})();