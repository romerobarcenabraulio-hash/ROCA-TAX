window.ROCA_DATA = {
  revision: "2026-09-02",
  sections: [
    {
      id:"estado", nav:"Estado de trabajo", title:"ROCA Live · fuente viva de trabajo", eyebrow:"Gobierno del documento",
      lead:"El conocimiento operativo de ROCA deja de depender de una cadena de PDFs. Esta fuente organiza estándares, implementación, evidencia y publicación sin reemplazar el master aprobado hasta que cada bloque pase preservación y auditoría.",
      body:`
        <div class="meta"><div><span>Run</span><strong>2026-09-02</strong></div><div><span>Master</span><strong>Preservado</strong></div><div><span>Publicación</span><strong>No liberada</strong></div><div><span>Regla</span><strong>Integrar una vez</strong></div></div>
        <h2>Qué ya puede operar</h2>
        <ul><li>Implementación física por área con acciones delegables.</li><li>Separación entre estándar existente, mejora pendiente y validación técnica.</li><li>Control editorial anti-LLM por página.</li><li>Posters de condición de área listos para iteración.</li><li>Evidencia BIWO suficiente para documentar el flujo físico-digital sin duplicar la base de clientes.</li></ul>
        <div class="callout">El PDF final será una salida de esta misma fuente. La web y la impresión no pueden convertirse en dos verdades distintas.</div>
      `
    },
    {
      id:"implementacion", nav:"Implementación", title:"Del estándar a la mejora física", eyebrow:"Dirección de taller",
      lead:"Guicho no necesita recibir un manual de cientos de páginas para empezar a mejorar. Cada área se traduce a acciones observables, responsables y evidencia de cierre.",
      body:`
        <h2>Tres clases de acción</h2>
        <table><thead><tr><th>Clase</th><th>Uso</th><th>Ejemplos</th><th>Cierre</th></tr></thead><tbody>
        <tr><td><strong>Corregir ahora</strong></td><td>No requiere obra ni compra relevante.</td><td>Pasillo libre, pieza identificada, cajones ordenados, químico cerrado, cable fuera de paso.</td><td>Foto + verificación breve.</td></tr>
        <tr><td><strong>Implementar</strong></td><td>Requiere fabricar, comprar, mover o instalar.</td><td>Mueble, rack, bote, rótulo, zona de espera, almacenamiento.</td><td>Instalación + evidencia.</td></tr>
        <tr><td><strong>Validar técnicamente</strong></td><td>No debe cerrarse por apariencia.</td><td>Lux, extracción, protección contra incendio, HDS/EPP, guardas, descarga.</td><td>Medición, documento o revisión competente.</td></tr>
        </tbody></table>
        <h2>Secuencia de delegación</h2><ol><li>Entregar estándar del área y poster.</li><li>Separar acciones inmediatas de compras/fabricaciones.</li><li>Definir responsable operativo.</li><li>Ejecutar corrección.</li><li>Capturar evidencia de cierre.</li><li>Verificar y cerrar en ClickUp.</li><li>Mantener mediante auditoría corta entre compañeros.</li></ol>
      `
    },
    {
      id:"areas", nav:"Áreas de trabajo", title:"Características permanentes por área", eyebrow:"Estándar físico del taller",
      lead:"La falta de un mueble definitivo no significa que el estándar del área esté pendiente. La condición objetivo existe desde antes y se conserva mientras se implementan mejoras.",
      body:`
        <h2>Condición común</h2><ul><li>Función y límite claros.</li><li>Estación individual utilizable.</li><li>Entrada, salida y espera identificables.</li><li>Circulación libre.</li><li>Herramientas con ubicación práctica y materiales separados.</li><li>Residuos segregados por corriente real.</li><li>Químicos identificados y cerrados.</li><li>Servicios y cables sin improvisaciones permanentes.</li><li>Iluminación y ventilación evaluadas según la tarea.</li><li>Acceso a emergencia y mantenimiento sin obstrucción.</li></ul>
        <h2>Condiciones específicas</h2>
        <table><thead><tr><th>Área</th><th>Condiciones que no deben perderse</th><th>Estado de mobiliario</th></tr></thead><tbody>
        <tr><td>Montaje</td><td>Estaciones individuales; barro/adhesivos/Bondo/costura; taladros y brocas; espera/secado identificado.</td><td><span class="status pending">Pendiente de ajuste</span></td></tr>
        <tr><td>Curtiduría</td><td>Separación húmedo/seco; dosificación; rebaja; tinas; respuesta a derrames; químicos y residuos.</td><td><span class="status pending">Pendiente de ajuste</span></td></tr>
        <tr><td>Retoque</td><td>Detalle/color; iluminación de precisión; pinturas/solventes; aerografía; residuos y superficie limpia.</td><td><span class="status pending">Pendiente de ajuste</span></td></tr>
        <tr><td>Formas y Moldes</td><td>Mezcla/dosificación; almacenamiento estable de moldes; fibra/resina; insertos y residuos.</td><td><span class="status pending">Pendiente de ajuste</span></td></tr>
        <tr><td>Soldadura</td><td>Trabajo en caliente; separación de combustibles; ventilación; cilindros si existen; extinción accesible.</td><td><span class="status pending">Pendiente de área</span></td></tr>
        <tr><td>Carpintería / Embalaje</td><td>Polvo/aserrín; corte; máquinas/guardas; almacenamiento; embalaje y separación de solventes.</td><td><span class="status pending">Pendiente de implantación</span></td></tr>
        <tr><td>Blanqueado</td><td>Fuente térmica; recipiente estable; ventilación; materiales; residuos y transferencia segura.</td><td><span class="status pending">Pendiente de cierre</span></td></tr>
        <tr><td>Bodegas / Recepción</td><td>Identificación; segregación; acceso; protección de piezas; condición de espera y trazabilidad.</td><td><span class="status pending">Pendiente de ordenamiento</span></td></tr>
        </tbody></table>
      `
    },
    {
      id:"residuos", nav:"Residuos y señalética", title:"Botes, residuos y señalización", eyebrow:"Implementación transversal",
      lead:"No se delega “poner un bote” o “poner un letrero”. Se define qué debe resolver físicamente y cómo se demuestra que quedó bajo control.",
      body:`
        <h2>Bote de residuos</h2><ul><li>Corriente real definida.</li><li>Capacidad acorde a la generación.</li><li>Recipiente rígido, estable y compatible con el residuo.</li><li>Lavable cuando corresponda.</li><li>Identificación legible.</li><li>Tapa cuando el residuo, olor o contaminación lo requiera.</li><li>Ubicación cercana al punto de generación sin bloquear circulación.</li><li>Ruta de retiro definida.</li></ul>
        <h2>Señalización</h2><p>Usar sólo cuando comunica una regla o riesgo que alguien necesita reconocer antes de actuar: área, almacenamiento, químico, EPP, riesgo eléctrico, trabajo en caliente, ruta, extintor, residuo o prohibición específica. Evitar paredes llenas de señalética sin función.</p>
      `
    },
    {
      id:"erp", nav:"BIWO / ERP", title:"Trazabilidad física y digital", eyebrow:"Operación comercial y producción",
      lead:"BIWO mantiene el dato maestro de clientes y acompaña el avance productivo. Drive conserva documentos y evidencia; no se crea una segunda base paralela de clientes.",
      body:`
        <h2>Flujo confirmado</h2><p class="callout">Cliente → Cotización → Orden / Venta → Cobranza / Pago → Lote → Etapa productiva → Cambio de etapa → Entrega / Cierre</p>
        <h2>Regla de control</h2><p>La realidad física de la pieza debe coincidir con la etapa registrada. Las capturas disponibles ya sustentan alta de insumos, cotizaciones, cobranza, pagos, selección de cliente, alta de lote y dashboard de etapas. No se publican datos reales de clientes en este repositorio.</p>
      `
    },
    {
      id:"evidencia", nav:"Evidencia", title:"Qué debe demostrar una fotografía", eyebrow:"Control de evidencia",
      lead:"La fotografía sirve cuando responde una pregunta de control. No sustituye mediciones, documentos, vigencias o validaciones técnicas.",
      body:`
        <h2>Paquete por área</h2><ol><li>Vista general desde entrada.</li><li>Vista contraria.</li><li>Cada estación completa.</li><li>Cajones y almacenamiento abiertos.</li><li>Botes y residuos.</li><li>Químicos/materiales.</li><li>Cables y conexiones.</li><li>Iluminación y ventilación visibles.</li><li>Extintor/equipo de emergencia y acceso.</li><li>Señalización y zonas de espera.</li></ol>
        <h2>Regla de alcance</h2><p>Una foto puede probar condición visible. No prueba lux, caudal, distancia de recorrido, HDS vigente, cumplimiento legal ni aptitud técnica de un control salvo que la evidencia específica lo permita.</p>
      `
    },
    {
      id:"editorial", nav:"Auditoría editorial", title:"Control editorial y huella LLM", eyebrow:"Preservación de calidad",
      lead:"La nueva infraestructura no autoriza a rediseñar el manual. Se conservan las páginas históricas fuertes y se corrigen localmente las débiles.",
      body:`
        <div class="meta"><div><span>GREEN</span><strong>185</strong></div><div><span>YELLOW</span><strong>158</strong></div><div><span>RED</span><strong>48</strong></div><div><span>Total auditado</span><strong>391</strong></div></div>
        <h2>Criterio de reparación</h2><ul><li><strong>PRESERVE:</strong> mantener composición y contenido.</li><li><strong>CORRECT:</strong> corregir redacción, densidad o jerarquía sin reconstruir.</li><li><strong>MOVE:</strong> reubicar sin perder información.</li><li><strong>MERGE WITHOUT LOSS:</strong> fusionar duplicados preservando hechos únicos.</li><li><strong>ADD:</strong> incorporar huecos comprobados.</li><li><strong>REMOVE DUPLICATE:</strong> eliminar repetición verdadera.</li></ul>
        <h2>Rechazo automático</h2><p>Tarjetas repetidas, pseudo-dashboard, cajas y flechas triviales, iconografía decorativa, simetría artificial, texto de consultoría, títulos genéricos y cualquier página cuya primera lectura sea “esto parece generado por IA”.</p>
      `
    },
    {
      id:"posters", nav:"Posters", title:"Posters operativos de área", eyebrow:"Comunicación al personal",
      lead:"El poster no enseña NOM ni teoría. Resume cómo debe quedar el área en lenguaje ejecutable.",
      posters:[
        ["Montaje",["Pieza identificada durante trabajo, espera y secado.","Herramientas en su ubicación; nada revuelto ni amontonado.","Barro, adhesivos y consumibles separados y cerrados.","Pasillos libres; cables fuera de la ruta.","Residuos en el recipiente que corresponde.","Dejar estación lista para trabajar al terminar."]],
        ["Curtiduría",["Separar trabajo húmedo de herramientas y almacenamiento seco.","Químicos identificados, cerrados y en su ubicación.","Tinas y zonas de dosificación libres de objetos ajenos.","Pasillos y acceso a equipos despejados.","Residuos y recuperables en su corriente real.","Dejar área limpia y preparada para el siguiente ciclo."]],
        ["Retoque",["Superficie limpia para trabajo de detalle.","Pinturas y solventes identificados y cerrados.","Herramienta fina y aerografía en su ubicación.","Residuos separados de materiales reutilizables.","Mantener iluminación de detalle sin obstrucciones.","Dejar estación lista y pieza protegida al terminar."]],
        ["Formas y Moldes",["Zona de mezcla y dosificación despejada.","Moldes almacenados estables y sin deformación.","Resina, fibra y consumibles identificados.","Insertos y piezas pequeñas con ubicación propia.","Residuos de mezcla/fibra separados.","Limpiar superficie antes de cerrar el trabajo."]],
        ["Soldadura",["Retirar combustibles antes de trabajo en caliente.","Mantener zona de soldadura delimitada y libre.","Cables y conexiones sin atravesar circulación.","Cilindros asegurados cuando existan.","Extintor accesible y sin obstrucción.","Retirar residuos metálicos y dejar el área segura."]],
        ["Carpintería y Embalaje",["Separar corte y aserrín de pinturas/solventes.","Máquinas y guardas accesibles y sin improvisaciones.","Madera, herrajes y consumibles con ubicación definida.","Aserrín y recortes en su corriente correspondiente.","Pasillos y zona de embalaje despejados.","Guardar herramientas y dejar superficie lista."]],
        ["Blanqueado",["Recipiente y fuente térmica estables.","Zona ventilada y libre de materiales ajenos.","Herramientas y químicos identificados.","Evitar obstáculos alrededor de la transferencia de pieza.","Residuos en su recipiente.","Cerrar la operación dejando el área limpia y segura."]],
        ["Bodegas y Recepción",["Cada pieza o lote identificado.","No bloquear pasillos ni accesos.","Separar espera, almacenamiento y entrega.","Evitar piezas apoyadas de forma inestable.","Mantener materiales ajenos fuera del almacenamiento productivo.","Registrar y corregir cualquier pieza sin ubicación definida."]]
      ]
    }
  ]
};
