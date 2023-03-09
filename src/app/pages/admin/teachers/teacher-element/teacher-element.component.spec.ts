import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherElementComponent} from './teacher-element.component';

describe('TeacherElementComponent', () => {
  let component: TeacherElementComponent;
  let fixture: ComponentFixture<TeacherElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
