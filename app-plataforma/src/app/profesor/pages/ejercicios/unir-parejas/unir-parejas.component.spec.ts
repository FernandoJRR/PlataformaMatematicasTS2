import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirParejasComponent } from './unir-parejas.component';

describe('UnirParejasComponent', () => {
  let component: UnirParejasComponent;
  let fixture: ComponentFixture<UnirParejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnirParejasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnirParejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
