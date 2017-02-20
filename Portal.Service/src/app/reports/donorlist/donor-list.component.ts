import { Component, OnInit } from '@angular/core';
import { DonorModel } from '../donor.model';
import { DonorListService } from  './donor-list.service';

@Component({
    selector: 'iacc-donor-list',
    templateUrl: 'app/reports/donorlist/donor-list.html'
})
export class DonorListComponent implements OnInit {
    donors: DonorModel[];
    constructor(private donorService: DonorListService) {
        this.donors = new Array<DonorModel>();
    }

    ngOnInit(): void {
        let self = this;
        this.donorService.getListOfDonors().subscribe(t => self.donors = t);
    }
}