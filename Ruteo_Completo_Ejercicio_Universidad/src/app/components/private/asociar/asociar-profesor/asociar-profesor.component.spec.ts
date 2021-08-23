import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarProfesorComponent } from './asociar-profesor.component';

describe('AsociarProfesorComponent', () => {
  let component: AsociarProfesorComponent;
  let fixture: ComponentFixture<AsociarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
