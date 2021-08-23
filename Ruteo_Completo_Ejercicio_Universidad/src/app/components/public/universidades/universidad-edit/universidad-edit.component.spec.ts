import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadEditComponent } from './universidad-edit.component';

describe('UniversidadEditComponent', () => {
  let component: UniversidadEditComponent;
  let fixture: ComponentFixture<UniversidadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
