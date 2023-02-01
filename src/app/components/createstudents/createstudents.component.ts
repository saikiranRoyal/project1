import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent {
  
  public i :number= 0
  public skills:any = ['html','css','javascript','angular','typescript']
   public createstudentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      // Nested form
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(),
        }
      ),
      // creating form array
      educationArray:new FormArray([]),
       
      // dynamic array
      Sourcetype:new FormControl(),
      sourceFrom:new FormControl(),
      referralName:new FormControl(),
      

      

      company:new FormGroup(
        {
          name:new FormControl(),
          location:new FormControl(),
          package:new FormControl(),
          offerDate:new FormControl()
        }
      )

      

    }
   )

  //  declaring form array as variable
   get educationFormArray(){
      return this.createstudentForm.get('educationArray') as FormArray
   }

  
   add(){
      this.educationFormArray.push(
        new FormGroup(
          {
            qualification:new FormControl(),
            year:new FormControl(),
            percentage:new FormControl(),


          }
        )
      )
   }


   submit(){
    console.log(this.createstudentForm.value)
   }
   delete(i:number){
    this.educationFormArray.removeAt(i)
   }

}
