import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hasData: any;
  filterData: any;
  parentComponent: any;
  message: any;

  constructor(private containsData: ServicesService, private router: Router) { }

  sendPushNotification() {

    // this.containsData.sendPushMessage("Web push notification", "HI, Firebase test messsage");
  }
  ngOnInit() {
    const userId = '2222';
    this.containsData.requestPermission(userId);
    this.containsData.receiveMessage();
    this.message = this.containsData.currentMessage;
    this.filterData = this.containsData.getData().subscribe(data => {
      console.log("data  ", data);

      this.hasData = data
      console.log(this.hasData);
    });
    console.log("hi");

  }
  onClick(event) {
    console.log(event);
    this.router.navigate(['home/' + event.id]);

  }

}
