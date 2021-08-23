import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresPrincipalComponent } from './profesores-principal.component';

describe('ProfesoresPrincipalComponent', () => {
  let component: ProfesoresPrincipalComponent;
  let fixture: ComponentFixture<ProfesoresPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
