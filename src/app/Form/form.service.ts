import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  constructor(private http: HttpClient) { }
  getFormData(): Observable<any> {

    return this.http.get("https://angularfinal-21.firebaseio.com/login.json");
  }
  setFormData(empdata: any): Observable<any> {
    console.log(empdata);
    return this.http.post<any>("https://angularfinal-21.firebaseio.com/login.json", empdata);
  }

}
