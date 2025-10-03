import { TestBed } from '@angular/core/testing';

import { Segitiga } from './segitiga';

describe('Segitiga', () => {
  let service: Segitiga;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Segitiga);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
