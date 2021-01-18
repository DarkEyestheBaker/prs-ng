import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

const URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  //service functions
    //get all users
    getAll(): Observable<User[]> {
      console.log("userSvc.getAll()..." + URL);
      return this.http.get(URL + '/') as Observable<User[]>;
    }
}
