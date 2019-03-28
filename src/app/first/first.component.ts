import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: any = " ";
  @Output() public childData: EventEmitter<any> = new EventEmitter();
  containsData: any;


  constructor(private _getdata: DataService) { }

  ngOnInit() {
    this._getdata.getEmployees().subscribe(data => this.containsData = data);

  }

  childclick(event) {

    console.log(this.name);
    this.childData.next(event);
  }


}
