import {Injectable} from '@angular/core';


// EXCLUIR TIPO
export interface Area {
    id: number;
    nome: string;
    viewImage: string;
}

export interface Especialidade {
    id: number;
    nome: string;
}

export interface Pessoa {
    id: number;
    nome: string;
    email: string;
    senha: string;
    avaliacoes: Avaliacao[];
    pontuacao: number;
    viewImage: string;
}

export interface Comment {
    id: number;
    text: string;
    pessoa: Pessoa;
}

export interface Mensagem {
    id: number;
    text: string;
    data: Date;
    hora: Date;
    pessoaRemetente: Pessoa;
    pessoaDestinatario: Pessoa;
}


//Novos

export interface Servico {
    value: number;
    text: string;
    user: Pessoa;
}


export interface Avaliacao {
    id: number;
    name: string;
    pessoa: Pessoa;
    comentario: string;
    pontuacao: number;
}

export interface Cliente extends Pessoa {
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    int_num: number;
    int_cep: number;
}

export interface Prestador extends Pessoa {
    nomeEmpresa: string;
    area: Area[];
    Cliente: Cliente[];
    Historico: Cliente[];
    servico: string;
}


export interface Servico {
    id: number;
    Prestador: Prestador;
    Cliente: Pessoa;
}


@Injectable({
    providedIn: 'root'
})
export class TypesService {

    constructor() {
    }
}
