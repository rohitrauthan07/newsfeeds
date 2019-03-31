import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit() {
    
  }
 
  logout(){
    this.authService.logout();
    this.router.navigate(['/login'] );
  }
}
