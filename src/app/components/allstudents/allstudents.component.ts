import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public studentdata:any={};
  
  constructor(private _service:StudentService){
    this._service.studenttable().subscribe(
      (data:any)=>{
        this.studentdata=data;
      
      },
      (err:any)=>{
        alert("get methos not working")
      }
    )
  }
}
