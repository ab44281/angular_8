import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { map,filter} from "rxjs/operators";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  form : FormGroup;
  comment = new FormControl("",Validators.required);
  name = new FormControl("",Validators.required);
  emailId = new FormControl("",[Validators.required,Validators.pattern("[^@]*@[^@]*")]);

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "emailId": this.email
    });
    this.form.valueChanges.subscribe( data => {
      if (this.form.valid) {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        data.lastUpdateTS = new Date();
        console.log(JSON.stringify(data))
      }
    });
  }
  onSubmit(){
    console.log("Form Submitted");    
  }

  //Model Driven Forms
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  onSubmit1() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }

}
