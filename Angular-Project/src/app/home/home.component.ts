import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor (private form:FormBuilder,private router:Router){}



    //this is formbuilder method 
    validateemployee = this.form.group({
      email:['', Validators.required],
      password:['',Validators.required]

    })

<<<<<<< HEAD
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
            alert('password mismatch');
            }
            else if(result.statusCodeValue=404){
             alert('wrong details');
            }
        
          })
        }
=======
    onSubmit(){
      if(this.validateemployee.valid){
        this.router.navigate(['/', 'admin']);
        //write the login post and get method
      } 
      else{
      alert("Provide all the details");
      }
>>>>>>> 13c093640bbcb7856e092c48f2bf15b8f1b6809e
    }


  }