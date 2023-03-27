import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import {FormdetailsComponent}from 'src/app/form/formdetails/formdetails.component';

@NgModule({
  declarations: [FormdetailsComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class FormModule { }
