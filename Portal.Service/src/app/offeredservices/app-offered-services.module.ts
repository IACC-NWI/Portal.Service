import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule, EditorModule, DropdownModule } from 'primeng/primeng';
import { AppOfferedServicesRoutes } from './app-offered-services.routes';
import { AddFestivalComponent } from './addfestival/add-festival.component';
import { AddFestivalService } from './addfestival/add-festival.service';
import { AddOfferedServicesComponent } from './addofferedservices/add-offered-services.component';
import { AddOfferedServicesService } from './addofferedservices/add-offered-services.service';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalService } from './festivals/festivals.service';
import { ListOfferedServicesComponent } from './listofferedservices/list-offered-services.component';
import { ListOfferedServicesService } from './listofferedservices/list-offered-services.service';

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
        AddOfferedServicesComponent,
        FestivalsComponent,
        ListOfferedServicesComponent
    ],
    providers: [
        AddFestivalService,
        AddOfferedServicesService,
        FestivalService,
        ListOfferedServicesService
    ]

})
export class AppOfferedServicesModule { }