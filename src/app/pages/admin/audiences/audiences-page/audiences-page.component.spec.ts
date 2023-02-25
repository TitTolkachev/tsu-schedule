import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencesPageComponent } from './audiences-page.component';

describe('AudiencesPageComponent', () => {
  let component: AudiencesPageComponent;
  let fixture: ComponentFixture<AudiencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiencesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
