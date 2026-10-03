# Vercel — ROCA Audit / preview controlado

Repositorio: `romerobarcenabraulio-hash/ROCA-TAX`

## Regla vigente

- Preview canónico único: rama `codex/roca-source-reader`.
- `main` se conserva como rama de producción y no se usa como preview de trabajo.
- Cualquier otra rama queda bloqueada para despliegue automático por `vercel.json`.
- No crear previews manuales adicionales salvo recuperación controlada.
- No reutilizar URLs de previews antiguos en documentación, Linear o handoffs.
- Si Vercel conserva deployments históricos en su panel, tratarlos como históricos; el único preview operativo es el asociado al HEAD vigente de `codex/roca-source-reader`.

## Configuración del proyecto

- Project: `roca-tax`
- Framework Preset: `Other`
- Root Directory: `.`
- Sitio estático; sin comando de build obligatorio.
- `vercel.json` contiene headers de seguridad/noindex y la política de ramas desplegables.

## Validación

Antes de usar un preview como referencia:
1. Leer PR #6 / HEAD real.
2. Confirmar estado Vercel `success` en ese mismo commit.
3. Confirmar los cinco gates ROCA del HEAD.
4. Usar sólo el preview generado por la rama canónica.

## Regla de limpieza

Orden y limpieza son parte del control de release:
- un solo preview operativo;
- un solo HEAD de referencia;
- documentación sin ramas/URLs obsoletas;
- producción intacta;
- no tocar proyectos Vercel ajenos.

