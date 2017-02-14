import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule, EditorModule } from 'primeng/primeng';
import { AppOfferedServicesRoutes } from './app-offered-services.routes';
import { AddFestivalComponent } from './addfestival/add-festival.component';
import { AddFestivalService } from './addfestival/add-festival.service';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule,
        DataTableModule,
        EditorModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AppOfferedServicesRoutes)],
    declarations: [
        AddFestivalComponent
    ],
    providers: [
        AddFestivalService
    ]

})
export class AppOfferedServicesModule { }