(function(){
  const data = window.ROCA_DATA;
  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const finalMode = document.getElementById('finalMode');
  const notesMode = document.getElementById('notesMode');
  const printDoc = document.getElementById('printDoc');

  const finalSections = data.sections.filter(s => !['estado','implementacion','evidencia','editorial'].includes(s.id));

  function buildNav(){
    nav.innerHTML='';
    finalSections.forEach((section, i) => {
      const b = document.createElement('button');
      b.textContent = `${String(i+1).padStart(2,'0')}  ${section.nav}`;
      b.dataset.id = section.id;
      b.addEventListener('click', () => go(section.id));
      nav.appendChild(b);
    });
  }

  function render(section){
    const posters = section.posters ? section.posters.map(([name, items]) => `
      <section class="poster"><div class="poster-sub">ROCA · condición de área</div><h2>${name}</h2><ol>${items.map(x=>`<li>${x}</li>`).join('')}</ol></section>`).join('') : '';
    page.innerHTML = `<article><div class="eyebrow">${section.eyebrow}</div><h1>${section.title}</h1><p class="lead">${section.lead}</p>${section.body||''}${posters}</article>`;
    document.title = `${section.nav} · ROCA Live`;
    document.querySelectorAll('#nav button').forEach(x=>x.classList.toggle('active',x.dataset.id===section.id));
    page.focus({preventScroll:true});
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function go(id){
    const target = finalSections.find(s=>s.id===id) || finalSections[0];
    if(location.hash.slice(1)!==target.id) history.replaceState(null,'',`#${target.id}`);
    render(target);
  }

  function showFinal(){
    document.body.classList.remove('notes-mode');
    finalMode.classList.add('active');
    notesMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Documento final';
    contentsPane.querySelector('.rule-note').textContent='Esta es la vista que importa. Las notas de trabajo quedan separadas.';
    buildNav();
    go(location.hash.slice(1));
  }

  function showNotes(){
    document.body.classList.add('notes-mode');
    notesMode.classList.add('active');
    finalMode.classList.remove('active');
    contentsPane.querySelector('.contents-title').textContent='Notas para trabajo';
    contentsPane.querySelector('.rule-note').textContent='Pendientes, fotos, medidas y comprobaciones. Nada de aquí se publica automáticamente.';
    nav.innerHTML='';
    page.innerHTML=`<article>
      <div class="eyebrow">NOTAS INTERNAS</div>
      <h1>Lo que falta para cerrar</h1>
      <p class="lead">Usar esta vista como libreta de campo: medir, fotografiar, comprobar y cerrar. El documento final permanece limpio.</p>
      <h2>Plano y medidas</h2>
      <ul>
        <li>Confirmar medidas dudosas y faltantes del croquis.</li>
        <li>Puertas, vanos, pasillos y accesos principales.</li>
        <li>Retoque, Carpintería, Comedor, WC y bodegas pequeñas.</li>
        <li>Equipos fijos, tinas, drenajes, tableros, ventilación y servicios.</li>
      </ul>
      <h2>Fotos de campo</h2>
      <ul>
        <li>Panorámica de cada área.</li>
        <li>Estaciones de trabajo y almacenamiento abierto.</li>
        <li>Extintores, rutas y salidas.</li>
        <li>Químicos/HDS, residuos, drenajes y equipos críticos.</li>
      </ul>
      <h2>Documentos pendientes</h2>
      <ul>
        <li>Expediente corporativo / legal solicitado.</li>
        <li>Inmueble, funcionamiento, seguros, fiscal y permisos aplicables.</li>
        <li>Evidencia técnica que no puede cerrarse sólo con fotografía.</li>
      </ul>
      <div class="callout">Regla simple: me mandas foto o medida → se registra en NOTAS → cuando queda sustentado, pasa al DOC FINAL.</div>
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
