import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Header} from '../model/header';
import { Observable } from 'rxjs';
import {Skills} from '../model/skills';
@Injectable({
  providedIn: 'root'
})
export class InformationService {
  getUserInfoUrl:string = 'https://basicinfo-518dd.firebaseio.com/user/1/-M5GOSWu8CCstu9CYy3e.json';
  // '/assets/data/resumeHeader.json';
  getSkillsInfoUrl:string ='https://basicinfo-518dd.firebaseio.com/skills/2/-M5GnY57QeE4TgpBjkDG.json';
  constructor(private httpClient:HttpClient) { }
  getHeaderInfo():Observable<Header>{
    return this.httpClient.get<Header>(this.getUserInfoUrl);
  }
  getSkillsInfo():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.getSkillsInfoUrl);
  }
}