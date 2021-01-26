import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
// import { Request } from 'src/app/model.request.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {
  title = "Create Request";
  request: Request = new Request();
  submitBtnTitle = "Create";
  requests: Request[] = [];

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private router: Router) { }

  ngOnInit(): void {
    // Get Users' Requests
    this.userSvc.getAll().subscribe(
      resp => {
        this.users = resp as User[];
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save request to the DB
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request created', this.request);

        //forward to request-list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
