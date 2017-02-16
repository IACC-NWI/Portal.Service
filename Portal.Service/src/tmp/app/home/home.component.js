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
var moment = require('moment');
var home_service_1 = require('./home.service');
var HomeComponent = (function () {
    function HomeComponent(homeService, formBuilder) {
        this.homeService = homeService;
        this.formBuilder = formBuilder;
        this.festivals = new Array();
        this.availableFestivals = new Array();
        this.festivals.push({ label: '-- Festivals --', value: null });
        this.offeredServices = new Array();
        this.availableServices = new Array();
        this.offeredServices.push({ label: '-- Service --', value: null });
        this.suggestedDonation = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var purchaseId = angular2_uuid_1.UUID.UUID();
        this.homeService.getAllFestivals()
            .subscribe(function (festivals) {
            festivals.forEach(function (fest) {
                _this.availableFestivals.push(fest);
                _this.festivals.push({ label: fest.Name, value: fest.FestivalId });
            });
        });
        this.homeService.getAllOfferedServices()
            .subscribe(function (serv) {
            serv.forEach(function (s) {
                _this.availableServices.push(s);
                _this.offeredServices.push({ label: s.Name, value: s.ServiceId });
            });
        });
        var today = new Date();
        this.purchaseOfferingsForm = this.formBuilder.group({
            PurchaseId: [purchaseId],
            MemberId: [''],
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            LastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            Email: ['', [forms_1.Validators.maxLength(100)]],
            AddressLine1: ['', [forms_1.Validators.maxLength(100)]],
            AddressLine2: ['', [forms_1.Validators.maxLength(100)]],
            City: ['', [forms_1.Validators.maxLength(50)]],
            State: ['', [forms_1.Validators.maxLength(2)]],
            Zip: ['', [forms_1.Validators.maxLength(5)]],
            FestivalId: ['', [forms_1.Validators.required]],
            FestivalName: ['', [forms_1.Validators.required]],
            OfferedServiceId: ['', [forms_1.Validators.required]],
            OfferedServiceName: ['', [forms_1.Validators.required]],
            SuggestedDonation: ['', forms_1.Validators.required],
            ActualDonation: ['', [forms_1.Validators.required]],
            ServiceUnFormatedDate: [today, forms_1.Validators.required]
        });
    };
    HomeComponent.prototype.festivalSelectValueChange = function (event) {
        var festivalId = this.purchaseOfferingsForm.controls['FestivalId'];
        var festival = this.availableFestivals.filter(function (q) { return q.FestivalId === festivalId.value; })[0];
        this.purchaseOfferingsForm.controls['FestivalName'].setValue(festival.Name);
    };
    HomeComponent.prototype.offeredSvcSelectValueChanged = function (event) {
        var offeredServiceId = this.purchaseOfferingsForm.controls['OfferedServiceId'];
        var offeredSvc = this.availableServices.filter(function (q) { return q.ServiceId === offeredServiceId.value; })[0];
        this.purchaseOfferingsForm.controls['OfferedServiceName'].setValue(offeredSvc.Name);
        this.suggestedDonation = offeredSvc.SuggestedDonation;
        this.purchaseOfferingsForm.controls['ActualDonation'].setValue(offeredSvc.SuggestedDonation);
        this.purchaseOfferingsForm.controls['SuggestedDonation'].setValue(offeredSvc.SuggestedDonation);
    };
    HomeComponent.prototype.memberSelected = function (event) {
        this.purchaseOfferingsForm.controls['FirstName'].setValue(event.FirstName);
        this.purchaseOfferingsForm.controls['LastName'].setValue(event.LastName);
        this.purchaseOfferingsForm.controls['Email'].setValue(event.Email);
        this.purchaseOfferingsForm.controls['AddressLine1'].setValue(event.AddressLine1);
        this.purchaseOfferingsForm.controls['AddressLine2'].setValue(event.AddressLine2);
        this.purchaseOfferingsForm.controls['City'].setValue(event.City);
        this.purchaseOfferingsForm.controls['State'].setValue(event.State);
        this.purchaseOfferingsForm.controls['Zip'].setValue(event.Zip);
        this.purchaseOfferingsForm.controls['MemberId'].setValue(event.MemberId);
        console.log(event);
    };
    HomeComponent.prototype.searchMembers = function (event) {
        var _this = this;
        this.homeService.lookupmembers(event.query)
            .subscribe(function (data) {
            _this.memberResults = data;
        });
    };
    HomeComponent.prototype.purchaseOffering = function (model) {
        model.ServiceDate = moment(model.ServiceUnFormatedDate).format('YYYY-MM-DD');
        this.homeService.purchaseOffering(model).subscribe();
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
