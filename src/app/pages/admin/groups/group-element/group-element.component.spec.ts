import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupElementComponent} from './group-element.component';

describe('GroupElementComponent', () => {
  let component: GroupElementComponent;
  let fixture: ComponentFixture<GroupElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
