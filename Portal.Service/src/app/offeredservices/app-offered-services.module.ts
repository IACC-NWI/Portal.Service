import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule, EditorModule, DropdownModule } from 'primeng/primeng';
import { AppOfferedServicesRoutes } from './app-offered-services.routes';
import { AddFestivalComponent } from './addfestival/add-festival.component';
import { AddFestivalService } from './addfestival/add-festival.service';
import { AddOfferedServicesComponent } from './addofferedservices/add-offered-services.component';
import { AddOfferedServicesService } from './addofferedservices/add-offered-services.service';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule,
        DataTableModule,
        EditorModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AppOfferedServicesRoutes)],
    declarations: [
        AddFestivalComponent,
        AddOfferedServicesComponent
    ],
    providers: [
        AddFestivalService,
        AddOfferedServicesService
    ]

})
export class AppOfferedServicesModule { }