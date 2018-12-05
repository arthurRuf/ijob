import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Mensagem} from '../services/types.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  messageList: Mensagem[] = [ ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
