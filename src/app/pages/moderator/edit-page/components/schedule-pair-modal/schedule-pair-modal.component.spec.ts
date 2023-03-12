import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePairModalComponent } from './schedule-pair-modal.component';

describe('SchedulePairModalComponent', () => {
  let component: SchedulePairModalComponent;
  let fixture: ComponentFixture<SchedulePairModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePairModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePairModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
