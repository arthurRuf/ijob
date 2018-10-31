import { Component, OnInit } from '@angular/core';

export interface Sector {
  value: string;
  viewValue: string;
  viewImage: string;
}

export interface Field {
  value: string;
  viewValue: string;
  sector: Sector;
}

export interface ServiceProvider {
  value: number;
  viewValue: string;
  viewImage: string;
  sector: Sector;
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


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  serverId: number = 10;
  serverStatus: String = 'offline';
  serverName: String = 'Development Server';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit() {

  }

}
