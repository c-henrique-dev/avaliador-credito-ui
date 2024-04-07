import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNormalComponent } from './input-normal.component';

describe('InputNormalComponent', () => {
  let component: InputNormalComponent;
  let fixture: ComponentFixture<InputNormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNormalComponent]
    });
    fixture = TestBed.createComponent(InputNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
