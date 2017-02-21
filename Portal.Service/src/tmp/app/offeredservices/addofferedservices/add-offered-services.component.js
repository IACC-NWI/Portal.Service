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
var add_offered_services_service_1 = require('./add-offered-services.service');
var AddOfferedServicesComponent = (function () {
    function AddOfferedServicesComponent(addOfferedServicesService, formBuilder) {
        this.addOfferedServicesService = addOfferedServicesService;
        this.formBuilder = formBuilder;
        this.availableFestivals = new Array();
        this.festivals = new Array();
        this.festivals.push({ label: '-- Festivals --', value: null });
    }
    AddOfferedServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var offeredServiceId = angular2_uuid_1.UUID.UUID();
        this.newOfferedServicesForm = this.formBuilder.group({
            ServiceId: [offeredServiceId],
            Name: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            Description: ['', [forms_1.Validators.maxLength(500)]],
            FestivalId: [''],
            FestivalName: [''],
            SuggestedDonation: [0, [forms_1.Validators.required]]
        });
        this.addOfferedServicesService.getAllFestivals()
            .subscribe(function (festivals) {
            festivals.forEach(function (fest) {
                _this.availableFestivals.push(fest);
                _this.festivals.push({ label: fest.Name, value: fest.FestivalId });
            });
        });
    };
    AddOfferedServicesComponent.prototype.festivalSelectValueChange = function (event) {
        var festivalId = this.newOfferedServicesForm.controls['FestivalId'];
        var festival = this.availableFestivals.filter(function (q) { return q.FestivalId === festivalId.value; })[0];
        var festivalNameCtrl = this.newOfferedServicesForm.controls['FestivalName'];
        festivalNameCtrl.setValue(festival.Name);
    };
    AddOfferedServicesComponent.prototype.saveOfferedService = function (model) {
        var _this = this;
        this.addOfferedServicesService.addNewOfferedService(model)
            .subscribe(function (offeredSvc) {
            _this.offeredServiceToAdd = offeredSvc;
            alert('Service Added.');
        });
    };
    AddOfferedServicesComponent = __decorate([
        core_1.Component({
            selector: 'iacc-add-offered-services',
            templateUrl: 'app/offeredservices/addofferedservices/add-offered-services.html'
        }), 
        __metadata('design:paramtypes', [add_offered_services_service_1.AddOfferedServicesService, forms_1.FormBuilder])
    ], AddOfferedServicesComponent);
    return AddOfferedServicesComponent;
}());
exports.AddOfferedServicesComponent = AddOfferedServicesComponent;

//# sourceMappingURL=add-offered-services.component.js.map
