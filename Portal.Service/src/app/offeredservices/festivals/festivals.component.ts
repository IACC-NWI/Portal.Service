import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { FestivalService } from './festivals.service';
import { FestivalModel } from '../festival.model';

@Component({
    selector: 'iacc-festivals',
    templateUrl: 'app/offeredservices/festivals/festivals.html'
})
export class FestivalsComponent implements OnInit {
    festivals: FestivalModel[];
    constructor(private festivalsService: FestivalService) {
        this.festivals = new Array<FestivalModel>();
    }

    ngOnInit(): void {
        let self = this;
        this.festivalsService.getFestivals().subscribe(ret => self.festivals = ret);
    }
}
