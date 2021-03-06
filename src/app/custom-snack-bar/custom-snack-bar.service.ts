import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
@Injectable({
  providedIn: 'root',
})
export class CustomSnackBarService {
  constructor(private readonly matSnackBar: MatSnackBar) {}
  public opensnackBar(msg: string, type?: string): void {
    const ref: MatSnackBarRef<CustomSnackBarComponent> = this.matSnackBar.openFromComponent(
      CustomSnackBarComponent,
      { duration: type ? 5000 : 10000 }
    );
    ref.instance.texttodisplay = msg;
    ref.instance.isSuccess = type === CustomSnackBarComponent.msgType;
  }

  public openSnackBarInQueue(
    msg: string,
    cb: any,
    res: Array<any>,
    type?: string
  ): void {
    const ref: MatSnackBarRef<CustomSnackBarComponent> = this.matSnackBar.openFromComponent(
      CustomSnackBarComponent,
      { duration: type ? 5000 : 10000 }
    );
    ref.instance.texttodisplay = msg;
    ref.instance.isSuccess = type === CustomSnackBarComponent.msgType;
    ref.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
      if (res.length > 0) {
        cb(res);
      }
    });
  }
}
