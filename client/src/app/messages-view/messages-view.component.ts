import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
