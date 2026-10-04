import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/+esm";

const FN_BASE="https://jtmoteixwlcqqikhpxfq.supabase.co/functions/v1";
const authState=document.getElementById("authState");
const authEmail=document.getElementById("authEmail");
const requestLogin=document.getElementById("requestLogin");
const signOut=document.getElementById("signOutManual");
const freeze=document.getElementById("freezeDepartment");
const unlock=document.getElementById("unlockDepartment");
const chooseImages=document.getElementById("chooseImages");
const imagePicker=document.getElementById("imagePicker");
const imagePlacement=document.getElementById("imagePlacement");
const imageSectionKey=document.getElementById("imageSectionKey");
const imageCaption=document.getElementById("imageCaption");
const imageQueue=document.getElementById("imageQueue");
const loginBox=document.getElementById("authLoginBox");

let supabase=null;
let session=null;
let role=null;

function setAuthMessage(message){
  if(authState) authState.textContent=String(message||"");
}

function dispatchAuth(){
  window.ROCA_MANUAL_AUTH={
    ready:Boolean(supabase),
    canEdit:role==="owner"||role==="admin",
    role,
    session,
    getBaseline:async(departmentId)=>{
      if(!supabase) return null;
      const {data,error}=await supabase
        .from("roca_manual_department_baselines")
        .select("*")
        .eq("department_id",departmentId)
        .maybeSingle();
      if(error) throw error;
      return data;
    }
  };
  document.dispatchEvent(new CustomEvent("roca:authchange",{detail:{role,authenticated:Boolean(session)}}));
}

async function loadConfig(){
  const res=await fetch(FN_BASE+"/roca-manual-public-config",{cache:"no-store"});
  if(!res.ok) throw new Error("No se pudo cargar configuración de acceso.");
  const cfg=await res.json();
  if(!cfg.url||!cfg.anonKey) throw new Error("Configuración de acceso incompleta.");
  return cfg;
}

async function resolveRole(){
  role=null;
  if(!supabase||!session) return;

  // El primer acceso autorizado reclama únicamente el rol previamente
  // permitido por backend. Un correo no allowlisted no puede autoelevarse.
  await supabase.rpc("roca_manual_claim_allowed_role");

  const {data,error}=await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id",session.user.id);
  if(error) throw error;

  const roles=(data||[]).map(x=>x.role);
  role=roles.includes("owner")?"owner":roles.includes("admin")?"admin":null;
}

function renderAuth(){
  const editing=role==="owner"||role==="admin";
  if(session){
    const email=session.user?.email||"sesión autenticada";
    setAuthMessage(editing?email+" · "+role.toUpperCase():email+" · SIN PERMISO DE EDICIÓN");
    if(loginBox) loginBox.hidden=true;
    if(signOut) signOut.hidden=false;
  }else{
    setAuthMessage("Sin sesión administrativa.");
    if(loginBox) loginBox.hidden=false;
    if(signOut) signOut.hidden=true;
  }
  dispatchAuth();
}

async function refreshSession(nextSession){
  session=nextSession||null;
  try{
    await resolveRole();
  }catch(e){
    role=null;
  }
  renderAuth();
}

async function init(){
  try{
    const cfg=await loadConfig();
    supabase=createClient(cfg.url,cfg.anonKey,{
      auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}
    });

    const {data:{session:initial}}=await supabase.auth.getSession();
    await refreshSession(initial);

    if(initial){
      const returnHash=sessionStorage.getItem("roca.manual.returnHash");
      if(returnHash && /^#(?:portada|area-|audit-)/.test(returnHash)){
        sessionStorage.removeItem("roca.manual.returnHash");
        if(location.hash!==returnHash) location.hash=returnHash;
      }
    }

    supabase.auth.onAuthStateChange((_event,nextSession)=>{
      setTimeout(()=>refreshSession(nextSession),0);
    });
  }catch(e){
    setAuthMessage("Acceso administrativo no disponible.");
    dispatchAuth();
  }
}

requestLogin?.addEventListener("click",async()=>{
  const email=String(authEmail?.value||"").trim().toLowerCase();
  if(!email){ setAuthMessage("Escribe el correo autorizado."); return; }

  sessionStorage.setItem("roca.manual.returnHash",location.hash||"#portada");
  requestLogin.disabled=true;
  setAuthMessage("Solicitando acceso…");
  try{
    const redirectTo=location.origin+location.pathname;
    const res=await fetch(FN_BASE+"/roca-manual-request-login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,redirectTo})
    });
    const body=await res.json().catch(()=>({}));
    if(!res.ok) throw new Error(body.error||"No se pudo solicitar acceso.");
    setAuthMessage("Si el correo está autorizado, recibirá un enlace de acceso.");
  }catch(e){
    setAuthMessage("No se pudo solicitar acceso.");
  }finally{
    requestLogin.disabled=false;
  }
});

signOut?.addEventListener("click",async()=>{
  if(supabase) await supabase.auth.signOut();
  session=null; role=null; renderAuth();
});

