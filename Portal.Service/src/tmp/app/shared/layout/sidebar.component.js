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
var auth_event_service_1 = require('../auth/auth-event.service');
var SidebarComponent = (function () {
    function SidebarComponent(route, router, authEventService) {
        this.route = route;
        this.router = router;
        this.authEventService = authEventService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.initializeLinks();
        this.createNavLinks();
        //this.authSubscription = this.authEventService.authSubject.subscribe((event) => {
        //    this.createNavLinks(event.value);
        //});
    };
    SidebarComponent.prototype.createNavLinks = function () {
        this.items = [];
        // if (user && user.profile && user.profile.roles) {
        this.items.push(this.dashboardNav);
        this.items.push(this.adminNav);
        this.items.push(this.reportsNav);
        // }
    };
    SidebarComponent.prototype.initializeLinks = function () {
        var _this = this;
        this.dashboardNav = {
            label: 'Dashboard',
            icon: 'dashboard',
            command: function (event) { _this.router.navigate(['dashboard']); },
            routerLink: ['/']
        };
        this.adminNav = {
            label: 'Admin',
            icon: 'palette',
            items: [
                {
                    label: 'Members lookup',
                    command: function (event) { _this.router.navigate(['lookupmembers']); },
                    routerLink: ['/lookupmembers']
                },
                {
                    label: 'Add Member',
                    command: function (event) { _this.router.navigate(['addmember']); },
                    routerLink: ['/addmember']
                },
                {
                    label: 'Show Festivals',
                    command: function (event) { _this.router.navigate(['showfestivals']); },
                    routerLink: ['/showfestivals']
                },
                {
                    label: 'Show Services',
                    command: function (event) { _this.router.navigate(['showofferedservices']); },
                    routerLink: ['/showofferedservices']
                },
                {
                    label: 'Add Festival',
                    command: function (event) { _this.router.navigate(['addfestival']); },
                    routerLink: ['/addfestival']
                },
                {
                    label: 'Add Service',
                    command: function (event) { _this.router.navigate(['addofferedservice']); },
                    routerLink: ['/addofferedservice']
                }
            ]
        };
        this.reportsNav = {
            label: 'Reports',
            icon: 'pageview',
            items: [
                {
                    label: 'Donor Report',
                    command: function (event) { _this.router.navigate(['donorreport']); },
                    routerLink: ['/donorreport']
                },
                {
                    label: 'Donor Range',
                    command: function (event) { _this.router.navigate(['donorrange']); },
                    routerLink: ['/donorrange']
                },
                {
                    label: 'Offerings Report',
                    command: function (event) { _this.router.navigate(['purchaserange']); },
                    routerLink: ['/purchaserange']
                }
            ]
        };
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'iacc-sidebar',
            templateUrl: 'app/shared/layout/sidebar.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, auth_event_service_1.AuthEventService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=sidebar.component.js.map
