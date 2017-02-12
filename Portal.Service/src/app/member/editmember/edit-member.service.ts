import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, } from 'rxjs/Observable';
import * as moment from 'moment';

import { MemberModel } from '../member.model';
declare var SERVICE_URL;

@Injectable()
export class EditMemberService {
    private serviceUrls: any;

    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }
    public getMemberById(memberId: string) {
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/lookupbyid/' + memberId)
            .map(res => {
                return this.convertJsonToMember(res);
            })
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    public updateMember(memberModel: MemberModel) {
        return this.http.post(this.serviceUrls.MEMBER_SERVICE + '/api/member/updatemember', memberModel)
            .map(res => {
                return this.convertJsonToMember(res);
            })
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    public getFamily(parentMemberId: string) {
        return this.http.get(this.serviceUrls.MEMBER_SERVICE + '/api/member/getfamily/' + parentMemberId)
            .map(res => {
                return this.convertJsonToListOfMembers(res);
            })
            .catch((error, source) => {
                if (error.status === 400) {
                    console.log('Bad Model.');
                }
            });
    }
    convertJsonToMember(data: any): MemberModel {
        let memberData = data.json() || {};
        let retMember = new MemberModel();
        retMember.MemberId = memberData.MemberId;
        retMember.MemberSince = memberData.MemberSince;
        retMember.PhoneNumber = memberData.PhoneNumber;
        retMember.FirstName = memberData.FirstName;
        retMember.LastName = memberData.LastName;
        retMember.AddressLine1 = memberData.AddressLine1;
        retMember.AddressLine2 = memberData.AddressLine2;
        retMember.City = memberData.City;
        retMember.State = memberData.State;
        retMember.Zip = memberData.Zip;
        retMember.HasChildren = memberData.HasChildren;
        retMember.HasParent = memberData.HasParent;
        retMember.ParentMemberId = memberData.ParentMemberId;
        retMember.Email = memberData.Email;
        return retMember;
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