import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoClienteComponent } from './situacao-cliente.component';

describe('SituacaoClienteComponent', () => {
  let component: SituacaoClienteComponent;
  let fixture: ComponentFixture<SituacaoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituacaoClienteComponent]
    });
    fixture = TestBed.createComponent(SituacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
