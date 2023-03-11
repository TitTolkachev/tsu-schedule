import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePairComponent } from './schedule-pair.component';

describe('SchedulePairComponent', () => {
  let component: SchedulePairComponent;
  let fixture: ComponentFixture<SchedulePairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
