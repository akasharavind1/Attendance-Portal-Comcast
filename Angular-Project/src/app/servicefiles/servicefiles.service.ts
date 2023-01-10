import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefilesService {
  constructor(private http:HttpClient) {
    }
   
    IsLoggedAdmin(){
     return !!localStorage.getItem("tokenadmin");
    }
    IsLoggedUser(){
      return !!localStorage.getItem("tokenuser");
    }
    getEmployeeList(){
      return this.http.get("http://localhost:8080/api/v1/getLogin")
    }
    getEmployee(id: number){
      return this.http.get("http://localhost:8080/api/v1/employeeInfo/"+id)
    }
    getId(){
      return this.http.get("http://localhost:8080/api/v1/getLogin")
    }
    postEmployee(body:any){
      return this.http.post("http://localhost:8080/api/v1/signup",body)
    }
    postLogin(body:any){
            return this.http.post("http://localhost:8080/api/v1/login",body)
          }
    updateEmployee(empId: string, body:any){
            return this.http.post("http://localhost:8080/api/v1/update?empID="+empId,body)
          }
    postId(id:number){
            return this.http.post("http://localhost:8080/api/v1/postId?id=",id);
          }
    deleteEmployee(id:number){
      return this.http.delete("http://localhost:8080/api/v1/delete?id="+id);
    }
    }