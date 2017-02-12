import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable,  } from 'rxjs/Observable';

import { MemberModel } from '../member.model';
declare var SERVICE_URL;

@Injectable()
export class AddMemberService {
    private serviceUrls: any;

    constructor(private http: Http) {
        this.serviceUrls = SERVICE_URL;
    }

    public addMember(memberModel: MemberModel) {
        return this.http.post(this.serviceUrls.MEMBER_SERVICE + '/api/member/addmember', memberModel)
            .map(res => {
                return this.convertJsonToMember(res);
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


}