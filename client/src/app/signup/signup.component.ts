import { Component, OnInit } from '@angular/core';
import { Sector } from '../servers/servers.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

  fieldsList: string[] = [
    'Elétrica',
    'Especialidade 1',
    'Especialidade 2',
    'Especialidade 3',
    'Especialidade 4',
    'Especialidade 5'
  ];

  constructor() { }

  ngOnInit() {
    this.sectorList.unshift(
      {value: null, viewValue: '-- Nenhum --', viewImage: '../../assets/imgs/default.png'}
    );
  }

}
