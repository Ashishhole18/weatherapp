import { TestBed } from '@angular/core/testing';

import { CitywiseService } from './citywise.service';

describe('CitywiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitywiseService = TestBed.get(CitywiseService);
    expect(service).toBeTruthy();
  });
});
