window.ROCA_FAST_TRACK = {
  statuses:["NOT_CHECKED","PARTIAL","FAILED","VERIFIED","EXTERNAL_DEPENDENCY","APPLICABILITY_PENDING","JUSTIFIED_NA"],
  commonRows:[
    {key:"FLOW",label:"Límite, flujo y circulación",target:"El área tiene límites reconocibles; entrada, salida, espera y transferencia no se mezclan. Pasillos, salidas, tableros y medios de emergencia permanecen libres.",input:"Ancho libre / ruta / puntos de obstrucción"},
    {key:"STATION",label:"Estación, superficies y mobiliario",target:"La estación permite ejecutar la tarea; superficies y mobiliario son estables, utilizables y vuelven a condición lista al cierre.",input:"Dimensiones / capacidad / estabilidad"},
    {key:"STORAGE",label:"Almacenamiento",target:"Cada categoría tiene ubicación reconocible; materiales pesados o inestables quedan asegurados y el acceso no exige desmontar otras categorías.",input:"Capacidad / carga / inventario real"},
    {key:"LIGHT",label:"Iluminación",target:"La iluminación se verifica en el plano real de la tarea cuando calidad o seguridad dependan de ella.",input:"Lux en plano de tarea / instrumento / fecha"},
    {key:"VENT",label:"Ventilación y extracción",target:"La ventilación responde a la operación y exposición real; cuando corresponda, la captura se controla en el punto de generación.",input:"Producto/proceso / HDS / caudal o evaluación aplicable"},
    {key:"SERVICES",label:"Energía, agua, drenaje, aire y servicios",target:"Servicios e instalaciones se usan sin improvisaciones, daño, obstrucción, humedad peligrosa o contaminación cruzada.",input:"Tomas / circuitos / drenaje / aire / agua"},
    {key:"CHEM",label:"Químicos, materiales y HDS",target:"Producto identificado, recipiente secundario identificado cuando corresponda, HDS accesible y almacenamiento compatible con el producto real.",input:"Inventario químico / HDS / compatibilidad"},
    {key:"WASTE",label:"Residuos, recuperables y limpieza",target:"Residuo, sobrante recuperable y material útil se separan; el área cierra limpia y lista sin dispersar contaminantes.",input:"Corrientes / recipientes / destino / frecuencia"},
    {key:"EMERG",label:"Emergencia y señalización",target:"Rutas, salidas, medios de respuesta y señalización aplicables son visibles, accesibles y corresponden a la evaluación vigente.",input:"Riesgo / cantidad / ubicación / distancia / señal"},
    {key:"ASSET",label:"Activos, guardas y mantenimiento",target:"Equipo crítico tiene identidad, condición utilizable, control de fuera de servicio y mantenimiento o inspección proporcional al riesgo.",input:"Activo / placa / manual / frecuencia / último servicio"},
    {key:"TRACE",label:"Identidad y trazabilidad",target:"Toda pieza, piel, forma, componente o trabajo en espera conserva ID y siguiente acción; la trazabilidad no depende de memoria.",input:"ID / BIWO / ubicación / siguiente acción"},
    {key:"PEOPLE",label:"Competencia, EPP y autorización",target:"La operación la ejecuta personal autorizado; el EPP y la competencia corresponden a la tarea y riesgo real.",input:"Persona / tarea / EPP / demostración / autorización"}
  ],
  areas:{
    "area-recepcion":{code:"REC",title:"Recepción",specific:"Zona de ingreso y espera separada; documentos/fotos/etiquetas vinculados a la misma pieza; material húmedo o salado no contamina documentos ni circulación."},
    "area-curtiduria":{code:"CUR",title:"Curtiduría",specific:"Tinas, tambor, rebajado, pH, báscula, drenaje, químicos y baños se organizan para conservar identidad y controlar exposición, derrame y transferencia."},
    "area-fmr":{code:"FMR",title:"Formas, Moldes y Réplicas",specific:"Racks/códigos, pesaje A/B, mezcla/vaciado, moldes, fibra/polvo y materiales reactivos quedan segregados y evidenciables."},
    "area-montaje":{code:"MON",title:"Montaje",specific:"Cada montador tiene estación/almacenamiento recuperable; punzantes, químicos, cables, secado y residuos quedan controlados sin invadir circulación."},
    "area-retoque":{code:"RET",title:"Retoque",specific:"Pintura/solventes, aire comprimido, acabado fino, pedacera y retiro de alfileres se controlan sin contaminación de polvo ni fuentes incompatibles."},
    "area-bases":{code:"BAS",title:"Bases",specific:"Armado, madera, fijaciones, poliuretano/adhesivos, corte, polvo y maniobra de piezas pesadas se realizan con soporte, ruta y almacenamiento definidos."},
    "area-carpinteria":{code:"CAR",title:"Carpintería / Embalaje",specific:"Si se implementa, el puesto se ubica fuera de Retoque, separa polvo y acabado, dispone de banco/rack/ruta de carga y demuestra el método real antes de liberarse."},
    "area-soldadura":{code:"SOL",title:"Soldadura / Adaptación",specific:"Trabajo en caliente se realiza con combustibles fuera de proyección, protección a terceros, ventilación, equipo/cables aptos y medio de respuesta aplicable."},
    "area-blanqueado":{code:"BLA",title:"Blanqueado",specific:"Recipiente/fuente de calor estables, cuernos protegidos de zona térmica, ruta de agua caliente controlada, ventilación y drenaje definidos."},
    "area-soporte":{code:"SUP",title:"Espacios de soporte",specific:"Bodegas, oficina/BIWO, exhibición, comedor, sanitarios, circulaciones, exterior/carga y residuos se verifican como subzonas separadas con evidencia propia."}
  }
};