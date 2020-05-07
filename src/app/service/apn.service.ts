import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApnService {

  constructor() { }
  delete(data){
    return of(true);
  }
}
