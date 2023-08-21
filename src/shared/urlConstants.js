export const URL = {
  SERVER: "https://globallifesciencedeliverytest.azurewebsites.net/",
  CLIENT: "https://globallifesciencedeliverytest.azurewebsites.net/",
};
export const TRANSACTION_TYPE = {
  FIRSTDOC_CLIENTS: "firstdoc-clients",
  FIRSTPOINT_CLIENTS: "firstpoint-clients",
  TOOLBOXANDWRITER: "toolbox-writer",
  ASSCLOUD_CLIENTS: "aas-cloud-clients",
  SUBMIT_FIRSTDOC_CLIENTS: "FirstDoc Clients",
  SUBMIT_FIRSTPOINT_CLIENTS: "FirstPoint Clients",
  SUBMIT_TOOLBOXANDWRITER: "ToolBox and Writer",
  SUBMIT_ASSCLOUD_CLIENTS: "aaS Cloud Clients",
};

export const API_URL = {
  Country: {
    Add: "api/master/country/add",
    Remove: "api/master/country/remove",
    Update: "api/master/country/update",
    GetAll: "api/master/country/list",
  },
  Company: {
    Add: "api/master/company/add",
    Remove: "api/master/company/remove",
    GetAll: "api/master/company/list",
  },
  BusinessGroup: {
    Add: "api/master/businessGroup/add",
    Remove: "api/master/businessGroup/remove",
    GetAll: "api/master/businessGroup/list",
    CreateForm: "api/master/businessGroup/createForm",
  },
  BusinessArea: {
    Add: "api/master/businessArea/add",
    Remove: "api/master/businessArea/remove",
    GetAll: "api/master/businessArea/list",
    CreateForm: "api/master/businessGroup/createForm",
  },
  Users: {
    Add: "api/master/users/add",
    Remove: "api/master/users/remove",
    GetAll: "api/master/users/list",
    Update: "api/master/users/update",
  },
  Payroll: {
    Submit: 'api/main/finance/submit',
    Remove: 'api/main/finance/remove',
    GetByFiscalYear: "api/main/finance/payroll?fiscal=",
    CreateForm: 'api/main/finance/createPayroll?fiscal=',
  },
  Subcontract: {
    Submit: 'api/main/finance/submit',
    GetByFiscalYear: "api/main/finance/subcontract?fiscal=",
    CreateForm: 'api/main/finance/createSubcontract?fiscal=',
  },
  NonLabour: {
    Submit: 'api/main/finance/submit',
    GetByFiscalYear: "api/main/finance/non_labour?fiscal=",
    CreateForm: 'api/main/finance/createNonLabour?fiscal=',
  },
  UtilizationGroup: {
    Add: 'api/master/utilization/group/add',
    GetAll: 'api/master/utilization/group/list',
    CreateForm: 'api/main/finance/createNonLabour?fiscal=',
    Remove: 'api/master/utilization/group/remove',
  },
  Utilization: {
    Add: 'api/master/utilization/group/add',
    GetByFiscalYear: 'api/main/utilization/report/monthlist?fiscal=',
    GetByMonth: 'api/main/utilization/report/month?reportmonth=',
    GetUploadStatus: 'api/master/utilization/upload/status',
    RemoveHistoryUpload: 'api/master/utilization/upload/status/remove',
    UploadFile: 'api/master/utilization/report/pushdataitems'
  },
  CostStack: {
    GetAll: 'api/main/costStack/list',
    Remove: 'api/master/costStack/remove',
    Add: 'api/master/costStack/add'
  },
  UserAccess: {
    GetAll: 'api/master/userAccess/list',
    Remove: 'api/master/userAccess/remove-businessArea',
    Add: 'api/master/userAccess/assign-by-businessAreas',
    Update: 'api/master/userAccess/update',
    CreateForm: 'api/master/userAccess/assign-business-area-form',
    AssignConsultant: 'api/master/customer/assign-consultant-access'
  },
  CostCenter: {
    Add: 'api/master/costCenter/add',
    Remove: 'api/master/costCenter/remove',
    Update: "api/master/country/update",
    GetAllMaster: 'api/master/costCenter/list',
    GetAllMain: 'api/main/costCenter/list',
    CreateForm: 'api/master/costCenter/createForm'
  },
  Customer: {
    Add: 'api/master/customer/add',
    Remove: 'api/master/customer/remove',
    Update: 'api/master/customer/update',
    GetAll: 'api/master/customer/list',
    AssignByCustomer: 'api/master/customer/assign-by-customer',
    RemoveCustomerUserAccess: 'api/master/customer/remove-customer',
    GetAllMemberList: 'api/main/members/list',
    GetUserAccessAsignByCustomer: 'api/main/customer/list-user-by-customer',
    GetCreateForm: 'api/master/customer/create-form/customer'
  },
  CustomerTransaction: {
    Add: 'api/main/customer/transaction/submit',
    Remove: 'api/main/customer/transaction/remove',
    GetAll: 'api/main/customer/transaction/create-form/customer-excellence',
    Update: "api/master/users/update",
    CreateForm: 'api/main/customer/transaction/create-form/',
    View: 'api/main/customer/transaction/view/customer-excellence',
    Filter: 'api/main/customer/transaction/filter/customer-excellence',
    Import: 'api/main/customer/transaction/data/import-data',
    GetImportStatus: 'api/main/customer/transaction/status/list',
    ApplyChanges: 'api/main/customer/transaction/data/apply-changes-data',
    Subscribe: 'api/main/customer/transaction/data/subscribe',
    Map: 'api/main/customer/transaction/data/map'
  },
  FiscalYear:{
    GetAll: 'api/main/fiscal-year/list',
    Add: 'api/master/fiscal-year/add',
    Update: 'api/master/fiscal-year/update'
  },
  PPMC:{
    GetAll:  'api/main/ppmc-module/list-ppmc-data',
    ProjectList: 'api/master/ppmc-module/list-ppmc-project',
    SubmitProject: 'api/master/ppmc-module/submit-ppmc-project',
    RemoveProject: 'api/master/ppmc-module/remove-ppmc-project',
    ImportProject: 'api/master/ppmc-module/import',
    StatusUpload: 'api/master/ppmc-module/upload-status',
    Filter: 'api/main/ppmc-module/filter/ppmc-data'
  },
  Revenue: {
    UploadRevenue: 'api/master/revenue-module/upload',
    ImportRevenue: 'api/master/revenue-module/import',
    UploadHistory: 'api/master/revenue-module/upload-history',
    Dashboard: 'api/main/revenue-module/dashboard',
    RevenueDetail: 'api/main/revenue-module/revenue-details',
    SubmitRevenue: 'api/master/revenue-module/submit-revenue',
    SaveNewRevenue: 'api/master/revenue-module/save-new-revenue',
    CustomersNoRevenue: 'api/master/revenue-module/list-customer-no-revenue'
  }
};
