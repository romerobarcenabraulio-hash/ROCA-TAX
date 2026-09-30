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
      else pass(prefix+":http","route loaded",{status:res.status()});
      await page.waitForTimeout(700);
      const body=(await page.locator("body").innerText()).trim();
      if(body.length<40) fail(prefix+":render","body is blank/too short",{chars:body.length});
      else pass(prefix+":render","body rendered",{chars:body.length});
      const dims=await page.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));
      if(dims.sw>dims.cw+4) fail(prefix+":overflow","horizontal overflow detected",dims);
      else pass(prefix+":overflow","no material horizontal overflow",dims);

      if(route==="/index.html"){
        const compliance=page.locator('a[href*="compliance-cockpit"]');
        if(await compliance.count()) pass(prefix+":compliance-link","COMPLIANCE link present");
        else fail(prefix+":compliance-link","COMPLIANCE link missing");
        const sourceText=await page.getByText("FUENTES",{exact:false}).count();
        if(sourceText) pass(prefix+":sources-entry","FUENTES/source reader entry present");
        else fail(prefix+":sources-entry","FUENTES/source reader entry missing");
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
