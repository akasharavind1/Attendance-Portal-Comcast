import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 1c00d422fccad25f924d18a392b63de1496d7858


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 
  employeeList:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router){
  this.employeeList=[];
  }

  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  }
<<<<<<< HEAD
  logout(){
    localStorage.removeItem('tokenuser');
    localStorage.clear();
        this.router.navigate(['/home']);
   };
=======
>>>>>>> 1c00d422fccad25f924d18a392b63de1496d7858

}
