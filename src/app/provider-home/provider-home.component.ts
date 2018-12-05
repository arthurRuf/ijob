import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllServicesService} from '../all-services.service';
import {Sector} from '../servers/servers.component';

@Component({
    selector: 'app-provider-home',
    templateUrl: './provider-home.component.html',
    styleUrls: ['./provider-home.component.scss']
})
export class ProviderHomeComponent implements OnInit {

    sectors: Sector[] = [];

    constructor(private router: Router, private allServices: AllServicesService) {
    }

    ngOnInit() {
        this.allServices.getAllAreas()
            .subscribe(sectors => this.sectors = sectors,
                err => console.log(err));
    }

}
