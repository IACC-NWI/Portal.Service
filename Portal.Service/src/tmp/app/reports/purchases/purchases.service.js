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
var purchases_model_1 = require('../purchases.model');
var PurchasesService = (function () {
    function PurchasesService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    PurchasesService.prototype.getAllPurchases = function () {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getallserviesperformed')
            .map(function (res) {
            var retModel = new Array();
            var resJsn = res.json() || [];
            resJsn.forEach(function (t) {
                var m = new purchases_model_1.PurchasesModel();
                m.Name = t.Name;
                m.Count = t.Count;
                m.ServiceId = t.ServiceId;
                m.TotalDonations = t.TotalDonations;
                retModel.push(m);
            });
            return retModel;
        });
    };
    PurchasesService.prototype.getPurchasesForRange = function (startdate, enddate) {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getallservicesperformed/' + startdate + '/' + enddate)
            .map(function (res) {
            var retModel = new Array();
            var resJsn = res.json() || [];
            resJsn.forEach(function (t) {
                var m = new purchases_model_1.PurchasesModel();
                m.Name = t.Name;
                m.Count = t.Count;
                m.ServiceId = t.ServiceId;
                m.TotalDonations = t.TotalDonations;
                retModel.push(m);
            });
            return retModel;
        });
    };
    PurchasesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PurchasesService);
    return PurchasesService;
}());
exports.PurchasesService = PurchasesService;

//# sourceMappingURL=purchases.service.js.map
