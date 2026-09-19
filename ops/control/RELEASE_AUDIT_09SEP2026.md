# ROCA Live - Release Audit 09 SEP 2026

Status: BLOCKED - NO LIBERAR COMO VERSION DEFINITIVA

## Lo que ya esta integrado
- Master de 391 paginas preservado como fuente obligatoria.
- Vista DOC FINAL y vista NOTAS separadas.
- Visor directo al master exacto desde Drive.
- Expediente legal sanitizado en HTML.
- Ronda 1 corporativo/poderes: evidencia parcial revisada.
- Ronda 2 inmueble/arrendamiento: evidencia parcial revisada.
- Ronda 7 vida silvestre/CITES: evidencia historica localizada e indexada, sin convertirla en cumplimiento vigente.
- ClickUp actualizado con hallazgos y brechas.

## Bloqueadores que impiden declarar cierre total
1. Vercel: el conector actual devuelve 403 al listar deployments, por lo que no existe verificacion independiente del ultimo deployment desde esta sesion.
2. Evidencia fisica: album completo de fotos ROCA aun pendiente de entrega masiva.
3. Plano: cotas CAD-ready y elementos fijos siguen parcialmente pendientes.
4. Legal: Rondas 3-6 y 8-9 sin paquete suficiente; Rondas 1-2 no estan cerradas documentalmente.
5. CITES/SENASICA/TRACES: hay abundante evidencia historica, pero falta clasificacion por operacion/especie y verificacion de aplicabilidad vigente por caso.
6. Release final: no se ha compilado todavia la impresion privada unica con anexos juridicos sensibles.

## Regla de liberacion
No marcar PASS hasta que:
- el ultimo preview Vercel sea visible y verificado;
- el master exacto permanezca preservado;
- el album fotografico este integrado por requisito/area/proceso;
- los anexos juridicos requeridos esten clasificados y compilables;
- los pendientes de alta criticidad queden cerrados o explicitamente EXTERNAL_DEPENDENCY/APPLICABILITY_PENDING;
- la impresion final privada se genere desde una unica fuente controlada.

## Resultado
FAIL / BLOCKED PARA RELEASE DEFINITIVO.
El proyecto puede seguir operando en modo PRE-CIERRE y recibir nueva evidencia sin rehacer la arquitectura.
