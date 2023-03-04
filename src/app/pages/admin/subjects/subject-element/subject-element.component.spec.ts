import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubjectElementComponent} from './subject-element.component';

describe('SubjectElementComponent', () => {
  let component: SubjectElementComponent;
  let fixture: ComponentFixture<SubjectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
