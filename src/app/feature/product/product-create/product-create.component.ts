import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: '../product-maint-shared/product-maint-shared.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = "Product Create";
  product: Product = new Product();
  submitBtnTitle = "Create";

  constructor(private productSvc: ProductService, private router: Router) {}
    
  ngOnInit(): void {
  }
  save() {
    //save the product to the DB
    this.productSvc.create(this.product).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product created', this.product);

        //forward to product-list component
        this.router.navigateByUrl("/product-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
