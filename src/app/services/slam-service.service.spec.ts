import { TestBed } from '@angular/core/testing';

import { SlamServiceService } from './slam-service.service';

describe('SlamServiceService', () => {
  let service: SlamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
