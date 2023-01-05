import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicefilesService } from '../servicefiles/servicefiles.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  constructor (private form:FormBuilder, 
               private service:ServicefilesService){}
    addEmployeeForm= this.form.group({
      firstName:['',[Validators.required, Validators.minLength(2)]],
      lastName:[''],
      mailID:['',[Validators.required]],
      employeeId:['',[Validators.required]],
      newPassword:['', [Validators.required]],
      confirmPassword:['',[Validators.required]],

    })


    onSubmit(){

      if(this.addEmployeeForm.invalid, this.addEmployeeForm.touched, this.addEmployeeForm.dirty){
          let requestBody={
            firstName: this.addEmployeeForm.get('firstName')?.value,
            lastName: this.addEmployeeForm.get('lastName')?.value,
            mailID: this.addEmployeeForm.get('mailID')?.value,
            employeeId: this.addEmployeeForm.get('employeeId')?.value,
<<<<<<< HEAD
            newPassword: this.addEmployeeForm.get('newPassword')?.value,
            roles:this.addEmployeeForm.get("roles")?.value,
=======
            password: this.addEmployeeForm.get('newPassword')?.value,
>>>>>>> c88583577e02a8045305f892e4a5b96d274b1a83
          }
          this.service.postEmployee(requestBody).subscribe((result: any)=>{
            console.log(result);
          })
        }
    }

}
