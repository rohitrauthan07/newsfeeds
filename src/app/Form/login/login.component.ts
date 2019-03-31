import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { FormService } from '../form.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Customers = [];
  public CustomersName=[];
  LoginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  id: string;
  checkUser=false;
  message: string;
  temppassword = "";
  constructor(private formBuilder: FormBuilder,private router: Router,private _data:FormService,public authService: AuthService) { }

  ngOnInit() {
     
    if(localStorage.getItem('isLoggedIn')=="true"){
      this.router.navigate(['/Signin'] );
      console.log(localStorage.getItem('isLoggedIn'));
    }

    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
 
  
  this._data.getFormData().subscribe((res) => {
    Object.keys(res).forEach((key) => {
      this.Customers.push(res[key]);
      this.CustomersName.push(res[key].email);
    });
  });
  this.id = localStorage.getItem('token');
  

}
logout(): void {
  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['/login']);
}
get f() { return this.LoginForm.controls; }




onLogin(){

 
 console.log(this.LoginForm.get('email').value);
 console.log(this.LoginForm.get('password').value);
this.CustomersName.forEach(el => {
   if(this.LoginForm.get('email').value==el){
    this.checkUser = true;
    console.log("true");
   }
});

this.Customers.forEach(el =>{
  this.temppassword = window.atob(el.password);
  if((this.LoginForm.get('email').value == el.email) &&(this.LoginForm.get('password').value == this.temppassword)){
    
    console.log("authenticated");
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('token', this.f.email.value);
    this.router.navigate(['/Signin'] );
  }

});
}


  }



