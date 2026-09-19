# Vercel — conexión de ROCA Live

Repositorio: `romerobarcenabraulio-hash/ROCA-TAX`

Rama de trabajo: `roca-live-bootstrap`

## Primera conexión
1. En Vercel, elegir **Add New → Project**.
2. Importar `ROCA-TAX` desde GitHub.
3. Framework Preset: **Other**.
4. Root Directory: `.`.
5. Build Command: dejar vacío.
6. Output Directory: dejar vacío.
7. Deploy.

El repositorio contiene un sitio estático en la raíz. No necesita Node ni variables de entorno.

## Revisión segura
No usar `main` como fuente editorial hasta que el bootstrap pase revisión. La rama `roca-live-bootstrap` contiene el trabajo activo. Si Vercel crea producción desde `main`, usar el deployment de Preview correspondiente a `roca-live-bootstrap` para revisar.

## Datos que NO deben entrar al repo público
- clientes de BIWO;
- contratos o expedientes laborales reales;
- documentos de abogados;
- pedimentos/CITES con datos personales o números sensibles;
- identificaciones;
- información fiscal o bancaria;
- archivos privados de trabajadores.

ROCA Live público sólo contiene estructura, estándares sanitizados y contenido expresamente liberable.
