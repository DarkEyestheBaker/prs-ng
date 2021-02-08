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
    return this.http.get(URL + '/') as Observable<Request[]>;
  }
  //create/add request
  create(request: Request): Observable<Request> {
    return this.http.post(URL + '/', request) as Observable<Request>;
  }
  //get request by ID
  getById(id): Observable<Request> {
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }
  //update request
  update(request: Request): Observable<Request> {
    return this.http.put(URL + '/', request) as Observable<Request>;
  }
  //delete request by ID
  delete(id): Observable<Request> {
    return this.http.delete(URL + '/' + id) as Observable<Request>;
  }
  getRequestByUserAndStatus(id): Observable<Request[]> {
    return this.http.get(URL + '/list-review/' + id) as Observable<Request[]>;
  }
  submitForReview(request: Request): Observable<Request> {
    return this.http.put(URL + '/submit-review', request) as Observable<Request>;
  }
  approveRequest(request: Request): Observable<Request> {
    return this.http.put(URL + '/approve', request) as Observable<Request>;
  }
  rejectRequest(request: Request): Observable<Request> {
    return this.http.put(URL + '/reject', request) as Observable<Request>;
  }
}
