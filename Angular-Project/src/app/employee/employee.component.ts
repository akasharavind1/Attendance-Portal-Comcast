import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ViewEncapsulation } from '@angular/core';

import { MbscModule } from 'ack-angular-mobiscroll';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeComponent {
 id: any;
 employee:any;
 employeeList:any;
 employee2:any;
 empId:any;
 temp:any;
 fn: any;
 successmsg:any;
  spinnerType:string;
 spinnerName:string;
  datesarr=[];
  // employeeList:any;
  constructor(private spinner: NgxSpinnerService,private mbsc: MbscModule, private form:FormBuilder,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
    this.employeeList=[];
    this.employee2=[];
    this.spinnerName="sp1";
    this.spinnerType="timer";
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 900);
  }
  
  ngOnInit(): void{
    
   this.id=  this.route.snapshot.params['id'];
   this.employeeList=[];
   this.employee2=[];
   this.getEmployeeList();
}
  postemployee = this.form.group({
    dates:[''],
  })
  daysSelected: any[] = [];
event: any;
days: any;
isSelected:any = (event: any) => {
  const date =
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2);
  return this.daysSelected.find(x => x == date) ? "selected" : null;
};

select(event: any, calendar: any) {
  const date = 
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2);
    // new Date(event.getFullYear() +
    // "-" +
    // ("00" + (event.getMonth() + 1)).slice(-2) +
    // "-" +
    // ("00" + event.getDate()).slice(-2));
  const index = this.daysSelected.findIndex(x => x == date);
  if (index < 0) this.daysSelected.push(date);
  else this.daysSelected.splice(index, 1);
 
  calendar.updateTodaysDate();
}

passTheDates(){

     this.serviceData.postDates(this.daysSelected,this.empId).subscribe((result: any)=>{
        console.log(result);
      })
    this.successmsg="Successfully Updated";
}
  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      console.log(this.employeeList);
      console.log(this.id);
    })
    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result; 
      this.fn=result.firstName; 
      // console.log(this.temp);
      this.empId=result.employeeId;
         console.log(this.empId);
         console.log(this.employee);
    }
    )
}

  getDates(){  
    this.serviceData.getDates(this.empId).subscribe((result: any)=>{
      console.log(this.empId);
      this.employee2=result; 
      console.log(this.employee2);
      // this.daysSelected=this.employee2;
      // this.daysSelected=(d: Date): boolean=> {
      //   const time=d.getTime();
      //   return !this.daysSelected.find(x=> x.getTime()==time);
      // }
    })
  }
 

  logout(){ 
    localStorage.removeItem('tokenuser');
    localStorage.removeItem('idd');
        this.router.navigate(['/']);
   };
  }
