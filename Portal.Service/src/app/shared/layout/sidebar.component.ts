import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';

import { AuthEventService } from  '../auth/auth-event.service';

@Component({
    selector: 'iacc-sidebar',
    templateUrl: 'app/shared/layout/sidebar.html'
})
export class SidebarComponent implements OnInit {

    private items: MenuItem[];
    private authSubscription: Subscription;
    private dashboardNav: MenuItem;
    private membersNav: MenuItem;

    constructor(private route: ActivatedRoute,
        private router: Router, private authEventService: AuthEventService) {
    }

    ngOnInit() {
        this.initializeLinks();
        this.createNavLinks();
        //this.authSubscription = this.authEventService.authSubject.subscribe((event) => {
        //    this.createNavLinks(event.value);
        //});

        
    }

    private createNavLinks() {
        this.items = [];

        // if (user && user.profile && user.profile.roles) {

            this.items.push(this.dashboardNav);
            this.items.push(this.membersNav);
            
        // }
    }

    private initializeLinks() {

        this.dashboardNav = {
            label: 'Dashboard',
            icon: 'dashboard',
            command: (event) => { this.router.navigate(['dashboard']); },
            routerLink: ['/']
        };

        this.membersNav = {
            label: 'Offering',
            icon: 'palette',
            items: [
                {
                    label: 'Members lookup',
                    command: (event) => { this.router.navigate(['lookupmembers']); },
                    routerLink: ['/lookupmembers']
                }
            ]
        };
    }
}