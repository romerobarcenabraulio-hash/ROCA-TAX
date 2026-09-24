(function(){
  const docs = Array.isArray(window.ROCA_SOURCE_DOCUMENTS) ? window.ROCA_SOURCE_DOCUMENTS : [];
  const rules = window.ROCA_SOURCE_RULES || {};
  const crosscheck = window.ROCA_SOURCE_CROSSCHECK || {};
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
  let returnSection = null;

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
    if(printDoc) printDoc.textContent='IMPRIMIR / PDF';
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

  function crossChecksMarkup(doc){
    if(!Array.isArray(doc.crossChecks) || !doc.crossChecks.length) return '';
    return `<section class="source-crosschecks">
      <div class="source-crosschecks-head">
        <div><div class="eyebrow">CROSS-CHECK</div><h2>Fuente ↔ Compendio actual</h2></div>
        <p>La página fuente no se sustituye: abre el PDF y contrástala con la sección V2 correspondiente.</p>
      </div>
      <div class="source-crosscheck-list">${doc.crossChecks.map(item => `
        <div class="source-crosscheck-row">
          <div>
            <strong>${escapeHtml(item.label)}</strong>
            <span>PDF p. ${escapeHtml(item.sourcePage)} · ${escapeHtml(item.action || '')}</span>
          </div>
          <p>${escapeHtml(item.focus || '')}</p>
          <div class="source-crosscheck-actions">
            <button type="button" class="source-ref source-page-ref" data-page="${escapeHtml(item.sourcePage)}"><strong>PDF</strong><span>p. ${escapeHtml(item.sourcePage)}</span></button>
            <button type="button" class="source-v2-link" data-target="${escapeHtml(item.targetSection || '')}">VER V2</button>
          </div>
        </div>`).join('')}</div>
    </section>`;
  }

  function versionCompareMarkup(){
    const labels=[];
    docs.forEach(doc=>(doc.crossChecks||[]).forEach(item=>{
      if(item.label && !labels.includes(item.label)) labels.push(item.label);
    }));
    if(!labels.length) return '';
    return `<section class="source-version-compare">
      <div class="source-version-head">
        <div><div class="eyebrow">VERSIÓN CONTRA VERSIÓN</div><h2>La misma área en cada fuente</h2></div>
        <label>Área
          <select id="sourceCompareArea">${labels.map(label=>`<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`).join('')}</select>
        </label>
      </div>
      <div id="sourceVersionMatrix"></div>
    </section>`;
  }

  function renderVersionMatrix(label){
    const host=document.getElementById('sourceVersionMatrix');
    if(!host) return;
    const rows=docs.map(doc=>{
      const item=(doc.crossChecks||[]).find(x=>x.label===label);
      if(!item) return '';
      const availability=doc.previewUrl || (doc.localAvailable && doc.localPath) ? 'VISOR' :
        doc.status==='SOURCE_RECOVERED_LOCATOR_PENDING' ? 'RECUPERADO · LOCATOR PENDIENTE' : (doc.status||'PENDIENTE');
      return `<div class="source-version-row">
        <div><strong>${escapeHtml(doc.nav || doc.title)}</strong><span>${escapeHtml(availability)}</span></div>
        <div class="source-version-page">p. ${escapeHtml(item.sourcePage)}</div>
        <p>${escapeHtml(item.focus || '')}</p>
        <button type="button" class="source-open-version" data-source-id="${escapeHtml(doc.id)}" data-page="${escapeHtml(item.sourcePage)}">ABRIR</button>
      </div>`;
    }).join('');
    host.innerHTML=rows || '<p class="source-note">Sin cruces registrados para esta área.</p>';
    host.querySelectorAll('.source-open-version').forEach(btn=>btn.addEventListener('click',()=>{
      renderSource(btn.dataset.sourceId,Number(btn.dataset.page)||null);
      const select=document.getElementById('sourceCompareArea');
      if(select) select.value=label;
    }));
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
    if(printDoc) printDoc.textContent='ABRIR PDF';
    contentsPane.querySelector('.contents-title').textContent='Fuentes documentales';
    contentsPane.querySelector('.rule-note').textContent='Lectura de fuentes para cross-check. El visor no altera los originales ni cambia permisos de Drive.';
    buildSourceNav();

    if(!activeDoc){
      page.innerHTML='<article class="paper master-paper"><h1>No hay fuentes registradas</h1></article>';
      return;
    }

    const available = Boolean(activeDoc.previewUrl || (activeDoc.localAvailable && activeDoc.localPath));
    const directPageJump = Boolean(activeDoc.localAvailable && activeDoc.localPath);
    const status = activeDoc.status === 'AVAILABLE_PRIVATE_LINK' ? 'Disponible' : activeDoc.status === 'SOURCE_RECOVERED_LOCATOR_PENDING' ? 'Fuente recuperada · locator pendiente' : activeDoc.status === 'SOURCE_INTEGRITY_BLOCKER' ? 'Fuente no recuperada' : 'Locator pendiente';
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
        <div class="source-actions">${returnSection ? `<button id="sourceReturn" class="pdf-link secondary source-return" type="button">VOLVER A ${escapeHtml(returnSection.title)}</button>` : ''}${open}${folder}</div>
      </div>
      ${refsMarkup(activeDoc)}
      ${crossChecksMarkup(activeDoc)}
      ${versionCompareMarkup()}
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


    page.querySelectorAll('.source-v2-link').forEach(btn=>btn.addEventListener('click',()=>{
      const target=btn.dataset.target;
      if(!target || !compendiumMode) return;
      history.replaceState(null,'','#'+target);
      compendiumMode.click();
    }));

    const back=document.getElementById('sourceReturn');
    if(back) back.addEventListener('click',()=>{
      const id=returnSection && returnSection.id;
      if(!id) return;
      if(compendiumMode) compendiumMode.click();
      setTimeout(()=>{
        const target=[...document.querySelectorAll('#nav button')].find(btn=>btn.dataset.id===id);
        if(target) target.click();
      },0);
    });

    const compare=document.getElementById('sourceCompareArea');
    if(compare){
      const first=(activeDoc.crossChecks && activeDoc.crossChecks[0] && activeDoc.crossChecks[0].label) || compare.value;
      if(first) compare.value=first;
      renderVersionMatrix(compare.value);
      compare.addEventListener('change',()=>renderVersionMatrix(compare.value));
    }

    const go=document.getElementById('sourceGoPage');
    if(go) go.addEventListener('click',()=>{
      const input=document.getElementById('sourcePageInput');
      const p=Math.max(1,Number(input && input.value) || 1);
      const frame=document.getElementById('sourcePdfFrame');
      if(frame) frame.src=sourceUrl(activeDoc,p);
    });
  }


  function sourceCrosscheckMarkup(sectionId){
    const refs = crosscheck[sectionId];
    if(!Array.isArray(refs) || !refs.length) return '';
    return `<aside class="source-crosscheck" aria-label="Fuentes para cross-check">
      <div class="source-crosscheck-title">CROSS-CHECK · FUENTE 391P</div>
      <div class="source-crosscheck-links">${refs.map(ref =>
        `<button type="button" class="source-crosscheck-link" data-source-id="${escapeHtml(ref.sourceId)}" data-source-page="${Number(ref.page)}">${escapeHtml(ref.label)} · p. ${Number(ref.page)}</button>`
      ).join('')}</div>
    </aside>`;
  }

  function injectCrosscheck(){
    const paper = page.querySelector('.master-paper[data-section]');
    if(!paper || paper.querySelector('.source-crosscheck')) return;
    const sectionId = paper.dataset.section;
    const markup = sourceCrosscheckMarkup(sectionId);
    if(!markup) return;
    const lead = paper.querySelector('.lead');
    if(lead) lead.insertAdjacentHTML('afterend',markup);
    else paper.insertAdjacentHTML('afterbegin',markup);
  }

  const observer = new MutationObserver(()=>injectCrosscheck());
  observer.observe(page,{childList:true,subtree:true});

  page.addEventListener('click',(event)=>{
    const trigger = event.target.closest('.source-crosscheck-link');
    if(!trigger) return;
    event.preventDefault();
    const sourceId = trigger.dataset.sourceId;
    const sourcePage = Number(trigger.dataset.sourcePage) || undefined;
    const paper = trigger.closest('.master-paper[data-section]');
    returnSection = paper ? {
      id: paper.dataset.section,
      title: (paper.querySelector('h1') && paper.querySelector('h1').textContent) || paper.dataset.section
    } : null;
    renderSource(sourceId,sourcePage);
  });

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
      if(activeDoc && activeDoc.openUrl) window.open(activeDoc.openUrl,'_blank','noopener,noreferrer');
    },true);
  }

  injectCrosscheck();

  window.ROCA_SOURCE_READER = {
    open(sourceId,pageNumber){
      renderSource(sourceId,pageNumber);
    }
  };
})();