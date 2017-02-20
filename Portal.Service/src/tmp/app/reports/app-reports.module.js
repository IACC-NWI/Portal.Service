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
var app_reports_routes_1 = require('./app-reports.routes');
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var donor_list_component_1 = require('./donorlist/donor-list.component');
var donor_list_service_1 = require('./donorlist/donor-list.service');
var donor_range_component_1 = require('./donorrange/donor-range.component');
var donor_range_service_1 = require('./donorrange/donor-range.service');
var purchases_component_1 = require('./purchases/purchases.component');
var purchases_service_1 = require('./purchases/purchases.service');
var AppReportsModule = (function () {
    function AppReportsModule() {
    }
    AppReportsModule = __decorate([
        core_1.NgModule({
            imports: [
                primeng_1.InputTextModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                primeng_1.ButtonModule,
                primeng_1.DataTableModule,
                primeng_1.DropdownModule,
                primeng_1.CalendarModule,
                router_1.RouterModule.forChild(app_reports_routes_1.AppReportsRoutes)],
            declarations: [
                donor_list_component_1.DonorListComponent,
                donor_range_component_1.DonorRangeComponent,
                purchases_component_1.PurchasesComponent
            ],
            providers: [
                donor_list_service_1.DonorListService,
                donor_range_service_1.DonorRangeService,
                purchases_service_1.PurchasesService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppReportsModule);
    return AppReportsModule;
}());
exports.AppReportsModule = AppReportsModule;

//# sourceMappingURL=app-reports.module.js.map
