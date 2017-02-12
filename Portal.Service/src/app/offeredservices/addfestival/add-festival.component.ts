import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';

import { AuthEventService } from 'app-shared';

@Component({
    selector: 'iacc-add-festival',
    templateUrl: 'app/offeredservices/addfestival/add-festival.html'
})
export class AddFestivalComponent {
    
}