(function(){
  const data = window.ROCA_DATA;
  if (Array.isArray(window.ROCA_EDITORIAL_SECTIONS)) data.sections.push(...window.ROCA_EDITORIAL_SECTIONS);
  if (Array.isArray(window.ROCA_WORKSHOP_SECTIONS)) data.sections.push(...window.ROCA_WORKSHOP_SECTIONS);
  if (Array.isArray(window.ROCA_CONTROL_SECTIONS)) data.sections.push(...window.ROCA_CONTROL_SECTIONS);
  if (Array.isArray(window.ROCA_ASSURANCE_SECTIONS)) data.sections.push(...window.ROCA_ASSURANCE_SECTIONS);
  if (Array.isArray(window.ROCA_EXTRA_SECTIONS)) data.sections.push(...window.ROCA_EXTRA_SECTIONS);

  const nav = document.getElementById('nav');
  const page = document.getElementById('page');
  const contentsPane = document.getElementById('contentsPane');
  const manualMode = document.getElementById('manualMode');
  const auditMode = document.getElementById('auditMode');
  const normsMode = document.getElementById('normsMode');
  const printDoc = document.getElementById('printDoc');

  const hiddenLegacy = new Set([
    'estado','implementacion','areas','residuos','erp','evidencia','editorial','posters',
    'responsabilidades','documentos','internacional','legal','master-exacto'
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

  function markdownInline(text){
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\`([^\`]+)\`/g,'<code>$1</code>');
  }

  function areaBookMarkup(section){
    const book = window.ROCA_AREA_BOOKS && window.ROCA_AREA_BOOKS[section && section.id];
    if(!book || !book.markdown) return '';
    const lines=String(book.markdown).split(/\r?\n/);
    let html='<section class="area-book-central"><div class="eyebrow">LIBRO INTEGRAL DEL ÁREA</div><h2>Operación, método y control</h2>';
    let inList=false, inTable=false, tableRows=[];
    function closeList(){ if(inList){html+='</ul>'; inList=false;} }
    function flushTable(){
      if(!inTable) return;
      if(tableRows.length){
        const rows=tableRows.map(r=>r.split('|').slice(1,-1).map(x=>x.trim()));
        const head=rows[0]||[];
        const body=rows.slice(2);
        html+='<div class="tablewrap"><table><thead><tr>'+head.map(x=>'<th>'+markdownInline(x)+'</th>').join('')+'</tr></thead><tbody>'+
          body.map(r=>'<tr>'+r.map(x=>'<td>'+markdownInline(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
      }
      inTable=false; tableRows=[];
    }
    lines.forEach(line=>{
      const t=line.trim();
      if(t.startsWith('|')){
        closeList(); inTable=true; tableRows.push(t); return;
      } else flushTable();
      if(!t){ closeList(); return; }
      if(/^##\s+/.test(t)){closeList(); html+='<h2>'+markdownInline(t.replace(/^##\s+/,''))+'</h2>'; return;}
      if(/^###\s+/.test(t)){closeList(); html+='<h3>'+markdownInline(t.replace(/^###\s+/,''))+'</h3>'; return;}
      if(/^[-*]\s+/.test(t)){ if(!inList){html+='<ul>';inList=true;} html+='<li>'+markdownInline(t.replace(/^[-*]\s+/,''))+'</li>'; return;}
      closeList();
      html+='<p>'+markdownInline(t)+'</p>';
    });
    closeList(); flushTable();
    html+='<div class="source-note">Fuente controlada: '+esc(book.source||'libro de área')+'. Los bloqueadores de implementación no se muestran como parte del estado definitivo.</div></section>';
    return html;
  }

  function inheritedPhysicalStandardMarkup(section){
    if(!section || !String(section.id||'').startsWith('area-') || !Array.isArray(window.ROCA_AREA_PHYSICAL_STANDARD)) return '';
    const rows = window.ROCA_AREA_PHYSICAL_STANDARD.filter(r => r.areas==='ALL' || (Array.isArray(r.areas) && r.areas.includes(section.id)));
    if(!rows.length) return '';
    return '<section class="inherited-standard"><div class="eyebrow">ESTÁNDAR FÍSICO PERMANENTE</div>'+
      '<h2>Condiciones que debe conservar esta área</h2>'+
      '<table class="permanent-standard-table"><thead><tr><th>Elemento</th><th>Cómo debe estar</th></tr></thead><tbody>'+
      rows.map(r=>'<tr><td><strong>'+esc(r.label)+'</strong></td><td>'+r.standard+'</td></tr>').join('')+
      '</tbody></table></section>';
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
      '<div class="master-content">'+(section.body||'')+inheritedPhysicalStandardMarkup(section)+areaBookMarkup(section)+posters+'</div>'+
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
      contentsPane.querySelector('.contents-title').textContent='Normas y memoria';
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
    document.title='ROCA TAXIDERMY · '+(activeMode==='manual'?'Manual maestro':activeMode==='audit'?'Auditoría':'Normas');
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