import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsPageComponent } from './subjects-page.component';

describe('SubjectsPageComponent', () => {
  let component: SubjectsPageComponent;
  let fixture: ComponentFixture<SubjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
