import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { OfferedServiceModel } from '../offered-service.model';
import { ListOfferedServicesService } from './list-offered-services.service';

@Component({
    selector: 'iacc-list-offered-services',
    templateUrl: 'app/offeredservices/listofferedservices/list-offered-services.html'
})
export class ListOfferedServicesComponent implements OnInit{
    offeredServices: OfferedServiceModel[];
    constructor(private listOfferedServicesSvc: ListOfferedServicesService) {
        this.offeredServices = new Array<OfferedServiceModel>();
    }

    ngOnInit(): void {
        let self = this;
        this.listOfferedServicesSvc.getAllOfferedServices().subscribe(ret => self.offeredServices = ret);
    }
}
