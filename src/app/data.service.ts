import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    return this.http.get(this._url);


  }
}
