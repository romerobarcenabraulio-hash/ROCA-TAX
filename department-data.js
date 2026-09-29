window.ROCA_DEPARTMENTS = window.ROCA_DEPARTMENTS || {};
window.ROCA_DEPARTMENTS["area-curtiduria"] = {
  id:"area-curtiduria",
  code:"CUR",
  title:"Curtiduría",
  status:"PARTIAL",
  purpose:"Preservar, curtir y acondicionar la piel hasta dejarla manipulable, identificada y lista para producción.",
  receivesFrom:"Recepción",
  handsOffTo:"Almacén / Montaje según ruta",
  area:[
    {id:"CUR-AREA-01",label:"Zonas de trabajo",text:"Recepción húmeda, baños, rebajado, escurrido/secado y espera están físicamente diferenciados para evitar cruces y pérdida de identidad."},
    {id:"CUR-AREA-02",label:"Tinas, tambor y equipos",text:"Tinas, tambor, rebajadora, pateadora y equipos de apoyo tienen acceso suficiente para carga, descarga, limpieza, inspección y mantenimiento."},
    {id:"CUR-AREA-03",label:"Piso, agua y drenaje",text:"Las rutas húmedas permanecen transitables, sin acumulaciones que creen riesgo de resbalón; los puntos de agua y drenaje tienen ruta física conocida."},
    {id:"CUR-AREA-04",label:"Químicos",text:"Ácidos, sal y demás productos permanecen cerrados cuando no están en uso, identificados y almacenados según compatibilidad y condición real del producto."},
    {id:"CUR-AREA-05",label:"Ventilación",text:"La ventilación corresponde a los baños, químicos y equipos realmente usados en Curtiduría."},
    {id:"CUR-AREA-06",label:"Identidad de pieles",text:"Las pieles conservan su identificación y siguiente acción durante tendido, secado, espera y transferencia."},
    {id:"CUR-AREA-07",label:"Instrumentos y activos críticos",text:"Tambor, rebajadora, pateadora, báscula y el método o instrumento usado para pH tienen identidad, ubicación y condición conocidas antes de usarse como parte del proceso."}
  ],
  areaAudit:[
    {id:"CUR-AUD-AREA-01",criterion:"Zonas húmedas, baños, rebajado, secado y espera están diferenciados y utilizables.",evidence:"Recorrido del área + fotografía general y puntos de cruce."},
    {id:"CUR-AUD-AREA-02",criterion:"Tinas, tambor y equipos conservan acceso suficiente para operar, limpiar y mantener.",evidence:"Recorrido físico alrededor de cada equipo crítico."},
    {id:"CUR-AUD-AREA-03",criterion:"Piso, agua y drenaje no generan una ruta húmeda peligrosa.",evidence:"Observación durante operación o limpieza."},
    {id:"CUR-AUD-AREA-04",criterion:"Químicos están identificados, cerrados y almacenados según compatibilidad.",evidence:"Producto real + etiqueta + ubicación + HDS correspondiente."},
    {id:"CUR-AUD-AREA-05",criterion:"La ventilación corresponde a los procesos y productos realmente usados.",evidence:"Condición observable + medición cuando gobierne una decisión."},
    {id:"CUR-AUD-AREA-06",criterion:"Toda piel en proceso conserva ID y siguiente acción.",evidence:"Muestra de pieles en baños, secado y espera."},
    {id:"CUR-AUD-AREA-07",criterion:"Activos e instrumentos críticos tienen identidad y condición conocidas.",evidence:"Activo real + identificación + estado disponible."}
  ],
  method:{
    flow:"Recepción/inspección → hidratación → marcado físico → ruta por espesor → picle → rebajado manual → rebajado en disco → pesado / ALUM-Tan → neutralización / repiclado → escurrido / secado → tamboreo con aserrín → sacudido → engrase → pateado selectivo cuando la piel lo requiere.",
    branches:[
      {title:"Piel gruesa o dura",text:"Después de hidratar y marcar puede aflojarse en tina exterior de picle. Esa tina no sustituye el picle ácido de tambor. Después del picle se rebaja y puede regresar a picle mientras exista sección sin curtir."}
    ],
    stages:[
      {id:"CUR-MET-01",title:"Hidratación",text:"Usar como referencia 1 kg de sal por 10 L de agua y una ventana de 10–12 h. La salida también depende de condición física: la piel debe poder desplegarse y marcarse sin forzar zonas rígidas."},
      {id:"CUR-MET-02",title:"Picle",text:"La referencia de trabajo conserva 473 L de agua, 45 kg de sal y 300 mL de ácido sulfúrico. La cantidad de ácido fórmico no se congela todavía porque existe conflicto entre 6.0 L y 6.4 L."},
      {id:"CUR-MET-03",title:"Rebajado",text:"La cuchilla o trabajo manual atiende detalle y zonas necesarias; la rebajadora de disco uniforma espesor. En piel gruesa puede repetirse la secuencia picle → rebajado → picle hasta eliminar sección sin curtir."},
      {id:"CUR-MET-04",title:"Pesado y ALUM-Tan",text:"Pesar la carga real y capturar exactamente esa lectura en la hoja controlada. El peso usado por el cálculo debe corresponder a la misma carga física."},
      {id:"CUR-MET-05",title:"Neutralización y pH",text:"La referencia para inicio del día 2 es pH 3.6–3.8. El bicarbonato calculado se divide en cinco partes con una adición por hora. La referencia final es pH 4.2–4.3."},
      {id:"CUR-MET-06",title:"Escurrido y secado",text:"Referencia: 12 h con calor y 14–16 h en invierno o lluvia. No pasar a aserrín con la piel empapada; la condición real gobierna el avance."},
      {id:"CUR-MET-07",title:"Tamboreo con aserrín",text:"Referencia de 4 h."},
      {id:"CUR-MET-08",title:"Sacudido",text:"Referencia de 15 min. No engrasar mientras siga soltando aserrín visible."},
      {id:"CUR-MET-09",title:"Engrase y pateado",text:"La pateadora se usa después del engrase sólo en piel gruesa o resistente que requiera acondicionamiento mecánico. No sustituye a la rebajadora."},
      {id:"CUR-MET-10",title:"Salado previo",text:"Referencia preservada de 2–3 pasadas de sal fina, con drenado entre pasadas y secado a la sombra. No colgar inmediatamente después del primer salado."}
    ],
    controls:[
      {id:"CUR-CTL-01",text:"El número consecutivo físico permanece asociado a la piel durante baños, rebajado, secado y transferencia."},
      {id:"CUR-CTL-02",text:"La rebajadora uniforma espesor; la pateadora acondiciona después del engrase. No son intercambiables."},
      {id:"CUR-CTL-03",text:"Peso de báscula y peso capturado en ALUM-Tan corresponden a la misma carga."},
      {id:"CUR-CTL-04",text:"Los dos valores de pH corresponden a puntos distintos del proceso y no son intercambiables."},
      {id:"CUR-CTL-05",text:"La piel avanza por condición física además de las referencias de tiempo."}
    ]
  },
  tools:[
    "Tinas y tambor",
    "Rebajadora de disco",
    "Cuchilla / burro y herramientas de detalle",
    "Báscula para peso de carga",
    "Método o instrumento de medición de pH por identificar y verificar",
    "Sistema de tendido",
    "Tambor de aserrín",
    "Pateadora cuando la secuencia real la requiera"
  ],
  consumables:[
    "Agua",
    "Sal",
    "Ácido fórmico",
    "Ácido sulfúrico",
    "Producto de curtido / aluminio cuando corresponda",
    "Bicarbonato de sodio según ALUM-Tan",
    "Grasa / acondicionadores",
    "Aserrín",
    "Consumibles de limpieza"
  ],
  evidence:[
    {id:"EVID-CUR-01",text:"Distribución física y accesibilidad del área.",placement:"Área"},
    {id:"EVID-CUR-02",text:"Identidad real de químicos y HDS correspondiente.",placement:"Área / Químicos"},
    {id:"EVID-CUR-03",text:"Mediciones de iluminación, ventilación o servicios cuando una decisión dependa de ellas.",placement:"Área"},
    {id:"EVID-CUR-04",text:"Peso y pH de proceso con identidad y estado del instrumento o método usado.",placement:"Metodología / Control"},
    {id:"EVID-CUR-05",text:"Receta/versión y lote o carga cuando aplique.",placement:"Metodología"},
    {id:"EVID-CUR-06",text:"Incidencia, retrabajo, liberación y transferencia.",placement:"Metodología / Handoff"}
  ],
  auditCriteria:[
    {id:"CUR-AUD-01",group:"Área",label:"Identidad de pieles",target:"Toda piel conserva identificación durante el proceso.",input:"Revisar pieles en baños, rebajado, secado y espera."},
    {id:"CUR-AUD-02",group:"Área",label:"Químicos / HDS",target:"Químicos identificados y HDS accesible cuando aplique.",input:"Producto + etiqueta + HDS + ubicación."},
    {id:"CUR-AUD-03",group:"Área",label:"Equipos",target:"Equipo utilizable y condición/mantenimiento verificable.",input:"Equipo crítico + estado disponible."},
    {id:"CUR-AUD-04",group:"Área",label:"Rutas húmedas",target:"Circulación y drenaje controlados durante operación.",input:"Recorrido húmedo real."},
    {id:"CUR-AUD-05",group:"Proceso",label:"Liberación por condición",target:"La piel avanza por condición y no únicamente por tiempo.",input:"Registrar criterio de salida observado."},
    {id:"CUR-AUD-06",group:"Proceso",label:"Peso ALUM-Tan",target:"Peso físico y peso capturado corresponden a la misma carga.",input:"Lectura de báscula + registro de carga."},
    {id:"CUR-AUD-07",group:"Proceso",label:"pH",target:"Cada pH se registra en su punto correcto con instrumento o método identificado.",input:"Punto de proceso + valor + fecha + instrumento/método."},
    {id:"CUR-AUD-08",group:"Proceso",label:"Agua a presión",target:"El piloto permanece separado de la rutina hasta liberación documentada.",input:"Confirmar que no se usa como rutina."}
  ],
  implementationHolds:[
    {id:"CUR-HOLD-01",text:"Reconciliar 6.0 L vs 6.4 L de ácido fórmico antes de congelar una receta única de picle."},
    {id:"CUR-HOLD-02",text:"Identificar el instrumento o método real de pH y su estado/verificación aplicable."},
    {id:"CUR-HOLD-03",text:"Confirmar productos y HDS exactos."},
    {id:"CUR-HOLD-04",text:"Cerrar balance de baños/residuos y destino."},
    {id:"CUR-HOLD-05",text:"Verificar ventilación y drenaje."},
    {id:"CUR-HOLD-06",text:"Completar inventario/evidencia de activos y competencia."},
    {id:"CUR-HOLD-07",text:"Recuperar/verificar la fuente controlada ALUM-Tan antes de trasladar sus fórmulas a cálculo HTML."},
    {id:"CUR-HOLD-08",text:"Mantener el piloto de agua a presión fuera de rutina hasta validación documentada."}
  ],
  sourceRefs:[
    "ops/areas/CURTIDURIA_AREA_BOOK_V2.md"
  ]
};
