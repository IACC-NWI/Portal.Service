import { Component, OnInit } from '@angular/core';
import { DonorModel } from '../donor.model';
import * as moment from 'moment';

import { PurchasesModel } from '../purchases.model';
import { PurchasesService } from './purchases.service';
@Component({
    selector: 'iacc-purchases-report',
    templateUrl: 'app/reports/purchases/purchases.html'
})
export class PurchasesComponent implements OnInit {
    startDate: Date;
    endDate: Date;
    purchases: PurchasesModel[];
    constructor(private purchaseService: PurchasesService) {
        this.purchases = new Array<PurchasesModel>();
        this.startDate = this.endDate = new Date();
    }

    ngOnInit(): void { }

    search() {
        let self = this;
        this.purchaseService.getPurchasesForRange(moment(this.startDate).format('YYYY-MM-DD'),
                moment(this.endDate).format('YYYY-MM-DD'))
            .subscribe(t => {
                self.purchases = t;
            });
    }
}