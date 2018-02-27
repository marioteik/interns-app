import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoenviarComponent } from './botaoenviar.component';

describe('BotaoenviarComponent', () => {
  let component: BotaoenviarComponent;
  let fixture: ComponentFixture<BotaoenviarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoenviarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoenviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
