import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatSystemsDropdownComponent } from './heat-systems-dropdown.component';

describe('HeatSystemsDropdownComponent', () => {
  let component: HeatSystemsDropdownComponent;
  let fixture: ComponentFixture<HeatSystemsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatSystemsDropdownComponent]
    });
    fixture = TestBed.createComponent(HeatSystemsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
