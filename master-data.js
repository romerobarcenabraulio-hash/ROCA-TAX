window.ROCA_MASTER_SECTION = {
  id:"master-exacto",
  nav:"Master exacto 391p",
  title:"Master integral exacto · 391 páginas",
  eyebrow:"Fuente maestra preservada",
  lead:"Esta vista carga directamente el PDF maestro preservado. Es la referencia visual y editorial obligatoria; las mejoras web nunca pueden degradarlo ni sustituir contenido sin trazabilidad.",
  body:`
    <div class="master-pdf-actions">
      <a class="pdf-link" href="https://drive.google.com/file/d/1TX54ljmSfImxIeSrqmb9mV3VZU1wXPko/view" target="_blank" rel="noopener">ABRIR PDF MAESTRO</a>
      <span>391 páginas · fuente privada en Drive</span>
    </div>
    <div class="master-pdf-shell">
      <iframe class="master-pdf-frame" src="https://drive.google.com/file/d/1TX54ljmSfImxIeSrqmb9mV3VZU1wXPko/preview" title="ROCA Master 391 páginas" loading="lazy" allow="autoplay"></iframe>
    </div>
    <div class="callout">Regla: cualquier bloque reconstruido en HTML debe ser igual o mejor que esta fuente. Si existe conflicto visual o de contenido, prevalece el master salvo corrección explícita posterior del usuario.</div>
  `
};
if (window.ROCA_DATA && window.ROCA_MASTER_SECTION) {
  const exists = window.ROCA_DATA.sections.some(s => s.id === window.ROCA_MASTER_SECTION.id);
  if (!exists) window.ROCA_DATA.sections.unshift(window.ROCA_MASTER_SECTION);
}
