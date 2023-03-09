import {TestBed} from '@angular/core/testing';

import {SubjectMockService} from './subject-mock.service';

describe('SubjectMockService', () => {
  let service: SubjectMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
