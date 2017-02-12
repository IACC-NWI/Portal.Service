import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthEventService } from  '../auth/auth-event.service';

@Component({
    selector: 'iacc-header',
    templateUrl: 'app/shared/layout/header.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Input() profileMode: string;
    @Input() layoutMode: string;
    firstName: string;
    lastName: string;
    loggedIn: boolean;
    private authSubscription: Subscription;

    constructor(private authEventService: AuthEventService) {
    }

    ngOnInit() {
        this.loggedIn = false;
        this.authSubscription = this.authEventService.authSubject.subscribe((event) => {
            if (event.value) {
                this.firstName = event.value.profile.FirstName;
                this.lastName = event.value.profile.LastName;
                this.loggedIn = true;
            } else {
                this.firstName = '';
                this.lastName = '';
                this.loggedIn = false;
            }
        });
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

    logOut() {
        this.authEventService.deauthenticateUser();
    }

}
