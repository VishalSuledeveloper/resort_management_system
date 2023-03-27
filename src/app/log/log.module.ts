import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
// import { FormRoutingModule } from './form-routing.module';
import {LoginComponent}from 'src/app/log/login/login.component';

import { LogRoutingModule } from './log-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogModule { }
