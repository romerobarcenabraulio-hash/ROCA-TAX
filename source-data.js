window.ROCA_SOURCE_DOCUMENTS = [
  {
    id: "master-web-391",
    nav: "Master integral 391p",
    title: "ROCA_MASTER_WEB.pdf",
    subtitle: "Master integral · lectura histórica consolidada",
    sourceKind: "Google Drive",
    privacy: "INTERNAL_OPERATIONAL",
    status: "AVAILABLE_PRIVATE_LINK",
    pages: 391,
    driveId: "1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO",
    previewUrl: "https://drive.google.com/file/d/1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO/preview",
    openUrl: "https://drive.google.com/file/d/1ZbBmnudrO7m7aGCtFGTSXuljy1Sg5AJO/view",
    localPath: "sources/pdfs/ROCA_MASTER_WEB.pdf",
    note: "Fuente consolidada que conserva la paginación 391p y referencias históricas 367p. El enlace no cambia permisos de Drive.",
    quickRefs: [
      ["Recepción", 42],
      ["Curtiduría", 52],
      ["Formas / Moldes / Réplicas", 90],
      ["Montaje", 133],
      ["Retoque", 163],
      ["Bases", 188],
      ["Carpintería / Embalaje", 213],
      ["Soldadura", 227],
      ["Blanqueado", 241],
      ["Oficina / BIWO", 266],
      ["Bodegas", 277],
      ["Comedor", 296],
      ["Sanitarios", 305],
      ["Circulaciones", 314],
      ["Residuos", 323]
    ],
    crossChecks: [
      { label:"Recepción", sourcePage:42, targetSection:"area-recepcion", action:"MERGE_WITHOUT_LOSS", focus:"Área física, ingreso controlado, privacidad y evidencia." },
      { label:"Curtiduría", sourcePage:52, targetSection:"area-curtiduria", action:"MERGE_WITHOUT_LOSS", focus:"Zona húmeda, drenaje, química, maquinaria, báscula/pH y estaciones." },
      { label:"Formas / Moldes / Réplicas", sourcePage:90, targetSection:"area-fmr", action:"MERGE_WITHOUT_LOSS", focus:"Punto de mezcla, racks, curado, estación de Omar y evidencia." },
      { label:"Montaje", sourcePage:133, targetSection:"area-montaje", action:"PRESERVE", focus:"Piloto V2 ya conserva la mayor resolución física; revisar regresiones." },
      { label:"Retoque", sourcePage:163, targetSection:"area-retoque", action:"MERGE_WITHOUT_LOSS", focus:"Pintura/solventes, aire comprimido, acabado fino y estaciones reales." },
      { label:"Bases", sourcePage:188, targetSection:"area-bases", action:"MERGE_WITHOUT_LOSS", focus:"Armado estable, PU/adhesivos, corte, polvo y evidencia." },
      { label:"Carpintería / Embalaje", sourcePage:213, targetSection:"area-carpinteria", action:"CORRECT", focus:"Preservar condiciones; no conservar la vieja ubicación en espacio del Sr. Pez como vigente." },
      { label:"Soldadura", sourcePage:227, targetSection:"area-soldadura", action:"MERGE_WITHOUT_LOSS", focus:"Trabajo en caliente, humos, equipo, estación de Flaco y evidencia." },
      { label:"Blanqueado", sourcePage:241, targetSection:"area-blanqueado", action:"MERGE_WITHOUT_LOSS", focus:"Calor/agua, protección de cuernos, ventilación y evidencia." },
      { label:"Espacios de soporte", sourcePage:277, targetSection:"area-soporte", action:"MERGE_WITHOUT_LOSS", focus:"Bodegas, BIWO, exhibición, comedor, sanitarios, rutas, exterior y residuos." }
    ]
  },
  {
    id: "master-canonico-31ago",
    nav: "Master canónico 31 AGO",
    title: "ROCA_TAXIDERMY_MASTER_CANONICO_PENDIENTES_31AGO2026.pdf",
    subtitle: "v24.8 PRE-CAMPO CONTROL · fuente histórica recuperada",
    sourceKind: "ROCA Library / archivo histórico",
    privacy: "INTERNAL_OPERATIONAL",
    status: "SOURCE_RECOVERED_LOCATOR_PENDING",
    pages: 367,
    libraryFileId: "libfile_5f1d42e7698c8191aff9c5858669bbc4",
    sourceFileId: "file_00000000ca6c822fab83c0ba7167e03e",
    sizeBytes: 60294089,
    previewUrl: "",
    openUrl: "",
    localPath: "sources/pdfs/ROCA_TAXIDERMY_MASTER_CANONICO_PENDIENTES_31AGO2026.pdf",
    note: "Master canónico de 367 páginas recuperado físicamente en ROCA Library. Falta una URL privada estable para servirlo dentro del visor; no publicar sus bytes en el repo público."
  },
  {
    id: "preentrevistas-26ago",
    nav: "Pre-entrevistas 26 AGO",
    title: "ROCA_TAXIDERMY_MASTER_PreEntrevistas_26AGO2026.pdf",
    subtitle: "Fuente histórica identificada · locator web pendiente",
    sourceKind: "ROCA Library / archivo histórico",
    privacy: "INTERNAL_OPERATIONAL",
    status: "SOURCE_RECOVERED_LOCATOR_PENDING",
    pages: 208,
    libraryFileId: "libfile_c4a856ce0038819198a470b9707bc649",
    sourceFileId: "file_000000002b3081fd9d262ad4ad4a25ca",
    sizeBytes: 31643065,
    previewUrl: "",
    openUrl: "",
    localPath: "sources/pdfs/ROCA_TAXIDERMY_MASTER_PreEntrevistas_26AGO2026.pdf",
    note: "Fuente recuperada físicamente en ROCA Library y materializada para control de integridad. Falta una URL privada estable para servirla dentro del visor; no publicar sus bytes en el repo público."
  },
  {
    id: "v24-8-precampo-control",
    nav: "v24.8 Pre-Campo",
    title: "ROCA_TAXIDERMY_v24_8_PreCampo_Control.pdf",
    subtitle: "v24.8 PRE-CAMPO CONTROL · 198 páginas",
    sourceKind: "ROCA Library / archivo histórico",
    privacy: "INTERNAL_OPERATIONAL",
    status: "SOURCE_RECOVERED_LOCATOR_PENDING",
    pages: 198,
    libraryFileId: "libfile_f1fb6fbf08ac8191993e9810bfde8bb5",
    sourceFileId: "file_00000000c0c081fda8ab236f00ad4018",
    sizeBytes: 31591373,
    previewUrl: "",
    openUrl: "",
    localPath: "sources/pdfs/ROCA_TAXIDERMY_v24_8_PreCampo_Control.pdf",
    note: "Fuente nominal v24.8 recuperada. No confundir automáticamente con PreEntrevistas: comparten rótulo interno v24.8, pero tienen distinta paginación y tamaño; requieren diff antes de declararlas duplicadas."
  },
  {
    id: "v24-7-precampo-rigor",
    nav: "v24.7 Pre-Campo",
    title: "ROCA_TAXIDERMY_v24_7_PreCampo_Rigor.pdf",
    subtitle: "v24.7 PRE-CAMPO RIGOR · 194 páginas",
    sourceKind: "ROCA Library / archivo histórico",
    privacy: "INTERNAL_OPERATIONAL",
    status: "SOURCE_RECOVERED_LOCATOR_PENDING",
    pages: 194,
    libraryFileId: "libfile_c448d2e524948191b32d73aef05a801e",
    sourceFileId: "file_0000000079748230a80c37a197ff5d3e",
    sizeBytes: 26262426,
    previewUrl: "",
    openUrl: "",
    localPath: "sources/pdfs/ROCA_TAXIDERMY_v24_7_PreCampo_Rigor.pdf",
    note: "Fuente fuerte de metodología y pre-campo recuperada físicamente. Falta URL privada estable para el visor."
  }
];


