import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
import { Forminfo } from '../forminfo';

@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.css']
})
export class FormdetailsComponent implements OnInit {
  detailsForm!: FormGroup;
  datasaved = false;
  massage!: string;

  constructor(private fb: FormBuilder, private formservice: FormserviceService) { }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.detailsForm = this.fb.group({
       Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Rooms: ['', [Validators.required]],
      Fooda: ['', [Validators.required]],
      DiveSite: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.detailsForm.value;
//console.log(userinfo);
    this.createuserAccount(userinfo);
    this.detailsForm.reset();
  }
  createuserAccount(accinfo:Forminfo) {
    this.formservice.createform(accinfo).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "Data send successfully";
       this.detailsForm.reset();
      }
    )
  }
}
