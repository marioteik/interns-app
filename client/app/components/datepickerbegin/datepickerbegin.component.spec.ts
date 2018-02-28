import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerbeginComponent } from './datepickerbegin.component';

describe('DatepickerbeginComponent', () => {
  let component: DatepickerbeginComponent;
  let fixture: ComponentFixture<DatepickerbeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerbeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerbeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
