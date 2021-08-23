import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadesSideMenuComponent } from './universidades-side-menu.component';

describe('UniversitySideMenuComponent', () => {
  let component: UniversidadesSideMenuComponent;
  let fixture: ComponentFixture<UniversidadesSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadesSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
