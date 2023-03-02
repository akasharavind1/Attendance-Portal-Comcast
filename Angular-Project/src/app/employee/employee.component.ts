import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ServicefilesService } from '../servicefiles/servicefiles.service';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ViewEncapsulation } from '@angular/core';
// import { MatDatepicker } from '@angular/material/datepicker';
import { MbscModule } from 'ack-angular-mobiscroll';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeComponent {
[x: string]: any;
 id: any;
 employee:any;
 employeeList:any;
 employeedates:any;
 empId:any;
 temp:any;
 fn: any;
 successmsg:any;
  spinnerType:string;
 spinnerName:string;
  datesarr=[];
  flag:any;
  nos:any;
  countt: any;
  fromDialog!:string;
  selectedDates:any;
  ifValid =false;

  monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  d = new Date();
  monthName = this.monthNames[this.d.getMonth()];

  firstDate: any;
  lastDate: any;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  
  @Input()
  date:Date = new Date();
  monthDates = 0
  startingIndex = 0;
  startingValue=1;
  data :{[id:number]:any}={};
  Object=Object;
 
 @ViewChild('dialogRef1')
  dialogRef1!: TemplateRef<any>;


  // employeeList:any;
  constructor(private matSnackBar: MatSnackBar,private spinner: NgxSpinnerService,private mbsc: MbscModule, private form:FormBuilder,private serviceData:ServicefilesService, private httpClient:HttpClient, private router: Router, private route: ActivatedRoute, public dialog: MatDialog){
    this.employeeList=[];
    this.employeedates=[];
    this.spinnerName="sp1";
    this.spinnerType="timer";
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 1250);
  }
  
  ngOnInit(): void{
    
   this.id=  this.route.snapshot.params['id'];
   this.employeeList=[];
   this.employeedates=[];
   this.getEmployeeList();
   this.getEmployee();
   this.setMonthDates();
   this.sendDates();
  //  this.getDaysInMonth(this.month, this.year);
   this.demo2();
  }


  postemployee = this.form.group({
    dates:[''],
  })
  daysSelected: any[] = [];
event: any;
days: any;
isSelected:any = (event: any) => {
  const date =
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2)+this.employeedates;
  return this.daysSelected.find(x => x == date) ? "selected" : null;
};

