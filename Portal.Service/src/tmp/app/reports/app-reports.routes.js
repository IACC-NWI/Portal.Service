"use strict";
var app_shared_1 = require('app-shared');
var donor_list_component_1 = require('./donorlist/donor-list.component');
var donor_range_component_1 = require('./donorrange/donor-range.component');
var purchases_component_1 = require('./purchases/purchases.component');
exports.AppReportsRoutes = [
    { path: 'donorreport', component: donor_list_component_1.DonorListComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'donorrange', component: donor_range_component_1.DonorRangeComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'purchaserange', component: purchases_component_1.PurchasesComponent, canActivate: [app_shared_1.AuthActivateGuard] },
];

//# sourceMappingURL=app-reports.routes.js.map
