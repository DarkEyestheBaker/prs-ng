import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title = "Line Item Edit";
  request: Request = null;
  requestID: number = 0;
  products: Product[] = [];
  lineItem: LineItem = null;
  lineItemID: number = 0;
  submitBtnTitle = "Save Changes";

  constructor(
    private productSvc: ProductService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.lineItemID = parms['id'];
        console.log(this.lineItemID);
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
  
    // get line item by ID
    this.lineItemSvc.getById(this.lineItemID).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('LineItem', this.lineItem);
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
        this.router.navigateByUrl("/request-lines/"+ this.lineItem.request.id);
      },
      err => {
        console.log(err);
      }
    );
  }

}
