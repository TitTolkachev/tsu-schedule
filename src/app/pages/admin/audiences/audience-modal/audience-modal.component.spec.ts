import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AudienceModalComponent} from './audience-modal.component';

describe('AudienceModalComponent', () => {
  let component: AudienceModalComponent;
  let fixture: ComponentFixture<AudienceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
