import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkscardComponent } from './markscard.component';

describe('MarkscardComponent', () => {
  let component: MarkscardComponent;
  let fixture: ComponentFixture<MarkscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkscardComponent]
    });
    fixture = TestBed.createComponent(MarkscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
