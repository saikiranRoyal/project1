import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent {
  
  public i :number= 0
  public skills:any = ['html','css','javascript','angular','typescript']
  public isedit:boolean=false;
  public id:string="";
  constructor(private _service:StudentService, private _activatedRouter:ActivatedRoute){
    _activatedRouter.params.subscribe(
    (data:any)=>{
      // if condition for edit and path params
      if(data.id){
        this.isedit=true;
        this.id=data.id;
      }
       
      this._service.viewstudents(data.id).subscribe(
        (data2:any)=>{
          // to attach the data to create student form we use patchyValue
          this.createstudentForm.patchValue(data2);
        }
      )

    }
    )
  }
   public createstudentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null, [Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required, Validators.minLength(10)]),
      email:new FormControl(null,[Validators.required]),
      batch:new FormControl(null,[Validators.required]),
      // Nested form
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(null, [Validators.required]),
          state:new FormControl(),
          pincode:new FormControl(null, [Validators.required, Validators.minLength(6)]),
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
            percentage:new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),


          }
        )
      )
   }


   submit(){
    console.log(this.createstudentForm.value)
    
    if(this.isedit){
      this._service.updatevehicle(this.createstudentForm.value, this.id).subscribe(
        (data:any)=>{
          alert("updated successfully")
        },
        (err:any)=>{
          alert("server error update failed")
        }
      )
    }
    this._service.createstudent(this.createstudentForm.value).subscribe(
      (data:any) => {
        alert('student details updated')
      },
      (err:any)=>{
        alert('not created')
      }
    )

   }
   delete(i:number){
    this.educationFormArray.removeAt(i)
   }
   
   
}
