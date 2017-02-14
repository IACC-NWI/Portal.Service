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
var add_festival_service_1 = require('./add-festival.service');
var AddFestivalComponent = (function () {
    function AddFestivalComponent(addFestivalService, formBuilder) {
        this.addFestivalService = addFestivalService;
        this.formBuilder = formBuilder;
    }
    AddFestivalComponent.prototype.ngOnInit = function () {
        var festivalId = angular2_uuid_1.UUID.UUID();
        this.newFestivalForm = this.formBuilder.group({
            FestivalId: [festivalId],
            Name: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            Description: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(500)]]
        });
    };
    AddFestivalComponent.prototype.saveFestival = function (model) {
        var _this = this;
        this.addFestivalService.addFestival(model)
            .subscribe(function (festivalModel) { return _this.festivalToAdd = festivalModel; });
    };
    AddFestivalComponent = __decorate([
        core_1.Component({
            selector: 'iacc-add-festival',
            templateUrl: 'app/offeredservices/addfestival/add-festival.html'
        }), 
        __metadata('design:paramtypes', [add_festival_service_1.AddFestivalService, forms_1.FormBuilder])
    ], AddFestivalComponent);
    return AddFestivalComponent;
}());
exports.AddFestivalComponent = AddFestivalComponent;

//# sourceMappingURL=add-festival.component.js.map
