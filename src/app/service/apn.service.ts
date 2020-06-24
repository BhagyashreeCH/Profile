import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {CustomSnackBarService} from '../custom-snack-bar/custom-snack-bar.service';
@Injectable({
  providedIn: 'root'
})
export class ApnService {

  constructor(public snackBarService:CustomSnackBarService) { }
  delete(data){
    return of(true);
  }
  getFirstMsg(){
    this.snackBarService.opensnackBar('first Message 1', 'Sucess');
  }
  getSecondMsg(){
    this.snackBarService.opensnackBar('SEcond Message 2', 'Sucess');
  }
}
