import {TestBed} from '@angular/core/testing';

import {LessonMockService} from './lesson-mock.service';

describe('LessonMockService', () => {
  let service: LessonMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
