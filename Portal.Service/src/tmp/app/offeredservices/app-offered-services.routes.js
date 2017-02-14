"use strict";
var app_shared_1 = require('app-shared');
var add_festival_component_1 = require('./addfestival/add-festival.component');
exports.AppOfferedServicesRoutes = [
    { path: 'addfestival', component: add_festival_component_1.AddFestivalComponent, canActivate: [app_shared_1.AuthActivateGuard] },
];

//# sourceMappingURL=app-offered-services.routes.js.map
