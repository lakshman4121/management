import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

     
  

  constructor(private _httpClient:HttpClient) { }
  getStudents():Observable<StudentService[]>{
    return this._httpClient.get<StudentService[]>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students');
  }
  
  getSortStudents(column:string,order:string):Observable<StudentService[]>{
    return this._httpClient.get<StudentService[]>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy='+column+'&order='+order);
  }
  deleteStudents(id:string){
    return this._httpClient.delete<StudentService[]>('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'/'+id);
  }

}
