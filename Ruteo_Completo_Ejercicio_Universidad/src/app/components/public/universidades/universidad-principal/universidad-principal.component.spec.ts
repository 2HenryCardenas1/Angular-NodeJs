import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadPrincipalComponent } from './universidad-principal.component';

describe('UniversidadPrincipalComponent', () => {
  let component: UniversidadPrincipalComponent;
  let fixture: ComponentFixture<UniversidadPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
