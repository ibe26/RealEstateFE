import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedPropertyCardComponent } from './owned-property-card.component';

describe('OwnedPropertyCardComponent', () => {
  let component: OwnedPropertyCardComponent;
  let fixture: ComponentFixture<OwnedPropertyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnedPropertyCardComponent]
    });
    fixture = TestBed.createComponent(OwnedPropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
