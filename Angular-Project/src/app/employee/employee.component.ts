import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';


=======
import { Router } from '@angular/router';
>>>>>>> ce69a89efc74c1d44c6f01a194fc39cfa9d6778c
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
<<<<<<< HEAD
 
  employeeList:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient){
    this.employeeList=[];
  }

  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  }

=======
  constructor(private serviceData:ServicefilesService, private router: Router){
  }
  logout(){
    localStorage.removeItem('tokenuser');
    localStorage.clear();
        this.router.navigate(['/home']);
   };
>>>>>>> ce69a89efc74c1d44c6f01a194fc39cfa9d6778c
}
