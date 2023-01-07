import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from '../app/admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ServicefilesGuard } from './servicefiles/servicefiles.guard';
import { UpdateComponent } from './update/update.component';

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
    path:'employee',component: EmployeeComponent
  },
  {
    path:'update',component: UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
