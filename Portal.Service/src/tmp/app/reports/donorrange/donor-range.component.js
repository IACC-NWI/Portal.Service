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
var moment = require('moment');
var donor_range_service_1 = require('./donor-range.service');
var DonorRangeComponent = (function () {
    function DonorRangeComponent(donorRangeService) {
        this.donorRangeService = donorRangeService;
        this.donors = new Array();
    }
    DonorRangeComponent.prototype.ngOnInit = function () {
        this.startDate = new Date();
        this.endDate = new Date();
    };
    DonorRangeComponent.prototype.viewreport = function () {
        var self = this;
        this.donorRangeService.getAllDonations(moment(this.startDate).format('YYYY-MM-DD'), moment(this.endDate).format('YYYY-MM-DD'))
            .subscribe(function (t) {
            self.donors = t;
        });
    };
    DonorRangeComponent = __decorate([
        core_1.Component({
            selector: 'iacc-donorrange',
            templateUrl: 'app/reports/donorrange/donor-range.html'
        }), 
        __metadata('design:paramtypes', [donor_range_service_1.DonorRangeService])
    ], DonorRangeComponent);
    return DonorRangeComponent;
}());
exports.DonorRangeComponent = DonorRangeComponent;

//# sourceMappingURL=donor-range.component.js.map
