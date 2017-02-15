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
var festival_model_1 = require('../festival.model');
var AddOfferedServicesService = (function () {
    function AddOfferedServicesService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    AddOfferedServicesService.prototype.addNewOfferedService = function (model) {
        var _this = this;
        return this.http.post(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/addnewservice', model)
            .map(function (res) { return _this.convertJsonToOfferedServiceModel(res); })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    AddOfferedServicesService.prototype.getAllFestivals = function () {
        var _this = this;
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallfestivals')
            .map(function (res) { return _this.convertJsonToFestivalModelArray(res); })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    AddOfferedServicesService.prototype.convertJsonToOfferedServiceModel = function (data) {
        var offeredSvcData = data.json() || {};
        var ret = new offered_service_model_1.OfferedServiceModel();
        ret.Name = offeredSvcData.Name;
        ret.Description = offeredSvcData.Description;
        ret.FestivalId = offeredSvcData.FestivalId;
        ret.FestivalName = offeredSvcData.FestivalName;
        ret.ServiceId = offeredSvcData.ServiceId;
        return ret;
    };
    AddOfferedServicesService.prototype.convertJsonToFestivalModelArray = function (data) {
        var festivalData = data.json() || [];
        var retData = new Array();
        festivalData.forEach(function (t) {
            var ret = new festival_model_1.FestivalModel();
            ret.FestivalId = t.FestivalId;
            ret.Description = t.Description;
            ret.Name = t.Name;
            retData.push(ret);
        });
        return retData;
    };
    AddOfferedServicesService.prototype.convertJsonToOfferedServiceModelArray = function (data) {
        var offeredSvcData = data.json() || [];
        var retData = new Array();
        offeredSvcData.forEach(function (t) {
            var ret = new offered_service_model_1.OfferedServiceModel();
            ret.Name = offeredSvcData.Name;
            ret.Description = t.Description;
            ret.FestivalId = t.FestivalId;
            ret.FestivalName = t.FestivalName;
            ret.ServiceId = t.ServiceId;
            retData.push(ret);
        });
        return retData;
    };
    AddOfferedServicesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddOfferedServicesService);
    return AddOfferedServicesService;
}());
exports.AddOfferedServicesService = AddOfferedServicesService;

//# sourceMappingURL=add-offered-services.service.js.map
