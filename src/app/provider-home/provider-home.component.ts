import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.scss']
})
export class ProviderHomeComponent implements OnInit {

    constructor(private router: Router) { }

  ngOnInit() {
  }

}
