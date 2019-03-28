import { Component, OnInit } from '@angular/core';
import {  ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  hasData: any;
  filterData: any;
  public cardId
  constructor(private containsData: ServicesService,private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('description'));
let result=null;
    this.cardId=id;
    console.log(this.cardId + "id");

    console.log(result);
    
    this.filterData= this.containsData.getData().subscribe(data =>{

      
      this.hasData = data.News;
      console.log(this.hasData);
      // this.hasData.forEach(element => {
      //   if(element.id==this.cardId){
      //     result=element.description;
      //   }
      // });
      for(let i=1; i<data.News.length;i++)
      {
        if(data.News[i].id==id)
        {
          result = data.News[i].description;
          console.log(result+"result");
        }
      }
    });
    console.log("hi");
    
    
  }

}