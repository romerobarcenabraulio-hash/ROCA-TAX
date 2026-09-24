(function(){
  const docs = Array.isArray(window.ROCA_SOURCE_DOCUMENTS) ? window.ROCA_SOURCE_DOCUMENTS : [];
  const rules = window.ROCA_SOURCE_RULES || {};
  const sourceMode = document.getElementById('sourceMode');
  const finalMode = document.getElementById('finalMode');
  const compendiumMode = document.getElementById('compendiumMode');
  const fieldMode = document.getElementById('fieldMode');
  const notesMode = document.getElementById('notesMode');
  const printDoc = document.getElementById('printDoc');
  const contentsPane = document.getElementById('contentsPane');
  const nav = document.getElementById('nav');
  const page = document.getElementById('page');

  if(!sourceMode || !contentsPane || !nav || !page) return;

  let activeDoc = docs[0] || null;

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function isAvailable(doc){
    return Boolean(doc && (doc.previewUrl || doc.localPath));
  }

  function sourceUrl(doc, pageNumber){
    if(!doc) return '';
    const page = Number(pageNumber) > 0 ? Number(pageNumber) : null;
    if(doc.localAvailable && doc.localPath){
      return doc.localPath + (page ? '#page=' + page : '');
    }
    if(doc.previewUrl){
      return doc.previewUrl;
    }
    return '';
  }

  function markSourceActive(){
    [finalMode,compendiumMode,fieldMode,notesMode].forEach(btn=>btn && btn.classList.remove('active'));
    sourceMode.classList.add('active');
  }

  function clearSourceState(){
    document.body.classList.remove('source-mode');
    sourceMode.classList.remove('active');
  }

  function buildSourceNav(){
    nav.innerHTML='';
    docs.forEach((doc,i)=>{
      const b=document.createElement('button');
      b.type='button';
      b.dataset.sourceId=doc.id;
      b.textContent=`${String(i+1).padStart(2,'0')}  ${doc.nav || doc.title}`;
      b.classList.toggle('active',activeDoc && activeDoc.id===doc.id);
      b.addEventListener('click',()=>renderSource(doc.id));
      nav.appendChild(b);
    });
  }

  function refsMarkup(doc){
    if(!Array.isArray(doc.quickRefs) || !doc.quickRefs.length) return '';
    return `<div class="source-ref-grid">${doc.quickRefs.map(([label,p]) =>
      `<button class="source-ref" type="button" data-page="${p}"><strong>${escapeHtml(label)}</strong><span>p. ${p}</span></button>`
    ).join('')}</div>`;
  }

  function unavailableMarkup(doc){
    return `<div class="source-empty">
      <div class="eyebrow">LOCATOR PENDIENTE</div>
      <h2>${escapeHtml(doc.title)}</h2>
      <p>${escapeHtml(doc.note || 'La fuente está registrada, pero aún no tiene una ruta segura disponible para el visor.')}</p>
      <p class="source-path"><strong>Ruta prevista:</strong> ${escapeHtml(doc.localPath || 'pendiente')}</p>
    </div>`;
  }

  function renderSource(id, pageNumber){
    activeDoc = docs.find(d=>d.id===id) || docs[0] || null;
    markSourceActive();
    document.body.classList.add('source-mode');
    document.body.classList.remove('notes-mode','print-all-mode','field-mode','compendium-mode');
    contentsPane.querySelector('.contents-title').textContent='Fuentes documentales';
    contentsPane.querySelector('.rule-note').textContent='Lectura de fuentes para cross-check. El visor no altera los originales ni cambia permisos de Drive.';
    buildSourceNav();

    if(!activeDoc){
      page.innerHTML='<article class="paper master-paper"><h1>No hay fuentes registradas</h1></article>';
      return;
    }

    const available = Boolean(activeDoc.previewUrl || (activeDoc.localAvailable && activeDoc.localPath));
    const directPageJump = Boolean(activeDoc.localAvailable && activeDoc.localPath);
    const status = activeDoc.status === 'AVAILABLE_PRIVATE_LINK' ? 'Disponible' : 'Locator pendiente';
    const open = activeDoc.openUrl ? `<a class="pdf-link" href="${escapeHtml(activeDoc.openUrl)}" target="_blank" rel="noopener noreferrer">ABRIR EN VENTANA</a>` : '';
    const folder = rules.sourceFolderUrl ? `<a class="pdf-link secondary" href="${escapeHtml(rules.sourceFolderUrl)}" target="_blank" rel="noopener noreferrer">CARPETA DE FUENTES</a>` : '';
    const frame = available
      ? `<iframe id="sourcePdfFrame" class="source-pdf-frame" src="${escapeHtml(sourceUrl(activeDoc,pageNumber))}" title="${escapeHtml(activeDoc.title)}"></iframe>`
      : unavailableMarkup(activeDoc);

    page.innerHTML=`<article class="source-reader" data-source-id="${escapeHtml(activeDoc.id)}">
      <div class="source-reader-head">
        <div>
          <div class="eyebrow">FUENTE · SOLO LECTURA</div>
          <h1>${escapeHtml(activeDoc.title)}</h1>
          <p class="lead">${escapeHtml(activeDoc.subtitle || '')}</p>
        </div>
        <div class="source-meta">
          <span>${escapeHtml(activeDoc.sourceKind || '')}</span>
          <span>${escapeHtml(activeDoc.privacy || '')}</span>
          <span>${status}</span>
          ${activeDoc.pages ? `<span>${activeDoc.pages} páginas</span>` : ''}
        </div>
      </div>
      <div class="source-toolbar">
        <div class="source-page-jump">
          <label for="sourcePageInput">Página</label>
          <input id="sourcePageInput" type="number" min="1" ${activeDoc.pages ? `max="${activeDoc.pages}"` : ''} value="${pageNumber || ''}" placeholder="ej. 133">
          <button id="sourceGoPage" type="button" ${directPageJump ? '' : 'disabled'}>IR</button>
        </div>
        <div class="source-actions">${open}${folder}</div>
      </div>
      ${refsMarkup(activeDoc)}
      <div class="source-note">${escapeHtml(activeDoc.note || '')}${activeDoc.localAvailable ? '' : ' · En Drive, usa los controles del visor para ir a una página exacta; el salto rápido se activará al servir una copia local controlada.'}</div>
      <div class="source-viewer-shell">${frame}</div>
      <div class="source-privacy-note">${escapeHtml(rules.warning || '')}</div>
    </article>`;

    document.title=`Fuentes · ${activeDoc.nav || activeDoc.title} · ROCA TAXIDERMY`;

    page.querySelectorAll('.source-ref').forEach(btn=>btn.addEventListener('click',()=>{
      const p=Number(btn.dataset.page);
      const input=document.getElementById('sourcePageInput');
      if(input) input.value=String(p);
      if(!directPageJump) return;
      const frame=document.getElementById('sourcePdfFrame');
      if(frame) frame.src=sourceUrl(activeDoc,p);
    }));

    const go=document.getElementById('sourceGoPage');
    if(go) go.addEventListener('click',()=>{
      const input=document.getElementById('sourcePageInput');
      const p=Math.max(1,Number(input && input.value) || 1);
      const frame=document.getElementById('sourcePdfFrame');
      if(frame) frame.src=sourceUrl(activeDoc,p);
    });
  }

  function showSources(){
    renderSource(activeDoc && activeDoc.id);
  }

  sourceMode.addEventListener('click',showSources);

  [finalMode,compendiumMode,fieldMode,notesMode].forEach(btn=>{
    if(btn) btn.addEventListener('click',clearSourceState);
  });

  if(printDoc){
    printDoc.addEventListener('click',(event)=>{
      if(!document.body.classList.contains('source-mode')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      window.print();
    },true);
  }

  window.ROCA_SOURCE_READER = {
    open(sourceId,pageNumber){
      renderSource(sourceId,pageNumber);
    }
  };
})();