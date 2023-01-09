import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    // url="http://localhost:8080/api/v1/employee";
    employeeList:any;
   employees: any;

  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router){
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
logout(){
  localStorage.removeItem('tokenadmin');
  localStorage.clear();
      this.router.navigate(['/home']);
 };
}
