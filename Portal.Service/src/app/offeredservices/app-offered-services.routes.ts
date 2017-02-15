import { Routes } from '@angular/router';
import { AuthActivateGuard } from 'app-shared';

import { AddFestivalComponent } from './addfestival/add-festival.component';
import { AddOfferedServicesComponent } from './addofferedservices/add-offered-services.component';
export const AppOfferedServicesRoutes: Routes = [
    { path: 'addfestival', component: AddFestivalComponent, canActivate: [AuthActivateGuard] },
    { path: 'addofferedservice', component: AddOfferedServicesComponent, canActivate: [AuthActivateGuard]}
];