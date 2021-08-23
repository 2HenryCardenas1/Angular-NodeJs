import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresPrincipalComponent } from './professor-principal.component';

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
