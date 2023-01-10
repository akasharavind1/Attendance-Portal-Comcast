import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { ActivatedRoute, Router,  } from '@angular/router';
>>>>>>> 9c9d65e1fa14b60ae89f18840d402d1d15bc8884


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 id: any;
 employee=[];
  employeeList:any;
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(): void{
this.route.queryParams.subscribe((params)=> {
   this.id=params['id'];
   this.getEmployee()
})
  }

  getEmployee(){

    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result;     
    })
  }
  logout(){
    localStorage.removeItem('tokenuser');
    localStorage.clear();
        this.router.navigate(['/home']);
   };

  }
