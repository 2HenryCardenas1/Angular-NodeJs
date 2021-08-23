import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesPrincipalComponent } from './universidades-principal.component';

describe('UniversityPrincipalComponent', () => {
  let component: UniversidadesPrincipalComponent;
  let fixture: ComponentFixture<UniversidadesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadesPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
