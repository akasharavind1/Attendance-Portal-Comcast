import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor (private form:FormBuilder, private service:ServicefilesService){}
addEmployeeForm= this.form.group({
firstName:['',[Validators.required, Validators.minLength(2)]],
lastName:[''],
employeeId:['',[Validators.required]],
})
onSubmit(){

  if(this.addEmployeeForm.invalid, this.addEmployeeForm.touched, this.addEmployeeForm.dirty){
      let requestBody={
        firstName: this.addEmployeeForm.get('firstName')?.value,
        lastName: this.addEmployeeForm.get('lastName')?.value,
        employeeId: this.addEmployeeForm.get('employeeId')?.value,
      }
      this.service.postEmployee(requestBody).subscribe((result: any)=>{
        console.log(result);
      })
    }
}
}
