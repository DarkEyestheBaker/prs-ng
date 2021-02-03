import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title = "Request";
  request: Request = null;
  requestID: number = 0;
  submitBtnTitle = "Delete Request";



  constructor(private requestSvc: RequestService,
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
    // save edit to DB
    this.requestSvc.delete(this.request.id).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request deleted', this.request);

        // forward to request-list component
        this.router.navigateByUrl("/request-list")
      },
      err => {
        console.log(err);
      }

    );
  }
}
