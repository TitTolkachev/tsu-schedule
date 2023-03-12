import {TestBed} from '@angular/core/testing';

import {LessonEditService} from './lesson-edit.service';

describe('LessonEditService', () => {
  let service: LessonEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
