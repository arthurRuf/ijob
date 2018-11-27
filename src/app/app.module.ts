import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Material and Flex-Layout
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageTalkViewComponent } from './message-talk-view/message-talk-view.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { ClassificationStartsComponent } from './classification-starts/classification-starts.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Flex Module
    FlexLayoutModule,

    //Material
    CdkTableModule, CdkTreeModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,


  ],
  declarations: [
    AppComponent,
    ServersComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ProviderHomeComponent,
    CustomerHomeComponent,
    PageNotFoundComponent,
    CustomerSearchComponent,
    CustomerProfileComponent,
    CommentListComponent,
    MessagesListComponent,
    MessageTalkViewComponent,
    MessagesPageComponent,
    ClassificationStartsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
