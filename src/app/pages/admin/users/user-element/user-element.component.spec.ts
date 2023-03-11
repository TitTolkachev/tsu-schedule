import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserElementComponent} from './user-element.component';

describe('PersonComponent', () => {
  let component: UserElementComponent;
  let fixture: ComponentFixture<UserElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
