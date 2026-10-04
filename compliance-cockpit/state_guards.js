(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.ROCA_STATE_GUARDS=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const nonempty=v=>String(v??'').trim().length>0;
  const ids=v=>Array.isArray(v)?v.filter(Boolean):String(v??'').split(/[|,;\s]+/).map(x=>x.trim()).filter(Boolean);
  const ok=(allowed=true,reasons=[])=>({allowed:!!allowed,reasons});
  function reqTransition(from,to,c={}){
    const reasons=[];
    if(to==='VERIFIED'){
      if(!(c.acceptedEvidenceCount>0||ids(c.acceptedEvidenceIds).length))reasons.push('accepted evidence required');
      if(!nonempty(c.checker))reasons.push('checker required');
      if(c.acceptancePass!==true)reasons.push('acceptance/re-verification must pass');
      if(c.riskClass==='R1_CRITICAL'&&nonempty(c.owner)&&String(c.owner).trim()===String(c.checker).trim())reasons.push('R1 owner cannot self-approve');
    }
    if(to==='JUSTIFIED_NA'){
      if(!nonempty(c.sourceBasis))reasons.push('source/applicability basis required');
      if(!(c.triggerEvidenceCount>0||ids(c.triggerEvidenceIds).length))reasons.push('trigger evidence required');
      if(!nonempty(c.checker))reasons.push('checker required');
    }
    return ok(!reasons.length,reasons);
  }
  function evidenceTransition(from,to,c={}){
    const reasons=[];
    if(to==='ACCEPTED'){
      if(!nonempty(c.reviewer))reasons.push('reviewer required');
      if(c.semanticMatch!==true)reasons.push('semantic match required');
      if(c.current!==true)reasons.push('current evidence required');
      if(c.legible!==true)reasons.push('legible evidence required');
      if(c.identityCorrect!==true)reasons.push('identity/context match required');
      if(c.requirementClass==='TRAINING'&&c.evidenceType==='PHOTO'&&!c.trainingRecordAlsoPresent)reasons.push('context photo cannot satisfy training evidence');
    }
    return ok(!reasons.length,reasons);
  }
  function measurementTransition(from,to,c={}){
    const reasons=[];
    if(['CALCULATED','VERIFIED'].includes(to)){
      if(!(c.requiredInputsComplete===true))reasons.push('all required measurement inputs required');
    }
    if(to==='VERIFIED'){
      if(c.systemCheckPass!==true)reasons.push('system check must pass');
      if(c.manualSystemMatch===false)reasons.push('manual/system difference unresolved');
      if(!nonempty(c.checker))reasons.push('checker required');
    }
    return ok(!reasons.length,reasons);
  }
  function actionTransition(from,to,c={}){
    const reasons=[];
    if(to==='BLOCKED_EXTERNAL'){
      if(!nonempty(c.externalActor))reasons.push('external actor required');
      if(!nonempty(c.externalAction))reasons.push('external action required');
      if(!nonempty(c.externalInput))reasons.push('external input/evidence required');
    }
    if(to==='READY_REVERIFY'){
      if(!(c.closureEvidenceCount>0||ids(c.closureEvidenceIds).length))reasons.push('closure evidence required');
    }
    if(to==='CLOSED_VERIFIED'){
      if(!(c.closureEvidenceAcceptedCount>0||ids(c.acceptedClosureEvidenceIds).length))reasons.push('accepted closure evidence required');
      if(c.reverificationPass!==true)reasons.push('successful re-verification required');
      if(!nonempty(c.checker))reasons.push('checker required');
      if(c.riskClass==='R1_CRITICAL'&&nonempty(c.owner)&&String(c.owner).trim()===String(c.checker).trim())reasons.push('R1 owner cannot self-approve');
    }
    return ok(!reasons.length,reasons);
  }
  function setupTransition(from,to,c={}){
    const reasons=[];
    if(to==='VERIFIED'){
      if(!nonempty(c.value))reasons.push('value required');
      if(!ids(c.evidenceIds).length)reasons.push('EVID-ID required');
      if(!nonempty(c.reviewer))reasons.push('reviewer required');
      if(c.restricted===true&&!/^EVID-/i.test(String(c.value).trim()))reasons.push('restricted fact must store only EVID-ID/reference, not raw value');
    }
    return ok(!reasons.length,reasons);
  }
  function formTransition(from,to,c={}){
    const reasons=[];
    if(['PREPARED','READY_TO_FILE'].includes(to)){
      if(c.requiredFieldsComplete!==true)reasons.push('required fields incomplete');
      if(c.valuesVerified!==true)reasons.push('form values not verified');
    }
    if(to==='READY_TO_FILE'){
      if(c.requiredAttachmentsComplete!==true)reasons.push('required attachments incomplete');
      if((c.openBlockers||0)>0)reasons.push('open blockers remain');
    }
    if(['FILED','SUBMITTED'].includes(to)&&!nonempty(c.authorityReceipt))reasons.push('authority receipt/folio required');
    return ok(!reasons.length,reasons);
  }
  function licenseTransition(from,to,c={}){
    const reasons=[];
    if(['ACTIVE_VALID','ACTIVE'].includes(to)){
      if(!nonempty(c.authorityGrant))reasons.push('authority grant/resolution required');
      if(!nonempty(c.effectiveDate))reasons.push('effective date required');
      if(c.requiresExpiry===true&&!nonempty(c.expiryDate))reasons.push('expiry date required');
    }
    return ok(!reasons.length,reasons);
  }
  function sopState(c={}){
    if(c.sourceComplete===true&&Array.isArray(c.waitingFieldFacts)&&c.waitingFieldFacts.length===1)return {state:'WAITING_FIELD_FACT',open:c.waitingFieldFacts};
    if(c.sourceComplete===true&&(!c.waitingFieldFacts||!c.waitingFieldFacts.length))return {state:'READY_FOR_REVIEW',open:[]};
    return {state:'DRAFT_EVIDENCE_GAPS',open:c.waitingFieldFacts||[]};
  }
  function inboxCanonical(items=[]){
    const m=new Map();
    for(const x of items){const key=x.req_id||x.object_id||x.id;if(!key)continue;const prev=m.get(key)||{...x,lane_tags:[]};const lane=x.lane||x.work_type;if(lane&&!prev.lane_tags.includes(lane))prev.lane_tags.push(lane);m.set(key,prev)}
    return [...m.values()];
  }
  return {reqTransition,evidenceTransition,measurementTransition,actionTransition,setupTransition,formTransition,licenseTransition,sopState,inboxCanonical};
});
