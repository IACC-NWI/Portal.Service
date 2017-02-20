import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, AutoCompleteModule, PanelModule,
    DropdownModule, CalendarModule } from 'primeng/primeng';
import { AppHomeRoutes } from './app-home.routes';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
@NgModule({
    imports: [
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        AutoCompleteModule,
        DropdownModule,
        PanelModule
        CalendarModule,
        RouterModule.forChild(AppHomeRoutes)],
    declarations: [HomeComponent],
    providers: [HomeService]
})
export class AppHomeModule {

}
