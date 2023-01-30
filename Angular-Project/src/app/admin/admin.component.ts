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
    details:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router){
    this.employeeList=[];
    // this.details=[];
  }

  ngOnInit(): void{
    this.getEmployeeList();
    // this.details();
  
  }

  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
}  
// getdetails(individual:any){
//   this.serviceData.getdetails(individual.id).subscribe((result: any)=>{
//     this.details= result;
// })
// }

delete(employees: any){
  this.serviceData.deleteEmployee(employees.id).subscribe((Response) => {
      console.log(Response);
      this.getEmployeeList();
    } )
}
logout(){
  localStorage.removeItem('tokenadmin');
      this.router.navigate(['/']);
 };
}
