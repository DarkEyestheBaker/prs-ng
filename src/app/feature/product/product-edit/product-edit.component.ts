import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-maint-shared/product-maint-shared.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = "Product Edit";
  product: Product = null;
  productID: number = 0;
  submitBtnTitle = "Save";

  constructor(private productSrv: ProductService, 
              private router: Router, 
              private route: ActivatedRoute) {
                
              }

  ngOnInit(): void {
    
  // get the id from the URL
  this.route.params.subscribe(
    parms => {
      this.productID = parms['id'];
      console.log(this.productID);
    }
  );
  // get product by ID
  this.productSrv.getById(this.productID).subscribe(
    resp => {
      this.product = resp as Product;
      console.log('Product', this.product);
    },
    err => {
      console.log(err);
    }
  );
  }
  // save to DB
  save() {
  this.productSrv.update(this.product).subscribe(
    resp => {
      this.product = resp as Product;
      console.log('Product updated.', this.product);

      // forward to vendor-list component
      this.router.navigateByUrl("/product-list");
    },
    err => {
      console.log(err);
    }
  );
}
}