import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  form:FormGroup=new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')

  })

onSubmit(form:NgForm){
console.log(form)
}
}
