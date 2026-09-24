(function(){
  const docs = Array.isArray(window.ROCA_SOURCE_DOCS) ? window.ROCA_SOURCE_DOCS : [];
  const sourcesMode = document.getElementById('sourcesMode');
  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const finalMode = document.getElementById('finalMode');
  const compendiumMode = document.getElementById('compendiumMode');
  const fieldMode = document.getElementById('fieldMode');
  const notesMode = document.getElementById('notesMode');
  const printDoc = document.getElementById('printDoc');
  let activeDocId = docs[0] ? docs[0].id : null;
  let requestedPage = null;
  let activeCompareSectionId = null;

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function allSections(){
    return window.ROCA_DATA && Array.isArray(window.ROCA_DATA.sections) ? window.ROCA_DATA.sections : [];
  }

  function sectionById(sectionId){
    return allSections().find(section => section && section.id === sectionId) || null;
  }

  function docsForSection(sectionId){
    if(!sectionId) return [];
    return docs.filter(doc => Array.isArray(doc.related) && doc.related.some(item => item.sectionId === sectionId));
  }

  function relationFor(doc, sectionId){
    if(!doc || !Array.isArray(doc.related)) return null;
    return doc.related.find(item => item.sectionId === sectionId) || null;
  }

  function previewUrl(doc, pageNumber){
    if(!doc) return 'about:blank';
    if(doc.localPath){
      const hash = pageNumber ? '#page=' + encodeURIComponent(pageNumber) + '&zoom=page-width' : '#zoom=page-width';
      return doc.localPath + hash;
    }
    if(doc.driveId){
      const hash = pageNumber ? '#page=' + encodeURIComponent(pageNumber) : '';
      return 'https://drive.google.com/file/d/' + encodeURIComponent(doc.driveId) + '/preview' + hash;
    }
    return doc.webUrl || 'about:blank';
  }

  function setModeChrome(){
    document.body.classList.remove('notes-mode','print-all-mode','compendium-mode','field-mode');
    document.body.classList.add('source-mode');
    [finalMode,compendiumMode,fieldMode,notesMode].forEach(btn => { if(btn) btn.classList.remove('active'); });
    if(sourcesMode) sourcesMode.classList.add('active');
    const title = contentsPane && contentsPane.querySelector('.contents-title');
    const note = contentsPane && contentsPane.querySelector('.rule-note');
    if(title) title.textContent = 'Fuentes / documentos';
    if(note) note.textContent = 'PDF original a la izquierda y sección actual de ROCA a la derecha para revisar sin perder contexto.';
  }

  function buildSourceNav(filterText){
    if(!nav) return;
    nav.innerHTML = '';
    const filter = document.createElement('input');
    filter.className = 'source-filter';
    filter.type = 'search';
    filter.placeholder = 'Buscar documento';
    filter.value = filterText || '';
    filter.setAttribute('aria-label','Buscar documento fuente');
    nav.appendChild(filter);

    const query = (filterText || '').trim().toLowerCase();
    let currentGroup = '';
    let visible = 0;
    docs.forEach(doc => {
      const hay = [doc.title,doc.label,doc.group,doc.note].join(' ').toLowerCase();
      if(query && !hay.includes(query)) return;
      visible++;
      if(doc.group !== currentGroup){
        currentGroup = doc.group;
        const group = document.createElement('div');
        group.className = 'source-nav-group';
        group.textContent = currentGroup;
        nav.appendChild(group);
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.sourceId = doc.id;
      button.classList.toggle('active', doc.id === activeDocId);
      button.innerHTML = '<span class="source-nav-title">' + esc(doc.label || doc.title) + '</span><span class="source-nav-state">' + esc(doc.sourceStatus || '') + '</span>';
      button.addEventListener('click', () => {
        activeDocId = doc.id;
        requestedPage = null;
        if(!relationFor(doc,activeCompareSectionId)){
          activeCompareSectionId = Array.isArray(doc.related) && doc.related[0] ? doc.related[0].sectionId : null;
        }
        renderSource(doc);
        buildSourceNav(filter.value);
      });
      nav.appendChild(button);
    });

    if(!visible){
      const empty = document.createElement('div');
      empty.className = 'source-nav-empty';
      empty.textContent = 'Sin coincidencias.';
      nav.appendChild(empty);
    }

    filter.addEventListener('input', () => buildSourceNav(filter.value));
    requestAnimationFrame(() => {
      const next = nav.querySelector('.source-filter');
      if(next && document.activeElement === filter){
        next.focus();
        next.setSelectionRange(next.value.length,next.value.length);
      }
    });
  }

  function relatedMarkup(doc){
    const related = Array.isArray(doc.related) ? doc.related : [];
    if(!related.length) return '<p class="source-empty">Sin relaciones registradas todavia.</p>';
    return related.map(item => {
      const selected = item.sectionId && item.sectionId === activeCompareSectionId;
      return '<div class="source-check-row' + (selected ? ' selected' : '') + '">' +
        '<div><strong>' + esc(item.label || item.sectionId) + '</strong>' +
        '<span>' + esc(item.locator || 'Locator pendiente') + '</span></div>' +
        '<div class="source-check-actions"><span class="source-action-chip">' + esc(item.action || 'PRESERVE') + '</span>' +
        (item.sectionId ? '<button type="button" class="source-compare-section" data-section="' + esc(item.sectionId) + '">COMPARAR AQUÍ</button>' : '') +
        (item.sectionId ? '<button type="button" class="source-jump-section" data-section="' + esc(item.sectionId) + '">ABRIR EN COMPENDIO</button>' : '') +
        '</div></div>';
    }).join('');
  }

  function compareSectionMarkup(sectionId){
    const section = sectionById(sectionId);
    if(!section){
      return '<div class="source-compare-empty"><strong>Sin sección seleccionada</strong><p>Elige una relación de arriba para verla junto al PDF.</p></div>';
    }
    return '<article class="source-compare-document" data-compare-section="' + esc(section.id) + '">' +
      '<div class="source-compare-label">HTML ACTUAL · ' + esc(section.id) + '</div>' +
      '<h3>' + esc(section.title || section.nav || section.id) + '</h3>' +
      (section.lead ? '<p class="source-compare-lead">' + esc(section.lead) + '</p>' : '') +
      '<div class="source-compare-body">' + (section.body || '') + '</div>' +
      '</article>';
  }

  function renderSource(doc, pageNumber){
    if(!doc || !page) return;
    activeDocId = doc.id;
    requestedPage = pageNumber || null;
    if(!activeCompareSectionId || !relationFor(doc,activeCompareSectionId)){
      activeCompareSectionId = Array.isArray(doc.related) && doc.related[0] ? doc.related[0].sectionId : null;
    }
    document.title = (doc.label || doc.title) + ' · Fuentes ROCA';

    const missing = doc.kind === 'missing';
    const sourceBody = missing
      ? '<div class="source-missing"><strong>FUENTE NO DISPONIBLE</strong><p>' + esc(doc.note || '') + '</p></div>'
      : '<div class="source-frame-shell"><iframe class="source-pdf-frame" title="' + esc(doc.title) + '" src="' + esc(previewUrl(doc,requestedPage)) + '" loading="eager"></iframe></div>';

    const pageControl = missing ? '' :
      '<form class="source-page-form" id="sourcePageForm">' +
      '<label for="sourcePageInput">Pagina</label>' +
      '<input id="sourcePageInput" name="page" inputmode="numeric" pattern="[0-9]*" value="' + esc(requestedPage || '') + '" placeholder="n">' +
      '<button type="submit">IR</button></form>';

    const openLink = (!missing && doc.webUrl)
      ? '<a class="source-open-link" href="' + esc(doc.webUrl) + '" target="_blank" rel="noopener">ABRIR EN DRIVE</a>'
      : '';

    page.innerHTML =
      '<section class="source-reader" aria-label="Lector de fuentes">' +
        '<div class="source-viewer-panel">' +
          '<div class="source-toolbar">' +
            '<div><div class="source-kicker">ROCA / FUENTE ORIGINAL</div><h1>' + esc(doc.label || doc.title) + '</h1><p>' + esc(doc.title) + '</p></div>' +
            '<div class="source-toolbar-actions">' + pageControl + openLink + '</div>' +
          '</div>' +
          sourceBody +
          '<div class="source-viewer-note">El PDF permanece como fuente de solo lectura. Zoom, busqueda y navegacion interna pertenecen al visor del PDF/Drive. El numero de pagina escrito arriba se conserva como referencia de trabajo, aunque el salto exacto depende del visor de Drive.</div>' +
        '</div>' +
        '<aside class="source-crosscheck">' +
          '<div class="source-kicker">CROSS-CHECK</div>' +
          '<h2>Fuente contra HTML actual</h2>' +
          '<dl class="source-meta">' +
            '<div><dt>Estado</dt><dd>' + esc(doc.sourceStatus || 'NOT-CHECKED') + '</dd></div>' +
            '<div><dt>Acceso</dt><dd>' + esc(doc.access || 'CONTROLLED') + '</dd></div>' +
            '<div><dt>Revision</dt><dd>' + esc(doc.modified || 'sin fecha') + '</dd></div>' +
            (requestedPage ? '<div><dt>Pagina</dt><dd>' + esc(requestedPage) + '</dd></div>' : '') +
          '</dl>' +
          '<p class="source-note">' + esc(doc.note || '') + '</p>' +
          '<h3>Secciones relacionadas</h3>' +
          relatedMarkup(doc) +
          '<div class="source-compare-divider"></div>' +
          compareSectionMarkup(activeCompareSectionId) +
        '</aside>' +
      '</section>';

    const form = document.getElementById('sourcePageForm');
    if(form){
      form.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.getElementById('sourcePageInput');
        const value = Number.parseInt(input && input.value,10);
        renderSource(doc, Number.isFinite(value) && value > 0 ? value : null);
      });
    }

    page.querySelectorAll('.source-compare-section').forEach(button => {
      button.addEventListener('click', () => {
        activeCompareSectionId = button.dataset.section || null;
        renderSource(doc,requestedPage);
      });
    });

    page.querySelectorAll('.source-jump-section').forEach(button => {
      button.addEventListener('click', () => {
        const sectionId = button.dataset.section;
        if(compendiumMode) compendiumMode.click();
        if(sectionId) location.hash = '#' + sectionId;
      });
    });

    if(page.focus) page.focus({preventScroll:true});
    window.scrollTo({top:0,left:0,behavior:'auto'});
  }

  function showSources(docId, pageNumber, sectionId){
    setModeChrome();
    const doc = docs.find(x => x.id === docId) || docs.find(x => x.id === activeDocId) || docs[0];
    if(doc) activeDocId = doc.id;
    if(sectionId) activeCompareSectionId = sectionId;
    buildSourceNav('');
    if(doc) renderSource(doc,pageNumber);
    else page.innerHTML = '<div class="source-missing">No hay fuentes registradas.</div>';
  }

  function injectSourceBacklinks(){
    if(!page || document.body.classList.contains('source-mode')) return;
    const article = page.querySelector('article[data-section]');
    if(!article || article.querySelector('.source-backlinks')) return;
    const sectionId = article.dataset.section;
    if(!sectionId || sectionId === 'portada') return;
    const relatedDocs = docsForSection(sectionId).filter(doc => doc.kind !== 'missing');
    if(!relatedDocs.length) return;
    const target = article.querySelector('.master-content');
    if(!target) return;

    const box = document.createElement('div');
    box.className = 'source-backlinks';
    box.innerHTML = '<span class="source-backlinks-label">FUENTES RELACIONADAS</span><div class="source-backlinks-actions"></div>';
    const actions = box.querySelector('.source-backlinks-actions');

    relatedDocs.forEach(doc => {
      const rel = relationFor(doc,sectionId);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'source-backlink-button';
      button.textContent = doc.label || doc.title;
      button.title = (rel && rel.locator) ? rel.locator : 'Abrir fuente para cross-check';
      button.addEventListener('click', () => showSources(doc.id, rel && rel.page ? rel.page : null, sectionId));
      actions.appendChild(button);
    });
    article.insertBefore(box,target);
  }

  if(sourcesMode) sourcesMode.addEventListener('click', () => showSources(activeDocId,requestedPage,activeCompareSectionId));

  [finalMode,compendiumMode,fieldMode,notesMode].forEach(button => {
    if(!button) return;
    button.addEventListener('click', () => {
      document.body.classList.remove('source-mode');
      if(sourcesMode) sourcesMode.classList.remove('active');
      setTimeout(injectSourceBacklinks,0);
    }, true);
  });

  if(printDoc){
    printDoc.addEventListener('click', event => {
      if(!document.body.classList.contains('source-mode')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const doc = docs.find(x => x.id === activeDocId);
      if(doc && doc.webUrl) window.open(doc.webUrl,'_blank','noopener');
    }, true);
  }

  if(page && window.MutationObserver){
    const observer = new MutationObserver(() => injectSourceBacklinks());
    observer.observe(page,{childList:true,subtree:false});
  }
  setTimeout(injectSourceBacklinks,0);

  window.ROCA_OPEN_SOURCE = function(docId,pageNumber,sectionId){
    showSources(docId,pageNumber,sectionId);
  };
})();