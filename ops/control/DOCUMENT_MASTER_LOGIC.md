# Lógica del compendio maestro de documentos ROCA

ROCA no debe acumular archivos sin contexto. Cada formato, machote, expediente o evidencia debe responder: qué controla, cuándo se usa, quién lo emite, quién lo firma, qué evidencia genera, dónde vive y qué versión está vigente.

## Familias documentales

### Personal y laboral
- Solicitud/requisición de puesto.
- Alta y expediente de ingreso.
- Contrato individual.
- Confidencialidad y políticas aplicables.
- Inducción.
- Entrega de EPP, herramienta o equipo.
- Capacitación y autorizaciones.
- Incidencias y actas administrativas.
- Cambios de puesto/sueldo/condiciones.
- Vacaciones y permisos.
- Evaluación/competencia.
- Renuncia.
- Rescisión/terminación.
- Finiquito/liquidación.
- Baja y devolución de bienes.

Los documentos sensibles a criterio jurídico permanecen `REQUIERE VALIDACIÓN LEGAL` hasta revisión de abogado.

### Clientes y servicio
El dato maestro del cliente vive en BIWO/ERP. Drive no duplica la base. El compendio controla únicamente formatos/documentos asociados a recepción, autorización, cotización, entrega, aceptación, incidencias, reclamaciones y cierre documental.

### Proveedores y compras
- Alta y evaluación de proveedor.
- Solicitud de compra.
- Orden/confirmación.
- Recepción e inspección.
- No conformidad/devolución.
- Factura/comprobante.
- HDS/documentación técnica cuando aplique.

### Operación, calidad y CAPA
- Checklist de área.
- Auditoría breve entre compañeros.
- Registro de desviación/retrabajo.
- Acción correctiva.
- Verificación de efectividad.
- Liberación/aceptación de pieza o etapa cuando aplique.

### Seguridad, emergencia y EPP
- Entrega/inspección de EPP.
- Inventario químico/HDS.
- Inspección de extintores/equipos.
- Simulacros/brigadas cuando corresponda.
- Incidente/accidente.
- Trabajo en caliente cuando se formalice.

### Mantenimiento y activos
- Alta de activo.
- Manual/ficha.
- Inspección preuso.
- Mantenimiento preventivo/correctivo.
- Repuesto crítico.
- Baja.

### Vida silvestre, importación y exportación
El expediente es condicional por pieza/especie/origen. Puede incluir CITES, autorizaciones, pedimentos, transporte, safari/outfitter, certificados sanitarios y otros documentos aplicables. No convertir la lista en un requisito universal.

## Registro maestro mínimo

`DOC-ID | Nombre | Familia | Evento de uso | Emisor | Firmantes | Evidencia resultante | Ubicación | Versión | Estado | Validación requerida | Retención | Observaciones`

## Estados
- `DRAFT`
- `READY_FOR_INTERNAL_USE`
- `REQUIRES_LEGAL_VALIDATION`
- `CONTROLLED`
- `SUPERSEDED`
- `ARCHIVED`

No usar `CONTROLLED` sólo porque existe un archivo. Debe estar aprobada su versión, propietario y uso.