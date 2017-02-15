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
var forms_1 = require('@angular/forms');
var angular2_uuid_1 = require('angular2-uuid');
var home_service_1 = require('./home.service');
var HomeComponent = (function () {
    function HomeComponent(homeService, formBuilder) {
        this.homeService = homeService;
        this.formBuilder = formBuilder;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var purchaseId = angular2_uuid_1.UUID.UUID();
        this.purchaseOfferingsForm = this.formBuilder.group({
            PurchaseId: [purchaseId],
            MemberId: ['']
        });
    };
    HomeComponent.prototype.searchMembers = function (event) {
        var _this = this;
        this.homeService.lookupmembers(event.query)
            .subscribe(function (data) {
            _this.memberResults = data;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'iacc-home',
            templateUrl: 'app/home/home.html',
            styleUrls: [
                'app/home/home.css'
            ]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
