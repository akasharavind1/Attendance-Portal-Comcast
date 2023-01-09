import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor (private form:FormBuilder, private service:ServicefilesService, private router: Router){}
addEmployeeForm= this.form.group({
firstName:['',[Validators.required, Validators.minLength(2)]],
lastName:[''],
employeeId:['',[Validators.required]],
})
employeeId:any;
onSubmit(employeeId: any){

  if(true){
      let requestBody={
        firstName: this.addEmployeeForm.get('firstName')?.value,
        lastName: this.addEmployeeForm.get('lastName')?.value,
        employeeId: this.addEmployeeForm.get('employeeId')?.value,
      }
     this.service.updateEmployee(employeeId, requestBody).subscribe((result: any)=>{
      console.error();  
      console.log(result);
      })
    }
}
}
