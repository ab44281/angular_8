import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl= 'http://localhost:4000/employees';

  constructor( private http: HttpClient) { }

  getEmployeeList(){
    return this.http.get(this.baseUrl);
  }
  
}
