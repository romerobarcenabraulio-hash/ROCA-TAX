import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base=process.env.ROCA_QA_BASE_URL||"http://127.0.0.1:4173";
const out=process.env.ROCA_QA_OUT||"qa-browser-artifacts";
fs.mkdirSync(out,{recursive:true});

const contract={
  viewports:[
    {name:"desktop",width:1440,height:900},
    {name:"tablet",width:1024,height:768},
    {name:"mobile",width:390,height:844}
  ],
  routes:[
    "/index.html",
    "/generated/roca-fast-track/audit.html",
    "/generated/roca-fast-track/implementation.html",
    "/generated/roca-fast-track/field-walk.html",
    "/compliance-cockpit/index.html"
  ]
};
const mobileRoutes=new Set([
  "/index.html",
  "/generated/roca-fast-track/audit.html",
  "/generated/roca-fast-track/implementation.html",
  "/compliance-cockpit/index.html"
]);

const report={
  schema:"ROCA_BROWSER_VISUAL_QA_RUN_V1",
  tested_head:process.env.GITHUB_SHA||"LOCAL_UNKNOWN",
  timestamp:new Date().toISOString(),
  base_url:base,
  checks:[],
  console_errors:[],
  network_errors:[],
  screenshots:[],
  verdict:"PASS"
};
const fail=(id,msg,detail={})=>{
  report.checks.push({id,status:"FAIL",message:msg,...detail});
  report.verdict="FAIL";
};
const pass=(id,msg,detail={})=>report.checks.push({id,status:"PASS",message:msg,...detail});
const fileName=(viewport,route)=>`${viewport}-${route.replace(/^\//,"").replace(/[^a-zA-Z0-9]+/g,"-")||"root"}.png`;

