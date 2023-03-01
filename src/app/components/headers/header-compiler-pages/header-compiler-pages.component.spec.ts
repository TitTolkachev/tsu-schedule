import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompilerPagesComponent } from './header-compiler-pages.component';

describe('HeaderCompilerPagesComponent', () => {
  let component: HeaderCompilerPagesComponent;
  let fixture: ComponentFixture<HeaderCompilerPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCompilerPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompilerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
