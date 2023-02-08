import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MbscModule } from 'ack-angular-mobiscroll';
@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.scss']
})
export class DetailemployeeComponent {
  id: any;
  countt:any;
  employee:any;
  employee2:any;
  empId:any;
  admin:any;
  spinnerType:string;
  spinnerName:string;
  constructor(private spinner: NgxSpinnerService,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
    this.spinnerName="sp1";
    this.spinnerType="timer";
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 1250);
  
  }
  ngOnInit(): void{
    
    this.id=  this.route.snapshot.params['id'];
    this.getEmployee();
    this.admin="admin";
   
 }
 
  getEmployee(){

    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result;  
      this.empId=result.employeeId;
      this.serviceData.getDates(this.empId).subscribe((result: any)=>{
        console.log(this.empId);
        this.employee2=result;
        console.log(this.employee2)
        this.countt=result.length;
        console.log(result.length);
      })
    })
  }

 
  getDates(){  
    this.serviceData.getDates(this.empId).subscribe((result: any)=>{
      console.log(this.empId);
      this.employee2=result;
      console.log(this.countt);
  //     console.log(this.employee2)
      // this.countt=result.length;
      // console.log(result.length);

    })
  }
 
  // getDatesSelected(){  
  //   this.serviceData.getDates(this.empId).subscribe((result: any)=>{
  //     console.log(this.empId);
  //     this.employee2=result;
  //     console.log(this.employee2)
  //     this.countt=result.length;
  //     console.log(result.length);

  //   })
  // }
  // back(){
  //   if(this.admin=  this.route.snapshot.params[this.admin]){
  //     this.router.navigateByUrl('/admin');
  //   }
  //   this.router.navigateByUrl('/employee/'+this.employee.id);

  // }
}
