"use strict";
var app_shared_1 = require('app-shared');
var add_festival_component_1 = require('./addfestival/add-festival.component');
var add_offered_services_component_1 = require('./addofferedservices/add-offered-services.component');
exports.AppOfferedServicesRoutes = [
    { path: 'addfestival', component: add_festival_component_1.AddFestivalComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'addofferedservice', component: add_offered_services_component_1.AddOfferedServicesComponent, canActivate: [app_shared_1.AuthActivateGuard] }
];

//# sourceMappingURL=app-offered-services.routes.js.map
