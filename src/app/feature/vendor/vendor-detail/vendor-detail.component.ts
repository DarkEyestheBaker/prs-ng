import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title = "Vendor";
  vendor: Vendor = null;
  vendorID: number = 0;

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {this.vendorID = parms['id'];
    console.log(this.vendorID);
  }
    );

    // get vendor by ID
    this.vendorSvc.getById(this.vendorID).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor', this.vendor);
      },
      err => {
        console.log(err);
      }
    );
  }
    delete() {
      
      // save edit to DB
      this.vendorSvc.delete(this.vendor.id).subscribe(
        resp => {
          this.vendor = resp as Vendor;
          console.log('Vendor deleted', this.vendor);

        // forward to vendor-list component
        this.router.navigateByUrl("/vendor-list")
        },
        err => {
          console.log(err);
        }

      );
    }
  }
