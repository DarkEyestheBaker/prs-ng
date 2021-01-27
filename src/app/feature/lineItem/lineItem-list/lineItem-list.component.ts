import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './lineItem-list.component.html',
  styleUrls: ['./lineItem-list.component.css']
})
export class LineItemListComponent implements OnInit {
  title = "LineItem List";
  lineItems: LineItem[] = [];

  constructor(private lineItemSvc: LineItemService) { }

  ngOnInit(): void {
    // get list of lineItems
    this.lineItemSvc.getAll().subscribe(
      resp => {
        this.lineItems = resp as LineItem[];
        console.log('LineItems', this.lineItems);
      },
      err => {
        console.log(err);
      }
    );
  }

}
