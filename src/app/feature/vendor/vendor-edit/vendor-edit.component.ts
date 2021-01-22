import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: '../vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title = "Vendor Edit";
  vendor: Vendor = null;
  vendorID: number = 0;
  submitBtnTitle = "Save";

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // get the id from the URL
    this.route.params.subscribe(
      parms => {
        this.vendorID = parms['id'];
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
    // save to DB
    save() {
    this.vendorSvc.update(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor updated.', this.vendor);

        // forward to vendor-list component
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
