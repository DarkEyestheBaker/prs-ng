import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

const URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  //service functions
  //get all users
  getAll(): Observable<User[]> {
    console.log("userSvc.getAll()..." + URL);
    return this.http.get(URL + '/') as Observable<User[]>;
  }
  //create/add an user
  create(user: User): Observable<User> {
    return this.http.post(URL + '/', user) as Observable<User>;
  }
  //get user by ID
  getById(id): Observable<User> {
    return this.http.get(URL + '/' + id) as Observable<User>;
  }
  //Update user
  update(user: User): Observable<User> {
    return this.http.put(URL + '/', user) as Observable<User>;
  }
  //delete user by ID
  delete(id): Observable<User> {
    return this.http.delete(URL + '/' + id) as Observable<User>;
  }
  // login
  login(user: User): Observable<User> {
    return this.http.post(URL + '/login', user) as Observable<User>;
  }
}
