import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl= 'http://localhost:4000/employees';

  constructor( private http: HttpClient) { }

  public getEmployeeList(){
    return this.http.get<Employee[]>(this.baseUrl);
  }
  
}
