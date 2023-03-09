import {TestBed} from '@angular/core/testing';

import {EditPageService} from './edit-page.service';

describe('EditPageService', () => {
  let service: EditPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
