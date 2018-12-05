import {Component, OnInit} from '@angular/core';
import {Avaliacao, Comment, Pessoa} from '../services/types.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

    commentList: Comment[] = [
        {
            id: 1,
            text: 'Muito bom, quando preciso trocar as lampadas aqui de casa, eu sempre ligo para ele',
            pessoa: {
                id: 1,
                nome: 'Maria do Rosário',
                email: 'maria1945@bol.com.br',
                senha: 'a12d3f3',
                avaliacoes: [],
                pontuacao: 5,
                viewImage: '../../assets/icons/provider_pintor.png',
            },
        }
    ];

    constructor() {
    }

    ngOnInit() {
        // TODO Get Comments from Server
    }

}
