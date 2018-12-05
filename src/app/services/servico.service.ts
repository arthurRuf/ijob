import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Servico} from './types.service';

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

    constructor(private http: HttpClient) {
    }

    getAllServicos() {
        return this.http
            .get<Servico[]>(API + `/servico`);
    }

    getServicoCount() {
        return this.http
            .get<Servico[]>(API + `/servico/count`);
    }

    getServicoRange(from: number, to: number) {
        return this.http
            .get<Servico[]>(API + `/servico/${from}/${to}`);
    }

    getServico(id: number) {
        return this.http
            .get<Servico>(API + `/servico/${id}`);
    }

    deleteServico(id: number) {
        return this.http
            .delete(API + `/servico/${id}`);
    }

    postServico(id: number, servico: Servico) {
        return this.http
            .put(API + `/servico/${id}`, servico);
    }

}
