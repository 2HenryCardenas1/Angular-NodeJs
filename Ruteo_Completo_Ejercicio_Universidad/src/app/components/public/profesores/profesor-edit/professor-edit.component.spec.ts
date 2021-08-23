import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresEditComponent } from './professor-edit.component';

describe('ProfesoresEditComponent', () => {
  let component: ProfesoresEditComponent;
  let fixture: ComponentFixture<ProfesoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
