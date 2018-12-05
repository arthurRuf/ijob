import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mensagem} from './types.service';

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

    constructor(private http: HttpClient) {
    }

    getAllMensagens() {
        return this.http
            .get<Mensagem[]>(API + `/mensagem`);
    }

    getMensagemCount() {
        return this.http
            .get<Mensagem[]>(API + `/mensagem/count`);
    }

    getMensagemRange(from: number, to: number) {
        return this.http
            .get<Mensagem[]>(API + `/mensagem/${from}/${to}`);
    }

    getMensagem(id: number) {
        return this.http
            .get<Mensagem>(API + `/mensagem/${id}`);
    }

    deleteMensagem(id: number) {
        return this.http
            .delete(API + `/mensagem/${id}`);
    }

    postMensagem(id: number, mensagem: Mensagem) {
        return this.http
            .put(API + `/mensagem/${id}`, mensagem);
    }

}
