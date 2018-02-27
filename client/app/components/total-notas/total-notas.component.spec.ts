import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNotasComponent } from './total-notas.component';

describe('TotalNotasComponent', () => {
  let component: TotalNotasComponent;
  let fixture: ComponentFixture<TotalNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
