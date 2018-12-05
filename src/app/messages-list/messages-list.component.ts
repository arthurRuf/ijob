import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Avaliacao, Mensagem} from '../services/types.service';

@Component({
    selector: 'app-messages-list',
    templateUrl: './messages-list.component.html',
    styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

    messageList: Mensagem[] = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            data: new Date('2018-01-01 08:20:20'),
            hora: new Date('2018-01-01 08:20:20'),
            pessoaRemetente: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            },
            pessoaDestinatario: {
                id: 0,
                nome: 'Mariana da Silva',
                email: 'marina@silva.com.br',
                senha: '1a2w3345',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/imgs/default.png',
            }
        },
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

}
