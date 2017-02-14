"use strict";
var app_shared_1 = require('app-shared');
var add_member_component_1 = require('./addmember/add-member.component');
var show_members_component_1 = require('./showmembers/show-members.component');
var edit_member_component_1 = require('./editmember/edit-member.component');
exports.AppMemberRoutes = [
    { path: 'addmember', component: add_member_component_1.AddMemberComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'addmember/:parentMemberId', component: add_member_component_1.AddMemberComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'editmember/:memberIdToEdit', component: edit_member_component_1.EditMemberComponent, canActivate: [app_shared_1.AuthActivateGuard] },
    { path: 'lookupmembers', component: show_members_component_1.ShowMembersComponent, canActivate: [app_shared_1.AuthActivateGuard] }
];

//# sourceMappingURL=app-member.routes.js.map
