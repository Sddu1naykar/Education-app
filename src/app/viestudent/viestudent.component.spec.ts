import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViestudentComponent } from './viestudent.component';

describe('ViestudentComponent', () => {
  let component: ViestudentComponent;
  let fixture: ComponentFixture<ViestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
