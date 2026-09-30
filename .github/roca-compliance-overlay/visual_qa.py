#!/usr/bin/env python3
import json, os, sys, time
from pathlib import Path
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait

BASE=os.environ.get("ROCA_QA_BASE","http://127.0.0.1:8000")
OUT=Path(os.environ.get("ROCA_QA_OUT","qa-browser"))
OUT.mkdir(parents=True,exist_ok=True)
errors=[]
checks=[]

def record(name, ok, detail=""):
    checks.append({"name":name,"ok":bool(ok),"detail":detail})
    if not ok: errors.append(f"{name}: {detail}")

opts=Options()
opts.add_argument("--headless=new")
opts.add_argument("--no-sandbox")
opts.add_argument("--disable-dev-shm-usage")
opts.add_argument("--window-size=1440,1100")
opts.set_capability("goog:loggingPrefs", {"browser":"ALL"})
driver=webdriver.Chrome(options=opts)
wait=WebDriverWait(driver,15)

def no_severe(label):
    bad=[]
    for row in driver.get_log("browser"):
        msg=row.get("message","")
        if row.get("level")=="SEVERE" and "favicon" not in msg.lower():
            bad.append(msg)
    record(label+" console",not bad," | ".join(bad[:8]))

def page_ok(label,min_chars=300):
    body=driver.find_element(By.TAG_NAME,"body").text.strip()
    record(label+" body",len(body)>=min_chars,f"chars={len(body)}")
    record(label+" no404","404" not in driver.title and "404 Not Found" not in body[:500],driver.title)
    driver.save_screenshot(str(OUT/(label+".png")))
    p=OUT/(label+".png")
    record(label+" screenshot",p.exists() and p.stat().st_size>10000,f"bytes={p.stat().st_size if p.exists() else 0}")
    no_severe(label)

try:
    driver.get(BASE+"/")
    wait.until(lambda d: d.find_element(By.ID,"page").text.strip())
    record("manual title","Documento maestro" in driver.title,driver.title)
    page_ok("manual")

    for element_id,label in [("auditMode","audit"),("normsMode","bibliografia")]:
        driver.find_element(By.ID,element_id).click()
        time.sleep(0.8)
        wait.until(lambda d: len(d.find_element(By.ID,"page").text.strip())>100)
        page_ok(label)

    driver.get(BASE+"/generated/roca-fast-track/implementation.html")
    wait.until(lambda d: len(d.find_element(By.TAG_NAME,"body").text.strip())>100)
    page_ok("implementation",500)

    driver.get(BASE+"/compliance-cockpit/index.html")
    wait.until(lambda d: len(d.find_element(By.TAG_NAME,"body").text.strip())>100)
    page_ok("compliance",500)

finally:
    driver.quit()

(OUT/"qa-result.json").write_text(json.dumps({"checks":checks,"errors":errors},indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
for c in checks:
    print(("PASS" if c["ok"] else "FAIL"),c["name"],c["detail"])
if errors:
    print("QA_ERRORS",json.dumps(errors,ensure_ascii=False))
    raise SystemExit(1)
print(f"PASS browser QA: {len(checks)} checks; screenshots={len(list(OUT.glob('*.png')))}")
