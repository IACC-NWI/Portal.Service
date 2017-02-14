import { Routes } from '@angular/router';
import { AuthActivateGuard } from 'app-shared';

import { AddMemberComponent } from './addmember/add-member.component';
import { ShowMembersComponent } from './showmembers/show-members.component';
import { EditMemberComponent } from './editmember/edit-member.component';
export const AppMemberRoutes: Routes = [
    { path: 'addmember', component: AddMemberComponent, canActivate: [AuthActivateGuard] },
    { path: 'addmember/:parentMemberId', component: AddMemberComponent, canActivate: [AuthActivateGuard] },
    { path: 'editmember/:memberIdToEdit', component: EditMemberComponent, canActivate: [AuthActivateGuard] },
    { path: 'lookupmembers', component: ShowMembersComponent, canActivate: [AuthActivateGuard] }
];
