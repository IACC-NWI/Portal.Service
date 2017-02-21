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
var list_offered_services_service_1 = require('./list-offered-services.service');
var ListOfferedServicesComponent = (function () {
    function ListOfferedServicesComponent(listOfferedServicesSvc) {
        this.listOfferedServicesSvc = listOfferedServicesSvc;
        this.offeredServices = new Array();
    }
    ListOfferedServicesComponent.prototype.ngOnInit = function () {
        var self = this;
        this.listOfferedServicesSvc.getAllOfferedServices().subscribe(function (ret) { return self.offeredServices = ret; });
    };
    ListOfferedServicesComponent = __decorate([
        core_1.Component({
            selector: 'iacc-list-offered-services',
            templateUrl: 'app/offeredservices/listofferedservices/list-offered-services.html'
        }), 
        __metadata('design:paramtypes', [list_offered_services_service_1.ListOfferedServicesService])
    ], ListOfferedServicesComponent);
    return ListOfferedServicesComponent;
}());
exports.ListOfferedServicesComponent = ListOfferedServicesComponent;

//# sourceMappingURL=list-offered-services.component.js.map
