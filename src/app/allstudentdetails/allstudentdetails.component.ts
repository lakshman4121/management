import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-allstudentdetails',
  templateUrl: './allstudentdetails.component.html',
  styleUrls: ['./allstudentdetails.component.css']
})
export class AllstudentdetailsComponent implements OnInit {
 
  public column:string= "";
  public order:string = "";

  public students: Student[] = [];

  constructor(private _studentService:StudentService) { 
    this._studentService.getStudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal service is error')
      }
    )
  }

  ngOnInit(): void {
  }


  
}
  