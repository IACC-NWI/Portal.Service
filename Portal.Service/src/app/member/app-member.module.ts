import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule } from 'primeng/primeng';

import { AppMemberRoutes } from './app-member.routes';
import { AddMemberComponent } from './addmember/add-member.component';
import { AddMemberService } from './addmember/add-member.service';
import { ShowMembersComponent } from './showmembers/show-members.component';
import { ShowMembersService } from './showmembers/show-members.service';

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
        ShowMembersComponent
    ],
    providers: [
        AddMemberService,
        ShowMembersService
    ]

})
export class AppMemberModule { }
