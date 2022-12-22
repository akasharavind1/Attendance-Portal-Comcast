import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  constructor (private form:FormBuilder){}

    addEmployeeForm= this.form.group({
      firstName:['',Validators.required, Validators.minLength(2)],
      lastName:[''],
      email:['',Validators.required],
      newPassword:['', Validators.required],
      confirmPassword:['',Validators.required]

    })

    get firstName(){
      return this.addEmployeeForm.get('firstName');
    }

    onSubmit(){

      if(this.addEmployeeForm.invalid && this.addEmployeeForm.dirty && this.addEmployeeForm.touched){
        
      }
    }

}
