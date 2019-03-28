import { Component, OnInit } from '@angular/core';
import {  ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import{Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  hasData: any;
  filterData: any;

  constructor(private containsData: ServicesService,private router:Router) { }

  ngOnInit() {
    this.filterData= this.containsData.getData().subscribe(data =>{
      debugger;
      console.log("data  ", data);
      
      this.hasData = data
      console.log(this.hasData);
    });
    console.log("hi");
    
  }
  
onSelect(arr){
  debugger;
  // this.hasData.forEach(element => {
  //   if(element.id == arr.id)
  //   {
  //     element.description;
  //   }
  // });
this.router.navigate(['/app-secondpage',arr.id]);
}
}
// // display(param){
// //   this.new data=[];
// //   this.filterData.map(ele,index) => {
// //     if(param=== ele.)
// //   }

// }
