window.ROCA_EXTRA_SECTIONS = window.ROCA_EXTRA_SECTIONS || [];
window.ROCA_EXTRA_SECTIONS.push({
  id:"legal", nav:"Expediente legal", title:"Expediente legal y documental", eyebrow:"Assurance / evidencia controlada",
  lead:"La capa legal del manual se alimenta desde Drive. La web sólo muestra estado, alcance y pendientes; escrituras, contratos, recibos, poderes y demás documentos sensibles permanecen fuera de GitHub y Vercel.",
  body:`
    <h2>Estado de integración</h2>
    <table><thead><tr><th>Ronda</th><th>Estado</th><th>Evidencia ya localizada</th><th>Brecha principal</th></tr></thead><tbody>
      <tr><td>1 · Corporativo y poderes</td><td><span class="status pending">PARCIAL REVISADO</span></td><td>Constitución social, auditoría corporativa e instrumento de poderes/revocación.</td><td>Poder SENASICA no localizado; revisar vigencia/revocaciones posteriores; faltan libros, títulos/reformas y constancias actuales de cierre.</td></tr>
      <tr><td>2 · Inmueble y funcionamiento</td><td><span class="status pending">PARCIAL REVISADO</span></td><td>Contrato de arrendamiento histórico, convenio de pagos y recibos de renta 2026.</td><td>Confirmar instrumento contractual vigente/continuidad y completar uso de suelo, funcionamiento, autorizaciones/inspecciones y soportes del domicilio.</td></tr>
      <tr><td>3 · Contratos, seguros y obligaciones</td><td><span class="status pending">PENDIENTE</span></td><td>Sin paquete suficiente en la ronda.</td><td>Contratos materiales, seguros, garantías y obligaciones vigentes.</td></tr>
      <tr><td>4 · Laboral, fiscal y seguridad social</td><td><span class="status pending">PENDIENTE</span></td><td>Sin paquete suficiente en la ronda.</td><td>Expediente laboral/fiscal/seguridad social y vigencias.</td></tr>
      <tr><td>5 · Protección Civil, STPS y seguridad</td><td><span class="status pending">PENDIENTE</span></td><td>Sin paquete suficiente en la ronda.</td><td>Documentos, programas, inspecciones, capacitación y evidencia técnica aplicable.</td></tr>
      <tr><td>6 · Ambiental, químicos y residuos</td><td><span class="status pending">PENDIENTE</span></td><td>Sin paquete suficiente en la ronda.</td><td>Registros/autorizaciones, HDS, residuos y evidencia de gestión.</td></tr>
      <tr><td>7 · Vida silvestre / CITES / SENASICA / TRACES</td><td><span class="status pending">EVIDENCIA HISTÓRICA LOCALIZADA</span></td><td>Drive contiene numerosos expedientes CITES/SEM-CITES y una hoja índice con números CITES, autorizaciones PROFEPA y fechas para operaciones históricas.</td><td>La evidencia histórica demuestra práctica documental, no cumplimiento vigente general. Falta clasificar por operación/especie, separar originales/duplicados y verificar aplicabilidad actual de CITES, PROFEPA, SENASICA y TRACES por caso.</td></tr>
      <tr><td>8 · Comercio exterior / aduanas / embalaje</td><td><span class="status pending">PENDIENTE</span></td><td>Se detectan expedientes históricos de importación asociados a vida silvestre, aún sin matriz aduanal consolidada.</td><td>Identificar pedimentos, agente/transportista, documentos de exportación, embalaje y soportes por operación.</td></tr>
      <tr><td>9 · Privacidad, litigios y contingencias</td><td><span class="status pending">PENDIENTE</span></td><td>Sin paquete suficiente en la ronda.</td><td>Avisos, controles de acceso, litigios/contingencias y evidencia de cierre.</td></tr>
    </tbody></table>
    <h2>Hallazgo de vida silvestre</h2>
    <p>La búsqueda documental ya localizó expedientes CITES/SEM-CITES de distintos años y titulares, además de un índice histórico que relaciona número CITES/SEMARNAT, autorización PROFEPA y fecha. Estos archivos pasan al inventario de evidencia; no se copian al repositorio web ni se usan para declarar una autorización general vigente.</p>
    <h2>Regla para la impresión definitiva</h2>
    <p class="callout">El DOC FINAL contendrá el índice y conclusiones controladas. Los PDFs jurídicos y regulatorios se conservarán en Drive y se incorporarán como anexos durante la compilación privada de la impresión definitiva. No se publican documentos sensibles en el repositorio web.</p>
    <h2>Condición de cierre</h2>
    <ul><li>Documento localizado y clasificado.</li><li>Vigencia/aplicabilidad revisada.</li><li>Brechas explícitas; ninguna ausencia se convierte en cumplimiento.</li><li>Referencia al requisito correspondiente.</li><li>Anexo preparado para compilación privada.</li></ul>
  `
});
