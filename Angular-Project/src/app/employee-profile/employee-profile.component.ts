import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})

export class EmployeeProfileComponent {
  id:any;

  constructor( private router: Router, private route: ActivatedRoute){}
  
  

  ngOnInit(): void{
    
  }

}
