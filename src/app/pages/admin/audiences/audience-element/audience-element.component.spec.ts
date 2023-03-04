import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AudienceElementComponent} from './audience-element.component';

describe('AudienceElementComponent', () => {
  let component: AudienceElementComponent;
  let fixture: ComponentFixture<AudienceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
