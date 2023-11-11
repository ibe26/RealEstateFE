import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterDropdownComponent } from './quarter-dropdown.component';

describe('QuarterDropdownComponent', () => {
  let component: QuarterDropdownComponent;
  let fixture: ComponentFixture<QuarterDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterDropdownComponent]
    });
    fixture = TestBed.createComponent(QuarterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
