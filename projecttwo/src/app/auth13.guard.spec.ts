import { TestBed } from '@angular/core/testing';

import { Auth13Guard } from './auth13.guard';

describe('Auth13Guard', () => {
  let guard: Auth13Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth13Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
