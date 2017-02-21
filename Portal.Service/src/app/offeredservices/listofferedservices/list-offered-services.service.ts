import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { OfferedServiceModel } from '../offered-service.model';
declare var SERVICE_URL;

@Injectable()
export class ListOfferedServicesService {
    private serviceUrls: any;
    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }
    getAllOfferedServices() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallservices')
            .map(res => {
                let jData = res.json() || [];
                let retData = new Array<OfferedServiceModel>();
                jData.forEach(data => {
                    let mo = new OfferedServiceModel();
                    mo.Name = data.Name;
                    mo.Description = data.Description;
                    mo.FestivalName = data.FestivalName;
                    mo.FestivalId = data.FestivalId;
                    mo.ServiceId = data.ServiceId;
                    mo.SuggestedDonation = data.SuggestedDonation;
                    retData.push(mo);
                });
                return retData;
            });
    }
}
