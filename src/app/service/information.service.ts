import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Header} from '../model/header';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  getUrl:string = '/assets/data/resumeHeader.json';
  constructor(private httpClient:HttpClient) { }
  getHeaderInfo():Observable<Header>{
    return this.httpClient.get<Header>(this.getUrl);
  }
}
