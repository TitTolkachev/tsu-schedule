import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestChangeGroupComponent} from './request-change-group.component';

describe('RequestChangeGroupComponent', () => {
  let component: RequestChangeGroupComponent;
  let fixture: ComponentFixture<RequestChangeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestChangeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
