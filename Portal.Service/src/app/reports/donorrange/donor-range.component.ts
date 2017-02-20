import { Component, OnInit } from '@angular/core';
import { DonorModel } from '../donor.model';
import * as moment from 'moment';

import { DonorRangeService } from './donor-range.service';
@Component({
    selector: 'iacc-donorrange',
    templateUrl: 'app/reports/donorrange/donor-range.html'
})
export class DonorRangeComponent implements OnInit {
    donors: DonorModel[];
    startDate: Date;
    endDate: Date;
    constructor(private donorRangeService: DonorRangeService) {
        this.donors = new Array<DonorModel>();
    }

    ngOnInit(): void {
        this.startDate = new Date();
        this.endDate = new Date();
    }

    viewreport() {
        let self = this;
        this.donorRangeService.getAllDonations(moment(this.startDate).format('YYYY-MM-DD'),
            moment(this.endDate).format('YYYY-MM-DD'))
            .subscribe(t => {
                self.donors = t;
            });
    }
}