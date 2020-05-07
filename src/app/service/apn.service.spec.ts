import { TestBed } from '@angular/core/testing';

import { ApnService } from './apn.service';

describe('ApnService', () => {
  let service: ApnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
