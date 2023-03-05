import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonStudentComponent} from './person-student.component';

describe('PersonStudentComponent', () => {
  let component: PersonStudentComponent;
  let fixture: ComponentFixture<PersonStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
