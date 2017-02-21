import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { AddFestivalService } from './add-festival.service';
import { FestivalModel } from '../festival.model';
@Component({
    selector: 'iacc-add-festival',
    templateUrl: 'app/offeredservices/addfestival/add-festival.html'
})
export class AddFestivalComponent implements OnInit {
    newFestivalForm: FormGroup;
    festivalToAdd: FestivalModel;
    constructor(private addFestivalService: AddFestivalService, private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        let festivalId = UUID.UUID();
        this.newFestivalForm = this.formBuilder.group({
            FestivalId: [festivalId],
            Name: ['', [<any>Validators.required, <any>Validators.maxLength(50)]],
            Description: ['', [<any>Validators.required, <any>Validators.maxLength(500)]]
        });
    }

    saveFestival(model: FestivalModel) {
        this.addFestivalService.addFestival(model)
            .subscribe(festivalModel => {
                this.festivalToAdd = festivalModel;
                alert('Festival Added.');
            });
    }
}