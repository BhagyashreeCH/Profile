import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodialogComponent } from './infodialog.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

fdescribe('InfodialogComponent', () => {
  let component: InfodialogComponent;
  let fixture: ComponentFixture<InfodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfodialogComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATAMock },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick', () => {
    spyOn(component.dialogRef,'close')
    component.onNoClick();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
const MatDialogRefMock = {
  open: () => {},
  close: () => {},
};
const MAT_DIALOG_DATAMock = {
  animal: '',
  name: '',
};
