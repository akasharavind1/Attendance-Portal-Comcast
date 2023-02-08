import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import {MatDialog} from '@angular/material/dialog';
// import { DialogComponent } from '../dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  fromDialog!:string;
  deleteEmployee: any;
  spinnerType:string;
  spinnerName:string;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;
id: any;
  @ViewChild('dialogRef1')
  dialogRef1!: TemplateRef<any>;
   datesarr=[];
    employeeList:any;
    details:any;
  constructor(private spinner: NgxSpinnerService,public dialog: MatDialog,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router){
    this.employeeList=[];
    // this.details=[];
    this.spinnerName="sp1";
    this.spinnerType="timer";
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 1250);
  }

  ngOnInit(): void{
    this.getEmployeeList();
    // this.getEmployee();
    // this.details();
    this.fromDialog= "I am the dialog";
  }

  getEmployeeList(){
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      this.id=result.id;
      console.log(this.id);
      console.log(this.employeeList);
    })
}  
// employee: any;
// empId: any;
// countt: any;
// getEmployee(){

//   this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
//     // this.employee= result;  
//     this.empId=result.employeeId;
//     this.serviceData.getDates(this.empId).subscribe((result: any)=>{
//       console.log(this.empId);
//     //   this.employee2=result;
//       // console.log(this.employee2)
//       this.countt=result.length;
//       console.log(result.length);
//     })
//   })
// }

// getdetails(individual:any){
//   this.serviceData.getdetails(individual.id).subscribe((result: any)=>{
//     this.details= result;
// })
// }

delete(employees: any){

  console.log("delete",employees)

  this.serviceData.deleteEmployee(employees.deleteEmployee.id).subscribe((Response) => {
      console.log(Response);
      this.getEmployeeList();
    } )
    const dialogue= this.dialog.closeAll();
}
logout(){
  localStorage.removeItem('tokenadmin');
      this.router.navigate(['/']);
      
      const dialogue= this.dialog.closeAll();

 };


 cancelDialog(){
  
  const dialogue= this.dialog.closeAll();
}


 openDialog1(){

  const dialogue= this.dialog.open(this.dialogRef1);
 
    
  }



 openDialog(employee: any){
  this.deleteEmployee = employee
  console.log(this.deleteEmployee)

  const dialogue= this.dialog.open(this.dialogRef);
  
}


}
