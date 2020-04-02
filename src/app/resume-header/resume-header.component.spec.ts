import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHeaderComponent } from './resume-header.component';

describe('ResumeHeaderComponent', () => {
  let component: ResumeHeaderComponent;
  let fixture: ComponentFixture<ResumeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
