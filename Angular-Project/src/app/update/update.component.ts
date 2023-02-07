import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  spinnerType:string;
  spinnerName:string;

  fromDialog!:string;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  constructor (private spinner: NgxSpinnerService,private form:FormBuilder, private serviceData:ServicefilesService, private router: Router, private route:ActivatedRoute, public dialog: MatDialog){
    this.employeeList=[];
    this.spinnerName="sp1";
    this.spinnerType="timer";
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 900);
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
      const dialogue= this.dialog.closeAll();
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
}

openDialog(){

const dialogue= this.dialog.open(this.dialogRef);
  
}
cancelDialog(){
  
  const dialogue= this.dialog.closeAll();
}


}