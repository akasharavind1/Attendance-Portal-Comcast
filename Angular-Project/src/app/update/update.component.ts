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
  constructor (private form:FormBuilder, private serviceData:ServicefilesService, private router: Router){
    this.employeeList=[];
  }
  employeeList:any;
addEmployeeForm= this.form.group({
firstName:['',[Validators.required, Validators.minLength(2)]],
lastName:[''],
})
onSubmit(employees: any){

  if(true){
      let requestBody={
        firstName: this.addEmployeeForm.get('firstName')?.value,
        lastName: this.addEmployeeForm.get('lastName')?.value,
      }
     this.serviceData.updateEmployee(employees.employeeId, requestBody).subscribe((result: any)=>{ 
      console.log(result);
      })
    }
}
ngOnInit(): void{  
  this.getEmployeeList()
}
getEmployeeList(){
    
  this.serviceData.getEmployeeList().subscribe((result: any)=>{
    this.employeeList= result;
    
  })
}
}
