(function(){
  const PHYS_NORM_BASIS={
    "PHYS-FLOW":"NOM-001-STPS-2008",
    "PHYS-EGRESS":"NOM-002-STPS-2010",
    "PHYS-FIRE":"NOM-002-STPS-2010",
    "PHYS-SIGN":"NOM-026-STPS-2008",
    "PHYS-LIGHT":"NOM-025-STPS-2008",
    "PHYS-STATION":"NOM-001-STPS-2008",
    "PHYS-STORAGE":"ROCA + NOM-006-STPS-2023 cuando aplique",
    "PHYS-ELECTRIC":"NOM-029-STPS-2011 cuando aplique",
    "PHYS-CHEM":"NOM-018-STPS-2015 + NOM-005-STPS-1998",
    "PHYS-VENT":"NOM-010-STPS-2014 + HDS aplicable",
    "PHYS-MACHINE":"NOM-004-STPS-1999",
    "PHYS-NOISE":"NOM-011-STPS-2001 cuando aplique",
    "PHYS-MANUALLOAD":"NOM-036-1-STPS-2018 cuando aplique",
    "PHYS-PRESSURE":"NOM-020-STPS-2011 cuando aplique",
    "PHYS-WASTE":"NOM-052-SEMARNAT-2005 + ruta aplicable",
    "PHYS-WASTEWATER":"NOM-002-SEMARNAT-1996 + NTE-SLP-AR-001/2026 cuando aplique",
    "PHYS-SUPPORT":"NOM-001-STPS-2008 + RFSST"
  };

  const PHYSICAL_EVALUATION_PROFILE={
    "PHYS-FLOW":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-EGRESS":{evaluationKind:"MEDIR",evaluationSteps:["INSPECCIONAR","MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO",evidenceContract:"Recorrido completo desde el punto más alejado hasta la salida + distancia real medida en m + puerta operable desde dentro + señal visible + fecha y método/instrumento de medición; si la distancia activa el criterio temporal, registrar también tiempo real de evacuación."},
    "PHYS-FIRE":{evaluationKind:"CALCULAR",evaluationSteps:["MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "PHYS-SIGN":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-LIGHT":{evaluationKind:"MEDIR",evaluationSteps:["MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "PHYS-STATION":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-STORAGE":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","CONDICIONAL","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-ELECTRIC":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","CONDICIONAL","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-CHEM":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "PHYS-VENT":{evaluationKind:"CONDICIONAL",evaluationSteps:["INSPECCIONAR","CONDICIONAL","MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "PHYS-MACHINE":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "PHYS-NOISE":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","MEDIR","CALCULAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "PHYS-MANUALLOAD":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","MEDIR","CALCULAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "PHYS-PRESSURE":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "PHYS-WASTE":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR","CONDICIONAL"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "PHYS-WASTEWATER":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","MEDIR","CALCULAR","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "PHYS-SUPPORT":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"}
  };

  const METHOD_CONTROL_EVALUATION_PROFILE={
    "CUR-CTL-01":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "CUR-CTL-02":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "CUR-CTL-03":{evaluationKind:"MEDIR",evaluationSteps:["MEDIR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "CUR-CTL-04":{evaluationKind:"MEDIR",evaluationSteps:["MEDIR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "CUR-CTL-05":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "CUR-CTL-06":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "CUR-CTL-07":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},

    "MON-CTL-01":{evaluationKind:"MEDIR",evaluationSteps:["INSPECCIONAR","MEDIR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "MON-CTL-02":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "MON-CTL-03":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "MON-CTL-04":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "MON-CTL-05":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "MON-CTL-06":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},

    "RET-CTL-01":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "RET-CTL-02":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "RET-CTL-03":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "RET-CTL-04":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","INSPECCIONAR","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "RET-CTL-05":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},

    "BAS-CTL-01":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "BAS-CTL-02":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "BAS-CTL-03":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "BAS-CTL-04":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "BAS-CTL-05":{evaluationKind:"MEDIR",evaluationSteps:["MEDIR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "BAS-CTL-06":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},

    "FMR-CTL-01":{evaluationKind:"MEDIR",evaluationSteps:["MEDIR","DOCUMENTAR"],verificationRoute:"MEDICIÓN DE CAMPO"},
    "FMR-CTL-02":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "FMR-CTL-03":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "FMR-CTL-04":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "FMR-CTL-05":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "FMR-CTL-06":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "FMR-CTL-07":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},

    "REC-CTL-01":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "REC-CTL-02":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "REC-CTL-03":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},

    "CAR-CTL-01":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "CAR-CTL-02":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "CAR-CTL-03":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "CAR-CTL-04":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},

    "SOL-CTL-01":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "SOL-CTL-02":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","INSPECCIONAR","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "SOL-CTL-03":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},

    "BLA-CTL-01":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "BLA-CTL-02":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","DOCUMENTAR"],verificationRoute:"GATE DE APLICABILIDAD"},
    "BLA-CTL-03":{evaluationKind:"CONDICIONAL",evaluationSteps:["CONDICIONAL","INSPECCIONAR"],verificationRoute:"GATE DE APLICABILIDAD"},

    "SUP-CTL-01":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR"],verificationRoute:"INSPECCIÓN DE CAMPO"},
    "SUP-CTL-02":{evaluationKind:"DOCUMENTAR",evaluationSteps:["DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "SUP-CTL-03":{evaluationKind:"DOCUMENTAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"REVISIÓN DOCUMENTAL"},
    "SUP-CTL-04":{evaluationKind:"INSPECCIONAR",evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],verificationRoute:"INSPECCIÓN DE CAMPO"}
  };

  const AUDIT_CRITERION_EVALUATION_PROFILE={
    "CUR-AUD-AREA-07":{
      evaluationKind:"DOCUMENTAR",
      evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],
      verificationRoute:"REVISIÓN DOCUMENTAL",
      evidenceContract:"Por cada activo/instrumento crítico: identificación inequívoca + ubicación + condición/estado conocido; para báscula y método/instrumento de pH, registrar además identificación del equipo o método y estado de verificación/servicio disponible antes de usar la lectura como evidencia."
    },
    "CUR-AUD-05":{
      evaluationKind:"INSPECCIONAR",
      evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],
      verificationRoute:"INSPECCIÓN DE CAMPO",
      evidenceContract:"Observar una liberación real o revisar un registro trazable de liberación: condición física que permitió avanzar + etapa de origen/destino + fecha/ID de piel o carga; el tiempo puede registrarse como referencia, no como único criterio."
    },
    "MON-AUD-19":{
      evaluationKind:"INSPECCIONAR",
      evaluationSteps:["INSPECCIONAR","DOCUMENTAR"],
      verificationRoute:"INSPECCIÓN DE CAMPO",
      evidenceContract:"Pieza identificada + condición física observada al liberar (humedad/movimiento/estabilidad según corresponda) + transferencia a la siguiente etapa; registrar fecha y responsable/estación cuando exista el dato."
    },
    "BAS-AUD-19":{
      evaluationKind:"INSPECCIONAR",
      evaluationSteps:["INSPECCIONAR"],
      verificationRoute:"INSPECCIÓN DE CAMPO",
      evidenceContract:"Inspección física final con pieza/base identificada: comprobar estabilidad de elementos de ambientación y que ninguno invada puntos de agarre, apoyo, ruta de traslado o lectura visual prevista."
    },
    "FMR-AUD-05":{
      evaluationKind:"MEDIR",
      evaluationSteps:["MEDIR","INSPECCIONAR","DOCUMENTAR"],
      verificationRoute:"MEDICIÓN DE CAMPO",
      evidenceContract:"Hora de vaciado + hora de revisión/apertura + tiempo transcurrido + condición física observada antes de abrir + familia/lote cuando gobierne el comportamiento; el tiempo es referencia y la condición física decide la apertura."
    }
  };

  function methodControlEvidenceContract(row,kind){
    const target=String(row.target||row.label||row.id||'el control');
    if(kind==='MEDIR')
      return 'Medición, lectura o demostración en operación real, identificada y fechada, que compruebe: '+target;
    if(kind==='CALCULAR')
      return 'Datos de entrada + cálculo trazable + resultado que compruebe: '+target;
    if(kind==='CONDICIONAL')
      return 'Hecho disparador + justificación APLICA/NO APLICA; si aplica, evidencia trazable que demuestre: '+target;
    if(kind==='DOCUMENTAR')
      return 'Registro, documento u observación trazable que demuestre específicamente: '+target;
    return 'Observación identificada y, cuando corresponda, evidencia visual no sensible que demuestre: '+target;
  };

  function departments(){
    return Object.entries(window.ROCA_DEPARTMENTS||{});
  }

  function normContextRows(ids){
    const byReq=(window.ROCA_NORM_CONTEXT&&window.ROCA_NORM_CONTEXT.byReq)||{};
    return (Array.isArray(ids)?ids:[]).map(id=>byReq[id]).filter(Boolean);
  }

  function evaluationProfile(row){
    const contexts=normContextRows(row.normReqIds);
    const modeText=contexts.map(x=>String(x.mode||'')).join(' | ');
    const calculationText=contexts.map(x=>String(x.calculation||'')).join(' | ');
    const captureText=contexts.map(x=>String(x.capture||'').trim()).filter(Boolean);
    const raw=[modeText,calculationText,row.input,row.target,row.basis].map(x=>String(x||'')).join(' | ').toUpperCase();

    const conditional=/CONDICIONAL|APLICABILIDAD|CUANDO APLIQUE|CUANDO CORRESPONDA|SI ACTIVA|TRIGGER|DETERMINAR SI|PRIMERO CONFIRMAR|VERIFICAR APLICABILIDAD/.test(raw);
    const calculate=/\bCALCULAR\b|\bPUNTUAR\b|\bÍNDICE\b|\bUMBRAL\b|\bSUMAR\b|RELACIÓN CMA|\bVLE\b|ITGBH|CLASIFICACIÓN POR PRESIÓN|PROMEDIO CORPORAL|1\/300 M²|1\/200 M²/.test(raw);
    const measure=/MEDIR|MUESTREAR|LECTURA|LUX|PRESIÓN|CAUDAL|CONCENTRACIÓN|RUIDO|VIBRACIÓN|TEMPERATURA|PH\b|RESISTENCIA|DISTANCIA|TIEMPO/.test(raw);
    const document=/DOCUMENTAR|INVENTARIAR|ACTA|REGISTRO|PROGRAMA|PROCEDIMIENTO|HDS|PERMISO|LICENCIA|BITÁCORA|MANUAL|EXPEDIENTE|PLACA|FICHA/.test(raw);

    let evaluationKind='INSPECCIONAR';
    if(conditional) evaluationKind='CONDICIONAL';
    else if(calculate) evaluationKind='CALCULAR';
    else if(measure) evaluationKind='MEDIR';
    else if(document) evaluationKind='DOCUMENTAR';

    const steps=[];
    if(conditional) steps.push('CONDICIONAL');
    if(measure) steps.push('MEDIR');
    if(calculate) steps.push('CALCULAR');
    if(document) steps.push('DOCUMENTAR');
    if(!steps.length) steps.push('INSPECCIONAR');

    const uniqueCapture=[...new Set(captureText)];
    let evidenceContract=uniqueCapture.length
      ? uniqueCapture.join(' · ')
      : String(row.input||'Evidencia observable y trazable de la condición evaluada.');

    const genericMethodControl=row&&row.sourceType==='department_method_control' &&
      /Evidencia, registro o condición observable directamente ligada a este control/i.test(evidenceContract);
    if(genericMethodControl){
      const target=String(row.target||row.label||row.id||'el control');
      if(evaluationKind==='MEDIR')
        evidenceContract='Medición, lectura o demostración en operación real, identificada y fechada, que compruebe: '+target;
      else if(evaluationKind==='CALCULAR')
        evidenceContract='Datos de entrada + cálculo trazable + resultado que compruebe: '+target;
      else if(evaluationKind==='CONDICIONAL')
        evidenceContract='Hecho disparador + justificación APPLICA/NO APLICA; si aplica, evidencia trazable que demuestre: '+target;
      else if(evaluationKind==='DOCUMENTAR')
        evidenceContract='Registro, documento u observación trazable que demuestre específicamente: '+target;
      else
        evidenceContract='Observación identificada y, cuando corresponda, evidencia visual no sensible que demuestre: '+target;
    }

    let verificationRoute='INSPECCIÓN DE CAMPO';
    if(conditional)
      verificationRoute='GATE DE APLICABILIDAD';
    else if(/LABORATORIO|MUESTREAR|MUESTRA SIMPLE|MUESTRA COMPUESTA|CONCENTRACIÓN MEDIDA|DOSIMETRÍA|ANÁLISIS TÉCNICO|PRUEBAS DE LABORATORIO/.test(raw))
      verificationRoute='LAB / ESPECIALISTA';
    else if(measure)
      verificationRoute='MEDICIÓN DE CAMPO';
    else if(calculate)
      verificationRoute='CÁLCULO INTERNO';
    else if(document)
      verificationRoute='REVISIÓN DOCUMENTAL';

    return {
      evaluationKind,
      evaluationSteps:[...new Set(steps)],
      evidenceContract,
      verificationRoute
    };
  }

  function enrichCriterion(row){
    const inferred=evaluationProfile(row);
    const physical=row&&row.sourceType==='physical_standard' ? PHYSICAL_EVALUATION_PROFILE[row.id] : null;
    const method=row&&row.sourceType==='department_method_control' ? METHOD_CONTROL_EVALUATION_PROFILE[row.id] : null;
    const auditCriterion=row ? AUDIT_CRITERION_EVALUATION_PROFILE[row.id] : null;
    const finalProfile=Object.assign({},inferred,physical||{},method||{},auditCriterion||{});
    if(method) finalProfile.evidenceContract=methodControlEvidenceContract(row,finalProfile.evaluationKind);
    return Object.assign({},row,finalProfile);
  }

  function applicablePhysicalRows(areaId){
    const phys=Array.isArray(window.ROCA_AREA_PHYSICAL_STANDARD)?window.ROCA_AREA_PHYSICAL_STANDARD:[];
    return phys
      .filter(r=>r.areas==='ALL'||(Array.isArray(r.areas)&&r.areas.includes(areaId)))
      .map(r=>({
        id:r.id,
        group:'Normativa / condición física',
        label:r.label||r.id,
        target:r.standard||'',
        input:r.evidence||'Evidencia observable de la condición.',
        basis:PHYS_NORM_BASIS[r.id]||'Base física ROCA',
        normReqIds:(window.ROCA_NORM_CONTEXT&&window.ROCA_NORM_CONTEXT.physicalToReqIds&&window.ROCA_NORM_CONTEXT.physicalToReqIds[r.id])||[],
        sourceType:'physical_standard',
        sourceId:r.id
      }));
  }

  function criteriaForArea(areaId){
    const dept=window.ROCA_DEPARTMENTS&&window.ROCA_DEPARTMENTS[areaId];
    if(!dept) return [];
    const areaAuditMeta=Array.isArray(dept.areaAudit)?dept.areaAudit:[];
    const auditBySourceId=new Map(areaAuditMeta.filter(m=>m&&m.sourceId).map(m=>[m.sourceId,m]));
    const areaRows=(Array.isArray(dept.area)?dept.area:[]).map(r=>{
      const meta=auditBySourceId.get(r.id)||{};
      return {
        id:meta.id||r.id,
        group:'Área de trabajo',
        label:r.label||meta.criterion||r.id,
        target:r.text||meta.criterion||'',
        input:meta.evidence||'Evidencia observable de la condición permanente.',
        basis:'Estándar permanente del departamento',
        sourceType:'department_area',
        sourceId:r.id
      };
    });
    const controlRows=(Array.isArray(dept.method&&dept.method.controls)?dept.method.controls:[]).map(r=>({
      id:r.id,
      group:'Control permanente',
      label:r.id,
      target:r.text||'',
      input:'Evidencia, registro o condición observable directamente ligada a este control.',
      basis:'Control permanente de metodología ROCA',
      sourceType:'department_method_control',
      sourceId:r.id
    }));
    const processRows=(Array.isArray(dept.auditCriteria)?dept.auditCriteria:[]).map(r=>({
      id:r.id,
      group:r.group||'Metodología / operación',
      label:r.label||r.id,
      target:r.target||r.label||'',
      input:r.input||'Evidencia / dato de auditoría.',
      basis:'Metodología / control ROCA',
      sourceType:'department_audit_criteria',
      sourceId:r.id
    }));
    const merged=[...areaRows,...controlRows,...processRows,...applicablePhysicalRows(areaId)];
    const seen=new Set();
    return merged.filter(r=>{
      if(!r.id||seen.has(r.id)) return false;
      seen.add(r.id);
      return true;
    }).map(enrichCriterion);
  }

  function stateKey(areaId){ return 'roca.audit.'+areaId; }

  function loadState(areaId){
    try{return JSON.parse(localStorage.getItem(stateKey(areaId))||'{}')||{}}
    catch(e){return{}}
  }

  function saveCriterion(areaId,id,value){
    const state=loadState(areaId);
    state[id]=Object.assign({},value,{updatedAt:new Date().toISOString()});
    localStorage.setItem(stateKey(areaId),JSON.stringify(state));
    return state;
  }

  const BACKUP_SCHEMA='ROCA_AUDIT_STATE_V1';
  const ALLOWED_STATUSES=new Set(['NOT_VERIFIED','CONFORMING','NONCONFORMING','NA_JUSTIFIED']);

  function closureDetailValid(status,note){
    const s=String(status||'NOT_VERIFIED').toUpperCase();
    const detail=String(note||'').trim();
    if(!ALLOWED_STATUSES.has(s)) return false;
    if(s==='NOT_VERIFIED') return true;
    return Boolean(detail);
  }

  function dynamicImplementationItems(){
    const items=[];
    departments().forEach(([areaId,dept])=>{
      const saved=loadState(areaId);
      criteriaForArea(areaId).forEach(row=>{
        const v=saved[row.id]||{};
        if(String(v.status||'NOT_VERIFIED').toUpperCase()!=='NONCONFORMING') return;
        const note=String(v.note||'').trim();
        if(!note) return;
        items.push({
          id:'AUD-'+String(dept.code||areaId).toUpperCase()+'-'+row.id,
          area:dept.title||areaId,
          areaId,
          req:row.id,
          gap:'NO CONFORME · '+note,
          fix:'Cerrar la brecha observada y volver a auditar. Evidencia de cierre requerida: '+row.evidenceContract,
          owner:'POR ASIGNAR',
          due:'—',
          status:'NO CONFORME',
          evidence:note,
          evidenceNeeded:row.evidenceContract,
          evaluationKind:row.evaluationKind,
          evaluationSteps:row.evaluationSteps,
          verificationRoute:row.verificationRoute,
          basis:row.basis,
          dynamic:true
        });
      });
    });
    return items;
  }

  function exportAuditState(){
    const state={};
    departments().forEach(([areaId])=>{
      const known=new Set(criteriaForArea(areaId).map(r=>r.id));
      const raw=loadState(areaId);
      const clean={};
      Object.entries(raw||{}).forEach(([id,value])=>{
        if(!known.has(id)||!value||typeof value!=='object') return;
        const status=String(value.status||'NOT_VERIFIED').toUpperCase();
        const note=String(value.note||'');
        if(!closureDetailValid(status,note)) return;
        clean[id]={
          status,
          note,
          updatedAt:typeof value.updatedAt==='string'&&value.updatedAt?value.updatedAt:''
        };
      });
      if(Object.keys(clean).length) state[areaId]=clean;
    });
    return {
      schema:BACKUP_SCHEMA,
      engineVersion:'1.6.3',
      exportedAt:new Date().toISOString(),
      departments:state
    };
  }

  function importAuditState(payload){
    const data=typeof payload==='string'?JSON.parse(payload):payload;
    if(!data||data.schema!==BACKUP_SCHEMA||!data.departments||typeof data.departments!=='object'){
      throw new Error('Respaldo de auditoría inválido o incompatible.');
    }
    let areas=0,criteria=0,ignored=0;
    const knownAreas=new Map(departments());
    for(const [areaId,rawState] of Object.entries(data.departments)){
      if(!knownAreas.has(areaId)||!rawState||typeof rawState!=='object'){ignored++;continue;}
      const allowedIds=new Set(criteriaForArea(areaId).map(r=>r.id));
      const clean={};
      for(const [id,value] of Object.entries(rawState)){
        if(!allowedIds.has(id)||!value||typeof value!=='object'){ignored++;continue;}
        const status=String(value.status||'NOT_VERIFIED').toUpperCase();
        const note=String(value.note||'');
        if(!closureDetailValid(status,note)){ignored++;continue;}
        clean[id]={
          status,
          note,
          updatedAt:typeof value.updatedAt==='string'&&value.updatedAt?value.updatedAt:new Date().toISOString()
        };
        criteria++;
      }
      localStorage.setItem(stateKey(areaId),JSON.stringify(clean));
      areas++;
    }
    return {areas,criteria,ignored};
  }

  window.ROCA_AUDIT_ENGINE={
    version:'1.6.3',
    backupSchema:BACKUP_SCHEMA,
    departments,
    criteriaForArea,
    applicablePhysicalRows,
    loadState,
    saveCriterion,
    dynamicImplementationItems,
    exportAuditState,
    importAuditState,
    closureDetailValid,
    stateKey
  };
})();
