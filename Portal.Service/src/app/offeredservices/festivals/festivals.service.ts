import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { FestivalModel } from '../festival.model';
declare var SERVICE_URL;

@Injectable()
export class FestivalService {
    private serviceUrls: any;
    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }
    getFestivals() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallfestivals')
            .map(t => {
                let retModel = new Array<FestivalModel>();
                let jData = t.json() || [];
                jData.forEach(q => {
                    let mo = new FestivalModel();
                    mo.Name = q.Name;
                    mo.Description = q.Description;
                    mo.FestivalId = q.FestivalId;
                    retModel.push(mo);
                });
                return retModel;
            });
    }
}
