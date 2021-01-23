import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "Product List";
  products: Product[] = [];

  constructor(private  productSvc: ProductService) {}

  ngOnInit(): void {
    // get list of products
    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
        console.log('Products', this.products);
      },
      err => {
        console.log(err);
      }
    );
  }
}
