import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

    constructor(private router: Router) { }

  ngOnInit() {
  }

  loginClick() {
    alert('Loging in...');
    //OR
    this.router.navigate(['/', 'customer', 'home']);

    //OR
    this.router.navigate(['/', 'provider', 'home']);
  }


}
