import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 
  employeeList:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient){
    this.employeeList=[];
  }

  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  }

}
