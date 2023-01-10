import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router,  } from '@angular/router';


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
    if(this.currentMonth<10){
      this.FinalMonth="0"+this.currentMonth;
    }else{
      this.FinalMonth=this.currentMonth;
    }
    if(this.currentDate<10){
      this.FinalDate="0"+this.currentDate;
    }else{
      this.FinalDate=this.currentDate;
    }
    this.TodayDate=this.currentYear+"-"+this.currentMonth+"-"+this.currentDate;
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
   Date1= new Date();
   currentYear=this.Date1.getUTCFullYear();
   currentMonth=this.Date1.getUTCMonth()+1;
   currentDate=this.Date1.getUTCDate();
   TodayDate="20-10-2022";
   FinalMonth:any;
   FinalDate:any;
  }
