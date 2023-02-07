import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
// import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  fromDialog!:string;
  deleteEmployee: any;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  @ViewChild('dialogRef1')
  dialogRef1!: TemplateRef<any>;


    // url="http://localhost:8080/api/v1/employee";
    employeeList:any;
    details:any;

  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router,public dialog: MatDialog){
    this.employeeList=[];
    // this.details=[];
  }

  ngOnInit(): void{
    this.getEmployeeList();
    // this.details();
    this.fromDialog= "Iam the dialog";
  
  }

  getEmployeeList(){
    
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      
    })
}  
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
