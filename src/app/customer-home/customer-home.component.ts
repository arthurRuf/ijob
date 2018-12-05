import {Component, OnInit} from '@angular/core';
import {Area} from '../services/types.service';
import {Router} from '@angular/router';
import {AreaService} from '../services/area.service';

@Component({
    selector: 'app-customer-home',
    templateUrl: './customer-home.component.html',
    styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

    areas: Area[] = [
        {id: 0, nome: 'Arquitetura', viewImage: '../../assets/icons/provider_arquiteto.png'},
        {id: 1, nome: 'Contador', viewImage: '../../assets/icons/provider_contador.png'},
        {id: 2, nome: 'Diarista', viewImage: '../../assets/icons/provider_diarista.png'},
        {id: 3, nome: 'Eletricista', viewImage: '../../assets/icons/provider_eletricista.png'},
        {id: 4, nome: 'Encanador', viewImage: '../../assets/icons/provider_encanador.png'},
        {id: 5, nome: 'Engenheiro', viewImage: '../../assets/icons/provider_engenheiro.png'},
        {id: 6, nome: 'Frete', viewImage: '../../assets/icons/provider_frete.png'},
        {id: 7, nome: 'Jardineiro', viewImage: '../../assets/icons/provider_jardineiro.png'},
        {id: 8, nome: 'Marceneiro', viewImage: '../../assets/icons/provider_marceneiro.png'},
        {id: 9, nome: 'Marido Aluguel', viewImage: '../../assets/icons/provider_marido_aluguel.png'},
        {id: 10, nome: 'Pedreiro', viewImage: '../../assets/icons/provider_pedreiro.png'},
        {id: 11, nome: 'Pintor', viewImage: '../../assets/icons/provider_pintor.png'},
    ];

    constructor(private areaService: AreaService) {
    }

    ngOnInit() {
        this.areaService.getAllAreas()
            .subscribe(areas => this.areas = areas);
    }

}
