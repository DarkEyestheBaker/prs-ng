import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  title: "Request Approve";
  requests: Request = null;
  requestID: number = 0;
  submitBtnTitle = "Approve";

  constructor(private requestSrv: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  // get the id from the URL
  this.route.params.subscribe(
    parms => {
      this.requestID = parms['id'];
      console.log(this.requestID);
    }
  );
  // get request by ID
  this.requestSrv.getById(this.requestID).subscribe(
    resp => {
      this.request = resp as Request;
      console.log('Request', this.request);
    },
    err => {
      console.log(err);
    }
  );
  }
  // save to DB
  save() {
  this.requestSrv.update(this.request).subscribe(
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
}
