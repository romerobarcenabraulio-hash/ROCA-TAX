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
        controlIds: ["REQ-COM-01..15","CUR-AREA-01..07"],
        sourceControlIds: ["CUR-AREA-01..09"],
        evidenceIds: ["EVID-CUR-01","EVID-CUR-02","EVID-CUR-03","EVID-CUR-04"],
        action: "MERGE_WITHOUT_LOSS",
        page: 48,
        pageEnd: 85,
        locator: "PDF físico pp. 48-85 · módulo CUR",
        proof: "Módulo CUR comienza en p. 48; verificación de metodología termina en p. 85; p. 86 ya es portada FMR.",
        subLocators: [
          { id:"CUR-GOV", label:"Gobernanza local", page:50, pageEnd:50, action:"CORRECT" },
          { id:"CUR-AREA", label:"Área de trabajo y estaciones", page:51, pageEnd:54, action:"MERGE_WITHOUT_LOSS", controlIds:["CUR-AREA-01..07"], sourceControlIds:["CUR-AREA-01..09"] },
          { id:"EVID-CUR", label:"Evidencia / mediciones", page:55, pageEnd:55, action:"MERGE_WITHOUT_LOSS", evidenceIds:["EVID-CUR-01","EVID-CUR-02","EVID-CUR-03","EVID-CUR-04"] },
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


window.ROCA_SOURCE_LEDGER = [
  {
    id: "LEDGER-ROSTER-RICARDO",
    sectionIds: ["area-recepcion","area-curtiduria","area-montaje"],
    subject: "Ubicación vigente de Ricardo",
    action: "CORRECT",
    canonicalHome: "ops/control/ROCA_ROSTER_STATION_REGISTRY_V2.csv",
    destinationState: "V2 vigente: Recepción OPEN; Curtiduría = Rodolfo Sr. + David + Lalo/Eduardo; Ricardo = Montaje; Eugenio = asistente directo de Ricardo.",
    summary: "v24.7, v24.8 y PreEntrevistas ubican a Ricardo en Curtiduría. El 31AGO todavía lo conserva como dato por reconciliar. La corrección posterior del proyecto lo mueve a Montaje; no reintroducir el roster histórico como estructura vigente.",
    sources: [
      { docId:"precampo-v24-7", locator:"Personal del taller > Áreas y equipos / Curtiduría", fact:"Rodolfo Sr. · Ricardo · David" },
      { docId:"precampo-v24-8", locator:"Personal del taller > Áreas y equipos / Curtiduría", fact:"Rodolfo Sr. · Ricardo · David" },
      { docId:"pre-entrevistas-26ago", locator:"Personal del taller > Áreas y equipos / Curtiduría", fact:"Rodolfo Sr. · Ricardo · David" },
      { docId:"canonico-pendientes-31ago", locator:"Gobernanza > Taller y equipo", fact:"Ricardo aparece como recepción/relación con Curtiduría PENDIENTE DE RECONCILIAR" }
    ],
    proof: "La corrección vigente está registrada en ROCA_ROSTER_STATION_REGISTRY_V2.csv y en MONTAJE_PILOT_AREA_BOOK_V2.md."
  },
  {
    id: "LEDGER-ROSTER-RETOQUE-BASES",
    sectionIds: ["area-retoque","area-bases"],
    subject: "Separación vigente Retoque / Bases",
    action: "CORRECT",
    canonicalHome: "ops/control/ROCA_ROSTER_STATION_REGISTRY_V2.csv",
    destinationState: "V2 vigente: Retoque = Rodolfo Jr. + Emiliano + Valerio/Valentino + Señor Pez; Bases = responsable OPEN.",
    summary: "Las versiones pre-campo concentran a Sr. Pes, Emiliano y Valerio en Bases. La corrección posterior los ubica en Retoque y deja Bases pendiente; la pedacera vive únicamente en Retoque.",
    sources: [
      { docId:"precampo-v24-7", locator:"Personal del taller > Áreas y equipos / Bases", fact:"Sr. Pes · Emiliano · Valerio" },
      { docId:"precampo-v24-8", locator:"Personal del taller > Áreas y equipos / Bases", fact:"Sr. Pes · Emiliano · Valerio" },
      { docId:"pre-entrevistas-26ago", locator:"Personal y áreas de trabajo", fact:"Sr. Pes, Emiliano y Valerio aparecen en Retoque y Bases / Bases" },
      { docId:"canonico-pendientes-31ago", locator:"Gobernanza > Taller y equipo", fact:"Bases conserva Sr. Pes/Emiliano/Valerio como dato histórico pendiente de reconciliar" }
    ],
    proof: "BASES_AREA_BOOK_V2.md prohíbe duplicar automáticamente el roster histórico; RETOQUE_AREA_BOOK_V2.md fija el equipo vigente conocido."
  },
  {
    id: "LEDGER-CUR-PICLE",
    sectionIds: ["area-curtiduria"],
    subject: "Picle: cantidad de ácido fórmico",
    action: "HOLD_PENDING_EVIDENCE",
    canonicalHome: "AREA-CUR / metodología técnica controlada",
    destinationState: "CURTIDURIA_AREA_BOOK_V2.md conserva explícitamente conflicto 6.0 L vs 6.4 L y bloquea normalización por redondeo.",
    summary: "v24.7, v24.8, PreEntrevistas y 31AGO repiten 473 L agua + 45 kg sal + 6.4 L ácido fórmico + 300 mL ácido sulfúrico. Aun así, existe una fuente histórica de 6.0 L registrada por V2 que no ha sido reconciliada; no cerrar el conflicto hasta recuperar esa fuente.",
    sources: [
      { docId:"precampo-v24-7", locator:"Curtiduría > Referencias > Picle · formulación", fact:"473 L agua + 45 kg sal + 6.4 L ácido fórmico + 300 mL ácido sulfúrico" },
      { docId:"precampo-v24-8", locator:"Curtiduría > Referencias > Picle · formulación", fact:"Misma formulación 6.4 L" },
      { docId:"pre-entrevistas-26ago", locator:"Curtiduría > Referencias > Picle · formulación", fact:"Misma formulación 6.4 L" },
      { docId:"canonico-pendientes-31ago", locator:"CUR / Metodología > referencia de picle", fact:"Misma formulación 6.4 L" },
      { docId:"master-391", locator:"CUR / Metodología", page:63, fact:"La fuente 391P conserva la receta con 6.4 L" }
    ],
    proof: "Cuatro versiones históricas coinciden en 6.4 L; la fuente material que soporta 6.0 L sigue pendiente de recuperación/reconciliación."
  },
  {
    id: "LEDGER-CUR-PH",
    sectionIds: ["area-curtiduria"],
    subject: "Medición de pH y estado del instrumento",
    action: "MERGE_WITHOUT_LOSS",
    canonicalHome: "AREA-CUR / activos-medición + metodología",
    destinationState: "RECOVERED IN BRANCH: Curtiduría V2 conserva los dos puntos de pH, estado del instrumento/método, EVID-CUR-04 y captura en CAMPO; sigue NOT_VERIFIED hasta evidencia real.",
    summary: "v24.7, v24.8 y PreEntrevistas ya conservan pH 3.6–3.8 al inicio del día 2 y referencia final 4.2–4.3. El 31AGO añade CUR-AREA-09: báscula y medición de pH con estado conocido. Esa capa explícita no debe perderse.",
    sources: [
      { docId:"precampo-v24-7", locator:"Curtiduría > ALUM-Tan / pH", fact:"pH 3.6–3.8 y 4.2–4.3 en puntos distintos del proceso" },
      { docId:"precampo-v24-8", locator:"Curtiduría > ALUM-Tan / pH", fact:"Conserva ambas referencias de pH" },
      { docId:"pre-entrevistas-26ago", locator:"Curtiduría > ALUM-Tan / pH", fact:"Conserva ambas referencias de pH" },
      { docId:"canonico-pendientes-31ago", locator:"CUR-AREA-09 · Maquinaria crítica", fact:"Báscula y medición de pH tienen estado conocido" }
    ],
    proof: "La capa de medición aparece de forma consistente en fuentes históricas y se hace explícita como control físico en 31AGO. Recuperada en CURTIDURIA_AREA_BOOK_V2.md + AST-CUR-005 + EVID-CUR-04 + CAMPO/Ola 5."
  },
  {
    id: "LEDGER-FMR-RATIO",
    sectionIds: ["area-fmr"],
    subject: "Dosificación A/B por condición climática",
    action: "PRESERVE",
    canonicalHome: "AREA-FMR / metodología técnica controlada",
    destinationState: "FMR V2 conserva prueba de 20 g y 50/50 en condición cálida; remite variaciones climáticas al método técnico controlado.",
    summary: "Las cuatro versiones comparadas conservan 50/50 en clima cálido y 30/70 en fresco/húmedo. Mantener el contexto climático; no convertir la relación en regla global descontextualizada.",
    sources: [
      { docId:"precampo-v24-7", locator:"FMR > Dosificar, mezclar y vaciar", fact:"cálido 50/50; fresco/húmedo 30/70" },
      { docId:"precampo-v24-8", locator:"FMR > Dosificar, mezclar y vaciar", fact:"cálido 50/50; fresco/húmedo 30/70" },
      { docId:"pre-entrevistas-26ago", locator:"FMR > Dosificar, mezclar y vaciar", fact:"cálido 50/50; fresco/húmedo 30/70" },
      { docId:"canonico-pendientes-31ago", locator:"FMR > Metodología", fact:"cálido 50/50; fresco/húmedo 30/70" }
    ],
    proof: "Parámetro repetido de forma consistente; V2 lo preserva sin elevarlo a regla universal."
  },
  {
    id: "LEDGER-RET-PRODUCTS",
    sectionIds: ["area-retoque"],
    subject: "Productos y consumibles de Retoque",
    action: "PRESERVE",
    canonicalHome: "AREA-RET / metodología + materiales",
    destinationState: "Retoque V2 conserva Salvo/Roma, Suavitel condicional, resanadores/catalizadores, pinturas y gasolina blanca.",
    summary: "La capa de materiales no debe comprimirse a 'limpieza/pintura'. Los productos concretos y su uso condicional sobreviven en V2.",
    sources: [
      { docId:"master-391", locator:"RET / Metodología y catálogo", page:169, fact:"Metodología de Retoque y catálogo de materiales" },
      { docId:"canonico-pendientes-31ago", locator:"Retoque > metodología/herramientas/consumibles", fact:"Conserva inventario y controles de acabado" }
    ],
    proof: "RETOQUE_AREA_BOOK_V2.md conserva nombres y uso condicional; no se detecta pérdida en esta capa."
  },
  {
    id: "LEDGER-CAR-METHOD",
    sectionIds: ["area-carpinteria"],
    subject: "Estado de metodología de Carpintería / Corte / Embalaje",
    action: "HOLD_PENDING_EVIDENCE",
    canonicalHome: "AREA-CAR / metodología",
    destinationState: "CARPINTERIA_EMBALAJE_AREA_BOOK_V2.md = CONTROL PREPARED, método no liberado; puesto pendiente.",
    summary: "31AGO declara expresamente que el método no se publica hasta cerrar flujo real, responsable, herramientas, criterios y condición de salida. Mantenerlo pendiente evita fabricar un procedimiento genérico.",
    sources: [
      { docId:"canonico-pendientes-31ago", locator:"Carpintería, corte y embalaje · Metodología > Método no liberado", fact:"Secuencia técnica no liberada hasta cerrar evidencia primaria" }
    ],
    proof: "El estado pendiente sobrevivió correctamente al V2."
  },
  {
    id: "LEDGER-SOL-METHOD",
    sectionIds: ["area-soldadura"],
    subject: "Estado de metodología de Soldadura / Adaptación",
    action: "HOLD_PENDING_EVIDENCE",
    canonicalHome: "AREA-SOL / metodología",
    destinationState: "SOLDADURA_AREA_BOOK_V2.md = WORKING STANDARD / MÉTODO NO LIBERADO; Flaco identificado como responsable operativo conocido.",
    summary: "31AGO exige entrevista/demostración para secuencia, unión, preparación, consumibles, ajustes, aceptación y retrabajo. V2 preserva exactamente ese bloqueo.",
    sources: [
      { docId:"canonico-pendientes-31ago", locator:"Soldadura y adaptación · Metodología > Método no liberado", fact:"Falta evidencia primaria del responsable técnico" }
    ],
    proof: "No se detecta cierre artificial ni metodología inventada."
  },
  {
    id: "LEDGER-BLA-OWNER",
    sectionIds: ["area-blanqueado"],
    subject: "Responsable operativo de Blanqueado",
    action: "HOLD_PENDING_EVIDENCE",
    canonicalHome: "AREA-BLA / gobernanza local",
    destinationState: "BLANQUEADO_AREA_BOOK_V2.md mantiene responsable operativo pendiente de confirmar.",
    summary: "31AGO ya declaraba el responsable de Blanqueado como pendiente. V2 conserva el hueco en vez de asignar una persona por inferencia.",
    sources: [
      { docId:"canonico-pendientes-31ago", locator:"Gobernanza > Taller y equipo / Blanqueado", fact:"Responsable operativo PENDIENTE DE CONFIRMAR" }
    ],
    proof: "El pendiente permanece visible y no se convirtió en una asignación falsa."
  }
];
