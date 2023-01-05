import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { AdminComponent } from '../admin/admin.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (private form:FormBuilder,private router:Router, private serviceData:ServicefilesService){}

    //this is formbuilder method 
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
           if(result.statusCodeValue==200 && result.body.message=="User retrieved successfully"){
           this.router.navigateByUrl('/admin');
          }
          else if(result.statusCodeValue==200 && result.body=="Password Mismatch"){
            alert('Password mismatch');
            }
            else if(result.statusCodeValue==404){
             alert('Wrong details');
            }
        
          })
        }
    }

  }
