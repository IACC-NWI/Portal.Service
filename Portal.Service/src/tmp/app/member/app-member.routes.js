"use strict";
var add_member_component_1 = require('./addmember/add-member.component');
var show_members_component_1 = require('./showmembers/show-members.component');
exports.AppMemberRoutes = [
    { path: 'addmember', component: add_member_component_1.AddMemberComponent },
    { path: 'addmember/:parentMemberId', component: add_member_component_1.AddMemberComponent },
    { path: 'lookupmembers', component: show_members_component_1.ShowMembersComponent }
];

//# sourceMappingURL=app-member.routes.js.map
