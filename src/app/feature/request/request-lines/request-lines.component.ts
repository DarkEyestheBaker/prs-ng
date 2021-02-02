import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

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
}

