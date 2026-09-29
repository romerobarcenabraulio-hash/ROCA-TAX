(function(){
  const rail=document.getElementById('controlRail');
  if(!rail) return;
  const status=document.getElementById('controlStatus');
  const dept=document.getElementById('controlDepartment');
  const version=document.getElementById('controlVersion');
  const frozenAt=document.getElementById('controlFrozenAt');
  const note=document.getElementById('controlLockNote');
  const freeze=document.getElementById('freezeDepartment');
  const unlock=document.getElementById('unlockDepartment');
  const choose=document.getElementById('chooseImages');
  const auditMap={rec:'area-recepcion',cur:'area-curtiduria',fmr:'area-fmr',mon:'area-montaje',ret:'area-retoque',bas:'area-bases',car:'area-carpinteria',sol:'area-soldadura',bla:'area-blanqueado',sop:'area-soporte'};
  function parseCSV(text){
    const lines=text.trim().split(/\r?\n/);
    const head=(lines.shift()||'').split(',');
    return lines.filter(Boolean).map(line=>{
      const vals=line.split(',');
      return Object.fromEntries(head.map((h,i)=>[h,vals[i]||'']));
    });
  }
  function currentDepartment(){
    const id=(location.hash||'').replace(/^#/,'');
    if(id.startsWith('area-')) return id;
    if(id.startsWith('audit-')) return auditMap[id.slice(6).toLowerCase()]||null;
    return null;
  }
  async function refresh(){
    const id=currentDepartment();
    if(!id){
      dept.textContent='Sin departamento'; status.textContent='—'; version.textContent='—'; frozenAt.textContent='—';
      freeze.disabled=true; unlock.disabled=true; choose.disabled=true;
      note.textContent='Abre un departamento o su auditoría para usar estos controles.';
      return;
    }
    choose.disabled=true;
    const res=await fetch('ops/control/ROCA_DEPARTMENT_BASELINE_V1.csv',{cache:'no-store'});
    const row=res.ok?parseCSV(await res.text()).find(r=>r.department_id===id):null;
    dept.textContent=row?.department_name||id;
    status.textContent=row?.baseline_status||'NO REGISTRADO';
    version.textContent=row?.baseline_version||'—';
    frozenAt.textContent=row?.frozen_date||'—';
    freeze.disabled=true; unlock.disabled=true;
    note.textContent='Estado leído del registro controlado. Congelar/desbloquear requiere Auth Owner/Admin; no se habilita escritura anónima.';
  }
  window.addEventListener('hashchange',refresh);
  document.addEventListener('roca:sectionchange',refresh);
  refresh();
})();