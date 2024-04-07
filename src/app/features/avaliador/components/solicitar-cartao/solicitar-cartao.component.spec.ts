import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaCartaoComponent } from './solicitar-cartao.component';

describe('SolicitaCartaoComponent', () => {
  let component: SolicitaCartaoComponent;
  let fixture: ComponentFixture<SolicitaCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitaCartaoComponent]
    });
    fixture = TestBed.createComponent(SolicitaCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
