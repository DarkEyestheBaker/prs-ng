import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: MenuItem[]=[
      new MenuItem("User", "/user-list", "User List"), 
      new MenuItem("Vendor", "/vendor-list", "Vendor List"),
      new MenuItem("Product", "/product-list", "Product List"),
      new MenuItem("Request", "/request-list", "Request List"),
      new MenuItem("Review", "/request-review", "Request Review"),
      //new MenuItem("Logout", "/user-login", "Login")
      //new MenuItem("About" "/resume", "About")
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
