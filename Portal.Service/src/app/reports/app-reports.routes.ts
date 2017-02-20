import { Routes } from '@angular/router';
import { AuthActivateGuard } from 'app-shared';

import { DonorListComponent } from './donorlist/donor-list.component';
import { DonorRangeComponent } from './donorrange/donor-range.component';
import { PurchasesComponent } from './purchases/purchases.component';

export const AppReportsRoutes: Routes = [
    { path: 'donorreport', component: DonorListComponent, canActivate: [AuthActivateGuard] },
    { path: 'donorrange', component: DonorRangeComponent, canActivate: [AuthActivateGuard] },
    { path: 'purchaserange', component: PurchasesComponent, canActivate: [AuthActivateGuard] },

];