select(event: any, calendar: any) {
  const date = 
    event.getFullYear() +
    "-" +
    ("00" + (event.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + event.getDate()).slice(-2);
    // new Date(event.getFullYear() +
    // "-" +
    // ("00" + (event.getMonth() + 1)).slice(-2) +
    // "-" +
    // ("00" + event.getDate()).slice(-2));
  const index = this.daysSelected.findIndex(x => x == date);
  if (index < 0) this.daysSelected.push(date);
  else this.daysSelected.splice(index, 1);
 
  calendar.updateTodaysDate();
  console.log(this.daysSelected)
}

passTheDates(){

  // requestBody:{
  //   daysSelected: this.daysSelected,

  // }

     this.serviceData.postDates(this.daysSelected,this.empId).subscribe((result: any)=>{
        console.log(result);
        console.log(this.fn);
      
      
      })
      this.matSnackBar.open("DATES ADDED SUCCESSFULLY ...!✔👍", "Okay!", {
        duration: 2500,
        horizontalPosition: "center",
        verticalPosition: "top",
        // direction: "rtl"
      })

      const dialogue= this.dialog.closeAll();

      
}
  getEmployeeList(){
    // this.serviceData.getEmployeeList().subscribe((result: any)=>{
    //   this.employeeList= result;
    //   console.log(this.employeeList);
    //   console.log(this.id);
    // })
    this.employeeList=this.route.snapshot.data['data'];
    this.serviceData.getEmployeeList().subscribe((result: any)=>{
      this.employeeList= result;
      console.log(this.employeeList);
      console.log(this.id);
    })}

  getEmployee(){
    this.serviceData.getEmployee(this.id).subscribe((resp: any)=>{
      this.employee= resp; 
      this.fn=resp.firstName; 
      // console.log(this.temp);
      this.empId=resp.employeeId;
         console.log(this.empId);
         console.log(this.employee);

         this.serviceData.getDates(this.empId).subscribe((resp: any)=>{
          this.countt=resp.length;
          // this.flagCreator();
        })
      }
    )}



  getDates(){  
    this.serviceData.getDates(this.empId).subscribe((result: any)=>{
      console.log(this.empId);
      this.employeedates=result; 
      console.log(this.employeedates);

      this.selectedDates = result.map((element: any)=>{
        return  new Date(element.date);
      })
      // this.selectedDates=this.result.date;
      // console.log(this.selectedDates);
      // this.matSnackBar.open("RETRIEVED SUCCESSFULLY ...!✔👍", "Okay!", {
      //   duration: 3500,
      //   horizontalPosition: "center",
      //   verticalPosition: "top",
      //   // direction: "rtl"
        
      // })
      console.log(this.selectedDates)
      
      // console.log(this.dateref)
      
     
      // this.daysSelected=this.employee2;
      // this.daysSelected=(d: Date): boolean=> {
      //   const time=d.getTime();
      //   return !this.daysSelected.find(x=> x.getTime()==time);
      // }
    })
  }

  flag1(){
    this.ifValid = true;
  }

//   flagCreator(){
//     console.log("hello funct");
//     console.log("count is:"+this.countt);
//     this.nos=this.countt
//     console.log(this.nos);

//     switch(true){

//     case this.countt>=18 :
//         this.flag=0; //green flag
//         console.log("Green flag")
//         break;
//     case this.countt>=16:
//         this.flag=1;  //yellow flag
//         console.log("yellow flag")
//         break;
//     case this.countt<12:
//         this.flag=2;   //red flag
//         console.log("red flag")
//         break;
//     }
// }

 

  logout(){ 
    localStorage.removeItem('tokenuser');
    localStorage.removeItem('idd');
        this.router.navigate(['/']);
        this.matSnackBar.open("LOGGED OUT SUCCESSFULLY ...!✔👍", "Okay!", {
          duration: 2500,
          horizontalPosition: "center",
          verticalPosition: "top",
          // direction: "rtl"
        })
        const dialogue= this.dialog.closeAll();
   };

   openDialog1(){

  const dialogue= this.dialog.open(this.dialogRef1);
 
    
  }
  cancelDialog(){
  
    const dialogue= this.dialog.closeAll();
  }

  // iterateDatesOutOf(){

  //   let res = this.employeedates.map((element: any)=>{
  //     return new Date(element.date);
  //   })
  //   console.log(res)

  // }
  setMonthDates(){
    this.startingValue=1;
    this.monthDates =  new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate()
    // this.date.setDate(1)
    this.startingIndex =  new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay();
    console.log(this.startingIndex);
    
    this.data={}
    for(let i =0;i<35;i++){
      if(i<this.startingIndex || this.startingValue>this.monthDates){
        this.data[i] = null
      }else{
        this.data[i]={
          date:this.startingValue,
     
        }
        this.startingValue++;
      }
    }
    console.log(this.data);
    
  }
  bruh:any;

 
  
   openDialog2(){
  
    const dialogue= this.dialog.open(this.dialogRef);
   
      
    }

  sendDates(){


this.firstDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
this.lastDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);


//     for(let i=this.firstDate;i> this.monthDates;i++){

//       var dates= this.id;

//     }
this.bruh= [this.firstDate];

}

month: number = new Date().getMonth();

year : number = new Date().getFullYear();

matchedDates: any;
democount:any;
demo:any=["2023-02-15"]
employeeCount: any;
employeeName: any;

demo2(){
this.serviceData.matchDates(this.demo).subscribe((result: any)=>{
  this.employeeName = result.map((element: any)=>{
    return element.employeeName;})


      this.employeeCount = result.map((element: any)=>{
        return element.employeeCount;
      })})
      console.log( this.employeeCount )}
      
getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  console.log("The dates of current month are:" +days);

  this.serviceData.matchDates(this.days).subscribe((result: any)=>{

    this.matchedDates = result;
    console.log("Heyyyyy"+ this.matchedDates)
    
    
  // // this.employeeName =result.map((element: any)=>{
  // //   return element.firstName;
  // // })
  // this.matchedDates = result;
  // // this.employeeList=result.count;
  // console.log( this.matchedDates);
   
}
  )
}}

