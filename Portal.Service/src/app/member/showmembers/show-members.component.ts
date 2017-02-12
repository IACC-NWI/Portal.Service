import { Component, Input, OnInit } from '@angular/core';

import { MemberModel } from '../member.model';
import { ShowMembersService } from './show-members.service';

@Component({
    selector: 'iacc-show-members',
    templateUrl: 'app/member/showmembers/show-members.html'
})
export class ShowMembersComponent implements OnInit {
    memberPhoneNumber: string;
    members: MemberModel[];
    constructor(private showMemberService: ShowMembersService) {
        this.members = new Array<MemberModel>();
    }

    ngOnInit(): void {
        this.showMemberService.getAllMembers().subscribe(members => this.members = members);
    }

    lookupMember() {
        if (this.memberPhoneNumber !== '') {
            this.showMemberService.lookupMemberUsingPhoneNumber(this.memberPhoneNumber)
                .subscribe(members => this.members = members);
        }
    }
}
