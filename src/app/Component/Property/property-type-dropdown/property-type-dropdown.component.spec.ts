import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypeDropdownComponent } from './property-type-dropdown.component';

describe('PropertyTypeDropdownComponent', () => {
  let component: PropertyTypeDropdownComponent;
  let fixture: ComponentFixture<PropertyTypeDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyTypeDropdownComponent]
    });
    fixture = TestBed.createComponent(PropertyTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
