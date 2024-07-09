import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemariosComponent } from './temarios.component';

describe('TemariosComponent', () => {
  let component: TemariosComponent;
  let fixture: ComponentFixture<TemariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
