import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleErrorComponent} from './schedule-error.component';

describe('ScheduleErrorComponent', () => {
  let component: ScheduleErrorComponent;
  let fixture: ComponentFixture<ScheduleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
