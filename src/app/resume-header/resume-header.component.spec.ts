import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResumeHeaderComponent } from './resume-header.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { InfodialogComponent } from '../infodialog/infodialog.component';
import { ApnService } from '../service/apn.service';

fdescribe('ResumeHeaderComponent', () => {
  let component: ResumeHeaderComponent;
  let fixture: ComponentFixture<ResumeHeaderComponent>;
  let apnService: ApnService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MatDialog, useValue: MatDialogMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHeaderComponent);
    apnService = TestBed.inject(ApnService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openDialog', () => {
    spyOn(component.dialog, 'open').and.callFake((): any => {
      return {
        afterClosed: () => {
          return of('data');
        },
      };
    });
    spyOn(apnService, 'delete').and.returnValue(of(true));
    component.openDialog();
    expect(component.dialog.open).toHaveBeenCalledWith(InfodialogComponent, {
      width: '250px',
      height: '300px',
      data: { name: 'BCH', animal: 'LION' },
    });
    expect(component.animal).toBe('data');
    expect(component.deleteBtnOptions).toEqual({
      loader: false,
      disabled: false,
    });
  });
});

const MatDialogMock = {
  open: () => {
    return {
      afterClosed: () => {
        return of(true);
      },
    };
  },
};
