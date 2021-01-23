import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: '../product-maint-shared/product-maint-shared.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = "Create Product";
  product: Product = new Product();
  submitBtnTitle = "Create";
  vendors: Vendor[] = [];

  constructor(private productSvc: ProductService, 
              private vendorSvc: VendorService,
              private router: Router) {}
    
  ngOnInit(): void {
    // Drop-down for Vendors
    this.vendorSvc.getAll().subscribe(
      resp => {
        this.vendors = resp as Vendor[];
    },
    err => {
      console.log(err);
    }
    );
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
