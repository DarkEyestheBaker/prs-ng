import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title = "Review Request";
  requests: Request[] = [];
  request: Request = null;
  lineitems: LineItem[] = [];
  lineitem = null;
  submitBtnTitle = "Edit/Delete";


  constructor(private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private route: ActivatedRoute,
    private router: Router,
    private sysSvc: SystemService,
  ) { }

  ngOnInit(): void {
    // get list of requests in review status (not reviewer's)
    this.requestSvc.getRequestByUserAndStatus(this.sysSvc.loggedInUser.id).subscribe(
      resp => {
        this.requests = resp as Request[];
        this.lineItemSvc.getAll(this.sysSvc.loggedInUser.id).subscribe(
          resp => {
            this.lineitems = resp as LineItem[];
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
  // save to DB
  save() {
    this.requestSvc.update(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request updated.', this.request);

        // forward to request-list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    // save edit to DB
    this.lineItemSvc.delete(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('Line item deleted', this.request);

        // forward to request-list component
        this.router.navigateByUrl("/request-list")
      },
      err => {
        console.log(err);
      }

    );
  }
}
