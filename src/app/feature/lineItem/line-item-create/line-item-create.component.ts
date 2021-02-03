
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
// import { UserService } from 'src/app/service/user.service';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title = "LineItem Create";
  request: Request;
  requestID: number;
  products: Product[] = [];
  lineItem: LineItem = new LineItem;
  quantity: number;
  submitBtnTitle = "Add Item";

  constructor(private lineItemSvc: LineItemService,
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private productSvc: ProductService) { }

  ngOnInit(): void {
    // get request for ID
    this.route.params.subscribe(
      parms => {
        this.requestID = parms['id'];
        console.log("Line-item-create, request ID =", this.requestID);
        this.requestSvc.getById(this.requestID).subscribe(
          resp => {
            this.request = resp as Request;
            this.lineItem.request = this.request;
            console.log('Request', this.request);
          },
          err => {
            console.log(err);
          }
        );
      }
    );
    //get list of Products for drop-down
    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
        console.log('Products', this.products);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save lineItem to DB
              // console.log("Line-item-create:", this.lineItem);
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
              // console.log('Line item created.', this.lineItem);

        // forward to request-lines component
        this.router.navigateByUrl("/request-lines/"+ this.requestID);
      },
      err => {
        console.log(err);
      }
    );
  }
}
