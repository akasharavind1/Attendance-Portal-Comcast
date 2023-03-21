import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicefilesService {
  url="http://localhost:8080/api/v1";

  constructor(private http:HttpClient) {}
 
     IsLoggedAdmin(){
      if(localStorage.getItem("tokenadmin")=="AH2EjtcmoURSXm2RhZ8ihnJrsty"){
     return !!localStorage.getItem("tokenadmin");
    }
    return null;
  }
     IsLoggedUser(){
      if(localStorage.getItem("tokenuser")=="7Ewm3NEnJDM"){   
      return !!localStorage.getItem("tokenuser");
    }
    return null;
  }
     IsLoggedUserId()
   { 
    return !!localStorage.getItem("idd");
  }
  
    getEmployeeList(){
      return this.http.get(`${this.url}/getLogin`)
    }
    getEmployee(id: any){
      return this.http.get(`${this.url}/employeeInfo/`+id)
    }
     getDates2(empIds: number){
      return this.http.get(`${this.url}/getDatesDemo/`+empIds)
    }
    getDates(empId: number){
      return this.http.get(`${this.url}/getDates/`+empId)
    }
    getId(){
      return this.http.get(`${this.url}/getLogin`)
    }
    getdetails(id: number){
      return this.http.delete(`${this.url}/getdetails/`+id);
    }
    postEmployee(body:any){
      return this.http.post(`${this.url}/signup`,body)
    }
    postDates(body:any, id:any,){
      return this.http.post(`${this.url}/postDates/`+id,body)
    }   
    postLogin(body:any){
            return this.http.post(`${this.url}/login`,body);
          }
    updateEmployee(id: number, body:any){
            return this.http.put(`${this.url}/update/`+id,body);
          }
    postId(id:number){
            return this.http.post(`${this.url}/postId?id=`,id);
          }
    deleteEmployee(id:number){
      return this.http.delete(`${this.url}/delete?id=`+id);
    }
    // postDate(dates: any){
    //   return this.http.post("http://localhost:8080/api/v1/postDate?dates=",dates);
    // }
    matchingDates(days:any){
      return this.http.post(`${this.url}/matchDates`,days);
}
    }