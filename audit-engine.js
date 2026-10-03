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
    const captureText=contexts.map(x=>String(x.capture||'').trim()).filter(Boolean);
    const raw=[modeText,row.input,row.target,row.basis].map(x=>String(x||'')).join(' | ').toUpperCase();

    const conditional=/CONDICIONAL|APLICABILIDAD|CUANDO APLIQUE|CUANDO CORRESPONDA|SI ACTIVA|TRIGGER|DETERMINAR SI|PRIMERO CONFIRMAR|VERIFICAR APLICABILIDAD/.test(raw);
    const calculate=/CALCULAR|PUNTUAR|ÍNDICE|UMBRAL|CLASIFICAR|COMPARAR.*LÍMITE|SUMAR|RELACIÓN CMA|VLE|ITGBH/.test(raw);
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
    const evidenceContract=uniqueCapture.length
      ? uniqueCapture.join(' · ')
      : String(row.input||'Evidencia observable y trazable de la condición evaluada.');

    let verificationRoute='INSPECCIÓN DE CAMPO';
    if(/LABORATORIO|MUESTREAR|MUESTRA SIMPLE|MUESTRA COMPUESTA|CONCENTRACIÓN MEDIDA|DOSIMETRÍA|ANÁLISIS TÉCNICO|PRUEBAS DE LABORATORIO/.test(raw))
      verificationRoute='LAB / ESPECIALISTA';
    else if(conditional)
      verificationRoute='GATE DE APLICABILIDAD';
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
    return Object.assign({},row,evaluationProfile(row));
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
      engineVersion:'1.4.0',
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
    version:'1.4.0',
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
