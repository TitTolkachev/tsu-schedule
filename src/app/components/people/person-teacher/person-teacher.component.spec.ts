import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonTeacherComponent} from './person-teacher.component';

describe('PersonTeacherComponent', () => {
  let component: PersonTeacherComponent;
  let fixture: ComponentFixture<PersonTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
