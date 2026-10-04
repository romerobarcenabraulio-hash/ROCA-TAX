(function(root){
  const D=root.ROCA_DATA;
  if(!D) throw new Error('ROCA_DATA required before FORM_MASTER overlay');
  D.formMaster=[
    {key:'applicant_type',label:'Tipo de solicitante / persona física o moral',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Identidad del solicitante para formatos oficiales'},
    {key:'legal_name',label:'Nombre o razón social',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Identidad legal reutilizable'},
    {key:'rfc',label:'RFC',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Identificación fiscal del solicitante'},
    {key:'curp',label:'CURP cuando aplique',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Identificación personal cuando el trámite la exige'},
    {key:'legal_representative',label:'Representante legal',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Representación legal acreditada'},
    {key:'contact_phone',label:'Teléfono de contacto',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Contacto oficial'},
    {key:'contact_email',label:'Correo electrónico de contacto',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Contacto oficial'},
    {key:'address_street',label:'Domicilio - calle/número',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Domicilio para formularios oficiales'},
    {key:'address_locality',label:'Localidad/colonia',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Domicilio para formularios oficiales'},
    {key:'address_municipality',label:'Municipio/alcaldía',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Domicilio para formularios oficiales'},
    {key:'address_state',label:'Entidad federativa',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Domicilio para formularios oficiales'},
    {key:'address_postal_code',label:'Código postal',privacy_class:'RESTRICTED_LEGAL_WILDLIFE',purpose:'Domicilio para formularios oficiales'},
    {key:'site_address',label:'Domicilio del establecimiento',privacy_class:'INTERNAL_OPERATIONAL',purpose:'Ubicación operativa del centro de trabajo'},
    {key:'phone_email',label:'Datos de contacto consolidados',privacy_class:'INTERNAL_OPERATIONAL',purpose:'Contacto administrativo para expedientes locales'}
  ];
  D.formMasterAlias={company_legal_name:'legal_name',legal_name:'legal_name',rfc:'rfc',curp:'curp',legal_representative:'legal_representative',contact_phone:'contact_phone',contact_email:'contact_email',address_street:'address_street',address_locality:'address_locality',address_municipality:'address_municipality',address_state:'address_state',address_postal_code:'address_postal_code',applicant_type:'applicant_type',site_address:'site_address',phone_email:'phone_email'};
})(window);