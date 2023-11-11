import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDropdownComponent } from './district-dropdown.component';

describe('DistrictDropdownComponent', () => {
  let component: DistrictDropdownComponent;
  let fixture: ComponentFixture<DistrictDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictDropdownComponent]
    });
    fixture = TestBed.createComponent(DistrictDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
