import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Area, Prestador} from '../services/types.service';
import {AreaService} from '../services/area.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    areasList: Area[] = [
        {id: 0, nome: 'Arquitetura', viewImage: '../../assets/imgs/default.png'},
        {id: 1, nome: 'Mecânica', viewImage: '../../assets/imgs/default.png'},
        {id: 2, nome: 'Eletricista', viewImage: '../../assets/imgs/default.png'},
        {id: 3, nome: 'Área 3', viewImage: '../../assets/imgs/default.png'},
        {id: 4, nome: 'Área 4', viewImage: '../../assets/imgs/default.png'},
        {id: 5, nome: 'Área 5', viewImage: '../../assets/imgs/default.png'},
        {id: 6, nome: 'Área 6', viewImage: '../../assets/imgs/default.png'},
        {id: 7, nome: 'Área 7', viewImage: '../../assets/imgs/default.png'},
        {id: 8, nome: 'Área 8', viewImage: '../../assets/imgs/default.png'},
    ];

    fieldsList: string[] = [
        'Elétrica',
        'Especialidade 1',
        'Especialidade 2',
        'Especialidade 3',
        'Especialidade 4',
        'Especialidade 5'
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.areasList.unshift(
            {id: null, nome: '-- Nenhum --', viewImage: '../../assets/imgs/default.png'}
        );
    }

    customerCreate() {
        this.router.navigate(['/', 'customer', 'home']);
    }

    providerCreate() {
        this.router.navigate(['/', 'provider', 'home']);
    }

}