const browser=await chromium.launch({headless:true});
for(const vp of contract.viewports){
  for(const route of contract.routes){
    if(vp.name==="mobile"&&!mobileRoutes.has(route)) continue;
    const context=await browser.newContext({viewport:{width:vp.width,height:vp.height}});
    const page=await context.newPage();
    const prefix=`${vp.name}:${route}`;
    const localConsole=[];
    const localNetwork=[];
    page.on("console",m=>{
      if(m.type()==="error") localConsole.push(m.text());
    });
    page.on("pageerror",e=>localConsole.push(`PAGEERROR: ${e.message}`));
    page.on("response",r=>{
      if(r.url().startsWith(base)&&r.status()>=400) localNetwork.push(`${r.status()} ${r.url()}`);
    });
    try{
      const res=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:30000});
      if(!res||!res.ok()) fail(prefix+":http",`route returned ${res?.status?.()??"no response"}`);
      else pass(prefix+":http","route loaded",{http_status:res.status()});
      await page.waitForTimeout(700);
      const body=(await page.locator("body").innerText()).trim();
      if(body.length<40) fail(prefix+":render","body is blank/too short",{chars:body.length});
      else pass(prefix+":render","body rendered",{chars:body.length});
      const dims=await page.evaluate(()=>{const de=document.documentElement,cw=de.clientWidth;const offenders=[...document.querySelectorAll("body *")].map(el=>{const r=el.getBoundingClientRect();return {tag:el.tagName,id:el.id||"",cls:String(el.className||"").slice(0,80),left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),scrollWidth:el.scrollWidth,clientWidth:el.clientWidth}}).filter(x=>x.right>cw+4||x.left<-4||x.scrollWidth>x.clientWidth+4).slice(0,12);return {sw:de.scrollWidth,cw,offenders}});
      if(dims.sw>dims.cw+4) fail(prefix+":overflow","horizontal overflow detected",dims);
      else pass(prefix+":overflow","no material horizontal overflow",dims);

      if(route==="/index.html"){
        const compliance=page.locator('a[href*="compliance-cockpit"]');
        if(await compliance.count()) pass(prefix+":compliance-link","COMPLIANCE link present");
        else fail(prefix+":compliance-link","COMPLIANCE link missing");
        const sourceEntry=(await page.locator("#normsMode").count())||(await page.getByText("BIBLIOGRAFÍA",{exact:false}).count())||(await page.getByText("FUENTES",{exact:false}).count());
        if(sourceEntry) pass(prefix+":sources-entry","Bibliografía/source reader entry present");
        else fail(prefix+":sources-entry","Bibliografía/source reader entry missing");

        if(vp.name==="desktop"){
          try{
            await page.locator("#auditMode").click();
            await page.waitForTimeout(150);
            const backupControls=await page.locator("#auditBackupExport,#auditBackupImport").count();
            if(backupControls===2) pass(prefix+":audit-backup-controls","audit backup/export controls present");
            else fail(prefix+":audit-backup-controls","audit backup/export controls missing",{count:backupControls});

            const workloadRows=page.locator('#auditWorkloadMatrix tr[data-audit-workload-area]');
            const workloadCount=await workloadRows.count();
            const workloadTotals=await page.locator('#auditWorkloadMatrix tr.audit-workload-total td').allTextContents();
            const numericTotals=workloadTotals.slice(1).map(x=>Number(String(x).trim()||0));
            const matrixArithmeticOk=numericTotals.length===6 && numericTotals[0]===numericTotals.slice(1).reduce((a,b)=>a+b,0);
            if(workloadCount>0&&matrixArithmeticOk)
              pass(prefix+":audit-workload-matrix","audit workload matrix renders and totals reconcile",{areas:workloadCount,totals:numericTotals});
            else fail(prefix+":audit-workload-matrix","audit workload matrix missing or totals do not reconcile",{areas:workloadCount,totals:numericTotals});

            const auditAreaButtons=page.locator('#nav button[data-id^="audit-"]:not([data-id="audit-inicio"])');
            const auditAreaCount=await auditAreaButtons.count();
            let auditedRows=0;
            const badKinds=[];
            const badContracts=[];
            const genericContracts=[];
            const weakEvidenceContracts=[];
            const badRoutes=[];
            for(let ai=0;ai<auditAreaCount;ai++){
              const btn=auditAreaButtons.nth(ai);
              const auditId=await btn.getAttribute("data-id");
              await btn.click();
              await page.waitForSelector('tr[data-audit-id]',{timeout:10000});
              const areaRows=page.locator('tr[data-audit-id]');
              const rowCount=await areaRows.count();
              auditedRows+=rowCount;
              for(let ri=0;ri<rowCount;ri++){
                const rr=areaRows.nth(ri);
                const rid=await rr.getAttribute("data-audit-id");
                const kind=((await rr.locator(".audit-eval-badge").innerText()).trim());
                const contract=((await rr.locator(".audit-evidence-contract").innerText()).trim());
                const route=((await rr.locator(".audit-route-badge").innerText()).trim());
                if(!["CALCULAR","MEDIR","INSPECCIONAR","DOCUMENTAR","CONDICIONAL"].includes(kind))
                  badKinds.push({auditId,rid,kind});
                if(!/Demostrar con:/i.test(contract)||contract.length<=18)
                  badContracts.push({auditId,rid,contract});
                if(/Evidencia, registro o condición observable directamente ligada a este control/i.test(contract)||
                   /Evidencia observable y trazable de la condición evaluada/i.test(contract))
                  genericContracts.push({auditId,rid,contract});
                if(!["CÁLCULO INTERNO","MEDICIÓN DE CAMPO","LAB / ESPECIALISTA","REVISIÓN DOCUMENTAL","GATE DE APLICABILIDAD","INSPECCIÓN DE CAMPO"].includes(route))
                  badRoutes.push({auditId,rid,route});
                if(kind==="MEDIR"&&!/(medici|lectura|instrument|fecha|distancia|peso|pH|lux|presi|tiempo|dimensi|caudal|temperatura|resistencia|concentraci|hora)/i.test(contract))
                  weakEvidenceContracts.push({auditId,rid,kind,route,reason:"measurement detail missing",contract});
                if(kind==="CALCULAR"&&!/(cálculo|superficie|inventario|distancia|recorrido|área|datos de entrada|resultado)/i.test(contract))
                  weakEvidenceContracts.push({auditId,rid,kind,route,reason:"calculation inputs missing",contract});
                if(route==="REVISIÓN DOCUMENTAL"&&!/(registro|documento|bitácora|hds|versión|fecha|responsable|expediente|foto|orden|id|lote|estado de verificación)/i.test(contract))
                  weakEvidenceContracts.push({auditId,rid,kind,route,reason:"documentary proof missing",contract});
                if(route==="INSPECCIÓN DE CAMPO"&&!/(observación|visual|operación real|foto|estado|condición|ubicación|recorrido|demuestre|inspección física)/i.test(contract))
                  weakEvidenceContracts.push({auditId,rid,kind,route,reason:"field proof missing",contract});
                if(route==="GATE DE APLICABILIDAD"&&!/(aplica|no aplica|hecho disparador|trigger|si aplica|aplicabilidad)/i.test(contract))
                  weakEvidenceContracts.push({auditId,rid,kind,route,reason:"applicability trigger missing",contract});
              }
            }
            if(auditAreaCount>0&&auditedRows>0&&!badKinds.length)
              pass(prefix+":audit-all-criteria-evaluation-kind","all area criteria expose an allowed verification mode",{areas:auditAreaCount,rows:auditedRows});
            else fail(prefix+":audit-all-criteria-evaluation-kind","one or more area criteria have missing/invalid verification mode",{areas:auditAreaCount,rows:auditedRows,badKinds});
            if(auditAreaCount>0&&auditedRows>0&&!badContracts.length)
              pass(prefix+":audit-all-criteria-evidence-contract","all area criteria expose an explicit evidence contract",{areas:auditAreaCount,rows:auditedRows});
            else fail(prefix+":audit-all-criteria-evidence-contract","one or more area criteria have missing/invalid evidence contract",{areas:auditAreaCount,rows:auditedRows,badContracts});
            if(auditAreaCount>0&&auditedRows>0&&!badRoutes.length)
              pass(prefix+":audit-all-criteria-verification-route","all area criteria expose an allowed verification route",{areas:auditAreaCount,rows:auditedRows});
            else fail(prefix+":audit-all-criteria-verification-route","one or more area criteria have missing/invalid verification route",{areas:auditAreaCount,rows:auditedRows,badRoutes});
            if(!genericContracts.length)
              pass(prefix+":audit-no-generic-evidence-contracts","no audit criterion uses the banned generic evidence placeholders",{rows:auditedRows});
            else fail(prefix+":audit-no-generic-evidence-contracts","generic evidence placeholders remain in audit criteria",{genericContracts});
            if(!weakEvidenceContracts.length)
              pass(prefix+":audit-evidence-sufficiency","all audit criteria carry evidence sufficient for their mode/route",{rows:auditedRows});
            else fail(prefix+":audit-evidence-sufficiency","one or more audit criteria have evidence too weak for their mode/route",{weakEvidenceContracts});

            const curCalcNav=page.locator('#nav button[data-id="audit-cur"]');
            const calcFailures=[];
            if(await curCalcNav.count()===1){
              await curCalcNav.click();
              await page.waitForSelector('.audit-area-shell[data-audit-area="area-curtiduria"]',{timeout:10000});
              await page.waitForSelector('.audit-area-norm-open[data-norm-id="STPS-025"]',{timeout:10000});
              const luxNormButton=page.locator('.audit-area-norm-open[data-norm-id="STPS-025"]');
              if(await luxNormButton.count()===1){
                await luxNormButton.click();
                const calc=page.locator('.audit-norm-calc[data-calc-req="STPS-025"]');
                if(await calc.count()===1){
                  await calc.locator('[data-calc-field="required"]').fill("300");
                  await calc.locator('[data-calc-field="measured"]').fill("350");
                  await calc.locator('.audit-calc-run').click();
                  const result=(await calc.locator('.audit-calc-result').innerText()).trim();
                  if(!/350/.test(result)||!/lectura ≥ mínimo/i.test(result)) calcFailures.push({id:"STPS-025",result});
                }else calcFailures.push({id:"STPS-025",reason:"calculator missing"});
              }else calcFailures.push({id:"STPS-025",reason:"norm button missing"});
            }else calcFailures.push({id:"area-curtiduria",reason:"audit nav missing"});
            if(!calcFailures.length)
              pass(prefix+":audit-guided-calculator","guided normative calculator executes deterministic check",{calculator:"STPS-025"});
            else fail(prefix+":audit-guided-calculator","guided normative calculator missing or incorrect",{calcFailures});

            const calcStepChecks=[
              {id:"CUR-AREA-03",required:["MEDIR","CALCULAR","DOCUMENTAR"]},
              {id:"CUR-AREA-04",required:["CONDICIONAL","MEDIR","CALCULAR","DOCUMENTAR"]}
            ];
            const calcStepFailures=[];
            const curNav=page.locator('#nav button[data-id="audit-cur"]');
            if(await curNav.count()===1){
              await curNav.click();
              await page.waitForSelector('.audit-area-shell[data-audit-area="area-curtiduria"]',{timeout:10000});
              await page.waitForSelector('tr[data-audit-id="CUR-AREA-03"]',{timeout:10000});
              for(const spec of calcStepChecks){
                const rr=page.locator('tr[data-audit-id="'+spec.id+'"]');
                if(await rr.count()!==1){calcStepFailures.push({id:spec.id,reason:"missing row"});continue;}
                const steps=((await rr.locator(".audit-eval-steps").innerText())||"").split("→").map(x=>x.trim());
                const missing=spec.required.filter(x=>!steps.includes(x));
                if(missing.length) calcStepFailures.push({id:spec.id,steps,missing});
              }
            }else calcStepFailures.push({id:"area-curtiduria",reason:"missing audit nav"});
            if(!calcStepFailures.length)
              pass(prefix+":audit-normative-calculation-steps","measurement criteria retain required downstream calculation steps",{checks:calcStepChecks.map(x=>x.id)});
            else fail(prefix+":audit-normative-calculation-steps","required downstream calculation steps are missing",{calcStepFailures});

            const measuredClosureFailures=[];
            const monNavForMeasured=page.locator('#nav button[data-id="audit-mon"]');
            if(await monNavForMeasured.count()===1){
              await monNavForMeasured.click();
              await page.waitForSelector('tr[data-audit-id="PHYS-LIGHT"]',{timeout:10000});
              const mr=page.locator('tr[data-audit-id="PHYS-LIGHT"]');
              const mStatus=mr.locator(".audit-status");
              const mNote=mr.locator(".audit-note");
              await mNote.fill("ok");
              await mStatus.selectOption("CONFORMING");
              await page.waitForTimeout(100);
              const mSaved=await page.evaluate(()=>{
                try{
                  const state=JSON.parse(localStorage.getItem("roca.audit.area-montaje")||"{}");
                  return state["PHYS-LIGHT"]?.status||"NOT_SAVED";
                }catch{return "PARSE_ERROR"}
              });
              const mValidation=(await mr.locator(".audit-validation").innerText()).trim();
              if(mSaved==="CONFORMING"||!/numérico|genérica|evidencia/i.test(mValidation))
                measuredClosureFailures.push({saved:mSaved,validation:mValidation});
              await mStatus.selectOption("NOT_VERIFIED");
              await mNote.fill("");
            }else measuredClosureFailures.push({reason:"montage audit nav missing"});
            if(!measuredClosureFailures.length)
              pass(prefix+":audit-measured-conforming-requires-data","measured criterion rejects generic CONFORMING note");
            else fail(prefix+":audit-measured-conforming-requires-data","measured criterion accepted weak CONFORMING evidence",{measuredClosureFailures});

            const montage=page.locator('#nav button[data-id="audit-mon"]');
            if(await montage.count()!==1){
              fail(prefix+":audit-montage-nav","audit montage navigation missing");
            }else{
              await montage.click();
              await page.waitForSelector('tr[data-audit-id]',{timeout:10000});
              const row=page.locator('tr[data-audit-id]').first();
              const criterionId=await row.getAttribute("data-audit-id");
              const status=row.locator(".audit-status");
              const note=row.locator(".audit-note");

              const evalBadge=(await row.locator(".audit-eval-badge").innerText()).trim();
              const evalSteps=(await row.locator(".audit-eval-steps").innerText()).trim();
              const evidenceContract=(await row.locator(".audit-evidence-contract").innerText()).trim();
              const verificationRoute=(await row.locator(".audit-route-badge").innerText()).trim();
              const allowedEval=new Set(["CALCULAR","MEDIR","INSPECCIONAR","DOCUMENTAR","CONDICIONAL"]);
              const allowedRoutes=new Set(["CÁLCULO INTERNO","MEDICIÓN DE CAMPO","LAB / ESPECIALISTA","REVISIÓN DOCUMENTAL","GATE DE APLICABILIDAD","INSPECCIÓN DE CAMPO"]);
              if(allowedEval.has(evalBadge)) pass(prefix+":audit-evaluation-kind","criterion exposes an allowed verification mode",{criterionId,evalBadge,evalSteps});
              else fail(prefix+":audit-evaluation-kind","criterion verification mode missing/invalid",{criterionId,evalBadge,evalSteps});
              if(/Demostrar con:/i.test(evidenceContract)&&evidenceContract.length>18)
                pass(prefix+":audit-evidence-contract","criterion exposes explicit evidence contract",{criterionId,evidenceContract});
              else fail(prefix+":audit-evidence-contract","criterion evidence contract missing/too short",{criterionId,evidenceContract});
              if(allowedRoutes.has(verificationRoute))
                pass(prefix+":audit-verification-route","criterion exposes an allowed verification route",{criterionId,verificationRoute});
              else fail(prefix+":audit-verification-route","criterion verification route missing/invalid",{criterionId,verificationRoute});

              await note.fill("");
              await status.selectOption("NONCONFORMING");
              await page.waitForTimeout(100);
              const invalidSaved=await page.evaluate(({areaId,criterionId})=>{
                try{
                  const state=JSON.parse(localStorage.getItem("roca.audit."+areaId)||"{}");
                  return state[criterionId]?.status||"NOT_SAVED";
                }catch{return "PARSE_ERROR"}
              },{areaId:"area-montaje",criterionId});
              const invalidMsg=(await row.locator(".audit-validation").innerText()).trim();
              if(invalidSaved!=="NONCONFORMING"&&invalidMsg.length>0)
                pass(prefix+":audit-empty-nonconforming-blocked","empty NONCONFORMING closure rejected");
              else fail(prefix+":audit-empty-nonconforming-blocked","empty NONCONFORMING was persisted or had no validation",{saved:invalidSaved,message:invalidMsg});

              const gap="QA_BROWSER_GAP_"+criterionId;
              await note.fill(gap);
              await page.waitForTimeout(100);
              const openSaved=await page.evaluate(({areaId,criterionId})=>{
                const state=JSON.parse(localStorage.getItem("roca.audit."+areaId)||"{}");
                return state[criterionId]?.status||"NOT_SAVED";
              },{areaId:"area-montaje",criterionId});
              if(openSaved==="NONCONFORMING") pass(prefix+":audit-nonconforming-persisted","evidenced NONCONFORMING persisted");
              else fail(prefix+":audit-nonconforming-persisted","evidenced NONCONFORMING not persisted",{saved:openSaved});

              await page.goto(base+"/generated/roca-fast-track/implementation.html",{waitUntil:"domcontentloaded"});
              await page.waitForTimeout(300);
              const implBody=await page.locator("body").innerText();
              if(implBody.includes(gap)) pass(prefix+":audit-to-implementation","NONCONFORMING appears in IMPLEMENTAR");
              else fail(prefix+":audit-to-implementation","NONCONFORMING missing from IMPLEMENTAR",{criterionId});
              if(implBody.includes(evalBadge)&&implBody.includes(verificationRoute)&&/cierre:/i.test(implBody))
                pass(prefix+":audit-implementation-evidence-contract","IMPLEMENTAR carries verification mode, route and closure evidence",{criterionId,evalBadge,verificationRoute});
              else fail(prefix+":audit-implementation-evidence-contract","IMPLEMENTAR missing verification mode, route or closure evidence",{criterionId,evalBadge,verificationRoute});

              await page.goto(base+"/index.html",{waitUntil:"domcontentloaded"});
              await page.locator("#auditMode").click();
              await page.locator('#nav button[data-id="audit-mon"]').click();
              await page.waitForSelector('tr[data-audit-id]',{timeout:10000});
              const restoredRow=page.locator('tr[data-audit-id="'+criterionId+'"]');
              await restoredRow.locator(".audit-note").fill("QA closure evidence");
              await restoredRow.locator(".audit-status").selectOption("CONFORMING");
              await page.waitForTimeout(100);
              const closedSaved=await page.evaluate(({areaId,criterionId})=>{
                const state=JSON.parse(localStorage.getItem("roca.audit."+areaId)||"{}");
                return state[criterionId]?.status||"NOT_SAVED";
              },{areaId:"area-montaje",criterionId});
              if(closedSaved==="CONFORMING") pass(prefix+":audit-conforming-persisted","evidenced CONFORMING persisted");
              else fail(prefix+":audit-conforming-persisted","CONFORMING did not persist",{saved:closedSaved});

              await page.goto(base+"/generated/roca-fast-track/implementation.html",{waitUntil:"domcontentloaded"});
              await page.waitForTimeout(300);
              const closedBody=await page.locator("body").innerText();
              if(!closedBody.includes(gap)) pass(prefix+":implementation-closes","corrected criterion disappears from IMPLEMENTAR");
              else fail(prefix+":implementation-closes","corrected criterion still visible in IMPLEMENTAR",{criterionId});

              await page.evaluate(()=>localStorage.removeItem("roca.audit.area-montaje"));
              await page.goto(base+"/index.html",{waitUntil:"domcontentloaded"});
              await page.waitForTimeout(150);
            }
          }catch(e){
            fail(prefix+":audit-flow-exception",e.message||String(e));
            await page.goto(base+"/index.html",{waitUntil:"domcontentloaded"}).catch(()=>{});
          }
        }
      }

      if(route.endsWith("/audit.html")){
        const hasAudit=/AUDIT|Auditar|auditar|auditor/i.test(body);
        if(hasAudit) pass(prefix+":audit-shell","audit surface identified");
        else fail(prefix+":audit-shell","audit surface text missing");
        const controls=await page.locator("button,select,input").count();
        if(controls>0) pass(prefix+":audit-controls","audit controls present",{controls});
        else fail(prefix+":audit-controls","audit controls missing");
      }

      if(route.endsWith("/implementation.html")){
        const decisionCount=(body.match(/DECISIÓN DE IMPLEMENTACIÓN/g)||[]).length;
        if(decisionCount===7) pass(prefix+":implementation-hold-routing","only 7 IMPLEMENT_DECISION HOLDs are rendered",{count:decisionCount});
        else fail(prefix+":implementation-hold-routing","IMPLEMENTAR decision HOLD count mismatch",{count:decisionCount,expected:7});
        const leakedHoldLayers=["DEFINIR ESTÁNDAR","AUDITAR ESTADO ACTUAL","SISTEMA / REGISTRO"].filter(label=>body.includes(label));
        if(!leakedHoldLayers.length) pass(prefix+":implementation-hold-layer-isolation","non-implementation HOLD layers are absent");
        else fail(prefix+":implementation-hold-layer-isolation","non-implementation HOLD layers leaked into IMPLEMENTAR",{labels:leakedHoldLayers});
        if(body.includes("CUR-HOLD-01")) fail(prefix+":cur-hold-01","resolved CUR-HOLD-01 is visible");
        else pass(prefix+":cur-hold-01","resolved CUR-HOLD-01 absent");
        if(body.includes("6.0 L vs 6.4 L")) fail(prefix+":formic-stale","stale 6.0 L vs 6.4 L conflict visible");
        else pass(prefix+":formic-stale","stale formic conflict absent");
        const html=await page.content();
        if(html.includes("operational_calculator_release=BLOCKED")) pass(prefix+":alum-block","ALUM-Tan operational release remains blocked");
        else fail(prefix+":alum-block","ALUM-Tan operational block marker missing");
      }

      if(route.endsWith("/field-walk.html")){
        const controls=await page.locator("button,select,input").count();
        if(controls>0) pass(prefix+":walk-controls","field-walk controls present",{controls});
        else fail(prefix+":walk-controls","field-walk controls missing");
      }

      if(route==="/compliance-cockpit/index.html"){
        const html=await page.content();
        if(html.includes("form-master-data.js")) pass(prefix+":form-master-script","FORM_MASTER overlay script loaded by shell");
        else fail(prefix+":form-master-script","FORM_MASTER overlay script reference missing");
        const navCount=await page.locator("button,a").count();
        if(navCount>0) pass(prefix+":cockpit-nav","cockpit navigation/control elements present",{navCount});
        else fail(prefix+":cockpit-nav","cockpit has no navigation/control elements");
        const rawSensitive=await page.locator('input').evaluateAll(els=>els.map(e=>String(e.value||"")).filter(v=>/^[A-Z]{4}\d{6}[A-Z0-9]{8}$/.test(v)||/^[A-Z]{4}\d{6}[A-Z0-9]{3}$/.test(v)));
        if(rawSensitive.length) fail(prefix+":restricted-values","possible raw CURP/RFC-like value exposed",{count:rawSensitive.length});
        else pass(prefix+":restricted-values","no raw CURP/RFC-like input value detected");
      }

      if(localConsole.length){
        report.console_errors.push({viewport:vp.name,route,errors:localConsole});
        fail(prefix+":console","console/page errors detected",{errors:localConsole});
      } else pass(prefix+":console","no console/page errors");

      if(localNetwork.length){
        report.network_errors.push({viewport:vp.name,route,errors:localNetwork});
        fail(prefix+":network","local 4xx/5xx resources detected",{errors:localNetwork});
      } else pass(prefix+":network","no local 4xx/5xx resources");

      const shot=path.join(out,fileName(vp.name,route));
      await page.screenshot({path:shot,fullPage:true});
      report.screenshots.push(shot);
    }catch(e){
      fail(prefix+":exception",e.message||String(e));
    }finally{
      await context.close();
    }
  }
}
await browser.close();

fs.writeFileSync(path.join(out,"ROCA_BROWSER_VISUAL_QA_RUN.json"),JSON.stringify(report,null,2)+"\n");
const summary=[
  `ROCA browser QA: ${report.verdict}`,
  `HEAD: ${report.tested_head}`,
  `Checks: ${report.checks.filter(x=>x.status==="PASS").length} PASS / ${report.checks.filter(x=>x.status==="FAIL").length} FAIL`,
  `Screenshots: ${report.screenshots.length}`,
  `Console error groups: ${report.console_errors.length}`,
  `Network error groups: ${report.network_errors.length}`
].join("\n");
fs.writeFileSync(path.join(out,"SUMMARY.txt"),summary+"\n");
console.log(summary);
if(report.verdict!=="PASS") process.exit(1);
