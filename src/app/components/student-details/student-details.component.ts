import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  public studentdetails:any={};
 constructor(private _service:StudentService, private _activatedrouter:ActivatedRoute){
  this._activatedrouter.params.subscribe(
    (data:any)=>{
      _service.viewstudents(data.id).subscribe(
        (data:any)=>{
          this.studentdetails=data
        },
        (err:any)=>{
          alert('server error')
        }
      )
        }
      ) 
    }
  
 }


