﻿import { Component, OnInit } from '@angular/core';
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
    private adminNav: MenuItem;
    private reportsNav: MenuItem;

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
            this.items.push(this.adminNav);
        this.items.push(this.reportsNav);

        // }
    }

    private initializeLinks() {

        this.dashboardNav = {
            label: 'Dashboard',
            icon: 'dashboard',
            command: (event) => { this.router.navigate(['dashboard']); },
            routerLink: ['/']
        };

        this.adminNav = {
            label: 'Admin',
            icon: 'palette',
            items: [
                {
                    label: 'Members lookup',
                    command: (event) => { this.router.navigate(['lookupmembers']); },
                    routerLink: ['/lookupmembers']
                },
                {
                    label: 'Add Member',
                    command: (event) => { this.router.navigate(['addmember']); },
                    routerLink: ['/addmember']
                },
                {
                    label: 'Show Festivals',
                    command: (event) => { this.router.navigate(['showfestivals']) },
                    routerLink: ['/showfestivals']
                },
                {
                    label: 'Show Services',
                    command: (event) => { this.router.navigate(['showofferedservices']) },
                    routerLink: ['/showofferedservices']
                },
                {
                    label: 'Add Festival',
                    command: (event) => { this.router.navigate(['addfestival']); },
                    routerLink: ['/addfestival']
                },
                {
                    label: 'Add Service',
                    command: (event) => { this.router.navigate(['addofferedservice']) },
                    routerLink: ['/addofferedservice']
                }
            ]
        };
        this.reportsNav = {
            label: 'Reports',
            icon: 'pageview',
            items: [
                {
                    label: 'Donor Report',
                    command: (event) => { this.router.navigate(['donorreport']) },
                    routerLink: ['/donorreport']
                },
                {
                    label: 'Donor Range',
                    command: (event) => { this.router.navigate(['donorrange']) },
                    routerLink: ['/donorrange']
                },
                {
                    label: 'Offerings Report',
                    command: (event) => { this.router.navigate(['purchaserange']) },
                    routerLink: ['/purchaserange']
                }
            ]
        };
    }
}