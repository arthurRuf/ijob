import { Component, OnInit } from '@angular/core';
import { Message } from "../servers/servers.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  messageList: Message[] = [
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
    {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at beatae consequatur cupiditate exercitationem, mollitia placeat. Assumenda at cupiditate dignissimos doloremque ducimus, eaque ex, fuga magni quaerat quidem unde veniam!',
      user: {
        value: 0,
        viewValue: 'Mariana da Silva',
        viewImage: '../../assets/imgs/default.png',
      }
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
