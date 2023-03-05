import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCellDayComponent } from './schedule-cell-day.component';

describe('ScheduleCellDayComponent', () => {
  let component: ScheduleCellDayComponent;
  let fixture: ComponentFixture<ScheduleCellDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleCellDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleCellDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
