import { TestBed } from '@angular/core/testing';

import { Penjumlahan } from './penjumlahan';

describe('Penjumlahan', () => {
  let service: Penjumlahan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Penjumlahan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
