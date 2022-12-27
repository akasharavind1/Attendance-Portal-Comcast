import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
>>>>>>> 86dad8dc83f5cd4c3d426edd180695db770e6fd1

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    // url="http://localhost:8080/api/v1/employee";
    employeeList:any;
  constructor(private serviceData:ServicefilesService){
    this.employeeList=[];
  }

  ngOnInit(): void{
    this.getEmployeeList()
  }

  getEmployeeList(){
<<<<<<< HEAD
    this.httpClient.get("http://localhost:8080/api/v1/getLogin").subscribe((result: any)=>{

      this.employeeList= result;
      if(result.roles=='admin')
      {}

=======
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
>>>>>>> 86dad8dc83f5cd4c3d426edd180695db770e6fd1
    })
  }
  
 
}
