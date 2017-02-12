import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule } from 'primeng/primeng';

import { AppMemberRoutes } from './app-member.routes';
import { AddMemberComponent } from './addmember/add-member.component';
import { AddMemberService } from './addmember/add-member.service';
import { ShowMembersComponent } from './showmembers/show-members.component';
import { ShowMembersService } from './showmembers/show-members.service';
import { EditMemberComponent } from './editmember/edit-member.component';
import { EditMemberService } from './editmember/edit-member.service';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AppMemberRoutes)],
    declarations: [
        AddMemberComponent,
        ShowMembersComponent,
        EditMemberComponent
    ],
    providers: [
        AddMemberService,
        ShowMembersService,
        EditMemberService
    ]

})
export class AppMemberModule { }
