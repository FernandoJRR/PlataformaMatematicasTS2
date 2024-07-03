import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioComponent } from './ejercicio.component';

describe('EjercicioComponent', () => {
  let component: EjercicioComponent;
  let fixture: ComponentFixture<EjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
