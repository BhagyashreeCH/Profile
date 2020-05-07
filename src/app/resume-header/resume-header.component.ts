import { Component, Inject, OnInit } from '@angular/core';
import { InformationService } from '../service/information.service';
import { Header } from '../model/header';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { InfodialogComponent } from 'src/app/infodialog/infodialog.component';
import { ApnService } from '../service/apn.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss'],
})
export class ResumeHeaderComponent implements OnInit {
  constructor(
    private informationService: InformationService,
    public dialog: MatDialog,
    private apnService: ApnService
  ) {}
  public headerData: Header;
  public showLoader: boolean = true;
  animal: string = 'Lion';
  name: string = 'Bhagya';

  deleteBtnOptions: any = {};
  ngOnInit() {
    // this.showLoader=true;
    // this.informationService.getHeaderInfo().subscribe(
    //   response=> {this.headerData = response,this.showLoader=false}
    // );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(InfodialogComponent, {
      width: '250px',
      height: '300px',
      data: { name: 'BCH', animal: 'LION' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
      this.deleteBtnOptions = {
        ...this.deleteBtnOptions,
        loader: true,
        disabled: true,
      };
      this.apnService.delete(result).subscribe(()=>(this.deleteBtnOptions = {
        ...this.deleteBtnOptions,
        loader: false,
        disabled: false,
      }))
    });
  }
}
