import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefilesService {
  http: any;
  getEmployeeList(){
    return this.http.get("http://localhost:8080/api/v1/login")
  }
  postEmployee(body:any){
    return this.http.post("http://localhost:8080/api/v1/login",body)
  }
}
