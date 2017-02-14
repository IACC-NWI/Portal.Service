﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

import { OfferedServiceModel } from '../offered-service.model';
declare let SERVICE_URL;

@Injectable()
export class AddOfferedServices {
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
            .map(res => this.convertJsonToOfferedServiceModelArray(res))
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
    convertJsonToOfferedServiceModelArray(data: any) {
        let offeredSvcData = data.json() || [];
        let retData = new Array<OfferedServiceModel>();
        offeredSvcData.forEach(t => {
            let ret = new OfferedServiceModel();
            ret.Name = offeredSvcData.Name;
            ret.Description = t.Description;
            ret.FestivalId = t.FestivalId;
            ret.FestivalName = t.FestivalName;
            ret.ServiceId = t.ServiceId;
            retData.push(ret);
        });
        return retData;
    }

}