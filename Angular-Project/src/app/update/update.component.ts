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
addEmployeeForm= this.form.group({
firstName:['',[Validators.required, Validators.minLength(2)]],
lastName:[''],
})
id:any;
employee:any;
onSubmit(){

  if(true){
      let requestBody={
        firstName: this.addEmployeeForm.get('firstName')?.value,
        lastName: this.addEmployeeForm.get('lastName')?.value,
      }
     this.serviceData.updateEmployee(requestBody).subscribe((result: any)=>{ 
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