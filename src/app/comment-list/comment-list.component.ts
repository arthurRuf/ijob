import {Component, OnInit} from '@angular/core';
import {Comment} from '../services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[] = [];

  constructor() {
  }

  ngOnInit() {
      //TODO Get Comments from Server
  }

}
