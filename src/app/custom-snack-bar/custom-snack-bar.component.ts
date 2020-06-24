import { Component, Inject} from '@angular/core';
import {MatSnackBarRef,MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { CustomSnackModule } from './customSnack.module';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss']
})

export class CustomSnackBarComponent {

  public texttodisplay:string;
  public isSuccess:boolean;
  constructor(
    @Inject (MAT_SNACK_BAR_DATA) public data:snackBarData,
    public readonly snackdataRef:MatSnackBarRef<CustomSnackBarComponent>
  ) { }

  public onClose(){
    this.snackdataRef.dismiss();
  }

  public static readonly msgType ='Sucess';
}
export interface snackBarData {
  msg:string;
  type?:string;
}