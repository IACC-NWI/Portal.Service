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
var auth_event_service_1 = require('../auth/auth-event.service');
var HeaderComponent = (function () {
    function HeaderComponent(authEventService) {
        this.authEventService = authEventService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = false;
        this.authSubscription = this.authEventService.authSubject.subscribe(function (event) {
            if (event.value) {
                _this.firstName = event.value.profile.FirstName;
                _this.lastName = event.value.profile.LastName;
                _this.loggedIn = true;
            }
            else {
                _this.firstName = '';
                _this.lastName = '';
                _this.loggedIn = false;
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent.prototype.logOut = function () {
        this.authEventService.deauthenticateUser();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderComponent.prototype, "profileMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderComponent.prototype, "layoutMode", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'iacc-header',
            templateUrl: 'app/shared/layout/header.html'
        }), 
        __metadata('design:paramtypes', [auth_event_service_1.AuthEventService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header.component.js.map
