import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSnackMessagesComponent } from './show-snack-messages.component';

describe('ShowSnackMessagesComponent', () => {
  let component: ShowSnackMessagesComponent;
  let fixture: ComponentFixture<ShowSnackMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSnackMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSnackMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
