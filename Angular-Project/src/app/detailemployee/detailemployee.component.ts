import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute, defaultUrlMatcher} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ViewEncapsulation } from '@angular/core';
import { MbscModule } from 'ack-angular-mobiscroll';
@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.scss']
})
export class DetailemployeeComponent {
  id: any;
  countt:number=0;
  employee:any;
  employee2:any;
  empId:any;
  admin:any;
  flag:any;
  nos:any;
  
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(): void{
    this.id=  this.route.snapshot.params['id'];
    this.getEmployee();
    this.admin="admin";
    // this.nos=this.countt;
 }
  getEmployee(){
    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result;
      this.empId=result.employeeId;
      this.serviceData.getDates(this.empId).subscribe((resp: any)=>{
        this.employee2=resp;
        this.countt=resp.length;
        this.flagCreator();
      })
    })
  }
  flagCreator(){
    console.log("hello funct");
    console.log("count is:"+this.countt);
    this.nos=this.countt
    console.log(this.nos);
    switch(true){
    case this.countt>=18 :
        this.flag=0; //green flag
        console.log("Green flag")
        break;
    case this.countt>=16:
        this.flag=1;  //yellow flag
        console.log("yellow flag")
        break;
    case this.countt<12:
        this.flag=2;   //red flag
        console.log("red flag")
        break;
    }
}
  // getDates(){
  //   this.serviceData.getDates(this.empId).subscribe((result: any)=>{
  //     console.log(this.empId);
  //     this.employee2=result;
  //     console.log(this.employee2)
  //     // this.countt=result.length;
  //     // console.log(result.length);
  //   })
  // }
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