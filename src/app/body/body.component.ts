import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';
import { element } from '@angular/core/src/render3';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  hasData: any;
  filterData: any;
  // @Input() parentComponent: Subject<any> = new Subject;
  dataFromHeader: any;
  dataFetched: boolean;
  filterData2: Promise<boolean>;
  filternews:any;


  constructor(private containsData: ServicesService, private router: Router, private r: ActivatedRoute) { }

  ngOnInit() {
    this.r.params.subscribe(res => {
      console.log("res value",res);
      this.dataFromHeader = res.id;
    
    });
      this.filternews=this.hasData;
      console.log(this.filterData);
      
      this.afterFilter();

    

     

    // let id = this.r.snapshot.paramMap.get('id');
    // this.headerId= id;

    
    //this.parentComponent.pipe().subscribe((res)=)
   
    console.log("hi");

   

    


  }

  

  onSelect(arr) {

    this.filterData2 = this.router.navigate(['/app-secondpage', arr.id]);


    this.hasData.map(element => {
      if (element) {
        if (element.id == this.filterData2) {
          this.filterData2 = element
        }

      }
      console.log(this.filterData2);
    });
    this.dataFetched = true;
  }

  afterFilter(){
    this.filternews=[];
    this.filterData = this.containsData.getData().subscribe(data => {
      // console.log("data  ", data);

      this.hasData = data
      // console.log("from body", );
      this.filterData2 = this.hasData['News'].map((news)=>{
        // console.log("from map",news);
         if(news.catid== this.dataFromHeader){
             this.filternews.push(news)
         }
        
      })
      });}

  
}

