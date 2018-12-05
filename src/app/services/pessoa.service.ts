import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pessoa} from './types.service';

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

    constructor(private http: HttpClient) {
    }

    getAllPessoas() {
        return this.http
            .get<Pessoa[]>(API + `/pessoa`);
    }

    getPessoaCount() {
        return this.http
            .get<Pessoa[]>(API + `/pessoa/count`);
    }

    getPessoaRange(from: number, to: number) {
        return this.http
            .get<Pessoa[]>(API + `/pessoa/${from}/${to}`);
    }

    getPessoa(id: number) {
        return this.http
            .get<Pessoa>(API + `/pessoa/${id}`);
    }

    deletePessoa(id: number) {
        return this.http
            .delete(API + `/pessoa/${id}`);
    }

    postPessoa(id: number, pessoa: Pessoa) {
        return this.http
            .put(API + `/pessoa/${id}`, pessoa);
    }

}
