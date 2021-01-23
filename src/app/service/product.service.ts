import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.class';


const URL = 'http://localhost:8080/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    //service functions

  //get All Vendors
  getAll(): Observable<Product[]> {
    console.log("productSvc.getAll()..." + URL);
    return this.http.get(URL + '/') as Observable<Product[]>;
  }
  //create/add vendor
  create(product: Product): Observable<Product> {
    return this.http.post(URL + '/', product) as Observable<Product>;
  }
  //get vendor by ID
  getById(id): Observable<Product> {
    return this.http.get(URL + '/' + id) as Observable<Product>;
  }
  //update vendor
  update(vendor: Product): Observable<Product> {
    return this.http.put(URL + '/', product) as Observable<Product>;
  }
  //delete vendor by ID
  delete(id): Observable<Product> {
    return this.http.delete(URL + '/' + id) as Observable<Product>;
  }
}

