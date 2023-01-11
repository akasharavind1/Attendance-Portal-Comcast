import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor (private form:FormBuilder, private serviceData:ServicefilesService, private router: Router, private route:ActivatedRoute){
    this.employeeList=[];
  }
  employeeList:any;
editEmployee= this.form.group({
firstName:['',[Validators.required, Validators.minLength(2)]],
lastName:[''],
Email:['',[Validators.required]],
EmployeeId:['',[Validators.required]],
roles:['',[Validators.required]]
})
id:any;
employee:any;
UpdateData(){

  if(true){
      let requestBody={
        firstName: this.editEmployee.get('firstName')?.value,
        lastName: this.editEmployee.get('lastName')?.value,
        Email: this.editEmployee.get('Email')?.value,
        EmployeeId: this.editEmployee.get('EmployeeId')?.value,
        roles: this.editEmployee.get('roles')?.value,
      }
     this.serviceData.updateEmployee(this.id,requestBody).subscribe((result: any)=>{ 
      console.log(result);
      })
    }
}
ngOnInit(): void{  
   this.id=  this.route.snapshot.params['id'];
   this.getEmployee();
}
  getEmployee(){
    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result;     
    })
}
}