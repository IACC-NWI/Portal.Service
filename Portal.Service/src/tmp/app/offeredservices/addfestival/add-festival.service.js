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
var AddFestivalService = (function () {
    function AddFestivalService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    AddFestivalService.prototype.addFestival = function (festivalModel) {
        var _this = this;
        return this.http.post(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/addnewfestival', festivalModel)
            .map(function (res) {
            return _this.convertJsonToFestivalModel(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    AddFestivalService.prototype.convertJsonToFestivalModel = function (data) {
        var festData = data.json() || {};
        var retFest = new festival_model_1.FestivalModel();
        retFest.Description = festData.Description;
        retFest.FestivalId = festData.FestivalId;
        retFest.Name = festData.Name;
        retFest.FestivalId = festData.FestivalId;
        return retFest;
    };
    AddFestivalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddFestivalService);
    return AddFestivalService;
}());
exports.AddFestivalService = AddFestivalService;

//# sourceMappingURL=add-festival.service.js.map
