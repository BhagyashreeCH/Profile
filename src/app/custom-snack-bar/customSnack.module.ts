import {CustomSnackBarComponent} from './custom-snack-bar.component';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {NgModule} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';

@NgModule({
  exports:[MatSnackBarModule, CustomSnackBarComponent],
  declarations: [CustomSnackBarComponent],
  imports: [MatSnackBarModule, CommonModule,ClipboardModule],
  providers: [
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration:5000,
        varticalPosition:'bottom',
        horizontalPosition: 'center'
      }
    }
  ],
  entryComponents: [CustomSnackBarComponent]
})
export class CustomSnackModule { }
