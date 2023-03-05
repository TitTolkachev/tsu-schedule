import {TestBed} from '@angular/core/testing';

import {TeacherMockService} from './teacher-mock.service';

describe('TeacherMockService', () => {
  let service: TeacherMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
