window.ROCA_EXTRA_SECTIONS = [
  {
    id:"responsabilidades", nav:"Responsabilidades", title:"Responsabilidades por área", eyebrow:"Delegación operativa",
    lead:"Cada responsable recibe una condición física que mantener, acciones de mejora que ejecutar y evidencia concreta que devolver. La dirección no delega el criterio técnico: delega tareas observables.",
    body:`
      <h2>Regla común</h2>
      <table><thead><tr><th>Responsable de área</th><th>Mantiene</th><th>Corrige</th><th>Escala a Guicho</th></tr></thead><tbody>
      <tr><td>Todos</td><td>Orden, estación utilizable, identificación de pieza, herramienta en su lugar, residuos segregados, pasillo libre.</td><td>Desorden, objetos fuera de lugar, recipientes sin identificación, acumulación evitable, condición de cierre.</td><td>Falta de mueble/rack/bote, instalación, riesgo, reparación, compra o cambio que requiera decisión.</td></tr>
      </tbody></table>
      <h2>Asignación inicial</h2>
      <table><thead><tr><th>Área</th><th>Responsabilidad operativa</th><th>Primer bloque de implementación</th></tr></thead><tbody>
      <tr><td>Montaje</td><td>Guicho coordina; cada montador mantiene su estación. Ricardo y Eugenio se documentarán como célula de trabajo separada cuando se haga la entrevista.</td><td>Estaciones, cajones, herramienta, adhesivos/barro/Bondo, secado/espera, residuos, rutas.</td></tr>
      <tr><td>Curtiduría</td><td>Rodolfo Sr. como referencia de área; David y Eduardo/Lalo ejecutan bajo estándar común.</td><td>Húmedo/seco, tinas, dosificación, químicos, rebaja, derrames, residuos, tránsito.</td></tr>
      <tr><td>Retoque</td><td>Responsable de área mantiene superficie de detalle, almacenamiento y condición de cierre.</td><td>Pinturas/solventes, aerografía, iluminación de detalle, residuos, almacenamiento y extracción.</td></tr>
      <tr><td>Formas y Moldes</td><td>Omar mantiene mezcla, moldes, insertos, fibra/resina y almacenamiento estable.</td><td>Zona de mezcla, almacenamiento, residuos, herramientas compartidas y superficies.</td></tr>
      <tr><td>Soldadura</td><td>Flaco mantiene zona de trabajo en caliente y sus controles físicos.</td><td>Separación de combustibles, cables, ventilación, cilindros si existen y acceso a extinción.</td></tr>
      <tr><td>Carpintería / Embalaje</td><td>Responsable por definir; debe operar separado de Retoque cuando haya polvo/corte.</td><td>Máquinas/guardas, polvo/aserrín, almacenamiento, corte, embalaje y residuos.</td></tr>
      <tr><td>Bodegas / Recepción</td><td>Responsable de recepción controla identificación, ubicación y espera física de piezas.</td><td>Segregación, estabilidad, pasillos, piezas sin ubicación, entradas/salidas y evidencia.</td></tr>
      </tbody></table>
    `
  },
  {
    id:"documentos", nav:"Control documental", title:"Compendio maestro de documentos ROCA", eyebrow:"Document control",
    lead:"Los documentos se organizan por ciclo de uso, responsable, evidencia y versión. Un machote no se considera jurídicamente validado por existir en el sistema.",
    body:`
      <h2>Ciclo del trabajador</h2>
      <p class="callout">Ingreso → expediente → contrato → confidencialidad → inducción → EPP/herramientas → capacitación/autorización → incidencias → cambios/permisos → terminación → finiquito/liquidación → baja.</p>
      <h2>Familias que deben existir</h2>
      <table><thead><tr><th>Familia</th><th>Control maestro</th><th>Dato sensible</th></tr></thead><tbody>
      <tr><td>Personal y laboral</td><td>Machotes, uso, emisor, firmas, versión y evidencia asociada.</td><td>Expedientes reales permanecen fuera del repositorio público.</td></tr>
      <tr><td>Clientes y servicio</td><td>Recepción, autorizaciones, entrega, aceptación e incidencias.</td><td>El maestro de clientes vive en BIWO/ERP.</td></tr>
      <tr><td>Compras y proveedores</td><td>Solicitud, autorización, recepción, no conformidad y cierre.</td><td>Datos fiscales/contratos reales se conservan en Drive.</td></tr>
      <tr><td>Operación y calidad</td><td>Bitácoras, inspección, desviación, retrabajo, CAPA y verificación.</td><td>No publicar ejemplos con datos identificables.</td></tr>
      <tr><td>Seguridad y mantenimiento</td><td>Inspecciones, EPP, equipos, emergencias, mantenimiento y cierre.</td><td>La vigencia requiere evidencia, no sólo formato.</td></tr>
      </tbody></table>
      <p>Los formatos de rescisión, finiquito, liquidación, contratos y cláusulas laborales se mantienen como borradores controlados hasta revisión de abogado.</p>
    `
  },
  {
    id:"internacional", nav:"Expediente internacional", title:"Entrada internacional por animal o pieza", eyebrow:"Vida silvestre y comercio exterior",
    lead:"ROCA no usa un checklist universal. El expediente cambia por especie, origen, régimen de protección, país, transportista y documentos que realmente acompañaron la operación.",
    body:`
      <h2>Núcleo del expediente</h2>
      <table><thead><tr><th>Bloque</th><th>Información / documentos posibles</th></tr></thead><tbody>
      <tr><td>Identificación</td><td>Lote interno, cliente, especie, cantidad, país de origen y fecha de recepción.</td></tr>
      <tr><td>Procedencia</td><td>Propietario/cazador, safari, outfitter u organizador cuando exista, reserva/finca si viene documentada.</td></tr>
      <tr><td>Vida silvestre</td><td>CITES cuando corresponda; autorizaciones o documentos PROFEPA; permisos del país de origen/exportación.</td></tr>
      <tr><td>Aduana y transporte</td><td>Pedimento, documento de exportación, transportista, pago/factura, guía logística y agente aduanal cuando aplique.</td></tr>
      <tr><td>Sanitario</td><td>Certificados sanitarios y documentos SENASICA/TRACES únicamente cuando el caso lo requiera.</td></tr>
      <tr><td>Cierre</td><td>Recepción física, identificación en sistema, documentos asociados y faltantes detectados.</td></tr>
      </tbody></table>
      <div class="callout">La ausencia de un documento en un expediente real no demuestra que no fuera requerido. La aplicabilidad se valida por separado con fuente primaria y caso concreto.</div>
    `
  }
];
