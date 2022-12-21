import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor (private form:FormBuilder){}

    //this is formbuilder method 
    validateemployee = this.form.group({
      email:[''],
      password:['']

    })


  }

  // this is form group method
  // addEmployeeForm = new FormGroup({
  //   email: new FormControl('vicky'),
  //   password: new FormControl('')

  // });
  


