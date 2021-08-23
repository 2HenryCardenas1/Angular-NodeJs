import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadCreateComponent } from './universidad-create.component';

describe('UniversidadCreateComponent', () => {
  let component: UniversidadCreateComponent;
  let fixture: ComponentFixture<UniversidadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversidadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
