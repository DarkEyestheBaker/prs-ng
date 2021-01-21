import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title = "Create Detail";
  user: User = null;
  userID: number = 0;

  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.userID = parms['id'];
        console.log(this.userID);
      }
    );

    // get user by ID 
    this.userSvc.getById(this.userID).subscribe(
      resp => {
        this.user = resp as User;
        console.log('User', this.user);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    //save the edit to the DB
    this.userSvc.delete(this.user.id).subscribe(
      resp => {
        this.user = resp as User;
        console.log('User deleted', this.user);

        //forward to user-list component
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
