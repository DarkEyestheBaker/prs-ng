import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './core/menu/menu.component';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';


import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';

import { ProductListComponent } from './feature/Product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';

import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';

import { LineItemEditComponent } from './feature/lineItem/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './feature/lineItem/line-item-create/line-item-create.component';

@NgModule({
  declarations: [
    AppComponent,

    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,

    MenuComponent,
    NoComponentDefinedComponent,

    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,

    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,

    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestLinesComponent,
    RequestReviewComponent,
    RequestApproveComponent,
    
    LineItemEditComponent,
    LineItemCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
