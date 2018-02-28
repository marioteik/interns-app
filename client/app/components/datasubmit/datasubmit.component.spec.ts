import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasubmitComponent } from './datasubmit.component';

describe('DatasubmitComponent', () => {
  let component: DatasubmitComponent;
  let fixture: ComponentFixture<DatasubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
