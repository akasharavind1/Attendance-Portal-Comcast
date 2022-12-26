import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    // url="http://localhost:8080/api/v1/Employee";
    employeeList:any;
  constructor(private httpClient: HttpClient){
    this.employeeList=[];
    
  }

  ngOnInit(): void{
    
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.httpClient.get("http://localhost:8080/api/v1/Employee").subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  }

 
}
