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
var member_model_1 = require('../member.model');
var AddMemberService = (function () {
    function AddMemberService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    AddMemberService.prototype.addMember = function (memberModel) {
        var _this = this;
        return this.http.post(this.serviceUrls.MEMBER_SERVICE + '/api/member/addmember', memberModel)
            .map(function (res) {
            return _this.convertJsonToMember(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    AddMemberService.prototype.convertJsonToMember = function (data) {
        var memberData = data.json() || {};
        var retMember = new member_model_1.MemberModel();
        retMember.MemberId = memberData.MemberId;
        retMember.MemberSince = memberData.MemberSince;
        retMember.PhoneNumber = memberData.PhoneNumber;
        retMember.FirstName = memberData.FirstName;
        retMember.LastName = memberData.LastName;
        retMember.AddressLine1 = memberData.AddressLine1;
        retMember.AddressLine2 = memberData.AddressLine2;
        retMember.City = memberData.City;
        retMember.State = memberData.State;
        retMember.Zip = memberData.Zip;
        retMember.HasChildren = memberData.HasChildren;
        retMember.HasParent = memberData.HasParent;
        retMember.ParentMemberId = memberData.ParentMemberId;
        retMember.Email = memberData.Email;
        return retMember;
    };
    AddMemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddMemberService);
    return AddMemberService;
}());
exports.AddMemberService = AddMemberService;

//# sourceMappingURL=add-member.service.js.map
