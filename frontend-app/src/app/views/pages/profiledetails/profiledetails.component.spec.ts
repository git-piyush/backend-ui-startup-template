import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledetailsComponent } from './profiledetails.component';

describe('ProfiledetailsComponent', () => {
  let component: ProfiledetailsComponent;
  let fixture: ComponentFixture<ProfiledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiledetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiledetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
