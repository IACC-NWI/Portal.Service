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
var member_model_1 = require('../member/member.model');
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.serviceUrls = SERVICE_URL;
    }
    HomeService.prototype.lookupmembers = function (query) {
        var _this = this;
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/lookupmembers/' + query)
            .map(function (res) {
            return _this.convertJsonToListOfMembers(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    HomeService.prototype.getAllMembers = function () {
        var _this = this;
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/getallmembers')
            .map(function (res) {
            return _this.convertJsonToListOfMembers(res);
        })
            .catch(function (error, source) {
            if (error.status === 400) {
                console.log('Bad Model.');
            }
        });
    };
    HomeService.prototype.convertJsonToListOfMembers = function (data) {
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
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;

//# sourceMappingURL=home.service.js.map
