import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpclient:HttpClient) { }

  createstudent(data:any):Observable<any>{
    return this._httpclient.post('https://62b9299dff109cd1dc8ca34f.mockapi.io/students',data)
  }

  studenttable():Observable<any>{
    return this._httpclient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students')
  }

  getPagedStudents(page:number):Observable<any>{
    return this._httpclient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page='+page)
  }
}
