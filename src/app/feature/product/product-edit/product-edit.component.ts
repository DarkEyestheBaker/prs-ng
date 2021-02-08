import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Vendor } from 'src/app/model/vendor.class'
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = "Product Edit";
  product: Product = null;
  productID: number = 0;
  vendors: Vendor [] = [];
  vendor: Vendor = null;
  vendorID: number = 0;
  submitBtnTitle = "Save";

  constructor(private productSrv: ProductService, 
    private vendorSvc: VendorService,
              private router: Router, 
              private route: ActivatedRoute) {
              }

  ngOnInit(): void {
   // Drop-down for Vendors
   this.vendorSvc.getAll().subscribe(
    resp => {
      this.vendors = resp as Vendor[];
  },
   );
   // get the vendor id 
   this.vendorSvc.getById(this.vendorID).subscribe(
    resp => {
      this.vendor = resp as Vendor;
      console.log('Vendor', this.vendor);
     }
   );
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