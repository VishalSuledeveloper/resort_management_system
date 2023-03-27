import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Forminfo} from './forminfo';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  createform(forinfo:Forminfo):Observable<Forminfo>{
 
  return this.http.post<Forminfo>(this.url+'form/forms',forinfo)
  }
} 