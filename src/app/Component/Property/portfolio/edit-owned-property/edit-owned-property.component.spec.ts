import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOwnedPropertyComponent } from './edit-owned-property.component';

describe('EditOwnedPropertyComponent', () => {
  let component: EditOwnedPropertyComponent;
  let fixture: ComponentFixture<EditOwnedPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOwnedPropertyComponent]
    });
    fixture = TestBed.createComponent(EditOwnedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
