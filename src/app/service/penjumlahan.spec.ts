import { TestBed } from '@angular/core/testing';

import { Penjumlahan1 } from './penjumlahan';

describe('Penjumlahan', () => {
  let service: Penjumlahan1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Penjumlahan1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
