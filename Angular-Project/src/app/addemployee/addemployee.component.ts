import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      confirmPassword:['',[Validators.required]]

    })


    onSubmit(){

      if(this.addEmployeeForm.invalid){


          let requestBody={
            firstName: this.addEmployeeForm.get('firstName')?.value,
            lastName: this.addEmployeeForm.get('lastName')?.value,
            mailID: this.addEmployeeForm.get('mailID')?.value,
            employeeId: this.addEmployeeForm.get('employeeId')?.value,
            newPassword: this.addEmployeeForm.get('newPassword')?.value,
            confirmPassword: this.addEmployeeForm.get('confirmPassword')?.value,
          }

          this.service.postEmployee(requestBody).subscribe((result: any)=>{
            console.log(result);
          })

          
  
      }
    }

}
