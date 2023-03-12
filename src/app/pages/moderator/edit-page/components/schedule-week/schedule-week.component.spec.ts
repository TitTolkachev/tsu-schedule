import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleWeekComponent } from './schedule-week.component';

describe('ScheduleWeekComponent', () => {
  let component: ScheduleWeekComponent;
  let fixture: ComponentFixture<ScheduleWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
