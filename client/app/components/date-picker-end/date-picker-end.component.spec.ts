import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerEndComponent } from './date-picker-end.component';

describe('DatePickerEndComponent', () => {
  let component: DatePickerEndComponent;
  let fixture: ComponentFixture<DatePickerEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
