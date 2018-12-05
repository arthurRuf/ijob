import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classification-stars',
  templateUrl: './classification-stars.component.html',
  styleUrls: ['./classification-stars.component.scss']
})
export class ClassificationStarsComponent implements OnInit {

    @Input('classification') classification: number;

  constructor() { }

  ngOnInit() {
  }

}