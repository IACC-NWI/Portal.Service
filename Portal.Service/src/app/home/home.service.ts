import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { MemberModel } from '../member/member.model';
import { FestivalModel } from '../offeredservices/festival.model';
import { OfferedServiceModel } from '../offeredservices/offered-service.model';
import { PurchaseOfferingModel } from './purchase-offering.model';
declare var SERVICE_URL;

@Injectable()
export class HomeService {
    private serviceUrls: any;
    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }
    public lookupmembers(query: string) {
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/lookupmembers/' + query)
            .map(res => {
                return this.convertJsonToListOfMembers(res);
            })
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    public getAllMembers() {
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/getallmembers')
            .map(res => {
                return this.convertJsonToListOfMembers(res);
            })
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
    public getAllOfferedServices() {
        return this.http.get(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/getallservices')
            .map(res => this.convertJsonToOfferedServiceModelArray(res))
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    public purchaseOffering(model: PurchaseOfferingModel) {
        return this.http.post(this.serviceUrls.TEMPLE_SERVICE + '/api/offeredservices/purchaseoffering', model)
            .map(r => r)
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    convertJsonToOfferedServiceModelArray(data: any) {
        let offeredSvcData = data.json() || [];
        let retData = new Array<OfferedServiceModel>();
        offeredSvcData.forEach(t => {
            let ret = new OfferedServiceModel();
            ret.Name = t.Name;
            ret.Description = t.Description;
            ret.FestivalId = t.FestivalId;
            ret.FestivalName = t.FestivalName;
            ret.ServiceId = t.ServiceId;
            ret.SuggestedDonation = t.SuggestedDonation;
            retData.push(ret);
        });
        return retData;
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
    convertJsonToListOfMembers(data: any): MemberModel[] {
        let memberData = data.json() || [];
        let retData = new Array<MemberModel>();
        memberData.forEach(item => {
            let mem = new MemberModel();
            mem.MemberId = item.MemberId;
            mem.MemberSince = moment(item.MemberSince).format('MM/DD/YYYY');
            mem.PhoneNumber = item.PhoneNumber;
            mem.FirstName = item.FirstName;
            mem.LastName = item.LastName;
            mem.AddressLine1 = item.AddressLine1;
            mem.AddressLine2 = item.AddressLine2;
            mem.City = item.City;
            mem.State = item.State;
            mem.Zip = item.Zip;
            mem.HasChildren = item.HasChildren;
            mem.HasParent = item.HasParent;
            mem.ParentMemberId = item.ParentMemberId;
            mem.Email = item.Email;
            retData.push(mem);
        });
        return retData;
    }
}
