import {Component, OnInit} from '@angular/core';
import {Comment} from "../servers/servers.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[] = [
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
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
