import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Loginfo } from './loginfo';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {
  url='http://localhost:3000?'
  constructor(private http:HttpClient) { }
  Logaccount(accinfo:Loginfo):Observable<Loginfo>{
   
    return this.http.post<Loginfo>(this.url+'/register',accinfo)
  }
}
