import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from '../app/admin/admin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {
    path:'admin', component:AdminComponent,
  },
  { 
    path:'home', component: HomeComponent
  },
  {
    path:'addemployee',component: AddemployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