freeze?.addEventListener("click",async()=>{
  const departmentId=window.ROCA_MANUAL_CONTROL?.currentDepartment?.();
  if(!supabase||!session||!(role==="owner"||role==="admin")||!departmentId) return;

  freeze.disabled=true;
  window.ROCA_MANUAL_CONTROL?.setNote("Congelando línea base…");
  const {error}=await supabase.rpc("roca_manual_freeze_department",{_department_id:departmentId});
  if(error){
    window.ROCA_MANUAL_CONTROL?.setNote("No se pudo congelar: "+error.message);
  }else{
    window.ROCA_MANUAL_CONTROL?.setNote("Línea base congelada y registrada en historial.");
  }
  await window.ROCA_MANUAL_CONTROL?.refresh?.();
});

unlock?.addEventListener("click",async()=>{
  const departmentId=window.ROCA_MANUAL_CONTROL?.currentDepartment?.();
  if(!supabase||!session||!(role==="owner"||role==="admin")||!departmentId) return;

  const reason=window.prompt("Motivo para desbloquear esta línea base:");
  if(!reason||!reason.trim()) return;

  unlock.disabled=true;
  window.ROCA_MANUAL_CONTROL?.setNote("Desbloqueando línea base…");
  const {error}=await supabase.rpc("roca_manual_unlock_department",{
    _department_id:departmentId,
    _reason:reason.trim()
  });
  if(error){
    window.ROCA_MANUAL_CONTROL?.setNote("No se pudo desbloquear: "+error.message);
  }else{
    window.ROCA_MANUAL_CONTROL?.setNote("Línea base desbloqueada. La nueva versión quedó registrada.");
  }
  await window.ROCA_MANUAL_CONTROL?.refresh?.();
});

chooseImages?.addEventListener("click",()=>imagePicker?.click());

imagePicker?.addEventListener("change",async()=>{
  const departmentId=window.ROCA_MANUAL_CONTROL?.currentDepartment?.();
  if(!supabase||!session||!(role==="owner"||role==="admin")||!departmentId){
    if(imagePicker) imagePicker.value="";
    return;
  }

  const files=Array.from(imagePicker.files||[]);
  if(!files.length) return;

  chooseImages.disabled=true;
  const placement=String(imagePlacement?.value||"inline");
  const sectionKey=String(imageSectionKey?.value||"general").trim()||"general";
  const caption=String(imageCaption?.value||"").trim();

  for(const file of files){
    const validType=["image/jpeg","image/png","image/webp","image/avif"].includes(file.type);
    if(!validType||file.size<=0||file.size>26214400){
      appendImageResult(file.name,"RECHAZADA · tipo o tamaño no permitido");
      continue;
    }

    const safeName=file.name.replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"imagen";
    const path="manual/"+departmentId.replace(/[^a-zA-Z0-9_-]/g,"")+"/"+crypto.randomUUID()+"-"+safeName;

    appendImageResult(file.name,"SUBIENDO…");
    const {error:uploadError}=await supabase.storage
      .from("roca-private-media")
      .upload(path,file,{contentType:file.type,upsert:false,cacheControl:"3600"});

    if(uploadError){
      appendImageResult(file.name,"ERROR DE CARGA");
      continue;
    }

    const {data:link,error:registerError}=await supabase.rpc("roca_manual_register_media",{
      _department_id:departmentId,
      _storage_path:path,
      _file_name:file.name,
      _mime_type:file.type,
      _file_size_bytes:file.size,
      _section_key:sectionKey,
      _placement:placement,
      _caption:caption||null,
      _alt_text:caption||file.name,
      _source_channel:"portal",
      _source_ref:null
    });

    if(registerError){
      await supabase.storage.from("roca-private-media").remove([path]);
      appendImageResult(file.name,"REGISTRO FALLÓ · archivo revertido");
      continue;
    }

    let preview=null;
    const {data:signed}=await supabase.storage.from("roca-private-media").createSignedUrl(path,600);
    preview=signed?.signedUrl||null;
    appendImageResult(file.name,"GUARDADA · "+placement+" · "+sectionKey,preview,link);
  }

  imagePicker.value="";
  chooseImages.disabled=!(role==="owner"||role==="admin");
});

function appendImageResult(name,statusText,previewUrl=null,link=null){
  if(!imageQueue) return;
  const row=document.createElement("div");
  row.className="image-upload-result";
  if(previewUrl){
    const img=document.createElement("img");
    img.src=previewUrl;
    img.alt=name;
    row.appendChild(img);
  }
  const copy=document.createElement("div");
  const strong=document.createElement("strong");
  strong.textContent=name;
  const span=document.createElement("span");
  span.textContent=statusText;
  copy.append(strong,span);
  if(link){
    const small=document.createElement("small");
    small.textContent="Vínculo de manual registrado.";
    copy.appendChild(small);
  }
  row.appendChild(copy);
  imageQueue.prepend(row);
}

init();
