import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
// import{ FromGroup,FromControl} from ''

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: any;
  inputList: any=[]
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
    })

  }

submitForm(){
  console.log(this.loginForm.value)
  if(this.loginForm.valid){
    this.inputList.push(this.loginForm.value);
    this.loginForm.reset();
  }else{
    return;
  }

}



}

