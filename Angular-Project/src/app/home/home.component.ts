import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor (private form:FormBuilder,
    private httpClient: HttpClient,private router:Router){}

    //this is formbuilder method 
    validateemployee = this.form.group({
      email:['', Validators.required],
      password:['',Validators.required]

    })

    getEmployeeList(){
      this.httpClient.get("http://localhost:8080/api/v1/Employee").subscribe((result: any)=>{
  
        if(result.roles=='admin')
        {
          this.router.navigateByUrl('/admin')
        }
  
      })
    }
  }

  // this is form group method
  // addEmployeeForm = new FormGroup({
  //   email: new FormControl('vicky'),
  //   password: new FormControl('')

  // });
  


