import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/app/model/request.class';

const URL = 'http://localhost:8080/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  // service functions
  // get all requests
  getAll(): Observable<Request[]> {
    console.log("requestSvc.getAll()..." + URL);
    return this.http.get(URL + '/') as Observable<Request[]>;
  }
  //create/add vendor
  create(request: Request): Observable<Request> {
    return this.http.post(URL + '/', request) as Observable<Request>;
  }
  //get vendor by ID
  getById(id): Observable<Request> {
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }
  //update vendor
  update(request: Request): Observable<Request> {
    return this.http.put(URL + '/', request) as Observable<Request>;
  }
  //delete vendor by ID
  delete(id): Observable<Request> {
    return this.http.delete(URL + '/' + id) as Observable<Request>;
  }
}
