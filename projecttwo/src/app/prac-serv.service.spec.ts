import { TestBed } from '@angular/core/testing';

import { PracServService } from './prac-serv.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PracServService', () => {
  let service: PracServService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PracServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
