(function(){
  const data = window.ROCA_DATA;
  if (Array.isArray(window.ROCA_EDITORIAL_SECTIONS)) data.sections.push(...window.ROCA_EDITORIAL_SECTIONS);
  if (Array.isArray(window.ROCA_WORKSHOP_SECTIONS)) data.sections.push(...window.ROCA_WORKSHOP_SECTIONS);
  if (Array.isArray(window.ROCA_CONTROL_SECTIONS)) data.sections.push(...window.ROCA_CONTROL_SECTIONS);
  if (Array.isArray(window.ROCA_ASSURANCE_SECTIONS)) data.sections.push(...window.ROCA_ASSURANCE_SECTIONS);
  if (Array.isArray(window.ROCA_FIELD_SECTIONS)) data.sections.push(...window.ROCA_FIELD_SECTIONS);
  if (Array.isArray(window.ROCA_EXTRA_SECTIONS)) data.sections.push(...window.ROCA_EXTRA_SECTIONS);

  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const finalMode = document.getElementById('finalMode');
  const compendiumMode = document.getElementById('compendiumMode');
  const fieldMode = document.getElementById('fieldMode');
  const notesMode = document.getElementById('notesMode');
  const printDoc = document.getElementById('printDoc');
  const fastTrackJump = document.getElementById('fastTrackJump');

  const finalOrder = [
    'roca',
    'heritage',
    'personas',
    'taller',
    'procesos',
    'trazabilidad',
    'cumplimiento',
    'machotes-guias'
  ];

  const byId = new Map(data.sections.map(s => [s.id, s]));
  const finalSections = finalOrder.map(id => byId.get(id)).filter(Boolean);
  const compendiumExcluded = ['estado','implementacion','evidencia','editorial','areas','residuos','erp','posters','responsabilidades','documentos','internacional','legal'];
  const compendiumSections = data.sections.filter(s => !compendiumExcluded.includes(s.id) && !s.id.startsWith('campo-'));
  const fieldSections = Array.isArray(window.ROCA_FIELD_SECTIONS) ? window.ROCA_FIELD_SECTIONS : [];
  let activeMode = 'final';

  function buildNav(sections = finalSections){
    nav.innerHTML='';
    const cover = document.createElement('button');
    cover.textContent='00  Portada';
    cover.dataset.id='portada';
    cover.addEventListener('click',()=>go('portada', sections));
    nav.appendChild(cover);
    sections.forEach((section, i) => {
      const b = document.createElement('button');
      b.textContent = `${String(i+1).padStart(2,'0')}  ${section.nav}`;
      b.dataset.id = section.id;
      b.addEventListener('click', () => go(section.id, sections));
      nav.appendChild(b);
    });
  }

  function footer(label){
    return `<div class="folio"><span>ROCA TAXIDERMY · DOCUMENTO MAESTRO · EDICIÓN DE TRABAJO</span><span>${label || ''}</span></div>`;
  }

  function coverMarkup(){
    return `<article class="paper cover-paper" data-section="portada">
      <div class="cover-kicker">ROCA TAXIDERMY · ARTE Y TRADICIÓN · DESDE 1946</div>
      <div class="cover-main">
        <h1>ROCA TAXIDERMY<br>Documento maestro</h1>
        <p>Empresa · personas · taller · procesos · normas · machotes · heritage</p>
        <div class="bronze-rule"></div>
      </div>
      <div class="cover-bottom">
        <strong>EDICIÓN DE TRABAJO · PRE-CIERRE</strong>
        <span>La lectura final resume ROCA; Drive conserva el respaldo integral y la evidencia de cada caso.</span>
      </div>
      ${footer('PORTADA')}
    </article>`;
  }


  function fastTrackMarkup(section){
    const cfg = window.ROCA_FAST_TRACK && window.ROCA_FAST_TRACK.areas ? window.ROCA_FAST_TRACK.areas[section.id] : null;
    if(!cfg) return '';
    const rows = (window.ROCA_FAST_TRACK.commonRows || []).map((r,i)=>`
      <tr>
        <td><strong>${r.label}</strong></td>
        <td class="ft-now">____________________________</td>
        <td>${r.target}</td>
        <td class="ft-action">____________________________</td>
        <td>${r.input}</td>
        <td class="ft-evidence">EVID-${cfg.code}-FT-${String(i+1).padStart(2,'0')}<br>________________</td>
        <td>NOT_CHECKED</td>
      </tr>`).join('');
    return `
      <section class="fast-track-wrap">
        <div class="fast-track-kicker">ROCA · FAST TRACK AUDIT</div>
        <h2>Plan provisional de implementación</h2>
        <p><strong>El estándar anterior no cambia.</strong> Esta tabla registra únicamente la brecha entre la condición actual y el estándar objetivo. Cuando la evidencia exista, el mismo renglón alimenta la auditoría.</p>
        <p class="callout"><strong>Específico de ${cfg.title}:</strong> ${cfg.specific}</p>
        <div class="table-scroll">
          <table class="fast-track-table">
            <thead><tr><th>Elemento</th><th>Cómo está hoy</th><th>Cómo debe quedar</th><th>Qué hacer para llegar</th><th>Dato / cálculo</th><th>Evidencia esperada</th><th>Estado</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <h2>Auditoría de implementación</h2>
        <p>La auditoría verifica dos cosas en paralelo: <strong>el área física</strong> y <strong>la operación que ocurre dentro del área</strong>. Ningún renglón cambia a VERIFIED sin evidencia ID y revisor.</p>
        <div class="table-scroll">
          <table class="fast-track-table audit">
            <thead><tr><th>Req.</th><th>Prueba objetiva</th><th>Resultado</th><th>Evidencia ID</th><th>Hallazgo / acción</th><th>Revisor / fecha</th></tr></thead>
            <tbody>${(window.ROCA_FAST_TRACK.commonRows||[]).map((r,i)=>`
              <tr>
                <td>${cfg.code}-FT-${String(i+1).padStart(2,'0')}</td>
                <td>${r.label}</td>
                <td>NOT_CHECKED</td>
                <td>EVID-${cfg.code}-FT-${String(i+1).padStart(2,'0')}</td>
                <td>________________</td>
                <td>________________</td>
              </tr>`).join('')}</tbody>
          </table>
        </div>
      </section>`;
  }

  function sectionMarkup(section){
    const posters = section.posters ? section.posters.map(([name, items]) => `
      <section class="poster"><div class="poster-sub">ROCA · condición de área</div><h2>${name}</h2><ol>${items.map(x=>`<li>${x}</li>`).join('')}</ol></section>`).join('') : '';
    return `<article class="paper master-paper" data-section="${section.id}">
      <div class="page-head"><span>${section.eyebrow || 'ROCA / DOCUMENTO MAESTRO'}</span><span>ROCA TAXIDERMY</span></div>
      <div class="eyebrow">${section.eyebrow || ''}</div>
      <h1>${section.title}</h1>
      <p class="lead">${section.lead || ''}</p>
      <div class="bronze-rule short"></div>
      <div class="master-content">${section.body||''}${posters}${fastTrackMarkup(section)}</div>
      ${footer(section.nav ? section.nav.toUpperCase() : '')}
    </article>`;
  }

  function renderCover(){
    page.innerHTML = coverMarkup();
    document.title='ROCA TAXIDERMY · Documento maestro';
    markActive('portada');
  }

  function render(section){
    page.innerHTML = sectionMarkup(section);
    document.title = `${section.nav} · ROCA TAXIDERMY`;
    markActive(section.id);
  }

  function markActive(id){
    document.querySelectorAll('#nav button').forEach(x=>x.classList.toggle('active',x.dataset.id===id));
    page.focus({preventScroll:true});
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function go(id, sections = finalSections){
    if(id==='portada' || !id){
      history.replaceState(null,'','#portada');
      renderCover();
      return;
    }
    const target = sections.find(s=>s.id===id);
    if(!target){ renderCover(); return; }
    if(location.hash.slice(1)!==target.id) history.replaceState(null,'',`#${target.id}`);
    render(target);
  }

  function showFinal(){
    activeMode='final';
    document.body.classList.remove('notes-mode','print-all-mode','compendium-mode','field-mode');
    finalMode.classList.add('active');
    if(compendiumMode) compendiumMode.classList.remove('active');
    if(fieldMode) fieldMode.classList.remove('active');
    notesMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Documento maestro';
    contentsPane.querySelector('.rule-note').textContent='Recap esencial de ROCA TAXIDERMY. El respaldo profundo, originales y evidencia de cada caso permanecen fuera de esta lectura.';
    buildNav(finalSections);
    go(location.hash.slice(1)||'portada', finalSections);
  }

  function showCompendium(){
    activeMode='compendium';
    document.body.classList.remove('notes-mode','print-all-mode','field-mode');
    document.body.classList.add('compendium-mode');
    finalMode.classList.remove('active');
    if(compendiumMode) compendiumMode.classList.add('active');
    if(fieldMode) fieldMode.classList.remove('active');
    notesMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Compendio completo';
    contentsPane.querySelector('.rule-note').textContent='Vista de trabajo: conserva contenido sustantivo y agrega los libros integrales V2. La autoridad se decide por tema y fuente; ningún PDF o HTML histórico manda globalmente.';
    buildNav(compendiumSections);
    go(location.hash.slice(1)||'portada', compendiumSections);
  }

  function showField(){
    activeMode='field';
    document.body.classList.remove('notes-mode','print-all-mode','compendium-mode');
    document.body.classList.add('field-mode');
    finalMode.classList.remove('active');
    if(compendiumMode) compendiumMode.classList.remove('active');
    if(fieldMode) fieldMode.classList.add('active');
    notesMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Cierre de campo';
    contentsPane.querySelector('.rule-note').textContent='Vista operativa para capturar evidencia útil sin convertir el levantamiento en otro manual.';
    buildNav(fieldSections);
    go(location.hash.slice(1)||'campo-inicio', fieldSections);
  }

  function showNotes(){
    activeMode='notes';
    document.body.classList.add('notes-mode');
    document.body.classList.remove('print-all-mode','field-mode','compendium-mode');
    notesMode.classList.add('active');
    finalMode.classList.remove('active');
    if(compendiumMode) compendiumMode.classList.remove('active');
    if(fieldMode) fieldMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Notas para trabajo';
    contentsPane.querySelector('.rule-note').textContent='Pendientes, evidencia, fuente maestra y validaciones que no forman parte de la lectura editorial.';
    nav.innerHTML='';
    page.innerHTML=`<article class="paper notes-paper">
      <div class="page-head"><span>ROCA / NOTAS INTERNAS</span><span>NO IMPRIMIR EN FINAL</span></div>
      <div class="eyebrow">NOTAS INTERNAS</div>
      <h1>Lo que falta para cerrar</h1>
      <p class="lead">Nada pasa al documento maestro como hecho cerrado sin fuente, evidencia o validación suficiente.</p>
      <div class="bronze-rule short"></div>
      <h2>Fuentes preservadas</h2><p>ROCA usa autoridad por tema: correcciones explícitas, entrevistas/evidencia primaria, HTML editable histórico y masters 391/367p según fortaleza. Ninguno se trata como verdad global por comodidad.</p>
      <h2>Plano y medidas</h2><ul><li>Completar medidas dudosas y faltantes.</li><li>Puertas, vanos, pasillos, accesos, equipos fijos, tinas, drenajes, tableros, ventilación y servicios.</li></ul>
      <h2>Fotografías / Heritage</h2><ul><li>Panorámicas por área y estaciones.</li><li>Personas, herramientas, oficio, almacenamiento, residuos, químicos, rutas, extintores y equipos críticos.</li></ul>
      <h2>Documentos / cumplimiento</h2><ul><li>Preservar documentos base, controlar normas/estándares por versión y aplicabilidad, y cerrar licencias/permisos reales.</li><li>Conservar machotes útiles para decisiones; mantener evidencia real de cada caso en Drive/BIWO.</li></ul>
      ${footer('NOTAS')}
    </article>`;
    document.title='Notas · ROCA TAXIDERMY';
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function renderAllForPrint(sections){
    document.body.classList.remove('notes-mode','field-mode','compendium-mode');
    document.body.classList.add('print-all-mode');
    page.innerHTML = coverMarkup() + sections.map(sectionMarkup).join('');
    document.title='ROCA TAXIDERMY · Documento maestro';
  }

  finalMode.addEventListener('click',showFinal);
  if(compendiumMode) compendiumMode.addEventListener('click',showCompendium);
  if(fieldMode) fieldMode.addEventListener('click',showField);
  notesMode.addEventListener('click',showNotes);
  if(fastTrackJump) fastTrackJump.addEventListener('click',(ev)=>{ ev.preventDefault(); showCompendium(); go('area-recepcion', compendiumSections); });
  printDoc.addEventListener('click',()=>{
    const printSections = activeMode==='compendium' ? compendiumSections : activeMode==='field' ? fieldSections : finalSections;
    const returnMode = activeMode;
    renderAllForPrint(printSections);
    setTimeout(()=>{
      window.print();
      setTimeout(()=> returnMode==='compendium' ? showCompendium() : returnMode==='field' ? showField() : showFinal(),150);
    },80);
  });
  window.addEventListener('hashchange',()=>{ if(!document.body.classList.contains('notes-mode') && !document.body.classList.contains('print-all-mode')) go(location.hash.slice(1), activeMode==='compendium' ? compendiumSections : activeMode==='field' ? fieldSections : finalSections); });
  showFinal();
})();
