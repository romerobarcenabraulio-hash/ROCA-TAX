# ROCA Audit — checklist del preview canónico

## Fuente única

- Repo: `romerobarcenabraulio-hash/ROCA-TAX`
- Rama de preview: `codex/roca-source-reader`
- PR operativo: `#6`
- Proyecto Vercel: `roca-tax`

## Antes de revisar

- [ ] PR #6 HEAD leído directamente.
- [ ] Vercel reporta `success` en ese mismo SHA.
- [ ] Audit Architecture = PASS.
- [ ] Audit Implementation Integrity = PASS.
- [ ] Derived Ledger Integrity = PASS.
- [ ] Browser QA = PASS.
- [ ] Browser Visual QA = PASS.

## Qué revisar en el único preview

- [ ] MANUAL navega por departamentos sin contenido duplicado.
- [ ] AUDITORÍA abre criterios del área.
- [ ] Rail normativo muestra NOM del área y `VER FUNDAMENTO` por criterio mapeado.
- [ ] El fundamento muestra por qué, qué capturar, cálculo/decisión, cita y fuente.
- [ ] FUENTES mantiene bibliografía/aplicabilidad separada de operación.
- [ ] IMPLEMENTAR contiene sólo brechas temporales.
- [ ] TABLERO MARTES / BUY / TRÁMITES / P0 siguen enlazados.
- [ ] No hay datos privados publicados.
- [ ] No existe otro preview de trabajo documentado como vigente.

## Regla permanente

No crear una segunda URL de preview para el mismo frente.  
Si aparece otra rama/deployment de trabajo, se desactiva, elimina o queda claramente marcado como histórico en cuanto haya acceso administrativo para hacerlo.

