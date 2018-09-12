import { Component, OnInit } from '@angular/core';
import { Sector } from '../servers/servers.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  sectorList: Sector[] = [
    {value: null, viewValue: '-- Nenhum --'},
    {value: '0',  viewValue: 'Arquitetura'},
    {value: '1',  viewValue: 'Mecânica'},
    {value: '2',  viewValue: 'Eletricista'},
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
  }

}
