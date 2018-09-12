import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { ServersComponent } from './servers/servers.component';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

//Customer
import { CustomerHomeComponent } from './customer-home/customer-home.component';

//Provider
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import {CustomerSearchComponent} from "./customer-search/customer-search.component";
import {CustomerProfileComponent} from "./customer-profile/customer-profile.component";


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  //Customer
  { path: 'customer', redirectTo: '/customer/home', pathMatch: 'full'},
  { path: 'customer/home', component: CustomerHomeComponent },
  { path: 'customer/search', component: CustomerSearchComponent },
  { path: 'customer/profile', component: CustomerProfileComponent },

  //Provider
  { path: 'provider', redirectTo: '/provider/home', pathMatch: 'full'},
  { path: 'provider/home', component: ProviderHomeComponent },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
