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
