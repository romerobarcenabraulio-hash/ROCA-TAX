window.ROCA_NORM_SECTIONS = [
  {
    id:"normas-inicio", nav:"Bibliografía · Aplicabilidad", title:"Bibliografía normativa", eyebrow:"ROCA · bibliografía y fundamento",
    lead:"Aquí se conserva el fundamento de los criterios de ROCA: referencia, vigencia, aplicabilidad y fuente oficial. La operación diaria consulta el criterio aterrizado en su departamento; la bibliografía respalda por qué existe.",
    body:`
      <div class="callout"><strong>No es una segunda capa operativa.</strong> Esta vista concentra referencia, aplicabilidad, criterio ROCA y vínculo a fuente oficial. Los manuales históricos y PDFs internos no forman parte de la navegación del deployment.</div>
      <div id="normRegistry">Cargando registro normativo...</div>
    `
  },
  {
    id:"normas-memoria", nav:"Bibliografía · Memoria fija", title:"Memoria fija de criterio", eyebrow:"ROCA · criterio respaldado",
    lead:"Un criterio queda fijo cuando su fundamento, aplicabilidad y resultado técnico están suficientemente definidos. Las acciones para alcanzarlo pueden abrirse y cerrarse; el criterio permanece.",
    body:`
      <div id="criterionMemory">Cargando memoria de criterios...</div>
    `
  }
];

window.ROCA_NORMS_ENHANCE = async function(sectionId){
  function parseCSV(text){
    const rows=[]; let row=[],field='',q=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(ch==='"'){ if(q && text[i+1]==='"'){field+='"';i++;} else q=!q; }
      else if(ch===','&&!q){row.push(field);field='';}
      else if((ch==='\n'||ch==='\r')&&!q){ if(ch==='\r'&&text[i+1]==='\n')i++; row.push(field);field=''; if(row.some(v=>v!==''))rows.push(row); row=[]; }
      else field+=ch;
    }
    if(field||row.length){row.push(field); if(row.some(v=>v!==''))rows.push(row);}
    if(!rows.length) return [];
    const head=rows.shift();
    return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,r[i]||''])));
  }
  const res = await fetch('ops/assurance/ROCA_NORMATIVE_APPLICABILITY_V1.csv',{cache:'no-store'});
  const data = res.ok ? parseCSV(await res.text()) : [];
  if(sectionId==='normas-inicio'){
    const host=document.getElementById('normRegistry');
    if(!host) return;
    host.innerHTML='<table><thead><tr><th>Referencia</th><th>Tema</th><th>Aplicabilidad</th><th>Qué activa</th><th>Criterio / salida ROCA</th><th>Estado</th><th>Norma / fuente</th></tr></thead><tbody>'+
      data.map(r=>'<tr><td><strong>'+r.reference+'</strong></td><td>'+r.title+'</td><td>'+r.applicability_class+'</td><td>'+r.trigger_fact+'</td><td>'+r.roca_output+'</td><td>'+r.status+'</td><td>'+(r.official_source?'<a target="_blank" rel="noopener" href="'+r.official_source+'">ABRIR FUENTE OFICIAL</a>':'—')+'</td></tr>').join('')+
      '</tbody></table>';
  }
  if(sectionId==='normas-memoria'){
    const host=document.getElementById('criterionMemory');
    if(!host) return;
    const phys = Array.isArray(window.ROCA_AREA_PHYSICAL_STANDARD) ? window.ROCA_AREA_PHYSICAL_STANDARD : [];
    host.innerHTML='<table><thead><tr><th>ID</th><th>Criterio permanente</th><th>Áreas</th></tr></thead><tbody>'+
      phys.map(r=>'<tr><td><strong>'+r.id+'</strong><br><small>'+r.label+'</small></td><td>'+r.standard+'</td><td>'+(r.areas==='ALL'?'Todas':r.areas.join(', '))+'</td></tr>').join('')+
      '</tbody></table>';
  }
};