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
var app_home_routes_1 = require('./app-home.routes');
var home_component_1 = require('./home.component');
var home_service_1 = require('./home.service');
var AppHomeModule = (function () {
    function AppHomeModule() {
    }
    AppHomeModule = __decorate([
        core_1.NgModule({
            imports: [
                primeng_1.InputTextModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                primeng_1.ButtonModule,
                primeng_1.AutoCompleteModule,
                primeng_1.DropdownModule,
                primeng_1.PanelModule,
                primeng_1.CalendarModule,
                router_1.RouterModule.forChild(app_home_routes_1.AppHomeRoutes)],
            declarations: [home_component_1.HomeComponent],
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppHomeModule);
    return AppHomeModule;
}());
exports.AppHomeModule = AppHomeModule;

//# sourceMappingURL=app-home.module.js.map
