"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var app_offered_services_routes_1 = require('./app-offered-services.routes');
var add_festival_component_1 = require('./addfestival/add-festival.component');
var add_festival_service_1 = require('./addfestival/add-festival.service');
var AppOfferedServicesModule = (function () {
    function AppOfferedServicesModule() {
    }
    AppOfferedServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                primeng_1.ButtonModule,
                primeng_1.InputTextModule,
                primeng_1.DataTableModule,
                primeng_1.EditorModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(app_offered_services_routes_1.AppOfferedServicesRoutes)],
            declarations: [
                add_festival_component_1.AddFestivalComponent
            ],
            providers: [
                add_festival_service_1.AddFestivalService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppOfferedServicesModule);
    return AppOfferedServicesModule;
}());
exports.AppOfferedServicesModule = AppOfferedServicesModule;

//# sourceMappingURL=app-offered-services.module.js.map
