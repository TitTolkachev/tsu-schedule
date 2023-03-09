import { TestBed } from '@angular/core/testing';

import { GroupMockService } from './group-mock.service';

describe('GroupMockService', () => {
  let service: GroupMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
