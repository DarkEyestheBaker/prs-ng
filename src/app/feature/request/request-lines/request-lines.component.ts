import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Product } from 'src/app/model/product.class';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  title = "Request Lines";
  request: Request;
  requestID: number;
  lineItems: LineItem[] = [];
  submitBtnTitle = "Submit for Review";

  constructor(private requestSvc: RequestService,
    private sysSvc:SystemService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get ID from URL
    this.route.params.subscribe(
      parms => {
        this.requestID = parms['id'];
      }
    );
    //get request by ID
    this.requestSvc.getById(this.requestID).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request', this.request);
      }
    );

    //get lineItems by requestID
    this.lineItemSvc.getAllByRequestID(this.requestID).subscribe(
      resp => {
        this.lineItems = resp as LineItem[];
        if (this.lineItems.length === 0) {
        }
      }
    );
  }
  save() {
    // Set the request user to the current user
    this.request.user = this.sysSvc.loggedInUser;

    // save the request to the database
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log("Submitting for review.", this.request);

        // forward to the request list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}

