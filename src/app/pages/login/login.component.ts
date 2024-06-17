import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform: FormGroup = new FormGroup ({
    userName: new FormControl(""),
    password: new FormControl(""), 
  });

  router = inject(Router);
  
  onLogin() {
    debugger; //ver para que es debugger
    const loginObj = this.loginform.value;
    if(loginObj.userName == "Admin" && loginObj.password == "112233"){
      this.router.navigateByUrl("/dashboard")
    } else {
      alert("Invalid Credentials")
    }
  }
}

export class LoginUser{

  userName: string;
  password: string;

  constructor () {

    this.userName = '';
    this.password = '';
  }
}
