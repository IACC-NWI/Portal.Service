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
var moment = require('moment');
var member_model_1 = require('../member.model');
var EditMemberService = (function () {
    function EditMemberService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    EditMemberService.prototype.getMemberById = function (memberId) {
        var _this = this;
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/lookupbyid/' + memberId)
            .map(function (res) {
            return _this.convertJsonToMember(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    EditMemberService.prototype.updateMember = function (memberModel) {
        var _this = this;
        return this.http.post(this.serviceUrls.MEMBER_SERVICE + '/api/member/updatemember', memberModel)
            .map(function (res) {
            return _this.convertJsonToMember(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    EditMemberService.prototype.getFamily = function (parentMemberId) {
        var _this = this;
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/getfamily/' + parentMemberId)
            .map(function (res) {
            return _this.convertJsonToListOfMembers(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    EditMemberService.prototype.convertJsonToMember = function (data) {
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
    EditMemberService.prototype.convertJsonToListOfMembers = function (data) {
        var memberData = data.json() || [];
        var retData = new Array();
        memberData.forEach(function (item) {
            var mem = new member_model_1.MemberModel();
            mem.MemberId = item.MemberId;
            mem.MemberSince = moment(item.MemberSince).format('MM/DD/YYYY');
            mem.PhoneNumber = item.PhoneNumber;
            mem.FirstName = item.FirstName;
            mem.LastName = item.LastName;
            mem.AddressLine1 = item.AddressLine1;
            mem.AddressLine2 = item.AddressLine2;
            mem.City = item.City;
            mem.State = item.State;
            mem.Zip = item.Zip;
            mem.HasChildren = item.HasChildren;
            mem.HasParent = item.HasParent;
            mem.ParentMemberId = item.ParentMemberId;
            mem.Email = item.Email;
            retData.push(mem);
        });
        return retData;
    };
    EditMemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EditMemberService);
    return EditMemberService;
}());
exports.EditMemberService = EditMemberService;

//# sourceMappingURL=edit-member.service.js.map
