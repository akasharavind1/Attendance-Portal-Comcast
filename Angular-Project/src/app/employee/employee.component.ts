import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 id: any;
 employee:any;
  // employeeList:any;

  today = new Date();
  
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(): void{
   this.id=  this.route.snapshot.params['id'];
   this.getEmployee();

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
