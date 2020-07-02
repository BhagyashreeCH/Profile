import { TestBed } from '@angular/core/testing';

import { CustomSnackBarService } from './custom-snack-bar.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';

fdescribe('CustomSnackBarService', () => {
  let service: CustomSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      providers: [{ provide: MatSnackBar, useValue: MatSnackBarMock }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(CustomSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call openSnackBarInQueue', () => {
    const res = [
      { type: 'data', msg: 'test' },
      { type: 'data', msg: 'test' },
    ];
    const cbObj = {
      cbFun: (response) => {},
    };
    spyOn(cbObj, 'cbFun');
    service.openSnackBarInQueue('test', cbObj.cbFun, res);
    expect(cbObj.cbFun).toHaveBeenCalledWith(res);
  });

  it('should call openSnackBarInQueue with 0 call back', () => {
    const res = [];
    const cbObj = {
      cbFun: (response) => {},
    };
    spyOn(cbObj, 'cbFun');
    service.openSnackBarInQueue('test', cbObj.cbFun, res);
    expect(cbObj.cbFun).toHaveBeenCalledTimes(0);
  });
});

const MatSnackBarMock = {
  openFromComponent: () => {
    return {
      instance: {
        texttodisplay: '',
        isSuccess: '',
      },
      afterDismissed: () => of(true),
    };
  },
};
