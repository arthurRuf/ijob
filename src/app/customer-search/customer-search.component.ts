import {Component, OnInit} from '@angular/core';
import {Area, Especialidade, Prestador} from '../services/types.service';
import {Router} from '@angular/router';
import {ClassificationStarsComponent} from '../classification-stars/classification-stars.component';

@Component({
    selector: 'app-customer-search',
    templateUrl: './customer-search.component.html',
    styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

    prestadoresList: Prestador[] = [];
    especialidadesList: Especialidade[] = [
        {
            id: 1,
            nome: 'Especialidade 1'
        },
        {
            id: 2,
            nome: 'Especialidade 2'
        },
        {
            id: 3,
            nome: 'Especialidade 3'
        },
    ];


    constructor() {
    }

    ngOnInit() {
        //TODO Get Prestadors do Servidor
    }

}
