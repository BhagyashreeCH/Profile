import { Injectable } from '@angular/core';
import { map, concat, catchError } from 'rxjs/operators';
import { of, throwError, merge, zip, Subject } from 'rxjs';
import { CustomSnackBarService } from '../custom-snack-bar/custom-snack-bar.service';
@Injectable({
  providedIn: 'root',
})
export class ApnService {
  constructor(public snackBarService: CustomSnackBarService) {}
  delete(data) {
    return of(true);
  }
  sub = new Subject();

  onSave() {
    const configArr = [];
    configArr.push(this.getFirstMsg());
    configArr.push(this.getSecondMsg());
    this.saveAllConfiguration(configArr);
  }
  saveAllConfiguration(arr) {
    zip(...arr)
      .pipe(
        map((res) => {
          this.responseHandler(res);
          return res;
        })
      )
      .subscribe((data) => {
        console.log('data' + data);
      });
  }
  getFirstMsg() {
    return throwError({ data: 'first Message 1', type: 'Sucess' }).pipe(
      catchError((e) => {
        return of({ error: e });
      })
    );
  }
  getSecondMsg() {
    return of({ data: 'second Message 1', type: 'Sucess' });
  }

  responseHandler(res) {
    const dataObj = res.splice(0, 1);
    const snackData = dataObj[0].error ?  dataObj[0].error :  dataObj[0];
    this.snackBarService.openSnackBarInQueue(
      snackData.data,
      () => {
        this.responseHandler(res);
      },
      res,
      snackData.type
    );
  }
}
