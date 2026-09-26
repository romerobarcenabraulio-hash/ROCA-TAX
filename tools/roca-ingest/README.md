# ROCA PDF Ingest

Motor reusable para dejar de revisar el master página por página.

## Pipeline

PDF 391P → extracción → páginas → módulo/IDs → acciones → diff de controles contra libros V2 → RAW MIRROR + EXCEPCIONES.

## Salidas

- `raw-mirror.html`: espejo semántico página por página. **No es canon.**
- `raw-index.json`: páginas, área detectada, encabezado e IDs.
- `action-register.csv`: hallazgos de compra, instalación/mejora, medición/verificación, evidencia/documentos y conflictos.
- `exceptions.json`: sólo los casos que requieren cirugía humana.
- `summary.json`: conteos por área.

## Uso

```
node tools/roca-ingest/roca-ingest.mjs \
  --pdf ROCA_MASTER_WEB_391P_SOURCE.pdf \
  --books-dir ops/areas \
  --out generated/roca-391 \
  --source-url "<URL Drive>"
```

Si ya existe texto extraído:
```
node tools/roca-ingest/roca-ingest.mjs --text master.txt --books-dir ops/areas --out generated/roca-391
```

## Regla de compras

`BUY_CANDIDATE` **no significa comprar automáticamente**. Si el texto contiene “stock objetivo”, “recomendado”, “pendiente” o un método no implementado, el estado queda `CONFIRM_FIRST` o `BLOCKED`.

Los parámetros R1, entrevistas primarias, métodos no liberados y conflictos van a `exceptions.json`.
