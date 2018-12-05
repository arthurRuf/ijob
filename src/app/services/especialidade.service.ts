import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sector} from '../servers/servers.component';
import {Especialidade} from '../types.service';

const API = 'http://localhost:8080/mywork/api';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

    constructor(private http: HttpClient) {
    }

    getAllEspecialidades() {
        return this.http
            .get<Especialidade[]>(API + `/especialidade`);
    }

    getEspecialidadeCount() {
        return this.http
            .get<Especialidade[]>(API + `/especialidade/count`);
    }

    getEspecialidadeRange(from: number, to: number) {
        return this.http
            .get<Especialidade[]>(API + `/especialidade/${from}/${to}`);
    }

    getEspecialidade(id: number) {
        return this.http
            .get<Especialidade>(API + `/especialidade/${id}`);
    }

    deleteEspecialidade(id: number) {
        return this.http
            .delete(API + `/especialidade/${id}`);
    }

    postEspecialidade(id: number, especialidade: Especialidade) {
        return this.http
            .put(API + `/especialidade/${id}`, Especialidade);
    }

}
