import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  errormsgpass=false;
  constructor (private form:FormBuilder, 
               private service:ServicefilesService, private router: Router){}
    addEmployeeForm= this.form.group({
      firstName:['',[Validators.required]],
      lastName:[''],
      mailID:['',[Validators.required,Validators.email]],
      employeeId:['',[Validators.required]],
      password:['', [Validators.required,Validators.minLength(3)]],
      confirmPassword:['',[Validators.required]],
      roles: ['user']
    })
    ngOnInit(): void{
       this.addEmployeeForm.statusChanges.subscribe(data=>{
        console.log(data);
       })
      // this.details();
    
    }
  

    validatePassword(){
      // console.log(this.addEmployeeForm.get('password')?.value)
      // console.log(this.addEmployeeForm.get('confirmPassword')?.value)
      if(this.addEmployeeForm.get('password')?.value == this.addEmployeeForm.get('confirmPassword')?.value){
        this.addEmployeeForm.get('confirmPassword')?.setValidators([Validators.requiredTrue])
      }
    }


    onSubmit(){
<<<<<<< HEAD
      this.addEmployeeForm.markAllAsTouched();
      console.log(this.addEmployeeForm)
      if(true){
          let requestBody={
=======

      if(this.addEmployeeForm.invalid, this.addEmployeeForm.touched, this.addEmployeeForm.dirty){  
        let requestBody={
>>>>>>> 6686bbc2fd16bbc6caf5f78bba207a166666ca82
            firstName: this.addEmployeeForm.get('firstName')?.value,
            lastName: this.addEmployeeForm.get('lastName')?.value,
            mailID: this.addEmployeeForm.get('mailID')?.value,
            employeeId: this.addEmployeeForm.get('employeeId')?.value,
            password: this.addEmployeeForm.get('password')?.value,
<<<<<<< HEAD
            confirmpassword: this.addEmployeeForm.get('confirmpassword')?.value,
            roles:this.addEmployeeForm.get('roles')?.value
         
          }
            // if(requestBody.password===requestBody.confirmpassword){
              this.errormsgpass=true;
              console.log("valid")
              this.service.postEmployee(requestBody).subscribe((result: any)=>{
                console.log(result);
                this.router.navigate(['/']);
              
              })
            // }
=======
            roles:this.addEmployeeForm.get('roles')?.value,
            confirmPassword:this.addEmployeeForm.get('confirmPassword')?.value
          }
          if(requestBody.password == requestBody.confirmPassword){
          this.service.postEmployee(requestBody).subscribe((result: any)=>{
            console.log(result);
            this.router.navigate(['/']);
           
          })
>>>>>>> 6686bbc2fd16bbc6caf5f78bba207a166666ca82
        }
        console.log("Provide valid Informtions");
        }
    }
   resetform(formvalue: any){
formvalue.reset();
   } 



}
