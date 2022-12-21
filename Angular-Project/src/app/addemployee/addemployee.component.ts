import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
      email:[''],
      newPassword:[''],
      confirmPassword:['']

    })

    get firstName(){
      return this.addEmployeeForm.get('firstName');
    }

    onSubmit(){

      if(this.addEmployeeForm.invalid){

      }
      else{
        

      }
    }

}
