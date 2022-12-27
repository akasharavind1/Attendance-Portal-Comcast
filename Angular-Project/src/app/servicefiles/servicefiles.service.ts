import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
export class ServicefilesService {

  constructor(private http:HttpClient) { 
    
    }

    getEmployeeList(){
      return this.http.get("http://localhost:8080/api/v1/employee")
        
    }


    postEmployee(body:any){
      return this.http.post("http://localhost:8080/api/v1/employee",body)
        
    }    
}
