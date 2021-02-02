import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title = "Review Request";
  requests: Request[] = [];
  request: Request = null;
  submitBtnTitle = "Approved";


  constructor(private requestSvc: RequestService,
    private sysSvc: SystemService,
   ) { }

  ngOnInit(): void {
   // get list of requests in review status (not reviewer's)
   this.request.getRequestByUserAndStatus(this.sysSvc.loggedInUser.id).subscribe(
     resp => {
       this.requests = resp as Request[];
     },
     err => {
       console.log(err);
     }
   )
}
}
