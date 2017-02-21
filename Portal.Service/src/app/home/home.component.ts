import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { SelectItem } from 'primeng/primeng';

import { HomeService } from './home.service';
import { MemberModel } from '../member/member.model';
import { FestivalModel } from '../offeredservices/festival.model';
import { OfferedServiceModel } from '../offeredservices/offered-service.model';
import { PurchaseOfferingModel } from './purchase-offering.model';
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
    festivals: SelectItem[];
    availableFestivals: FestivalModel[];
    offeredServices: SelectItem[];
    availableServices: OfferedServiceModel[];
    suggestedDonation: number;
    membersince: string;
    showMemberSince: boolean;
    FirstName: string;
    LastName: string;
    constructor(private homeService: HomeService, private formBuilder: FormBuilder) {
        this.festivals = new Array<SelectItem>();
        this.availableFestivals = new Array<FestivalModel>();
        this.festivals.push({ label: '-- Festivals --', value: null });
        this.offeredServices = new Array<SelectItem>();
        this.availableServices = new Array<OfferedServiceModel>();
        this.offeredServices.push({ label: '-- Service --', value: null });
        this.suggestedDonation = 0;
        this.showMemberSince = false;
    }

    ngOnInit(): void {
        let purchaseId = UUID.UUID();
        this.homeService.getAllFestivals()
            .subscribe(festivals => {
                festivals.forEach(fest => {
                    this.availableFestivals.push(fest);
                    this.festivals.push({ label: fest.Name, value: fest.FestivalId });
                });
            });
        this.homeService.getAllOfferedServices()
            .subscribe(serv => {
                serv.forEach(s => {
                    this.availableServices.push(s);
                    this.offeredServices.push({ label: s.Name, value: s.ServiceId });
                });
            });
        let today = new Date();
        this.purchaseOfferingsForm = this.formBuilder.group({
            PurchaseId: [purchaseId],
            MemberId: [''],
            FirstName: ['', [<any>Validators.required, <any>Validators.maxLength(50)]],
            LastName: ['', [<any>Validators.required, <any>Validators.maxLength(50)]],
            Email: ['', [<any>Validators.maxLength(100)]],
            AddressLine1: ['', [<any>Validators.maxLength(100)]],
            AddressLine2: ['', [<any>Validators.maxLength(100)]],
            City: ['', [<any>Validators.maxLength(50)]],
            State: ['', [<any>Validators.maxLength(2)]],
            Zip: ['', [<any>Validators.maxLength(5)]],
            FestivalId: ['', [Validators.required]],
            FestivalName: ['', [Validators.required]],
            OfferedServiceId: ['', [Validators.required]],
            OfferedServiceName: ['', [Validators.required]],
            SuggestedDonation: ['', Validators.required],
            ActualDonation: ['', [Validators.required]],
            ServiceUnFormatedDate: [today, Validators.required]
        });

    }
    festivalSelectValueChange(event: any) {
        let festivalId = this.purchaseOfferingsForm.controls['FestivalId'];
        let festival = this.availableFestivals.filter(q => q.FestivalId === festivalId.value)[0];

        this.purchaseOfferingsForm.controls['FestivalName'].setValue(festival.Name);
    }

    offeredSvcSelectValueChanged(event: any) {
        let offeredServiceId = this.purchaseOfferingsForm.controls['OfferedServiceId'];
        let offeredSvc = this.availableServices.filter(q => q.ServiceId === offeredServiceId.value)[0];
        this.purchaseOfferingsForm.controls['OfferedServiceName'].setValue(offeredSvc.Name);
        this.suggestedDonation = offeredSvc.SuggestedDonation;
        this.purchaseOfferingsForm.controls['ActualDonation'].setValue(offeredSvc.SuggestedDonation);
        this.purchaseOfferingsForm.controls['SuggestedDonation'].setValue(offeredSvc.SuggestedDonation);
    }

    memberSelected(event: MemberModel) {
        this.purchaseOfferingsForm.controls['FirstName'].setValue(event.FirstName);
        this.purchaseOfferingsForm.controls['LastName'].setValue(event.LastName);
        this.purchaseOfferingsForm.controls['Email'].setValue(event.Email);
        this.purchaseOfferingsForm.controls['AddressLine1'].setValue(event.AddressLine1);
        this.purchaseOfferingsForm.controls['AddressLine2'].setValue(event.AddressLine2);
        this.purchaseOfferingsForm.controls['City'].setValue(event.City);
        this.purchaseOfferingsForm.controls['State'].setValue(event.State);
        this.purchaseOfferingsForm.controls['Zip'].setValue(event.Zip);
        this.purchaseOfferingsForm.controls['MemberId'].setValue(event.MemberId);
        this.membersince = event.MemberSince;
        this.showMemberSince = true;
        this.FirstName = event.FirstName;
        this.LastName = event.LastName;
        console.log(event);
    }
    searchMembers(event) {
        this.homeService.lookupmembers(event.query)
            .subscribe(data => {
                this.memberResults = data;
            });
    }

    purchaseOffering(model: PurchaseOfferingModel) {
        model.ServiceDate = moment(model.ServiceUnFormatedDate).format('YYYY-MM-DD');
        this.homeService.purchaseOffering(model).subscribe(ret => alert('Service Purchased.'));
    }
    chooseAnotherMember() {
        this.showMemberSince = false;
    }
}
