import { Component, OnInit } from '@angular/core';

export interface Sector {
  value: string;
  viewValue: string;
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
