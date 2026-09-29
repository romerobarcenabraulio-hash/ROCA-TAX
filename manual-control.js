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
    const rows=[]; let row=[],field='',quoted=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){
        if(quoted && text[i+1]==='"'){ field+='"'; i++; }
        else quoted=!quoted;
      }else if(ch===',' && !quoted){
        row.push(field); field='';
      }else if((ch==='\n'||ch==='\r') && !quoted){
        if(ch==='\r' && text[i+1]==='\n') i++;
        row.push(field); field='';
        if(row.some(v=>v!=='')) rows.push(row);
        row=[];
      }else field+=ch;
    }
    if(field||row.length){ row.push(field); if(row.some(v=>v!=='')) rows.push(row); }
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