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
var donor_model_1 = require('../donor.model');
var DonorRangeService = (function () {
    function DonorRangeService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    DonorRangeService.prototype.getAllDonations = function (startdate, enddate) {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getalldonations/'
            + startdate + '/' + enddate)
            .map(function (t) {
            var models = t.json() || [];
            var returnModels = new Array();
            models.forEach(function (md) {
                var ret = new donor_model_1.DonorModel();
                ret.FirstName = md.FirstName;
                ret.LastName = md.LastName;
                ret.DonorId = md.DonorId;
                ret.Email = md.Email;
                ret.MemberId = md.Member;
                ret.TotalDonation = md.TotalDonation;
                returnModels.push(ret);
            });
            return returnModels;
        });
    };
    DonorRangeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DonorRangeService);
    return DonorRangeService;
}());
exports.DonorRangeService = DonorRangeService;

//# sourceMappingURL=donor-range.service.js.map
