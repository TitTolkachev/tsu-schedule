import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConfirmComponent } from './schedule-confirm.component';

describe('ScheduleConfirmComponent', () => {
  let component: ScheduleConfirmComponent;
  let fixture: ComponentFixture<ScheduleConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
