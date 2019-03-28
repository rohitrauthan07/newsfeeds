import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() parentComponent: Subject<any> = new Subject();

  constructor() { }
data:any;
  ngOnInit() {
    this.parentComponent.pipe().subscribe((res) => {
      this.data = res;
      console.log('in second component  ', res)
    });
    
  }
 
}
