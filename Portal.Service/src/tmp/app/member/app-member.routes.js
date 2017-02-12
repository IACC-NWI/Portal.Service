"use strict";
var add_member_component_1 = require('./addmember/add-member.component');
var show_members_component_1 = require('./showmembers/show-members.component');
var edit_member_component_1 = require('./editmember/edit-member.component');
exports.AppMemberRoutes = [
    { path: 'addmember', component: add_member_component_1.AddMemberComponent },
    { path: 'addmember/:parentMemberId', component: add_member_component_1.AddMemberComponent },
    { path: 'editmember/:memberIdToEdit', component: edit_member_component_1.EditMemberComponent },
    { path: 'lookupmembers', component: show_members_component_1.ShowMembersComponent }
];

//# sourceMappingURL=app-member.routes.js.map
