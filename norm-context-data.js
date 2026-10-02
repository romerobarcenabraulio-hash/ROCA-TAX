window.ROCA_NORM_CONTEXT = {
  version:"2026-10-02.1",
  checkedOn:"2026-10-02",
  note:"Panel de contexto para AUDITORÍA. Un numeral sólo se muestra como verificado cuando fue contrastado contra texto oficial. Las referencias pendientes nunca se inventan.",
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
