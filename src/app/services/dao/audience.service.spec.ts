import {TestBed} from '@angular/core/testing';

import {AudienceService} from './audience.service';

describe('AudienceService', () => {
  let service: AudienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
