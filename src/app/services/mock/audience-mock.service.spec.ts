import {TestBed} from '@angular/core/testing';

import {AudienceMockService} from './audience-mock.service';

describe('AudienceMockService', () => {
  let service: AudienceMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudienceMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
