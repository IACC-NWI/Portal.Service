import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { SelectItem } from 'primeng/primeng';

import { AddOfferedServicesService } from './add-offered-services.service';
import { OfferedServiceModel } from '../offered-service.model';
import { FestivalModel } from '../festival.model';
@Component({
    selector: 'iacc-add-offered-services',
    templateUrl: 'app/offeredservices/addofferedservices/add-offered-services.html'
})
export class AddOfferedServicesComponent implements OnInit {
    newOfferedServicesForm: FormGroup;
    offeredServiceToAdd: OfferedServiceModel;
    festivals: SelectItem[];
    availableFestivals: FestivalModel[];
    constructor(private addOfferedServicesService: AddOfferedServicesService, private formBuilder: FormBuilder) {
        this.availableFestivals = new Array<FestivalModel>();
        this.festivals = new Array<SelectItem>();
        this.festivals.push({ label: '-- Festivals --', value: null });
    }

    ngOnInit(): void {
        let offeredServiceId = UUID.UUID();
        this.newOfferedServicesForm = this.formBuilder.group({
            ServiceId: [offeredServiceId],
            Name: ['', [<any>Validators.required, <any>Validators.maxLength(50)]],
            Description: ['', [<any>Validators.maxLength(500)]],
            FestivalId: [''],
            FestivalName: [''],
            SuggestedDonation: [0, [<any>Validators.required]]
        });

        this.addOfferedServicesService.getAllFestivals()
            .subscribe(festivals => {
                festivals.forEach(fest => {
                    this.availableFestivals.push(fest);
                    this.festivals.push({ label: fest.Name, value: fest.FestivalId });
                });
            });
    }

    festivalSelectValueChange(event: any) {
        let festivalId = this.newOfferedServicesForm.controls['FestivalId'];
        let festival = this.availableFestivals.filter(q => q.FestivalId === festivalId.value)[0];
        
        let festivalNameCtrl = this.newOfferedServicesForm.controls['FestivalName'];
        festivalNameCtrl.setValue(festival.Name);
    }

    saveOfferedService(model: OfferedServiceModel): void {
        this.addOfferedServicesService.addNewOfferedService(model)
            .subscribe(offeredSvc => {
                this.offeredServiceToAdd = offeredSvc;
                alert('Service Added.');
            });
    }
}