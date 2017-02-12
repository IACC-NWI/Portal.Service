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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var moment = require('moment');
var angular2_uuid_1 = require('angular2-uuid');
var add_member_service_1 = require('./add-member.service');
var AddMemberComponent = (function () {
    function AddMemberComponent(addMemberService, formBuilder, route, router) {
        this.addMemberService = addMemberService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
    }
    AddMemberComponent.prototype.saveMember = function (model) {
        var _this = this;
        this.addMemberService.addMember(model)
            .subscribe(function (memberAdded) { return _this.memberToAdd = memberAdded; });
    };
    AddMemberComponent.prototype.ngOnInit = function () {
        var memberId = angular2_uuid_1.UUID.UUID();
        this.newMemberForm = this.formBuilder.group({
            MemberId: [memberId],
            MemberSince: [moment(Date()).format('YYYY-MM-DD')],
            PhoneNumber: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10)]],
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            LastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            AddressLine1: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            AddressLine2: [''],
            City: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            State: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(2), forms_1.Validators.minLength(2)]],
            Zip: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5), forms_1.Validators.minLength(5)]],
            ParentMemberId: [this.parentMemberId]
        });
        var self = this;
        this.route.params.subscribe(function (params) {
            self.parentMemberId = params['parentMemberId'];
            var parentMemberControl = self.newMemberForm.controls['ParentMemberId'];
            parentMemberControl.setValue(self.parentMemberId);
        });
    };
    AddMemberComponent = __decorate([
        core_1.Component({
            selector: 'iacc-add-member',
            templateUrl: 'app/member/addmember/add-member.html'
        }), 
        __metadata('design:paramtypes', [add_member_service_1.AddMemberService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], AddMemberComponent);
    return AddMemberComponent;
}());
exports.AddMemberComponent = AddMemberComponent;

//# sourceMappingURL=add-member.component.js.map
