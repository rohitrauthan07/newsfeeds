import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {  ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logincompo',
  templateUrl: './logincompo.component.html',
  styleUrls: ['./logincompo.component.css']
})
export class LogincompoComponent implements OnInit {
  user: boolean;
  hasData: any;
  filterData: any;
  parentComponent: any;
  message: any;
  constructor(public authService: AuthService,private containsData: ServicesService,private router: Router ) { }
  sendPushNotification(){
    
    // this.containsData.sendPushMessage("Web push notification", "HI, Firebase test messsage");
  }
  ngOnInit() {const userId = '2222';
  this.containsData.requestPermission(userId);
  this.containsData.receiveMessage();
  this.message = this.containsData.currentMessage;
  this.filterData= this.containsData.getData().subscribe(data =>{
    console.log("data  ", data);
    
    this.hasData = data
    console.log(this.hasData);
  });
  console.log("hi");

}
onClick(event) {
  console.log(event);
  this.router.navigate(['/body' , event.id]);



  }

  logout(){
console.log('yes');
    this.authService.logout();
    this.router.navigate(['/Signin'] );
  }
}
