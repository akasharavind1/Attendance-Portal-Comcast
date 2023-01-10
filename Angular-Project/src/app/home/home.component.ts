import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { AdminComponent } from '../admin/admin.component';
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
click: any;
  classList: any;

  constructor (private form:FormBuilder,private router:Router, private serviceData:ServicefilesService){
    this.employeeList=[];
  }
  ngOnInit(): void{
    this.getEmployeeList()
  
  }
  employeeList:any;
    //this is formbuilder method 
      passwrong=false;
    detailswrong=false;
  
    validateemployee = this.form.group({
<<<<<<< HEAD
      mailId:['', Validators.required],
=======
      mailID:['', Validators.required],
>>>>>>> 9c9d65e1fa14b60ae89f18840d402d1d15bc8884
      password:['',Validators.required]

    })
    
    login(employee:any): void{

      if(true){
          let requestBody={
<<<<<<< HEAD
            mailId: this.validateemployee.get('mailId')?.value,
=======
            mailID: this.validateemployee.get('mailID')?.value,
>>>>>>> 9c9d65e1fa14b60ae89f18840d402d1d15bc8884
            password: this.validateemployee.get('password')?.value,
          }
          this.serviceData?.postLogin(requestBody).subscribe((result: any)=>{
            console.log(result);
           if(result.statusCodeValue==200 && result.body.roles=="admin" &&  result.body.message=="User retrieved successfully"){
            console.log(result);
            localStorage.setItem('tokenadmin',"AH2EjtcmoURSXm2RhZ8ihnJrsty-7Ewm3NEnJDM-Atw9ewbIPvuarglows0vtaCV33b4z3PpM5RsMklbpe0aNPK5_BanGxmp_JSsOEtZYuf4m3cHTtKnxpQeonN07XDK-DUPKAaRwLfY")
           localStorage.setItem('ROLE','ADMIN')
            this.router.navigateByUrl('/admin');
          }
          else if(result.statusCodeValue==200 && result.body.roles=="user" &&  result.body.message=="User retrieved successfully"){
            console.log(result);
            localStorage.setItem('tokenuser',"7Ewm3NEnJDM")
           localStorage.setItem('ROLE','USER')
           this.router.navigateByUrl('/employee/'+result.body.id);
          }
          else if(result.statusCodeValue==200 && result.body=="Password Mismatch"){
            this.passwrong=true;
            }
            else if(result.statusCodeValue==404){
            this.detailswrong=true;
            }
        
          })
        }
    }
    getEmployeeList(){
    
      this.serviceData.getEmployeeList().subscribe((result: any)=>{
        this.employeeList= result;
        
      })
  }  
  //   show = false;
  //   password() {
  //     this.show = !this.show;
  // }
  }
