import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadListarComponent } from './universidad-listar.component';

describe('UniversidadListarComponent', () => {
  let component: UniversidadListarComponent;
  let fixture: ComponentFixture<UniversidadListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
