window.ROCA_SOURCE_DOCS = [
  {
    id: "master-391",
    group: "Masters y versiones",
    title: "ROCA_MASTER_WEB_391P_SOURCE.pdf",
    label: "Master web · fuente 391P",
    kind: "drive",
    driveId: "1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO",
    webUrl: "https://drive.google.com/file/d/1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO/view",
    modified: "2026-09-24",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    note: "Fuente historica de consulta para rescate. No se considera autoridad global por si sola.",
    related: [
      {
        sectionId: "area-recepcion",
        label: "Recepción",
        areaId: "AREA-REC",
        controlIds: ["REQ-COM-01..15","REC-AREA-01..08"],
        evidenceIds: ["EVID-REC-01"],
        action: "MERGE_WITHOUT_LOSS",
        page: 38,
        pageEnd: 47,
        locator: "PDF físico pp. 38-47 · módulo REC",
        proof: "Módulo REC comienza en p. 38; p. 48 ya es portada CUR.",
        subLocators: [
          { id:"REC-GOV", label:"Gobernanza local", page:40, pageEnd:40, action:"CORRECT" },
          { id:"REC-AREA", label:"Área de trabajo y estación", page:41, pageEnd:43, action:"MERGE_WITHOUT_LOSS", controlIds:["REC-AREA-01..08"] },
          { id:"EVID-REC-01", label:"Evidencia fotográfica", page:44, pageEnd:44, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-REC-01"] },
          { id:"REC-METHOD", label:"Metodología por completar", page:45, pageEnd:45, action:"HOLD_PENDING_EVIDENCE" },
          { id:"REC-VERIFY-AREA", label:"Verificación del área", page:46, pageEnd:47, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-curtiduria",
        label: "Curtiduría",
        areaId: "AREA-CUR",
        controlIds: ["REQ-COM-01..15","CUR-AREA-01..09"],
        evidenceIds: ["EVID-CUR-01","EVID-CUR-02","EVID-CUR-03"],
        action: "MERGE_WITHOUT_LOSS",
        page: 48,
        pageEnd: 85,
        locator: "PDF físico pp. 48-85 · módulo CUR",
        proof: "Módulo CUR comienza en p. 48; verificación de metodología termina en p. 85; p. 86 ya es portada FMR.",
        subLocators: [
          { id:"CUR-GOV", label:"Gobernanza local", page:50, pageEnd:50, action:"CORRECT" },
          { id:"CUR-AREA", label:"Área de trabajo y estaciones", page:51, pageEnd:54, action:"MERGE_WITHOUT_LOSS", controlIds:["CUR-AREA-01..09"] },
          { id:"EVID-CUR", label:"Evidencia fotográfica", page:55, pageEnd:55, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-CUR-01","EVID-CUR-02","EVID-CUR-03"] },
          { id:"CUR-VERIFY-AREA", label:"Verificación del área", page:56, pageEnd:59, action:"PRESERVE" },
          { id:"CUR-METHOD", label:"Metodología y receta", page:60, pageEnd:83, action:"MERGE_WITHOUT_LOSS" },
          { id:"CUR-TOOLS", label:"Herramientas, equipo y consumibles", page:79, pageEnd:83, action:"PRESERVE" },
          { id:"CUR-VERIFY-METHOD", label:"Verificación de metodología", page:84, pageEnd:85, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-fmr",
        label: "Formas, Moldes y Réplicas",
        areaId: "AREA-FMR",
        controlIds: ["REQ-COM-01..15","FMR-AREA-01..09"],
        evidenceIds: ["EVID-FMR-02"],
        action: "MERGE_WITHOUT_LOSS",
        page: 86,
        pageEnd: 128,
        locator: "PDF físico pp. 86-128 · módulo FMR",
        proof: "Módulo FMR comienza en p. 86; verificación de metodología llega a p. 128; p. 129 ya es portada MON.",
        subLocators: [
          { id:"FMR-GOV", label:"Gobernanza local", page:88, pageEnd:88, action:"PRESERVE" },
          { id:"FMR-AREA", label:"Área de trabajo y estación", page:89, pageEnd:91, action:"MERGE_WITHOUT_LOSS", controlIds:["FMR-AREA-01..09"] },
          { id:"EVID-FMR", label:"Evidencia fotográfica", page:92, pageEnd:92, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-FMR-02"] },
          { id:"FMR-VERIFY-AREA", label:"Verificación del área", page:93, pageEnd:95, action:"PRESERVE" },
          { id:"FMR-METHOD", label:"Metodología", page:96, pageEnd:125, action:"MERGE_WITHOUT_LOSS" },
          { id:"FMR-TOOLS", label:"Herramientas, equipo y consumibles", page:106, pageEnd:125, action:"PRESERVE" },
          { id:"FMR-VERIFY-METHOD", label:"Verificación de metodología", page:126, pageEnd:128, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-montaje",
        label: "Montaje",
        areaId: "AREA-MON",
        controlIds: ["REQ-COM-01..15","MON-AREA-01..10"],
        evidenceIds: ["EVID-MON-01","EVID-MON-02"],
        action: "MERGE_WITHOUT_LOSS",
        page: 129,
        pageEnd: 158,
        locator: "PDF físico pp. 129-158 · módulo MON",
        proof: "Módulo MON comienza en p. 129 y termina con verificación de metodología en p. 158; p. 159 ya es portada RET.",
        subLocators: [
          { id:"MON-GOV", label:"Gobernanza local", page:131, pageEnd:131, action:"CORRECT" },
          { id:"MON-AREA", label:"Área de trabajo y estaciones", page:132, pageEnd:139, action:"MERGE_WITHOUT_LOSS", controlIds:["MON-AREA-01..10"] },
          { id:"EVID-MON", label:"Evidencia fotográfica", page:140, pageEnd:140, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-MON-01","EVID-MON-02"] },
          { id:"MON-VERIFY-AREA", label:"Verificación del área", page:141, pageEnd:143, action:"PRESERVE" },
          { id:"MON-METHOD", label:"Metodología", page:144, pageEnd:156, action:"MERGE_WITHOUT_LOSS" },
          { id:"MON-TOOLS", label:"Herramientas y consumibles", page:152, pageEnd:156, action:"PRESERVE" },
          { id:"MON-VERIFY-METHOD", label:"Verificación de metodología", page:157, pageEnd:158, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-retoque",
        label: "Retoque",
        areaId: "AREA-RET",
        controlIds: ["REQ-COM-01..15","RET-AREA-01..06"],
        evidenceIds: ["EVID-RET-01","EVID-RET-02"],
        action: "MERGE_WITHOUT_LOSS",
        page: 159,
        pageEnd: 182,
        locator: "PDF físico pp. 159-182 · módulo RET",
        proof: "Módulo RET comienza en p. 159 y termina con verificación de metodología en p. 182; p. 183 ya es portada BAS.",
        subLocators: [
          { id:"RET-GOV", label:"Gobernanza local", page:161, pageEnd:161, action:"CORRECT" },
          { id:"RET-AREA", label:"Área de trabajo y estación", page:162, pageEnd:164, action:"MERGE_WITHOUT_LOSS", controlIds:["RET-AREA-01..06"] },
          { id:"EVID-RET", label:"Evidencia fotográfica", page:165, pageEnd:165, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-RET-01","EVID-RET-02"] },
          { id:"RET-VERIFY-AREA", label:"Verificación del área", page:166, pageEnd:168, action:"PRESERVE" },
          { id:"RET-METHOD", label:"Metodología", page:169, pageEnd:181, action:"MERGE_WITHOUT_LOSS" },
          { id:"RET-TOOLS", label:"Herramientas, equipo y consumibles", page:176, pageEnd:181, action:"PRESERVE" },
          { id:"RET-VERIFY-METHOD", label:"Verificación de metodología", page:182, pageEnd:182, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-bases",
        label: "Bases",
        areaId: "AREA-BAS",
        controlIds: ["REQ-COM-01..15","BAS-AREA-01..05"],
        evidenceIds: ["EVID-BAS-01"],
        action: "MERGE_WITHOUT_LOSS",
        page: 183,
        pageEnd: 207,
        locator: "PDF físico pp. 183-207 · módulo BAS",
        proof: "Módulo BAS comienza en p. 183 y termina con verificación de metodología en p. 207; p. 208 ya es portada CAR.",
        subLocators: [
          { id:"BAS-GOV", label:"Gobernanza local", page:185, pageEnd:185, action:"CORRECT" },
          { id:"BAS-AREA", label:"Área de trabajo y estaciones", page:186, pageEnd:189, action:"MERGE_WITHOUT_LOSS" },
          { id:"EVID-BAS-01", label:"Evidencia fotográfica", page:190, pageEnd:190, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-BAS-01"] },
          { id:"BAS-VERIFY-AREA", label:"Verificación del área", page:191, pageEnd:193, action:"PRESERVE" },
          { id:"BAS-METHOD", label:"Metodología", page:194, pageEnd:206, action:"MERGE_WITHOUT_LOSS" },
          { id:"BAS-TOOLS", label:"Herramientas, equipo y consumibles", page:198, pageEnd:206, action:"PRESERVE" },
          { id:"BAS-VERIFY-METHOD", label:"Verificación de metodología", page:207, pageEnd:207, action:"PRESERVE" }
        ]
      },
      {
        sectionId: "area-carpinteria",
        label: "Carpintería, Corte y Embalaje",
        areaId: "AREA-CAR",
        controlIds: ["REQ-COM-01..15"],
        evidenceIds: ["EVID-CAR-01"],
        action: "HOLD_PENDING_EVIDENCE",
        page: 208,
        pageEnd: 221,
        locator: "PDF físico pp. 208-221 · módulo CAR",
        proof: "Módulo CAR comienza en p. 208; metodología sigue no liberada; p. 222 ya es portada SOL.",
        subLocators: [
          { id:"CAR-GOV", label:"Gobernanza local", page:210, pageEnd:210, action:"HOLD_PENDING_EVIDENCE" },
          { id:"CAR-AREA", label:"Área de trabajo y estación", page:211, pageEnd:213, action:"PRESERVE" },
          { id:"EVID-CAR-01", label:"Evidencia fotográfica", page:214, pageEnd:214, action:"HOLD_PENDING_EVIDENCE", evidenceIds:["EVID-CAR-01"] },
          { id:"CAR-VERIFY-AREA", label:"Verificación del área", page:215, pageEnd:218, action:"PRESERVE" },
          { id:"CAR-METHOD", label:"Método no liberado", page:219, pageEnd:221, action:"HOLD_PENDING_EVIDENCE" }
        ]
      },
      {
        sectionId: "area-soldadura",
        label: "Soldadura / Adaptación",
        areaId: "AREA-SOL",
        controlIds: ["REQ-COM-01..15","SOL-AREA-01..05"],
        evidenceIds: ["EVID-SOL-01"],
        action: "HOLD_PENDING_EVIDENCE",
        page: 222,
        pageEnd: 235,
        locator: "PDF físico pp. 222-235 · módulo SOL",
        proof: "Módulo SOL comienza en p. 222; método sigue no liberado; p. 236 ya es portada BLA.",
        subLocators: [
          { id:"SOL-GOV", label:"Gobernanza local", page:224, pageEnd:224, action:"PRESERVE" },
          { id:"SOL-AREA", label:"Área de trabajo y estación", page:225, pageEnd:227, action:"MERGE_WITHOUT_LOSS" },
          { id:"EVID-SOL-01", label:"Evidencia fotográfica", page:228, pageEnd:228, action:"HOLD_PENDING_EVIDENCE", evidenceIds:["EVID-SOL-01"] },
          { id:"SOL-VERIFY-AREA", label:"Verificación del área", page:229, pageEnd:231, action:"PRESERVE" },
          { id:"SOL-METHOD", label:"Método no liberado", page:232, pageEnd:235, action:"HOLD_PENDING_EVIDENCE" },
          { id:"SOL-TOOLS", label:"Equipo / catálogo preparado", page:233, pageEnd:234, action:"HOLD_PENDING_EVIDENCE" }
        ]
      },
      {
        sectionId: "area-blanqueado",
        label: "Blanqueado",
        areaId: "AREA-BLA",
        controlIds: ["REQ-COM-01..15","BLA-AREA-01..05"],
        evidenceIds: ["EVID-BLA-01"],
        action: "MERGE_WITHOUT_LOSS",
        page: 236,
        pageEnd: 250,
        locator: "PDF físico pp. 236-250 · módulo BLA",
        proof: "Módulo BLA comienza en p. 236 y termina con verificación de metodología en p. 250; p. 251 ya es portada EXT.",
        subLocators: [
          { id:"BLA-GOV", label:"Gobernanza local", page:238, pageEnd:238, action:"HOLD_PENDING_EVIDENCE" },
          { id:"BLA-AREA", label:"Área de trabajo y estación", page:239, pageEnd:241, action:"MERGE_WITHOUT_LOSS" },
          { id:"EVID-BLA-01", label:"Evidencia fotográfica", page:242, pageEnd:242, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-BLA-01"] },
          { id:"BLA-VERIFY-AREA", label:"Verificación del área", page:243, pageEnd:245, action:"PRESERVE" },
          { id:"BLA-METHOD", label:"Metodología", page:246, pageEnd:249, action:"MERGE_WITHOUT_LOSS" },
          { id:"BLA-TOOLS", label:"Herramientas, equipo y consumibles", page:248, pageEnd:249, action:"PRESERVE" },
          { id:"BLA-VERIFY-METHOD", label:"Verificación de metodología", page:250, pageEnd:250, action:"PRESERVE" }
        ]
      }
    ]
  },
  {
    id: "master-web",
    group: "Masters y versiones",
    title: "ROCA_MASTER_WEB.pdf",
    label: "Master web",
    kind: "drive",
    driveId: "1TX54ljmSfImxIeSrqmb9mV3VZU1wXPko",
    webUrl: "https://drive.google.com/file/d/1TX54ljmSfImxIeSrqmb9mV3VZU1wXPko/view",
    modified: "2026-09-09",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    duplicateCandidateOf: "master-391",
    duplicateEvidence: "Mismo tamaño en Drive y extracción textual idéntica carácter por carácter; identidad binaria no verificada.",
    note: "Copia fuente localizada en Drive. Debe compararse por seccion, no tratarse como canon global.",
    related: [
      { sectionId: "roca", label: "ROCA / identidad", action: "PRESERVE", locator: "Mapeo por pagina pendiente" },
      { sectionId: "heritage", label: "Heritage", action: "PRESERVE", locator: "Mapeo por pagina pendiente" },
      { sectionId: "taller", label: "Taller", action: "MERGE_WITHOUT_LOSS", locator: "Mapeo por pagina pendiente" }
    ]
  },
  {
    id: "pre-entrevistas-26ago",
    group: "Masters y versiones",
    title: "ROCA_TAXIDERMY_MASTER_PreEntrevistas_26AGO2026.pdf",
    label: "Pre-entrevistas · 26 AGO 2026",
    kind: "drive",
    driveId: "1kDvKFE77HRy4sPu_vSN_I4gEQXtIAYZH",
    webUrl: "https://drive.google.com/file/d/1kDvKFE77HRy4sPu_vSN_I4gEQXtIAYZH/view",
    modified: "2026-09-24",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    note: "Version anterior a la capa de entrevistas. Util para detectar contenido que se perdio o cambio despues.",
    related: [
      { sectionId: "personas", label: "Personas", action: "CORRECT", locator: "Contrastar contra roster vigente" },
      { sectionId: "procesos", label: "Procesos", action: "MERGE_WITHOUT_LOSS", locator: "Comparar contra entrevistas literales" },
      { sectionId: "taller", label: "Taller", action: "MERGE_WITHOUT_LOSS", locator: "Recuperar detalle fisico soportado" }
    ]
  },
  {
    id: "precampo-v24-7",
    group: "Pre-campo",
    title: "ROCA_TAXIDERMY_v24_7_PreCampo_Rigor.pdf",
    label: "v24.7 · PreCampo Rigor",
    kind: "drive",
    driveId: "1I4KuFH_UEW6K4RqTUBca4IBKP0Lf96aV",
    webUrl: "https://drive.google.com/file/d/1I4KuFH_UEW6K4RqTUBca4IBKP0Lf96aV/view",
    modified: "2026-09-24",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    note: "Version pre-campo para comparar controles, evidencia y brechas.",
    related: [
      { sectionId: "taller", label: "Taller", action: "MERGE_WITHOUT_LOSS", locator: "Mapeo por pagina pendiente" },
      { sectionId: "cumplimiento", label: "Cumplimiento", action: "CORRECT", locator: "Revalidar vigencia/aplicabilidad" }
    ]
  },
  {
    id: "precampo-v24-8",
    group: "Pre-campo",
    title: "ROCA_TAXIDERMY_v24_8_PreCampo_Control.pdf",
    label: "v24.8 · PreCampo Control",
    kind: "drive",
    driveId: "1NuoEJP1anytDc80w9qABeowsa7eJc6_t",
    webUrl: "https://drive.google.com/file/d/1NuoEJP1anytDc80w9qABeowsa7eJc6_t/view",
    modified: "2026-09-24",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    note: "Version pre-campo orientada a control. Se usa para recuperar requisitos sin duplicarlos.",
    related: [
      { sectionId: "trazabilidad", label: "Control y trazabilidad", action: "MERGE_WITHOUT_LOSS", locator: "Mapeo por pagina pendiente" },
      { sectionId: "taller", label: "Taller", action: "MERGE_WITHOUT_LOSS", locator: "Mapeo por pagina pendiente" },
      { sectionId: "cumplimiento", label: "Cumplimiento", action: "CORRECT", locator: "Revalidar fuente actual" }
    ]
  },
  {
    id: "canonico-pendientes-31ago",
    group: "Pre-campo",
    title: "ROCA_TAXIDERMY_MASTER_CANONICO_PENDIENTES_31AGO2026.pdf",
    label: "Master canonico pendientes · 31 AGO",
    kind: "drive",
    driveId: "10Ta3MqKgpnRN94gUoQY-UreG5AH6LfSe",
    webUrl: "https://drive.google.com/file/d/10Ta3MqKgpnRN94gUoQY-UreG5AH6LfSe/view",
    modified: "2026-09-24",
    sourceStatus: "SOURCE-CONFIRMED",
    access: "CONTROLLED",
    note: "Fuente historica con pendientes declarados. Los estados se contrastan contra evidencia posterior antes de cerrar.",
    related: [
      { sectionId: "taller", label: "Taller", action: "MERGE_WITHOUT_LOSS", locator: "Revisar pendientes por area" },
      { sectionId: "cumplimiento", label: "Cumplimiento", action: "HOLD_PENDING_EVIDENCE", locator: "No cerrar sin evidencia" },
      { sectionId: "machotes-guias", label: "Machotes y guias", action: "PRESERVE", locator: "Conservar sobreviviente canonico" }
    ]
  },
  {
    id: "v22-editable-missing",
    group: "Fuentes faltantes",
    title: "ROCA_TAXIDERMY_v22_1_Editable.zip",
    label: "v22.1 editable · archivo pendiente",
    kind: "missing",
    sourceStatus: "BLOCKED",
    access: "MISSING",
    note: "La identidad historica de esta fuente esta registrada, pero el archivo original no fue localizado en la ronda actual. Se mantiene visible para impedir una falsa declaracion de rescate completo.",
    related: [
      { sectionId: "taller", label: "Integridad de fuente", action: "HOLD_PENDING_EVIDENCE", locator: "Archivo original requerido" }
    ]
  }
];
