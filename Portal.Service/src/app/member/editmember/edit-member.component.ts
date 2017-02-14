import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { MemberModel } from '../member.model';

import { EditMemberService } from './edit-member.service';

@Component({
    selector: 'iacc-edit-member',
    templateUrl: 'app/member/editmember/edit-member.html'
})
export class EditMemberComponent implements OnInit {
    memberIdToEdit: string;
    memberToEdit: MemberModel;
    editMemberForm: FormGroup;
    familyMembers: MemberModel[];
    constructor(private editMemberService: EditMemberService, private formBuilder: FormBuilder,
        private route: ActivatedRoute, private router: Router) {
        this.memberToEdit = new MemberModel();
        this.familyMembers = new Array<MemberModel>();
    }

    ngOnInit(): void {
        this.editMemberForm = this.formBuilder.group({
            MemberId: [''],
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
            ParentMemberId: ['']
        });

        let self = this;
        this.route.params.subscribe(params => {
            self.memberIdToEdit = params['memberIdToEdit'];
            self.editMemberService.getMemberById(self.memberIdToEdit)
                .subscribe(member => {
                    self.memberToEdit = member;
                    let memberIdControl = self.editMemberForm.controls['MemberId'];
                    memberIdControl.setValue(member.MemberId);
                    let memberSinceControl = self.editMemberForm.controls['MemberSince'];
                    memberSinceControl.setValue(member.MemberSince);
                    let phoneNumberControl = self.editMemberForm.controls['PhoneNumber'];
                    phoneNumberControl.setValue(member.PhoneNumber);
                    let firstNameControl = self.editMemberForm.controls['FirstName'];
                    firstNameControl.setValue(member.FirstName);
                    let lastNameControl = self.editMemberForm.controls['LastName'];
                    lastNameControl.setValue(member.LastName);
                    let emailControl = self.editMemberForm.controls['Email'];
                    emailControl.setValue(member.Email);
                    let addressLine1Control = self.editMemberForm.controls['AddressLine1'];
                    addressLine1Control.setValue(member.AddressLine1);
                    let addressLine2Control = self.editMemberForm.controls['AddressLine2'];
                    addressLine2Control.setValue(member.AddressLine2);
                    let cityControl = self.editMemberForm.controls['City'];
                    cityControl.setValue(member.City);
                    let stateControl = self.editMemberForm.controls['State'];
                    stateControl.setValue(member.State);
                    let zipControl = self.editMemberForm.controls['Zip'];
                    zipControl.setValue(member.Zip);
                    let parentMemberControl = self.editMemberForm.controls['ParentMemberId'];
                    parentMemberControl.setValue(member.ParentMemberId);
                });
            // Get Family Members.
            self.editMemberService.getFamily(self.memberIdToEdit).subscribe(
                family => {
                    self.familyMembers = family;
                });
        });
    }

    update(model: MemberModel) {
        this.editMemberService.updateMember(model).subscribe(memberUpdated => this.memberToEdit = memberUpdated);
    }
}