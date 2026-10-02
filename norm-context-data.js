window.ROCA_NORM_CONTEXT = {
  version:"2026-10-02.2",
  checkedOn:"2026-10-02",
  note:"Panel de contexto para AUDITORÍA. Un numeral sólo se muestra como verificado cuando fue contrastado contra texto oficial. Las referencias pendientes nunca se inventan.",
  areaToReqIds:{
    "area-recepcion":["STPS-001","STPS-002","STPS-025","STPS-026","STPS-030"],
    "area-curtiduria":["STPS-001","STPS-002","STPS-005","STPS-010","STPS-015","STPS-017","STPS-018","STPS-020","STPS-025","STPS-026","STPS-030","SEM-052","SEM-WW","SLP-ENV-WW-2026","SLP-ENV-RINP","SLP-ENV-RME"],
    "area-fmr":["STPS-001","STPS-002","STPS-004","STPS-005","STPS-010","STPS-017","STPS-018","STPS-025","STPS-026","STPS-030"],
    "area-montaje":["STPS-001","STPS-002","STPS-005","STPS-017","STPS-018","STPS-025","STPS-026","STPS-030","STPS-036"],
    "area-retoque":["STPS-001","STPS-002","STPS-005","STPS-010","STPS-011","STPS-017","STPS-018","STPS-020","STPS-025","STPS-026","STPS-030"],
    "area-bases":["STPS-001","STPS-002","STPS-004","STPS-005","STPS-009","STPS-011","STPS-017","STPS-018","STPS-025","STPS-026","STPS-030","STPS-036"],
    "area-carpinteria":["STPS-001","STPS-002","STPS-004","STPS-006","STPS-009","STPS-011","STPS-017","STPS-025","STPS-026","STPS-030","STPS-036"],
    "area-soldadura":["STPS-001","STPS-002","STPS-004","STPS-005","STPS-009","STPS-010","STPS-011","STPS-017","STPS-018","STPS-022","STPS-025","STPS-026","STPS-027","STPS-029","STPS-030"],
    "area-blanqueado":["STPS-001","STPS-002","STPS-005","STPS-010","STPS-015","STPS-017","STPS-018","STPS-025","STPS-026","STPS-030","SEM-WW","SLP-ENV-WW-2026"],
    "area-soporte":["STPS-001","STPS-002","STPS-019","STPS-025","STPS-026","STPS-030","STPS-035","STPS-034"]
  },
  physicalToReqIds:{
    "PHYS-FLOW":["STPS-001"],
    "PHYS-EGRESS":["STPS-002"],
    "PHYS-FIRE":["STPS-002"],
    "PHYS-SIGN":["STPS-026"],
    "PHYS-LIGHT":["STPS-025"],
    "PHYS-STATION":["STPS-001"],
    "PHYS-STORAGE":["STPS-006"],
    "PHYS-ELECTRIC":["STPS-029"],
    "PHYS-CHEM":["STPS-005","STPS-018"],
    "PHYS-VENT":["STPS-010"],
    "PHYS-MACHINE":["STPS-004"],
    "PHYS-NOISE":["STPS-011"],
    "PHYS-MANUALLOAD":["STPS-036"],
    "PHYS-PRESSURE":["STPS-020"],
    "PHYS-WASTE":["SEM-052"],
    "PHYS-WASTEWATER":["SEM-WW","SLP-ENV-WW-2026"],
    "PHYS-SUPPORT":["STPS-001","RFSST-2014"]
  },
  byReq:{
    "STPS-001":{
      mode:"INSPECCIONAR + DOCUMENTAR",
      citation:"5.2-5.5 · 7.1.1-7.1.6 · 7.4",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Comprobar que edificio, circulaciones, servicios y superficies se conservan en condición segura y que las revisiones del centro se documentan.",
      capture:"Área; condición insegura observada; orden/limpieza; delimitación; piso/cambio de nivel; servicios sanitarios/comedor; fecha y resultado de revisión ocular.",
      calculation:"No usa una fórmula general. Verificar revisión ocular al menos cada 12 meses y después de eventos que puedan dañar instalaciones; registrar hallazgo y reparación. Cuando se midan elementos concretos, usar las dimensiones del capítulo 7 aplicables.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-001.pdf"
    },
    "STPS-004":{
      mode:"ANALIZAR RIESGO DE MAQUINARIA + INSPECCIONAR",
      citation:"5.2-5.4 · 7.1-7.2",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Evitar que partes móviles, superficies cortantes, proyecciones, calor, electricidad estática o herramienta generen lesión.",
      capture:"Activo; punto de operación/transmisión; partes móviles; superficies cortantes; proyección/calor; herramienta; guarda/dispositivo; tipo de daño; gravedad; probabilidad; mantenimiento.",
      calculation:"No impone una fórmula numérica única. Construir el estudio de riesgo por maquinaria: peligro → tipo de daño → gravedad → probabilidad; de ahí derivar programa específico, guardas/dispositivos, mantenimiento y capacitación.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-004.pdf"
    },
    "STPS-005":{
      mode:"ANALIZAR RIESGO QUÍMICO + CONTROLAR MANEJO/ALMACENAMIENTO",
      citation:"5.2-5.9 · 7.1",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Definir controles reales para manejo, transporte y almacenamiento de sustancias químicas peligrosas, incluyendo respuesta a emergencias.",
      capture:"Producto real; proceso/tarea; cantidad máxima; propiedades/peligros; HDS; recipiente; almacenamiento; incompatibilidades; personal expuesto; regadera/lavaojos/neutralizador cuando el estudio lo justifique; EPP.",
      calculation:"No hay fórmula general. Mantener estudio de riesgos actualizado cuando cambien procesos o sustancias y derivar de ese estudio procedimientos, medios de emergencia, EPP y medidas de almacenamiento.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-005.pdf"
    },
    "STPS-006":{
      mode:"VERIFICAR APLICABILIDAD + PROCEDIMIENTOS DE MAQUINARIA",
      citation:"2 · 7.1-7.4 · 8 · 9",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Controlar almacenamiento y manejo de materiales cuando se usa maquinaria, con procedimientos de instalación, operación, revisión y mantenimiento.",
      capture:"Tipo de maquinaria de manejo; material/carga; placa/capacidad; fabricante; procedimiento; revisión/mantenimiento; zona; estabilidad/anclaje; líneas eléctricas cercanas; operador autorizado.",
      calculation:"Primero confirmar que el manejo se realiza mediante maquinaria. No hay fórmula única; comparar capacidad/carga y, si existen líneas energizadas, aplicar las distancias mínimas de Tabla 1. Registrar programa de revisión y mantenimiento.",
      source:"https://asinom.stps.gob.mx/upload/nom/52.pdf"
    },
    "STPS-017":{
      mode:"ANALIZAR RIESGO POR PUESTO + SELECCIONAR EPP",
      citation:"5.1-5.7 · 7 · Apéndice I no normativo",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Seleccionar EPP a partir del riesgo real de cada puesto y área, no por costumbre ni catálogo.",
      capture:"Puesto/área; actividad; riesgo físico/mecánico/químico/biológico u otro; región corporal expuesta; EPP existente; talla; compatibilidad; instrucciones del fabricante; reposición/limpieza/resguardo.",
      calculation:"No usa fórmula general. La salida es una matriz puesto/tarea → riesgo → región corporal → EPP requerido y sus condiciones de uso, revisión, reposición, limpieza, mantenimiento, resguardo y disposición final.",
      source:"https://asinom.stps.gob.mx/Centro/CentroMarcoNormativo.aspx"
    },
    "STPS-018":{
      mode:"INVENTARIAR + CLASIFICAR + COMUNICAR PELIGROS",
      citation:"6.1-6.7 · 8.1-8.2 · 9 · 10",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Asegurar que cada sustancia/mezcla peligrosa tenga HDS, identificación y señalización coherentes y disponibles donde se usa.",
      capture:"Nombre de sustancia/mezcla; CAS; clasificación de peligros físicos/salud; HDS; etiqueta/señal; depósito/recipiente/anaquel/área; personal que la maneja; evidencia de capacitación.",
      calculation:"No usa una fórmula única. Mantener listado actualizado + HDS + señalización/etiquetado + capacitación. Actualizar cuando se sustituyan/adicionen sustancias o cambie la información de peligros.",
      source:"https://asinom.stps.gob.mx/upload/nom/50.pdf"
    },
    "STPS-019":{
      mode:"CONSTITUIR COMISIÓN + PROGRAMAR RECORRIDOS + DOCUMENTAR",
      citation:"7-10 · 8.2-8.4",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Mantener una comisión de seguridad e higiene que identifique condiciones/actos inseguros, proponga medidas y dé seguimiento.",
      capture:"Acta de constitución; integrantes/roles; programa anual de recorridos; actas; hallazgos; investigaciones; medidas propuestas; seguimiento; capacitación de integrantes.",
      calculation:"No usa fórmula. El control es documental y de ejecución: recorrido programado → hallazgo → medida → responsable/seguimiento → acta y custodia documental.",
      source:"https://asinom.stps.gob.mx/upload/nom/34.pdf"
    },
    "STPS-022":{
      mode:"CONTROLAR ELECTRICIDAD ESTÁTICA + MEDIR PUESTA A TIERRA",
      citation:"7.2 · 9.1-9.5",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Evitar acumulaciones/descargas electrostáticas peligrosas y verificar la eficacia de la puesta a tierra cuando el riesgo se active.",
      capture:"Proceso/material; humedad/temperatura; equipo/material constructivo; controles de estática; red de tierra; instrumento/calibración; mediciones de resistencia.",
      calculation:"Aplicar el método de medición del capítulo 9. Verificar resistencia ≤10 ohms para electrodos de pararrayos y ≤25 ohms para la red de puesta a tierra; conservar registro de medición.",
      source:"https://asinom.stps.gob.mx/upload/nom/46.pdf"
    },
    "STPS-029":{
      mode:"CONTROLAR MANTENIMIENTO ELÉCTRICO + DOCUMENTAR",
      citation:"5.2-5.4 · 7-9",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Evitar choques, arco eléctrico y energización inesperada durante mantenimiento de instalaciones eléctricas.",
      capture:"Instalación/actividad; plan de trabajo; diagrama unifilar y cargas; personal capacitado/autorizado; procedimiento; desenergización/bloqueo/puesta a tierra temporal; herramientas/EPP aislante; revisión de equipo.",
      calculation:"No hay fórmula general. Verificar que exista plan/procedimiento secuencial, controles de energía y autorización. Registrar revisión/conservación del equipo aislante con fechas, responsable y resultado.",
      source:"https://asinom.stps.gob.mx/upload/nom/NOM-029.pdf"
    },
    "STPS-009":{
      mode:"DETERMINAR TRABAJO EN ALTURA + AUTORIZAR/CONTROLAR",
      citation:"4.33 · 5.1-5.4 · 7-16",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Prevenir caídas cuando se realizan tareas a más de 1.80 m sobre el nivel de referencia o en condiciones equivalentes definidas por la norma.",
      capture:"Tarea; altura; superficie/acceso; sistema/equipo usado; manual del fabricante; análisis previo de condiciones; autorización escrita cuando aplique; protección contra caídas; rescate/emergencia.",
      calculation:"No usa fórmula general. Si la tarea entra en la definición de trabajo en altura, realizar análisis previo y aplicar el capítulo específico del sistema usado; autorización escrita para los supuestos de 5.3.",
      source:"https://asinom.stps.gob.mx/upload/nom/35.pdf"
    },
    "STPS-030":{
      mode:"DIAGNOSTICAR + PROGRAMAR + DAR SEGUIMIENTO",
      citation:"4.1-4.8 · 5.1-5.7 · 6",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Convertir los riesgos/condiciones detectadas en diagnóstico, acciones preventivas/correctivas y seguimiento documentado.",
      capture:"Responsable SST; diagnóstico integral o por área; peligros/exposición; acciones; prioridad; fecha/responsable; avance; reporte anual; comunicación a trabajadores/comisión.",
      calculation:"No usa fórmula obligatoria. El sistema es: diagnóstico → programa o relación de acciones → prioridad por riesgo → seguimiento → reporte. En centros con menos de 100 trabajadores puede manejarse relación de acciones preventivas/correctivas.",
      source:"https://asinom.stps.gob.mx/upload/nom/32.pdf"
    },
    "STPS-028":{
      mode:"CUANTIFICAR SUSTANCIAS + DECIDIR UMBRAL + ADMINISTRAR PROCESO",
      citation:"2.1-2.3 · 4.8 · 5.2-5.14 · Apéndice A",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar si existen procesos/equipos críticos con sustancias químicas peligrosas en cantidades que activen el sistema de administración de seguridad de procesos.",
      capture:"Sustancia/CAS; cantidad presente; capacidad instalada de almacenamiento/proceso; equipo/proceso; ubicación; cantidad umbral del Apéndice A; cambios; integridad mecánica; trabajos peligrosos.",
      calculation:"Comparar por sustancia la capacidad instalada y/o cantidad presente contra la cantidad umbral del Apéndice A. Si es igual o mayor, activar los elementos de administración de seguridad; si es menor y no se activa otro supuesto, documentar la exclusión.",
      source:"https://asinom.stps.gob.mx/upload/nom/NOM-028-STPS-2012.pdf"
    },
    "STPS-035":{
      mode:"CLASIFICAR POR PLANTILLA + APLICAR BLOQUE CORRESPONDIENTE",
      citation:"5.2-5.8 · 7.1-7.5",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Aplicar las obligaciones de factores de riesgo psicosocial según el número de trabajadores del centro.",
      capture:"Número real de trabajadores del centro; política; acontecimientos traumáticos severos; mecanismos de queja; resultados/medidas/registros cuando el bloque de plantilla lo active.",
      calculation:"Primero clasificar plantilla: hasta 15; 16-50; más de 50. De 16 a 50 se identifica y analiza riesgo psicosocial para todos; con más de 50 también se evalúa entorno organizacional. No inventar cuestionarios propios cuando se usen las guías de referencia.",
      source:"https://asinom.stps.gob.mx/upload/nom/48.pdf"
    },
    "STPS-034":{
      mode:"ANALIZAR COMPATIBILIDAD + VERIFICAR ACCESIBILIDAD",
      citation:"7.1-7.3 · 8.1-8.2",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Asegurar que, cuando existan trabajadores con discapacidad, puesto, demanda y entorno sean compatibles y accesibles.",
      capture:"Características funcionales relevantes para el trabajo; descripción/demanda del puesto; riesgos; iluminación/señalización; rutas/pasillos/accesos; adecuaciones requeridas.",
      calculation:"No hay fórmula general. Documentar análisis persona-puesto-entorno y controles. Para medios de circulación aplicables, verificar ancho ≥120 cm y ausencia/control de bordes/desniveles y obstáculos según 8.2.",
      source:"https://asinom.stps.gob.mx/upload/nom/47.pdf"
    },
    "STPS-026":{
      mode:"INSPECCIONAR SEÑALIZACIÓN + VERIFICAR CÓDIGO",
      citation:"7.1-7.2 · 8 · 9",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Asegurar que colores, señales e identificación de tuberías comuniquen correctamente prohibición, obligación, advertencia, condición segura e incendio.",
      capture:"Señal/ubicación; riesgo/acción comunicada; color de seguridad; color contrastante; forma/símbolo; visibilidad; tubería/fluido/dirección cuando aplique.",
      calculation:"No hay fórmula general. Comparar uso de colores con Tabla 1, contraste con Tabla 2 y, para tuberías, aplicar capítulo 9 y dimensiones/identificación que correspondan.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-026.pdf"
    },
    "STPS-027":{
      mode:"ANALIZAR RIESGO DE SOLDADURA/CORTE + CONTROLAR TRABAJO",
      citation:"5.2 · 7 · 8",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Controlar riesgos de soldadura/corte por proceso, equipo, gases, humos, radiación, incendio, electricidad y condiciones del área.",
      capture:"Proceso/área; equipo; material base/aporte; gases combustibles; condiciones peligrosas; agentes físicos/químicos; tiempo de exposición; EPP; ventilación/extracción; combustibles cercanos; rescate cuando aplique.",
      calculation:"No usa fórmula única. Construir análisis de riesgos por proceso y área, identificar exposición/daño y definir controles al trabajador, al área y para emergencias conforme a capítulos 7 y 8.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-027.pdf"
    },
    "SEM-WW":{
      mode:"MUESTREAR + COMPARAR LÍMITES DE DESCARGA",
      citation:"1 · 4.1-4.4 · 4.14 · Tabla 1",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar si una descarga de proceso al alcantarillado urbano/municipal cumple los límites aplicables y cuenta con respaldo analítico.",
      capture:"Punto de descarga; proceso origen; caudal; muestras simples/compuestas; laboratorio/método; grasas y aceites; sólidos sedimentables; metales/cianuro cuando correspondan; pH; temperatura; permiso/condiciones locales.",
      calculation:"Comparar resultados con Tabla 1: promedio mensual/diario/instantáneo según parámetro. Verificar pH entre 5.5 y 10 y temperatura instantánea ≤40 °C, salvo condición autorizada. Conservar análisis técnicos y registros; integrar además condiciones particulares/locales que resulten más estrictas.",
      source:"https://biblioteca.semarnat.gob.mx/janium/Documentos/Ciga/agenda/DOFsr/Ecolok.pdf"
    },
    "STPS-002":{
      mode:"CALCULAR + MEDIR + DOCUMENTAR",
      citation:"Apéndice A (A.1, Tabla A.1) · 7.15(d) · 7.17(a-d)",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Clasificar el riesgo de incendio y comprobar que rutas, salidas y extintores corresponden al riesgo real.",
      capture:"Superficie construida; inventario máximo anual de gases/líquidos inflamables/líquidos combustibles/sólidos combustibles/pirofóricos-explosivos; clase de fuego; recorrido real; salida/ruta.",
      calculation:"Clasificación ordinario/alto con Apéndice A. Extintores: mínimo por superficie según riesgo (1/300 m² ordinario; 1/200 m² alto) y comprobación de distancia máxima de recorrido de Tabla 1. Ruta: punto más alejado ≤40 m o, si excede, tiempo de evacuación ≤3 min.",
      source:"https://www.dof.gob.mx/nota_detalle_popup.php?codigo=5170410"
    },
    "STPS-010":{
      mode:"MEDIR EN CAMPO/LAB + CALCULAR DESPUÉS",
      citation:"Capítulos 8-10 · 10.4.1(f-h) · 10.4.2",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar exposición real a agentes químicos del ambiente laboral y compararla con los valores límite aplicables.",
      capture:"Sustancia/mezcla real, HDS, fuente emisora, puesto/tarea, duración, jornada, sistema de extracción, concentración medida (CMA) y método de muestreo.",
      calculation:"Corrección de VLE por jornada cuando aplique; relaciones CMA/VLE para efectos aditivos o independientes; VLE de mezcla; límite superior de confianza. No calcular exposición sin medición válida.",
      source:"https://sidof.segob.gob.mx/notas/docFuente/5342372"
    },
    "STPS-011":{
      mode:"MEDIR + CALCULAR EXPOSICIÓN",
      citation:"Capítulo 7 · Apéndice A · Apéndice B",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Relacionar nivel sonoro con tiempo de exposición y determinar NER/TMPE o dosis, no juzgar ruido por percepción.",
      capture:"Puesto/tarea, condición normal, duración, NSA/NSCE o dosimetría, instrumento y calibración.",
      calculation:"Determinar exposición conforme a los límites y métodos de los Apéndices A/B. La lectura casual de dB no cierra la NOM.",
      source:"https://www.dof.gob.mx/nota_detalle_popup.php?codigo=734536"
    },
    "STPS-015":{
      mode:"MEDIR + CALCULAR ÍNDICE TÉRMICO",
      citation:"9.4.1 · 9.4.2 · 10.4",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar exposición a condiciones térmicas elevadas o abatidas cuando exista una fuente capaz de activar la norma.",
      capture:"Tarea, duración, punto de exposición y temperaturas requeridas por el método; velocidad de aire cuando corresponda.",
      calculation:"ITGBH interior/sin sol = 0.7 t_bhn + 0.3 t_g. Exterior con sol = 0.7 t_bhn + 0.2 t_g + 0.1 t_s. Promedio corporal según 9.4.2. Para frío, correlacionar temperatura/velocidad y promediar índice de viento frío.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-015.pdf"
    },
    "STPS-020":{
      mode:"CLASIFICAR EQUIPO + VERIFICAR RELACIONES",
      citation:"7.1.1 · 8.1 · 12.2.1 · 14.2",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar si el compresor/recipiente cae en categoría I, II o III y qué expediente/controles exige.",
      capture:"Fluido; presión de calibración del dispositivo de relevo; volumen; presión de operación; presión máxima de trabajo; placa/serie; dispositivos e instrumento de presión.",
      calculation:"Clasificación por presión de calibración + volumen + tipo de fluido según Tabla 1. Para categorías II/III, comprobar que el rango del manómetro sea 1.5 a 4 veces la presión de operación (o segundo tercio de escala) y que presión de calibración ≤ presión máxima de trabajo y > presión de operación.",
      source:"https://sidof.segob.gob.mx/notas/docFuente/5229908"
    },
    "STPS-024":{
      mode:"MEDIR VIBRACIÓN + COMPARAR TIEMPO",
      citation:"Capítulo 7, especialmente 7.1 para cuerpo entero",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Relacionar aceleración/frecuencia con tiempo real de exposición cuando exista vibración relevante.",
      capture:"Equipo/herramienta, eje o tipo de exposición, frecuencia, aceleración y duración diaria.",
      calculation:"Comparar frecuencia y aceleración con las tablas/curvas de tiempo permisible; no cerrar por sensación subjetiva.",
      source:"https://asinom.stps.gob.mx/upload/noms/Nom-024.pdf"
    },
    "STPS-025":{
      mode:"MEDIR LUX + COMPARAR",
      citation:"5.2-5.7 · 7 Tabla 1 · 8-9 · 12",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Comprobar iluminación en el plano real de trabajo según la tarea visual.",
      capture:"Tarea visual; plano exacto; lectura lux; ubicación; hora; instrumento; calibración/identificación y condición normal de operación.",
      calculation:"Seleccionar el nivel mínimo de la Tabla 1 por tarea/área y comparar contra la lectura en el plano de trabajo. El reporte debe conservar puntos, resultados e interpretación.",
      source:"https://asinom.stps.gob.mx/UPLOAD/NOMS/NOM-025.PDF"
    },
    "STPS-033":{
      mode:"MEDIR ATMÓSFERA + CLASIFICAR",
      citation:"4.2 · 7.4-7.5",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar si un espacio candidato realmente es confinado y si presenta atmósfera peligrosa antes de cualquier ingreso.",
      capture:"Geometría/acceso, tarea, O2, gases/vapores inflamables, sustancias químicas, método/instrumento y rescate.",
      calculation:"Comparar O2 con 19.5%-23.5% v/v; inflamables con 10% del LII; químicos con nivel de acción/VLE aplicable. Requiere análisis de riesgos por espacio y por trabajo.",
      source:"https://sidof.segob.gob.mx/notas/docFuente/5405659"
    },
    "STPS-036":{
      mode:"PUNTUAR RIESGO ERGONÓMICO",
      citation:"7.2-7.3 · Apéndice I · Apéndice II",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Evaluar manejo manual de cargas por tarea real, no sólo por peso nominal.",
      capture:"Actividad, trabajadores, frecuencia, duración, masa, distancias, postura, agarre, trayectoria y ayuda/equipo.",
      calculation:"Aplicar Apéndice I para levantar/bajar/transportar o Apéndice II para empujar/jalar. En la estimación por puntuación: 0-4 bajo; 5-12 medio; 13-20 alto; 21-32 muy alto. Evaluación específica cuando la rápida no resuelve el riesgo.",
      source:"https://sidof.segob.gob.mx/notas/docFuente/5544579"
    },
    "SEM-052":{
      mode:"CLASIFICAR RESIDUO; LAB CUANDO CORRESPONDA",
      citation:"Capítulo 6 · Capítulo 7",
      citationStatus:"VERIFIED_OFFICIAL_TEXT",
      why:"Determinar si una corriente es residuo peligroso antes de etiquetarla, almacenarla o destinarla como tal.",
      capture:"Proceso que genera la corriente, producto/material, composición conocida, HDS, listado aplicable, cantidad y evidencia analítica si se requiere.",
      calculation:"No hay una fórmula única. Aplicar procedimiento/listados y características CRETIB; pruebas de laboratorio cuando el procedimiento lo requiera.",
      source:"https://dof.gob.mx/nota_detalle_popup.php?codigo=4912592"
    },
    "SLP-ENV-RME":{
      mode:"CUANTIFICAR ANUAL + DECIDIR APLICABILIDAD",
      citation:"NOM-161-SEMARNAT-2011 + ruta SEGAM vigente",
      citationStatus:"SOURCE_ROUTE_VERIFIED_CLAUSE_PENDING",
      why:"Determinar categoría y si una corriente activa registro/plan de manejo estatal.",
      capture:"Corriente, categoría, cantidad por periodo, soporte de estimación anual, almacenamiento y destino.",
      calculation:"Sumar generación anual por corriente/categoría y resolver el supuesto aplicable antes de preparar el plan.",
      source:"https://segam.slp.gob.mx/residuos/"
    }
  }
};
