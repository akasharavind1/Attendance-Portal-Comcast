import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';


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
<<<<<<< HEAD
    
    login(){

      if(true){
          let requestBody={
            mailId: this.validateemployee.get('email')?.value,
            password: this.validateemployee.get('password')?.value,
          }
          console.log(requestBody);
          this.serviceData?.postLogin(requestBody).subscribe((result: any)=>{
            console.log(result);
          })
        }
    }

  }
=======

    onSubmit(){
      if(this.validateemployee.valid){
        this.router.navigate(['/', 'admin']);
        //provide the login post and get method
      } 
      else{
      alert("Provide all the details");
      }
    }


  }
>>>>>>> 191359169a6fabdbc9877376fe36e04f65557cda
