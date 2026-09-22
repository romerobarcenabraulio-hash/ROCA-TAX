# ROCA TAXIDERMY — Mapa de eventos BIWO / pieza V2

Estado: CONTROL PREPARED / UI LABELS PENDING

El objetivo es que pieza física, estado digital, condición comercial y evidencia cuenten la misma historia. Este mapa define eventos semánticos; no inventa los nombres de botones o estados que aparezcan en BIWO.

| EVT | Momento físico | Evento semántico BIWO | Evidencia / dato mínimo | Gate |
|---|---|---|---|---|
| BIWO-EVT-01 | Ingreso | abrir o confirmar ID de pieza/orden | identidad + cliente/referencia + documentación disponible + condición/foto cuando corresponda | no avanzar con identidad no reconciliada |
| BIWO-EVT-02 | Recepción → Curtiduría / espera | registrar etapa y transferencia | área destino + responsable/ubicación si aplica | pieza físicamente localizada |
| BIWO-EVT-03 | Incidencia técnica | registrar incidencia/retrabajo | qué ocurrió + pieza + acción/siguiente responsable | desviación crítica bloquea avance |
| BIWO-EVT-04 | Necesidad de forma | registrar forma requerida / por definir | medidas/referencia/pose cuando corresponda | no montar sin forma definida/lista |
| BIWO-EVT-05 | Forma lista / asignación | asociar forma o fabricación | forma usada/código cuando exista | forma y pieza deben corresponder |
| BIWO-EVT-06 | Montaje en curso / secado | asignar y actualizar avance | área/etapa real + incidencia si existe | digital coincide con físico |
| BIWO-EVT-07 | Retoque/Base / cierre técnico | actualizar etapa y condición final | retrabajo, foto final cuando aporta, liberación técnica | defecto pendiente regresa a origen |
| BIWO-EVT-08 | Lista para entrega | marcar condición de entrega | control final + condición comercial | entrega requiere pago completo |
| BIWO-EVT-09 | Entrega/cierre | registrar entrega y cierre | fecha + acuse/evidencia aplicable | pieza deja custodia de ROCA |

## Reglas

- Venta no equivale a cobro.
- El sistema no sustituye la pieza física ni la evidencia.
- Un cambio de pantalla no prueba que el handoff ocurrió.
- Los nombres exactos de estados, campos y botones permanecen PENDING_UI_VERIFICATION.
- Drive conserva permisos, fotos/documentos y evidencia profunda; BIWO conserva el estado operativo/comercial que corresponda.
- No crear una base paralela de clientes para “ayudar” al manual.

## Cierre pendiente

Capturar del BIWO real:
1. nombre exacto de cada estado;
2. pantalla/campo donde se registra;
3. quién puede cambiarlo;
4. evidencia que queda;
5. qué evento automático existe;
6. qué excepciones requieren incidencia.
