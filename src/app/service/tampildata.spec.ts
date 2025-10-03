import { TestBed } from '@angular/core/testing';

import { Tampildata } from './tampildata';

describe('Tampildata', () => {
  let service: Tampildata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tampildata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
