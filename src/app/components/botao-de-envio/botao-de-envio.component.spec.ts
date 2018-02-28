import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDeEnvioComponent } from './botao-de-envio.component';

describe('BotaoDeEnvioComponent', () => {
  let component: BotaoDeEnvioComponent;
  let fixture: ComponentFixture<BotaoDeEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoDeEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
