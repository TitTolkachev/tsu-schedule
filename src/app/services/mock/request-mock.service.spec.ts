import {TestBed} from '@angular/core/testing';

import {RequestMockService} from './request-mock.service';

describe('RequestMockService', () => {
  let service: RequestMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
