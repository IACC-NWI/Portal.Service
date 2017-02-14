import { Routes } from '@angular/router';
import { AuthActivateGuard } from 'app-shared';

import { AddFestivalComponent } from './addfestival/add-festival.component'
export const AppOfferedServicesRoutes: Routes = [
    { path: 'addfestival', component: AddFestivalComponent, canActivate: [AuthActivateGuard] },
];