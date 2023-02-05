import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public studentdata:any={};
  public keys : any = '';

  public page1 : any = '';
  public j:number[]=[];
  
  constructor(private _service:StudentService, private _router:Router){
    this._service.studenttable().subscribe(
      (data:any)=>{
        // putting slice to data as data.slice(1,10) to display 10 rows at startload of page
        this.studentdata=data.slice(0,10);
        //for automatic pagination
        this.keys = Object.keys(data)
        // console.log(this.keys.length)
         this.page1 = Math.floor(this.keys.length / 10)
        //  console.log(this.page1)
        //  for pagiation automatic for loop writing

        var number :number = this.page1
        for (let i=0; i<number +1;i++)
        this.j.push(i);
      
      },
      (err:any)=>{
        alert("get methos not working")
      }
    )
  }


  // pagination
  page(pageNo:number){
    this._service.getPagedStudents(pageNo).subscribe(
      (data:any)=>{
        this.studentdata=data;
      },
      (err:any)=>{
        alert('pagination failed')
      }
    )
  }

  // sorting

  public column:any="";
  public order:any="";
  sortstudents(){
   this._service.getSortedStudents(this.column,this.order).subscribe(
     (data:any)=>{
       this.studentdata=data;
     },
     (err:any)=>{
      alert("sorting error")
     }
   )
  }

  // filter students
  public term:string="";
  filter(){
    this._service.getfilterstudents(this.term).subscribe(
      (data:any)=>{
        this.studentdata=data;
      },
      (err:any)=>{
        alert("filtering failed")
      }
    )
  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/studentdetails/"+id)
  }

  // edit 

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-student/"+id)
  }
   
  delete(id:string){
    this._service.delete(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload();
      },
      (err:any)=>{
        alert('server error')
      }
    )
  }
}
