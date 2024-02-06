import { TestBed } from '@angular/core/testing';

import { PractService } from './pract.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PractService', () => {
  let service: PractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
