import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { FestivalModel } from '../festival.model';
declare var SERVICE_URL;

@Injectable()
export class AddFestivalService {
    private serviceUrls: any;

    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }

    public addFestival(festivalModel: FestivalModel) {
        return this.http.post(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/addnewfestival', festivalModel)
            .map(res => {
                return this.convertJsonToFestivalModel(res);
            })
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    convertJsonToFestivalModel(data) {
        var festData = data.json() || {};
        var retFest = new FestivalModel();
        retFest.Description = festData.Description;
        retFest.FestivalId = festData.FestivalId;
        retFest.Name = festData.Name;
        return retFest;
    }
}