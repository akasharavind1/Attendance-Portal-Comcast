import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from '../app/admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path:'admin', component:AdminComponent,
  },
  { 
    path:'home', component: HomeComponent
  },
  {
    path:'addemployee',component: AddemployeeComponent
  },
  {
    path:'employee',component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
