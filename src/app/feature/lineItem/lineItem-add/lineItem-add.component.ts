import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/lineItem.class';
import { LineItemService } from 'src/app/service/lineItem.service';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-lineItem-add',
  templateUrl: './lineItem-add.component.html',
  styleUrls: ['./lineItem-add.component.css']
})
export class LineItemAddComponent implements OnInit {
  title = "LineItem List";
  lineItems: LineItem[] = [];

  constructor(private lineItemSvc: LineItemService, 
              private requestSvc: RequestService,
              private routerSvc: Router,
              private route: ActivatedRoute,
              private userSvc: UserService) { }

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

save() {
  // save to lineItem to request DB
  this.requestSvc.update(this.request).subscribe(
    resp => {
      this.request = resp as Request;
      console.log('LineItem added.', this.request);

      // forward to request-list component
      this.router.navigateByUrl("/request-list");
    },
    err => {
      console.log(err);
    }
  );
}
}
