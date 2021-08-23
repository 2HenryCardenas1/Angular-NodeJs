import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesDetalleComponent } from './universidades-detail.component';

describe('UniversityDetailComponent', () => {
  let component: UniversidadesDetalleComponent;
  let fixture: ComponentFixture<UniversidadesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
