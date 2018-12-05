import { Component, OnInit } from '@angular/core';
import {ServiceProvider} from '../servers/servers.component';
import { Router } from '@angular/router';
import { ClassificationStarsComponent } from '../classification-stars/classification-stars.component';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  provider: ServiceProvider = {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    };

  constructor() { }

  ngOnInit() {
  }

}
