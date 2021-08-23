import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresCrearComponent } from './professor-create.component';

describe('ProfesoresCrearComponent', () => {
  let component: ProfesoresCrearComponent;
  let fixture: ComponentFixture<ProfesoresCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
