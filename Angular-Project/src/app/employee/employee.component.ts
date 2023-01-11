import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 id: any;
 employee:any;
  // employeeList:any;
<<<<<<< HEAD

  today = new Date();
  
  constructor(private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
=======
  constructor(private form:FormBuilder,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
>>>>>>> a46df84 (date(post))
  }
  ngOnInit(): void{
   this.id=  this.route.snapshot.params['id'];
   this.getEmployee();
  
}

  //just for checking purpose
  postemployee = this.form.group({
    dates:[''],
  
  })


  addDate(){

    if(true){
        let requestBody=this.postemployee.get('dates')?.value;
          
          this.serviceData?.postDate(requestBody).subscribe((result: any)=>{
          console.log(result);
        
        
        })
       
        
      }
  }
 
  getEmployee(){

    this.serviceData.getEmployee(this.id).subscribe((result: any)=>{
      this.employee= result;     
    })
  }
  logout(){
    localStorage.removeItem('tokenuser');
    localStorage.clear();
        this.router.navigate(['/home']);
   };
  }
