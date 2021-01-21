import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full'},
  { path: 'user-list', component: UserListComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-edit/:id', component: UserEditComponent},

  { path: 'vendor-list', component: VendorListComponent},

  { path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
