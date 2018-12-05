import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sector} from '../servers/servers.component';
import {Avaliacao} from '../types.service';

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

    constructor(private http: HttpClient) {
    }

    getAllAvaliacoes() {
        return this.http
            .get<Avaliacao[]>(API + `/avaliacao`);
    }

    getAvaliacaoCount() {
        return this.http
            .get<Avaliacao[]>(API + `/avaliacao/count`);
    }

    getAvaliacaoRange(from: number, to: number) {
        return this.http
            .get<Avaliacao[]>(API + `/avaliacao/${from}/${to}`);
    }

    getAvaliacao(id: number) {
        return this.http
            .get<Avaliacao>(API + `/avaliacao/${id}`);
    }

    deleteAvaliacao(id: number) {
        return this.http
            .delete(API + `/avaliacao/${id}`);
    }

    postAvaliacao(id: number, avaliacao: Avaliacao) {
        return this.http
            .put(API + `/avaliacao/${id}`, Avaliacao);
    }

}
