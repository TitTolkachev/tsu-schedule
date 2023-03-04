import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestRegistrationComponent} from './request-registration.component';

describe('RequestComponent', () => {
  let component: RequestRegistrationComponent;
  let fixture: ComponentFixture<RequestRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
