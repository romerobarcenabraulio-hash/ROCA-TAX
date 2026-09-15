window.ROCA_MASTER_SECTION = {
  id:"master-exacto",
  nav:"Master exacto 391p",
  title:"Master integral exacto · 391 páginas",
  eyebrow:"Fuente maestra preservada",
  lead:"La referencia visual y editorial obligatoria permanece preservada en el repositorio privado de evidencia. La web pública no enlaza ni embebe la fuente maestra privada.",
  body:`
    <div class="master-pdf-actions">
      <span>391 páginas · fuente privada controlada en Drive</span>
    </div>
    <div class="callout">Regla: cualquier bloque reconstruido en HTML debe ser igual o mejor que la fuente maestra aprobada. Si existe conflicto visual o de contenido, prevalece el master salvo corrección explícita posterior del usuario.</div>
  `
};
if (window.ROCA_DATA && window.ROCA_MASTER_SECTION) {
  const exists = window.ROCA_DATA.sections.some(s => s.id === window.ROCA_MASTER_SECTION.id);
  if (!exists) window.ROCA_DATA.sections.unshift(window.ROCA_MASTER_SECTION);
}
