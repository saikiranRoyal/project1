import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent {
   public createstudentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
    }
   )
   submit(){
    console.log(this.createstudentForm.value)
   }
}
