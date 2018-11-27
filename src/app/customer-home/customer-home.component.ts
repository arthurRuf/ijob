import { Component, OnInit } from '@angular/core';
import {Sector} from "../servers/servers.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  sectorList: Sector[] = [
    {value: '0',  viewValue: 'Arquitetura', viewImage: '../../assets/icons/provider_arquiteto.png'},
    {value: '1',  viewValue: 'Contador', viewImage: '../../assets/icons/provider_contador.png'},
    {value: '2',  viewValue: 'Diarista', viewImage: '../../assets/icons/provider_diarista.png'},
    {value: '3',  viewValue: 'Eletricista', viewImage: '../../assets/icons/provider_eletricista.png'},
    {value: '4',  viewValue: 'Encanador', viewImage: '../../assets/icons/provider_encanador.png'},
    {value: '5',  viewValue: 'Engenheiro', viewImage: '../../assets/icons/provider_engenheiro.png'},
    {value: '6',  viewValue: 'Frete', viewImage: '../../assets/icons/provider_frete.png'},
    {value: '7',  viewValue: 'Jardineiro', viewImage: '../../assets/icons/provider_jardineiro.png'},
    {value: '8',  viewValue: 'Marceneiro', viewImage: '../../assets/icons/provider_marceneiro.png'},
    {value: '9',  viewValue: 'Marido Aluguel', viewImage: '../../assets/icons/provider_marido_aluguel.png'},
    {value: '10',  viewValue: 'Pedreiro', viewImage: '../../assets/icons/provider_pedreiro.png'},
    {value: '11',  viewValue: 'Pintor', viewImage: '../../assets/icons/provider_pintor.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
