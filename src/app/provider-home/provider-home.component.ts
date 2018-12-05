import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Area} from '../services/types.service';
import {AreaService} from '../services/area.service';

@Component({
    selector: 'app-provider-home',
    templateUrl: './provider-home.component.html',
    styleUrls: ['./provider-home.component.scss']
})
export class ProviderHomeComponent implements OnInit {

    areas: Area[] = [];

    constructor(private router: Router, private areaService: AreaService) {
    }

    ngOnInit() {
        this.areaService.getAllAreas()
            .subscribe(areas => this.areas = areas);
    }

}
