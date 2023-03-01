import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderAdminPagesComponent} from './header-admin-pages.component';

describe('HeaderAdminPagesComponent', () => {
  let component: HeaderAdminPagesComponent;
  let fixture: ComponentFixture<HeaderAdminPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdminPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
