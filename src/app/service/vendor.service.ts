import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.class'; 

const URL = 'http://localhost:8080/vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  //service functions

  //get All Vendors
  getAll(): Observable<Vendor[]> {
    console.log("vendorSvc.getAll()..." + URL);
    return this.http.get(URL + '/') as Observable<Vendor[]>;
  }
  //create/add vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(URL + '/', vendor) as Observable<Vendor>;
  }
  //get vendor by ID
  getById(id): Observable<Vendor> {
    return this.http.get(URL + '/' + id) as Observable<Vendor>;
  }
  //update vendor
  update(vendor: Vendor): Observable<Vendor> {
    return this.http.put(URL + '/', vendor) as Observable<Vendor>;
  }
  //delete vendor by ID
  delete(id): Observable<Vendor> {
    return this.http.delete(URL + '/' + id) as Observable<Vendor>;
  }
}
