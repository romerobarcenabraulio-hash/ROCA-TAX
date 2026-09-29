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
    freeze:$('freezeDepartment'),
    unlock:$('unlockDepartment'),
    choose:$('chooseImages'),
    placement:$('imagePlacement'),
    sectionKey:$('imageSectionKey'),
    caption:$('imageCaption')
  };

  const auditMap={rec:'area-recepcion',cur:'area-curtiduria',fmr:'area-fmr',mon:'area-montaje',ret:'area-retoque',bas:'area-bases',car:'area-carpinteria',sol:'area-soldadura',bla:'area-blanqueado',sop:'area-soporte'};
  let activeBaseline=null;

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

  function canEdit(){
    return Boolean(window.ROCA_MANUAL_AUTH && window.ROCA_MANUAL_AUTH.canEdit);
  }

  function setEditorControls(row){
    const editable=canEdit();
    const state=String(row?.baseline_status||row?.status||'').toLowerCase();
    const hasDept=Boolean(currentDepartment());

    els.freeze.disabled=!(editable && hasDept && state!=='frozen' && state!=='not_released');
    els.unlock.disabled=!(editable && hasDept && state==='frozen');

    const imagesEnabled=editable && hasDept;
    els.choose.disabled=!imagesEnabled;
    els.placement.disabled=!imagesEnabled;
    els.sectionKey.disabled=!imagesEnabled;
    els.caption.disabled=!imagesEnabled;

    if(!hasDept){
      els.note.textContent='Abre un departamento o su auditoría para usar estos controles.';
    }else if(!editable){
      els.note.textContent='Lectura habilitada. Congelar, desbloquear y subir imágenes requieren una sesión Owner/Admin.';
    }else if(state==='not_released'){
      els.note.textContent='Departamento NO LIBERADO: puede recibir evidencia e imágenes, pero no puede congelarse todavía.';
    }else if(state==='frozen'){
      els.note.textContent='Línea base congelada. Desbloquear exige motivo y genera nueva versión e historial.';
    }else{
      els.note.textContent='Sesión autorizada. Los cambios quedan sujetos a RLS e historial controlado.';
    }
  }

  async function baselineFromFallback(id){
    const res=await fetch('ops/control/ROCA_DEPARTMENT_BASELINE_V1.csv',{cache:'no-store'});
    if(!res.ok) return null;
    return parseCSV(await res.text()).find(r=>r.department_id===id)||null;
  }

  async function getBaseline(id){
    const live=window.ROCA_MANUAL_AUTH && window.ROCA_MANUAL_AUTH.getBaseline;
    if(typeof live==='function'){
      try{
        const row=await live(id);
        if(row) return row;
      }catch(e){}
    }
    return baselineFromFallback(id);
  }

  function normalize(row){
    if(!row) return null;
    return {
      ...row,
      baseline_status:row.baseline_status||row.status||'',
      baseline_version:row.baseline_version||('V'+String(row.version||'')),
      frozen_date:row.frozen_date||row.frozen_at||''
    };
  }

  async function refresh(){
    const id=currentDepartment();
    if(!id){
      activeBaseline=null;
      els.dept.textContent='Sin departamento';
      els.status.textContent='—';
      els.version.textContent='—';
      els.frozenAt.textContent='—';
      setEditorControls(null);
      return;
    }

    const row=normalize(await getBaseline(id));
    activeBaseline=row;
    els.dept.textContent=row?.department_name||id;
    els.status.textContent=(row?.baseline_status||'NO REGISTRADO').replaceAll('_',' ');
    els.version.textContent=row?.baseline_version||'—';
    els.frozenAt.textContent=row?.frozen_date ? new Date(row.frozen_date).toLocaleDateString('es-MX') : '—';
    setEditorControls(row);
  }

  window.ROCA_MANUAL_CONTROL={
    currentDepartment,
    refresh,
    get activeBaseline(){ return activeBaseline; },
    setNote(message){ els.note.textContent=String(message||''); }
  };

  window.addEventListener('hashchange',refresh);
  document.addEventListener('roca:sectionchange',refresh);
  document.addEventListener('roca:authchange',refresh);
  refresh();
})();