import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Header} from '../model/header';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  getUrl:string = '/assets/data/resumeHeader.json';
  getUrl1:string ='https://api.github.com/users?since=135';
  constructor(private httpClient:HttpClient) { }
  getHeaderInfo():Observable<any>{
    return this.httpClient.get<Header>(this.getUrl);
  }
  getHeaderInfo1():Observable<any[]>{
    
    return this.httpClient.get<any[]>(this.getUrl1);
  }
  
}