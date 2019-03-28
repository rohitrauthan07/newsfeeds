import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fromparent: any;
  title = 'angularPractice';
  input: Observable<any>;

child2Data: Subject<any> = new Subject();


  message(event): Observable<any> {
  console.log("from parent :" + event);
  this.child2Data.next(event);
  return this.fromparent = event;
  
  
}
}


