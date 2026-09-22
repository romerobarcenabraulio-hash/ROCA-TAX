window.ROCA_MASTER_SECTION = {
  id:"master-exacto",
  nav:"Fuentes maestras",
  title:"Fuentes maestras y autoridad por sección",
  eyebrow:"Preservación · reconciliación · no pérdida",
  lead:"ROCA conserva múltiples fuentes históricas y operativas. Ningún HTML o PDF se considera globalmente canónico por conveniencia; para cada tema prevalece la evidencia más fuerte y la corrección explícita más reciente.",
  body:`
    <h2>Jerarquía de trabajo</h2>
    <ol>
      <li>Corrección explícita más reciente.</li>
      <li>Evidencia primaria, entrevista literal o fuente oficial vigente para el hecho.</li>
      <li>Tratamiento ROCA previo más fuerte de ese tema.</li>
      <li>Versión derivada sólo cuando conserva o mejora la información sin pérdida silenciosa.</li>
    </ol>
    <div class="callout">Los masters de 391 y 367 páginas, el HTML editable histórico, ROCA Live, entrevistas, Drive y BIWO se preservan como fuentes con fortalezas distintas. Una integración sólo elimina duplicación cuando nombra dónde sobrevive la información.</div>
  `
};
if (window.ROCA_DATA && window.ROCA_MASTER_SECTION) {
  const exists = window.ROCA_DATA.sections.some(s => s.id === window.ROCA_MASTER_SECTION.id);
  if (!exists) window.ROCA_DATA.sections.unshift(window.ROCA_MASTER_SECTION);
}
