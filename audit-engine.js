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
        sourceType:'physical_standard',
        sourceId:r.id
      }));
  }

  function criteriaForArea(areaId){
    const dept=window.ROCA_DEPARTMENTS&&window.ROCA_DEPARTMENTS[areaId];
    if(!dept) return [];
    const areaAuditMeta=Array.isArray(dept.areaAudit)?dept.areaAudit:[];
    const areaRows=(Array.isArray(dept.area)?dept.area:[]).map((r,i)=>{
      const meta=areaAuditMeta[i]||{};
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
    });
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

  function dynamicImplementationItems(){
    const items=[];
    departments().forEach(([areaId,dept])=>{
      const saved=loadState(areaId);
      criteriaForArea(areaId).forEach(row=>{
        const v=saved[row.id]||{};
        if(String(v.status||'NOT_VERIFIED').toUpperCase()!=='NONCONFORMING') return;
        const note=String(v.note||'').trim();
        items.push({
          id:'AUD-'+String(dept.code||areaId).toUpperCase()+'-'+row.id,
          area:dept.title||areaId,
          areaId,
          req:row.id,
          gap:'NO CONFORME · '+(note||row.label),
          fix:'Corregir la condición: '+row.target+' Después volver a auditar.',
          owner:'POR ASIGNAR',
          due:'—',
          status:'NO CONFORME',
          evidence:note||row.input,
          basis:row.basis,
          dynamic:true
        });
      });
    });
    return items;
  }

  window.ROCA_AUDIT_ENGINE={
    version:'1.1.0',
    departments,
    criteriaForArea,
    applicablePhysicalRows,
    loadState,
    saveCriterion,
    dynamicImplementationItems,
    stateKey
  };
})();
