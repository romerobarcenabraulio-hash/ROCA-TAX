(function(){
  const data = window.ROCA_DATA;
  if (Array.isArray(window.ROCA_EDITORIAL_SECTIONS)) data.sections.push(...window.ROCA_EDITORIAL_SECTIONS);
  if (Array.isArray(window.ROCA_WORKSHOP_SECTIONS)) data.sections.push(...window.ROCA_WORKSHOP_SECTIONS);

  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const manualMode = document.getElementById('manualMode');
  const auditMode = document.getElementById('auditMode');
  const normsMode = document.getElementById('normsMode');
  const printDoc = document.getElementById('printDoc');

  const hiddenLegacy = new Set([
    'estado','implementacion','areas','residuos','erp','evidencia','editorial','posters',
    'responsabilidades','documentos','internacional','legal','master-exacto',
    'procesos','trazabilidad','cumplimiento','machotes-guias','controles-transversales','assurance'
  ]);
  const manualSections = data.sections.filter(s => s && !hiddenLegacy.has(s.id) && !String(s.id||'').startsWith('campo-'));
  const auditSections = Array.isArray(window.ROCA_AUDIT_SECTIONS) ? window.ROCA_AUDIT_SECTIONS : [];
  const normSections = Array.isArray(window.ROCA_NORM_SECTIONS) ? window.ROCA_NORM_SECTIONS : [];

  let activeMode = 'manual';
  let activeSections = manualSections;

  function esc(v){
    return String(v == null ? '' : v)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function footer(label){
    return '<div class="folio"><span>ROCA TAXIDERMY · MANUAL MAESTRO</span><span>'+esc(label||'')+'</span></div>';
  }

  function coverMarkup(){
    return '<article class="paper cover-paper" data-section="portada">'+
      '<div class="cover-kicker">ROCA TAXIDERMY · ARTE Y TRADICIÓN · DESDE 1946</div>'+
      '<div class="cover-main"><h1>ROCA TAXIDERMY<br>Manual maestro</h1>'+
      '<p>Operación · áreas · metodología · auditoría · criterios normativos · trazabilidad</p><div class="bronze-rule"></div></div>'+
      '<div class="cover-bottom"><strong>SISTEMA CENTRAL DE TRABAJO</strong>'+
      '<span>El HTML concentra el manual, la auditoría y la memoria de criterio. IMPLEMENTAR conserva únicamente el trabajo temporal para llegar al estándar.</span></div>'+
      footer('PORTADA')+'</article>';
  }

  function departmentMarkup(section){
    const dept = window.ROCA_DEPARTMENTS && window.ROCA_DEPARTMENTS[section && section.id];
    if(!dept) return '';

    const specificAreaRows=(dept.area||[]).map(r=>
      '<tr><td><strong>'+esc(r.id)+'</strong><br><small>'+esc(r.label||'')+'</small></td><td>'+esc(r.text)+'</td></tr>'
    ).join('');
    const physicalRows=(Array.isArray(window.ROCA_AREA_PHYSICAL_STANDARD)?window.ROCA_AREA_PHYSICAL_STANDARD:[])
      .filter(r=>r.areas==='ALL' || (Array.isArray(r.areas)&&r.areas.includes(section.id)))
      .map(r=>'<tr class="physical-row"><td><strong>'+esc(r.id)+'</strong><br><small>'+esc(r.label||'')+'</small></td><td>'+esc(r.standard)+'</td></tr>')
      .join('');
    const areaRows=specificAreaRows+physicalRows;
    const auditRows=(dept.areaAudit||[]).map(r=>
      '<tr><td><strong>'+esc(r.id)+'</strong></td><td>'+esc(r.criterion)+'</td><td>'+esc(r.evidence)+'</td></tr>'
    ).join('');
    const stages=(dept.method?.stages||[]).map(r=>
      '<section class="method-stage"><h3>'+esc(r.id)+' · '+esc(r.title)+'</h3><p>'+esc(r.text)+'</p></section>'
    ).join('');
    const branches=(dept.method?.branches||[]).map(r=>
      '<div class="callout"><strong>'+esc(r.title)+':</strong> '+esc(r.text)+'</div>'
    ).join('');
    const controls=(dept.method?.controls||[]).map(r=>'<li><strong>'+esc(r.id)+':</strong> '+esc(r.text)+'</li>').join('');
    const tools=(dept.tools||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const consumables=(dept.consumables||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const evidence=(dept.evidence||[]).map(r=>
      '<tr><td><strong>'+esc(r.id)+'</strong></td><td>'+esc(r.text)+'</td><td>'+esc(r.placement)+'</td></tr>'
    ).join('');
    const people=(dept.people||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const entryInputs=(dept.entryInputs||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const entryStops=(dept.entryStops||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const exitCriteria=(dept.exitCriteria||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const toolCare=(dept.toolCare||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const competencies=(dept.competencies||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const controlRecords=(dept.controlRecords||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    const materialFlow=(dept.materialFlow||[]).map(x=>'<li>'+esc(x)+'</li>').join('');

    const governance = (people||entryInputs||entryStops||exitCriteria)
      ? '<section class="department-block"><div class="eyebrow">00 · CONTEXTO OPERATIVO</div><h2>Equipo, entrada y salida</h2>'+
        (people?'<h3>Equipo conocido</h3><ul>'+people+'</ul>':'')+
        (entryInputs?'<h3>Debe llegar con</h3><ul>'+entryInputs+'</ul>':'')+
        (entryStops?'<h3>Detener o devolver cuando</h3><ul>'+entryStops+'</ul>':'')+
        (exitCriteria?'<h3>Condición de salida</h3><ul>'+exitCriteria+'</ul>':'')+
        '</section>' : '';

    const operations = (toolCare||competencies||controlRecords||materialFlow)
      ? '<section class="department-two-col">'+
        (toolCare?'<section class="department-block"><div class="eyebrow">06 · CUIDADO DE HERRAMIENTA</div><h2>Condición de uso</h2><ul>'+toolCare+'</ul></section>':'')+
        (competencies?'<section class="department-block"><div class="eyebrow">07 · PERSONAS / COMPETENCIA</div><h2>Operaciones que requieren autorización</h2><ul>'+competencies+'</ul></section>':'')+
        (controlRecords?'<section class="department-block"><div class="eyebrow">08 · CONTROL / REGISTROS</div><h2>Qué debe mantenerse ligado a la pieza</h2><ul>'+controlRecords+'</ul></section>':'')+
        (materialFlow?'<section class="department-block"><div class="eyebrow">09 · FLUJO DE MATERIAL</div><h2>Qué se registra por tarea</h2><ul>'+materialFlow+'</ul></section>':'')+
        '</section>' : '';

    return '<section class="department-canonical">'+
      '<div class="department-purpose"><div class="eyebrow">DEPARTAMENTO</div><h2>'+esc(dept.title)+'</h2><p>'+esc(dept.purpose)+'</p>'+
      '<div class="department-handoff"><span><strong>Recibe de:</strong> '+esc(dept.receivesFrom||'—')+'</span><span><strong>Entrega a:</strong> '+esc(dept.handsOffTo||'—')+'</span></div></div>'+
      governance+
      '<section class="department-block"><div class="eyebrow">01 · ÁREA DE TRABAJO</div><h2>Cómo debe estar '+esc(dept.title)+'</h2>'+
      '<p class="source-note">La misma tabla integra condiciones específicas del departamento y controles físicos transversales que realmente le aplican.</p>'+
      '<table><thead><tr><th>ID</th><th>Condición permanente</th></tr></thead><tbody>'+areaRows+'</tbody></table></section>'+
      '<section class="department-block department-audit-block"><div class="eyebrow">02 · AUDITORÍA DEL ÁREA</div><h2>Qué se comprueba en el espacio</h2>'+
      '<p>Esta revisión comprueba el estado físico del departamento. Una desviación real abre IMPLEMENTAR; el criterio permanece.</p>'+
      '<table><thead><tr><th>ID</th><th>Criterio</th><th>Evidencia útil</th></tr></thead><tbody>'+auditRows+'</tbody></table></section>'+
      '<section class="department-block"><div class="eyebrow">03 · METODOLOGÍA</div><h2>Cómo se trabaja</h2>'+
      '<p class="flow-line">'+esc(dept.method?.flow||'')+'</p>'+branches+stages+
      '<h3>Controles que viajan con el proceso</h3><ul>'+controls+'</ul></section>'+
      '<section class="department-two-col">'+
        '<section class="department-block"><div class="eyebrow">04 · HERRAMIENTAS / EQUIPO</div><h2>Qué usa '+esc(dept.title)+'</h2><ul>'+tools+'</ul></section>'+
        '<section class="department-block"><div class="eyebrow">05 · CONSUMIBLES / MATERIALES</div><h2>Qué entra al proceso</h2><ul>'+consumables+'</ul></section>'+
      '</section>'+
      operations+
      '<section class="department-block"><div class="eyebrow">10 · EVIDENCIA</div><h2>Qué evidencia sirve y dónde va</h2>'+
      '<table><thead><tr><th>ID</th><th>Qué demuestra</th><th>Placement</th></tr></thead><tbody>'+evidence+'</tbody></table></section>'+
      '</section>';
  }

  function sectionMarkup(section){
    const posters = section.posters ? section.posters.map(([name,items]) =>
      '<section class="poster"><div class="poster-sub">ROCA · condición de área</div><h2>'+esc(name)+'</h2><ol>'+
      items.map(x=>'<li>'+x+'</li>').join('')+'</ol></section>'
    ).join('') : '';
    return '<article class="paper master-paper" data-section="'+esc(section.id)+'">'+
      '<div class="page-head"><span>'+esc(section.eyebrow||'ROCA / MANUAL MAESTRO')+'</span><span>ROCA TAXIDERMY</span></div>'+
      '<div class="eyebrow">'+esc(section.eyebrow||'')+'</div>'+
      '<h1>'+esc(section.title||section.nav||section.id)+'</h1>'+
      '<p class="lead">'+esc(section.lead||'')+'</p><div class="bronze-rule short"></div>'+
      '<div class="master-content">'+((window.ROCA_DEPARTMENTS&&window.ROCA_DEPARTMENTS[section.id])?departmentMarkup(section):(section.body||''))+posters+'</div>'+
      footer(section.nav ? String(section.nav).toUpperCase() : '')+'</article>';
  }

  function buildNav(sections){
    nav.innerHTML='';
    if(activeMode==='manual'){
      const cover=document.createElement('button');
      cover.type='button'; cover.dataset.id='portada'; cover.textContent='00  Portada';
      cover.addEventListener('click',()=>go('portada'));
      nav.appendChild(cover);
    }
    sections.forEach((section,i)=>{
      const b=document.createElement('button');
      b.type='button'; b.dataset.id=section.id;
      b.textContent=String(i+1).padStart(2,'0')+'  '+section.nav;
      b.addEventListener('click',()=>go(section.id));
      nav.appendChild(b);
    });
  }

  function markActive(id){
    nav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x.dataset.id===id));
    page.focus({preventScroll:true});
    window.scrollTo({top:0,left:0,behavior:'auto'});
    document.dispatchEvent(new CustomEvent('roca:sectionchange',{detail:{id,mode:activeMode}}));
  }

  async function afterRender(section){
    if(activeMode==='audit' && typeof window.ROCA_AUDIT_ENHANCE==='function') await window.ROCA_AUDIT_ENHANCE(section.id);
    if(activeMode==='norms' && typeof window.ROCA_NORMS_ENHANCE==='function') await window.ROCA_NORMS_ENHANCE(section.id);
  }

  function renderCover(){
    page.innerHTML=coverMarkup();
    document.title='ROCA TAXIDERMY · Manual maestro';
    markActive('portada');
  }

  function render(section){
    page.innerHTML=sectionMarkup(section);
    document.title=(section.nav||section.title)+' · ROCA TAXIDERMY';
    markActive(section.id);
    afterRender(section);
  }

  function go(id){
    if(activeMode==='manual' && (!id || id==='portada')){
      history.replaceState(null,'','#portada');
      renderCover();
      return;
    }
    const target=activeSections.find(s=>s.id===id) || activeSections[0];
    if(!target){ renderCover(); return; }
    history.replaceState(null,'','#'+target.id);
    render(target);
  }

  function setMode(mode){
    activeMode=mode;
    document.body.classList.remove('audit-mode','norms-mode');
    [manualMode,auditMode,normsMode].forEach(b=>b && b.classList.remove('active'));

    if(mode==='audit'){
      activeSections=auditSections;
      document.body.classList.add('audit-mode');
      auditMode.classList.add('active');
      contentsPane.querySelector('.contents-title').textContent='Auditoría';
      contentsPane.querySelector('.rule-note').textContent='Verifica dentro del mismo HTML. Una brecha real pasa a IMPLEMENTAR; el criterio fijo permanece en el manual.';
    }else if(mode==='norms'){
      activeSections=normSections;
      document.body.classList.add('norms-mode');
      normsMode.classList.add('active');
      contentsPane.querySelector('.contents-title').textContent='Bibliografía';
      contentsPane.querySelector('.rule-note').textContent='Base normativa, aplicabilidad y memoria fija del criterio. Los PDF visibles deben ser únicamente normas o fuentes oficiales.';
    }else{
      activeMode='manual';
      activeSections=manualSections;
      manualMode.classList.add('active');
      contentsPane.querySelector('.contents-title').textContent='Manual ROCA';
      contentsPane.querySelector('.rule-note').textContent='Una sola fuente operativa: área, metodología, control y criterio permanente viven aquí. IMPLEMENTAR es el único módulo separado.';
    }
    buildNav(activeSections);
    go(mode==='manual' ? 'portada' : (activeSections[0] && activeSections[0].id));
  }

  function renderAllForPrint(){
    const sections=activeMode==='manual'?manualSections:activeSections;
    page.innerHTML=(activeMode==='manual'?coverMarkup():'')+sections.map(sectionMarkup).join('');
    document.title='ROCA TAXIDERMY · '+(activeMode==='manual'?'Manual maestro':activeMode==='audit'?'Auditoría':'Bibliografía');
  }

  manualMode.addEventListener('click',()=>setMode('manual'));
  auditMode.addEventListener('click',()=>setMode('audit'));
  normsMode.addEventListener('click',()=>setMode('norms'));
  printDoc.addEventListener('click',()=>{
    const mode=activeMode;
    renderAllForPrint();
    setTimeout(()=>{ window.print(); setTimeout(()=>setMode(mode),120); },80);
  });
  window.addEventListener('hashchange',()=>{
    const id=location.hash.slice(1);
    if(id) go(id);
  });

  setMode('manual');
})();