import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    // url="http://localhost:8080/api/v1/employee";
    employeeList:any;
  constructor(private serviceData:ServicefilesService){
    this.employeeList=[];
    
  }

  ngOnInit(): void{
    
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  }

 
}
