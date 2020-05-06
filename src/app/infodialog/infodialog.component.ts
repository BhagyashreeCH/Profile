import { Component, Inject } from '@angular/core';
import {MatDialog,MatDialogModule , MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-infodialog',
  templateUrl: './infodialog.component.html',
  styleUrls: ['./infodialog.component.scss']
})
export class InfodialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InfodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
export interface DialogData {
  animal: string;
  name: string;
}
