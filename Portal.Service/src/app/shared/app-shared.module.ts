import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuModule, AutoCompleteModule } from 'primeng/primeng';

import { HttpAuthInterceptor } from './auth/http-auth.interceptor';
import { AuthActivateGuard } from './auth/auth-activate.guard';
import { AuthEventService } from './auth/auth-event.service';
import { OidcService } from './auth/oidc.service';

import { HeaderComponent } from './layout/header.component';
import { SidebarComponent } from './layout/sidebar.component';

@NgModule({
    imports: [BrowserModule, MenuModule, AutoCompleteModule, RouterModule.forChild([])],
    declarations: [
        HeaderComponent,
        SidebarComponent
    ],
    providers:
    [
        OidcService,
        AuthEventService,
        AuthActivateGuard,
        {
            provide: Http,
            useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, authEventService: AuthEventService) =>
                new HttpAuthInterceptor(xhrBackend, requestOptions, authEventService),
            deps: [XHRBackend, RequestOptions, AuthEventService]
        }
    ],
    exports:
    [
        HeaderComponent,
        SidebarComponent
    ]
})
export class AppSharedModule {


    static forRoot(): ModuleWithProviders {

        return {
            ngModule: AppSharedModule
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: AppSharedModule) {
        if (parentModule) {
            throw new Error(
                'AppSharedModule is already loaded. Import it in the AppModule only');
        }
    }


}
