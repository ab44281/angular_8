import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private http: HttpClient) { }

  myMethod(){
    return console.log("Hey What's up...!!!!!");    
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getProd(){
    return this.http.get('http://localhost:8000/');
  }
}
