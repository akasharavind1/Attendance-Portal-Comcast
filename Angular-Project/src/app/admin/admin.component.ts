import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    // url="http://localhost:8080/api/v1/Employee";
    employeeList:any;
  constructor(private httpClient: HttpClient){
    this.employeeList=[];
  }

  ngOnInit(): void{
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.httpClient.get("http://localhost:8080/api/v1/getLogin").subscribe((result: any)=>{

      this.employeeList= result;
      if(result.roles=='admin')
      {}

    })
  }
  
 
}
