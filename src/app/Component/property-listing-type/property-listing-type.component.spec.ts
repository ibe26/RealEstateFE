import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingTypeComponent } from './property-listing-type.component';

describe('PropertyListingTypeComponent', () => {
  let component: PropertyListingTypeComponent;
  let fixture: ComponentFixture<PropertyListingTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyListingTypeComponent]
    });
    fixture = TestBed.createComponent(PropertyListingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
