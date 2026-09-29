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

window.ROCA_DEPARTMENTS["area-montaje"] = {
  id:"area-montaje",
  code:"MON",
  title:"Montaje",
  status:"PARTIAL",
  purpose:"Convertir una piel curtida y acondicionada, una forma compatible y sus componentes en una pieza armada, proporcionada, estable y lista para Retoque.",
  receivesFrom:"Curtiduría / almacén con piel, medidas, forma y componentes identificados",
  handsOffTo:"Retoque",
  people:[
    "Guicho — dirección del taller / coordinación de Montaje",
    "Don Gustavo — Montaje",
    "Ezequiel — Montaje",
    "Manuel Rivera — Montaje",
    "Rodolfo — Montaje",
    "Raimundo — Montaje",
    "Rubén — Montaje",
    "Lalo — Montaje",
    "Ricardo — Montador",
    "Eugenio — asistente directo de Ricardo"
  ],
  entryInputs:[
    "Piel curtida/acondicionada e identificada",
    "Medidas necesarias",
    "Pose/forma definida",
    "Forma y componentes correspondientes",
    "Cuernos/astas, ojos u otros componentes identificados cuando apliquen",
    "Condición comercial/operativa suficiente para avanzar según la regla vigente de ROCA"
  ],
  entryStops:[
    "Piel y forma no corresponden dimensionalmente",
    "Falta una pieza o componente crítico",
    "La identidad de la pieza no coincide",
    "Existe una condición estructural o anatómica que no puede corregirse dentro de Montaje",
    "El estado físico o informacional obligaría a improvisar"
  ],
  exitCriteria:[
    "Pieza seca",
    "Estructuralmente estable",
    "Cosida",
    "Piel asentada y fijada",
    "Sin humedad apreciable",
    "Sin desplazamiento estructural al comprobar las zonas fijadas",
    "Identificada y con transferencia registrada"
  ],
  area:[
    {id:"MON-AREA-01",label:"Circulación y accesos",text:"Pasillos, salidas, tableros, extintores y puntos de operación permanecen libres. Piezas, cajas, cables, mangueras y herramienta temporal no ocupan circulación."},
    {id:"MON-AREA-02",label:"Estación y almacenamiento",text:"Cada puesto conserva superficie suficiente, almacenamiento recuperable y apoyo estable para la pieza. Herramienta y consumibles habituales tienen ubicación definida sin amontonamiento."},
    {id:"MON-AREA-03",label:"Iluminación",text:"La iluminación se evalúa en el plano real de la tarea de cada estación cuando calidad o seguridad dependan de ella."},
    {id:"MON-AREA-04",label:"Ventilación y extracción",text:"Bondo, catalizador, fibra, adhesivos y otros productos se usan en un punto compatible con la ventilación o extracción que exijan el producto, la HDS y la exposición real."},
    {id:"MON-AREA-05",label:"Emergencia",text:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo."},
    {id:"MON-AREA-06",label:"Identidad y espera",text:"Toda pieza, piel, forma o trabajo activo o en espera conserva identificación visible y siguiente acción; la espera no bloquea circulación ni mezcla proyectos."},
    {id:"MON-AREA-07",label:"Estación del montador",text:"Cada montador dispone de una estación identificable y almacenamiento propio. La evaluación se hace sobre cada puesto real, no sobre una estación promedio."},
    {id:"MON-AREA-08",label:"Punzantes y costura",text:"Agujas, alfileres, cuchillos e hilo tienen ubicación definida. Puntas y filos permanecen protegidos cuando no se usan y los alfileres usados no quedan dispersos."},
    {id:"MON-AREA-09",label:"Químicos de montaje",text:"Bondo, catalizador, fibra y adhesivos conservan identificación y punto de mezcla/uso compatible con ventilación, residuos y fuentes de ignición según el producto real."},
    {id:"MON-AREA-10",label:"Secado",text:"Las piezas en secado permanecen estables, identificadas, fuera de circulación y con espacio suficiente para revisar fijaciones sin mover trabajos ajenos."},
    {id:"MON-AREA-11",label:"Cables, mangueras y electricidad",text:"Cables y extensiones no cruzan circulación sin protección. Cargadores y taladros tienen punto definido y la alimentación temporal se retira al terminar."},
    {id:"MON-AREA-12",label:"Residuos y recuperables",text:"Punzantes, sobrantes de mezcla, envases, recortes recuperables y residuo general se separan por destino real. Material útil no se desecha junto con residuo."},
    {id:"MON-AREA-13",label:"Reset de estación",text:"Al cierre la superficie queda utilizable, herramienta ubicada, punzantes protegidos, residuos retirados, cables fuera del paso, pieza identificada y siguiente acción visible."}
  ],
  areaAudit:[
    {id:"MON-AUD-AREA-01",criterion:"Circulación, salidas, tableros y medios de emergencia permanecen libres.",evidence:"Vista general desde acceso y recorrido hacia salida/equipo de emergencia."},
    {id:"MON-AUD-AREA-02",criterion:"Cada estación es utilizable, estable y con almacenamiento recuperable.",evidence:"Vista 3/4 de estación + almacenamiento abierto."},
    {id:"MON-AUD-AREA-03",criterion:"La iluminación corresponde a la tarea real cuando requiere medición.",evidence:"Lux en plano de tarea + fecha + instrumento cuando aplique."},
    {id:"MON-AUD-AREA-04",criterion:"La ventilación/extracción corresponde al producto y operación real.",evidence:"Producto/HDS + punto de uso + condición de ventilación."},
    {id:"MON-AUD-AREA-05",criterion:"Toda pieza activa, en espera o secado conserva ID y siguiente acción.",evidence:"Muestra de piezas en estaciones y zona de secado."},
    {id:"MON-AUD-AREA-06",criterion:"Punzantes, filos, cables y residuos no quedan dispersos ni invaden paso.",evidence:"Estación al cierre."},
    {id:"MON-AUD-AREA-07",criterion:"Químicos y mezclas de montaje están identificados y controlados en su punto de uso.",evidence:"Producto real + etiqueta + ubicación + HDS cuando aplique."}
  ],
  method:{
    flow:"Piel flexible y medida → comparar con forma y pose → presentar y corregir forma → preparar boca/nariz/canales → posicionar cuernos/astas → conformar orejas → posicionar ojos → correcciones localizadas con barro → adhesivo y vestido de piel → coser/fijar → secar y comprobar → transferir a Retoque.",
    branches:[],
    stages:[
      {id:"MON-MET-01",title:"Recuperar flexibilidad y levantar medidas",text:"Relajar la piel hasta recuperar flexibilidad; cerrar desde el interior cortes o balazos que deban repararse; retirar carnaza, grasa, tejido sobrante y huesos residuales; limpiar interior de pezuñas o garras cuando corresponda; terminar cartílagos de oreja, nariz y belfos. Antes de medir, jalar la piel con la mano: debe desplazarse y recuperar forma sin quedar al límite de tensión. Registrar ojo-nariz, contorno inmediatamente detrás de las órbitas y las medidas corporales que correspondan. Si una modificación de forma se prolongará varios días, la fuente técnica atribuye congelar la piel para resguardarla."},
      {id:"MON-MET-02",title:"Seleccionar, presentar y corregir la forma",text:"Comparar medidas, inventario y pose. Elegir la forma que reduzca correcciones, presentar antes de cortar y corregir de forma localizada cuando proceda. Después de cada modificación volver a comprobar cara, cuello, largo, ancho y volumen como conjunto."},
      {id:"MON-MET-03",title:"Preparar boca, nariz y canales",text:"Abrir y perfilar alojamientos para boca, nariz, belfos y piel de nariz. El criterio de salida es que entren sin forzar la piel ni desplazar la cara."},
      {id:"MON-MET-04",title:"Preparar y posicionar cuernos o astas",text:"Presentar la base, resolver posición con frente, ojos y orejas y comparar altura, inclinación, separación y simetría desde frente, perfil y vista superior. No cubrir la unión mientras exista movimiento o una diferencia corregible."},
      {id:"MON-MET-05",title:"Preparar y conformar orejas",text:"Voltear y limpiar la oreja. Preparar fibra cortada y mezclar con Bondo y catalizador hasta masa homogénea; distribuir mientras permanece trabajable y modelar borde, concavidad y volumen hasta que conserve forma."},
      {id:"MON-MET-06",title:"Posicionar ojos",text:"Colocar los ojos y usar barro LR300 para sostener y modelar posición. Trabajar ambos lados simultáneamente y comparar altura, profundidad, orientación y relación anatómica."},
      {id:"MON-MET-07",title:"Correcciones localizadas con barro",text:"Usar barro para corregir volumen y transición sólo después de que la forma principal coincide con la piel. Presentar la piel inmediatamente después de modelar."},
      {id:"MON-MET-08",title:"Aplicar adhesivo y vestir la piel",text:"Aplicar adhesivo en superficies de contacto y vestir mientras permanece trabajable. Asentar primero ojos, nariz, belfos, orejas, cuernos/astas y líneas de costura. El adhesivo fija contacto; no corrige una forma incompatible."},
      {id:"MON-MET-09",title:"Coser y controlar abultamientos",text:"Cerrar con el hilo que corresponda al espesor y la zona. La fuente conserva cuatro familias: zapatero grueso, zapatero delgado, pesca trenzado grueso y pesca trenzado delgado; también registra separación del hilo de zapatero en tiras cuando entero resulta demasiado grueso. Acomodar la piel conforme avanza la costura, corregir abultamientos antes de perder movilidad del adhesivo y usar alfileres sólo como fijación temporal."},
      {id:"MON-MET-10",title:"Secar y transferir a Retoque",text:"Mantener inmóvil durante secado. Usar 24 h como referencia mínima para primera revisión, no como liberación automática. Liberar cuando no exista humedad apreciable ni recuperación de desplazamiento en zonas fijadas."}
    ],
    controls:[
      {id:"MON-CTL-01",text:"No seleccionar ni cortar una forma con la piel rígida o sin las medidas que gobiernan la selección."},
      {id:"MON-CTL-02",text:"Una corrección localizada no debe compensar una forma general incorrecta en largo, ancho o proporción."},
      {id:"MON-CTL-03",text:"Cuernos/astas deben quedar estables y en posición antes de cubrir la unión."},
      {id:"MON-CTL-04",text:"Ojos se comparan bilateralmente y desde más de un ángulo antes del vestido."},
      {id:"MON-CTL-05",text:"Los alfileres son fijación temporal y se retiran al iniciar Retoque."},
      {id:"MON-CTL-06",text:"El tiempo de secado es referencia; la condición física gobierna la liberación."}
    ]
  },
  toolCare:[
    "Filos y punzantes se guardan protegidos",
    "Herramienta dañada se separa del uso",
    "Herramienta de ajuste de forma se limpia de residuos que impidan control",
    "Equipo eléctrico se almacena con cargador y cable en ubicación definida",
    "Mesas y soportes mantienen apoyo estable; se retiran del uso si pierden estabilidad",
    "Cualquier herramienta de medición usada para una decisión crítica se identifica y verifica según su función"
  ],
  competencies:[
    "Medir y seleccionar forma",
    "Modificar forma",
    "Fijar cuernos/astas",
    "Conformar orejas con mezcla",
    "Posicionar ojos y anatomía",
    "Vestir y coser",
    "Liberar a Retoque",
    "Operar herramienta eléctrica o equipo especial cuando aplique"
  ],
  controlRecords:[
    "ID de pieza / orden",
    "Responsable / estación",
    "Forma y componentes",
    "Etapa real",
    "Incidencias / retrabajo",
    "Secado / espera",
    "Transferencia a Retoque",
    "Los nombres exactos de estados BIWO se toman del sistema real y no se inventan desde el manual"
  ],
  materialFlow:[
    "Material que entra",
    "Material incorporado a la pieza",
    "Sobrante reutilizable",
    "Sobrante no reutilizable",
    "Envase",
    "Residuo",
    "Destino"
  ],
  tools:[
    "Serrote",
    "Escofinas",
    "Cuchillo",
    "Agujas",
    "Alfileres",
    "Bandeja para barro",
    "Mesas / soportes de montaje",
    "Herramienta manual de modelado",
    "Herramienta eléctrica compartida cuando la operación la use",
    "Herramienta de fijación de cuernos/astas pendiente de especificación exacta"
  ],
  consumables:[
    "Agua",
    "Barro LR300",
    "Poliuretano / material de forma para correcciones localizadas cuando aplique",
    "Yeso cuando aplique",
    "Fibra de vidrio",
    "Bondo",
    "Catalizador",
    "Ojos",
    "Adhesivo / pegamento americano — producto exacto pendiente",
    "Hilo de zapatero",
    "Hilo de pesca trenzado donde corresponda",
    "Recortes de Tetra Pak",
    "Alfileres"
  ],
  evidence:[
    {id:"EVID-MON-01",text:"Vista general del área y circulación.",placement:"Área"},
    {id:"EVID-MON-02",text:"Estación individual completa y almacenamiento recuperable.",placement:"Área / estación"},
    {id:"EVID-MON-03",text:"Iluminación medida cuando la tarea lo requiera.",placement:"Área"},
    {id:"EVID-MON-04",text:"Producto real, punto de uso y ventilación cuando aplique.",placement:"Área / químicos"},
    {id:"EVID-MON-05",text:"Corrección relevante de forma o incompatibilidad antes/después.",placement:"Metodología"},
    {id:"EVID-MON-06",text:"Componente especial, fijación o reparación estructural cuando sea relevante.",placement:"Metodología"},
    {id:"EVID-MON-07",text:"Incidencia, retrabajo o excepción.",placement:"Metodología / control"},
    {id:"EVID-MON-08",text:"Condición final y transferencia a Retoque cuando aporte trazabilidad.",placement:"Handoff"}
  ],
  auditCriteria:[
    {id:"MON-AUD-01",group:"Área",label:"Circulación",target:"Circulación y accesos permanecen libres.",input:"Vista general y recorrido."},
    {id:"MON-AUD-02",group:"Área",label:"Estación",target:"Estación utilizable, almacenamiento recuperable y soporte estable.",input:"Estación real + almacenamiento."},
    {id:"MON-AUD-03",group:"Área",label:"Iluminación",target:"Iluminación medida cuando la tarea real lo requiera.",input:"Lux + plano de tarea + instrumento."},
    {id:"MON-AUD-04",group:"Área",label:"Ventilación",target:"Ventilación/extracción corresponde a operación y producto real.",input:"Producto/HDS + punto de uso."},
    {id:"MON-AUD-05",group:"Área",label:"Emergencia",target:"Rutas y medios de emergencia accesibles.",input:"Recorrido físico."},
    {id:"MON-AUD-06",group:"Área",label:"Identidad y espera",target:"Pieza activa o en espera conserva ID y siguiente acción.",input:"Muestra de trabajos."},
    {id:"MON-AUD-07",group:"Área",label:"Estación individual",target:"Cada montador conserva estación y almacenamiento propios sin amontonamiento.",input:"Revisión por estación."},
    {id:"MON-AUD-08",group:"Área",label:"Punzantes",target:"Punzantes y filos están protegidos y ubicados.",input:"Estado al cierre."},
    {id:"MON-AUD-09",group:"Área",label:"Químicos",target:"Productos identificados y punto de mezcla/uso definido cuando aplique.",input:"Producto + etiqueta + ubicación."},
    {id:"MON-AUD-10",group:"Área",label:"Secado",target:"Secado/espera estable, identificado y fuera de circulación.",input:"Zona de secado."},
    {id:"MON-AUD-11",group:"Área",label:"Cables",target:"Cables y mangueras quedan fuera del paso o protegidos.",input:"Recorrido de estación."},
    {id:"MON-AUD-12",group:"Área",label:"Residuos",target:"Residuos y recuperables se separan por destino real.",input:"Recipientes y corrientes."},
    {id:"MON-AUD-13",group:"Área",label:"Reset",target:"La estación regresa a condición lista al cierre.",input:"Estado de cierre."},
    {id:"MON-AUD-14",group:"Proceso",label:"Forma",target:"Piel y forma son dimensionalmente compatibles antes del vestido.",input:"Medidas + presentación."},
    {id:"MON-AUD-15",group:"Proceso",label:"Cuernos/astas",target:"Conjunto estable y posicionado antes de cubrir la unión.",input:"Comprobación previa al vestido."},
    {id:"MON-AUD-16",group:"Proceso",label:"Orejas",target:"Oreja conserva forma sin exceso de espesor ni pérdida anatómica.",input:"Comparación visual y táctil."},
    {id:"MON-AUD-17",group:"Proceso",label:"Ojos",target:"Alineación y simetría estables antes del vestido.",input:"Frente y perfil."},
    {id:"MON-AUD-18",group:"Proceso",label:"Costura",target:"Costura cerrada, piel asentada y fijaciones temporales controladas.",input:"Revisión previa a secado."},
    {id:"MON-AUD-19",group:"Proceso",label:"Liberación",target:"La pieza se libera por condición física y no únicamente por tiempo.",input:"Humedad/movimiento + transferencia."}
  ],
  implementationHolds:[
    {id:"MON-HOLD-01",text:"Cerrar inventario real de estaciones y asignación persona ↔ estación, incluyendo Ricardo/Eugenio."},
    {id:"MON-HOLD-02",text:"Definir umbral de iluminación por tarea real mediante medición y Assurance; no congelar referencias históricas por percepción."},
    {id:"MON-HOLD-03",text:"Cruzar HDS, inventario y ventilación real para Bondo, catalizador, fibra, adhesivos y otros productos."},
    {id:"MON-HOLD-04",text:"Cerrar sistema exacto de fijación estructural de cuernos/astas por tipo de pieza."},
    {id:"MON-HOLD-05",text:"Cerrar proporción Bondo/catalizador para orejas desde fuente controlada; no inventar."},
    {id:"MON-HOLD-06",text:"Confirmar producto exacto del adhesivo/pegamento americano."},
    {id:"MON-HOLD-07",text:"Cerrar tabla de selección de hilo/aguja por espesor, tipo de piel y zona cuando cambie."},
    {id:"MON-HOLD-08",text:"Confirmar herramienta exacta de medición y qué medidas requieren trazabilidad metrológica formal."},
    {id:"MON-HOLD-09",text:"Construir matriz persona × operación después de cerrar asignación real y criterio de liberación; no inventar niveles."}
  ],
  sourceRefs:[
    "ops/areas/MONTAJE_PILOT_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-retoque"] = {
  id:"area-retoque",
  code:"RET",
  title:"Retoque",
  status:"PARTIAL",
  purpose:"Recuperar superficie, color, textura y presentación sin ocultar defectos estructurales que deban regresar al oficio capaz de corregirlos.",
  receivesFrom:"Montaje con pieza seca, estructuralmente estable e identificada",
  handsOffTo:"Bases / Revisión según alcance de la orden",
  people:[
    "Rodolfo Jr. — encargado de Retoque",
    "Emiliano — Retoque",
    "Valerio / Valentino — nombre pendiente de reconciliar",
    "Señor Pez — Retoque; la pedacera pertenece únicamente a esta área"
  ],
  entryInputs:[
    "Pieza seca",
    "Pieza estructuralmente estable",
    "Pieza identificada",
    "Condición suficiente para evaluar superficie, color y detalle"
  ],
  entryStops:[
    "Costura abierta",
    "Anatomía incorrecta",
    "Fijación inestable",
    "Defecto estructural que todavía requiere intervención física de Montaje/Formas"
  ],
  exitCriteria:[
    "Superficie terminada",
    "Color integrado",
    "Detalle terminado",
    "Defectos estructurales no ocultados con pintura o resane",
    "Pieza identificada y lista para Bases/Revisión"
  ],
  area:[
    {id:"RET-AREA-01",label:"Circulación y accesos",text:"Pasillos, salidas, tableros, extintores y puntos de operación permanecen libres. Piezas, cajas, cables, mangueras y herramienta temporal no se almacenan en circulación."},
    {id:"RET-AREA-02",label:"Estación y almacenamiento",text:"Herramienta, material y consumible tienen ubicación definida. La superficie vuelve a condición utilizable al cerrar la tarea y lo dañado o fuera de servicio se separa del uso."},
    {id:"RET-AREA-03",label:"Iluminación",text:"La iluminación se verifica en el plano real donde se compara color, textura y detalle. Cuando una lectura gobierne la decisión se conserva punto, fecha, valor e instrumento identificado."},
    {id:"RET-AREA-04",label:"Ventilación y extracción",text:"La ventilación o extracción corresponde a la operación y al producto real; pintura, aerosol, gasolina blanca u otro solvente se controlan contra producto/HDS, punto de generación y exposición real."},
    {id:"RET-AREA-05",label:"Emergencia",text:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo."},
    {id:"RET-AREA-06",label:"Identidad y espera",text:"Toda pieza activa o en espera conserva identificación y siguiente acción. La espera no bloquea circulación ni mezcla proyectos."},
    {id:"RET-AREA-07",label:"Pintura y solventes",text:"Aerógrafo, pistola, barnices, gasolina blanca, pinturas y otros productos de acabado se usan en un punto definido; inflamables permanecen cerrados y separados de fuentes de ignición según el producto real."},
    {id:"RET-AREA-08",label:"Aire comprimido",text:"Compresor, reguladores, mangueras y conexiones se identifican y se inspeccionan por condición visible; las mangueras no atraviesan circulación sin protección."},
    {id:"RET-AREA-09",label:"Acabado fino",text:"La estación de pintura y detalle permite inspeccionar la pieza sin sombras, contaminación de polvo o condiciones que oculten defectos."},
    {id:"RET-AREA-10",label:"Separación resane/lijado y acabado",text:"Resane, perfilado o lijado que genere polvo no contamina el punto donde se aplica color o acabado final. Si comparten espacio, la secuencia y limpieza impiden arrastre de polvo."},
    {id:"RET-AREA-11",label:"Pedacera",text:"La pedacera queda contenida, clasificada y ubicada únicamente en Retoque. Material útil se distingue de residuo y no se usa como depósito general."},
    {id:"RET-AREA-12",label:"Alfileres retirados",text:"Los alfileres y fijaciones temporales retirados al inicio de Retoque se concentran en recipiente o lugar definido y no quedan dispersos."}
  ],
  areaAudit:[
    {id:"RET-AUD-AREA-01",criterion:"Circulación y accesos permanecen libres.",evidence:"Panorámica y recorrido real."},
    {id:"RET-AUD-AREA-02",criterion:"Estación y almacenamiento son utilizables y recuperables.",evidence:"Vista de estación y almacenamiento."},
    {id:"RET-AUD-AREA-03",criterion:"Iluminación corresponde a la tarea cuando gobierna color/detalle.",evidence:"Lux en plano de tarea cuando aplique."},
    {id:"RET-AUD-AREA-04",criterion:"Ventilación/extracción corresponde a operación y producto real.",evidence:"Producto/HDS + punto de uso + control físico."},
    {id:"RET-AUD-AREA-05",criterion:"Pieza activa o en espera conserva ID y siguiente acción.",evidence:"Muestra de piezas en estación/espera."},
    {id:"RET-AUD-AREA-06",criterion:"Pintura y solventes se usan y almacenan en punto controlado.",evidence:"Producto real + ubicación + condición."},
    {id:"RET-AUD-AREA-07",criterion:"Compresor, reguladores y mangueras están identificables y no invaden circulación.",evidence:"Sistema de aire completo."},
    {id:"RET-AUD-AREA-08",criterion:"Resane/lijado no contamina acabado fino.",evidence:"Secuencia/limpieza y condición del punto de acabado."},
    {id:"RET-AUD-AREA-09",criterion:"Pedacera permanece contenida y sólo en Retoque.",evidence:"Ubicación y clasificación visible."},
    {id:"RET-AUD-AREA-10",criterion:"Alfileres retirados quedan contenidos.",evidence:"Recipiente y estado de cierre."}
  ],
  method:{
    flow:"Recibir pieza seca/estable → retirar fijaciones temporales → cepillar y limpiar → inspeccionar defecto → si es estructural regresar al oficio de origen → resanar imperfección compatible → recuperar color de oscuros a claros → terminar pelo → brillo localizado → textura de nariz cuando aplique → acabado de cuernos cuando aplique → liberar a Bases/Revisión.",
    branches:[
      {title:"Gate de defecto",text:"Costura abierta, anatomía incorrecta, fijación inestable o defecto estructural regresan a Montaje/Formas según origen. Retoque sólo continúa con imperfecciones compatibles con acabado."}
    ],
    stages:[
      {id:"RET-MET-01",title:"Retiro de alfileres y limpieza",text:"Retirar todos los alfileres y fijaciones temporales sin desgarrar piel ni pelo. Iniciar con limpieza general y cepillado. Para retirar grasa, la fuente primaria registra jabón Salvo + jabón Roma. Suavitel es condicional y sólo se usa cuando el pelo requiere ablandamiento."},
      {id:"RET-MET-02",title:"Resane de imperfecciones",text:"Cerrar o nivelar pequeñas imperfecciones antes de pintar. La fuente primaria confirma resanador automotriz, barro según zona y aserrín + Resistol según soporte. Lijar o perfilar hasta continuar el volumen sin borde perceptible."},
      {id:"RET-MET-03",title:"Pintura del animal",text:"Recuperar ojos, nariz, boca, costuras y zonas que perdieron tono, construyendo el color de tonos oscuros a claros y comparando continuamente con la coloración natural o referencia aprobada."},
      {id:"RET-MET-04",title:"Cepillado y acabado del pelo",text:"Cepillar en dirección natural y retirar residuos. La fuente primaria confirma gasolina blanca para soltar o ablandar pelo y recuperar apariencia natural; usar por zonas sin fijar una dosis volumétrica universal."},
      {id:"RET-MET-05",title:"Brillo de ojos, nariz y boca",text:"Aplicar barniz brillante en spray de forma localizada cuando corresponda, sin escurrimientos ni película excesiva sobre pelo o piel vecina."},
      {id:"RET-MET-06",title:"Textura de nariz en cérvidos",text:"Usar Resistol blanco 800 en jeringa, una gota por marca, siguiendo el patrón de referencia. La referencia histórica de 1–2 h no sustituye el criterio físico de que las gotas conserven relieve individual."},
      {id:"RET-MET-07",title:"Acabado de cuernos",text:"Aplicar aceite al final para recuperar brillo. Las manchas para madera se usan según especie o tono cuando corresponda, sin escurrimientos ni contaminación del pelo."}
    ],
    controls:[
      {id:"RET-CTL-01",text:"Retoque no usa pintura o resane para ocultar un defecto estructural."},
      {id:"RET-CTL-02",text:"El color se construye de oscuros a claros y se compara con referencia natural/aprobada."},
      {id:"RET-CTL-03",text:"Suavitel es condicional, no un paso obligatorio."},
      {id:"RET-CTL-04",text:"Gasolina blanca no tiene una dosis universal; el uso se controla por zona y condición."},
      {id:"RET-CTL-05",text:"La textura de nariz se libera por forma conservada, no sólo por tiempo."}
    ]
  },
  toolCare:[
    "Compresor, aerógrafo, pistola y secadora conservan identidad y estado reales antes de fijar mantenimiento",
    "Aerógrafo y pistola se limpian después de uso y se retiran ante pérdida de función o daño",
    "Mangueras y conexiones conservan condición visible y ruta sin invadir circulación",
    "Herramienta manual se mantiene limpia, ubicada y separada del uso si está dañada"
  ],
  competencies:[
    "Limpieza/acondicionado y uso de productos",
    "Resane compatible con Retoque",
    "Aerógrafo y color",
    "Acabado fino / textura",
    "Acabado de cuernos",
    "Liberación visual o devolución al oficio de origen"
  ],
  controlRecords:[
    "ID de pieza / orden",
    "Responsable / estación",
    "Condición de ingreso desde Montaje",
    "Defecto / retrabajo y destino si se devuelve",
    "Etapa real",
    "Producto/material crítico cuando una excepción lo requiera",
    "Terminación / transferencia a Bases/Revisión",
    "Los nombres exactos de estados BIWO se toman del sistema real y no se inventan desde el manual"
  ],
  materialFlow:[
    "Producto/identidad que entra",
    "Cantidad o forma de uso cuando exista criterio",
    "Material incorporado",
    "Remanente reutilizable",
    "Residuo / envase / trapo",
    "Destino",
    "Servicio / aire / energía usado"
  ],
  tools:[
    "Trapo y esponja",
    "Cepillos",
    "Secadora",
    "Pinceles",
    "Aerógrafo",
    "Pistola de pintura",
    "Compresor, reguladores, mangueras y conexiones",
    "Bandejas",
    "Espátulas",
    "Paleta de madera",
    "Jeringa",
    "Herramienta manual de detalle/retiro cuando la tarea la use"
  ],
  consumables:[
    "Agua",
    "Jabón Salvo",
    "Jabón Roma",
    "Suavitel sólo cuando el pelo lo requiera",
    "Resanador automotriz + catalizador cuando aplique",
    "Barro / RP300 cuando aplique",
    "Aserrín + Resistol cuando el soporte lo requiera",
    "Pinturas base agua / vinil-acrílicas observadas",
    "Gasolina blanca",
    "Barniz brillante en spray",
    "Resistol blanco 800",
    "Manchas para cuerno según referencia / tono",
    "Aceite para cuernos"
  ],
  evidence:[
    {id:"EVID-RET-01",text:"Panorámica/estación real de Retoque, productos, punto de uso, pedacera y condición de cierre.",placement:"Área"},
    {id:"EVID-RET-02",text:"Iluminancia medida en el plano real de color/detalle cuando gobierna la tarea.",placement:"Área / iluminación"},
    {id:"EVID-RET-03",text:"Sistema de aire/pintura real: compresor/placa, regulador, mangueras/conexiones y punto de uso.",placement:"Área / aire y pintura"},
    {id:"EVID-RET-04",text:"Defecto que provoca devolución o retrabajo.",placement:"Metodología / gate"},
    {id:"EVID-RET-05",text:"Reparación superficial relevante, textura especial o excepción de producto/tono.",placement:"Metodología"},
    {id:"EVID-RET-06",text:"Condición final cuando aporta aceptación o trazabilidad.",placement:"Handoff"}
  ],
  auditCriteria:[
    {id:"RET-AUD-01",group:"Área",label:"Circulación",target:"Circulación y accesos permanecen libres.",input:"Panorámica y recorrido."},
    {id:"RET-AUD-02",group:"Área",label:"Estación",target:"Estación y almacenamiento son recuperables.",input:"Estación real."},
    {id:"RET-AUD-03",group:"Área",label:"Iluminación",target:"Iluminación se mide cuando gobierna la tarea.",input:"Lux + punto + instrumento."},
    {id:"RET-AUD-04",group:"Área",label:"Ventilación",target:"Ventilación/extracción corresponde a operación y producto.",input:"Producto/HDS + punto de uso."},
    {id:"RET-AUD-05",group:"Área",label:"Emergencia",target:"Rutas y medios de emergencia permanecen accesibles.",input:"Recorrido físico."},
    {id:"RET-AUD-06",group:"Área",label:"Identidad",target:"Pieza activa o en espera conserva ID.",input:"Muestra de piezas."},
    {id:"RET-AUD-07",group:"Área",label:"Pintura/solventes",target:"Pintura y solventes están en punto definido e identificados.",input:"Producto + ubicación."},
    {id:"RET-AUD-08",group:"Área",label:"Aire comprimido",target:"Compresor/línea de aire identificables y sin invadir circulación.",input:"Sistema de aire."},
    {id:"RET-AUD-09",group:"Área",label:"Acabado fino",target:"Acabado puede inspeccionarse sin contaminación o sombras críticas.",input:"Punto de acabado."},
    {id:"RET-AUD-10",group:"Área",label:"Polvo",target:"Resane/lijado no contamina acabado fino.",input:"Secuencia y limpieza."},
    {id:"RET-AUD-11",group:"Área",label:"Pedacera",target:"Pedacera contenida y clasificada sólo en Retoque.",input:"Ubicación real."},
    {id:"RET-AUD-12",group:"Área",label:"Alfileres",target:"Alfileres retirados quedan contenidos.",input:"Estado de cierre."},
    {id:"RET-AUD-13",group:"Proceso",label:"Limpieza",target:"Pieza entra al acabado limpia, sin fijaciones temporales ni residuos que impidan evaluar.",input:"Condición antes de resane."},
    {id:"RET-AUD-14",group:"Proceso",label:"Resane",target:"Defecto superficial queda nivelado antes de color.",input:"Inspección visual/táctil."},
    {id:"RET-AUD-15",group:"Proceso",label:"Color",target:"Transiciones integradas sin manchas aisladas.",input:"Comparación con referencia."},
    {id:"RET-AUD-16",group:"Proceso",label:"Pelo",target:"Pelo queda separado y con caída natural.",input:"Inspección final."},
    {id:"RET-AUD-17",group:"Proceso",label:"Brillo",target:"Brillo localizado sin escurrimientos.",input:"Inspección final."},
    {id:"RET-AUD-18",group:"Proceso",label:"Textura nariz",target:"Relieve individual conservado cuando aplique.",input:"Inspección de detalle."},
    {id:"RET-AUD-19",group:"Proceso",label:"Cuernos",target:"Tono/acabado integrado y brillo uniforme.",input:"Inspección final."}
  ],
  implementationHolds:[
    {id:"RET-HOLD-01",text:"Reconciliar nombre correcto Valerio/Valentino."},
    {id:"RET-HOLD-02",text:"Confirmar estaciones reales de Rodolfo Jr., Emiliano, Valerio/Valentino y Señor Pez."},
    {id:"RET-HOLD-03",text:"Levantar productos, marcas y HDS realmente vigentes."},
    {id:"RET-HOLD-04",text:"Cerrar ventilación/extracción por producto y proceso."},
    {id:"RET-HOLD-05",text:"Identificar compresor, placa, accesorios y condición; resolver aplicabilidad en Bibliografía/Assurance."},
    {id:"RET-HOLD-06",text:"Levantar iluminancia en tarea real; no usar 750/1000 lux como cierre automático."},
    {id:"RET-HOLD-07",text:"Cerrar paleta real de pinturas/tonos y criterio de comparación."},
    {id:"RET-HOLD-08",text:"Confirmar inventario real de aerógrafos, pistola y secadora y mantenimiento aplicable."},
    {id:"RET-HOLD-09",text:"Cerrar criterios/estado BIWO de ingreso, devolución, terminación y transferencia."},
    {id:"RET-HOLD-10",text:"Completar evidencia de campo y competencia."}
  ],
  sourceRefs:[
    "ops/areas/RETOQUE_AREA_BOOK_V2.md"
  ]
};
