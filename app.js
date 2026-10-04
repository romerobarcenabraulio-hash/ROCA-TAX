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
  const printGateNote = document.getElementById('printGateNote');

  const hiddenLegacy = new Set([
    'estado','implementacion','areas','residuos','erp','evidencia','editorial','posters',
    'responsabilidades','documentos','internacional','legal','master-exacto',
    'procesos','trazabilidad','cumplimiento','machotes-guias','controles-transversales','assurance'
  ]);
  const PDF_MASTER_SECTIONS=[
    {id:'pdf-global',nav:'Gobernanza / taller',start:1,end:38},
    {id:'area-recepcion',nav:'Recepción',start:39,end:48,deptId:'area-recepcion'},
    {id:'area-curtiduria',nav:'Curtiduría',start:49,end:86,deptId:'area-curtiduria'},
    {id:'area-fmr',nav:'Formas, Moldes y Réplicas',start:87,end:129,deptId:'area-fmr'},
    {id:'area-montaje',nav:'Montaje',start:130,end:159,deptId:'area-montaje'},
    {id:'area-retoque',nav:'Retoque',start:160,end:183,deptId:'area-retoque'},
    {id:'area-bases',nav:'Bases',start:184,end:208,deptId:'area-bases'},
    {id:'area-carpinteria',nav:'Carpintería / Embalaje',start:209,end:222,deptId:'area-carpinteria'},
    {id:'area-soldadura',nav:'Soldadura / Adaptación',start:223,end:236,deptId:'area-soldadura'},
    {id:'area-blanqueado',nav:'Blanqueado',start:237,end:251,deptId:'area-blanqueado'},
    {id:'pdf-ext',nav:'Exterior / carga',start:252,end:261,deptId:'area-soporte',rowIds:['SUP-EXT']},
    {id:'pdf-erp',nav:'Oficina / BIWO',start:262,end:272,deptId:'area-soporte',rowIds:['SUP-ERP']},
    {id:'pdf-bod',nav:'Bodegas',start:273,end:281,deptId:'area-soporte',rowIds:['SUP-BOD']},
    {id:'pdf-exh',nav:'Exhibición',start:282,end:291,deptId:'area-soporte',rowIds:['SUP-EXH']},
    {id:'pdf-com',nav:'Comedor',start:292,end:300,deptId:'area-soporte',rowIds:['SUP-COM']},
    {id:'pdf-san',nav:'Sanitarios',start:301,end:309,deptId:'area-soporte',rowIds:['SUP-SAN']},
    {id:'pdf-rut',nav:'Circulaciones / rutas',start:310,end:318,deptId:'area-soporte',rowIds:['SUP-CIR']},
    {id:'pdf-res',nav:'Residuos',start:319,end:331,deptId:'area-soporte',rowIds:['SUP-RES']},
    {id:'pdf-assurance',nav:'Assurance / anexos',start:332,end:391}
  ];
  const manualSections = PDF_MASTER_SECTIONS;
  let pdfMasterPromise=null;
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
      '<div class="cover-bottom"><strong>MANUAL MAESTRO DE OPERACIÓN</strong>'+
      '<span>Áreas, metodología, herramientas, materiales, evidencia y condiciones permanentes de ROCA Taxidermy.</span></div>'+
      footer('PORTADA')+'</article>';
  }

  async function loadPdfMaster(){
    if(!pdfMasterPromise){
      pdfMasterPromise=fetch('generated/roca-391/raw-index.json',{cache:'no-store'}).then(async res=>{
        if(!res.ok) throw new Error('PDF master index '+res.status);
        return res.json();
      });
    }
    return pdfMasterPromise;
  }

  function pdfSourceUrl(driveId,pageNumber){
    const hash=pageNumber?'#page='+encodeURIComponent(pageNumber):'';
    return 'https://drive.google.com/file/d/'+encodeURIComponent(driveId)+'/preview'+hash;
  }

  function evaluationInsertMarkup(section){
    if(!section.deptId) return '';
    const dept=window.ROCA_DEPARTMENTS&&window.ROCA_DEPARTMENTS[section.deptId];
    if(!dept) return '';
    const allowed=Array.isArray(section.rowIds)?new Set(section.rowIds):null;
    const rows=(Array.isArray(dept.area)?dept.area:[]).filter(r=>!allowed||allowed.has(r.id));
    if(!rows.length) return '';
    const rowHtml=rows.map(r=>{
      const verify=r.verify?'<div><b>Cómo se comprueba:</b> '+esc(r.verify)+'</div>':'';
      const data=r.data?'<div><b>Dato necesario:</b> '+esc(r.data)+'</div>':'';
      const calc=r.calculation?'<div><b>Cálculo / comparación:</b> '+esc(r.calculation)+'</div>':'';
      const evidence=r.evidence?'<div><b>Evidencia:</b> '+esc(r.evidence)+'</div>':'';
      const basis=r.basis?'<div><b>Por qué / fundamento:</b> '+esc(r.basis)+'</div>':'';
      return '<tr><td><strong>'+esc(r.id)+'</strong><br><small>'+esc(r.label||'')+'</small></td><td><p>'+esc(r.text||'')+'</p>'+verify+data+calc+evidence+basis+'</td></tr>';
    }).join('');
    return '<article class="paper pdf-evaluation-insert" data-evaluation-for="'+esc(section.id)+'">'+
      '<div class="page-head"><span>INSERTADO SOBRE EL PDF MAESTRO</span><span>ROCA TAXIDERMY</span></div>'+
      '<div class="eyebrow">EVALUACIÓN / CÓMO DEBE ESTAR EL ÁREA</div>'+
      '<h1>'+esc(dept.title)+'</h1>'+
      '<p class="lead">Este bloque se agrega al master sin sustituir, resumir ni reordenar las páginas fuente anteriores. Cada requisito queda aterrizado y listo para observar, medir, calcular o documentar según corresponda.</p>'+
      '<div class="bronze-rule short"></div>'+
      '<table class="pdf-evaluation-table"><thead><tr><th>Requisito</th><th>Qué debe quedar / cómo se demuestra</th></tr></thead><tbody>'+rowHtml+'</tbody></table>'+
      footer('EVALUACIÓN · '+(dept.code||''))+'</article>';
  }

  async function pdfReplicaMarkup(section){
    const master=await loadPdfMaster();
    const pages=(Array.isArray(master.pages)?master.pages:[]).filter(p=>p.page>=section.start&&p.page<=section.end);
    const driveId=master.source&&master.source.drive_id?master.source.drive_id:'1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO';
    const sourceViewer='<section class="pdf-original-viewer" data-pdf-viewer>'+
      '<div class="pdf-original-head"><div><strong>PDF MAESTRO ORIGINAL</strong><span>Fotos, diagramas, composición y texto fuente · pp. '+section.start+'-'+section.end+'</span></div>'+
      '<a target="_blank" rel="noopener" href="https://drive.google.com/file/d/'+esc(driveId)+'/view">ABRIR ORIGINAL</a></div>'+
      '<iframe class="pdf-original-frame" title="PDF maestro original" src="'+esc(pdfSourceUrl(driveId,section.start))+'" loading="eager"></iframe>'+
      '</section>';
    const pageHtml=pages.map(p=>
      '<article class="paper pdf-replica-page" data-pdf-page="'+esc(p.page)+'">'+
        '<div class="page-head"><span>PDF MAESTRO · PÁGINA '+esc(p.page)+' / 391</span><span>'+esc(p.area||p.area_code||'ROCA')+'</span></div>'+
        '<h1 class="pdf-replica-heading">'+esc(p.heading||'')+'</h1>'+
        '<pre class="pdf-replica-text">'+esc(p.text||'')+'</pre>'+
        '<button type="button" class="pdf-page-source-jump" data-page="'+esc(p.page)+'" data-drive="'+esc(driveId)+'">VER ESTA PÁGINA EN EL ORIGINAL</button>'+
        footer('PDF '+p.page+' / 391')+
      '</article>'
    ).join('');
    return '<section class="pdf-replica-section" data-section="'+esc(section.id)+'">'+sourceViewer+pageHtml+evaluationInsertMarkup(section)+'</section>';
  }

  function bindPdfReplicaViewer(){
    const frame=page.querySelector('.pdf-original-frame');
    if(!frame) return;
    page.querySelectorAll('.pdf-page-source-jump').forEach(btn=>{
      btn.addEventListener('click',()=>{
        frame.src=pdfSourceUrl(btn.dataset.drive,btn.dataset.page);
        const viewer=page.querySelector('.pdf-original-viewer');
        if(viewer) viewer.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });
  }

  async function renderPdfReplica(section){
    page.innerHTML='<div class="pdf-loading">Cargando réplica del PDF maestro…</div>';
    try{
      page.innerHTML=await pdfReplicaMarkup(section);
      document.title='ROCA TAXIDERMY · Manual maestro · '+(section.nav||'PDF maestro');
      markActive(section.id);
      bindPdfReplicaViewer();
    }catch(err){
      page.innerHTML='<article class="paper"><h1>No se pudo cargar el PDF maestro</h1><p>'+esc(err.message||String(err))+'</p></article>';
      markActive(section.id);
    }
  }

  function departmentMarkup(section){
    const dept = window.ROCA_DEPARTMENTS && window.ROCA_DEPARTMENTS[section && section.id];
    if(!dept) return '';

    const specificAreaRows=(dept.area||[]).map(r=>{
      const details=[
        r.verify?'<p><strong>Cómo se comprueba:</strong> '+esc(r.verify)+'</p>':'',
        r.data?'<p><strong>Dato necesario:</strong> '+esc(r.data)+'</p>':'',
        r.calculation?'<p><strong>Cálculo / comparación:</strong> '+esc(r.calculation)+'</p>':'',
        r.evidence?'<p><strong>Evidencia:</strong> '+esc(r.evidence)+'</p>':'',
        r.basis?'<details><summary>Fundamento</summary><p>'+esc(r.basis)+'</p></details>':''
      ].join('');
      return '<tr><td><strong>'+esc(r.id)+'</strong><br><small>'+esc(r.label||'')+'</small></td><td><p>'+esc(r.text)+'</p>'+details+'</td></tr>';
    }).join('');
    const areaRows=specificAreaRows;
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
        (toolCare?'<section class="department-block"><div class="eyebrow">05 · CUIDADO DE HERRAMIENTA</div><h2>Condición de uso</h2><ul>'+toolCare+'</ul></section>':'')+
        (competencies?'<section class="department-block"><div class="eyebrow">06 · PERSONAS / COMPETENCIA</div><h2>Operaciones que requieren autorización</h2><ul>'+competencies+'</ul></section>':'')+
        (controlRecords?'<section class="department-block"><div class="eyebrow">07 · CONTROL / REGISTROS</div><h2>Qué debe mantenerse ligado a la pieza</h2><ul>'+controlRecords+'</ul></section>':'')+
        (materialFlow?'<section class="department-block"><div class="eyebrow">08 · FLUJO DE MATERIAL</div><h2>Qué se registra por tarea</h2><ul>'+materialFlow+'</ul></section>':'')+
        '</section>' : '';

    return '<section class="department-canonical">'+
      '<div class="department-purpose"><div class="eyebrow">DEPARTAMENTO</div><h2>'+esc(dept.title)+'</h2><p>'+esc(dept.purpose)+'</p>'+
      '<div class="department-handoff"><span><strong>Recibe de:</strong> '+esc(dept.receivesFrom||'—')+'</span><span><strong>Entrega a:</strong> '+esc(dept.handsOffTo||'—')+'</span></div></div>'+
      governance+
      '<section class="department-block"><div class="eyebrow">01 · ÁREA DE TRABAJO</div><h2>Cómo debe estar '+esc(dept.title)+'</h2>'+
      '<p class="source-note">La tabla integra las condiciones específicas del departamento y los controles físicos transversales que le aplican.</p>'+
      '<table><thead><tr><th>ID</th><th>Condición permanente</th></tr></thead><tbody>'+areaRows+'</tbody></table></section>'+
      '<section class="department-block"><div class="eyebrow">02 · METODOLOGÍA</div><h2>Cómo se trabaja</h2>'+
      '<p class="flow-line">'+esc(dept.method?.flow||'')+'</p>'+branches+stages+
      '<h3>Controles que viajan con el proceso</h3><ul>'+controls+'</ul></section>'+
      '<section class="department-two-col">'+
        '<section class="department-block"><div class="eyebrow">03 · HERRAMIENTAS / EQUIPO</div><h2>Qué usa '+esc(dept.title)+'</h2><ul>'+tools+'</ul></section>'+
        '<section class="department-block"><div class="eyebrow">04 · CONSUMIBLES / MATERIALES</div><h2>Qué entra al proceso</h2><ul>'+consumables+'</ul></section>'+
      '</section>'+
      operations+
      '<section class="department-block"><div class="eyebrow">09 · EVIDENCIA</div><h2>Evidencia de referencia</h2>'+
      '<table><thead><tr><th>ID</th><th>Qué demuestra</th><th>Ubicación</th></tr></thead><tbody>'+evidence+'</tbody></table></section>'+
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
    const target=activeSections.find(s=>s.id===id) || activeSections[0];
    if(!target){ return; }
    history.replaceState(null,'','#'+target.id);
    if(activeMode==='manual') renderPdfReplica(target);
    else render(target);
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
      contentsPane.querySelector('.rule-note').textContent='Base normativa, aplicabilidad y criterio vigente. Los PDF visibles corresponden únicamente a normas o fuentes oficiales.';
    }else{
      activeMode='manual';
      activeSections=manualSections;
      manualMode.classList.add('active');
      contentsPane.querySelector('.contents-title').textContent='PDF maestro · 391 páginas';
      contentsPane.querySelector('.rule-note').textContent='MANUAL = réplica textual en el mismo orden del PDF maestro, con el original visual visible y bloques de evaluación insertados al cierre de cada área. No se resume ni se reinterpreta la fuente.';
    }
    buildNav(activeSections);
    go(mode==='manual' ? 'portada' : (activeSections[0] && activeSections[0].id));
  }

  function parseCSV(text){
    const rows=[]; let row=[],field='',quoted=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){
        if(quoted && text[i+1]==='"'){field+='"';i++;}
        else quoted=!quoted;
      }else if(ch===','&&!quoted){
        row.push(field);field='';
      }else if((ch==='\n'||ch==='\r')&&!quoted){
        if(ch==='\r'&&text[i+1]==='\n')i++;
        row.push(field);field='';
        if(row.some(v=>v!==''))rows.push(row);
        row=[];
      }else field+=ch;
    }
    if(field||row.length){row.push(field);if(row.some(v=>v!==''))rows.push(row);}
    if(!rows.length)return[];
    const head=rows.shift();
    return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]||''])));
  }

  async function refreshPrintGate(){
    try{
      const [baselineRes,normRes,implementationRes,holdRes]=await Promise.all([
        fetch('ops/control/ROCA_DEPARTMENT_BASELINE_V1.csv',{cache:'no-store'}),
        fetch('ops/assurance/ROCA_NORMATIVE_APPLICABILITY_V1.csv',{cache:'no-store'}),
        fetch('ops/control/ROCA_IMPLEMENTATION_ACTION_REGISTER_V1.csv',{cache:'no-store'}),
        fetch('ops/control/ROCA_DEPARTMENT_HOLD_STATUS_V1.csv',{cache:'no-store'})
      ]);
      if(!baselineRes.ok) throw new Error('baseline '+baselineRes.status);
      if(!normRes.ok) throw new Error('normative '+normRes.status);
      if(!implementationRes.ok) throw new Error('implementation '+implementationRes.status);
      if(!holdRes.ok) throw new Error('holds '+holdRes.status);

      const baselineRows=parseCSV(await baselineRes.text());
      const normRows=parseCSV(await normRes.text());
      const implementationRows=parseCSV(await implementationRes.text());
      const holdRows=parseCSV(await holdRes.text());

      const openDepartments=baselineRows.filter(r=>String(r.baseline_status||'').toUpperCase()!=='FROZEN');
      const frozenMetadataErrors=baselineRows.filter(r=>{
        if(String(r.baseline_status||'').toUpperCase()!=='FROZEN') return false;
        return !String(r.baseline_version||'').trim() || !String(r.captured_date||'').trim() || !String(r.frozen_date||'').trim();
      });
      const auditOpen=[];
      if(window.ROCA_AUDIT_ENGINE){
        baselineRows.forEach(r=>{
          if(String(r.baseline_status||'').toUpperCase()!=='FROZEN') return;
          const criteria=window.ROCA_AUDIT_ENGINE.criteriaForArea(r.department_id);
          const state=window.ROCA_AUDIT_ENGINE.loadState(r.department_id);
          const open=criteria.filter(x=>{
            const v=state[x.id]||{};
            const status=String(v.status||'NOT_VERIFIED').toUpperCase();
            const terminal=['CONFORMING','NA_JUSTIFIED'].includes(status);
            const evidenceValid=typeof window.ROCA_AUDIT_ENGINE.closureDetailValid==='function'
              ? window.ROCA_AUDIT_ENGINE.closureDetailValid(status,v.note)
              : (status==='NOT_VERIFIED'||Boolean(String(v.note||'').trim()));
            return !(terminal&&evidenceValid);
          });
          if(open.length) auditOpen.push({department_id:r.department_id,count:open.length});
        });
      }else if(baselineRows.some(r=>String(r.baseline_status||'').toUpperCase()==='FROZEN')){
        throw new Error('audit engine unavailable');
      }

      const openImplementation=implementationRows.filter(r=>!['CLOSED','CANCELLED'].includes(String(r.status||'').toUpperCase()));
      const openHolds=holdRows.filter(r=>!['CLOSED','CANCELLED'].includes(String(r.status||'').toUpperCase()));
      const terminalNormStates=new Set(['VERIFIED','JUSTIFIED_NA']);
      const openNorms=normRows.filter(r=>!terminalNormStates.has(String(r.status||'').toUpperCase()));

      const departmentsReady=baselineRows.length>0 && openDepartments.length===0 && frozenMetadataErrors.length===0 && auditOpen.length===0;
      const implementationReady=openImplementation.length===0 && openHolds.length===0;
      const normsReady=normRows.length>0 && openNorms.length===0;
      const ready=departmentsReady && implementationReady && normsReady;

      printDoc.disabled=!ready;
      printDoc.textContent=ready?'IMPRIMIR / PDF':'IMPRESIÓN FINAL · BLOQUEADA';

      if(printGateNote){
        if(ready){
          printGateNote.textContent='Manual liberado para impresión.';
        }else{
          const parts=[];
          if(openDepartments.length) parts.push(openDepartments.length+' departamento'+(openDepartments.length===1?'':'s')+' sin congelar');
          if(frozenMetadataErrors.length) parts.push(frozenMetadataErrors.length+' línea'+(frozenMetadataErrors.length===1?'':'s')+' base congelada'+(frozenMetadataErrors.length===1?'':'s')+' sin metadata de cierre');
          if(auditOpen.length) parts.push(auditOpen.reduce((n,x)=>n+x.count,0)+' criterio'+(auditOpen.reduce((n,x)=>n+x.count,0)===1?'':'s')+' de auditoría sin cierre');
          if(openImplementation.length) parts.push(openImplementation.length+' acción'+(openImplementation.length===1?'':'es')+' de IMPLEMENTAR abierta'+(openImplementation.length===1?'':'s'));
          if(openHolds.length) parts.push(openHolds.length+' HOLD técnico'+(openHolds.length===1?'':'s')+' abierto'+(openHolds.length===1?'':'s'));
          if(openNorms.length) parts.push(openNorms.length+' requisito'+(openNorms.length===1?'':'s')+' normativo'+(openNorms.length===1?'':'s')+' sin cierre');
          printGateNote.textContent=parts.join(' · ')+'.';
        }
      }
      return {ready,openDepartments,frozenMetadataErrors,auditOpen,openImplementation,openHolds,openNorms};
    }catch(err){
      printDoc.disabled=true;
      printDoc.textContent='IMPRESIÓN FINAL · BLOQUEADA';
      if(printGateNote)printGateNote.textContent='No se pudo validar el cierre editorial, de auditoría, implementación, HOLD y normativo.';
      return {ready:false,openDepartments:[],frozenMetadataErrors:[],auditOpen:[],openImplementation:[],openHolds:[],openNorms:[]};
    }
  }

  function normStatusLabel(value){
    const key=String(value||'').toUpperCase();
    return ({
      VERIFIED:'VERIFICADO',
      JUSTIFIED_NA:'NO APLICA — JUSTIFICADO',
      NOT_CHECKED:'NO VERIFICADO',
      PARTIAL:'PARCIAL',
      APPLICABILITY_PENDING:'APLICABILIDAD POR CONFIRMAR'
    })[key]||key.replaceAll('_',' ');
  }

  function applicabilityLabel(value){
    const key=String(value||'').toUpperCase();
    return ({
      CORE:'APLICA',
      CORE_CANDIDATE:'APLICABILIDAD A CONFIRMAR',
      CONDITIONAL:'CONDICIONAL',
      NOT_APPLICABLE:'NO APLICA'
    })[key]||key.replaceAll('_',' ');
  }

  async function buildNormativePrintMarkup(){
    const res=await fetch('ops/assurance/ROCA_NORMATIVE_APPLICABILITY_V1.csv',{cache:'no-store'});
    if(!res.ok) throw new Error('normative '+res.status);
    const rows=parseCSV(await res.text());
    const chunks=[];
    for(let i=0;i<rows.length;i+=10) chunks.push(rows.slice(i,i+10));

    const intro='<article class="paper master-paper" data-section="bibliografia">'+
      '<div class="page-head"><span>BIBLIOGRAFÍA · FUNDAMENTO NORMATIVO</span><span>ROCA TAXIDERMY</span></div>'+
      '<div class="eyebrow">Bibliografía · aplicabilidad y criterio</div>'+
      '<h1>Fundamento normativo</h1>'+
      '<p class="lead">Esta sección conserva las referencias externas que respaldan criterios del manual. La operación se ejecuta desde cada libro de área; aquí se documenta la referencia, su aplicabilidad y el resultado que debe producir en ROCA.</p>'+
      '<div class="bronze-rule short"></div>'+
      '<div class="master-content"><div class="callout">La inclusión de una referencia no equivale por sí sola a declarar cumplimiento. Cada requisito debe cerrar como VERIFIED o JUSTIFIED_NA antes de liberar la impresión final.</div></div>'+
      footer('BIBLIOGRAFÍA')+'</article>';

    const pages=chunks.map((chunk,index)=>
      '<article class="paper master-paper normative-print-page" data-section="bibliografia-'+(index+1)+'">'+
      '<div class="page-head"><span>BIBLIOGRAFÍA · '+esc(String(index+1).padStart(2,'0'))+'</span><span>ROCA TAXIDERMY</span></div>'+
      '<div class="eyebrow">Referencias aplicables</div>'+
      '<h1>'+(index===0?'Matriz normativa':'Matriz normativa · continuación')+'</h1>'+
      '<div class="master-content"><table><thead><tr><th>Referencia</th><th>Tema</th><th>Aplicabilidad</th><th>Criterio / salida ROCA</th><th>Estado</th></tr></thead><tbody>'+
      chunk.map(r=>'<tr><td><strong>'+esc(r.reference||r.req_id)+'</strong></td><td>'+esc(r.title)+'</td><td>'+esc(applicabilityLabel(r.applicability_class))+'</td><td>'+esc(r.roca_output)+'</td><td>'+esc(normStatusLabel(r.status))+(r.official_source?' · <a target="_blank" rel="noopener" href="'+esc(r.official_source)+'">fuente oficial</a>':'')+'</td></tr>').join('')+
      '</tbody></table></div>'+footer('BIBLIOGRAFÍA')+'</article>'
    ).join('');

    return intro+pages;
  }

  async function renderAllForPrint(){
    if(activeMode!=='manual'){
      page.innerHTML=activeSections.map(sectionMarkup).join('');
      document.title='ROCA TAXIDERMY · '+(activeMode==='audit'?'Auditoría':'Bibliografía');
      return;
    }

    const replicaPages=await Promise.all(manualSections.map(pdfReplicaMarkup));
    page.innerHTML=replicaPages.join('');
    document.title='ROCA TAXIDERMY · Réplica del PDF maestro';
  }

  manualMode.addEventListener('click',()=>setMode('manual'));
  auditMode.addEventListener('click',()=>setMode('audit'));
  normsMode.addEventListener('click',()=>setMode('norms'));
  printDoc.addEventListener('click',async()=>{
    const gate=await refreshPrintGate();
    if(!gate.ready) return;
    const mode=activeMode;
    try{
      await renderAllForPrint();
      setTimeout(()=>{ window.print(); setTimeout(()=>{setMode(mode);refreshPrintGate();},120); },80);
    }catch(err){
      if(printGateNote) printGateNote.textContent='No se pudo preparar la Bibliografía para impresión.';
    }
  });
  window.addEventListener('hashchange',()=>{
    const id=location.hash.slice(1);
    if(id) go(id);
  });

  const requestedMode=new URLSearchParams(location.search).get('mode');
  const initialMode=['manual','audit','norms'].includes(requestedMode)?requestedMode:'manual';
  const requestedSection=location.hash.slice(1);
  setMode(initialMode);
  if(requestedSection&&activeSections.some(s=>s.id===requestedSection)) go(requestedSection);
  refreshPrintGate();
})();