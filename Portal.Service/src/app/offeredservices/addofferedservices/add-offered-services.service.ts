import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { OfferedServiceModel } from '../offered-service.model';
import { FestivalModel } from '../festival.model';
declare let SERVICE_URL;

@Injectable()
export class AddOfferedServicesService {
    private serviceUrls: any;

    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }

    public addNewOfferedService(model: OfferedServiceModel) {
        return this.http.post(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/addnewservice', model)
            .map(res => this.convertJsonToOfferedServiceModel(res))
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    public getAllFestivals() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallfestivals')
            .map(res => this.convertJsonToFestivalModelArray(res))
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    convertJsonToOfferedServiceModel(data: any) {
        let offeredSvcData = data.json() || {};
        let ret = new OfferedServiceModel();
        ret.Name = offeredSvcData.Name;
        ret.Description = offeredSvcData.Description;
        ret.FestivalId = offeredSvcData.FestivalId;
        ret.FestivalName = offeredSvcData.FestivalName;
        ret.ServiceId = offeredSvcData.ServiceId;

        return ret;
    }
    convertJsonToFestivalModelArray(data: any) {
        let festivalData = data.json() || [];
        let retData = new Array<FestivalModel>();
        festivalData.forEach(t => {
            let ret = new FestivalModel();
            ret.FestivalId = t.FestivalId;
            ret.Description = t.Description;
            ret.Name = t.Name;
            retData.push(ret);
        });
        return retData;
    }
    

}