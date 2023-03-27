import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  datasaved = false;
  massage!: string;

  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.contactForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Subject: ['', [Validators.required]],
      Message: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.contactForm.value;
//console.log(userinfo);
    this.createuserAccount(userinfo);
    this.contactForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "Data Send";
       this.contactForm.reset();
      }
    )
  }
}