(function(){
  const data = window.ROCA_DATA;
  if (Array.isArray(window.ROCA_EXTRA_SECTIONS)) data.sections.push(...window.ROCA_EXTRA_SECTIONS);
  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const finalMode = document.getElementById('finalMode');
  const notesMode = document.getElementById('notesMode');
  const printDoc = document.getElementById('printDoc');

  const excluded = ['estado','implementacion','evidencia','editorial'];
  const finalSections = data.sections.filter(s => !excluded.includes(s.id));

  function buildNav(){
    nav.innerHTML='';
    const cover = document.createElement('button');
    cover.textContent='00  Portada';
    cover.dataset.id='portada';
    cover.addEventListener('click',()=>go('portada'));
    nav.appendChild(cover);
    finalSections.forEach((section, i) => {
      const b = document.createElement('button');
      b.textContent = `${String(i+1).padStart(2,'0')}  ${section.nav}`;
      b.dataset.id = section.id;
      b.addEventListener('click', () => go(section.id));
      nav.appendChild(b);
    });
  }

  function footer(pageNo){
    return `<div class="folio"><span>ROCA TAXIDERMY · MASTER INTEGRAL · PRE-CAMPO / PENDIENTES ABIERTOS</span><span>${pageNo || '—'} / 391</span></div>`;
  }

  function renderCover(){
    page.innerHTML = `<article class="paper cover-paper">
      <div class="cover-kicker">ROCA TAXIDERMY · ARTE Y TRADICIÓN · DESDE 1946</div>
      <div class="cover-main">
        <h1>Manual integral<br>de dirección y operación</h1>
        <p>Taller completo · personas · áreas · procesos · evidencia · permisos · entrega</p>
        <div class="bronze-rule"></div>
      </div>
      <div class="cover-bottom">
        <strong>EDICIÓN DE TRABAJO · PRE-CAMPO / PRE-CIERRE</strong>
        <span>31 AGO 2026 · Lo ausente se conserva como PENDIENTE; nunca se rellena con supuestos.</span>
      </div>
      ${footer('1')}
    </article>`;
    document.title='Manual integral · ROCA Live';
    markActive('portada');
  }

  function render(section){
    const posters = section.posters ? section.posters.map(([name, items]) => `
      <section class="poster"><div class="poster-sub">ROCA · condición de área</div><h2>${name}</h2><ol>${items.map(x=>`<li>${x}</li>`).join('')}</ol></section>`).join('') : '';
    page.innerHTML = `<article class="paper master-paper">
      <div class="page-head"><span>${section.eyebrow || 'ROCA / MANUAL INTEGRAL'}</span><span>ROCA TAXIDERMY</span></div>
      <div class="eyebrow">${section.eyebrow}</div>
      <h1>${section.title}</h1>
      <p class="lead">${section.lead}</p>
      <div class="bronze-rule short"></div>
      <div class="master-content">${section.body||''}${posters}</div>
      ${footer('—')}
    </article>`;
    document.title = `${section.nav} · ROCA Live`;
    markActive(section.id);
  }

  function markActive(id){
    document.querySelectorAll('#nav button').forEach(x=>x.classList.toggle('active',x.dataset.id===id));
    page.focus({preventScroll:true});
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function go(id){
    if(id==='portada' || !id){
      history.replaceState(null,'','#portada');
      renderCover();
      return;
    }
    const target = finalSections.find(s=>s.id===id);
    if(!target){ renderCover(); return; }
    if(location.hash.slice(1)!==target.id) history.replaceState(null,'',`#${target.id}`);
    render(target);
  }

  function showFinal(){
    document.body.classList.remove('notes-mode');
    finalMode.classList.add('active');
    notesMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Documento final';
    contentsPane.querySelector('.rule-note').textContent='Reconstrucción editorial del master de 391 páginas. Pendientes y evidencia se mantienen fuera de la lectura final.';
    buildNav();
    go(location.hash.slice(1)||'portada');
  }

  function showNotes(){
    document.body.classList.add('notes-mode');
    notesMode.classList.add('active');
    finalMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Notas para trabajo';
    contentsPane.querySelector('.rule-note').textContent='Sólo pendientes, fotografías, medidas, documentos y validaciones.';
    nav.innerHTML='';
    page.innerHTML=`<article class="paper notes-paper">
      <div class="page-head"><span>ROCA / NOTAS INTERNAS</span><span>NO IMPRIMIR EN FINAL</span></div>
      <div class="eyebrow">NOTAS INTERNAS</div>
      <h1>Lo que falta para cerrar</h1>
      <p class="lead">Esta vista funciona como libreta de integración. Nada pasa al documento final sin fuente o evidencia suficiente.</p>
      <div class="bronze-rule short"></div>
      <h2>Plano y medidas</h2><ul><li>Completar medidas dudosas y faltantes.</li><li>Puertas, vanos, pasillos, accesos, equipos fijos, tinas, drenajes, tableros, ventilación y servicios.</li></ul>
      <h2>Fotografías</h2><ul><li>Panorámicas por área y estaciones.</li><li>Almacenamiento, residuos, químicos, rutas, extintores y equipos críticos.</li></ul>
      <h2>Documentos</h2><ul><li>Expediente corporativo, inmueble, funcionamiento, seguros, fiscal y permisos aplicables.</li><li>PDFs legales se insertarán en su sección y quedarán previstos para una sola impresión final.</li></ul>
      ${footer('NOTAS')}
    </article>`;
    document.title='Notas · ROCA Live';
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  finalMode.addEventListener('click',showFinal);
  notesMode.addEventListener('click',showNotes);
  printDoc.addEventListener('click',()=>{ if(document.body.classList.contains('notes-mode')) showFinal(); setTimeout(()=>window.print(),80); });
  window.addEventListener('hashchange',()=>{ if(!document.body.classList.contains('notes-mode')) go(location.hash.slice(1)); });
  showFinal();
})();
