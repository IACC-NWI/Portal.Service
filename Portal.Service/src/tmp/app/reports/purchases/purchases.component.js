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
var purchases_service_1 = require('./purchases.service');
var PurchasesComponent = (function () {
    function PurchasesComponent(purchaseService) {
        this.purchaseService = purchaseService;
        this.purchases = new Array();
        this.startDate = this.endDate = new Date();
    }
    PurchasesComponent.prototype.ngOnInit = function () { };
    PurchasesComponent.prototype.search = function () {
        var self = this;
        this.purchaseService.getPurchasesForRange(moment(this.startDate).format('YYYY-MM-DD'), moment(this.endDate).format('YYYY-MM-DD'))
            .subscribe(function (t) {
            self.purchases = t;
        });
    };
    PurchasesComponent = __decorate([
        core_1.Component({
            selector: 'iacc-purchases-report',
            templateUrl: 'app/reports/purchases/purchases.html'
        }), 
        __metadata('design:paramtypes', [purchases_service_1.PurchasesService])
    ], PurchasesComponent);
    return PurchasesComponent;
}());
exports.PurchasesComponent = PurchasesComponent;

//# sourceMappingURL=purchases.component.js.map
