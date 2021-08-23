import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresAdminComponent } from './professor-admin.component';

describe('ProfesoresAdminComponent', () => {
  let component: ProfesoresAdminComponent;
  let fixture: ComponentFixture<ProfesoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
