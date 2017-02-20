import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PurchasesModel } from '../purchases.model';
declare var SERVICE_URL;

@Injectable()
export class PurchasesService {
    private serviceUrls: any;

    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }
    getAllPurchases() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getallserviesperformed')
            .map(res => {
                let retModel = new Array<PurchasesModel>();
                let resJsn = res.json() || [];
                resJsn.forEach(t => {
                    let m = new PurchasesModel();
                    m.Name = t.Name;
                    m.Count = t.Count;
                    m.ServiceId = t.ServiceId;
                    m.TotalDonations = t.TotalDonations;
                    retModel.push(m);
                });
                return retModel;
            });
    }
    getPurchasesForRange(startdate: string, enddate: string) {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getallservicesperformed/' + startdate + '/' + enddate )
            .map(res => {
                let retModel = new Array<PurchasesModel>();
                let resJsn = res.json() || [];
                resJsn.forEach(t => {
                    let m = new PurchasesModel();
                    m.Name = t.Name;
                    m.Count = t.Count;
                    m.ServiceId = t.ServiceId;
                    m.TotalDonations = t.TotalDonations;
                    retModel.push(m);
                });
                return retModel;
            });
    }
}