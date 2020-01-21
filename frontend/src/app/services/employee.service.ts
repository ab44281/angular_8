import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Employee } from '../models/employee';
import { Observable, of, throwError, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl= "http://localhost:4000/employees";
  httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor( private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl,this.httpOptions).pipe(
      tap(heroes=> console.log('fetched data')),
      catchError(this.handleError('getEmployees',[]))
    );
  }

  getEmployee(id: number): Observable<Employee> {
    // const url = `${this.baseUrl}/=${id}`;
    return this.http.get<Employee>(this.baseUrl+ '/'+ id).pipe(
      tap(_ => console.log(`fetched emp id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  } 
  
  addEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`,employee, this.httpOptions).pipe(
      tap((employee:Employee)=> console.log(`added emp w/ id=${employee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  updateEmployee(id, employee): Observable<any> {
    // const url = `${this.baseUrl}/=${id}`;
    return this.http.put(this.baseUrl+ '/'+ id, employee, this.httpOptions).pipe(
      tap(_ => console.log(`updated emp id=${id}`)),
      catchError(this.handleError<any>('updatedEmp'))
    );
  }

  deleteEmployee(id){
    // const url = `${this.baseUrl}?id=${id}`;
    return this.http.delete(this.baseUrl+ '/'+ id ,this.httpOptions).pipe(
      tap(_ => console.log(`deleted emp id=${id}`)),
      catchError(this.handleError<Employee>('deletedEmp'))
    );
  }

  /* deleteEmployee(id){
    return this.http.delete(this.baseUrl+ '/'+ id);
  } */

  private handleError<T>(operators = 'operation', result?: T){
    return (error:any): Observable<T> =>{
      // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

  



  //Old Code start
  /* public getEmployeeList(){
    return this.http.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee: Employee){
    return this.http.post<Employee>(this.baseUrl,employee);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(this.baseUrl+ "/" + id);
  }

  updateEmployee(employee:Employee){
    return this.http.put(this.baseUrl + "/" + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(this.baseUrl+ "/"+ id).pipe(
      tap(status =>console.log("status:" + status)),
      catchError(this.handleError)
      );
  }
  

  private handleError(error: any){
    console.error(error);
    return throwError(error);
  } */
}
