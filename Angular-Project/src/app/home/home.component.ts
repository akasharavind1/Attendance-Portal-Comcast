import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { AdminComponent } from '../admin/admin.component';
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (private form:FormBuilder,private router:Router, private serviceData:ServicefilesService){}

    //this is formbuilder method 

    passwrong=false;
    detailswrong=false;
    validateemployee = this.form.group({
      email:['', Validators.required],
      password:['',Validators.required]

    })
    error_message="The accout exists on database";
    login(){

      if(true){
          let requestBody={
            mailId: this.validateemployee.get('email')?.value,
            password: this.validateemployee.get('password')?.value,
          }
          this.serviceData?.postLogin(requestBody).subscribe((result: any)=>{
            console.log(result);
           if(result.statusCodeValue==200 && result.body.roles=="admin" &&  result.body.message=="User retrieved successfully"){
            console.log(result);
           this.router.navigateByUrl('/admin');
          }
          else if(result.statusCodeValue==200 && result.body.roles=="user" &&  result.body.message=="User retrieved successfully"){
            console.log(result);
           this.router.navigateByUrl('/employee');
          }
          else if(result.statusCodeValue==200 && result.body=="Password Mismatch"){
           this.passwrong=true;
           this.detailswrong=false;
            }
            else if(result.statusCodeValue=404){
              this.passwrong=false;
            this.detailswrong=true;
            }
        
          })
        }
    }

  }
