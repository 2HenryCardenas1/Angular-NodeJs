import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzComponent } from './mz.component';

describe('MzComponent', () => {
  let component: MzComponent;
  let fixture: ComponentFixture<MzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
