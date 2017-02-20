import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppReportsRoutes } from './app-reports.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DataTableModule,
    DropdownModule, CalendarModule } from 'primeng/primeng';

import { DonorListComponent } from './donorlist/donor-list.component';
import { DonorListService } from './donorlist/donor-list.service';
import { DonorRangeComponent } from './donorrange/donor-range.component';
import { DonorRangeService } from './donorrange/donor-range.service';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchasesService} from './purchases/purchases.service'

@NgModule({
    imports: [
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        DataTableModule,
        DropdownModule,
        CalendarModule,
        RouterModule.forChild(AppReportsRoutes)],
    declarations: [
        DonorListComponent,
        DonorRangeComponent,
        PurchasesComponent
    ],
    providers: [
        DonorListService,
        DonorRangeService,
        PurchasesService
    ]
})
export class AppReportsModule {
    
}