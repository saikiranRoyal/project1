import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
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
constructor(private _loginService:LoginService){}
submit(){
  console.log(this.LoginForm)
  this._loginService.login(this.LoginForm.value).subscribe(
    (data:any)=>{
      console.log(data.token)
    },
    (err:any)=>{
      alert("server error")
    }
  )
}
}
