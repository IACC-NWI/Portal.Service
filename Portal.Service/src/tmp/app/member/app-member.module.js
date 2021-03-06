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
var primeng_1 = require('primeng/primeng');
var app_member_routes_1 = require('./app-member.routes');
var add_member_component_1 = require('./addmember/add-member.component');
var add_member_service_1 = require('./addmember/add-member.service');
var show_members_component_1 = require('./showmembers/show-members.component');
var show_members_service_1 = require('./showmembers/show-members.service');
var edit_member_component_1 = require('./editmember/edit-member.component');
var edit_member_service_1 = require('./editmember/edit-member.service');
var AppMemberModule = (function () {
    function AppMemberModule() {
    }
    AppMemberModule = __decorate([
        core_1.NgModule({
            imports: [
                primeng_1.ButtonModule,
                primeng_1.InputTextModule,
                primeng_1.DataTableModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(app_member_routes_1.AppMemberRoutes)],
            declarations: [
                add_member_component_1.AddMemberComponent,
                show_members_component_1.ShowMembersComponent,
                edit_member_component_1.EditMemberComponent
            ],
            providers: [
                add_member_service_1.AddMemberService,
                show_members_service_1.ShowMembersService,
                edit_member_service_1.EditMemberService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppMemberModule);
    return AppMemberModule;
}());
exports.AppMemberModule = AppMemberModule;

//# sourceMappingURL=app-member.module.js.map
