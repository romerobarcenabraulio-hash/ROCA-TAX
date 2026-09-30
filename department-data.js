window.ROCA_DEPARTMENTS = window.ROCA_DEPARTMENTS || {};
window.ROCA_DEPARTMENTS["area-curtiduria"] = {
  id:"area-curtiduria",
  code:"CUR",
  title:"Curtiduría",
  status:"PARTIAL",
  purpose:"Preservar, curtir y acondicionar la piel hasta dejarla manipulable, identificada y lista para producción.",
  receivesFrom:"Recepción",
  handsOffTo:"Almacén / Montaje según ruta",
  entryInputs:[
    "Piel recibida desde Recepción con identificación física",
    "Condición y espesor suficientes para seleccionar la ruta de proceso"
  ],
  entryStops:[
    "La piel no conserva identidad",
    "La condición física no permite continuar sin repetir o corregir una etapa"
  ],
  exitCriteria:[
    "Piel manipulable y acondicionada",
    "Identidad conservada",
    "Condición física suficiente para transferencia",
    "Registro de proceso ligado a la misma carga cuando aplique"
  ],
  area:[
    {id:"CUR-AREA-01",label:"Zonas de trabajo",text:"Recepción húmeda, baños, rebajado, escurrido/secado y espera están físicamente diferenciados para evitar cruces y pérdida de identidad."},
    {id:"CUR-AREA-02",label:"Tinas, tambor y equipos",text:"Tinas, tambor, rebajadora, pateadora y equipos de apoyo tienen acceso suficiente para carga, descarga, limpieza, inspección y mantenimiento."},
    {id:"CUR-AREA-03",label:"Piso, agua y drenaje",text:"Las rutas húmedas permanecen transitables, sin acumulaciones que creen riesgo de resbalón; los puntos de agua, drenaje, limpieza y descarga tienen ruta física conocida y documentable."},
    {id:"CUR-AREA-04",label:"Químicos",text:"Ácidos, sal y demás productos permanecen cerrados cuando no están en uso, identificados, con HDS accesible cuando corresponda y almacenados según compatibilidad y condición real del producto."},
    {id:"CUR-AREA-05",label:"Ventilación",text:"La ventilación corresponde a los baños, químicos y equipos realmente usados en Curtiduría."},
    {id:"CUR-AREA-06",label:"Identidad de pieles",text:"Las pieles conservan su identificación y siguiente acción durante tendido, secado, espera y transferencia."},
    {id:"CUR-AREA-07",label:"Instrumentos y activos críticos",text:"Tambor, rebajadora y pateadora conservan identidad, ubicación, condición conocida y método de fuera de servicio. La báscula y el método o instrumento usado para pH tienen identidad y estado conocidos antes de que una lectura se use como evidencia."}
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
      {title:"Piel gruesa o dura",text:"Después de hidratar y marcar puede aflojarse en tina exterior de picle. Esa tina no sustituye el picle ácido de tambor. Después del picle se rebaja y puede regresar a picle mientras exista sección sin curtir."},
      {title:"Piloto de agua a presión",text:"NO LIBERADO — el descarnado o limpieza con agua a presión permanece separado de la rutina. No sustituye el rebajado de espesor y no se usa en cara, labios, párpados, borde de oreja, flancos, base de cola ni zonas finas sin validación específica."}
    ],
    stages:[
      {id:"CUR-MET-01",title:"Hidratación",text:"Usar como referencia 1 kg de sal por 10 L de agua y una ventana de 10–12 h. La salida también depende de condición física: la piel debe poder desplegarse y marcarse sin forzar zonas rígidas."},
      {id:"CUR-MET-02",title:"Picle",text:"Usar como referencia 473 L de agua, 45 kg de sal y 300 mL de ácido sulfúrico. La dosificación de ácido fórmico se toma exclusivamente de la receta controlada vigente. Para piel común, usar 24 h como referencia de picle. En piel gruesa repetir picle → rebajado → picle mientras exista sección sin curtir, sin fijar un número universal de retornos."},
      {id:"CUR-MET-03",title:"Rebajado",text:"La cuchilla o trabajo manual atiende detalle y zonas necesarias; la rebajadora de disco uniforma espesor. En piel gruesa puede repetirse la secuencia picle → rebajado → picle hasta eliminar sección sin curtir."},
      {id:"CUR-MET-04",title:"Pesado y ALUM-Tan",text:"Pesar la carga real y capturar exactamente esa lectura en la hoja controlada; el peso usado por el cálculo debe corresponder a la misma carga física. Referencia de salinidad ALUM-Tan: 2.2–2.3. En el día 1, realizar la segunda adición de alumbre después de 1 h 30 min usando el valor indicado por la hoja controlada para esa carga."},
      {id:"CUR-MET-05",title:"Neutralización y pH",text:"La referencia para inicio del día 2 es pH 3.6–3.8. El bicarbonato calculado se divide en cinco partes con una adición por hora. La referencia final es pH 4.2–4.3."},
      {id:"CUR-MET-06",title:"Escurrido y secado",text:"Referencia: 12 h con calor y 14–16 h en invierno o lluvia. No pasar a aserrín con la piel empapada; la condición real gobierna el avance."},
      {id:"CUR-MET-07",title:"Tamboreo con aserrín",text:"Referencia de 4 h."},
      {id:"CUR-MET-08",title:"Sacudido",text:"Referencia de 15 min. No engrasar mientras siga soltando aserrín visible."},
      {id:"CUR-MET-09",title:"Engrase y pateado",text:"La pateadora se usa después del engrase sólo en piel gruesa o resistente que requiera acondicionamiento mecánico. No sustituye a la rebajadora."},
      {id:"CUR-MET-10",title:"Salado previo",text:"Usar 2–3 pasadas de sal fina, con drenado entre pasadas y secado a la sombra. No colgar inmediatamente después del primer salado."}
    ],
    controls:[
      {id:"CUR-CTL-01",text:"El número consecutivo físico permanece asociado a la piel durante baños, rebajado, secado y transferencia."},
      {id:"CUR-CTL-02",text:"La rebajadora uniforma espesor; la pateadora acondiciona después del engrase. No son intercambiables."},
      {id:"CUR-CTL-03",text:"Peso de báscula y peso capturado en ALUM-Tan corresponden a la misma carga."},
      {id:"CUR-CTL-04",text:"Los dos valores de pH corresponden a puntos distintos del proceso y no son intercambiables."},
      {id:"CUR-CTL-05",text:"La piel avanza por condición física además de las referencias de tiempo."},
      {id:"CUR-CTL-06",text:"Toda corrección de receta conserva versión, fecha, responsable y motivo antes de usarse."},
      {id:"CUR-CTL-07",text:"El piloto de agua a presión permanece fuera de rutina hasta validación documentada; no sustituye el rebajado de espesor."}
    ]
  },
  tools:[
    "Tinas y tambor",
    "Rebajadora de disco",
    "Cuchilla / burro y herramientas de detalle",
    "Báscula para peso de carga",
    "Instrumento o método identificado para medición de pH",
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
    {id:"MON-AUD-AREA-05",criterion:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo.",evidence:"Recorrido físico de emergencia."},
    {id:"MON-AUD-AREA-06",criterion:"Toda pieza, piel, forma o trabajo activo o en espera conserva ID y siguiente acción.",evidence:"Muestra de trabajos en estación, espera y secado."},
    {id:"MON-AUD-AREA-07",criterion:"Cada montador dispone de estación identificable y almacenamiento propio.",evidence:"Revisión individual de cada puesto real."},
    {id:"MON-AUD-AREA-08",criterion:"Agujas, alfileres, cuchillos e hilo tienen ubicación definida y los filos/puntas quedan protegidos.",evidence:"Estado de punzantes y costura al cierre."},
    {id:"MON-AUD-AREA-09",criterion:"Químicos y mezclas de montaje están identificados y controlados en su punto de uso.",evidence:"Producto real + etiqueta + ubicación + HDS cuando aplique."},
    {id:"MON-AUD-AREA-10",criterion:"Las piezas en secado permanecen estables, identificadas y fuera de circulación.",evidence:"Zona real de secado y espacio de revisión."},
    {id:"MON-AUD-AREA-11",criterion:"Cables y mangueras no invaden circulación sin protección; cargadores y alimentación temporal tienen punto definido.",evidence:"Recorrido de estación y punto eléctrico."},
    {id:"MON-AUD-AREA-12",criterion:"Residuos y recuperables se separan por destino real y material útil no se desecha como residuo.",evidence:"Recipientes, corrientes y condición de cierre."},
    {id:"MON-AUD-AREA-13",criterion:"La estación regresa a condición lista al cierre.",evidence:"Superficie, herramienta, punzantes, residuos, cables, pieza y siguiente acción."}
  ],
  method:{
    flow:"Piel flexible y medida → comparar con forma y pose → presentar y corregir forma → preparar boca/nariz/canales → posicionar cuernos/astas → conformar orejas → posicionar ojos → correcciones localizadas con barro → adhesivo y vestido de piel → coser/fijar → secar y comprobar → transferir a Retoque.",
    branches:[],
    stages:[
      {id:"MON-MET-01",title:"Recuperar flexibilidad y levantar medidas",text:"Relajar la piel hasta recuperar flexibilidad; cerrar desde el interior cortes o balazos que deban repararse; retirar carnaza, grasa, tejido sobrante y huesos residuales; limpiar interior de pezuñas o garras cuando corresponda; terminar cartílagos de oreja, nariz y belfos. Antes de medir, jalar la piel con la mano: debe desplazarse y recuperar forma sin quedar al límite de tensión. Registrar ojo-nariz, contorno inmediatamente detrás de las órbitas y las medidas corporales que correspondan. Si una modificación de forma se prolongará varios días, congelar la piel para resguardarla."},
      {id:"MON-MET-02",title:"Seleccionar, presentar y corregir la forma",text:"Comparar medidas de piel, inventario de formas y pose. Elegir la forma que reduzca correcciones y presentar la piel antes de cortar. Si sobra volumen, retirar o perfilar poliuretano con serrote, escofina o cuchillo y volver a presentar. Si falta volumen, corregir de manera localizada con barro, poliuretano o yeso cuando la pieza lo exija; no compensar una forma general incorrecta en largo, ancho o proporción. Después de cada modificación volver a comprobar cara, cuello, largo, ancho y volumen como conjunto."},
      {id:"MON-MET-03",title:"Preparar boca, nariz y canales",text:"Abrir y perfilar alojamientos para boca, nariz, belfos y piel de nariz. El criterio de salida es que entren sin forzar la piel ni desplazar la cara."},
      {id:"MON-MET-04",title:"Preparar y posicionar cuernos o astas",text:"Presentar la base sobre la forma y resolver posición con frente, ojos y orejas. Comparar altura, inclinación, separación y simetría desde frente, perfil y vista superior. No cubrir la unión mientras exista movimiento o una diferencia corregible. Registrar los componentes reales del sistema de fijación antes de cubrir la unión; liberar esta etapa sólo con el conjunto estable y posicionado."},
      {id:"MON-MET-05",title:"Preparar y conformar orejas",text:"Voltear y limpiar la oreja. Preparar fibra cortada y mezclar con Bondo y catalizador hasta obtener una masa homogénea; distribuir mientras permanece trabajable. Modelar borde, concavidad y volumen y detener cuando la oreja conserve forma por sí misma, sin exceso de espesor ni acumulación que borre anatomía. La proporción Bondo/catalizador permanece fuera del estándar hasta validarse."},
      {id:"MON-MET-06",title:"Posicionar ojos",text:"Colocar los ojos y usar barro LR300 para sostener y modelar posición. Trabajar ambos lados simultáneamente y comparar altura, profundidad, orientación y relación con frente, cuernos y párpados desde frente y perfil. No vestir hasta que la alineación y simetría permanezcan estables."},
      {id:"MON-MET-07",title:"Correcciones localizadas con barro",text:"Usar barro para corregir volumen y transición sólo después de que la forma principal coincide con la piel. Presentar la piel inmediatamente después de modelar."},
      {id:"MON-MET-08",title:"Aplicar adhesivo y vestir la piel",text:"Aplicar adhesivo en superficies de contacto y vestir mientras permanece trabajable. Asentar primero ojos, nariz, belfos, orejas, cuernos/astas y líneas de costura. Corregir posición antes del cierre. El adhesivo fija contacto; no corrige una cavidad, falta de volumen o forma incompatible. Liberar con la piel centrada y asentada sin pliegues generados por posición incorrecta."},
      {id:"MON-MET-09",title:"Coser y controlar abultamientos",text:"Cerrar con el hilo que corresponda al espesor y la zona. Usar una de cuatro familias de hilo según espesor y zona: zapatero grueso, zapatero delgado, pesca trenzado grueso o pesca trenzado delgado. Cuando el hilo de zapatero entero resulte demasiado grueso, separarlo en tiras. Acomodar la piel conforme avanza la costura, corregir abultamientos antes de perder movilidad del adhesivo y usar alfileres sólo como fijación temporal."},
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
    "Sistema de fijación de cuernos/astas correspondiente al tipo de pieza"
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
    "Adhesivo de montaje identificado",
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
    {id:"MON-HOLD-02",text:"Definir el criterio de iluminación por tarea real mediante medición y Bibliografía aplicable; no fijar referencias sólo por percepción."},
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
    {id:"RET-AUD-AREA-05",criterion:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo.",evidence:"Recorrido físico de emergencia."},
    {id:"RET-AUD-AREA-06",criterion:"Pieza activa o en espera conserva ID y siguiente acción.",evidence:"Muestra de piezas en estación/espera."},
    {id:"RET-AUD-AREA-07",criterion:"Pintura y solventes se usan y almacenan en punto controlado.",evidence:"Producto real + ubicación + condición."},
    {id:"RET-AUD-AREA-08",criterion:"Compresor, reguladores y mangueras están identificables y no invaden circulación.",evidence:"Sistema de aire completo."},
    {id:"RET-AUD-AREA-09",criterion:"La estación de acabado fino permite inspeccionar color y detalle sin contaminación ni sombras críticas.",evidence:"Punto real de acabado fino."},
    {id:"RET-AUD-AREA-10",criterion:"Resane/lijado no contamina acabado fino.",evidence:"Secuencia/limpieza y condición del punto de acabado."},
    {id:"RET-AUD-AREA-11",criterion:"Pedacera permanece contenida y sólo en Retoque.",evidence:"Ubicación y clasificación visible."},
    {id:"RET-AUD-AREA-12",criterion:"Alfileres retirados quedan contenidos.",evidence:"Recipiente y estado de cierre."}
  ],
  method:{
    flow:"Recibir pieza seca/estable → retirar fijaciones temporales → cepillar y limpiar → inspeccionar defecto → si es estructural regresar al oficio de origen → resanar imperfección compatible → recuperar color de oscuros a claros → terminar pelo → brillo localizado → textura de nariz cuando aplique → acabado de cuernos cuando aplique → liberar a Bases/Revisión.",
    branches:[
      {title:"Gate de defecto",text:"Costura abierta, anatomía incorrecta, fijación inestable o defecto estructural regresan a Montaje/Formas según origen. Retoque sólo continúa con imperfecciones compatibles con acabado."}
    ],
    stages:[
      {id:"RET-MET-01",title:"Retiro de alfileres y limpieza",text:"Retirar todos los alfileres y fijaciones temporales sin desgarrar piel ni pelo. Iniciar con limpieza general y cepillado. Para retirar grasa, usar jabón Salvo + jabón Roma. Suavitel es condicional y sólo se usa cuando el pelo requiere ablandamiento."},
      {id:"RET-MET-02",title:"Resane de imperfecciones",text:"Cerrar o nivelar pequeñas imperfecciones antes de pintar. Usar resanador automotriz, barro según zona o aserrín + Resistol según el soporte. Lijar o perfilar hasta continuar el volumen sin borde perceptible."},
      {id:"RET-MET-03",title:"Pintura del animal",text:"Recuperar ojos, nariz, boca, costuras y zonas que perdieron tono, construyendo el color de tonos oscuros a claros y comparando continuamente con la coloración natural o referencia aprobada."},
      {id:"RET-MET-04",title:"Cepillado y acabado del pelo",text:"Cepillar en dirección natural y retirar residuos. Usar gasolina blanca por zonas para soltar o ablandar pelo y recuperar apariencia natural; no fijar una dosis volumétrica universal."},
      {id:"RET-MET-05",title:"Brillo de ojos, nariz y boca",text:"Aplicar barniz brillante en spray de forma localizada cuando corresponda, sin escurrimientos ni película excesiva sobre pelo o piel vecina."},
      {id:"RET-MET-06",title:"Textura de nariz en cérvidos",text:"Usar Resistol blanco 800 en jeringa, una gota por marca, siguiendo el patrón de referencia. Usar 1–2 h sólo como referencia de secado; liberar cuando las gotas conserven relieve individual y no se deformen durante el acabado."},
      {id:"RET-MET-07",title:"Acabado de cuernos",text:"Aplicar aceite al final para recuperar brillo. Usar manchas para madera según especie o tono cuando corresponda; referencias de taller incluyen roble, encino / Encino Americano y roble oscuro. Distribuir sin escurrimientos, acumulación en la base ni contaminación del pelo."}
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
    {id:"RET-HOLD-05",text:"Identificar compresor, placa, accesorios y condición; resolver la aplicabilidad técnica en Bibliografía."},
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

window.ROCA_DEPARTMENTS["area-bases"] = {
  id:"area-bases",
  code:"BAS",
  title:"Bases",
  status:"PARTIAL",
  purpose:"Construir una base estructural y un acabado de terreno coherentes con la pieza y el proyecto cuando la orden lo requiera, sin usar volumen, terreno o pintura para compensar una fijación deficiente.",
  receivesFrom:"Retoque / pieza lista para fijación + alcance o referencia aprobada de base",
  handsOffTo:"Revisión / Embalaje / Entrega según flujo real",
  entryInputs:[
    "Pieza identificada y lista para fijación",
    "Alcance o referencia aprobada de base",
    "Condición estructural de la pieza suficientemente resuelta para no ocultar defectos con la base"
  ],
  entryStops:[
    "La orden no incluye base o la referencia es insuficiente",
    "La fijación estructural de la pieza sigue deficiente",
    "La estabilidad depende de relleno, terreno o acabado cosmético",
    "El estado físico o informacional obligaría a improvisar estructura"
  ],
  exitCriteria:[
    "Pieza estable sobre base terminada",
    "Identidad de pieza/orden conservada",
    "Fijación y apoyo comprobables",
    "Base trasladable sin depender de apoyos improvisados",
    "Terminación coherente con la referencia aprobada"
  ],
  area:[
    {id:"BAS-AREA-01",label:"Circulación y accesos",text:"Pasillos, salidas, tableros, extintores y puntos de operación permanecen libres. Plancha, base, pieza, cables y herramienta temporal no ocupan la ruta de maniobra."},
    {id:"BAS-AREA-02",label:"Estación y almacenamiento",text:"Herramienta, triplay/madera, malla, herrajes y consumibles tienen ubicación definida. La estación vuelve a condición utilizable al cerrar la tarea y lo dañado o fuera de servicio se separa del uso."},
    {id:"BAS-AREA-03",label:"Iluminación",text:"La iluminación se verifica sobre el plano real de corte, armado o acabado cuando la tarea lo requiera. La percepción visual sola no sustituye una medición que gobierne una decisión."},
    {id:"BAS-AREA-04",label:"Ventilación y extracción",text:"La ventilación corresponde a corte, polvo, pintura, poliuretano/adhesivos y cualquier producto real. Producto/HDS y exposición real gobiernan la necesidad de extracción localizada."},
    {id:"BAS-AREA-05",label:"Emergencia",text:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo."},
    {id:"BAS-AREA-06",label:"Identidad y espera",text:"Toda base, pieza o trabajo en espera conserva identificación y siguiente acción. Materiales y piezas en espera no bloquean circulación ni mezclan proyectos."},
    {id:"BAS-AREA-07",label:"Armado estructural",text:"Triplay, bancos, varillas y fijaciones se trabajan sobre superficie estable. La pieza se presenta antes de cerrar la fijación y no depende de apoyos improvisados."},
    {id:"BAS-AREA-08",label:"Poliuretano y adhesivos",text:"Los componentes se mantienen identificados; mezcla y expansión se contienen en el punto de trabajo. Producto útil, mezcla reaccionada, recortes y envases se separan por destino real."},
    {id:"BAS-AREA-09",label:"Corte y acabado",text:"Caladora, sierra, pulidor, taladro y grapadora —cuando existan en la operación real— se usan con condición, guarda y accesorio compatibles con su función y sobre una zona despejada."},
    {id:"BAS-AREA-10",label:"Separación polvo / acabado químico",text:"Corte, lijado o recorte que genere polvo no contamina pintura, adhesivos, poliuretano ni acabado final. Si comparten espacio, secuencia y limpieza impiden el arrastre."},
    {id:"BAS-AREA-11",label:"Material pesado y ruta de maniobra",text:"Planchas, bases y piezas pesadas se almacenan estables, sin riesgo de vuelco o deslizamiento, y conservan ruta suficiente para presentarlas, girarlas o retirarlas."},
    {id:"BAS-AREA-12",label:"Manipulación y asistencia",text:"Cuando peso, volumen, altura o postura creen riesgo de manejo, se define método de maniobra, número de personas o ayuda mecánica antes de mover la pieza."}
  ],
  areaAudit:[
    {id:"BAS-AUD-AREA-01",criterion:"Circulación y ruta de maniobra permanecen libres.",evidence:"Panorámica y recorrido con pieza/base presentes."},
    {id:"BAS-AUD-AREA-02",criterion:"Estación y almacenamiento son utilizables y recuperables.",evidence:"Vista de estación + almacenamiento de madera/malla/herrajes."},
    {id:"BAS-AUD-AREA-03",criterion:"Iluminación corresponde a corte, armado o acabado cuando gobierna la tarea.",evidence:"Lux en plano real de trabajo cuando aplique."},
    {id:"BAS-AUD-AREA-04",criterion:"Ventilación/extracción corresponde a proceso y producto real.",evidence:"Producto/HDS + punto de generación + control físico."},
    {id:"BAS-AUD-AREA-05",criterion:"Rutas, señalización y medios de respuesta aplicables permanecen visibles, accesibles y sin bloqueo.",evidence:"Recorrido físico de emergencia."},
    {id:"BAS-AUD-AREA-06",criterion:"Toda base, pieza o trabajo en espera conserva identificación y siguiente acción.",evidence:"Muestra de trabajos y espera."},
    {id:"BAS-AUD-AREA-07",criterion:"Armado se realiza sobre apoyo estable y sin improvisaciones.",evidence:"Pieza presentada sobre base antes del cierre."},
    {id:"BAS-AUD-AREA-08",criterion:"Poliuretano/adhesivos están identificados y contenidos en su punto de uso.",evidence:"Producto real + mezcla + zona de trabajo."},
    {id:"BAS-AUD-AREA-09",criterion:"Corte/acabado se ejecuta con zona despejada y herramienta apta.",evidence:"Equipo real + condición visible + espacio de trabajo."},
    {id:"BAS-AUD-AREA-10",criterion:"Polvo no contamina acabado químico.",evidence:"Secuencia/limpieza y separación real."},
    {id:"BAS-AUD-AREA-11",criterion:"Materiales y piezas pesadas permanecen estables y con ruta de maniobra.",evidence:"Almacenamiento + recorrido."},
    {id:"BAS-AUD-AREA-12",criterion:"La maniobra pesada tiene método o asistencia definidos.",evidence:"Observación de maniobra real cuando aplique."}
  ],
  method:{
    flow:"Definir alcance y medidas → cortar plancha/base → construir bancos y fijación → elegir ruta de volumen/terreno → proteger y verter poliuretano cuando aplique → recortar/modelar → aplicar dextrina/terreno → construir malla/costal cuando aplique → ambientar → comprobar estabilidad y transferir.",
    branches:[
      {title:"Ruta poliuretano",text:"Usar sólo cuando la solución de base realmente lo requiera. La dosificación permanece NO LIBERADA hasta confirmar producto A/B real, HDS, aplicación y prueba controlada de Bases."},
      {title:"Ruta malla/costal",text:"Usa costillas, malla 8x8, costal, dextrina y terreno. Conservar 3 mm de separación entre pata y malla."}
    ],
    stages:[
      {id:"BAS-MET-08",title:"Medición y plancha de base",text:"Con la pieza completa y la referencia del proyecto, definir ancho y largo antes de cortar. Referencia de taller: triplay industrial de 18 mm. Para bases mayores a ~1 m o piezas pesadas pueden requerirse dos capas y ruedas. Verificar siempre contra peso, geometría, transporte, material real y fijación."},
      {id:"BAS-MET-09",title:"Bancos y fijación del animal",text:"Cortar bancos a la altura que exige la postura, presentar la pieza antes de cerrar la fijación y hacer coincidir varillas o puntos estructurales con los apoyos. Retirar varilla sobrante cuando corresponda y reservar clavos para condiciones donde la fijación lo permita. Los montajes apoyados en una o dos patas requieren una fijación mecánica capaz de conservar postura y resistir el esfuerzo. Referencia observada: tornillos #8 × 2 in; no usar esta medida como especificación universal."},
      {id:"BAS-MET-10",title:"Poliuretano: protección y vertido",text:"Proteger patas y zonas sensibles, construir límites de expansión, identificar componentes y dosificar sólo en el punto preparado. NO LIBERADO — dosificación de poliuretano en Bases. No usar una relación fija hasta confirmar producto, HDS, aplicación y prueba controlada específica de Bases."},
      {id:"BAS-MET-11",title:"Poliuretano: recorte y pintura",text:"Una vez firme el volumen, recortar con herramienta compatible hasta aproximar terreno o referencia. Corregir huecos físicos antes de pintar; la pintura no oculta vacíos, apoyos inseguros ni transiciones deficientes. Mantener libres patas y puntos de contacto. Liberar esta etapa con un volumen continuo, estable y legible contra la referencia."},
      {id:"BAS-MET-12",title:"Dextrina y terreno",text:"Usar 2 partes de dextrina por 1 de Blanco España. Preparar sólo lo necesario; ~1 h es una referencia de tiempo útil, no un criterio automático de liberación."},
      {id:"BAS-MET-13",title:"Costillas y malla 8x8",text:"Usar malla 8x8 y conservar 3 mm de separación entre pata y malla. Fijar y modelar hasta cerrar volumen sin invadir la pata."},
      {id:"BAS-MET-14",title:"Costal, dextrina y terreno",text:"Cubrir la malla con costal de manta humedecido en dextrina y después aplicar dextrina más espesa con Blanco España y terreno. El costal limita el paso excesivo de adhesivo por la malla y aporta continuidad. Completar el volumen conservando los 3 mm junto a la pata sin cubrirla. Usar la consistencia necesaria para cubrir y modelar; no fijar una receta volumétrica universal."},
      {id:"BAS-MET-15",title:"Vegetación y detalles finales",text:"Agregar ambientación sólo después de resolver estructura y terreno. Según el proyecto pueden entrar troncos, piedras, grava, pastos, musgo, plantas naturales o sintéticas, ramas, hojas, huesos u otros elementos aprobados. Fijar cualquier elemento cuyo peso, altura o posibilidad de movimiento lo exija. Liberar cuando la composición corresponda a la referencia y permanezca estable sin interferir con patas, limpieza, traslado o lectura del ejemplar."}
    ],
    controls:[
      {id:"BAS-CTL-01",text:"La base no compensa una fijación estructural deficiente."},
      {id:"BAS-CTL-02",text:"18 mm, dos capas, ruedas y #8×2 in son referencias de taller; no funcionan como especificaciones universales."},
      {id:"BAS-CTL-03",text:"La receta de poliuretano permanece abierta hasta confirmar producto y aplicación real de Bases."},
      {id:"BAS-CTL-04",text:"Dextrina:Blanco España = 2:1 se conserva como hecho primario soportado."},
      {id:"BAS-CTL-05",text:"Malla 8x8 y 3 mm de separación pata-malla se conservan como hechos primarios soportados."},
      {id:"BAS-CTL-06",text:"La fotografía final no sustituye una comprobación estructural."}
    ]
  },
  toolCare:[
    "Equipos motorizados y neumáticos se identifican por activo real y siguen manual, placa e historial cuando existan",
    "Herramienta manual no recibe por defecto un preventivo de fabricante inventado",
    "Retirar del uso equipo con guarda, accesorio o cable dañado, pérdida de función o condición que impida operación controlada"
  ],
  competencies:[
    "Medición/trazo y selección de plancha",
    "Corte de madera",
    "Fijación estructural",
    "Operación de taladro/caladora/sierra/grapadora",
    "Preparación y uso de poliuretano cuando aplique",
    "Construcción de malla/costal/terreno",
    "Ambientación",
    "Manipulación de pieza/base pesada",
    "Liberación de estabilidad/terminación"
  ],
  controlRecords:[
    "ID de pieza / orden",
    "Alcance / referencia aprobada",
    "Responsable / estación",
    "Dimensiones y material de plancha",
    "Sistema de fijación",
    "Ruta de base usada: poliuretano / malla / combinación",
    "Incidencia / retrabajo",
    "Terminación y transferencia",
    "Evidencia final cuando aporta trazabilidad",
    "Los estados BIWO exactos se toman del sistema real; no se inventan desde el manual"
  ],
  materialFlow:[
    "Material que entra",
    "Uso / incorporación",
    "Remanente reutilizable",
    "Recorte / sobrante",
    "Residuo / envase",
    "Destino",
    "Energía / aire / servicio utilizado"
  ],
  tools:[
    "Cinta métrica y herramienta de trazo",
    "Desarmadores y puntas",
    "Llaves combinadas",
    "Pinzas / pinza de presión",
    "Martillo",
    "Tijeras para malla",
    "Cuchillo / navaja",
    "Taladro / atornillador y brocas",
    "Espátulas / bandejas de mezcla",
    "Caladora",
    "Sierra",
    "Pulidor / esmeril cuando la tarea lo requiera",
    "Grapadora de uso pesado/neumática cuando aplique",
    "Serrucho / segueta",
    "Cepillos de preparación",
    "Mesa / banco de armado"
  ],
  consumables:[
    "Triplay / madera y bancos",
    "Tornillería, clavos cuando proceda y herrajes",
    "Varillas / fijaciones asociadas a la pieza",
    "Plástico / playe para protección",
    "Poliuretano A/B — dosificación NO LIBERADA",
    "Resanador para huecos localizados cuando aplique",
    "Pinturas / acabados de terreno cuando aplique",
    "Dextrina",
    "Blanco España",
    "Malla 8x8",
    "Costal de manta",
    "Tierra y arena",
    "Colorantes cuando correspondan",
    "Piedras / grava",
    "Vegetación y elementos naturales o sintéticos",
    "Grapas / fijaciones"
  ],
  evidence:[
    {id:"EVID-BAS-01",text:"Base terminada, soporte/fijaciones visibles y estabilidad observable.",placement:"Área / salida"},
    {id:"EVID-BAS-02",text:"Estación real: almacenamiento de triplay/malla/herrajes, herramienta de corte/fijación y punto de poliuretano/adhesivo cuando aplique.",placement:"Área"},
    {id:"EVID-BAS-03",text:"Maniobra real de pieza/base pesada cuando aplique, mostrando ruta y método de asistencia sin preparar una maniobra sólo para la foto.",placement:"Área / maniobra"},
    {id:"EVID-BAS-04",text:"Ruta técnica usada: poliuretano, malla o combinación, con materiales y condición antes del acabado.",placement:"Metodología"},
    {id:"EVID-BAS-05",text:"Incidencia/retrabajo y condición final cuando aportan trazabilidad.",placement:"Control / handoff"}
  ],
  auditCriteria:[
    {id:"BAS-AUD-01",group:"Área",label:"Circulación",target:"Circulación y ruta de maniobra permanecen libres.",input:"Panorámica y recorrido."},
    {id:"BAS-AUD-02",group:"Área",label:"Estación",target:"Estación y almacenamiento son recuperables.",input:"Estación real."},
    {id:"BAS-AUD-03",group:"Área",label:"Iluminación",target:"Iluminación se verifica cuando gobierna la tarea.",input:"Lux + plano + instrumento."},
    {id:"BAS-AUD-04",group:"Área",label:"Ventilación",target:"Ventilación/extracción corresponde a proceso/producto.",input:"Producto/HDS + punto de generación."},
    {id:"BAS-AUD-05",group:"Área",label:"Emergencia",target:"Rutas y medios de emergencia permanecen accesibles.",input:"Recorrido físico."},
    {id:"BAS-AUD-06",group:"Área",label:"Identidad",target:"Pieza/base en espera conserva ID y siguiente acción.",input:"Muestra de trabajos."},
    {id:"BAS-AUD-07",group:"Área",label:"Armado",target:"Armado estable y sin apoyos improvisados.",input:"Presentación de pieza/base."},
    {id:"BAS-AUD-08",group:"Área",label:"Poliuretano/adhesivos",target:"Productos identificados y contenidos.",input:"Producto + ubicación + mezcla."},
    {id:"BAS-AUD-09",group:"Área",label:"Corte/acabado",target:"Zona despejada y herramienta apta.",input:"Equipo real + condición."},
    {id:"BAS-AUD-10",group:"Área",label:"Polvo",target:"Polvo no contamina acabado químico.",input:"Secuencia y limpieza."},
    {id:"BAS-AUD-11",group:"Área",label:"Material pesado",target:"Materiales/piezas pesadas están estables y con ruta.",input:"Almacenamiento + recorrido."},
    {id:"BAS-AUD-12",group:"Área",label:"Maniobra",target:"Maniobra pesada tiene método o asistencia definidos.",input:"Observación de maniobra real."},
    {id:"BAS-AUD-13",group:"Proceso",label:"Plancha",target:"Dimensiones y apoyo inferior corresponden a pieza y referencia.",input:"Medidas + material + apoyo."},
    {id:"BAS-AUD-14",group:"Proceso",label:"Fijación",target:"Pieza equilibrada y sostenida antes del relleno/acabado.",input:"Comprobación estructural."},
    {id:"BAS-AUD-15",group:"Proceso",label:"Poliuretano",target:"Cuando se usa, producto y dosificación corresponden a una receta de Bases liberada.",input:"Producto + lote + receta + prueba."},
    {id:"BAS-AUD-16",group:"Proceso",label:"Dextrina",target:"La mezcla usa la relación 2:1 soportada cuando aplica.",input:"Preparación real."},
    {id:"BAS-AUD-17",group:"Proceso",label:"Malla",target:"Malla 8x8 y separación de 3 mm se conservan cuando esa ruta aplica.",input:"Detalle antes del recubrimiento."},
    {id:"BAS-AUD-18",group:"Proceso",label:"Costal/terreno",target:"Recubrimiento mantiene continuidad sin invadir la pata.",input:"Detalle antes de ambientación."},
    {id:"BAS-AUD-19",group:"Proceso",label:"Ambientación",target:"Elementos finales permanecen estables y no interfieren con traslado o lectura.",input:"Inspección final."},
    {id:"BAS-AUD-20",group:"Proceso",label:"Liberación",target:"La base se libera por estabilidad, identidad y posibilidad de traslado, no sólo por apariencia.",input:"Comprobación final + transferencia."}
  ],
  implementationHolds:[
    {id:"BAS-HOLD-01",text:"Confirmar responsable y estaciones reales de Bases."},
    {id:"BAS-HOLD-02",text:"Cerrar frontera física/operativa con Carpintería."},
    {id:"BAS-HOLD-03",text:"Levantar inventario real de herramienta/equipo."},
    {id:"BAS-HOLD-04",text:"Definir capacidad/criterio estructural de planchas, bancos, ruedas, tornillería y fijaciones por proyecto real."},
    {id:"BAS-HOLD-05",text:"Identificar producto/HDS/receta real de poliuretano para Bases."},
    {id:"BAS-HOLD-06",text:"Resolver conflicto 50/50 vs 30/70 sin extrapolar Formas; 30/70 no queda canónico."},
    {id:"BAS-HOLD-07",text:"Verificar ventilación/extracción y control de polvo."},
    {id:"BAS-HOLD-08",text:"Observar método real de manipulación de piezas pesadas."},
    {id:"BAS-HOLD-09",text:"Cerrar criterios/estado BIWO exactos."},
    {id:"BAS-HOLD-10",text:"Completar evidencia de estabilidad y competencia."},
    {id:"BAS-HOLD-11",text:"Validar si 18 mm, dos capas/ruedas y otras prácticas históricas siguen vigentes por tipo de proyecto."}
  ],
  sourceRefs:[
    "ops/areas/BASES_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-fmr"] = {
  id:"area-fmr",
  code:"FMR",
  title:"Formas, Moldes y Réplicas",
  status:"PARTIAL",
  purpose:"Convertir medidas y geometría en forma, molde o réplica estable y utilizable.",
  receivesFrom:"Medidas, patrón/forma, pose o pieza a reproducir",
  handsOffTo:"Montaje u operación solicitante",
  entryInputs:[
    "Medidas o geometría suficiente",
    "Patrón, forma, pose o pieza a reproducir identificada",
    "Material/lote identificable cuando gobierne la dosificación"
  ],
  entryStops:[
    "La geometría no permite definir cierre o división controlada",
    "El lote/material no está identificado cuando la dosificación depende de él",
    "El molde o cierre no permite una salida reproducible",
    "El material sigue caliente, blando, deformable o con zona aguadita"
  ],
  exitCriteria:[
    "Forma, molde o réplica identificada",
    "Geometría utilizable",
    "Curado suficiente por tiempo de referencia y condición física",
    "Molde abre sin destruir detalle y puede volver a cerrar cuando aplique",
    "Ubicación de rack registrada cuando corresponda"
  ],
  area:[
    {id:"FMR-AREA-01",label:"Zonas de trabajo",text:"Corte/armado, encerado, mezcla/vaciado, curado y acabado permanecen diferenciados para evitar contaminación y errores de secuencia."},
    {id:"FMR-AREA-02",label:"Materiales reactivos",text:"Resina, catalizadores, poliuretano, fibra y cargas permanecen identificados según producto/lote real."},
    {id:"FMR-AREA-03",label:"Polvo, fibra y vapores",text:"Polvo, fibra y vapores se controlan para no migrar hacia áreas de acabado u otras operaciones incompatibles."},
    {id:"FMR-AREA-04",label:"Código y rack",text:"Moldes y formas conservan código, especie, postura/tipo y ubicación de rack reconocible."},
    {id:"FMR-AREA-05",label:"Báscula y recipientes de prueba",text:"Báscula y recipientes patrón permanecen identificados y en condición conocida antes de usarse para una decisión de dosificación."},
    {id:"FMR-AREA-06",label:"Curado",text:"Reacción y curado disponen de espacio estable, sin manipulación prematura ni interferencia con otras piezas."},
    {id:"FMR-AREA-07",label:"Punto de mezcla",text:"La mezcla se realiza en un punto dedicado, protegido y ventilado según producto y proceso real."},
    {id:"FMR-AREA-08",label:"Resguardo de moldes/formas",text:"Moldes y formas se almacenan estables, identificados y sin condición que favorezca deformación."},
    {id:"FMR-AREA-09",label:"Divisiones / salida de molde",text:"La línea de partición y las divisiones se definen antes de laminar cuando la geometría pueda quedar atrapada."}
  ],
  areaAudit:[
    {id:"FMR-AUD-AREA-01",criterion:"Corte, mezcla, curado y acabado están diferenciados.",evidence:"Recorrido del área y puntos de transición."},
    {id:"FMR-AUD-AREA-02",criterion:"Materiales reactivos y lotes están identificados.",evidence:"Producto/lote real + etiqueta + ubicación."},
    {id:"FMR-AUD-AREA-03",criterion:"Polvo, fibra y vapores no migran a acabados.",evidence:"Condición del punto de trabajo + ventilación/extracción cuando aplique."},
    {id:"FMR-AUD-AREA-04",criterion:"Forma/molde conserva ID y ubicación de rack.",evidence:"Código + rack + pieza física."},
    {id:"FMR-AUD-AREA-05",criterion:"Báscula y recipientes patrón están identificados y utilizables.",evidence:"Activo real + condición visible."},
    {id:"FMR-AUD-AREA-06",criterion:"Curado ocurre en espacio estable y sin apertura prematura.",evidence:"Pieza en curado + hora de vaciado/revisión."},
    {id:"FMR-AUD-AREA-07",criterion:"Punto de mezcla está preparado para producto/proceso real.",evidence:"Punto de mezcla + control de derrame/ventilación."},
    {id:"FMR-AUD-AREA-08",criterion:"Moldes y formas permanecen almacenados estables, identificados y sin deformación.",evidence:"Rack/resguardo + condición física."},
    {id:"FMR-AUD-AREA-09",criterion:"La línea de partición y las divisiones están definidas antes de laminar cuando la geometría pueda quedar atrapada.",evidence:"Forma original + divisiones antes de laminado."}
  ],
  method:{
    flow:"Elegir familia → preparar estructura/molde → encerar/orear cuando aplique → prueba de lote cuando aplique → dosificar → mezclar/vaciar o laminar → curar → desmoldar/revisar → identificar y resguardar.",
    branches:[
      {title:"Formas de poliuretano",text:"Conserva prueba de lote, dosificación A/B, curado por referencia y condición física. La cera de 10 pasadas NO pertenece automáticamente a esta familia."},
      {title:"Moldes de fibra de vidrio",text:"Conserva 10 pasadas de cera, oreado, gelcoat, divisiones y laminado 6/7 capas según exigencia."},
      {title:"Réplicas",text:"Conserva su flujo propio. No hereda relaciones, tiempos ni criterios de Formas/Moldes sin validación específica de Réplicas."}
    ],
    stages:[
      {id:"FMR-MET-FOR-01",title:"Preparar estructura/molde",text:"Referencia de taller: triplay de 18 mm; en formas de gran escala puede usarse doble triplay. No tratar estas referencias como capacidad estructural universal."},
      {id:"FMR-MET-FOR-02",title:"Encerar y orear",text:"En Formas la cera cubre toda superficie de contacto. El oreado documentado es 20–30 min y no se cierra antes de 20 min. La referencia de 10 pasadas pertenece a Moldes de fibra."},
      {id:"FMR-MET-FOR-02B",title:"Cerrar y sellar",text:"Cerrar y sellar el conjunto antes de prueba o vaciado. Detener si el cierre no contiene la mezcla o no permite una apertura controlada después del curado."},
      {id:"FMR-MET-FOR-03",title:"Prueba de lote",text:"Usar 20 g totales en botella patrón de aproximadamente 600 mL. Cálido: 10 g base + 10 g catalizador. Fresco/húmedo: 6 g base + 14 g catalizador. Un lote nuevo no entra a producción sin prueba de expansión previa."},
      {id:"FMR-MET-FOR-04",title:"Dosificar A/B",text:"Cálido: 50% base / 50% catalizador. Fresco, húmedo o lluvia: 30% base / 70% catalizador. Pesar cada componente por separado con misma báscula/unidad antes de juntarlos; no corregir proporciones a ojo después de iniciar mezcla."},
      {id:"FMR-MET-FOR-05",title:"Curar y desmoldar forma",text:"Cabeza: mínimo 1 h 30 min como referencia; cuerpo completo: mínimo 4 h y puede permanecer toda la noche. Usar también como referencia aproximada 1 h/kg con calor y 1 h 20 min/kg con frío. El reloj no libera la pieza: no abrir mientras esté caliente, blanda, deformable o con zona aguadita. No enfriar bruscamente una forma que todavía esté caliente."},
      {id:"FMR-MET-MOL-01",title:"Definir divisiones y encerar",text:"La línea de partición se decide antes de laminar. Para Moldes de fibra aplicar 10 pasadas uniformes de cera desmoldante y dejar orear 20–30 min."},
      {id:"FMR-MET-MOL-02",title:"Preparar y aplicar gelcoat",text:"Referencia del taller: 1 kg de resina por aproximadamente 2 kg de talco, incorporado progresivamente hasta pasta muy espesa que no escurra. Es referencia de consistencia del taller, no formulación universal."},
      {id:"FMR-MET-MOL-03",title:"Laminar fibra/resina",text:"Base documentada: 6 capas continuas. Séptima capa sólo cuando el molde sea grande, requiera mayor espesor o vaya a soportar mayor presión."},
      {id:"FMR-MET-MOL-04",title:"Liberar molde",text:"Liberar cuando la carcasa es rígida, abre sin destruir detalle y puede volver a cerrar de forma reproducible."},
      {id:"FMR-MET-REP-01",title:"Réplicas",text:"Preparar molde → preparar mezcla de resina/carga → vaciar/distribuir → curar/desmoldar → corregir línea/rebabas → pintar contra referencia. No trasladar relaciones o tiempos de otras familias sin validación específica de Réplicas."}
    ],
    controls:[
      {id:"FMR-CTL-01",text:"La prueba de 20 g pertenece al control de lote de Formas."},
      {id:"FMR-CTL-02",text:"50/50 y 30/70 se preservan dentro de FMR; no autorizan extrapolar esa receta a Bases."},
      {id:"FMR-CTL-03",text:"La cera de 10 pasadas pertenece a Moldes de fibra, no automáticamente a Formas."},
      {id:"FMR-CTL-04",text:"El tiempo es referencia de curado; la condición física gobierna la apertura."},
      {id:"FMR-CTL-05",text:"La séptima capa de fibra requiere mayor exigencia documentada."},
      {id:"FMR-CTL-06",text:"Réplicas mantienen su propia receta y tiempos; no usar parámetros de Formas/Moldes sin validación específica de Réplicas."},
      {id:"FMR-CTL-07",text:"Un ajuste posterior se registra como resultado o ajuste de lote; no se convierte automáticamente en regla universal."}
    ]
  },
  toolCare:[
    "Báscula: condición y lectura conocidas antes de dosificar",
    "Taladro/mezclador: cable o batería, accesorio y limpieza en condición utilizable",
    "Moldes: integridad, cierre, herrajes, identificación y mantenimiento por condición"
  ],
  competencies:[
    "Corte / estructura",
    "Encerado",
    "Prueba de lote",
    "Dosificación",
    "Mezcla / vaciado",
    "Control de fugas / cierre",
    "Criterio de curado / apertura",
    "Apertura de molde",
    "Laminado",
    "Acabado",
    "Liberación"
  ],
  controlRecords:[
    "ID / código",
    "Especie / tipo",
    "Postura",
    "Foto",
    "Ubicación de rack",
    "Lote / material cuando aporta trazabilidad",
    "Prueba previa",
    "Dosificación",
    "Condición de curado",
    "Liberación"
  ],
  materialFlow:[
    "Material incorporado",
    "Herramental reutilizable",
    "Sobrante reutilizable",
    "Mezcla reaccionada",
    "Recorte",
    "Envases",
    "Residuo",
    "Destino"
  ],
  tools:[
    "Caladora / corte",
    "Taladro y mezclador",
    "Báscula",
    "Recipientes patrón",
    "Moldes",
    "Pernos / herrajes",
    "Prensas / sargentos",
    "Brochas",
    "Herramienta de acabado"
  ],
  consumables:[
    "Triplay",
    "Varilla / herrajes",
    "Cera desmoldante",
    "Componentes A/B",
    "Resina",
    "Talco / cargas",
    "Fibra de vidrio",
    "Gelcoat del taller",
    "Papel cascarón",
    "Materiales de réplica / acabado"
  ],
  evidence:[
    {id:"EVID-FMR-01",text:"Racks, códigos y ubicación real.",placement:"Área"},
    {id:"EVID-FMR-02",text:"Prueba de lote y dosificación: masa total, relación A/B, recipiente patrón, condición climática y resultado de expansión.",placement:"Metodología / Formas"},
    {id:"EVID-FMR-03",text:"Curado/desmolde: familia/tamaño, hora de vaciado, referencia usada, hora de revisión y condición física antes de abrir.",placement:"Metodología / curado"},
    {id:"EVID-FMR-04",text:"Divisiones, gelcoat y capas cuando se construye un molde de fibra.",placement:"Metodología / Moldes"}
  ],
  auditCriteria:[
    {id:"FMR-AUD-01",group:"Área",label:"ID/rack",target:"Forma o molde conserva ID y ubicación.",input:"Código + rack + pieza."},
    {id:"FMR-AUD-02",group:"Área",label:"Material/lote",target:"Material y lote están identificados cuando gobiernan dosificación.",input:"Producto/lote real."},
    {id:"FMR-AUD-03",group:"Proceso",label:"Prueba de lote",target:"Lote nuevo se prueba antes de producción.",input:"Prueba 20 g + resultado."},
    {id:"FMR-AUD-04",group:"Proceso",label:"Dosificación",target:"A/B se pesan por separado y proporción se registra antes de mezclar.",input:"Pesos + relación + lote."},
    {id:"FMR-AUD-05",group:"Proceso",label:"Curado",target:"Curado cumple referencia de tiempo y condición física antes de apertura.",input:"Hora vaciado/revisión + condición."},
    {id:"FMR-AUD-06",group:"Proceso",label:"Cera",target:"10 pasadas aplican a Moldes de fibra, no como requisito automático de Formas.",input:"Familia + preparación."},
    {id:"FMR-AUD-07",group:"Proceso",label:"Gelcoat",target:"Gelcoat se aplica después del oreado y la consistencia no escurre.",input:"Oreado + mezcla."},
    {id:"FMR-AUD-08",group:"Proceso",label:"Laminado",target:"6 capas base; séptima sólo por mayor exigencia documentada.",input:"Conteo + justificación."},
    {id:"FMR-AUD-09",group:"Área",label:"Ventilación/polvo",target:"Ventilación, polvo y fibra están controlados según proceso real.",input:"Punto de trabajo + control físico."}
  ],
  implementationHolds:[
    {id:"FMR-HOLD-01",text:"Cerrar inventario/codificación real y rack."},
    {id:"FMR-HOLD-02",text:"Confirmar productos/HDS y formulaciones controladas vigentes."},
    {id:"FMR-HOLD-03",text:"Verificar ventilación/extracción real."},
    {id:"FMR-HOLD-04",text:"Completar mantenimiento e inventario real de activos."},
    {id:"FMR-HOLD-05",text:"Cerrar criterios exactos de aceptación por familia."},
    {id:"FMR-HOLD-06",text:"Cerrar estados BIWO exactos."},
    {id:"FMR-HOLD-07",text:"Capturar evidencia real de prueba, dosificación y curado."},
    {id:"FMR-HOLD-08",text:"Confirmar en campo qué referencias de tiempo/programación siguen gobernando la práctica actual antes de liberar el método."},
    {id:"FMR-HOLD-09",text:"Definir la verificación aplicable de la báscula antes de liberar el control metrológico."}
  ],
  sourceRefs:[
    "ops/areas/FORMAS_MOLDES_REPLICAS_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-recepcion"] = {
  id:"area-recepcion",
  code:"REC",
  title:"Recepción",
  status:"CAPTURE_PENDING",
  purpose:"Abrir una identidad única del trabajo y transferirla sin perder documentación, fotos, condición de ingreso ni siguiente acción.",
  receivesFrom:"Cliente / transportista / ingreso de pieza o piel con documentación disponible",
  handsOffTo:"Curtiduría u otra ruta aplicable con identidad común y condición registrada",
  entryInputs:[
    "Pieza o piel",
    "Documentación disponible",
    "Condición física de ingreso",
    "Referencia suficiente para relacionar la pieza con el trabajo"
  ],
  entryStops:[
    "Identidad, documentación y pieza no se relacionan",
    "La pieza no puede recibir un ID común sin ambigüedad",
    "La condición de ingreso no queda registrada antes de perder contexto"
  ],
  exitCriteria:[
    "Trabajo con ID único",
    "Foto y documentación ligadas al mismo trabajo",
    "Condición de ingreso registrada",
    "Siguiente acción visible",
    "Transferencia registrada"
  ],
  area:[
    {id:"REC-AREA-01",label:"Ingreso y espera",text:"La zona de ingreso y espera evita mezclar trabajos y conserva separación física suficiente entre piezas."},
    {id:"REC-AREA-02",label:"Captura inicial",text:"Etiquetas, fotos y documentos se capturan antes de perder el contexto de ingreso."},
    {id:"REC-AREA-03",label:"Identidad en espera",text:"Toda pieza en espera conserva ID, condición registrada y destino o siguiente acción."},
    {id:"REC-AREA-04",label:"Separación húmedo/documental",text:"Material húmedo o salado no contamina documentos, equipo de captura ni circulación."}
  ],
  areaAudit:[
    {id:"REC-AUD-AREA-01",criterion:"Zona de ingreso y espera separa trabajos sin mezcla.",evidence:"Panorámica del área y piezas en espera."},
    {id:"REC-AUD-AREA-02",criterion:"Etiquetas, fotos y documentos se capturan antes de perder contexto.",evidence:"Muestra de trabajo recién ingresado."},
    {id:"REC-AUD-AREA-03",criterion:"Toda pieza en espera conserva ID, condición y siguiente acción.",evidence:"Muestra de piezas en espera."},
    {id:"REC-AUD-AREA-04",criterion:"Material húmedo/salado no contamina documentación o equipo.",evidence:"Condición física del punto de ingreso."}
  ],
  method:{
    flow:"Inspección inicial → registrar especie/referencia/documento → etiquetar → fotografía → condición de ingreso → almacenamiento/espera controlada → transferencia.",
    branches:[],
    stages:[
      {id:"REC-MET-01",title:"Inspección inicial",text:"Recibir la pieza y observar su condición de ingreso sin perder la relación con la documentación disponible."},
      {id:"REC-MET-02",title:"Registrar referencia",text:"Registrar especie, referencia de trabajo y documentación disponible usando la identidad común del trabajo."},
      {id:"REC-MET-03",title:"Etiquetar",text:"Aplicar una identificación no ambigua antes de separar pieza, documentos o fotografías."},
      {id:"REC-MET-04",title:"Fotografiar",text:"Capturar evidencia útil de ingreso vinculada al mismo ID del trabajo."},
      {id:"REC-MET-05",title:"Registrar condición",text:"Dejar visible la condición física de ingreso y cualquier discrepancia que afecte el siguiente paso."},
      {id:"REC-MET-06",title:"Espera controlada",text:"Ubicar la pieza en espera sin perder ID, condición ni destino."},
      {id:"REC-MET-07",title:"Transferir",text:"Entregar a Curtiduría u otra ruta aplicable conservando la misma identidad y registrando el handoff."}
    ],
    controls:[
      {id:"REC-CTL-01",text:"Recepción no inventa criterios legales de aceptación; la aplicabilidad documental se resuelve en Bibliografía."},
      {id:"REC-CTL-02",text:"Ninguna pieza se transfiere sin ID común y condición registrada."},
      {id:"REC-CTL-03",text:"Foto y documento sólo sirven como evidencia si permanecen ligados al mismo trabajo."}
    ]
  },
  competencies:[
    "Relacionar pieza ↔ orden/trabajo",
    "Detectar discrepancia visible",
    "Capturar fotografía útil",
    "Etiquetar sin ambigüedad",
    "Ejecutar handoff sin pérdida documental"
  ],
  controlRecords:[
    "ID del trabajo",
    "Condición de ingreso",
    "Evidencia fotográfica",
    "Documentación asociada",
    "Transferencia / handoff",
    "Los nombres exactos de estados BIWO se toman del sistema real"
  ],
  materialFlow:[
    "Pieza o piel recibida",
    "Etiqueta / identificación",
    "Protección temporal cuando aplique",
    "Transferencia física al siguiente punto"
  ],
  tools:[
    "Etiquetas / identificación",
    "Medio de captura fotográfica",
    "Estación BIWO / registro",
    "Superficie de inspección",
    "Almacenamiento / espera"
  ],
  consumables:[
    "Etiquetas",
    "Elementos de embalaje o protección temporal",
    "Consumibles de identificación"
  ],
  evidence:[
    {id:"EVID-REC-01",text:"Zona de ingreso/espera y relación física entre pieza, ID y siguiente acción.",placement:"Área"},
    {id:"EVID-REC-02",text:"Fotografía de ingreso ligada al mismo trabajo.",placement:"Metodología / ingreso"},
    {id:"EVID-REC-03",text:"Documentación asociada al trabajo sin exponer datos sensibles innecesarios.",placement:"Control / trazabilidad"},
    {id:"EVID-REC-04",text:"Transferencia registrada al siguiente proceso.",placement:"Handoff"}
  ],
  auditCriteria:[
    {id:"REC-AUD-01",group:"Proceso",label:"ID",target:"Ningún trabajo queda sin ID.",input:"Muestra de trabajos activos."},
    {id:"REC-AUD-02",group:"Proceso",label:"Foto/documento",target:"Foto y documento están ligados al mismo trabajo.",input:"ID + foto + documento."},
    {id:"REC-AUD-03",group:"Área",label:"Espera",target:"Espera está separada y siguiente acción visible.",input:"Zona de espera."},
    {id:"REC-AUD-04",group:"Proceso",label:"Handoff",target:"Transferencia queda registrada.",input:"Trabajo transferido + registro."}
  ],
  implementationHolds:[
    {id:"REC-HOLD-01",text:"Confirmar responsable y estación vigente de Recepción."},
    {id:"REC-HOLD-02",text:"Cerrar estados BIWO exactos."},
    {id:"REC-HOLD-03",text:"Definir estándar físico de espera con evidencia real del área."},
    {id:"REC-HOLD-04",text:"Capturar evidencia fotográfica real del área."}
  ],
  sourceRefs:[
    "ops/areas/RECEPCION_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-carpinteria"] = {
  id:"area-carpinteria",
  code:"CAR",
  title:"Carpintería / Corte / Embalaje",
  status:"NOT_RELEASED",
  purpose:"Preparar un frente separado para corte de madera, armado de cajas y embalaje/protección, sin contaminar Retoque ni fabricar una metodología que aún no ha sido demostrada.",
  receivesFrom:"Requerimiento de corte, caja o protección + dimensiones/referencia + ID de orden/pieza",
  handsOffTo:"Corte, caja o embalaje identificado y listo para siguiente uso/carga",
  entryInputs:[
    "Requerimiento identificado",
    "Dimensiones o referencia suficiente",
    "ID de orden/pieza",
    "Material y equipo correspondientes al trabajo"
  ],
  entryStops:[
    "No existe todavía un puesto real",
    "El flujo real todavía no ha sido demostrado por el responsable",
    "La ubicación invade Retoque, circulación, carga o químicos",
    "No usar la pedacera ni la estación de Señor Pez como área de Carpintería / Embalaje",
    "La metodología todavía no está liberada"
  ],
  exitCriteria:[
    "Corte, caja o embalaje identificado",
    "Protección y dimensiones corresponden a la pieza y destino",
    "La carga puede manipularse sin retirar protecciones esenciales ni bloquear la ruta"
  ],
  area:[
    {id:"CAR-AREA-01",label:"Circulación y accesos",text:"Cuando exista el puesto, pasillos, salidas, tableros, extintores y puntos de operación permanecen libres. Piezas, cajas, madera, cables y herramienta temporal no ocupan circulación."},
    {id:"CAR-AREA-02",label:"Estación y almacenamiento",text:"Herramientas, materiales y consumibles tienen ubicación definida. El puesto vuelve a condición utilizable al cerrar la tarea y el equipo dañado se separa del uso."},
    {id:"CAR-AREA-03",label:"Iluminación",text:"La iluminación se verifica en el plano real de corte, trazo y armado cuando la tarea lo requiera."},
    {id:"CAR-AREA-04",label:"Ventilación y extracción",text:"Ventilación/extracción se define contra las operaciones reales de corte, lijado, polvo de madera, adhesivos o acabados efectivamente usados; no se instala antes de confirmar equipo, material y generación real."},
    {id:"CAR-AREA-05",label:"Emergencia",text:"Rutas y medios de respuesta aplicables permanecen visibles y accesibles; cobertura y ubicación se resuelven contra la evaluación vigente."},
    {id:"CAR-AREA-06",label:"Identidad y espera",text:"Toda pieza, caja, corte o trabajo en espera conserva ID de orden/proyecto y siguiente acción; material de embalaje no mezcla proyectos."},
    {id:"CAR-AREA-07",label:"Ubicación y separación",text:"La ubicación del puesto no puede ocupar la pedacera ni la estación de Señor Pez en Retoque; debe separar polvo/aserrín de pintura, gasolina blanca, solventes y acabados, permitir ruta de madera/cajas y contar con servicios compatibles con el equipo real."},
    {id:"CAR-AREA-08",label:"Corte y polvo",text:"Banco y equipo de corte, cuando existan, permanecen estables y con protecciones/accesorios correspondientes al equipo real. Polvo/aserrín se captura o retira en origen."},
    {id:"CAR-AREA-09",label:"Madera y herrajes",text:"Madera/triplay se almacena estable; paneles pesados evitan vuelco/deslizamiento. Tornillos, clavos, bisagras y herrajes se separan por tipo/tamaño suficiente para recuperarlos sin vaciar contenedores."},
    {id:"CAR-AREA-10",label:"Embalaje y carga",text:"Cartón, madera, película/protección y fijaciones tienen zona definida. Caja/embalaje conserva ID de orden y puede manipularse/cargarse sin retirar protecciones esenciales ni bloquear la ruta."}
  ],
  areaAudit:[
    {id:"CAR-AUD-AREA-01",criterion:"Cuando exista el puesto, circulación, salidas, tableros y medios de emergencia permanecen libres.",evidence:"Recorrido físico completo."},
    {id:"CAR-AUD-AREA-02",criterion:"Estación, herramientas, materiales y consumibles tienen ubicación definida y recuperable.",evidence:"Puesto real + almacenamiento."},
    {id:"CAR-AUD-AREA-03",criterion:"La iluminación corresponde al plano real de corte, trazo y armado cuando gobierna la tarea.",evidence:"Lux + plano de tarea + instrumento cuando aplique."},
    {id:"CAR-AUD-AREA-04",criterion:"Ventilación/extracción corresponde al equipo, material y generación real.",evidence:"Operación real + polvo/producto + control físico."},
    {id:"CAR-AUD-AREA-05",criterion:"Rutas y medios de respuesta aplicables permanecen visibles y accesibles.",evidence:"Recorrido físico de emergencia."},
    {id:"CAR-AUD-AREA-06",criterion:"Toda pieza, caja, corte o trabajo en espera conserva ID y siguiente acción.",evidence:"Muestra de trabajos y embalajes."},
    {id:"CAR-AUD-AREA-07",criterion:"La ubicación aprobada no invade Retoque y mantiene separación de polvo, químicos, carga y servicios.",evidence:"Límite físico con áreas vecinas + ruta de materiales/carga."},
    {id:"CAR-AUD-AREA-08",criterion:"Banco y equipo de corte permanecen estables y el polvo/aserrín se controla en origen.",evidence:"Puesto de corte real + condición del equipo + manejo de polvo."},
    {id:"CAR-AUD-AREA-09",criterion:"Madera, paneles y herrajes se almacenan estables y recuperables.",evidence:"Almacenamiento real."},
    {id:"CAR-AUD-AREA-10",criterion:"Embalaje conserva ID y puede manipularse/cargarse sin retirar protecciones esenciales ni bloquear la ruta.",evidence:"Caja/embalaje real + recorrido de carga."}
  ],
  method:{
    flow:"METODOLOGÍA NO LIBERADA. No usar una secuencia genérica como instrucción de trabajo.",
    branches:[
      {title:"Condición de liberación",text:"El método debe definir recepción del requerimiento, dimensionado y holguras, materiales y uniones, corte y armado, protección e inmovilización, criterio de salida, manipulación y carga, retrabajos e interfaz con Bases/Logística."}
    ],
    stages:[],
    controls:[
      {id:"CAR-CTL-01",text:"No operar este frente hasta que exista una metodología liberada para una orden real completa."},
      {id:"CAR-CTL-02",text:"No usar una secuencia teórica como instrucción de trabajo."},
      {id:"CAR-CTL-03",text:"No duplicar automáticamente madera/herrajes controlados en Bases; definir propiedad y stock cuando se implemente."},
      {id:"CAR-CTL-04",text:"No asignar mantenimiento ni manuales a activos imaginarios."}
    ]
  },
  competencies:[
    "Medición / trazo",
    "Operación de cada máquina real",
    "Armado / uniones",
    "Protección / inmovilización de pieza",
    "Manipulación / carga",
    "Liberación de embalaje"
  ],
  controlRecords:[
    "Requerimiento de embalaje ligado a la orden",
    "Vínculo caja/embalaje ↔ orden",
    "Condición de listo para carga",
    "Los estados BIWO no se crean hasta observar el sistema real"
  ],
  materialFlow:[
    "Entrada",
    "Corte / incorporación",
    "Retal recuperable",
    "Recorte / aserrín / residuo",
    "Embalaje terminado",
    "Destino / carga"
  ],
  tools:[
    "Banco o mesa de corte y armado",
    "Equipo de corte correspondiente al trabajo",
    "Taladro / atornillador cuando corresponda",
    "Herramienta manual de medición, corte y fijación",
    "Sistema de captura o retiro de polvo cuando la operación lo requiera",
    "Rack / almacenamiento de madera",
    "Medios de manipulación o carga cuando peso y volumen lo exijan"
  ],
  consumables:[
    "Madera / triplay",
    "Tornillería / herrajes",
    "Cartón",
    "Película / plástico / protecciones",
    "Elementos de fijación"
  ],
  evidence:[
    {id:"EVID-CAR-01",text:"Implementación física real: panorámica, límite con áreas vecinas, banco/rack/equipo, ruta de circulación/carga y separación respecto de polvo/químicos/acabado.",placement:"Área"},
    {id:"EVID-CAR-02",text:"Primera demostración real: orden/pieza, requerimiento/dimensiones, secuencia, herramienta/equipo, materiales/protección, condición de salida y carga/manipulación si aplica.",placement:"Metodología"}
  ],
  auditCriteria:[
    {id:"CAR-AUD-01",group:"Área",label:"Decisión/ubicación",target:"Existe decisión de implementar y ubicación aprobada.",input:"Decisión + ubicación."},
    {id:"CAR-AUD-02",group:"Área",label:"Separación de polvo",target:"Polvo/aserrín queda separado de Retoque/acabados.",input:"Límite físico y punto de corte."},
    {id:"CAR-AUD-03",group:"Área",label:"Puesto real",target:"Banco/rack/equipo real implementados y utilizables.",input:"Activo físico."},
    {id:"CAR-AUD-04",group:"Área",label:"Almacenamiento",target:"Madera/herrajes/protecciones están estables y recuperables.",input:"Almacenamiento real."},
    {id:"CAR-AUD-05",group:"Área",label:"Servicios/carga",target:"Electricidad y ruta de carga son compatibles con el puesto.",input:"Servicios + recorrido."},
    {id:"CAR-AUD-06",group:"Proceso",label:"Identidad de embalaje",target:"Caja/embalaje está ligado a la orden.",input:"Muestra real."},
    {id:"CAR-AUD-07",group:"Proceso",label:"Demostración real",target:"Método real fue demostrado antes de liberarse.",input:"Observación completa de una orden."},
    {id:"CAR-AUD-08",group:"Proceso",label:"Criterio de liberación",target:"Criterios de protección y liberación están definidos por pieza/destino.",input:"Regla derivada de demostración real."}
  ],
  implementationHolds:[
    {id:"CAR-HOLD-01",text:"Decidir si ROCA implementará este frente dedicado o mantendrá parte del trabajo en Bases/Logística."},
    {id:"CAR-HOLD-02",text:"Definir ubicación real sin invadir Retoque ni circulación."},
    {id:"CAR-HOLD-03",text:"Definir responsable real."},
    {id:"CAR-HOLD-04",text:"Definir estación/layout."},
    {id:"CAR-HOLD-05",text:"Levantar herramientas/equipo existentes."},
    {id:"CAR-HOLD-06",text:"Observar método primario demostrado; no inventar secuencia."},
    {id:"CAR-HOLD-07",text:"Cerrar criterio de dimensionado/protección por pieza/destino."},
    {id:"CAR-HOLD-08",text:"Confirmar materiales y uniones reales."},
    {id:"CAR-HOLD-09",text:"Observar manipulación/carga."},
    {id:"CAR-HOLD-10",text:"Cerrar interfaz con Bases y Logística."},
    {id:"CAR-HOLD-11",text:"Cerrar BIWO real."},
    {id:"CAR-HOLD-12",text:"Capturar evidencia de campo."},
    {id:"CAR-HOLD-13",text:"Demostrar competencia."}
  ],
  sourceRefs:[
    "ops/areas/CARPINTERIA_EMBALAJE_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-soldadura"] = {
  id:"area-soldadura",
  code:"SOL",
  title:"Soldadura / Adaptación",
  status:"NOT_RELEASED",
  purpose:"Resolver uniones y adaptaciones metálicas con control de sujeción, chispas, humos y estabilidad.",
  receivesFrom:"Pieza o estructura que requiere unión o adaptación",
  handsOffTo:"Operación solicitante con unión estable preparada para continuar",
  entryInputs:[
    "Pieza/estructura identificada",
    "Necesidad de unión o adaptación definida",
    "Área preparada para trabajo en caliente"
  ],
  entryStops:[
    "Combustibles, cartón, solventes o pieza sensible permanecen dentro de proyección",
    "No existe protección a terceros cuando aplica",
    "Ventilación/extracción no corresponde al humo/material/recubrimiento real",
    "Equipo, cables, pinza, antorcha/porta-electrodo o esmeril no están en condición utilizable",
    "No existe condición de respuesta contra incendio acorde a la evaluación aplicable"
  ],
  exitCriteria:[
    "Unión estable",
    "Condición antes/después registrada cuando la modificación es estructural",
    "Incidencia/adaptación ligada a la orden cuando afecta la pieza"
  ],
  area:[
    {id:"SOL-AREA-01",label:"Proyección y combustibles",text:"Combustibles, cartón, solventes y pieza sensible permanecen fuera de proyección durante trabajo en caliente."},
    {id:"SOL-AREA-02",label:"Protección a terceros",text:"Pantalla o mampara protege a terceros cuando la operación o ubicación lo requiere."},
    {id:"SOL-AREA-03",label:"Ventilación y humos",text:"Ventilación/extracción responde al humo, material y recubrimiento real de la operación."},
    {id:"SOL-AREA-04",label:"Equipo y cables",text:"Cables, pinza, antorcha/porta-electrodo, esmeril y equipo asociado permanecen en condición utilizable."},
    {id:"SOL-AREA-05",label:"Extinción / trabajo en caliente",text:"Medios de respuesta y autorización aplicables se definen según evaluación vigente; no se cierran por apariencia."}
  ],
  areaAudit:[
    {id:"SOL-AUD-AREA-01",criterion:"Área preparada antes de trabajo en caliente.",evidence:"Recorrido previo a la operación."},
    {id:"SOL-AUD-AREA-02",criterion:"Terceros están protegidos cuando aplica.",evidence:"Pantalla/mampara y ubicación real."},
    {id:"SOL-AUD-AREA-03",criterion:"Ventilación corresponde a la operación real.",evidence:"Material/recubrimiento + control físico."},
    {id:"SOL-AUD-AREA-04",criterion:"Equipo y cables están en condición utilizable.",evidence:"Equipo real + condición visible."},
    {id:"SOL-AUD-AREA-05",criterion:"Medios de respuesta aplicables están disponibles.",evidence:"Condición física + criterio aplicable definido en Bibliografía."}
  ],
  method:{
    flow:"METODOLOGÍA NO LIBERADA. El departamento sólo puede operar con una secuencia técnica específica del proceso y equipo reales.",
    branches:[
      {title:"Condición de liberación",text:"Antes de operar deben estar definidos la secuencia, tipo de unión, preparación, consumibles, ajustes, criterio de aceptación y retrabajo del proceso real."}
    ],
    stages:[],
    controls:[
      {id:"SOL-CTL-01",text:"No sustituir el método específico del proceso real con una secuencia genérica de soldadura."},
      {id:"SOL-CTL-02",text:"La autorización se define por proceso/equipo real y control de trabajo en caliente."},
      {id:"SOL-CTL-03",text:"La modificación estructural conserva condición antes/después y vínculo con la orden."}
    ]
  },
  competencies:[
    "Autorización por proceso/equipo real",
    "Control de trabajo en caliente",
    "Criterio de aceptación y retrabajo del proceso real"
  ],
  controlRecords:[
    "ID de pieza / orden",
    "Adaptación o incidencia",
    "Condición antes/después cuando la modificación es estructural",
    "Proceso/equipo real cuando quede demostrado"
  ],
  materialFlow:[
    "Metal real",
    "Consumible de unión/corte real",
    "Escoria",
    "Discos",
    "Recortes",
    "Residuo y destino"
  ],
  tools:[
    "Equipo de soldadura correspondiente al proceso real",
    "Herramienta asociada al proceso real",
    "Esmeril cuando corresponda"
  ],
  consumables:[
    "Consumibles de unión o corte correspondientes al proceso real",
    "Material metálico correspondiente al trabajo"
  ],
  evidence:[
    {id:"EVID-SOL-01",text:"Área preparada antes de trabajo en caliente.",placement:"Área"},
    {id:"EVID-SOL-02",text:"Equipo/cables/protección a terceros y ventilación real.",placement:"Área"},
    {id:"EVID-SOL-03",text:"Condición antes/después de adaptación estructural.",placement:"Control / pieza"},
    {id:"EVID-SOL-04",text:"Primera demostración técnica completa.",placement:"Metodología"}
  ],
  auditCriteria:[
    {id:"SOL-AUD-01",group:"Área",label:"Preparación",target:"Área está preparada antes del trabajo en caliente.",input:"Recorrido previo."},
    {id:"SOL-AUD-02",group:"Área",label:"Terceros",target:"Terceros están protegidos cuando aplica.",input:"Pantalla/mampara + ubicación."},
    {id:"SOL-AUD-03",group:"Área",label:"Ventilación",target:"Ventilación corresponde a la operación real.",input:"Material/recubrimiento + control."},
    {id:"SOL-AUD-04",group:"Área",label:"Equipo",target:"Equipo y cables están en condición utilizable.",input:"Equipo real."},
    {id:"SOL-AUD-05",group:"Proceso",label:"Liberación",target:"Unión es estable antes de liberar.",input:"Comprobación de estabilidad."}
  ],
  implementationHolds:[
    {id:"SOL-HOLD-01",text:"Realizar entrevista/demostración técnica del responsable."},
    {id:"SOL-HOLD-02",text:"Identificar proceso de soldadura real."},
    {id:"SOL-HOLD-03",text:"Levantar consumibles reales."},
    {id:"SOL-HOLD-04",text:"Definir EPP según proceso real."},
    {id:"SOL-HOLD-05",text:"Verificar ventilación/extracción."},
    {id:"SOL-HOLD-06",text:"Cerrar protección contra incendio y autorización de trabajo en caliente según aplicabilidad."},
    {id:"SOL-HOLD-07",text:"Cerrar mantenimiento y evidencia de equipo real."}
  ],
  sourceRefs:[
    "ops/areas/SOLDADURA_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-blanqueado"] = {
  id:"area-blanqueado",
  code:"BLA",
  title:"Blanqueado / Tratamiento de cráneos",
  status:"PARTIAL",
  purpose:"Limpiar y tratar cráneos o elementos óseos controlando calor, ventilación y protección de cuernos.",
  receivesFrom:"Cráneo o elemento óseo identificado",
  handsOffTo:"Montaje / acabado con elemento limpio, estable e identificado",
  entryInputs:[
    "Cráneo o elemento óseo identificado",
    "Condición suficiente para manipulación y tratamiento",
    "Sistema de apoyo/protección disponible cuando existan cuernos"
  ],
  entryStops:[
    "La pieza pierde identidad",
    "Los cuernos quedarían expuestos a una zona térmica que pueda alterar color o superficie",
    "Recipiente o fuente de calor no son estables",
    "La manipulación de agua caliente o vapor invade circulación"
  ],
  exitCriteria:[
    "Elemento limpio",
    "Elemento estable",
    "Identidad conservada",
    "Condición antes/después registrada cuando aporta trazabilidad"
  ],
  area:[
    {id:"BLA-AREA-01",label:"Recipiente y fuente de calor",text:"Recipiente y fuente de calor permanecen estables durante el tratamiento."},
    {id:"BLA-AREA-02",label:"Protección de cuernos",text:"Nivel de agua y sistema de apoyo mantienen los cuernos fuera de la zona térmica cuando corresponda."},
    {id:"BLA-AREA-03",label:"Ruta de agua caliente",text:"La manipulación de agua caliente y vapor no cruza circulación ni obliga a maniobras improvisadas."},
    {id:"BLA-AREA-04",label:"Ventilación",text:"La ventilación corresponde al calor, vapor y cualquier producto auxiliar realmente usado."},
    {id:"BLA-AREA-05",label:"Drenaje, enfriamiento y espera",text:"Drenaje, enfriamiento y espera conservan ID y evitan derrames o mezcla de piezas."}
  ],
  areaAudit:[
    {id:"BLA-AUD-AREA-01",criterion:"Cuernos quedan protegidos de la zona térmica cuando aplica.",evidence:"Montaje real del tratamiento."},
    {id:"BLA-AUD-AREA-02",criterion:"Recipiente y fuente de calor permanecen estables.",evidence:"Condición física durante preparación."},
    {id:"BLA-AUD-AREA-03",criterion:"Ruta de agua caliente no crea derrame u obstrucción.",evidence:"Recorrido de manipulación."},
    {id:"BLA-AUD-AREA-04",criterion:"Ventilación corresponde al calor/vapor/producto real.",evidence:"Condición física y producto si existe."},
    {id:"BLA-AUD-AREA-05",criterion:"Pieza conserva ID durante tratamiento, enfriamiento y espera.",evidence:"Muestra de pieza en proceso."}
  ],
  method:{
    flow:"Tratamiento con agua caliente sobre el cráneo manteniendo cuernos fuera de la zona que pueda alterar color o superficie → limpieza → enfriamiento/espera → transferencia.",
    branches:[],
    stages:[
      {id:"BLA-MET-01",title:"Preparar pieza y apoyo",text:"Identificar la pieza, preparar recipiente/fuente de calor y colocar el sistema de apoyo/protección necesario para mantener cuernos fuera de la zona térmica cuando corresponda."},
      {id:"BLA-MET-02",title:"Tratamiento con agua caliente",text:"Aplicar tratamiento con agua caliente sobre el cráneo manteniendo cuernos fuera de la zona capaz de alterar color o superficie. Temperatura y tiempo sólo se usan cuando estén definidos en el método controlado vigente; la condición física de la pieza gobierna la salida."},
      {id:"BLA-MET-03",title:"Limpieza y salida",text:"Limpiar el elemento tratado, conservar identidad y llevarlo a condición estable para Montaje/acabado. Cualquier producto auxiliar se documenta sólo si realmente se usa."}
    ],
    controls:[
      {id:"BLA-CTL-01",text:"No añadir químicos ni fijar concentraciones, tiempos o temperaturas que todavía no estén liberados como parte del método."},
      {id:"BLA-CTL-02",text:"Cualquier producto auxiliar se documenta únicamente si existe en la operación real."},
      {id:"BLA-CTL-03",text:"La protección de cuernos gobierna el montaje del tratamiento cuando aplica."}
    ]
  },
  competencies:[
    "Control de calor",
    "Manipulación segura de agua caliente/vapor",
    "Protección de cuernos",
    "Criterio físico de salida del tratamiento"
  ],
  controlRecords:[
    "ID de pieza",
    "Condición antes/después",
    "Incidencia cuando ocurra",
    "Producto auxiliar sólo si realmente se usa"
  ],
  materialFlow:[
    "Agua de proceso",
    "Material de protección si existe",
    "Producto auxiliar sólo si se confirma",
    "Tejido retirado",
    "Agua usada",
    "Destino"
  ],
  tools:[
    "Recipiente",
    "Fuente de calor",
    "Sistema de apoyo/protección de cuerno",
    "Herramienta de limpieza"
  ],
  consumables:[
    "Agua de proceso",
    "Materiales de protección si existen",
    "Producto auxiliar sólo si se confirma"
  ],
  evidence:[
    {id:"EVID-BLA-01",text:"Montaje real del tratamiento mostrando recipiente, fuente de calor y protección de cuernos cuando aplique.",placement:"Área / metodología"},
    {id:"EVID-BLA-02",text:"Condición antes/después del elemento.",placement:"Metodología"},
    {id:"EVID-BLA-03",text:"Incidencia o excepción cuando ocurra.",placement:"Control"}
  ],
  auditCriteria:[
    {id:"BLA-AUD-01",group:"Proceso",label:"Protección de cuernos",target:"Cuerno está protegido de zona térmica cuando aplica.",input:"Montaje real."},
    {id:"BLA-AUD-02",group:"Área",label:"Estabilidad",target:"Recipiente y fuente de calor son estables.",input:"Condición física."},
    {id:"BLA-AUD-03",group:"Área",label:"Ruta",target:"Ruta de agua caliente no genera derrame u obstrucción.",input:"Recorrido."},
    {id:"BLA-AUD-04",group:"Proceso",label:"Producto auxiliar",target:"Producto auxiliar está identificado sólo si realmente existe.",input:"Producto real o N/A justificado."},
    {id:"BLA-AUD-05",group:"Proceso",label:"Identidad",target:"Pieza conserva ID durante todo el tratamiento.",input:"Muestra en proceso."}
  ],
  implementationHolds:[
    {id:"BLA-HOLD-01",text:"Confirmar responsable operativo."},
    {id:"BLA-HOLD-02",text:"Capturar secuencia completa real."},
    {id:"BLA-HOLD-03",text:"Confirmar si tiempos/temperaturas gobiernan realmente el proceso antes de fijarlos."},
    {id:"BLA-HOLD-04",text:"Verificar ventilación real."},
    {id:"BLA-HOLD-05",text:"Verificar drenaje y ruta de agua."},
    {id:"BLA-HOLD-06",text:"Confirmar si existe producto auxiliar."},
    {id:"BLA-HOLD-07",text:"Completar evidencia de campo."}
  ],
  sourceRefs:[
    "ops/areas/BLANQUEADO_AREA_BOOK_V2.md"
  ]
};

window.ROCA_DEPARTMENTS["area-soporte"] = {
  id:"area-soporte",
  code:"SUP",
  title:"Espacios de soporte",
  status:"PARTIAL",
  purpose:"Mantener bodegas, oficina/BIWO, exhibición, comedor, sanitarios, circulaciones, exterior/carga y residuos en condición utilizable, identificada, segura y coherente con la operación.",
  receivesFrom:"Operación general del taller",
  handsOffTo:"Operación general del taller",
  entryInputs:[
    "Uso real de cada subzona",
    "Inventario o contenido real cuando aplique",
    "Condición física observable",
    "Necesidad de privacidad, carga, almacenamiento o servicio según la subzona"
  ],
  entryStops:[
    "La subzona se usa para una función distinta a la definida sin control",
    "Piezas/materiales bloquean rutas",
    "Datos sensibles quedan expuestos",
    "Químicos, residuos o alimentos se mezclan de forma incompatible",
    "Carga/descarga invade una ruta sin control"
  ],
  exitCriteria:[
    "Subzona utilizable para su función",
    "Identidad y almacenamiento conservados",
    "Circulación libre",
    "Privacidad y separación física respetadas",
    "Residuos y materiales con destino reconocido"
  ],
  area:[
    {id:"SUP-BOD",label:"Bodegas",text:"Ubicación y categoría son reconocibles; pieza/material conserva ID y siguiente acción; pesado o inestable se almacena abajo y estable; racks/pasillos permanecen accesibles; químicos incompatibles se separan según producto real."},
    {id:"SUP-ERP",label:"Oficina / BIWO",text:"Estación y archivo evitan exposición innecesaria de datos; acceso responde a necesidad; documentos sensibles permanecen fuera del HTML/repositorio público; BIWO es sistema operativo, no almacén físico paralelo."},
    {id:"SUP-EXH",label:"Exhibición",text:"Pieza permanece estable y protegida; circulación de visitante/cliente no invade operación; exhibición no se usa como bodega temporal; identificación comercial no expone datos privados."},
    {id:"SUP-COM",label:"Comedor",text:"Comedor permanece separado de químicos, residuos y piezas de proceso; superficies limpias y alimentos almacenados de forma diferenciada."},
    {id:"SUP-SAN",label:"Sanitarios",text:"Sanitarios conservan condición higiénica, insumos, drenaje/ventilación y privacidad; no se usan como almacenamiento de químicos o equipo."},
    {id:"SUP-CIR",label:"Circulaciones",text:"Rutas y accesos permanecen libres; piezas en espera no invaden paso; señalización y emergencia permanecen visibles según evaluación aplicable."},
    {id:"SUP-EXT",label:"Exterior / carga",text:"Carga y descarga no mezclan residuos, piezas terminadas y químicos; acceso, maniobra y protección climática se validan contra condición real; embalaje conserva ID hasta salida."},
    {id:"SUP-RES",label:"Residuos",text:"La separación ocurre en punto de generación; contenedor e identificación corresponden al material real; almacenamiento temporal está controlado; material útil o recuperable no se descarta por comodidad."}
  ],
  areaAudit:[
    {id:"SUP-AUD-01",criterion:"Bodegas conservan ID, estabilidad y pasillos accesibles.",evidence:"Recorrido de almacenamiento."},
    {id:"SUP-AUD-02",criterion:"Oficina/BIWO protege datos y documentos sensibles.",evidence:"Condición de estación/archivo sin exponer información privada."},
    {id:"SUP-AUD-03",criterion:"Exhibición no invade operación ni funciona como bodega.",evidence:"Recorrido y piezas exhibidas."},
    {id:"SUP-AUD-04",criterion:"Comedor permanece separado de químicos, residuos y piezas.",evidence:"Condición física."},
    {id:"SUP-AUD-05",criterion:"Sanitarios conservan higiene, privacidad y no almacenan químicos/equipo.",evidence:"Condición física sin capturar personas ni pertenencias."},
    {id:"SUP-AUD-06",criterion:"Circulaciones permanecen libres.",evidence:"Recorrido completo."},
    {id:"SUP-AUD-07",criterion:"Exterior/carga conserva separación y ruta de maniobra.",evidence:"Zona de carga/descarga."},
    {id:"SUP-AUD-08",criterion:"Residuos se separan y almacenan según material real.",evidence:"Puntos de generación y almacenamiento temporal."}
  ],
  method:{
    flow:"No aplica una metodología única. Cada subzona conserva su condición, rutina real y evidencia propia.",
    branches:[
      {title:"Bodegas",text:"Mantener ubicación, identidad, estabilidad y acceso."},
      {title:"Oficina / BIWO",text:"Mantener privacidad, control documental y acceso por necesidad."},
      {title:"Exhibición",text:"Mantener estabilidad, protección y separación de la operación."},
      {title:"Comedor / Sanitarios",text:"Mantener higiene, separación y privacidad."},
      {title:"Circulaciones / Exterior",text:"Mantener ruta libre, maniobra y separación de corrientes."},
      {title:"Residuos",text:"Mantener separación, identificación, almacenamiento temporal y destino."}
    ],
    stages:[],
    controls:[
      {id:"SUP-CTL-01",text:"No forzar una metodología de producción en espacios de soporte."},
      {id:"SUP-CTL-02",text:"Documentos sensibles permanecen fuera del HTML/repositorio público."},
      {id:"SUP-CTL-03",text:"Una foto no sustituye la validación de privacidad, mantenimiento o destino de residuos."},
      {id:"SUP-CTL-04",text:"Material útil o recuperable no se clasifica como residuo por comodidad."}
    ]
  },
  competencies:[
    "Uso correcto de cada subzona",
    "Manejo de información/archivo según necesidad",
    "Separación de materiales y residuos",
    "Carga/descarga cuando aplique"
  ],
  controlRecords:[
    "Inventario/ubicación cuando aplique",
    "ID y siguiente acción de pieza/material",
    "Acceso/documentación sensible cuando aplique",
    "Retiro/destino de residuos cuando corresponda",
    "Incidencia de carga, ruta o servicio cuando ocurra"
  ],
  materialFlow:[
    "Entrada a subzona",
    "Almacenamiento o uso",
    "Movimiento/transferencia",
    "Recuperable",
    "Residuo",
    "Destino"
  ],
  tools:[
    "Racks y almacenamiento según subzona",
    "Estación BIWO / archivo",
    "Medios de manipulación/carga cuando existan",
    "Contenedores de residuos según material real"
  ],
  consumables:[
    "Insumos de limpieza",
    "Material de archivo/identificación",
    "Material de protección/embalaje cuando aplique",
    "Consumibles de comedor/sanitarios según uso real"
  ],
  evidence:[
    {id:"EVID-SUP-01",text:"Panorámica y condición de cada subzona.",placement:"Área"},
    {id:"EVID-SUP-02",text:"Inventario/ubicación cuando aplique.",placement:"Bodegas"},
    {id:"EVID-SUP-03",text:"Condición de privacidad/archivo sin exponer datos sensibles.",placement:"Oficina / BIWO"},
    {id:"EVID-SUP-04",text:"Ruta de circulación y carga/descarga.",placement:"Circulaciones / exterior"},
    {id:"EVID-SUP-05",text:"Separación y almacenamiento temporal de residuos.",placement:"Residuos"}
  ],
  auditCriteria:[],
  implementationHolds:[
    {id:"SUP-HOLD-01",text:"Completar levantamiento físico y fotografías de subzonas."},
    {id:"SUP-HOLD-02",text:"Cerrar inventarios y ubicaciones reales."},
    {id:"SUP-HOLD-03",text:"Verificar rutas y condiciones de circulación/carga."},
    {id:"SUP-HOLD-04",text:"Cerrar privacidad y archivo real de Oficina/BIWO."},
    {id:"SUP-HOLD-05",text:"Levantar residuos reales y destinos."},
    {id:"SUP-HOLD-06",text:"Verificar condiciones de carga/descarga."},
    {id:"SUP-HOLD-07",text:"Cerrar mantenimiento y servicios aplicables."}
  ],
  sourceRefs:[
    "ops/areas/ESPACIOS_SOPORTE_V2.md"
  ]
};
