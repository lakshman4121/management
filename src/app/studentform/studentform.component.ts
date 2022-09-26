import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  public studentform:FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address:new FormGroup(
    {
      city:new FormControl(),
      mandalam:new FormControl(),
      district:new FormControl(),
      state:new FormControl(),
      pin:new FormControl()
      
    }
    ),
    educations:new FormArray([]),
  }
  )
  get studentFormArray(){
    return this.studentform.get('educations') as FormArray;
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    
    console.log(this.studentform.value);
  }
  add(){
    return this.studentFormArray.push({
      qulifications:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl()
    })
  }


}
