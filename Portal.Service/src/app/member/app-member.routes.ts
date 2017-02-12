import { Routes } from '@angular/router';

import { AddMemberComponent } from './addmember/add-member.component';
import { ShowMembersComponent } from './showmembers/show-members.component';
export const AppMemberRoutes: Routes = [
    { path: 'addmember', component: AddMemberComponent },
    { path: 'addmember/:parentMemberId', component: AddMemberComponent },
    { path: 'lookupmembers', component: ShowMembersComponent }
];
