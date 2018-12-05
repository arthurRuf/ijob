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

    prestadoresList: Prestador[] = [
        {
            id: 1,
            nome: 'José Mustermann',
            email: 'jose@musterfirma.com.br',
            senha: '1a2b3c4d5e',
            avaliacoes: [],
            pontuacao: 4,
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
        },
        {
            id: 1,
            nome: 'Maria Musterfrau',
            email: 'maria@musterfrau.com.br',
            senha: '1a2b3c4d5e',
            avaliacoes: [],
            pontuacao: 5,
            viewImage: '../../assets/imgs/default.png',
            nomeEmpresa: 'Maria Musterfrau Encanadores',
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
        },
        {
            id: 1,
            nome: 'Geraldo Walkmen',
            email: 'geraldo@walkmen.com.br',
            senha: '1a2b3c4d5e',
            avaliacoes: [],
            pontuacao: 3,
            viewImage: '../../assets/imgs/default.png',
            nomeEmpresa: 'Geraldo Walkmen',
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
        },

    ];
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
