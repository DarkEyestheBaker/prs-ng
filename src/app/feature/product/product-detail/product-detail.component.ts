import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = "Product Details";
  product: Product = null;
  productID: number = 0;
  vendors: Vendor[] = [];
  vendor: Vendor = null;
  vendorID: number = 0;

  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.productID = parms['id'];
        console.log(this.productID);
      }
    );
    // get product by ID
    this.productSvc.getById(this.productID).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product', this.product);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    // delete product 
    this.productSvc.delete(this.product.id).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product deleted', this.product);

        // forward to product-list component
        this.router.navigateByUrl("/product-list")
      },
      err => {
        console.log(err);
      }

    );
  }
}
