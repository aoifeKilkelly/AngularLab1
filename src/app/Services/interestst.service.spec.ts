import { TestBed } from '@angular/core/testing';

import { IntereststService } from './interestst.service';

describe('IntereststService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntereststService = TestBed.get(IntereststService);
    expect(service).toBeTruthy();
  });
});
