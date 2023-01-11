import { Component } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeComponent {
 id: any;
 employee:any;
  // employeeList:any;
  constructor(private form:FormBuilder,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(): void{
   this.id=  this.route.snapshot.params['id'];
   this.getEmployee();
  
}

  //just for checking purpose
  postemployee = this.form.group({
    dates:[''],
  
  })

  daysSelected: any[] = [];
event: any;

isSelected:any = (event: any) => {
  const date =
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2);
  return this.daysSelected.find(x => x == date) ? "selected" : null;
};

select(event: any, calendar: any) {
  const date =
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2);
  const index = this.daysSelected.findIndex(x => x == date);
  if (index < 0) this.daysSelected.push(date);
  else this.daysSelected.splice(index, 1);

  calendar.updateTodaysDate();
}


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
