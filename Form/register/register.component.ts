import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  checkUser=false;
 public CustomersName = [];
 enc="";
 dec="";
  containsData: any;

  constructor(private formBuilder: FormBuilder, private _data:FormService,private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem('isLoggedIn')=="true"){
      this.router.navigate(['/Signin'] );
      console.log(localStorage.getItem('isLoggedIn'));
    }
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

  
    this._data.getFormData().subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.CustomersName.push(res[key].email);
      });
    });
}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    this.CustomersName.forEach(el => {
      if(this.registerForm.get('email').value==el){
       this.checkUser = true;
       console.log("true");
      }
   });
    if (this.registerForm.invalid) {
        return;
    }
    if(!this.checkUser){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      this.enc = window.btoa(this.registerForm.get('password').value);
        
      this.registerForm.value.password = this.enc;
      this._data.setFormData(this.registerForm.value).subscribe((res) => {
        console.log(res);
      })
      localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('token', this.f.email.value);
    this.router.navigate(['/Signin'] );
    }
    else{
      alert('email already exist');
    }
   
  this.checkUser =false;
}



}
