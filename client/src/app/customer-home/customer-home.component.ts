import { Component, OnInit } from '@angular/core';
import {Sector} from "../servers/servers.component";

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  sectorList: Sector[] = [
    {value: '0',  viewValue: 'Arquitetura', viewImage: '../../assets/imgs/default.png'},
    {value: '1',  viewValue: 'Mecânica', viewImage: '../../assets/imgs/default.png'},
    {value: '2',  viewValue: 'Eletricista', viewImage: '../../assets/imgs/default.png'},
    {value: '3',  viewValue: 'Área 3', viewImage: '../../assets/imgs/default.png'},
    {value: '4',  viewValue: 'Área 4', viewImage: '../../assets/imgs/default.png'},
    {value: '5',  viewValue: 'Área 5', viewImage: '../../assets/imgs/default.png'},
    {value: '6',  viewValue: 'Área 6', viewImage: '../../assets/imgs/default.png'},
    {value: '7',  viewValue: 'Área 7', viewImage: '../../assets/imgs/default.png'},
    {value: '8',  viewValue: 'Área 8', viewImage: '../../assets/imgs/default.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
