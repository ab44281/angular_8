import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


const httpOptions = {
  header : new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }


  deleteUser(id){
    return this.http.delete(this.userUrl+ '/'+ id);
  }
}
