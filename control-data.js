window.ROCA_CONTROL_SECTIONS = [
  {
    id:"controles-transversales",
    nav:"Controles transversales",
    title:"Controles que cruzan todo el taller",
    eyebrow:"Activos · materiales · competencia · evidencia",
    lead:"Estos controles no se repiten dentro de cada metodología. Se administran una sola vez y cada área sólo referencia lo que realmente le aplica.",
    body:`
      <h2>Activos y mantenimiento</h2>
      <p>El registro V2 ya identifica familias críticas por área: tambor, rebajadora, básculas, taladro/mezclador, moldes, herramienta eléctrica de Montaje, aerógrafo/compresor, herramienta de Bases, soldadura/esmeril/ventilación y fuente térmica de Blanqueado.</p>
      <p class="callout">Estado actual: inventario estructurado, pero todavía NO VERIFICADO en campo. Frecuencias, responsables, manuales y mantenimiento real no se rellenan por costumbre.</p>

      <h2>Competencia y autorización</h2>
      <p>La autorización se asigna por operación demostrada, no por antigüedad ni por aparecer en el roster. La matriz distingue operaciones como preparar baños, operar rebajadora, dosificar poliuretano, seleccionar/modificar forma, fijar cuernos, aerografiar, liberar visualmente, soldar o tratar cráneos.</p>
      <p>La evidencia de competencia puede incluir demostración observada, pieza de referencia, criterio de aceptación, equipo autorizado y persona que evalúa. La matriz permanece NO VERIFICADA hasta recibir esa evidencia.</p>

      <h2>Materiales y flujo</h2>
      <p class="callout">Entrada → almacenamiento → uso → incorporado → sobrante → recuperable → residuo → destino.</p>
      <p>El registro ya cubre agua/sal/ácidos/aserrín de Curtiduría; A/B, resina, fibra y cargas de Formas/Moldes; Bondo, barro, adhesivos e hilos de Montaje; pinturas, solventes y resanes de Retoque; madera, malla y ambientación de Bases; metal/consumibles de Soldadura y agua/calor de Blanqueado.</p>
      <p>La clasificación ambiental y el destino siguen pendientes hasta cerrar producto, condición real del residuo y aplicabilidad.</p>

      <h2>Evidencia</h2>
      <p>El plan V2 ya define Evidence IDs por área y qué demuestra cada uno. Una foto nunca se usa para probar capacitación, vigencia, calibración, exposición o cumplimiento legal.</p>

      <h2>Regla de mantenimiento del sistema</h2>
      <ul>
        <li>Un activo nuevo entra al registro; no genera un capítulo nuevo.</li>
        <li>Una competencia nueva entra a la matriz; no se duplica en cada manual.</li>
        <li>Un material nuevo entra al flujo; su control físico se referencia desde el área.</li>
        <li>Una evidencia nueva se liga al requisito o claim exacto que demuestra.</li>
      </ul>
    `
  }
];
