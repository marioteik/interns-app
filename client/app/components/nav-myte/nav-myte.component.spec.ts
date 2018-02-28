import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMyteComponent } from './nav-myte.component';

describe('NavMyteComponent', () => {
  let component: NavMyteComponent;
  let fixture: ComponentFixture<NavMyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
