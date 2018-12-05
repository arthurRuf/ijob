import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Area} from './types.service';


const API = 'http://localhost:8080/mywork/api';

@Injectable({
    providedIn: 'root'
})
export class AreaService {

    constructor(private http: HttpClient) {
    }

    getAllAreas() {
        return this.http
            .get<Area[]>(API + `/area`);
    }

    getAreaCount() {
        return this.http
            .get<Area[]>(API + `/area/count`);
    }

    getAreaRange(from: number, to: number) {
        return this.http
            .get<Area[]>(API + `/area/${from}/${to}`);
    }

    getArea(id: number) {
        return this.http
            .get<Area>(API + `/area/${id}`);
    }

    deleteArea(id: number) {
        return this.http
            .delete(API + `/area/${id}`);
    }

    postArea(id: number, area: Area) {
        return this.http
            .put(API + `/area/${id}`, area);
    }

}
