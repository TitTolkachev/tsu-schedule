import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RejectComponent} from './reject.component';

describe('RejectComponent', () => {
  let component: RejectComponent;
  let fixture: ComponentFixture<RejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
