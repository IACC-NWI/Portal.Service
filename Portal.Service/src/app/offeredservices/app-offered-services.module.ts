import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, InputTextModule, DataTableModule } from 'primeng/primeng';
import { AppOfferedServicesRoutes } from './app-offered-services.routes';

@NgModule({
    imports: [
        ButtonModule,
        InputTextModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AppOfferedServicesRoutes)],
    declarations: [

    ],
    providers: [

    ]

})
export class AppOfferedServicesModule { }