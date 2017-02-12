import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { AuthEventService } from 'app-shared';
import { MemberModel } from '../member.model';
import { AddMemberService } from './add-member.service';

@Component({
    selector: 'iacc-add-member',
    templateUrl: 'app/member/addmember/add-member.html'
})
export class AddMemberComponent implements OnInit {
    parentMemberId: string;
    memberToAdd: MemberModel;
    newMemberForm: FormGroup;
    constructor(private addMemberService: AddMemberService, private formBuilder: FormBuilder,
        private route: ActivatedRoute, private router: Router) {
    }

    saveMember(model: MemberModel) {
        this.addMemberService.addMember(model)
            .subscribe(memberAdded => this.memberToAdd = memberAdded);
    }

    ngOnInit(): void {
        let memberId = UUID.UUID();
        this.newMemberForm = this.formBuilder.group({
            MemberId: [memberId],
            MemberSince: [moment(Date()).format('YYYY-MM-DD')],
            PhoneNumber: ['', [<any>Validators.required, <any>Validators.maxLength(10), <any>Validators.minLength(10)]],
            FirstName: ['', [<any>Validators.required, <any>Validators.maxLength(100)]],
            LastName: ['', [<any>Validators.required, <any>Validators.maxLength(100)]],
            Email: ['', [<any>Validators.required, <any>Validators.maxLength(100)]],
            AddressLine1: ['', [<any>Validators.required, <any>Validators.maxLength(100)]],
            AddressLine2: [''],
            City: ['', [<any>Validators.required, <any>Validators.maxLength(50)]],
            State: ['', [<any>Validators.required, <any>Validators.maxLength(2), <any>Validators.minLength(2)]],
            Zip: ['', [<any>Validators.required, <any>Validators.maxLength(5), <any>Validators.minLength(5)]],
            ParentMemberId: [this.parentMemberId]
        });
        let self = this;
        this.route.params.subscribe(params => {
            self.parentMemberId = params['parentMemberId'];
            let parentMemberControl = self.newMemberForm.controls['ParentMemberId'];
            parentMemberControl.setValue(self.parentMemberId);
        });

    }
}