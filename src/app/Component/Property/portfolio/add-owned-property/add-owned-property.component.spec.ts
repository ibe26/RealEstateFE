import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnedPropertyComponent } from './add-owned-property.component';

describe('AddOwnedPropertyComponent', () => {
  let component: AddOwnedPropertyComponent;
  let fixture: ComponentFixture<AddOwnedPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOwnedPropertyComponent]
    });
    fixture = TestBed.createComponent(AddOwnedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
