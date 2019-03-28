import { Component, OnInit } from '@angular/core';
import {  ServicesService } from '../services.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  hasData: any;

  constructor(private containsData: ServicesService) { }

  ngOnInit() {
    this.containsData.getData().subscribe(data =>{
      console.log("data  ", data);
      
      this.hasData = data
      console.log(this.hasData);
    });
    console.log("hi");
    
  }

}