window.ROCA_SOURCE_CROSSCHECK = {
  "area-recepcion": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 42 },
    { sourceId: "master-web-391", label: "Estación / evidencia", page: 44 }
  ],
  "area-curtiduria": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 52 },
    { sourceId: "master-web-391", label: "Estaciones", page: 54 },
    { sourceId: "master-web-391", label: "Evidencia", page: 56 }
  ],
  "area-fmr": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 90 },
    { sourceId: "master-web-391", label: "Estación de Omar", page: 92 },
    { sourceId: "master-web-391", label: "Evidencia", page: 93 }
  ],
  "area-montaje": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 133 },
    { sourceId: "master-web-391", label: "Estaciones", page: 135 }
  ],
  "area-retoque": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 163 },
    { sourceId: "master-web-391", label: "Estación", page: 165 },
    { sourceId: "master-web-391", label: "Evidencia", page: 166 }
  ],
  "area-bases": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 188 },
    { sourceId: "master-web-391", label: "Estaciones", page: 189 },
    { sourceId: "master-web-391", label: "Evidencia", page: 191 }
  ],
  "area-carpinteria": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 213 },
    { sourceId: "master-web-391", label: "Estación", page: 214 },
    { sourceId: "master-web-391", label: "Evidencia", page: 215 }
  ],
  "area-soldadura": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 227 },
    { sourceId: "master-web-391", label: "Estación", page: 228 },
    { sourceId: "master-web-391", label: "Evidencia", page: 229 }
  ],
  "area-blanqueado": [
    { sourceId: "master-web-391", label: "Área de trabajo", page: 241 },
    { sourceId: "master-web-391", label: "Estación", page: 242 },
    { sourceId: "master-web-391", label: "Evidencia", page: 243 }
  ],
  "area-soporte": [
    { sourceId: "master-web-391", label: "Bodegas", page: 277 },
    { sourceId: "master-web-391", label: "Oficina / BIWO", page: 266 },
    { sourceId: "master-web-391", label: "Comedor", page: 296 },
    { sourceId: "master-web-391", label: "Sanitarios", page: 305 },
    { sourceId: "master-web-391", label: "Circulaciones", page: 314 },
    { sourceId: "master-web-391", label: "Residuos", page: 323 }
  ]
};

window.ROCA_SOURCE_RULES = {
  publicRepo: true,
  restrictedKinds: ["RESTRICTED_PERSONAL", "RESTRICTED_FINANCIAL", "RESTRICTED_LEGAL_WILDLIFE"],
  sourceFolderUrl: "https://drive.google.com/drive/folders/1vdG8UOTpmq1NEDh5ndzTKfXAuF9aVQjj",
  warning: "ROCA-TAX es un repositorio público. No publicar expedientes de clientes, permisos, CITES, identificaciones ni otros originales restringidos."
};
