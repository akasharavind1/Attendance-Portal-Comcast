import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
mailID:['',[Validators.required]],
employeeId:['',[Validators.required]],
roles:['',[Validators.required]]
})
id:any;
employee:any;
UpdateData(){

  if(true){
      let requestBody={
        firstName: this.editEmployee.get('firstName')?.value,
        lastName: this.editEmployee.get('lastName')?.value,
        mailID: this.editEmployee.get('mailID')?.value,
        employeeId: this.editEmployee.get('employeeId')?.value,
        roles: this.editEmployee.get('roles')?.value,
      }
     this.serviceData.updateEmployee(this.id,requestBody).subscribe((result: any)=>{ 
      console.log(result);
      this.router.navigate(['/admin']);
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
      console.log(result); 
      // this.editEmployee.get('firstName').setValue(result.firstName);
      this.editEmployee.patchValue({
        firstName: result.firstName,
        lastName: result.lastName,
        employeeId: result.employeeId,
        mailID: result.mailID,
        roles: result.roles,       
      })
      
})
}}