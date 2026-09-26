window.ROCA_FIELD_SECTIONS = [
  {
    id:"campo-inicio", nav:"Campo · Inicio", title:"Cierre de campo ROCA", eyebrow:"Captura mínima · evidencia útil",
    lead:"Esta vista existe para ejecutar el levantamiento sin convertir la auditoría en otro libro. Cada captura debe cerrar una condición concreta o producir una acción clara.",
    body:`
      <h2>Cómo usar esta vista</h2>
      <ol>
        <li>Recorre una ola completa antes de abrir otra.</li>
        <li>Captura sólo evidencia que demuestre una condición concreta.</li>
        <li>Asocia cada evidencia a su área y Evidence ID.</li>
        <li>Si algo no existe, registra NOT_IMPLEMENTED; no fabriques evidencia.</li>
        <li>Si no puede verificarse en campo, enrútalo a documento, medición, BIWO, entrevista o especialista.</li>
      </ol>
      <div class="callout">Una foto no prueba capacitación, vigencia, calibración, exposición ni cumplimiento. Una medición sin ubicación, fecha e instrumento tampoco cierra un requisito.</div>
      <h2>Privacidad</h2>
      <p>No fotografiar identificaciones personales, expedientes completos, pertenencias privadas, pantallas con datos de clientes, vestidores ni baños en uso.</p>
      <h2>Estado válido</h2>
      <p>RECEIVED · NOT_APPLICABLE-JUSTIFIED · BLOCKED-EXTERNAL · NOT_IMPLEMENTED · NOT_VERIFIED.</p>
    `
  },
  {
    id:"campo-1", nav:"Ola 1 · Recorrido", title:"Ola 1 · Taller completo", eyebrow:"30–45 min · estructura física",
    lead:"Una caminata bien hecha debe cerrar varias condiciones a la vez sin repetir fotografías.",
    body:`
      <h2>Capturar</h2>
      <ul>
        <li>Accesos, pasillos y salidas.</li>
        <li>Límites reales entre áreas.</li>
        <li>Extintores/equipo de emergencia visibles y accesibles.</li>
        <li>Piezas en espera y su identificación.</li>
        <li>Zonas de químicos.</li>
        <li>Residuos y recuperables.</li>
        <li>Cables, servicios y puntos de energía/agua relevantes.</li>
        <li>Zonas de secado/espera.</li>
        <li>Activos críticos.</li>
      </ul>
      <h2>Evidence IDs principales</h2>
      <p>EVID-REC-01 · EVID-CUR-01 · EVID-MON-01 · EVID-MON-02 · EVID-RET-01 · EVID-RET-03 · EVID-BAS-01 · EVID-BAS-02 · EVID-BAS-03 · EVID-CAR-01 · EVID-CAR-02 · EVID-SOL-01 · EVID-BLA-01 · EVID-SUP-01.</p>
      <h2>Salida</h2>
      <p>Panorámicas dirigidas + mapa de faltantes + lista real de estaciones/activos/subespacios.</p>
    `
  },
  {
    id:"campo-2", nav:"Ola 2 · Químicos", title:"Ola 2 · Químicos y materiales", eyebrow:"Producto real · HDS · punto de uso",
    lead:"Primero se identifica qué existe realmente; después se resuelve exposición, almacenamiento, residuo y aplicabilidad.",
    body:`
      <h2>Áreas prioritarias</h2><p>Curtiduría · Formas/Moldes/Réplicas · Montaje · Retoque · Soldadura · Blanqueado cuando corresponda.</p>
      <h2>Por producto</h2>
      <ul>
        <li>Foto de etiqueta legible.</li>
        <li>Nombre comercial/fabricante.</li>
        <li>HDS disponible o faltante.</li>
        <li>Ubicación de almacenamiento.</li>
        <li>Punto real de uso.</li>
        <li>Ventilación/extracción existente.</li>
        <li>Envase, sobrante, recuperable y residuo.</li>
      </ul>
      <h2>Evidence IDs</h2><p>EVID-CUR-02 · EVID-FMR-02 · EVID-RET-01 y registros de materiales V2.</p><h2>Retoque · productos a identificar</h2><p>Salvo · Roma · Suavitel cuando exista · resanador/catalizador · pinturas · gasolina blanca · barniz · Resistol blanco 800 · manchas/aceite de cuerno. Capturar producto real; la lista histórica no prueba uso actual.</p>
      <div class="callout">No clasificar un residuo por apariencia. Producto + proceso + condición del residuo + cantidad/frecuencia + destino gobiernan la decisión.</div>
    `
  },
  {
    id:"campo-3", nav:"Ola 3 · Estaciones", title:"Ola 3 · Estaciones y competencia", eyebrow:"Persona ↔ puesto ↔ operación",
    lead:"Cerrar quién trabaja dónde y qué puede ejecutar sin acompañamiento.",
    body:`
      <h2>Carpintería / Embalaje · sólo si se implementa</h2><p>No levantar evidencia como si el área ya existiera. Primero confirmar decisión de implementación y ubicación. Cuando exista: capturar límites, banco/rack/equipo real, separación de polvo respecto de Retoque, ruta de carga y luego una primera orden real sin escenificarla.</p><h2>Bases · maniobra y estructura</h2><p>Levantar responsable/estación real; plancha/bancos/fijaciones; herramientas de corte; punto de poliuretano/adhesivo; almacenamiento de malla/triplay/herrajes; y una maniobra real de pieza/base pesada sólo si ocurre naturalmente y puede observarse sin crear riesgo.</p><h2>Montaje y Retoque primero</h2>
      <ul>
        <li>Persona ↔ estación real.</li>
        <li>Tareas que ejecuta.</li>
        <li>Herramienta/equipo que usa.</li><li>En Retoque: compresor/placa, regulador, mangueras/conexiones, aerógrafo/pistola y punto real de aplicación cuando existan.</li>
        <li>Operaciones que puede realizar sin acompañamiento.</li>
        <li>Qué condición obliga a parar o pedir apoyo.</li>
        <li>Demostración breve o evidencia equivalente.</li>
      </ul>
      <h2>Evidencia visual por estación</h2>
      <p>Vista 3/4 completa · almacenamiento abierto · superficie/herramienta · pieza identificada · cables/servicios · condición al cierre.</p>
      <h2>No asumir</h2>
      <p>Antigüedad, oficio o aparecer en el roster no equivalen automáticamente a autorización para todas las operaciones.</p>
    `
  },
  {
    id:"campo-4", nav:"Ola 4 · BIWO", title:"Ola 4 · BIWO real", eyebrow:"Una orden · una historia",
    lead:"Capturar el sistema tal como existe; no ajustar BIWO para que coincida con el manual.",
    body:`
      <h2>Casos mínimos</h2>
      <ol>
        <li>Una orden terminada completa.</li>
        <li>Una orden activa.</li>
        <li>Una incidencia/retrabajo.</li>
        <li>Un caso con forma.</li>
        <li>Un caso de entrega/cierre.</li>
      </ol>
      <h2>Por evento</h2>
      <p>Nombre exacto del estado/campo · pantalla · quién lo cambia · qué evidencia queda · qué excepción existe.</p>
      <div class="callout">Pieza física + BIWO + dinero/cliente + evidencia deben contar la misma historia. Un cambio de pantalla no prueba que el handoff ocurrió.</div>
      <h2>Evidence ID</h2><p>EVID-BIWO-01.</p>
    `
  },
  {
    id:"campo-5", nav:"Ola 5 · Medir", title:"Ola 5 · Mediciones", eyebrow:"Sólo donde gobiernan una decisión",
    lead:"Medir después de conocer la tarea real evita números bonitos que no prueban nada.",
    body:`
      <h2>Prioridad</h2>
      <ul>
        <li>Iluminancia en el plano real de la tarea.</li>
        <li>Ventilación/extracción donde producto/proceso lo exija.</li>
        <li>Rutas, espacios o accesos cuando una dimensión cambie una decisión.</li>
        <li>Otras mediciones sólo si tienen criterio de aceptación definido.</li>
      </ul>
      <h2>Curtiduría · peso y pH</h2>
      <ul>
        <li>Peso real de la carga y valor capturado en ALUM-Tan deben corresponder a la misma carga.</li>
        <li>Registrar pH de inicio de día 2 y pH final en su punto real del proceso; no intercambiar referencias.</li>
        <li>Antes de usar una lectura como evidencia, identificar instrumento o método de medición y dejar su estado conocido.</li>
        <li>Si hoy no existe instrumento/método identificable o su estado no puede demostrarse, registrar NOT_VERIFIED; no inventar una lectura.</li>
      </ul>
      <h2>Registro mínimo</h2>
      <p>Área · estación/punto · tarea/etapa · valor · unidad · fecha · instrumento/método · ID/estado · foto o registro contextual · criterio asociado.</p>
      <h2>FMR · prueba y curado</h2>
      <ul>
        <li>Prueba de lote: masa total, relación A/B, recipiente patrón, condición climática observada y resultado.</li>
        <li>Curado/desmolde: familia/tamaño, hora de vaciado, referencia usada, hora de revisión y condición física antes de abrir.</li>
        <li>No liberar por reloj solamente; si está caliente, blando o deformable, registrar NOT_VERIFIED / continuar curado.</li>
      </ul>
      <h2>Evidence IDs</h2><p>EVID-CUR-03 · EVID-CUR-04 · EVID-FMR-02 · EVID-FMR-03 · EVID-RET-02 · EVID-RET-03 y cualquier medición asociada a un REQ específico.</p>
    `
  },
  {
    id:"campo-6", nav:"Ola 6 · Dossier", title:"Ola 6 · Assurance documental", eyebrow:"Dirección · expediente restringido",
    lead:"Cerrar el estado documental sin cargar al operador con lenguaje legal.",
    body:`
      <h2>Frentes</h2>
      <ul>
        <li>Inmueble / base de posesión.</li>
        <li>Uso y funcionamiento.</li>
        <li>Protección Civil / incendio.</li>
        <li>STPS documental aplicable.</li>
        <li>Residuos / ambiental.</li>
        <li>Vida silvestre / frontera por caso.</li>
        <li>Seguros, legal, fiscal y privacidad cuando corresponda.</li>
      </ul>
      <h2>Salida por requisito</h2>
      <p>Fuente vigente · trigger/aplicabilidad · estado · evidencia · siguiente acción · responsable · fecha · condición de cierre.</p>
      <div class="callout">No presentar ni pagar trámites, ni emitir declaraciones bajo protesta, ni ejecutar actos legales irreversibles sin aprobación expresa del usuario.</div>
    `
  }
];
