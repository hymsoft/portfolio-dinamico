import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadItemComponent } from './habilidad-item.component';

describe('HabilidadesComponent', () => {
  let component: HabilidadItemComponent;
  let fixture: ComponentFixture<HabilidadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabilidadItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HabilidadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
