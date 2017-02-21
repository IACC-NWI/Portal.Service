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
var festival_model_1 = require('../festival.model');
var FestivalService = (function () {
    function FestivalService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    FestivalService.prototype.getFestivals = function () {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallfestivals')
            .map(function (t) {
            var retModel = new Array();
            var jData = t.json() || [];
            jData.forEach(function (q) {
                var mo = new festival_model_1.FestivalModel();
                mo.Name = q.Name;
                mo.Description = q.Description;
                mo.FestivalId = q.FestivalId;
                retModel.push(mo);
            });
            return retModel;
        });
    };
    FestivalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FestivalService);
    return FestivalService;
}());
exports.FestivalService = FestivalService;

//# sourceMappingURL=festivals.service.js.map
