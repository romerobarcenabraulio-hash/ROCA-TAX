#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_RULES = path.join(HERE, "rules.json");

const strip = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const clean = s => strip(s).replace(/\s+/g," ").trim();
const any = (s, list=[]) => list.some(x => new RegExp(x,"i").test(s));

export function split391(text, total=391){
  const re = new RegExp("(\\d{1,3})\\s*\\/\\s*" + total, "g");
  const out=[]; let start=0, m;
  while((m=re.exec(text))!==null){
    out.push({page:Number(m[1]), text:text.slice(start,m.index).replace(/\r/g,"").trim()});
    start=re.lastIndex;
  }
  if(out.length!==total) throw new Error(`Expected ${total} page markers; found ${out.length}`);
  return out;
}

export function controls(text){
  const set=new Set();
  for(const re of [
    /\b[A-Z]{2,5}-AREA-\d{2}\b/g,
    /\b[A-Z]{2,5}-(?:AUD|MET)-\d{2}\b/g,
    /\bEVID-[A-Z]{2,5}-\d{2}\b/g,
    /\bTS-\d{3}\b/g,
    /\bREQ-[A-Z0-9-]+\b/g
  ]) for(const m of text.matchAll(re)) set.add(m[0]);
  return [...set].sort();
}

export function segment(text, rules, total=391){
  let area="GLOBAL";
  return split391(text,total).map(p=>{
    const mm=p.text.match(/M[ÓO]DULO OPERATIVO\s*·\s*([A-Z]{2,5})/i);
    if(mm) area=mm[1].toUpperCase();
    const lines=p.text.split("\n").map(x=>x.trim()).filter(Boolean);
    return {...p, area_code:area, area:rules.areas[area]||area,
      heading:lines.find(x=>x.length>3&&x.length<140)||"",
      controls:controls(p.text)};
  });
}

function risk(text,rules){
  if(any(text,rules.risk.R1)) return "R1";
  if(any(text,rules.risk.R2)) return "R2";
  return "R3";
}
function status(text){
  if(/m[eé]todo no liberado|NOT_IMPLEMENTED|NO IMPLEMENTADO|objetivo operativo inicial|stock objetivo|recomendad[oa]|por confirmar|pendiente/i.test(text)) return "CONFIRM_FIRST";
  if(/HOLD|conflicto|no canon|NO LIBERAR/i.test(text)) return "BLOCKED";
  return "FIELD_CHECK";
}
export function actions(pages,rules){
  const out=[], seen=new Set();
  for(const p of pages){
    const lines=p.text.split("\n").map(x=>x.trim()).filter(x=>x.length>8);
    for(let i=0;i<lines.length;i++){
      const ctx=[lines[i],lines[i+1]||"",lines[i+2]||""].join(" ").replace(/\s+/g," ").trim();
      for(const [kind,patterns] of Object.entries(rules.actions)){
        if(!any(ctx,patterns)) continue;
        const key=[p.page,p.area_code,kind,clean(ctx).slice(0,180)].join("|");
        if(seen.has(key)) continue; seen.add(key);
        out.push({action_class:kind,area_code:p.area_code,area:p.area,source_page:p.page,risk:risk(ctx,rules),
          status:status(ctx),control_ids:controls(ctx).join(" "),text:ctx.slice(0,420)});
      }
    }
  }
  return out;
}
export function exceptions(pages,books,rules){
  const out=[], src={};
  for(const p of pages){
    src[p.area_code] ||= new Set();
    p.controls.forEach(x=>src[p.area_code].add(x));
    if(/m[eé]todo no liberado/i.test(p.text)) out.push(e("METHOD_UNRELEASED",p,"R1","Source explicitly blocks the technical method."));
    if(/ENTREVISTA DE PROCESO/i.test(p.text)) out.push(e("PRIMARY_INTERVIEW",p,"R2","Primary interview detected; prefer it over derivative prose for the same fact."));
    if(/objetivo operativo inicial|stock objetivo inicial|kit individual recomendado/i.test(p.text)) out.push(e("PROPOSAL_NOT_REQUIREMENT",p,"R2","Historical planning proposal; do not auto-convert to purchase."));
    if(/\b\d+(?:[.,]\d+)?\s*(?:L|ml|kg|g|%|lux|mm|cm|m)\b/i.test(p.text) && risk(p.text,rules)==="R1")
      out.push(e("HIGH_RISK_PARAMETER",p,"R1","Numeric parameter in high-risk context; manual source review required."));
  }
  for(const [code,book] of Object.entries(books||{})){
    const s=src[code]||new Set(), c=new Set(controls(book));
    for(const id of s) if(/-AREA-/.test(id)&&!c.has(id)) out.push({type:"SOURCE_CONTROL_MISSING_IN_CANONICAL",area_code:code,area:rules.areas[code]||code,source_page:null,risk:"R2",detail:id});
    for(const id of c) if(/-AREA-/.test(id)&&!s.has(id)) out.push({type:"CANONICAL_CONTROL_ADDED_AFTER_SOURCE",area_code:code,area:rules.areas[code]||code,source_page:null,risk:"R2",detail:id});
    if(/HOLD|BLOCKED|NO LIBERAR|NOT_IMPLEMENTED/i.test(book)) out.push({type:"CANONICAL_OPEN_BLOCKER",area_code:code,area:rules.areas[code]||code,source_page:null,risk:"R2",detail:"Canonical area book contains an explicit blocker."});
  }
  const seen=new Set(); return out.filter(x=>{const k=JSON.stringify(x);if(seen.has(k))return false;seen.add(k);return true;});
}
const e=(type,p,risk,detail)=>({type,area_code:p.area_code,area:p.area,source_page:p.page,risk,detail});

