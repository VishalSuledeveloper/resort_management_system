import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import {ContactComponent} from 'src/app/account/contact/contact.component';
// import{BrowserModule} from '@angular/platform-browser'
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
 export class AccountModule { }
