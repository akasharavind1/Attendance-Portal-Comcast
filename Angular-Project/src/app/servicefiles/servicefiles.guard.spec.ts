import { TestBed } from '@angular/core/testing';

import { ServicefilesGuard } from './servicefiles.guard';

describe('ServicefilesGuard', () => {
  let guard: ServicefilesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServicefilesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
