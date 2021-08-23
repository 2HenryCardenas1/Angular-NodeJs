import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadAdminComponent } from './universidad-admin.component';

describe('UniversidadAdminComponent', () => {
  let component: UniversidadAdminComponent;
  let fixture: ComponentFixture<UniversidadAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
