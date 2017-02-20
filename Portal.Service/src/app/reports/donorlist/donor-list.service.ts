import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DonorModel } from '../donor.model';
declare var SERVICE_URL;

@Injectable()
export class DonorListService {
    private serviceUrls: any;
    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }

    getListOfDonors() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/reports/getalldonors')
            .map(t => {
                let models = t.json() || [];
                let returnModels = new Array<DonorModel>();
                models.forEach(md => {
                    let ret = new DonorModel();
                    ret.FirstName = md.FirstName;
                    ret.LastName = md.LastName;
                    ret.DonorId = md.DonorId;
                    ret.Email = md.Email;
                    ret.MemberId = md.Member;
                    ret.TotalDonation = md.TotalDonation;
                    returnModels.push(ret);
                });
                return returnModels;
            });
    }
}