import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  constructor (private form:FormBuilder){}

    //this is formbuilder method 
    addEmployeeForm = this.form.group({
      FirstName:[''],
      LastName:[''],
      Email:[''],
      NewPassword:[''],
      ConfirmPassword:['']

    })

}
