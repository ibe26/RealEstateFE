import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingTypeDropdownComponent } from './property-listing-type-dropdown.component';

describe('PropertyListingTypeDropdownComponent', () => {
  let component: PropertyListingTypeDropdownComponent;
  let fixture: ComponentFixture<PropertyListingTypeDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyListingTypeDropdownComponent]
    });
    fixture = TestBed.createComponent(PropertyListingTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
