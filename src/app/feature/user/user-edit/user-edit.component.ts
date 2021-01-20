import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title = "User Edit";
  user: User = null;
  userID: number = 0;
  submitBtnTitle = "Save";

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute() {
                
              }

  ngOnInit(): void {

    // get the ID from the DB
    this.route.params.subscribe(
      parms => {
        this.userID = parms['id'];
        console.log(this.userID);
      }
    );
    // get actor by ID 
    this.userSvc.getById(this.userID).subscribe(
      resp => {
        this.user = resp as User;
        console.log('Actor', this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save the edit to the DB
    this.userSvc.update(this.user).subscribe(
      resp => {
        this.user = resp as User;
        console.log('User updated', this.user);
        //forward to movie list component
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
