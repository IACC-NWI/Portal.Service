import { Routes } from '@angular/router';

import { AddMemberComponent } from './addmember/add-member.component';
import { ShowMembersComponent } from './showmembers/show-members.component';
import { EditMemberComponent } from './editmember/edit-member.component';
export const AppMemberRoutes: Routes = [
    { path: 'addmember', component: AddMemberComponent },
    { path: 'addmember/:parentMemberId', component: AddMemberComponent },
    { path: 'editmember/:memberIdToEdit', component: EditMemberComponent},
    { path: 'lookupmembers', component: ShowMembersComponent }
];
