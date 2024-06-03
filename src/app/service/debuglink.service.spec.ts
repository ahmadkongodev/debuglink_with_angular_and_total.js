import { TestBed } from '@angular/core/testing';

import { DebuglinkService } from './debuglink.service';

describe('DebuglinkService', () => {
  let service: DebuglinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebuglinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
