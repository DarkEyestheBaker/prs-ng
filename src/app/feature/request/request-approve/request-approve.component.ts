import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title = "Request Approve";
  request: Request;
  requestID: number;
  lineItems: LineItem[] = [];
  lineItem: LineItem = null;
  lineItemID: number;
  submitBtnTitle = "Approved";


  constructor(private requestSvc: RequestService,
    private sysSvc: SystemService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get ID from URL
    this.route.params.subscribe(
      parms => {
        this.requestID = parms['id'];
        if (parms['id'] && parms['liid']) {
          this.lineItemID = parms['liid'];
        }
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
      }
    );
  }
  approveRequest() {
    // Set the request user to the current user
    this.request.user = this.sysSvc.loggedInUser;

    // save the request to the database
    this.requestSvc.approveRequest(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log("Request approved.", this.request);

        // forward to the request approve component
        this.router.navigateByUrl("/approve");
      },
      err => {
        console.log(err);
      }
    );
  }
}


