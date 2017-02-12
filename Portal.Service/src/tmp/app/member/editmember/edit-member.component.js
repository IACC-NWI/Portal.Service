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
var member_model_1 = require('../member.model');
var edit_member_service_1 = require('./edit-member.service');
var EditMemberComponent = (function () {
    function EditMemberComponent(editMemberService, formBuilder, route, router) {
        this.editMemberService = editMemberService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.memberToEdit = new member_model_1.MemberModel();
        this.familyMembers = new Array();
    }
    EditMemberComponent.prototype.ngOnInit = function () {
        this.editMemberForm = this.formBuilder.group({
            MemberId: [''],
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
            ParentMemberId: ['']
        });
        var self = this;
        this.route.params.subscribe(function (params) {
            self.memberIdToEdit = params['memberIdToEdit'];
            self.editMemberService.getMemberById(self.memberIdToEdit)
                .subscribe(function (member) {
                self.memberToEdit = member;
                var memberIdControl = self.editMemberForm.controls['MemberId'];
                memberIdControl.setValue(member.MemberId);
                var memberSinceControl = self.editMemberForm.controls['MemberSince'];
                memberSinceControl.setValue(member.MemberSince);
                var phoneNumberControl = self.editMemberForm.controls['PhoneNumber'];
                phoneNumberControl.setValue(member.PhoneNumber);
                var firstNameControl = self.editMemberForm.controls['FirstName'];
                firstNameControl.setValue(member.FirstName);
                var lastNameControl = self.editMemberForm.controls['LastName'];
                lastNameControl.setValue(member.LastName);
                var emailControl = self.editMemberForm.controls['Email'];
                emailControl.setValue(member.Email);
                var addressLine1Control = self.editMemberForm.controls['AddressLine1'];
                addressLine1Control.setValue(member.AddressLine1);
                var addressLine2Control = self.editMemberForm.controls['AddressLine2'];
                addressLine2Control.setValue(member.AddressLine2);
                var cityControl = self.editMemberForm.controls['City'];
                cityControl.setValue(member.City);
                var stateControl = self.editMemberForm.controls['State'];
                stateControl.setValue(member.State);
                var zipControl = self.editMemberForm.controls['Zip'];
                zipControl.setValue(member.Zip);
                var parentMemberControl = self.editMemberForm.controls['ParentMemberId'];
                parentMemberControl.setValue(member.ParentMemberId);
            });
            // Get Family Members.
            self.editMemberService.getFamily(self.memberIdToEdit).subscribe(function (family) {
                self.familyMembers = family;
            });
        });
    };
    EditMemberComponent.prototype.update = function (model) {
        var _this = this;
        this.editMemberService.updateMember(model).subscribe(function (memberUpdated) { return _this.memberToEdit = memberUpdated; });
    };
    EditMemberComponent = __decorate([
        core_1.Component({
            selector: 'iacc-edit-member',
            templateUrl: 'app/member/editmember/edit-member.html'
        }), 
        __metadata('design:paramtypes', [edit_member_service_1.EditMemberService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], EditMemberComponent);
    return EditMemberComponent;
}());
exports.EditMemberComponent = EditMemberComponent;

//# sourceMappingURL=edit-member.component.js.map
