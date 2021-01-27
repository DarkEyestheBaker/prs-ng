import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title= "Request Edit";
  request: Request = null;
  requestID: number =0;
  submitBtnTitle= "Save Changes";


  constructor(private requestSvc: RequestService, 
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
}