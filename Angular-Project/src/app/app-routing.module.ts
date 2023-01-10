import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from '../app/admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { ServicefilesGuard } from './servicefiles/servicefilesadmin.guard';
import { ServicefilesuserGuard } from './servicefiles/servicefilesuser.guard';
const routes: Routes = [
  {
    path:'admin', component:AdminComponent,canActivate:[ServicefilesGuard]
  },
  { 
    path:'home', component: HomeComponent
  },
  {
    path:'addemployee',component: AddemployeeComponent
  },
  {
    path:'employee/:id',component: EmployeeComponent,canActivate:[ServicefilesuserGuard]
  },
  {
    path:'update/:id',component: UpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
