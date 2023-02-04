import { Component } from '@angular/core';
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
  
  constructor(private _service:StudentService){
    this._service.studenttable().subscribe(
      (data:any)=>{
        this.studentdata=data;
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
}
