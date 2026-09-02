(function(){
  const data = window.ROCA_DATA;
  const nav = document.getElementById('nav');
  const page = document.getElementById('page');

  data.sections.forEach((section, i) => {
    const b = document.createElement('button');
    b.textContent = `${String(i+1).padStart(2,'0')}  ${section.nav}`;
    b.dataset.id = section.id;
    b.addEventListener('click', () => go(section.id));
    nav.appendChild(b);
  });

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
    const target = data.sections.find(s=>s.id===id) || data.sections[0];
    if(location.hash.slice(1)!==target.id) history.replaceState(null,'',`#${target.id}`);
    render(target);
  }

  window.addEventListener('hashchange',()=>go(location.hash.slice(1)));
  go(location.hash.slice(1)||'estado');
})();
