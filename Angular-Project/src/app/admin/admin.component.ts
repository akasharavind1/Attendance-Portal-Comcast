import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    // url="http://localhost:8080/api/v1/employee";
    employeeList:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient){
    this.employeeList=[];
  }

  ngOnInit(): void{
    this.getEmployeeList()
  }

  getEmployeeList(){

    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
  


}}
