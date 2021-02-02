import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';


@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title = "Line Item Edit";
  request: Request = null;
  requestID: number = 0;
  lineItem: LineItem = null;
  submitBtnTitle = "Save Changes";

  constructor(private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.requestID = parms['id'];
        console.log(this.requestID);
      }
    );
    // get request by ID
    this.requestSvc.getById(this.requestID).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request', this.request);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {

    // delete line item
    this.lineItemSvc.delete(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('Line item deleted.', this.request);

        // forward to request-list component
        this.router.navigateByUrl("/request-list")
      },
      err => {
        console.log(err);
      }

    );
  }
  save() {
    this.lineItemSvc.update(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('Line item updated.', this.lineItem);

        // forward to request-list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
