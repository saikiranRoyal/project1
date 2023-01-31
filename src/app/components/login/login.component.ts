import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public LoginForm:FormGroup=new FormGroup(
  {
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.minLength(5)]),
  }
)
constructor(private _loginService:LoginService, private _router:Router){}
submit(){
  console.log(this.LoginForm)
  this._loginService.login(this.LoginForm.value).subscribe(
    (data:any)=>{
      sessionStorage.setItem('token', data.token)
      this._router.navigateByUrl("/dashboard")
    },
    (err:any)=>{
      alert("server error")
    }
  )
}
}
