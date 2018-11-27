import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classification-starts',
  templateUrl: './classification-starts.component.html',
  styleUrls: ['./classification-starts.component.scss']
})
export class ClassificationStartsComponent implements OnInit {

    @Input('classification') classification: number;

  constructor() { }

  ngOnInit() {
  }

}
