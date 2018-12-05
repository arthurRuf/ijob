import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClassificationStarsComponent} from '../classification-stars/classification-stars.component';
import {Area, Avaliacao, Cliente, Prestador} from '../services/types.service';

@Component({
    selector: 'app-customer-profile',
    templateUrl: './customer-profile.component.html',
    styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

    prestador: Prestador = {
        id: 1,
        nome: 'José Mustermann',
        email: 'jose@musterfirma.com.br',
        senha: '1a2b3c4d5e',
        avaliacoes: [],
        pontuacao: 5,
        viewImage: '../../assets/imgs/default.png',
        nomeEmpresa: 'José Musterfirma Encanadores',
        area: [
            {
                id: 1,
                nome: 'Eletricista',
                viewImage: '../../assets/icons/provider_eletricista.png',
            }
        ],
        Cliente: [],
        Historico: [],
        servico: 'Olá mundo',
    };

    constructor() {
    }

    ngOnInit() {

        //TODO GET PRESTADOR DO SERVIDOR
    }

}
