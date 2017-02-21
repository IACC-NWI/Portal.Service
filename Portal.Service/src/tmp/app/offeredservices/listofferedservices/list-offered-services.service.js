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
var http_1 = require('@angular/http');
var offered_service_model_1 = require('../offered-service.model');
var ListOfferedServicesService = (function () {
    function ListOfferedServicesService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    ListOfferedServicesService.prototype.getAllOfferedServices = function () {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallservices')
            .map(function (res) {
            var jData = res.json() || [];
            var retData = new Array();
            jData.forEach(function (data) {
                var mo = new offered_service_model_1.OfferedServiceModel();
                mo.Name = data.Name;
                mo.Description = data.Description;
                mo.FestivalName = data.FestivalName;
                mo.FestivalId = data.FestivalId;
                mo.ServiceId = data.ServiceId;
                mo.SuggestedDonation = data.SuggestedDonation;
                retData.push(mo);
            });
            return retData;
        });
    };
    ListOfferedServicesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListOfferedServicesService);
    return ListOfferedServicesService;
}());
exports.ListOfferedServicesService = ListOfferedServicesService;

//# sourceMappingURL=list-offered-services.service.js.map