export function csv(rows){
  if(!rows.length) return "";
  const cols=Object.keys(rows[0]), q=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
  return [cols.map(q).join(","),...rows.map(r=>cols.map(c=>q(r[c])).join(","))].join("\n")+"\n";
}
export function summary(pages,act,ex){
  const areas={};
  for(const p of pages){areas[p.area_code]||={area:p.area,pages:0,first_page:p.page,last_page:p.page,actions:{},exceptions:0};areas[p.area_code].pages++;areas[p.area_code].last_page=p.page;}
  for(const a of act){areas[a.area_code]||={area:a.area,pages:0,first_page:null,last_page:null,actions:{},exceptions:0};areas[a.area_code].actions[a.action_class]=(areas[a.area_code].actions[a.action_class]||0)+1;}
  for(const x of ex){areas[x.area_code]||={area:x.area,pages:0,first_page:null,last_page:null,actions:{},exceptions:0};areas[x.area_code].exceptions++;}
  return {generated_at:new Date().toISOString(),pages:pages.length,actions:act.length,exceptions:ex.length,areas};
}
const esc=s=>String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
export function mirror(pages,act,ex,sourceUrl=""){
  const first=[]; let last="";
  for(const p of pages) if(p.area_code!==last){first.push(p);last=p.area_code;}
  const nav=first.map(p=>`<a href="#p${p.page}">${esc(p.area)} · p.${p.page}</a>`).join("");
  const body=pages.map(p=>`<section id="p${p.page}"><header><span>p. ${p.page}</span><b>${esc(p.area)}</b></header><h2>${esc(p.heading)}</h2><pre>${esc(p.text)}</pre></section>`).join("");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ROCA RAW 391P</title><style>body{margin:0;background:#ddd8cf;color:#171717;font-family:Arial,sans-serif}.top{position:sticky;top:0;background:#17232e;color:#fff;padding:14px 20px;z-index:5}.top a{color:#fff}nav{display:flex;gap:12px;overflow:auto;padding:10px 20px;background:#f5f1e8}nav a{white-space:nowrap;color:#7a4d2b}main{max-width:1050px;margin:auto;padding:22px}section{background:#fff;margin:0 0 20px;padding:28px;border:1px solid #bbb}section header{display:flex;justify-content:space-between;color:#777;font-size:12px}h1{margin:0 0 5px;font-size:20px}h2{font-size:18px}pre{white-space:pre-wrap;font:13px/1.5 ui-monospace,monospace}.meta{font-size:12px;color:#ddd}</style></head><body><div class="top"><h1>ROCA · RAW PDF MIRROR · 391P</h1><div class="meta">No es canon · ${pages.length} páginas · ${act.length} hallazgos · ${ex.length} excepciones · <a href="action-register.csv">acciones</a> · <a href="exceptions.json">excepciones</a> · <a href="summary.json">resumen</a>${sourceUrl?` · <a href="${esc(sourceUrl)}">PDF fuente</a>`:""}</div></div><nav>${nav}</nav><main>${body}</main></body></html>`;
}
function infer(name){
  const n=name.toUpperCase();
  return n.includes("RECEPCION")?"REC":n.includes("CURTIDURIA")?"CUR":n.includes("FORMAS")?"FMR":n.includes("MONTAJE")?"MON":n.includes("RETOQUE")?"RET":n.includes("BASES")?"BAS":n.includes("CARPINTERIA")?"CAR":n.includes("SOLDADURA")?"SOL":n.includes("BLANQUEADO")?"BLA":n.includes("SOPORTE")?"SUP":null;
}
export function loadBooks(dir){
  const out={}; if(!dir||!fs.existsSync(dir)) return out;
  for(const n of fs.readdirSync(dir)){if(!n.endsWith(".md"))continue;const c=infer(n);if(c)out[c]=fs.readFileSync(path.join(dir,n),"utf8");}
  return out;
}
function pdfText(file){
  const p=spawnSync("pdftotext",["-layout","-enc","UTF-8",file,"-"],{encoding:"utf8",maxBuffer:64*1024*1024});
  if(p.error) throw new Error("pdftotext unavailable; install Poppler or use --text.");
  if(p.status!==0) throw new Error(p.stderr||"pdftotext failed"); return p.stdout;
}
function argv(){
  const o={}; for(let i=2;i<process.argv.length;i++) if(process.argv[i].startsWith("--")){const k=process.argv[i].slice(2);o[k]=process.argv[i+1]&&!process.argv[i+1].startsWith("--")?process.argv[++i]:true;} return o;
}
export function run(o){
  const rules=JSON.parse(fs.readFileSync(o.rules||DEFAULT_RULES,"utf8"));
  const text=o.text?fs.readFileSync(o.text,"utf8"):pdfText(o.pdf);
  const pages=segment(text,rules,Number(o.pages||391)), books=loadBooks(o["books-dir"]), act=actions(pages,rules), ex=exceptions(pages,books,rules), sum=summary(pages,act,ex);
  const dir=o.out||"generated/roca-391"; fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,"raw-index.json"),JSON.stringify({source:o["source-url"]||null,pages},null,2));
  fs.writeFileSync(path.join(dir,"action-register.csv"),csv(act));
  fs.writeFileSync(path.join(dir,"exceptions.json"),JSON.stringify(ex,null,2));
  fs.writeFileSync(path.join(dir,"summary.json"),JSON.stringify(sum,null,2));
  fs.writeFileSync(path.join(dir,"raw-mirror.html"),mirror(pages,act,ex,o["source-url"]||""));
  console.log(JSON.stringify(sum,null,2)); return {pages,actions:act,exceptions:ex,summary:sum};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const o=argv(); if(!o.pdf&&!o.text){console.error("Usage: node tools/roca-ingest/roca-ingest.mjs --pdf master.pdf --books-dir ops/areas --out generated/roca-391");process.exit(2);} run(o);
}
