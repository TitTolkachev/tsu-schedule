import {TestBed} from '@angular/core/testing';

import {ScheduleMockService} from './schedule-mock.service';

describe('ScheduleMockService', () => {
  let service: ScheduleMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
