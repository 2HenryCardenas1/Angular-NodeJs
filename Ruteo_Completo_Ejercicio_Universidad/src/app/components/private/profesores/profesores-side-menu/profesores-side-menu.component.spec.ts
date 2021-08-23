import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresSideMenuComponent } from './profesores-side-menu.component';

describe('ProfessorSideMenuComponent', () => {
  let component: ProfesoresSideMenuComponent;
  let fixture: ComponentFixture<ProfesoresSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
