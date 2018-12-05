import { Injectable } from '@angular/core';


export interface Area {
    value: string;
    viewValue: string;
    viewImage: string;
}

export interface Field {
    value: string;
    viewValue: string;
    sector: Area;
}

export interface ServiceProvider {
    value: number;
    viewValue: string;
    viewImage: string;
    sector: Area;
    fields: Field[];
    classification: number;
}

export interface User {
    value: number;
    viewValue: string;
    viewImage: string;
}


export interface Comment {
    value: number;
    text: string;
    user: User;
}

export interface Message {
    value: number;
    text: string;
    user: User;
}

export interface Servico {
    value: number;
    text: string;
    user: User;
}


@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor() { }
}
