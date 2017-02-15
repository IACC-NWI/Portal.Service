import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { MemberModel } from '../member/member.model';
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
