import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondbody',
  templateUrl: './secondbody.component.html',
  styleUrls: ['./secondbody.component.css']
})
export class SecondbodyComponent implements OnInit {
  hasData: any;
  filterData: any;
  public cardId;
  newData: Array<object>;
  empty: Array<object> = [];
  cardObject: any;
  dataFetched: Boolean = false;

  constructor(private containsData: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('description'));
    let result = null;
    this.cardId = id;

    console.log(this.cardId + "id");

    // console.log(result);

    this.filterData = this.containsData.getData().subscribe(data => {


      this.hasData = data.News;
      console.log(this.hasData);
      this.hasData.map(element => {
        if (element) {
          if (element.id == this.cardId) {
            this.cardObject = element
          }

        }
        console.log(this.cardObject)
      });
      this.dataFetched = true;

      // for(let i=1; i<data.News.length;i++)
      // {
      //   if(data.News[i].id==id)
      //   {
      //     return result = data.News[i].description;
      //     //  result+"result"
      //   }
      // }
    });


  }

  // display(param)

  // {
  //   console.log('hello from display')
  //   console.log(param);
  //   // this.newData=[];
  //     // this.hasData.map(element => {
  //     //   if(element.id==this.cardId){
  //     //     this.cardObject = element
  //     //   }
  //     //   console.log(this.cardObject)
  //     //   // console.log(this.newData);
  //     // });
  //     
  // }

}