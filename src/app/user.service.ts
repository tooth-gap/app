import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string = "http://localhost:8080";
  public headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(public http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(
      this.url + '/user'
    );
  }

  addUser(user): Observable<any> {
    return this.http.post<any>(
      this.url + '/user',
      user, 
      { headers:this.headers }
    );
  }
  getData(id):Observable<User[]> {
    return this.http.get<User[]>(
      this.url + '/user/'+id
    );
  }
  updateUser(user: User, id: string): Observable<User> {
    return this.http.put<User>(
      this.url + '/user/' + id,
      user, 
      { headers:this.headers }
    );
  }
  deleteUser(id: string){
    return this.http.delete(this.url + '/user/' + id);
  }
}
