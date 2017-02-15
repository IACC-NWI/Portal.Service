import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { HomeService } from './home.service';
import { MemberModel } from '../member/member.model';
@Component({
    selector: 'iacc-home',
    templateUrl: 'app/home/home.html',
    styleUrls: [
        'app/home/home.css'
    ]
})
export class HomeComponent implements OnInit {
    purchaseOfferingsForm: FormGroup;
    memberId: string;
    memberResults: MemberModel[];
    constructor(private homeService: HomeService, private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        let purchaseId = UUID.UUID();
        this.purchaseOfferingsForm = this.formBuilder.group({
            PurchaseId: [purchaseId],
            MemberId: ['']
        });

    }
    searchMembers(event) {
        this.homeService.lookupmembers(event.query)
            .subscribe(data => {
                this.memberResults = data;
            });
    }
}
